import { picker1D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class alphaPicker extends picker1D {
    constructor(config) {
        super(config);

        (() => {
            const alphaBackground = getComputedStyle(this.canvas).getPropertyValue('background-color');
    
            const bg = document.createElement('canvas');
            bg.width = this.horizontal ? this.canvas.height : this.canvas.width;
            bg.height = bg.width;
    
            const ctx = bg.getContext("2d");
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, bg.width, bg.height);
            ctx.fillStyle = alphaBackground;
            ctx.fillRect(0, 0, bg.width / 2, bg.width / 2);
            ctx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);
    
            this.canvas.style.background = 'url(' + bg.toDataURL("image/png") + ')';
        })();
    }

    getPattern(value) {
        const { width, height } = this.size();
        let canvas = document.createElement('canvas');
        canvas.width = this.pixelize || width;
        canvas.height = this.pixelize || height;
        let ctx = canvas.getContext("2d");

        let color = colorConvert(value).rgb();
        color = colorConvert(color).hex(false);
        
        let clg = this.horizontal ?
            ctx.createLinearGradient(canvas.width, 0, 0, 0) :
            ctx.createLinearGradient(0, canvas.height, 0, 0)
        clg.addColorStop(0, "transparent");
        clg.addColorStop(1, color);
        ctx.fillStyle = clg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
    }

    position(color) {
        const { width, height } = this.size();
        const alphaValue = colorConvert(color).alpha();

        if (this.horizontal) {
            return {
                y: height / 2,
                x: Math.round(width - width * alphaValue / 255)
            };
        } else {
            return {
                y: Math.round(height - height * alphaValue / 255),
                x: width / 2
            };
        }
    }

    pointColor(point) {
        return this.color;
    }

    setColor(value) {
        let color = colorConvert(value).rgb();
        super.setColor(colorConvert(color).hex(false));
    }

    alphaValue() {
        let { x, y } = this.point;
        let ctx = this.canvas.getContext("2d");
        let rgba = ctx.getImageData(x, y, 1, 1).data;
        return rgba[3];
    }
}

export default alphaPicker;