import colorConvert from '../colorConvert.js';

let picker = (() => {
    const _color = Symbol('color');
    const _point = Symbol('point');
    const _pixelize = Symbol('pixelize');

    return class {
        constructor({ element, pixelize, click }) {
            this[_pixelize] = Math.abs(pixelize);
            this[_point] = { x: 0, y: 0 };

            this.element = ((value) => {
                if (typeof value === 'string') {
                    return document.querySelector(value);
                } else if (value instanceof Element) {
                    return value;
                }

                return null;
            })(element);

            this.canvas = document.createElement('canvas');
            this.selector = document.createElement('div');
            this.selector.classList.add('selector');

            this.element.append(this.canvas, this.selector);

            this.canvas.width = this.element.clientWidth;
            this.canvas.height = this.element.clientHeight;

            this.canvas.addEventListener("click", (event) => {
                this[_point] = {
                    x: event.offsetX,
                    y: event.offsetY
                };

                this.setSelectorPosition(this[_point]);
                let color = this.pointColor(this[_point]);
                this.setColor(color);

                click(this[_point], color);
            }, false);
        }

        size() {
            return {
                width: this.canvas.width,
                height: this.canvas.height
            }
        }

        draw(value) {
            const ctx = this.canvas.getContext("2d");
            const { width, height } = this.size();

            ctx.clearRect(0, 0, width, height);

            let pattern = this.getPattern(value);
            if (pattern) {
                ctx.imageSmoothingEnabled = !this.pixelize;
                ctx.drawImage(pattern, 0, 0, width, height);
            }

            return ctx;
        }

        getPattern(value) {

        }

        position(color) {
            return {
                x: 0,
                y: 0
            }
        }

        setSelectorPosition(point) {
            this[_point] = { x: point.x, y: point.y };
            let color = this.pointColor(point);
            this.selector.style.background = color;
        }

        pointColor(point) {
            let x = Math.min(point.x, this.canvas.width - 1);
            let y = Math.min(point.y, this.canvas.height - 1);

            let ctx = this.canvas.getContext("2d");
            let rgba = ctx.getImageData(x, y, 1, 1).data;

            return colorConvert({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] }).hex();
        }

        setColor(value) {
            this[_color] = value;
            this.draw(this[_color]);
            this.selector.style.background = this.pointColor(this[_point]);
        }

        pointByPixelize(point) {
            let { x, y } = point;

            if (this.pixelize) {
                const { width, height } = this.size();
                let dx = width / this.pixelize;
                let dy = height / this.pixelize;
                x = Math.floor(x / dx) * dx + dx / 2;
                y = Math.floor(y / dy) * dy + dy / 2;
            }

            return { x, y };
        }

        get point() {
            return this[_point];
        }

        get pixelize() {
            return this[_pixelize];
        }

        get color() { return this[_color]; }
        set color(value) {
            this[_color] = value;
            this.setColor(value);

            let point = this.position(value);
            this.setSelectorPosition(point);
        }
    }
})();



class picker1D extends picker {
    setSelectorPosition(point) {
        super.setSelectorPosition(point);

        let { x, y } = this.pointByPixelize(point);

        if (this.horizontal) {
            this.selector.style.left = x + "px";
        } else {
            this.selector.style.top = y + "px";
        }
    }

    get horizontal() {
        return this.element.classList.contains('horizontal');
    }
}

class picker2D extends picker {
    setSelectorPosition(point) {
        super.setSelectorPosition(point);

        let { x, y } = this.pointByPixelize(point);

        this.selector.style.left = x + "px";
        this.selector.style.top = y + "px";
    }
}

export { picker1D, picker2D };