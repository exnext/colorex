import basePicker from './basePicker.js';
import colorConvert from './colorConvert.js';

function rainbowPicker(element, horizontal) {
    basePicker.call(this, element, horizontal);

    const colors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];

    function draw() {
        let ctx = super.draw();
        
        let clg = horizontal ?
            ctx.createLinearGradient(0, 0, element.width, 0) :
            ctx.createLinearGradient(0, 0, 0, element.height);

        for (let x = 0; x < colors.length; x++) {
            clg.addColorStop(x / (colors.length - 1), colors[x]);
        }

        ctx.fillStyle = clg;
        ctx.fillRect(0, 0, element.width, element.height);
    }

    function click(x, y) {

    }

    function position(color) {
        const { width, height } = size();

        let { degree, sorted, index, getMeasurement } = (() => {
            const degree = horizontal ? width / (rainbowColors.length - 1) : height / (rainbowColors.length - 1);
            const bitR = rainbowColors.map((x) => colorConvert(x).bits().bit_rgb);
            const sorted = colorConvert(color).levels();
            const bit = colorConvert(color).bits();
            const index = bitR.indexOf(bit.bit_rgb);

            function getMeasurement(rgb) {
                let color = colorConvert(rgb).hex(config.alphablend);
                let sorted = colorConvert(rgb).bits();
                let index = bitR.indexOf(sorted.bit_rgb);

                return { color, sorted, index }
            }

            return { degree, sorted, index, getMeasurement }
        })();

        let rgb = {};
        rgb[sorted.high.key] = 255;
        rgb[sorted.low.key] = 0;

        rgb[sorted.mid.key] = 0;
        let base = getMeasurement(rgb);

        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
        let calc = getMeasurement(rgb);

        rgb[sorted.mid.key] = 255;
        let indirect = getMeasurement(rgb);

        let delta = 0;
        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;

        //todo: must be changed
        if (base.index > index) {
            delta = degree * (rgb[sorted.mid.key] - sorted.mid.value) / 255;
        } else if (base.index < index) {
            delta = - (degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255);
        } else {
            delta = degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255;
        }

        if (calc.color == indirect.color && sorted.mid.value > 127 && sorted.mid.value < 255 && index - base.index === 1
            || calc.color == base.color && sorted.mid.value && sorted.mid.value < 128 && index > indirect.index) {
            delta = -delta;
        } else if (calc.color == base.color && sorted.mid.value && sorted.mid.value < 128 && index === 0 && indirect.index === 5) {
            index = indirect.index;
            delta = degree - delta;
        }

        if (horizontal) {
            return {
                y: height,
                x: degree * index + delta
            };
        } else {
            return {
                y: degree * index + delta,
                x: width
            };
        }
    }
}
rainbowPicker.prototype = Object.create(basePicker.prototype);