import basePicker from './basePicker.js';
import colorConvert from './colorConvert.js';

function alphaPicker(element, horizontal) {
    basePicker.call(this, element, horizontal);

    drawBackground();

    function draw(color) {
        let ctx = super.draw();

        let clg = horizontal ?
            ctx.createLinearGradient(0, 0, element.width, 0) :
            ctx.createLinearGradient(0, element.height, 0, 0)
        clg.addColorStop(0, "transparent");
        clg.addColorStop(1, color);
        ctx.fillStyle = clg;
        ctx.fillRect(0, 0, element.width, element.height);
    }

    function click(x, y) {

    }

    function position(color) {
        const { width, height } = size();
        const alphaValue = colorConvert(color).alpha();

        if (horizontal) {
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

    function drawBackground() {
        const alphaBackground = getComputedStyle(element).getPropertyValue('--alpha-background');

        const bg = document.createElement('canvas');
        bg.width = horizontal ?
            element.height :
            element.width;
        bg.height = bg.width;

        const ctx = bg.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, bg.width, bg.height);
        ctx.fillStyle = alphaBackground;
        ctx.fillRect(0, 0, bg.width / 2, bg.width / 2);
        ctx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);

        element.style.background = 'url(' + bg.toDataURL("image/png") + ')';
    }
}
alphaPicker.prototype = Object.create(basePicker.prototype);