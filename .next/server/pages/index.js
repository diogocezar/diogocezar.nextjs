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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+bdN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return devices; });
const sizes = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '575px',
  tablet: '700px',
  laptop: '992px',
  laptopLarge: '1180px',
  desktop: '1520px',
  desktopLarge: '1800px'
};
const devices = {
  mobileSmall: `(max-width: ${sizes.mobileSmall})`,
  mobileMedium: `(max-width: ${sizes.mobileMedium})`,
  mobileLarge: `(max-width: ${sizes.mobileLarge})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopLarge: `(max-width: ${sizes.laptopLarge})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopLarge: `(max-width: ${sizes.desktopLarge})`
};

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "04yt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LineSeparator; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./objects/Separator/styles.js


const StyledSeparator = external_styled_components_default.a.header.withConfig({
  displayName: "styles__StyledSeparator",
  componentId: "fdhc8e-0"
})(["width:100%;border-bottom:1px solid ", ";padding-bottom:5px;margin-bottom:var(--size-s5);@media ", "{padding-bottom:5px;margin-bottom:var(--size-s3);}h2{color:var(--color-white);font-family:'AGaramondPro';font-style:italic;font-weight:normal;font-size:2rem;margin-bottom:0px !important;@media ", "{font-size:1.6rem;}span{font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:2.5rem;font-style:normal;color:", "!important;margin-right:10px;@media ", "{font-size:1.8rem;}}}"], ({
  type
}) => type === 'orange' ? 'rgba(49, 36, 80, 0.36)' : 'rgba(153, 153, 153, 0.36)', devices["a" /* devices */].laptop, devices["a" /* devices */].laptop, ({
  type
}) => type === 'orange' ? 'var(--color-purple-dark);' : 'var(--color-orange);', devices["a" /* devices */].laptop);
const StyledLineSeparator = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledLineSeparator",
  componentId: "fdhc8e-1"
})(["position:relative;float:left;width:100%;margin-top:30px;border-bottom:1px solid ", ";padding-bottom:5px;margin-bottom:var(--size-s5);@media ", "{padding-bottom:5px;margin-bottom:var(--size-s3);}"], ({
  type
}) => type === 'orange' ? 'rgba(49, 36, 80, 0.36)' : 'rgba(153, 153, 153, 0.36)', devices["a" /* devices */].laptop);

// CONCATENATED MODULE: ./objects/Separator/index.js





const Separator = ({
  number,
  title,
  type
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledSeparator, {
  type: type,
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: number
    }), title]
  })
});

const LineSeparator = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledLineSeparator, {});

/* harmony default export */ var objects_Separator = __webpack_exports__["b"] = (Separator);


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./helpers/markdown.ts
var markdown = __webpack_require__("DP8O");

// EXTERNAL MODULE: ./components/Containers/index.js + 1 modules
var Containers = __webpack_require__("HKD3");

// EXTERNAL MODULE: ./styles/animations/index.js
var animations = __webpack_require__("A6Ii");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/AlignContent/index.js + 1 modules
var AlignContent = __webpack_require__("c3l3");

// EXTERNAL MODULE: ./objects/Separator/index.js + 1 modules
var Separator = __webpack_require__("04yt");

// EXTERNAL MODULE: ./objects/Images/index.js + 1 modules
var Images = __webpack_require__("vGoh");

// EXTERNAL MODULE: ./objects/Titles/index.js + 1 modules
var Titles = __webpack_require__("zspC");

// EXTERNAL MODULE: ./objects/Quotes/index.js + 1 modules
var Quotes = __webpack_require__("cqxb");

// EXTERNAL MODULE: ./objects/Button/index.js + 1 modules
var Button = __webpack_require__("mmLo");

// CONCATENATED MODULE: ./components/Pages/Index/Introduction/index.js












const Introductions = ({
  title,
  subtitle,
  biography
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Containers["b" /* Section */], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Separator["b" /* default */], {
    number: "01",
    title: "Introduction"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AlignContent["c" /* LeftContent */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Images["b" /* default */], {})
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AlignContent["e" /* RightContent */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Titles["b" /* Title */], {
      type: "main",
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Titles["a" /* SubTitle */], {
      color: "purple-dark",
      children: subtitle
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Quotes["b" /* QuotedParagraph */], {
      first: "Biography",
      children: biography
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/about",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["b" /* default */], {
          type: "purple",
          children: "Read More"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/assets/docs/diogocezar.pdf",
      target: "_blank",
      download: "diogocezar.pdf",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["b" /* default */], {
        type: "purple",
        children: "Download Resume"
      })
    })]
  })]
});

/* harmony default export */ var Introduction = (Introductions);
// CONCATENATED MODULE: ./components/Pages/Index/Content/index.js









const Content = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Containers["b" /* Section */], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Separator["b" /* default */], {
    number: "02",
    title: "Content"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AlignContent["e" /* RightContent */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Titles["b" /* Title */], {
      type: "main",
      children: "Comming soon"
    })
  })]
});

/* harmony default export */ var Index_Content = (Content);
// CONCATENATED MODULE: ./components/Pages/Index/Conclusion/index.js








const Conclusion = ({
  citation,
  citationAuthor
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Containers["b" /* Section */], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Separator["b" /* default */], {
    number: "03",
    title: "Conclusion"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AlignContent["e" /* RightContent */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Quotes["a" /* QuotedMain */], {
      author: citationAuthor,
      children: citation
    })
  })]
});

/* harmony default export */ var Index_Conclusion = (Conclusion);
// EXTERNAL MODULE: ./components/Pages/Footer/index.tsx + 2 modules
var Footer = __webpack_require__("nQRY");

// CONCATENATED MODULE: ./pages/index.tsx










