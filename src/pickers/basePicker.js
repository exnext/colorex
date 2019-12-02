import colorConvert from '../colorConvert.js';

let basePicker = (() => {
    const _color = Symbol('color');
    const _point = Symbol('point');
    
    return class {
        constructor({ element, click }) {
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
    
                this.setSelectorPosition(this.point);
    
                let color = this.pointColor(this.point);
    
                click(this.point, color);
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
            return ctx;
        }
    
        position(color) {
            return {
                x: 0,
                y: 0
            }
        }
    
        setSelectorPosition(point) {
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
            
            // let color = this.pointColor(this.point);
            this.selector.style.background = this.pointColor(this.point); 
        }

        get point() { return this[_point]; }
    
        get color() { return this[_color]; }
        set color(value) {
            this[_color] = value;
            this.setColor(value);
            // this.baseColor = value;
            // this.draw(this.baseColor);
        }
    }
})();



class picker1D extends basePicker {
    constructor(config) {
        super(config);
        this.horizontal = config.horizontal;
    }

    setSelectorPosition(point) {
        super.setSelectorPosition(point);

        if (this.horizontal) {
            this.selector.style.left = point.x + "px";
        } else {
            this.selector.style.top = point.y + "px";
        }
    }
}

class picker2D extends basePicker {
    constructor(config) {
        super(config);
    }

    setSelectorPosition(point) {
        super.setSelectorPosition(point);
        
        this.selector.style.left = point.x + "px";
        this.selector.style.top = point.y + "px";
    }
}

export { picker1D, picker2D };