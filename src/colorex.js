import colorConvert from './colorConvert.js';

function createPickerElement({ picker, horizontal, alphablend }) {
    if (!picker) {
        throw new Error('Picker field is required');
    }

    let main = getElement(picker);
    main.classList.add('colorex');
    if (horizontal) {
        main.classList.add('horizontal');
    }

    let mr, mg, ma;

    if (main) {
        mg = document.createElement('div');
        mr = document.createElement('div');
        if (alphablend) {
            ma = document.createElement('div');
        }
    } else if (picker.rainbow && picker.gradient) {
        mg = getElement(picker.gradient);
        mr = getElement(picker.rainbow);
        if (alphablend) {
            ma = getElement(picker.alphablend);
        }
    } else {
        throw new Error('Picker field is incorrect');
    }

    let gradient = document.createElement('canvas');
    let rainbow = document.createElement('canvas');
    let sg = document.createElement('div');
    let sr = document.createElement('div');

    mg.classList.add('gradient');
    mr.classList.add('rainbow');
    sg.classList.add('selector');
    sr.classList.add('selector');

    let alpha, sa;
    if (ma) {
        alpha = document.createElement('canvas');
        sa = document.createElement('div');

        ma.classList.add('alpha');
        sa.classList.add('selector');

        ma.append(alpha, sa);
    }

    mg.append(gradient, sg);
    mr.append(rainbow, sr);
    main.append(mg, mr);

    gradient.width = mg.clientWidth;
    gradient.height = mg.clientHeight;
    rainbow.width = mr.clientWidth;
    rainbow.height = mr.clientHeight;

    if (alpha && ma) {
        main.append(ma);
        alpha.width = ma.clientWidth;
        alpha.height = ma.clientHeight;
    }

    function getElement(value) {
        if (typeof value === 'string') {
            return document.querySelector(value);
        } else if (value instanceof Element) {
            return value;
        }

        return null;
    }

    return { rainbow, gradient, alpha, sr, sg, sa };
}

