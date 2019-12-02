/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {function modularization(value, name) {
  // Node: Export function
  if ( true && module.exports) {
    module.exports = value;
  } // AMD/requirejs: Define the module
  else if (typeof define === 'function' && __webpack_require__(2)) {
      define(function () {
        return value;
      });
    } // Browser: Expose to window
    else {
        window[name || value.name] = value;
      }
}

/* harmony default export */ __webpack_exports__["a"] = (modularization);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/colorNames.js
var colorNames = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
var colorArray = [];
Object.keys(colorNames).forEach(function (key) {
  return colorArray.push({
    name: key,
    value: colorNames[key]
  });
});
Object.freeze(colorNames);
Object.freeze(colorArray);

// CONCATENATED MODULE: ./src/colorConvert.js


function colorConvert(color) {
  var _rgba;

  var reColors = [{
    re: /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    color: function color(value) {
      var temp = value.slice(1, value.length);
      var result = temp.match(/.{1,2}/g);
      var alpha = parseInt(result[3], 16);

      if (isNaN(alpha)) {
        alpha = 255;
      }

      return {
        r: parseInt(result[0], 16),
        g: parseInt(result[1], 16),
        b: parseInt(result[2], 16),
        a: alpha
      };
    }
  } //todo: must be changed
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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = reColors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var rec = _step.value;

        if (rec.re.test(color)) {
          _rgba = rec.color(color);
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    _rgba = _rgba || function () {
      var ctx = document.createElement('canvas').getContext('2d');
      ctx.rect(0, 0, 1, 1);
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = color;
      ctx.fill();
      var pixel = ctx.getImageData(0, 0, 1, 1);
      return {
        r: pixel.data[0],
        g: pixel.data[1],
        b: pixel.data[2],
        a: pixel.data[3]
      };
    }();
  } else {
    _rgba = Object.assign({
      r: 0,
      g: 0,
      b: 0,
      a: 255
    }, color);
  }

  Object.keys(_rgba).forEach(function (key) {
    return _rgba[key] = Math.round(_rgba[key]);
  });

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
    };
  }

  function rgba() {
    return {
      r: _rgba.r,
      g: _rgba.g,
      b: _rgba.b,
      a: _rgba.a
    };
  }

  function hex() {
    var withAlpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var color = '#' + _rgba.r.toString(16).padStart(2, '0') + _rgba.g.toString(16).padStart(2, '0') + _rgba.b.toString(16).padStart(2, '0');

    if (withAlpha) {
      color += (_rgba.a || 255).toString(16).padStart(2, '0');
    }

    return color;
  }

  function name() {
    var color = colorArray.find(function (color) {
      return color.value == hex(false);
    });
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
    var sorted = [];
    var temp = rgb();
    Object.keys(temp).forEach(function (x) {
      return sorted.push({
        key: x,
        value: temp[x]
      });
    });
    sorted.sort(function (a, b) {
      if (a.value < b.value) return 1;else if (a.value > b.value) return -1;
      return 0;
    });
    return {
      high: sorted[0],
      mid: sorted[1],
      low: sorted[2]
    };
  }

  function baseColor() {
    var sorted = levels();
    var rgb = {};
    rgb[sorted.high.key] = 255;
    rgb[sorted.mid.key] = sorted.mid.value === 255 ? 255 : 0;
    rgb[sorted.low.key] = 0;
    return colorConvert(rgb).hex();
  }

  function sourceColor() {
    var sorted = levels();
    var rgb = {};
    rgb[sorted.high.key] = 255;
    rgb[sorted.mid.key] = 255 * (sorted.mid.value - sorted.low.value) / (sorted.high.value - sorted.low.value) || 0;
    rgb[sorted.low.key] = 0;
    return colorConvert(rgb).hex();
  }

  return {
    red: red,
    green: green,
    blue: blue,
    alpha: alpha,
    rgb: rgb,
    rgba: rgba,
    hex: hex,
    name: name,
    bits: bits,
    levels: levels,
    baseColor: baseColor,
    sourceColor: sourceColor
  };
}

