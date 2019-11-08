

function colorex(config) {
    var gradientDetail = undefined;
    var rainbowDetail = undefined;
    var rainbowColors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];

    function drawRainbowPicker(element) {
        var ctx = element.getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, 0, element.height);

        for (var x = 0; x < rainbowColors.length; x++) {
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
                var tc = tinycolor({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] });
                rainbowDetail.color = tc.toHexString();
            }

            drawGradientPicker(config.gradient, rainbowDetail.color);

            if (config.rainbowEvent)
                config.rainbowEvent(rainbowDetail);

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

        if (gradientDetail)
            gradientDetail.color = undefined;

        setGradient();
    };

    function setColor() {
        if (gradientDetail) {
            if (!gradientDetail.color) {
                var ctx = gradientDetail.element.getContext("2d");
                var rgba = ctx.getImageData(gradientDetail.x, gradientDetail.y, 1, 1).data;
                var tc = tinycolor({ r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3] });
                gradientDetail.color = tc.toHexString();
            }

            if (config.gradientEvent)
                config.gradientEvent(gradientDetail);
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
        var tc = tinycolor(color);
        var rgb = tc.toRgb();
        var sorted = [];

        Object.keys(rgb)
            .filter(function (x) { return x !== "a"; })
            .forEach(function (x) {
                sorted.push({ key: x, value: rgb[x] });
            });

        sorted.sort(function (a, b) {
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
        var sorted = getSortedRgb(color);

        var rgb = {};
        rgb[sorted.high.key] = 255;
        rgb[sorted.mid.key] = 255 * (sorted.mid.value - sorted.low.value) / (sorted.high.value - sorted.low.value) || 0;
        rgb[sorted.low.key] = 0;

        var tc = tinycolor(rgb);
        return tc.toHexString();
    }

    function calcRgbBit(color) {
        var rgb = tinycolor(color).toRgb();

        return {
            bit_r: (rgb.r & 128) >> 7,
            bit_g: (rgb.g & 128) >> 7,
            bit_b: (rgb.b & 128) >> 7,
            bit_rgb: ((rgb.r & 128) >> 5) + ((rgb.g & 128) >> 6) + ((rgb.b & 128) >> 7)
        };
    }

    function calcPosOnRainbow(color) {
        const w = config.rainbow.width;
        const h = config.rainbow.height;
        const degree = h / (rainbowColors.length - 1);
        const bitR = rainbowColors.map(function (x) { return calcRgbBit(x).bit_rgb; });
        const sorted = getSortedRgb(color);

        let bit = calcRgbBit(color);
        let index = bitR.indexOf(bit.bit_rgb);

        let rgb = {};
        rgb[sorted.high.key] = 255;
        rgb[sorted.low.key] = 0;

        rgb[sorted.mid.key] = 0;
        let baseColor = tinycolor(rgb).toHexString();
        let baseSorted = calcRgbBit(rgb);
        let baseIndex = bitR.indexOf(baseSorted.bit_rgb);

        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
        let calcColor = tinycolor(rgb).toHexString();
        let calcSorted = calcRgbBit(rgb);
        let calcIndex = bitR.indexOf(calcSorted.bit_rgb);

        rgb[sorted.mid.key] = 255;
        let indirectColor = tinycolor(rgb).toHexString();
        let indirectSorted = calcRgbBit(rgb); 
        let indirectIndex = bitR.indexOf(indirectSorted.bit_rgb);

        console.log({ baseIndex, index, indirectIndex, baseColor, color, calcColor, indirectColor });
        let delta = 0;
        rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
        
        if (baseIndex > index) {
            delta = degree * (rgb[sorted.mid.key] - sorted.mid.value) / 255;
            console.log(index + ' mniejszy ' + baseIndex);
        } else if (baseIndex < index) {
            delta = - (degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255);
            console.log(index + ' większy ' + baseIndex);
        } else {
            delta = degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255;
        }

        if (calcColor == indirectColor && sorted.mid.value > 127 && sorted.mid.value < 255 && index - baseIndex === 1
            || calcColor == baseColor && sorted.mid.value && sorted.mid.value < 128 && index > indirectIndex
        ) {
            // index--;
            delta = -delta;
            console.log('korekta');
        } else if (calcColor == baseColor && sorted.mid.value && sorted.mid.value < 128 && index === 0 && indirectIndex === 5) {
            index = indirectIndex;
            delta = degree-delta;
        }

        return {
            y: degree * index + delta,
            x: w / 2
        };
    }

    // var degree = h / (rainbowColors.length- 1);//-1
    // var sorted = getSortedRgb(color);
    // // var delta = 0;//degree * sorted.mid.value / 255;


    // let sorted = getSortedRgb(color);
    // let rgb = {};
    // rgb[sorted.high.key] = 255;
    // rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255; 
    // rgb[sorted.low.key] = 0;  
    // let neighborSorted = calcRgbBit(rgb);
    // let neighborIndex = bitR.indexOf(neighborSorted.bit_rgb);

    // // delta = degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255;

    // // if (neighborIndex > index) {
    // //     delta = degree - delta;
    // // }

    // // if (sorted.mid.value > rgb[sorted.mid.key]) {
    // //     delta = degree - delta;
    // // }

    // // var baseColor = getBaseColor(color);
    // // var baseSorted = getSortedRgb(baseColor);

    // // var degree = h / (rainbowColors.length - 1);
    // // var sorted = getSortedRgb(color);
    // // // var delta = 0;//degree * sorted.mid.value / baseSorted.mid.value;

    // // var rgb = {};
    // // rgb[sorted.high.key] = 255;
    // // rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255; 
    // // rgb[sorted.low.key] = 0;

    // // var delta = 0;// degree * (baseSorted.mid.value - sorted.mid.value) / 255;

    // // var rgb = {};
    // // rgb[sorted.high.key] = 255; 
    // // // rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255; 
    // // rgb[sorted.mid.key] = 255; 
    // // rgb[sorted.low.key] = 0;
    // // var bitDirection = calcRgbBit(rgb);
    // // var indexDirection = bitR.indexOf(bitDirection.bit_rgb);

    // // if (indexDirection === index) {
    // //     delta = delta - degree;
    // // }

    // // if (indexDirection === index) {
    // //     delta = delta;
    // // } else if (indexDirection > index) {
    // //     delta = -delta;
    // // }

    function calcPosOnGradient(color) {
        var w = config.gradient.width;
        var h = config.gradient.height;

        var sorted = getSortedRgb(color);

        return {
            y: Math.min(h - h * sorted.high.value / 255, h - 1),
            x: Math.min(w - w * sorted.low.value / sorted.high.value, w - 1)
        };
    }

    Object.defineProperty(this, 'Color', {
        get: function () {
            return gradientDetail.color;
        },
        set: function (value) {
            var baseColor = getBaseColor(value);

            var posR = calcPosOnRainbow(baseColor);//baseColor value

            rainbowDetail = {
                element: config.rainbow,
                x: posR.x,
                y: posR.y,
                color: baseColor
            };

            if (config.rainbowEvent)
                config.rainbowEvent(rainbowDetail);

            drawGradientPicker(config.gradient, baseColor);

            var posG = calcPosOnGradient(value);

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

    this.Color = config.color || "green";
};