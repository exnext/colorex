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

    draw(value) {
        const ctx = super.draw(value);
        const { width, height } = this.size();

        let color = colorConvert(value).rgb();
        color = colorConvert(color).hex(false);
        
        let clg = this.horizontal ?
            ctx.createLinearGradient(width, 0, 0, 0) :
            ctx.createLinearGradient(0, height, 0, 0)
        clg.addColorStop(0, "transparent");
        clg.addColorStop(1, color);
        ctx.fillStyle = clg;
        ctx.fillRect(0, 0, width, height);
    }

    position(color) {
        const { width, height } = this.size();
        const alphaValue = colorConvert(color).alpha();

        if (this.horizontal) {
            return {
                y: height,
                x: Math.round(width - width * alphaValue / 255)
            };
        } else {
            return {
                y: Math.round(height - height * alphaValue / 255),
                x: width
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
        const { width, height } = this.size();
        if (this.horizontal) {
            return Math.round(255 - 255 * this.point.x / width);
        } else {
            return Math.round(255 - 255 * this.point.y / height);
        }
    }
}

export default alphaPicker;