/* harmony default export */ var src_colorConvert = (colorConvert);
// CONCATENATED MODULE: ./src/pickerConstructor.js
function createPickerElement(_ref) {
  var picker = _ref.picker,
      horizontal = _ref.horizontal,
      alphablend = _ref.alphablend;

  if (!picker) {
    throw new Error('Picker field is required');
  }

  var main = getElement(picker);
  main.classList.add('colorex');

  if (horizontal) {
    main.classList.add('horizontal');
  }

  var mr, mg, ma;

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

  var gradient = document.createElement('canvas');
  var rainbow = document.createElement('canvas');
  var sg = document.createElement('div');
  var sr = document.createElement('div');
  mg.classList.add('gradient');
  mr.classList.add('rainbow');
  sg.classList.add('selector');
  sr.classList.add('selector');
  var alpha, sa;

  if (ma) {
    alpha = document.createElement('canvas');
    sa = document.createElement('div');
    ma.classList.add('alpha');
    sa.classList.add('selector');
    ma.append(alpha, sa);
  }

  mg.append(gradient, sg);
  mr.append(rainbow, sr);
  main.append(mr, mg);
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

  return {
    rainbow: rainbow,
    gradient: gradient,
    alpha: alpha,
    sr: sr,
    sg: sg,
    sa: sa
  };
}

/* harmony default export */ var pickerConstructor = (createPickerElement);
// EXTERNAL MODULE: ./src/modularization.js
var modularization = __webpack_require__(0);

// CONCATENATED MODULE: ./src/pickers/basePicker.js
function basePicker(element) {
  this.elements = elements;
  this.size = size;
  this.draw = draw;
  this.click = click;
  this.position = position;
  var main = getPickerElement(element);
  var canvas = document.createElement('canvas');
  var selector = document.createElement('div');
  main.append(canvas, selector);
  canvas.width = main.clientWidth;
  canvas.height = main.clientHeight;

  function elements() {
    return {
      main: main,
      canvas: canvas,
      selector: selector
    };
  }

  function size() {
    return {
      width: element.width,
      height: element.height
    };
  }

  function draw() {
    var ctx = element.getContext("2d");
    ctx.clearRect(0, 0, element.width, element.height);
    return ctx;
  }

  function click(x, y) {}

  function position(color) {}

  function getPickerElement(value) {
    if (typeof value === 'string') {
      return document.querySelector(value);
    } else if (value instanceof Element) {
      return value;
    }

    return null;
  }

  element.addEventListener("click", function (event) {
    click(event.offsetX, event.offsetY);
  }, false);
}

/* harmony default export */ var pickers_basePicker = (basePicker);
// CONCATENATED MODULE: ./src/pickers/gradientPicker.js



function gradientPicker(element) {
  pickers_basePicker.call(this, element); // this.draw = draw;
  // this.click = click;
  // this.position = position;
  // function draw(color) {
  //     const ctx = super.draw();
  //     const clgWhite = ctx.createLinearGradient(0, 0, element.width, 0);
  //     clgWhite.addColorStop(0, "white");
  //     clgWhite.addColorStop(1, color);
  //     ctx.fillStyle = clgWhite;
  //     ctx.fillRect(0, 0, element.width, element.height);
  //     const clgBlack = ctx.createLinearGradient(0, element.height, 0, 0);
  //     clgBlack.addColorStop(0, "black");
  //     clgBlack.addColorStop(1, "transparent");
  //     ctx.fillStyle = clgBlack;
  //     ctx.fillRect(0, 0, element.width, element.height);
  // }
  // function click(x, y) {
  // }
  // function position(color) {
  //     const { width, height } = size();
  //     const sorted = colorConvert(color).levels();
  //     return {
  //         y: Math.min(height - height * sorted.high.value / 255, height - 1),
  //         x: Math.min(width - width * sorted.low.value / sorted.high.value, width - 1)
  //     };
  // }
}

gradientPicker.prototype = Object.create(pickers_basePicker.prototype);
/* harmony default export */ var pickers_gradientPicker = (gradientPicker);
// CONCATENATED MODULE: ./src/pickers/rainbowPicker.js



