import { picker2D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class gradientPicker extends picker2D {
    getPattern(value) {
        const { width, height } = this.size();
        let canvas = document.createElement('canvas');
        canvas.width = this.pixelize || width;
        canvas.height = this.pixelize || height;
        let ctx = canvas.getContext("2d");

        let color = colorConvert(value).hex(false);
        color = colorConvert(color).sourceColor();
        color = colorConvert(color).hex(false);

        const clgWhite = ctx.createLinearGradient(0, 0, canvas.width, 0);
        clgWhite.addColorStop(0, "white");
        clgWhite.addColorStop(1, color);
        ctx.fillStyle = clgWhite;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const clgBlack = ctx.createLinearGradient(0, canvas.height, 0, 0);
        clgBlack.addColorStop(0, "black");
        clgBlack.addColorStop(1, "transparent");
        ctx.fillStyle = clgBlack;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
    }

    position(color) {
        const { width, height } = this.size();
        const sorted = colorConvert(color).levels();

        return {
            y: Math.min(height - height * sorted.high.value / 255, height - 1),
            x: Math.min(width - width * sorted.low.value / sorted.high.value, width - 1)
        };
    }
}

export default gradientPicker;