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

    function alpha() {
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

    return {
        alpha,
        rgb,
        rgba,
        hex,
        name
    };
}

export default colorConvert;