function rainbowPicker(element, horizontal) {
  pickers_basePicker.call(this, element); // this.draw = draw;
  // this.click = click;
  // this.position = position;
  // const colors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
  // function draw() {
  //     let ctx = super.draw();
  //     let clg = horizontal ?
  //         ctx.createLinearGradient(0, 0, element.width, 0) :
  //         ctx.createLinearGradient(0, 0, 0, element.height);
  //     for (let x = 0; x < colors.length; x++) {
  //         clg.addColorStop(x / (colors.length - 1), colors[x]);
  //     }
  //     ctx.fillStyle = clg;
  //     ctx.fillRect(0, 0, element.width, element.height);
  // }
  // function click(x, y) {
  // }
  // function position(color) {
  //     const { width, height } = size();
  //     let { degree, sorted, index, getMeasurement } = (() => {
  //         const degree = horizontal ? width / (rainbowColors.length - 1) : height / (rainbowColors.length - 1);
  //         const bitR = rainbowColors.map((x) => colorConvert(x).bits().bit_rgb);
  //         const sorted = colorConvert(color).levels();
  //         const bit = colorConvert(color).bits();
  //         const index = bitR.indexOf(bit.bit_rgb);
  //         function getMeasurement(rgb) {
  //             let color = colorConvert(rgb).hex(config.alphablend);
  //             let sorted = colorConvert(rgb).bits();
  //             let index = bitR.indexOf(sorted.bit_rgb);
  //             return { color, sorted, index }
  //         }
  //         return { degree, sorted, index, getMeasurement }
  //     })();
  //     let rgb = {};
  //     rgb[sorted.high.key] = 255;
  //     rgb[sorted.low.key] = 0;
  //     rgb[sorted.mid.key] = 0;
  //     let base = getMeasurement(rgb);
  //     rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
  //     let calc = getMeasurement(rgb);
  //     rgb[sorted.mid.key] = 255;
  //     let indirect = getMeasurement(rgb);
  //     let delta = 0;
  //     rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
  //     //todo: must be changed
  //     if (base.index > index) {
  //         delta = degree * (rgb[sorted.mid.key] - sorted.mid.value) / 255;
  //     } else if (base.index < index) {
  //         delta = - (degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255);
  //     } else {
  //         delta = degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255;
  //     }
  //     if (calc.color == indirect.color && sorted.mid.value > 127 && sorted.mid.value < 255 && index - base.index === 1
  //         || calc.color == base.color && sorted.mid.value && sorted.mid.value < 128 && index > indirect.index) {
  //         delta = -delta;
  //     } else if (calc.color == base.color && sorted.mid.value && sorted.mid.value < 128 && index === 0 && indirect.index === 5) {
  //         index = indirect.index;
  //         delta = degree - delta;
  //     }
  //     if (horizontal) {
  //         return {
  //             y: height,
  //             x: degree * index + delta
  //         };
  //     } else {
  //         return {
  //             y: degree * index + delta,
  //             x: width
  //         };
  //     }
  // }
}

rainbowPicker.prototype = Object.create(pickers_basePicker.prototype);
/* harmony default export */ var pickers_rainbowPicker = (rainbowPicker);
// CONCATENATED MODULE: ./src/pickers/alphaPicker.js



