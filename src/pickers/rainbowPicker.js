import { picker1D } from './basePicker.js';
import colorConvert from '../colorConvert.js';

class rainbowPicker extends picker1D {
    constructor(config) {
        super(config);

        this.draw();
    }

    get colors() {
        return ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
    }

    getPattern(value) {
        const { width, height } = this.size();
        let canvas = document.createElement('canvas');
        canvas.width = this.pixelize || width;
        canvas.height = this.pixelize || height;
        let ctx = canvas.getContext("2d");
        
        let clg = this.horizontal ?
            ctx.createLinearGradient(0, 0, canvas.width, 0) :
            ctx.createLinearGradient(0, 0, 0, canvas.height);

        for (let x = 0; x < this.colors.length; x++) {
            clg.addColorStop(x / (this.colors.length - 1), this.colors[x]);
        }

        ctx.fillStyle = clg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
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

    get color() {
        return super.color;
    }
    set color(value) {
        let color = colorConvert(value).hex(false);
        color = colorConvert(color).sourceColor();
        color = colorConvert(color).hex(false);        
        let point = this.position(color);
        this.setSelectorPosition(point);
        super.color = color;
    }
}

export default rainbowPicker;