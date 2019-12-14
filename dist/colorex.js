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
function createPickerElement() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      picker = _ref.picker,
      alphablend = _ref.alphablend,
      horizontal = _ref.horizontal;

  if (!picker) {
    throw new Error('Picker field is required');
  }

  var gradient, rainbow, alpha;
  var main = getElement(picker);

  if (main) {
    main.classList.add('colorex');
    rainbow = document.createElement('div');
    gradient = document.createElement('div');
    main.append(rainbow, gradient);

    if (alphablend) {
      alpha = document.createElement('div');
      main.append(alpha);
    }
  } else {
    rainbow = getElement(picker.rainbow);
    gradient = getElement(picker.gradient);

    if (alphablend && picker.alpha) {
      alpha = getElement(picker.alpha);
    }
  }

  rainbow.classList.add('rainbow');
  gradient.classList.add('gradient');

  if (alpha) {
    alpha.classList.add('alpha');
  }

  var horizontalOrientation = getHorizontal(horizontal);

  if (main) {
    main.classList.toggle('column', horizontalOrientation.main);
  }

  rainbow.classList.toggle('horizontal', horizontalOrientation.rainbow);

  if (alpha) {
    alpha.classList.toggle('horizontal', horizontalOrientation.alpha);
  }

  function getElement(value) {
    if (typeof value === 'string') {
      return document.querySelector(value);
    } else if (value instanceof Element) {
      return value;
    }

    return null;
  }

  function getHorizontal(horizontal) {
    var result = {
      main: false,
      rainbow: false,
      alpha: false
    };

    if (typeof horizontal === 'boolean') {
      result = {
        main: horizontal,
        rainbow: horizontal,
        alpha: horizontal
      };
    } else {
      result = Object.assign(result, horizontal);
      result.main = result.rainbow && result.alpha;
    }

    return result;
  }

  return {
    rainbow: rainbow,
    gradient: gradient,
    alpha: alpha
  };
}

/* harmony default export */ var pickerConstructor = (createPickerElement);
// EXTERNAL MODULE: ./src/modularization.js
var modularization = __webpack_require__(0);

