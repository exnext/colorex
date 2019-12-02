import { picker2D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class gradientPicker extends picker2D {
    constructor({ element, click }) {
        super({ element, click });
    }

    draw(color) {
        const ctx = super.draw(color);
        const { width, height } = this.size();

        const clgWhite = ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        clgWhite.addColorStop(0, "white");
        clgWhite.addColorStop(1, color);
        ctx.fillStyle = clgWhite;
        ctx.fillRect(0, 0, width, height);

        const clgBlack = ctx.createLinearGradient(0, height, 0, 0);
        clgBlack.addColorStop(0, "black");
        clgBlack.addColorStop(1, "transparent");
        ctx.fillStyle = clgBlack;
        ctx.fillRect(0, 0, width, height);
    }

    position(color) {
        const { width, height } = this.size();
        const sorted = colorConvert(color).levels();

        return {
            y: Math.min(height - height * sorted.high.value / 255, height - 1),
            x: Math.min(width - width * sorted.low.value / sorted.high.value, width - 1)
        };
    }

    // setSelectorPosition(point) {
    //     super.setSelectorPosition(point);
    //     let color = this.pointColor(point);
    //     this.selector.style.background = color;
    // }

    setColor(value) {
        super.setColor(value);
        let color = this.pointColor(this.point);
        this.selector.style.background = color;
    }

    // get color() {
    //     return super.color;
    // }
    set color(value) {
        let color = colorConvert(value).hex(false);
        let baseColor = colorConvert(color).sourceColor();
        baseColor = colorConvert(baseColor).hex(false);
        // this.draw(baseColor);

        let point = this.position(value);
        this.setSelectorPosition(point);


        super.color = value;
        this.draw(baseColor);
        this.setColor(value);
        this.draw(baseColor);
    }
}

export default gradientPicker;