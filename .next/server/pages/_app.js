module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./styles/settings/index.js

const Settings = external_styled_components_["createGlobalStyle"]`
  :root {
    --color-black: #2b243c;
    --color-white: #f2f2f2;
    --color-white-pure: #fff;
    --color-gray: #999999;
    --color-purple-dark: #312450;
    --color-purple-darker: #241b3a;
    --color-purple-light: #5E42A6;
    --color-purple: #493382;
    --color-orange: #D8473A;
    --color-orange-dark: #A82115;

    --size-s1: 15px;
    --size-s2: 20px;
    --size-s3: 40px;
    --size-s4: 60px;
    --size-s5: 80px;
    --size-s6: 150px;
    --size-s7: 240px;
  }
`;
/* harmony default export */ var settings = (Settings);
// CONCATENATED MODULE: ./styles/generic/index.js

const Generic = external_styled_components_["createGlobalStyle"]`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}
  ::selection {
    background-color: var(--color-purple-dark)!important;
    color: var(--color-white)!important;
  }
	body {
    font-family: 'AGaramondPro'!important;
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-dark)!important;
	}
`;
/* harmony default export */ var generic = (Generic);
// CONCATENATED MODULE: ./styles/base/index.js

const Base = external_styled_components_["createGlobalStyle"]`
  p{
    margin-bottom: 0px!important;
  }
  .has-error .ant-form-explain, .has-error .ant-form-split {
    margin-top: 0.5rem;
    font-size: 1rem!important;
    color: var(--color-white)!important;
  }
  .has-error .ant-input{
    border-color: var(--color-orange)!important;
  }
  .ant-form-item-label{
    margin-top: 15px!important;
  }
  a{
    text-decoration: none!important;
  }
`;
/* harmony default export */ var base = (Base);
// CONCATENATED MODULE: ./styles/fonts/index.js

const Fonts = external_styled_components_["createGlobalStyle"]`
  @font-face {
    font-family: 'AkzidenzGroteskBE';
    src: url('/assets/fonts/AkzidenzGroteskBE-Regular.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.otf')  format('opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.woff') format('woff'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.ttf')  format('truetype'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.svg#AkzidenzGroteskBE-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AkzidenzGroteskBE';
    src: url('/assets/fonts/AkzidenzGroteskBE-Bold.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.otf')  format('opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.woff') format('woff'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.ttf')  format('truetype'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.svg#AkzidenzGroteskBE-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'AGaramondPro';
    src: url('/assets/fonts/AGaramondPro-Regular.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AGaramondPro-Regular.otf')  format('opentype'),
         url('/assets/fonts/AGaramondPro-Regular.woff') format('woff'),
         url('/assets/fonts/AGaramondPro-Regular.ttf')  format('truetype'),
         url('/assets/fonts/AGaramondPro-Regular.svg#AGaramondPro-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AGaramondPro';
    src: url('/assets/fonts/AGaramondPro-Italic.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AGaramondPro-Italic.otf')  format('opentype'),
         url('/assets/fonts/AGaramondPro-Italic.woff') format('woff'),
         url('/assets/fonts/AGaramondPro-Italic.ttf')  format('truetype'),
         url('/assets/fonts/AGaramondPro-Italic.svg#AGaramondPro-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
  }
`;
/* harmony default export */ var fonts = (Fonts);
// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(settings, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(fonts, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(generic, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(base, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });