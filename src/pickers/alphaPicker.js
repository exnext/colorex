import { picker1D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class alphaPicker extends picker1D {
    constructor({ element, horizontal, click }) {
        super({ element, click });

        (() => {
            const alphaBackground = getComputedStyle(element).getPropertyValue('--alpha-background');
    
            const bg = document.createElement('canvas');
            bg.width = horizontal ? this.canvas.height : this.canvas.width;
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

    draw(color) {
        const ctx = super.draw(color);
        const { width, height } = this.size();

        let clg = this.horizontal ?
            ctx.createLinearGradient(0, 0, width, 0) :
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
                x: width * alphaValue / 255
            };
        } else {
            return {
                y: height - height * alphaValue / 255,
                x: width
            };
        }
    }

    selectorPosition(point) {
        if (this.horizontal) {
            this.selector.style.left = point.x + "px";
        } else {
            this.selector.style.top = point.y + "px";
        }
    }

    setSelectorPosition(point) {
        if (this.horizontal) {
            this.selector.style.left = point.x + "px";
        } else {
            this.selector.style.top = point.y + "px";
        }
    }

    // get alpha() {
    //     // if (alphaDetail) {
    //     //     if (this.horizontal) {
    //     //         this.selector.style.left = alphaDetail.x + "px";
    //     //     } else {
    //     //         this.selector.style.top = alphaDetail.y + "px";
    //     //     }
    //     // }
    // }
    // set alpha(value) {
    //     // if (alphaDetail) {
    //     //     if (this.horizontal) {
    //     //         return Math.round(255 - 255 * alphaDetail.x / alpha.width); 
    //     //     } else {
    //     //         return Math.round(255 - 255 * alphaDetail.y / alpha.height);
    //     //     }
    //     // } else {
    //     //     return 255;
    //     // }
    // }

    setColor(value) {
        super.setColor(value);
    }

    set color(value) {
    //     this.draw(value);
        super.color = value;
        let point = this.position(value);
        this.setSelectorPosition(point);
        this.selector.style.background = value;

    //     super.color = value;
    }
}

export default alphaPicker;