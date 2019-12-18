import { colorArray } from './colorNames.js';

function colorConvert(color) {
    let _rgba;

    const reColors = [
        {
            re: /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
            color: (value) => {
                let temp = value.slice(1, value.length);
                let result = temp.match(/.{1,2}/g);

                let alpha = parseInt(result[3], 16);
                if (isNaN(alpha)) {
                    alpha = 255;
                }

                return {
                    r: parseInt(result[0], 16),
                    g: parseInt(result[1], 16),
                    b: parseInt(result[2], 16),
                    a: alpha
                }
            }
        },
        //todo: must be changed
        //
        // {
        //     re: /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
        //     color: (value) => {
        //         let result = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.exec(value).slice(1);

        //         let alpha = parseInt(parseFloat(result[3]) * 255);
        //         if (isNaN(alpha)) {
        //             alpha = 255;
        //         }

        //         return {
        //             r: parseInt(result[0]),
        //             g: parseInt(result[1]),
        //             b: parseInt(result[2]),
        //             a: alpha
        //         }
        //     }
        // }
    ];

    if (typeof color === 'string') {
        for (let rec of reColors) {
            if (rec.re.test(color)) {
                _rgba = rec.color(color);
                break;
            }
        }

        _rgba = _rgba || (() => {
            let ctx = document.createElement('canvas').getContext('2d');
            ctx.rect(0, 0, 1, 1);
            ctx.clearRect(0, 0, 1, 1);
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
    } else {
        _rgba = Object.assign({ r: 0, g: 0, b: 0, a: 255 }, color);
    }

    Object.keys(_rgba).forEach((key) => _rgba[key] = Math.round(_rgba[key]));

    function red() {
        return _rgba.r;
    }

    function green() {
        return _rgba.g;
    }

    function blue() {
        return _rgba.b;
    }

    function alpha() {
        return _rgba.a || 255;
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

    function hex(withAlpha = true) {
        let color = '#' +
            _rgba.r.toString(16).padStart(2, '0') +
            _rgba.g.toString(16).padStart(2, '0') +
            _rgba.b.toString(16).padStart(2, '0');

        if (withAlpha) {
            color += (_rgba.a || 0).toString(16).padStart(2, '0');
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