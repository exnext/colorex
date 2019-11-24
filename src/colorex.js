import colorConvert from './colorConvert.js';
import createPickerElement from './pickerConstructor.js';
import asModule from './asModule.js';

function colorex(config) {
    let { rainbow, gradient, alpha, sr, sg, sa } = createPickerElement(config);
    let gradientDetail, rainbowDetail, alphaDetail;

    const rainbowColors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
    Object.freeze(rainbowColors);

    rainbow.addEventListener("click", rainbowClick, false);
    gradient.addEventListener("click", gradientClick, false);

    if (alpha) {
        alpha.addEventListener("click", alphaClick, false);
        drawAlphaPickerBackground(alpha);
    }

    drawRainbowPicker(rainbow);

    function isHorizontal({ horizontal }, picker) {
        if (typeof horizontal === 'boolean') {
            return horizontal;
        } else {
            return horizontal && !!horizontal[picker];
        }
    }

    function drawAlphaPickerBackground(element) {
        if (!element) {
            return;
        }

        let alphaBackground = getComputedStyle(element).getPropertyValue('--alpha-background');

        let bg = document.createElement('canvas');
        bg.width = isHorizontal(config, 'alphablend') ? element.height : element.width;
        bg.height = bg.width;

        let bgCtx = bg.getContext("2d");
        bgCtx.fillStyle = 'white';
        bgCtx.fillRect(0, 0, bg.width, bg.height);
        bgCtx.fillStyle = alphaBackground;
        bgCtx.fillRect(0, 0, bg.width / 2, bg.width / 2);
        bgCtx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);

        element.style.background = 'url(' + bg.toDataURL("image/png") + ')';
    }


    function drawRainbowPicker(element) {
        let ctx = element.getContext("2d");
        let grd;

        if (isHorizontal(config, 'rainbow')) {
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
        let ctx = element.getContext("2d");
        ctx.clearRect(0, 0, element.width, element.height);

        let grdWhite = ctx.createLinearGradient(0, 0, element.width, 0);
        grdWhite.addColorStop(0, "white");
        grdWhite.addColorStop(1, color);
        ctx.fillStyle = grdWhite;
        ctx.fillRect(0, 0, element.width, element.height);

        let grdBlack = ctx.createLinearGradient(0, element.height, 0, 0);
        grdBlack.addColorStop(0, "black");
        grdBlack.addColorStop(1, "transparent");
        ctx.fillStyle = grdBlack;
        ctx.fillRect(0, 0, element.width, element.height);
    };

    function drawAlphaPicker(element, color) {
        let ctx = element.getContext("2d");
        ctx.clearRect(0, 0, element.width, element.height);

        let grdAlpha;

        if (isHorizontal(config, 'alphablend')) {
            grdAlpha = ctx.createLinearGradient(0, 0, element.width, 0);
        } else {
            grdAlpha = ctx.createLinearGradient(0, element.height, 0, 0);
        }

        grdAlpha.addColorStop(0, "transparent");
        grdAlpha.addColorStop(1, color);

        ctx.fillStyle = grdAlpha;
        ctx.fillRect(0, 0, element.width, element.height);
    }


    function rainbowClick(event) {
        rainbowDetail = {
            element: event.target,
            x: event.offsetX,
            y: event.offsetY,
            color: undefined
        };

        if (gradientDetail) {
            gradientDetail.color = undefined;
        }

        setGradient();
    };

    function gradientClick(event) {
        gradientDetail = {
            element: event.target,
            x: event.offsetX,
            y: event.offsetY,
            color: undefined
        };

        setColor();
    }

    function alphaClick(event) {
        alphaDetail = {
            element: this,
            x: event.offsetX,
            y: event.offsetY
        };

        setAlpha();
        setColor();
    }

    function colorFromPointOnElement(element, x, y) {
        let ctx = element.getContext("2d");
        let rgba = ctx.getImageData(x, y, 1, 1).data;
        return colorConvert({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] }).hex(config.alphablend);
    }

    function setGradient() {
        if (rainbowDetail) {
            rainbowDetail.color = rainbowDetail.color ||
                colorFromPointOnElement(rainbowDetail.element, rainbowDetail.x, rainbowDetail.y);

            drawGradientPicker(gradient, rainbowDetail.color);

            if (isHorizontal(config, 'rainbow')) {
                sr.style.left = rainbowDetail.x + "px";
            } else {
                sr.style.top = rainbowDetail.y + "px";
            }
            sr.style.background = rainbowDetail.color;

            setColor();
        }
    }

    function setColor() {
        if (gradientDetail) {
            gradientDetail.color = gradientDetail.color ||
                colorFromPointOnElement(gradientDetail.element, gradientDetail.x, gradientDetail.y);

            let left = gradientDetail.x + "px";
            let top = gradientDetail.y + "px";
            sg.style.left = left;
            sg.style.top = top;
            sg.style.background = gradientDetail.color;

            if (alpha) {
                drawAlphaPicker(alpha, gradientDetail.color);
                sa.style.background = gradientDetail.color;
            }

            if (config.onChange) {
                let rgba = colorConvert(gradientDetail.color).rgb();
                rgba.a = getAlphaValue();
                config.onChange({ color: colorConvert(rgba).hex(config.alphablend) });
            }
        }
    };

    function setAlpha() {
        if (alphaDetail) {
            if (isHorizontal(config, 'alphablend')) {
                sa.style.left = alphaDetail.x + "px";
            } else {
                sa.style.top = alphaDetail.y + "px";
            }
        }
    }

    function getAlphaValue() {
        if (alphaDetail) {
            if (isHorizontal(config, 'alphablend')) {
                return Math.round(255 - 255 * alphaDetail.x / alpha.width); 
            } else {
                return Math.round(255 - 255 * alphaDetail.y / alpha.height);
            }
        } else {
            return 255;
        }   
    }

    function calcPosOnRainbow(color) {
        const w = rainbow.width;
        const h = rainbow.height;

        let { degree, sorted, index, getMeasurement } = (() => {
            const degree = isHorizontal(config, 'rainbow') ? w / (rainbowColors.length - 1) : h / (rainbowColors.length - 1);
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

        if (isHorizontal(config, 'rainbow')) {
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
        let sorted = colorConvert(color).levels();

        return {
            y: Math.min(h - h * sorted.high.value / 255, h - 1),
            x: Math.min(w - w * sorted.low.value / sorted.high.value, w - 1)
        };
    }

    function calcPosOnAlpha(color) {
        let w = alpha.width;
        let h = alpha.height;
        let alphaValue = colorConvert(color).alpha();

        if (isHorizontal(config, 'alphablend')) {
            return {
                y: h,
                x: w * alphaValue / 255
            };
        } else {
            return {
                y: h - h * alphaValue / 255,
                x: w
            };
        }
    }

    Object.defineProperty(this, 'color', {
        get: () => {
            let rgba = colorConvert(gradientDetail.color).rgb();
            rgba.a = getAlphaValue(); 
            return colorConvert(rgba).hex(config.alphablend);
        },
        set: (value) => {
            let color = colorConvert(value).hex(false);

            let baseColor = colorConvert(color).sourceColor();
            baseColor = colorConvert(baseColor).hex(false);
            let posR = calcPosOnRainbow(baseColor);
            rainbowDetail = {
                element: config.rainbow,
                x: posR.x,
                y: posR.y,
                color: baseColor
            };

            setGradient();
            let posG = calcPosOnGradient(color);
            gradientDetail = {
                element: gradient,
                x: posG.x,
                y: posG.y,
                color: color
            };

            if (config.alphablend) {
                let posA = calcPosOnAlpha(value);
                alphaDetail = {
                    element: this,
                    x: posA.x,
                    y: posA.y
                };
                setAlpha();
            }

            setColor();
        }
    });

    this.color = config.color || "red";
};

asModule(colorex, 'colorex');


function colorex2(config) {

}

asModule(colorex2, 'colorex2');

export default colorex;