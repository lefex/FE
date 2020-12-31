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
})({"day4-vue-instance.js":[function(require,module,exports) {
/**
 * @file day4-vue-instance.js
 * @author 素燕
 * @description vue 创建app，来自公众号素燕
 */
window.SuYanVue = function (exports) {
  exports.createApp = function () {
    console.log('create a suyan app');
  };

  return exports;
}({});

var homeTemplate = "\n    <h1>{{ title }}</h1>\n    <span>{{ welcomeText }}</span>\n    <p>{{ ageShow }} </p>\n    <SuYan></SuYan>\n    <suyan-card></suyan-card>"; // 这个组件就是这么简单

var SuYan = {
  template: '<div>我是素燕</div>'
};
var HomeCard = Vue.defineComponent({
  name: 'home-card',

  /**
   * 组件对应的 HTML 模板，可以使一个静态字符串
   */
  template: homeTemplate,

  /**
   * 使用渲染函数，不使用模板，可通过 JS 来动态创建页面
  */
  render: function render() {
    var h = Vue.h;
    return h('div', [h('h1', this.author.from), h('h3', this.name), h('span', this.welcomeText), h('p', this.ageShow), // 直接渲染一个自定义组件
    h(SuYan)]);
  },

  /**
   * 自定义组件需要声明
  */
  components: {
    SuYan: SuYan
  },

  /**
   * data 为数据源，用来定义与模板绑定的属性
  */
  data: function data() {
    return {
      des: '帮助 10W 人入门并进阶前端',
      name: '素燕',
      address: {
        city: 'BeiJing',
        des: '昌平区'
      }
    };
  },

  /**
   * 定义属性，父组件传递过来的
  */
  props: {
    title: String,
    blog: String,
    age: {
      // 定义类型
      type: Number,
      // 默认值
      default: 0,
      // 是否必须
      required: true,
      // 校验数据是否合法
      validator: function validator(value) {
        return value > 0;
      }
    }
  },

  /**
   * { [key: string]: Function | { get: Function, set: Function } }
   * 计算属性，可使用 data 和 props 定义的属性，会缓存，避免使用箭头函数
  */
  computed: {
    welcomeText: function welcomeText() {
      return "\u5173\u6CE8\u516C\u4F17\u53F7".concat(this.name, ", ").concat(this.des);
    },
    ageShow: function ageShow() {
      return "\u4ED6\u4ECA\u5E74 ".concat(this.age, " \u5C81");
    }
  },

  /**
   * { [key: string]: string | Function | Object | Array }
   * 监听某个属性的变
   */
  watch: {
    age: function age(val, oldVal) {},
    // 可以直接写一个方法名
    // age: 'ageChange',
    address: function address(val, oldVal) {}
  },

  /**
   * { [key: string]: Function }
   * 定义方法，这些方法会被绑定到组件实例中，避免使用箭头函数
   */
  methods: {
    gotoHisSite: function gotoHisSite() {
      location.href = this.blog;
    },
    ageChange: function ageChange() {}
  },

  /**
   * 它的作用是啥？出现的目的是啥？
   */
  emits: {},
  directives: {},

  /**
   * lifecycle 组件的生命周期
   */
  beforeCreate: function beforeCreate() {
    // 实例被创建时，这时数据响应还没有准备好
    console.log('beforeCreate');
  },
  crated: function crated() {
    // 实例被创建，数据响应建立、计算属性、方法、监听都已准备好，但是没有绑定到 DOM 上
    console.log('created');
  },
  beforeMount: function beforeMount() {
    // mount 开始时，也就是即将添加到 DOM 上
    console.log('beforeMount');
  },
  mounted: function mounted() {
    console.log('mounted');
    this.$nextTick(function () {
      var _this = this;

      // 能够保证所有的子组件已经 mounted
      setTimeout(function () {
        _this.name = '公众号：素燕，前端小课作者';
      }, 1000);
    });
  },
  beforeUpdate: function beforeUpdate() {
    console.log('beforeUpdate'); // 数据更新时，此时新的 DOM 变化还没更新
  },
  updated: function updated() {
    console.log('updated'); // 数据更新后，DOM 进行了重新渲染和 patched

    this.$nextTick(function () {// 能够保证所有的子组件已经 updated
    });
  },
  activated: function activated() {
    console.log('activated'); // keep-live 组件处于激活状态
  },
  deactivated: function deactivated() {
    console.log('deactivated'); // keep-live 组件处于非激活状态
  },
  beforeUnmount: function beforeUnmount() {
    console.log('beforeUnmount'); // 组件 unmount 之前
  },
  unmounted: function unmounted() {
    console.log('unmounted'); // 组件 unmounted
  }
});
var app = Vue.createApp(HomeCard, {
  title: '和素燕一起学习 Vue',
  age: 1
});
app.component('suyan-card', {
  template: '<h1>{{ title }}</h1>',
  data: function data() {
    return {
      title: '《前端小课》作者：素燕'
    };
  }
});

app.config.errorHandle = function (err, vm, info) {// 可以在这里监控 app 发生的异常
  // 常用来添加监控，错误上报
}; // author 在所有的组件中可以当自己的属性使用


app.config.globalProperties.author = {
  name: '素燕',
  from: '《读懂Vue3编程思想》'
}; // 开启性能监测

app.config.performance = true;
app.provide('bookName', '《读懂Vue3编程思想》'); // 所有的组件将会添加 created 生命周期函数

app.mixin({
  created: function created() {
    console.log('log in app mixin');
  }
}); // 添加插件
// app.use(VueRouter);

var proxy = app.mount('#suyan-app');
console.log(app);
console.log(proxy);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51379" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","day4-vue-instance.js"], null)
//# sourceMappingURL=/day4-vue-instance.65c10124.js.map