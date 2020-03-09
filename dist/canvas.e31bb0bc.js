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
})({"c1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c1 = function c1() {
  var canvas = document.getElementById("c1");
  var ctx = canvas.getContext("2d"); // заливка прямокутника

  ctx.fillStyle = "green";
  ctx.fillRect(200, 50, 150, 75);
  ctx.fillStyle = "blue";
  ctx.fillRect(150, 100, 100, 50); // стирання всього
  //ctx.clearRect(0, 0, 400, 200);
  // рект

  ctx.strokeStyle = "green";
  ctx.lineWidth = "4";
  ctx.rect(50, 50, 100, 100);
  ctx.stroke();
  ctx.fillStyle = "orange";
  ctx.fill();
}; // c1


var _default = c1;
exports.default = _default;
},{}],"c2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c2 = function c2() {
  var canvas = document.getElementById("c2");
  var ctx = canvas.getContext("2d"); // Лінії

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = "4";
  ctx.moveTo(100, 50);
  ctx.lineTo(150, 150);
  ctx.lineTo(150, 50); // з останньої точки малюю іншу діч

  ctx.lineCap = "square"; // добавляються крадрати

  ctx.stroke(); // розриваю суцільну і роблю нову

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = "20";
  ctx.moveTo(150, 50);
  ctx.lineTo(50, 100);
  ctx.lineCap = "butt"; // по замовчуванню

  ctx.lineCap = "round"; // заокруглюю краї

  ctx.stroke(); // розриваю суцільну і роблю нову

  ctx.beginPath();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = "16";
  ctx.moveTo(250, 150);
  ctx.lineTo(250, 100);
  ctx.lineTo(200, 100);
  ctx.lineCap = "round"; // заокруглюю краї

  ctx.stroke(); // трикутник

  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = "3";
  ctx.moveTo(300, 150);
  ctx.lineTo(350, 50);
  ctx.lineTo(400, 150); // ctx.lineTo(300, 150); // або лінія яка повертає то стартового або закриваю, командою внизу

  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.stroke();
  ctx.fill();
}; // c2


var _default = c2;
exports.default = _default;
},{}],"c3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c3 = function c3() {
  var canvas = document.getElementById("c3");
  var colorInput = document.getElementById("input-color-c3");
  var ctx = canvas.getContext("2d");
  var fillColor = "black";

  colorInput.oninput = function () {
    fillColor = this.value;
  };

  ctx.lineWidth = 5 * 2;

  canvas.onpointerdown = function () {
    ctx.beginPath();

    canvas.onmousemove = function (event) {
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = fillColor;
      var x = event.offsetX;
      var y = event.offsetY; // малюю лінію

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    canvas.onpointerup = function () {
      return canvas.onmousemove = null;
    };
  };
}; // c3


var _default = c3;
exports.default = _default;
},{}],"c4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c4 = function c4() {
  var canvas = document.getElementById("c4");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "red";
  ctx.fillStyle = "yellow"; // x, y центр кола
  //anticlockwise по часові
  //ctx.arc(x, y, radius, angleStart, angleEnd, anticlockwise); angle-radian

  ctx.arc(150, 100, 75, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "green";
  ctx.fillStyle = "pink"; // x, y центр кола
  //anticlockwise по часові
  //ctx.arc(x, y, radius, angleStart, angleEnd, anticlockwise); angle-radian

  ctx.arc(250, 100, 45, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
}; // c4


var _default = c4;
exports.default = _default;
},{}],"c5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c5 = function c5() {
  var canvas = document.getElementById("c5");
  var ctx = canvas.getContext("2d");
  var x = 0;
  var y = 0;
  var timet = null;
  drawSin();

  function drawSin() {
    y = Math.sin(x); //y = Math.cos(x);
    //y = -x * x;
    //y = Math.tan(x);
    //y = Math.atan(x);
    // поки в рамках канваса

    if (x >= 400) {
      x = 0;
    } else {
      // рекурсивно добавляю діч
      x += 0.02;
    }

    ctx.fillRect(5 * x, 50 + 25 * y, 2, 2);
    ctx.fillRect(5 * x, 150 + x * y, 2, 2);
    timet = setTimeout(drawSin, 2);
  }
}; // c5