// CONCATENATED MODULE: ./src/pickers/basePicker.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var picker = function () {
  var _color = Symbol('color');

  var _point = Symbol('point');

  var _pixelize = Symbol('pixelize');

  return (
    /*#__PURE__*/
    function () {
      function _class(_ref) {
        var _this = this;

        var element = _ref.element,
            pixelize = _ref.pixelize,
            click = _ref.click;

        _classCallCheck(this, _class);

        this[_pixelize] = Math.abs(pixelize);
        this[_point] = {
          x: 0,
          y: 0
        };

        this.element = function (value) {
          if (typeof value === 'string') {
            return document.querySelector(value);
          } else if (value instanceof Element) {
            return value;
          }

          return null;
        }(element);

        this.canvas = document.createElement('canvas');
        this.selector = document.createElement('div');
        this.selector.classList.add('selector');
        this.element.append(this.canvas, this.selector);
        this.canvas.width = this.element.clientWidth;
        this.canvas.height = this.element.clientHeight;
        this.canvas.addEventListener("click", function (event) {
          _this[_point] = {
            x: event.offsetX,
            y: event.offsetY
          };

          _this.setSelectorPosition(_this[_point]);

          var color = _this.pointColor(_this[_point]);

          _this.setColor(color);

          click(_this[_point], color);
        }, false);
      }

      _createClass(_class, [{
        key: "size",
        value: function size() {
          return {
            width: this.canvas.width,
            height: this.canvas.height
          };
        }
      }, {
        key: "draw",
        value: function draw(value) {
          var ctx = this.canvas.getContext("2d");

          var _this$size = this.size(),
              width = _this$size.width,
              height = _this$size.height;

          ctx.clearRect(0, 0, width, height);
          var pattern = this.getPattern(value);

          if (pattern) {
            ctx.imageSmoothingEnabled = !this.pixelize;
            ctx.drawImage(pattern, 0, 0, width, height);
          }

          return ctx;
        }
      }, {
        key: "getPattern",
        value: function getPattern(value) {}
      }, {
        key: "position",
        value: function position(color) {
          return {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "setSelectorPosition",
        value: function setSelectorPosition(point) {
          this[_point] = {
            x: point.x,
            y: point.y
          };
          var color = this.pointColor(point);
          this.selector.style.background = color;
        }
      }, {
        key: "pointColor",
        value: function pointColor(point) {
          var x = Math.min(point.x, this.canvas.width - 1);
          var y = Math.min(point.y, this.canvas.height - 1);
          var ctx = this.canvas.getContext("2d");
          var rgba = ctx.getImageData(x, y, 1, 1).data;
          return src_colorConvert({
            r: rgba[0],
            g: rgba[1],
            b: rgba[2],
            a: rgba[3]
          }).hex();
        }
      }, {
        key: "setColor",
        value: function setColor(value) {
          this[_color] = value;
          this.draw(this[_color]);
          this.selector.style.background = this.pointColor(this[_point]);
        }
      }, {
        key: "pointByPixelize",
        value: function pointByPixelize(point) {
          var x = point.x,
              y = point.y;

          if (this.pixelize) {
            var _this$size2 = this.size(),
                width = _this$size2.width,
                height = _this$size2.height;

            var dx = width / this.pixelize;
            var dy = height / this.pixelize;
            x = Math.floor(x / dx) * dx + dx / 2;
            y = Math.floor(y / dy) * dy + dy / 2;
          }

          return {
            x: x,
            y: y
          };
        }
      }, {
        key: "point",
        get: function get() {
          return this[_point];
        }
      }, {
        key: "pixelize",
        get: function get() {
          return this[_pixelize];
        }
      }, {
        key: "color",
        get: function get() {
          return this[_color];
        },
        set: function set(value) {
          this[_color] = value;
          this.setColor(value);
          var point = this.position(value);
          this.setSelectorPosition(point);
        }
      }]);

      return _class;
    }()
  );
}();

var picker1D =
/*#__PURE__*/
function (_picker) {
  _inherits(picker1D, _picker);

  function picker1D() {
    _classCallCheck(this, picker1D);

    return _possibleConstructorReturn(this, _getPrototypeOf(picker1D).apply(this, arguments));
  }

  _createClass(picker1D, [{
    key: "setSelectorPosition",
    value: function setSelectorPosition(point) {
      _get(_getPrototypeOf(picker1D.prototype), "setSelectorPosition", this).call(this, point);

      var _this$pointByPixelize = this.pointByPixelize(point),
          x = _this$pointByPixelize.x,
          y = _this$pointByPixelize.y;

      if (this.horizontal) {
        this.selector.style.left = x + "px";
      } else {
        this.selector.style.top = y + "px";
      }
    }
  }, {
    key: "horizontal",
    get: function get() {
      return this.element.classList.contains('horizontal');
    }
  }]);

  return picker1D;
}(picker);

var picker2D =
/*#__PURE__*/
function (_picker2) {
  _inherits(picker2D, _picker2);

  function picker2D() {
    _classCallCheck(this, picker2D);

    return _possibleConstructorReturn(this, _getPrototypeOf(picker2D).apply(this, arguments));
  }

  _createClass(picker2D, [{
    key: "setSelectorPosition",
    value: function setSelectorPosition(point) {
      _get(_getPrototypeOf(picker2D.prototype), "setSelectorPosition", this).call(this, point);

      var _this$pointByPixelize2 = this.pointByPixelize(point),
          x = _this$pointByPixelize2.x,
          y = _this$pointByPixelize2.y;

      this.selector.style.left = x + "px";
      this.selector.style.top = y + "px";
    }
  }]);

  return picker2D;
}(picker);


// CONCATENATED MODULE: ./src/pickers/gradientPicker.js
function gradientPicker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { gradientPicker_typeof = function _typeof(obj) { return typeof obj; }; } else { gradientPicker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return gradientPicker_typeof(obj); }

function gradientPicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function gradientPicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function gradientPicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) gradientPicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) gradientPicker_defineProperties(Constructor, staticProps); return Constructor; }

function gradientPicker_possibleConstructorReturn(self, call) { if (call && (gradientPicker_typeof(call) === "object" || typeof call === "function")) { return call; } return gradientPicker_assertThisInitialized(self); }

function gradientPicker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function gradientPicker_getPrototypeOf(o) { gradientPicker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gradientPicker_getPrototypeOf(o); }

function gradientPicker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) gradientPicker_setPrototypeOf(subClass, superClass); }