const Index = ({
  index,
  footer
}) => {
  const {
    title,
    subtitle,
    biography,
    citation,
    citationAuthor
  } = index.data;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(animations["d" /* MainAnimated */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Containers["a" /* Page */], {
      color: "purple",
      paddingBottom: "0",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Containers["c" /* Wrapper */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Introduction, {
          title: title,
          subtitle: subtitle,
          biography: biography
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Index_Content, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Index_Conclusion, {
          citation: citation,
          citationAuthor: citationAuthor
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {
        isMain: true,
        content: footer
      })]
    })
  });
};

async function getStaticProps() {
  const indexContent = Object(markdown["a" /* getFileContent */])("content/pages/index.md");
  const footerContent = Object(markdown["a" /* getFileContent */])("content/pages/footer.md");
  return {
    props: {
      index: indexContent,
      footer: footerContent.data
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "A6Ii":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MainAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutAnimated; });
/* unused harmony export BlogAnimated */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KeepInTouchAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PortifolioAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EducationalAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NotFoundAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Transition; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Transition = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transition:all 0.15s ease !important;"]);
const appear = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const disappear = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:1;}to{opacity:0;}"]);
const time = '0.9s';
const baseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "animations__baseAnimation",
  componentId: "sc-1no29dh-0"
})(["position:relative;float:left;width:100%;height:100%;"]);
const MainAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__MainAnimated",
  componentId: "sc-1no29dh-1"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);
const AboutAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__AboutAnimated",
  componentId: "sc-1no29dh-2"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);
const BlogAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__BlogAnimated",
  componentId: "sc-1no29dh-3"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);
const KeepInTouchAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__KeepInTouchAnimated",
  componentId: "sc-1no29dh-4"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);
const PortifolioAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__PortifolioAnimated",
  componentId: "sc-1no29dh-5"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);
const EducationalAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__EducationalAnimated",
  componentId: "sc-1no29dh-6"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);
const NotFoundAnimated = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(baseAnimation).withConfig({
  displayName: "animations__NotFoundAnimated",
  componentId: "sc-1no29dh-7"
})(["&.page-enter{animation:", " ", " ease both;}&.page-exit{animation:", " ", " ease both;}"], appear, time, disappear, time);


/***/ }),

/***/ "DP8O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFileContent; });
/* unused harmony export getFolderContents */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);



const getFilesFromFolder = folder => {
  return fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(`${process.cwd()}/${folder}`);
};

const getFileContent = file => {
  const markdownData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(`${process.cwd()}/${file}`).toString();
  const {
    content,
    data,
    excerpt
  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(markdownData, {
    excerpt: true
  });
  return {
    content,
    data,
    excerpt
  };
};

const getFolderContents = folder => {
  const files = getFilesFromFolder(folder);
  const folderContents = files.map(fileName => {
    return getFileContent(`${folder}/${fileName}`);
  });
  return folderContents;
};



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HKD3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Page; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Section; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ Wrapper; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./components/Containers/styles.js


const StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledPage",
  componentId: "dqug5n-0"
})(["background-color:", "!important;position:relative;float:left;padding-bottom:", "!important;width:100%;", ""], ({
  color
}) => `var(--color-${color})` || 'var(--color-purple)', ({
  paddingBottom
}) => paddingBottom || 'var(--size-s1)', ({
  decoration,
  decorationColor
}) => {
  if (decoration) {
    return `
        padding-top: 40px;
        &::before,
        &::after {
          position: absolute;
          content: '';
          pointer-events: none;
          content: '';
          right: 0;
          left: 0;
          z-index: 10;
          display: block;
          height: 90px;
          background-size: 50px 100%;
        }
        &::before {
          top: -90px;
          background-image: -webkit-gradient(
            linear,
            0 0,
            300% 100%,
            color-stop(0.25, transparent),
            color-stop(0.25, var(--color-${decorationColor}))
          );
          background-image: linear-gradient(315deg, var(--color-${decorationColor}) 25%, transparent 25%),
            linear-gradient(45deg, var(--color-${decorationColor}) 25%, transparent 25%);
          background-position: 50%;
        }
      `;
  }
});
const StyledSection = external_styled_components_default.a.section.withConfig({
  displayName: "styles__StyledSection",
  componentId: "dqug5n-1"
})(["position:relative;float:left;width:100%;padding-bottom:var(--size-s4);@media ", "{&:last-child{padding-bottom:", "!important;}}"], devices["a" /* devices */].laptop, ({
  isLast
}) => isLast ? 'var(--size-s1)' : 'var(--size-s4)');
const StyledWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledWrapper",
  componentId: "dqug5n-2"
})(["position:relative;margin-left:auto;margin-right:auto;padding-left:var(--size-s6);padding-right:var(--size-s6);padding-bottom:var(--size-s5);padding-top:var(--size-s5);@media ", "{padding-bottom:var(--size-s5);padding-top:var(--size-s5);padding-left:var(--size-s5);padding-right:var(--size-s5);}@media ", "{padding-left:var(--size-s4);padding-right:var(--size-s4);}@media ", "{padding-bottom:var(--size-s3);padding-top:var(--size-s1);padding-left:var(--size-s2);padding-right:var(--size-s2);}"], devices["a" /* devices */].desktopLarge, devices["a" /* devices */].laptopLarge, devices["a" /* devices */].tablet);

// CONCATENATED MODULE: ./components/Containers/index.js


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Page = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledPage, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

const Section = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledSection, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

const Wrapper = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledWrapper, {
  children: children
});



/***/ }),

