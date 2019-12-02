import { picker2D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class gradientPicker extends picker2D {
    constructor({ element, click }) {
        super({ element, click });
    }

    draw(value) {
        const ctx = super.draw(value);
        const { width, height } = this.size();

        let color = colorConvert(value).hex(false);
        color = colorConvert(color).sourceColor();
        color = colorConvert(color).hex(false);

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

    get color() {
        return super.color;
    }
    set color(value) {
        super.color = value;
        let point = this.position(value);
        this.setSelectorPosition(point);
    }
}

export default gradientPicker;