function gradientPicker_setPrototypeOf(o, p) { gradientPicker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gradientPicker_setPrototypeOf(o, p); }




var gradientPicker_gradientPicker =
/*#__PURE__*/
function (_picker2D) {
  gradientPicker_inherits(gradientPicker, _picker2D);

  function gradientPicker() {
    gradientPicker_classCallCheck(this, gradientPicker);

    return gradientPicker_possibleConstructorReturn(this, gradientPicker_getPrototypeOf(gradientPicker).apply(this, arguments));
  }

  gradientPicker_createClass(gradientPicker, [{
    key: "getPattern",
    value: function getPattern(value) {
      var _this$size = this.size(),
          width = _this$size.width,
          height = _this$size.height;

      var canvas = document.createElement('canvas');
      canvas.width = this.pixelize || width;
      canvas.height = this.pixelize || height;
      var ctx = canvas.getContext("2d");
      var color = src_colorConvert(value).hex(false);
      color = src_colorConvert(color).sourceColor();
      color = src_colorConvert(color).hex(false);
      var clgWhite = ctx.createLinearGradient(0, 0, canvas.width, 0);
      clgWhite.addColorStop(0, "white");
      clgWhite.addColorStop(1, color);
      ctx.fillStyle = clgWhite;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      var clgBlack = ctx.createLinearGradient(0, canvas.height, 0, 0);
      clgBlack.addColorStop(0, "black");
      clgBlack.addColorStop(1, "transparent");
      ctx.fillStyle = clgBlack;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return canvas;
    }
  }, {
    key: "position",
    value: function position(color) {
      var _this$size2 = this.size(),
          width = _this$size2.width,
          height = _this$size2.height;

      var sorted = src_colorConvert(color).levels();
      return {
        y: Math.min(height - height * sorted.high.value / 255, height - 1),
        x: Math.min(width - width * sorted.low.value / sorted.high.value, width - 1)
      };
    }
  }]);

  return gradientPicker;
}(picker2D);

/* harmony default export */ var pickers_gradientPicker = (gradientPicker_gradientPicker);
// CONCATENATED MODULE: ./src/pickers/rainbowPicker.js
function rainbowPicker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { rainbowPicker_typeof = function _typeof(obj) { return typeof obj; }; } else { rainbowPicker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return rainbowPicker_typeof(obj); }

function rainbowPicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rainbowPicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rainbowPicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) rainbowPicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) rainbowPicker_defineProperties(Constructor, staticProps); return Constructor; }

function rainbowPicker_possibleConstructorReturn(self, call) { if (call && (rainbowPicker_typeof(call) === "object" || typeof call === "function")) { return call; } return rainbowPicker_assertThisInitialized(self); }

function rainbowPicker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function rainbowPicker_set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { rainbowPicker_set = Reflect.set; } else { rainbowPicker_set = function set(target, property, value, receiver) { var base = rainbowPicker_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return rainbowPicker_set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = rainbowPicker_set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function rainbowPicker_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { rainbowPicker_get = Reflect.get; } else { rainbowPicker_get = function _get(target, property, receiver) { var base = rainbowPicker_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return rainbowPicker_get(target, property, receiver || target); }

function rainbowPicker_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = rainbowPicker_getPrototypeOf(object); if (object === null) break; } return object; }

function rainbowPicker_getPrototypeOf(o) { rainbowPicker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rainbowPicker_getPrototypeOf(o); }

function rainbowPicker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) rainbowPicker_setPrototypeOf(subClass, superClass); }

function rainbowPicker_setPrototypeOf(o, p) { rainbowPicker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rainbowPicker_setPrototypeOf(o, p); }




