import colorConvert from './colorConvert.js';

function colorex(config) {
    var gradientDetail = undefined;
    var rainbowDetail = undefined;
    
    const rainbowColors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
    Object.freeze(rainbowColors);

    function drawRainbowPicker(element) {
        var ctx = element.getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, 0, element.height);

        for (let x = 0; x < rainbowColors.length; x++) {
            grd.addColorStop(x / (rainbowColors.length - 1), rainbowColors[x]);
        }

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, element.width, element.height);
    };

    function drawGradientPicker(element, color) {
        var ctx = element.getContext("2d");
        ctx.clearRect(0, 0, element.width, element.height);

        var grdWhite = ctx.createLinearGradient(0, 0, element.width, 0);
        grdWhite.addColorStop(0, "white");
        grdWhite.addColorStop(1, color);
        ctx.fillStyle = grdWhite;
        ctx.fillRect(0, 0, element.width, element.height);

        var grdBlack = ctx.createLinearGradient(0, element.height, 0, 0);
        grdBlack.addColorStop(0, "black");
        grdBlack.addColorStop(1, "transparent");
        ctx.fillStyle = grdBlack;
        ctx.fillRect(0, 0, element.width, element.height);
    };

    function setGradient() {
        if (rainbowDetail) {
            if (!rainbowDetail.color) {
                var ctx = rainbowDetail.element.getContext("2d");
                var rgba = ctx.getImageData(rainbowDetail.x, rainbowDetail.y, 1, 1).data;
                rainbowDetail.color = colorConvert({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] }).hex(false);
            }

            drawGradientPicker(config.gradient, rainbowDetail.color);

            var selRainbow = document.getElementById('selRainbow');
            var top = rainbowDetail.y - selRainbow.offsetHeight / 2 + "px";

            selRainbow.style.top = top;
            selRainbow.style.background = rainbowDetail.color;

            setColor();
        }
    }

    function rainbowClick(event) {
        rainbowDetail = {
            element: this,
            x: event.offsetX,
            y: event.offsetY,
            color: undefined
        };

        if (gradientDetail) {
            gradientDetail.color = undefined;
        }

        setGradient();
    };

    function setColor() {
        if (gradientDetail) {
            if (!gradientDetail.color) {
                var ctx = gradientDetail.element.getContext("2d");
                var rgba = ctx.getImageData(gradientDetail.x, gradientDetail.y, 1, 1).data;
                gradientDetail.color = colorConvert({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] }).hex(false);
            }

            var selColor = document.getElementById('selColor');
            var left = gradientDetail.x - selColor.offsetWidth / 2 + 2 + "px";
            var top = gradientDetail.y - selColor.offsetHeight / 2 + 2 + "px";

            selColor.style.left = left;
            selColor.style.top = top;
            selColor.style.background = gradientDetail.color;

            if (config.onChange) {
                config.onChange(gradientDetail);
            }
        }
    };

    function gradientClick(event) {
        gradientDetail = {
            element: this,
            x: event.offsetX,
            y: event.offsetY,
            color: undefined
        };

        setColor();
    }

    function getSortedRgb(color) {
        var rgb = colorConvert(color).rgb();
        var sorted = [];

        Object.keys(rgb)
            .forEach((x) => sorted.push({ key: x, value: rgb[x] }));

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

    function getBaseColor(color) {
        let sorted = getSortedRgb(color);
        let rgb = {};

        rgb[sorted.high.key] = 255;
        rgb[sorted.mid.key] = 255 * (sorted.mid.value - sorted.low.value) / (sorted.high.value - sorted.low.value) || 0;
        rgb[sorted.low.key] = 0;

        return colorConvert(rgb).hex(false);
    }

    function calcRgbBit(color) {
        let rgb = colorConvert(color).rgb();

        return {
            bit_r: (rgb.r & 128) >> 7,
            bit_g: (rgb.g & 128) >> 7,
            bit_b: (rgb.b & 128) >> 7,
            bit_rgb: ((rgb.r & 128) >> 5) + ((rgb.g & 128) >> 6) + ((rgb.b & 128) >> 7)
        };
    }

    // function calcPosOnRainbow2(color) {
    //     const w = config.rainbow.width;
    //     const h = config.rainbow.height;
    //     const degree = h / (rainbowColors.length - 1);
    //     const bitR = rainbowColors.map(function (x) { return calcRgbBit(x).bit_rgb; });
    //     const sorted = getSortedRgb(color);
    //     const delta = degree * sorted.mid.value / 255;

    //     let bit = calcRgbBit(color);
    //     let index = bitR.indexOf(bit.bit_rgb);

    //     let rgb = {};
    //     rgb[sorted.high.key] = 255;
    //     rgb[sorted.low.key] = 0;

    //     rgb[sorted.mid.key] = 255;
    //     let indirectColor = colorConvert(rgb).hex(false);
    //     let indirectSorted = calcRgbBit(rgb); 
    //     let indirectIndex = bitR.indexOf(indirectSorted.bit_rgb);

    //     rgb[sorted.mid.key] = 0;
    //     let baseColor = colorConvert(rgb).hex(false);
    //     let baseSorted = calcRgbBit(rgb);
    //     let baseIndex = bitR.indexOf(baseSorted.bit_rgb);

    //     if (color !== baseColor && color !== indirectColor) {
    //         // index = indirectColor;

    //         // if (baseIndex > indirectIndex) {
    //         //     delta = -delta;
    //         // }
    //     }

    //     return {
    //         y: degree * index + delta,
    //         x: w / 2
    //     };
    // }

    function calcPosOnRainbow(color) {
        const w = config.rainbow.width;
        const h = config.rainbow.height;
        const degree = h / (rainbowColors.length - 1);
        const bitR = rainbowColors.map((x) => calcRgbBit(x).bit_rgb);
        const sorted = getSortedRgb(color);

        let bit = calcRgbBit(color);
        let index = bitR.indexOf(bit.bit_rgb);

        let rgb = {};
        rgb[sorted.high.key] = 255;
        rgb[sorted.low.key] = 0;

        rgb[sorted.mid.key] = 0;
        let baseColor = colorConvert(rgb).hex(false);
        let baseSorted = calcRgbBit(rgb);
        let baseIndex = bitR.indexOf(baseSorted.bit_rgb);

        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
        let calcColor = colorConvert(rgb).hex(false);
        let calcSorted = calcRgbBit(rgb);
        let calcIndex = bitR.indexOf(calcSorted.bit_rgb);

        rgb[sorted.mid.key] = 255;
        let indirectColor = colorConvert(rgb).hex(false);
        let indirectSorted = calcRgbBit(rgb);
        let indirectIndex = bitR.indexOf(indirectSorted.bit_rgb);

        let delta = 0;
        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;

        if (baseIndex > index) {
            delta = degree * (rgb[sorted.mid.key] - sorted.mid.value) / 255;
        } else if (baseIndex < index) {
            delta = - (degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255);
        } else {
            delta = degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255;
        }

        if (calcColor == indirectColor && sorted.mid.value > 127 && sorted.mid.value < 255 && index - baseIndex === 1
            || calcColor == baseColor && sorted.mid.value && sorted.mid.value < 128 && index > indirectIndex) {
            delta = -delta;
        } else if (calcColor == baseColor && sorted.mid.value && sorted.mid.value < 128 && index === 0 && indirectIndex === 5) {
            index = indirectIndex;
            delta = degree - delta;
        }

        return {
            y: degree * index + delta,
            x: w / 2
        };
    }

    function calcPosOnGradient(color) {
        let w = config.gradient.width;
        let h = config.gradient.height;
        let sorted = getSortedRgb(color);

        return {
            y: Math.min(h - h * sorted.high.value / 255, h - 1),
            x: Math.min(w - w * sorted.low.value / sorted.high.value, w - 1)
        };
    }

    Object.defineProperty(this, 'color', {
        get: () => gradientDetail.color,
        set: (value) => {
            let baseColor = getBaseColor(value);
            let posR = calcPosOnRainbow(baseColor);

            rainbowDetail = {
                element: config.rainbow,
                x: posR.x,
                y: posR.y,
                color: baseColor
            };

            var selRainbow = document.getElementById('selRainbow');
            var top = rainbowDetail.y - selRainbow.offsetHeight / 2 + "px";

            selRainbow.style.top = top;
            selRainbow.style.background = rainbowDetail.color;

            drawGradientPicker(config.gradient, baseColor);

            let posG = calcPosOnGradient(value);

            gradientDetail = {
                element: config.gradient,
                x: posG.x,
                y: posG.y,
                color: value
            };

            setColor();
        }
    });

    config.rainbow.addEventListener("click", rainbowClick, false);
    config.gradient.addEventListener("click", gradientClick, false);

    drawRainbowPicker(config.rainbow);

    this.Color = config.color || "red";
};

export default colorex;