function alphaPicker(element, horizontal) {
  pickers_basePicker.call(this, element); // this.draw = draw;
  // this.click = click;
  // this.position = position;
  // drawBackground();
  // function draw(color) {
  //     let ctx = super.draw();
  //     let clg = horizontal ?
  //         ctx.createLinearGradient(0, 0, element.width, 0) :
  //         ctx.createLinearGradient(0, element.height, 0, 0)
  //     clg.addColorStop(0, "transparent");
  //     clg.addColorStop(1, color);
  //     ctx.fillStyle = clg;
  //     ctx.fillRect(0, 0, element.width, element.height);
  // }
  // function click(x, y) {
  // }
  // function position(color) {
  //     const { width, height } = size();
  //     const alphaValue = colorConvert(color).alpha();
  //     if (horizontal) {
  //         return {
  //             y: height,
  //             x: width * alphaValue / 255
  //         };
  //     } else {
  //         return {
  //             y: height - height * alphaValue / 255,
  //             x: width
  //         };
  //     }
  // }
  // function drawBackground() {
  //     const alphaBackground = getComputedStyle(element).getPropertyValue('--alpha-background');
  //     const bg = document.createElement('canvas');
  //     bg.width = horizontal ?
  //         element.height :
  //         element.width;
  //     bg.height = bg.width;
  //     const ctx = bg.getContext("2d");
  //     ctx.fillStyle = 'white';
  //     ctx.fillRect(0, 0, bg.width, bg.height);
  //     ctx.fillStyle = alphaBackground;
  //     ctx.fillRect(0, 0, bg.width / 2, bg.width / 2);
  //     ctx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);
  //     element.style.background = 'url(' + bg.toDataURL("image/png") + ')';
  // }
}

alphaPicker.prototype = Object.create(pickers_basePicker.prototype);
/* harmony default export */ var pickers_alphaPicker = (alphaPicker);
// CONCATENATED MODULE: ./src/colorex.js







