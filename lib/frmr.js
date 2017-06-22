(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Frmr", [], factory);
	else if(typeof exports === 'object')
		exports["Frmr"] = factory();
	else
		root["Frmr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller_registerer = __webpack_require__(1);

var _controller_registerer2 = _interopRequireDefault(_controller_registerer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Frmr = {
  controllers: _controller_registerer2.default
};

exports.default = Frmr;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _errors = __webpack_require__(2);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// HashTable containing controllers name/handler key/value pari
var controllersTable = new Map();

// Constants
var globalControllerName = "__GLOBAL__";
var defaultControllerOrder = 9999;

/* Private functions */
var _sortTable = function _sortTable(_ref, _ref2) {
  var _ref4 = _slicedToArray(_ref, 2),
      _ref4$1$order = _ref4[1].order,
      orderA = _ref4$1$order === undefined ? defaultControllerOrder : _ref4$1$order;

  var _ref3 = _slicedToArray(_ref2, 2),
      _ref3$1$order = _ref3[1].order,
      orderB = _ref3$1$order === undefined ? defaultControllerOrder : _ref3$1$order;

  return orderA - orderB;
};

var _addToTable = function _addToTable(controllerName, _ref5) {
  var order = _ref5.order,
      handler = _ref5.handler;

  controllersTable.set(controllerName, { order: order, handler: handler });
  if ((typeof order === "undefined" ? "undefined" : _typeof(order)) !== undefined) {
    controllersTable = new Map([].concat(_toConsumableArray(controllersTable.entries())).sort(_sortTable));
  }
};

var _isCorrectPage = function _isCorrectPage(controllerName) {
  if (document.querySelector("[data-controller=\"" + controllerName + "\"]")) {
    return true;
  }
};

var _runAll = function _runAll() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = controllersTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          _controllerName = _step$value[0],
          handler = _step$value[1].handler;

      if (_controllerName === globalControllerName || _isCorrectPage(_controllerName)) {
        handler();
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/* Public functions */
var registerController = function registerController(controllerName, handler, order) {
  if (typeof controllerName !== "string") {
    throw new _errors.ControllerError("argument controllerName should be a string");
  }

  if (typeof handler !== "function") {
    throw new _errors.ControllerError("argument handler should be a function");
  }

  if (controllersTable.get(controllerName)) {
    throw new _errors.ControllerError("you're trying to register more than one \"" + controllerName + "\" controller");
  }

  _addToTable(controllerName, { order: order, handler: handler });
  return publicAPI;
};

var registerGlobalController = function registerGlobalController(handler) {
  if (typeof controllerName === "string") {
    throw new _errors.ControllerError("registerGlobalController takes a function as only argument");
  }

  registerController(globalControllerName, handler, 0);
  return publicAPI;
};

var reset = function reset() {
  controllersTable = new Map();
  return publicAPI;
};

var run = function run(controllerName) {
  if (!controllerName) {
    _runAll();
  } else {
    try {
      var _controllersTable$get = controllersTable.get(controllerName),
          handler = _controllersTable$get.handler;

      handler();
    } catch (e) {
      throw new _errors.ControllerError(controllerName + " does not exists, cannot be run.");
    }
  }
};

var publicAPI = {
  registerController: registerController,
  registerGlobalController: registerGlobalController,
  reset: reset,
  run: run
};

exports.default = publicAPI;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControllerError = exports.ControllerError = function (_Error) {
  _inherits(ControllerError, _Error);

  function ControllerError(message) {
    _classCallCheck(this, ControllerError);

    var _this = _possibleConstructorReturn(this, (ControllerError.__proto__ || Object.getPrototypeOf(ControllerError)).call(this, message));

    _this.message = message;
    _this.name = "ControllerError";
    return _this;
  }

  return ControllerError;
}(Error);

/***/ })
/******/ ]);
});