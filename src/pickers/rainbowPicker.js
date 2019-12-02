import { picker1D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class rainbowPicker extends picker1D {
    constructor({ element, horizontal, click }) {
        super({ element, click });

        this.draw();
    }

    get colors() {
        return ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
    }

    draw() {
        const ctx = super.draw();
        const { width, height } = this.size();
        
        let clg = this.horizontal ?
            ctx.createLinearGradient(0, 0, width, 0) :
            ctx.createLinearGradient(0, 0, 0, height);

        for (let x = 0; x < this.colors.length; x++) {
            clg.addColorStop(x / (this.colors.length - 1), this.colors[x]);
        }

        ctx.fillStyle = clg;
        ctx.fillRect(0, 0, width, height);
    }

    position(color) {
        const { width, height } = this.size();

        let { degree, sorted, index, getMeasurement } = (() => {
            const degree = this.horizontal ? width / (this.colors.length - 1) : height / (this.colors.length - 1);
            const bitR = this.colors.map((x) => colorConvert(x).bits().bit_rgb);
            const sorted = colorConvert(color).levels();
            const bit = colorConvert(color).bits();
            const index = bitR.indexOf(bit.bit_rgb);

            function getMeasurement(rgb) {
                let color = colorConvert(rgb).hex();
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

        if (this.horizontal) {
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

    // setSelectorPosition(point) {
    //     super.setSelectorPosition(point);
    //     let color = this.pointColor(point);
    //     this.selector.style.background = color;
    // }

    set color(value) {
        let color = colorConvert(value).hex(false);
        let baseColor = colorConvert(color).sourceColor();
        baseColor = colorConvert(baseColor).hex(false);        
        let point = this.position(baseColor);
        // let color2 = this.pointColor(point);
        this.setSelectorPosition(point);
        // this.selector.style.background = baseColor;

        super.color = value;
        this.selector.style.background = baseColor;
    }
}

export default rainbowPicker;