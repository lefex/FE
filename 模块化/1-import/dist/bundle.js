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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.js");
// // 导入默认的模块
// import defaultExport from "module-name";
// // 全部导入，并重命名
// import * as name from "module-name";
// // 导入模块中的某一个
// import { export1 } from "module-name";
// // 导入模块中的某一个并重命名
// import { export1 as alias1 } from "module-name";
// // 导出模块中的两个
// import { export1 , export2 } from "module-name";
// // 导入模块中的默认值和其他值
// import myDefault, {foo, bar} from '/modules/my-module.js';
// import { foo , bar } from "module-name/path/to/specific/un-exported/file";
// import { export1 , export2 as alias2 , [...] } from "module-name";
// import defaultExport, { export1 [ , [...] ] } from "module-name";
// import defaultExport, * as name from "module-name";
// // 运行模块中的代码，但不导入任何值
// import "module-name";
// var promise = import("module-name");





console.log(_utils__WEBPACK_IMPORTED_MODULE_0__);

console.log('getUserName -----');
console.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getUserName"])());

console.log('Suyan -----');
console.log(new _utils__WEBPACK_IMPORTED_MODULE_0__["Suyan"]());

console.log('age -----');
console.log(_utils__WEBPACK_IMPORTED_MODULE_0__["age"]);

console.log('name -----');
console.log(_utils__WEBPACK_IMPORTED_MODULE_0__["name"]);

console.log('curTime -----');
console.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["curTime"])());

console.log('dAge -----');
console.log(_utils__WEBPACK_IMPORTED_MODULE_0__["dAge"]);

console.log('join -----');
console.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["join"])('suyan', ' learn FE'));

console.log('welcome -----');
console.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])());

/***/ }),

/***/ "./stringUtils.js":
/*!************************!*\
  !*** ./stringUtils.js ***!
  \************************/
/*! exports provided: join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
function join(str1, str2) {
    return str1 + str2;
}

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: getUserName, Suyan, age, name, curTime, dAge, default, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suyan", function() { return Suyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age", function() { return age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curTime", function() { return curTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dAge", function() { return DEFAULT_AGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return welcome; });
/* harmony import */ var _stringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringUtils */ "./stringUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _stringUtils__WEBPACK_IMPORTED_MODULE_0__["join"]; });

function getUserName() {
    return 'suyan';
}
class Suyan {
    constructor() {
        console.log('suyan created!');
    }
}
let age = 24, name = 'suyan';

const curTime = () => {
    return new Date();
}
const DEFAULT_AGE = 10;


function welcome() {
    return 'welcome to learn js module by suyan';
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map