var _default = c5;
exports.default = _default;
},{}],"c6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c6 = function c6() {
  var canvas = document.getElementById("c6");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.strokeStyle = "green";
  ctx.moveTo(200, 50);
  ctx.quadraticCurveTo(150, 0, 110, 50);
  ctx.quadraticCurveTo(50, 150, 200, 200);
  ctx.quadraticCurveTo(350, 150, 290, 50);
  ctx.quadraticCurveTo(250, 0, 200, 50);
  ctx.stroke();
  ctx.fill();
}; // c6


var _default = c6;
exports.default = _default;
},{}],"c7.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c7 = function c7() {
  var canvas = document.getElementById("c7");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.strokeStyle = "black";

  canvas.onmousemove = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.clearRect(0, 0, 400, 200);
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.quadraticCurveTo(x, y, 200, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.moveTo(200, 50);
    ctx.lineTo(x, y);
    ctx.lineTo(200, 150);
    ctx.stroke();
  };
}; // c7


var _default = c7;
exports.default = _default;
},{}],"c8.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c8 = function c8() {
  var canvas = document.getElementById("c8");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 8; // сама крива

  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.bezierCurveTo(50, 100, 200, 100, 200, 150);
  ctx.stroke(); // контрольні точки

  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(50, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(200, 150);
  ctx.stroke(); // сама крива

  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 8;
  ctx.bezierCurveTo(250, 100, 300, 200, 300, 50);
  ctx.stroke();
}; // c8


var _default = c8;
exports.default = _default;
},{}],"c9.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c9 = function c9() {
  var canvas = document.getElementById("c9");
  var ctx = canvas.getContext("2d");
  var grad = ctx.createLinearGradient(0, 0, 500, 0);
  grad.addColorStop(0, "magenta");
  grad.addColorStop(0.5, "blue");
  grad.addColorStop(1, "green");
  ctx.fillStyle = grad;
  ctx.font = "bold 40px Arial";
  ctx.fillText("Hello world!", 55, 90);
}; // c9


var _default = c9;
exports.default = _default;
},{}],"c10.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var c10 = function c10() {
  var canvas = document.getElementById("c10");
  var ctx = canvas.getContext("2d");
  var requestAnimation = null;
  var x = 0;
  var y = 0;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = -x * x;
    ctx.fillRect(200 + 30 * x, 150 + 30 * y, 8, 8);
    ctx.fillRect(200 + 30 * -x, 150 + 30 * y, 8, 8);
    x += 0.02;
    ctx.fill();
    ctx.stroke();
    requestAnimation = requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}; // c10


var _default = c10;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _c = _interopRequireDefault(require("./c1"));

var _c2 = _interopRequireDefault(require("./c2"));

var _c3 = _interopRequireDefault(require("./c3"));

var _c4 = _interopRequireDefault(require("./c4"));

var _c5 = _interopRequireDefault(require("./c5"));

var _c6 = _interopRequireDefault(require("./c6"));

var _c7 = _interopRequireDefault(require("./c7"));

var _c8 = _interopRequireDefault(require("./c8"));

var _c9 = _interopRequireDefault(require("./c9"));

var _c10 = _interopRequireDefault(require("./c10"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _c.default)();
(0, _c2.default)();
(0, _c3.default)();
(0, _c4.default)();
(0, _c5.default)();
(0, _c6.default)();
(0, _c7.default)();
(0, _c8.default)();
(0, _c9.default)();
(0, _c10.default)();
},{"./c1":"c1.js","./c2":"c2.js","./c3":"c3.js","./c4":"c4.js","./c5":"c5.js","./c6":"c6.js","./c7":"c7.js","./c8":"c8.js","./c9":"c9.js","./c10":"c10.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54684" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/canvas.e31bb0bc.js.map