/***/ "NUC6":
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "ThwB":
/***/ (function(module, exports) {

module.exports = require("svg-inline-react");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UwqX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./objects/Link/styles.js

const StyledLink = external_styled_components_default.a.a.withConfig({
  displayName: "styles__StyledLink",
  componentId: "sc-1wisbep-0"
})(["font-style:italic;", " color:", "!important;&:visited{color:", "!important;}"], ({
  buttonCenter
}) => {
  if (buttonCenter) {
    return `
        position: relative;
        float: left;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
  }
}, ({
  type
}) => {
  switch (type) {
    case 'orange':
      return 'var(--color-orange)';

    case 'white':
      return 'var(--color-white)';

    default:
      return 'var(--color-orange)';
  }
}, ({
  type
}) => {
  switch (type) {
    case 'orange':
      return 'var(--color-orange)';

    case 'white':
      return 'var(--color-white)';

    default:
      return 'var(--color-orange)';
  }
});
/* harmony default export */ var styles = (StyledLink);
// CONCATENATED MODULE: ./objects/Link/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isExternal = target => target !== '_blank' ? 'noopener noreferrer' : '';

const Link = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles, _objectSpread(_objectSpread({}, props), {}, {
  rel: isExternal(props.target),
  children: props.children
}));

/* harmony default export */ var objects_Link = __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "baqg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ListContainer; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ListContainerFooter; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ ListItem; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ ListItemFooter; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// EXTERNAL MODULE: ./styles/animations/index.js
var animations = __webpack_require__("A6Ii");

// CONCATENATED MODULE: ./components/ListContainer/styles.js



const StyledListContainer = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__StyledListContainer",
  componentId: "sc-18lzm9g-0"
})(["position:relative;float:left;width:100%;height:100%;margin:0;padding:0;a{text-decoration:none;color:inherit;}"]);
const StyledListContainerFooter = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__StyledListContainerFooter",
  componentId: "sc-18lzm9g-1"
})(["position:relative;float:right;width:100%;height:100%;margin:0 auto;padding:0;display:flex;justify-content:space-between;max-width:360px;@media ", "{max-width:none;align-content:center;align-items:center;justify-content:space-around;}@media ", "{float:none;margin:0 auto;margin-top:60px;max-width:460px;}"], devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop);
const StyledListItem = external_styled_components_default.a.li.withConfig({
  displayName: "styles__StyledListItem",
  componentId: "sc-18lzm9g-2"
})(["position:relative;float:left;width:100%;height:100%;list-style:none;border-bottom:1px solid ", ";padding-bottom:0;margin-bottom:25px;color:var(--color-purple-dark);&:last-child{border-bottom:none;}a > h3{", "}&:hover a > h3{color:", "!important;}"], ({
  type
}) => type === 'orange' ? 'rgba(49, 36, 80, 0.1)' : 'rgba(153, 153, 153, 0.1)', animations["g" /* Transition */], ({
  hoverColor,
  type
}) => {
  if (hoverColor) return `var(--color-${hoverColor})`;
  if (type === 'orange') return 'var(--color-purple-dark)';
  return 'var(--color-orange)';
});
const StyledListItemFooter = external_styled_components_default.a.li.withConfig({
  displayName: "styles__StyledListItemFooter",
  componentId: "sc-18lzm9g-3"
})(["position:relative;float:left;list-style:none;svg{height:60px;width:60px;}svg #bg{", "}svg #icon,svg .icon{", "}&:hover svg #bg{fill:var(--color-orange);}&:hover svg #icon,&:hover svg .icon{stroke:var(--color-white);}@media ", "{svg{height:50px;width:50px;}}@media ", "{svg{height:45px;width:45px;}}@media ", "{svg{height:50px;width:50px;}}"], animations["g" /* Transition */], animations["g" /* Transition */], devices["a" /* devices */].desktopLarge, devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop);

// CONCATENATED MODULE: ./components/ListContainer/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ListContainer = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledListContainer, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

const ListContainerFooter = (_ref2) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledListContainerFooter, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

const ListItem = (_ref3) => {
  let {
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledListItem, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

const ListItemFooter = (_ref4) => {
  let {
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledListItemFooter, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};



/***/ }),

/***/ "c3l3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ LeftContent; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ RightContent; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ FullContent; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ LeftContentList; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ RightContentList; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CenterContent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./components/AlignContent/styles.js


const StyledLeftContent = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledLeftContent",
  componentId: "zid1et-0"
})(["width:32.27805%;float:left;margin-right:1.58293%;@media ", "{width:23%;}@media ", "{width:100%;margin-right:0;}"], devices["a" /* devices */].desktop, devices["a" /* devices */].laptopLarge);
const StyledRightContent = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledRightContent",
  componentId: "zid1et-1"
})(["width:66.13902%;float:right;margin-right:0;@media ", "{width:67%;}@media ", "{width:100%;}"], devices["a" /* devices */].desktop, devices["a" /* devices */].laptopLarge);
const StyledFullContent = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledFullContent",
  componentId: "zid1et-2"
})(["width:100%;float:left;position:relative;"]);
const StyledLeftContentList = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledLeftContentList",
  componentId: "zid1et-3"
})(["width:80%;position:relative;float:left;height:100%;@media ", "{width:100%;}"], devices["a" /* devices */].laptop);
const StyledRightContentList = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledRightContentList",
  componentId: "zid1et-4"
})(["position:absolute;top:0;right:0;width:20%;float:right;margin-right:0;display:flex;justify-content:center;align-items:center;height:100%;@media ", "{margin-bottom:var(--size-s2);position:relative;float:left;width:100%;}"], devices["a" /* devices */].laptop);
const StyledCenter = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledCenter",
  componentId: "zid1et-5"
})(["display:flex;justify-content:center;align-items:center;height:100%;"]);

// CONCATENATED MODULE: ./components/AlignContent/index.js




const LeftContent = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledLeftContent, {
  children: children
});

const RightContent = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledRightContent, {
  children: children
});

const FullContent = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledFullContent, {
  children: children
});

const CenterContent = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledCenter, {
  children: children
});

const LeftContentList = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledLeftContentList, {
  children: children
});

const RightContentList = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledRightContentList, {
  children: children
});



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cqxb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ QuotedMain; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ QuotedParagraph; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./objects/Quotes/styles.js


const StyledQuotedMain = external_styled_components_default.a.blockquote.withConfig({
  displayName: "styles__StyledQuotedMain",
  componentId: "sc-1jyjzzy-0"
})(["p{color:var(--color-white);font-family:'AGaramondPro';font-style:normal;font-weight:normal;font-size:1.6rem;line-height:2.7rem;margin-bottom:var(--size-s3);padding-right:var(--size-s6);@media ", "{padding-right:0;font-size:1.4rem;line-height:2.3rem;}@media ", "{text-align:center;}@media ", "{font-size:1.2rem;line-height:2rem;}}span{font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:1.5rem;color:var(--color-white);margin-top:var(--size-s3);display:inline-block;@media ", "{font-size:1.4rem;width:100%;}@media ", "{text-align:center;}@media ", "{font-size:1.2rem;}}"], devices["a" /* devices */].desktop, devices["a" /* devices */].laptop, devices["a" /* devices */].tablet, devices["a" /* devices */].desktop, devices["a" /* devices */].laptop, devices["a" /* devices */].tablet);
const StyledQuotedParagraph = external_styled_components_default.a.blockquote.withConfig({
  displayName: "styles__StyledQuotedParagraph",
  componentId: "sc-1jyjzzy-1"
})(["color:var(--color-white);font-family:'AGaramondPro';font-style:normal;font-weight:normal;font-size:1.6rem;line-height:2.7rem;margin-bottom:var(--size-s4);padding-right:var(--size-s6);@media ", "{padding-right:0;font-size:1.4rem;line-height:2.3rem;}@media ", "{font-size:1.2rem;line-height:2rem;}span{font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:1.5rem;@media ", "{font-size:1.4rem;}@media ", "{font-size:1.2rem;}}"], devices["a" /* devices */].desktop, devices["a" /* devices */].tablet, devices["a" /* devices */].desktop, devices["a" /* devices */].tablet);

// CONCATENATED MODULE: ./objects/Quotes/index.js





const QuotedMain = ({
  author,
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledQuotedMain, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["\u201C", children, "\u201D"]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    children: author
  })]
});

const QuotedParagraph = ({
  first,
  children,
  hasQuotedMarks = true
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledQuotedParagraph, {
  children: hasQuotedMarks && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      children: [first, " \u2014 "]
    }), "\u201C", children, "\u201D"]
  }) || /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      children: [first, " \u2014 "]
    }), children]
  })
});



/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "mmLo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ButtonList; });

// UNUSED EXPORTS: ButtonBack

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__("NUC6");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "svg-inline-react"
var external_svg_inline_react_ = __webpack_require__("ThwB");
var external_svg_inline_react_default = /*#__PURE__*/__webpack_require__.n(external_svg_inline_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./objects/Button/styles.js


const BaseButton = external_styled_components_default.a.button.withConfig({
  displayName: "styles__BaseButton",
  componentId: "sc-1jzeunb-0"
})(["padding:20px 26px;border-radius:0px!important;text-transform:uppercase;margin-right:", ";font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:1rem;height:60px;cursor:pointer;margin-bottom:", ";min-width:180px;float:left;display:block;border:none;background:none;position:relative;z-index:1;-webkit-backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;background:", ";color:", ";overflow:hidden;-webkit-transition:color 0.3s;transition:color 0.3s;box-shadow:2px 0px 10px 2px rgba(0,0,0,0.1);@media ", "{margin-bottom:10px !important;}&::before,&::after{content:'';position:absolute;height:110%;width:110%;bottom:100%;left:0;z-index:-1;-webkit-transition:-webkit-transform 0.3s;transition:transform 0.3s;-webkit-transition-timing-function:cubic-bezier(0.75,0,0.125,1);transition-timing-function:cubic-bezier(0.75,0,0.125,1);}&::before{background:", ";}&::after{background:", ";}&:hover{color:", ";}&:hover::before,&:hover::after{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}&:hover::after{-webkit-transition-delay:0.175s;transition-delay:0.175s;}"], ({
  right
}) => right || 'var(--size-s1)', ({
  marginBottom
}) => marginBottom || 'var(--size-s1)', ({
  type
}) => type === 'orange' ? 'var(--color-orange)' : 'var(--color-white)', ({
  type
}) => type === 'orange' ? 'var(--color-white)' : 'var(--color-purple-dark)', devices["a" /* devices */].laptopLarge, ({
  type
}) => {
  switch (type) {
    case 'orange':
      return 'var(--color-white)';

    case 'purple':
      return 'var(--color-orange-dark)';

    default:
      return 'var(--color-purple-dark)';
  }
}, ({
  type
}) => {
  switch (type) {
    case 'orange':
      return 'var(--color-white-pure)';

    case 'purple':
      return 'var(--color-orange)';

    default:
      return 'var(--color-purple)';
  }
}, ({
  type
}) => type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-white)');
const StyledButton = external_styled_components_default()(BaseButton).withConfig({
  displayName: "styles__StyledButton",
  componentId: "sc-1jzeunb-1"
})(["margin-top:40px;@media ", "{margin-top:10px;}@media ", "{width:70%;margin-left:15%;margin-right:15%;}@media ", "{width:80%;margin-left:10%;margin-right:10%;}"], devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop, devices["a" /* devices */].tablet);
const StyledButtonList = external_styled_components_default()(BaseButton).withConfig({
  displayName: "styles__StyledButtonList",
  componentId: "sc-1jzeunb-2"
})(["@media ", "{margin-top:10px;}@media ", "{width:70%;margin-left:15%;margin-right:15%;}@media ", "{width:80%;margin-left:10%;margin-right:10%;}"], devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop, devices["a" /* devices */].tablet);
const StyledButtonBackContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledButtonBackContainer",
  componentId: "sc-1jzeunb-3"
})(["display:flex;justify-content:center;align-items:center;position:fixed;border-radius:50%;width:100px;height:100px;background-color:", ";top:30px;left:8vw;transition:all 0.15s ease-in !important;z-index:9998 !important;box-shadow:2px 0px 15px 2px rgba(0,0,0,0.2);&.display-true{display:flex;opacity:100;}&.display-false{display:hidden;opacity:0;}&:hover{svg{.st0{transition:all 0.15s ease-in !important;stroke:", ";}}}svg{position:absolute;top:4px;left:0;height:40px;width:100%;.st0{transition:all 0.15s ease-in !important;stroke:", ";}}@media ", "{left:5vw;}@media ", "{left:4vw;}@media ", "{left:5vw;}@media ", "{width:80px;height:80px;left:5vw;top:5vw;svg{top:6px;left:0;height:30px;width:100%;}}@media ", "{width:70px;height:70px;}@media ", "{}@media ", "{}@media ", "{}"], ({
  color
}) => {
  switch (color) {
    case 'orange':
      return 'var(--color-white-pure)';

    case 'purple':
      return 'var(--color-orange)';

    default:
      return 'var(--color-black)';
  }
}, ({
  color
}) => {
  switch (color) {
    case 'orange':
      return 'var(--color-purple-dark)';

    default:
      return 'var(--color-orange)';
  }
}, ({
  color
}) => {
  switch (color) {
    case 'orange':
      return 'var(--color-orange)';

    default:
      return 'var(--color-white)';
  }
}, devices["a" /* devices */].laptopLarge, devices["a" /* devices */].desktop, devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop, devices["a" /* devices */].tablet, devices["a" /* devices */].mobileLarge, devices["a" /* devices */].mobileMedium, devices["a" /* devices */].mobileSmall);
const StyledButtonBack = external_styled_components_default()(BaseButton).withConfig({
  displayName: "styles__StyledButtonBack",
  componentId: "sc-1jzeunb-4"
})(["font-size:1.3rem;background:none!important;color:var(--color-white)!important;box-shadow:none!important;margin-top:14px;height:45px;line-height:20px;&::before,&::after,&:hover{background:none!important;};"]);

// EXTERNAL MODULE: ./content/data/index.js
var data = __webpack_require__("ohE5");

// CONCATENATED MODULE: ./objects/Button/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Button = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledButton, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

const ButtonList = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledButtonList, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

class Button_ButtonBack extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "handleScroll", () => {
      this.setState({
        display: window.scrollY > 600
      });
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce_default()(this.handleScroll, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce_default()(this.handleScroll, 100));
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(next_link["Link"], {
      to: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledButtonBackContainer, {
        className: `display-${this.state.display}`,
        color: this.props.color,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledButtonBack, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_svg_inline_react_default.a, {
            src: data["a" /* arrow */]
          })
        })
      })
    });
  }

}

/* harmony default export */ var objects_Button = __webpack_exports__["b"] = (Button);


/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nQRY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "svg-inline-react"
var external_svg_inline_react_ = __webpack_require__("ThwB");
var external_svg_inline_react_default = /*#__PURE__*/__webpack_require__.n(external_svg_inline_react_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./components/Footer/styles.js


const StyledFooter = external_styled_components_default.a.footer.withConfig({
  displayName: "styles__StyledFooter",
  componentId: "sc-1bt7l8s-0"
})(["position:relative;float:left;width:100%;background-color:var(--color-purple-dark);position:relative;margin-left:auto;margin-right:auto;margin-top:var(--size-s4);display:flex;padding-left:var(--size-s6);padding-right:var(--size-s6);padding-bottom:var(--size-s2);padding-top:", "!important;@media ", "{padding-bottom:var(--size-s2);padding-left:var(--size-s6);padding-right:var(--size-s6);}@media ", "{padding-bottom:var(--size-s3);padding-left:var(--size-s3);padding-right:var(--size-s3);}@media ", "{display:block;}@media ", "{padding-bottom:80px;}&::before,&::after{position:absolute;content:'';pointer-events:none;content:'';right:0;left:0;z-index:10;display:block;height:90px;background-size:50px 100%;}"], ({
  isMain
}) => isMain ? 'var(--size-s5)' : 'var(--size-s1)', devices["a" /* devices */].desktopLarge, devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop, devices["a" /* devices */].tablet);
const StyledColumnFooter = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledColumnFooter",
  componentId: "sc-1bt7l8s-1"
})(["width:33.33%;@media ", "{position:relative;float:left;width:100% !important;margin-bottom:var(--size-s3);&:last-child{margin-bottom:0px;}}"], devices["a" /* devices */].laptopLarge);
const StyledTitleFooter = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__StyledTitleFooter",
  componentId: "sc-1bt7l8s-2"
})(["font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:1.8rem;text-transform:uppercase;line-height:2.5rem;margin-bottom:1.5rem;text-decoration:none !important;text-align:", ";color:var(--color-orange) !important;@media ", "{text-align:center;}"], ({
  align
}) => align || 'center', devices["a" /* devices */].laptopLarge);
const StyledContentFooter = external_styled_components_default.a.div.withConfig({
  displayName: "styles__StyledContentFooter",
  componentId: "sc-1bt7l8s-3"
})(["color:var(--color-white);font-family:'AGaramondPro';font-style:normal;font-weight:normal;font-size:1.5rem;line-height:2rem;margin-bottom:var(--size-s3);text-align:", ";padding:", ";@media ", "{padding:", ";}@media ", "{font-size:1.3rem;line-height:1.8rem;padding:", ";}@media ", "{font-size:1.2rem;line-height:1.6rem;padding:", ";}@media ", "{padding:0;text-align:center;}a{color:var(--color-orange) !important;text-decoration:none;}"], ({
  align
}) => align || 'center', ({
  align
}) => {
  switch (align) {
    case 'center':
      return '0 25%';

    case 'left':
      return '0 25% 0 0';

    case 'right':
      return '0 0 0 25%';

    default:
      return '0 25%';
  }
}, devices["a" /* devices */].desktopLarge, ({
  align
}) => {
  switch (align) {
    case 'center':
      return '0 15%';

    case 'left':
      return '0 15% 0 0';

    case 'right':
      return '0 0 0 15%';

    default:
      return '0 15%';
  }
}, devices["a" /* devices */].desktop, ({
  align
}) => {
  switch (align) {
    case 'center':
      return '0 10%';

    case 'left':
      return '0 10% 0 0';

    case 'right':
      return '0 0 0 10%';

    default:
      return '0 10%';
  }
}, devices["a" /* devices */].laptop, ({
  align
}) => {
  switch (align) {
    case 'center':
      return '0 5%';

    case 'left':
      return '0 5% 0 0';

    case 'right':
      return '0 0 0 5%';

    default:
      return '0 5%';
  }
}, devices["a" /* devices */].laptopLarge);

// CONCATENATED MODULE: ./components/Footer/index.js


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Footer = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledFooter, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

const ColumnFooter = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledColumnFooter, {
  children: children
});

const TitleFooter = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTitleFooter, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

const ContentFooter = (_ref2) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledContentFooter, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ var components_Footer = (Footer);

// EXTERNAL MODULE: ./components/ListContainer/index.js + 1 modules
var ListContainer = __webpack_require__("baqg");

// EXTERNAL MODULE: ./objects/Link/index.js + 1 modules
var Link = __webpack_require__("UwqX");

// EXTERNAL MODULE: ./content/data/index.js
var data = __webpack_require__("ohE5");

// CONCATENATED MODULE: ./components/Pages/Footer/index.tsx








const FooterMain = ({
  isMain = true,
  content = null
}) => {
  const {
    email,
    phone,
    socialGithub,
    socialTwitter,
    socialInstagram,
    socialFacebook,
    socialLinkedin
  } = content;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(components_Footer, {
    isMain: isMain,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ColumnFooter, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TitleFooter, {
        align: "left",
        children: "SOURCE CODE"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentFooter, {
        align: "left",
        children: ["This website is open source and you can download", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
          href: "http://www.github.com/diogocezar/diogocezar.github.io/",
          target: "_blank",
          children: "right here."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ColumnFooter, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TitleFooter, {
        children: "CONTACT"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentFooter, {
        children: ["You can contact me through", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
          href: `mailto:${email}`,
          children: email
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), phone]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ColumnFooter, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TitleFooter, {
        align: "right",
        children: "SOCIAL NETWORKS"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentFooter, {
        align: "right",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ListContainer["b" /* ListContainerFooter */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListContainer["d" /* ListItemFooter */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
              href: `mailto:${socialGithub}`,
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_svg_inline_react_default.a, {
                src: data["c" /* iconFooterGithub */]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListContainer["d" /* ListItemFooter */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
              href: `mailto:${socialTwitter}`,
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_svg_inline_react_default.a, {
                src: data["f" /* iconFooterTwitter */]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListContainer["d" /* ListItemFooter */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
              href: `mailto:${socialInstagram}`,
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_svg_inline_react_default.a, {
                src: data["d" /* iconFooterInstagram */]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListContainer["d" /* ListItemFooter */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
              href: `mailto:${socialFacebook}`,
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_svg_inline_react_default.a, {
                src: data["b" /* iconFooterFacebook */]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListContainer["d" /* ListItemFooter */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
              href: `mailto:${socialLinkedin}`,
              target: "_blank",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_svg_inline_react_default.a, {
                src: data["e" /* iconFooterLinkedIn */]
              })
            })
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ var Pages_Footer = __webpack_exports__["a"] = (FooterMain);

/***/ }),

/***/ "ohE5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return iconFooterGithub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return iconFooterTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return iconFooterInstagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconFooterFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return iconFooterLinkedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrow; });
const skills = ['JAVASCRIPT', 'UML', 'MYSQL', 'AJAX', 'IA', 'OOP', 'ECMASCRIPT 6+', 'DISTRIBUTED COMPUTING', 'PARALLEL PROCESSING', 'POSTGRESQL', 'JAVA', 'CSS', 'TASK RUNNERS', 'RESPONSIVE DESIGN', 'CSS FRAMEWORKS', 'JAVASCRIPT FRAMEWORKS', 'WEB PERFORMANCE', 'TERMINAL AND SHELL SCRIPT', 'PHP', 'SQLSERVER', 'SQL', 'JQUERY', 'HTML5', 'SVN', 'XML', 'NODEJS', 'MONGODB', 'C#', 'GIT', 'DEV ANDROID', 'SENCHA JS', 'SENCHA TOUCH', 'WORDPRESS', 'OPENCART', 'OPENCART', 'VUE.JS', 'REACT JS', 'STYLED COMPONENTS', 'REDUX', 'AWS S3', 'WOOCOMMERCE', 'BOOTSTRAP', 'MATERIALIZE CSS', 'MAC', 'MVC', 'PHOTOSHOP', 'ILLUSTRATOR', 'GULP', 'FOUNDATION', 'LESS', 'SASS', 'WINDOWS', 'LARAVEL', 'DOCKER', 'LINUX', 'NESTJS', 'ITSCSS', 'ESLINT', 'TSLINT', 'TYPESCRIPT', 'WEBPACK', 'BROWSERIFY', 'PARCEL', 'RSCSS', 'BOWER', 'JEST', 'ADONISJS', 'FLEXBOX', 'GRID LAYOUT', 'CODEIGNITER', 'AFTER EFFECTS', 'PREMIERE', 'ASP', 'JSP', 'SQLITE', 'JSON', 'PYTHON', 'RUBY ON RAILS', 'UNIX', 'LATEX', 'BOWER', 'PHPMYADMIN', 'MYSQL WORKBENCH', 'SQL SERVER', 'XAMPP', 'DIGITAL OCEAN', 'GITLAB', 'SLIM', 'TWIG', 'PDO', 'COMPOSER', 'NPM', 'SEO', 'DOMPDF', 'SENDGRID', 'MANDRILL ADMINLTE', 'SVG', 'ANIMATIONS CSS', 'SUBLIMETEXT', 'LAMP', 'ZSH', 'SLACK', 'INTEGRATION', 'NETWORKS', 'SOCIAL', 'EMMET', 'AWS', 'EC2', 'TOGGL', 'VIRTUALBOX', 'GOOGLE', 'MAPS', 'API', 'LONG', 'POLLING', 'DITTO', 'CAPTCHA', 'REGEX', 'SPRITES', 'FIREBASE', 'GOOGLE ANALYTICS API', 'SPOTIFY API', 'HEROKU', 'JEKYLL'];
const iconFooterGithub = '<svg xmlns="http://www.w3.org/2000/svg" width="71.5" height="71.5" viewBox="0 0 71.5 71.5"> <g id="Group_19" data-name="Group 19" transform="translate(-1422 -2861)"> <circle id="bg" data-name="Ellipse 5" cx="35.75" cy="35.75" r="35.75" transform="translate(1422 2861)" fill="#fff"/> <path id="icon" d="M18.683,34.453c-8.122,2.4-8.122-4.061-11.383-4.919m22.766,9.781V33.023a5.584,5.584,0,0,0-1.544-4.233c5.091-.572,10.468-2.517,10.468-11.383a8.751,8.751,0,0,0-2.46-6.12,8.1,8.1,0,0,0-.172-6.12s-1.945-.572-6.349,2.4a21.36,21.36,0,0,0-11.383,0c-4.462-2.974-6.349-2.4-6.349-2.4a8.1,8.1,0,0,0-.172,6.12,8.751,8.751,0,0,0-2.46,6.12c0,8.809,5.377,10.754,10.468,11.383a5.458,5.458,0,0,0-1.544,4.176v6.292" transform="translate(1434.148 2874.753)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/></g></svg>';
const iconFooterTwitter = '<svg xmlns="http://www.w3.org/2000/svg" width="71.5" height="71.5" viewBox="0 0 71.5 71.5"> <g id="Group_20" data-name="Group 20" transform="translate(-1502.652 -2861)"> <circle id="bg" data-name="Ellipse 6" cx="35.75" cy="35.75" r="35.75" transform="translate(1502.652 2861)" fill="#fff"/> <path id="icon" d="M39,12.567a14.688,14.688,0,0,1-4.462,2.174,6.368,6.368,0,0,0-9.038-.629,6.274,6.274,0,0,0-2.174,4.919v1.43A15.278,15.278,0,0,1,10.46,14s-5.72,12.87,7.15,18.59A16.777,16.777,0,0,1,7.6,35.447c12.87,7.15,28.6,0,28.6-16.474a8.533,8.533,0,0,0-.114-1.2A10.483,10.483,0,0,0,39,12.567Z" transform="translate(1514.786 2871.643)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/> </g></svg>';
const iconFooterInstagram = '<svg xmlns="http://www.w3.org/2000/svg" width="71.5" height="71.5" viewBox="0 0 71.5 71.5"> <g id="Group_21" data-name="Group 21" transform="translate(-1583.304 -2861)"> <circle id="bg" data-name="Ellipse 7" cx="35.75" cy="35.75" r="35.75" transform="translate(1583.304 2861)" fill="#fff"/> <g id="icon" transform="translate(1603.324 2881.02)"> <path id="Path_3" class="icon" data-name="Path 3" d="M15.294,7.5h15.73a7.909,7.909,0,0,1,7.894,7.894v15.73a7.909,7.909,0,0,1-7.894,7.894H15.294A7.909,7.909,0,0,1,7.4,31.124V15.336A7.973,7.973,0,0,1,15.294,7.5Z" transform="translate(-7.4 -7.5)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/> <path id="Path_4" class="icon" data-name="Path 4" d="M36.518,29.255a6.3,6.3,0,1,1-7.15-5.32,4.921,4.921,0,0,1,1.83,0A6.31,6.31,0,0,1,36.518,29.255Z" transform="translate(-14.496 -14.498)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/> <line id="Line_53" class="icon" data-name="Line 53" transform="translate(15.787 7.093)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/></g></g></svg>';
const iconFooterFacebook = '<svg xmlns="http://www.w3.org/2000/svg" width="71.5" height="71.5" viewBox="0 0 71.5 71.5"> <g id="Group_22" data-name="Group 22" transform="translate(-1664.528 -2861)"> <circle id="bg" data-name="Ellipse 8" cx="35.75" cy="35.75" r="35.75" transform="translate(1664.528 2861)" fill="#fff"/> <path id="icon" d="M37.174,7.5h-4.69a7.909,7.909,0,0,0-7.894,7.894v4.69H19.9v6.292h4.69V38.96h6.292V26.376h4.69l1.6-6.292H30.882v-4.69a1.6,1.6,0,0,1,1.6-1.6h4.69Z" transform="translate(1671.512 2873.52)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/> </g></svg>';
const iconFooterLinkedIn = '<svg xmlns="http://www.w3.org/2000/svg" width="71.5" height="71.5" viewBox="0 0 71.5 71.5"> <g id="Group_23" data-name="Group 23" transform="translate(-1747.468 -2861)"> <path id="bg" data-name="Path 12" d="M35.75,0A35.75,35.75,0,1,1,0,35.75,35.75,35.75,0,0,1,35.75,0Z" transform="translate(1747.468 2861)" fill="#fff"/> <g id="icon" transform="translate(1767.488 2881.592)"> <path id="Path_6" class="icon" data-name="Path 6" d="M38.938,25.4a9.447,9.447,0,0,1,9.438,9.438V45.82H42.084V34.838a3.146,3.146,0,0,0-6.292,0V45.82H29.5V34.838A9.447,9.447,0,0,1,38.938,25.4Z" transform="translate(-16.916 -15.962)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/> <path id="Path_11" class="icon" data-name="Path 11" d="M0,0H6.292V18.876H0Z" transform="translate(0 10.982)" fill="none" stroke="#d8473a" stroke-linecap="round" stroke-width="3.5"/> <circle id="Ellipse_3" class="icon" data-name="Ellipse 3" cx="3.146" cy="3.146" r="3.146" transform="translate(0 0)" stroke-width="3.5" stroke="#d8473a" stroke-linecap="round" stroke-linejoin="round" fill="none"/> </g> </g></svg>';
const arrow = '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 19 14" version="1.1" viewBox="0 0 19 14" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><polyline class="st0" points="7.5 12.1 2.5 7.1 7.5 2.1"/><line class="st0" x1="2.5" x2="22" y1="7.1" y2="7.1"/></svg>';


/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vGoh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ImageItemColumn; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./objects/Images/styles.js


const StyledImage = external_styled_components_default.a.img.withConfig({
  displayName: "styles__StyledImage",
  componentId: "sc-19meuqv-0"
})(["display:none!important;border-radius:50%;height:250px;width:250px;border:4px solid var(--color-white);margin:0 auto;display:block;margin-top:-20px;margin-bottom:100px;@media ", "{margin-top:0;margin-bottom:var(--size-s3);}"], devices["a" /* devices */].laptop);
const StyledImageItemColumn = external_styled_components_default.a.img.withConfig({
  displayName: "styles__StyledImageItemColumn",
  componentId: "sc-19meuqv-1"
})(["height:125px;width:125px;margin:0 auto;display:block;margin-bottom:var(--size-s3);border-radius:50%;box-shadow:2px 0px 10px 2px rgba(0,0,0,0.1);@media ", "{height:100px !important;width:100px !important;}@media ", "{height:80px !important;width:80px !important;}@media ", "{height:125px !important;width:125px !important;}"], devices["a" /* devices */].laptopLarge, devices["a" /* devices */].laptop, devices["a" /* devices */].mobileLarge);

// CONCATENATED MODULE: ./objects/Images/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Image = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledImage, _objectSpread({}, props));

const ImageItemColumn = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledImageItemColumn, _objectSpread({}, props));

/* harmony default export */ var Images = __webpack_exports__["b"] = (Image);


/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "zspC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Title; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SubTitle; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ TitleItemColumn; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/devices/index.js
var devices = __webpack_require__("+bdN");

// CONCATENATED MODULE: ./objects/Titles/styles.js


const StyledTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__StyledTitle",
  componentId: "sc-1595yrq-0"
})(["position:relative;float:left;width:100%;font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:", ";text-transform:", ";color:", ";line-height:", ";margin-bottom:", ";@media ", "{font-size:", ";line-height:", ";}@media ", "{font-size:", ";line-height:", ";text-align:center;}@media ", "{font-size:", ";line-height:", ";margin-bottom:", ";}"], ({
  type
}) => type === 'internal' ? '6rem' : '3.5rem', ({
  type
}) => type === 'internal' ? 'normal' : 'uppercase', ({
  color
}) => color ? `var(--color-${color})` : 'var(--color-orange)', ({
  type
}) => type === 'internal' ? '6.5rem' : '4.3rem', ({
  type
}) => type === 'internal' ? '5rem' : '1rem', devices["a" /* devices */].desktopLarge, ({
  type
}) => type === 'internal' ? '5.5rem' : '3rem', ({
  type
}) => type === 'internal' ? '6rem' : '4rem', devices["a" /* devices */].laptopLarge, ({
  type
}) => type === 'internal' ? '4rem' : '2.5rem', ({
  type
}) => type === 'internal' ? '4.5rem' : '3rem', devices["a" /* devices */].tablet, ({
  type
}) => type === 'internal' ? '3rem' : '2rem', ({
  type
}) => type === 'internal' ? '3.4rem' : '2.5rem', ({
  type
}) => type === 'internal' ? 'var(--size-s3)' : 'var(--size-s2)');
const StyledSubTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__StyledSubTitle",
  componentId: "sc-1595yrq-1"
})(["position:relative;float:left;width:100%;font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:2.7rem;text-transform:uppercase;line-height:3rem;color:", ";margin-bottom:", ";@media ", "{font-size:2rem;line-height:2.8rem;}@media ", "{font-size:1.3rem;line-height:1.8rem;text-align:center;margin-bottom:var(--size-s3);}"], ({
  color
}) => color ? `var(--color-${color})` : 'var(--color-orange)', ({
  type
}) => type === 'internal' ? 'var(--size-s3)' : 'var(--size-s5)', devices["a" /* devices */].desktopLarge, devices["a" /* devices */].laptopLarge);
const StyledTitleItemColumn = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__StyledTitleItemColumn",
  componentId: "sc-1595yrq-2"
})(["position:relative;float:left;width:100%;font-family:'AkzidenzGroteskBE';font-weight:bold;font-size:1.5rem;text-transform:uppercase;text-align:center;line-height:2rem;color:", ";margin-bottom:var(--size-s1);"], ({
  color
}) => color ? `var(--color-${color})` : 'var(--color-white)');

// CONCATENATED MODULE: ./objects/Titles/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Title = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTitle, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

const SubTitle = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledSubTitle, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));

const TitleItemColumn = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTitleItemColumn, _objectSpread(_objectSpread({}, props), {}, {
  children: props.children
}));



/***/ })

/******/ });