var rainbowPicker_rainbowPicker =
/*#__PURE__*/
function (_picker1D) {
  rainbowPicker_inherits(rainbowPicker, _picker1D);

  function rainbowPicker(config) {
    var _this;

    rainbowPicker_classCallCheck(this, rainbowPicker);

    _this = rainbowPicker_possibleConstructorReturn(this, rainbowPicker_getPrototypeOf(rainbowPicker).call(this, config));

    _this.draw();

    return _this;
  }

  rainbowPicker_createClass(rainbowPicker, [{
    key: "getPattern",
    value: function getPattern(value) {
      var _this$size = this.size(),
          width = _this$size.width,
          height = _this$size.height;

      var canvas = document.createElement('canvas');
      canvas.width = this.pixelize || width;
      canvas.height = this.pixelize || height;
      var ctx = canvas.getContext("2d");
      var clg = this.horizontal ? ctx.createLinearGradient(0, 0, canvas.width, 0) : ctx.createLinearGradient(0, 0, 0, canvas.height);

      for (var x = 0; x < this.colors.length; x++) {
        clg.addColorStop(x / (this.colors.length - 1), this.colors[x]);
      }

      ctx.fillStyle = clg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return canvas;
    }
  }, {
    key: "position",
    value: function position(color) {
      var _this2 = this;

      var _this$size2 = this.size(),
          width = _this$size2.width,
          height = _this$size2.height;

      var _ref = function () {
        var degree = _this2.horizontal ? width / (_this2.colors.length - 1) : height / (_this2.colors.length - 1);

        var bitR = _this2.colors.map(function (x) {
          return src_colorConvert(x).bits().bit_rgb;
        });

        var sorted = src_colorConvert(color).levels();
        var bit = src_colorConvert(color).bits();
        var index = bitR.indexOf(bit.bit_rgb);

        function getMeasurement(rgb) {
          var color = src_colorConvert(rgb).hex();
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
  }, {
    key: "colors",
    get: function get() {
      return ["red", "fuchsia", "blue", "cyan", "lime", "yellow", "red"];
    }
  }, {
    key: "color",
    get: function get() {
      return rainbowPicker_get(rainbowPicker_getPrototypeOf(rainbowPicker.prototype), "color", this);
    },
    set: function set(value) {
      var color = src_colorConvert(value).hex(false);
      color = src_colorConvert(color).sourceColor();
      color = src_colorConvert(color).hex(false);
      var point = this.position(color);
      this.setSelectorPosition(point);

      _set(rainbowPicker_getPrototypeOf(rainbowPicker.prototype), "color", color, this, true);
    }
  }]);

  return rainbowPicker;
}(picker1D);

/* harmony default export */ var pickers_rainbowPicker = (rainbowPicker_rainbowPicker);
// CONCATENATED MODULE: ./src/pickers/alphaPicker.js
function alphaPicker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { alphaPicker_typeof = function _typeof(obj) { return typeof obj; }; } else { alphaPicker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return alphaPicker_typeof(obj); }

function alphaPicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function alphaPicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function alphaPicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) alphaPicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) alphaPicker_defineProperties(Constructor, staticProps); return Constructor; }

function alphaPicker_possibleConstructorReturn(self, call) { if (call && (alphaPicker_typeof(call) === "object" || typeof call === "function")) { return call; } return alphaPicker_assertThisInitialized(self); }

function alphaPicker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function alphaPicker_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { alphaPicker_get = Reflect.get; } else { alphaPicker_get = function _get(target, property, receiver) { var base = alphaPicker_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return alphaPicker_get(target, property, receiver || target); }

function alphaPicker_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = alphaPicker_getPrototypeOf(object); if (object === null) break; } return object; }

function alphaPicker_getPrototypeOf(o) { alphaPicker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return alphaPicker_getPrototypeOf(o); }

function alphaPicker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) alphaPicker_setPrototypeOf(subClass, superClass); }

function alphaPicker_setPrototypeOf(o, p) { alphaPicker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return alphaPicker_setPrototypeOf(o, p); }




