import { colorArray } from './colorNames.js';

function colorConvert(color) {
    let _rgba = color;
    
    if (typeof color === 'string') {
        _rgba = (() => {
            let ctx = document.createElement('canvas').getContext('2d');
            ctx.beginPath();
            ctx.rect(0, 0, 1, 1);
            ctx.fillStyle = color;
            ctx.fill();
            let pixel = ctx.getImageData(0, 0, 1, 1);
    
            return {
                r: pixel.data[0],
                g: pixel.data[1],
                b: pixel.data[2],
                a: pixel.data[3]
            }
        })();
    }

    Object.keys(_rgba).forEach((key) => _rgba[key] = Math.floor(_rgba[key]));

    function red(r) {
        _rgba.r = r & 255 || _rgba.r;
        return _rgba.r;
    }

    function green(g) {
        _rgba.g = g & 255 || _rgba.g;
        return _rgba.g;
    }

    function blue(b) {
        _rgba.b = b & 255 || _rgba.b;
        return _rgba.b;
    }
    
    function alpha(a) {
        _rgba.a = a & 255 || _rgba.a;
        return _rgba.a;
    }

    function rgb() {
        return {
            r: _rgba.r,
            g: _rgba.g,
            b: _rgba.b
        }
    }

    function rgba() {
        return {
            r: _rgba.r,
            g: _rgba.g,
            b: _rgba.b,
            a: _rgba.a
        }
    }

    function hex(alpha = true) {
        let color = '#' +
            _rgba.r.toString(16).padStart(2, '0') +
            _rgba.g.toString(16).padStart(2, '0') +
            _rgba.b.toString(16).padStart(2, '0');

        if (alpha) {
            color += (_rgba.a || 255).toString(16).padStart(2, '0');
        }

        return color;
    }

    function name() {
        let color = colorArray.find((color) => color.value == hex(false));
        return color ? color.value : hex();
    }

    function bits() {      
        return {
            bit_r: (_rgba.r & 128) >> 7,
            bit_g: (_rgba.g & 128) >> 7,
            bit_b: (_rgba.b & 128) >> 7,
            bit_a: (_rgba.a & 128) >> 7,
            bit_rgb: ((_rgba.r & 128) >> 5) + ((_rgba.g & 128) >> 6) + ((_rgba.b & 128) >> 7),
            bit_rgba: ((_rgba.r & 128) >> 4) + ((_rgba.g & 128) >> 5) + ((_rgba.b & 128) >> 6) + ((_rgba.a & 128) >> 7)
        };
    }

    function levels() {
        let sorted = [];
        let temp = rgb();

        Object.keys(temp)
            .forEach((x) => sorted.push({ key: x, value: temp[x] }));

        sorted.sort((a, b) => {
            if (a.value < b.value) return 1;
            else if (a.value > b.value) return -1;
            return 0;
        });

        return {
            high: sorted[0],
            mid: sorted[1],
            low: sorted[2]
        };
    }

    function baseColor() {
        let sorted = levels();
        let rgb = {};

        rgb[sorted.high.key] = 255;
        rgb[sorted.mid.key] = sorted.mid.value === 255 ? 255 : 0;
        rgb[sorted.low.key] = 0;

        return colorConvert(rgb).hex();
    }

    function sourceColor() {
        let sorted = levels();
        let rgb = {};

        rgb[sorted.high.key] = 255;
        rgb[sorted.mid.key] = 255 * (sorted.mid.value - sorted.low.value) / (sorted.high.value - sorted.low.value) || 0;
        rgb[sorted.low.key] = 0;

        return colorConvert(rgb).hex();
    }


    return {
        red,
        green,
        blue,
        alpha,
        rgb,
        rgba,
        hex,
        name,
        bits,
        levels,
        baseColor,
        sourceColor
    };
}

export default colorConvert;