function colorex(config) {
  var _this = this;

  var _createPickerElement = pickerConstructor(config),
      rainbow = _createPickerElement.rainbow,
      gradient = _createPickerElement.gradient,
      alpha = _createPickerElement.alpha,
      sr = _createPickerElement.sr,
      sg = _createPickerElement.sg,
      sa = _createPickerElement.sa;

  var gradientDetail, rainbowDetail, alphaDetail;
  var rainbowColors = ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
  Object.freeze(rainbowColors);
  rainbow.addEventListener("click", rainbowClick, false);
  gradient.addEventListener("click", gradientClick, false);

  if (alpha) {
    alpha.addEventListener("click", alphaClick, false);
    drawAlphaPickerBackground(alpha);
  }

  drawRainbowPicker(rainbow);

  function drawAlphaPickerBackground(element) {
    if (!element) {
      return;
    }

    var alphaBackground = getComputedStyle(element).getPropertyValue('--alpha-background');
    var bg = document.createElement('canvas');
    bg.width = config.horizontal ? element.height : element.width;
    bg.height = bg.width;
    var bgCtx = bg.getContext("2d");
    bgCtx.fillStyle = 'white';
    bgCtx.fillRect(0, 0, bg.width, bg.height);
    bgCtx.fillStyle = alphaBackground;
    bgCtx.fillRect(0, 0, bg.width / 2, bg.width / 2);
    bgCtx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);
    element.style.background = 'url(' + bg.toDataURL("image/png") + ')';
  }

  function drawRainbowPicker(element) {
    var ctx = element.getContext("2d");
    var grd;

    if (config.horizontal) {
      grd = ctx.createLinearGradient(0, 0, element.width, 0);
    } else {
      grd = ctx.createLinearGradient(0, 0, 0, element.height);
    }

    for (var x = 0; x < rainbowColors.length; x++) {
      grd.addColorStop(x / (rainbowColors.length - 1), rainbowColors[x]);
    }

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, element.width, element.height);
  }

  ;

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
  }

  ;

  function drawAlphaPicker(element, color) {
    var ctx = element.getContext("2d");
    ctx.clearRect(0, 0, element.width, element.height);
    var grdAlpha;

    if (config.horizontal) {
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
  }

  ;

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
    var ctx = element.getContext("2d");
    var rgba = ctx.getImageData(x, y, 1, 1).data;
    return src_colorConvert({
      r: rgba[0],
      g: rgba[1],
      b: rgba[2],
      a: rgba[3]
    }).hex(config.alphablend);
  }

  function setGradient() {
    if (rainbowDetail) {
      rainbowDetail.color = rainbowDetail.color || colorFromPointOnElement(rainbowDetail.element, rainbowDetail.x, rainbowDetail.y);
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

  function setColor() {
    if (gradientDetail) {
      gradientDetail.color = gradientDetail.color || colorFromPointOnElement(gradientDetail.element, gradientDetail.x, gradientDetail.y);
      var left = gradientDetail.x + "px";
      var top = gradientDetail.y + "px";
      sg.style.left = left;
      sg.style.top = top;
      sg.style.background = gradientDetail.color;

      if (alpha) {
        drawAlphaPicker(alpha, gradientDetail.color);
        sa.style.background = gradientDetail.color;
      }

      if (config.onChange) {
        var rgba = src_colorConvert(gradientDetail.color).rgb();
        rgba.a = getAlphaValue();
        config.onChange({
          color: src_colorConvert(rgba).hex(config.alphablend)
        });
      }
    }
  }

  ;

  function setAlpha() {
    if (alphaDetail) {
      if (config.horizontal) {
        sa.style.left = alphaDetail.x + "px";
      } else {
        sa.style.top = alphaDetail.y + "px";
      }
    }
  }

  function getAlphaValue() {
    if (alphaDetail) {
      if (config.horizontal) {
        return Math.round(255 - 255 * alphaDetail.x / alpha.width);
      } else {
        return Math.round(255 - 255 * alphaDetail.y / alpha.height);
      }
    } else {
      return 255;
    }
  }

  function calcPosOnRainbow(color) {
    var w = rainbow.width;
    var h = rainbow.height;

    var _ref = function () {
      var degree = config.horizontal ? w / (rainbowColors.length - 1) : h / (rainbowColors.length - 1);
      var bitR = rainbowColors.map(function (x) {
        return src_colorConvert(x).bits().bit_rgb;
      });
      var sorted = src_colorConvert(color).levels();
      var bit = src_colorConvert(color).bits();
      var index = bitR.indexOf(bit.bit_rgb);

      function getMeasurement(rgb) {
        var color = src_colorConvert(rgb).hex(config.alphablend);
        var sorted = src_colorConvert(rgb).bits();
        var index = bitR.indexOf(sorted.bit_rgb);
        return {
          color: color,
          sorted: sorted,
          index: index
        };
      }

      return {
        degree: degree,
        sorted: sorted,
        index: index,
        getMeasurement: getMeasurement
      };
    }(),
        degree = _ref.degree,
        sorted = _ref.sorted,
        index = _ref.index,
        getMeasurement = _ref.getMeasurement;

    var rgb = {};
    rgb[sorted.high.key] = 255;
    rgb[sorted.low.key] = 0;
    rgb[sorted.mid.key] = 0;
    var base = getMeasurement(rgb);
    rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255;
    var calc = getMeasurement(rgb);
    rgb[sorted.mid.key] = 255;
    var indirect = getMeasurement(rgb);
    var delta = 0;
    rgb[sorted.mid.key] = ((sorted.mid.value & 255) >> 7) * 255; //todo: must be changed

    if (base.index > index) {
      delta = degree * (rgb[sorted.mid.key] - sorted.mid.value) / 255;
    } else if (base.index < index) {
      delta = -(degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255);
    } else {
      delta = degree * (sorted.mid.value - rgb[sorted.mid.key]) / 255;
    }

    if (calc.color == indirect.color && sorted.mid.value > 127 && sorted.mid.value < 255 && index - base.index === 1 || calc.color == base.color && sorted.mid.value && sorted.mid.value < 128 && index > indirect.index) {
      delta = -delta;
    } else if (calc.color == base.color && sorted.mid.value && sorted.mid.value < 128 && index === 0 && indirect.index === 5) {
      index = indirect.index;
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
    var w = gradient.width;
    var h = gradient.height;
    var sorted = src_colorConvert(color).levels();
    return {
      y: Math.min(h - h * sorted.high.value / 255, h - 1),
      x: Math.min(w - w * sorted.low.value / sorted.high.value, w - 1)
    };
  }

  function calcPosOnAlpha(color) {
    var w = alpha.width;
    var h = alpha.height;
    var alphaValue = src_colorConvert(color).alpha();

    if (config.horizontal) {
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
    get: function get() {
      var rgba = src_colorConvert(gradientDetail.color).rgb();
      rgba.a = getAlphaValue();
      return src_colorConvert(rgba).hex(config.alphablend);
    },
    set: function set(value) {
      var color = src_colorConvert(value).hex(false);
      var baseColor = src_colorConvert(color).sourceColor();
      baseColor = src_colorConvert(baseColor).hex(false);
      var posR = calcPosOnRainbow(baseColor);
      rainbowDetail = {
        element: config.rainbow,
        x: posR.x,
        y: posR.y,
        color: baseColor
      };
      setGradient();
      var posG = calcPosOnGradient(color);
      gradientDetail = {
        element: gradient,
        x: posG.x,
        y: posG.y,
        color: color
      };

      if (config.alphablend) {
        var posA = calcPosOnAlpha(value);
        alphaDetail = {
          element: _this,
          x: posA.x,
          y: posA.y
        };
        setAlpha();
      }

      setColor();
    }
  });
  this.color = config.color || "red";
}

;

function colorex2(config) {
  var _createPickerElement2 = createPickerElement2(config),
      gradient = _createPickerElement2.gradient,
      rainbow = _createPickerElement2.rainbow,
      alpha = _createPickerElement2.alpha;

  pickers_gradientPicker(gradient);
  pickers_rainbowPicker(rainbow, config.horizontal);

  if (alpha) {
    pickers_alphaPicker(alpha, config.horizontal);
  } // Object.defineProperty(this, 'color', {
  //     get: () => {
  //         let rgba = colorConvert(gradientDetail.color).rgb();
  //         rgba.a = getAlphaValue(); 
  //         return colorConvert(rgba).hex(config.alphablend);
  //     },
  //     set: (value) => {
  //         let color = colorConvert(value).hex(false);
  //         let baseColor = colorConvert(color).sourceColor();
  //         baseColor = colorConvert(baseColor).hex(false);
  //         let posR = calcPosOnRainbow(baseColor);
  //         rainbowDetail = {
  //             element: config.rainbow,
  //             x: posR.x,
  //             y: posR.y,
  //             color: baseColor
  //         };
  //         setGradient();
  //         let posG = calcPosOnGradient(color);
  //         gradientDetail = {
  //             element: gradient,
  //             x: posG.x,
  //             y: posG.y,
  //             color: color
  //         };
  //         if (config.alphablend) {
  //             let posA = calcPosOnAlpha(value);
  //             alphaDetail = {
  //                 element: this,
  //                 x: posA.x,
  //                 y: posA.y
  //             };
  //             setAlpha();
  //         }
  //         setColor();
  //     }
  // });
  // this.color = config.color || "red";

}

Object(modularization["a" /* default */])(colorex);
/* harmony default export */ var src_colorex = __webpack_exports__["default"] = (colorex);

function createPickerElement2(_ref2) {
  var picker = _ref2.picker,
      alphablend = _ref2.alphablend;

  if (!picker) {
    throw new Error('Picker field is required');
  }

  var gradient, rainbow, alpha;
  var main = getElement(picker);

  if (main) {
    main.classList.add('colorex');
    gradient = document.createElement('div');
    rainbow = document.createElement('div');
    main.append(gradient, rainbow);

    if (alphablend) {
      alpha = document.createElement('div');
      main.append(alpha);
    }
  } else {
    gradient = getElement(picker.gradient);
    rainbow = getElement(picker.rainbow);

    if (alphablend && picker.alpha) {
      alpha = getElement(picker.alpha);
    }
  }

  gradient.classList.add('gradient');
  rainbow.classList.add('rainbow');

  if (alpha) {
    alpha.classList.add('alpha');
  }

  function getElement(value) {
    if (typeof value === 'string') {
      return document.querySelector(value);
    } else if (value instanceof Element) {
      return value;
    }

    return null;
  }

  return {
    rainbow: rainbow,
    gradient: gradient,
    alpha: alpha
  };
}

/***/ })
/******/ ]);