function colorex(config) {
    let { rainbow, gradient, alpha, sr, sg, sa } = createPickerElement(config);

    var gradientDetail = undefined;
    var rainbowDetail = undefined;

    const rainbowColors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
    Object.freeze(rainbowColors);

    function drawRainbowPicker(element) {
        let ctx = element.getContext("2d");
        let grd;

        if (config.horizontal) {
            grd = ctx.createLinearGradient(0, 0, element.width, 0);
        } else {
            grd = ctx.createLinearGradient(0, 0, 0, element.height);
        }

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

    function alphaBackground(element) {
        return new Promise((resolve) => {
            let bg = document.createElement('canvas');
            bg.width = config.horizontal ? element.height : element.width;
            bg.height = bg.width;

            let bgCtx = bg.getContext("2d");
            bgCtx.fillStyle = 'white';
            bgCtx.fillRect(0, 0, bg.width, bg.height);
            bgCtx.fillStyle = 'lightgray';
            bgCtx.fillRect(0, 0, bg.width / 2, bg.width / 2);
            bgCtx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);

            let image = new Image;
            image.onload = (event) => resolve(event.target);
            image.src = bg.toDataURL("image/png");
            element.style.background = 'url(' + bg.toDataURL("image/png") +')';
        });
    }

    function drawAlphaPicker(element, color) {
        alphaBackground(element).then((image) => {
            let ctx = element.getContext("2d");
            ctx.clearRect(0, 0, element.width, element.height);
            // let temp = 0;
            
            // if (config.horizontal) {
            //     while (temp < element.width) {
            //         ctx.drawImage(image, temp, 0);
            //         temp += element.height;
            //     }
            // } else {
            //     while (temp < element.height) {
            //         ctx.drawImage(image, 0, temp);
            //         temp += element.width;
            //     }
            // }

            let grdAlpha;

            if (config.horizontal) {
                grdAlpha = ctx.createLinearGradient(0, 0, element.width, 0);
                grdAlpha.addColorStop(0, color);
                grdAlpha.addColorStop(1, "transparent");
            } else {
                grdAlpha = ctx.createLinearGradient(0, element.height, 0, 0);
                grdAlpha.addColorStop(0, "transparent");
                grdAlpha.addColorStop(1, color);
            }

            ctx.fillStyle = grdAlpha;
            ctx.fillRect(0, 0, element.width, element.height);
        });
    }

    function setGradient() {
        if (rainbowDetail) {
            if (!rainbowDetail.color) {
                var ctx = rainbowDetail.element.getContext("2d");
                var rgba = ctx.getImageData(rainbowDetail.x, rainbowDetail.y, 1, 1).data;
                rainbowDetail.color = colorConvert({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] }).hex(config.horizontal);
            }

            drawGradientPicker(gradient, rainbowDetail.color);

            if (config.horizontal) {
                sr.style.left = rainbowDetail.x + "px";
            } else {
                sr.style.top = rainbowDetail.y + "px";
            }
            sr.style.background = rainbowDetail.color;

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

    function alphaClick(event) {

    }

    function setColor() {
        if (gradientDetail) {
            if (!gradientDetail.color) {
                var ctx = gradientDetail.element.getContext("2d");
                var rgba = ctx.getImageData(gradientDetail.x, gradientDetail.y, 1, 1).data;
                gradientDetail.color = colorConvert({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] }).hex(config.horizontal);
            }

            var left = gradientDetail.x + "px";
            var top = gradientDetail.y + "px";
            sg.style.left = left;
            sg.style.top = top;
            sg.style.background = gradientDetail.color;

            drawAlphaPicker(alpha, gradientDetail.color);

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

        return colorConvert(rgb).hex(config.horizontal);
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
    //     let indirectColor = colorConvert(rgb).hex(config.horizontal);
    //     let indirectSorted = calcRgbBit(rgb); 
    //     let indirectIndex = bitR.indexOf(indirectSorted.bit_rgb);

    //     rgb[sorted.mid.key] = 0;
    //     let baseColor = colorConvert(rgb).hex(config.horizontal);
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
        const w = rainbow.width;
        const h = rainbow.height;
        const degree = config.horizontal ? w / (rainbowColors.length - 1) : h / (rainbowColors.length - 1);
        const bitR = rainbowColors.map((x) => calcRgbBit(x).bit_rgb);
        const sorted = getSortedRgb(color);

        let bit = calcRgbBit(color);
        let index = bitR.indexOf(bit.bit_rgb);

        let rgb = {};
        rgb[sorted.high.key] = 255;
        rgb[sorted.low.key] = 0;

        rgb[sorted.mid.key] = 0;
        let baseColor = colorConvert(rgb).hex(config.horizontal);
        let baseSorted = calcRgbBit(rgb);
        let baseIndex = bitR.indexOf(baseSorted.bit_rgb);

        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
        let calcColor = colorConvert(rgb).hex(config.horizontal);
        let calcSorted = calcRgbBit(rgb);
        let calcIndex = bitR.indexOf(calcSorted.bit_rgb);

        rgb[sorted.mid.key] = 255;
        let indirectColor = colorConvert(rgb).hex(config.horizontal);
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

        if (config.horizontal) {
            return {
                y: h,
                x: degree * index + delta
            };
        } else {
            return {
                y: degree * index + delta,
                x: w
            };
        }
    }

    function calcPosOnGradient(color) {
        let w = gradient.width;
        let h = gradient.height;
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

            if (config.horizontal) {
                sr.style.left = rainbowDetail.x + "px";
            } else {
                sr.style.top = rainbowDetail.y + "px";
            }
            sr.style.background = rainbowDetail.color;

            drawGradientPicker(gradient, baseColor);

            let posG = calcPosOnGradient(value);

            gradientDetail = {
                element: gradient,
                x: posG.x,
                y: posG.y,
                color: value
            };

            setColor();
        }
    });

    rainbow.addEventListener("click", rainbowClick, false);
    gradient.addEventListener("click", gradientClick, false);
    alpha.addEventListener("click", alphaClick, false);

    drawRainbowPicker(rainbow);

    this.Color = config.color || "red";
};

export default colorex;