var alphaPicker_alphaPicker =
/*#__PURE__*/
function (_picker1D) {
  alphaPicker_inherits(alphaPicker, _picker1D);

  function alphaPicker(config) {
    var _this;

    alphaPicker_classCallCheck(this, alphaPicker);

    _this = alphaPicker_possibleConstructorReturn(this, alphaPicker_getPrototypeOf(alphaPicker).call(this, config));

    (function () {
      var alphaBackground = getComputedStyle(_this.canvas).getPropertyValue('background-color');
      var bg = document.createElement('canvas');
      bg.width = _this.horizontal ? _this.canvas.height : _this.canvas.width;
      bg.height = bg.width;
      var ctx = bg.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, bg.width, bg.height);
      ctx.fillStyle = alphaBackground;
      ctx.fillRect(0, 0, bg.width / 2, bg.width / 2);
      ctx.fillRect(bg.width / 2, bg.width / 2, bg.width / 2, bg.width / 2);
      _this.canvas.style.background = 'url(' + bg.toDataURL("image/png") + ')';
    })();

    return _this;
  }

  alphaPicker_createClass(alphaPicker, [{
    key: "getPattern",
    value: function getPattern(value) {
      var _this$size = this.size(),
          width = _this$size.width,
          height = _this$size.height;

      var canvas = document.createElement('canvas');
      canvas.width = this.pixelize || width;
      canvas.height = this.pixelize || height;
      var ctx = canvas.getContext("2d");
      var color = src_colorConvert(value).rgb();
      color = src_colorConvert(color).hex(false);
      var clg = this.horizontal ? ctx.createLinearGradient(canvas.width, 0, 0, 0) : ctx.createLinearGradient(0, canvas.height, 0, 0);
      clg.addColorStop(0, "transparent");
      clg.addColorStop(1, color);
      ctx.fillStyle = clg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return canvas;
    }
  }, {
    key: "position",
    value: function position(color) {
      var _this$size2 = this.size(),
          width = _this$size2.width,
          height = _this$size2.height;

      var alphaValue = src_colorConvert(color).alpha();

      if (this.horizontal) {
        return {
          y: height,
          x: Math.round(width - width * alphaValue / 255)
        };
      } else {
        return {
          y: Math.round(height - height * alphaValue / 255),
          x: width
        };
      }
    }
  }, {
    key: "pointColor",
    value: function pointColor(point) {
      return this.color;
    }
  }, {
    key: "setColor",
    value: function setColor(value) {
      var color = src_colorConvert(value).rgb();

      alphaPicker_get(alphaPicker_getPrototypeOf(alphaPicker.prototype), "setColor", this).call(this, src_colorConvert(color).hex(false));
    }
  }, {
    key: "alphaValue",
    value: function alphaValue() {
      var ctx = this.canvas.getContext("2d");
      var rgba = ctx.getImageData(this.point.x, this.point.y, 1, 1).data;
      return rgba[3];
    }
  }]);

  return alphaPicker;
}(picker1D);

/* harmony default export */ var pickers_alphaPicker = (alphaPicker_alphaPicker);
// CONCATENATED MODULE: ./src/colorex.js







function colorex(config) {
  var _this = this;

  var _createPickerElement = pickerConstructor(config),
      gradient = _createPickerElement.gradient,
      rainbow = _createPickerElement.rainbow,
      alpha = _createPickerElement.alpha;

  var pixelize = getPixelize(config.pixelize);
  var gp, rp, ap;
  rp = new pickers_rainbowPicker({
    element: rainbow,
    pixelize: pixelize.rainbow,
    click: function click(point, color) {
      gp.setColor(color);

      if (ap) {
        ap.setColor(color);
      }

      if (config.onChange) {
        config.onChange({
          color: _this.color
        });
      }
    }
  });
  gp = new pickers_gradientPicker({
    element: gradient,
    pixelize: pixelize.gradient,
    click: function click(point, color) {
      if (ap) {
        ap.setColor(color);
      }

      if (config.onChange) {
        config.onChange({
          color: _this.color
        });
      }
    }
  });

  if (alpha) {
    ap = new pickers_alphaPicker({
      element: alpha,
      pixelize: pixelize.alpha,
      click: function click(point, color) {
        if (config.onChange) {
          config.onChange({
            color: _this.color
          });
        }
      }
    });
  }

  Object.defineProperty(this, 'color', {
    get: function get() {
      var rgb = src_colorConvert(gp.color).rgb();

      if (ap) {
        rgb.a = ap.alphaValue();
      }

      return src_colorConvert(rgb).hex(!!ap);
    },
    set: function set(value) {
      rp.color = value;
      gp.color = value;

      if (ap) {
        ap.color = value;
      }
    }
  });
  this.color = config.color || "red";

  function getPixelize(pixelize) {
    var result = {
      rainbow: 0,
      gradient: 0,
      alpha: 0
    };

    if (typeof pixelize === 'number') {
      result = {
        rainbow: pixelize,
        gradient: pixelize,
        alpha: pixelize
      };
    } else {
      result = Object.assign(result, pixelize);
    }

    return result;
  }
}

Object(modularization["a" /* default */])(colorex, 'colorex');
/* harmony default export */ var src_colorex = __webpack_exports__["default"] = (colorex);

/***/ })
/******/ ]);