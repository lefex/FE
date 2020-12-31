// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@vue/shared/dist/shared.esm-bundler.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.escapeHtmlComment = escapeHtmlComment;
exports.generateCodeFrame = generateCodeFrame;
exports.isSSRSafeAttrName = isSSRSafeAttrName;
exports.looseEqual = looseEqual;
exports.looseIndexOf = looseIndexOf;
exports.makeMap = makeMap;
exports.normalizeClass = normalizeClass;
exports.normalizeStyle = normalizeStyle;
exports.parseStringStyle = parseStringStyle;
exports.stringifyStyle = stringifyStyle;
exports.toTypeString = exports.toRawType = exports.toNumber = exports.toHandlerKey = exports.toDisplayString = exports.remove = exports.propsToAttrMap = exports.objectToString = exports.isVoidTag = exports.isSymbol = exports.isString = exports.isSpecialBooleanAttr = exports.isSet = exports.isSVGTag = exports.isReservedProp = exports.isPromise = exports.isPlainObject = exports.isOn = exports.isObject = exports.isNoUnitNumericStyleProp = exports.isModelListener = exports.isMap = exports.isKnownAttr = exports.isIntegerKey = exports.isHTMLTag = exports.isGloballyWhitelisted = exports.isFunction = exports.isDate = exports.isBooleanAttr = exports.isArray = exports.invokeArrayFns = exports.hyphenate = exports.hasOwn = exports.hasChanged = exports.getGlobalThis = exports.extend = exports.def = exports.capitalize = exports.camelize = exports.babelParserDefaultPlugins = exports.PatchFlagNames = exports.NOOP = exports.NO = exports.EMPTY_OBJ = exports.EMPTY_ARR = void 0;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');

  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
} // Patch flags are optimization hints generated by the compiler.
// when a block with dynamicChildren is encountered during diff, the algorithm
// enters "optimized mode". In this mode, we know that the vdom is produced by
// a render function generated by the compiler, so the algorithm only needs to
// handle updates explicitly marked by these patch flags.
// dev only flag -> name mapping


const PatchFlagNames = {
  [1
  /* TEXT */
  ]: `TEXT`,
  [2
  /* CLASS */
  ]: `CLASS`,
  [4
  /* STYLE */
  ]: `STYLE`,
  [8
  /* PROPS */
  ]: `PROPS`,
  [16
  /* FULL_PROPS */
  ]: `FULL_PROPS`,
  [32
  /* HYDRATE_EVENTS */
  ]: `HYDRATE_EVENTS`,
  [64
  /* STABLE_FRAGMENT */
  ]: `STABLE_FRAGMENT`,
  [128
  /* KEYED_FRAGMENT */
  ]: `KEYED_FRAGMENT`,
  [256
  /* UNKEYED_FRAGMENT */
  ]: `UNKEYED_FRAGMENT`,
  [1024
  /* DYNAMIC_SLOTS */
  ]: `DYNAMIC_SLOTS`,
  [512
  /* NEED_PATCH */
  ]: `NEED_PATCH`,
  [-1
  /* HOISTED */
  ]: `HOISTED`,
  [-2
  /* BAIL */
  ]: `BAIL`
};
exports.PatchFlagNames = PatchFlagNames;
const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
exports.isGloballyWhitelisted = isGloballyWhitelisted;
const range = 2;

function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];

  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;

    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;

        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + '^'.repeat(length));
          }

          count += lineLength + 1;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
const isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
exports.isBooleanAttr = isBooleanAttr;
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  const isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }

  return attrValidationCache[name] = !isUnsafe;
}

const propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

exports.propsToAttrMap = propsToAttrMap;
const isNoUnitNumericStyleProp = /*#__PURE__*/makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
const isKnownAttr = /*#__PURE__*/makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
exports.isKnownAttr = isKnownAttr;

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isObject(value)) {
    return value;
  }
}

const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  let ret = '';

  if (!styles) {
    return ret;
  }

  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += `${normalizedKey}:${value};`;
    }
  }

  return ret;
}

function normalizeClass(value) {
  let res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      res += normalizeClass(value[i]) + ' ';
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
exports.isHTMLTag = isHTMLTag;
const isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
exports.isSVGTag = isSVGTag;
const isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
exports.isVoidTag = isVoidTag;
const escapeRE = /["'&<>]/;

function escapeHtml(string) {
  const str = '' + string;
  const match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  let html = '';
  let escaped;
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;

  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(item => looseEqual(item, val));
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


const toDisplayString = val => {
  return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};

exports.toDisplayString = toDisplayString;

const replacer = (_key, val) => {
  if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
        entries[`${key} =>`] = val;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */


const babelParserDefaultPlugins = ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'];
exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
const EMPTY_OBJ = "development" !== 'production' ? Object.freeze({}) : {};
exports.EMPTY_OBJ = EMPTY_OBJ;
const EMPTY_ARR = "development" !== 'production' ? Object.freeze([]) : [];
exports.EMPTY_ARR = EMPTY_ARR;

const NOOP = () => {};
/**
 * Always return false.
 */


exports.NOOP = NOOP;

const NO = () => false;

exports.NO = NO;
const onRE = /^on[^a-z]/;

const isOn = key => onRE.test(key);

exports.isOn = isOn;

const isModelListener = key => key.startsWith('onUpdate:');

exports.isModelListener = isModelListener;
const extend = Object.assign;
exports.extend = extend;

const remove = (arr, el) => {
  const i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

exports.remove = remove;
const hasOwnProperty = Object.prototype.hasOwnProperty;

const hasOwn = (val, key) => hasOwnProperty.call(val, key);

exports.hasOwn = hasOwn;
const isArray = Array.isArray;
exports.isArray = isArray;

const isMap = val => toTypeString(val) === '[object Map]';

exports.isMap = isMap;

const isSet = val => toTypeString(val) === '[object Set]';

exports.isSet = isSet;

const isDate = val => val instanceof Date;

exports.isDate = isDate;

const isFunction = val => typeof val === 'function';

exports.isFunction = isFunction;

const isString = val => typeof val === 'string';

exports.isString = isString;

const isSymbol = val => typeof val === 'symbol';

exports.isSymbol = isSymbol;

const isObject = val => val !== null && typeof val === 'object';

exports.isObject = isObject;

const isPromise = val => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

exports.isPromise = isPromise;
const objectToString = Object.prototype.toString;
exports.objectToString = objectToString;

const toTypeString = value => objectToString.call(value);

exports.toTypeString = toTypeString;

const toRawType = value => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

exports.toRawType = toRawType;

const isPlainObject = val => toTypeString(val) === '[object Object]';

exports.isPlainObject = isPlainObject;

const isIntegerKey = key => isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;

exports.isIntegerKey = isIntegerKey;
const isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');
exports.isReservedProp = isReservedProp;

const cacheStringFunction = fn => {
  const cache = Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

const camelizeRE = /-(\w)/g;
/**
 * @private
 */

const camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});
exports.camelize = camelize;
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

const hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */

exports.hyphenate = hyphenate;
const capitalize = cacheStringFunction(str => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */

exports.capitalize = capitalize;
const toHandlerKey = cacheStringFunction(str => str ? `on${capitalize(str)}` : ``); // compare whether a value has changed, accounting for NaN.

exports.toHandlerKey = toHandlerKey;

const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);

exports.hasChanged = hasChanged;

const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

exports.invokeArrayFns = invokeArrayFns;

const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};

exports.def = def;

const toNumber = val => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

exports.toNumber = toNumber;

let _globalThis;

const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};

exports.getGlobalThis = getGlobalThis;
},{}],"../node_modules/@vue/compiler-core/node_modules/@babel/parser/lib/index.js":[function(require,module,exports) {
'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, '__esModule', {
  value: true
});
var beforeExpr = true;
var startsExpr = true;
var isLoop = true;
var isAssign = true;
var prefix = true;
var postfix = true;

var TokenType = function TokenType(label) {
  var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, TokenType);

  this.label = void 0;
  this.keyword = void 0;
  this.beforeExpr = void 0;
  this.startsExpr = void 0;
  this.rightAssociative = void 0;
  this.isLoop = void 0;
  this.isAssign = void 0;
  this.prefix = void 0;
  this.postfix = void 0;
  this.binop = void 0;
  this.updateContext = void 0;
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.rightAssociative = !!conf.rightAssociative;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop != null ? conf.binop : null;
  this.updateContext = null;
};

var keywords = new Map();

function createKeyword(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.keyword = name;
  var token = new TokenType(name, options);
  keywords.set(name, token);
  return token;
}

function createBinop(name, binop) {
  return new TokenType(name, {
    beforeExpr: beforeExpr,
    binop: binop
  });
}

var types = {
  num: new TokenType("num", {
    startsExpr: startsExpr
  }),
  bigint: new TokenType("bigint", {
    startsExpr: startsExpr
  }),
  decimal: new TokenType("decimal", {
    startsExpr: startsExpr
  }),
  regexp: new TokenType("regexp", {
    startsExpr: startsExpr
  }),
  string: new TokenType("string", {
    startsExpr: startsExpr
  }),
  name: new TokenType("name", {
    startsExpr: startsExpr
  }),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  bracketHashL: new TokenType("#[", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  bracketBarL: new TokenType("[|", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  bracketR: new TokenType("]"),
  bracketBarR: new TokenType("|]"),
  braceL: new TokenType("{", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  braceBarL: new TokenType("{|", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  braceHashL: new TokenType("#{", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  braceR: new TokenType("}"),
  braceBarR: new TokenType("|}"),
  parenL: new TokenType("(", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", {
    beforeExpr: beforeExpr
  }),
  semi: new TokenType(";", {
    beforeExpr: beforeExpr
  }),
  colon: new TokenType(":", {
    beforeExpr: beforeExpr
  }),
  doubleColon: new TokenType("::", {
    beforeExpr: beforeExpr
  }),
  dot: new TokenType("."),
  question: new TokenType("?", {
    beforeExpr: beforeExpr
  }),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", {
    beforeExpr: beforeExpr
  }),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", {
    beforeExpr: beforeExpr
  }),
  backQuote: new TokenType("`", {
    startsExpr: startsExpr
  }),
  dollarBraceL: new TokenType("${", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  at: new TokenType("@"),
  hash: new TokenType("#", {
    startsExpr: startsExpr
  }),
  interpreterDirective: new TokenType("#!..."),
  eq: new TokenType("=", {
    beforeExpr: beforeExpr,
    isAssign: isAssign
  }),
  assign: new TokenType("_=", {
    beforeExpr: beforeExpr,
    isAssign: isAssign
  }),
  incDec: new TokenType("++/--", {
    prefix: prefix,
    postfix: postfix,
    startsExpr: startsExpr
  }),
  bang: new TokenType("!", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  tilde: new TokenType("~", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  pipeline: createBinop("|>", 0),
  nullishCoalescing: createBinop("??", 1),
  logicalOR: createBinop("||", 1),
  logicalAND: createBinop("&&", 2),
  bitwiseOR: createBinop("|", 3),
  bitwiseXOR: createBinop("^", 4),
  bitwiseAND: createBinop("&", 5),
  equality: createBinop("==/!=/===/!==", 6),
  relational: createBinop("</>/<=/>=", 7),
  bitShift: createBinop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {
    beforeExpr: beforeExpr,
    binop: 9,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  modulo: new TokenType("%", {
    beforeExpr: beforeExpr,
    binop: 10,
    startsExpr: startsExpr
  }),
  star: new TokenType("*", {
    binop: 10
  }),
  slash: createBinop("/", 10),
  exponent: new TokenType("**", {
    beforeExpr: beforeExpr,
    binop: 11,
    rightAssociative: true
  }),
  _break: createKeyword("break"),
  _case: createKeyword("case", {
    beforeExpr: beforeExpr
  }),
  _catch: createKeyword("catch"),
  _continue: createKeyword("continue"),
  _debugger: createKeyword("debugger"),
  _default: createKeyword("default", {
    beforeExpr: beforeExpr
  }),
  _do: createKeyword("do", {
    isLoop: isLoop,
    beforeExpr: beforeExpr
  }),
  _else: createKeyword("else", {
    beforeExpr: beforeExpr
  }),
  _finally: createKeyword("finally"),
  _for: createKeyword("for", {
    isLoop: isLoop
  }),
  _function: createKeyword("function", {
    startsExpr: startsExpr
  }),
  _if: createKeyword("if"),
  _return: createKeyword("return", {
    beforeExpr: beforeExpr
  }),
  _switch: createKeyword("switch"),
  _throw: createKeyword("throw", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  _try: createKeyword("try"),
  _var: createKeyword("var"),
  _const: createKeyword("const"),
  _while: createKeyword("while", {
    isLoop: isLoop
  }),
  _with: createKeyword("with"),
  _new: createKeyword("new", {
    beforeExpr: beforeExpr,
    startsExpr: startsExpr
  }),
  _this: createKeyword("this", {
    startsExpr: startsExpr
  }),
  _super: createKeyword("super", {
    startsExpr: startsExpr
  }),
  _class: createKeyword("class", {
    startsExpr: startsExpr
  }),
  _extends: createKeyword("extends", {
    beforeExpr: beforeExpr
  }),
  _export: createKeyword("export"),
  _import: createKeyword("import", {
    startsExpr: startsExpr
  }),
  _null: createKeyword("null", {
    startsExpr: startsExpr
  }),
  _true: createKeyword("true", {
    startsExpr: startsExpr
  }),
  _false: createKeyword("false", {
    startsExpr: startsExpr
  }),
  _in: createKeyword("in", {
    beforeExpr: beforeExpr,
    binop: 7
  }),
  _instanceof: createKeyword("instanceof", {
    beforeExpr: beforeExpr,
    binop: 7
  }),
  _typeof: createKeyword("typeof", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  _void: createKeyword("void", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  }),
  _delete: createKeyword("delete", {
    beforeExpr: beforeExpr,
    prefix: prefix,
    startsExpr: startsExpr
  })
};
var lineBreak = /\r\n?|[\n\u2028\u2029]/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code) {
  switch (code) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;

    default:
      return false;
  }
}

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

function isWhitespace(code) {
  switch (code) {
    case 0x0009:
    case 0x000b:
    case 0x000c:
    case 32:
    case 160:
    case 5760:
    case 0x2000:
    case 0x2001:
    case 0x2002:
    case 0x2003:
    case 0x2004:
    case 0x2005:
    case 0x2006:
    case 0x2007:
    case 0x2008:
    case 0x2009:
    case 0x200a:
    case 0x202f:
    case 0x205f:
    case 0x3000:
    case 0xfeff:
      return true;

    default:
      return false;
  }
}

var Position = function Position(line, col) {
  _classCallCheck(this, Position);

  this.line = void 0;
  this.column = void 0;
  this.line = line;
  this.column = col;
};

var SourceLocation = function SourceLocation(start, end) {
  _classCallCheck(this, SourceLocation);

  this.start = void 0;
  this.end = void 0;
  this.filename = void 0;
  this.identifierName = void 0;
  this.start = start;
  this.end = end;
};

function getLineInfo(input, offset) {
  var line = 1;
  var lineStart = 0;
  var match;
  lineBreakG.lastIndex = 0;

  while ((match = lineBreakG.exec(input)) && match.index < offset) {
    line++;
    lineStart = lineBreakG.lastIndex;
  }

  return new Position(line, offset - lineStart);
}

var BaseParser = /*#__PURE__*/function () {
  function BaseParser() {
    _classCallCheck(this, BaseParser);

    this.sawUnambiguousESM = false;
    this.ambiguousScriptDifferentAst = false;
  }

  _createClass(BaseParser, [{
    key: "hasPlugin",
    value: function hasPlugin(name) {
      return this.plugins.has(name);
    }
  }, {
    key: "getPluginOption",
    value: function getPluginOption(plugin, name) {
      if (this.hasPlugin(plugin)) return this.plugins.get(plugin)[name];
    }
  }]);

  return BaseParser;
}();

function last(stack) {
  return stack[stack.length - 1];
}

var CommentsParser = /*#__PURE__*/function (_BaseParser) {
  _inherits(CommentsParser, _BaseParser);

  var _super = _createSuper(CommentsParser);

  function CommentsParser() {
    _classCallCheck(this, CommentsParser);

    return _super.apply(this, arguments);
  }

  _createClass(CommentsParser, [{
    key: "addComment",
    value: function addComment(comment) {
      if (this.filename) comment.loc.filename = this.filename;
      this.state.trailingComments.push(comment);
      this.state.leadingComments.push(comment);
    }
  }, {
    key: "adjustCommentsAfterTrailingComma",
    value: function adjustCommentsAfterTrailingComma(node, elements, takeAllComments) {
      if (this.state.leadingComments.length === 0) {
        return;
      }

      var lastElement = null;
      var i = elements.length;

      while (lastElement === null && i > 0) {
        lastElement = elements[--i];
      }

      if (lastElement === null) {
        return;
      }

      for (var j = 0; j < this.state.leadingComments.length; j++) {
        if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
          this.state.leadingComments.splice(j, 1);
          j--;
        }
      }

      var newTrailingComments = [];

      for (var _i8 = 0; _i8 < this.state.leadingComments.length; _i8++) {
        var leadingComment = this.state.leadingComments[_i8];

        if (leadingComment.end < node.end) {
          newTrailingComments.push(leadingComment);

          if (!takeAllComments) {
            this.state.leadingComments.splice(_i8, 1);
            _i8--;
          }
        } else {
          if (node.trailingComments === undefined) {
            node.trailingComments = [];
          }

          node.trailingComments.push(leadingComment);
        }
      }

      if (takeAllComments) this.state.leadingComments = [];

      if (newTrailingComments.length > 0) {
        lastElement.trailingComments = newTrailingComments;
      } else if (lastElement.trailingComments !== undefined) {
        lastElement.trailingComments = [];
      }
    }
  }, {
    key: "processComment",
    value: function processComment(node) {
      if (node.type === "Program" && node.body.length > 0) return;
      var stack = this.state.commentStack;
      var firstChild, lastChild, trailingComments, i, j;

      if (this.state.trailingComments.length > 0) {
        if (this.state.trailingComments[0].start >= node.end) {
          trailingComments = this.state.trailingComments;
          this.state.trailingComments = [];
        } else {
          this.state.trailingComments.length = 0;
        }
      } else if (stack.length > 0) {
        var lastInStack = last(stack);

        if (lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
          trailingComments = lastInStack.trailingComments;
          delete lastInStack.trailingComments;
        }
      }

      if (stack.length > 0 && last(stack).start >= node.start) {
        firstChild = stack.pop();
      }

      while (stack.length > 0 && last(stack).start >= node.start) {
        lastChild = stack.pop();
      }

      if (!lastChild && firstChild) lastChild = firstChild;

      if (firstChild) {
        switch (node.type) {
          case "ObjectExpression":
            this.adjustCommentsAfterTrailingComma(node, node.properties);
            break;

          case "ObjectPattern":
            this.adjustCommentsAfterTrailingComma(node, node.properties, true);
            break;

          case "CallExpression":
            this.adjustCommentsAfterTrailingComma(node, node.arguments);
            break;

          case "ArrayExpression":
            this.adjustCommentsAfterTrailingComma(node, node.elements);
            break;

          case "ArrayPattern":
            this.adjustCommentsAfterTrailingComma(node, node.elements, true);
            break;
        }
      } else if (this.state.commentPreviousNode && (this.state.commentPreviousNode.type === "ImportSpecifier" && node.type !== "ImportSpecifier" || this.state.commentPreviousNode.type === "ExportSpecifier" && node.type !== "ExportSpecifier")) {
        this.adjustCommentsAfterTrailingComma(node, [this.state.commentPreviousNode]);
      }

      if (lastChild) {
        if (lastChild.leadingComments) {
          if (lastChild !== node && lastChild.leadingComments.length > 0 && last(lastChild.leadingComments).end <= node.start) {
            node.leadingComments = lastChild.leadingComments;
            delete lastChild.leadingComments;
          } else {
            for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
              if (lastChild.leadingComments[i].end <= node.start) {
                node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
                break;
              }
            }
          }
        }
      } else if (this.state.leadingComments.length > 0) {
        if (last(this.state.leadingComments).end <= node.start) {
          if (this.state.commentPreviousNode) {
            for (j = 0; j < this.state.leadingComments.length; j++) {
              if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
                this.state.leadingComments.splice(j, 1);
                j--;
              }
            }
          }

          if (this.state.leadingComments.length > 0) {
            node.leadingComments = this.state.leadingComments;
            this.state.leadingComments = [];
          }
        } else {
          for (i = 0; i < this.state.leadingComments.length; i++) {
            if (this.state.leadingComments[i].end > node.start) {
              break;
            }
          }

          var leadingComments = this.state.leadingComments.slice(0, i);

          if (leadingComments.length) {
            node.leadingComments = leadingComments;
          }

          trailingComments = this.state.leadingComments.slice(i);

          if (trailingComments.length === 0) {
            trailingComments = null;
          }
        }
      }

      this.state.commentPreviousNode = node;

      if (trailingComments) {
        if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
          node.innerComments = trailingComments;
        } else {
          var firstTrailingCommentIndex = trailingComments.findIndex(function (comment) {
            return comment.end >= node.end;
          });

          if (firstTrailingCommentIndex > 0) {
            node.innerComments = trailingComments.slice(0, firstTrailingCommentIndex);
            node.trailingComments = trailingComments.slice(firstTrailingCommentIndex);
          } else {
            node.trailingComments = trailingComments;
          }
        }
      }

      stack.push(node);
    }
  }]);

  return CommentsParser;
}(BaseParser);

var ErrorMessages = Object.freeze({
  AccessorIsGenerator: "A %0ter cannot be a generator",
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function",
  AwaitExpressionFormalParameter: "await is not allowed in async function parameters",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules",
  AwaitNotInAsyncFunction: "'await' is only allowed within async functions",
  BadGetterArity: "getter must not have any formal parameters",
  BadSetterArity: "setter must have exactly one formal parameter",
  BadSetterRestParameter: "setter function argument must not be a rest parameter",
  ConstructorClassField: "Classes may not have a field named 'constructor'",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'",
  ConstructorIsAccessor: "Class constructor may not be an accessor",
  ConstructorIsAsync: "Constructor can't be an async function",
  ConstructorIsGenerator: "Constructor can't be a generator",
  DeclarationMissingInitializer: "%0 require an initialization value",
  DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon",
  DecoratorStaticBlock: "Decorators can't be used with a static block",
  DeletePrivateField: "Deleting a private field is not allowed",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
  DuplicateProto: "Redefinition of __proto__ property",
  DuplicateRegExpFlags: "Duplicate regular expression flag",
  DuplicateStaticBlock: "Duplicate static block in the same class",
  ElementAfterRest: "Rest element must be last element",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape",
  ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { %0 as '%1' } from 'some-module'`?",
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'",
  ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block",
  IllegalBreakContinue: "Unsyntactic %0",
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
  IllegalReturn: "'return' outside of function",
  ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
  ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments",
  ImportCallArity: "import() requires exactly %0",
  ImportCallNotNewExpression: "Cannot use new with import(...)",
  ImportCallSpreadArgument: "... is not allowed in import()",
  ImportMetaOutsideModule: "import.meta may appear only with 'sourceType: \"module\"'",
  ImportOutsideModule: "'import' and 'export' may appear only with 'sourceType: \"module\"'",
  InvalidBigIntLiteral: "Invalid BigIntLiteral",
  InvalidCodePoint: "Code point out of bounds",
  InvalidDecimal: "Invalid decimal",
  InvalidDigit: "Expected number in radix %0",
  InvalidEscapeSequence: "Bad character escape sequence",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template",
  InvalidEscapedReservedWord: "Escape sequence in keyword %0",
  InvalidIdentifier: "Invalid identifier %0",
  InvalidLhs: "Invalid left-hand side in %0",
  InvalidLhsBinding: "Binding invalid left-hand side in %0",
  InvalidNumber: "Invalid number",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'",
  InvalidOrUnexpectedToken: "Unexpected character '%0'",
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern",
  InvalidPrivateFieldResolution: "Private name #%0 is not defined",
  InvalidPropertyBindingPattern: "Binding member expression",
  InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument",
  LabelRedeclaration: "Label '%0' is already declared",
  LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'",
  MalformedRegExpFlags: "Invalid regular expression flag",
  MissingClassName: "A class name is required",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators",
  ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values",
  ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes',
  ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'",
  ModuleExportUndefined: "Export '%0' is not defined",
  MultipleDefaultsInSwitch: "Multiple default clauses",
  NewlineAfterThrow: "Illegal newline after throw",
  NoCatchOrFinally: "Missing catch or finally clause",
  NumberIdentifier: "Identifier directly after number",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences",
  ObsoleteAwaitStar: "await* has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "constructors in/after an Optional Chain are not allowed",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain",
  ParamDupe: "Argument name clash",
  PatternHasAccessor: "Object pattern can't contain getter or setter",
  PatternHasMethod: "Object pattern can't contain methods",
  PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized',
  PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression",
  PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression",
  PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference",
  PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding",
  PrimaryTopicRequiresSmartPipeline: "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.",
  PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`)",
  PrivateNameRedeclaration: "Duplicate private name #%0",
  RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
  RecordNoProto: "'__proto__' is not allowed in Record expressions",
  RestTrailingComma: "Unexpected trailing comma after rest element",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
  StaticPrototype: "Classes may not have static property named prototype",
  StrictDelete: "Deleting local variable in strict mode",
  StrictEvalArguments: "Assigning to '%0' in strict mode",
  StrictEvalArgumentsBinding: "Binding '%0' in strict mode",
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode",
  StrictWith: "'with' in strict mode",
  SuperNotAllowed: "super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super",
  TrailingDecorator: "Decorators must be attached to a class element",
  TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
  TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder",
  UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal',
  UnexpectedDigitAfterHash: "Unexpected digit after hash token",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level",
  UnexpectedKeyword: "Unexpected keyword '%0'",
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context",
  UnexpectedNewTarget: "new.target can only be used in functions",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits",
  UnexpectedPrivateField: "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).",
  UnexpectedReservedWord: "Unexpected reserved word '%0'",
  UnexpectedSuper: "super is only allowed in object methods and classes",
  UnexpectedToken: "Unexpected token '%0'",
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "import can only be used in import() or import.meta",
  UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1",
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties",
  UnsupportedSuper: "super can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])",
  UnterminatedComment: "Unterminated comment",
  UnterminatedRegExp: "Unterminated regular expression",
  UnterminatedString: "Unterminated string constant",
  UnterminatedTemplate: "Unterminated template",
  VarRedeclaration: "Identifier '%0' has already been declared",
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator",
  YieldInParameter: "Yield expression is not allowed in formal parameters",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0"
});

var ParserError = /*#__PURE__*/function (_CommentsParser) {
  _inherits(ParserError, _CommentsParser);

  var _super2 = _createSuper(ParserError);

  function ParserError() {
    _classCallCheck(this, ParserError);

    return _super2.apply(this, arguments);
  }

  _createClass(ParserError, [{
    key: "getLocationForPosition",
    value: function getLocationForPosition(pos) {
      var loc;
      if (pos === this.state.start) loc = this.state.startLoc;else if (pos === this.state.lastTokStart) loc = this.state.lastTokStartLoc;else if (pos === this.state.end) loc = this.state.endLoc;else if (pos === this.state.lastTokEnd) loc = this.state.lastTokEndLoc;else loc = getLineInfo(this.input, pos);
      return loc;
    }
  }, {
    key: "raise",
    value: function raise(pos, errorTemplate) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      return this.raiseWithData.apply(this, [pos, undefined, errorTemplate].concat(params));
    }
  }, {
    key: "raiseWithData",
    value: function raiseWithData(pos, data, errorTemplate) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        params[_key2 - 3] = arguments[_key2];
      }

      var loc = this.getLocationForPosition(pos);
      var message = errorTemplate.replace(/%(\d+)/g, function (_, i) {
        return params[i];
      }) + " (".concat(loc.line, ":").concat(loc.column, ")");
      return this._raise(Object.assign({
        loc: loc,
        pos: pos
      }, data), message);
    }
  }, {
    key: "_raise",
    value: function _raise(errorContext, message) {
      var err = new SyntaxError(message);
      Object.assign(err, errorContext);

      if (this.options.errorRecovery) {
        if (!this.isLookahead) this.state.errors.push(err);
        return err;
      } else {
        throw err;
      }
    }
  }]);

  return ParserError;
}(CommentsParser);

function isSimpleProperty(node) {
  return node != null && node.type === "Property" && node.kind === "init" && node.method === false;
}

var estree = function (superClass) {
  return /*#__PURE__*/function (_superClass) {
    _inherits(_class, _superClass);

    var _super3 = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super3.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "estreeParseRegExpLiteral",
      value: function estreeParseRegExpLiteral(_ref) {
        var {
          pattern: pattern,
          flags: flags
        } = _ref;
        var regex = null;

        try {
          regex = new RegExp(pattern, flags);
        } catch (e) {}

        var node = this.estreeParseLiteral(regex);
        node.regex = {
          pattern: pattern,
          flags: flags
        };
        return node;
      }
    }, {
      key: "estreeParseBigIntLiteral",
      value: function estreeParseBigIntLiteral(value) {
        var bigInt = typeof BigInt !== "undefined" ? BigInt(value) : null;
        var node = this.estreeParseLiteral(bigInt);
        node.bigint = String(node.value || value);
        return node;
      }
    }, {
      key: "estreeParseDecimalLiteral",
      value: function estreeParseDecimalLiteral(value) {
        var decimal = null;
        var node = this.estreeParseLiteral(decimal);
        node.decimal = String(node.value || value);
        return node;
      }
    }, {
      key: "estreeParseLiteral",
      value: function estreeParseLiteral(value) {
        return this.parseLiteral(value, "Literal");
      }
    }, {
      key: "directiveToStmt",
      value: function directiveToStmt(directive) {
        var directiveLiteral = directive.value;
        var stmt = this.startNodeAt(directive.start, directive.loc.start);
        var expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
        expression.value = directiveLiteral.value;
        expression.raw = directiveLiteral.extra.raw;
        stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
        stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
        return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
      }
    }, {
      key: "initFunction",
      value: function initFunction(node, isAsync) {
        _get(_getPrototypeOf(_class.prototype), "initFunction", this).call(this, node, isAsync);

        node.expression = false;
      }
    }, {
      key: "checkDeclaration",
      value: function checkDeclaration(node) {
        if (isSimpleProperty(node)) {
          this.checkDeclaration(node.value);
        } else {
          _get(_getPrototypeOf(_class.prototype), "checkDeclaration", this).call(this, node);
        }
      }
    }, {
      key: "getObjectOrClassMethodParams",
      value: function getObjectOrClassMethodParams(method) {
        return method.value.params;
      }
    }, {
      key: "checkLVal",
      value: function checkLVal(expr, contextDescription) {
        var _this = this,
            _get2;

        for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }

        switch (expr.type) {
          case "ObjectPattern":
            expr.properties.forEach(function (prop) {
              _this.checkLVal.apply(_this, [prop.type === "Property" ? prop.value : prop, "object destructuring pattern"].concat(args));
            });
            break;

          default:
            (_get2 = _get(_getPrototypeOf(_class.prototype), "checkLVal", this)).call.apply(_get2, [this, expr, contextDescription].concat(args));

        }
      }
    }, {
      key: "checkProto",
      value: function checkProto(prop, isRecord, protoRef, refExpressionErrors) {
        if (prop.method) {
          return;
        }

        _get(_getPrototypeOf(_class.prototype), "checkProto", this).call(this, prop, isRecord, protoRef, refExpressionErrors);
      }
    }, {
      key: "isValidDirective",
      value: function isValidDirective(stmt) {
        var _stmt$expression$extr;

        return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) == null ? void 0 : _stmt$expression$extr.parenthesized);
      }
    }, {
      key: "stmtToDirective",
      value: function stmtToDirective(stmt) {
        var directive = _get(_getPrototypeOf(_class.prototype), "stmtToDirective", this).call(this, stmt);

        var value = stmt.expression.value;
        directive.value.value = value;
        return directive;
      }
    }, {
      key: "parseBlockBody",
      value: function parseBlockBody(node, allowDirectives, topLevel, end) {
        var _this2 = this;

        _get(_getPrototypeOf(_class.prototype), "parseBlockBody", this).call(this, node, allowDirectives, topLevel, end);

        var directiveStatements = node.directives.map(function (d) {
          return _this2.directiveToStmt(d);
        });
        node.body = directiveStatements.concat(node.body);
        delete node.directives;
      }
    }, {
      key: "pushClassMethod",
      value: function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true);

        if (method.typeParameters) {
          method.value.typeParameters = method.typeParameters;
          delete method.typeParameters;
        }

        classBody.body.push(method);
      }
    }, {
      key: "parseExprAtom",
      value: function parseExprAtom(refExpressionErrors) {
        switch (this.state.type) {
          case types.num:
          case types.string:
            return this.estreeParseLiteral(this.state.value);

          case types.regexp:
            return this.estreeParseRegExpLiteral(this.state.value);

          case types.bigint:
            return this.estreeParseBigIntLiteral(this.state.value);

          case types.decimal:
            return this.estreeParseDecimalLiteral(this.state.value);

          case types._null:
            return this.estreeParseLiteral(null);

          case types._true:
            return this.estreeParseLiteral(true);

          case types._false:
            return this.estreeParseLiteral(false);

          default:
            return _get(_getPrototypeOf(_class.prototype), "parseExprAtom", this).call(this, refExpressionErrors);
        }
      }
    }, {
      key: "parseLiteral",
      value: function parseLiteral(value, type, startPos, startLoc) {
        var node = _get(_getPrototypeOf(_class.prototype), "parseLiteral", this).call(this, value, type, startPos, startLoc);

        node.raw = node.extra.raw;
        delete node.extra;
        return node;
      }
    }, {
      key: "parseFunctionBody",
      value: function parseFunctionBody(node, allowExpression) {
        var isMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _get(_getPrototypeOf(_class.prototype), "parseFunctionBody", this).call(this, node, allowExpression, isMethod);

        node.expression = node.body.type !== "BlockStatement";
      }
    }, {
      key: "parseMethod",
      value: function parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type) {
        var inClassScope = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
        var funcNode = this.startNode();
        funcNode.kind = node.kind;
        funcNode = _get(_getPrototypeOf(_class.prototype), "parseMethod", this).call(this, funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
        funcNode.type = "FunctionExpression";
        delete funcNode.kind;
        node.value = funcNode;
        type = type === "ClassMethod" ? "MethodDefinition" : type;
        return this.finishNode(node, type);
      }
    }, {
      key: "parseObjectMethod",
      value: function parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
        var node = _get(_getPrototypeOf(_class.prototype), "parseObjectMethod", this).call(this, prop, isGenerator, isAsync, isPattern, isAccessor);

        if (node) {
          node.type = "Property";
          if (node.kind === "method") node.kind = "init";
          node.shorthand = false;
        }

        return node;
      }
    }, {
      key: "parseObjectProperty",
      value: function parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
        var node = _get(_getPrototypeOf(_class.prototype), "parseObjectProperty", this).call(this, prop, startPos, startLoc, isPattern, refExpressionErrors);

        if (node) {
          node.kind = "init";
          node.type = "Property";
        }

        return node;
      }
    }, {
      key: "toAssignable",
      value: function toAssignable(node) {
        var isLHS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isSimpleProperty(node)) {
          this.toAssignable(node.value);
          return node;
        }

        return _get(_getPrototypeOf(_class.prototype), "toAssignable", this).call(this, node, isLHS);
      }
    }, {
      key: "toAssignableObjectExpressionProp",
      value: function toAssignableObjectExpressionProp(prop) {
        if (prop.kind === "get" || prop.kind === "set") {
          throw this.raise(prop.key.start, ErrorMessages.PatternHasAccessor);
        } else if (prop.method) {
          throw this.raise(prop.key.start, ErrorMessages.PatternHasMethod);
        } else {
          var _get3;

          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          (_get3 = _get(_getPrototypeOf(_class.prototype), "toAssignableObjectExpressionProp", this)).call.apply(_get3, [this, prop].concat(args));
        }
      }
    }, {
      key: "finishCallExpression",
      value: function finishCallExpression(node, optional) {
        _get(_getPrototypeOf(_class.prototype), "finishCallExpression", this).call(this, node, optional);

        if (node.callee.type === "Import") {
          node.type = "ImportExpression";
          node.source = node.arguments[0];
          delete node.arguments;
          delete node.callee;
        }

        return node;
      }
    }, {
      key: "toReferencedArguments",
      value: function toReferencedArguments(node) {
        if (node.type === "ImportExpression") {
          return;
        }

        _get(_getPrototypeOf(_class.prototype), "toReferencedArguments", this).call(this, node);
      }
    }, {
      key: "parseExport",
      value: function parseExport(node) {
        _get(_getPrototypeOf(_class.prototype), "parseExport", this).call(this, node);

        switch (node.type) {
          case "ExportAllDeclaration":
            node.exported = null;
            break;

          case "ExportNamedDeclaration":
            if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
              node.type = "ExportAllDeclaration";
              node.exported = node.specifiers[0].exported;
              delete node.specifiers;
            }

            break;
        }

        return node;
      }
    }, {
      key: "parseSubscript",
      value: function parseSubscript(base, startPos, startLoc, noCalls, state) {
        var node = _get(_getPrototypeOf(_class.prototype), "parseSubscript", this).call(this, base, startPos, startLoc, noCalls, state);

        if (state.optionalChainMember) {
          if (node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression") {
            node.type = node.type.substring(8);
          }

          if (state.stop) {
            var chain = this.startNodeAtNode(node);
            chain.expression = node;
            return this.finishNode(chain, "ChainExpression");
          }
        } else if (node.type === "MemberExpression" || node.type === "CallExpression") {
          node.optional = false;
        }

        return node;
      }
    }]);

    return _class;
  }(superClass);
};

var TokContext = function TokContext(token, isExpr, preserveSpace, override) {
  _classCallCheck(this, TokContext);

  this.token = void 0;
  this.isExpr = void 0;
  this.preserveSpace = void 0;
  this.override = void 0;
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
};

var types$1 = {
  braceStatement: new TokContext("{", false),
  braceExpression: new TokContext("{", true),
  recordExpression: new TokContext("#{", true),
  templateQuasi: new TokContext("${", false),
  parenStatement: new TokContext("(", false),
  parenExpression: new TokContext("(", true),
  template: new TokContext("`", true, true, function (p) {
    return p.readTmplToken();
  }),
  functionExpression: new TokContext("function", true),
  functionStatement: new TokContext("function", false)
};

types.parenR.updateContext = types.braceR.updateContext = function () {
  if (this.state.context.length === 1) {
    this.state.exprAllowed = true;
    return;
  }

  var out = this.state.context.pop();

  if (out === types$1.braceStatement && this.curContext().token === "function") {
    out = this.state.context.pop();
  }

  this.state.exprAllowed = !out.isExpr;
};

types.name.updateContext = function (prevType) {
  var allowed = false;

  if (prevType !== types.dot) {
    if (this.state.value === "of" && !this.state.exprAllowed && prevType !== types._function && prevType !== types._class) {
      allowed = true;
    }
  }

  this.state.exprAllowed = allowed;

  if (this.state.isIterator) {
    this.state.isIterator = false;
  }
};

types.braceL.updateContext = function (prevType) {
  this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
  this.state.exprAllowed = true;
};

types.dollarBraceL.updateContext = function () {
  this.state.context.push(types$1.templateQuasi);
  this.state.exprAllowed = true;
};

types.parenL.updateContext = function (prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
  this.state.exprAllowed = true;
};

types.incDec.updateContext = function () {};

types._function.updateContext = types._class.updateContext = function (prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && this.hasPrecedingLineBreak()) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
    this.state.context.push(types$1.functionExpression);
  } else {
    this.state.context.push(types$1.functionStatement);
  }

  this.state.exprAllowed = false;
};

types.backQuote.updateContext = function () {
  if (this.curContext() === types$1.template) {
    this.state.context.pop();
  } else {
    this.state.context.push(types$1.template);
  }

  this.state.exprAllowed = false;
};

types.braceHashL.updateContext = function () {
  this.state.context.push(types$1.recordExpression);
  this.state.exprAllowed = true;
};

var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

function isInAstralSet(code, set) {
  var pos = 0x10000;

  for (var i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes);
}

function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

var reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
var keywords$1 = new Set(reservedWords.keyword);
var reservedWordsStrictSet = new Set(reservedWords.strict);
var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);

function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}

function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}

function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}

function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}

function isKeyword(word) {
  return keywords$1.has(word);
}

var keywordRelationalOperator = /^in(stanceof)?$/;

function isIteratorStart(current, next) {
  return current === 64 && next === 64;
}

var SCOPE_OTHER = 0,
    SCOPE_PROGRAM = 1,
    SCOPE_FUNCTION = 2,
    SCOPE_ARROW = 4,
    SCOPE_SIMPLE_CATCH = 8,
    SCOPE_SUPER = 16,
    SCOPE_DIRECT_SUPER = 32,
    SCOPE_CLASS = 64,
    SCOPE_TS_MODULE = 128,
    SCOPE_VAR = SCOPE_PROGRAM | SCOPE_FUNCTION | SCOPE_TS_MODULE;
var BIND_KIND_VALUE = 1,
    BIND_KIND_TYPE = 2,
    BIND_SCOPE_VAR = 4,
    BIND_SCOPE_LEXICAL = 8,
    BIND_SCOPE_FUNCTION = 16,
    BIND_FLAGS_NONE = 64,
    BIND_FLAGS_CLASS = 128,
    BIND_FLAGS_TS_ENUM = 256,
    BIND_FLAGS_TS_CONST_ENUM = 512,
    BIND_FLAGS_TS_EXPORT_ONLY = 1024;
var BIND_CLASS = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_CLASS,
    BIND_LEXICAL = BIND_KIND_VALUE | 0 | BIND_SCOPE_LEXICAL | 0,
    BIND_VAR = BIND_KIND_VALUE | 0 | BIND_SCOPE_VAR | 0,
    BIND_FUNCTION = BIND_KIND_VALUE | 0 | BIND_SCOPE_FUNCTION | 0,
    BIND_TS_INTERFACE = 0 | BIND_KIND_TYPE | 0 | BIND_FLAGS_CLASS,
    BIND_TS_TYPE = 0 | BIND_KIND_TYPE | 0 | 0,
    BIND_TS_ENUM = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_TS_ENUM,
    BIND_TS_AMBIENT = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY,
    BIND_NONE = 0 | 0 | 0 | BIND_FLAGS_NONE,
    BIND_OUTSIDE = BIND_KIND_VALUE | 0 | 0 | BIND_FLAGS_NONE,
    BIND_TS_CONST_ENUM = BIND_TS_ENUM | BIND_FLAGS_TS_CONST_ENUM,
    BIND_TS_NAMESPACE = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY;
var CLASS_ELEMENT_FLAG_STATIC = 4,
    CLASS_ELEMENT_KIND_GETTER = 2,
    CLASS_ELEMENT_KIND_SETTER = 1,
    CLASS_ELEMENT_KIND_ACCESSOR = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_KIND_SETTER;
var CLASS_ELEMENT_STATIC_GETTER = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_FLAG_STATIC,
    CLASS_ELEMENT_STATIC_SETTER = CLASS_ELEMENT_KIND_SETTER | CLASS_ELEMENT_FLAG_STATIC,
    CLASS_ELEMENT_INSTANCE_GETTER = CLASS_ELEMENT_KIND_GETTER,
    CLASS_ELEMENT_INSTANCE_SETTER = CLASS_ELEMENT_KIND_SETTER,
    CLASS_ELEMENT_OTHER = 0;
var reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
var FlowErrors = Object.freeze({
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module",
  AssignReservedType: "Cannot overwrite reserved type %0",
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement",
  EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
  EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
  EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
  EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
  EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
  EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
  EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
  EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
  EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions",
  InexactVariance: "Explicit inexact syntax cannot have variance",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment",
  OptionalBindingPattern: "A binding pattern parameter cannot be optional in an implementation signature.",
  SpreadVariance: "Spread properties cannot have variance",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object",
  UnexpectedReservedType: "Unexpected reserved type %0",
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint"',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`",
  UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead",
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module",
  UnterminatedFlowComment: "Unterminated flow-comment"
});

function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}

function hasTypeImportKind(node) {
  return node.importKind === "type" || node.importKind === "typeof";
}

function isMaybeDefaultImport(state) {
  return (state.type === types.name || !!state.type.keyword) && state.value !== "from";
}

var exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};

function partition(list, test) {
  var list1 = [];
  var list2 = [];

  for (var i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }

  return [list1, list2];
}

var FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;

var flow = function (superClass) {
  var _temp;

  return _temp = /*#__PURE__*/function (_superClass2) {
    _inherits(_temp, _superClass2);

    var _super4 = _createSuper(_temp);

    function _temp(options, input) {
      var _this3;

      _classCallCheck(this, _temp);

      _this3 = _super4.call(this, options, input);
      _this3.flowPragma = void 0;
      _this3.flowPragma = undefined;
      return _this3;
    }

    _createClass(_temp, [{
      key: "shouldParseTypes",
      value: function shouldParseTypes() {
        return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
      }
    }, {
      key: "shouldParseEnums",
      value: function shouldParseEnums() {
        return !!this.getPluginOption("flow", "enums");
      }
    }, {
      key: "finishToken",
      value: function finishToken(type, val) {
        if (type !== types.string && type !== types.semi && type !== types.interpreterDirective) {
          if (this.flowPragma === undefined) {
            this.flowPragma = null;
          }
        }

        return _get(_getPrototypeOf(_temp.prototype), "finishToken", this).call(this, type, val);
      }
    }, {
      key: "addComment",
      value: function addComment(comment) {
        if (this.flowPragma === undefined) {
          var matches = FLOW_PRAGMA_REGEX.exec(comment.value);
          if (!matches) ;else if (matches[1] === "flow") {
            this.flowPragma = "flow";
          } else if (matches[1] === "noflow") {
            this.flowPragma = "noflow";
          } else {
            throw new Error("Unexpected flow pragma");
          }
        }

        return _get(_getPrototypeOf(_temp.prototype), "addComment", this).call(this, comment);
      }
    }, {
      key: "flowParseTypeInitialiser",
      value: function flowParseTypeInitialiser(tok) {
        var oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(tok || types.colon);
        var type = this.flowParseType();
        this.state.inType = oldInType;
        return type;
      }
    }, {
      key: "flowParsePredicate",
      value: function flowParsePredicate() {
        var node = this.startNode();
        var moduloLoc = this.state.startLoc;
        var moduloPos = this.state.start;
        this.expect(types.modulo);
        var checksLoc = this.state.startLoc;
        this.expectContextual("checks");

        if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
          this.raise(moduloPos, FlowErrors.UnexpectedSpaceBetweenModuloChecks);
        }

        if (this.eat(types.parenL)) {
          node.value = this.parseExpression();
          this.expect(types.parenR);
          return this.finishNode(node, "DeclaredPredicate");
        } else {
          return this.finishNode(node, "InferredPredicate");
        }
      }
    }, {
      key: "flowParseTypeAndPredicateInitialiser",
      value: function flowParseTypeAndPredicateInitialiser() {
        var oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(types.colon);
        var type = null;
        var predicate = null;

        if (this.match(types.modulo)) {
          this.state.inType = oldInType;
          predicate = this.flowParsePredicate();
        } else {
          type = this.flowParseType();
          this.state.inType = oldInType;

          if (this.match(types.modulo)) {
            predicate = this.flowParsePredicate();
          }
        }

        return [type, predicate];
      }
    }, {
      key: "flowParseDeclareClass",
      value: function flowParseDeclareClass(node) {
        this.next();
        this.flowParseInterfaceish(node, true);
        return this.finishNode(node, "DeclareClass");
      }
    }, {
      key: "flowParseDeclareFunction",
      value: function flowParseDeclareFunction(node) {
        this.next();
        var id = node.id = this.parseIdentifier();
        var typeNode = this.startNode();
        var typeContainer = this.startNode();

        if (this.isRelational("<")) {
          typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          typeNode.typeParameters = null;
        }

        this.expect(types.parenL);
        var tmp = this.flowParseFunctionTypeParams();
        typeNode.params = tmp.params;
        typeNode.rest = tmp.rest;
        this.expect(types.parenR);
        [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
        id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
        this.resetEndLocation(id);
        this.semicolon();
        return this.finishNode(node, "DeclareFunction");
      }
    }, {
      key: "flowParseDeclare",
      value: function flowParseDeclare(node, insideModule) {
        if (this.match(types._class)) {
          return this.flowParseDeclareClass(node);
        } else if (this.match(types._function)) {
          return this.flowParseDeclareFunction(node);
        } else if (this.match(types._var)) {
          return this.flowParseDeclareVariable(node);
        } else if (this.eatContextual("module")) {
          if (this.match(types.dot)) {
            return this.flowParseDeclareModuleExports(node);
          } else {
            if (insideModule) {
              this.raise(this.state.lastTokStart, FlowErrors.NestedDeclareModule);
            }

            return this.flowParseDeclareModule(node);
          }
        } else if (this.isContextual("type")) {
          return this.flowParseDeclareTypeAlias(node);
        } else if (this.isContextual("opaque")) {
          return this.flowParseDeclareOpaqueType(node);
        } else if (this.isContextual("interface")) {
          return this.flowParseDeclareInterface(node);
        } else if (this.match(types._export)) {
          return this.flowParseDeclareExportDeclaration(node, insideModule);
        } else {
          throw this.unexpected();
        }
      }
    }, {
      key: "flowParseDeclareVariable",
      value: function flowParseDeclareVariable(node) {
        this.next();
        node.id = this.flowParseTypeAnnotatableIdentifier(true);
        this.scope.declareName(node.id.name, BIND_VAR, node.id.start);
        this.semicolon();
        return this.finishNode(node, "DeclareVariable");
      }
    }, {
      key: "flowParseDeclareModule",
      value: function flowParseDeclareModule(node) {
        var _this4 = this;

        this.scope.enter(SCOPE_OTHER);

        if (this.match(types.string)) {
          node.id = this.parseExprAtom();
        } else {
          node.id = this.parseIdentifier();
        }

        var bodyNode = node.body = this.startNode();
        var body = bodyNode.body = [];
        this.expect(types.braceL);

        while (!this.match(types.braceR)) {
          var _bodyNode = this.startNode();

          if (this.match(types._import)) {
            this.next();

            if (!this.isContextual("type") && !this.match(types._typeof)) {
              this.raise(this.state.lastTokStart, FlowErrors.InvalidNonTypeImportInDeclareModule);
            }

            this.parseImport(_bodyNode);
          } else {
            this.expectContextual("declare", FlowErrors.UnsupportedStatementInDeclareModule);
            _bodyNode = this.flowParseDeclare(_bodyNode, true);
          }

          body.push(_bodyNode);
        }

        this.scope.exit();
        this.expect(types.braceR);
        this.finishNode(bodyNode, "BlockStatement");
        var kind = null;
        var hasModuleExport = false;
        body.forEach(function (bodyElement) {
          if (isEsModuleType(bodyElement)) {
            if (kind === "CommonJS") {
              _this4.raise(bodyElement.start, FlowErrors.AmbiguousDeclareModuleKind);
            }

            kind = "ES";
          } else if (bodyElement.type === "DeclareModuleExports") {
            if (hasModuleExport) {
              _this4.raise(bodyElement.start, FlowErrors.DuplicateDeclareModuleExports);
            }

            if (kind === "ES") {
              _this4.raise(bodyElement.start, FlowErrors.AmbiguousDeclareModuleKind);
            }

            kind = "CommonJS";
            hasModuleExport = true;
          }
        });
        node.kind = kind || "CommonJS";
        return this.finishNode(node, "DeclareModule");
      }
    }, {
      key: "flowParseDeclareExportDeclaration",
      value: function flowParseDeclareExportDeclaration(node, insideModule) {
        this.expect(types._export);

        if (this.eat(types._default)) {
          if (this.match(types._function) || this.match(types._class)) {
            node.declaration = this.flowParseDeclare(this.startNode());
          } else {
            node.declaration = this.flowParseType();
            this.semicolon();
          }

          node.default = true;
          return this.finishNode(node, "DeclareExportDeclaration");
        } else {
          if (this.match(types._const) || this.isLet() || (this.isContextual("type") || this.isContextual("interface")) && !insideModule) {
            var label = this.state.value;
            var suggestion = exportSuggestions[label];
            throw this.raise(this.state.start, FlowErrors.UnsupportedDeclareExportKind, label, suggestion);
          }

          if (this.match(types._var) || this.match(types._function) || this.match(types._class) || this.isContextual("opaque")) {
            node.declaration = this.flowParseDeclare(this.startNode());
            node.default = false;
            return this.finishNode(node, "DeclareExportDeclaration");
          } else if (this.match(types.star) || this.match(types.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) {
            node = this.parseExport(node);

            if (node.type === "ExportNamedDeclaration") {
              node.type = "ExportDeclaration";
              node.default = false;
              delete node.exportKind;
            }

            node.type = "Declare" + node.type;
            return node;
          }
        }

        throw this.unexpected();
      }
    }, {
      key: "flowParseDeclareModuleExports",
      value: function flowParseDeclareModuleExports(node) {
        this.next();
        this.expectContextual("exports");
        node.typeAnnotation = this.flowParseTypeAnnotation();
        this.semicolon();
        return this.finishNode(node, "DeclareModuleExports");
      }
    }, {
      key: "flowParseDeclareTypeAlias",
      value: function flowParseDeclareTypeAlias(node) {
        this.next();
        this.flowParseTypeAlias(node);
        node.type = "DeclareTypeAlias";
        return node;
      }
    }, {
      key: "flowParseDeclareOpaqueType",
      value: function flowParseDeclareOpaqueType(node) {
        this.next();
        this.flowParseOpaqueType(node, true);
        node.type = "DeclareOpaqueType";
        return node;
      }
    }, {
      key: "flowParseDeclareInterface",
      value: function flowParseDeclareInterface(node) {
        this.next();
        this.flowParseInterfaceish(node);
        return this.finishNode(node, "DeclareInterface");
      }
    }, {
      key: "flowParseInterfaceish",
      value: function flowParseInterfaceish(node) {
        var isClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        node.id = this.flowParseRestrictedIdentifier(!isClass, true);
        this.scope.declareName(node.id.name, isClass ? BIND_FUNCTION : BIND_LEXICAL, node.id.start);

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }

        node.extends = [];
        node.implements = [];
        node.mixins = [];

        if (this.eat(types._extends)) {
          do {
            node.extends.push(this.flowParseInterfaceExtends());
          } while (!isClass && this.eat(types.comma));
        }

        if (this.isContextual("mixins")) {
          this.next();

          do {
            node.mixins.push(this.flowParseInterfaceExtends());
          } while (this.eat(types.comma));
        }

        if (this.isContextual("implements")) {
          this.next();

          do {
            node.implements.push(this.flowParseInterfaceExtends());
          } while (this.eat(types.comma));
        }

        node.body = this.flowParseObjectType({
          allowStatic: isClass,
          allowExact: false,
          allowSpread: false,
          allowProto: isClass,
          allowInexact: false
        });
      }
    }, {
      key: "flowParseInterfaceExtends",
      value: function flowParseInterfaceExtends() {
        var node = this.startNode();
        node.id = this.flowParseQualifiedTypeIdentifier();

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }

        return this.finishNode(node, "InterfaceExtends");
      }
    }, {
      key: "flowParseInterface",
      value: function flowParseInterface(node) {
        this.flowParseInterfaceish(node);
        return this.finishNode(node, "InterfaceDeclaration");
      }
    }, {
      key: "checkNotUnderscore",
      value: function checkNotUnderscore(word) {
        if (word === "_") {
          this.raise(this.state.start, FlowErrors.UnexpectedReservedUnderscore);
        }
      }
    }, {
      key: "checkReservedType",
      value: function checkReservedType(word, startLoc, declaration) {
        if (!reservedTypes.has(word)) return;
        this.raise(startLoc, declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, word);
      }
    }, {
      key: "flowParseRestrictedIdentifier",
      value: function flowParseRestrictedIdentifier(liberal, declaration) {
        this.checkReservedType(this.state.value, this.state.start, declaration);
        return this.parseIdentifier(liberal);
      }
    }, {
      key: "flowParseTypeAlias",
      value: function flowParseTypeAlias(node) {
        node.id = this.flowParseRestrictedIdentifier(false, true);
        this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }

        node.right = this.flowParseTypeInitialiser(types.eq);
        this.semicolon();
        return this.finishNode(node, "TypeAlias");
      }
    }, {
      key: "flowParseOpaqueType",
      value: function flowParseOpaqueType(node, declare) {
        this.expectContextual("type");
        node.id = this.flowParseRestrictedIdentifier(true, true);
        this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }

        node.supertype = null;

        if (this.match(types.colon)) {
          node.supertype = this.flowParseTypeInitialiser(types.colon);
        }

        node.impltype = null;

        if (!declare) {
          node.impltype = this.flowParseTypeInitialiser(types.eq);
        }

        this.semicolon();
        return this.finishNode(node, "OpaqueType");
      }
    }, {
      key: "flowParseTypeParameter",
      value: function flowParseTypeParameter() {
        var requireDefault = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var nodeStart = this.state.start;
        var node = this.startNode();
        var variance = this.flowParseVariance();
        var ident = this.flowParseTypeAnnotatableIdentifier();
        node.name = ident.name;
        node.variance = variance;
        node.bound = ident.typeAnnotation;

        if (this.match(types.eq)) {
          this.eat(types.eq);
          node.default = this.flowParseType();
        } else {
          if (requireDefault) {
            this.raise(nodeStart, FlowErrors.MissingTypeParamDefault);
          }
        }

        return this.finishNode(node, "TypeParameter");
      }
    }, {
      key: "flowParseTypeParameterDeclaration",
      value: function flowParseTypeParameterDeclaration() {
        var oldInType = this.state.inType;
        var node = this.startNode();
        node.params = [];
        this.state.inType = true;

        if (this.isRelational("<") || this.match(types.jsxTagStart)) {
          this.next();
        } else {
          this.unexpected();
        }

        var defaultRequired = false;

        do {
          var typeParameter = this.flowParseTypeParameter(defaultRequired);
          node.params.push(typeParameter);

          if (typeParameter.default) {
            defaultRequired = true;
          }

          if (!this.isRelational(">")) {
            this.expect(types.comma);
          }
        } while (!this.isRelational(">"));

        this.expectRelational(">");
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterDeclaration");
      }
    }, {
      key: "flowParseTypeParameterInstantiation",
      value: function flowParseTypeParameterInstantiation() {
        var node = this.startNode();
        var oldInType = this.state.inType;
        node.params = [];
        this.state.inType = true;
        this.expectRelational("<");
        var oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = false;

        while (!this.isRelational(">")) {
          node.params.push(this.flowParseType());

          if (!this.isRelational(">")) {
            this.expect(types.comma);
          }
        }

        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        this.expectRelational(">");
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterInstantiation");
      }
    }, {
      key: "flowParseTypeParameterInstantiationCallOrNew",
      value: function flowParseTypeParameterInstantiationCallOrNew() {
        var node = this.startNode();
        var oldInType = this.state.inType;
        node.params = [];
        this.state.inType = true;
        this.expectRelational("<");

        while (!this.isRelational(">")) {
          node.params.push(this.flowParseTypeOrImplicitInstantiation());

          if (!this.isRelational(">")) {
            this.expect(types.comma);
          }
        }

        this.expectRelational(">");
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterInstantiation");
      }
    }, {
      key: "flowParseInterfaceType",
      value: function flowParseInterfaceType() {
        var node = this.startNode();
        this.expectContextual("interface");
        node.extends = [];

        if (this.eat(types._extends)) {
          do {
            node.extends.push(this.flowParseInterfaceExtends());
          } while (this.eat(types.comma));
        }

        node.body = this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: false,
          allowProto: false,
          allowInexact: false
        });
        return this.finishNode(node, "InterfaceTypeAnnotation");
      }
    }, {
      key: "flowParseObjectPropertyKey",
      value: function flowParseObjectPropertyKey() {
        return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
      }
    }, {
      key: "flowParseObjectTypeIndexer",
      value: function flowParseObjectTypeIndexer(node, isStatic, variance) {
        node.static = isStatic;

        if (this.lookahead().type === types.colon) {
          node.id = this.flowParseObjectPropertyKey();
          node.key = this.flowParseTypeInitialiser();
        } else {
          node.id = null;
          node.key = this.flowParseType();
        }

        this.expect(types.bracketR);
        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
        return this.finishNode(node, "ObjectTypeIndexer");
      }
    }, {
      key: "flowParseObjectTypeInternalSlot",
      value: function flowParseObjectTypeInternalSlot(node, isStatic) {
        node.static = isStatic;
        node.id = this.flowParseObjectPropertyKey();
        this.expect(types.bracketR);
        this.expect(types.bracketR);

        if (this.isRelational("<") || this.match(types.parenL)) {
          node.method = true;
          node.optional = false;
          node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
        } else {
          node.method = false;

          if (this.eat(types.question)) {
            node.optional = true;
          }

          node.value = this.flowParseTypeInitialiser();
        }

        return this.finishNode(node, "ObjectTypeInternalSlot");
      }
    }, {
      key: "flowParseObjectTypeMethodish",
      value: function flowParseObjectTypeMethodish(node) {
        node.params = [];
        node.rest = null;
        node.typeParameters = null;

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }

        this.expect(types.parenL);

        while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
          node.params.push(this.flowParseFunctionTypeParam());

          if (!this.match(types.parenR)) {
            this.expect(types.comma);
          }
        }

        if (this.eat(types.ellipsis)) {
          node.rest = this.flowParseFunctionTypeParam();
        }

        this.expect(types.parenR);
        node.returnType = this.flowParseTypeInitialiser();
        return this.finishNode(node, "FunctionTypeAnnotation");
      }
    }, {
      key: "flowParseObjectTypeCallProperty",
      value: function flowParseObjectTypeCallProperty(node, isStatic) {
        var valueNode = this.startNode();
        node.static = isStatic;
        node.value = this.flowParseObjectTypeMethodish(valueNode);
        return this.finishNode(node, "ObjectTypeCallProperty");
      }
    }, {
      key: "flowParseObjectType",
      value: function flowParseObjectType(_ref2) {
        var {
          allowStatic: allowStatic,
          allowExact: allowExact,
          allowSpread: allowSpread,
          allowProto: allowProto,
          allowInexact: allowInexact
        } = _ref2;
        var oldInType = this.state.inType;
        this.state.inType = true;
        var nodeStart = this.startNode();
        nodeStart.callProperties = [];
        nodeStart.properties = [];
        nodeStart.indexers = [];
        nodeStart.internalSlots = [];
        var endDelim;
        var exact;
        var inexact = false;

        if (allowExact && this.match(types.braceBarL)) {
          this.expect(types.braceBarL);
          endDelim = types.braceBarR;
          exact = true;
        } else {
          this.expect(types.braceL);
          endDelim = types.braceR;
          exact = false;
        }

        nodeStart.exact = exact;

        while (!this.match(endDelim)) {
          var isStatic = false;
          var protoStart = null;
          var inexactStart = null;
          var node = this.startNode();

          if (allowProto && this.isContextual("proto")) {
            var lookahead = this.lookahead();

            if (lookahead.type !== types.colon && lookahead.type !== types.question) {
              this.next();
              protoStart = this.state.start;
              allowStatic = false;
            }
          }

          if (allowStatic && this.isContextual("static")) {
            var _lookahead = this.lookahead();

            if (_lookahead.type !== types.colon && _lookahead.type !== types.question) {
              this.next();
              isStatic = true;
            }
          }

          var variance = this.flowParseVariance();

          if (this.eat(types.bracketL)) {
            if (protoStart != null) {
              this.unexpected(protoStart);
            }

            if (this.eat(types.bracketL)) {
              if (variance) {
                this.unexpected(variance.start);
              }

              nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
            } else {
              nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
            }
          } else if (this.match(types.parenL) || this.isRelational("<")) {
            if (protoStart != null) {
              this.unexpected(protoStart);
            }

            if (variance) {
              this.unexpected(variance.start);
            }

            nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
          } else {
            var kind = "init";

            if (this.isContextual("get") || this.isContextual("set")) {
              var _lookahead2 = this.lookahead();

              if (_lookahead2.type === types.name || _lookahead2.type === types.string || _lookahead2.type === types.num) {
                kind = this.state.value;
                this.next();
              }
            }

            var propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);

            if (propOrInexact === null) {
              inexact = true;
              inexactStart = this.state.lastTokStart;
            } else {
              nodeStart.properties.push(propOrInexact);
            }
          }

          this.flowObjectTypeSemicolon();

          if (inexactStart && !this.match(types.braceR) && !this.match(types.braceBarR)) {
            this.raise(inexactStart, FlowErrors.UnexpectedExplicitInexactInObject);
          }
        }

        this.expect(endDelim);

        if (allowSpread) {
          nodeStart.inexact = inexact;
        }

        var out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
        this.state.inType = oldInType;
        return out;
      }
    }, {
      key: "flowParseObjectTypeProperty",
      value: function flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact) {
        if (this.eat(types.ellipsis)) {
          var isInexactToken = this.match(types.comma) || this.match(types.semi) || this.match(types.braceR) || this.match(types.braceBarR);

          if (isInexactToken) {
            if (!allowSpread) {
              this.raise(this.state.lastTokStart, FlowErrors.InexactInsideNonObject);
            } else if (!allowInexact) {
              this.raise(this.state.lastTokStart, FlowErrors.InexactInsideExact);
            }

            if (variance) {
              this.raise(variance.start, FlowErrors.InexactVariance);
            }

            return null;
          }

          if (!allowSpread) {
            this.raise(this.state.lastTokStart, FlowErrors.UnexpectedSpreadType);
          }

          if (protoStart != null) {
            this.unexpected(protoStart);
          }

          if (variance) {
            this.raise(variance.start, FlowErrors.SpreadVariance);
          }

          node.argument = this.flowParseType();
          return this.finishNode(node, "ObjectTypeSpreadProperty");
        } else {
          node.key = this.flowParseObjectPropertyKey();
          node.static = isStatic;
          node.proto = protoStart != null;
          node.kind = kind;
          var optional = false;

          if (this.isRelational("<") || this.match(types.parenL)) {
            node.method = true;

            if (protoStart != null) {
              this.unexpected(protoStart);
            }

            if (variance) {
              this.unexpected(variance.start);
            }

            node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));

            if (kind === "get" || kind === "set") {
              this.flowCheckGetterSetterParams(node);
            }
          } else {
            if (kind !== "init") this.unexpected();
            node.method = false;

            if (this.eat(types.question)) {
              optional = true;
            }

            node.value = this.flowParseTypeInitialiser();
            node.variance = variance;
          }

          node.optional = optional;
          return this.finishNode(node, "ObjectTypeProperty");
        }
      }
    }, {
      key: "flowCheckGetterSetterParams",
      value: function flowCheckGetterSetterParams(property) {
        var paramCount = property.kind === "get" ? 0 : 1;
        var start = property.start;
        var length = property.value.params.length + (property.value.rest ? 1 : 0);

        if (length !== paramCount) {
          if (property.kind === "get") {
            this.raise(start, ErrorMessages.BadGetterArity);
          } else {
            this.raise(start, ErrorMessages.BadSetterArity);
          }
        }

        if (property.kind === "set" && property.value.rest) {
          this.raise(start, ErrorMessages.BadSetterRestParameter);
        }
      }
    }, {
      key: "flowObjectTypeSemicolon",
      value: function flowObjectTypeSemicolon() {
        if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
          this.unexpected();
        }
      }
    }, {
      key: "flowParseQualifiedTypeIdentifier",
      value: function flowParseQualifiedTypeIdentifier(startPos, startLoc, id) {
        startPos = startPos || this.state.start;
        startLoc = startLoc || this.state.startLoc;
        var node = id || this.flowParseRestrictedIdentifier(true);

        while (this.eat(types.dot)) {
          var node2 = this.startNodeAt(startPos, startLoc);
          node2.qualification = node;
          node2.id = this.flowParseRestrictedIdentifier(true);
          node = this.finishNode(node2, "QualifiedTypeIdentifier");
        }

        return node;
      }
    }, {
      key: "flowParseGenericType",
      value: function flowParseGenericType(startPos, startLoc, id) {
        var node = this.startNodeAt(startPos, startLoc);
        node.typeParameters = null;
        node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        }

        return this.finishNode(node, "GenericTypeAnnotation");
      }
    }, {
      key: "flowParseTypeofType",
      value: function flowParseTypeofType() {
        var node = this.startNode();
        this.expect(types._typeof);
        node.argument = this.flowParsePrimaryType();
        return this.finishNode(node, "TypeofTypeAnnotation");
      }
    }, {
      key: "flowParseTupleType",
      value: function flowParseTupleType() {
        var node = this.startNode();
        node.types = [];
        this.expect(types.bracketL);

        while (this.state.pos < this.length && !this.match(types.bracketR)) {
          node.types.push(this.flowParseType());
          if (this.match(types.bracketR)) break;
          this.expect(types.comma);
        }

        this.expect(types.bracketR);
        return this.finishNode(node, "TupleTypeAnnotation");
      }
    }, {
      key: "flowParseFunctionTypeParam",
      value: function flowParseFunctionTypeParam() {
        var name = null;
        var optional = false;
        var typeAnnotation = null;
        var node = this.startNode();
        var lh = this.lookahead();

        if (lh.type === types.colon || lh.type === types.question) {
          name = this.parseIdentifier();

          if (this.eat(types.question)) {
            optional = true;
          }

          typeAnnotation = this.flowParseTypeInitialiser();
        } else {
          typeAnnotation = this.flowParseType();
        }

        node.name = name;
        node.optional = optional;
        node.typeAnnotation = typeAnnotation;
        return this.finishNode(node, "FunctionTypeParam");
      }
    }, {
      key: "reinterpretTypeAsFunctionTypeParam",
      value: function reinterpretTypeAsFunctionTypeParam(type) {
        var node = this.startNodeAt(type.start, type.loc.start);
        node.name = null;
        node.optional = false;
        node.typeAnnotation = type;
        return this.finishNode(node, "FunctionTypeParam");
      }
    }, {
      key: "flowParseFunctionTypeParams",
      value: function flowParseFunctionTypeParams() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var rest = null;

        while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
          params.push(this.flowParseFunctionTypeParam());

          if (!this.match(types.parenR)) {
            this.expect(types.comma);
          }
        }

        if (this.eat(types.ellipsis)) {
          rest = this.flowParseFunctionTypeParam();
        }

        return {
          params: params,
          rest: rest
        };
      }
    }, {
      key: "flowIdentToTypeAnnotation",
      value: function flowIdentToTypeAnnotation(startPos, startLoc, node, id) {
        switch (id.name) {
          case "any":
            return this.finishNode(node, "AnyTypeAnnotation");

          case "bool":
          case "boolean":
            return this.finishNode(node, "BooleanTypeAnnotation");

          case "mixed":
            return this.finishNode(node, "MixedTypeAnnotation");

          case "empty":
            return this.finishNode(node, "EmptyTypeAnnotation");

          case "number":
            return this.finishNode(node, "NumberTypeAnnotation");

          case "string":
            return this.finishNode(node, "StringTypeAnnotation");

          case "symbol":
            return this.finishNode(node, "SymbolTypeAnnotation");

          default:
            this.checkNotUnderscore(id.name);
            return this.flowParseGenericType(startPos, startLoc, id);
        }
      }
    }, {
      key: "flowParsePrimaryType",
      value: function flowParsePrimaryType() {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        var node = this.startNode();
        var tmp;
        var type;
        var isGroupedType = false;
        var oldNoAnonFunctionType = this.state.noAnonFunctionType;

        switch (this.state.type) {
          case types.name:
            if (this.isContextual("interface")) {
              return this.flowParseInterfaceType();
            }

            return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

          case types.braceL:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: false,
              allowSpread: true,
              allowProto: false,
              allowInexact: true
            });

          case types.braceBarL:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: true,
              allowSpread: true,
              allowProto: false,
              allowInexact: false
            });

          case types.bracketL:
            this.state.noAnonFunctionType = false;
            type = this.flowParseTupleType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            return type;

          case types.relational:
            if (this.state.value === "<") {
              node.typeParameters = this.flowParseTypeParameterDeclaration();
              this.expect(types.parenL);
              tmp = this.flowParseFunctionTypeParams();
              node.params = tmp.params;
              node.rest = tmp.rest;
              this.expect(types.parenR);
              this.expect(types.arrow);
              node.returnType = this.flowParseType();
              return this.finishNode(node, "FunctionTypeAnnotation");
            }

            break;

          case types.parenL:
            this.next();

            if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
              if (this.match(types.name)) {
                var token = this.lookahead().type;
                isGroupedType = token !== types.question && token !== types.colon;
              } else {
                isGroupedType = true;
              }
            }

            if (isGroupedType) {
              this.state.noAnonFunctionType = false;
              type = this.flowParseType();
              this.state.noAnonFunctionType = oldNoAnonFunctionType;

              if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
                this.expect(types.parenR);
                return type;
              } else {
                this.eat(types.comma);
              }
            }

            if (type) {
              tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
            } else {
              tmp = this.flowParseFunctionTypeParams();
            }

            node.params = tmp.params;
            node.rest = tmp.rest;
            this.expect(types.parenR);
            this.expect(types.arrow);
            node.returnType = this.flowParseType();
            node.typeParameters = null;
            return this.finishNode(node, "FunctionTypeAnnotation");

          case types.string:
            return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

          case types._true:
          case types._false:
            node.value = this.match(types._true);
            this.next();
            return this.finishNode(node, "BooleanLiteralTypeAnnotation");

          case types.plusMin:
            if (this.state.value === "-") {
              this.next();

              if (this.match(types.num)) {
                return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", node.start, node.loc.start);
              }

              if (this.match(types.bigint)) {
                return this.parseLiteral(-this.state.value, "BigIntLiteralTypeAnnotation", node.start, node.loc.start);
              }

              throw this.raise(this.state.start, FlowErrors.UnexpectedSubtractionOperand);
            }

            throw this.unexpected();

          case types.num:
            return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");

          case types.bigint:
            return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");

          case types._void:
            this.next();
            return this.finishNode(node, "VoidTypeAnnotation");

          case types._null:
            this.next();
            return this.finishNode(node, "NullLiteralTypeAnnotation");

          case types._this:
            this.next();
            return this.finishNode(node, "ThisTypeAnnotation");

          case types.star:
            this.next();
            return this.finishNode(node, "ExistsTypeAnnotation");

          default:
            if (this.state.type.keyword === "typeof") {
              return this.flowParseTypeofType();
            } else if (this.state.type.keyword) {
              var label = this.state.type.label;
              this.next();
              return _get(_getPrototypeOf(_temp.prototype), "createIdentifier", this).call(this, node, label);
            }

        }

        throw this.unexpected();
      }
    }, {
      key: "flowParsePostfixType",
      value: function flowParsePostfixType() {
        var startPos = this.state.start,
            startLoc = this.state.startLoc;
        var type = this.flowParsePrimaryType();

        while (this.match(types.bracketL) && !this.canInsertSemicolon()) {
          var node = this.startNodeAt(startPos, startLoc);
          node.elementType = type;
          this.expect(types.bracketL);
          this.expect(types.bracketR);
          type = this.finishNode(node, "ArrayTypeAnnotation");
        }

        return type;
      }
    }, {
      key: "flowParsePrefixType",
      value: function flowParsePrefixType() {
        var node = this.startNode();

        if (this.eat(types.question)) {
          node.typeAnnotation = this.flowParsePrefixType();
          return this.finishNode(node, "NullableTypeAnnotation");
        } else {
          return this.flowParsePostfixType();
        }
      }
    }, {
      key: "flowParseAnonFunctionWithoutParens",
      value: function flowParseAnonFunctionWithoutParens() {
        var param = this.flowParsePrefixType();

        if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
          var node = this.startNodeAt(param.start, param.loc.start);
          node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
          node.rest = null;
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        }

        return param;
      }
    }, {
      key: "flowParseIntersectionType",
      value: function flowParseIntersectionType() {
        var node = this.startNode();
        this.eat(types.bitwiseAND);
        var type = this.flowParseAnonFunctionWithoutParens();
        node.types = [type];

        while (this.eat(types.bitwiseAND)) {
          node.types.push(this.flowParseAnonFunctionWithoutParens());
        }

        return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
      }
    }, {
      key: "flowParseUnionType",
      value: function flowParseUnionType() {
        var node = this.startNode();
        this.eat(types.bitwiseOR);
        var type = this.flowParseIntersectionType();
        node.types = [type];

        while (this.eat(types.bitwiseOR)) {
          node.types.push(this.flowParseIntersectionType());
        }

        return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
      }
    }, {
      key: "flowParseType",
      value: function flowParseType() {
        var oldInType = this.state.inType;
        this.state.inType = true;
        var type = this.flowParseUnionType();
        this.state.inType = oldInType;
        this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType;
        return type;
      }
    }, {
      key: "flowParseTypeOrImplicitInstantiation",
      value: function flowParseTypeOrImplicitInstantiation() {
        if (this.state.type === types.name && this.state.value === "_") {
          var startPos = this.state.start;
          var startLoc = this.state.startLoc;
          var node = this.parseIdentifier();
          return this.flowParseGenericType(startPos, startLoc, node);
        } else {
          return this.flowParseType();
        }
      }
    }, {
      key: "flowParseTypeAnnotation",
      value: function flowParseTypeAnnotation() {
        var node = this.startNode();
        node.typeAnnotation = this.flowParseTypeInitialiser();
        return this.finishNode(node, "TypeAnnotation");
      }
    }, {
      key: "flowParseTypeAnnotatableIdentifier",
      value: function flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
        var ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();

        if (this.match(types.colon)) {
          ident.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(ident);
        }

        return ident;
      }
    }, {
      key: "typeCastToParameter",
      value: function typeCastToParameter(node) {
        node.expression.typeAnnotation = node.typeAnnotation;
        this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
        return node.expression;
      }
    }, {
      key: "flowParseVariance",
      value: function flowParseVariance() {
        var variance = null;

        if (this.match(types.plusMin)) {
          variance = this.startNode();

          if (this.state.value === "+") {
            variance.kind = "plus";
          } else {
            variance.kind = "minus";
          }

          this.next();
          this.finishNode(variance, "Variance");
        }

        return variance;
      }
    }, {
      key: "parseFunctionBody",
      value: function parseFunctionBody(node, allowExpressionBody) {
        var _this5 = this;

        var isMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (allowExpressionBody) {
          return this.forwardNoArrowParamsConversionAt(node, function () {
            return _get(_getPrototypeOf(_temp.prototype), "parseFunctionBody", _this5).call(_this5, node, true, isMethod);
          });
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseFunctionBody", this).call(this, node, false, isMethod);
      }
    }, {
      key: "parseFunctionBodyAndFinish",
      value: function parseFunctionBodyAndFinish(node, type) {
        var isMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.match(types.colon)) {
          var typeNode = this.startNode();
          [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
          node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
        }

        _get(_getPrototypeOf(_temp.prototype), "parseFunctionBodyAndFinish", this).call(this, node, type, isMethod);
      }
    }, {
      key: "parseStatement",
      value: function parseStatement(context, topLevel) {
        if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
          var lookahead = this.lookahead();

          if (lookahead.type === types.name || isKeyword(lookahead.value)) {
            var node = this.startNode();
            this.next();
            return this.flowParseInterface(node);
          }
        } else if (this.shouldParseEnums() && this.isContextual("enum")) {
          var _node = this.startNode();

          this.next();
          return this.flowParseEnumDeclaration(_node);
        }

        var stmt = _get(_getPrototypeOf(_temp.prototype), "parseStatement", this).call(this, context, topLevel);

        if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
          this.flowPragma = null;
        }

        return stmt;
      }
    }, {
      key: "parseExpressionStatement",
      value: function parseExpressionStatement(node, expr) {
        if (expr.type === "Identifier") {
          if (expr.name === "declare") {
            if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var) || this.match(types._export)) {
              return this.flowParseDeclare(node);
            }
          } else if (this.match(types.name)) {
            if (expr.name === "interface") {
              return this.flowParseInterface(node);
            } else if (expr.name === "type") {
              return this.flowParseTypeAlias(node);
            } else if (expr.name === "opaque") {
              return this.flowParseOpaqueType(node, false);
            }
          }
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseExpressionStatement", this).call(this, node, expr);
      }
    }, {
      key: "shouldParseExportDeclaration",
      value: function shouldParseExportDeclaration() {
        return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || this.shouldParseEnums() && this.isContextual("enum") || _get(_getPrototypeOf(_temp.prototype), "shouldParseExportDeclaration", this).call(this);
      }
    }, {
      key: "isExportDefaultSpecifier",
      value: function isExportDefaultSpecifier() {
        if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value === "opaque" || this.shouldParseEnums() && this.state.value === "enum")) {
          return false;
        }

        return _get(_getPrototypeOf(_temp.prototype), "isExportDefaultSpecifier", this).call(this);
      }
    }, {
      key: "parseExportDefaultExpression",
      value: function parseExportDefaultExpression() {
        if (this.shouldParseEnums() && this.isContextual("enum")) {
          var node = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(node);
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseExportDefaultExpression", this).call(this);
      }
    }, {
      key: "parseConditional",
      value: function parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
        var _this6 = this;

        if (!this.match(types.question)) return expr;

        if (refNeedsArrowPos) {
          var result = this.tryParse(function () {
            return _get(_getPrototypeOf(_temp.prototype), "parseConditional", _this6).call(_this6, expr, startPos, startLoc);
          });

          if (!result.node) {
            refNeedsArrowPos.start = result.error.pos || this.state.start;
            return expr;
          }

          if (result.error) this.state = result.failState;
          return result.node;
        }

        this.expect(types.question);
        var state = this.state.clone();
        var originalNoArrowAt = this.state.noArrowAt;
        var node = this.startNodeAt(startPos, startLoc);
        var {
          consequent: consequent,
          failed: failed
        } = this.tryParseConditionalConsequent();
        var [valid, invalid] = this.getArrowLikeExpressions(consequent);

        if (failed || invalid.length > 0) {
          var noArrowAt = _toConsumableArray(originalNoArrowAt);

          if (invalid.length > 0) {
            this.state = state;
            this.state.noArrowAt = noArrowAt;

            for (var i = 0; i < invalid.length; i++) {
              noArrowAt.push(invalid[i].start);
            }

            ({
              consequent: consequent,
              failed: failed
            } = this.tryParseConditionalConsequent());
            [valid, invalid] = this.getArrowLikeExpressions(consequent);
          }

          if (failed && valid.length > 1) {
            this.raise(state.start, FlowErrors.AmbiguousConditionalArrow);
          }

          if (failed && valid.length === 1) {
            this.state = state;
            this.state.noArrowAt = noArrowAt.concat(valid[0].start);
            ({
              consequent: consequent,
              failed: failed
            } = this.tryParseConditionalConsequent());
          }
        }

        this.getArrowLikeExpressions(consequent, true);
        this.state.noArrowAt = originalNoArrowAt;
        this.expect(types.colon);
        node.test = expr;
        node.consequent = consequent;
        node.alternate = this.forwardNoArrowParamsConversionAt(node, function () {
          return _this6.parseMaybeAssign(undefined, undefined, undefined);
        });
        return this.finishNode(node, "ConditionalExpression");
      }
    }, {
      key: "tryParseConditionalConsequent",
      value: function tryParseConditionalConsequent() {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        var consequent = this.parseMaybeAssignAllowIn();
        var failed = !this.match(types.colon);
        this.state.noArrowParamsConversionAt.pop();
        return {
          consequent: consequent,
          failed: failed
        };
      }
    }, {
      key: "getArrowLikeExpressions",
      value: function getArrowLikeExpressions(node, disallowInvalid) {
        var _this7 = this;

        var stack = [node];
        var arrows = [];

        while (stack.length !== 0) {
          var _node2 = stack.pop();

          if (_node2.type === "ArrowFunctionExpression") {
            if (_node2.typeParameters || !_node2.returnType) {
              this.finishArrowValidation(_node2);
            } else {
              arrows.push(_node2);
            }

            stack.push(_node2.body);
          } else if (_node2.type === "ConditionalExpression") {
            stack.push(_node2.consequent);
            stack.push(_node2.alternate);
          }
        }

        if (disallowInvalid) {
          arrows.forEach(function (node) {
            return _this7.finishArrowValidation(node);
          });
          return [arrows, []];
        }

        return partition(arrows, function (node) {
          return node.params.every(function (param) {
            return _this7.isAssignable(param, true);
          });
        });
      }
    }, {
      key: "finishArrowValidation",
      value: function finishArrowValidation(node) {
        var _node$extra;

        this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingComma, false);
        this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);

        _get(_getPrototypeOf(_temp.prototype), "checkParams", this).call(this, node, false, true);

        this.scope.exit();
      }
    }, {
      key: "forwardNoArrowParamsConversionAt",
      value: function forwardNoArrowParamsConversionAt(node, parse) {
        var result;

        if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
          this.state.noArrowParamsConversionAt.push(this.state.start);
          result = parse();
          this.state.noArrowParamsConversionAt.pop();
        } else {
          result = parse();
        }

        return result;
      }
    }, {
      key: "parseParenItem",
      value: function parseParenItem(node, startPos, startLoc) {
        node = _get(_getPrototypeOf(_temp.prototype), "parseParenItem", this).call(this, node, startPos, startLoc);

        if (this.eat(types.question)) {
          node.optional = true;
          this.resetEndLocation(node);
        }

        if (this.match(types.colon)) {
          var typeCastNode = this.startNodeAt(startPos, startLoc);
          typeCastNode.expression = node;
          typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
          return this.finishNode(typeCastNode, "TypeCastExpression");
        }

        return node;
      }
    }, {
      key: "assertModuleNodeAllowed",
      value: function assertModuleNodeAllowed(node) {
        if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
          return;
        }

        _get(_getPrototypeOf(_temp.prototype), "assertModuleNodeAllowed", this).call(this, node);
      }
    }, {
      key: "parseExport",
      value: function parseExport(node) {
        var decl = _get(_getPrototypeOf(_temp.prototype), "parseExport", this).call(this, node);

        if (decl.type === "ExportNamedDeclaration" || decl.type === "ExportAllDeclaration") {
          decl.exportKind = decl.exportKind || "value";
        }

        return decl;
      }
    }, {
      key: "parseExportDeclaration",
      value: function parseExportDeclaration(node) {
        if (this.isContextual("type")) {
          node.exportKind = "type";
          var declarationNode = this.startNode();
          this.next();

          if (this.match(types.braceL)) {
            node.specifiers = this.parseExportSpecifiers();
            this.parseExportFrom(node);
            return null;
          } else {
            return this.flowParseTypeAlias(declarationNode);
          }
        } else if (this.isContextual("opaque")) {
          node.exportKind = "type";

          var _declarationNode = this.startNode();

          this.next();
          return this.flowParseOpaqueType(_declarationNode, false);
        } else if (this.isContextual("interface")) {
          node.exportKind = "type";

          var _declarationNode2 = this.startNode();

          this.next();
          return this.flowParseInterface(_declarationNode2);
        } else if (this.shouldParseEnums() && this.isContextual("enum")) {
          node.exportKind = "value";

          var _declarationNode3 = this.startNode();

          this.next();
          return this.flowParseEnumDeclaration(_declarationNode3);
        } else {
          return _get(_getPrototypeOf(_temp.prototype), "parseExportDeclaration", this).call(this, node);
        }
      }
    }, {
      key: "eatExportStar",
      value: function eatExportStar(node) {
        if (_get(_getPrototypeOf(_temp.prototype), "eatExportStar", this).apply(this, arguments)) return true;

        if (this.isContextual("type") && this.lookahead().type === types.star) {
          node.exportKind = "type";
          this.next();
          this.next();
          return true;
        }

        return false;
      }
    }, {
      key: "maybeParseExportNamespaceSpecifier",
      value: function maybeParseExportNamespaceSpecifier(node) {
        var pos = this.state.start;

        var hasNamespace = _get(_getPrototypeOf(_temp.prototype), "maybeParseExportNamespaceSpecifier", this).call(this, node);

        if (hasNamespace && node.exportKind === "type") {
          this.unexpected(pos);
        }

        return hasNamespace;
      }
    }, {
      key: "parseClassId",
      value: function parseClassId(node, isStatement, optionalId) {
        _get(_getPrototypeOf(_temp.prototype), "parseClassId", this).call(this, node, isStatement, optionalId);

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
      }
    }, {
      key: "parseClassMember",
      value: function parseClassMember(classBody, member, state) {
        var pos = this.state.start;

        if (this.isContextual("declare")) {
          if (this.parseClassMemberFromModifier(classBody, member)) {
            return;
          }

          member.declare = true;
        }

        _get(_getPrototypeOf(_temp.prototype), "parseClassMember", this).call(this, classBody, member, state);

        if (member.declare) {
          if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty") {
            this.raise(pos, FlowErrors.DeclareClassElement);
          } else if (member.value) {
            this.raise(member.value.start, FlowErrors.DeclareClassFieldInitializer);
          }
        }
      }
    }, {
      key: "getTokenFromCode",
      value: function getTokenFromCode(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);

        if (code === 123 && next === 124) {
          return this.finishOp(types.braceBarL, 2);
        } else if (this.state.inType && (code === 62 || code === 60)) {
          return this.finishOp(types.relational, 1);
        } else if (this.state.inType && code === 63) {
          return this.finishOp(types.question, 1);
        } else if (isIteratorStart(code, next)) {
          this.state.isIterator = true;
          return _get(_getPrototypeOf(_temp.prototype), "readWord", this).call(this);
        } else {
          return _get(_getPrototypeOf(_temp.prototype), "getTokenFromCode", this).call(this, code);
        }
      }
    }, {
      key: "isAssignable",
      value: function isAssignable(node, isBinding) {
        var _this8 = this;

        switch (node.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
            return true;

          case "ObjectExpression":
            {
              var _last = node.properties.length - 1;

              return node.properties.every(function (prop, i) {
                return prop.type !== "ObjectMethod" && (i === _last || prop.type === "SpreadElement") && _this8.isAssignable(prop);
              });
            }

          case "ObjectProperty":
            return this.isAssignable(node.value);

          case "SpreadElement":
            return this.isAssignable(node.argument);

          case "ArrayExpression":
            return node.elements.every(function (element) {
              return _this8.isAssignable(element);
            });

          case "AssignmentExpression":
            return node.operator === "=";

          case "ParenthesizedExpression":
          case "TypeCastExpression":
            return this.isAssignable(node.expression);

          case "MemberExpression":
          case "OptionalMemberExpression":
            return !isBinding;

          default:
            return false;
        }
      }
    }, {
      key: "toAssignable",
      value: function toAssignable(node) {
        var isLHS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (node.type === "TypeCastExpression") {
          return _get(_getPrototypeOf(_temp.prototype), "toAssignable", this).call(this, this.typeCastToParameter(node), isLHS);
        } else {
          return _get(_getPrototypeOf(_temp.prototype), "toAssignable", this).call(this, node, isLHS);
        }
      }
    }, {
      key: "toAssignableList",
      value: function toAssignableList(exprList, trailingCommaPos, isLHS) {
        for (var i = 0; i < exprList.length; i++) {
          var expr = exprList[i];

          if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
            exprList[i] = this.typeCastToParameter(expr);
          }
        }

        return _get(_getPrototypeOf(_temp.prototype), "toAssignableList", this).call(this, exprList, trailingCommaPos, isLHS);
      }
    }, {
      key: "toReferencedList",
      value: function toReferencedList(exprList, isParenthesizedExpr) {
        for (var i = 0; i < exprList.length; i++) {
          var _expr$extra;

          var expr = exprList[i];

          if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) == null ? void 0 : _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
            this.raise(expr.typeAnnotation.start, FlowErrors.TypeCastInPattern);
          }
        }

        return exprList;
      }
    }, {
      key: "parseArrayLike",
      value: function parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
        var node = _get(_getPrototypeOf(_temp.prototype), "parseArrayLike", this).call(this, close, canBePattern, isTuple, refExpressionErrors);

        if (canBePattern && !this.state.maybeInArrowParameters) {
          this.toReferencedList(node.elements);
        }

        return node;
      }
    }, {
      key: "checkLVal",
      value: function checkLVal(expr) {
        if (expr.type !== "TypeCastExpression") {
          var _get4;

          for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            args[_key5 - 1] = arguments[_key5];
          }

          return (_get4 = _get(_getPrototypeOf(_temp.prototype), "checkLVal", this)).call.apply(_get4, [this, expr].concat(args));
        }
      }
    }, {
      key: "parseClassProperty",
      value: function parseClassProperty(node) {
        if (this.match(types.colon)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseClassProperty", this).call(this, node);
      }
    }, {
      key: "parseClassPrivateProperty",
      value: function parseClassPrivateProperty(node) {
        if (this.match(types.colon)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseClassPrivateProperty", this).call(this, node);
      }
    }, {
      key: "isClassMethod",
      value: function isClassMethod() {
        return this.isRelational("<") || _get(_getPrototypeOf(_temp.prototype), "isClassMethod", this).call(this);
      }
    }, {
      key: "isClassProperty",
      value: function isClassProperty() {
        return this.match(types.colon) || _get(_getPrototypeOf(_temp.prototype), "isClassProperty", this).call(this);
      }
    }, {
      key: "isNonstaticConstructor",
      value: function isNonstaticConstructor(method) {
        return !this.match(types.colon) && _get(_getPrototypeOf(_temp.prototype), "isNonstaticConstructor", this).call(this, method);
      }
    }, {
      key: "pushClassMethod",
      value: function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        if (method.variance) {
          this.unexpected(method.variance.start);
        }

        delete method.variance;

        if (this.isRelational("<")) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }

        _get(_getPrototypeOf(_temp.prototype), "pushClassMethod", this).call(this, classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
      }
    }, {
      key: "pushClassPrivateMethod",
      value: function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        if (method.variance) {
          this.unexpected(method.variance.start);
        }

        delete method.variance;

        if (this.isRelational("<")) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }

        _get(_getPrototypeOf(_temp.prototype), "pushClassPrivateMethod", this).call(this, classBody, method, isGenerator, isAsync);
      }
    }, {
      key: "parseClassSuper",
      value: function parseClassSuper(node) {
        _get(_getPrototypeOf(_temp.prototype), "parseClassSuper", this).call(this, node);

        if (node.superClass && this.isRelational("<")) {
          node.superTypeParameters = this.flowParseTypeParameterInstantiation();
        }

        if (this.isContextual("implements")) {
          this.next();
          var implemented = node.implements = [];

          do {
            var _node3 = this.startNode();

            _node3.id = this.flowParseRestrictedIdentifier(true);

            if (this.isRelational("<")) {
              _node3.typeParameters = this.flowParseTypeParameterInstantiation();
            } else {
              _node3.typeParameters = null;
            }

            implemented.push(this.finishNode(_node3, "ClassImplements"));
          } while (this.eat(types.comma));
        }
      }
    }, {
      key: "parsePropertyName",
      value: function parsePropertyName(node, isPrivateNameAllowed) {
        var variance = this.flowParseVariance();

        var key = _get(_getPrototypeOf(_temp.prototype), "parsePropertyName", this).call(this, node, isPrivateNameAllowed);

        node.variance = variance;
        return key;
      }
    }, {
      key: "parseObjPropValue",
      value: function parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
        if (prop.variance) {
          this.unexpected(prop.variance.start);
        }

        delete prop.variance;
        var typeParameters;

        if (this.isRelational("<") && !isAccessor) {
          typeParameters = this.flowParseTypeParameterDeclaration();
          if (!this.match(types.parenL)) this.unexpected();
        }

        _get(_getPrototypeOf(_temp.prototype), "parseObjPropValue", this).call(this, prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);

        if (typeParameters) {
          (prop.value || prop).typeParameters = typeParameters;
        }
      }
    }, {
      key: "parseAssignableListItemTypes",
      value: function parseAssignableListItemTypes(param) {
        if (this.eat(types.question)) {
          if (param.type !== "Identifier") {
            this.raise(param.start, FlowErrors.OptionalBindingPattern);
          }

          param.optional = true;
        }

        if (this.match(types.colon)) {
          param.typeAnnotation = this.flowParseTypeAnnotation();
        }

        this.resetEndLocation(param);
        return param;
      }
    }, {
      key: "parseMaybeDefault",
      value: function parseMaybeDefault(startPos, startLoc, left) {
        var node = _get(_getPrototypeOf(_temp.prototype), "parseMaybeDefault", this).call(this, startPos, startLoc, left);

        if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
          this.raise(node.typeAnnotation.start, FlowErrors.TypeBeforeInitializer);
        }

        return node;
      }
    }, {
      key: "shouldParseDefaultImport",
      value: function shouldParseDefaultImport(node) {
        if (!hasTypeImportKind(node)) {
          return _get(_getPrototypeOf(_temp.prototype), "shouldParseDefaultImport", this).call(this, node);
        }

        return isMaybeDefaultImport(this.state);
      }
    }, {
      key: "parseImportSpecifierLocal",
      value: function parseImportSpecifierLocal(node, specifier, type, contextDescription) {
        specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
        this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
        node.specifiers.push(this.finishNode(specifier, type));
      }
    }, {
      key: "maybeParseDefaultImportSpecifier",
      value: function maybeParseDefaultImportSpecifier(node) {
        node.importKind = "value";
        var kind = null;

        if (this.match(types._typeof)) {
          kind = "typeof";
        } else if (this.isContextual("type")) {
          kind = "type";
        }

        if (kind) {
          var lh = this.lookahead();

          if (kind === "type" && lh.type === types.star) {
            this.unexpected(lh.start);
          }

          if (isMaybeDefaultImport(lh) || lh.type === types.braceL || lh.type === types.star) {
            this.next();
            node.importKind = kind;
          }
        }

        return _get(_getPrototypeOf(_temp.prototype), "maybeParseDefaultImportSpecifier", this).call(this, node);
      }
    }, {
      key: "parseImportSpecifier",
      value: function parseImportSpecifier(node) {
        var specifier = this.startNode();
        var firstIdentLoc = this.state.start;
        var firstIdent = this.parseModuleExportName();
        var specifierTypeKind = null;

        if (firstIdent.type === "Identifier") {
          if (firstIdent.name === "type") {
            specifierTypeKind = "type";
          } else if (firstIdent.name === "typeof") {
            specifierTypeKind = "typeof";
          }
        }

        var isBinding = false;

        if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
          var as_ident = this.parseIdentifier(true);

          if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
            specifier.imported = as_ident;
            specifier.importKind = specifierTypeKind;
            specifier.local = as_ident.__clone();
          } else {
            specifier.imported = firstIdent;
            specifier.importKind = null;
            specifier.local = this.parseIdentifier();
          }
        } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
          specifier.imported = this.parseIdentifier(true);
          specifier.importKind = specifierTypeKind;

          if (this.eatContextual("as")) {
            specifier.local = this.parseIdentifier();
          } else {
            isBinding = true;
            specifier.local = specifier.imported.__clone();
          }
        } else {
          if (firstIdent.type === "StringLiteral") {
            throw this.raise(specifier.start, ErrorMessages.ImportBindingIsString, firstIdent.value);
          }

          isBinding = true;
          specifier.imported = firstIdent;
          specifier.importKind = null;
          specifier.local = specifier.imported.__clone();
        }

        var nodeIsTypeImport = hasTypeImportKind(node);
        var specifierIsTypeImport = hasTypeImportKind(specifier);

        if (nodeIsTypeImport && specifierIsTypeImport) {
          this.raise(firstIdentLoc, FlowErrors.ImportTypeShorthandOnlyInPureImport);
        }

        if (nodeIsTypeImport || specifierIsTypeImport) {
          this.checkReservedType(specifier.local.name, specifier.local.start, true);
        }

        if (isBinding && !nodeIsTypeImport && !specifierIsTypeImport) {
          this.checkReservedWord(specifier.local.name, specifier.start, true, true);
        }

        this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
        node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
      }
    }, {
      key: "parseFunctionParams",
      value: function parseFunctionParams(node, allowModifiers) {
        var kind = node.kind;

        if (kind !== "get" && kind !== "set" && this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }

        _get(_getPrototypeOf(_temp.prototype), "parseFunctionParams", this).call(this, node, allowModifiers);
      }
    }, {
      key: "parseVarId",
      value: function parseVarId(decl, kind) {
        _get(_getPrototypeOf(_temp.prototype), "parseVarId", this).call(this, decl, kind);

        if (this.match(types.colon)) {
          decl.id.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(decl.id);
        }
      }
    }, {
      key: "parseAsyncArrowFromCallExpression",
      value: function parseAsyncArrowFromCallExpression(node, call) {
        if (this.match(types.colon)) {
          var oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          node.returnType = this.flowParseTypeAnnotation();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseAsyncArrowFromCallExpression", this).call(this, node, call);
      }
    }, {
      key: "shouldParseAsyncArrow",
      value: function shouldParseAsyncArrow() {
        return this.match(types.colon) || _get(_getPrototypeOf(_temp.prototype), "shouldParseAsyncArrow", this).call(this);
      }
    }, {
      key: "parseMaybeAssign",
      value: function parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
        var _this9 = this;

        var _jsx;

        var state = null;
        var jsx;

        if (this.hasPlugin("jsx") && (this.match(types.jsxTagStart) || this.isRelational("<"))) {
          state = this.state.clone();
          jsx = this.tryParse(function () {
            return _get(_getPrototypeOf(_temp.prototype), "parseMaybeAssign", _this9).call(_this9, refExpressionErrors, afterLeftParse, refNeedsArrowPos);
          }, state);
          if (!jsx.error) return jsx.node;
          var {
            context: context
          } = this.state;

          if (context[context.length - 1] === types$1.j_oTag) {
            context.length -= 2;
          } else if (context[context.length - 1] === types$1.j_expr) {
            context.length -= 1;
          }
        }

        if (((_jsx = jsx) == null ? void 0 : _jsx.error) || this.isRelational("<")) {
          var _jsx2, _jsx3;

          state = state || this.state.clone();
          var typeParameters;
          var arrow = this.tryParse(function (abort) {
            var _arrowExpression$extr;

            typeParameters = _this9.flowParseTypeParameterDeclaration();

            var arrowExpression = _this9.forwardNoArrowParamsConversionAt(typeParameters, function () {
              var result = _get(_getPrototypeOf(_temp.prototype), "parseMaybeAssign", _this9).call(_this9, refExpressionErrors, afterLeftParse, refNeedsArrowPos);

              _this9.resetStartLocationFromNode(result, typeParameters);

              return result;
            });

            if (arrowExpression.type !== "ArrowFunctionExpression" && ((_arrowExpression$extr = arrowExpression.extra) == null ? void 0 : _arrowExpression$extr.parenthesized)) {
              abort();
            }

            var expr = _this9.maybeUnwrapTypeCastExpression(arrowExpression);

            expr.typeParameters = typeParameters;

            _this9.resetStartLocationFromNode(expr, typeParameters);

            return arrowExpression;
          }, state);
          var arrowExpression = null;

          if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
            if (!arrow.error && !arrow.aborted) {
              if (arrow.node.async) {
                this.raise(typeParameters.start, FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction);
              }

              return arrow.node;
            }

            arrowExpression = arrow.node;
          }

          if ((_jsx2 = jsx) == null ? void 0 : _jsx2.node) {
            this.state = jsx.failState;
            return jsx.node;
          }

          if (arrowExpression) {
            this.state = arrow.failState;
            return arrowExpression;
          }

          if ((_jsx3 = jsx) == null ? void 0 : _jsx3.thrown) throw jsx.error;
          if (arrow.thrown) throw arrow.error;
          throw this.raise(typeParameters.start, FlowErrors.UnexpectedTokenAfterTypeParameter);
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseMaybeAssign", this).call(this, refExpressionErrors, afterLeftParse, refNeedsArrowPos);
      }
    }, {
      key: "parseArrow",
      value: function parseArrow(node) {
        var _this10 = this;

        if (this.match(types.colon)) {
          var result = this.tryParse(function () {
            var oldNoAnonFunctionType = _this10.state.noAnonFunctionType;
            _this10.state.noAnonFunctionType = true;

            var typeNode = _this10.startNode();

            [typeNode.typeAnnotation, node.predicate] = _this10.flowParseTypeAndPredicateInitialiser();
            _this10.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (_this10.canInsertSemicolon()) _this10.unexpected();
            if (!_this10.match(types.arrow)) _this10.unexpected();
            return typeNode;
          });
          if (result.thrown) return null;
          if (result.error) this.state = result.failState;
          node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseArrow", this).call(this, node);
      }
    }, {
      key: "shouldParseArrow",
      value: function shouldParseArrow() {
        return this.match(types.colon) || _get(_getPrototypeOf(_temp.prototype), "shouldParseArrow", this).call(this);
      }
    }, {
      key: "setArrowFunctionParameters",
      value: function setArrowFunctionParameters(node, params) {
        if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
          node.params = params;
        } else {
          _get(_getPrototypeOf(_temp.prototype), "setArrowFunctionParameters", this).call(this, node, params);
        }
      }
    }, {
      key: "checkParams",
      value: function checkParams(node, allowDuplicates, isArrowFunction) {
        if (isArrowFunction && this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
          return;
        }

        return _get(_getPrototypeOf(_temp.prototype), "checkParams", this).apply(this, arguments);
      }
    }, {
      key: "parseParenAndDistinguishExpression",
      value: function parseParenAndDistinguishExpression(canBeArrow) {
        return _get(_getPrototypeOf(_temp.prototype), "parseParenAndDistinguishExpression", this).call(this, canBeArrow && this.state.noArrowAt.indexOf(this.state.start) === -1);
      }
    }, {
      key: "parseSubscripts",
      value: function parseSubscripts(base, startPos, startLoc, noCalls) {
        var _this11 = this;

        if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.indexOf(startPos) !== -1) {
          this.next();
          var node = this.startNodeAt(startPos, startLoc);
          node.callee = base;
          node.arguments = this.parseCallExpressionArguments(types.parenR, false);
          base = this.finishNode(node, "CallExpression");
        } else if (base.type === "Identifier" && base.name === "async" && this.isRelational("<")) {
          var state = this.state.clone();
          var arrow = this.tryParse(function (abort) {
            return _this11.parseAsyncArrowWithTypeParameters(startPos, startLoc) || abort();
          }, state);
          if (!arrow.error && !arrow.aborted) return arrow.node;
          var result = this.tryParse(function () {
            return _get(_getPrototypeOf(_temp.prototype), "parseSubscripts", _this11).call(_this11, base, startPos, startLoc, noCalls);
          }, state);
          if (result.node && !result.error) return result.node;

          if (arrow.node) {
            this.state = arrow.failState;
            return arrow.node;
          }

          if (result.node) {
            this.state = result.failState;
            return result.node;
          }

          throw arrow.error || result.error;
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseSubscripts", this).call(this, base, startPos, startLoc, noCalls);
      }
    }, {
      key: "parseSubscript",
      value: function parseSubscript(base, startPos, startLoc, noCalls, subscriptState) {
        var _this12 = this;

        if (this.match(types.questionDot) && this.isLookaheadToken_lt()) {
          subscriptState.optionalChainMember = true;

          if (noCalls) {
            subscriptState.stop = true;
            return base;
          }

          this.next();
          var node = this.startNodeAt(startPos, startLoc);
          node.callee = base;
          node.typeArguments = this.flowParseTypeParameterInstantiation();
          this.expect(types.parenL);
          node.arguments = this.parseCallExpressionArguments(types.parenR, false);
          node.optional = true;
          return this.finishCallExpression(node, true);
        } else if (!noCalls && this.shouldParseTypes() && this.isRelational("<")) {
          var _node4 = this.startNodeAt(startPos, startLoc);

          _node4.callee = base;
          var result = this.tryParse(function () {
            _node4.typeArguments = _this12.flowParseTypeParameterInstantiationCallOrNew();

            _this12.expect(types.parenL);

            _node4.arguments = _this12.parseCallExpressionArguments(types.parenR, false);
            if (subscriptState.optionalChainMember) _node4.optional = false;
            return _this12.finishCallExpression(_node4, subscriptState.optionalChainMember);
          });

          if (result.node) {
            if (result.error) this.state = result.failState;
            return result.node;
          }
        }

        return _get(_getPrototypeOf(_temp.prototype), "parseSubscript", this).call(this, base, startPos, startLoc, noCalls, subscriptState);
      }
    }, {
      key: "parseNewArguments",
      value: function parseNewArguments(node) {
        var _this13 = this;

        var targs = null;

        if (this.shouldParseTypes() && this.isRelational("<")) {
          targs = this.tryParse(function () {
            return _this13.flowParseTypeParameterInstantiationCallOrNew();
          }).node;
        }

        node.typeArguments = targs;

        _get(_getPrototypeOf(_temp.prototype), "parseNewArguments", this).call(this, node);
      }
    }, {
      key: "parseAsyncArrowWithTypeParameters",
      value: function parseAsyncArrowWithTypeParameters(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);
        this.parseFunctionParams(node);
        if (!this.parseArrow(node)) return;
        return this.parseArrowExpression(node, undefined, true);
      }
    }, {
      key: "readToken_mult_modulo",
      value: function readToken_mult_modulo(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);

        if (code === 42 && next === 47 && this.state.hasFlowComment) {
          this.state.hasFlowComment = false;
          this.state.pos += 2;
          this.nextToken();
          return;
        }

        _get(_getPrototypeOf(_temp.prototype), "readToken_mult_modulo", this).call(this, code);
      }
    }, {
      key: "readToken_pipe_amp",
      value: function readToken_pipe_amp(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);

        if (code === 124 && next === 125) {
          this.finishOp(types.braceBarR, 2);
          return;
        }

        _get(_getPrototypeOf(_temp.prototype), "readToken_pipe_amp", this).call(this, code);
      }
    }, {
      key: "parseTopLevel",
      value: function parseTopLevel(file, program) {
        var fileNode = _get(_getPrototypeOf(_temp.prototype), "parseTopLevel", this).call(this, file, program);

        if (this.state.hasFlowComment) {
          this.raise(this.state.pos, FlowErrors.UnterminatedFlowComment);
        }

        return fileNode;
      }
    }, {
      key: "skipBlockComment",
      value: function skipBlockComment() {
        if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
          if (this.state.hasFlowComment) {
            this.unexpected(null, FlowErrors.NestedFlowComment);
          }

          this.hasFlowCommentCompletion();
          this.state.pos += this.skipFlowComment();
          this.state.hasFlowComment = true;
          return;
        }

        if (this.state.hasFlowComment) {
          var end = this.input.indexOf("*-/", this.state.pos += 2);

          if (end === -1) {
            throw this.raise(this.state.pos - 2, ErrorMessages.UnterminatedComment);
          }

          this.state.pos = end + 3;
          return;
        }

        _get(_getPrototypeOf(_temp.prototype), "skipBlockComment", this).call(this);
      }
    }, {
      key: "skipFlowComment",
      value: function skipFlowComment() {
        var {
          pos: pos
        } = this.state;
        var shiftToFirstNonWhiteSpace = 2;

        while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
          shiftToFirstNonWhiteSpace++;
        }

        var ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
        var ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);

        if (ch2 === 58 && ch3 === 58) {
          return shiftToFirstNonWhiteSpace + 2;
        }

        if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
          return shiftToFirstNonWhiteSpace + 12;
        }

        if (ch2 === 58 && ch3 !== 58) {
          return shiftToFirstNonWhiteSpace;
        }

        return false;
      }
    }, {
      key: "hasFlowCommentCompletion",
      value: function hasFlowCommentCompletion() {
        var end = this.input.indexOf("*/", this.state.pos);

        if (end === -1) {
          throw this.raise(this.state.pos, ErrorMessages.UnterminatedComment);
        }
      }
    }, {
      key: "flowEnumErrorBooleanMemberNotInitialized",
      value: function flowEnumErrorBooleanMemberNotInitialized(pos, _ref3) {
        var {
          enumName: enumName,
          memberName: memberName
        } = _ref3;
        this.raise(pos, FlowErrors.EnumBooleanMemberNotInitialized, memberName, enumName);
      }
    }, {
      key: "flowEnumErrorInvalidMemberName",
      value: function flowEnumErrorInvalidMemberName(pos, _ref4) {
        var {
          enumName: enumName,
          memberName: memberName
        } = _ref4;
        var suggestion = memberName[0].toUpperCase() + memberName.slice(1);
        this.raise(pos, FlowErrors.EnumInvalidMemberName, memberName, suggestion, enumName);
      }
    }, {
      key: "flowEnumErrorDuplicateMemberName",
      value: function flowEnumErrorDuplicateMemberName(pos, _ref5) {
        var {
          enumName: enumName,
          memberName: memberName
        } = _ref5;
        this.raise(pos, FlowErrors.EnumDuplicateMemberName, memberName, enumName);
      }
    }, {
      key: "flowEnumErrorInconsistentMemberValues",
      value: function flowEnumErrorInconsistentMemberValues(pos, _ref6) {
        var {
          enumName: enumName
        } = _ref6;
        this.raise(pos, FlowErrors.EnumInconsistentMemberValues, enumName);
      }
    }, {
      key: "flowEnumErrorInvalidExplicitType",
      value: function flowEnumErrorInvalidExplicitType(pos, _ref7) {
        var {
          enumName: enumName,
          suppliedType: suppliedType
        } = _ref7;
        return this.raise(pos, suppliedType === null ? FlowErrors.EnumInvalidExplicitTypeUnknownSupplied : FlowErrors.EnumInvalidExplicitType, enumName, suppliedType);
      }
    }, {
      key: "flowEnumErrorInvalidMemberInitializer",
      value: function flowEnumErrorInvalidMemberInitializer(pos, _ref8) {
        var {
          enumName: enumName,
          explicitType: explicitType,
          memberName: memberName
        } = _ref8;
        var message = null;

        switch (explicitType) {
          case "boolean":
          case "number":
          case "string":
            message = FlowErrors.EnumInvalidMemberInitializerPrimaryType;
            break;

          case "symbol":
            message = FlowErrors.EnumInvalidMemberInitializerSymbolType;
            break;

          default:
            message = FlowErrors.EnumInvalidMemberInitializerUnknownType;
        }

        return this.raise(pos, message, enumName, memberName, explicitType);
      }
    }, {
      key: "flowEnumErrorNumberMemberNotInitialized",
      value: function flowEnumErrorNumberMemberNotInitialized(pos, _ref9) {
        var {
          enumName: enumName,
          memberName: memberName
        } = _ref9;
        this.raise(pos, FlowErrors.EnumNumberMemberNotInitialized, enumName, memberName);
      }
    }, {
      key: "flowEnumErrorStringMemberInconsistentlyInitailized",
      value: function flowEnumErrorStringMemberInconsistentlyInitailized(pos, _ref10) {
        var {
          enumName: enumName
        } = _ref10;
        this.raise(pos, FlowErrors.EnumStringMemberInconsistentlyInitailized, enumName);
      }
    }, {
      key: "flowEnumMemberInit",
      value: function flowEnumMemberInit() {
        var _this14 = this;

        var startPos = this.state.start;

        var endOfInit = function () {
          return _this14.match(types.comma) || _this14.match(types.braceR);
        };

        switch (this.state.type) {
          case types.num:
            {
              var literal = this.parseLiteral(this.state.value, "NumericLiteral");

              if (endOfInit()) {
                return {
                  type: "number",
                  pos: literal.start,
                  value: literal
                };
              }

              return {
                type: "invalid",
                pos: startPos
              };
            }

          case types.string:
            {
              var _literal = this.parseLiteral(this.state.value, "StringLiteral");

              if (endOfInit()) {
                return {
                  type: "string",
                  pos: _literal.start,
                  value: _literal
                };
              }

              return {
                type: "invalid",
                pos: startPos
              };
            }

          case types._true:
          case types._false:
            {
              var _literal2 = this.parseBooleanLiteral();

              if (endOfInit()) {
                return {
                  type: "boolean",
                  pos: _literal2.start,
                  value: _literal2
                };
              }

              return {
                type: "invalid",
                pos: startPos
              };
            }

          default:
            return {
              type: "invalid",
              pos: startPos
            };
        }
      }
    }, {
      key: "flowEnumMemberRaw",
      value: function flowEnumMemberRaw() {
        var pos = this.state.start;
        var id = this.parseIdentifier(true);
        var init = this.eat(types.eq) ? this.flowEnumMemberInit() : {
          type: "none",
          pos: pos
        };
        return {
          id: id,
          init: init
        };
      }
    }, {
      key: "flowEnumCheckExplicitTypeMismatch",
      value: function flowEnumCheckExplicitTypeMismatch(pos, context, expectedType) {
        var {
          explicitType: explicitType
        } = context;

        if (explicitType === null) {
          return;
        }

        if (explicitType !== expectedType) {
          this.flowEnumErrorInvalidMemberInitializer(pos, context);
        }
      }
    }, {
      key: "flowEnumMembers",
      value: function flowEnumMembers(_ref11) {
        var {
          enumName: enumName,
          explicitType: explicitType
        } = _ref11;
        var seenNames = new Set();
        var members = {
          booleanMembers: [],
          numberMembers: [],
          stringMembers: [],
          defaultedMembers: []
        };

        while (!this.match(types.braceR)) {
          var memberNode = this.startNode();
          var {
            id: id,
            init: init
          } = this.flowEnumMemberRaw();
          var memberName = id.name;

          if (memberName === "") {
            continue;
          }

          if (/^[a-z]/.test(memberName)) {
            this.flowEnumErrorInvalidMemberName(id.start, {
              enumName: enumName,
              memberName: memberName
            });
          }

          if (seenNames.has(memberName)) {
            this.flowEnumErrorDuplicateMemberName(id.start, {
              enumName: enumName,
              memberName: memberName
            });
          }

          seenNames.add(memberName);
          var context = {
            enumName: enumName,
            explicitType: explicitType,
            memberName: memberName
          };
          memberNode.id = id;

          switch (init.type) {
            case "boolean":
              {
                this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "boolean");
                memberNode.init = init.value;
                members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
                break;
              }

            case "number":
              {
                this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "number");
                memberNode.init = init.value;
                members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
                break;
              }

            case "string":
              {
                this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "string");
                memberNode.init = init.value;
                members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
                break;
              }

            case "invalid":
              {
                throw this.flowEnumErrorInvalidMemberInitializer(init.pos, context);
              }

            case "none":
              {
                switch (explicitType) {
                  case "boolean":
                    this.flowEnumErrorBooleanMemberNotInitialized(init.pos, context);
                    break;

                  case "number":
                    this.flowEnumErrorNumberMemberNotInitialized(init.pos, context);
                    break;

                  default:
                    members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
                }
              }
          }

          if (!this.match(types.braceR)) {
            this.expect(types.comma);
          }
        }

        return members;
      }
    }, {
      key: "flowEnumStringMembers",
      value: function flowEnumStringMembers(initializedMembers, defaultedMembers, _ref12) {
        var {
          enumName: enumName
        } = _ref12;

        if (initializedMembers.length === 0) {
          return defaultedMembers;
        } else if (defaultedMembers.length === 0) {
          return initializedMembers;
        } else if (defaultedMembers.length > initializedMembers.length) {
          for (var _i = 0; _i < initializedMembers.length; _i++) {
            var member = initializedMembers[_i];
            this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
              enumName: enumName
            });
          }

          return defaultedMembers;
        } else {
          for (var _i2 = 0; _i2 < defaultedMembers.length; _i2++) {
            var _member = defaultedMembers[_i2];
            this.flowEnumErrorStringMemberInconsistentlyInitailized(_member.start, {
              enumName: enumName
            });
          }

          return initializedMembers;
        }
      }
    }, {
      key: "flowEnumParseExplicitType",
      value: function flowEnumParseExplicitType(_ref13) {
        var {
          enumName: enumName
        } = _ref13;

        if (this.eatContextual("of")) {
          if (!this.match(types.name)) {
            throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
              enumName: enumName,
              suppliedType: null
            });
          }

          var {
            value: value
          } = this.state;
          this.next();

          if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
            this.flowEnumErrorInvalidExplicitType(this.state.start, {
              enumName: enumName,
              suppliedType: value
            });
          }

          return value;
        }

        return null;
      }
    }, {
      key: "flowEnumBody",
      value: function flowEnumBody(node, _ref14) {
        var _this15 = this;

        var {
          enumName: enumName,
          nameLoc: nameLoc
        } = _ref14;
        var explicitType = this.flowEnumParseExplicitType({
          enumName: enumName
        });
        this.expect(types.braceL);
        var members = this.flowEnumMembers({
          enumName: enumName,
          explicitType: explicitType
        });

        switch (explicitType) {
          case "boolean":
            node.explicitType = true;
            node.members = members.booleanMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumBooleanBody");

          case "number":
            node.explicitType = true;
            node.members = members.numberMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumNumberBody");

          case "string":
            node.explicitType = true;
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName: enumName
            });
            this.expect(types.braceR);
            return this.finishNode(node, "EnumStringBody");

          case "symbol":
            node.members = members.defaultedMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumSymbolBody");

          default:
            {
              var empty = function () {
                node.members = [];

                _this15.expect(types.braceR);

                return _this15.finishNode(node, "EnumStringBody");
              };

              node.explicitType = false;
              var boolsLen = members.booleanMembers.length;
              var numsLen = members.numberMembers.length;
              var strsLen = members.stringMembers.length;
              var defaultedLen = members.defaultedMembers.length;

              if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
                return empty();
              } else if (!boolsLen && !numsLen) {
                node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
                  enumName: enumName
                });
                this.expect(types.braceR);
                return this.finishNode(node, "EnumStringBody");
              } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
                for (var _i3 = 0, _members$defaultedMem = members.defaultedMembers; _i3 < _members$defaultedMem.length; _i3++) {
                  var member = _members$defaultedMem[_i3];
                  this.flowEnumErrorBooleanMemberNotInitialized(member.start, {
                    enumName: enumName,
                    memberName: member.id.name
                  });
                }

                node.members = members.booleanMembers;
                this.expect(types.braceR);
                return this.finishNode(node, "EnumBooleanBody");
              } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
                for (var _i4 = 0, _members$defaultedMem2 = members.defaultedMembers; _i4 < _members$defaultedMem2.length; _i4++) {
                  var _member2 = _members$defaultedMem2[_i4];
                  this.flowEnumErrorNumberMemberNotInitialized(_member2.start, {
                    enumName: enumName,
                    memberName: _member2.id.name
                  });
                }

                node.members = members.numberMembers;
                this.expect(types.braceR);
                return this.finishNode(node, "EnumNumberBody");
              } else {
                this.flowEnumErrorInconsistentMemberValues(nameLoc, {
                  enumName: enumName
                });
                return empty();
              }
            }
        }
      }
    }, {
      key: "flowParseEnumDeclaration",
      value: function flowParseEnumDeclaration(node) {
        var id = this.parseIdentifier();
        node.id = id;
        node.body = this.flowEnumBody(this.startNode(), {
          enumName: id.name,
          nameLoc: id.start
        });
        return this.finishNode(node, "EnumDeclaration");
      }
    }, {
      key: "updateContext",
      value: function updateContext(prevType) {
        if (this.match(types.name) && this.state.value === "of" && prevType === types.name && this.input.slice(this.state.lastTokStart, this.state.lastTokEnd) === "interface") {
          this.state.exprAllowed = false;
        } else {
          _get(_getPrototypeOf(_temp.prototype), "updateContext", this).call(this, prevType);
        }
      }
    }, {
      key: "isLookaheadToken_lt",
      value: function isLookaheadToken_lt() {
        var next = this.nextTokenStart();

        if (this.input.charCodeAt(next) === 60) {
          var afterNext = this.input.charCodeAt(next + 1);
          return afterNext !== 60 && afterNext !== 61;
        }

        return false;
      }
    }, {
      key: "maybeUnwrapTypeCastExpression",
      value: function maybeUnwrapTypeCastExpression(node) {
        return node.type === "TypeCastExpression" ? node.expression : node;
      }
    }]);

    return _temp;
  }(superClass), _temp;
};

var entities = {
  quot: "\"",
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
var HEX_NUMBER = /^[\da-fA-F]+$/;
var DECIMAL_NUMBER = /^\d+$/;
var JsxErrors = Object.freeze({
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression",
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>",
  MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>",
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text",
  UnterminatedJsxContent: "Unterminated JSX contents",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
});
types$1.j_oTag = new TokContext("<tag", false);
types$1.j_cTag = new TokContext("</tag", false);
types$1.j_expr = new TokContext("<tag>...</tag>", true, true);
types.jsxName = new TokenType("jsxName");
types.jsxText = new TokenType("jsxText", {
  beforeExpr: true
});
types.jsxTagStart = new TokenType("jsxTagStart", {
  startsExpr: true
});
types.jsxTagEnd = new TokenType("jsxTagEnd");

types.jsxTagStart.updateContext = function () {
  this.state.context.push(types$1.j_expr);
  this.state.context.push(types$1.j_oTag);
  this.state.exprAllowed = false;
};

types.jsxTagEnd.updateContext = function (prevType) {
  var out = this.state.context.pop();

  if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
    this.state.context.pop();
    this.state.exprAllowed = this.curContext() === types$1.j_expr;
  } else {
    this.state.exprAllowed = true;
  }
};

function isFragment(object) {
  return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
}

function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }

  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }

  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }

  throw new Error("Node had unexpected type: " + object.type);
}

var jsx = function (superClass) {
  return /*#__PURE__*/function (_superClass3) {
    _inherits(_class2, _superClass3);

    var _super5 = _createSuper(_class2);

    function _class2() {
      _classCallCheck(this, _class2);

      return _super5.apply(this, arguments);
    }

    _createClass(_class2, [{
      key: "jsxReadToken",
      value: function jsxReadToken() {
        var out = "";
        var chunkStart = this.state.pos;

        for (;;) {
          if (this.state.pos >= this.length) {
            throw this.raise(this.state.start, JsxErrors.UnterminatedJsxContent);
          }

          var ch = this.input.charCodeAt(this.state.pos);

          switch (ch) {
            case 60:
            case 123:
              if (this.state.pos === this.state.start) {
                if (ch === 60 && this.state.exprAllowed) {
                  ++this.state.pos;
                  return this.finishToken(types.jsxTagStart);
                }

                return _get(_getPrototypeOf(_class2.prototype), "getTokenFromCode", this).call(this, ch);
              }

              out += this.input.slice(chunkStart, this.state.pos);
              return this.finishToken(types.jsxText, out);

            case 38:
              out += this.input.slice(chunkStart, this.state.pos);
              out += this.jsxReadEntity();
              chunkStart = this.state.pos;
              break;

            default:
              if (isNewLine(ch)) {
                out += this.input.slice(chunkStart, this.state.pos);
                out += this.jsxReadNewLine(true);
                chunkStart = this.state.pos;
              } else {
                ++this.state.pos;
              }

          }
        }
      }
    }, {
      key: "jsxReadNewLine",
      value: function jsxReadNewLine(normalizeCRLF) {
        var ch = this.input.charCodeAt(this.state.pos);
        var out;
        ++this.state.pos;

        if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
          ++this.state.pos;
          out = normalizeCRLF ? "\n" : "\r\n";
        } else {
          out = String.fromCharCode(ch);
        }

        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        return out;
      }
    }, {
      key: "jsxReadString",
      value: function jsxReadString(quote) {
        var out = "";
        var chunkStart = ++this.state.pos;

        for (;;) {
          if (this.state.pos >= this.length) {
            throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
          }

          var ch = this.input.charCodeAt(this.state.pos);
          if (ch === quote) break;

          if (ch === 38) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadEntity();
            chunkStart = this.state.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(false);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }
        }

        out += this.input.slice(chunkStart, this.state.pos++);
        return this.finishToken(types.string, out);
      }
    }, {
      key: "jsxReadEntity",
      value: function jsxReadEntity() {
        var str = "";
        var count = 0;
        var entity;
        var ch = this.input[this.state.pos];
        var startPos = ++this.state.pos;

        while (this.state.pos < this.length && count++ < 10) {
          ch = this.input[this.state.pos++];

          if (ch === ";") {
            if (str[0] === "#") {
              if (str[1] === "x") {
                str = str.substr(2);

                if (HEX_NUMBER.test(str)) {
                  entity = String.fromCodePoint(parseInt(str, 16));
                }
              } else {
                str = str.substr(1);

                if (DECIMAL_NUMBER.test(str)) {
                  entity = String.fromCodePoint(parseInt(str, 10));
                }
              }
            } else {
              entity = entities[str];
            }

            break;
          }

          str += ch;
        }

        if (!entity) {
          this.state.pos = startPos;
          return "&";
        }

        return entity;
      }
    }, {
      key: "jsxReadWord",
      value: function jsxReadWord() {
        var ch;
        var start = this.state.pos;

        do {
          ch = this.input.charCodeAt(++this.state.pos);
        } while (isIdentifierChar(ch) || ch === 45);

        return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
      }
    }, {
      key: "jsxParseIdentifier",
      value: function jsxParseIdentifier() {
        var node = this.startNode();

        if (this.match(types.jsxName)) {
          node.name = this.state.value;
        } else if (this.state.type.keyword) {
          node.name = this.state.type.keyword;
        } else {
          this.unexpected();
        }

        this.next();
        return this.finishNode(node, "JSXIdentifier");
      }
    }, {
      key: "jsxParseNamespacedName",
      value: function jsxParseNamespacedName() {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        var name = this.jsxParseIdentifier();
        if (!this.eat(types.colon)) return name;
        var node = this.startNodeAt(startPos, startLoc);
        node.namespace = name;
        node.name = this.jsxParseIdentifier();
        return this.finishNode(node, "JSXNamespacedName");
      }
    }, {
      key: "jsxParseElementName",
      value: function jsxParseElementName() {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        var node = this.jsxParseNamespacedName();

        if (node.type === "JSXNamespacedName") {
          return node;
        }

        while (this.eat(types.dot)) {
          var newNode = this.startNodeAt(startPos, startLoc);
          newNode.object = node;
          newNode.property = this.jsxParseIdentifier();
          node = this.finishNode(newNode, "JSXMemberExpression");
        }

        return node;
      }
    }, {
      key: "jsxParseAttributeValue",
      value: function jsxParseAttributeValue() {
        var node;

        switch (this.state.type) {
          case types.braceL:
            node = this.startNode();
            this.next();
            node = this.jsxParseExpressionContainer(node);

            if (node.expression.type === "JSXEmptyExpression") {
              this.raise(node.start, JsxErrors.AttributeIsEmpty);
            }

            return node;

          case types.jsxTagStart:
          case types.string:
            return this.parseExprAtom();

          default:
            throw this.raise(this.state.start, JsxErrors.UnsupportedJsxValue);
        }
      }
    }, {
      key: "jsxParseEmptyExpression",
      value: function jsxParseEmptyExpression() {
        var node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
        return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
      }
    }, {
      key: "jsxParseSpreadChild",
      value: function jsxParseSpreadChild(node) {
        this.next();
        node.expression = this.parseExpression();
        this.expect(types.braceR);
        return this.finishNode(node, "JSXSpreadChild");
      }
    }, {
      key: "jsxParseExpressionContainer",
      value: function jsxParseExpressionContainer(node) {
        if (this.match(types.braceR)) {
          node.expression = this.jsxParseEmptyExpression();
        } else {
          node.expression = this.parseExpression();
        }

        this.expect(types.braceR);
        return this.finishNode(node, "JSXExpressionContainer");
      }
    }, {
      key: "jsxParseAttribute",
      value: function jsxParseAttribute() {
        var node = this.startNode();

        if (this.eat(types.braceL)) {
          this.expect(types.ellipsis);
          node.argument = this.parseMaybeAssignAllowIn();
          this.expect(types.braceR);
          return this.finishNode(node, "JSXSpreadAttribute");
        }

        node.name = this.jsxParseNamespacedName();
        node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
        return this.finishNode(node, "JSXAttribute");
      }
    }, {
      key: "jsxParseOpeningElementAt",
      value: function jsxParseOpeningElementAt(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);

        if (this.match(types.jsxTagEnd)) {
          this.expect(types.jsxTagEnd);
          return this.finishNode(node, "JSXOpeningFragment");
        }

        node.name = this.jsxParseElementName();
        return this.jsxParseOpeningElementAfterName(node);
      }
    }, {
      key: "jsxParseOpeningElementAfterName",
      value: function jsxParseOpeningElementAfterName(node) {
        var attributes = [];

        while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
          attributes.push(this.jsxParseAttribute());
        }

        node.attributes = attributes;
        node.selfClosing = this.eat(types.slash);
        this.expect(types.jsxTagEnd);
        return this.finishNode(node, "JSXOpeningElement");
      }
    }, {
      key: "jsxParseClosingElementAt",
      value: function jsxParseClosingElementAt(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);

        if (this.match(types.jsxTagEnd)) {
          this.expect(types.jsxTagEnd);
          return this.finishNode(node, "JSXClosingFragment");
        }

        node.name = this.jsxParseElementName();
        this.expect(types.jsxTagEnd);
        return this.finishNode(node, "JSXClosingElement");
      }
    }, {
      key: "jsxParseElementAt",
      value: function jsxParseElementAt(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);
        var children = [];
        var openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
        var closingElement = null;

        if (!openingElement.selfClosing) {
          contents: for (;;) {
            switch (this.state.type) {
              case types.jsxTagStart:
                startPos = this.state.start;
                startLoc = this.state.startLoc;
                this.next();

                if (this.eat(types.slash)) {
                  closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
                  break contents;
                }

                children.push(this.jsxParseElementAt(startPos, startLoc));
                break;

              case types.jsxText:
                children.push(this.parseExprAtom());
                break;

              case types.braceL:
                {
                  var _node5 = this.startNode();

                  this.next();

                  if (this.match(types.ellipsis)) {
                    children.push(this.jsxParseSpreadChild(_node5));
                  } else {
                    children.push(this.jsxParseExpressionContainer(_node5));
                  }

                  break;
                }

              default:
                throw this.unexpected();
            }
          }

          if (isFragment(openingElement) && !isFragment(closingElement)) {
            this.raise(closingElement.start, JsxErrors.MissingClosingTagFragment);
          } else if (!isFragment(openingElement) && isFragment(closingElement)) {
            this.raise(closingElement.start, JsxErrors.MissingClosingTagElement, getQualifiedJSXName(openingElement.name));
          } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
            if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
              this.raise(closingElement.start, JsxErrors.MissingClosingTagElement, getQualifiedJSXName(openingElement.name));
            }
          }
        }

        if (isFragment(openingElement)) {
          node.openingFragment = openingElement;
          node.closingFragment = closingElement;
        } else {
          node.openingElement = openingElement;
          node.closingElement = closingElement;
        }

        node.children = children;

        if (this.isRelational("<")) {
          throw this.raise(this.state.start, JsxErrors.UnwrappedAdjacentJSXElements);
        }

        return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
      }
    }, {
      key: "jsxParseElement",
      value: function jsxParseElement() {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        this.next();
        return this.jsxParseElementAt(startPos, startLoc);
      }
    }, {
      key: "parseExprAtom",
      value: function parseExprAtom(refExpressionErrors) {
        if (this.match(types.jsxText)) {
          return this.parseLiteral(this.state.value, "JSXText");
        } else if (this.match(types.jsxTagStart)) {
          return this.jsxParseElement();
        } else if (this.isRelational("<") && this.input.charCodeAt(this.state.pos) !== 33) {
          this.finishToken(types.jsxTagStart);
          return this.jsxParseElement();
        } else {
          return _get(_getPrototypeOf(_class2.prototype), "parseExprAtom", this).call(this, refExpressionErrors);
        }
      }
    }, {
      key: "getTokenFromCode",
      value: function getTokenFromCode(code) {
        if (this.state.inPropertyName) return _get(_getPrototypeOf(_class2.prototype), "getTokenFromCode", this).call(this, code);
        var context = this.curContext();

        if (context === types$1.j_expr) {
          return this.jsxReadToken();
        }

        if (context === types$1.j_oTag || context === types$1.j_cTag) {
          if (isIdentifierStart(code)) {
            return this.jsxReadWord();
          }

          if (code === 62) {
            ++this.state.pos;
            return this.finishToken(types.jsxTagEnd);
          }

          if ((code === 34 || code === 39) && context === types$1.j_oTag) {
            return this.jsxReadString(code);
          }
        }

        if (code === 60 && this.state.exprAllowed && this.input.charCodeAt(this.state.pos + 1) !== 33) {
          ++this.state.pos;
          return this.finishToken(types.jsxTagStart);
        }

        return _get(_getPrototypeOf(_class2.prototype), "getTokenFromCode", this).call(this, code);
      }
    }, {
      key: "updateContext",
      value: function updateContext(prevType) {
        if (this.match(types.braceL)) {
          var curContext = this.curContext();

          if (curContext === types$1.j_oTag) {
            this.state.context.push(types$1.braceExpression);
          } else if (curContext === types$1.j_expr) {
            this.state.context.push(types$1.templateQuasi);
          } else {
            _get(_getPrototypeOf(_class2.prototype), "updateContext", this).call(this, prevType);
          }

          this.state.exprAllowed = true;
        } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
          this.state.context.length -= 2;
          this.state.context.push(types$1.j_cTag);
          this.state.exprAllowed = false;
        } else {
          return _get(_getPrototypeOf(_class2.prototype), "updateContext", this).call(this, prevType);
        }
      }
    }]);

    return _class2;
  }(superClass);
};

var Scope = function Scope(flags) {
  _classCallCheck(this, Scope);

  this.flags = void 0;
  this.var = [];
  this.lexical = [];
  this.functions = [];
  this.flags = flags;
};

var ScopeHandler = /*#__PURE__*/function () {
  function ScopeHandler(raise, inModule) {
    _classCallCheck(this, ScopeHandler);

    this.scopeStack = [];
    this.undefinedExports = new Map();
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
    this.inModule = inModule;
  }

  _createClass(ScopeHandler, [{
    key: "createScope",
    value: function createScope(flags) {
      return new Scope(flags);
    }
  }, {
    key: "enter",
    value: function enter(flags) {
      this.scopeStack.push(this.createScope(flags));
    }
  }, {
    key: "exit",
    value: function exit() {
      this.scopeStack.pop();
    }
  }, {
    key: "treatFunctionsAsVarInScope",
    value: function treatFunctionsAsVarInScope(scope) {
      return !!(scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_PROGRAM);
    }
  }, {
    key: "declareName",
    value: function declareName(name, bindingType, pos) {
      var scope = this.currentScope();

      if (bindingType & BIND_SCOPE_LEXICAL || bindingType & BIND_SCOPE_FUNCTION) {
        this.checkRedeclarationInScope(scope, name, bindingType, pos);

        if (bindingType & BIND_SCOPE_FUNCTION) {
          scope.functions.push(name);
        } else {
          scope.lexical.push(name);
        }

        if (bindingType & BIND_SCOPE_LEXICAL) {
          this.maybeExportDefined(scope, name);
        }
      } else if (bindingType & BIND_SCOPE_VAR) {
        for (var i = this.scopeStack.length - 1; i >= 0; --i) {
          scope = this.scopeStack[i];
          this.checkRedeclarationInScope(scope, name, bindingType, pos);
          scope.var.push(name);
          this.maybeExportDefined(scope, name);
          if (scope.flags & SCOPE_VAR) break;
        }
      }

      if (this.inModule && scope.flags & SCOPE_PROGRAM) {
        this.undefinedExports.delete(name);
      }
    }
  }, {
    key: "maybeExportDefined",
    value: function maybeExportDefined(scope, name) {
      if (this.inModule && scope.flags & SCOPE_PROGRAM) {
        this.undefinedExports.delete(name);
      }
    }
  }, {
    key: "checkRedeclarationInScope",
    value: function checkRedeclarationInScope(scope, name, bindingType, pos) {
      if (this.isRedeclaredInScope(scope, name, bindingType)) {
        this.raise(pos, ErrorMessages.VarRedeclaration, name);
      }
    }
  }, {
    key: "isRedeclaredInScope",
    value: function isRedeclaredInScope(scope, name, bindingType) {
      if (!(bindingType & BIND_KIND_VALUE)) return false;

      if (bindingType & BIND_SCOPE_LEXICAL) {
        return scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
      }

      if (bindingType & BIND_SCOPE_FUNCTION) {
        return scope.lexical.indexOf(name) > -1 || !this.treatFunctionsAsVarInScope(scope) && scope.var.indexOf(name) > -1;
      }

      return scope.lexical.indexOf(name) > -1 && !(scope.flags & SCOPE_SIMPLE_CATCH && scope.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope) && scope.functions.indexOf(name) > -1;
    }
  }, {
    key: "checkLocalExport",
    value: function checkLocalExport(id) {
      if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1 && this.scopeStack[0].functions.indexOf(id.name) === -1) {
        this.undefinedExports.set(id.name, id.start);
      }
    }
  }, {
    key: "currentScope",
    value: function currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }
  }, {
    key: "currentVarScope",
    value: function currentVarScope() {
      for (var i = this.scopeStack.length - 1;; i--) {
        var scope = this.scopeStack[i];

        if (scope.flags & SCOPE_VAR) {
          return scope;
        }
      }
    }
  }, {
    key: "currentThisScope",
    value: function currentThisScope() {
      for (var i = this.scopeStack.length - 1;; i--) {
        var scope = this.scopeStack[i];

        if ((scope.flags & SCOPE_VAR || scope.flags & SCOPE_CLASS) && !(scope.flags & SCOPE_ARROW)) {
          return scope;
        }
      }
    }
  }, {
    key: "inFunction",
    get: function () {
      return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
    }
  }, {
    key: "allowSuper",
    get: function () {
      return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
    }
  }, {
    key: "allowDirectSuper",
    get: function () {
      return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
    }
  }, {
    key: "inClass",
    get: function () {
      return (this.currentThisScope().flags & SCOPE_CLASS) > 0;
    }
  }, {
    key: "inNonArrowFunction",
    get: function () {
      return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
    }
  }, {
    key: "treatFunctionsAsVar",
    get: function () {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
  }]);

  return ScopeHandler;
}();

var TypeScriptScope = /*#__PURE__*/function (_Scope) {
  _inherits(TypeScriptScope, _Scope);

  var _super6 = _createSuper(TypeScriptScope);

  function TypeScriptScope() {
    var _this16;

    _classCallCheck(this, TypeScriptScope);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this16 = _super6.call.apply(_super6, [this].concat(args));
    _this16.types = [];
    _this16.enums = [];
    _this16.constEnums = [];
    _this16.classes = [];
    _this16.exportOnlyBindings = [];
    return _this16;
  }

  return TypeScriptScope;
}(Scope);

var TypeScriptScopeHandler = /*#__PURE__*/function (_ScopeHandler) {
  _inherits(TypeScriptScopeHandler, _ScopeHandler);

  var _super7 = _createSuper(TypeScriptScopeHandler);

  function TypeScriptScopeHandler() {
    _classCallCheck(this, TypeScriptScopeHandler);

    return _super7.apply(this, arguments);
  }

  _createClass(TypeScriptScopeHandler, [{
    key: "createScope",
    value: function createScope(flags) {
      return new TypeScriptScope(flags);
    }
  }, {
    key: "declareName",
    value: function declareName(name, bindingType, pos) {
      var scope = this.currentScope();

      if (bindingType & BIND_FLAGS_TS_EXPORT_ONLY) {
        this.maybeExportDefined(scope, name);
        scope.exportOnlyBindings.push(name);
        return;
      }

      _get(_getPrototypeOf(TypeScriptScopeHandler.prototype), "declareName", this).apply(this, arguments);

      if (bindingType & BIND_KIND_TYPE) {
        if (!(bindingType & BIND_KIND_VALUE)) {
          this.checkRedeclarationInScope(scope, name, bindingType, pos);
          this.maybeExportDefined(scope, name);
        }

        scope.types.push(name);
      }

      if (bindingType & BIND_FLAGS_TS_ENUM) scope.enums.push(name);
      if (bindingType & BIND_FLAGS_TS_CONST_ENUM) scope.constEnums.push(name);
      if (bindingType & BIND_FLAGS_CLASS) scope.classes.push(name);
    }
  }, {
    key: "isRedeclaredInScope",
    value: function isRedeclaredInScope(scope, name, bindingType) {
      if (scope.enums.indexOf(name) > -1) {
        if (bindingType & BIND_FLAGS_TS_ENUM) {
          var isConst = !!(bindingType & BIND_FLAGS_TS_CONST_ENUM);
          var wasConst = scope.constEnums.indexOf(name) > -1;
          return isConst !== wasConst;
        }

        return true;
      }

      if (bindingType & BIND_FLAGS_CLASS && scope.classes.indexOf(name) > -1) {
        if (scope.lexical.indexOf(name) > -1) {
          return !!(bindingType & BIND_KIND_VALUE);
        } else {
          return false;
        }
      }

      if (bindingType & BIND_KIND_TYPE && scope.types.indexOf(name) > -1) {
        return true;
      }

      return _get(_getPrototypeOf(TypeScriptScopeHandler.prototype), "isRedeclaredInScope", this).apply(this, arguments);
    }
  }, {
    key: "checkLocalExport",
    value: function checkLocalExport(id) {
      if (this.scopeStack[0].types.indexOf(id.name) === -1 && this.scopeStack[0].exportOnlyBindings.indexOf(id.name) === -1) {
        _get(_getPrototypeOf(TypeScriptScopeHandler.prototype), "checkLocalExport", this).call(this, id);
      }
    }
  }]);

  return TypeScriptScopeHandler;
}(ScopeHandler);

var PARAM = 0,
    PARAM_YIELD = 1,
    PARAM_AWAIT = 2,
    PARAM_RETURN = 4,
    PARAM_IN = 8;

var ProductionParameterHandler = /*#__PURE__*/function () {
  function ProductionParameterHandler() {
    _classCallCheck(this, ProductionParameterHandler);

    this.stacks = [];
  }

  _createClass(ProductionParameterHandler, [{
    key: "enter",
    value: function enter(flags) {
      this.stacks.push(flags);
    }
  }, {
    key: "exit",
    value: function exit() {
      this.stacks.pop();
    }
  }, {
    key: "currentFlags",
    value: function currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }
  }, {
    key: "hasAwait",
    get: function () {
      return (this.currentFlags() & PARAM_AWAIT) > 0;
    }
  }, {
    key: "hasYield",
    get: function () {
      return (this.currentFlags() & PARAM_YIELD) > 0;
    }
  }, {
    key: "hasReturn",
    get: function () {
      return (this.currentFlags() & PARAM_RETURN) > 0;
    }
  }, {
    key: "hasIn",
    get: function () {
      return (this.currentFlags() & PARAM_IN) > 0;
    }
  }]);

  return ProductionParameterHandler;
}();

function functionFlags(isAsync, isGenerator) {
  return (isAsync ? PARAM_AWAIT : 0) | (isGenerator ? PARAM_YIELD : 0);
}

function nonNull(x) {
  if (x == null) {
    throw new Error("Unexpected ".concat(x, " value."));
  }

  return x;
}

function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
}

var TSErrors = Object.freeze({
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateModifier: "Duplicate modifier: '%0'",
  EmptyHeritageClauseType: "'%0' list cannot be empty.",
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier",
  IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0')",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier",
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0')",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0"
});

function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";

    case "boolean":
      return "TSBooleanKeyword";

    case "bigint":
      return "TSBigIntKeyword";

    case "never":
      return "TSNeverKeyword";

    case "number":
      return "TSNumberKeyword";

    case "object":
      return "TSObjectKeyword";

    case "string":
      return "TSStringKeyword";

    case "symbol":
      return "TSSymbolKeyword";

    case "undefined":
      return "TSUndefinedKeyword";

    case "unknown":
      return "TSUnknownKeyword";

    default:
      return undefined;
  }
}

var typescript = function (superClass) {
  return /*#__PURE__*/function (_superClass4) {
    _inherits(_class3, _superClass4);

    var _super8 = _createSuper(_class3);

    function _class3() {
      _classCallCheck(this, _class3);

      return _super8.apply(this, arguments);
    }

    _createClass(_class3, [{
      key: "getScopeHandler",
      value: function getScopeHandler() {
        return TypeScriptScopeHandler;
      }
    }, {
      key: "tsIsIdentifier",
      value: function tsIsIdentifier() {
        return this.match(types.name);
      }
    }, {
      key: "tsNextTokenCanFollowModifier",
      value: function tsNextTokenCanFollowModifier() {
        this.next();
        return (this.match(types.bracketL) || this.match(types.braceL) || this.match(types.star) || this.match(types.ellipsis) || this.match(types.hash) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }
    }, {
      key: "tsParseModifier",
      value: function tsParseModifier(allowedModifiers) {
        if (!this.match(types.name)) {
          return undefined;
        }

        var modifier = this.state.value;

        if (allowedModifiers.indexOf(modifier) !== -1 && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
          return modifier;
        }

        return undefined;
      }
    }, {
      key: "tsParseModifiers",
      value: function tsParseModifiers(modified, allowedModifiers) {
        for (;;) {
          var startPos = this.state.start;
          var modifier = this.tsParseModifier(allowedModifiers);
          if (!modifier) break;

          if (Object.hasOwnProperty.call(modified, modifier)) {
            this.raise(startPos, TSErrors.DuplicateModifier, modifier);
          }

          modified[modifier] = true;
        }
      }
    }, {
      key: "tsIsListTerminator",
      value: function tsIsListTerminator(kind) {
        switch (kind) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(types.braceR);

          case "HeritageClauseElement":
            return this.match(types.braceL);

          case "TupleElementTypes":
            return this.match(types.bracketR);

          case "TypeParametersOrArguments":
            return this.isRelational(">");
        }

        throw new Error("Unreachable");
      }
    }, {
      key: "tsParseList",
      value: function tsParseList(kind, parseElement) {
        var result = [];

        while (!this.tsIsListTerminator(kind)) {
          result.push(parseElement());
        }

        return result;
      }
    }, {
      key: "tsParseDelimitedList",
      value: function tsParseDelimitedList(kind, parseElement) {
        return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true));
      }
    }, {
      key: "tsParseDelimitedListWorker",
      value: function tsParseDelimitedListWorker(kind, parseElement, expectSuccess) {
        var result = [];

        for (;;) {
          if (this.tsIsListTerminator(kind)) {
            break;
          }

          var element = parseElement();

          if (element == null) {
            return undefined;
          }

          result.push(element);

          if (this.eat(types.comma)) {
            continue;
          }

          if (this.tsIsListTerminator(kind)) {
            break;
          }

          if (expectSuccess) {
            this.expect(types.comma);
          }

          return undefined;
        }

        return result;
      }
    }, {
      key: "tsParseBracketedList",
      value: function tsParseBracketedList(kind, parseElement, bracket, skipFirstToken) {
        if (!skipFirstToken) {
          if (bracket) {
            this.expect(types.bracketL);
          } else {
            this.expectRelational("<");
          }
        }

        var result = this.tsParseDelimitedList(kind, parseElement);

        if (bracket) {
          this.expect(types.bracketR);
        } else {
          this.expectRelational(">");
        }

        return result;
      }
    }, {
      key: "tsParseImportType",
      value: function tsParseImportType() {
        var node = this.startNode();
        this.expect(types._import);
        this.expect(types.parenL);

        if (!this.match(types.string)) {
          this.raise(this.state.start, TSErrors.UnsupportedImportTypeArgument);
        }

        node.argument = this.parseExprAtom();
        this.expect(types.parenR);

        if (this.eat(types.dot)) {
          node.qualifier = this.tsParseEntityName(true);
        }

        if (this.isRelational("<")) {
          node.typeParameters = this.tsParseTypeArguments();
        }

        return this.finishNode(node, "TSImportType");
      }
    }, {
      key: "tsParseEntityName",
      value: function tsParseEntityName(allowReservedWords) {
        var entity = this.parseIdentifier();

        while (this.eat(types.dot)) {
          var node = this.startNodeAtNode(entity);
          node.left = entity;
          node.right = this.parseIdentifier(allowReservedWords);
          entity = this.finishNode(node, "TSQualifiedName");
        }

        return entity;
      }
    }, {
      key: "tsParseTypeReference",
      value: function tsParseTypeReference() {
        var node = this.startNode();
        node.typeName = this.tsParseEntityName(false);

        if (!this.hasPrecedingLineBreak() && this.isRelational("<")) {
          node.typeParameters = this.tsParseTypeArguments();
        }

        return this.finishNode(node, "TSTypeReference");
      }
    }, {
      key: "tsParseThisTypePredicate",
      value: function tsParseThisTypePredicate(lhs) {
        this.next();
        var node = this.startNodeAtNode(lhs);
        node.parameterName = lhs;
        node.typeAnnotation = this.tsParseTypeAnnotation(false);
        node.asserts = false;
        return this.finishNode(node, "TSTypePredicate");
      }
    }, {
      key: "tsParseThisTypeNode",
      value: function tsParseThisTypeNode() {
        var node = this.startNode();
        this.next();
        return this.finishNode(node, "TSThisType");
      }
    }, {
      key: "tsParseTypeQuery",
      value: function tsParseTypeQuery() {
        var node = this.startNode();
        this.expect(types._typeof);

        if (this.match(types._import)) {
          node.exprName = this.tsParseImportType();
        } else {
          node.exprName = this.tsParseEntityName(true);
        }

        return this.finishNode(node, "TSTypeQuery");
      }
    }, {
      key: "tsParseTypeParameter",
      value: function tsParseTypeParameter() {
        var node = this.startNode();
        node.name = this.parseIdentifierName(node.start);
        node.constraint = this.tsEatThenParseType(types._extends);
        node.default = this.tsEatThenParseType(types.eq);
        return this.finishNode(node, "TSTypeParameter");
      }
    }, {
      key: "tsTryParseTypeParameters",
      value: function tsTryParseTypeParameters() {
        if (this.isRelational("<")) {
          return this.tsParseTypeParameters();
        }
      }
    }, {
      key: "tsParseTypeParameters",
      value: function tsParseTypeParameters() {
        var node = this.startNode();

        if (this.isRelational("<") || this.match(types.jsxTagStart)) {
          this.next();
        } else {
          this.unexpected();
        }

        node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true);

        if (node.params.length === 0) {
          this.raise(node.start, TSErrors.EmptyTypeParameters);
        }

        return this.finishNode(node, "TSTypeParameterDeclaration");
      }
    }, {
      key: "tsTryNextParseConstantContext",
      value: function tsTryNextParseConstantContext() {
        if (this.lookahead().type === types._const) {
          this.next();
          return this.tsParseTypeReference();
        }

        return null;
      }
    }, {
      key: "tsFillSignature",
      value: function tsFillSignature(returnToken, signature) {
        var returnTokenRequired = returnToken === types.arrow;
        signature.typeParameters = this.tsTryParseTypeParameters();
        this.expect(types.parenL);
        signature.parameters = this.tsParseBindingListForSignature();

        if (returnTokenRequired) {
          signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
        } else if (this.match(returnToken)) {
          signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
        }
      }
    }, {
      key: "tsParseBindingListForSignature",
      value: function tsParseBindingListForSignature() {
        var _this17 = this;

        return this.parseBindingList(types.parenR, 41).map(function (pattern) {
          if (pattern.type !== "Identifier" && pattern.type !== "RestElement" && pattern.type !== "ObjectPattern" && pattern.type !== "ArrayPattern") {
            _this17.raise(pattern.start, TSErrors.UnsupportedSignatureParameterKind, pattern.type);
          }

          return pattern;
        });
      }
    }, {
      key: "tsParseTypeMemberSemicolon",
      value: function tsParseTypeMemberSemicolon() {
        if (!this.eat(types.comma)) {
          this.semicolon();
        }
      }
    }, {
      key: "tsParseSignatureMember",
      value: function tsParseSignatureMember(kind, node) {
        this.tsFillSignature(types.colon, node);
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(node, kind);
      }
    }, {
      key: "tsIsUnambiguouslyIndexSignature",
      value: function tsIsUnambiguouslyIndexSignature() {
        this.next();
        return this.eat(types.name) && this.match(types.colon);
      }
    }, {
      key: "tsTryParseIndexSignature",
      value: function tsTryParseIndexSignature(node) {
        if (!(this.match(types.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
          return undefined;
        }

        this.expect(types.bracketL);
        var id = this.parseIdentifier();
        id.typeAnnotation = this.tsParseTypeAnnotation();
        this.resetEndLocation(id);
        this.expect(types.bracketR);
        node.parameters = [id];
        var type = this.tsTryParseTypeAnnotation();
        if (type) node.typeAnnotation = type;
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(node, "TSIndexSignature");
      }
    }, {
      key: "tsParsePropertyOrMethodSignature",
      value: function tsParsePropertyOrMethodSignature(node, readonly) {
        if (this.eat(types.question)) node.optional = true;
        var nodeAny = node;

        if (!readonly && (this.match(types.parenL) || this.isRelational("<"))) {
          var method = nodeAny;
          this.tsFillSignature(types.colon, method);
          this.tsParseTypeMemberSemicolon();
          return this.finishNode(method, "TSMethodSignature");
        } else {
          var property = nodeAny;
          if (readonly) property.readonly = true;
          var type = this.tsTryParseTypeAnnotation();
          if (type) property.typeAnnotation = type;
          this.tsParseTypeMemberSemicolon();
          return this.finishNode(property, "TSPropertySignature");
        }
      }
    }, {
      key: "tsParseTypeMember",
      value: function tsParseTypeMember() {
        var node = this.startNode();

        if (this.match(types.parenL) || this.isRelational("<")) {
          return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
        }

        if (this.match(types._new)) {
          var id = this.startNode();
          this.next();

          if (this.match(types.parenL) || this.isRelational("<")) {
            return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
          } else {
            node.key = this.createIdentifier(id, "new");
            return this.tsParsePropertyOrMethodSignature(node, false);
          }
        }

        var readonly = !!this.tsParseModifier(["readonly"]);
        var idx = this.tsTryParseIndexSignature(node);

        if (idx) {
          if (readonly) node.readonly = true;
          return idx;
        }

        this.parsePropertyName(node, false);
        return this.tsParsePropertyOrMethodSignature(node, readonly);
      }
    }, {
      key: "tsParseTypeLiteral",
      value: function tsParseTypeLiteral() {
        var node = this.startNode();
        node.members = this.tsParseObjectTypeMembers();
        return this.finishNode(node, "TSTypeLiteral");
      }
    }, {
      key: "tsParseObjectTypeMembers",
      value: function tsParseObjectTypeMembers() {
        this.expect(types.braceL);
        var members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        this.expect(types.braceR);
        return members;
      }
    }, {
      key: "tsIsStartOfMappedType",
      value: function tsIsStartOfMappedType() {
        this.next();

        if (this.eat(types.plusMin)) {
          return this.isContextual("readonly");
        }

        if (this.isContextual("readonly")) {
          this.next();
        }

        if (!this.match(types.bracketL)) {
          return false;
        }

        this.next();

        if (!this.tsIsIdentifier()) {
          return false;
        }

        this.next();
        return this.match(types._in);
      }
    }, {
      key: "tsParseMappedTypeParameter",
      value: function tsParseMappedTypeParameter() {
        var node = this.startNode();
        node.name = this.parseIdentifierName(node.start);
        node.constraint = this.tsExpectThenParseType(types._in);
        return this.finishNode(node, "TSTypeParameter");
      }
    }, {
      key: "tsParseMappedType",
      value: function tsParseMappedType() {
        var node = this.startNode();
        this.expect(types.braceL);

        if (this.match(types.plusMin)) {
          node.readonly = this.state.value;
          this.next();
          this.expectContextual("readonly");
        } else if (this.eatContextual("readonly")) {
          node.readonly = true;
        }

        this.expect(types.bracketL);
        node.typeParameter = this.tsParseMappedTypeParameter();
        node.nameType = this.eatContextual("as") ? this.tsParseType() : null;
        this.expect(types.bracketR);

        if (this.match(types.plusMin)) {
          node.optional = this.state.value;
          this.next();
          this.expect(types.question);
        } else if (this.eat(types.question)) {
          node.optional = true;
        }

        node.typeAnnotation = this.tsTryParseType();
        this.semicolon();
        this.expect(types.braceR);
        return this.finishNode(node, "TSMappedType");
      }
    }, {
      key: "tsParseTupleType",
      value: function tsParseTupleType() {
        var _this18 = this;

        var node = this.startNode();
        node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
        var seenOptionalElement = false;
        var labeledElements = null;
        node.elementTypes.forEach(function (elementNode) {
          var _labeledElements;

          var {
            type: type
          } = elementNode;

          if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
            _this18.raise(elementNode.start, TSErrors.OptionalTypeBeforeRequired);
          }

          seenOptionalElement = seenOptionalElement || type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType";

          if (type === "TSRestType") {
            elementNode = elementNode.typeAnnotation;
            type = elementNode.type;
          }

          var isLabeled = type === "TSNamedTupleMember";
          labeledElements = (_labeledElements = labeledElements) != null ? _labeledElements : isLabeled;

          if (labeledElements !== isLabeled) {
            _this18.raise(elementNode.start, TSErrors.MixedLabeledAndUnlabeledElements);
          }
        });
        return this.finishNode(node, "TSTupleType");
      }
    }, {
      key: "tsParseTupleElementType",
      value: function tsParseTupleElementType() {
        var {
          start: startPos,
          startLoc: startLoc
        } = this.state;
        var rest = this.eat(types.ellipsis);
        var type = this.tsParseType();
        var optional = this.eat(types.question);
        var labeled = this.eat(types.colon);

        if (labeled) {
          var labeledNode = this.startNodeAtNode(type);
          labeledNode.optional = optional;

          if (type.type === "TSTypeReference" && !type.typeParameters && type.typeName.type === "Identifier") {
            labeledNode.label = type.typeName;
          } else {
            this.raise(type.start, TSErrors.InvalidTupleMemberLabel);
            labeledNode.label = type;
          }

          labeledNode.elementType = this.tsParseType();
          type = this.finishNode(labeledNode, "TSNamedTupleMember");
        } else if (optional) {
          var optionalTypeNode = this.startNodeAtNode(type);
          optionalTypeNode.typeAnnotation = type;
          type = this.finishNode(optionalTypeNode, "TSOptionalType");
        }

        if (rest) {
          var restNode = this.startNodeAt(startPos, startLoc);
          restNode.typeAnnotation = type;
          type = this.finishNode(restNode, "TSRestType");
        }

        return type;
      }
    }, {
      key: "tsParseParenthesizedType",
      value: function tsParseParenthesizedType() {
        var node = this.startNode();
        this.expect(types.parenL);
        node.typeAnnotation = this.tsParseType();
        this.expect(types.parenR);
        return this.finishNode(node, "TSParenthesizedType");
      }
    }, {
      key: "tsParseFunctionOrConstructorType",
      value: function tsParseFunctionOrConstructorType(type) {
        var node = this.startNode();

        if (type === "TSConstructorType") {
          this.expect(types._new);
        }

        this.tsFillSignature(types.arrow, node);
        return this.finishNode(node, type);
      }
    }, {
      key: "tsParseLiteralTypeNode",
      value: function tsParseLiteralTypeNode() {
        var _this19 = this;

        var node = this.startNode();

        node.literal = function () {
          switch (_this19.state.type) {
            case types.num:
            case types.bigint:
            case types.string:
            case types._true:
            case types._false:
              return _this19.parseExprAtom();

            default:
              throw _this19.unexpected();
          }
        }();

        return this.finishNode(node, "TSLiteralType");
      }
    }, {
      key: "tsParseTemplateLiteralType",
      value: function tsParseTemplateLiteralType() {
        var node = this.startNode();
        node.literal = this.parseTemplate(false);
        return this.finishNode(node, "TSLiteralType");
      }
    }, {
      key: "parseTemplateSubstitution",
      value: function parseTemplateSubstitution() {
        if (this.state.inType) return this.tsParseType();
        return _get(_getPrototypeOf(_class3.prototype), "parseTemplateSubstitution", this).call(this);
      }
    }, {
      key: "tsParseThisTypeOrThisTypePredicate",
      value: function tsParseThisTypeOrThisTypePredicate() {
        var thisKeyword = this.tsParseThisTypeNode();

        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
          return this.tsParseThisTypePredicate(thisKeyword);
        } else {
          return thisKeyword;
        }
      }
    }, {
      key: "tsParseNonArrayType",
      value: function tsParseNonArrayType() {
        switch (this.state.type) {
          case types.name:
          case types._void:
          case types._null:
            {
              var type = this.match(types._void) ? "TSVoidKeyword" : this.match(types._null) ? "TSNullKeyword" : keywordTypeFromName(this.state.value);

              if (type !== undefined && this.lookaheadCharCode() !== 46) {
                var node = this.startNode();
                this.next();
                return this.finishNode(node, type);
              }

              return this.tsParseTypeReference();
            }

          case types.string:
          case types.num:
          case types.bigint:
          case types._true:
          case types._false:
            return this.tsParseLiteralTypeNode();

          case types.plusMin:
            if (this.state.value === "-") {
              var _node6 = this.startNode();

              var nextToken = this.lookahead();

              if (nextToken.type !== types.num && nextToken.type !== types.bigint) {
                throw this.unexpected();
              }

              _node6.literal = this.parseMaybeUnary();
              return this.finishNode(_node6, "TSLiteralType");
            }

            break;

          case types._this:
            return this.tsParseThisTypeOrThisTypePredicate();

          case types._typeof:
            return this.tsParseTypeQuery();

          case types._import:
            return this.tsParseImportType();

          case types.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();

          case types.bracketL:
            return this.tsParseTupleType();

          case types.parenL:
            return this.tsParseParenthesizedType();

          case types.backQuote:
            return this.tsParseTemplateLiteralType();
        }

        throw this.unexpected();
      }
    }, {
      key: "tsParseArrayTypeOrHigher",
      value: function tsParseArrayTypeOrHigher() {
        var type = this.tsParseNonArrayType();

        while (!this.hasPrecedingLineBreak() && this.eat(types.bracketL)) {
          if (this.match(types.bracketR)) {
            var node = this.startNodeAtNode(type);
            node.elementType = type;
            this.expect(types.bracketR);
            type = this.finishNode(node, "TSArrayType");
          } else {
            var _node7 = this.startNodeAtNode(type);

            _node7.objectType = type;
            _node7.indexType = this.tsParseType();
            this.expect(types.bracketR);
            type = this.finishNode(_node7, "TSIndexedAccessType");
          }
        }

        return type;
      }
    }, {
      key: "tsParseTypeOperator",
      value: function tsParseTypeOperator(operator) {
        var node = this.startNode();
        this.expectContextual(operator);
        node.operator = operator;
        node.typeAnnotation = this.tsParseTypeOperatorOrHigher();

        if (operator === "readonly") {
          this.tsCheckTypeAnnotationForReadOnly(node);
        }

        return this.finishNode(node, "TSTypeOperator");
      }
    }, {
      key: "tsCheckTypeAnnotationForReadOnly",
      value: function tsCheckTypeAnnotationForReadOnly(node) {
        switch (node.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;

          default:
            this.raise(node.start, TSErrors.UnexpectedReadonly);
        }
      }
    }, {
      key: "tsParseInferType",
      value: function tsParseInferType() {
        var node = this.startNode();
        this.expectContextual("infer");
        var typeParameter = this.startNode();
        typeParameter.name = this.parseIdentifierName(typeParameter.start);
        node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
        return this.finishNode(node, "TSInferType");
      }
    }, {
      key: "tsParseTypeOperatorOrHigher",
      value: function tsParseTypeOperatorOrHigher() {
        var _this20 = this;

        var operator = ["keyof", "unique", "readonly"].find(function (kw) {
          return _this20.isContextual(kw);
        });
        return operator ? this.tsParseTypeOperator(operator) : this.isContextual("infer") ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
      }
    }, {
      key: "tsParseUnionOrIntersectionType",
      value: function tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
        this.eat(operator);
        var type = parseConstituentType();

        if (this.match(operator)) {
          var _types = [type];

          while (this.eat(operator)) {
            _types.push(parseConstituentType());
          }

          var node = this.startNodeAtNode(type);
          node.types = _types;
          type = this.finishNode(node, kind);
        }

        return type;
      }
    }, {
      key: "tsParseIntersectionTypeOrHigher",
      value: function tsParseIntersectionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), types.bitwiseAND);
      }
    }, {
      key: "tsParseUnionTypeOrHigher",
      value: function tsParseUnionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), types.bitwiseOR);
      }
    }, {
      key: "tsIsStartOfFunctionType",
      value: function tsIsStartOfFunctionType() {
        if (this.isRelational("<")) {
          return true;
        }

        return this.match(types.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }
    }, {
      key: "tsSkipParameterStart",
      value: function tsSkipParameterStart() {
        if (this.match(types.name) || this.match(types._this)) {
          this.next();
          return true;
        }

        if (this.match(types.braceL)) {
          var braceStackCounter = 1;
          this.next();

          while (braceStackCounter > 0) {
            if (this.match(types.braceL)) {
              ++braceStackCounter;
            } else if (this.match(types.braceR)) {
              --braceStackCounter;
            }

            this.next();
          }

          return true;
        }

        if (this.match(types.bracketL)) {
          var _braceStackCounter = 1;
          this.next();

          while (_braceStackCounter > 0) {
            if (this.match(types.bracketL)) {
              ++_braceStackCounter;
            } else if (this.match(types.bracketR)) {
              --_braceStackCounter;
            }

            this.next();
          }

          return true;
        }

        return false;
      }
    }, {
      key: "tsIsUnambiguouslyStartOfFunctionType",
      value: function tsIsUnambiguouslyStartOfFunctionType() {
        this.next();

        if (this.match(types.parenR) || this.match(types.ellipsis)) {
          return true;
        }

        if (this.tsSkipParameterStart()) {
          if (this.match(types.colon) || this.match(types.comma) || this.match(types.question) || this.match(types.eq)) {
            return true;
          }

          if (this.match(types.parenR)) {
            this.next();

            if (this.match(types.arrow)) {
              return true;
            }
          }
        }

        return false;
      }
    }, {
      key: "tsParseTypeOrTypePredicateAnnotation",
      value: function tsParseTypeOrTypePredicateAnnotation(returnToken) {
        var _this21 = this;

        return this.tsInType(function () {
          var t = _this21.startNode();

          _this21.expect(returnToken);

          var asserts = !!_this21.tsTryParse(_this21.tsParseTypePredicateAsserts.bind(_this21));

          if (asserts && _this21.match(types._this)) {
            var thisTypePredicate = _this21.tsParseThisTypeOrThisTypePredicate();

            if (thisTypePredicate.type === "TSThisType") {
              var _node8 = _this21.startNodeAtNode(t);

              _node8.parameterName = thisTypePredicate;
              _node8.asserts = true;
              thisTypePredicate = _this21.finishNode(_node8, "TSTypePredicate");
            } else {
              thisTypePredicate.asserts = true;
            }

            t.typeAnnotation = thisTypePredicate;
            return _this21.finishNode(t, "TSTypeAnnotation");
          }

          var typePredicateVariable = _this21.tsIsIdentifier() && _this21.tsTryParse(_this21.tsParseTypePredicatePrefix.bind(_this21));

          if (!typePredicateVariable) {
            if (!asserts) {
              return _this21.tsParseTypeAnnotation(false, t);
            }

            var _node9 = _this21.startNodeAtNode(t);

            _node9.parameterName = _this21.parseIdentifier();
            _node9.asserts = asserts;
            t.typeAnnotation = _this21.finishNode(_node9, "TSTypePredicate");
            return _this21.finishNode(t, "TSTypeAnnotation");
          }

          var type = _this21.tsParseTypeAnnotation(false);

          var node = _this21.startNodeAtNode(t);

          node.parameterName = typePredicateVariable;
          node.typeAnnotation = type;
          node.asserts = asserts;
          t.typeAnnotation = _this21.finishNode(node, "TSTypePredicate");
          return _this21.finishNode(t, "TSTypeAnnotation");
        });
      }
    }, {
      key: "tsTryParseTypeOrTypePredicateAnnotation",
      value: function tsTryParseTypeOrTypePredicateAnnotation() {
        return this.match(types.colon) ? this.tsParseTypeOrTypePredicateAnnotation(types.colon) : undefined;
      }
    }, {
      key: "tsTryParseTypeAnnotation",
      value: function tsTryParseTypeAnnotation() {
        return this.match(types.colon) ? this.tsParseTypeAnnotation() : undefined;
      }
    }, {
      key: "tsTryParseType",
      value: function tsTryParseType() {
        return this.tsEatThenParseType(types.colon);
      }
    }, {
      key: "tsParseTypePredicatePrefix",
      value: function tsParseTypePredicatePrefix() {
        var id = this.parseIdentifier();

        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
          this.next();
          return id;
        }
      }
    }, {
      key: "tsParseTypePredicateAsserts",
      value: function tsParseTypePredicateAsserts() {
        if (!this.match(types.name) || this.state.value !== "asserts" || this.hasPrecedingLineBreak()) {
          return false;
        }

        var containsEsc = this.state.containsEsc;
        this.next();

        if (!this.match(types.name) && !this.match(types._this)) {
          return false;
        }

        if (containsEsc) {
          this.raise(this.state.lastTokStart, ErrorMessages.InvalidEscapedReservedWord, "asserts");
        }

        return true;
      }
    }, {
      key: "tsParseTypeAnnotation",
      value: function tsParseTypeAnnotation() {
        var _this22 = this;

        var eatColon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.startNode();
        this.tsInType(function () {
          if (eatColon) _this22.expect(types.colon);
          t.typeAnnotation = _this22.tsParseType();
        });
        return this.finishNode(t, "TSTypeAnnotation");
      }
    }, {
      key: "tsParseType",
      value: function tsParseType() {
        assert(this.state.inType);
        var type = this.tsParseNonConditionalType();

        if (this.hasPrecedingLineBreak() || !this.eat(types._extends)) {
          return type;
        }

        var node = this.startNodeAtNode(type);
        node.checkType = type;
        node.extendsType = this.tsParseNonConditionalType();
        this.expect(types.question);
        node.trueType = this.tsParseType();
        this.expect(types.colon);
        node.falseType = this.tsParseType();
        return this.finishNode(node, "TSConditionalType");
      }
    }, {
      key: "tsParseNonConditionalType",
      value: function tsParseNonConditionalType() {
        if (this.tsIsStartOfFunctionType()) {
          return this.tsParseFunctionOrConstructorType("TSFunctionType");
        }

        if (this.match(types._new)) {
          return this.tsParseFunctionOrConstructorType("TSConstructorType");
        }

        return this.tsParseUnionTypeOrHigher();
      }
    }, {
      key: "tsParseTypeAssertion",
      value: function tsParseTypeAssertion() {
        var node = this.startNode();

        var _const = this.tsTryNextParseConstantContext();

        node.typeAnnotation = _const || this.tsNextThenParseType();
        this.expectRelational(">");
        node.expression = this.parseMaybeUnary();
        return this.finishNode(node, "TSTypeAssertion");
      }
    }, {
      key: "tsParseHeritageClause",
      value: function tsParseHeritageClause(descriptor) {
        var originalStart = this.state.start;
        var delimitedList = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));

        if (!delimitedList.length) {
          this.raise(originalStart, TSErrors.EmptyHeritageClauseType, descriptor);
        }

        return delimitedList;
      }
    }, {
      key: "tsParseExpressionWithTypeArguments",
      value: function tsParseExpressionWithTypeArguments() {
        var node = this.startNode();
        node.expression = this.tsParseEntityName(false);

        if (this.isRelational("<")) {
          node.typeParameters = this.tsParseTypeArguments();
        }

        return this.finishNode(node, "TSExpressionWithTypeArguments");
      }
    }, {
      key: "tsParseInterfaceDeclaration",
      value: function tsParseInterfaceDeclaration(node) {
        node.id = this.parseIdentifier();
        this.checkLVal(node.id, "typescript interface declaration", BIND_TS_INTERFACE);
        node.typeParameters = this.tsTryParseTypeParameters();

        if (this.eat(types._extends)) {
          node.extends = this.tsParseHeritageClause("extends");
        }

        var body = this.startNode();
        body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
        node.body = this.finishNode(body, "TSInterfaceBody");
        return this.finishNode(node, "TSInterfaceDeclaration");
      }
    }, {
      key: "tsParseTypeAliasDeclaration",
      value: function tsParseTypeAliasDeclaration(node) {
        var _this23 = this;

        node.id = this.parseIdentifier();
        this.checkLVal(node.id, "typescript type alias", BIND_TS_TYPE);
        node.typeParameters = this.tsTryParseTypeParameters();
        node.typeAnnotation = this.tsInType(function () {
          _this23.expect(types.eq);

          if (_this23.isContextual("intrinsic") && _this23.lookahead().type !== types.dot) {
            var _node10 = _this23.startNode();

            _this23.next();

            return _this23.finishNode(_node10, "TSIntrinsicKeyword");
          }

          return _this23.tsParseType();
        });
        this.semicolon();
        return this.finishNode(node, "TSTypeAliasDeclaration");
      }
    }, {
      key: "tsInNoContext",
      value: function tsInNoContext(cb) {
        var oldContext = this.state.context;
        this.state.context = [oldContext[0]];

        try {
          return cb();
        } finally {
          this.state.context = oldContext;
        }
      }
    }, {
      key: "tsInType",
      value: function tsInType(cb) {
        var oldInType = this.state.inType;
        this.state.inType = true;

        try {
          return cb();
        } finally {
          this.state.inType = oldInType;
        }
      }
    }, {
      key: "tsEatThenParseType",
      value: function tsEatThenParseType(token) {
        return !this.match(token) ? undefined : this.tsNextThenParseType();
      }
    }, {
      key: "tsExpectThenParseType",
      value: function tsExpectThenParseType(token) {
        var _this24 = this;

        return this.tsDoThenParseType(function () {
          return _this24.expect(token);
        });
      }
    }, {
      key: "tsNextThenParseType",
      value: function tsNextThenParseType() {
        var _this25 = this;

        return this.tsDoThenParseType(function () {
          return _this25.next();
        });
      }
    }, {
      key: "tsDoThenParseType",
      value: function tsDoThenParseType(cb) {
        var _this26 = this;

        return this.tsInType(function () {
          cb();
          return _this26.tsParseType();
        });
      }
    }, {
      key: "tsParseEnumMember",
      value: function tsParseEnumMember() {
        var node = this.startNode();
        node.id = this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);

        if (this.eat(types.eq)) {
          node.initializer = this.parseMaybeAssignAllowIn();
        }

        return this.finishNode(node, "TSEnumMember");
      }
    }, {
      key: "tsParseEnumDeclaration",
      value: function tsParseEnumDeclaration(node, isConst) {
        if (isConst) node.const = true;
        node.id = this.parseIdentifier();
        this.checkLVal(node.id, "typescript enum declaration", isConst ? BIND_TS_CONST_ENUM : BIND_TS_ENUM);
        this.expect(types.braceL);
        node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
        this.expect(types.braceR);
        return this.finishNode(node, "TSEnumDeclaration");
      }
    }, {
      key: "tsParseModuleBlock",
      value: function tsParseModuleBlock() {
        var node = this.startNode();
        this.scope.enter(SCOPE_OTHER);
        this.expect(types.braceL);
        this.parseBlockOrModuleBlockBody(node.body = [], undefined, true, types.braceR);
        this.scope.exit();
        return this.finishNode(node, "TSModuleBlock");
      }
    }, {
      key: "tsParseModuleOrNamespaceDeclaration",
      value: function tsParseModuleOrNamespaceDeclaration(node) {
        var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        node.id = this.parseIdentifier();

        if (!nested) {
          this.checkLVal(node.id, "module or namespace declaration", BIND_TS_NAMESPACE);
        }

        if (this.eat(types.dot)) {
          var inner = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(inner, true);
          node.body = inner;
        } else {
          this.scope.enter(SCOPE_TS_MODULE);
          this.prodParam.enter(PARAM);
          node.body = this.tsParseModuleBlock();
          this.prodParam.exit();
          this.scope.exit();
        }

        return this.finishNode(node, "TSModuleDeclaration");
      }
    }, {
      key: "tsParseAmbientExternalModuleDeclaration",
      value: function tsParseAmbientExternalModuleDeclaration(node) {
        if (this.isContextual("global")) {
          node.global = true;
          node.id = this.parseIdentifier();
        } else if (this.match(types.string)) {
          node.id = this.parseExprAtom();
        } else {
          this.unexpected();
        }

        if (this.match(types.braceL)) {
          this.scope.enter(SCOPE_TS_MODULE);
          this.prodParam.enter(PARAM);
          node.body = this.tsParseModuleBlock();
          this.prodParam.exit();
          this.scope.exit();
        } else {
          this.semicolon();
        }

        return this.finishNode(node, "TSModuleDeclaration");
      }
    }, {
      key: "tsParseImportEqualsDeclaration",
      value: function tsParseImportEqualsDeclaration(node, isExport) {
        node.isExport = isExport || false;
        node.id = this.parseIdentifier();
        this.checkLVal(node.id, "import equals declaration", BIND_LEXICAL);
        this.expect(types.eq);
        node.moduleReference = this.tsParseModuleReference();
        this.semicolon();
        return this.finishNode(node, "TSImportEqualsDeclaration");
      }
    }, {
      key: "tsIsExternalModuleReference",
      value: function tsIsExternalModuleReference() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }
    }, {
      key: "tsParseModuleReference",
      value: function tsParseModuleReference() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
      }
    }, {
      key: "tsParseExternalModuleReference",
      value: function tsParseExternalModuleReference() {
        var node = this.startNode();
        this.expectContextual("require");
        this.expect(types.parenL);

        if (!this.match(types.string)) {
          throw this.unexpected();
        }

        node.expression = this.parseExprAtom();
        this.expect(types.parenR);
        return this.finishNode(node, "TSExternalModuleReference");
      }
    }, {
      key: "tsLookAhead",
      value: function tsLookAhead(f) {
        var state = this.state.clone();
        var res = f();
        this.state = state;
        return res;
      }
    }, {
      key: "tsTryParseAndCatch",
      value: function tsTryParseAndCatch(f) {
        var result = this.tryParse(function (abort) {
          return f() || abort();
        });
        if (result.aborted || !result.node) return undefined;
        if (result.error) this.state = result.failState;
        return result.node;
      }
    }, {
      key: "tsTryParse",
      value: function tsTryParse(f) {
        var state = this.state.clone();
        var result = f();

        if (result !== undefined && result !== false) {
          return result;
        } else {
          this.state = state;
          return undefined;
        }
      }
    }, {
      key: "tsTryParseDeclare",
      value: function tsTryParseDeclare(nany) {
        var _this27 = this;

        if (this.isLineTerminator()) {
          return;
        }

        var starttype = this.state.type;
        var kind;

        if (this.isContextual("let")) {
          starttype = types._var;
          kind = "let";
        }

        return this.tsInDeclareContext(function () {
          switch (starttype) {
            case types._function:
              nany.declare = true;
              return _this27.parseFunctionStatement(nany, false, true);

            case types._class:
              nany.declare = true;
              return _this27.parseClass(nany, true, false);

            case types._const:
              if (_this27.match(types._const) && _this27.isLookaheadContextual("enum")) {
                _this27.expect(types._const);

                _this27.expectContextual("enum");

                return _this27.tsParseEnumDeclaration(nany, true);
              }

            case types._var:
              kind = kind || _this27.state.value;
              return _this27.parseVarStatement(nany, kind);

            case types.name:
              {
                var value = _this27.state.value;

                if (value === "global") {
                  return _this27.tsParseAmbientExternalModuleDeclaration(nany);
                } else {
                  return _this27.tsParseDeclaration(nany, value, true);
                }
              }
          }
        });
      }
    }, {
      key: "tsTryParseExportDeclaration",
      value: function tsTryParseExportDeclaration() {
        return this.tsParseDeclaration(this.startNode(), this.state.value, true);
      }
    }, {
      key: "tsParseExpressionStatement",
      value: function tsParseExpressionStatement(node, expr) {
        switch (expr.name) {
          case "declare":
            {
              var declaration = this.tsTryParseDeclare(node);

              if (declaration) {
                declaration.declare = true;
                return declaration;
              }

              break;
            }

          case "global":
            if (this.match(types.braceL)) {
              this.scope.enter(SCOPE_TS_MODULE);
              this.prodParam.enter(PARAM);
              var mod = node;
              mod.global = true;
              mod.id = expr;
              mod.body = this.tsParseModuleBlock();
              this.scope.exit();
              this.prodParam.exit();
              return this.finishNode(mod, "TSModuleDeclaration");
            }

            break;

          default:
            return this.tsParseDeclaration(node, expr.name, false);
        }
      }
    }, {
      key: "tsParseDeclaration",
      value: function tsParseDeclaration(node, value, next) {
        switch (value) {
          case "abstract":
            if (this.tsCheckLineTerminatorAndMatch(types._class, next)) {
              var cls = node;
              cls.abstract = true;

              if (next) {
                this.next();

                if (!this.match(types._class)) {
                  this.unexpected(null, types._class);
                }
              }

              return this.parseClass(cls, true, false);
            }

            break;

          case "enum":
            if (next || this.match(types.name)) {
              if (next) this.next();
              return this.tsParseEnumDeclaration(node, false);
            }

            break;

          case "interface":
            if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
              if (next) this.next();
              return this.tsParseInterfaceDeclaration(node);
            }

            break;

          case "module":
            if (next) this.next();

            if (this.match(types.string)) {
              return this.tsParseAmbientExternalModuleDeclaration(node);
            } else if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
              return this.tsParseModuleOrNamespaceDeclaration(node);
            }

            break;

          case "namespace":
            if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
              if (next) this.next();
              return this.tsParseModuleOrNamespaceDeclaration(node);
            }

            break;

          case "type":
            if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
              if (next) this.next();
              return this.tsParseTypeAliasDeclaration(node);
            }

            break;
        }
      }
    }, {
      key: "tsCheckLineTerminatorAndMatch",
      value: function tsCheckLineTerminatorAndMatch(tokenType, next) {
        return (next || this.match(tokenType)) && !this.isLineTerminator();
      }
    }, {
      key: "tsTryParseGenericAsyncArrowFunction",
      value: function tsTryParseGenericAsyncArrowFunction(startPos, startLoc) {
        var _this28 = this;

        if (!this.isRelational("<")) {
          return undefined;
        }

        var oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
        this.state.maybeInArrowParameters = true;
        var res = this.tsTryParseAndCatch(function () {
          var node = _this28.startNodeAt(startPos, startLoc);

          node.typeParameters = _this28.tsParseTypeParameters();

          _get(_getPrototypeOf(_class3.prototype), "parseFunctionParams", _this28).call(_this28, node);

          node.returnType = _this28.tsTryParseTypeOrTypePredicateAnnotation();

          _this28.expect(types.arrow);

          return node;
        });
        this.state.maybeInArrowParameters = oldMaybeInArrowParameters;

        if (!res) {
          return undefined;
        }

        return this.parseArrowExpression(res, null, true);
      }
    }, {
      key: "tsParseTypeArguments",
      value: function tsParseTypeArguments() {
        var _this29 = this;

        var node = this.startNode();
        node.params = this.tsInType(function () {
          return _this29.tsInNoContext(function () {
            _this29.expectRelational("<");

            return _this29.tsParseDelimitedList("TypeParametersOrArguments", _this29.tsParseType.bind(_this29));
          });
        });

        if (node.params.length === 0) {
          this.raise(node.start, TSErrors.EmptyTypeArguments);
        }

        this.state.exprAllowed = false;
        this.expectRelational(">");
        return this.finishNode(node, "TSTypeParameterInstantiation");
      }
    }, {
      key: "tsIsDeclarationStart",
      value: function tsIsDeclarationStart() {
        if (this.match(types.name)) {
          switch (this.state.value) {
            case "abstract":
            case "declare":
            case "enum":
            case "interface":
            case "module":
            case "namespace":
            case "type":
              return true;
          }
        }

        return false;
      }
    }, {
      key: "isExportDefaultSpecifier",
      value: function isExportDefaultSpecifier() {
        if (this.tsIsDeclarationStart()) return false;
        return _get(_getPrototypeOf(_class3.prototype), "isExportDefaultSpecifier", this).call(this);
      }
    }, {
      key: "parseAssignableListItem",
      value: function parseAssignableListItem(allowModifiers, decorators) {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        var accessibility;
        var readonly = false;

        if (allowModifiers !== undefined) {
          accessibility = this.parseAccessModifier();
          readonly = !!this.tsParseModifier(["readonly"]);

          if (allowModifiers === false && (accessibility || readonly)) {
            this.raise(startPos, TSErrors.UnexpectedParameterModifier);
          }
        }

        var left = this.parseMaybeDefault();
        this.parseAssignableListItemTypes(left);
        var elt = this.parseMaybeDefault(left.start, left.loc.start, left);

        if (accessibility || readonly) {
          var pp = this.startNodeAt(startPos, startLoc);

          if (decorators.length) {
            pp.decorators = decorators;
          }

          if (accessibility) pp.accessibility = accessibility;
          if (readonly) pp.readonly = readonly;

          if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
            this.raise(pp.start, TSErrors.UnsupportedParameterPropertyKind);
          }

          pp.parameter = elt;
          return this.finishNode(pp, "TSParameterProperty");
        }

        if (decorators.length) {
          left.decorators = decorators;
        }

        return elt;
      }
    }, {
      key: "parseFunctionBodyAndFinish",
      value: function parseFunctionBodyAndFinish(node, type) {
        var isMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.match(types.colon)) {
          node.returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
        }

        var bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" ? "TSDeclareMethod" : undefined;

        if (bodilessType && !this.match(types.braceL) && this.isLineTerminator()) {
          this.finishNode(node, bodilessType);
          return;
        }

        if (bodilessType === "TSDeclareFunction" && this.state.isDeclareContext) {
          this.raise(node.start, TSErrors.DeclareFunctionHasImplementation);

          if (node.declare) {
            _get(_getPrototypeOf(_class3.prototype), "parseFunctionBodyAndFinish", this).call(this, node, bodilessType, isMethod);

            return;
          }
        }

        _get(_getPrototypeOf(_class3.prototype), "parseFunctionBodyAndFinish", this).call(this, node, type, isMethod);
      }
    }, {
      key: "registerFunctionStatementId",
      value: function registerFunctionStatementId(node) {
        if (!node.body && node.id) {
          this.checkLVal(node.id, "function name", BIND_TS_AMBIENT);
        } else {
          _get(_getPrototypeOf(_class3.prototype), "registerFunctionStatementId", this).apply(this, arguments);
        }
      }
    }, {
      key: "tsCheckForInvalidTypeCasts",
      value: function tsCheckForInvalidTypeCasts(items) {
        var _this30 = this;

        items.forEach(function (node) {
          if ((node == null ? void 0 : node.type) === "TSTypeCastExpression") {
            _this30.raise(node.typeAnnotation.start, TSErrors.UnexpectedTypeAnnotation);
          }
        });
      }
    }, {
      key: "toReferencedList",
      value: function toReferencedList(exprList, isInParens) {
        this.tsCheckForInvalidTypeCasts(exprList);
        return exprList;
      }
    }, {
      key: "parseArrayLike",
      value: function parseArrayLike() {
        var _get5;

        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        var node = (_get5 = _get(_getPrototypeOf(_class3.prototype), "parseArrayLike", this)).call.apply(_get5, [this].concat(args));

        if (node.type === "ArrayExpression") {
          this.tsCheckForInvalidTypeCasts(node.elements);
        }

        return node;
      }
    }, {
      key: "parseSubscript",
      value: function parseSubscript(base, startPos, startLoc, noCalls, state) {
        var _this31 = this;

        if (!this.hasPrecedingLineBreak() && this.match(types.bang)) {
          this.state.exprAllowed = false;
          this.next();
          var nonNullExpression = this.startNodeAt(startPos, startLoc);
          nonNullExpression.expression = base;
          return this.finishNode(nonNullExpression, "TSNonNullExpression");
        }

        if (this.isRelational("<")) {
          var result = this.tsTryParseAndCatch(function () {
            if (!noCalls && _this31.atPossibleAsyncArrow(base)) {
              var asyncArrowFn = _this31.tsTryParseGenericAsyncArrowFunction(startPos, startLoc);

              if (asyncArrowFn) {
                return asyncArrowFn;
              }
            }

            var node = _this31.startNodeAt(startPos, startLoc);

            node.callee = base;

            var typeArguments = _this31.tsParseTypeArguments();

            if (typeArguments) {
              if (!noCalls && _this31.eat(types.parenL)) {
                node.arguments = _this31.parseCallExpressionArguments(types.parenR, false);

                _this31.tsCheckForInvalidTypeCasts(node.arguments);

                node.typeParameters = typeArguments;
                return _this31.finishCallExpression(node, state.optionalChainMember);
              } else if (_this31.match(types.backQuote)) {
                var _result = _this31.parseTaggedTemplateExpression(base, startPos, startLoc, state);

                _result.typeParameters = typeArguments;
                return _result;
              }
            }

            _this31.unexpected();
          });
          if (result) return result;
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseSubscript", this).call(this, base, startPos, startLoc, noCalls, state);
      }
    }, {
      key: "parseNewArguments",
      value: function parseNewArguments(node) {
        var _this32 = this;

        if (this.isRelational("<")) {
          var typeParameters = this.tsTryParseAndCatch(function () {
            var args = _this32.tsParseTypeArguments();

            if (!_this32.match(types.parenL)) _this32.unexpected();
            return args;
          });

          if (typeParameters) {
            node.typeParameters = typeParameters;
          }
        }

        _get(_getPrototypeOf(_class3.prototype), "parseNewArguments", this).call(this, node);
      }
    }, {
      key: "parseExprOp",
      value: function parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
        if (nonNull(types._in.binop) > minPrec && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
          var node = this.startNodeAt(leftStartPos, leftStartLoc);
          node.expression = left;

          var _const = this.tsTryNextParseConstantContext();

          if (_const) {
            node.typeAnnotation = _const;
          } else {
            node.typeAnnotation = this.tsNextThenParseType();
          }

          this.finishNode(node, "TSAsExpression");
          this.reScan_lt_gt();
          return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseExprOp", this).call(this, left, leftStartPos, leftStartLoc, minPrec);
      }
    }, {
      key: "checkReservedWord",
      value: function checkReservedWord(word, startLoc, checkKeywords, isBinding) {}
    }, {
      key: "checkDuplicateExports",
      value: function checkDuplicateExports() {}
    }, {
      key: "parseImport",
      value: function parseImport(node) {
        if (this.match(types.name) || this.match(types.star) || this.match(types.braceL)) {
          var ahead = this.lookahead();

          if (this.match(types.name) && ahead.type === types.eq) {
            return this.tsParseImportEqualsDeclaration(node);
          }

          if (this.isContextual("type") && ahead.type !== types.comma && !(ahead.type === types.name && ahead.value === "from")) {
            node.importKind = "type";
            this.next();
          }
        }

        if (!node.importKind) {
          node.importKind = "value";
        }

        var importNode = _get(_getPrototypeOf(_class3.prototype), "parseImport", this).call(this, node);

        if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
          this.raise(importNode.start, "A type-only import can specify a default import or named bindings, but not both.");
        }

        return importNode;
      }
    }, {
      key: "parseExport",
      value: function parseExport(node) {
        if (this.match(types._import)) {
          this.expect(types._import);
          return this.tsParseImportEqualsDeclaration(node, true);
        } else if (this.eat(types.eq)) {
          var assign = node;
          assign.expression = this.parseExpression();
          this.semicolon();
          return this.finishNode(assign, "TSExportAssignment");
        } else if (this.eatContextual("as")) {
          var decl = node;
          this.expectContextual("namespace");
          decl.id = this.parseIdentifier();
          this.semicolon();
          return this.finishNode(decl, "TSNamespaceExportDeclaration");
        } else {
          if (this.isContextual("type") && this.lookahead().type === types.braceL) {
            this.next();
            node.exportKind = "type";
          } else {
            node.exportKind = "value";
          }

          return _get(_getPrototypeOf(_class3.prototype), "parseExport", this).call(this, node);
        }
      }
    }, {
      key: "isAbstractClass",
      value: function isAbstractClass() {
        return this.isContextual("abstract") && this.lookahead().type === types._class;
      }
    }, {
      key: "parseExportDefaultExpression",
      value: function parseExportDefaultExpression() {
        if (this.isAbstractClass()) {
          var cls = this.startNode();
          this.next();
          this.parseClass(cls, true, true);
          cls.abstract = true;
          return cls;
        }

        if (this.state.value === "interface") {
          var result = this.tsParseDeclaration(this.startNode(), this.state.value, true);
          if (result) return result;
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseExportDefaultExpression", this).call(this);
      }
    }, {
      key: "parseStatementContent",
      value: function parseStatementContent(context, topLevel) {
        if (this.state.type === types._const) {
          var ahead = this.lookahead();

          if (ahead.type === types.name && ahead.value === "enum") {
            var node = this.startNode();
            this.expect(types._const);
            this.expectContextual("enum");
            return this.tsParseEnumDeclaration(node, true);
          }
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseStatementContent", this).call(this, context, topLevel);
      }
    }, {
      key: "parseAccessModifier",
      value: function parseAccessModifier() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }
    }, {
      key: "parseClassMember",
      value: function parseClassMember(classBody, member, state) {
        var _this33 = this;

        this.tsParseModifiers(member, ["declare"]);
        var accessibility = this.parseAccessModifier();
        if (accessibility) member.accessibility = accessibility;
        this.tsParseModifiers(member, ["declare"]);

        var callParseClassMember = function () {
          _get(_getPrototypeOf(_class3.prototype), "parseClassMember", _this33).call(_this33, classBody, member, state);
        };

        if (member.declare) {
          this.tsInDeclareContext(callParseClassMember);
        } else {
          callParseClassMember();
        }
      }
    }, {
      key: "parseClassMemberWithIsStatic",
      value: function parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
        this.tsParseModifiers(member, ["abstract", "readonly", "declare"]);
        var idx = this.tsTryParseIndexSignature(member);

        if (idx) {
          classBody.body.push(idx);

          if (member.abstract) {
            this.raise(member.start, TSErrors.IndexSignatureHasAbstract);
          }

          if (isStatic) {
            this.raise(member.start, TSErrors.IndexSignatureHasStatic);
          }

          if (member.accessibility) {
            this.raise(member.start, TSErrors.IndexSignatureHasAccessibility, member.accessibility);
          }

          if (member.declare) {
            this.raise(member.start, TSErrors.IndexSignatureHasDeclare);
          }

          return;
        }

        _get(_getPrototypeOf(_class3.prototype), "parseClassMemberWithIsStatic", this).call(this, classBody, member, state, isStatic);
      }
    }, {
      key: "parsePostMemberNameModifiers",
      value: function parsePostMemberNameModifiers(methodOrProp) {
        var optional = this.eat(types.question);
        if (optional) methodOrProp.optional = true;

        if (methodOrProp.readonly && this.match(types.parenL)) {
          this.raise(methodOrProp.start, TSErrors.ClassMethodHasReadonly);
        }

        if (methodOrProp.declare && this.match(types.parenL)) {
          this.raise(methodOrProp.start, TSErrors.ClassMethodHasDeclare);
        }
      }
    }, {
      key: "parseExpressionStatement",
      value: function parseExpressionStatement(node, expr) {
        var decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr) : undefined;
        return decl || _get(_getPrototypeOf(_class3.prototype), "parseExpressionStatement", this).call(this, node, expr);
      }
    }, {
      key: "shouldParseExportDeclaration",
      value: function shouldParseExportDeclaration() {
        if (this.tsIsDeclarationStart()) return true;
        return _get(_getPrototypeOf(_class3.prototype), "shouldParseExportDeclaration", this).call(this);
      }
    }, {
      key: "parseConditional",
      value: function parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
        var _this34 = this;

        if (!refNeedsArrowPos || !this.match(types.question)) {
          return _get(_getPrototypeOf(_class3.prototype), "parseConditional", this).call(this, expr, startPos, startLoc, refNeedsArrowPos);
        }

        var result = this.tryParse(function () {
          return _get(_getPrototypeOf(_class3.prototype), "parseConditional", _this34).call(_this34, expr, startPos, startLoc);
        });

        if (!result.node) {
          refNeedsArrowPos.start = result.error.pos || this.state.start;
          return expr;
        }

        if (result.error) this.state = result.failState;
        return result.node;
      }
    }, {
      key: "parseParenItem",
      value: function parseParenItem(node, startPos, startLoc) {
        node = _get(_getPrototypeOf(_class3.prototype), "parseParenItem", this).call(this, node, startPos, startLoc);

        if (this.eat(types.question)) {
          node.optional = true;
          this.resetEndLocation(node);
        }

        if (this.match(types.colon)) {
          var typeCastNode = this.startNodeAt(startPos, startLoc);
          typeCastNode.expression = node;
          typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
          return this.finishNode(typeCastNode, "TSTypeCastExpression");
        }

        return node;
      }
    }, {
      key: "parseExportDeclaration",
      value: function parseExportDeclaration(node) {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        var isDeclare = this.eatContextual("declare");
        var declaration;

        if (this.match(types.name)) {
          declaration = this.tsTryParseExportDeclaration();
        }

        if (!declaration) {
          declaration = _get(_getPrototypeOf(_class3.prototype), "parseExportDeclaration", this).call(this, node);
        }

        if (declaration && (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare)) {
          node.exportKind = "type";
        }

        if (declaration && isDeclare) {
          this.resetStartLocation(declaration, startPos, startLoc);
          declaration.declare = true;
        }

        return declaration;
      }
    }, {
      key: "parseClassId",
      value: function parseClassId(node, isStatement, optionalId) {
        if ((!isStatement || optionalId) && this.isContextual("implements")) {
          return;
        }

        _get(_getPrototypeOf(_class3.prototype), "parseClassId", this).call(this, node, isStatement, optionalId, node.declare ? BIND_TS_AMBIENT : BIND_CLASS);

        var typeParameters = this.tsTryParseTypeParameters();
        if (typeParameters) node.typeParameters = typeParameters;
      }
    }, {
      key: "parseClassPropertyAnnotation",
      value: function parseClassPropertyAnnotation(node) {
        if (!node.optional && this.eat(types.bang)) {
          node.definite = true;
        }

        var type = this.tsTryParseTypeAnnotation();
        if (type) node.typeAnnotation = type;
      }
    }, {
      key: "parseClassProperty",
      value: function parseClassProperty(node) {
        this.parseClassPropertyAnnotation(node);

        if (this.state.isDeclareContext && this.match(types.eq)) {
          this.raise(this.state.start, TSErrors.DeclareClassFieldHasInitializer);
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseClassProperty", this).call(this, node);
      }
    }, {
      key: "parseClassPrivateProperty",
      value: function parseClassPrivateProperty(node) {
        if (node.abstract) {
          this.raise(node.start, TSErrors.PrivateElementHasAbstract);
        }

        if (node.accessibility) {
          this.raise(node.start, TSErrors.PrivateElementHasAccessibility, node.accessibility);
        }

        this.parseClassPropertyAnnotation(node);
        return _get(_getPrototypeOf(_class3.prototype), "parseClassPrivateProperty", this).call(this, node);
      }
    }, {
      key: "pushClassMethod",
      value: function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        var typeParameters = this.tsTryParseTypeParameters();

        if (typeParameters && isConstructor) {
          this.raise(typeParameters.start, TSErrors.ConstructorHasTypeParameters);
        }

        if (typeParameters) method.typeParameters = typeParameters;

        _get(_getPrototypeOf(_class3.prototype), "pushClassMethod", this).call(this, classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
      }
    }, {
      key: "pushClassPrivateMethod",
      value: function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        var typeParameters = this.tsTryParseTypeParameters();
        if (typeParameters) method.typeParameters = typeParameters;

        _get(_getPrototypeOf(_class3.prototype), "pushClassPrivateMethod", this).call(this, classBody, method, isGenerator, isAsync);
      }
    }, {
      key: "parseClassSuper",
      value: function parseClassSuper(node) {
        _get(_getPrototypeOf(_class3.prototype), "parseClassSuper", this).call(this, node);

        if (node.superClass && this.isRelational("<")) {
          node.superTypeParameters = this.tsParseTypeArguments();
        }

        if (this.eatContextual("implements")) {
          node.implements = this.tsParseHeritageClause("implements");
        }
      }
    }, {
      key: "parseObjPropValue",
      value: function parseObjPropValue(prop) {
        var _get6;

        var typeParameters = this.tsTryParseTypeParameters();
        if (typeParameters) prop.typeParameters = typeParameters;

        for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
          args[_key8 - 1] = arguments[_key8];
        }

        (_get6 = _get(_getPrototypeOf(_class3.prototype), "parseObjPropValue", this)).call.apply(_get6, [this, prop].concat(args));
      }
    }, {
      key: "parseFunctionParams",
      value: function parseFunctionParams(node, allowModifiers) {
        var typeParameters = this.tsTryParseTypeParameters();
        if (typeParameters) node.typeParameters = typeParameters;

        _get(_getPrototypeOf(_class3.prototype), "parseFunctionParams", this).call(this, node, allowModifiers);
      }
    }, {
      key: "parseVarId",
      value: function parseVarId(decl, kind) {
        _get(_getPrototypeOf(_class3.prototype), "parseVarId", this).call(this, decl, kind);

        if (decl.id.type === "Identifier" && this.eat(types.bang)) {
          decl.definite = true;
        }

        var type = this.tsTryParseTypeAnnotation();

        if (type) {
          decl.id.typeAnnotation = type;
          this.resetEndLocation(decl.id);
        }
      }
    }, {
      key: "parseAsyncArrowFromCallExpression",
      value: function parseAsyncArrowFromCallExpression(node, call) {
        if (this.match(types.colon)) {
          node.returnType = this.tsParseTypeAnnotation();
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseAsyncArrowFromCallExpression", this).call(this, node, call);
      }
    }, {
      key: "parseMaybeAssign",
      value: function parseMaybeAssign() {
        var _this35 = this;

        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }

        var _jsx, _jsx2, _typeCast, _jsx3, _typeCast2, _jsx4, _typeCast3;

        var state;
        var jsx;
        var typeCast;

        if (this.match(types.jsxTagStart)) {
          state = this.state.clone();
          jsx = this.tryParse(function () {
            var _get7;

            return (_get7 = _get(_getPrototypeOf(_class3.prototype), "parseMaybeAssign", _this35)).call.apply(_get7, [_this35].concat(args));
          }, state);
          if (!jsx.error) return jsx.node;
          var {
            context: context
          } = this.state;

          if (context[context.length - 1] === types$1.j_oTag) {
            context.length -= 2;
          } else if (context[context.length - 1] === types$1.j_expr) {
            context.length -= 1;
          }
        }

        if (!((_jsx = jsx) == null ? void 0 : _jsx.error) && !this.isRelational("<")) {
          var _get8;

          return (_get8 = _get(_getPrototypeOf(_class3.prototype), "parseMaybeAssign", this)).call.apply(_get8, [this].concat(args));
        }

        var typeParameters;
        state = state || this.state.clone();
        var arrow = this.tryParse(function (abort) {
          var _get9;

          var _typeParameters;

          typeParameters = _this35.tsParseTypeParameters();

          var expr = (_get9 = _get(_getPrototypeOf(_class3.prototype), "parseMaybeAssign", _this35)).call.apply(_get9, [_this35].concat(args));

          if (expr.type !== "ArrowFunctionExpression" || expr.extra && expr.extra.parenthesized) {
            abort();
          }

          if (((_typeParameters = typeParameters) == null ? void 0 : _typeParameters.params.length) !== 0) {
            _this35.resetStartLocationFromNode(expr, typeParameters);
          }

          expr.typeParameters = typeParameters;
          return expr;
        }, state);
        if (!arrow.error && !arrow.aborted) return arrow.node;

        if (!jsx) {
          assert(!this.hasPlugin("jsx"));
          typeCast = this.tryParse(function () {
            var _get10;

            return (_get10 = _get(_getPrototypeOf(_class3.prototype), "parseMaybeAssign", _this35)).call.apply(_get10, [_this35].concat(args));
          }, state);
          if (!typeCast.error) return typeCast.node;
        }

        if ((_jsx2 = jsx) == null ? void 0 : _jsx2.node) {
          this.state = jsx.failState;
          return jsx.node;
        }

        if (arrow.node) {
          this.state = arrow.failState;
          return arrow.node;
        }

        if ((_typeCast = typeCast) == null ? void 0 : _typeCast.node) {
          this.state = typeCast.failState;
          return typeCast.node;
        }

        if ((_jsx3 = jsx) == null ? void 0 : _jsx3.thrown) throw jsx.error;
        if (arrow.thrown) throw arrow.error;
        if ((_typeCast2 = typeCast) == null ? void 0 : _typeCast2.thrown) throw typeCast.error;
        throw ((_jsx4 = jsx) == null ? void 0 : _jsx4.error) || arrow.error || ((_typeCast3 = typeCast) == null ? void 0 : _typeCast3.error);
      }
    }, {
      key: "parseMaybeUnary",
      value: function parseMaybeUnary(refExpressionErrors) {
        if (!this.hasPlugin("jsx") && this.isRelational("<")) {
          return this.tsParseTypeAssertion();
        } else {
          return _get(_getPrototypeOf(_class3.prototype), "parseMaybeUnary", this).call(this, refExpressionErrors);
        }
      }
    }, {
      key: "parseArrow",
      value: function parseArrow(node) {
        var _this36 = this;

        if (this.match(types.colon)) {
          var result = this.tryParse(function (abort) {
            var returnType = _this36.tsParseTypeOrTypePredicateAnnotation(types.colon);

            if (_this36.canInsertSemicolon() || !_this36.match(types.arrow)) abort();
            return returnType;
          });
          if (result.aborted) return;

          if (!result.thrown) {
            if (result.error) this.state = result.failState;
            node.returnType = result.node;
          }
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseArrow", this).call(this, node);
      }
    }, {
      key: "parseAssignableListItemTypes",
      value: function parseAssignableListItemTypes(param) {
        if (this.eat(types.question)) {
          if (param.type !== "Identifier" && !this.state.isDeclareContext && !this.state.inType) {
            this.raise(param.start, TSErrors.PatternIsOptional);
          }

          param.optional = true;
        }

        var type = this.tsTryParseTypeAnnotation();
        if (type) param.typeAnnotation = type;
        this.resetEndLocation(param);
        return param;
      }
    }, {
      key: "toAssignable",
      value: function toAssignable(node) {
        var isLHS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        switch (node.type) {
          case "TSTypeCastExpression":
            return _get(_getPrototypeOf(_class3.prototype), "toAssignable", this).call(this, this.typeCastToParameter(node), isLHS);

          case "TSParameterProperty":
            return _get(_getPrototypeOf(_class3.prototype), "toAssignable", this).call(this, node, isLHS);

          case "TSAsExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            node.expression = this.toAssignable(node.expression, isLHS);
            return node;

          default:
            return _get(_getPrototypeOf(_class3.prototype), "toAssignable", this).call(this, node, isLHS);
        }
      }
    }, {
      key: "checkLVal",
      value: function checkLVal(expr, contextDescription) {
        var _get11;

        for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
          args[_key10 - 2] = arguments[_key10];
        }

        switch (expr.type) {
          case "TSTypeCastExpression":
            return;

          case "TSParameterProperty":
            this.checkLVal.apply(this, [expr.parameter, "parameter property"].concat(args));
            return;

          case "TSAsExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            this.checkLVal.apply(this, [expr.expression, contextDescription].concat(args));
            return;

          default:
            (_get11 = _get(_getPrototypeOf(_class3.prototype), "checkLVal", this)).call.apply(_get11, [this, expr, contextDescription].concat(args));

            return;
        }
      }
    }, {
      key: "parseBindingAtom",
      value: function parseBindingAtom() {
        switch (this.state.type) {
          case types._this:
            return this.parseIdentifier(true);

          default:
            return _get(_getPrototypeOf(_class3.prototype), "parseBindingAtom", this).call(this);
        }
      }
    }, {
      key: "parseMaybeDecoratorArguments",
      value: function parseMaybeDecoratorArguments(expr) {
        if (this.isRelational("<")) {
          var typeArguments = this.tsParseTypeArguments();

          if (this.match(types.parenL)) {
            var call = _get(_getPrototypeOf(_class3.prototype), "parseMaybeDecoratorArguments", this).call(this, expr);

            call.typeParameters = typeArguments;
            return call;
          }

          this.unexpected(this.state.start, types.parenL);
        }

        return _get(_getPrototypeOf(_class3.prototype), "parseMaybeDecoratorArguments", this).call(this, expr);
      }
    }, {
      key: "isClassMethod",
      value: function isClassMethod() {
        return this.isRelational("<") || _get(_getPrototypeOf(_class3.prototype), "isClassMethod", this).call(this);
      }
    }, {
      key: "isClassProperty",
      value: function isClassProperty() {
        return this.match(types.bang) || this.match(types.colon) || _get(_getPrototypeOf(_class3.prototype), "isClassProperty", this).call(this);
      }
    }, {
      key: "parseMaybeDefault",
      value: function parseMaybeDefault() {
        var _get12;

        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          args[_key11] = arguments[_key11];
        }

        var node = (_get12 = _get(_getPrototypeOf(_class3.prototype), "parseMaybeDefault", this)).call.apply(_get12, [this].concat(args));

        if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
          this.raise(node.typeAnnotation.start, TSErrors.TypeAnnotationAfterAssign);
        }

        return node;
      }
    }, {
      key: "getTokenFromCode",
      value: function getTokenFromCode(code) {
        if (this.state.inType && (code === 62 || code === 60)) {
          return this.finishOp(types.relational, 1);
        } else {
          return _get(_getPrototypeOf(_class3.prototype), "getTokenFromCode", this).call(this, code);
        }
      }
    }, {
      key: "reScan_lt_gt",
      value: function reScan_lt_gt() {
        if (this.match(types.relational)) {
          var code = this.input.charCodeAt(this.state.start);

          if (code === 60 || code === 62) {
            this.state.pos -= 1;
            this.readToken_lt_gt(code);
          }
        }
      }
    }, {
      key: "toAssignableList",
      value: function toAssignableList(exprList) {
        for (var i = 0; i < exprList.length; i++) {
          var expr = exprList[i];
          if (!expr) continue;

          switch (expr.type) {
            case "TSTypeCastExpression":
              exprList[i] = this.typeCastToParameter(expr);
              break;

            case "TSAsExpression":
            case "TSTypeAssertion":
              if (!this.state.maybeInArrowParameters) {
                exprList[i] = this.typeCastToParameter(expr);
              } else {
                this.raise(expr.start, TSErrors.UnexpectedTypeCastInParameter);
              }

              break;
          }
        }

        return _get(_getPrototypeOf(_class3.prototype), "toAssignableList", this).apply(this, arguments);
      }
    }, {
      key: "typeCastToParameter",
      value: function typeCastToParameter(node) {
        node.expression.typeAnnotation = node.typeAnnotation;
        this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
        return node.expression;
      }
    }, {
      key: "shouldParseArrow",
      value: function shouldParseArrow() {
        return this.match(types.colon) || _get(_getPrototypeOf(_class3.prototype), "shouldParseArrow", this).call(this);
      }
    }, {
      key: "shouldParseAsyncArrow",
      value: function shouldParseAsyncArrow() {
        return this.match(types.colon) || _get(_getPrototypeOf(_class3.prototype), "shouldParseAsyncArrow", this).call(this);
      }
    }, {
      key: "canHaveLeadingDecorator",
      value: function canHaveLeadingDecorator() {
        return _get(_getPrototypeOf(_class3.prototype), "canHaveLeadingDecorator", this).call(this) || this.isAbstractClass();
      }
    }, {
      key: "jsxParseOpeningElementAfterName",
      value: function jsxParseOpeningElementAfterName(node) {
        var _this37 = this;

        if (this.isRelational("<")) {
          var typeArguments = this.tsTryParseAndCatch(function () {
            return _this37.tsParseTypeArguments();
          });
          if (typeArguments) node.typeParameters = typeArguments;
        }

        return _get(_getPrototypeOf(_class3.prototype), "jsxParseOpeningElementAfterName", this).call(this, node);
      }
    }, {
      key: "getGetterSetterExpectedParamCount",
      value: function getGetterSetterExpectedParamCount(method) {
        var baseCount = _get(_getPrototypeOf(_class3.prototype), "getGetterSetterExpectedParamCount", this).call(this, method);

        var params = this.getObjectOrClassMethodParams(method);
        var firstParam = params[0];
        var hasContextParam = firstParam && firstParam.type === "Identifier" && firstParam.name === "this";
        return hasContextParam ? baseCount + 1 : baseCount;
      }
    }, {
      key: "parseCatchClauseParam",
      value: function parseCatchClauseParam() {
        var param = _get(_getPrototypeOf(_class3.prototype), "parseCatchClauseParam", this).call(this);

        var type = this.tsTryParseTypeAnnotation();

        if (type) {
          param.typeAnnotation = type;
          this.resetEndLocation(param);
        }

        return param;
      }
    }, {
      key: "tsInDeclareContext",
      value: function tsInDeclareContext(cb) {
        var oldIsDeclareContext = this.state.isDeclareContext;
        this.state.isDeclareContext = true;

        try {
          return cb();
        } finally {
          this.state.isDeclareContext = oldIsDeclareContext;
        }
      }
    }]);

    return _class3;
  }(superClass);
};

types.placeholder = new TokenType("%%", {
  startsExpr: true
});

var placeholders = function (superClass) {
  return /*#__PURE__*/function (_superClass5) {
    _inherits(_class4, _superClass5);

    var _super9 = _createSuper(_class4);

    function _class4() {
      _classCallCheck(this, _class4);

      return _super9.apply(this, arguments);
    }

    _createClass(_class4, [{
      key: "parsePlaceholder",
      value: function parsePlaceholder(expectedNode) {
        if (this.match(types.placeholder)) {
          var node = this.startNode();
          this.next();
          this.assertNoSpace("Unexpected space in placeholder.");
          node.name = _get(_getPrototypeOf(_class4.prototype), "parseIdentifier", this).call(this, true);
          this.assertNoSpace("Unexpected space in placeholder.");
          this.expect(types.placeholder);
          return this.finishPlaceholder(node, expectedNode);
        }
      }
    }, {
      key: "finishPlaceholder",
      value: function finishPlaceholder(node, expectedNode) {
        var isFinished = !!(node.expectedNode && node.type === "Placeholder");
        node.expectedNode = expectedNode;
        return isFinished ? node : this.finishNode(node, "Placeholder");
      }
    }, {
      key: "getTokenFromCode",
      value: function getTokenFromCode(code) {
        if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
          return this.finishOp(types.placeholder, 2);
        }

        return _get(_getPrototypeOf(_class4.prototype), "getTokenFromCode", this).apply(this, arguments);
      }
    }, {
      key: "parseExprAtom",
      value: function parseExprAtom() {
        return this.parsePlaceholder("Expression") || _get(_getPrototypeOf(_class4.prototype), "parseExprAtom", this).apply(this, arguments);
      }
    }, {
      key: "parseIdentifier",
      value: function parseIdentifier() {
        return this.parsePlaceholder("Identifier") || _get(_getPrototypeOf(_class4.prototype), "parseIdentifier", this).apply(this, arguments);
      }
    }, {
      key: "checkReservedWord",
      value: function checkReservedWord(word) {
        if (word !== undefined) _get(_getPrototypeOf(_class4.prototype), "checkReservedWord", this).apply(this, arguments);
      }
    }, {
      key: "parseBindingAtom",
      value: function parseBindingAtom() {
        return this.parsePlaceholder("Pattern") || _get(_getPrototypeOf(_class4.prototype), "parseBindingAtom", this).apply(this, arguments);
      }
    }, {
      key: "checkLVal",
      value: function checkLVal(expr) {
        if (expr.type !== "Placeholder") _get(_getPrototypeOf(_class4.prototype), "checkLVal", this).apply(this, arguments);
      }
    }, {
      key: "toAssignable",
      value: function toAssignable(node) {
        if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
          node.expectedNode = "Pattern";
          return node;
        }

        return _get(_getPrototypeOf(_class4.prototype), "toAssignable", this).apply(this, arguments);
      }
    }, {
      key: "verifyBreakContinue",
      value: function verifyBreakContinue(node) {
        if (node.label && node.label.type === "Placeholder") return;

        _get(_getPrototypeOf(_class4.prototype), "verifyBreakContinue", this).apply(this, arguments);
      }
    }, {
      key: "parseExpressionStatement",
      value: function parseExpressionStatement(node, expr) {
        if (expr.type !== "Placeholder" || expr.extra && expr.extra.parenthesized) {
          return _get(_getPrototypeOf(_class4.prototype), "parseExpressionStatement", this).apply(this, arguments);
        }

        if (this.match(types.colon)) {
          var stmt = node;
          stmt.label = this.finishPlaceholder(expr, "Identifier");
          this.next();
          stmt.body = this.parseStatement("label");
          return this.finishNode(stmt, "LabeledStatement");
        }

        this.semicolon();
        node.name = expr.name;
        return this.finishPlaceholder(node, "Statement");
      }
    }, {
      key: "parseBlock",
      value: function parseBlock() {
        return this.parsePlaceholder("BlockStatement") || _get(_getPrototypeOf(_class4.prototype), "parseBlock", this).apply(this, arguments);
      }
    }, {
      key: "parseFunctionId",
      value: function parseFunctionId() {
        return this.parsePlaceholder("Identifier") || _get(_getPrototypeOf(_class4.prototype), "parseFunctionId", this).apply(this, arguments);
      }
    }, {
      key: "parseClass",
      value: function parseClass(node, isStatement, optionalId) {
        var type = isStatement ? "ClassDeclaration" : "ClassExpression";
        this.next();
        this.takeDecorators(node);
        var oldStrict = this.state.strict;
        var placeholder = this.parsePlaceholder("Identifier");

        if (placeholder) {
          if (this.match(types._extends) || this.match(types.placeholder) || this.match(types.braceL)) {
            node.id = placeholder;
          } else if (optionalId || !isStatement) {
            node.id = null;
            node.body = this.finishPlaceholder(placeholder, "ClassBody");
            return this.finishNode(node, type);
          } else {
            this.unexpected(null, "A class name is required");
          }
        } else {
          this.parseClassId(node, isStatement, optionalId);
        }

        this.parseClassSuper(node);
        node.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!node.superClass, oldStrict);
        return this.finishNode(node, type);
      }
    }, {
      key: "parseExport",
      value: function parseExport(node) {
        var placeholder = this.parsePlaceholder("Identifier");
        if (!placeholder) return _get(_getPrototypeOf(_class4.prototype), "parseExport", this).apply(this, arguments);

        if (!this.isContextual("from") && !this.match(types.comma)) {
          node.specifiers = [];
          node.source = null;
          node.declaration = this.finishPlaceholder(placeholder, "Declaration");
          return this.finishNode(node, "ExportNamedDeclaration");
        }

        this.expectPlugin("exportDefaultFrom");
        var specifier = this.startNode();
        specifier.exported = placeholder;
        node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
        return _get(_getPrototypeOf(_class4.prototype), "parseExport", this).call(this, node);
      }
    }, {
      key: "isExportDefaultSpecifier",
      value: function isExportDefaultSpecifier() {
        if (this.match(types._default)) {
          var next = this.nextTokenStart();

          if (this.isUnparsedContextual(next, "from")) {
            if (this.input.startsWith(types.placeholder.label, this.nextTokenStartSince(next + 4))) {
              return true;
            }
          }
        }

        return _get(_getPrototypeOf(_class4.prototype), "isExportDefaultSpecifier", this).call(this);
      }
    }, {
      key: "maybeParseExportDefaultSpecifier",
      value: function maybeParseExportDefaultSpecifier(node) {
        if (node.specifiers && node.specifiers.length > 0) {
          return true;
        }

        return _get(_getPrototypeOf(_class4.prototype), "maybeParseExportDefaultSpecifier", this).apply(this, arguments);
      }
    }, {
      key: "checkExport",
      value: function checkExport(node) {
        var {
          specifiers: specifiers
        } = node;

        if (specifiers == null ? void 0 : specifiers.length) {
          node.specifiers = specifiers.filter(function (node) {
            return node.exported.type === "Placeholder";
          });
        }

        _get(_getPrototypeOf(_class4.prototype), "checkExport", this).call(this, node);

        node.specifiers = specifiers;
      }
    }, {
      key: "parseImport",
      value: function parseImport(node) {
        var placeholder = this.parsePlaceholder("Identifier");
        if (!placeholder) return _get(_getPrototypeOf(_class4.prototype), "parseImport", this).apply(this, arguments);
        node.specifiers = [];

        if (!this.isContextual("from") && !this.match(types.comma)) {
          node.source = this.finishPlaceholder(placeholder, "StringLiteral");
          this.semicolon();
          return this.finishNode(node, "ImportDeclaration");
        }

        var specifier = this.startNodeAtNode(placeholder);
        specifier.local = placeholder;
        this.finishNode(specifier, "ImportDefaultSpecifier");
        node.specifiers.push(specifier);

        if (this.eat(types.comma)) {
          var hasStarImport = this.maybeParseStarImportSpecifier(node);
          if (!hasStarImport) this.parseNamedImportSpecifiers(node);
        }

        this.expectContextual("from");
        node.source = this.parseImportSource();
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration");
      }
    }, {
      key: "parseImportSource",
      value: function parseImportSource() {
        return this.parsePlaceholder("StringLiteral") || _get(_getPrototypeOf(_class4.prototype), "parseImportSource", this).apply(this, arguments);
      }
    }]);

    return _class4;
  }(superClass);
};

var v8intrinsic = function (superClass) {
  return /*#__PURE__*/function (_superClass6) {
    _inherits(_class5, _superClass6);

    var _super10 = _createSuper(_class5);

    function _class5() {
      _classCallCheck(this, _class5);

      return _super10.apply(this, arguments);
    }

    _createClass(_class5, [{
      key: "parseV8Intrinsic",
      value: function parseV8Intrinsic() {
        if (this.match(types.modulo)) {
          var v8IntrinsicStart = this.state.start;
          var node = this.startNode();
          this.eat(types.modulo);

          if (this.match(types.name)) {
            var name = this.parseIdentifierName(this.state.start);
            var identifier = this.createIdentifier(node, name);
            identifier.type = "V8IntrinsicIdentifier";

            if (this.match(types.parenL)) {
              return identifier;
            }
          }

          this.unexpected(v8IntrinsicStart);
        }
      }
    }, {
      key: "parseExprAtom",
      value: function parseExprAtom() {
        return this.parseV8Intrinsic() || _get(_getPrototypeOf(_class5.prototype), "parseExprAtom", this).apply(this, arguments);
      }
    }]);

    return _class5;
  }(superClass);
};

function hasPlugin(plugins, name) {
  return plugins.some(function (plugin) {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });
}

function getPluginOption(plugins, name, option) {
  var plugin = plugins.find(function (plugin) {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });

  if (plugin && Array.isArray(plugin)) {
    return plugin[1][option];
  }

  return null;
}

var PIPELINE_PROPOSALS = ["minimal", "smart", "fsharp"];
var RECORD_AND_TUPLE_SYNTAX_TYPES = ["hash", "bar"];

function validatePlugins(plugins) {
  if (hasPlugin(plugins, "decorators")) {
    if (hasPlugin(plugins, "decorators-legacy")) {
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    }

    var decoratorsBeforeExport = getPluginOption(plugins, "decorators", "decoratorsBeforeExport");

    if (decoratorsBeforeExport == null) {
      throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option," + " whose value must be a boolean. If you are migrating from" + " Babylon/Babel 6 or want to use the old decorators proposal, you" + " should use the 'decorators-legacy' plugin instead of 'decorators'.");
    } else if (typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
  }

  if (hasPlugin(plugins, "flow") && hasPlugin(plugins, "typescript")) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }

  if (hasPlugin(plugins, "placeholders") && hasPlugin(plugins, "v8intrinsic")) {
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  }

  if (hasPlugin(plugins, "pipelineOperator") && !PIPELINE_PROPOSALS.includes(getPluginOption(plugins, "pipelineOperator", "proposal"))) {
    throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: " + PIPELINE_PROPOSALS.map(function (p) {
      return "'".concat(p, "'");
    }).join(", "));
  }

  if (hasPlugin(plugins, "moduleAttributes")) {
    if (hasPlugin(plugins, "importAssertions")) {
      throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
    }

    var moduleAttributesVerionPluginOption = getPluginOption(plugins, "moduleAttributes", "version");

    if (moduleAttributesVerionPluginOption !== "may-2020") {
      throw new Error("The 'moduleAttributes' plugin requires a 'version' option," + " representing the last proposal update. Currently, the" + " only supported value is 'may-2020'.");
    }
  }

  if (hasPlugin(plugins, "recordAndTuple") && !RECORD_AND_TUPLE_SYNTAX_TYPES.includes(getPluginOption(plugins, "recordAndTuple", "syntaxType"))) {
    throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + RECORD_AND_TUPLE_SYNTAX_TYPES.map(function (p) {
      return "'".concat(p, "'");
    }).join(", "));
  }
}

var mixinPlugins = {
  estree: estree,
  jsx: jsx,
  flow: flow,
  typescript: typescript,
  v8intrinsic: v8intrinsic,
  placeholders: placeholders
};
var mixinPluginNames = Object.keys(mixinPlugins);
var defaultOptions = {
  sourceType: "script",
  sourceFilename: undefined,
  startLine: 1,
  allowAwaitOutsideFunction: false,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowSuperOutsideMethod: false,
  allowUndeclaredExports: false,
  plugins: [],
  strictMode: null,
  ranges: false,
  tokens: false,
  createParenthesizedExpressions: false,
  errorRecovery: false
};

function getOptions(opts) {
  var options = {};

  for (var _i = 0, _Object$keys = Object.keys(defaultOptions); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    options[key] = opts && opts[key] != null ? opts[key] : defaultOptions[key];
  }

  return options;
}

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);

    this.strict = void 0;
    this.curLine = void 0;
    this.startLoc = void 0;
    this.endLoc = void 0;
    this.errors = [];
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = [];
    this.maybeInArrowParameters = false;
    this.inPipeline = false;
    this.inType = false;
    this.noAnonFunctionType = false;
    this.inPropertyName = false;
    this.hasFlowComment = false;
    this.isIterator = false;
    this.isDeclareContext = false;
    this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };
    this.soloAwait = false;
    this.inFSharpPipelineDirectBody = false;
    this.labels = [];
    this.decoratorStack = [[]];
    this.comments = [];
    this.trailingComments = [];
    this.leadingComments = [];
    this.commentStack = [];
    this.commentPreviousNode = null;
    this.pos = 0;
    this.lineStart = 0;
    this.type = types.eof;
    this.value = null;
    this.start = 0;
    this.end = 0;
    this.lastTokEndLoc = null;
    this.lastTokStartLoc = null;
    this.lastTokStart = 0;
    this.lastTokEnd = 0;
    this.context = [types$1.braceStatement];
    this.exprAllowed = true;
    this.containsEsc = false;
    this.octalPositions = [];
    this.exportedIdentifiers = [];
    this.tokensLength = 0;
  }

  _createClass(State, [{
    key: "init",
    value: function init(options) {
      this.strict = options.strictMode === false ? false : options.sourceType === "module";
      this.curLine = options.startLine;
      this.startLoc = this.endLoc = this.curPosition();
    }
  }, {
    key: "curPosition",
    value: function curPosition() {
      return new Position(this.curLine, this.pos - this.lineStart);
    }
  }, {
    key: "clone",
    value: function clone(skipArrays) {
      var state = new State();
      var keys = Object.keys(this);

      for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
        var val = this[key];

        if (!skipArrays && Array.isArray(val)) {
          val = val.slice();
        }

        state[key] = val;
      }

      return state;
    }
  }]);

  return State;
}();

var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};

var VALID_REGEX_FLAGS = new Set(["g", "m", "s", "i", "y", "u"]);
var forbiddenNumericSeparatorSiblings = {
  decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
  hex: [46, 88, 95, 120]
};
var allowedNumericSeparatorSiblings = {};
allowedNumericSeparatorSiblings.bin = [48, 49];
allowedNumericSeparatorSiblings.oct = [].concat(_toConsumableArray(allowedNumericSeparatorSiblings.bin), [50, 51, 52, 53, 54, 55]);
allowedNumericSeparatorSiblings.dec = [].concat(_toConsumableArray(allowedNumericSeparatorSiblings.oct), [56, 57]);
allowedNumericSeparatorSiblings.hex = [].concat(_toConsumableArray(allowedNumericSeparatorSiblings.dec), [65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102]);

var Token = function Token(state) {
  _classCallCheck(this, Token);

  this.type = state.type;
  this.value = state.value;
  this.start = state.start;
  this.end = state.end;
  this.loc = new SourceLocation(state.startLoc, state.endLoc);
};

var Tokenizer = /*#__PURE__*/function (_ParserError) {
  _inherits(Tokenizer, _ParserError);

  var _super11 = _createSuper(Tokenizer);

  function Tokenizer(options, input) {
    var _this38;

    _classCallCheck(this, Tokenizer);

    _this38 = _super11.call(this);
    _this38.isLookahead = void 0;
    _this38.tokens = [];
    _this38.state = new State();

    _this38.state.init(options);

    _this38.input = input;
    _this38.length = input.length;
    _this38.isLookahead = false;
    return _this38;
  }

  _createClass(Tokenizer, [{
    key: "pushToken",
    value: function pushToken(token) {
      this.tokens.length = this.state.tokensLength;
      this.tokens.push(token);
      ++this.state.tokensLength;
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.isLookahead) {
        this.checkKeywordEscapes();

        if (this.options.tokens) {
          this.pushToken(new Token(this.state));
        }
      }

      this.state.lastTokEnd = this.state.end;
      this.state.lastTokStart = this.state.start;
      this.state.lastTokEndLoc = this.state.endLoc;
      this.state.lastTokStartLoc = this.state.startLoc;
      this.nextToken();
    }
  }, {
    key: "eat",
    value: function eat(type) {
      if (this.match(type)) {
        this.next();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "match",
    value: function match(type) {
      return this.state.type === type;
    }
  }, {
    key: "lookahead",
    value: function lookahead() {
      var old = this.state;
      this.state = old.clone(true);
      this.isLookahead = true;
      this.next();
      this.isLookahead = false;
      var curr = this.state;
      this.state = old;
      return curr;
    }
  }, {
    key: "nextTokenStart",
    value: function nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }
  }, {
    key: "nextTokenStartSince",
    value: function nextTokenStartSince(pos) {
      skipWhiteSpace.lastIndex = pos;
      var skip = skipWhiteSpace.exec(this.input);
      return pos + skip[0].length;
    }
  }, {
    key: "lookaheadCharCode",
    value: function lookaheadCharCode() {
      return this.input.charCodeAt(this.nextTokenStart());
    }
  }, {
    key: "setStrict",
    value: function setStrict(strict) {
      this.state.strict = strict;
      if (!this.match(types.num) && !this.match(types.string)) return;
      this.state.pos = this.state.start;

      while (this.state.pos < this.state.lineStart) {
        this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
        --this.state.curLine;
      }

      this.nextToken();
    }
  }, {
    key: "curContext",
    value: function curContext() {
      return this.state.context[this.state.context.length - 1];
    }
  }, {
    key: "nextToken",
    value: function nextToken() {
      var curContext = this.curContext();
      if (!(curContext == null ? void 0 : curContext.preserveSpace)) this.skipSpace();
      this.state.octalPositions = [];
      this.state.start = this.state.pos;
      this.state.startLoc = this.state.curPosition();

      if (this.state.pos >= this.length) {
        this.finishToken(types.eof);
        return;
      }

      var override = curContext == null ? void 0 : curContext.override;

      if (override) {
        override(this);
      } else {
        this.getTokenFromCode(this.input.codePointAt(this.state.pos));
      }
    }
  }, {
    key: "pushComment",
    value: function pushComment(block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "CommentBlock" : "CommentLine",
        value: text,
        start: start,
        end: end,
        loc: new SourceLocation(startLoc, endLoc)
      };
      if (this.options.tokens) this.pushToken(comment);
      this.state.comments.push(comment);
      this.addComment(comment);
    }
  }, {
    key: "skipBlockComment",
    value: function skipBlockComment() {
      var startLoc = this.state.curPosition();
      var start = this.state.pos;
      var end = this.input.indexOf("*/", this.state.pos + 2);
      if (end === -1) throw this.raise(start, ErrorMessages.UnterminatedComment);
      this.state.pos = end + 2;
      lineBreakG.lastIndex = start;
      var match;

      while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
        ++this.state.curLine;
        this.state.lineStart = match.index + match[0].length;
      }

      if (this.isLookahead) return;
      this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
    }
  }, {
    key: "skipLineComment",
    value: function skipLineComment(startSkip) {
      var start = this.state.pos;
      var startLoc = this.state.curPosition();
      var ch = this.input.charCodeAt(this.state.pos += startSkip);

      if (this.state.pos < this.length) {
        while (!isNewLine(ch) && ++this.state.pos < this.length) {
          ch = this.input.charCodeAt(this.state.pos);
        }
      }

      if (this.isLookahead) return;
      this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
    }
  }, {
    key: "skipSpace",
    value: function skipSpace() {
      loop: while (this.state.pos < this.length) {
        var ch = this.input.charCodeAt(this.state.pos);

        switch (ch) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;

          case 13:
            if (this.input.charCodeAt(this.state.pos + 1) === 10) {
              ++this.state.pos;
            }

          case 10:
          case 8232:
          case 8233:
            ++this.state.pos;
            ++this.state.curLine;
            this.state.lineStart = this.state.pos;
            break;

          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42:
                this.skipBlockComment();
                break;

              case 47:
                this.skipLineComment(2);
                break;

              default:
                break loop;
            }

            break;

          default:
            if (isWhitespace(ch)) {
              ++this.state.pos;
            } else {
              break loop;
            }

        }
      }
    }
  }, {
    key: "finishToken",
    value: function finishToken(type, val) {
      this.state.end = this.state.pos;
      this.state.endLoc = this.state.curPosition();
      var prevType = this.state.type;
      this.state.type = type;
      this.state.value = val;
      if (!this.isLookahead) this.updateContext(prevType);
    }
  }, {
    key: "readToken_numberSign",
    value: function readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter()) {
        return;
      }

      var nextPos = this.state.pos + 1;
      var next = this.input.charCodeAt(nextPos);

      if (next >= 48 && next <= 57) {
        throw this.raise(this.state.pos, ErrorMessages.UnexpectedDigitAfterHash);
      }

      if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
        this.expectPlugin("recordAndTuple");

        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "hash") {
          throw this.raise(this.state.pos, next === 123 ? ErrorMessages.RecordExpressionHashIncorrectStartSyntaxType : ErrorMessages.TupleExpressionHashIncorrectStartSyntaxType);
        }

        if (next === 123) {
          this.finishToken(types.braceHashL);
        } else {
          this.finishToken(types.bracketHashL);
        }

        this.state.pos += 2;
      } else {
        this.finishOp(types.hash, 1);
      }
    }
  }, {
    key: "readToken_dot",
    value: function readToken_dot() {
      var next = this.input.charCodeAt(this.state.pos + 1);

      if (next >= 48 && next <= 57) {
        this.readNumber(true);
        return;
      }

      if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
        this.state.pos += 3;
        this.finishToken(types.ellipsis);
      } else {
        ++this.state.pos;
        this.finishToken(types.dot);
      }
    }
  }, {
    key: "readToken_slash",
    value: function readToken_slash() {
      if (this.state.exprAllowed && !this.state.inType) {
        ++this.state.pos;
        this.readRegexp();
        return;
      }

      var next = this.input.charCodeAt(this.state.pos + 1);

      if (next === 61) {
        this.finishOp(types.assign, 2);
      } else {
        this.finishOp(types.slash, 1);
      }
    }
  }, {
    key: "readToken_interpreter",
    value: function readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return false;
      var ch = this.input.charCodeAt(this.state.pos + 1);
      if (ch !== 33) return false;
      var start = this.state.pos;
      this.state.pos += 1;

      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }

      var value = this.input.slice(start + 2, this.state.pos);
      this.finishToken(types.interpreterDirective, value);
      return true;
    }
  }, {
    key: "readToken_mult_modulo",
    value: function readToken_mult_modulo(code) {
      var type = code === 42 ? types.star : types.modulo;
      var width = 1;
      var next = this.input.charCodeAt(this.state.pos + 1);
      var exprAllowed = this.state.exprAllowed;

      if (code === 42 && next === 42) {
        width++;
        next = this.input.charCodeAt(this.state.pos + 2);
        type = types.exponent;
      }

      if (next === 61 && !exprAllowed) {
        width++;
        type = types.assign;
      }

      this.finishOp(type, width);
    }
  }, {
    key: "readToken_pipe_amp",
    value: function readToken_pipe_amp(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);

      if (next === code) {
        if (this.input.charCodeAt(this.state.pos + 2) === 61) {
          this.finishOp(types.assign, 3);
        } else {
          this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
        }

        return;
      }

      if (code === 124) {
        if (next === 62) {
          this.finishOp(types.pipeline, 2);
          return;
        }

        if (this.hasPlugin("recordAndTuple") && next === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(this.state.pos, ErrorMessages.RecordExpressionBarIncorrectEndSyntaxType);
          }

          this.finishOp(types.braceBarR, 2);
          return;
        }

        if (this.hasPlugin("recordAndTuple") && next === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(this.state.pos, ErrorMessages.TupleExpressionBarIncorrectEndSyntaxType);
          }

          this.finishOp(types.bracketBarR, 2);
          return;
        }
      }

      if (next === 61) {
        this.finishOp(types.assign, 2);
        return;
      }

      this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
    }
  }, {
    key: "readToken_caret",
    value: function readToken_caret() {
      var next = this.input.charCodeAt(this.state.pos + 1);

      if (next === 61) {
        this.finishOp(types.assign, 2);
      } else {
        this.finishOp(types.bitwiseXOR, 1);
      }
    }
  }, {
    key: "readToken_plus_min",
    value: function readToken_plus_min(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);

      if (next === code) {
        if (next === 45 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 62 && (this.state.lastTokEnd === 0 || this.hasPrecedingLineBreak())) {
          this.skipLineComment(3);
          this.skipSpace();
          this.nextToken();
          return;
        }

        this.finishOp(types.incDec, 2);
        return;
      }

      if (next === 61) {
        this.finishOp(types.assign, 2);
      } else {
        this.finishOp(types.plusMin, 1);
      }
    }
  }, {
    key: "readToken_lt_gt",
    value: function readToken_lt_gt(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);
      var size = 1;

      if (next === code) {
        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;

        if (this.input.charCodeAt(this.state.pos + size) === 61) {
          this.finishOp(types.assign, size + 1);
          return;
        }

        this.finishOp(types.bitShift, size);
        return;
      }

      if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
        this.skipLineComment(4);
        this.skipSpace();
        this.nextToken();
        return;
      }

      if (next === 61) {
        size = 2;
      }

      this.finishOp(types.relational, size);
    }
  }, {
    key: "readToken_eq_excl",
    value: function readToken_eq_excl(code) {
      var next = this.input.charCodeAt(this.state.pos + 1);

      if (next === 61) {
        this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }

      if (code === 61 && next === 62) {
        this.state.pos += 2;
        this.finishToken(types.arrow);
        return;
      }

      this.finishOp(code === 61 ? types.eq : types.bang, 1);
    }
  }, {
    key: "readToken_question",
    value: function readToken_question() {
      var next = this.input.charCodeAt(this.state.pos + 1);
      var next2 = this.input.charCodeAt(this.state.pos + 2);

      if (next === 63) {
        if (next2 === 61) {
          this.finishOp(types.assign, 3);
        } else {
          this.finishOp(types.nullishCoalescing, 2);
        }
      } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
        this.state.pos += 2;
        this.finishToken(types.questionDot);
      } else {
        ++this.state.pos;
        this.finishToken(types.question);
      }
    }
  }, {
    key: "getTokenFromCode",
    value: function getTokenFromCode(code) {
      switch (code) {
        case 46:
          this.readToken_dot();
          return;

        case 40:
          ++this.state.pos;
          this.finishToken(types.parenL);
          return;

        case 41:
          ++this.state.pos;
          this.finishToken(types.parenR);
          return;

        case 59:
          ++this.state.pos;
          this.finishToken(types.semi);
          return;

        case 44:
          ++this.state.pos;
          this.finishToken(types.comma);
          return;

        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(this.state.pos, ErrorMessages.TupleExpressionBarIncorrectStartSyntaxType);
            }

            this.finishToken(types.bracketBarL);
            this.state.pos += 2;
          } else {
            ++this.state.pos;
            this.finishToken(types.bracketL);
          }

          return;

        case 93:
          ++this.state.pos;
          this.finishToken(types.bracketR);
          return;

        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(this.state.pos, ErrorMessages.RecordExpressionBarIncorrectStartSyntaxType);
            }

            this.finishToken(types.braceBarL);
            this.state.pos += 2;
          } else {
            ++this.state.pos;
            this.finishToken(types.braceL);
          }

          return;

        case 125:
          ++this.state.pos;
          this.finishToken(types.braceR);
          return;

        case 58:
          if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
            this.finishOp(types.doubleColon, 2);
          } else {
            ++this.state.pos;
            this.finishToken(types.colon);
          }

          return;

        case 63:
          this.readToken_question();
          return;

        case 96:
          ++this.state.pos;
          this.finishToken(types.backQuote);
          return;

        case 48:
          {
            var next = this.input.charCodeAt(this.state.pos + 1);

            if (next === 120 || next === 88) {
              this.readRadixNumber(16);
              return;
            }

            if (next === 111 || next === 79) {
              this.readRadixNumber(8);
              return;
            }

            if (next === 98 || next === 66) {
              this.readRadixNumber(2);
              return;
            }
          }

        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(false);
          return;

        case 34:
        case 39:
          this.readString(code);
          return;

        case 47:
          this.readToken_slash();
          return;

        case 37:
        case 42:
          this.readToken_mult_modulo(code);
          return;

        case 124:
        case 38:
          this.readToken_pipe_amp(code);
          return;

        case 94:
          this.readToken_caret();
          return;

        case 43:
        case 45:
          this.readToken_plus_min(code);
          return;

        case 60:
        case 62:
          this.readToken_lt_gt(code);
          return;

        case 61:
        case 33:
          this.readToken_eq_excl(code);
          return;

        case 126:
          this.finishOp(types.tilde, 1);
          return;

        case 64:
          ++this.state.pos;
          this.finishToken(types.at);
          return;

        case 35:
          this.readToken_numberSign();
          return;

        case 92:
          this.readWord();
          return;

        default:
          if (isIdentifierStart(code)) {
            this.readWord();
            return;
          }

      }

      throw this.raise(this.state.pos, ErrorMessages.InvalidOrUnexpectedToken, String.fromCodePoint(code));
    }
  }, {
    key: "finishOp",
    value: function finishOp(type, size) {
      var str = this.input.slice(this.state.pos, this.state.pos + size);
      this.state.pos += size;
      this.finishToken(type, str);
    }
  }, {
    key: "readRegexp",
    value: function readRegexp() {
      var start = this.state.pos;
      var escaped, inClass;

      for (;;) {
        if (this.state.pos >= this.length) {
          throw this.raise(start, ErrorMessages.UnterminatedRegExp);
        }

        var ch = this.input.charAt(this.state.pos);

        if (lineBreak.test(ch)) {
          throw this.raise(start, ErrorMessages.UnterminatedRegExp);
        }

        if (escaped) {
          escaped = false;
        } else {
          if (ch === "[") {
            inClass = true;
          } else if (ch === "]" && inClass) {
            inClass = false;
          } else if (ch === "/" && !inClass) {
            break;
          }

          escaped = ch === "\\";
        }

        ++this.state.pos;
      }

      var content = this.input.slice(start, this.state.pos);
      ++this.state.pos;
      var mods = "";

      while (this.state.pos < this.length) {
        var char = this.input[this.state.pos];
        var charCode = this.input.codePointAt(this.state.pos);

        if (VALID_REGEX_FLAGS.has(char)) {
          if (mods.indexOf(char) > -1) {
            this.raise(this.state.pos + 1, ErrorMessages.DuplicateRegExpFlags);
          }
        } else if (isIdentifierChar(charCode) || charCode === 92) {
          this.raise(this.state.pos + 1, ErrorMessages.MalformedRegExpFlags);
        } else {
          break;
        }

        ++this.state.pos;
        mods += char;
      }

      this.finishToken(types.regexp, {
        pattern: content,
        flags: mods
      });
    }
  }, {
    key: "readInt",
    value: function readInt(radix, len, forceLen) {
      var allowNumSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var start = this.state.pos;
      var forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
      var allowedSiblings = radix === 16 ? allowedNumericSeparatorSiblings.hex : radix === 10 ? allowedNumericSeparatorSiblings.dec : radix === 8 ? allowedNumericSeparatorSiblings.oct : allowedNumericSeparatorSiblings.bin;
      var invalid = false;
      var total = 0;

      for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
        var code = this.input.charCodeAt(this.state.pos);
        var val = void 0;

        if (code === 95) {
          var prev = this.input.charCodeAt(this.state.pos - 1);
          var next = this.input.charCodeAt(this.state.pos + 1);

          if (allowedSiblings.indexOf(next) === -1) {
            this.raise(this.state.pos, ErrorMessages.UnexpectedNumericSeparator);
          } else if (forbiddenSiblings.indexOf(prev) > -1 || forbiddenSiblings.indexOf(next) > -1 || Number.isNaN(next)) {
            this.raise(this.state.pos, ErrorMessages.UnexpectedNumericSeparator);
          }

          if (!allowNumSeparator) {
            this.raise(this.state.pos, ErrorMessages.NumericSeparatorInEscapeSequence);
          }

          ++this.state.pos;
          continue;
        }

        if (code >= 97) {
          val = code - 97 + 10;
        } else if (code >= 65) {
          val = code - 65 + 10;
        } else if (_isDigit(code)) {
          val = code - 48;
        } else {
          val = Infinity;
        }

        if (val >= radix) {
          if (this.options.errorRecovery && val <= 9) {
            val = 0;
            this.raise(this.state.start + i + 2, ErrorMessages.InvalidDigit, radix);
          } else if (forceLen) {
            val = 0;
            invalid = true;
          } else {
            break;
          }
        }

        ++this.state.pos;
        total = total * radix + val;
      }

      if (this.state.pos === start || len != null && this.state.pos - start !== len || invalid) {
        return null;
      }

      return total;
    }
  }, {
    key: "readRadixNumber",
    value: function readRadixNumber(radix) {
      var start = this.state.pos;
      var isBigInt = false;
      this.state.pos += 2;
      var val = this.readInt(radix);

      if (val == null) {
        this.raise(this.state.start + 2, ErrorMessages.InvalidDigit, radix);
      }

      var next = this.input.charCodeAt(this.state.pos);

      if (next === 110) {
        ++this.state.pos;
        isBigInt = true;
      } else if (next === 109) {
        throw this.raise(start, ErrorMessages.InvalidDecimal);
      }

      if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
        throw this.raise(this.state.pos, ErrorMessages.NumberIdentifier);
      }

      if (isBigInt) {
        var str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(types.bigint, str);
        return;
      }

      this.finishToken(types.num, val);
    }
  }, {
    key: "readNumber",
    value: function readNumber(startsWithDot) {
      var start = this.state.pos;
      var isFloat = false;
      var isBigInt = false;
      var isDecimal = false;
      var hasExponent = false;
      var isOctal = false;

      if (!startsWithDot && this.readInt(10) === null) {
        this.raise(start, ErrorMessages.InvalidNumber);
      }

      var hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;

      if (hasLeadingZero) {
        var integer = this.input.slice(start, this.state.pos);

        if (this.state.strict) {
          this.raise(start, ErrorMessages.StrictOctalLiteral);
        } else {
          var underscorePos = integer.indexOf("_");

          if (underscorePos > 0) {
            this.raise(underscorePos + start, ErrorMessages.ZeroDigitNumericSeparator);
          }
        }

        isOctal = hasLeadingZero && !/[89]/.test(integer);
      }

      var next = this.input.charCodeAt(this.state.pos);

      if (next === 46 && !isOctal) {
        ++this.state.pos;
        this.readInt(10);
        isFloat = true;
        next = this.input.charCodeAt(this.state.pos);
      }

      if ((next === 69 || next === 101) && !isOctal) {
        next = this.input.charCodeAt(++this.state.pos);

        if (next === 43 || next === 45) {
          ++this.state.pos;
        }

        if (this.readInt(10) === null) {
          this.raise(start, ErrorMessages.InvalidOrMissingExponent);
        }

        isFloat = true;
        hasExponent = true;
        next = this.input.charCodeAt(this.state.pos);
      }

      if (next === 110) {
        if (isFloat || hasLeadingZero) {
          this.raise(start, ErrorMessages.InvalidBigIntLiteral);
        }

        ++this.state.pos;
        isBigInt = true;
      }

      if (next === 109) {
        this.expectPlugin("decimal", this.state.pos);

        if (hasExponent || hasLeadingZero) {
          this.raise(start, ErrorMessages.InvalidDecimal);
        }

        ++this.state.pos;
        isDecimal = true;
      }

      if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
        throw this.raise(this.state.pos, ErrorMessages.NumberIdentifier);
      }

      var str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");

      if (isBigInt) {
        this.finishToken(types.bigint, str);
        return;
      }

      if (isDecimal) {
        this.finishToken(types.decimal, str);
        return;
      }

      var val = isOctal ? parseInt(str, 8) : parseFloat(str);
      this.finishToken(types.num, val);
    }
  }, {
    key: "readCodePoint",
    value: function readCodePoint(throwOnInvalid) {
      var ch = this.input.charCodeAt(this.state.pos);
      var code;

      if (ch === 123) {
        var codePos = ++this.state.pos;
        code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, throwOnInvalid);
        ++this.state.pos;

        if (code !== null && code > 0x10ffff) {
          if (throwOnInvalid) {
            this.raise(codePos, ErrorMessages.InvalidCodePoint);
          } else {
            return null;
          }
        }
      } else {
        code = this.readHexChar(4, false, throwOnInvalid);
      }

      return code;
    }
  }, {
    key: "readString",
    value: function readString(quote) {
      var out = "",
          chunkStart = ++this.state.pos;

      for (;;) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
        }

        var ch = this.input.charCodeAt(this.state.pos);
        if (ch === quote) break;

        if (ch === 92) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.readEscapedChar(false);
          chunkStart = this.state.pos;
        } else if (ch === 8232 || ch === 8233) {
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
        } else if (isNewLine(ch)) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
        } else {
          ++this.state.pos;
        }
      }

      out += this.input.slice(chunkStart, this.state.pos++);
      this.finishToken(types.string, out);
    }
  }, {
    key: "readTmplToken",
    value: function readTmplToken() {
      var out = "",
          chunkStart = this.state.pos,
          containsInvalid = false;

      for (;;) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedTemplate);
        }

        var ch = this.input.charCodeAt(this.state.pos);

        if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
          if (this.state.pos === this.state.start && this.match(types.template)) {
            if (ch === 36) {
              this.state.pos += 2;
              this.finishToken(types.dollarBraceL);
              return;
            } else {
              ++this.state.pos;
              this.finishToken(types.backQuote);
              return;
            }
          }

          out += this.input.slice(chunkStart, this.state.pos);
          this.finishToken(types.template, containsInvalid ? null : out);
          return;
        }

        if (ch === 92) {
          out += this.input.slice(chunkStart, this.state.pos);
          var escaped = this.readEscapedChar(true);

          if (escaped === null) {
            containsInvalid = true;
          } else {
            out += escaped;
          }

          chunkStart = this.state.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.state.pos);
          ++this.state.pos;

          switch (ch) {
            case 13:
              if (this.input.charCodeAt(this.state.pos) === 10) {
                ++this.state.pos;
              }

            case 10:
              out += "\n";
              break;

            default:
              out += String.fromCharCode(ch);
              break;
          }

          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          chunkStart = this.state.pos;
        } else {
          ++this.state.pos;
        }
      }
    }
  }, {
    key: "readEscapedChar",
    value: function readEscapedChar(inTemplate) {
      var throwOnInvalid = !inTemplate;
      var ch = this.input.charCodeAt(++this.state.pos);
      ++this.state.pos;

      switch (ch) {
        case 110:
          return "\n";

        case 114:
          return "\r";

        case 120:
          {
            var code = this.readHexChar(2, false, throwOnInvalid);
            return code === null ? null : String.fromCharCode(code);
          }

        case 117:
          {
            var _code = this.readCodePoint(throwOnInvalid);

            return _code === null ? null : String.fromCodePoint(_code);
          }

        case 116:
          return "\t";

        case 98:
          return "\b";

        case 118:
          return "\x0B";

        case 102:
          return "\f";

        case 13:
          if (this.input.charCodeAt(this.state.pos) === 10) {
            ++this.state.pos;
          }

        case 10:
          this.state.lineStart = this.state.pos;
          ++this.state.curLine;

        case 8232:
        case 8233:
          return "";

        case 56:
        case 57:
          if (inTemplate) {
            return null;
          } else if (this.state.strict) {
            this.raise(this.state.pos - 1, ErrorMessages.StrictNumericEscape);
          }

        default:
          if (ch >= 48 && ch <= 55) {
            var codePos = this.state.pos - 1;
            var match = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/);
            var octalStr = match[0];
            var octal = parseInt(octalStr, 8);

            if (octal > 255) {
              octalStr = octalStr.slice(0, -1);
              octal = parseInt(octalStr, 8);
            }

            this.state.pos += octalStr.length - 1;
            var next = this.input.charCodeAt(this.state.pos);

            if (octalStr !== "0" || next === 56 || next === 57) {
              if (inTemplate) {
                return null;
              } else if (this.state.strict) {
                this.raise(codePos, ErrorMessages.StrictNumericEscape);
              } else {
                this.state.octalPositions.push(codePos);
              }
            }

            return String.fromCharCode(octal);
          }

          return String.fromCharCode(ch);
      }
    }
  }, {
    key: "readHexChar",
    value: function readHexChar(len, forceLen, throwOnInvalid) {
      var codePos = this.state.pos;
      var n = this.readInt(16, len, forceLen, false);

      if (n === null) {
        if (throwOnInvalid) {
          this.raise(codePos, ErrorMessages.InvalidEscapeSequence);
        } else {
          this.state.pos = codePos - 1;
        }
      }

      return n;
    }
  }, {
    key: "readWord1",
    value: function readWord1() {
      var word = "";
      this.state.containsEsc = false;
      var start = this.state.pos;
      var chunkStart = this.state.pos;

      while (this.state.pos < this.length) {
        var ch = this.input.codePointAt(this.state.pos);

        if (isIdentifierChar(ch)) {
          this.state.pos += ch <= 0xffff ? 1 : 2;
        } else if (this.state.isIterator && ch === 64) {
          ++this.state.pos;
        } else if (ch === 92) {
          this.state.containsEsc = true;
          word += this.input.slice(chunkStart, this.state.pos);
          var escStart = this.state.pos;
          var identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;

          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(this.state.pos, ErrorMessages.MissingUnicodeEscape);
            continue;
          }

          ++this.state.pos;
          var esc = this.readCodePoint(true);

          if (esc !== null) {
            if (!identifierCheck(esc)) {
              this.raise(escStart, ErrorMessages.EscapedCharNotAnIdentifier);
            }

            word += String.fromCodePoint(esc);
          }

          chunkStart = this.state.pos;
        } else {
          break;
        }
      }

      return word + this.input.slice(chunkStart, this.state.pos);
    }
  }, {
    key: "isIterator",
    value: function isIterator(word) {
      return word === "@@iterator" || word === "@@asyncIterator";
    }
  }, {
    key: "readWord",
    value: function readWord() {
      var word = this.readWord1();
      var type = keywords.get(word) || types.name;

      if (this.state.isIterator && (!this.isIterator(word) || !this.state.inType)) {
        this.raise(this.state.pos, ErrorMessages.InvalidIdentifier, word);
      }

      this.finishToken(type, word);
    }
  }, {
    key: "checkKeywordEscapes",
    value: function checkKeywordEscapes() {
      var kw = this.state.type.keyword;

      if (kw && this.state.containsEsc) {
        this.raise(this.state.start, ErrorMessages.InvalidEscapedReservedWord, kw);
      }
    }
  }, {
    key: "braceIsBlock",
    value: function braceIsBlock(prevType) {
      var parent = this.curContext();

      if (parent === types$1.functionExpression || parent === types$1.functionStatement) {
        return true;
      }

      if (prevType === types.colon && (parent === types$1.braceStatement || parent === types$1.braceExpression)) {
        return !parent.isExpr;
      }

      if (prevType === types._return || prevType === types.name && this.state.exprAllowed) {
        return this.hasPrecedingLineBreak();
      }

      if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
        return true;
      }

      if (prevType === types.braceL) {
        return parent === types$1.braceStatement;
      }

      if (prevType === types._var || prevType === types._const || prevType === types.name) {
        return false;
      }

      if (prevType === types.relational) {
        return true;
      }

      return !this.state.exprAllowed;
    }
  }, {
    key: "updateContext",
    value: function updateContext(prevType) {
      var type = this.state.type;
      var update;

      if (type.keyword && (prevType === types.dot || prevType === types.questionDot)) {
        this.state.exprAllowed = false;
      } else if (update = type.updateContext) {
        update.call(this, prevType);
      } else {
        this.state.exprAllowed = type.beforeExpr;
      }
    }
  }]);

  return Tokenizer;
}(ParserError);

var UtilParser = /*#__PURE__*/function (_Tokenizer) {
  _inherits(UtilParser, _Tokenizer);

  var _super12 = _createSuper(UtilParser);

  function UtilParser() {
    _classCallCheck(this, UtilParser);

    return _super12.apply(this, arguments);
  }

  _createClass(UtilParser, [{
    key: "addExtra",
    value: function addExtra(node, key, val) {
      if (!node) return;
      var extra = node.extra = node.extra || {};
      extra[key] = val;
    }
  }, {
    key: "isRelational",
    value: function isRelational(op) {
      return this.match(types.relational) && this.state.value === op;
    }
  }, {
    key: "expectRelational",
    value: function expectRelational(op) {
      if (this.isRelational(op)) {
        this.next();
      } else {
        this.unexpected(null, types.relational);
      }
    }
  }, {
    key: "isContextual",
    value: function isContextual(name) {
      return this.match(types.name) && this.state.value === name && !this.state.containsEsc;
    }
  }, {
    key: "isUnparsedContextual",
    value: function isUnparsedContextual(nameStart, name) {
      var nameEnd = nameStart + name.length;
      return this.input.slice(nameStart, nameEnd) === name && (nameEnd === this.input.length || !isIdentifierChar(this.input.charCodeAt(nameEnd)));
    }
  }, {
    key: "isLookaheadContextual",
    value: function isLookaheadContextual(name) {
      var next = this.nextTokenStart();
      return this.isUnparsedContextual(next, name);
    }
  }, {
    key: "eatContextual",
    value: function eatContextual(name) {
      return this.isContextual(name) && this.eat(types.name);
    }
  }, {
    key: "expectContextual",
    value: function expectContextual(name, message) {
      if (!this.eatContextual(name)) this.unexpected(null, message);
    }
  }, {
    key: "canInsertSemicolon",
    value: function canInsertSemicolon() {
      return this.match(types.eof) || this.match(types.braceR) || this.hasPrecedingLineBreak();
    }
  }, {
    key: "hasPrecedingLineBreak",
    value: function hasPrecedingLineBreak() {
      return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    }
  }, {
    key: "isLineTerminator",
    value: function isLineTerminator() {
      return this.eat(types.semi) || this.canInsertSemicolon();
    }
  }, {
    key: "semicolon",
    value: function semicolon() {
      if (!this.isLineTerminator()) this.unexpected(null, types.semi);
    }
  }, {
    key: "expect",
    value: function expect(type, pos) {
      this.eat(type) || this.unexpected(pos, type);
    }
  }, {
    key: "assertNoSpace",
    value: function assertNoSpace() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Unexpected space.";

      if (this.state.start > this.state.lastTokEnd) {
        this.raise(this.state.lastTokEnd, message);
      }
    }
  }, {
    key: "unexpected",
    value: function unexpected(pos) {
      var messageOrType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unexpected token";

      if (typeof messageOrType !== "string") {
        messageOrType = "Unexpected token, expected \"".concat(messageOrType.label, "\"");
      }

      throw this.raise(pos != null ? pos : this.state.start, messageOrType);
    }
  }, {
    key: "expectPlugin",
    value: function expectPlugin(name, pos) {
      if (!this.hasPlugin(name)) {
        throw this.raiseWithData(pos != null ? pos : this.state.start, {
          missingPlugin: [name]
        }, "This experimental syntax requires enabling the parser plugin: '".concat(name, "'"));
      }

      return true;
    }
  }, {
    key: "expectOnePlugin",
    value: function expectOnePlugin(names, pos) {
      var _this39 = this;

      if (!names.some(function (n) {
        return _this39.hasPlugin(n);
      })) {
        throw this.raiseWithData(pos != null ? pos : this.state.start, {
          missingPlugin: names
        }, "This experimental syntax requires enabling one of the following parser plugin(s): '".concat(names.join(", "), "'"));
      }
    }
  }, {
    key: "tryParse",
    value: function tryParse(fn) {
      var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.clone();
      var abortSignal = {
        node: null
      };

      try {
        var node = fn(function () {
          var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          abortSignal.node = node;
          throw abortSignal;
        });

        if (this.state.errors.length > oldState.errors.length) {
          var failState = this.state;
          this.state = oldState;
          return {
            node: node,
            error: failState.errors[oldState.errors.length],
            thrown: false,
            aborted: false,
            failState: failState
          };
        }

        return {
          node: node,
          error: null,
          thrown: false,
          aborted: false,
          failState: null
        };
      } catch (error) {
        var _failState = this.state;
        this.state = oldState;

        if (error instanceof SyntaxError) {
          return {
            node: null,
            error: error,
            thrown: true,
            aborted: false,
            failState: _failState
          };
        }

        if (error === abortSignal) {
          return {
            node: abortSignal.node,
            error: null,
            thrown: false,
            aborted: true,
            failState: _failState
          };
        }

        throw error;
      }
    }
  }, {
    key: "checkExpressionErrors",
    value: function checkExpressionErrors(refExpressionErrors, andThrow) {
      if (!refExpressionErrors) return false;
      var {
        shorthandAssign: shorthandAssign,
        doubleProto: doubleProto
      } = refExpressionErrors;
      if (!andThrow) return shorthandAssign >= 0 || doubleProto >= 0;

      if (shorthandAssign >= 0) {
        this.unexpected(shorthandAssign);
      }

      if (doubleProto >= 0) {
        this.raise(doubleProto, ErrorMessages.DuplicateProto);
      }
    }
  }, {
    key: "isLiteralPropertyName",
    value: function isLiteralPropertyName() {
      return this.match(types.name) || !!this.state.type.keyword || this.match(types.string) || this.match(types.num) || this.match(types.bigint) || this.match(types.decimal);
    }
  }]);

  return UtilParser;
}(Tokenizer);

var ExpressionErrors = function ExpressionErrors() {
  _classCallCheck(this, ExpressionErrors);

  this.shorthandAssign = -1;
  this.doubleProto = -1;
};

var Node = /*#__PURE__*/function () {
  function Node(parser, pos, loc) {
    _classCallCheck(this, Node);

    this.type = void 0;
    this.start = void 0;
    this.end = void 0;
    this.loc = void 0;
    this.range = void 0;
    this.leadingComments = void 0;
    this.trailingComments = void 0;
    this.innerComments = void 0;
    this.extra = void 0;
    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if (parser == null ? void 0 : parser.options.ranges) this.range = [pos, 0];
    if (parser == null ? void 0 : parser.filename) this.loc.filename = parser.filename;
  }

  _createClass(Node, [{
    key: "__clone",
    value: function __clone() {
      var newNode = new Node();
      var keys = Object.keys(this);

      for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];

        if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
          newNode[key] = this[key];
        }
      }

      return newNode;
    }
  }]);

  return Node;
}();

var NodeUtils = /*#__PURE__*/function (_UtilParser) {
  _inherits(NodeUtils, _UtilParser);

  var _super13 = _createSuper(NodeUtils);

  function NodeUtils() {
    _classCallCheck(this, NodeUtils);

    return _super13.apply(this, arguments);
  }

  _createClass(NodeUtils, [{
    key: "startNode",
    value: function startNode() {
      return new Node(this, this.state.start, this.state.startLoc);
    }
  }, {
    key: "startNodeAt",
    value: function startNodeAt(pos, loc) {
      return new Node(this, pos, loc);
    }
  }, {
    key: "startNodeAtNode",
    value: function startNodeAtNode(type) {
      return this.startNodeAt(type.start, type.loc.start);
    }
  }, {
    key: "finishNode",
    value: function finishNode(node, type) {
      return this.finishNodeAt(node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
    }
  }, {
    key: "finishNodeAt",
    value: function finishNodeAt(node, type, pos, loc) {
      node.type = type;
      node.end = pos;
      node.loc.end = loc;
      if (this.options.ranges) node.range[1] = pos;
      this.processComment(node);
      return node;
    }
  }, {
    key: "resetStartLocation",
    value: function resetStartLocation(node, start, startLoc) {
      node.start = start;
      node.loc.start = startLoc;
      if (this.options.ranges) node.range[0] = start;
    }
  }, {
    key: "resetEndLocation",
    value: function resetEndLocation(node) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastTokEnd;
      var endLoc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.lastTokEndLoc;
      node.end = end;
      node.loc.end = endLoc;
      if (this.options.ranges) node.range[1] = end;
    }
  }, {
    key: "resetStartLocationFromNode",
    value: function resetStartLocationFromNode(node, locationNode) {
      this.resetStartLocation(node, locationNode.start, locationNode.loc.start);
    }
  }]);

  return NodeUtils;
}(UtilParser);

var unwrapParenthesizedExpression = function (node) {
  return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
};

var LValParser = /*#__PURE__*/function (_NodeUtils) {
  _inherits(LValParser, _NodeUtils);

  var _super14 = _createSuper(LValParser);

  function LValParser() {
    _classCallCheck(this, LValParser);

    return _super14.apply(this, arguments);
  }

  _createClass(LValParser, [{
    key: "toAssignable",
    value: function toAssignable(node) {
      var isLHS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _node$extra, _node$extra3;

      var parenthesized = undefined;

      if (node.type === "ParenthesizedExpression" || ((_node$extra = node.extra) == null ? void 0 : _node$extra.parenthesized)) {
        parenthesized = unwrapParenthesizedExpression(node);

        if (isLHS) {
          if (parenthesized.type === "Identifier") {
            this.expressionScope.recordParenthesizedIdentifierError(node.start, ErrorMessages.InvalidParenthesizedAssignment);
          } else if (parenthesized.type !== "MemberExpression") {
            this.raise(node.start, ErrorMessages.InvalidParenthesizedAssignment);
          }
        } else {
          this.raise(node.start, ErrorMessages.InvalidParenthesizedAssignment);
        }
      }

      switch (node.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
          break;

        case "ObjectExpression":
          node.type = "ObjectPattern";

          for (var i = 0, length = node.properties.length, _last2 = length - 1; i < length; i++) {
            var _node$extra2;

            var prop = node.properties[i];
            var isLast = i === _last2;
            this.toAssignableObjectExpressionProp(prop, isLast, isLHS);

            if (isLast && prop.type === "RestElement" && ((_node$extra2 = node.extra) == null ? void 0 : _node$extra2.trailingComma)) {
              this.raiseRestNotLast(node.extra.trailingComma);
            }
          }

          break;

        case "ObjectProperty":
          this.toAssignable(node.value, isLHS);
          break;

        case "SpreadElement":
          {
            this.checkToRestConversion(node);
            node.type = "RestElement";
            var arg = node.argument;
            this.toAssignable(arg, isLHS);
            break;
          }

        case "ArrayExpression":
          node.type = "ArrayPattern";
          this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingComma, isLHS);
          break;

        case "AssignmentExpression":
          if (node.operator !== "=") {
            this.raise(node.left.end, ErrorMessages.MissingEqInAssignment);
          }

          node.type = "AssignmentPattern";
          delete node.operator;
          this.toAssignable(node.left, isLHS);
          break;

        case "ParenthesizedExpression":
          this.toAssignable(parenthesized, isLHS);
          break;
      }

      return node;
    }
  }, {
    key: "toAssignableObjectExpressionProp",
    value: function toAssignableObjectExpressionProp(prop, isLast, isLHS) {
      if (prop.type === "ObjectMethod") {
        var error = prop.kind === "get" || prop.kind === "set" ? ErrorMessages.PatternHasAccessor : ErrorMessages.PatternHasMethod;
        this.raise(prop.key.start, error);
      } else if (prop.type === "SpreadElement" && !isLast) {
        this.raiseRestNotLast(prop.start);
      } else {
        this.toAssignable(prop, isLHS);
      }
    }
  }, {
    key: "toAssignableList",
    value: function toAssignableList(exprList, trailingCommaPos, isLHS) {
      var end = exprList.length;

      if (end) {
        var _last3 = exprList[end - 1];

        if ((_last3 == null ? void 0 : _last3.type) === "RestElement") {
          --end;
        } else if ((_last3 == null ? void 0 : _last3.type) === "SpreadElement") {
          _last3.type = "RestElement";
          var arg = _last3.argument;
          this.toAssignable(arg, isLHS);
          arg = unwrapParenthesizedExpression(arg);

          if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern" && arg.type !== "ObjectPattern") {
            this.unexpected(arg.start);
          }

          if (trailingCommaPos) {
            this.raiseTrailingCommaAfterRest(trailingCommaPos);
          }

          --end;
        }
      }

      for (var i = 0; i < end; i++) {
        var elt = exprList[i];

        if (elt) {
          this.toAssignable(elt, isLHS);

          if (elt.type === "RestElement") {
            this.raiseRestNotLast(elt.start);
          }
        }
      }

      return exprList;
    }
  }, {
    key: "toReferencedList",
    value: function toReferencedList(exprList, isParenthesizedExpr) {
      return exprList;
    }
  }, {
    key: "toReferencedListDeep",
    value: function toReferencedListDeep(exprList, isParenthesizedExpr) {
      this.toReferencedList(exprList, isParenthesizedExpr);

      for (var _i = 0; _i < exprList.length; _i++) {
        var expr = exprList[_i];

        if ((expr == null ? void 0 : expr.type) === "ArrayExpression") {
          this.toReferencedListDeep(expr.elements);
        }
      }
    }
  }, {
    key: "parseSpread",
    value: function parseSpread(refExpressionErrors, refNeedsArrowPos) {
      var node = this.startNode();
      this.next();
      node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, undefined, refNeedsArrowPos);
      return this.finishNode(node, "SpreadElement");
    }
  }, {
    key: "parseRestBinding",
    value: function parseRestBinding() {
      var node = this.startNode();
      this.next();
      node.argument = this.parseBindingAtom();
      return this.finishNode(node, "RestElement");
    }
  }, {
    key: "parseBindingAtom",
    value: function parseBindingAtom() {
      switch (this.state.type) {
        case types.bracketL:
          {
            var node = this.startNode();
            this.next();
            node.elements = this.parseBindingList(types.bracketR, 93, true);
            return this.finishNode(node, "ArrayPattern");
          }

        case types.braceL:
          return this.parseObjectLike(types.braceR, true);
      }

      return this.parseIdentifier();
    }
  }, {
    key: "parseBindingList",
    value: function parseBindingList(close, closeCharCode, allowEmpty, allowModifiers) {
      var elts = [];
      var first = true;

      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
        }

        if (allowEmpty && this.match(types.comma)) {
          elts.push(null);
        } else if (this.eat(close)) {
          break;
        } else if (this.match(types.ellipsis)) {
          elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));
          this.checkCommaAfterRest(closeCharCode);
          this.expect(close);
          break;
        } else {
          var decorators = [];

          if (this.match(types.at) && this.hasPlugin("decorators")) {
            this.raise(this.state.start, ErrorMessages.UnsupportedParameterDecorator);
          }

          while (this.match(types.at)) {
            decorators.push(this.parseDecorator());
          }

          elts.push(this.parseAssignableListItem(allowModifiers, decorators));
        }
      }

      return elts;
    }
  }, {
    key: "parseAssignableListItem",
    value: function parseAssignableListItem(allowModifiers, decorators) {
      var left = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(left);
      var elt = this.parseMaybeDefault(left.start, left.loc.start, left);

      if (decorators.length) {
        left.decorators = decorators;
      }

      return elt;
    }
  }, {
    key: "parseAssignableListItemTypes",
    value: function parseAssignableListItemTypes(param) {
      return param;
    }
  }, {
    key: "parseMaybeDefault",
    value: function parseMaybeDefault(startPos, startLoc, left) {
      var _startLoc, _startPos, _left;

      startLoc = (_startLoc = startLoc) != null ? _startLoc : this.state.startLoc;
      startPos = (_startPos = startPos) != null ? _startPos : this.state.start;
      left = (_left = left) != null ? _left : this.parseBindingAtom();
      if (!this.eat(types.eq)) return left;
      var node = this.startNodeAt(startPos, startLoc);
      node.left = left;
      node.right = this.parseMaybeAssignAllowIn();
      return this.finishNode(node, "AssignmentPattern");
    }
  }, {
    key: "checkLVal",
    value: function checkLVal(expr, contextDescription) {
      var bindingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : BIND_NONE;
      var checkClashes = arguments.length > 3 ? arguments[3] : undefined;
      var disallowLetBinding = arguments.length > 4 ? arguments[4] : undefined;
      var strictModeChanged = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      switch (expr.type) {
        case "Identifier":
          {
            var {
              name: name
            } = expr;

            if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(name, this.inModule) : isStrictBindOnlyReservedWord(name))) {
              this.raise(expr.start, bindingType === BIND_NONE ? ErrorMessages.StrictEvalArguments : ErrorMessages.StrictEvalArgumentsBinding, name);
            }

            if (checkClashes) {
              if (checkClashes.has(name)) {
                this.raise(expr.start, ErrorMessages.ParamDupe);
              } else {
                checkClashes.add(name);
              }
            }

            if (disallowLetBinding && name === "let") {
              this.raise(expr.start, ErrorMessages.LetInLexicalBinding);
            }

            if (!(bindingType & BIND_NONE)) {
              this.scope.declareName(name, bindingType, expr.start);
            }

            break;
          }

        case "MemberExpression":
          if (bindingType !== BIND_NONE) {
            this.raise(expr.start, ErrorMessages.InvalidPropertyBindingPattern);
          }

          break;

        case "ObjectPattern":
          for (var _i2 = 0, _expr$properties = expr.properties; _i2 < _expr$properties.length; _i2++) {
            var prop = _expr$properties[_i2];
            if (prop.type === "ObjectProperty") prop = prop.value;else if (prop.type === "ObjectMethod") continue;
            this.checkLVal(prop, "object destructuring pattern", bindingType, checkClashes, disallowLetBinding);
          }

          break;

        case "ArrayPattern":
          for (var _i3 = 0, _expr$elements = expr.elements; _i3 < _expr$elements.length; _i3++) {
            var elem = _expr$elements[_i3];

            if (elem) {
              this.checkLVal(elem, "array destructuring pattern", bindingType, checkClashes, disallowLetBinding);
            }
          }

          break;

        case "AssignmentPattern":
          this.checkLVal(expr.left, "assignment pattern", bindingType, checkClashes);
          break;

        case "RestElement":
          this.checkLVal(expr.argument, "rest element", bindingType, checkClashes);
          break;

        case "ParenthesizedExpression":
          this.checkLVal(expr.expression, "parenthesized expression", bindingType, checkClashes);
          break;

        default:
          {
            this.raise(expr.start, bindingType === BIND_NONE ? ErrorMessages.InvalidLhs : ErrorMessages.InvalidLhsBinding, contextDescription);
          }
      }
    }
  }, {
    key: "checkToRestConversion",
    value: function checkToRestConversion(node) {
      if (node.argument.type !== "Identifier" && node.argument.type !== "MemberExpression") {
        this.raise(node.argument.start, ErrorMessages.InvalidRestAssignmentPattern);
      }
    }
  }, {
    key: "checkCommaAfterRest",
    value: function checkCommaAfterRest(close) {
      if (this.match(types.comma)) {
        if (this.lookaheadCharCode() === close) {
          this.raiseTrailingCommaAfterRest(this.state.start);
        } else {
          this.raiseRestNotLast(this.state.start);
        }
      }
    }
  }, {
    key: "raiseRestNotLast",
    value: function raiseRestNotLast(pos) {
      throw this.raise(pos, ErrorMessages.ElementAfterRest);
    }
  }, {
    key: "raiseTrailingCommaAfterRest",
    value: function raiseTrailingCommaAfterRest(pos) {
      this.raise(pos, ErrorMessages.RestTrailingComma);
    }
  }]);

  return LValParser;
}(NodeUtils);

var kExpression = 0,
    kMaybeArrowParameterDeclaration = 1,
    kMaybeAsyncArrowParameterDeclaration = 2,
    kParameterDeclaration = 3;

var ExpressionScope = /*#__PURE__*/function () {
  function ExpressionScope() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kExpression;

    _classCallCheck(this, ExpressionScope);

    this.type = void 0;
    this.type = type;
  }

  _createClass(ExpressionScope, [{
    key: "canBeArrowParameterDeclaration",
    value: function canBeArrowParameterDeclaration() {
      return this.type === kMaybeAsyncArrowParameterDeclaration || this.type === kMaybeArrowParameterDeclaration;
    }
  }, {
    key: "isCertainlyParameterDeclaration",
    value: function isCertainlyParameterDeclaration() {
      return this.type === kParameterDeclaration;
    }
  }]);

  return ExpressionScope;
}();

var ArrowHeadParsingScope = /*#__PURE__*/function (_ExpressionScope) {
  _inherits(ArrowHeadParsingScope, _ExpressionScope);

  var _super15 = _createSuper(ArrowHeadParsingScope);

  function ArrowHeadParsingScope(type) {
    var _this40;

    _classCallCheck(this, ArrowHeadParsingScope);

    _this40 = _super15.call(this, type);
    _this40.errors = new Map();
    return _this40;
  }

  _createClass(ArrowHeadParsingScope, [{
    key: "recordDeclarationError",
    value: function recordDeclarationError(pos, message) {
      this.errors.set(pos, message);
    }
  }, {
    key: "clearDeclarationError",
    value: function clearDeclarationError(pos) {
      this.errors.delete(pos);
    }
  }, {
    key: "iterateErrors",
    value: function iterateErrors(iterator) {
      this.errors.forEach(iterator);
    }
  }]);

  return ArrowHeadParsingScope;
}(ExpressionScope);

var ExpressionScopeHandler = /*#__PURE__*/function () {
  function ExpressionScopeHandler(raise) {
    _classCallCheck(this, ExpressionScopeHandler);

    this.stack = [new ExpressionScope()];
    this.raise = raise;
  }

  _createClass(ExpressionScopeHandler, [{
    key: "enter",
    value: function enter(scope) {
      this.stack.push(scope);
    }
  }, {
    key: "exit",
    value: function exit() {
      this.stack.pop();
    }
  }, {
    key: "recordParameterInitializerError",
    value: function recordParameterInitializerError(pos, message) {
      var {
        stack: stack
      } = this;
      var i = stack.length - 1;
      var scope = stack[i];

      while (!scope.isCertainlyParameterDeclaration()) {
        if (scope.canBeArrowParameterDeclaration()) {
          scope.recordDeclarationError(pos, message);
        } else {
          return;
        }

        scope = stack[--i];
      }

      this.raise(pos, message);
    }
  }, {
    key: "recordParenthesizedIdentifierError",
    value: function recordParenthesizedIdentifierError(pos, message) {
      var {
        stack: stack
      } = this;
      var scope = stack[stack.length - 1];

      if (scope.isCertainlyParameterDeclaration()) {
        this.raise(pos, message);
      } else if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(pos, message);
      } else {
        return;
      }
    }
  }, {
    key: "recordAsyncArrowParametersError",
    value: function recordAsyncArrowParametersError(pos, message) {
      var {
        stack: stack
      } = this;
      var i = stack.length - 1;
      var scope = stack[i];

      while (scope.canBeArrowParameterDeclaration()) {
        if (scope.type === kMaybeAsyncArrowParameterDeclaration) {
          scope.recordDeclarationError(pos, message);
        }

        scope = stack[--i];
      }
    }
  }, {
    key: "validateAsPattern",
    value: function validateAsPattern() {
      var _this41 = this;

      var {
        stack: stack
      } = this;
      var currentScope = stack[stack.length - 1];
      if (!currentScope.canBeArrowParameterDeclaration()) return;
      currentScope.iterateErrors(function (message, pos) {
        _this41.raise(pos, message);

        var i = stack.length - 2;
        var scope = stack[i];

        while (scope.canBeArrowParameterDeclaration()) {
          scope.clearDeclarationError(pos);
          scope = stack[--i];
        }
      });
    }
  }]);

  return ExpressionScopeHandler;
}();

function newParameterDeclarationScope() {
  return new ExpressionScope(kParameterDeclaration);
}

function newArrowHeadScope() {
  return new ArrowHeadParsingScope(kMaybeArrowParameterDeclaration);
}

function newAsyncArrowScope() {
  return new ArrowHeadParsingScope(kMaybeAsyncArrowParameterDeclaration);
}

function newExpressionScope() {
  return new ExpressionScope();
}

var ExpressionParser = /*#__PURE__*/function (_LValParser) {
  _inherits(ExpressionParser, _LValParser);

  var _super16 = _createSuper(ExpressionParser);

  function ExpressionParser() {
    _classCallCheck(this, ExpressionParser);

    return _super16.apply(this, arguments);
  }

  _createClass(ExpressionParser, [{
    key: "checkProto",
    value: function checkProto(prop, isRecord, protoRef, refExpressionErrors) {
      if (prop.type === "SpreadElement" || prop.type === "ObjectMethod" || prop.computed || prop.shorthand) {
        return;
      }

      var key = prop.key;
      var name = key.type === "Identifier" ? key.name : key.value;

      if (name === "__proto__") {
        if (isRecord) {
          this.raise(key.start, ErrorMessages.RecordNoProto);
          return;
        }

        if (protoRef.used) {
          if (refExpressionErrors) {
            if (refExpressionErrors.doubleProto === -1) {
              refExpressionErrors.doubleProto = key.start;
            }
          } else {
            this.raise(key.start, ErrorMessages.DuplicateProto);
          }
        }

        protoRef.used = true;
      }
    }
  }, {
    key: "shouldExitDescending",
    value: function shouldExitDescending(expr, potentialArrowAt) {
      return expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt;
    }
  }, {
    key: "getExpression",
    value: function getExpression() {
      var paramFlags = PARAM;

      if (this.hasPlugin("topLevelAwait") && this.inModule) {
        paramFlags |= PARAM_AWAIT;
      }

      this.scope.enter(SCOPE_PROGRAM);
      this.prodParam.enter(paramFlags);
      this.nextToken();
      var expr = this.parseExpression();

      if (!this.match(types.eof)) {
        this.unexpected();
      }

      expr.comments = this.state.comments;
      expr.errors = this.state.errors;
      return expr;
    }
  }, {
    key: "parseExpression",
    value: function parseExpression(disallowIn, refExpressionErrors) {
      var _this42 = this;

      if (disallowIn) {
        return this.disallowInAnd(function () {
          return _this42.parseExpressionBase(refExpressionErrors);
        });
      }

      return this.allowInAnd(function () {
        return _this42.parseExpressionBase(refExpressionErrors);
      });
    }
  }, {
    key: "parseExpressionBase",
    value: function parseExpressionBase(refExpressionErrors) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseMaybeAssign(refExpressionErrors);

      if (this.match(types.comma)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.expressions = [expr];

        while (this.eat(types.comma)) {
          node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
        }

        this.toReferencedList(node.expressions);
        return this.finishNode(node, "SequenceExpression");
      }

      return expr;
    }
  }, {
    key: "parseMaybeAssignDisallowIn",
    value: function parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      var _this43 = this;

      return this.disallowInAnd(function () {
        return _this43.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos);
      });
    }
  }, {
    key: "parseMaybeAssignAllowIn",
    value: function parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      var _this44 = this;

      return this.allowInAnd(function () {
        return _this44.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos);
      });
    }
  }, {
    key: "parseMaybeAssign",
    value: function parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;

      if (this.isContextual("yield")) {
        if (this.prodParam.hasYield) {
          this.state.exprAllowed = true;

          var _left2 = this.parseYield();

          if (afterLeftParse) {
            _left2 = afterLeftParse.call(this, _left2, startPos, startLoc);
          }

          return _left2;
        }
      }

      var ownExpressionErrors;

      if (refExpressionErrors) {
        ownExpressionErrors = false;
      } else {
        refExpressionErrors = new ExpressionErrors();
        ownExpressionErrors = true;
      }

      if (this.match(types.parenL) || this.match(types.name)) {
        this.state.potentialArrowAt = this.state.start;
      }

      var left = this.parseMaybeConditional(refExpressionErrors, refNeedsArrowPos);

      if (afterLeftParse) {
        left = afterLeftParse.call(this, left, startPos, startLoc);
      }

      if (this.state.type.isAssign) {
        var node = this.startNodeAt(startPos, startLoc);
        var operator = this.state.value;
        node.operator = operator;

        if (this.match(types.eq)) {
          node.left = this.toAssignable(left, true);
          refExpressionErrors.doubleProto = -1;
        } else {
          node.left = left;
        }

        if (refExpressionErrors.shorthandAssign >= node.left.start) {
          refExpressionErrors.shorthandAssign = -1;
        }

        this.checkLVal(left, "assignment expression");
        this.next();
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, "AssignmentExpression");
      } else if (ownExpressionErrors) {
        this.checkExpressionErrors(refExpressionErrors, true);
      }

      return left;
    }
  }, {
    key: "parseMaybeConditional",
    value: function parseMaybeConditional(refExpressionErrors, refNeedsArrowPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var potentialArrowAt = this.state.potentialArrowAt;
      var expr = this.parseExprOps(refExpressionErrors);

      if (this.shouldExitDescending(expr, potentialArrowAt)) {
        return expr;
      }

      return this.parseConditional(expr, startPos, startLoc, refNeedsArrowPos);
    }
  }, {
    key: "parseConditional",
    value: function parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
      if (this.eat(types.question)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.test = expr;
        node.consequent = this.parseMaybeAssignAllowIn();
        this.expect(types.colon);
        node.alternate = this.parseMaybeAssign();
        return this.finishNode(node, "ConditionalExpression");
      }

      return expr;
    }
  }, {
    key: "parseExprOps",
    value: function parseExprOps(refExpressionErrors) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var potentialArrowAt = this.state.potentialArrowAt;
      var expr = this.parseMaybeUnary(refExpressionErrors);

      if (this.shouldExitDescending(expr, potentialArrowAt)) {
        return expr;
      }

      return this.parseExprOp(expr, startPos, startLoc, -1);
    }
  }, {
    key: "parseExprOp",
    value: function parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
      var prec = this.state.type.binop;

      if (prec != null && (this.prodParam.hasIn || !this.match(types._in))) {
        if (prec > minPrec) {
          var op = this.state.type;

          if (op === types.pipeline) {
            this.expectPlugin("pipelineOperator");

            if (this.state.inFSharpPipelineDirectBody) {
              return left;
            }

            this.state.inPipeline = true;
            this.checkPipelineAtInfixOperator(left, leftStartPos);
          }

          var node = this.startNodeAt(leftStartPos, leftStartLoc);
          node.left = left;
          node.operator = this.state.value;

          if (op === types.exponent && left.type === "UnaryExpression" && (this.options.createParenthesizedExpressions || !(left.extra && left.extra.parenthesized))) {
            this.raise(left.argument.start, ErrorMessages.UnexpectedTokenUnaryExponentiation);
          }

          var logical = op === types.logicalOR || op === types.logicalAND;
          var coalesce = op === types.nullishCoalescing;

          if (coalesce) {
            prec = types.logicalAND.binop;
          }

          this.next();

          if (op === types.pipeline && this.getPluginOption("pipelineOperator", "proposal") === "minimal") {
            if (this.match(types.name) && this.state.value === "await" && this.prodParam.hasAwait) {
              throw this.raise(this.state.start, ErrorMessages.UnexpectedAwaitAfterPipelineBody);
            }
          }

          node.right = this.parseExprOpRightExpr(op, prec);
          this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
          var nextOp = this.state.type;

          if (coalesce && (nextOp === types.logicalOR || nextOp === types.logicalAND) || logical && nextOp === types.nullishCoalescing) {
            throw this.raise(this.state.start, ErrorMessages.MixingCoalesceWithLogical);
          }

          return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
        }
      }

      return left;
    }
  }, {
    key: "parseExprOpRightExpr",
    value: function parseExprOpRightExpr(op, prec) {
      var _this45 = this;

      var startPos = this.state.start;
      var startLoc = this.state.startLoc;

      switch (op) {
        case types.pipeline:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "smart":
              return this.withTopicPermittingContext(function () {
                return _this45.parseSmartPipelineBody(_this45.parseExprOpBaseRightExpr(op, prec), startPos, startLoc);
              });

            case "fsharp":
              return this.withSoloAwaitPermittingContext(function () {
                return _this45.parseFSharpPipelineBody(prec);
              });
          }

        default:
          return this.parseExprOpBaseRightExpr(op, prec);
      }
    }
  }, {
    key: "parseExprOpBaseRightExpr",
    value: function parseExprOpBaseRightExpr(op, prec) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec);
    }
  }, {
    key: "parseMaybeUnary",
    value: function parseMaybeUnary(refExpressionErrors) {
      if (this.isContextual("await") && this.isAwaitAllowed()) {
        return this.parseAwait();
      }

      var update = this.match(types.incDec);
      var node = this.startNode();

      if (this.state.type.prefix) {
        node.operator = this.state.value;
        node.prefix = true;

        if (this.match(types._throw)) {
          this.expectPlugin("throwExpressions");
        }

        var isDelete = this.match(types._delete);
        this.next();
        node.argument = this.parseMaybeUnary();
        this.checkExpressionErrors(refExpressionErrors, true);

        if (this.state.strict && isDelete) {
          var arg = node.argument;

          if (arg.type === "Identifier") {
            this.raise(node.start, ErrorMessages.StrictDelete);
          } else if ((arg.type === "MemberExpression" || arg.type === "OptionalMemberExpression") && arg.property.type === "PrivateName") {
            this.raise(node.start, ErrorMessages.DeletePrivateField);
          }
        }

        if (!update) {
          return this.finishNode(node, "UnaryExpression");
        }
      }

      return this.parseUpdate(node, update, refExpressionErrors);
    }
  }, {
    key: "parseUpdate",
    value: function parseUpdate(node, update, refExpressionErrors) {
      if (update) {
        this.checkLVal(node.argument, "prefix operation");
        return this.finishNode(node, "UpdateExpression");
      }

      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseExprSubscripts(refExpressionErrors);
      if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;

      while (this.state.type.postfix && !this.canInsertSemicolon()) {
        var _node11 = this.startNodeAt(startPos, startLoc);

        _node11.operator = this.state.value;
        _node11.prefix = false;
        _node11.argument = expr;
        this.checkLVal(expr, "postfix operation");
        this.next();
        expr = this.finishNode(_node11, "UpdateExpression");
      }

      return expr;
    }
  }, {
    key: "parseExprSubscripts",
    value: function parseExprSubscripts(refExpressionErrors) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var potentialArrowAt = this.state.potentialArrowAt;
      var expr = this.parseExprAtom(refExpressionErrors);

      if (this.shouldExitDescending(expr, potentialArrowAt)) {
        return expr;
      }

      return this.parseSubscripts(expr, startPos, startLoc);
    }
  }, {
    key: "parseSubscripts",
    value: function parseSubscripts(base, startPos, startLoc, noCalls) {
      var state = {
        optionalChainMember: false,
        maybeAsyncArrow: this.atPossibleAsyncArrow(base),
        stop: false
      };

      do {
        base = this.parseSubscript(base, startPos, startLoc, noCalls, state);
        state.maybeAsyncArrow = false;
      } while (!state.stop);

      return base;
    }
  }, {
    key: "parseSubscript",
    value: function parseSubscript(base, startPos, startLoc, noCalls, state) {
      if (!noCalls && this.eat(types.doubleColon)) {
        return this.parseBind(base, startPos, startLoc, noCalls, state);
      } else if (this.match(types.backQuote)) {
        return this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
      }

      var optional = false;

      if (this.match(types.questionDot)) {
        state.optionalChainMember = optional = true;

        if (noCalls && this.lookaheadCharCode() === 40) {
          state.stop = true;
          return base;
        }

        this.next();
      }

      if (!noCalls && this.match(types.parenL)) {
        return this.parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional);
      } else if (optional || this.match(types.bracketL) || this.eat(types.dot)) {
        return this.parseMember(base, startPos, startLoc, state, optional);
      } else {
        state.stop = true;
        return base;
      }
    }
  }, {
    key: "parseMember",
    value: function parseMember(base, startPos, startLoc, state, optional) {
      var node = this.startNodeAt(startPos, startLoc);
      var computed = this.eat(types.bracketL);
      node.object = base;
      node.computed = computed;
      var property = computed ? this.parseExpression() : this.parseMaybePrivateName(true);

      if (property.type === "PrivateName") {
        if (node.object.type === "Super") {
          this.raise(startPos, ErrorMessages.SuperPrivateField);
        }

        this.classScope.usePrivateName(property.id.name, property.start);
      }

      node.property = property;

      if (computed) {
        this.expect(types.bracketR);
      }

      if (state.optionalChainMember) {
        node.optional = optional;
        return this.finishNode(node, "OptionalMemberExpression");
      } else {
        return this.finishNode(node, "MemberExpression");
      }
    }
  }, {
    key: "parseBind",
    value: function parseBind(base, startPos, startLoc, noCalls, state) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.callee = this.parseNoCallExpr();
      state.stop = true;
      return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
    }
  }, {
    key: "parseCoverCallAndAsyncArrowHead",
    value: function parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional) {
      var oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = true;
      this.next();
      var node = this.startNodeAt(startPos, startLoc);
      node.callee = base;

      if (state.maybeAsyncArrow) {
        this.expressionScope.enter(newAsyncArrowScope());
      }

      if (state.optionalChainMember) {
        node.optional = optional;
      }

      if (optional) {
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      } else {
        node.arguments = this.parseCallExpressionArguments(types.parenR, state.maybeAsyncArrow, base.type === "Import", base.type !== "Super", node);
      }

      this.finishCallExpression(node, state.optionalChainMember);

      if (state.maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
        state.stop = true;
        this.expressionScope.validateAsPattern();
        this.expressionScope.exit();
        node = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), node);
      } else {
        if (state.maybeAsyncArrow) {
          this.expressionScope.exit();
        }

        this.toReferencedArguments(node);
      }

      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return node;
    }
  }, {
    key: "toReferencedArguments",
    value: function toReferencedArguments(node, isParenthesizedExpr) {
      this.toReferencedListDeep(node.arguments, isParenthesizedExpr);
    }
  }, {
    key: "parseTaggedTemplateExpression",
    value: function parseTaggedTemplateExpression(base, startPos, startLoc, state) {
      var node = this.startNodeAt(startPos, startLoc);
      node.tag = base;
      node.quasi = this.parseTemplate(true);

      if (state.optionalChainMember) {
        this.raise(startPos, ErrorMessages.OptionalChainingNoTemplate);
      }

      return this.finishNode(node, "TaggedTemplateExpression");
    }
  }, {
    key: "atPossibleAsyncArrow",
    value: function atPossibleAsyncArrow(base) {
      return base.type === "Identifier" && base.name === "async" && this.state.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && base.start === this.state.potentialArrowAt;
    }
  }, {
    key: "finishCallExpression",
    value: function finishCallExpression(node, optional) {
      if (node.callee.type === "Import") {
        if (node.arguments.length === 2) {
          if (!this.hasPlugin("moduleAttributes")) {
            this.expectPlugin("importAssertions");
          }
        }

        if (node.arguments.length === 0 || node.arguments.length > 2) {
          this.raise(node.start, ErrorMessages.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
        } else {
          for (var _i = 0, _node$arguments = node.arguments; _i < _node$arguments.length; _i++) {
            var arg = _node$arguments[_i];

            if (arg.type === "SpreadElement") {
              this.raise(arg.start, ErrorMessages.ImportCallSpreadArgument);
            }
          }
        }
      }

      return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
    }
  }, {
    key: "parseCallExpressionArguments",
    value: function parseCallExpressionArguments(close, possibleAsyncArrow, dynamicImport, allowPlaceholder, nodeForExtra) {
      var elts = [];
      var first = true;
      var oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;

      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);

          if (this.match(close)) {
            if (dynamicImport && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes")) {
              this.raise(this.state.lastTokStart, ErrorMessages.ImportCallArgumentTrailingComma);
            }

            if (nodeForExtra) {
              this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
            }

            this.next();
            break;
          }
        }

        elts.push(this.parseExprListItem(false, possibleAsyncArrow ? new ExpressionErrors() : undefined, possibleAsyncArrow ? {
          start: 0
        } : undefined, allowPlaceholder));
      }

      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      return elts;
    }
  }, {
    key: "shouldParseAsyncArrow",
    value: function shouldParseAsyncArrow() {
      return this.match(types.arrow) && !this.canInsertSemicolon();
    }
  }, {
    key: "parseAsyncArrowFromCallExpression",
    value: function parseAsyncArrowFromCallExpression(node, call) {
      var _call$extra;

      this.expect(types.arrow);
      this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingComma);
      return node;
    }
  }, {
    key: "parseNoCallExpr",
    value: function parseNoCallExpr() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
    }
  }, {
    key: "parseExprAtom",
    value: function parseExprAtom(refExpressionErrors) {
      if (this.state.type === types.slash) this.readRegexp();
      var canBeArrow = this.state.potentialArrowAt === this.state.start;
      var node;

      switch (this.state.type) {
        case types._super:
          return this.parseSuper();

        case types._import:
          node = this.startNode();
          this.next();

          if (this.match(types.dot)) {
            return this.parseImportMetaProperty(node);
          }

          if (!this.match(types.parenL)) {
            this.raise(this.state.lastTokStart, ErrorMessages.UnsupportedImport);
          }

          return this.finishNode(node, "Import");

        case types._this:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "ThisExpression");

        case types.name:
          {
            var containsEsc = this.state.containsEsc;
            var id = this.parseIdentifier();

            if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
              if (this.match(types._function)) {
                var _last4 = this.state.context.length - 1;

                if (this.state.context[_last4] !== types$1.functionStatement) {
                  throw new Error("Internal error");
                }

                this.state.context[_last4] = types$1.functionExpression;
                this.next();
                return this.parseFunction(this.startNodeAtNode(id), undefined, true);
              } else if (this.match(types.name)) {
                return this.parseAsyncArrowUnaryFunction(id);
              }
            }

            if (canBeArrow && this.match(types.arrow) && !this.canInsertSemicolon()) {
              this.next();
              return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
            }

            return id;
          }

        case types._do:
          {
            return this.parseDo();
          }

        case types.regexp:
          {
            var value = this.state.value;
            node = this.parseLiteral(value.value, "RegExpLiteral");
            node.pattern = value.pattern;
            node.flags = value.flags;
            return node;
          }

        case types.num:
          return this.parseLiteral(this.state.value, "NumericLiteral");

        case types.bigint:
          return this.parseLiteral(this.state.value, "BigIntLiteral");

        case types.decimal:
          return this.parseLiteral(this.state.value, "DecimalLiteral");

        case types.string:
          return this.parseLiteral(this.state.value, "StringLiteral");

        case types._null:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "NullLiteral");

        case types._true:
        case types._false:
          return this.parseBooleanLiteral();

        case types.parenL:
          return this.parseParenAndDistinguishExpression(canBeArrow);

        case types.bracketBarL:
        case types.bracketHashL:
          {
            return this.parseArrayLike(this.state.type === types.bracketBarL ? types.bracketBarR : types.bracketR, false, true, refExpressionErrors);
          }

        case types.bracketL:
          {
            return this.parseArrayLike(types.bracketR, true, false, refExpressionErrors);
          }

        case types.braceBarL:
        case types.braceHashL:
          {
            return this.parseObjectLike(this.state.type === types.braceBarL ? types.braceBarR : types.braceR, false, true, refExpressionErrors);
          }

        case types.braceL:
          {
            return this.parseObjectLike(types.braceR, false, false, refExpressionErrors);
          }

        case types._function:
          return this.parseFunctionOrFunctionSent();

        case types.at:
          this.parseDecorators();

        case types._class:
          node = this.startNode();
          this.takeDecorators(node);
          return this.parseClass(node, false);

        case types._new:
          return this.parseNewOrNewTarget();

        case types.backQuote:
          return this.parseTemplate(false);

        case types.doubleColon:
          {
            node = this.startNode();
            this.next();
            node.object = null;
            var callee = node.callee = this.parseNoCallExpr();

            if (callee.type === "MemberExpression") {
              return this.finishNode(node, "BindExpression");
            } else {
              throw this.raise(callee.start, ErrorMessages.UnsupportedBind);
            }
          }

        case types.hash:
          {
            if (this.state.inPipeline) {
              node = this.startNode();

              if (this.getPluginOption("pipelineOperator", "proposal") !== "smart") {
                this.raise(node.start, ErrorMessages.PrimaryTopicRequiresSmartPipeline);
              }

              this.next();

              if (!this.primaryTopicReferenceIsAllowedInCurrentTopicContext()) {
                this.raise(node.start, ErrorMessages.PrimaryTopicNotAllowed);
              }

              this.registerTopicReference();
              return this.finishNode(node, "PipelinePrimaryTopicReference");
            }

            var nextCh = this.input.codePointAt(this.state.end);

            if (isIdentifierStart(nextCh) || nextCh === 92) {
              var start = this.state.start;
              node = this.parseMaybePrivateName(true);

              if (this.match(types._in)) {
                this.expectPlugin("privateIn");
                this.classScope.usePrivateName(node.id.name, node.start);
              } else if (this.hasPlugin("privateIn")) {
                this.raise(this.state.start, ErrorMessages.PrivateInExpectedIn, node.id.name);
              } else {
                throw this.unexpected(start);
              }

              return node;
            }
          }

        case types.relational:
          {
            if (this.state.value === "<") {
              var lookaheadCh = this.input.codePointAt(this.nextTokenStart());

              if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
                this.expectOnePlugin(["jsx", "flow", "typescript"]);
              }
            }
          }

        default:
          throw this.unexpected();
      }
    }
  }, {
    key: "parseAsyncArrowUnaryFunction",
    value: function parseAsyncArrowUnaryFunction(id) {
      var node = this.startNodeAtNode(id);
      this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
      var params = [this.parseIdentifier()];
      this.prodParam.exit();

      if (this.hasPrecedingLineBreak()) {
        this.raise(this.state.pos, ErrorMessages.LineTerminatorBeforeArrow);
      }

      this.expect(types.arrow);
      this.parseArrowExpression(node, params, true);
      return node;
    }
  }, {
    key: "parseDo",
    value: function parseDo() {
      this.expectPlugin("doExpressions");
      var node = this.startNode();
      this.next();
      var oldLabels = this.state.labels;
      this.state.labels = [];
      node.body = this.parseBlock();
      this.state.labels = oldLabels;
      return this.finishNode(node, "DoExpression");
    }
  }, {
    key: "parseSuper",
    value: function parseSuper() {
      var node = this.startNode();
      this.next();

      if (this.match(types.parenL) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod) {
        this.raise(node.start, ErrorMessages.SuperNotAllowed);
      } else if (!this.scope.allowSuper && !this.options.allowSuperOutsideMethod) {
        this.raise(node.start, ErrorMessages.UnexpectedSuper);
      }

      if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
        this.raise(node.start, ErrorMessages.UnsupportedSuper);
      }

      return this.finishNode(node, "Super");
    }
  }, {
    key: "parseBooleanLiteral",
    value: function parseBooleanLiteral() {
      var node = this.startNode();
      node.value = this.match(types._true);
      this.next();
      return this.finishNode(node, "BooleanLiteral");
    }
  }, {
    key: "parseMaybePrivateName",
    value: function parseMaybePrivateName(isPrivateNameAllowed) {
      var isPrivate = this.match(types.hash);

      if (isPrivate) {
        this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);

        if (!isPrivateNameAllowed) {
          this.raise(this.state.pos, ErrorMessages.UnexpectedPrivateField);
        }

        var node = this.startNode();
        this.next();
        this.assertNoSpace("Unexpected space between # and identifier");
        node.id = this.parseIdentifier(true);
        return this.finishNode(node, "PrivateName");
      } else {
        return this.parseIdentifier(true);
      }
    }
  }, {
    key: "parseFunctionOrFunctionSent",
    value: function parseFunctionOrFunctionSent() {
      var node = this.startNode();
      this.next();

      if (this.prodParam.hasYield && this.match(types.dot)) {
        var meta = this.createIdentifier(this.startNodeAtNode(node), "function");
        this.next();
        return this.parseMetaProperty(node, meta, "sent");
      }

      return this.parseFunction(node);
    }
  }, {
    key: "parseMetaProperty",
    value: function parseMetaProperty(node, meta, propertyName) {
      node.meta = meta;

      if (meta.name === "function" && propertyName === "sent") {
        if (this.isContextual(propertyName)) {
          this.expectPlugin("functionSent");
        } else if (!this.hasPlugin("functionSent")) {
          this.unexpected();
        }
      }

      var containsEsc = this.state.containsEsc;
      node.property = this.parseIdentifier(true);

      if (node.property.name !== propertyName || containsEsc) {
        this.raise(node.property.start, ErrorMessages.UnsupportedMetaProperty, meta.name, propertyName);
      }

      return this.finishNode(node, "MetaProperty");
    }
  }, {
    key: "parseImportMetaProperty",
    value: function parseImportMetaProperty(node) {
      var id = this.createIdentifier(this.startNodeAtNode(node), "import");
      this.next();

      if (this.isContextual("meta")) {
        if (!this.inModule) {
          this.raiseWithData(id.start, {
            code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
          }, ErrorMessages.ImportMetaOutsideModule);
        }

        this.sawUnambiguousESM = true;
      }

      return this.parseMetaProperty(node, id, "meta");
    }
  }, {
    key: "parseLiteral",
    value: function parseLiteral(value, type, startPos, startLoc) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      var node = this.startNodeAt(startPos, startLoc);
      this.addExtra(node, "rawValue", value);
      this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
      node.value = value;
      this.next();
      return this.finishNode(node, type);
    }
  }, {
    key: "parseParenAndDistinguishExpression",
    value: function parseParenAndDistinguishExpression(canBeArrow) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var val;
      this.next();
      this.expressionScope.enter(newArrowHeadScope());
      var oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      var oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = true;
      this.state.inFSharpPipelineDirectBody = false;
      var innerStartPos = this.state.start;
      var innerStartLoc = this.state.startLoc;
      var exprList = [];
      var refExpressionErrors = new ExpressionErrors();
      var refNeedsArrowPos = {
        start: 0
      };
      var first = true;
      var spreadStart;
      var optionalCommaStart;

      while (!this.match(types.parenR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma, refNeedsArrowPos.start || null);

          if (this.match(types.parenR)) {
            optionalCommaStart = this.state.start;
            break;
          }
        }

        if (this.match(types.ellipsis)) {
          var spreadNodeStartPos = this.state.start;
          var spreadNodeStartLoc = this.state.startLoc;
          spreadStart = this.state.start;
          exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartPos, spreadNodeStartLoc));
          this.checkCommaAfterRest(41);
          break;
        } else {
          exprList.push(this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem, refNeedsArrowPos));
        }
      }

      var innerEndPos = this.state.lastTokEnd;
      var innerEndLoc = this.state.lastTokEndLoc;
      this.expect(types.parenR);
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      var arrowNode = this.startNodeAt(startPos, startLoc);

      if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
        this.expressionScope.validateAsPattern();
        this.expressionScope.exit();
        this.parseArrowExpression(arrowNode, exprList, false);
        return arrowNode;
      }

      this.expressionScope.exit();

      if (!exprList.length) {
        this.unexpected(this.state.lastTokStart);
      }

      if (optionalCommaStart) this.unexpected(optionalCommaStart);
      if (spreadStart) this.unexpected(spreadStart);
      this.checkExpressionErrors(refExpressionErrors, true);
      if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);
      this.toReferencedListDeep(exprList, true);

      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }

      if (!this.options.createParenthesizedExpressions) {
        this.addExtra(val, "parenthesized", true);
        this.addExtra(val, "parenStart", startPos);
        return val;
      }

      var parenExpression = this.startNodeAt(startPos, startLoc);
      parenExpression.expression = val;
      this.finishNode(parenExpression, "ParenthesizedExpression");
      return parenExpression;
    }
  }, {
    key: "shouldParseArrow",
    value: function shouldParseArrow() {
      return !this.canInsertSemicolon();
    }
  }, {
    key: "parseArrow",
    value: function parseArrow(node) {
      if (this.eat(types.arrow)) {
        return node;
      }
    }
  }, {
    key: "parseParenItem",
    value: function parseParenItem(node, startPos, startLoc) {
      return node;
    }
  }, {
    key: "parseNewOrNewTarget",
    value: function parseNewOrNewTarget() {
      var node = this.startNode();
      this.next();

      if (this.match(types.dot)) {
        var meta = this.createIdentifier(this.startNodeAtNode(node), "new");
        this.next();
        var metaProp = this.parseMetaProperty(node, meta, "target");

        if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
          var error = ErrorMessages.UnexpectedNewTarget;

          if (this.hasPlugin("classProperties")) {
            error += " or class properties";
          }

          this.raise(metaProp.start, error);
        }

        return metaProp;
      }

      return this.parseNew(node);
    }
  }, {
    key: "parseNew",
    value: function parseNew(node) {
      node.callee = this.parseNoCallExpr();

      if (node.callee.type === "Import") {
        this.raise(node.callee.start, ErrorMessages.ImportCallNotNewExpression);
      } else if (node.callee.type === "OptionalMemberExpression" || node.callee.type === "OptionalCallExpression") {
        this.raise(this.state.lastTokEnd, ErrorMessages.OptionalChainingNoNew);
      } else if (this.eat(types.questionDot)) {
        this.raise(this.state.start, ErrorMessages.OptionalChainingNoNew);
      }

      this.parseNewArguments(node);
      return this.finishNode(node, "NewExpression");
    }
  }, {
    key: "parseNewArguments",
    value: function parseNewArguments(node) {
      if (this.eat(types.parenL)) {
        var args = this.parseExprList(types.parenR);
        this.toReferencedList(args);
        node.arguments = args;
      } else {
        node.arguments = [];
      }
    }
  }, {
    key: "parseTemplateElement",
    value: function parseTemplateElement(isTagged) {
      var elem = this.startNode();

      if (this.state.value === null) {
        if (!isTagged) {
          this.raise(this.state.start + 1, ErrorMessages.InvalidEscapeSequenceTemplate);
        }
      }

      elem.value = {
        raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
        cooked: this.state.value
      };
      this.next();
      elem.tail = this.match(types.backQuote);
      return this.finishNode(elem, "TemplateElement");
    }
  }, {
    key: "parseTemplate",
    value: function parseTemplate(isTagged) {
      var node = this.startNode();
      this.next();
      node.expressions = [];
      var curElt = this.parseTemplateElement(isTagged);
      node.quasis = [curElt];

      while (!curElt.tail) {
        this.expect(types.dollarBraceL);
        node.expressions.push(this.parseTemplateSubstitution());
        this.expect(types.braceR);
        node.quasis.push(curElt = this.parseTemplateElement(isTagged));
      }

      this.next();
      return this.finishNode(node, "TemplateLiteral");
    }
  }, {
    key: "parseTemplateSubstitution",
    value: function parseTemplateSubstitution() {
      return this.parseExpression();
    }
  }, {
    key: "parseObjectLike",
    value: function parseObjectLike(close, isPattern, isRecord, refExpressionErrors) {
      if (isRecord) {
        this.expectPlugin("recordAndTuple");
      }

      var oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      var propHash = Object.create(null);
      var first = true;
      var node = this.startNode();
      node.properties = [];
      this.next();

      while (!this.match(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);

          if (this.match(close)) {
            this.addExtra(node, "trailingComma", this.state.lastTokStart);
            break;
          }
        }

        var prop = this.parsePropertyDefinition(isPattern, refExpressionErrors);

        if (!isPattern) {
          this.checkProto(prop, isRecord, propHash, refExpressionErrors);
        }

        if (isRecord && prop.type !== "ObjectProperty" && prop.type !== "SpreadElement") {
          this.raise(prop.start, ErrorMessages.InvalidRecordProperty);
        }

        if (prop.shorthand) {
          this.addExtra(prop, "shorthand", true);
        }

        node.properties.push(prop);
      }

      this.state.exprAllowed = false;
      this.next();
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      var type = "ObjectExpression";

      if (isPattern) {
        type = "ObjectPattern";
      } else if (isRecord) {
        type = "RecordExpression";
      }

      return this.finishNode(node, type);
    }
  }, {
    key: "maybeAsyncOrAccessorProp",
    value: function maybeAsyncOrAccessorProp(prop) {
      return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(types.bracketL) || this.match(types.star));
    }
  }, {
    key: "parsePropertyDefinition",
    value: function parsePropertyDefinition(isPattern, refExpressionErrors) {
      var decorators = [];

      if (this.match(types.at)) {
        if (this.hasPlugin("decorators")) {
          this.raise(this.state.start, ErrorMessages.UnsupportedPropertyDecorator);
        }

        while (this.match(types.at)) {
          decorators.push(this.parseDecorator());
        }
      }

      var prop = this.startNode();
      var isGenerator = false;
      var isAsync = false;
      var isAccessor = false;
      var startPos;
      var startLoc;

      if (this.match(types.ellipsis)) {
        if (decorators.length) this.unexpected();

        if (isPattern) {
          this.next();
          prop.argument = this.parseIdentifier();
          this.checkCommaAfterRest(125);
          return this.finishNode(prop, "RestElement");
        }

        return this.parseSpread();
      }

      if (decorators.length) {
        prop.decorators = decorators;
        decorators = [];
      }

      prop.method = false;

      if (isPattern || refExpressionErrors) {
        startPos = this.state.start;
        startLoc = this.state.startLoc;
      }

      if (!isPattern) {
        isGenerator = this.eat(types.star);
      }

      var containsEsc = this.state.containsEsc;
      var key = this.parsePropertyName(prop, false);

      if (!isPattern && !isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
        var keyName = key.name;

        if (keyName === "async" && !this.hasPrecedingLineBreak()) {
          isAsync = true;
          isGenerator = this.eat(types.star);
          this.parsePropertyName(prop, false);
        }

        if (keyName === "get" || keyName === "set") {
          isAccessor = true;
          prop.kind = keyName;

          if (this.match(types.star)) {
            isGenerator = true;
            this.raise(this.state.pos, ErrorMessages.AccessorIsGenerator, keyName);
            this.next();
          }

          this.parsePropertyName(prop, false);
        }
      }

      this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
      return prop;
    }
  }, {
    key: "getGetterSetterExpectedParamCount",
    value: function getGetterSetterExpectedParamCount(method) {
      return method.kind === "get" ? 0 : 1;
    }
  }, {
    key: "getObjectOrClassMethodParams",
    value: function getObjectOrClassMethodParams(method) {
      return method.params;
    }
  }, {
    key: "checkGetterSetterParams",
    value: function checkGetterSetterParams(method) {
      var _params;

      var paramCount = this.getGetterSetterExpectedParamCount(method);
      var params = this.getObjectOrClassMethodParams(method);
      var start = method.start;

      if (params.length !== paramCount) {
        if (method.kind === "get") {
          this.raise(start, ErrorMessages.BadGetterArity);
        } else {
          this.raise(start, ErrorMessages.BadSetterArity);
        }
      }

      if (method.kind === "set" && ((_params = params[params.length - 1]) == null ? void 0 : _params.type) === "RestElement") {
        this.raise(start, ErrorMessages.BadSetterRestParameter);
      }
    }
  }, {
    key: "parseObjectMethod",
    value: function parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
      if (isAccessor) {
        this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
        this.checkGetterSetterParams(prop);
        return prop;
      }

      if (isAsync || isGenerator || this.match(types.parenL)) {
        if (isPattern) this.unexpected();
        prop.kind = "method";
        prop.method = true;
        return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
      }
    }
  }, {
    key: "parseObjectProperty",
    value: function parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
      prop.shorthand = false;

      if (this.eat(types.colon)) {
        prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(refExpressionErrors);
        return this.finishNode(prop, "ObjectProperty");
      }

      if (!prop.computed && prop.key.type === "Identifier") {
        this.checkReservedWord(prop.key.name, prop.key.start, true, false);

        if (isPattern) {
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
        } else if (this.match(types.eq) && refExpressionErrors) {
          if (refExpressionErrors.shorthandAssign === -1) {
            refExpressionErrors.shorthandAssign = this.state.start;
          }

          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
        } else {
          prop.value = prop.key.__clone();
        }

        prop.shorthand = true;
        return this.finishNode(prop, "ObjectProperty");
      }
    }
  }, {
    key: "parseObjPropValue",
    value: function parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
      var node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);
      if (!node) this.unexpected();
      return node;
    }
  }, {
    key: "parsePropertyName",
    value: function parsePropertyName(prop, isPrivateNameAllowed) {
      if (this.eat(types.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssignAllowIn();
        this.expect(types.bracketR);
      } else {
        var oldInPropertyName = this.state.inPropertyName;
        this.state.inPropertyName = true;
        prop.key = this.match(types.num) || this.match(types.string) || this.match(types.bigint) || this.match(types.decimal) ? this.parseExprAtom() : this.parseMaybePrivateName(isPrivateNameAllowed);

        if (prop.key.type !== "PrivateName") {
          prop.computed = false;
        }

        this.state.inPropertyName = oldInPropertyName;
      }

      return prop.key;
    }
  }, {
    key: "initFunction",
    value: function initFunction(node, isAsync) {
      node.id = null;
      node.generator = false;
      node.async = !!isAsync;
    }
  }, {
    key: "parseMethod",
    value: function parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type) {
      var inClassScope = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      this.initFunction(node, isAsync);
      node.generator = !!isGenerator;
      var allowModifiers = isConstructor;
      this.scope.enter(SCOPE_FUNCTION | SCOPE_SUPER | (inClassScope ? SCOPE_CLASS : 0) | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
      this.prodParam.enter(functionFlags(isAsync, node.generator));
      this.parseFunctionParams(node, allowModifiers);
      this.parseFunctionBodyAndFinish(node, type, true);
      this.prodParam.exit();
      this.scope.exit();
      return node;
    }
  }, {
    key: "parseArrayLike",
    value: function parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
      if (isTuple) {
        this.expectPlugin("recordAndTuple");
      }

      var oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      var node = this.startNode();
      this.next();
      node.elements = this.parseExprList(close, !isTuple, refExpressionErrors, node);
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      return this.finishNode(node, isTuple ? "TupleExpression" : "ArrayExpression");
    }
  }, {
    key: "parseArrowExpression",
    value: function parseArrowExpression(node, params, isAsync, trailingCommaPos) {
      this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
      var flags = functionFlags(isAsync, false);

      if (!this.match(types.bracketL) && this.prodParam.hasIn) {
        flags |= PARAM_IN;
      }

      this.prodParam.enter(flags);
      this.initFunction(node, isAsync);
      var oldMaybeInArrowParameters = this.state.maybeInArrowParameters;

      if (params) {
        this.state.maybeInArrowParameters = true;
        this.setArrowFunctionParameters(node, params, trailingCommaPos);
      }

      this.state.maybeInArrowParameters = false;
      this.parseFunctionBody(node, true);
      this.prodParam.exit();
      this.scope.exit();
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return this.finishNode(node, "ArrowFunctionExpression");
    }
  }, {
    key: "setArrowFunctionParameters",
    value: function setArrowFunctionParameters(node, params, trailingCommaPos) {
      node.params = this.toAssignableList(params, trailingCommaPos, false);
    }
  }, {
    key: "parseFunctionBodyAndFinish",
    value: function parseFunctionBodyAndFinish(node, type) {
      var isMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.parseFunctionBody(node, false, isMethod);
      this.finishNode(node, type);
    }
  }, {
    key: "parseFunctionBody",
    value: function parseFunctionBody(node, allowExpression) {
      var _this46 = this;

      var isMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isExpression = allowExpression && !this.match(types.braceL);
      this.expressionScope.enter(newExpressionScope());

      if (isExpression) {
        node.body = this.parseMaybeAssign();
        this.checkParams(node, false, allowExpression, false);
      } else {
        var oldStrict = this.state.strict;
        var oldLabels = this.state.labels;
        this.state.labels = [];
        this.prodParam.enter(this.prodParam.currentFlags() | PARAM_RETURN);
        node.body = this.parseBlock(true, false, function (hasStrictModeDirective) {
          var nonSimple = !_this46.isSimpleParamList(node.params);

          if (hasStrictModeDirective && nonSimple) {
            var errorPos = (node.kind === "method" || node.kind === "constructor") && !!node.key ? node.key.end : node.start;

            _this46.raise(errorPos, ErrorMessages.IllegalLanguageModeDirective);
          }

          var strictModeChanged = !oldStrict && _this46.state.strict;

          _this46.checkParams(node, !_this46.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);

          if (_this46.state.strict && node.id) {
            _this46.checkLVal(node.id, "function name", BIND_OUTSIDE, undefined, undefined, strictModeChanged);
          }
        });
        this.prodParam.exit();
        this.expressionScope.exit();
        this.state.labels = oldLabels;
      }
    }
  }, {
    key: "isSimpleParamList",
    value: function isSimpleParamList(params) {
      for (var i = 0, len = params.length; i < len; i++) {
        if (params[i].type !== "Identifier") return false;
      }

      return true;
    }
  }, {
    key: "checkParams",
    value: function checkParams(node, allowDuplicates, isArrowFunction) {
      var strictModeChanged = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var checkClashes = new Set();

      for (var _i2 = 0, _node$params = node.params; _i2 < _node$params.length; _i2++) {
        var param = _node$params[_i2];
        this.checkLVal(param, "function parameter list", BIND_VAR, allowDuplicates ? null : checkClashes, undefined, strictModeChanged);
      }
    }
  }, {
    key: "parseExprList",
    value: function parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
      var elts = [];
      var first = true;

      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);

          if (this.match(close)) {
            if (nodeForExtra) {
              this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
            }

            this.next();
            break;
          }
        }

        elts.push(this.parseExprListItem(allowEmpty, refExpressionErrors));
      }

      return elts;
    }
  }, {
    key: "parseExprListItem",
    value: function parseExprListItem(allowEmpty, refExpressionErrors, refNeedsArrowPos, allowPlaceholder) {
      var elt;

      if (this.match(types.comma)) {
        if (!allowEmpty) {
          this.raise(this.state.pos, ErrorMessages.UnexpectedToken, ",");
        }

        elt = null;
      } else if (this.match(types.ellipsis)) {
        var spreadNodeStartPos = this.state.start;
        var spreadNodeStartLoc = this.state.startLoc;
        elt = this.parseParenItem(this.parseSpread(refExpressionErrors, refNeedsArrowPos), spreadNodeStartPos, spreadNodeStartLoc);
      } else if (this.match(types.question)) {
        this.expectPlugin("partialApplication");

        if (!allowPlaceholder) {
          this.raise(this.state.start, ErrorMessages.UnexpectedArgumentPlaceholder);
        }

        var node = this.startNode();
        this.next();
        elt = this.finishNode(node, "ArgumentPlaceholder");
      } else {
        elt = this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem, refNeedsArrowPos);
      }

      return elt;
    }
  }, {
    key: "parseIdentifier",
    value: function parseIdentifier(liberal) {
      var node = this.startNode();
      var name = this.parseIdentifierName(node.start, liberal);
      return this.createIdentifier(node, name);
    }
  }, {
    key: "createIdentifier",
    value: function createIdentifier(node, name) {
      node.name = name;
      node.loc.identifierName = name;
      return this.finishNode(node, "Identifier");
    }
  }, {
    key: "parseIdentifierName",
    value: function parseIdentifierName(pos, liberal) {
      var name;
      var {
        start: start,
        type: type
      } = this.state;

      if (type === types.name) {
        name = this.state.value;
      } else if (type.keyword) {
        name = type.keyword;
        var curContext = this.curContext();

        if ((type === types._class || type === types._function) && (curContext === types$1.functionStatement || curContext === types$1.functionExpression)) {
          this.state.context.pop();
        }
      } else {
        throw this.unexpected();
      }

      if (liberal) {
        this.state.type = types.name;
      } else {
        this.checkReservedWord(name, start, !!type.keyword, false);
      }

      this.next();
      return name;
    }
  }, {
    key: "checkReservedWord",
    value: function checkReservedWord(word, startLoc, checkKeywords, isBinding) {
      if (this.prodParam.hasYield && word === "yield") {
        this.raise(startLoc, ErrorMessages.YieldBindingIdentifier);
        return;
      }

      if (word === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(startLoc, ErrorMessages.AwaitBindingIdentifier);
          return;
        } else {
          this.expressionScope.recordAsyncArrowParametersError(startLoc, ErrorMessages.AwaitBindingIdentifier);
        }
      }

      if (this.scope.inClass && !this.scope.inNonArrowFunction && word === "arguments") {
        this.raise(startLoc, ErrorMessages.ArgumentsInClass);
        return;
      }

      if (checkKeywords && isKeyword(word)) {
        this.raise(startLoc, ErrorMessages.UnexpectedKeyword, word);
        return;
      }

      var reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;

      if (reservedTest(word, this.inModule)) {
        if (!this.prodParam.hasAwait && word === "await") {
          this.raise(startLoc, this.hasPlugin("topLevelAwait") ? ErrorMessages.AwaitNotInAsyncContext : ErrorMessages.AwaitNotInAsyncFunction);
        } else {
          this.raise(startLoc, ErrorMessages.UnexpectedReservedWord, word);
        }
      }
    }
  }, {
    key: "isAwaitAllowed",
    value: function isAwaitAllowed() {
      if (this.scope.inFunction) return this.prodParam.hasAwait;
      if (this.options.allowAwaitOutsideFunction) return true;

      if (this.hasPlugin("topLevelAwait")) {
        return this.inModule && this.prodParam.hasAwait;
      }

      return false;
    }
  }, {
    key: "parseAwait",
    value: function parseAwait() {
      var node = this.startNode();
      this.next();
      this.expressionScope.recordParameterInitializerError(node.start, ErrorMessages.AwaitExpressionFormalParameter);

      if (this.eat(types.star)) {
        this.raise(node.start, ErrorMessages.ObsoleteAwaitStar);
      }

      if (!this.scope.inFunction && !this.options.allowAwaitOutsideFunction) {
        if (this.hasPrecedingLineBreak() || this.match(types.plusMin) || this.match(types.parenL) || this.match(types.bracketL) || this.match(types.backQuote) || this.match(types.regexp) || this.match(types.slash) || this.hasPlugin("v8intrinsic") && this.match(types.modulo)) {
          this.ambiguousScriptDifferentAst = true;
        } else {
          this.sawUnambiguousESM = true;
        }
      }

      if (!this.state.soloAwait) {
        node.argument = this.parseMaybeUnary();
      }

      return this.finishNode(node, "AwaitExpression");
    }
  }, {
    key: "parseYield",
    value: function parseYield() {
      var node = this.startNode();
      this.expressionScope.recordParameterInitializerError(node.start, ErrorMessages.YieldInParameter);
      this.next();

      if (this.match(types.semi) || !this.match(types.star) && !this.state.type.startsExpr || this.hasPrecedingLineBreak()) {
        node.delegate = false;
        node.argument = null;
      } else {
        node.delegate = this.eat(types.star);
        node.argument = this.parseMaybeAssign();
      }

      return this.finishNode(node, "YieldExpression");
    }
  }, {
    key: "checkPipelineAtInfixOperator",
    value: function checkPipelineAtInfixOperator(left, leftStartPos) {
      if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
        if (left.type === "SequenceExpression") {
          this.raise(leftStartPos, ErrorMessages.PipelineHeadSequenceExpression);
        }
      }
    }
  }, {
    key: "parseSmartPipelineBody",
    value: function parseSmartPipelineBody(childExpression, startPos, startLoc) {
      this.checkSmartPipelineBodyEarlyErrors(childExpression, startPos);
      return this.parseSmartPipelineBodyInStyle(childExpression, startPos, startLoc);
    }
  }, {
    key: "checkSmartPipelineBodyEarlyErrors",
    value: function checkSmartPipelineBodyEarlyErrors(childExpression, startPos) {
      if (this.match(types.arrow)) {
        throw this.raise(this.state.start, ErrorMessages.PipelineBodyNoArrow);
      } else if (childExpression.type === "SequenceExpression") {
        this.raise(startPos, ErrorMessages.PipelineBodySequenceExpression);
      }
    }
  }, {
    key: "parseSmartPipelineBodyInStyle",
    value: function parseSmartPipelineBodyInStyle(childExpression, startPos, startLoc) {
      var bodyNode = this.startNodeAt(startPos, startLoc);
      var isSimpleReference = this.isSimpleReference(childExpression);

      if (isSimpleReference) {
        bodyNode.callee = childExpression;
      } else {
        if (!this.topicReferenceWasUsedInCurrentTopicContext()) {
          this.raise(startPos, ErrorMessages.PipelineTopicUnused);
        }

        bodyNode.expression = childExpression;
      }

      return this.finishNode(bodyNode, isSimpleReference ? "PipelineBareFunction" : "PipelineTopicExpression");
    }
  }, {
    key: "isSimpleReference",
    value: function isSimpleReference(expression) {
      switch (expression.type) {
        case "MemberExpression":
          return !expression.computed && this.isSimpleReference(expression.object);

        case "Identifier":
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "withTopicPermittingContext",
    value: function withTopicPermittingContext(callback) {
      var outerContextTopicState = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };

      try {
        return callback();
      } finally {
        this.state.topicContext = outerContextTopicState;
      }
    }
  }, {
    key: "withTopicForbiddingContext",
    value: function withTopicForbiddingContext(callback) {
      var outerContextTopicState = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };

      try {
        return callback();
      } finally {
        this.state.topicContext = outerContextTopicState;
      }
    }
  }, {
    key: "withSoloAwaitPermittingContext",
    value: function withSoloAwaitPermittingContext(callback) {
      var outerContextSoloAwaitState = this.state.soloAwait;
      this.state.soloAwait = true;

      try {
        return callback();
      } finally {
        this.state.soloAwait = outerContextSoloAwaitState;
      }
    }
  }, {
    key: "allowInAnd",
    value: function allowInAnd(callback) {
      var flags = this.prodParam.currentFlags();
      var prodParamToSet = PARAM_IN & ~flags;

      if (prodParamToSet) {
        this.prodParam.enter(flags | PARAM_IN);

        try {
          return callback();
        } finally {
          this.prodParam.exit();
        }
      }

      return callback();
    }
  }, {
    key: "disallowInAnd",
    value: function disallowInAnd(callback) {
      var flags = this.prodParam.currentFlags();
      var prodParamToClear = PARAM_IN & flags;

      if (prodParamToClear) {
        this.prodParam.enter(flags & ~PARAM_IN);

        try {
          return callback();
        } finally {
          this.prodParam.exit();
        }
      }

      return callback();
    }
  }, {
    key: "registerTopicReference",
    value: function registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }
  }, {
    key: "primaryTopicReferenceIsAllowedInCurrentTopicContext",
    value: function primaryTopicReferenceIsAllowedInCurrentTopicContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
  }, {
    key: "topicReferenceWasUsedInCurrentTopicContext",
    value: function topicReferenceWasUsedInCurrentTopicContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }
  }, {
    key: "parseFSharpPipelineBody",
    value: function parseFSharpPipelineBody(prec) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      var oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = true;
      var ret = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, prec);
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      return ret;
    }
  }]);

  return ExpressionParser;
}(LValParser);

var loopLabel = {
  kind: "loop"
},
    switchLabel = {
  kind: "switch"
};
var FUNC_NO_FLAGS = 0,
    FUNC_STATEMENT = 1,
    FUNC_HANGING_STATEMENT = 2,
    FUNC_NULLABLE_ID = 4;
var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;

var StatementParser = /*#__PURE__*/function (_ExpressionParser) {
  _inherits(StatementParser, _ExpressionParser);

  var _super17 = _createSuper(StatementParser);

  function StatementParser() {
    _classCallCheck(this, StatementParser);

    return _super17.apply(this, arguments);
  }

  _createClass(StatementParser, [{
    key: "parseTopLevel",
    value: function parseTopLevel(file, program) {
      program.sourceType = this.options.sourceType;
      program.interpreter = this.parseInterpreterDirective();
      this.parseBlockBody(program, true, true, types.eof);

      if (this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) {
        for (var _i = 0, _Array$from = Array.from(this.scope.undefinedExports); _i < _Array$from.length; _i++) {
          var [name] = _Array$from[_i];
          var pos = this.scope.undefinedExports.get(name);
          this.raise(pos, ErrorMessages.ModuleExportUndefined, name);
        }
      }

      file.program = this.finishNode(program, "Program");
      file.comments = this.state.comments;
      if (this.options.tokens) file.tokens = this.tokens;
      return this.finishNode(file, "File");
    }
  }, {
    key: "stmtToDirective",
    value: function stmtToDirective(stmt) {
      var expr = stmt.expression;
      var directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
      var directive = this.startNodeAt(stmt.start, stmt.loc.start);
      var raw = this.input.slice(expr.start, expr.end);
      var val = directiveLiteral.value = raw.slice(1, -1);
      this.addExtra(directiveLiteral, "raw", raw);
      this.addExtra(directiveLiteral, "rawValue", val);
      directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);
      return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
    }
  }, {
    key: "parseInterpreterDirective",
    value: function parseInterpreterDirective() {
      if (!this.match(types.interpreterDirective)) {
        return null;
      }

      var node = this.startNode();
      node.value = this.state.value;
      this.next();
      return this.finishNode(node, "InterpreterDirective");
    }
  }, {
    key: "isLet",
    value: function isLet(context) {
      if (!this.isContextual("let")) {
        return false;
      }

      var next = this.nextTokenStart();
      var nextCh = this.input.charCodeAt(next);
      if (nextCh === 91) return true;
      if (context) return false;
      if (nextCh === 123) return true;

      if (isIdentifierStart(nextCh)) {
        var pos = next + 1;

        while (isIdentifierChar(this.input.charCodeAt(pos))) {
          ++pos;
        }

        var ident = this.input.slice(next, pos);
        if (!keywordRelationalOperator.test(ident)) return true;
      }

      return false;
    }
  }, {
    key: "parseStatement",
    value: function parseStatement(context, topLevel) {
      if (this.match(types.at)) {
        this.parseDecorators(true);
      }

      return this.parseStatementContent(context, topLevel);
    }
  }, {
    key: "parseStatementContent",
    value: function parseStatementContent(context, topLevel) {
      var starttype = this.state.type;
      var node = this.startNode();
      var kind;

      if (this.isLet(context)) {
        starttype = types._var;
        kind = "let";
      }

      switch (starttype) {
        case types._break:
        case types._continue:
          return this.parseBreakContinueStatement(node, starttype.keyword);

        case types._debugger:
          return this.parseDebuggerStatement(node);

        case types._do:
          return this.parseDoStatement(node);

        case types._for:
          return this.parseForStatement(node);

        case types._function:
          if (this.lookaheadCharCode() === 46) break;

          if (context) {
            if (this.state.strict) {
              this.raise(this.state.start, ErrorMessages.StrictFunction);
            } else if (context !== "if" && context !== "label") {
              this.raise(this.state.start, ErrorMessages.SloppyFunction);
            }
          }

          return this.parseFunctionStatement(node, false, !context);

        case types._class:
          if (context) this.unexpected();
          return this.parseClass(node, true);

        case types._if:
          return this.parseIfStatement(node);

        case types._return:
          return this.parseReturnStatement(node);

        case types._switch:
          return this.parseSwitchStatement(node);

        case types._throw:
          return this.parseThrowStatement(node);

        case types._try:
          return this.parseTryStatement(node);

        case types._const:
        case types._var:
          kind = kind || this.state.value;

          if (context && kind !== "var") {
            this.raise(this.state.start, ErrorMessages.UnexpectedLexicalDeclaration);
          }

          return this.parseVarStatement(node, kind);

        case types._while:
          return this.parseWhileStatement(node);

        case types._with:
          return this.parseWithStatement(node);

        case types.braceL:
          return this.parseBlock();

        case types.semi:
          return this.parseEmptyStatement(node);

        case types._import:
          {
            var nextTokenCharCode = this.lookaheadCharCode();

            if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
              break;
            }
          }

        case types._export:
          {
            if (!this.options.allowImportExportEverywhere && !topLevel) {
              this.raise(this.state.start, ErrorMessages.UnexpectedImportExport);
            }

            this.next();
            var result;

            if (starttype === types._import) {
              result = this.parseImport(node);

              if (result.type === "ImportDeclaration" && (!result.importKind || result.importKind === "value")) {
                this.sawUnambiguousESM = true;
              }
            } else {
              result = this.parseExport(node);

              if (result.type === "ExportNamedDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportAllDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportDefaultDeclaration") {
                this.sawUnambiguousESM = true;
              }
            }

            this.assertModuleNodeAllowed(node);
            return result;
          }

        default:
          {
            if (this.isAsyncFunction()) {
              if (context) {
                this.raise(this.state.start, ErrorMessages.AsyncFunctionInSingleStatementContext);
              }

              this.next();
              return this.parseFunctionStatement(node, true, !context);
            }
          }
      }

      var maybeName = this.state.value;
      var expr = this.parseExpression();

      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
    }
  }, {
    key: "assertModuleNodeAllowed",
    value: function assertModuleNodeAllowed(node) {
      if (!this.options.allowImportExportEverywhere && !this.inModule) {
        this.raiseWithData(node.start, {
          code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
        }, ErrorMessages.ImportOutsideModule);
      }
    }
  }, {
    key: "takeDecorators",
    value: function takeDecorators(node) {
      var decorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

      if (decorators.length) {
        node.decorators = decorators;
        this.resetStartLocationFromNode(node, decorators[0]);
        this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
      }
    }
  }, {
    key: "canHaveLeadingDecorator",
    value: function canHaveLeadingDecorator() {
      return this.match(types._class);
    }
  }, {
    key: "parseDecorators",
    value: function parseDecorators(allowExport) {
      var currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

      while (this.match(types.at)) {
        var decorator = this.parseDecorator();
        currentContextDecorators.push(decorator);
      }

      if (this.match(types._export)) {
        if (!allowExport) {
          this.unexpected();
        }

        if (this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.raise(this.state.start, ErrorMessages.DecoratorExportClass);
        }
      } else if (!this.canHaveLeadingDecorator()) {
        throw this.raise(this.state.start, ErrorMessages.UnexpectedLeadingDecorator);
      }
    }
  }, {
    key: "parseDecorator",
    value: function parseDecorator() {
      this.expectOnePlugin(["decorators-legacy", "decorators"]);
      var node = this.startNode();
      this.next();

      if (this.hasPlugin("decorators")) {
        this.state.decoratorStack.push([]);
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        var expr;

        if (this.eat(types.parenL)) {
          expr = this.parseExpression();
          this.expect(types.parenR);
        } else {
          expr = this.parseIdentifier(false);

          while (this.eat(types.dot)) {
            var _node12 = this.startNodeAt(startPos, startLoc);

            _node12.object = expr;
            _node12.property = this.parseIdentifier(true);
            _node12.computed = false;
            expr = this.finishNode(_node12, "MemberExpression");
          }
        }

        node.expression = this.parseMaybeDecoratorArguments(expr);
        this.state.decoratorStack.pop();
      } else {
        node.expression = this.parseExprSubscripts();
      }

      return this.finishNode(node, "Decorator");
    }
  }, {
    key: "parseMaybeDecoratorArguments",
    value: function parseMaybeDecoratorArguments(expr) {
      if (this.eat(types.parenL)) {
        var node = this.startNodeAtNode(expr);
        node.callee = expr;
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
        this.toReferencedList(node.arguments);
        return this.finishNode(node, "CallExpression");
      }

      return expr;
    }
  }, {
    key: "parseBreakContinueStatement",
    value: function parseBreakContinueStatement(node, keyword) {
      var isBreak = keyword === "break";
      this.next();

      if (this.isLineTerminator()) {
        node.label = null;
      } else {
        node.label = this.parseIdentifier();
        this.semicolon();
      }

      this.verifyBreakContinue(node, keyword);
      return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
    }
  }, {
    key: "verifyBreakContinue",
    value: function verifyBreakContinue(node, keyword) {
      var isBreak = keyword === "break";
      var i;

      for (i = 0; i < this.state.labels.length; ++i) {
        var lab = this.state.labels[i];

        if (node.label == null || lab.name === node.label.name) {
          if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
          if (node.label && isBreak) break;
        }
      }

      if (i === this.state.labels.length) {
        this.raise(node.start, ErrorMessages.IllegalBreakContinue, keyword);
      }
    }
  }, {
    key: "parseDebuggerStatement",
    value: function parseDebuggerStatement(node) {
      this.next();
      this.semicolon();
      return this.finishNode(node, "DebuggerStatement");
    }
  }, {
    key: "parseHeaderExpression",
    value: function parseHeaderExpression() {
      this.expect(types.parenL);
      var val = this.parseExpression();
      this.expect(types.parenR);
      return val;
    }
  }, {
    key: "parseDoStatement",
    value: function parseDoStatement(node) {
      var _this47 = this;

      this.next();
      this.state.labels.push(loopLabel);
      node.body = this.withTopicForbiddingContext(function () {
        return _this47.parseStatement("do");
      });
      this.state.labels.pop();
      this.expect(types._while);
      node.test = this.parseHeaderExpression();
      this.eat(types.semi);
      return this.finishNode(node, "DoWhileStatement");
    }
  }, {
    key: "parseForStatement",
    value: function parseForStatement(node) {
      this.next();
      this.state.labels.push(loopLabel);
      var awaitAt = -1;

      if (this.isAwaitAllowed() && this.eatContextual("await")) {
        awaitAt = this.state.lastTokStart;
      }

      this.scope.enter(SCOPE_OTHER);
      this.expect(types.parenL);

      if (this.match(types.semi)) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }

        return this.parseFor(node, null);
      }

      var isLet = this.isLet();

      if (this.match(types._var) || this.match(types._const) || isLet) {
        var _init = this.startNode();

        var kind = isLet ? "let" : this.state.value;
        this.next();
        this.parseVar(_init, true, kind);
        this.finishNode(_init, "VariableDeclaration");

        if ((this.match(types._in) || this.isContextual("of")) && _init.declarations.length === 1) {
          return this.parseForIn(node, _init, awaitAt);
        }

        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }

        return this.parseFor(node, _init);
      }

      var refExpressionErrors = new ExpressionErrors();
      var init = this.parseExpression(true, refExpressionErrors);

      if (this.match(types._in) || this.isContextual("of")) {
        this.toAssignable(init, true);
        var description = this.isContextual("of") ? "for-of statement" : "for-in statement";
        this.checkLVal(init, description);
        return this.parseForIn(node, init, awaitAt);
      } else {
        this.checkExpressionErrors(refExpressionErrors, true);
      }

      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, init);
    }
  }, {
    key: "parseFunctionStatement",
    value: function parseFunctionStatement(node, isAsync, declarationPosition) {
      this.next();
      return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), isAsync);
    }
  }, {
    key: "parseIfStatement",
    value: function parseIfStatement(node) {
      this.next();
      node.test = this.parseHeaderExpression();
      node.consequent = this.parseStatement("if");
      node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
      return this.finishNode(node, "IfStatement");
    }
  }, {
    key: "parseReturnStatement",
    value: function parseReturnStatement(node) {
      if (!this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction) {
        this.raise(this.state.start, ErrorMessages.IllegalReturn);
      }

      this.next();

      if (this.isLineTerminator()) {
        node.argument = null;
      } else {
        node.argument = this.parseExpression();
        this.semicolon();
      }

      return this.finishNode(node, "ReturnStatement");
    }
  }, {
    key: "parseSwitchStatement",
    value: function parseSwitchStatement(node) {
      this.next();
      node.discriminant = this.parseHeaderExpression();
      var cases = node.cases = [];
      this.expect(types.braceL);
      this.state.labels.push(switchLabel);
      this.scope.enter(SCOPE_OTHER);
      var cur;

      for (var sawDefault; !this.match(types.braceR);) {
        if (this.match(types._case) || this.match(types._default)) {
          var isCase = this.match(types._case);
          if (cur) this.finishNode(cur, "SwitchCase");
          cases.push(cur = this.startNode());
          cur.consequent = [];
          this.next();

          if (isCase) {
            cur.test = this.parseExpression();
          } else {
            if (sawDefault) {
              this.raise(this.state.lastTokStart, ErrorMessages.MultipleDefaultsInSwitch);
            }

            sawDefault = true;
            cur.test = null;
          }

          this.expect(types.colon);
        } else {
          if (cur) {
            cur.consequent.push(this.parseStatement(null));
          } else {
            this.unexpected();
          }
        }
      }

      this.scope.exit();
      if (cur) this.finishNode(cur, "SwitchCase");
      this.next();
      this.state.labels.pop();
      return this.finishNode(node, "SwitchStatement");
    }
  }, {
    key: "parseThrowStatement",
    value: function parseThrowStatement(node) {
      this.next();

      if (this.hasPrecedingLineBreak()) {
        this.raise(this.state.lastTokEnd, ErrorMessages.NewlineAfterThrow);
      }

      node.argument = this.parseExpression();
      this.semicolon();
      return this.finishNode(node, "ThrowStatement");
    }
  }, {
    key: "parseCatchClauseParam",
    value: function parseCatchClauseParam() {
      var param = this.parseBindingAtom();
      var simple = param.type === "Identifier";
      this.scope.enter(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(param, "catch clause", BIND_LEXICAL);
      return param;
    }
  }, {
    key: "parseTryStatement",
    value: function parseTryStatement(node) {
      var _this48 = this;

      this.next();
      node.block = this.parseBlock();
      node.handler = null;

      if (this.match(types._catch)) {
        var clause = this.startNode();
        this.next();

        if (this.match(types.parenL)) {
          this.expect(types.parenL);
          clause.param = this.parseCatchClauseParam();
          this.expect(types.parenR);
        } else {
          clause.param = null;
          this.scope.enter(SCOPE_OTHER);
        }

        clause.body = this.withTopicForbiddingContext(function () {
          return _this48.parseBlock(false, false);
        });
        this.scope.exit();
        node.handler = this.finishNode(clause, "CatchClause");
      }

      node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;

      if (!node.handler && !node.finalizer) {
        this.raise(node.start, ErrorMessages.NoCatchOrFinally);
      }

      return this.finishNode(node, "TryStatement");
    }
  }, {
    key: "parseVarStatement",
    value: function parseVarStatement(node, kind) {
      this.next();
      this.parseVar(node, false, kind);
      this.semicolon();
      return this.finishNode(node, "VariableDeclaration");
    }
  }, {
    key: "parseWhileStatement",
    value: function parseWhileStatement(node) {
      var _this49 = this;

      this.next();
      node.test = this.parseHeaderExpression();
      this.state.labels.push(loopLabel);
      node.body = this.withTopicForbiddingContext(function () {
        return _this49.parseStatement("while");
      });
      this.state.labels.pop();
      return this.finishNode(node, "WhileStatement");
    }
  }, {
    key: "parseWithStatement",
    value: function parseWithStatement(node) {
      var _this50 = this;

      if (this.state.strict) {
        this.raise(this.state.start, ErrorMessages.StrictWith);
      }

      this.next();
      node.object = this.parseHeaderExpression();
      node.body = this.withTopicForbiddingContext(function () {
        return _this50.parseStatement("with");
      });
      return this.finishNode(node, "WithStatement");
    }
  }, {
    key: "parseEmptyStatement",
    value: function parseEmptyStatement(node) {
      this.next();
      return this.finishNode(node, "EmptyStatement");
    }
  }, {
    key: "parseLabeledStatement",
    value: function parseLabeledStatement(node, maybeName, expr, context) {
      for (var _i2 = 0, _this$state$labels = this.state.labels; _i2 < _this$state$labels.length; _i2++) {
        var label = _this$state$labels[_i2];

        if (label.name === maybeName) {
          this.raise(expr.start, ErrorMessages.LabelRedeclaration, maybeName);
        }
      }

      var kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;

      for (var i = this.state.labels.length - 1; i >= 0; i--) {
        var _label = this.state.labels[i];

        if (_label.statementStart === node.start) {
          _label.statementStart = this.state.start;
          _label.kind = kind;
        } else {
          break;
        }
      }

      this.state.labels.push({
        name: maybeName,
        kind: kind,
        statementStart: this.state.start
      });
      node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
      this.state.labels.pop();
      node.label = expr;
      return this.finishNode(node, "LabeledStatement");
    }
  }, {
    key: "parseExpressionStatement",
    value: function parseExpressionStatement(node, expr) {
      node.expression = expr;
      this.semicolon();
      return this.finishNode(node, "ExpressionStatement");
    }
  }, {
    key: "parseBlock",
    value: function parseBlock() {
      var allowDirectives = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var createNewLexicalScope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var afterBlockParse = arguments.length > 2 ? arguments[2] : undefined;
      var node = this.startNode();
      this.expect(types.braceL);

      if (createNewLexicalScope) {
        this.scope.enter(SCOPE_OTHER);
      }

      this.parseBlockBody(node, allowDirectives, false, types.braceR, afterBlockParse);

      if (createNewLexicalScope) {
        this.scope.exit();
      }

      return this.finishNode(node, "BlockStatement");
    }
  }, {
    key: "isValidDirective",
    value: function isValidDirective(stmt) {
      return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
    }
  }, {
    key: "parseBlockBody",
    value: function parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
      var body = node.body = [];
      var directives = node.directives = [];
      this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end, afterBlockParse);
    }
  }, {
    key: "parseBlockOrModuleBlockBody",
    value: function parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
      var octalPositions = [];
      var oldStrict = this.state.strict;
      var hasStrictModeDirective = false;
      var parsedNonDirective = false;

      while (!this.match(end)) {
        if (!parsedNonDirective && this.state.octalPositions.length) {
          octalPositions.push.apply(octalPositions, _toConsumableArray(this.state.octalPositions));
        }

        var stmt = this.parseStatement(null, topLevel);

        if (directives && !parsedNonDirective && this.isValidDirective(stmt)) {
          var directive = this.stmtToDirective(stmt);
          directives.push(directive);

          if (!hasStrictModeDirective && directive.value.value === "use strict") {
            hasStrictModeDirective = true;
            this.setStrict(true);
          }

          continue;
        }

        parsedNonDirective = true;
        body.push(stmt);
      }

      if (this.state.strict && octalPositions.length) {
        for (var _i3 = 0; _i3 < octalPositions.length; _i3++) {
          var pos = octalPositions[_i3];
          this.raise(pos, ErrorMessages.StrictOctalLiteral);
        }
      }

      if (afterBlockParse) {
        afterBlockParse.call(this, hasStrictModeDirective);
      }

      if (!oldStrict) {
        this.setStrict(false);
      }

      this.next();
    }
  }, {
    key: "parseFor",
    value: function parseFor(node, init) {
      var _this51 = this;

      node.init = init;
      this.expect(types.semi);
      node.test = this.match(types.semi) ? null : this.parseExpression();
      this.expect(types.semi);
      node.update = this.match(types.parenR) ? null : this.parseExpression();
      this.expect(types.parenR);
      node.body = this.withTopicForbiddingContext(function () {
        return _this51.parseStatement("for");
      });
      this.scope.exit();
      this.state.labels.pop();
      return this.finishNode(node, "ForStatement");
    }
  }, {
    key: "parseForIn",
    value: function parseForIn(node, init, awaitAt) {
      var _this52 = this;

      var isForIn = this.match(types._in);
      this.next();

      if (isForIn) {
        if (awaitAt > -1) this.unexpected(awaitAt);
      } else {
        node.await = awaitAt > -1;
      }

      if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
        this.raise(init.start, ErrorMessages.ForInOfLoopInitializer, isForIn ? "for-in" : "for-of");
      } else if (init.type === "AssignmentPattern") {
        this.raise(init.start, ErrorMessages.InvalidLhs, "for-loop");
      }

      node.left = init;
      node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
      this.expect(types.parenR);
      node.body = this.withTopicForbiddingContext(function () {
        return _this52.parseStatement("for");
      });
      this.scope.exit();
      this.state.labels.pop();
      return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
    }
  }, {
    key: "parseVar",
    value: function parseVar(node, isFor, kind) {
      var declarations = node.declarations = [];
      var isTypescript = this.hasPlugin("typescript");
      node.kind = kind;

      for (;;) {
        var decl = this.startNode();
        this.parseVarId(decl, kind);

        if (this.eat(types.eq)) {
          decl.init = isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
        } else {
          if (kind === "const" && !(this.match(types._in) || this.isContextual("of"))) {
            if (!isTypescript) {
              this.raise(this.state.lastTokEnd, ErrorMessages.DeclarationMissingInitializer, "Const declarations");
            }
          } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
            this.raise(this.state.lastTokEnd, ErrorMessages.DeclarationMissingInitializer, "Complex binding patterns");
          }

          decl.init = null;
        }

        declarations.push(this.finishNode(decl, "VariableDeclarator"));
        if (!this.eat(types.comma)) break;
      }

      return node;
    }
  }, {
    key: "parseVarId",
    value: function parseVarId(decl, kind) {
      decl.id = this.parseBindingAtom();
      this.checkLVal(decl.id, "variable declaration", kind === "var" ? BIND_VAR : BIND_LEXICAL, undefined, kind !== "var");
    }
  }, {
    key: "parseFunction",
    value: function parseFunction(node) {
      var _this53 = this;

      var statement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FUNC_NO_FLAGS;
      var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isStatement = statement & FUNC_STATEMENT;
      var isHangingStatement = statement & FUNC_HANGING_STATEMENT;
      var requireId = !!isStatement && !(statement & FUNC_NULLABLE_ID);
      this.initFunction(node, isAsync);

      if (this.match(types.star) && isHangingStatement) {
        this.raise(this.state.start, ErrorMessages.GeneratorInSingleStatementContext);
      }

      node.generator = this.eat(types.star);

      if (isStatement) {
        node.id = this.parseFunctionId(requireId);
      }

      var oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = false;
      this.scope.enter(SCOPE_FUNCTION);
      this.prodParam.enter(functionFlags(isAsync, node.generator));

      if (!isStatement) {
        node.id = this.parseFunctionId();
      }

      this.parseFunctionParams(node, false);
      this.withTopicForbiddingContext(function () {
        _this53.parseFunctionBodyAndFinish(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
      });
      this.prodParam.exit();
      this.scope.exit();

      if (isStatement && !isHangingStatement) {
        this.registerFunctionStatementId(node);
      }

      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return node;
    }
  }, {
    key: "parseFunctionId",
    value: function parseFunctionId(requireId) {
      return requireId || this.match(types.name) ? this.parseIdentifier() : null;
    }
  }, {
    key: "parseFunctionParams",
    value: function parseFunctionParams(node, allowModifiers) {
      this.expect(types.parenL);
      this.expressionScope.enter(newParameterDeclarationScope());
      node.params = this.parseBindingList(types.parenR, 41, false, allowModifiers);
      this.expressionScope.exit();
    }
  }, {
    key: "registerFunctionStatementId",
    value: function registerFunctionStatementId(node) {
      if (!node.id) return;
      this.scope.declareName(node.id.name, this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION, node.id.start);
    }
  }, {
    key: "parseClass",
    value: function parseClass(node, isStatement, optionalId) {
      this.next();
      this.takeDecorators(node);
      var oldStrict = this.state.strict;
      this.state.strict = true;
      this.parseClassId(node, isStatement, optionalId);
      this.parseClassSuper(node);
      node.body = this.parseClassBody(!!node.superClass, oldStrict);
      return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
    }
  }, {
    key: "isClassProperty",
    value: function isClassProperty() {
      return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
    }
  }, {
    key: "isClassMethod",
    value: function isClassMethod() {
      return this.match(types.parenL);
    }
  }, {
    key: "isNonstaticConstructor",
    value: function isNonstaticConstructor(method) {
      return !method.computed && !method.static && (method.key.name === "constructor" || method.key.value === "constructor");
    }
  }, {
    key: "parseClassBody",
    value: function parseClassBody(constructorAllowsSuper, oldStrict) {
      var _this54 = this;

      this.classScope.enter();
      var state = {
        constructorAllowsSuper: constructorAllowsSuper,
        hadConstructor: false,
        hadStaticBlock: false
      };
      var decorators = [];
      var classBody = this.startNode();
      classBody.body = [];
      this.expect(types.braceL);
      this.withTopicForbiddingContext(function () {
        while (!_this54.match(types.braceR)) {
          if (_this54.eat(types.semi)) {
            if (decorators.length > 0) {
              throw _this54.raise(_this54.state.lastTokEnd, ErrorMessages.DecoratorSemicolon);
            }

            continue;
          }

          if (_this54.match(types.at)) {
            decorators.push(_this54.parseDecorator());
            continue;
          }

          var member = _this54.startNode();

          if (decorators.length) {
            member.decorators = decorators;

            _this54.resetStartLocationFromNode(member, decorators[0]);

            decorators = [];
          }

          _this54.parseClassMember(classBody, member, state);

          if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
            _this54.raise(member.start, ErrorMessages.DecoratorConstructor);
          }
        }
      });
      this.state.strict = oldStrict;
      this.next();

      if (decorators.length) {
        throw this.raise(this.state.start, ErrorMessages.TrailingDecorator);
      }

      this.classScope.exit();
      return this.finishNode(classBody, "ClassBody");
    }
  }, {
    key: "parseClassMemberFromModifier",
    value: function parseClassMemberFromModifier(classBody, member) {
      var key = this.parseIdentifier(true);

      if (this.isClassMethod()) {
        var method = member;
        method.kind = "method";
        method.computed = false;
        method.key = key;
        method.static = false;
        this.pushClassMethod(classBody, method, false, false, false, false);
        return true;
      } else if (this.isClassProperty()) {
        var prop = member;
        prop.computed = false;
        prop.key = key;
        prop.static = false;
        classBody.body.push(this.parseClassProperty(prop));
        return true;
      }

      return false;
    }
  }, {
    key: "parseClassMember",
    value: function parseClassMember(classBody, member, state) {
      var isStatic = this.isContextual("static");

      if (isStatic) {
        if (this.parseClassMemberFromModifier(classBody, member)) {
          return;
        }

        if (this.eat(types.braceL)) {
          this.parseClassStaticBlock(classBody, member, state);
          return;
        }
      }

      this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
    }
  }, {
    key: "parseClassMemberWithIsStatic",
    value: function parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
      var publicMethod = member;
      var privateMethod = member;
      var publicProp = member;
      var privateProp = member;
      var method = publicMethod;
      var publicMember = publicMethod;
      member.static = isStatic;

      if (this.eat(types.star)) {
        method.kind = "method";
        this.parseClassElementName(method);

        if (method.key.type === "PrivateName") {
          this.pushClassPrivateMethod(classBody, privateMethod, true, false);
          return;
        }

        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsGenerator);
        }

        this.pushClassMethod(classBody, publicMethod, true, false, false, false);
        return;
      }

      var containsEsc = this.state.containsEsc;
      var key = this.parseClassElementName(member);
      var isPrivate = key.type === "PrivateName";
      var isSimple = key.type === "Identifier";
      var maybeQuestionTokenStart = this.state.start;
      this.parsePostMemberNameModifiers(publicMember);

      if (this.isClassMethod()) {
        method.kind = "method";

        if (isPrivate) {
          this.pushClassPrivateMethod(classBody, privateMethod, false, false);
          return;
        }

        var isConstructor = this.isNonstaticConstructor(publicMethod);
        var allowsDirectSuper = false;

        if (isConstructor) {
          publicMethod.kind = "constructor";

          if (state.hadConstructor && !this.hasPlugin("typescript")) {
            this.raise(key.start, ErrorMessages.DuplicateConstructor);
          }

          state.hadConstructor = true;
          allowsDirectSuper = state.constructorAllowsSuper;
        }

        this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
      } else if (this.isClassProperty()) {
        if (isPrivate) {
          this.pushClassPrivateProperty(classBody, privateProp);
        } else {
          this.pushClassProperty(classBody, publicProp);
        }
      } else if (isSimple && key.name === "async" && !containsEsc && !this.isLineTerminator()) {
        var isGenerator = this.eat(types.star);

        if (publicMember.optional) {
          this.unexpected(maybeQuestionTokenStart);
        }

        method.kind = "method";
        this.parseClassElementName(method);
        this.parsePostMemberNameModifiers(publicMember);

        if (method.key.type === "PrivateName") {
          this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
        } else {
          if (this.isNonstaticConstructor(publicMethod)) {
            this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsAsync);
          }

          this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
        }
      } else if (isSimple && (key.name === "get" || key.name === "set") && !containsEsc && !(this.match(types.star) && this.isLineTerminator())) {
        method.kind = key.name;
        this.parseClassElementName(publicMethod);

        if (method.key.type === "PrivateName") {
          this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        } else {
          if (this.isNonstaticConstructor(publicMethod)) {
            this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsAccessor);
          }

          this.pushClassMethod(classBody, publicMethod, false, false, false, false);
        }

        this.checkGetterSetterParams(publicMethod);
      } else if (this.isLineTerminator()) {
        if (isPrivate) {
          this.pushClassPrivateProperty(classBody, privateProp);
        } else {
          this.pushClassProperty(classBody, publicProp);
        }
      } else {
        this.unexpected();
      }
    }
  }, {
    key: "parseClassElementName",
    value: function parseClassElementName(member) {
      var key = this.parsePropertyName(member, true);

      if (!member.computed && member.static && (key.name === "prototype" || key.value === "prototype")) {
        this.raise(key.start, ErrorMessages.StaticPrototype);
      }

      if (key.type === "PrivateName" && key.id.name === "constructor") {
        this.raise(key.start, ErrorMessages.ConstructorClassPrivateField);
      }

      return key;
    }
  }, {
    key: "parseClassStaticBlock",
    value: function parseClassStaticBlock(classBody, member, state) {
      var _member$decorators;

      this.expectPlugin("classStaticBlock", member.start);
      this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);
      this.expressionScope.enter(newExpressionScope());
      var oldLabels = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(PARAM);
      var body = member.body = [];
      this.parseBlockOrModuleBlockBody(body, undefined, false, types.braceR);
      this.prodParam.exit();
      this.expressionScope.exit();
      this.scope.exit();
      this.state.labels = oldLabels;
      classBody.body.push(this.finishNode(member, "StaticBlock"));

      if (state.hadStaticBlock) {
        this.raise(member.start, ErrorMessages.DuplicateStaticBlock);
      }

      if ((_member$decorators = member.decorators) == null ? void 0 : _member$decorators.length) {
        this.raise(member.start, ErrorMessages.DecoratorStaticBlock);
      }

      state.hadStaticBlock = true;
    }
  }, {
    key: "pushClassProperty",
    value: function pushClassProperty(classBody, prop) {
      if (!prop.computed && (prop.key.name === "constructor" || prop.key.value === "constructor")) {
        this.raise(prop.key.start, ErrorMessages.ConstructorClassField);
      }

      classBody.body.push(this.parseClassProperty(prop));
    }
  }, {
    key: "pushClassPrivateProperty",
    value: function pushClassPrivateProperty(classBody, prop) {
      this.expectPlugin("classPrivateProperties", prop.key.start);
      var node = this.parseClassPrivateProperty(prop);
      classBody.body.push(node);
      this.classScope.declarePrivateName(node.key.id.name, CLASS_ELEMENT_OTHER, node.key.start);
    }
  }, {
    key: "pushClassMethod",
    value: function pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
      classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
    }
  }, {
    key: "pushClassPrivateMethod",
    value: function pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
      this.expectPlugin("classPrivateMethods", method.key.start);
      var node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
      classBody.body.push(node);
      var kind = node.kind === "get" ? node.static ? CLASS_ELEMENT_STATIC_GETTER : CLASS_ELEMENT_INSTANCE_GETTER : node.kind === "set" ? node.static ? CLASS_ELEMENT_STATIC_SETTER : CLASS_ELEMENT_INSTANCE_SETTER : CLASS_ELEMENT_OTHER;
      this.classScope.declarePrivateName(node.key.id.name, kind, node.key.start);
    }
  }, {
    key: "parsePostMemberNameModifiers",
    value: function parsePostMemberNameModifiers(methodOrProp) {}
  }, {
    key: "parseClassPrivateProperty",
    value: function parseClassPrivateProperty(node) {
      this.parseInitializer(node);
      this.semicolon();
      return this.finishNode(node, "ClassPrivateProperty");
    }
  }, {
    key: "parseClassProperty",
    value: function parseClassProperty(node) {
      if (!node.typeAnnotation || this.match(types.eq)) {
        this.expectPlugin("classProperties");
      }

      this.parseInitializer(node);
      this.semicolon();
      return this.finishNode(node, "ClassProperty");
    }
  }, {
    key: "parseInitializer",
    value: function parseInitializer(node) {
      this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);
      this.expressionScope.enter(newExpressionScope());
      this.prodParam.enter(PARAM);
      node.value = this.eat(types.eq) ? this.parseMaybeAssignAllowIn() : null;
      this.expressionScope.exit();
      this.prodParam.exit();
      this.scope.exit();
    }
  }, {
    key: "parseClassId",
    value: function parseClassId(node, isStatement, optionalId) {
      var bindingType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BIND_CLASS;

      if (this.match(types.name)) {
        node.id = this.parseIdentifier();

        if (isStatement) {
          this.checkLVal(node.id, "class name", bindingType);
        }
      } else {
        if (optionalId || !isStatement) {
          node.id = null;
        } else {
          this.unexpected(null, ErrorMessages.MissingClassName);
        }
      }
    }
  }, {
    key: "parseClassSuper",
    value: function parseClassSuper(node) {
      node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
    }
  }, {
    key: "parseExport",
    value: function parseExport(node) {
      var hasDefault = this.maybeParseExportDefaultSpecifier(node);
      var parseAfterDefault = !hasDefault || this.eat(types.comma);
      var hasStar = parseAfterDefault && this.eatExportStar(node);
      var hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
      var parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(types.comma));
      var isFromRequired = hasDefault || hasStar;

      if (hasStar && !hasNamespace) {
        if (hasDefault) this.unexpected();
        this.parseExportFrom(node, true);
        return this.finishNode(node, "ExportAllDeclaration");
      }

      var hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);

      if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers || hasNamespace && parseAfterNamespace && !hasSpecifiers) {
        throw this.unexpected(null, types.braceL);
      }

      var hasDeclaration;

      if (isFromRequired || hasSpecifiers) {
        hasDeclaration = false;
        this.parseExportFrom(node, isFromRequired);
      } else {
        hasDeclaration = this.maybeParseExportDeclaration(node);
      }

      if (isFromRequired || hasSpecifiers || hasDeclaration) {
        this.checkExport(node, true, false, !!node.source);
        return this.finishNode(node, "ExportNamedDeclaration");
      }

      if (this.eat(types._default)) {
        node.declaration = this.parseExportDefaultExpression();
        this.checkExport(node, true, true);
        return this.finishNode(node, "ExportDefaultDeclaration");
      }

      throw this.unexpected(null, types.braceL);
    }
  }, {
    key: "eatExportStar",
    value: function eatExportStar(node) {
      return this.eat(types.star);
    }
  }, {
    key: "maybeParseExportDefaultSpecifier",
    value: function maybeParseExportDefaultSpecifier(node) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom");
        var specifier = this.startNode();
        specifier.exported = this.parseIdentifier(true);
        node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
        return true;
      }

      return false;
    }
  }, {
    key: "maybeParseExportNamespaceSpecifier",
    value: function maybeParseExportNamespaceSpecifier(node) {
      if (this.isContextual("as")) {
        if (!node.specifiers) node.specifiers = [];
        var specifier = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
        this.next();
        specifier.exported = this.parseModuleExportName();
        node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
        return true;
      }

      return false;
    }
  }, {
    key: "maybeParseExportNamedSpecifiers",
    value: function maybeParseExportNamedSpecifiers(node) {
      if (this.match(types.braceL)) {
        var _node$specifiers2;

        if (!node.specifiers) node.specifiers = [];

        (_node$specifiers2 = node.specifiers).push.apply(_node$specifiers2, _toConsumableArray(this.parseExportSpecifiers()));

        node.source = null;
        node.declaration = null;
        return true;
      }

      return false;
    }
  }, {
    key: "maybeParseExportDeclaration",
    value: function maybeParseExportDeclaration(node) {
      if (this.shouldParseExportDeclaration()) {
        node.specifiers = [];
        node.source = null;
        node.declaration = this.parseExportDeclaration(node);
        return true;
      }

      return false;
    }
  }, {
    key: "isAsyncFunction",
    value: function isAsyncFunction() {
      if (!this.isContextual("async")) return false;
      var next = this.nextTokenStart();
      return !lineBreak.test(this.input.slice(this.state.pos, next)) && this.isUnparsedContextual(next, "function");
    }
  }, {
    key: "parseExportDefaultExpression",
    value: function parseExportDefaultExpression() {
      var expr = this.startNode();
      var isAsync = this.isAsyncFunction();

      if (this.match(types._function) || isAsync) {
        this.next();

        if (isAsync) {
          this.next();
        }

        return this.parseFunction(expr, FUNC_STATEMENT | FUNC_NULLABLE_ID, isAsync);
      } else if (this.match(types._class)) {
        return this.parseClass(expr, true, true);
      } else if (this.match(types.at)) {
        if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.raise(this.state.start, ErrorMessages.DecoratorBeforeExport);
        }

        this.parseDecorators(false);
        return this.parseClass(expr, true, true);
      } else if (this.match(types._const) || this.match(types._var) || this.isLet()) {
        throw this.raise(this.state.start, ErrorMessages.UnsupportedDefaultExport);
      } else {
        var res = this.parseMaybeAssignAllowIn();
        this.semicolon();
        return res;
      }
    }
  }, {
    key: "parseExportDeclaration",
    value: function parseExportDeclaration(node) {
      return this.parseStatement(null);
    }
  }, {
    key: "isExportDefaultSpecifier",
    value: function isExportDefaultSpecifier() {
      if (this.match(types.name)) {
        var value = this.state.value;

        if (value === "async" && !this.state.containsEsc || value === "let") {
          return false;
        }

        if ((value === "type" || value === "interface") && !this.state.containsEsc) {
          var l = this.lookahead();

          if (l.type === types.name && l.value !== "from" || l.type === types.braceL) {
            this.expectOnePlugin(["flow", "typescript"]);
            return false;
          }
        }
      } else if (!this.match(types._default)) {
        return false;
      }

      var next = this.nextTokenStart();
      var hasFrom = this.isUnparsedContextual(next, "from");

      if (this.input.charCodeAt(next) === 44 || this.match(types.name) && hasFrom) {
        return true;
      }

      if (this.match(types._default) && hasFrom) {
        var nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
        return nextAfterFrom === 34 || nextAfterFrom === 39;
      }

      return false;
    }
  }, {
    key: "parseExportFrom",
    value: function parseExportFrom(node, expect) {
      if (this.eatContextual("from")) {
        node.source = this.parseImportSource();
        this.checkExport(node);
        var assertions = this.maybeParseImportAssertions();

        if (assertions) {
          node.assertions = assertions;
        }
      } else {
        if (expect) {
          this.unexpected();
        } else {
          node.source = null;
        }
      }

      this.semicolon();
    }
  }, {
    key: "shouldParseExportDeclaration",
    value: function shouldParseExportDeclaration() {
      if (this.match(types.at)) {
        this.expectOnePlugin(["decorators", "decorators-legacy"]);

        if (this.hasPlugin("decorators")) {
          if (this.getPluginOption("decorators", "decoratorsBeforeExport")) {
            this.unexpected(this.state.start, ErrorMessages.DecoratorBeforeExport);
          } else {
            return true;
          }
        }
      }

      return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isLet() || this.isAsyncFunction();
    }
  }, {
    key: "checkExport",
    value: function checkExport(node, checkNames, isDefault, isFrom) {
      if (checkNames) {
        if (isDefault) {
          this.checkDuplicateExports(node, "default");

          if (this.hasPlugin("exportDefaultFrom")) {
            var _declaration$extra;

            var declaration = node.declaration;

            if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !((_declaration$extra = declaration.extra) == null ? void 0 : _declaration$extra.parenthesized)) {
              this.raise(declaration.start, ErrorMessages.ExportDefaultFromAsIdentifier);
            }
          }
        } else if (node.specifiers && node.specifiers.length) {
          for (var _i4 = 0, _node$specifiers = node.specifiers; _i4 < _node$specifiers.length; _i4++) {
            var specifier = _node$specifiers[_i4];
            var {
              exported: exported
            } = specifier;
            var exportedName = exported.type === "Identifier" ? exported.name : exported.value;
            this.checkDuplicateExports(specifier, exportedName);

            if (!isFrom && specifier.local) {
              var {
                local: local
              } = specifier;

              if (local.type === "StringLiteral") {
                this.raise(specifier.start, ErrorMessages.ExportBindingIsString, local.extra.raw, exportedName);
              } else {
                this.checkReservedWord(local.name, local.start, true, false);
                this.scope.checkLocalExport(local);
              }
            }
          }
        } else if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
            var id = node.declaration.id;
            if (!id) throw new Error("Assertion failure");
            this.checkDuplicateExports(node, id.name);
          } else if (node.declaration.type === "VariableDeclaration") {
            for (var _i5 = 0, _node$declaration$dec = node.declaration.declarations; _i5 < _node$declaration$dec.length; _i5++) {
              var _declaration = _node$declaration$dec[_i5];
              this.checkDeclaration(_declaration.id);
            }
          }
        }
      }

      var currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

      if (currentContextDecorators.length) {
        throw this.raise(node.start, ErrorMessages.UnsupportedDecoratorExport);
      }
    }
  }, {
    key: "checkDeclaration",
    value: function checkDeclaration(node) {
      if (node.type === "Identifier") {
        this.checkDuplicateExports(node, node.name);
      } else if (node.type === "ObjectPattern") {
        for (var _i6 = 0, _node$properties = node.properties; _i6 < _node$properties.length; _i6++) {
          var prop = _node$properties[_i6];
          this.checkDeclaration(prop);
        }
      } else if (node.type === "ArrayPattern") {
        for (var _i7 = 0, _node$elements = node.elements; _i7 < _node$elements.length; _i7++) {
          var elem = _node$elements[_i7];

          if (elem) {
            this.checkDeclaration(elem);
          }
        }
      } else if (node.type === "ObjectProperty") {
        this.checkDeclaration(node.value);
      } else if (node.type === "RestElement") {
        this.checkDeclaration(node.argument);
      } else if (node.type === "AssignmentPattern") {
        this.checkDeclaration(node.left);
      }
    }
  }, {
    key: "checkDuplicateExports",
    value: function checkDuplicateExports(node, name) {
      if (this.state.exportedIdentifiers.indexOf(name) > -1) {
        this.raise(node.start, name === "default" ? ErrorMessages.DuplicateDefaultExport : ErrorMessages.DuplicateExport, name);
      }

      this.state.exportedIdentifiers.push(name);
    }
  }, {
    key: "parseExportSpecifiers",
    value: function parseExportSpecifiers() {
      var nodes = [];
      var first = true;
      this.expect(types.braceL);

      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.eat(types.braceR)) break;
        }

        var node = this.startNode();
        node.local = this.parseModuleExportName();
        node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local.__clone();
        nodes.push(this.finishNode(node, "ExportSpecifier"));
      }

      return nodes;
    }
  }, {
    key: "parseModuleExportName",
    value: function parseModuleExportName() {
      if (this.match(types.string)) {
        this.expectPlugin("moduleStringNames");
        var result = this.parseLiteral(this.state.value, "StringLiteral");
        var surrogate = result.value.match(loneSurrogate);

        if (surrogate) {
          this.raise(result.start, ErrorMessages.ModuleExportNameHasLoneSurrogate, surrogate[0].charCodeAt(0).toString(16));
        }

        return result;
      }

      return this.parseIdentifier(true);
    }
  }, {
    key: "parseImport",
    value: function parseImport(node) {
      node.specifiers = [];

      if (!this.match(types.string)) {
        var hasDefault = this.maybeParseDefaultImportSpecifier(node);
        var parseNext = !hasDefault || this.eat(types.comma);
        var hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
        if (parseNext && !hasStar) this.parseNamedImportSpecifiers(node);
        this.expectContextual("from");
      }

      node.source = this.parseImportSource();
      var assertions = this.maybeParseImportAssertions();

      if (assertions) {
        node.assertions = assertions;
      } else {
        var attributes = this.maybeParseModuleAttributes();

        if (attributes) {
          node.attributes = attributes;
        }
      }

      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }
  }, {
    key: "parseImportSource",
    value: function parseImportSource() {
      if (!this.match(types.string)) this.unexpected();
      return this.parseExprAtom();
    }
  }, {
    key: "shouldParseDefaultImport",
    value: function shouldParseDefaultImport(node) {
      return this.match(types.name);
    }
  }, {
    key: "parseImportSpecifierLocal",
    value: function parseImportSpecifierLocal(node, specifier, type, contextDescription) {
      specifier.local = this.parseIdentifier();
      this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
      node.specifiers.push(this.finishNode(specifier, type));
    }
  }, {
    key: "parseAssertEntries",
    value: function parseAssertEntries() {
      var attrs = [];
      var attrNames = new Set();

      do {
        if (this.match(types.braceR)) {
          break;
        }

        var node = this.startNode();
        var keyName = this.state.value;

        if (this.match(types.string)) {
          node.key = this.parseLiteral(keyName, "StringLiteral");
        } else {
          node.key = this.parseIdentifier(true);
        }

        this.expect(types.colon);

        if (keyName !== "type") {
          this.raise(node.key.start, ErrorMessages.ModuleAttributeDifferentFromType, keyName);
        }

        if (attrNames.has(keyName)) {
          this.raise(node.key.start, ErrorMessages.ModuleAttributesWithDuplicateKeys, keyName);
        }

        attrNames.add(keyName);

        if (!this.match(types.string)) {
          throw this.unexpected(this.state.start, ErrorMessages.ModuleAttributeInvalidValue);
        }

        node.value = this.parseLiteral(this.state.value, "StringLiteral");
        this.finishNode(node, "ImportAttribute");
        attrs.push(node);
      } while (this.eat(types.comma));

      return attrs;
    }
  }, {
    key: "maybeParseModuleAttributes",
    value: function maybeParseModuleAttributes() {
      if (this.match(types._with) && !this.hasPrecedingLineBreak()) {
        this.expectPlugin("moduleAttributes");
        this.next();
      } else {
        if (this.hasPlugin("moduleAttributes")) return [];
        return null;
      }

      var attrs = [];
      var attributes = new Set();

      do {
        var node = this.startNode();
        node.key = this.parseIdentifier(true);

        if (node.key.name !== "type") {
          this.raise(node.key.start, ErrorMessages.ModuleAttributeDifferentFromType, node.key.name);
        }

        if (attributes.has(node.key.name)) {
          this.raise(node.key.start, ErrorMessages.ModuleAttributesWithDuplicateKeys, node.key.name);
        }

        attributes.add(node.key.name);
        this.expect(types.colon);

        if (!this.match(types.string)) {
          throw this.unexpected(this.state.start, ErrorMessages.ModuleAttributeInvalidValue);
        }

        node.value = this.parseLiteral(this.state.value, "StringLiteral");
        this.finishNode(node, "ImportAttribute");
        attrs.push(node);
      } while (this.eat(types.comma));

      return attrs;
    }
  }, {
    key: "maybeParseImportAssertions",
    value: function maybeParseImportAssertions() {
      if (this.isContextual("assert") && !this.hasPrecedingLineBreak()) {
        this.expectPlugin("importAssertions");
        this.next();
      } else {
        if (this.hasPlugin("importAssertions")) return [];
        return null;
      }

      this.eat(types.braceL);
      var attrs = this.parseAssertEntries();
      this.eat(types.braceR);
      return attrs;
    }
  }, {
    key: "maybeParseDefaultImportSpecifier",
    value: function maybeParseDefaultImportSpecifier(node) {
      if (this.shouldParseDefaultImport(node)) {
        this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier", "default import specifier");
        return true;
      }

      return false;
    }
  }, {
    key: "maybeParseStarImportSpecifier",
    value: function maybeParseStarImportSpecifier(node) {
      if (this.match(types.star)) {
        var specifier = this.startNode();
        this.next();
        this.expectContextual("as");
        this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier", "import namespace specifier");
        return true;
      }

      return false;
    }
  }, {
    key: "parseNamedImportSpecifiers",
    value: function parseNamedImportSpecifiers(node) {
      var first = true;
      this.expect(types.braceL);

      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          if (this.eat(types.colon)) {
            throw this.raise(this.state.start, ErrorMessages.DestructureNamedImport);
          }

          this.expect(types.comma);
          if (this.eat(types.braceR)) break;
        }

        this.parseImportSpecifier(node);
      }
    }
  }, {
    key: "parseImportSpecifier",
    value: function parseImportSpecifier(node) {
      var specifier = this.startNode();
      specifier.imported = this.parseModuleExportName();

      if (this.eatContextual("as")) {
        specifier.local = this.parseIdentifier();
      } else {
        var {
          imported: imported
        } = specifier;

        if (imported.type === "StringLiteral") {
          throw this.raise(specifier.start, ErrorMessages.ImportBindingIsString, imported.value);
        }

        this.checkReservedWord(imported.name, specifier.start, true, true);
        specifier.local = imported.__clone();
      }

      this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
    }
  }]);

  return StatementParser;
}(ExpressionParser);

var ClassScope = function ClassScope() {
  _classCallCheck(this, ClassScope);

  this.privateNames = new Set();
  this.loneAccessors = new Map();
  this.undefinedPrivateNames = new Map();
};

var ClassScopeHandler = /*#__PURE__*/function () {
  function ClassScopeHandler(raise) {
    _classCallCheck(this, ClassScopeHandler);

    this.stack = [];
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
  }

  _createClass(ClassScopeHandler, [{
    key: "current",
    value: function current() {
      return this.stack[this.stack.length - 1];
    }
  }, {
    key: "enter",
    value: function enter() {
      this.stack.push(new ClassScope());
    }
  }, {
    key: "exit",
    value: function exit() {
      var oldClassScope = this.stack.pop();
      var current = this.current();

      for (var _i = 0, _Array$from = Array.from(oldClassScope.undefinedPrivateNames); _i < _Array$from.length; _i++) {
        var [name, pos] = _Array$from[_i];

        if (current) {
          if (!current.undefinedPrivateNames.has(name)) {
            current.undefinedPrivateNames.set(name, pos);
          }
        } else {
          this.raise(pos, ErrorMessages.InvalidPrivateFieldResolution, name);
        }
      }
    }
  }, {
    key: "declarePrivateName",
    value: function declarePrivateName(name, elementType, pos) {
      var classScope = this.current();
      var redefined = classScope.privateNames.has(name);

      if (elementType & CLASS_ELEMENT_KIND_ACCESSOR) {
        var accessor = redefined && classScope.loneAccessors.get(name);

        if (accessor) {
          var oldStatic = accessor & CLASS_ELEMENT_FLAG_STATIC;
          var newStatic = elementType & CLASS_ELEMENT_FLAG_STATIC;
          var oldKind = accessor & CLASS_ELEMENT_KIND_ACCESSOR;
          var newKind = elementType & CLASS_ELEMENT_KIND_ACCESSOR;
          redefined = oldKind === newKind || oldStatic !== newStatic;
          if (!redefined) classScope.loneAccessors.delete(name);
        } else if (!redefined) {
          classScope.loneAccessors.set(name, elementType);
        }
      }

      if (redefined) {
        this.raise(pos, ErrorMessages.PrivateNameRedeclaration, name);
      }

      classScope.privateNames.add(name);
      classScope.undefinedPrivateNames.delete(name);
    }
  }, {
    key: "usePrivateName",
    value: function usePrivateName(name, pos) {
      var classScope;

      for (var _i2 = 0, _this$stack = this.stack; _i2 < _this$stack.length; _i2++) {
        classScope = _this$stack[_i2];
        if (classScope.privateNames.has(name)) return;
      }

      if (classScope) {
        classScope.undefinedPrivateNames.set(name, pos);
      } else {
        this.raise(pos, ErrorMessages.InvalidPrivateFieldResolution, name);
      }
    }
  }]);

  return ClassScopeHandler;
}();

var Parser = /*#__PURE__*/function (_StatementParser) {
  _inherits(Parser, _StatementParser);

  var _super18 = _createSuper(Parser);

  function Parser(options, input) {
    var _this55;

    _classCallCheck(this, Parser);

    options = getOptions(options);
    _this55 = _super18.call(this, options, input);

    var ScopeHandler = _this55.getScopeHandler();

    _this55.options = options;
    _this55.inModule = _this55.options.sourceType === "module";
    _this55.scope = new ScopeHandler(_this55.raise.bind(_assertThisInitialized(_this55)), _this55.inModule);
    _this55.prodParam = new ProductionParameterHandler();
    _this55.classScope = new ClassScopeHandler(_this55.raise.bind(_assertThisInitialized(_this55)));
    _this55.expressionScope = new ExpressionScopeHandler(_this55.raise.bind(_assertThisInitialized(_this55)));
    _this55.plugins = pluginsMap(_this55.options.plugins);
    _this55.filename = options.sourceFilename;
    return _this55;
  }

  _createClass(Parser, [{
    key: "getScopeHandler",
    value: function getScopeHandler() {
      return ScopeHandler;
    }
  }, {
    key: "parse",
    value: function parse() {
      var paramFlags = PARAM;

      if (this.hasPlugin("topLevelAwait") && this.inModule) {
        paramFlags |= PARAM_AWAIT;
      }

      this.scope.enter(SCOPE_PROGRAM);
      this.prodParam.enter(paramFlags);
      var file = this.startNode();
      var program = this.startNode();
      this.nextToken();
      file.errors = null;
      this.parseTopLevel(file, program);
      file.errors = this.state.errors;
      return file;
    }
  }]);

  return Parser;
}(StatementParser);

function pluginsMap(plugins) {
  var pluginMap = new Map();

  for (var _i = 0; _i < plugins.length; _i++) {
    var plugin = plugins[_i];
    var [name, options] = Array.isArray(plugin) ? plugin : [plugin, {}];
    if (!pluginMap.has(name)) pluginMap.set(name, options || {});
  }

  return pluginMap;
}

function parse(input, options) {
  var _options;

  if (((_options = options) == null ? void 0 : _options.sourceType) === "unambiguous") {
    options = Object.assign({}, options);

    try {
      options.sourceType = "module";
      var parser = getParser(options, input);
      var ast = parser.parse();

      if (parser.sawUnambiguousESM) {
        return ast;
      }

      if (parser.ambiguousScriptDifferentAst) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch (_unused) {}
      } else {
        ast.program.sourceType = "script";
      }

      return ast;
    } catch (moduleError) {
      try {
        options.sourceType = "script";
        return getParser(options, input).parse();
      } catch (_unused2) {}

      throw moduleError;
    }
  } else {
    return getParser(options, input).parse();
  }
}

function parseExpression(input, options) {
  var parser = getParser(options, input);

  if (parser.options.strictMode) {
    parser.state.strict = true;
  }

  return parser.getExpression();
}

function getParser(options, input) {
  var cls = Parser;

  if (options == null ? void 0 : options.plugins) {
    validatePlugins(options.plugins);
    cls = getParserClass(options.plugins);
  }

  return new cls(options, input);
}

var parserClassCache = {};

function getParserClass(pluginsFromOptions) {
  var pluginList = mixinPluginNames.filter(function (name) {
    return hasPlugin(pluginsFromOptions, name);
  });
  var key = pluginList.join("/");
  var cls = parserClassCache[key];

  if (!cls) {
    cls = Parser;

    for (var _i = 0; _i < pluginList.length; _i++) {
      var plugin = pluginList[_i];
      cls = mixinPlugins[plugin](cls);
    }

    parserClassCache[key] = cls;
  }

  return cls;
}

exports.parse = parse;
exports.parseExpression = parseExpression;
exports.tokTypes = types;
},{}],"../node_modules/estree-walker/src/estree-walker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walk = walk;
exports.asyncWalk = asyncWalk;

class WalkerBase {
  constructor() {
    WalkerBase.prototype.__init.call(this);

    WalkerBase.prototype.__init2.call(this);

    WalkerBase.prototype.__init3.call(this);

    WalkerBase.prototype.__init4.call(this);
  }

  __init() {
    this.should_skip = false;
  }

  __init2() {
    this.should_remove = false;
  }

  __init3() {
    this.replacement = null;
  }

  __init4() {
    this.context = {
      skip: () => this.should_skip = true,
      remove: () => this.should_remove = true,
      replace: node => this.replacement = node
    };
  }

  replace(parent, prop, index, node) {
    if (parent) {
      if (index !== null) {
        parent[prop][index] = node;
      } else {
        parent[prop] = node;
      }
    }
  }

  remove(parent, prop, index) {
    if (parent) {
      if (index !== null) {
        parent[prop].splice(index, 1);
      } else {
        delete parent[prop];
      }
    }
  }

}

class SyncWalkerClass extends WalkerBase {
  constructor(walker) {
    super();
    this.enter = walker.enter;
    this.leave = walker.leave;
  }

  visit(node, parent, enter, leave, prop, index) {
    if (node) {
      if (enter) {
        const _should_skip = this.should_skip;
        const _should_remove = this.should_remove;
        const _replacement = this.replacement;
        this.should_skip = false;
        this.should_remove = false;
        this.replacement = null;
        enter.call(this.context, node, parent, prop, index);

        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index, node);
        }

        if (this.should_remove) {
          this.remove(parent, prop, index);
        }

        const skipped = this.should_skip;
        const removed = this.should_remove;
        this.should_skip = _should_skip;
        this.should_remove = _should_remove;
        this.replacement = _replacement;
        if (skipped) return node;
        if (removed) return null;
      }

      for (const key in node) {
        const value = node[key];

        if (typeof value !== "object") {
          continue;
        } else if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i += 1) {
            if (value[i] !== null && typeof value[i].type === 'string') {
              if (!this.visit(value[i], node, enter, leave, key, i)) {
                // removed
                i--;
              }
            }
          }
        } else if (value !== null && typeof value.type === "string") {
          this.visit(value, node, enter, leave, key, null);
        }
      }

      if (leave) {
        const _replacement = this.replacement;
        const _should_remove = this.should_remove;
        this.replacement = null;
        this.should_remove = false;
        leave.call(this.context, node, parent, prop, index);

        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index, node);
        }

        if (this.should_remove) {
          this.remove(parent, prop, index);
        }

        const removed = this.should_remove;
        this.replacement = _replacement;
        this.should_remove = _should_remove;
        if (removed) return null;
      }
    }

    return node;
  }

}

class AsyncWalkerClass extends WalkerBase {
  constructor(walker) {
    super();
    this.enter = walker.enter;
    this.leave = walker.leave;
  }

  async visit(node, parent, enter, leave, prop, index) {
    if (node) {
      if (enter) {
        const _should_skip = this.should_skip;
        const _should_remove = this.should_remove;
        const _replacement = this.replacement;
        this.should_skip = false;
        this.should_remove = false;
        this.replacement = null;
        await enter.call(this.context, node, parent, prop, index);

        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index, node);
        }

        if (this.should_remove) {
          this.remove(parent, prop, index);
        }

        const skipped = this.should_skip;
        const removed = this.should_remove;
        this.should_skip = _should_skip;
        this.should_remove = _should_remove;
        this.replacement = _replacement;
        if (skipped) return node;
        if (removed) return null;
      }

      for (const key in node) {
        const value = node[key];

        if (typeof value !== "object") {
          continue;
        } else if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i += 1) {
            if (value[i] !== null && typeof value[i].type === 'string') {
              if (!(await this.visit(value[i], node, enter, leave, key, i))) {
                // removed
                i--;
              }
            }
          }
        } else if (value !== null && typeof value.type === "string") {
          await this.visit(value, node, enter, leave, key, null);
        }
      }

      if (leave) {
        const _replacement = this.replacement;
        const _should_remove = this.should_remove;
        this.replacement = null;
        this.should_remove = false;
        await leave.call(this.context, node, parent, prop, index);

        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index, node);
        }

        if (this.should_remove) {
          this.remove(parent, prop, index);
        }

        const removed = this.should_remove;
        this.replacement = _replacement;
        this.should_remove = _should_remove;
        if (removed) return null;
      }
    }

    return node;
  }

}

function walk(ast, walker) {
  const instance = new SyncWalkerClass(walker);
  return instance.visit(ast, null, walker.enter, walker.leave);
}

async function asyncWalk(ast, walker) {
  const instance = new AsyncWalkerClass(walker);
  return await instance.visit(ast, null, walker.enter, walker.leave);
}
},{}],"../node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advancePositionWithClone = advancePositionWithClone;
exports.advancePositionWithMutation = advancePositionWithMutation;
exports.assert = assert;
exports.baseCompile = baseCompile;
exports.baseParse = baseParse;
exports.buildProps = buildProps;
exports.buildSlots = buildSlots;
exports.createArrayExpression = createArrayExpression;
exports.createAssignmentExpression = createAssignmentExpression;
exports.createBlockStatement = createBlockStatement;
exports.createCacheExpression = createCacheExpression;
exports.createCallExpression = createCallExpression;
exports.createCompilerError = createCompilerError;
exports.createCompoundExpression = createCompoundExpression;
exports.createConditionalExpression = createConditionalExpression;
exports.createForLoopParams = createForLoopParams;
exports.createFunctionExpression = createFunctionExpression;
exports.createIfStatement = createIfStatement;
exports.createInterpolation = createInterpolation;
exports.createObjectExpression = createObjectExpression;
exports.createObjectProperty = createObjectProperty;
exports.createReturnStatement = createReturnStatement;
exports.createRoot = createRoot;
exports.createSequenceExpression = createSequenceExpression;
exports.createSimpleExpression = createSimpleExpression;
exports.createStructuralDirectiveTransform = createStructuralDirectiveTransform;
exports.createTemplateLiteral = createTemplateLiteral;
exports.createTransformContext = createTransformContext;
exports.createVNodeCall = createVNodeCall;
exports.findDir = findDir;
exports.findProp = findProp;
exports.generate = generate;
exports.getBaseTransformPreset = getBaseTransformPreset;
exports.getInnerRange = getInnerRange;
exports.hasDynamicKeyVBind = hasDynamicKeyVBind;
exports.hasScopeRef = hasScopeRef;
exports.injectProp = injectProp;
exports.isBindKey = isBindKey;
exports.isCoreComponent = isCoreComponent;
exports.isSlotOutlet = isSlotOutlet;
exports.isTemplateNode = isTemplateNode;
exports.isText = isText;
exports.isVSlot = isVSlot;
exports.processExpression = processExpression;
exports.processFor = processFor;
exports.processIf = processIf;
exports.processSlotOutlet = processSlotOutlet;
exports.registerRuntimeHelpers = registerRuntimeHelpers;
exports.resolveComponentType = resolveComponentType;
exports.toValidAssetId = toValidAssetId;
exports.transform = transform;
exports.traverseNode = traverseNode;
Object.defineProperty(exports, "generateCodeFrame", {
  enumerable: true,
  get: function () {
    return _shared.generateCodeFrame;
  }
});
exports.transformOn = exports.transformModel = exports.transformExpression = exports.transformElement = exports.transformBind = exports.trackVForSlotScopes = exports.trackSlotScopes = exports.noopDirectiveTransform = exports.locStub = exports.isStaticExp = exports.isSimpleIdentifier = exports.isMemberExpression = exports.isBuiltInType = exports.helperNameMap = exports.WITH_SCOPE_ID = exports.WITH_DIRECTIVES = exports.WITH_CTX = exports.TO_HANDLER_KEY = exports.TO_HANDLERS = exports.TO_DISPLAY_STRING = exports.TELEPORT = exports.SUSPENSE = exports.SET_BLOCK_TRACKING = exports.RESOLVE_DYNAMIC_COMPONENT = exports.RESOLVE_DIRECTIVE = exports.RESOLVE_COMPONENT = exports.RENDER_SLOT = exports.RENDER_LIST = exports.PUSH_SCOPE_ID = exports.POP_SCOPE_ID = exports.OPEN_BLOCK = exports.MERGE_PROPS = exports.KEEP_ALIVE = exports.FRAGMENT = exports.CREATE_VNODE = exports.CREATE_TEXT = exports.CREATE_STATIC = exports.CREATE_SLOTS = exports.CREATE_COMMENT = exports.CREATE_BLOCK = exports.CAPITALIZE = exports.CAMELIZE = exports.BASE_TRANSITION = void 0;

var _shared = require("@vue/shared");

var _parser = require("@babel/parser");

var _estreeWalker = require("estree-walker");

function defaultOnError(error) {
  throw error;
}

function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = "development" !== 'production' || !true ? (messages || errorMessages)[code] + (additionalMessage || ``) : code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

const errorMessages = {
  // parse errors
  [0
  /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
  ]: 'Illegal comment.',
  [1
  /* CDATA_IN_HTML_CONTENT */
  ]: 'CDATA section is allowed only in XML context.',
  [2
  /* DUPLICATE_ATTRIBUTE */
  ]: 'Duplicate attribute.',
  [3
  /* END_TAG_WITH_ATTRIBUTES */
  ]: 'End tag cannot have attributes.',
  [4
  /* END_TAG_WITH_TRAILING_SOLIDUS */
  ]: "Illegal '/' in tags.",
  [5
  /* EOF_BEFORE_TAG_NAME */
  ]: 'Unexpected EOF in tag.',
  [6
  /* EOF_IN_CDATA */
  ]: 'Unexpected EOF in CDATA section.',
  [7
  /* EOF_IN_COMMENT */
  ]: 'Unexpected EOF in comment.',
  [8
  /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
  ]: 'Unexpected EOF in script.',
  [9
  /* EOF_IN_TAG */
  ]: 'Unexpected EOF in tag.',
  [10
  /* INCORRECTLY_CLOSED_COMMENT */
  ]: 'Incorrectly closed comment.',
  [11
  /* INCORRECTLY_OPENED_COMMENT */
  ]: 'Incorrectly opened comment.',
  [12
  /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
  ]: "Illegal tag name. Use '&lt;' to print '<'.",
  [13
  /* MISSING_ATTRIBUTE_VALUE */
  ]: 'Attribute value was expected.',
  [14
  /* MISSING_END_TAG_NAME */
  ]: 'End tag name was expected.',
  [15
  /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
  ]: 'Whitespace was expected.',
  [16
  /* NESTED_COMMENT */
  ]: "Unexpected '<!--' in comment.",
  [17
  /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
  ]: 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).',
  [18
  /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
  ]: 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).',
  [19
  /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
  ]: "Attribute name cannot start with '='.",
  [21
  /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
  ]: "'<?' is allowed only in XML context.",
  [22
  /* UNEXPECTED_SOLIDUS_IN_TAG */
  ]: "Illegal '/' in tags.",
  // Vue-specific parse errors
  [23
  /* X_INVALID_END_TAG */
  ]: 'Invalid end tag.',
  [24
  /* X_MISSING_END_TAG */
  ]: 'Element is missing end tag.',
  [25
  /* X_MISSING_INTERPOLATION_END */
  ]: 'Interpolation end sign was not found.',
  [26
  /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
  ]: 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.',
  // transform errors
  [27
  /* X_V_IF_NO_EXPRESSION */
  ]: `v-if/v-else-if is missing expression.`,
  [28
  /* X_V_IF_SAME_KEY */
  ]: `v-if/else branches must use unique keys.`,
  [29
  /* X_V_ELSE_NO_ADJACENT_IF */
  ]: `v-else/v-else-if has no adjacent v-if.`,
  [30
  /* X_V_FOR_NO_EXPRESSION */
  ]: `v-for is missing expression.`,
  [31
  /* X_V_FOR_MALFORMED_EXPRESSION */
  ]: `v-for has invalid expression.`,
  [32
  /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
  ]: `<template v-for> key should be placed on the <template> tag.`,
  [33
  /* X_V_BIND_NO_EXPRESSION */
  ]: `v-bind is missing expression.`,
  [34
  /* X_V_ON_NO_EXPRESSION */
  ]: `v-on is missing expression.`,
  [35
  /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
  ]: `Unexpected custom directive on <slot> outlet.`,
  [36
  /* X_V_SLOT_MIXED_SLOT_USAGE */
  ]: `Mixed v-slot usage on both the component and nested <template>.` + `When there are multiple named slots, all slots should use <template> ` + `syntax to avoid scope ambiguity.`,
  [37
  /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
  ]: `Duplicate slot names found. `,
  [38
  /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
  ]: `Extraneous children found when component already has explicitly named ` + `default slot. These children will be ignored.`,
  [39
  /* X_V_SLOT_MISPLACED */
  ]: `v-slot can only be used on components or <template> tags.`,
  [40
  /* X_V_MODEL_NO_EXPRESSION */
  ]: `v-model is missing expression.`,
  [41
  /* X_V_MODEL_MALFORMED_EXPRESSION */
  ]: `v-model value must be a valid JavaScript member expression.`,
  [42
  /* X_V_MODEL_ON_SCOPE_VARIABLE */
  ]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
  [43
  /* X_INVALID_EXPRESSION */
  ]: `Error parsing JavaScript expression: `,
  [44
  /* X_KEEP_ALIVE_INVALID_CHILDREN */
  ]: `<KeepAlive> expects exactly one child component.`,
  // generic errors
  [45
  /* X_PREFIX_ID_NOT_SUPPORTED */
  ]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
  [46
  /* X_MODULE_MODE_NOT_SUPPORTED */
  ]: `ES module mode is not supported in this build of compiler.`,
  [47
  /* X_CACHE_HANDLER_NOT_SUPPORTED */
  ]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
  [48
  /* X_SCOPE_ID_NOT_SUPPORTED */
  ]: `"scopeId" option is only supported in module mode.`
};
const FRAGMENT = Symbol("development" !== 'production' ? `Fragment` : ``);
exports.FRAGMENT = FRAGMENT;
const TELEPORT = Symbol("development" !== 'production' ? `Teleport` : ``);
exports.TELEPORT = TELEPORT;
const SUSPENSE = Symbol("development" !== 'production' ? `Suspense` : ``);
exports.SUSPENSE = SUSPENSE;
const KEEP_ALIVE = Symbol("development" !== 'production' ? `KeepAlive` : ``);
exports.KEEP_ALIVE = KEEP_ALIVE;
const BASE_TRANSITION = Symbol("development" !== 'production' ? `BaseTransition` : ``);
exports.BASE_TRANSITION = BASE_TRANSITION;
const OPEN_BLOCK = Symbol("development" !== 'production' ? `openBlock` : ``);
exports.OPEN_BLOCK = OPEN_BLOCK;
const CREATE_BLOCK = Symbol("development" !== 'production' ? `createBlock` : ``);
exports.CREATE_BLOCK = CREATE_BLOCK;
const CREATE_VNODE = Symbol("development" !== 'production' ? `createVNode` : ``);
exports.CREATE_VNODE = CREATE_VNODE;
const CREATE_COMMENT = Symbol("development" !== 'production' ? `createCommentVNode` : ``);
exports.CREATE_COMMENT = CREATE_COMMENT;
const CREATE_TEXT = Symbol("development" !== 'production' ? `createTextVNode` : ``);
exports.CREATE_TEXT = CREATE_TEXT;
const CREATE_STATIC = Symbol("development" !== 'production' ? `createStaticVNode` : ``);
exports.CREATE_STATIC = CREATE_STATIC;
const RESOLVE_COMPONENT = Symbol("development" !== 'production' ? `resolveComponent` : ``);
exports.RESOLVE_COMPONENT = RESOLVE_COMPONENT;
const RESOLVE_DYNAMIC_COMPONENT = Symbol("development" !== 'production' ? `resolveDynamicComponent` : ``);
exports.RESOLVE_DYNAMIC_COMPONENT = RESOLVE_DYNAMIC_COMPONENT;
const RESOLVE_DIRECTIVE = Symbol("development" !== 'production' ? `resolveDirective` : ``);
exports.RESOLVE_DIRECTIVE = RESOLVE_DIRECTIVE;
const WITH_DIRECTIVES = Symbol("development" !== 'production' ? `withDirectives` : ``);
exports.WITH_DIRECTIVES = WITH_DIRECTIVES;
const RENDER_LIST = Symbol("development" !== 'production' ? `renderList` : ``);
exports.RENDER_LIST = RENDER_LIST;
const RENDER_SLOT = Symbol("development" !== 'production' ? `renderSlot` : ``);
exports.RENDER_SLOT = RENDER_SLOT;
const CREATE_SLOTS = Symbol("development" !== 'production' ? `createSlots` : ``);
exports.CREATE_SLOTS = CREATE_SLOTS;
const TO_DISPLAY_STRING = Symbol("development" !== 'production' ? `toDisplayString` : ``);
exports.TO_DISPLAY_STRING = TO_DISPLAY_STRING;
const MERGE_PROPS = Symbol("development" !== 'production' ? `mergeProps` : ``);
exports.MERGE_PROPS = MERGE_PROPS;
const TO_HANDLERS = Symbol("development" !== 'production' ? `toHandlers` : ``);
exports.TO_HANDLERS = TO_HANDLERS;
const CAMELIZE = Symbol("development" !== 'production' ? `camelize` : ``);
exports.CAMELIZE = CAMELIZE;
const CAPITALIZE = Symbol("development" !== 'production' ? `capitalize` : ``);
exports.CAPITALIZE = CAPITALIZE;
const TO_HANDLER_KEY = Symbol("development" !== 'production' ? `toHandlerKey` : ``);
exports.TO_HANDLER_KEY = TO_HANDLER_KEY;
const SET_BLOCK_TRACKING = Symbol("development" !== 'production' ? `setBlockTracking` : ``);
exports.SET_BLOCK_TRACKING = SET_BLOCK_TRACKING;
const PUSH_SCOPE_ID = Symbol("development" !== 'production' ? `pushScopeId` : ``);
exports.PUSH_SCOPE_ID = PUSH_SCOPE_ID;
const POP_SCOPE_ID = Symbol("development" !== 'production' ? `popScopeId` : ``);
exports.POP_SCOPE_ID = POP_SCOPE_ID;
const WITH_SCOPE_ID = Symbol("development" !== 'production' ? `withScopeId` : ``);
exports.WITH_SCOPE_ID = WITH_SCOPE_ID;
const WITH_CTX = Symbol("development" !== 'production' ? `withCtx` : ``); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

exports.WITH_CTX = WITH_CTX;
const helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_SCOPE_ID]: `withScopeId`,
  [WITH_CTX]: `withCtx`
};
exports.helperNameMap = helperNameMap;

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(s => {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


const locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};
exports.locStub = locStub;

function createRoot(children, loc = locStub) {
  return {
    type: 0
    /* ROOT */
    ,
    children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(CREATE_BLOCK);
    } else {
      context.helper(CREATE_VNODE);
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* VNODE_CALL */
    ,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    loc
  };
}

function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17
    /* JS_ARRAY_EXPRESSION */
    ,
    loc,
    elements
  };
}

function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15
    /* JS_OBJECT_EXPRESSION */
    ,
    loc,
    properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* JS_PROPERTY */
    ,
    loc: locStub,
    key: (0, _shared.isString)(key) ? createSimpleExpression(key, true) : key,
    value
  };
}

function createSimpleExpression(content, isStatic, loc = locStub, isConstant = false) {
  return {
    type: 4
    /* SIMPLE_EXPRESSION */
    ,
    loc,
    isConstant,
    content,
    isStatic
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* INTERPOLATION */
    ,
    loc,
    content: (0, _shared.isString)(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8
    /* COMPOUND_EXPRESSION */
    ,
    loc,
    children
  };
}

function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14
    /* JS_CALL_EXPRESSION */
    ,
    loc,
    callee,
    arguments: args
  };
}

function createFunctionExpression(params, returns = undefined, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18
    /* JS_FUNCTION_EXPRESSION */
    ,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}

function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19
    /* JS_CONDITIONAL_EXPRESSION */
    ,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}

function createCacheExpression(index, value, isVNode = false) {
  return {
    type: 20
    /* JS_CACHE_EXPRESSION */
    ,
    index,
    value,
    isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* JS_BLOCK_STATEMENT */
    ,
    body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* JS_TEMPLATE_LITERAL */
    ,
    elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* JS_IF_STATEMENT */
    ,
    test,
    consequent,
    alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* JS_ASSIGNMENT_EXPRESSION */
    ,
    left,
    right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* JS_SEQUENCE_EXPRESSION */
    ,
    expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* JS_RETURN_STATEMENT */
    ,
    returns,
    loc: locStub
  };
}

const isStaticExp = p => p.type === 4
/* SIMPLE_EXPRESSION */
&& p.isStatic;

exports.isStaticExp = isStaticExp;

const isBuiltInType = (tag, expected) => tag === expected || tag === (0, _shared.hyphenate)(expected);

exports.isBuiltInType = isBuiltInType;

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

const nonIdentifierRE = /^\d|[^\$\w]/;

const isSimpleIdentifier = name => !nonIdentifierRE.test(name);

exports.isSimpleIdentifier = isSimpleIdentifier;
const memberExpRE = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/;

const isMemberExpression = path => {
  if (!path) return false;
  return memberExpRE.test(path.trim());
};

exports.isMemberExpression = isMemberExpression;

function getInnerRange(loc, offset, length) {
  const source = loc.source.substr(offset, length);
  const newLoc = {
    source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
  return advancePositionWithMutation((0, _shared.extend)({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;

  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
        linesCount++;
        lastNewLinePos = i;
      }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || `unexpected compiler condition`);
  }
}

function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];

    if (p.type === 7
    /* DIRECTIVE */
    && (allowEmpty || p.exp) && ((0, _shared.isString)(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (dynamicOnly) continue;

        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === 'bind' && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
      return p;
    }
  }
}

function isBindKey(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(p => p.type === 7
  /* DIRECTIVE */
  && p.name === 'bind' && (!p.arg || // v-bind="obj"
  p.arg.type !== 4
  /* SIMPLE_EXPRESSION */
  || // v-bind:[_ctx.foo]
  !p.arg.isStatic) // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* INTERPOLATION */
  || node.type === 2
  /* TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 3
  /* TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 2
  /* SLOT */
  ;
}

function injectProp(node, prop, context) {
  let propsWithInjection;
  const props = node.type === 13
  /* VNODE_CALL */
  ? node.props : node.arguments[2];

  if (props == null || (0, _shared.isString)(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
      // merged props... add ours
      // only inject key to object literal if it's the first argument so that
      // if doesn't override user provided keys
      const first = props.arguments[0];

      if (!(0, _shared.isString)(first) && first.type === 15
      /* JS_OBJECT_EXPRESSION */
      ) {
          first.properties.unshift(prop);
        } else {
        if (props.callee === TO_HANDLERS) {
          // #2366
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }

      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      let alreadyExists = false; // check existing key to avoid overriding user provided keys

      if (prop.key.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
          const propKeyName = prop.key.content;
          alreadyExists = props.properties.some(p => p.key.type === 4
          /* SIMPLE_EXPRESSION */
          && p.key.content === propKeyName);
        }

      if (!alreadyExists) {
        props.properties.unshift(prop);
      }

      propsWithInjection = props;
    } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
  }

  if (node.type === 13
  /* VNODE_CALL */
  ) {
      node.props = propsWithInjection;
    } else {
    node.arguments[2] = propsWithInjection;
  }
}

function toValidAssetId(name, type) {
  return `_${type}_${name.replace(/[^\w]/g, '_')}`;
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];

        if (p.type === 7
        /* DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(c => hasScopeRef(c, ids));

    case 11
    /* FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(c => hasScopeRef(c, ids));

    case 9
    /* IF */
    :
      return node.branches.some(b => hasScopeRef(b, ids));

    case 10
    /* IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(c => hasScopeRef(c, ids));

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* COMPOUND_EXPRESSION */
    :
      return node.children.some(c => (0, _shared.isObject)(c) && hasScopeRef(c, ids));

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return false;

    default:
      if ("development" !== 'production') ;
      return false;
  }
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


const decodeRE = /&(gt|lt|amp|apos|quot);/g;
const decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
const defaultParserOptions = {
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0
  /* HTML */
  ,
  getTextMode: () => 0
  /* DATA */
  ,
  isVoidTag: _shared.NO,
  isPreTag: _shared.NO,
  isCustomElement: _shared.NO,
  decodeEntities: rawText => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
  onError: defaultOnError,
  comments: false
};

function baseParse(content, options = {}) {
  const context = createParserContext(content, options);
  const start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  const options = (0, _shared.extend)({}, defaultParserOptions);

  for (const key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] || defaultParserOptions[key];
  }

  return {
    options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false
  };
}

function parseChildren(context, mode, ancestors) {
  const parent = last(ancestors);
  const ns = parent ? parent.ns : 0
  /* HTML */
  ;
  const nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    const s = context.source;
    let node = undefined;

    if (mode === 0
    /* DATA */
    || mode === 1
    /* RCDATA */
    ) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          // '{{'
          node = parseInterpolation(context, mode);
        } else if (mode === 0
        /* DATA */
        && s[0] === '<') {
          // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
          if (s.length === 1) {
            emitError(context, 5
            /* EOF_BEFORE_TAG_NAME */
            , 1);
          } else if (s[1] === '!') {
            // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
            if (startsWith(s, '<!--')) {
              node = parseComment(context);
            } else if (startsWith(s, '<!DOCTYPE')) {
              // Ignore DOCTYPE by a limitation.
              node = parseBogusComment(context);
            } else if (startsWith(s, '<![CDATA[')) {
              if (ns !== 0
              /* HTML */
              ) {
                  node = parseCDATA(context, ancestors);
                } else {
                emitError(context, 1
                /* CDATA_IN_HTML_CONTENT */
                );
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11
              /* INCORRECTLY_OPENED_COMMENT */
              );
              node = parseBogusComment(context);
            }
          } else if (s[1] === '/') {
            // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
            if (s.length === 2) {
              emitError(context, 5
              /* EOF_BEFORE_TAG_NAME */
              , 2);
            } else if (s[2] === '>') {
              emitError(context, 14
              /* MISSING_END_TAG_NAME */
              , 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23
              /* X_INVALID_END_TAG */
              );
              parseTag(context, 1
              /* End */
              , parent);
              continue;
            } else {
              emitError(context, 12
              /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
              , 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors);
          } else if (s[1] === '?') {
            emitError(context, 21
            /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
            , 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12
            /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 1);
          }
        }
      }

    if (!node) {
      node = parseText(context, mode);
    }

    if ((0, _shared.isArray)(node)) {
      for (let i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace management for more efficient output
  // (same as v2 whitespace: 'condense')


  let removedWhitespace = false;

  if (mode !== 2
  /* RAWTEXT */
  ) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!context.inPre && node.type === 2
        /* TEXT */
        ) {
            if (!/[^\t\r\n\f ]/.test(node.content)) {
              const prev = nodes[i - 1];
              const next = nodes[i + 1]; // If:
              // - the whitespace is the first or last node, or:
              // - the whitespace is adjacent to a comment, or:
              // - the whitespace is between two elements AND contains newline
              // Then the whitespace is ignored.

              if (!prev || !next || prev.type === 3
              /* COMMENT */
              || next.type === 3
              /* COMMENT */
              || prev.type === 1
              /* ELEMENT */
              && next.type === 1
              /* ELEMENT */
              && /[\r\n]/.test(node.content)) {
                removedWhitespace = true;
                nodes[i] = null;
              } else {
                // Otherwise, condensed consecutive whitespace inside the text
                // down to a single space
                node.content = ' ';
              }
            } else {
              node.content = node.content.replace(/[\t\r\n\f ]+/g, ' ');
            }
          } // also remove comment nodes in prod by default


        if (!("development" !== 'production') && node.type === 3
        /* COMMENT */
        && !context.options.comments) {
          removedWhitespace = true;
          nodes[i] = null;
        }
      }

      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        // remove leading newline per html spec
        // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
        const first = nodes[0];

        if (first && first.type === 2
        /* TEXT */
        ) {
            first.content = first.content.replace(/^\r?\n/, '');
          }
      }
    }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* TEXT */
  ) {
      const prev = last(nodes); // Merge if both this and the previous node are text and those are
      // consecutive. This happens for cases like "a < b".

      if (prev && prev.type === 2
      /* TEXT */
      && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  const nodes = parseChildren(context, 3
  /* CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  const start = getCursor(context);
  let content; // Regular comment.

  const match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    const s = context.source.slice(0, match.index);
    let prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  const start = getCursor(context);
  const contentStart = context.source[1] === '?' ? 1 : 2;
  let content;
  const closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  const wasInPre = context.inPre;
  const wasInVPre = context.inVPre;
  const parent = last(ancestors);
  const element = parseTag(context, 0
  /* Start */
  , parent);
  const isPreBoundary = context.inPre && !wasInPre;
  const isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    return element;
  } // Children.


  ancestors.push(element);
  const mode = context.options.getTextMode(element, parent);
  const children = parseChildren(context, mode, ancestors);
  ancestors.pop();
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* End */
    , parent);
  } else {
    emitError(context, 24
    /* X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      const first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

const isSpecialTemplateDirective = /*#__PURE__*/(0, _shared.makeMap)(`if,else,else-if,for,slot`);
/**
 * Parse a tag (E.g. `<div id=a>`) with that type (start tag or end tag).
 */

function parseTag(context, type, parent) {
  // Tag open.
  const start = getCursor(context);
  const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  const tag = match[1];
  const ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  const cursor = getCursor(context);
  const currentSource = context.source; // Attributes.

  let props = parseAttributes(context, type); // check <pre> tag

  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  } // check v-pre


  if (!context.inVPre && props.some(p => p.type === 7
  /* DIRECTIVE */
  && p.name === 'pre')) {
    context.inVPre = true; // reset context

    (0, _shared.extend)(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(p => p.name !== 'v-pre');
  } // Tag close.


  let isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* End */
    && isSelfClosing) {
      emitError(context, 4
      /* END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  let tagType = 0
  /* ELEMENT */
  ;
  const options = context.options;

  if (!context.inVPre && !options.isCustomElement(tag)) {
    const hasVIs = props.some(p => p.type === 7
    /* DIRECTIVE */
    && p.name === 'is');

    if (options.isNativeTag && !hasVIs) {
      if (!options.isNativeTag(tag)) tagType = 1
      /* COMPONENT */
      ;
    } else if (hasVIs || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || /^[A-Z]/.test(tag) || tag === 'component') {
      tagType = 1
      /* COMPONENT */
      ;
    }

    if (tag === 'slot') {
      tagType = 2
      /* SLOT */
      ;
    } else if (tag === 'template' && props.some(p => {
      return p.type === 7
      /* DIRECTIVE */
      && isSpecialTemplateDirective(p.name);
    })) {
      tagType = 3
      /* TEMPLATE */
      ;
    }
  }

  return {
    type: 1
    /* ELEMENT */
    ,
    ns,
    tag,
    tagType,
    props,
    isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function parseAttributes(context, type) {
  const props = [];
  const attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* End */
    ) {
        emitError(context, 3
        /* END_TAG_WITH_ATTRIBUTES */
        );
      }

    const attr = parseAttribute(context, attributeNames);

    if (type === 0
    /* Start */
    ) {
        props.push(attr);
      }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  const start = getCursor(context);
  const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  const name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    const pattern = /["'<]/g;
    let m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  let value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  const loc = getSelection(context, start);

  if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
    const match = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
    const dirName = match[1] || (startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    let arg;

    if (match[2]) {
      const isSlot = dirName === 'slot';
      const startOffset = name.indexOf(match[2]);
      const loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match[2].length + (isSlot && match[3] || '').length));
      let content = match[2];
      let isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 26
          /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
        }

        content = content.substr(1, content.length - 2);
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += match[3] || '';
      }

      arg = {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content,
        isStatic,
        isConstant: isStatic,
        loc
      };
    }

    if (value && value.isQuoted) {
      const valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    return {
      type: 7
      /* DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // true by `transformExpression` to make it eligible for hoisting.
        isConstant: false,
        loc: value.loc
      },
      arg,
      modifiers: match[3] ? match[3].substr(1).split('.') : [],
      loc
    };
  }

  return {
    type: 6
    /* ATTRIBUTE */
    ,
    name,
    value: value && {
      type: 2
      /* TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc
  };
}

function parseAttributeValue(context) {
  const start = getCursor(context);
  let content;
  const quote = context.source[0];
  const isQuoted = quote === `"` || quote === `'`;

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    const endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    const match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    const unexpectedChars = /["'<=`]/g;
    let m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* ATTRIBUTE_VALUE */
    );
  }

  return {
    content,
    isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  const [open, close] = context.options.delimiters;
  const closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  const start = getCursor(context);
  advanceBy(context, open.length);
  const innerStart = getCursor(context);
  const innerEnd = getCursor(context);
  const rawContentLength = closeIndex - open.length;
  const rawContent = context.source.slice(0, rawContentLength);
  const preTrimContent = parseTextData(context, rawContentLength, mode);
  const content = preTrimContent.trim();
  const startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* INTERPOLATION */
    ,
    content: {
      type: 4
      /* SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      isConstant: false,
      content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  const endTokens = ['<', context.options.delimiters[0]];

  if (mode === 3
  /* CDATA */
  ) {
      endTokens.push(']]>');
    }

  let endIndex = context.source.length;

  for (let i = 0; i < endTokens.length; i++) {
    const index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  const start = getCursor(context);
  const content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* TEXT */
    ,
    content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  const rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* RAWTEXT */
  || mode === 3
  /* CDATA */
  || rawText.indexOf('&') === -1) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  const {
    column,
    line,
    offset
  } = context;
  return {
    column,
    line,
    offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start,
    end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  const {
    source
  } = context;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  const match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset, loc = getCursor(context)) {
  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  const s = context.source;

  switch (mode) {
    case 0
    /* DATA */
    :
      if (startsWith(s, '</')) {
        //TODO: probably bad performance
        for (let i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* RCDATA */
    :
    case 2
    /* RAWTEXT */
    :
      {
        const parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, new Map(), // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  const {
    children
  } = root;
  return children.length === 1 && child.type === 1
  /* ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context, resultCache, doNotHoistNode = false) {
  let hasHoistedNode = false; // Some transforms, e.g. transformAssetUrls from @vue/compiler-sfc, replaces
  // static bindings with expressions. These expressions are guaranteed to be
  // constant so they are still eligible for hoisting, but they are only
  // available at runtime and therefore cannot be evaluated ahead of time.
  // This is only a concern for pre-stringification (via transformHoist by
  // @vue/compiler-dom), but doing it here allows us to perform only one full
  // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
  // stringficiation threshold is met.

  let hasRuntimeConstant = false;
  const {
    children
  } = node;

  for (let i = 0; i < children.length; i++) {
    const child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* ELEMENT */
    && child.tagType === 0
    /* ELEMENT */
    ) {
        let staticType;

        if (!doNotHoistNode && (staticType = getStaticType(child, resultCache)) > 0) {
          if (staticType === 2
          /* HAS_RUNTIME_CONSTANT */
          ) {
              hasRuntimeConstant = true;
            }

          child.codegenNode.patchFlag = -1
          /* HOISTED */
          + ("development" !== 'production' ? ` /* HOISTED */` : ``);
          child.codegenNode = context.hoist(child.codegenNode);
          hasHoistedNode = true;
          continue;
        } else {
          // node may contain dynamic children, but its props may be eligible for
          // hoisting.
          const codegenNode = child.codegenNode;

          if (codegenNode.type === 13
          /* VNODE_CALL */
          ) {
              const flag = getPatchFlag(codegenNode);

              if ((!flag || flag === 512
              /* NEED_PATCH */
              || flag === 1
              /* TEXT */
              ) && !hasNonHoistableProps(child)) {
                const props = getNodeProps(child);

                if (props) {
                  codegenNode.props = context.hoist(props);
                }
              }
            }
        }
      } else if (child.type === 12
    /* TEXT_CALL */
    ) {
        const staticType = getStaticType(child.content, resultCache);

        if (staticType > 0) {
          if (staticType === 2
          /* HAS_RUNTIME_CONSTANT */
          ) {
              hasRuntimeConstant = true;
            }

          child.codegenNode = context.hoist(child.codegenNode);
          hasHoistedNode = true;
        }
      } // walk further


    if (child.type === 1
    /* ELEMENT */
    ) {
        walk(child, context, resultCache);
      } else if (child.type === 11
    /* FOR */
    ) {
        // Do not hoist v-for single child because it has to be a block
        walk(child, context, resultCache, child.children.length === 1);
      } else if (child.type === 9
    /* IF */
    ) {
        for (let i = 0; i < child.branches.length; i++) {
          // Do not hoist v-if single child because it has to be a block
          walk(child.branches[i], context, resultCache, child.branches[i].children.length === 1);
        }
      }
  }

  if (!hasRuntimeConstant && hasHoistedNode && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}

function getStaticType(node, resultCache = new Map()) {
  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      if (node.tagType !== 0
      /* ELEMENT */
      ) {
          return 0
          /* NOT_STATIC */
          ;
        }

      const cached = resultCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      const codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* VNODE_CALL */
      ) {
          return 0
          /* NOT_STATIC */
          ;
        }

      const flag = getPatchFlag(codegenNode);

      if (!flag && !hasNonHoistableProps(node)) {
        // element self is static. check its children.
        let returnType = 1
        /* FULL_STATIC */
        ;

        for (let i = 0; i < node.children.length; i++) {
          const childType = getStaticType(node.children[i], resultCache);

          if (childType === 0
          /* NOT_STATIC */
          ) {
              resultCache.set(node, 0
              /* NOT_STATIC */
              );
              return 0
              /* NOT_STATIC */
              ;
            } else if (childType === 2
          /* HAS_RUNTIME_CONSTANT */
          ) {
              returnType = 2
              /* HAS_RUNTIME_CONSTANT */
              ;
            }
        } // check if any of the props contain runtime constants


        if (returnType !== 2
        /* HAS_RUNTIME_CONSTANT */
        ) {
            for (let i = 0; i < node.props.length; i++) {
              const p = node.props[i];

              if (p.type === 7
              /* DIRECTIVE */
              && p.name === 'bind' && p.exp && (p.exp.type === 8
              /* COMPOUND_EXPRESSION */
              || p.exp.isRuntimeConstant)) {
                returnType = 2
                /* HAS_RUNTIME_CONSTANT */
                ;
              }
            }
          } // only svg/foreignObject could be block here, however if they are
        // stati then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          codegenNode.isBlock = false;
        }

        resultCache.set(node, returnType);
        return returnType;
      } else {
        resultCache.set(node, 0
        /* NOT_STATIC */
        );
        return 0
        /* NOT_STATIC */
        ;
      }

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return 1
      /* FULL_STATIC */
      ;

    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
    case 10
    /* IF_BRANCH */
    :
      return 0
      /* NOT_STATIC */
      ;

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return getStaticType(node.content, resultCache);

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return node.isConstant ? node.isRuntimeConstant ? 2
      /* HAS_RUNTIME_CONSTANT */
      : 1
      /* FULL_STATIC */
      : 0
      /* NOT_STATIC */
      ;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      let returnType = 1
      /* FULL_STATIC */
      ;

      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if ((0, _shared.isString)(child) || (0, _shared.isSymbol)(child)) {
          continue;
        }

        const childType = getStaticType(child, resultCache);

        if (childType === 0
        /* NOT_STATIC */
        ) {
            return 0
            /* NOT_STATIC */
            ;
          } else if (childType === 2
        /* HAS_RUNTIME_CONSTANT */
        ) {
            returnType = 2
            /* HAS_RUNTIME_CONSTANT */
            ;
          }
      }

      return returnType;

    default:
      if ("development" !== 'production') ;
      return 0
      /* NOT_STATIC */
      ;
  }
}
/**
 * Even for a node with no patch flag, it is possible for it to contain
 * non-hoistable expressions that refers to scope variables, e.g. compiler
 * injected keys or cached event handlers. Therefore we need to always check the
 * codegenNode's props to be sure.
 */


function hasNonHoistableProps(node) {
  const props = getNodeProps(node);

  if (props && props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      const {
        properties
      } = props;

      for (let i = 0; i < properties.length; i++) {
        const {
          key,
          value
        } = properties[i];

        if (key.type !== 4
        /* SIMPLE_EXPRESSION */
        || !key.isStatic || value.type !== 4
        /* SIMPLE_EXPRESSION */
        || !value.isStatic && !value.isConstant) {
          return true;
        }
      }
    }

  return false;
}

function getNodeProps(node) {
  const codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* VNODE_CALL */
  ) {
      return codegenNode.props;
    }
}

function getPatchFlag(node) {
  const flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, {
  prefixIdentifiers = false,
  hoistStatic = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = _shared.NOOP,
  isCustomElement = _shared.NOOP,
  expressionPlugins = [],
  scopeId = null,
  ssr = false,
  ssrCssVars = ``,
  bindingMetadata = {},
  onError = defaultOnError
}) {
  const context = {
    // options
    prefixIdentifiers,
    hoistStatic,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    ssr,
    ssrCssVars,
    bindingMetadata,
    onError,
    // state
    root,
    helpers: new Set(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: new Set(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,

    // methods
    helper(name) {
      context.helpers.add(name);
      return name;
    },

    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },

    replaceNode(node) {
      /* istanbul ignore if */
      if ("development" !== 'production') {
        if (!context.currentNode) {
          throw new Error(`Node being replaced is already removed.`);
        }

        if (!context.parent) {
          throw new Error(`Cannot replace root node.`);
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },

    removeNode(node) {
      if ("development" !== 'production' && !context.parent) {
        throw new Error(`Cannot remove root node.`);
      }

      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ("development" !== 'production' && removalIndex < 0) {
        throw new Error(`node being removed is not a child of current parent`);
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },

    onNodeRemoved: () => {},

    addIdentifiers(exp) {},

    removeIdentifiers(exp) {},

    hoist(exp) {
      context.hoists.push(exp);
      const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, true);
      identifier.hoisted = exp;
      return identifier;
    },

    cache(exp, isVNode = false) {
      return createCacheExpression(++context.cached, exp, isVNode);
    }

  };
  return context;
}

function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = [...context.helpers];
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = [...context.imports];
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
}

function createRootCodegen(root, context) {
  const {
    helper
  } = context;
  const {
    children
  } = root;

  if (children.length === 1) {
    const child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      const codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* VNODE_CALL */
      ) {
          codegenNode.isBlock = true;
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, `${64
    /* STABLE_FRAGMENT */
    } /* ${_shared.PatchFlagNames[64
    /* STABLE_FRAGMENT */
    ]} */`, undefined, undefined, true);
  } else ;
}

function traverseChildren(parent, context) {
  let i = 0;

  const nodeRemoved = () => {
    i--;
  };

  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if ((0, _shared.isString)(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  const {
    nodeTransforms
  } = context;
  const exitFns = [];

  for (let i = 0; i < nodeTransforms.length; i++) {
    const onExit = nodeTransforms[i](node, context);

    if (onExit) {
      if ((0, _shared.isArray)(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* IF */
    :
      for (let i = 0; i < node.branches.length; i++) {
        traverseNode(node.branches[i], context);
      }

      break;

    case 10
    /* IF_BRANCH */
    :
    case 11
    /* FOR */
    :
    case 1
    /* ELEMENT */
    :
    case 0
    /* ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  let i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  const matches = (0, _shared.isString)(name) ? n => n === name : n => name.test(n);
  return (node, context) => {
    if (node.type === 1
    /* ELEMENT */
    ) {
        const {
          props
        } = node; // structural directive transforms are not concerned with slots
        // as they are handled separately in vSlot.ts

        if (node.tagType === 3
        /* TEMPLATE */
        && props.some(isVSlot)) {
          return;
        }

        const exitFns = [];

        for (let i = 0; i < props.length; i++) {
          const prop = props[i];

          if (prop.type === 7
          /* DIRECTIVE */
          && matches(prop.name)) {
            // structural directives are removed to avoid infinite recursion
            // also we remove them *before* applying so that it can further
            // traverse itself in case it moves the node around
            props.splice(i, 1);
            i--;
            const onExit = fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }

        return exitFns;
      }
  };
}

const PURE_ANNOTATION = `/*#__PURE__*/`;

function createCodegenContext(ast, {
  mode = 'function',
  prefixIdentifiers = mode === 'module',
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssr = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssr,
    source: ast.loc.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,

    helper(key) {
      return `_${helperNameMap[key]}`;
    },

    push(code, node) {
      context.code += code;
    },

    indent() {
      newline(++context.indentLevel);
    },

    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },

    newline() {
      newline(context.indentLevel);
    }

  };

  function newline(n) {
    context.push('\n' + `  `.repeat(n));
  }

  return context;
}

function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const hasHelpers = ast.helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles

  {
    genFunctionPreamble(ast, context);
  } // binding optimizations

  const optimizeSources = options.bindingMetadata ? `, $props, $setup, $data, $options` : ``; // enter render function

  if (!ssr) {
    push(`function render(_ctx, _cache${optimizeSources}) {`);
  } else {
    push(`function ssrRender(_ctx, _push, _parent, _attrs${optimizeSources}) {`);
  }

  indent();

  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push(`const { ${ast.helpers.map(s => `${helperNameMap[s]}: _${helperNameMap[s]}`).join(', ')} } = _Vue`);
      push(`\n`);
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.temps > 0) {
    push(`let `);

    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push(`\n`);
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push(`return `);
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }

  if (useWithBlock) {
    deindent();
    push(`}`);
  }

  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName
  } = context;
  const VueBinding = runtimeGlobalName;

  const aliasHelper = s => `${helperNameMap[s]}: _${helperNameMap[s]}`; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.


  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push(`const _Vue = ${VueBinding}\n`); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        const staticHelpers = [CREATE_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(helper => ast.helpers.includes(helper)).map(aliasHelper).join(', ');
        push(`const { ${staticHelpers} } = _Vue\n`);
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}

function genAssets(assets, type, {
  helper,
  push,
  newline
}) {
  const resolver = helper(type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (let i = 0; i < assets.length; i++) {
    const id = assets[i];
    push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)})`);

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  const {
    push,
    newline,
    helper,
    scopeId,
    mode
  } = context;
  newline();
  hoists.forEach((exp, i) => {
    if (exp) {
      push(`const _hoisted_${i + 1} = `);
      genNode(exp, context);
      newline();
    }
  });
  context.pure = false;
}

function isText$1(n) {
  return (0, _shared.isString)(n) || n.type === 4
  /* SIMPLE_EXPRESSION */
  || n.type === 2
  /* TEXT */
  || n.type === 5
  /* INTERPOLATION */
  || n.type === 8
  /* COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || "development" !== 'production' && nodes.some(n => (0, _shared.isArray)(n) || !isText$1(n));
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}

function genNodeList(nodes, context, multilines = false, comma = true) {
  const {
    push,
    newline
  } = context;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    if ((0, _shared.isString)(node)) {
      push(node);
    } else if ((0, _shared.isArray)(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if ((0, _shared.isString)(node)) {
    context.push(node);
    return;
  }

  if ((0, _shared.isSymbol)(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
      "development" !== 'production' && assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. ` + `Apply appropriate transforms first.`);
      genNode(node.codegenNode, context);
      break;

    case 2
    /* TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;
    // SSR only types

    case 21
    /* JS_BLOCK_STATEMENT */
    :
      break;

    case 22
    /* JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* JS_IF_STATEMENT */
    :
      break;

    case 24
    /* JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* IF_BRANCH */
    :
      // noop
      break;

    default:
      if ("development" !== 'production') {
        assert(false, `unhandled codegen node type: ${node.type}`); // make sure we exhaust all possible types

        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  const {
    content,
    isStatic
  } = node;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  const {
    push,
    helper,
    pure
  } = context;
  if (pure) push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}

function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];

    if ((0, _shared.isString)(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  const {
    push
  } = context;

  if (node.type === 8
  /* COMPOUND_EXPRESSION */
  ) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
    // only quote keys if necessary
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push(`[${node.content}]`, node);
  }
}

function genComment(node, context) {
  if ("development" !== 'production') {
    const {
      push,
      helper,
      pure
    } = context;

    if (pure) {
      push(PURE_ANNOTATION);
    }

    push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
  }
}

function genVNodeCall(node, context) {
  const {
    push,
    helper,
    pure
  } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking
  } = node;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }

  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + `(`, node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(`)`);

  if (isBlock) {
    push(`)`);
  }

  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}

function genNullableArgs(args) {
  let i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(arg => arg || `null`);
} // JavaScript


function genCallExpression(node, context) {
  const {
    push,
    helper,
    pure
  } = context;
  const callee = (0, _shared.isString)(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + `(`, node);
  genNodeList(node.arguments, context);
  push(`)`);
}

function genObjectExpression(node, context) {
  const {
    push,
    indent,
    deindent,
    newline
  } = context;
  const {
    properties
  } = node;

  if (!properties.length) {
    push(`{}`, node);
    return;
  }

  const multilines = properties.length > 1 || "development" !== 'production' && properties.some(p => p.value.type !== 4
  /* SIMPLE_EXPRESSION */
  );
  push(multilines ? `{` : `{ `);
  multilines && indent();

  for (let i = 0; i < properties.length; i++) {
    const {
      key,
      value
    } = properties[i]; // key

    genExpressionAsPropertyKey(key, context);
    push(`: `); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(`,`);
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? `}` : ` }`);
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  const {
    push,
    indent,
    deindent,
    scopeId,
    mode
  } = context;
  const {
    params,
    returns,
    body,
    newline,
    isSlot
  } = node;

  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }

  push(`(`, node);

  if ((0, _shared.isArray)(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(`) => `);

  if (newline || body) {
    push(`{`);
    indent();
  }

  if (returns) {
    if (newline) {
      push(`return `);
    }

    if ((0, _shared.isArray)(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push(`}`);
  }

  if (isSlot) {
    push(`)`);
  }
}

function genConditionalExpression(node, context) {
  const {
    test,
    consequent,
    alternate,
    newline: needNewline
  } = node;
  const {
    push,
    indent,
    deindent,
    newline
  } = context;

  if (test.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19
  /* JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  const {
    push,
    helper,
    indent,
    deindent,
    newline
  } = context;
  push(`_cache[${node.index}] || (`);

  if (node.isVNode) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
    newline();
  }

  push(`_cache[${node.index}] = `);
  genNode(node.value, context);

  if (node.isVNode) {
    push(`,`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }

  push(`)`);
} // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


const prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
  const exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
  } catch (e) {
    let message = e.message;
    const keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
    }

    context.onError(createCompilerError(43
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

const isLiteralWhitelisted = /*#__PURE__*/(0, _shared.makeMap)('true,false,null,this');

const transformExpression = (node, context) => {
  if (node.type === 5
  /* INTERPOLATION */
  ) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1
  /* ELEMENT */
  ) {
      // handle directives on element
      for (let i = 0; i < node.props.length; i++) {
        const dir = node.props[i]; // do not process for v-on & v-for since they are special handled

        if (dir.type === 7
        /* DIRECTIVE */
        && dir.name !== 'for') {
          const exp = dir.exp;
          const arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
          // for wrapping inline statements.

          if (exp && exp.type === 4
          /* SIMPLE_EXPRESSION */
          && !(dir.name === 'on' && arg)) {
            dir.exp = processExpression(exp, context, // slot args must be processed as function params
            dir.name === 'slot');
          }

          if (arg && arg.type === 4
          /* SIMPLE_EXPRESSION */
          && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


exports.transformExpression = transformExpression;

function processExpression(node, context, // some expressions like v-slot props & v-for aliases should be parsed as
// function params
asParams = false, // v-on handler values may contain multiple statements
asRawStatements = false) {
  if ("development" !== 'production' && true) {
    // simple in-browser validation (same logic in 2.x)
    validateBrowserExpression(node, context, asParams, asRawStatements);
    return node;
  }

  if (!context.prefixIdentifiers || !node.content.trim()) {
    return node;
  }

  const {
    bindingMetadata
  } = context;

  const prefix = raw => {
    const source = (0, _shared.hasOwn)(bindingMetadata, raw) ? `$` + bindingMetadata[raw] : `_ctx`;
    return `${source}.${raw}`;
  }; // fast path if expression is a simple identifier.


  const rawExp = node.content; // bail on parens to prevent any possible function invocations.

  const bailConstant = rawExp.indexOf(`(`) > -1;

  if (isSimpleIdentifier(rawExp)) {
    if (!asParams && !context.identifiers[rawExp] && !(0, _shared.isGloballyWhitelisted)(rawExp) && !isLiteralWhitelisted(rawExp)) {
      node.content = prefix(rawExp);
    } else if (!context.identifiers[rawExp] && !bailConstant) {
      // mark node constant for hoisting unless it's referring a scope variable
      node.isConstant = true;
    }

    return node;
  }

  let ast; // exp needs to be parsed differently:
  // 1. Multiple inline statements (v-on, with presence of `;`): parse as raw
  //    exp, but make sure to pad with spaces for consistent ranges
  // 2. Expressions: wrap with parens (for e.g. object expressions)
  // 3. Function arguments (v-for, v-slot): place in a function argument position

  const source = asRawStatements ? ` ${rawExp} ` : `(${rawExp})${asParams ? `=>{}` : ``}`;

  try {
    ast = (0, _parser.parse)(source, {
      plugins: [...context.expressionPlugins, ..._shared.babelParserDefaultPlugins]
    }).program;
  } catch (e) {
    context.onError(createCompilerError(43
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, e.message));
    return node;
  }

  const ids = [];
  const knownIds = Object.create(context.identifiers);

  const isDuplicate = node => ids.some(id => id.start === node.start);

  (0, _estreeWalker.walk)(ast, {
    enter(node, parent) {
      if (node.type === 'Identifier') {
        if (!isDuplicate(node)) {
          const needPrefix = shouldPrefix(node, parent);

          if (!knownIds[node.name] && needPrefix) {
            if (isPropertyShorthand(node, parent)) {
              // property shorthand like { foo }, we need to add the key since we
              // rewrite the value
              node.prefix = `${node.name}: `;
            }

            node.name = prefix(node.name);
            ids.push(node);
          } else if (!isStaticPropertyKey(node, parent)) {
            // The identifier is considered constant unless it's pointing to a
            // scope variable (a v-for alias, or a v-slot prop)
            if (!(needPrefix && knownIds[node.name]) && !bailConstant) {
              node.isConstant = true;
            } // also generate sub-expressions for other identifiers for better
            // source map support. (except for property keys which are static)


            ids.push(node);
          }
        }
      } else if (isFunction(node)) {
        // walk function expressions and add its arguments to known identifiers
        // so that we don't prefix them
        node.params.forEach(p => (0, _estreeWalker.walk)(p, {
          enter(child, parent) {
            if (child.type === 'Identifier' && // do not record as scope variable if is a destructured key
            !isStaticPropertyKey(child, parent) && // do not record if this is a default value
            // assignment of a destructured variable
            !(parent && parent.type === 'AssignmentPattern' && parent.right === child)) {
              const {
                name
              } = child;

              if (node.scopeIds && node.scopeIds.has(name)) {
                return;
              }

              if (name in knownIds) {
                knownIds[name]++;
              } else {
                knownIds[name] = 1;
              }

              (node.scopeIds || (node.scopeIds = new Set())).add(name);
            }
          }

        }));
      }
    },

    leave(node) {
      if (node !== ast.body[0].expression && node.scopeIds) {
        node.scopeIds.forEach(id => {
          knownIds[id]--;

          if (knownIds[id] === 0) {
            delete knownIds[id];
          }
        });
      }
    }

  }); // We break up the compound expression into an array of strings and sub
  // expressions (for identifiers that have been prefixed). In codegen, if
  // an ExpressionNode has the `.children` property, it will be used instead of
  // `.content`.

  const children = [];
  ids.sort((a, b) => a.start - b.start);
  ids.forEach((id, i) => {
    // range is offset by -1 due to the wrapping parens when parsed
    const start = id.start - 1;
    const end = id.end - 1;
    const last = ids[i - 1];
    const leadingText = rawExp.slice(last ? last.end - 1 : 0, start);

    if (leadingText.length || id.prefix) {
      children.push(leadingText + (id.prefix || ``));
    }

    const source = rawExp.slice(start, end);
    children.push(createSimpleExpression(id.name, false, {
      source,
      start: advancePositionWithClone(node.loc.start, source, start),
      end: advancePositionWithClone(node.loc.start, source, end)
    }, id.isConstant
    /* isConstant */
    ));

    if (i === ids.length - 1 && end < rawExp.length) {
      children.push(rawExp.slice(end));
    }
  });
  let ret;

  if (children.length) {
    ret = createCompoundExpression(children, node.loc);
  } else {
    ret = node;
    ret.isConstant = !bailConstant;
  }

  ret.identifiers = Object.keys(knownIds);
  return ret;
}

const isFunction = node => {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};

const isStaticProperty = node => node && (node.type === 'ObjectProperty' || node.type === 'ObjectMethod') && !node.computed;

const isPropertyShorthand = (node, parent) => {
  return isStaticProperty(parent) && parent.value === node && parent.key.type === 'Identifier' && parent.key.name === node.name && parent.key.start === node.start;
};

const isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;

function shouldPrefix(identifier, parent) {
  if (!(isFunction(parent) && ( // not id of a FunctionDeclaration
  parent.id === identifier || // not a params of a function
  parent.params.includes(identifier))) && // not a key of Property
  !isStaticPropertyKey(identifier, parent) && // not a property of a MemberExpression
  !((parent.type === 'MemberExpression' || parent.type === 'OptionalMemberExpression') && parent.property === identifier && !parent.computed) && // not in an Array destructure pattern
  !(parent.type === 'ArrayPattern') && // skip whitelisted globals
  !(0, _shared.isGloballyWhitelisted)(identifier.name) && // special case for webpack compilation
  identifier.name !== `require` && // is a special keyword but parsed as identifier
  identifier.name !== `arguments`) {
    return true;
  }
}

const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
  return processIf(node, dir, context, (ifNode, branch, isRoot) => {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    const siblings = context.parent.children;
    let i = siblings.indexOf(ifNode);
    let key = 0;

    while (i-- >= 0) {
      const sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          key += sibling.branches.length;
        }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return () => {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        const parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(27
    /* X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression(`true`, false, loc);
  }

  if ("development" !== 'production' && true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9
      /* IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    const siblings = context.parent.children;
    const comments = [];
    let i = siblings.indexOf(node);

    while (i-- >= -1) {
      const sibling = siblings[i];

      if ("development" !== 'production' && sibling && sibling.type === 3
      /* COMMENT */
      ) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }

      if (sibling && sibling.type === 2
      /* TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          // move the node to the if node's branches
          context.removeNode();
          const branch = createIfBranch(node, dir);

          if ("development" !== 'production' && comments.length) {
            branch.children = [...comments, ...branch.children];
          } // check if user is forcing same key on different branches


          if ("development" !== 'production' || !true) {
            const key = branch.userKey;

            if (key) {
              sibling.branches.forEach(({
                userKey
              }) => {
                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(28
                  /* X_V_IF_SAME_KEY */
                  , branch.userKey.loc));
                }
              });
            }
          }

          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
          // make sure to traverse here.

          traverseNode(branch, context); // call on exit

          if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
          // node has been removed.

          context.currentNode = null;
        } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  return {
    type: 10
    /* IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: node.tagType === 3
    /* TEMPLATE */
    && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, `key`)
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), ["development" !== 'production' ? '"v-if"' : '""', 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  const {
    helper
  } = context;
  const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, true));
  const {
    children
  } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* FOR */
    ) {
        // optimize away nested fragments when child is a ForNode
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, `${64
      /* STABLE_FRAGMENT */
      } /* ${_shared.PatchFlagNames[64
      /* STABLE_FRAGMENT */
      ]} */`, undefined, undefined, true, false, branch.loc);
    }
  } else {
    const vnodeCall = firstChild.codegenNode; // Change createVNode to createBlock.

    if (vnodeCall.type === 13
    /* VNODE_CALL */
    ) {
        vnodeCall.isBlock = true;
        helper(OPEN_BLOCK);
        helper(CREATE_BLOCK);
      } // inject branch key


    injectProp(vnodeCall, keyProperty, context);
    return vnodeCall;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* ATTRIBUTE */
  ) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
    // directive
    const exp = a.exp;
    const branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* JS_CONDITIONAL_EXPRESSION */
    ) {
        if (node.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
            node = node.alternate;
          } else {
          return node;
        }
      } else if (node.type === 20
    /* JS_CACHE_EXPRESSION */
    ) {
        node = node.value;
      }
  }
}

const transformFor = createStructuralDirectiveTransform('for', (node, dir, context) => {
  const {
    helper
  } = context;
  return processFor(node, dir, context, forNode => {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    const renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    const keyProp = findProp(node, `key`);
    const keyProperty = keyProp ? createObjectProperty(`key`, keyProp.type === 6
    /* ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
    const isStableFragment = forNode.source.type === 4
    /* SIMPLE_EXPRESSION */
    && forNode.source.isConstant;
    const fragmentFlag = isStableFragment ? 64
    /* STABLE_FRAGMENT */
    : keyProp ? 128
    /* KEYED_FRAGMENT */
    : 256
    /* UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, `${fragmentFlag} /* ${_shared.PatchFlagNames[fragmentFlag]} */`, undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , node.loc);
    return () => {
      // finish the codegen now that all children have been traversed
      let childBlock;
      const isTemplate = isTemplateNode(node);
      const {
        children
      } = forNode; // check <template v-for> key placement

      if (("development" !== 'production' || !true) && isTemplate) {
        node.children.some(c => {
          if (c.type === 1
          /* ELEMENT */
          ) {
              const key = findProp(c, 'key');

              if (key) {
                context.onError(createCompilerError(32
                /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
                , key.loc));
                return true;
              }
            }
        });
      }

      const needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* ELEMENT */
      ;
      const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, `${64
        /* STABLE_FRAGMENT */
        } /* ${_shared.PatchFlagNames[64
        /* STABLE_FRAGMENT */
        ]} */`, undefined, undefined, true);
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        }
      }

      renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
      /* force newline */
      ));
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(30
    /* X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  const parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(31
    /* X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  const {
    addIdentifiers,
    removeIdentifiers,
    scopes
  } = context;
  const {
    source,
    value,
    key,
    index
  } = parseResult;
  const forNode = {
    type: 11
    /* FOR */
    ,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const [, LHS, RHS] = inMatch;
  const result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if ("development" !== 'production' && true) {
    validateBrowserExpression(result.source, context);
  }

  let valueContent = LHS.trim().replace(stripParensRE, '').trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if ("development" !== 'production' && true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if ("development" !== 'production' && true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if ("development" !== 'production' && true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams({
  value,
  key,
  index
}) {
  const params = [];

  if (value) {
    params.push(value);
  }

  if (key) {
    if (!value) {
      params.push(createSimpleExpression(`_`, false));
    }

    params.push(key);
  }

  if (index) {
    if (!key) {
      if (!value) {
        params.push(createSimpleExpression(`_`, false));
      }

      params.push(createSimpleExpression(`__`, false));
    }

    params.push(index);
  }

  return params;
}

const defaultFallback = createSimpleExpression(`undefined`, false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

const trackSlotScopes = (node, context) => {
  if (node.type === 1
  /* ELEMENT */
  && (node.tagType === 1
  /* COMPONENT */
  || node.tagType === 3
  /* TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    const vSlot = findDir(node, 'slot');

    if (vSlot) {
      const slotProps = vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


exports.trackSlotScopes = trackSlotScopes;

const trackVForSlotScopes = (node, context) => {
  let vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    const result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      const {
        value,
        key,
        index
      } = result;
      const {
        addIdentifiers,
        removeIdentifiers
      } = context;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return () => {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

exports.trackVForSlotScopes = trackVForSlotScopes;

const buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false
/* newline */
, true
/* isSlot */
, children.length ? children[0].loc : loc); // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const {
    children,
    loc
  } = node;
  const slotsProperties = [];
  const dynamicSlots = [];

  const buildDefaultSlotProperty = (props, children) => createObjectProperty(`default`, buildSlotFn(props, children, loc)); // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.


  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  const onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    const {
      arg,
      exp
    } = onComponentSlot;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = new Set();

  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* COMMENT */
      ) {
          implicitDefaultChildren.push(slotElement);
        }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(36
      /* X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    const {
      children: slotChildren,
      loc: slotLoc
    } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir; // check if name is dynamic.

    let staticSlotName;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }

    const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    let vIf;
    let vElse;
    let vFor;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      let j = i;
      let prev;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* COMMENT */
        ) {
            break;
          }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        let conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
      } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(31
        /* X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(37
          /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(38
        /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  const slotFlag = hasDynamicSlots ? 2
  /* DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* FORWARDED */
  : 1
  /* STABLE */
  ;
  let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression('' + slotFlag, false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots,
    hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn) {
  return createObjectExpression([createObjectProperty(`name`, name), createObjectProperty(`fn`, fn)]);
}

function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (child.type === 1
    /* ELEMENT */
    ) {
        if (child.tagType === 2
        /* SLOT */
        || child.tagType === 0
        /* ELEMENT */
        && hasForwardedSlots(child.children)) {
          return true;
        }
      }
  }

  return false;
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


const directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

const transformElement = (node, context) => {
  if (!(node.type === 1
  /* ELEMENT */
  && (node.tagType === 0
  /* ELEMENT */
  || node.tagType === 1
  /* COMPONENT */
  ))) {
    return;
  } // perform the work on exit, after all child expressions have been
  // processed and merged.


  return function postTransformElement() {
    const {
      tag,
      props
    } = node;
    const isComponent = node.tagType === 1
    /* COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    const vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = (0, _shared.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let vnodePatchFlag;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject' || // #938: elements with dynamic keys should be forced into blocks
    findProp(node, 'key', true)); // props

    if (props.length > 0) {
      const propsBuildResult = buildProps(node, context);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(dir => buildDirectiveArgs(dir, context))) : undefined;
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* DYNAMIC_SLOTS */
        ;

        if ("development" !== 'production' && node.children.length > 1) {
          context.onError(createCompilerError(44
          /* X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      const shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        const {
          slots,
          hasDynamicSlots
        } = buildSlots(node, context);
        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type = child.type; // check for dynamic text children

        const hasDynamicTextChild = type === 5
        /* INTERPOLATION */
        || type === 8
        /* COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && !getStaticType(child)) {
          patchFlag |= 1
          /* TEXT */
          ;
        } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* TEXT */
        ) {
            vnodeChildren = child;
          } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if ("development" !== 'production') {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + ` /* ${_shared.PatchFlagNames[patchFlag]} */`;
        } else {
          // bitwise flags
          const flagNames = Object.keys(_shared.PatchFlagNames).map(Number).filter(n => n > 0 && patchFlag & n).map(n => _shared.PatchFlagNames[n]).join(`, `);
          vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
        }
      } else {
        vnodePatchFlag = String(patchFlag);
      }

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , node.loc);
  };
};

exports.transformElement = transformElement;

function resolveComponentType(node, context, ssr = false) {
  const {
    tag
  } = node; // 1. dynamic component

  const isProp = node.tag === 'component' ? findProp(node, 'is') : findDir(node, 'is');

  if (isProp) {
    const exp = isProp.type === 6
    /* ATTRIBUTE */
    ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

    if (exp) {
      return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
    }
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // no we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 3. user component (from setup bindings)


  if (context.bindingMetadata[tag] === 'setup') {
    return `$setup[${JSON.stringify(tag)}]`;
  } // 4. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}

function buildProps(node, context, props = node.props, ssr = false) {
  const {
    tag,
    loc: elementLoc
  } = node;
  const isComponent = node.tagType === 1
  /* COMPONENT */
  ;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = []; // patchFlag analysis

  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];

  const analyzePatchFlag = ({
    key,
    value
  }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = (0, _shared.isOn)(name);

      if (!isComponent && isEventHandler && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !(0, _shared.isReservedProp)(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && (0, _shared.isReservedProp)(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* SIMPLE_EXPRESSION */
      || value.type === 8
      /* COMPOUND_EXPRESSION */
      ) && getStaticType(value) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class' && !isComponent) {
        hasClassBinding = true;
      } else if (name === 'style' && !isComponent) {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (let i = 0; i < props.length; i++) {
    // static attribute
    const prop = props[i];

    if (prop.type === 6
    /* ATTRIBUTE */
    ) {
        const {
          loc,
          name,
          value
        } = prop;

        if (name === 'ref') {
          hasRef = true;
        } // skip :is on <component>


        if (name === 'is' && tag === 'component') {
          continue;
        }

        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', true, value ? value.loc : loc)));
      } else {
      // directives
      const {
        name,
        arg,
        exp,
        loc
      } = prop;
      const isBind = name === 'bind';
      const isOn = name === 'on'; // skip v-slot - it is handled by its dedicated transform.

      if (name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(39
          /* X_V_SLOT_MISPLACED */
          , loc));
        }

        continue;
      } // skip v-once - it is handled by its dedicated transform.


      if (name === 'once') {
        continue;
      } // skip v-is and :is on <component>


      if (name === 'is' || isBind && tag === 'component' && isBindKey(arg, 'is')) {
        continue;
      } // skip v-on in SSR compilation


      if (isOn && ssr) {
        continue;
      } // special case for v-bind and v-on with no argument


      if (!arg && (isBind || isOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isBind) {
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* JS_CALL_EXPRESSION */
              ,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: [exp]
            });
          }
        } else {
          context.onError(createCompilerError(isBind ? 33
          /* X_V_BIND_NO_EXPRESSION */
          : 34
          /* X_V_ON_NO_EXPRESSION */
          , loc));
        }

        continue;
      }

      const directiveTransform = context.directiveTransforms[name];

      if (directiveTransform) {
        // has built-in directive transform.
        const {
          props,
          needRuntime
        } = directiveTransform(prop, node, context);
        !ssr && props.forEach(analyzePatchFlag);
        properties.push(...props);

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if ((0, _shared.isSymbol)(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop);
      }
    }
  }

  let propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* FULL_PROPS */
    ;
  } else {
    if (hasClassBinding) {
      patchFlag |= 2
      /* CLASS */
      ;
    }

    if (hasStyleBinding) {
      patchFlag |= 4
      /* STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* HYDRATE_EVENTS */
      ;
    }
  }

  if ((patchFlag === 0 || patchFlag === 32
  /* HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* NEED_PATCH */
    ;
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  const knownProps = new Map();
  const deduped = [];

  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    const name = prop.key.content;
    const existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || name.startsWith('on')) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* JS_ARRAY_EXPRESSION */
  ) {
      existing.value.elements.push(incoming.value);
    } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);

  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    // inject statement for resolving directive
    context.helper(RESOLVE_DIRECTIVE);
    context.directives.add(dir.name);
    dirArgs.push(toValidAssetId(dir.name, `directive`));
  }

  const {
    loc
  } = dir;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }

      dirArgs.push(`void 0`);
    }

    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(modifier => createObjectProperty(modifier, trueExpression)), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;

  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + `]`;
}

const transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const {
      children,
      loc
    } = node;
    const {
      slotName,
      slotProps
    } = processSlotOutlet(node, context);
    const slotArgs = [context.prefixIdentifiers ? `_ctx.$slots` : `$slots`, slotName];

    if (slotProps) {
      slotArgs.push(slotProps);
    }

    if (children.length) {
      if (!slotProps) {
        slotArgs.push(`{}`);
      }

      slotArgs.push(createFunctionExpression([], children, false, false, loc));
    }

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = undefined; // check for <slot name="xxx" OR :name="xxx" />

  const name = findProp(node, 'name');

  if (name) {
    if (name.type === 6
    /* ATTRIBUTE */
    && name.value) {
      // static name
      slotName = JSON.stringify(name.value.content);
    } else if (name.type === 7
    /* DIRECTIVE */
    && name.exp) {
      // dynamic name
      slotName = name.exp;
    }
  }

  const propsWithoutName = name ? node.props.filter(p => p !== name) : node.props;

  if (propsWithoutName.length > 0) {
    const {
      props,
      directives
    } = buildProps(node, context, propsWithoutName);
    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(35
      /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName,
    slotProps
  };
}

const fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;

const transformOn = (dir, node, context, augmentor) => {
  const {
    loc,
    modifiers,
    arg
  } = dir;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(34
    /* X_V_ON_NO_EXPRESSION */
    , loc));
  }

  let eventName;

  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      if (arg.isStatic) {
        const rawName = arg.content; // for all event listeners, auto convert it to camelCase. See issue #2249

        eventName = createSimpleExpression((0, _shared.toHandlerKey)((0, _shared.camelize)(rawName)), true, arg.loc);
      } else {
        // #2388
        eventName = createCompoundExpression([`${context.helperString(TO_HANDLER_KEY)}(`, arg, `)`]);
      }
    } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  } // handler processing


  let exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  let isCacheable = context.cacheHandlers && !exp;

  if (exp) {
    const isMemberExp = isMemberExpression(exp.content);
    const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    const hasMultipleStatements = exp.content.includes(`;`);

    if ("development" !== 'production' && true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || isCacheable && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression([`${isInlineStatement ? `$event` : `(...args)`} => ${hasMultipleStatements ? `{` : `(`}`, exp, hasMultipleStatements ? `}` : `)`]);
    }
  }

  let ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (isCacheable) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  }

  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


exports.transformOn = transformOn;

const transformBind = (dir, node, context) => {
  const {
    exp,
    modifiers,
    loc
  } = dir;
  const arg = dir.arg;

  if (arg.type !== 4
  /* SIMPLE_EXPRESSION */
  ) {
      arg.children.unshift(`(`);
      arg.children.push(`) || ""`);
    } else if (!arg.isStatic) {
    arg.content = `${arg.content} || ""`;
  } // .prop is no longer necessary due to new patch behavior
  // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
        if (arg.isStatic) {
          arg.content = (0, _shared.camelize)(arg.content);
        } else {
          arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
        }
      } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }

  if (!exp || exp.type === 4
  /* SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(33
    /* X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


exports.transformBind = transformBind;

const transformText = (node, context) => {
  if (node.type === 0
  /* ROOT */
  || node.type === 1
  /* ELEMENT */
  || node.type === 11
  /* FOR */
  || node.type === 10
  /* IF_BRANCH */
  ) {
      // perform the transform on node exit so that all expressions have already
      // been processed.
      return () => {
        const children = node.children;
        let currentContainer = undefined;
        let hasText = false;

        for (let i = 0; i < children.length; i++) {
          const child = children[i];

          if (isText(child)) {
            hasText = true;

            for (let j = i + 1; j < children.length; j++) {
              const next = children[j];

              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8
                    /* COMPOUND_EXPRESSION */
                    ,
                    loc: child.loc,
                    children: [child]
                  };
                } // merge adjacent text node into current


                currentContainer.children.push(` + `, next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = undefined;
                break;
              }
            }
          }
        }

        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0
        /* ROOT */
        || node.type === 1
        /* ELEMENT */
        && node.tagType === 0
        /* ELEMENT */
        )) {
          return;
        } // pre-convert text nodes into createTextVNode(text) calls to avoid
        // runtime normalization.


        for (let i = 0; i < children.length; i++) {
          const child = children[i];

          if (isText(child) || child.type === 8
          /* COMPOUND_EXPRESSION */
          ) {
              const callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
              // single space the code could be an empty call to save bytes.

              if (child.type !== 2
              /* TEXT */
              || child.content !== ' ') {
                callArgs.push(child);
              } // mark dynamic text with flag so it gets patched inside a block


              if (!context.ssr && child.type !== 2
              /* TEXT */
              ) {
                  callArgs.push(`${1
                  /* TEXT */
                  } /* ${_shared.PatchFlagNames[1
                  /* TEXT */
                  ]} */`);
                }

              children[i] = {
                type: 12
                /* TEXT_CALL */
                ,
                content: child,
                loc: child.loc,
                codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
              };
            }
        }
      };
    }
};

const seen = new WeakSet();

const transformOnce = (node, context) => {
  if (node.type === 1
  /* ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node)) {
      return;
    }

    seen.add(node);
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      const cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

const transformModel = (dir, node, context) => {
  const {
    exp,
    arg
  } = dir;

  if (!exp) {
    context.onError(createCompilerError(40
    /* X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  const expString = exp.type === 4
  /* SIMPLE_EXPRESSION */
  ? exp.content : exp.loc.source;

  if (!isMemberExpression(expString)) {
    context.onError(createCompilerError(41
    /* X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  const propName = arg ? arg : createSimpleExpression('modelValue', true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  const props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, createCompoundExpression([`$event => (`, exp, ` = $event)`]))]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* COMPONENT */
  ) {
      const modifiers = dir.modifiers.map(m => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
      const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
      props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, true)));
    }

  return createTransformProps(props);
};

exports.transformModel = transformModel;

function createTransformProps(props = []) {
  return {
    props
  };
}

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformFor, ...("development" !== 'production' ? [transformExpression] : []), transformSlotOutlet, transformElement, trackSlotScopes, transformText], {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(45
      /* X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(46
      /* X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  const prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(47
    /* X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(48
    /* X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  const ast = (0, _shared.isString)(template) ? baseParse(template, options) : template;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(ast, (0, _shared.extend)({}, options, {
    prefixIdentifiers,
    nodeTransforms: [...nodeTransforms, ...(options.nodeTransforms || []) // user transforms
    ],
    directiveTransforms: (0, _shared.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, (0, _shared.extend)({}, options, {
    prefixIdentifiers
  }));
}

const noopDirectiveTransform = () => ({
  props: []
});

exports.noopDirectiveTransform = noopDirectiveTransform;
},{"@vue/shared":"../node_modules/@vue/shared/dist/shared.esm-bundler.js","@babel/parser":"../node_modules/@vue/compiler-core/node_modules/@babel/parser/lib/index.js","estree-walker":"../node_modules/estree-walker/src/estree-walker.js"}],"day3-compiler-core.js":[function(require,module,exports) {
"use strict";

var _compilerCore = require("@vue/compiler-core");

/**
 * @file day3-compiler-core.js
 * @author 素燕
 * @description vue3 模板编译，来自公众号素燕
 */
var app = document.getElementById('suyan-app');
var ret = (0, _compilerCore.baseCompile)(app.innerHTML);
console.log(ret);
},{"@vue/compiler-core":"../node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59665" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","day3-compiler-core.js"], null)
//# sourceMappingURL=/day3-compiler-core.2119eb1b.js.map