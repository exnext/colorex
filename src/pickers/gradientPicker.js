import basePicker from './basePicker.js';
import colorConvert from './colorConvert.js';

function gradientPicker(element, horizontal) {
    basePicker.call(this, element, horizontal);

    function draw(color) {
        const ctx = super.draw();

        const clgWhite = ctx.createLinearGradient(0, 0, element.width, 0);
        clgWhite.addColorStop(0, "white");
        clgWhite.addColorStop(1, color);
        ctx.fillStyle = clgWhite;
        ctx.fillRect(0, 0, element.width, element.height);

        const clgBlack = ctx.createLinearGradient(0, element.height, 0, 0);
        clgBlack.addColorStop(0, "black");
        clgBlack.addColorStop(1, "transparent");
        ctx.fillStyle = clgBlack;
        ctx.fillRect(0, 0, element.width, element.height);
    }

    function click(x, y) {

    }

    function position(color) {
        const { width, height } = size();
        const sorted = colorConvert(color).levels();

        return {
            y: Math.min(height - height * sorted.high.value / 255, height - 1),
            x: Math.min(width - width * sorted.low.value / sorted.high.value, width - 1)
        };
    }
}
gradientPicker.prototype = Object.create(basePicker.prototype);