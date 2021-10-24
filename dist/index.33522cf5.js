// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"em4Qp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "aa9dba8ca27d5955";
module.bundle.HMR_BUNDLE_ID = "1d6298d033522cf5"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1NxEw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
// components (custom web components)
var _vaAppHeader = require("./components/va-app-header");
var _vaCreative = require("./components/va-creative");
var _vaPostings = require("./components/va-postings");
// styles
var _masterScss = require("./scss/master.scss");
// app.init
document.addEventListener('DOMContentLoaded', ()=>{
    _appJsDefault.default.init();
});

},{"./App.js":"4GIt1","./components/va-app-header":"4zh6y","./components/va-creative":"13pv7","./components/va-postings":"jBlmH","./scss/master.scss":"lN886","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"4GIt1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _router = require("./Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _auth = require("./Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class App {
    constructor(){
        this.name = "Creahaven";
        this.version = "1.0.0";
        this.apiBase = 'https://blho-creahaven-backend.herokuapp.com';
        this.rootEl = document.getElementById("root");
        this.version = "1.0.0";
    }
    init() {
        console.log("App.init");
        // Toast init
        _toastDefault.default.init();
        // Authentication check    
        _authDefault.default.check(()=>{
            // authenticated! init Router
            _routerDefault.default.init();
        });
    }
}
exports.default = new App();

},{"./Router":"ll818","./Auth":"68fHK","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"ll818":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// programmatically load any route
parcelHelpers.export(exports, "gotoRoute", ()=>gotoRoute
);
// allows anchor <a> links to load routes
parcelHelpers.export(exports, "anchorRoute", ()=>anchorRoute
);
// import views
var _home = require("./views/pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _404 = require("./views/pages/404");
var _404Default = parcelHelpers.interopDefault(_404);
var _guide = require("./views/pages/guide");
var _guideDefault = parcelHelpers.interopDefault(_guide);
var _signin = require("./views/pages/signin");
var _signinDefault = parcelHelpers.interopDefault(_signin);
var _signup = require("./views/pages/signup");
var _signupDefault = parcelHelpers.interopDefault(_signup);
var _profile = require("./views/pages/profile");
var _profileDefault = parcelHelpers.interopDefault(_profile);
var _editProfile = require("./views/pages/editProfile");
var _editProfileDefault = parcelHelpers.interopDefault(_editProfile);
var _favouriteCreatives = require("./views/pages/favouriteCreatives");
var _favouriteCreativesDefault = parcelHelpers.interopDefault(_favouriteCreatives);
var _projects = require("./views/pages/projects");
var _projectsDefault = parcelHelpers.interopDefault(_projects);
var _portfolio = require("./views/pages/portfolio");
var _portfolioDefault = parcelHelpers.interopDefault(_portfolio);
var _jobs = require("./views/pages/jobs");
var _jobsDefault = parcelHelpers.interopDefault(_jobs);
var _creatives = require("./views/pages/creatives");
var _creativesDefault = parcelHelpers.interopDefault(_creatives);
var _collaborations = require("./views/pages/collaborations");
var _collaborationsDefault = parcelHelpers.interopDefault(_collaborations);
var _newJob = require("./views/pages/newJob");
var _newJobDefault = parcelHelpers.interopDefault(_newJob);
var _newCollaboration = require("./views/pages/newCollaboration");
var _newCollaborationDefault = parcelHelpers.interopDefault(_newCollaboration);
var _newProject = require("./views/pages/newProject");
var _newProjectDefault = parcelHelpers.interopDefault(_newProject);
var _newPortfolio = require("./views/pages/newPortfolio");
var _newPortfolioDefault = parcelHelpers.interopDefault(_newPortfolio);
var _creativesNew = require("./views/pages/creatives_new");
var _creativesNewDefault = parcelHelpers.interopDefault(_creativesNew);
// define routes
const routes = {
    '/': _homeDefault.default,
    '404': _404Default.default,
    '/favouriteCreatives': _favouriteCreativesDefault.default,
    '/guide': _guideDefault.default,
    '/signin': _signinDefault.default,
    '/signup': _signupDefault.default,
    '/profile': _profileDefault.default,
    '/portfolios': _portfolioDefault.default,
    '/newPortfolio': _newPortfolioDefault.default,
    '/projects': _projectsDefault.default,
    '/newProject': _newProjectDefault.default,
    '/jobs': _jobsDefault.default,
    '/newJob': _newJobDefault.default,
    '/creatives': _creativesDefault.default,
    '/creativesNew': _creativesNewDefault.default,
    '/newCollaboration': _newCollaborationDefault.default,
    '/collaborations': _collaborationsDefault.default,
    '/editProfile': _editProfileDefault.default
};
class Router {
    constructor(){
        this.routes = routes;
    }
    init() {
        // initial call
        this.route(window.location.pathname);
        // on back/forward
        window.addEventListener('popstate', ()=>{
            this.route(window.location.pathname);
        });
    }
    route(fullPathname) {
        // extract path without params
        const pathname = fullPathname.split('?')[0];
        const route = this.routes[pathname];
        if (route) // if route exists, run init() of the view
        this.routes[window.location.pathname].init();
        else // show 404 view instead
        this.routes['404'].init();
    }
    gotoRoute(pathname) {
        window.history.pushState({
        }, pathname, window.location.origin + pathname);
        this.route(pathname);
    }
}
// create appRouter instance and export
const AppRouter = new Router();
exports.default = AppRouter;
function gotoRoute(pathname) {
    AppRouter.gotoRoute(pathname);
}
function anchorRoute(e) {
    e.preventDefault();
    const pathname = e.target.closest('a').pathname;
    AppRouter.gotoRoute(pathname);
}

},{"./views/pages/home":"2eEzz","./views/pages/404":"aP7um","./views/pages/guide":"fJJsC","./views/pages/signin":"9fF8w","./views/pages/signup":"3QGrI","./views/pages/profile":"biJ86","./views/pages/editProfile":"a90tE","./views/pages/favouriteCreatives":"eaLEx","./views/pages/projects":"cwQDJ","./views/pages/portfolio":"23UTM","./views/pages/jobs":"chdRw","./views/pages/creatives":"9Lvlo","./views/pages/collaborations":"22t69","./views/pages/newJob":"6eV27","./views/pages/newCollaboration":"kyocu","./views/pages/newProject":"bfJsH","./views/pages/newPortfolio":"kUhfD","./views/pages/creatives_new":"fD97N","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"2eEzz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("./../../Router");
var _auth = require("./../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("./../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
class HomeView {
    init() {
        console.log('HomeView.init');
        document.title = 'Home';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    render() {
        const template = _litHtml.html`\n      <style>\n        /*------home navigation buttons ---------*/ \n        .home-navBtn {\n          display: flexbox;\n          flex-wrap: wrap;\n          width: 100%;\n          \n        }\n        .navBtnImg {\n            width: calc(20% - 1em);\n            margin: 0.5em;\n          }\n        /*-------------Responsive design-----------------*/\n        @media all and (max-width: 768px){\n          .navBtnImg{\n            width: calc(47% - 1em);\n          }\n        }\n        /*-------------Responsive design-----------------*/\n        @media all and (max-width: 425px){\n          .navBtnImg{\n            width: 100%;\n            margin: 0;\n          }\n        }\n      </style>\n      <va-app-header title="Home" user=${JSON.stringify(_authDefault.default.currentUser)}></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">\n          <h1 class="anim-in">Hey ${_authDefault.default.currentUser.firstName}!</h1>\n          <img id="guide-img" src="/images/introScreen-hero-img-v2.png" />\n          <div class="home-navBtn">\n            <a href="/creatives" @click="${_router.anchorRoute}"><img class="navBtnImg" src="/images/creatives-button.png"/></a>\n            <a href="/collaborations" @click="${_router.anchorRoute}"><img class="navBtnImg" src="/images/collaboration-button.png"/></a>\n            <a href="/jobs" @click="${_router.anchorRoute}"><img class="navBtnImg" src="/images/jobs-button.png"/></a>\n            <a href="/projects" @click="${_router.anchorRoute}"><img class="navBtnImg" src="/images/projects-button.png"/></a>\n          </div>\n\n          \n        </div>\n      </div>\n      \n      \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new HomeView();

},{"./../../App":"4GIt1","lit-html":"5JY0r","./../../Router":"ll818","./../../Auth":"68fHK","./../../Utils":"6IQWL","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"5JY0r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultTemplateProcessor", ()=>_defaultTemplateProcessorJs.DefaultTemplateProcessor
);
parcelHelpers.export(exports, "defaultTemplateProcessor", ()=>_defaultTemplateProcessorJs.defaultTemplateProcessor
);
parcelHelpers.export(exports, "directive", ()=>_directiveJs.directive
);
parcelHelpers.export(exports, "isDirective", ()=>_directiveJs.isDirective
);
// TODO(justinfagnani): remove line when we get NodePart moving methods
parcelHelpers.export(exports, "removeNodes", ()=>_domJs.removeNodes
);
parcelHelpers.export(exports, "reparentNodes", ()=>_domJs.reparentNodes
);
parcelHelpers.export(exports, "noChange", ()=>_partJs.noChange
);
parcelHelpers.export(exports, "nothing", ()=>_partJs.nothing
);
parcelHelpers.export(exports, "AttributeCommitter", ()=>_partsJs.AttributeCommitter
);
parcelHelpers.export(exports, "AttributePart", ()=>_partsJs.AttributePart
);
parcelHelpers.export(exports, "BooleanAttributePart", ()=>_partsJs.BooleanAttributePart
);
parcelHelpers.export(exports, "EventPart", ()=>_partsJs.EventPart
);
parcelHelpers.export(exports, "isIterable", ()=>_partsJs.isIterable
);
parcelHelpers.export(exports, "isPrimitive", ()=>_partsJs.isPrimitive
);
parcelHelpers.export(exports, "NodePart", ()=>_partsJs.NodePart
);
parcelHelpers.export(exports, "PropertyCommitter", ()=>_partsJs.PropertyCommitter
);
parcelHelpers.export(exports, "PropertyPart", ()=>_partsJs.PropertyPart
);
parcelHelpers.export(exports, "parts", ()=>_renderJs.parts
);
parcelHelpers.export(exports, "render", ()=>_renderJs.render
);
parcelHelpers.export(exports, "templateCaches", ()=>_templateFactoryJs.templateCaches
);
parcelHelpers.export(exports, "templateFactory", ()=>_templateFactoryJs.templateFactory
);
parcelHelpers.export(exports, "TemplateInstance", ()=>_templateInstanceJs.TemplateInstance
);
parcelHelpers.export(exports, "SVGTemplateResult", ()=>_templateResultJs.SVGTemplateResult
);
parcelHelpers.export(exports, "TemplateResult", ()=>_templateResultJs.TemplateResult
);
parcelHelpers.export(exports, "createMarker", ()=>_templateJs.createMarker
);
parcelHelpers.export(exports, "isTemplatePartActive", ()=>_templateJs.isTemplatePartActive
);
parcelHelpers.export(exports, "Template", ()=>_templateJs.Template
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "svg", ()=>svg
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */ /**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */ var _defaultTemplateProcessorJs = require("./lib/default-template-processor.js");
var _templateResultJs = require("./lib/template-result.js");
var _directiveJs = require("./lib/directive.js");
var _domJs = require("./lib/dom.js");
var _partJs = require("./lib/part.js");
var _partsJs = require("./lib/parts.js");
var _renderJs = require("./lib/render.js");
var _templateFactoryJs = require("./lib/template-factory.js");
var _templateInstanceJs = require("./lib/template-instance.js");
var _templateJs = require("./lib/template.js");
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
const html = (strings, ...values)=>new _templateResultJs.TemplateResult(strings, values, 'html', _defaultTemplateProcessorJs.defaultTemplateProcessor)
;
const svg = (strings, ...values)=>new _templateResultJs.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessorJs.defaultTemplateProcessor)
;

},{"./lib/default-template-processor.js":"5aLbM","./lib/template-result.js":"64IoS","./lib/directive.js":"gwTwR","./lib/dom.js":"68lVQ","./lib/part.js":"7Qt7P","./lib/parts.js":"171JR","./lib/render.js":"bbaaB","./lib/template-factory.js":"bjcvA","./lib/template-instance.js":"cqEzc","./lib/template.js":"hsr3O","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"5aLbM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates Parts when a template is instantiated.
 */ parcelHelpers.export(exports, "DefaultTemplateProcessor", ()=>DefaultTemplateProcessor
);
parcelHelpers.export(exports, "defaultTemplateProcessor", ()=>defaultTemplateProcessor
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _partsJs = require("./parts.js");
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */ handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _partsJs.PropertyCommitter(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') return [
            new _partsJs.EventPart(element, name.slice(1), options.eventContext)
        ];
        if (prefix === '?') return [
            new _partsJs.BooleanAttributePart(element, name.slice(1), strings)
        ];
        const committer = new _partsJs.AttributeCommitter(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */ handleTextExpression(options) {
        return new _partsJs.NodePart(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

},{"./parts.js":"171JR","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"171JR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPrimitive", ()=>isPrimitive
);
parcelHelpers.export(exports, "isIterable", ()=>isIterable
);
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */ parcelHelpers.export(exports, "AttributeCommitter", ()=>AttributeCommitter
);
/**
 * A Part that controls all or part of an attribute value.
 */ parcelHelpers.export(exports, "AttributePart", ()=>AttributePart
);
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */ parcelHelpers.export(exports, "NodePart", ()=>NodePart
);
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */ parcelHelpers.export(exports, "BooleanAttributePart", ()=>BooleanAttributePart
);
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */ parcelHelpers.export(exports, "PropertyCommitter", ()=>PropertyCommitter
);
parcelHelpers.export(exports, "PropertyPart", ()=>PropertyPart
);
parcelHelpers.export(exports, "EventPart", ()=>EventPart
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _directiveJs = require("./directive.js");
var _domJs = require("./dom.js");
var _partJs = require("./part.js");
var _templateInstanceJs = require("./template-instance.js");
var _templateResultJs = require("./template-result.js");
var _templateJs = require("./template.js");
const isPrimitive = (value)=>{
    return value === null || !(typeof value === 'object' || typeof value === 'function');
};
const isIterable = (value)=>{
    return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(value && value[Symbol.iterator]);
};
class AttributeCommitter {
    constructor(element, name, strings){
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for(let i = 0; i < strings.length - 1; i++)this.parts[i] = this._createPart();
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */ _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings1 = this.strings;
        const l = strings1.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings1[0] === '' && strings1[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') return String(v);
            if (typeof v === 'string' || !isIterable(v)) return v;
        }
        let text = '';
        for(let i1 = 0; i1 < l; i1++){
            text += strings1[i1];
            const part = parts[i1];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) text += typeof v === 'string' ? v : String(v);
                else for (const t of v)text += typeof t === 'string' ? t : String(t);
            }
        }
        text += strings1[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
class AttributePart {
    constructor(committer){
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _partJs.noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!_directiveJs.isDirective(value)) this.committer.dirty = true;
        }
    }
    commit() {
        while(_directiveJs.isDirective(this.value)){
            const directive = this.value;
            this.value = _partJs.noChange;
            directive(this);
        }
        if (this.value === _partJs.noChange) return;
        this.committer.commit();
    }
}
class NodePart {
    constructor(options){
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ appendInto(container) {
        this.startNode = container.appendChild(_templateJs.createMarker());
        this.endNode = container.appendChild(_templateJs.createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ appendIntoPart(part) {
        part.__insert(this.startNode = _templateJs.createMarker());
        part.__insert(this.endNode = _templateJs.createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ insertAfterPart(ref) {
        ref.__insert(this.startNode = _templateJs.createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) return;
        while(_directiveJs.isDirective(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = _partJs.noChange;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _partJs.noChange) return;
        if (isPrimitive(value)) {
            if (value !== this.value) this.__commitText(value);
        } else if (value instanceof _templateResultJs.TemplateResult) this.__commitTemplateResult(value);
        else if (value instanceof Node) this.__commitNode(value);
        else if (isIterable(value)) this.__commitIterable(value);
        else if (value === _partJs.nothing) {
            this.value = _partJs.nothing;
            this.clear();
        } else // Fallback, will render the string representation
        this.__commitText(value);
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) return;
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling && node.nodeType === 3) // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
        else this.__commitNode(document.createTextNode(valueAsString));
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _templateInstanceJs.TemplateInstance && this.value.template === template) this.value.update(value.values);
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _templateInstanceJs.TemplateInstance(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value){
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) itemPart.appendIntoPart(this);
                else itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        _domJs.removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
class BooleanAttributePart {
    constructor(element1, name1, strings1){
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings1.length !== 2 || strings1[0] !== '' || strings1[1] !== '') throw new Error('Boolean attributes can only contain a single expression');
        this.element = element1;
        this.name = name1;
        this.strings = strings1;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while(_directiveJs.isDirective(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = _partJs.noChange;
            directive(this);
        }
        if (this.__pendingValue === _partJs.noChange) return;
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) this.element.setAttribute(this.name, '');
            else this.element.removeAttribute(this.name);
            this.value = value;
        }
        this.__pendingValue = _partJs.noChange;
    }
}
class PropertyCommitter extends AttributeCommitter {
    constructor(element2, name2, strings2){
        super(element2, name2, strings2);
        this.single = strings2.length === 2 && strings2[0] === '' && strings2[1] === '';
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) return this.parts[0].value;
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{
    try {
        const options1 = {
            get capture () {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options1, options1);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options1, options1);
    } catch (_e) {
    // event options not supported
    }
})();
class EventPart {
    constructor(element3, eventName, eventContext){
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element3;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e)=>this.handleEvent(e)
        ;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while(_directiveJs.isDirective(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = _partJs.noChange;
            directive(this);
        }
        if (this.__pendingValue === _partJs.noChange) return;
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _partJs.noChange;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') this.value.call(this.eventContext || this.element, event);
        else this.value.handleEvent(event);
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o)=>o && (eventOptionsSupported ? {
        capture: o.capture,
        passive: o.passive,
        once: o.once
    } : o.capture)
;

},{"./directive.js":"gwTwR","./dom.js":"68lVQ","./part.js":"7Qt7P","./template-instance.js":"cqEzc","./template-result.js":"64IoS","./template.js":"hsr3O","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"gwTwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "directive", ()=>directive
);
parcelHelpers.export(exports, "isDirective", ()=>isDirective
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const directives = new WeakMap();
const directive = (f)=>(...args)=>{
        const d = f(...args);
        directives.set(d, true);
        return d;
    }
;
const isDirective = (o)=>{
    return typeof o === 'function' && directives.has(o);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"kcMTN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"68lVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCEPolyfill", ()=>isCEPolyfill
);
parcelHelpers.export(exports, "reparentNodes", ()=>reparentNodes
);
parcelHelpers.export(exports, "removeNodes", ()=>removeNodes
);
const isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
const reparentNodes = (container, start, end = null, before = null)=>{
    while(start !== end){
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
const removeNodes = (container, start, end = null)=>{
    while(start !== end){
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"7Qt7P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noChange", ()=>noChange
);
parcelHelpers.export(exports, "nothing", ()=>nothing
);
const noChange = {
};
const nothing = {
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"cqEzc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */ parcelHelpers.export(exports, "TemplateInstance", ()=>TemplateInstance
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _domJs = require("./dom.js");
var _templateJs = require("./template.js");
class TemplateInstance {
    constructor(template, processor, options){
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts){
            if (part !== undefined) part.setValue(values[i]);
            i++;
        }
        for (const part1 of this.__parts)if (part1 !== undefined) part1.commit();
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _domJs.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ , null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while(partIndex < parts.length){
            part = parts[partIndex];
            if (!_templateJs.isTemplatePartActive(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while(nodeIndex < part.index){
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part1 = this.processor.handleTextExpression(this.options);
                part1.insertAfterNode(node.previousSibling);
                this.__parts.push(part1);
            } else this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            partIndex++;
        }
        if (_domJs.isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}

},{"./dom.js":"68lVQ","./template.js":"hsr3O","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"hsr3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "marker", ()=>marker
);
parcelHelpers.export(exports, "nodeMarker", ()=>nodeMarker
);
parcelHelpers.export(exports, "markerRegex", ()=>markerRegex
);
parcelHelpers.export(exports, "boundAttributeSuffix", ()=>boundAttributeSuffix
);
/**
 * An updatable Template that tracks the location of dynamic parts.
 */ parcelHelpers.export(exports, "Template", ()=>Template
);
parcelHelpers.export(exports, "isTemplatePartActive", ()=>isTemplatePartActive
);
parcelHelpers.export(exports, "createMarker", ()=>createMarker
);
parcelHelpers.export(exports, "lastAttributeNameRegex", ()=>lastAttributeNameRegex
);
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
const boundAttributeSuffix = '$lit$';
class Template {
    constructor(result, element){
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ , null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings , values: { length  }  } = result;
        while(partIndex < length){
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length: length1  } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for(let i = 0; i < length1; i++)if (endsWith(attributes[i].name, boundAttributeSuffix)) count++;
                    while((count--) > 0){
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({
                            type: 'attribute',
                            index,
                            name,
                            strings: statics
                        });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            } else if (node.nodeType === 3) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings1 = data.split(markerRegex);
                    const lastIndex = strings1.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for(let i = 0; i < lastIndex; i++){
                        let insert;
                        let s = strings1[i];
                        if (s === '') insert = createMarker();
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({
                            type: 'node',
                            index: ++index
                        });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings1[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    } else node.data = strings1[lastIndex];
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            } else if (node.nodeType === 8) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({
                        type: 'node',
                        index
                    });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) node.data = '';
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                } else {
                    let i = -1;
                    while((i = node.data.indexOf(marker, i + 1)) !== -1){
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({
                            type: 'node',
                            index: -1
                        });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove)n.parentNode.removeChild(n);
    }
}
const endsWith = (str, suffix)=>{
    const index1 = str.length - suffix.length;
    return index1 >= 0 && str.slice(index1) === suffix;
};
const isTemplatePartActive = (part)=>part.index !== -1
;
const createMarker = ()=>document.createComment('')
;
const lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"64IoS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */ parcelHelpers.export(exports, "TemplateResult", ()=>TemplateResult
);
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */ parcelHelpers.export(exports, "SVGTemplateResult", ()=>SVGTemplateResult
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * @module lit-html
 */ var _domJs = require("./dom.js");
var _templateJs = require("./template.js");
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */ const policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
    createHTML: (s)=>s
});
const commentMarker = ` ${_templateJs.marker} `;
class TemplateResult {
    constructor(strings, values, type, processor){
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */ getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for(let i = 0; i < l; i++){
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _templateJs.lastAttributeNameRegex.exec(s);
            if (attributeMatch === null) // We're only in this branch if we don't have a attribute-like
            // preceding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? commentMarker : _templateJs.nodeMarker);
            else // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _templateJs.boundAttributeSuffix + attributeMatch[3] + _templateJs.marker;
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
        template.innerHTML = value;
        return template;
    }
}
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        _domJs.reparentNodes(content, svgElement.firstChild);
        return template;
    }
}

},{"./dom.js":"68lVQ","./template.js":"hsr3O","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"bbaaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parts", ()=>parts
);
parcelHelpers.export(exports, "render", ()=>render
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _domJs = require("./dom.js");
var _partsJs = require("./parts.js");
var _templateFactoryJs = require("./template-factory.js");
const parts = new WeakMap();
const render = (result, container, options)=>{
    let part = parts.get(container);
    if (part === undefined) {
        _domJs.removeNodes(container, container.firstChild);
        parts.set(container, part = new _partsJs.NodePart(Object.assign({
            templateFactory: _templateFactoryJs.templateFactory
        }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};

},{"./dom.js":"68lVQ","./parts.js":"171JR","./template-factory.js":"bjcvA","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"bjcvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */ parcelHelpers.export(exports, "templateFactory", ()=>templateFactory
);
parcelHelpers.export(exports, "templateCaches", ()=>templateCaches
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _templateJs = require("./template.js");
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) return template;
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_templateJs.marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _templateJs.Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();

},{"./template.js":"hsr3O","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"68fHK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _router = require("./Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _splash = require("./views/partials/splash");
var _splashDefault = parcelHelpers.interopDefault(_splash);
var _litHtml = require("lit-html");
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class Auth {
    constructor(){
        this.currentUser = {
        };
    }
    async signUp(userData, fail = false) {
        const response = await fetch(`${_appDefault.default.apiBase}/user`, {
            method: 'POST',
            body: userData
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // show error      
            _toastDefault.default.show(`Problem getting user: ${response.status}`);
            // run fail() functon if set
            if (typeof fail == 'function') fail();
        }
        /// sign up success - show toast and redirect to sign in page
        _toastDefault.default.show('Account created, please sign in');
        // redirect to signin
        _router.gotoRoute('/signin');
    }
    async signIn(userData, fail = false) {
        const response = await fetch(`${_appDefault.default.apiBase}/auth/signin`, {
            method: 'POST',
            body: userData
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // show error      
            _toastDefault.default.show(`Problem signing in: ${err.message}`, 'error');
            // run fail() functon if set
            if (typeof fail == 'function') fail();
        }
        // sign in success
        const data = await response.json();
        _toastDefault.default.show(`Welcome  ${data.user.firstName}`);
        // save access token (jwt) to local storage
        localStorage.setItem('accessToken', data.accessToken);
        // set current user
        this.currentUser = data.user;
        // console.log(this.currentUser) 
        // redirection
        _routerDefault.default.init();
        if (data.user.newUser == true) //redirect new user to guide page
        _router.gotoRoute('/guide');
        else // existing user - redirect to home page (/)
        _router.gotoRoute('/');
    }
    async check(success) {
        // show splash screen while loading ...   
        _litHtml.render(_splashDefault.default, _appDefault.default.rootEl);
        // check local token is there
        if (!localStorage.accessToken) {
            // no local token!
            _toastDefault.default.show("Please sign in");
            // redirect to sign in page      
            _router.gotoRoute('/signin');
            return;
        }
        // token must exist - validate token via the backend
        const response = await fetch(`${_appDefault.default.apiBase}/auth/validate`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // delete local token
            localStorage.removeItem('accessToken');
            _toastDefault.default.show("session expired, please sign in");
            // redirect to sign in      
            _router.gotoRoute('/signin');
            return;
        }
        // token is valid!
        const data = await response.json();
        // console.log(data)
        // set currentUser obj
        this.currentUser = data.user;
        // run success
        success();
    }
    signOut() {
        _toastDefault.default.show("You are signed out");
        // delete local token
        localStorage.removeItem('accessToken');
        // redirect to sign in    
        _router.gotoRoute('/signin');
        // unset currentUser
        this.currentUser = null;
    }
}
exports.default = new Auth();

},{"./App":"4GIt1","./Router":"ll818","./views/partials/splash":"577Wp","lit-html":"5JY0r","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"577Wp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
const splash = _litHtml.html`\n\n  <div class="app-splash">\n    <div class="inner">\n      <img class="app-logo" src="/images/creahaven-logo.svg" />\n      <sl-spinner style="font-size: 2em;"></sl-spinner>\n    </div>\n  </div>\n`;
exports.default = splash;

},{"lit-html":"5JY0r","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"9F5xG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _gsap = require("gsap");
class Toast {
    static init() {
        this.showDuration = 2.5;
        // create container element
        this.containerEl = document.createElement('div');
        this.containerEl.id = 'toasts';
        // append to <body>
        document.body.appendChild(this.containerEl);
    }
    static show(content, type = '') {
        if (!content) return;
        // create element
        const toastEl = document.createElement('div');
        toastEl.className = 'toast-entry';
        if (type != "") toastEl.classList.add('is-error');
        toastEl.innerText = content;
        // appened to container
        this.containerEl.appendChild(toastEl);
        // animate using gsap
        const tl = _gsap.gsap.timeline();
        tl.from(toastEl, {
            y: 60,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out"
        });
        tl.to(toastEl, {
            marginTop: -50,
            opacity: 0,
            delay: this.showDuration,
            duration: 0.3,
            onComplete: ()=>{
                toastEl.remove();
            }
        });
    }
}
exports.default = Toast;

},{"./App":"4GIt1","lit-html":"5JY0r","gsap":"loSVs","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"loSVs":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = global || self, factory(global.window = global.window || {
    }));
})(this, function(exports) {
    'use strict';
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
    function _assertThisInitialized(self) {
        if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    }
    /*!
   * GSAP 3.6.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */ var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0
    }, _suppressOverwrites, _bigNum = 100000000, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString1(value) {
        return typeof value === "string";
    }, _isFunction = function _isFunction1(value) {
        return typeof value === "function";
    }, _isNumber = function _isNumber1(value) {
        return typeof value === "number";
    }, _isUndefined = function _isUndefined1(value) {
        return typeof value === "undefined";
    }, _isObject = function _isObject1(value) {
        return typeof value === "object";
    }, _isNotFalse = function _isNotFalse1(value) {
        return value !== false;
    }, _windowExists = function _windowExists1() {
        return typeof window !== "undefined";
    }, _isFuncOrString = function _isFuncOrString1(value) {
        return _isFunction(value) || _isString(value);
    }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
    }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {
    }, _installScope = {
    }, _coreReady, _install = function _install1(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
    }, _missingPlugin = function _missingPlugin1(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
    }, _warn = function _warn1(message, suppress) {
        return !suppress && console.warn(message);
    }, _addGlobal = function _addGlobal1(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
    }, _emptyFunc = function _emptyFunc1() {
        return 0;
    }, _reservedProps = {
    }, _lazyTweens = [], _lazyLookup = {
    }, _lastRenderedFrame, _plugins = {
    }, _effects = {
    }, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness1(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [
            targets
        ]);
        if (!(harnessPlugin = (target._gsap || {
        }).harness)) {
            i = _harnessPlugins.length;
            while((i--) && !_harnessPlugins[i].targetTest(target));
            harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        return targets;
    }, _getCache = function _getCache1(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
    }, _getProperty = function _getProperty1(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
    }, _forEachName = function _forEachName1(names, func) {
        return (names = names.split(",")).forEach(func) || names;
    }, _round = function _round1(value) {
        return Math.round(value * 100000) / 100000 || 0;
    }, _arrayContainsAny = function _arrayContainsAny1(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for(; toSearch.indexOf(toFind[i]) < 0 && (++i) < l;);
        return i < l;
    }, _parseVars = function _parseVars1(params, type, parent) {
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;
        isLegacy && (vars.duration = params[1]);
        vars.parent = parent;
        if (type) {
            irVars = vars;
            while(parent && !("immediateRender" in irVars)){
                irVars = parent.vars.defaults || {
                };
                parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }
            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return vars;
    }, _lazyRender = function _lazyRender1() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {
        };
        _lazyTweens.length = 0;
        for(i = 0; i < l; i++){
            tween = a[i];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
    }, _lazySafeRender = function _lazySafeRender1(animation, time, suppressEvents, force) {
        _lazyTweens.length && _lazyRender();
        animation.render(time, suppressEvents, force);
        _lazyTweens.length && _lazyRender();
    }, _numericIfPossible = function _numericIfPossible1(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
    }, _passThrough = function _passThrough1(p) {
        return p;
    }, _setDefaults = function _setDefaults1(obj, defaults) {
        for(var p in defaults)p in obj || (obj[p] = defaults[p]);
        return obj;
    }, _setKeyframeDefaults = function _setKeyframeDefaults1(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }, _merge = function _merge1(base, toMerge) {
        for(var p in toMerge)base[p] = toMerge[p];
        return base;
    }, _mergeDeep = function _mergeDeep1(base, toMerge) {
        for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep1(base[p] || (base[p] = {
        }), toMerge[p]) : toMerge[p]);
        return base;
    }, _copyExcluding = function _copyExcluding1(obj, excluding) {
        var copy = {
        }, p;
        for(p in obj)p in excluding || (copy[p] = obj[p]);
        return copy;
    }, _inheritDefaults = function _inheritDefaults1(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
        if (_isNotFalse(vars.inherit)) while(parent){
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
        }
        return vars;
    }, _arraysMatch = function _arraysMatch1(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while(match && i-- && a1[i] === a2[i]);
        return i < 0;
    }, _addLinkedListItem = function _addLinkedListItem1(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) firstProp = "_first";
        if (lastProp === void 0) lastProp = "_last";
        var prev = parent[lastProp], t;
        if (sortBy) {
            t = child[sortBy];
            while(prev && prev[sortBy] > t)prev = prev._prev;
        }
        if (prev) {
            child._next = prev._next;
            prev._next = child;
        } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
        }
        if (child._next) child._next._prev = child;
        else parent[lastProp] = child;
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
    }, _removeLinkedListItem = function _removeLinkedListItem1(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) firstProp = "_first";
        if (lastProp === void 0) lastProp = "_last";
        var prev = child._prev, next = child._next;
        if (prev) prev._next = next;
        else if (parent[firstProp] === child) parent[firstProp] = next;
        if (next) next._prev = prev;
        else if (parent[lastProp] === child) parent[lastProp] = prev;
        child._next = child._prev = child.parent = null;
    }, _removeFromParent = function _removeFromParent1(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
        child._act = 0;
    }, _uncache = function _uncache1(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a = animation;
            while(a){
                a._dirty = 1;
                a = a.parent;
            }
        }
        return animation;
    }, _recacheAncestors = function _recacheAncestors1(animation) {
        var parent = animation.parent;
        while(parent && parent.parent){
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
        }
        return animation;
    }, _hasNoPausedAncestors = function _hasNoPausedAncestors1(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors1(animation.parent);
    }, _elapsedCycleDuration = function _elapsedCycleDuration1(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
    }, _animationCycle = function _animationCycle1(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
    }, _parentToChildTotalTime = function _parentToChildTotalTime1(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
    }, _setEnd = function _setEnd1(animation) {
        return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
    }, _alignPlayhead = function _alignPlayhead1(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
            _setEnd(animation);
            parent._dirty || _uncache(parent, animation);
        }
        return animation;
    }, _postAddChecks = function _postAddChecks1(timeline, child) {
        var t;
        if (child._time || child._initted && !child._dur) {
            t = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
        }
        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
                t = timeline;
                while(t._dp){
                    t.rawTime() >= 0 && t.totalTime(t._tTime);
                    t = t._dp;
                }
            }
            timeline._zTime = -_tinyNum;
        }
    }, _addToTimeline = function _addToTimeline1(timeline, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _round(position + child._delay);
        child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
        timeline._recent = child;
        skipChecks || _postAddChecks(timeline, child);
        return timeline;
    }, _scrollTrigger = function _scrollTrigger1(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
    }, _attemptInitTween = function _attemptInitTween1(tween, totalTime, force, suppressEvents) {
        _initTween(tween, totalTime);
        if (!tween._initted) return 1;
        if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);
            tween._lazy = [
                totalTime,
                suppressEvents
            ];
            return 1;
        }
    }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart1(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart1(parent));
    }, _renderZeroDurationTween = function _renderZeroDurationTween1(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
            tTime = _clamp(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            prevIteration = _animationCycle(tween._tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
            if (iteration !== prevIteration) {
                prevRatio = 1 - ratio;
                tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
        }
        if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) return;
            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            suppressEvents || _callback(tween, "onStart");
            pt = tween._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                ratio && _removeFromParent(tween, 1);
                if (!suppressEvents) {
                    _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                    tween._prom && tween._prom();
                }
            }
        } else if (!tween._zTime) tween._zTime = totalTime;
    }, _findNextPauseTween = function _findNextPauseTween1(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
            child = animation._first;
            while(child && child._start <= time){
                if (!child._dur && child.data === "isPause" && child._start > prevTime) return child;
                child = child._next;
            }
        } else {
            child = animation._last;
            while(child && child._start >= time){
                if (!child._dur && child.data === "isPause" && child._start < prevTime) return child;
                child = child._prev;
            }
        }
    }, _setDuration = function _setDuration1(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 10000000000 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
    }, _onUpdateTotalDuration = function _onUpdateTotalDuration1(animation) {
        return animation instanceof Timeline1 ? _uncache(animation) : _setDuration(animation, animation._dur);
    }, _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc
    }, _parsePosition = function _parsePosition1(animation, position) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset;
        if (_isString(position) && (isNaN(position) || position in labels)) {
            i = position.charAt(0);
            if (i === "<" || i === ">") return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
            i = position.indexOf("=");
            if (i < 0) {
                position in labels || (labels[position] = clippedDuration);
                return labels[position];
            }
            offset = +(position.charAt(i - 1) + position.substr(i + 1));
            return i > 1 ? _parsePosition1(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
    }, _conditionalReturn = function _conditionalReturn1(value, func) {
        return value || value === 0 ? func(value) : func;
    }, _clamp = function _clamp1(min, max, value) {
        return value < min ? min : value > max ? max : value;
    }, getUnit = function getUnit1(value) {
        if (typeof value !== "string") return "";
        var v = _unitExp.exec(value);
        return v ? value.substr(v.index + v[0].length) : "";
    }, clamp = function clamp1(min, max, value) {
        return _conditionalReturn(value, function(v) {
            return _clamp(min, max, v);
        });
    }, _slice = [].slice, _isArrayLike = function _isArrayLike1(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
    }, _flatten = function _flatten1(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) accumulator = [];
        return ar.forEach(function(value) {
            var _accumulator;
            return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
    }, toArray = function toArray1(value, leaveStrings) {
        return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
            value
        ] : [];
    }, shuffle = function shuffle1(a) {
        return a.sort(function() {
            return 0.5 - Math.random();
        });
    }, distribute = function distribute1(v) {
        if (_isFunction(v)) return v;
        var vars = _isObject(v) ? v : {
            each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {
        }, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString(from)) ratioX = ratioY = ({
            center: 0.5,
            edges: 0.5,
            end: 1
        })[from] || 0;
        else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
        }
        return function(i, target, a) {
            var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
            if (!distances) {
                wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                    1,
                    _bigNum
                ])[1];
                if (!wrapAt) {
                    max = -_bigNum;
                    while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                    wrapAt--;
                }
                distances = cache[l] = [];
                originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
                originY = ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
                max = 0;
                min = _bigNum;
                for(j = 0; j < l; j++){
                    x = j % wrapAt - originX;
                    y = originY - (j / wrapAt | 0);
                    distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                    d > max && (max = d);
                    d < min && (min = d);
                }
                from === "random" && shuffle(distances);
                distances.max = max - min;
                distances.min = min;
                distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
                distances.b = l < 0 ? base - l : base;
                distances.u = getUnit(vars.amount || vars.each) || 0;
                ease = ease && l < 0 ? _invertEase(ease) : ease;
            }
            l = (distances[i] - distances.min) / distances.max || 0;
            return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
    }, _roundModifier = function _roundModifier1(v) {
        var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
        return function(raw) {
            var n = Math.round(parseFloat(raw) / v) * v * p;
            return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
    }, snap = function snap1(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;
            if (snapTo.values) {
                snapTo = toArray(snapTo.values);
                if (is2D = !_isNumber(snapTo[0])) radius *= radius;
            } else snapTo = _roundModifier(snapTo.increment);
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
            var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
            while(i--){
                if (is2D) {
                    dx = snapTo[i].x - x;
                    dy = snapTo[i].y - y;
                    dx = dx * dx + dy * dy;
                } else dx = Math.abs(snapTo[i] - x);
                if (dx < min) {
                    min = dx;
                    closest = i;
                }
            }
            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
    }, random = function random1(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 0.00001, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
    }, pipe = function pipe1() {
        for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
        return function(value) {
            return functions.reduce(function(v, f) {
                return f(v);
            }, value);
        };
    }, unitize = function unitize1(func, unit) {
        return function(value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
        };
    }, normalize = function normalize1(min, max, value) {
        return mapRange(min, max, 0, 1, value);
    }, _wrapArray = function _wrapArray1(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
            return a[~~wrapper(index)];
        });
    }, wrap = function wrap1(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap1(0, min.length), max) : _conditionalReturn(value, function(value1) {
            return (range + (value1 - min) % range) % range + min;
        });
    }, wrapYoyo = function wrapYoyo1(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo1(0, min.length - 1), max) : _conditionalReturn(value, function(value1) {
            value1 = (total + (value1 - min) % total) % total || 0;
            return min + (value1 > range ? total - value1 : value1);
        });
    }, _replaceRandom = function _replaceRandom1(value) {
        var prev = 0, s = "", i, nums, end, isArray;
        while(~(i = value.indexOf("random(", prev))){
            end = value.indexOf(")", i);
            isArray = value.charAt(i + 7) === "[";
            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 0.00001);
            prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
    }, mapRange = function mapRange1(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value1) {
            return outMin + ((value1 - inMin) / inRange * outRange || 0);
        });
    }, interpolate = function interpolate1(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p) {
            return (1 - p) * start + p * end;
        };
        if (!func) {
            var isString = _isString(start), master = {
            }, p, i, interpolators, l, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
                start = {
                    p: start
                };
                end = {
                    p: end
                };
            } else if (_isArray(start) && !_isArray(end)) {
                interpolators = [];
                l = start.length;
                il = l - 2;
                for(i = 1; i < l; i++)interpolators.push(interpolate1(start[i - 1], start[i]));
                l--;
                func = function func1(p1) {
                    p1 *= l;
                    var i1 = Math.min(il, ~~p1);
                    return interpolators[i1](p1 - i1);
                };
                progress = end;
            } else if (!mutate) start = _merge(_isArray(start) ? [] : {
            }, start);
            if (!interpolators) {
                for(p in end)_addPropTween.call(master, start, p, "get", end[p]);
                func = function func1(p1) {
                    return _renderPropTweens(p1, master) || (isString ? start.p : start);
                };
            }
        }
        return _conditionalReturn(progress, func);
    }, _getLabelInDirection = function _getLabelInDirection1(timeline, fromTime, backward) {
        var labels = timeline.labels, min = _bigNum, p, distance, label;
        for(p in labels){
            distance = labels[p] - fromTime;
            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                label = p;
                min = distance;
            }
        }
        return label;
    }, _callback = function _callback1(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], params, scope;
        if (!callback) return;
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        return params ? callback.apply(scope, params) : callback.call(scope);
    }, _interrupt = function _interrupt1(animation) {
        _removeFromParent(animation);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
    }, _quickTween, _createPlugin = function _createPlugin1(config) {
        config = !config.name && config["default"] || config;
        var name = config.name, isFunc = _isFunction(config), Plugin1 = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {
            },
            register: 0
        };
        _wake();
        if (config !== Plugin1) {
            if (_plugins[name]) return;
            _setDefaults(Plugin1, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
            _merge(Plugin1.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
            _plugins[Plugin1.prop = name] = Plugin1;
            if (config.targetTest) {
                _harnessPlugins.push(Plugin1);
                _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
        _addGlobal(name, Plugin1);
        config.register && config.register(gsap, Plugin1, PropTween);
    }, _255 = 255, _colorLookup = {
        aqua: [
            0,
            _255,
            _255
        ],
        lime: [
            0,
            _255,
            0
        ],
        silver: [
            192,
            192,
            192
        ],
        black: [
            0,
            0,
            0
        ],
        maroon: [
            128,
            0,
            0
        ],
        teal: [
            0,
            128,
            128
        ],
        blue: [
            0,
            0,
            _255
        ],
        navy: [
            0,
            0,
            128
        ],
        white: [
            _255,
            _255,
            _255
        ],
        olive: [
            128,
            128,
            0
        ],
        yellow: [
            _255,
            _255,
            0
        ],
        orange: [
            _255,
            165,
            0
        ],
        gray: [
            128,
            128,
            128
        ],
        purple: [
            128,
            0,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        red: [
            _255,
            0,
            0
        ],
        pink: [
            _255,
            192,
            203
        ],
        cyan: [
            0,
            _255,
            _255
        ],
        transparent: [
            _255,
            _255,
            _255,
            0
        ]
    }, _hue = function _hue1(h, m1, m2) {
        h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
    }, splitColor = function splitColor1(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [
            v >> 16,
            v >> 8 & _255,
            v & _255
        ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
            if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
            if (_colorLookup[v]) a = _colorLookup[v];
            else if (v.charAt(0) === "#") {
                if (v.length < 6) {
                    r = v.charAt(1);
                    g = v.charAt(2);
                    b = v.charAt(3);
                    v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
                }
                if (v.length === 9) {
                    a = parseInt(v.substr(1, 6), 16);
                    return [
                        a >> 16,
                        a >> 8 & _255,
                        a & _255,
                        parseInt(v.substr(7), 16) / 255
                    ];
                }
                v = parseInt(v.substr(1), 16);
                a = [
                    v >> 16,
                    v >> 8 & _255,
                    v & _255
                ];
            } else if (v.substr(0, 3) === "hsl") {
                a = wasHSL = v.match(_strictNumExp);
                if (!toHSL) {
                    h = +a[0] % 360 / 360;
                    s = +a[1] / 100;
                    l = +a[2] / 100;
                    g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                    r = l * 2 - g;
                    a.length > 3 && (a[3] *= 1);
                    a[0] = _hue(h + 1 / 3, r, g);
                    a[1] = _hue(h, r, g);
                    a[2] = _hue(h - 1 / 3, r, g);
                } else if (~v.indexOf("=")) {
                    a = v.match(_numExp);
                    forceAlpha && a.length < 4 && (a[3] = 1);
                    return a;
                }
            } else a = v.match(_strictNumExp) || _colorLookup.transparent;
            a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
            r = a[0] / _255;
            g = a[1] / _255;
            b = a[2] / _255;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;
            if (max === min) h = s = 0;
            else {
                d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                h *= 60;
            }
            a[0] = ~~(h + 0.5);
            a[1] = ~~(s * 100 + 0.5);
            a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
    }, _colorOrderData = function _colorOrderData1(v) {
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v1) {
            var a = v1.match(_numWithUnitExp) || [];
            values.push.apply(values, a);
            c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
    }, _formatColors = function _formatColors1(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
        if (!colors) return s;
        colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
            d = _colorOrderData(s);
            c = orderMatchData.c;
            if (c.join(result) !== d.c.join(result)) {
                shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                l = shell.length - 1;
                for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
        }
        if (!shell) {
            shell = s.split(_colorExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + colors[i];
        }
        return result + shell[l];
    }, _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for(p in _colorLookup)s += "|" + p + "\\b";
        return new RegExp(s + ")", "gi");
    }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter1(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a[1] = _formatColors(a[1], toHSL);
            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
            return true;
        }
    }, _tickerActive, _ticker = function() {
        var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick1(v) {
            var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
            elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
                frame = ++_self.frame;
                _delta = time - _self.time * 1000;
                _self.time = time = time / 1000;
                _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                dispatch = 1;
            }
            manual || (_id = _req(_tick1));
            if (dispatch) for(_i = 0; _i < _listeners.length; _i++)_listeners[_i](time, _delta, frame, v);
        };
        _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
                _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
                return _delta / (1000 / (fps || 60));
            },
            wake: function wake() {
                if (_coreReady) {
                    if (!_coreInitted && _windowExists()) {
                        _win = _coreInitted = window;
                        _doc = _win.document || {
                        };
                        _globals.gsap = gsap;
                        (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                        _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {
                        });
                        _raf = _win.requestAnimationFrame;
                    }
                    _id && _self.sleep();
                    _req = _raf || function(f) {
                        return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                    };
                    _tickerActive = 1;
                    _tick(2);
                }
            },
            sleep: function sleep() {
                (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
                _tickerActive = 0;
                _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                _lagThreshold = threshold || 1 / _tinyNum;
                _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            },
            fps: function fps(_fps) {
                _gap = 1000 / (_fps || 240);
                _nextTime = _self.time * 1000 + _gap;
            },
            add: function add(callback) {
                _listeners.indexOf(callback) < 0 && _listeners.push(callback);
                _wake();
            },
            remove: function remove(callback) {
                var i;
                ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
            },
            _listeners: _listeners
        };
        return _self;
    }(), _wake = function _wake1() {
        return !_tickerActive && _ticker.wake();
    }, _easeMap = {
    }, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString1(value) {
        var obj = {
        }, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for(; i < l; i++){
            val = split[i];
            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
        }
        return obj;
    }, _valueInParentheses = function _valueInParentheses1(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
    }, _configEaseFromString = function _configEaseFromString1(name) {
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
            _parseObjectInString(split[1])
        ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
    }, _invertEase = function _invertEase1(ease) {
        return function(p) {
            return 1 - ease(1 - p);
        };
    }, _propagateYoyoEase = function _propagateYoyoEase1(timeline, isYoyo) {
        var child = timeline._first, ease;
        while(child){
            if (child instanceof Timeline1) _propagateYoyoEase1(child, isYoyo);
            else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
                if (child.timeline) _propagateYoyoEase1(child.timeline, isYoyo);
                else {
                    ease = child._ease;
                    child._ease = child._yEase;
                    child._yEase = ease;
                    child._yoyo = isYoyo;
                }
            }
            child = child._next;
        }
    }, _parseEase = function _parseEase1(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
    }, _insertEase = function _insertEase1(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) easeOut = function easeOut1(p) {
            return 1 - easeIn(1 - p);
        };
        if (easeInOut === void 0) easeInOut = function easeInOut1(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
        var ease = {
            easeIn: easeIn,
            easeOut: easeOut,
            easeInOut: easeInOut
        }, lowercaseName;
        _forEachName(names, function(name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
            for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
        });
        return ease;
    }, _easeInOutFromOut = function _easeInOutFromOut1(easeOut) {
        return function(p) {
            return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
    }, _configElastic = function _configElastic1(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut1(p) {
            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude1, period1) {
            return _configElastic1(type, amplitude1, period1);
        };
        return ease;
    }, _configBack = function _configBack1(type, overshoot) {
        if (overshoot === void 0) overshoot = 1.70158;
        var easeOut = function easeOut1(p) {
            return p ? (--p) * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot1) {
            return _configBack1(type, overshoot1);
        };
        return ease;
    };
    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
            return Math.pow(p, power);
        } : function(p) {
            return p;
        }, function(p) {
            return 1 - Math.pow(1 - p, power);
        }, function(p) {
            return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
    });
    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
    (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut1(p) {
            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
            return 1 - easeOut(1 - p);
        }, easeOut);
    })(7.5625, 2.75);
    _insertEase("Expo", function(p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
    });
    _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
    });
    _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
    });
    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
            if (steps === void 0) steps = 1;
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
            return function(p) {
                return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
            };
        }
    };
    _defaults.ease = _easeMap["quad.out"];
    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
        return _callbackNames += name + "," + name + "Params,";
    });
    var GSCache = function GSCache1(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
    };
    var Animation1 = function() {
        function Animation2(vars, time) {
            var parent = vars.parent || _globalTimeline;
            this.vars = vars;
            this._delay = +vars.delay || 0;
            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
                this._rDelay = vars.repeatDelay || 0;
                this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
            }
            this._ts = 1;
            _setDuration(this, +vars.duration, 1, 1);
            this.data = vars.data;
            _tickerActive || _ticker.wake();
            parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
            vars.reversed && this.reverse();
            vars.paused && this.paused(true);
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
            if (value || value === 0) {
                this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                this._delay = value;
                return this;
            }
            return this._delay;
        };
        _proto.duration = function duration(value) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
            if (!arguments.length) return this._tDur;
            this._dirty = 0;
            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
            _wake();
            if (!arguments.length) return this._tTime;
            var parent = this._dp;
            if (parent && parent.smoothChildTiming && this._ts) {
                _alignPlayhead(this, _totalTime);
                !parent._dp || parent.parent || _postAddChecks(parent, this);
                while(parent.parent){
                    if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                    parent = parent.parent;
                }
                if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
            }
            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                this._ts || (this._pTime = _totalTime);
                _lazySafeRender(this, _totalTime, suppressEvents);
            }
            return this;
        };
        _proto.time = function time(value, suppressEvents) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        };
        _proto.progress = function progress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
            var cycleDuration = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value) {
            if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
            if (this._rts === value) return this;
            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            this._rts = +value || 0;
            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
            return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
        };
        _proto.paused = function paused(value) {
            if (!arguments.length) return this._ps;
            if (this._ps !== value) {
                this._ps = value;
                if (value) {
                    this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                    this._ts = this._act = 0;
                } else {
                    _wake();
                    this._ts = this._rts;
                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
                }
            }
            return this;
        };
        _proto.startTime = function startTime(value) {
            if (arguments.length) {
                this._start = value;
                var parent = this.parent || this._dp;
                parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                return this;
            }
            return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
            var parent = this.parent || this._dp;
            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.globalTime = function globalTime(rawTime1) {
            var animation = this, time1 = arguments.length ? rawTime1 : animation.rawTime();
            while(animation){
                time1 = animation._start + time1 / (animation._ts || 1);
                animation = animation._dp;
            }
            return time1;
        };
        _proto.repeat = function repeat(value) {
            if (arguments.length) {
                this._repeat = value === Infinity ? -2 : value;
                return _onUpdateTotalDuration(this);
            }
            return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
            if (arguments.length) {
                this._rDelay = value;
                return _onUpdateTotalDuration(this);
            }
            return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
            if (arguments.length) {
                this._yoyo = value;
                return this;
            }
            return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
            return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };
        _proto.play = function play(from, suppressEvents) {
            from != null && this.seek(from, suppressEvents);
            return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
            from != null && this.seek(from || this.totalDuration(), suppressEvents);
            return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
            atTime != null && this.seek(atTime, suppressEvents);
            return this.paused(true);
        };
        _proto.resume = function resume() {
            return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
            if (arguments.length) {
                !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
                return this;
            }
            return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
            this._initted = this._act = 0;
            this._zTime = -_tinyNum;
            return this;
        };
        _proto.isActive = function isActive() {
            var parent = this.parent || this._dp, start = this._start, rawTime1;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime1 = parent.rawTime(true)) >= start && rawTime1 < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback, params) {
            var vars = this.vars;
            if (arguments.length > 1) {
                if (!callback) delete vars[type];
                else {
                    vars[type] = callback;
                    params && (vars[type + "Params"] = params);
                    type === "onUpdate" && (this._onUpdate = callback);
                }
                return this;
            }
            return vars[type];
        };
        _proto.then = function then(onFulfilled) {
            var self = this;
            return new Promise(function(resolve) {
                var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve1() {
                    var _then = self.then;
                    self.then = null;
                    _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                    resolve(f);
                    self.then = _then;
                };
                if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
                else self._prom = _resolve;
            });
        };
        _proto.kill = function kill() {
            _interrupt(this);
        };
        return Animation2;
    }();
    _setDefaults(Animation1.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
    });
    var Timeline1 = function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, time) {
            var _this;
            if (vars === void 0) vars = {
            };
            _this = _Animation.call(this, vars, time) || this;
            _this.labels = {
            };
            _this.smoothChildTiming = !!vars.smoothChildTiming;
            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
            _this._sort = _isNotFalse(vars.sortChildren);
            _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
            return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
            new Tween1(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
            return this;
        };
        _proto2.from = function from(targets, vars, position) {
            new Tween1(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
            return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
            new Tween1(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
            return this;
        };
        _proto2.set = function set(targets, vars, position) {
            vars.duration = 0;
            vars.parent = this;
            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
            vars.immediateRender = !!vars.immediateRender;
            new Tween1(targets, vars, _parsePosition(this, position), 1);
            return this;
        };
        _proto2.call = function call(callback, params, position) {
            return _addToTimeline(this, Tween1.delayedCall(0, callback, params), _parsePosition(this, position));
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.duration = duration;
            vars.stagger = vars.stagger || stagger;
            vars.onComplete = onCompleteAll;
            vars.onCompleteParams = onCompleteAllParams;
            vars.parent = this;
            new Tween1(targets, vars, _parsePosition(this, position));
            return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.runBackwards = 1;
            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
            toVars.startAt = fromVars;
            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
            if (tTime !== this._tTime || force || crossingStart) {
                if (prevTime !== this._time && dur) {
                    tTime += this._time - prevTime;
                    totalTime += this._time - prevTime;
                }
                time = tTime;
                prevStart = this._start;
                timeScale = this._ts;
                prevPaused = !timeScale;
                if (crossingStart) {
                    dur || (prevTime = this._zTime);
                    (totalTime || !suppressEvents) && (this._zTime = totalTime);
                }
                if (this._repeat) {
                    yoyo = this._yoyo;
                    cycleDuration = dur + this._rDelay;
                    if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                    time = _round(tTime % cycleDuration);
                    if (tTime === tDur) {
                        iteration = this._repeat;
                        time = dur;
                    } else {
                        iteration = ~~(tTime / cycleDuration);
                        if (iteration && iteration === tTime / cycleDuration) {
                            time = dur;
                            iteration--;
                        }
                        time > dur && (time = dur);
                    }
                    prevIteration = _animationCycle(this._tTime, cycleDuration);
                    !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
                    if (yoyo && iteration & 1) {
                        time = dur - time;
                        isYoyo = 1;
                    }
                    if (iteration !== prevIteration && !this._lock) {
                        var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                        iteration < prevIteration && (rewinding = !rewinding);
                        prevTime = rewinding ? 0 : dur;
                        this._lock = 1;
                        this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                        !suppressEvents && this.parent && _callback(this, "onRepeat");
                        this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                        if (prevTime !== this._time || prevPaused !== !this._ts) return this;
                        dur = this._dur;
                        tDur = this._tDur;
                        if (doesWrap) {
                            this._lock = 2;
                            prevTime = rewinding ? dur : -0.0001;
                            this.render(prevTime, true);
                            this.vars.repeatRefresh && !isYoyo && this.invalidate();
                        }
                        this._lock = 0;
                        if (!this._ts && !prevPaused) return this;
                        _propagateYoyoEase(this, isYoyo);
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2) {
                    pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
                    if (pauseTween) tTime -= time - (time = pauseTween._start);
                }
                this._tTime = tTime;
                this._time = time;
                this._act = !timeScale;
                if (!this._initted) {
                    this._onUpdate = this.vars.onUpdate;
                    this._initted = 1;
                    this._zTime = totalTime;
                    prevTime = 0;
                }
                !prevTime && (time || !dur && totalTime >= 0) && !suppressEvents && _callback(this, "onStart");
                if (time >= prevTime && totalTime >= 0) {
                    child = this._first;
                    while(child){
                        next = child._next;
                        if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                            if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                            if (time !== this._time || !this._ts && !prevPaused) {
                                pauseTween = 0;
                                next && (tTime += this._zTime = -_tinyNum);
                                break;
                            }
                        }
                        child = next;
                    }
                } else {
                    child = this._last;
                    var adjustedTime = totalTime < 0 ? totalTime : time;
                    while(child){
                        next = child._prev;
                        if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                            if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                            if (time !== this._time || !this._ts && !prevPaused) {
                                pauseTween = 0;
                                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                                break;
                            }
                        }
                        child = next;
                    }
                }
                if (pauseTween && !suppressEvents) {
                    this.pause();
                    pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                    if (this._ts) {
                        this._start = prevStart;
                        _setEnd(this);
                        return this.render(totalTime, suppressEvents, force);
                    }
                }
                this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
                    if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                        if (!this._lock) {
                            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                            }
                        }
                    }
                }
            }
            return this;
        };
        _proto2.add = function add(child, position) {
            var _this2 = this;
            _isNumber(position) || (position = _parsePosition(this, position));
            if (!(child instanceof Animation1)) {
                if (_isArray(child)) {
                    child.forEach(function(obj) {
                        return _this2.add(obj, position);
                    });
                    return this;
                }
                if (_isString(child)) return this.addLabel(child, position);
                if (_isFunction(child)) child = Tween1.delayedCall(0, child);
                else return this;
            }
            return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
            if (nested === void 0) nested = true;
            if (tweens === void 0) tweens = true;
            if (timelines === void 0) timelines = true;
            if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
            var a = [], child = this._first;
            while(child){
                if (child._start >= ignoreBeforeTime) {
                    if (child instanceof Tween1) tweens && a.push(child);
                    else {
                        timelines && a.push(child);
                        nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                    }
                }
                child = child._next;
            }
            return a;
        };
        _proto2.getById = function getById(id) {
            var animations = this.getChildren(1, 1, 1), i = animations.length;
            while(i--){
                if (animations[i].vars.id === id) return animations[i];
            }
        };
        _proto2.remove = function remove(child) {
            if (_isString(child)) return this.removeLabel(child);
            if (_isFunction(child)) return this.killTweensOf(child);
            _removeLinkedListItem(this, child);
            if (child === this._recent) this._recent = this._last;
            return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
            if (!arguments.length) return this._tTime;
            this._forcing = 1;
            if (!this._dp && this._ts) this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
            this._forcing = 0;
            return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
            this.labels[label] = _parsePosition(this, position);
            return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
            delete this.labels[label];
            return this;
        };
        _proto2.addPause = function addPause(position, callback, params) {
            var t = Tween1.delayedCall(0, callback || _emptyFunc, params);
            t.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t, _parsePosition(this, position));
        };
        _proto2.removePause = function removePause(position) {
            var child = this._first;
            position = _parsePosition(this, position);
            while(child){
                if (child._start === position && child.data === "isPause") _removeFromParent(child);
                child = child._next;
            }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
            while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
            return this;
        };
        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
            var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
            while(child){
                if (child instanceof Tween1) {
                    if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
                } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
                child = child._next;
            }
            return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
            vars = vars || {
            };
            var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween1.to(tl, _setDefaults({
                ease: "none",
                lazy: false,
                immediateRender: false,
                time: endTime,
                overwrite: "auto",
                duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                onStart: function onStart() {
                    tl.pause();
                    var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    _onStart && _onStart.apply(tween, onStartParams || []);
                }
            }, vars));
            return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
            return this.tweenTo(toPosition, _setDefaults({
                startAt: {
                    time: _parsePosition(this, fromPosition)
                }
            }, vars));
        };
        _proto2.recent = function recent() {
            return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
            if (afterTime === void 0) afterTime = this._time;
            return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
            if (beforeTime === void 0) beforeTime = this._time;
            return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
            if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
            var child = this._first, labels = this.labels, p;
            while(child){
                if (child._start >= ignoreBeforeTime) {
                    child._start += amount;
                    child._end += amount;
                }
                child = child._next;
            }
            if (adjustLabels) {
                for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
            }
            return _uncache(this);
        };
        _proto2.invalidate = function invalidate() {
            var child = this._first;
            this._lock = 0;
            while(child){
                child.invalidate();
                child = child._next;
            }
            return _Animation.prototype.invalidate.call(this);
        };
        _proto2.clear = function clear(includeLabels) {
            if (includeLabels === void 0) includeLabels = true;
            var child = this._first, next;
            while(child){
                next = child._next;
                this.remove(child);
                child = next;
            }
            this._dp && (this._time = this._tTime = this._pTime = 0);
            includeLabels && (this.labels = {
            });
            return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
            var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
            if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
            if (self._dirty) {
                parent = self.parent;
                while(child){
                    prev = child._prev;
                    child._dirty && child.totalDuration();
                    start = child._start;
                    if (start > prevStart && self._sort && child._ts && !self._lock) {
                        self._lock = 1;
                        _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                    } else prevStart = start;
                    if (start < 0 && child._ts) {
                        max -= start;
                        if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                            self._start += start / self._ts;
                            self._time -= start;
                            self._tTime -= start;
                        }
                        self.shiftChildren(-start, false, -Infinity);
                        prevStart = 0;
                    }
                    child._end > max && child._ts && (max = child._end);
                    child = prev;
                }
                _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                self._dirty = 0;
            }
            return self._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
            if (_globalTimeline._ts) {
                _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                _lastRenderedFrame = _ticker.frame;
            }
            if (_ticker.frame >= _nextGCFrame) {
                _nextGCFrame += _config.autoSleep || 120;
                var child = _globalTimeline._first;
                if (!child || !child._ts) {
                    if (_config.autoSleep && _ticker._listeners.length < 2) {
                        while(child && !child._ts)child = child._next;
                        child || _ticker.sleep();
                    }
                }
            }
        };
        return Timeline2;
    }(Animation1);
    _setDefaults(Timeline1.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var _addComplexStringPropTween = function _addComplexStringPropTween1(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
        if (stringFilter) {
            a = [
                start,
                end
            ];
            stringFilter(a, target, prop);
            start = a[0];
            end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while(result = _complexStringNumExp.exec(end)){
            endNum = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(") color = 1;
            if (endNum !== startNums[matchIndex++]) {
                startNum = parseFloat(startNums[matchIndex - 1]) || 0;
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    s: startNum,
                    c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                    m: color && color < 4 ? Math.round : 0
                };
                index = _complexStringNumExp.lastIndex;
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) pt.e = 0;
        this._pt = pt;
        return pt;
    }, _addPropTween = function _addPropTween1(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString(end)) {
            if (~end.indexOf("random(")) end = _replaceRandom(end);
            if (end.charAt(1) === "=") end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        }
        if (parsedStart !== end) {
            if (!isNaN(parsedStart * end)) {
                pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
                funcParam && (pt.fp = funcParam);
                modifier && pt.modifier(modifier, this, target);
                return this._pt = pt;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
    }, _processVars = function _processVars1(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        var copy = {
        }, p;
        for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        return copy;
    }, _checkPlugin = function _checkPlugin1(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
                ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
                i = plugin._props.length;
                while(i--)ptLookup[plugin._props[i]] = pt;
            }
        }
        return plugin;
    }, _overwritingTween, _initTween = function _initTween1(tween, time) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
        }
        if (!tl) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            prevStartAt && prevStartAt.render(-1, true).kill();
            if (startAt) {
                _removeFromParent(tween._startAt = Tween1.set(targets, _setDefaults({
                    data: "isStart",
                    overwrite: false,
                    parent: parent,
                    immediateRender: true,
                    lazy: _isNotFalse(lazy),
                    startAt: null,
                    delay: 0,
                    onUpdate: onUpdate,
                    onUpdateParams: onUpdateParams,
                    callbackScope: callbackScope,
                    stagger: 0
                }, startAt)));
                if (immediateRender) {
                    if (time > 0) autoRevert || (tween._startAt = 0);
                    else if (dur && !(time < 0 && prevStartAt)) {
                        time && (tween._zTime = time);
                        return;
                    }
                }
            } else if (runBackwards && dur) {
                if (prevStartAt) !autoRevert && (tween._startAt = 0);
                else {
                    time && (immediateRender = false);
                    p = _setDefaults({
                        overwrite: false,
                        data: "isFromStart",
                        lazy: immediateRender && _isNotFalse(lazy),
                        immediateRender: immediateRender,
                        stagger: 0,
                        parent: parent
                    }, cleanVars);
                    harnessVars && (p[harness.prop] = harnessVars);
                    _removeFromParent(tween._startAt = Tween1.set(targets, p));
                    if (!immediateRender) _initTween1(tween._startAt, _tinyNum);
                    else if (!time) return;
                }
            }
            tween._pt = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
            for(i = 0; i < targets.length; i++){
                target = targets[i];
                gsData = target._gsap || _harness(targets)[i]._gsap;
                tween._ptLookup[i] = ptLookup = {
                };
                _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
                index = fullTargets === targets ? i : fullTargets.indexOf(target);
                if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                    tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                    plugin._props.forEach(function(name) {
                        ptLookup[name] = pt;
                    });
                    plugin.priority && (hasPriority = 1);
                }
                if (!harness || harnessVars) {
                    for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                    else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
                tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                if (autoOverwrite && tween._pt) {
                    _overwritingTween = tween;
                    _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));
                    overwritten = !tween.parent;
                    _overwritingTween = 0;
                }
                tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }
            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
        }
        tween._from = !tl && !!vars.runBackwards;
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
    }, _addAliasesToVars = function _addAliasesToVars1(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) return vars;
        copy = _merge({
        }, vars);
        for(p in propertyAliases)if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while(i--)copy[aliases[i]] = copy[p];
        }
        return copy;
    }, _parseFuncOrString = function _parseFuncOrString1(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
    }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
    var Tween1 = function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, time, skipInherit) {
            var _this3;
            if (typeof vars === "number") {
                time.duration = vars;
                vars = time;
                time = null;
            }
            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
                targets
            ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                vars = _this3.vars;
                tl = _this3.timeline = new Timeline1({
                    data: "nested",
                    defaults: defaults || {
                    }
                });
                tl.kill();
                tl.parent = tl._dp = _assertThisInitialized(_this3);
                tl._start = 0;
                if (keyframes) {
                    _setDefaults(tl.vars.defaults, {
                        ease: "none"
                    });
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                } else {
                    l = parsedTargets.length;
                    staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
                    if (_isObject(stagger)) {
                        for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {
                            });
                            staggerVarsToMerge[p] = stagger[p];
                        }
                    }
                    for(i = 0; i < l; i++){
                        copy = {
                        };
                        for(p in vars)if (_staggerPropsToSkip.indexOf(p) < 0) copy[p] = vars[p];
                        copy.stagger = 0;
                        yoyoEase && (copy.yoyoEase = yoyoEase);
                        staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                        curTarget = parsedTargets[i];
                        copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                        copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                        if (!stagger && l === 1 && copy.delay) {
                            _this3._delay = delay = copy.delay;
                            _this3._start += delay;
                            copy.delay = 0;
                        }
                        tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
                    }
                    tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
                }
                duration || _this3.duration(duration = tl.duration());
            } else _this3.timeline = 0;
            if (overwrite === true && !_suppressOverwrites) {
                _overwritingTween = _assertThisInitialized(_this3);
                _globalTimeline.killTweensOf(parsedTargets);
                _overwritingTween = 0;
            }
            parent && _postAddChecks(parent, _assertThisInitialized(_this3));
            if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
                _this3._tTime = -_tinyNum;
                _this3.render(Math.max(0, -delay));
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
            return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
            if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
            else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
                time = tTime;
                timeline = this.timeline;
                if (this._repeat) {
                    cycleDuration = dur + this._rDelay;
                    if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                    time = _round(tTime % cycleDuration);
                    if (tTime === tDur) {
                        iteration = this._repeat;
                        time = dur;
                    } else {
                        iteration = ~~(tTime / cycleDuration);
                        if (iteration && iteration === tTime / cycleDuration) {
                            time = dur;
                            iteration--;
                        }
                        time > dur && (time = dur);
                    }
                    isYoyo = this._yoyo && iteration & 1;
                    if (isYoyo) {
                        yoyoEase = this._yEase;
                        time = dur - time;
                    }
                    prevIteration = _animationCycle(this._tTime, cycleDuration);
                    if (time === prevTime && !force && this._initted) return this;
                    if (iteration !== prevIteration) {
                        timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                        if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                            this._lock = force = 1;
                            this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                        }
                    }
                }
                if (!this._initted) {
                    if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                        this._tTime = 0;
                        return this;
                    }
                    if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
                }
                this._tTime = tTime;
                this._time = time;
                if (!this._act && this._ts) {
                    this._act = 1;
                    this._lazy = 0;
                }
                this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                if (this._from) this.ratio = ratio = 1 - ratio;
                time && !prevTime && !suppressEvents && _callback(this, "onStart");
                pt = this._pt;
                while(pt){
                    pt.r(ratio, pt.d);
                    pt = pt._next;
                }
                timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                if (this._onUpdate && !suppressEvents) {
                    totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
                    _callback(this, "onUpdate");
                }
                this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                    totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                    (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                        _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                        this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                    }
                }
            }
            return this;
        };
        _proto3.targets = function targets() {
            return this._targets;
        };
        _proto3.invalidate = function invalidate() {
            this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
            this._ptLookup = [];
            this.timeline && this.timeline.invalidate();
            return _Animation2.prototype.invalidate.call(this);
        };
        _proto3.kill = function kill(targets1, vars) {
            if (vars === void 0) vars = "all";
            if (!targets1 && (!vars || vars === "all")) {
                this._lazy = this._pt = 0;
                return this.parent ? _interrupt(this) : this;
            }
            if (this.timeline) {
                var tDur = this.timeline.totalDuration();
                this.timeline.killTweensOf(targets1, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
                this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
                return this;
            }
            var parsedTargets = this._targets, killingTargets = targets1 ? toArray(targets1) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
                vars === "all" && (this._pt = 0);
                return _interrupt(this);
            }
            overwrittenProps = this._op = this._op || [];
            if (vars !== "all") {
                if (_isString(vars)) {
                    p = {
                    };
                    _forEachName(vars, function(name) {
                        return p[name] = 1;
                    });
                    vars = p;
                }
                vars = _addAliasesToVars(parsedTargets, vars);
            }
            i = parsedTargets.length;
            while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                    overwrittenProps[i] = vars;
                    props = curLookup;
                    curOverwriteProps = {
                    };
                } else {
                    curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {
                    };
                    props = vars;
                }
                for(p in props){
                    pt = curLookup && curLookup[p];
                    if (pt) {
                        if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                        delete curLookup[p];
                    }
                    if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
                }
            }
            this._initted && !this._pt && firstPT && _interrupt(this);
            return this;
        };
        Tween2.to = function to(targets1, vars) {
            return new Tween2(targets1, vars, arguments[2]);
        };
        Tween2.from = function from(targets1, vars) {
            return new Tween2(targets1, _parseVars(arguments, 1));
        };
        Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
            return new Tween2(callback, 0, {
                immediateRender: false,
                lazy: false,
                overwrite: false,
                delay: delay,
                onComplete: callback,
                onReverseComplete: callback,
                onCompleteParams: params,
                onReverseCompleteParams: params,
                callbackScope: scope
            });
        };
        Tween2.fromTo = function fromTo(targets1, fromVars, toVars) {
            return new Tween2(targets1, _parseVars(arguments, 2));
        };
        Tween2.set = function set(targets1, vars) {
            vars.duration = 0;
            vars.repeatDelay || (vars.repeat = 0);
            return new Tween2(targets1, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets1, props, onlyActive) {
            return _globalTimeline.killTweensOf(targets1, props, onlyActive);
        };
        return Tween2;
    }(Animation1);
    _setDefaults(Tween1.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
        Tween1[name] = function() {
            var tl = new Timeline1(), params = _slice.call(arguments, 0);
            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
            return tl[name].apply(tl, params);
        };
    });
    var _setterPlain = function _setterPlain1(target, property, value) {
        return target[property] = value;
    }, _setterFunc = function _setterFunc1(target, property, value) {
        return target[property](value);
    }, _setterFuncWithParam = function _setterFuncWithParam1(target, property, value, data) {
        return target[property](data.fp, value);
    }, _setterAttribute = function _setterAttribute1(target, property, value) {
        return target.setAttribute(property, value);
    }, _getSetter = function _getSetter1(target, property) {
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
    }, _renderPlain = function _renderPlain1(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
    }, _renderBoolean = function _renderBoolean1(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    }, _renderComplexString = function _renderComplexString1(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) s = data.b;
        else if (ratio === 1 && data.e) s = data.e;
        else {
            while(pt){
                s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
                pt = pt._next;
            }
            s += data.c;
        }
        data.set(data.t, data.p, s, data);
    }, _renderPropTweens = function _renderPropTweens1(ratio, data) {
        var pt = data._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
    }, _addPluginModifier = function _addPluginModifier1(modifier, tween, target, property) {
        var pt = this._pt, next;
        while(pt){
            next = pt._next;
            pt.p === property && pt.modifier(modifier, tween, target);
            pt = next;
        }
    }, _killPropTweensOf = function _killPropTweensOf1(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while(pt){
            next = pt._next;
            if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
            else if (!pt.dep) hasNonDependentRemaining = 1;
            pt = next;
        }
        return !hasNonDependentRemaining;
    }, _setterWithModifier = function _setterWithModifier1(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
    }, _sortPropTweensByPriority = function _sortPropTweensByPriority1(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while(pt){
            next = pt._next;
            pt2 = first;
            while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
            if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
            else first = pt;
            if (pt._next = pt2) pt2._prev = pt;
            else last = pt;
            pt = next;
        }
        parent._pt = first;
    };
    var PropTween = function() {
        function PropTween1(next, target, prop, start, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start;
            this.c = change;
            this.p = prop;
            this.r = renderer || _renderPlain;
            this.d = data || this;
            this.set = setter || _setterPlain;
            this.pr = priority || 0;
            this._next = next;
            if (next) next._prev = this;
        }
        var _proto4 = PropTween1.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
            this.mSet = this.mSet || this.set;
            this.set = _setterWithModifier;
            this.m = func;
            this.mt = target;
            this.tween = tween;
        };
        return PropTween1;
    }();
    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
        return _reservedProps[name] = 1;
    });
    _globals.TweenMax = _globals.TweenLite = Tween1;
    _globals.TimelineLite = _globals.TimelineMax = Timeline1;
    _globalTimeline = new Timeline1({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
    });
    _config.stringFilter = _colorStringFilter;
    var _gsap = {
        registerPlugin: function registerPlugin() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            args.forEach(function(config) {
                return _createPlugin(config);
            });
        },
        timeline: function timeline(vars) {
            return new Timeline1(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
            return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
            _isString(target) && (target = toArray(target)[0]);
            var getter = _getCache(target || {
            }).get, format = unit ? _passThrough : _numericIfPossible;
            unit === "native" && (unit = "");
            return !target ? target : !property ? function(property1, unit1, uncache1) {
                return format((_plugins[property1] && _plugins[property1].get || getter)(target, property1, unit1, uncache1));
            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
            target = toArray(target);
            if (target.length > 1) {
                var setters = target.map(function(t) {
                    return gsap.quickSetter(t, property, unit);
                }), l = setters.length;
                return function(value) {
                    var i = l;
                    while(i--)setters[i](value);
                };
            }
            target = target[0] || {
            };
            var Plugin1 = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {
            })[property] || property, setter = Plugin1 ? function(value) {
                var p1 = new Plugin1();
                _quickTween._pt = 0;
                p1.init(target, unit ? value + unit : value, _quickTween, 0, [
                    target
                ]);
                p1.render(1, p1);
                _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p);
            return Plugin1 ? setter : function(value) {
                return setter(target, p, unit ? value + unit : value, cache, 1);
            };
        },
        isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
            return _mergeDeep(_defaults, value || {
            });
        },
        config: function config(value) {
            return _mergeDeep(_config, value || {
            });
        },
        registerEffect: function registerEffect(_ref2) {
            var name = _ref2.name, effect = _ref2.effect, plugins = _ref2.plugins, defaults1 = _ref2.defaults, extendTimeline = _ref2.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
                return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl) {
                return effect(toArray(targets), _setDefaults(vars || {
                }, defaults1), tl);
            };
            if (extendTimeline) Timeline1.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {
                }, this), position);
            };
        },
        registerEase: function registerEase(name, ease) {
            _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
            return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
            if (vars === void 0) vars = {
            };
            var tl = new Timeline1(vars), child, next;
            tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
            _globalTimeline.remove(tl);
            tl._dp = 0;
            tl._time = tl._tTime = _globalTimeline._time;
            child = _globalTimeline._first;
            while(child){
                next = child._next;
                if (includeDelayedCalls || !(!child._dur && child instanceof Tween1 && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
                child = next;
            }
            _addToTimeline(_globalTimeline, tl, 0);
            return tl;
        },
        utils: {
            wrap: wrap,
            wrapYoyo: wrapYoyo,
            distribute: distribute,
            random: random,
            snap: snap,
            normalize: normalize,
            getUnit: getUnit,
            clamp: clamp,
            splitColor: splitColor,
            toArray: toArray,
            mapRange: mapRange,
            pipe: pipe,
            unitize: unitize,
            interpolate: interpolate,
            shuffle: shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline1.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
            PropTween: PropTween,
            globals: _addGlobal,
            Tween: Tween1,
            Timeline: Timeline1,
            Animation: Animation1,
            getCache: _getCache,
            _removeLinkedListItem: _removeLinkedListItem,
            suppressOverwrites: function suppressOverwrites(value) {
                return _suppressOverwrites = value;
            }
        }
    };
    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
        return _gsap[name] = Tween1[name];
    });
    _ticker.add(Timeline1.updateRoot);
    _quickTween = _gsap.to({
    }, {
        duration: 0
    });
    var _getPluginPropTween = function _getPluginPropTween1(plugin, prop) {
        var pt = plugin._pt;
        while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
        return pt;
    }, _addModifiers = function _addModifiers1(tween, modifiers) {
        var targets = tween._targets, p, i, pt;
        for(p in modifiers){
            i = targets.length;
            while(i--){
                pt = tween._ptLookup[i][p];
                if (pt && (pt = pt.d)) {
                    if (pt._pt) pt = _getPluginPropTween(pt, p);
                    pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                }
            }
        }
    }, _buildModifierPlugin = function _buildModifierPlugin1(name, modifier) {
        return {
            name: name,
            rawVars: 1,
            init: function init(target, vars, tween) {
                tween._onInit = function(tween1) {
                    var temp, p;
                    if (_isString(vars)) {
                        temp = {
                        };
                        _forEachName(vars, function(name1) {
                            return temp[name1] = 1;
                        });
                        vars = temp;
                    }
                    if (modifier) {
                        temp = {
                        };
                        for(p in vars)temp[p] = modifier(vars[p]);
                        vars = temp;
                    }
                    _addModifiers(tween1, vars);
                };
            }
        };
    };
    var gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
            var p, pt;
            for(p in vars){
                pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
                pt && (pt.op = p);
                this._props.push(p);
            }
        }
    }, {
        name: "endArray",
        init: function init(target, value) {
            var i = value.length;
            while(i--)this.add(target, i, target[i] || 0, value[i]);
        }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
    Tween1.version = Timeline1.version = gsap.version = "3.6.0";
    _coreReady = 1;
    if (_windowExists()) _wake();
    var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
    var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists2() {
        return typeof window !== "undefined";
    }, _transformProps = {
    }, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 100000000, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, _renderCSSProp = function _renderCSSProp1(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    }, _renderPropWithEnd = function _renderPropWithEnd1(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning1(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
    }, _renderRoundedCSSProp = function _renderRoundedCSSProp1(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
    }, _renderNonTweeningValue = function _renderNonTweeningValue1(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
    }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd1(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
    }, _setterCSSStyle = function _setterCSSStyle1(target, property, value) {
        return target.style[property] = value;
    }, _setterCSSProp = function _setterCSSProp1(target, property, value) {
        return target.style.setProperty(property, value);
    }, _setterTransform = function _setterTransform1(target, property, value) {
        return target._gsap[property] = value;
    }, _setterScale = function _setterScale1(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
    }, _setterScaleWithRender = function _setterScaleWithRender1(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
    }, _setterTransformWithRender = function _setterTransformWithRender1(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
    }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement1(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e.style ? e : _doc$1.createElement(type);
    }, _getComputedProperty = function _getComputedProperty1(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty1(target, _checkPropPrefix(property) || property, 1) || "";
    }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix1(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i = 5;
        if (property in s && !preferPrefix) return property;
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while((i--) && !(_prefixes[i] + property in s));
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
    }, _initCore = function _initCore1() {
        if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
                style: {
                }
            };
            _tempDivStyler = _createElement("div");
            _transformProp = _checkPropPrefix(_transformProp);
            _transformOriginProp = _transformProp + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _pluginInitted = 1;
        }
    }, _getBBoxHack = function _getBBoxHack1(swapIfPossible) {
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = "block";
        if (swapIfPossible) try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack1;
        } catch (e) {
        }
        else if (this._gsapBBox) bbox = this._gsapBBox();
        if (oldParent) {
            if (oldSibling) oldParent.insertBefore(this, oldSibling);
            else oldParent.appendChild(this);
        }
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
    }, _getAttributeFallbacks = function _getAttributeFallbacks1(target, attributesArray) {
        var i = attributesArray.length;
        while(i--){
            if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
        }
    }, _getBBox = function _getBBox1(target) {
        var bounds;
        try {
            bounds = target.getBBox();
        } catch (error) {
            bounds = _getBBoxHack.call(target, true);
        }
        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, [
                "x",
                "cx",
                "x1"
            ]) || 0,
            y: +_getAttributeFallbacks(target, [
                "y",
                "cy",
                "y1"
            ]) || 0,
            width: 0,
            height: 0
        } : bounds;
    }, _isSVG = function _isSVG1(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    }, _removeProperty = function _removeProperty1(target, property) {
        if (property) {
            var style = target.style;
            if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
            if (style.removeProperty) {
                if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
                style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
            } else style.removeAttribute(property);
        }
    }, _addNonTweeningPT = function _addNonTweeningPT1(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
    }, _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
    }, _convertToUnit = function _convertToUnit1(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit1(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) parent = (target.ownerSVGElement || {
        }).parentNode;
        if (!parent || parent === _doc$1 || !parent.appendChild) parent = _doc$1.body;
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) return _round(curValue / cache.width * amount);
        else {
            (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
            if (horizontal && toPercent) {
                cache = _getCache(parent);
                cache.time = _ticker.time;
                cache.width = parent[measureProperty];
            }
        }
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
    }, _get = function _get1(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
        if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];
            if (~property.indexOf(",")) property = property.split(",")[0];
        }
        if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
            value = target.style[property];
            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
    }, _tweenComplexCSSString = function _tweenComplexCSSString1(target, prop, start, end) {
        if (!start || start === "none") {
            var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
            if (s && s !== start) {
                prop = p;
                start = s;
            } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end === "auto") {
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            target.style[prop] = start;
        }
        a = [
            start,
            end
        ];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
            while(result = _numWithUnitExp.exec(end)){
                endValue = result[0];
                chunk = end.substring(index, result.index);
                if (color) color = (color + 1) % 5;
                else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
                if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                    startNum = parseFloat(startValue) || 0;
                    startUnit = startValue.substr((startNum + "").length);
                    relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                    if (relative) endValue = endValue.substr(2);
                    endNum = parseFloat(endValue);
                    endUnit = endValue.substr((endNum + "").length);
                    index = _numWithUnitExp.lastIndex - endUnit.length;
                    if (!endUnit) {
                        endUnit = endUnit || _config.units[prop] || startUnit;
                        if (index === end.length) {
                            end += endUnit;
                            pt.e += endUnit;
                        }
                    }
                    if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                    pt._pt = {
                        _next: pt._pt,
                        p: chunk || matchIndex === 1 ? chunk : ",",
                        s: startNum,
                        c: relative ? relative * endNum : endNum - startNum,
                        m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                    };
                }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
    }, _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages1(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
            value = x;
            x = y;
            y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
    }, _renderClearProps = function _renderClearProps1(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
            if (props === "all" || props === true) {
                style.cssText = "";
                clearTransforms = 1;
            } else {
                props = props.split(",");
                i = props.length;
                while((--i) > -1){
                    prop = props[i];
                    if (_transformProps[prop]) {
                        clearTransforms = 1;
                        prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                    }
                    _removeProperty(target, prop);
                }
            }
            if (clearTransforms) {
                _removeProperty(target, _transformProp);
                if (cache) {
                    cache.svg && target.removeAttribute("transform");
                    _parseTransform(target, 1);
                    cache.uncache = 1;
                }
            }
        }
    }, _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
                var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                pt.u = endValue;
                pt.pr = -10;
                pt.tween = tween;
                plugin._props.push(property);
                return 1;
            }
        }
    }, _identity2DMatrix = [
        1,
        0,
        0,
        1,
        0,
        0
    ], _rotationalProperties = {
    }, _isNullTransform = function _isNullTransform1(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
    }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray1(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
    }, _getMatrix = function _getMatrix1(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [
                temp.a,
                temp.b,
                temp.c,
                temp.d,
                temp.e,
                temp.f
            ];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;
            if (!parent || !target.offsetParent) {
                addedToDOM = 1;
                nextSibling = target.nextSibling;
                _docElement.appendChild(target);
            }
            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");
            if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
        return force2D && matrix.length > 6 ? [
            matrix[0],
            matrix[1],
            matrix[4],
            matrix[5],
            matrix[12],
            matrix[13]
        ] : matrix;
    }, _applySVGOrigin = function _applySVGOrigin1(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
            xOrigin = x;
            yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else cache.xOffset = cache.yOffset = 0;
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
    }, _parseTransform = function _parseTransform1(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) return cache;
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
            t1 = !cache.uncache && target.getAttribute("data-svg-origin");
            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
            a = matrix[0];
            b = matrix[1];
            c = matrix[2];
            d = matrix[3];
            x = a12 = matrix[4];
            y = a22 = matrix[5];
            if (matrix.length === 6) {
                scaleX = Math.sqrt(a * a + b * b);
                scaleY = Math.sqrt(d * d + c * c);
                rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
                skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));
                if (cache.svg) {
                    x -= xOrigin - (xOrigin * a + yOrigin * c);
                    y -= yOrigin - (xOrigin * b + yOrigin * d);
                }
            } else {
                a32 = matrix[6];
                a42 = matrix[7];
                a13 = matrix[8];
                a23 = matrix[9];
                a33 = matrix[10];
                a43 = matrix[11];
                x = matrix[12];
                y = matrix[13];
                z = matrix[14];
                angle = _atan2(a32, a33);
                rotationX = angle * _RAD2DEG;
                if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    t1 = a12 * cos + a13 * sin;
                    t2 = a22 * cos + a23 * sin;
                    t3 = a32 * cos + a33 * sin;
                    a13 = a12 * -sin + a13 * cos;
                    a23 = a22 * -sin + a23 * cos;
                    a33 = a32 * -sin + a33 * cos;
                    a43 = a42 * -sin + a43 * cos;
                    a12 = t1;
                    a22 = t2;
                    a32 = t3;
                }
                angle = _atan2(-c, a33);
                rotationY = angle * _RAD2DEG;
                if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    t1 = a * cos - a13 * sin;
                    t2 = b * cos - a23 * sin;
                    t3 = c * cos - a33 * sin;
                    a43 = d * sin + a43 * cos;
                    a = t1;
                    b = t2;
                    c = t3;
                }
                angle = _atan2(b, a);
                rotation = angle * _RAD2DEG;
                if (angle) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    t1 = a * cos + b * sin;
                    t2 = a12 * cos + a22 * sin;
                    b = b * cos - a * sin;
                    a22 = a22 * cos - a12 * sin;
                    a = t1;
                    a12 = t2;
                }
                if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                    rotationX = rotation = 0;
                    rotationY = 180 - rotationY;
                }
                scaleX = _round(Math.sqrt(a * a + b * b + c * c));
                scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
                angle = _atan2(a12, a22);
                skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
                perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }
            if (cache.svg) {
                t1 = target.getAttribute("transform");
                cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                t1 && target.setAttribute("transform", t1);
            }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
                scaleX *= -1;
                skewX += rotation <= 0 ? 180 : -180;
                rotation += rotation <= 0 ? 180 : -180;
            } else {
                scaleY *= -1;
                skewX += skewX <= 0 ? 180 : -180;
            }
        }
        cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
    }, _firstTwoOnly = function _firstTwoOnly1(value) {
        return (value = value.split(" "))[0] + " " + value[1];
    }, _addPxTranslate = function _addPxTranslate1(target, start, value) {
        var unit = getUnit(start);
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
    }, _renderNon3DTransforms = function _renderNon3DTransforms1(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
    }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms1(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
        if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
        if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
        if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        target.style[_transformProp] = transforms || "translate(0, 0)";
    }, _renderSVGTransforms = function _renderSVGTransforms1(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
        }
        if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;
            if (skewX) {
                skewY *= _DEG2RAD;
                temp = Math.tan(skewX - skewY);
                temp = Math.sqrt(1 + temp * temp);
                a12 *= temp;
                a22 *= temp;
                if (skewY) {
                    temp = Math.tan(skewY);
                    temp = Math.sqrt(1 + temp * temp);
                    a11 *= temp;
                    a21 *= temp;
                }
            }
            a11 = _round(a11);
            a21 = _round(a21);
            a12 = _round(a12);
            a22 = _round(a22);
        } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x, "px");
            ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round(tx + xPercent / 100 * temp.width);
            ty = _round(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
    }, _addRotationalPropTween = function _addRotationalPropTween1(plugin, target, property, startNum, endValue, relative) {
        var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
            direction = endValue.split("_")[1];
            if (direction === "short") {
                change %= cap;
                if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
            }
            if (direction === "cw" && change < 0) change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
    }, _addRawTransformPTs = function _addRawTransformPTs1(plugin, transforms, target) {
        var style = _tempDivStyler.style, startCache = target._gsap, exclude = "perspective,force3D,transformOrigin,svgOrigin", endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;";
        style[_transformProp] = transforms;
        _doc$1.body.appendChild(_tempDivStyler);
        endCache = _parseTransform(_tempDivStyler, 1);
        for(p in _transformProps){
            startValue = startCache[p];
            endValue = endCache[p];
            if (startValue !== endValue && exclude.indexOf(p) < 0) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
                startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                endNum = parseFloat(endValue);
                plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
                plugin._pt.u = endUnit || 0;
                plugin._props.push(p);
            }
        }
        _doc$1.body.removeChild(_tempDivStyler);
    };
    _forEachName("padding,margin,Width,Radius", function(name, index) {
        var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
            t,
            r,
            b,
            l
        ] : [
            t + l,
            t + r,
            b + r,
            b + l
        ]).map(function(side) {
            return index < 2 ? name + side : "border" + side + name;
        });
        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
            var a, vars;
            if (arguments.length < 4) {
                a = props.map(function(prop) {
                    return _get(plugin, prop, property);
                });
                vars = a.join(" ");
                return vars.split(a[0]).length === 5 ? a[0] : vars;
            }
            a = (endValue + "").split(" ");
            vars = {
            };
            props.forEach(function(prop, i) {
                return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
            });
            plugin.init(target, vars, tween);
        };
    });
    var CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
            return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
            _pluginInitted || _initCore();
            for(p in vars){
                if (p === "autoRound") continue;
                endValue = vars[p];
                if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
                type = typeof endValue;
                specialProp = _specialProps[p];
                if (type === "function") {
                    endValue = endValue.call(tween, index, target, targets);
                    type = typeof endValue;
                }
                if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
                if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
                else if (p.substr(0, 2) === "--") {
                    startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                    endValue += "";
                    startUnit = getUnit(startValue);
                    endUnit = getUnit(endValue);
                    endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                    this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                } else if (type !== "undefined") {
                    if (startAt && p in startAt) {
                        startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                        p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
                        (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
                    } else startValue = _get(target, p);
                    startNum = parseFloat(startValue);
                    relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                    relative && (endValue = endValue.substr(2));
                    endNum = parseFloat(endValue);
                    if (p in _propertyAliases) {
                        if (p === "autoAlpha") {
                            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
                            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                        }
                        if (p !== "scale" && p !== "transform") {
                            p = _propertyAliases[p];
                            ~p.indexOf(",") && (p = p.split(",")[0]);
                        }
                    }
                    isTransformRelated = p in _transformProps;
                    if (isTransformRelated) {
                        if (!transformPropTween) {
                            cache = target._gsap;
                            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                            smooth = vars.smoothOrigin !== false && cache.smooth;
                            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                            transformPropTween.dep = 1;
                        }
                        if (p === "scale") {
                            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                            props.push("scaleY", p);
                            p += "X";
                        } else if (p === "transformOrigin") {
                            endValue = _convertKeywordsToPercentages(endValue);
                            if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                            else {
                                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                            }
                            continue;
                        } else if (p === "svgOrigin") {
                            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                            continue;
                        } else if (p in _rotationalProperties) {
                            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                            continue;
                        } else if (p === "smoothOrigin") {
                            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                            continue;
                        } else if (p === "force3D") {
                            cache[p] = endValue;
                            continue;
                        } else if (p === "transform") {
                            _addRawTransformPTs(this, endValue, target);
                            continue;
                        }
                    } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                    if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                        startUnit = (startValue + "").substr((startNum + "").length);
                        endNum || (endNum = 0);
                        endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                        startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                        this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                        this._pt.u = endUnit || 0;
                        if (startUnit !== endUnit) {
                            this._pt.b = startValue;
                            this._pt.r = _renderCSSPropWithBeginning;
                        }
                    } else if (!(p in style)) {
                        if (p in target) this.add(target, p, target[p], endValue, index, targets);
                        else {
                            _missingPlugin(p, endValue);
                            continue;
                        }
                    } else _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                    props.push(p);
                }
            }
            hasPriority && _sortPropTweensByPriority(this);
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
            var p = _propertyAliases[property];
            p && p.indexOf(",") < 0 && (property = p);
            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {
            }, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
            _removeProperty: _removeProperty,
            _getMatrix: _getMatrix
        }
    };
    gsap.utils.checkPrefix = _checkPropPrefix;
    (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
            _transformProps[name] = 1;
        });
        _forEachName(rotation, function(name) {
            _config.units[name] = "deg";
            _rotationalProperties[name] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name) {
            var split = name.split(":");
            _propertyAliases[split[1]] = all[split[0]];
        });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
        _config.units[name] = "px";
    });
    gsap.registerPlugin(CSSPlugin);
    var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, TweenMaxWithCSS = gsapWithCSS.core.Tween;
    exports.Back = Back;
    exports.Bounce = Bounce;
    exports.CSSPlugin = CSSPlugin;
    exports.Circ = Circ;
    exports.Cubic = Cubic;
    exports.Elastic = Elastic;
    exports.Expo = Expo;
    exports.Linear = Linear;
    exports.Power0 = Power0;
    exports.Power1 = Power1;
    exports.Power2 = Power2;
    exports.Power3 = Power3;
    exports.Power4 = Power4;
    exports.Quad = Quad;
    exports.Quart = Quart;
    exports.Quint = Quint;
    exports.Sine = Sine;
    exports.SteppedEase = SteppedEase;
    exports.Strong = Strong;
    exports.TimelineLite = Timeline1;
    exports.TimelineMax = Timeline1;
    exports.TweenLite = Tween1;
    exports.TweenMax = TweenMaxWithCSS;
    exports.default = gsapWithCSS;
    exports.gsap = gsapWithCSS;
    if (typeof window === 'undefined' || window !== exports) Object.defineProperty(exports, '__esModule', {
        value: true
    });
    else delete window.default;
});

},{}],"6IQWL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
class Utils {
    isMobile() {
        let viewportWidth = window.innerWidth;
        if (viewportWidth <= 768) return true;
        else return false;
    }
    pageIntroAnim() {
        const pageContent = document.querySelector('.page-content');
        if (!pageContent) return;
        _gsapDefault.default.fromTo(pageContent, {
            opacity: 0,
            y: -12
        }, {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 0.3
        });
    }
}
exports.default = new Utils();

},{"gsap":"loSVs","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"aP7um":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
class FourOFourView {
    init() {
        console.log('FourOFourView.init');
        document.title = '404 File not found';
        this.render();
    }
    render() {
        const template = _litHtml.html`    \n      <div class="calign">\n        <h1>Opps!</h1>\n        <p>Sorry, we couldn't find that.</p>\n      </div>\n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new FourOFourView();

},{"./../../App":"4GIt1","lit-html":"5JY0r","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"fJJsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _userAPI = require("./../../UserAPI");
var _userAPIDefault = parcelHelpers.interopDefault(_userAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class GuideView {
    init() {
        document.title = 'Guide';
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.updateCurrentUser();
    }
    async updateCurrentUser() {
        try {
            const updatedUser = await _userAPIDefault.default.updateUser(_authDefault.default.currentUser._id, {
                newUser: false
            }, 'json');
            console.log('user updated!');
            console.log(updatedUser);
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Guide" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">        \n          <h2 class="brand-color">Welcome ${_authDefault.default.currentUser.firstName}!</h2>\n          <p >Thank you for signing up with Creahaven! \n          <br>\n          Let's get you started on how to make the most of your Creahaven account!</p>\n\n          <div class="guide-step">\n            <h3>Updating your profile page</h3>\n            <img src="/images/Creahaven-tutorials_editProfile.png">\n            <p>1. Select your avatar icon on the header, then select the profile button.\n              <br>\n              2. Select the update profile button, or reach it directly through the edit profile button via the avatar icon. Then, fill up your particulars in the resultant form.\n              <br>\n              3. Once you are satisfied, press the save changes button to log in the changes.\n              <br>\n              <br>\n              Well done! With that, you have updated your profile accordingly and \n              can be found by potential clients and collaborators should they require assistance in bringing their visions to life!. \n            </p>\n          </div>\n\n          ${_authDefault.default.currentUser.accessLevel == 1 ? _litHtml.html`\n            <div class="guide-step">\n              <h3>Adding a new portfolio piece</h3>\n              <img src="/images/Creahaven-tutorials_newPortfolio.png">\n              <p>\n                  1. Select your avatar icon on the header, then select the "User Profile" button.\n                  <br>\n                  2. Scroll down and select the "Post a new Portfolio piece!" button.\n                  <br> \n                  3. At the add portfolio screen, Fill up the details  accordingly and press the "Submit" button to proceed.\n                  <br> \n                  4. Repeat the steps as needed. Then press any of the other buttons to leave the page. \n                  <br>\n                  <br>\n                  With that, You've posted your first portfolio piece to the Creahaven website. Now, clients and collaborators will be able to see if you match what they seek for their projects!\n              </p>\n            </div>\n          ` : _litHtml.html``}\n\n          ${_authDefault.default.currentUser.accessLevel == 1 ? _litHtml.html`\n            <div class="guide-step">\n              <h3>Adding a new Collaboration invitation</h3>\n              <img src="/images/Creahaven-tutorials_newCollaboration.png">\n              <p>\n                  1. Select your avatar icon on the header, then select the "User Profile" button.\n                  <br>\n                  2. Scroll down and select the "Edit Portfolio" button.\n                  <br> \n                  3. At the add portfolio screen, Fill up the details  accordingly and press the "Confirm" button to proceed.\n                  <br> \n                  4. Click the "Add Portfolio" button to bring up the portfolio submission form again. Repeat the steps as needed.\n                  <br>\n                  <br>\n                  Well done! With that, you've entered in your first portfolio piece. \n                  <br>\n                  Repeat the steps indicated here to finish adding all your portfolio pieces to your account.\n              </p>\n            </div>\n          ` : _litHtml.html``}\n          \n          ${_authDefault.default.currentUser.accessLevel == 2 ? _litHtml.html`\n            <div class="guide-step">\n              <h3>Adding a new Job vacancy</h3>\n              <img src="/images/Creahaven-tutorials_jobVacancies.png">\n              <p>\n                  1. Select your avatar icon on the header, then select the "User Profile" button.\n                  <br>\n                  2. Scroll down and select the "Post a new Job vacancy posting!" button.\n                  <br> \n                  3. At the New Job vacancy screen, Fill up the details  accordingly and press the "Post job" button to proceed.\n                  <br> \n                  4. Repeat the steps as needed, then return to the job vacancy page via the "Find a job vacancy" button to verify that the post was submitted if necessary.\n                  <br>\n                  <br>\n                  Well done! With that, you've posted your first job vacancy posting. \n                  <br>\n                  Remember to confirm that you've posted the right contact details so the appropriate talents can contact you!\n              </p>\n            </div>\n          ` : _litHtml.html``}\n          \n          ${_authDefault.default.currentUser.accessLevel == 2 ? _litHtml.html`\n            <div class="guide-step">\n              <h4>Adding a new Project for bidding</h4>\n              <img src="/images/Creahaven-tutorials_newProject.png">\n              <P>\n                1. Select your avatar icon on the header, then select the "User Profile" button.\n                  <br>\n                  2. Scroll down and select the "Post a new Project posting!" button.\n                  <br> \n                  3. At the project posting screen, Fill up the details  accordingly and press the "Submit project" button to proceed.\n                  <br> \n                  4. Repeat the steps as needed, then return to the projects for bidding page via the "Find a Project for bidding!" to verify that the project post was submitted if necessary.\n                  <br>\n                  <br>\n                  Well done! With that, you've entered in your first project posting. \n                  <br>\n                  Remember to confirm that you've posted the right contact details so the appropriate talents can find you to submit their proposals!\n              </P>\n            </div>\n          ` : _litHtml.html``}\n          \n          <div class="guide-step">\n            <h4>Adding a user to favourites</h4>\n            <img src="/images/Creahaven-tutorials_addCreative.png">\n            <P>\n             After you have found a talent who has the greatest potential to meet your requirements, it is natural that you'll want to save a record of that user so you can contact them (again) later.\n             <br>\n             Here's how.\n             <br>\n              1. Return to the creatives page.(found via the creatives button or throught 1) the hamburger menu then 2) Click the Find a creative! link.)\n              <br>\n              2, Push the heart button to add that creative to your favourite creatives page (Found via the profile pic button > Favourite Creatives button).\n              <br>\n              <br>\n              Well done! you've added that creative to your favourites. Wishing you a happy partnership together with that creative!\n            </P>\n          </div>\n\n          <sl-button type="primary" @click=${()=>_router.gotoRoute('/')
        }>Okay got it!</sl-button>\n        </div>\n      </div>\n            \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new GuideView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../UserAPI":"lWaG0","../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"lWaG0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _auth = require("./Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class UserAPI {
    async updateUser(userId, userData, dataType = 'form') {
        // validate
        if (!userId || !userData) return;
        let responseHeader;
        // form data
        if (dataType == 'form') // fetch response header normal (form data)
        responseHeader = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            },
            body: userData
        };
        else if (dataType == 'json') responseHeader = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        };
        // make fetch request to backend
        const response = await fetch(`${_appDefault.default.apiBase}/user/${userId}`, responseHeader);
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem updating user');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async getCreatives() {
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/creative`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting creatives');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async getUser(userId) {
        // validate
        if (!userId) return;
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/user/${userId}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting user');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async addFavCreative(creativeId) {
        // validate
        if (!creativeId) return;
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/user/addFavCreative`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                creativeId: creativeId
            })
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem adding creative to favourites');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data 
        return data;
    }
}
exports.default = new UserAPI();

},{"./App":"4GIt1","./Auth":"68fHK","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"9fF8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("./../../Router");
var _auth = require("./../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("./../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
class SignInView {
    init() {
        console.log('SignInView.init');
        document.title = 'Sign In';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    signInSubmitHandler(e) {
        e.preventDefault();
        const formData = e.detail.formData;
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        // sign in using Auth    
        _authDefault.default.signIn(formData, ()=>{
            submitBtn.removeAttribute('loading');
        });
    }
    render() {
        const template = _litHtml.html`      \n      <div class="page-body">\n        <div class="page-content page-centered">\n          <div class="signinup-box">\n            <img class="signinup-logo" src="/images/creahaven-logo.svg">          \n            <sl-form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>          \n              <div class="input-group">\n                <sl-input name="email" type="email" placeholder="Email" required></sl-input>\n              </div>\n              <div class="input-group">\n                <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>\n              </div>\n              <sl-button class="submit-btn" type="primary" submit style="width: 100%;">Sign In</sl-button>\n            </sl-form>\n            <p>No Account? <sl-button class="submit-btn" type="info" style="width: 100%;" @click=${()=>_router.gotoRoute('/signup')
        }>Sign Up</sl-button></p>\n          </div>\n        </div>\n      </div>\n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new SignInView();

},{"./../../App":"4GIt1","lit-html":"5JY0r","./../../Router":"ll818","./../../Auth":"68fHK","./../../Utils":"6IQWL","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"3QGrI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _auth = require("./../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _litHtml = require("lit-html");
var _router = require("./../../Router");
var _utils = require("./../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
class SignUpView {
    init() {
        console.log('SignUpView.init');
        document.title = 'Sign In';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    signUpSubmitHandler(e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        const formData = e.detail.formData;
        // sign up using Auth
        _authDefault.default.signUp(formData, ()=>{
            submitBtn.removeAttribute('loading');
        });
    }
    render() {
        const template = _litHtml.html`   \n    <div class="page-body">\n      <div class="page-content page-centered">      \n          <div class="signinup-box">\n            <img class="signinup-logo" src="/images/creahaven-logo.svg">\n              <h1>Sign Up</h1>\n              <sl-form class="form-signup" @sl-submit=${this.signUpSubmitHandler}>\n                <div class="input-group">\n                  <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>\n                </div>\n                <div class="input-group">\n                  <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>\n                </div>\n                <div class="input-group">\n                  <sl-input name="email" type="email" placeholder="Email" required></sl-input>\n                </div>\n                <div class="input-group">\n                  <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>\n                </div> \n                <div class="input-group">\n                  <sl-select name="accessLevel" placeholder="I am a...">\n                    <sl-menu-item value="1">Creative</sl-menu-item>\n                    <sl-menu-item value="2">Client/ Customer</sl-menu-item>\n                  </sl-select>\n                </div>       \n                <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>\n              </sl-form>\n              <p>Have an account? <a href="/signin" @click=${_router.anchorRoute}>Sign In</a></p>\n          </div>\n        </div>\n    </div>   \n      \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new SignUpView();

},{"./../../App":"4GIt1","./../../Auth":"68fHK","lit-html":"5JY0r","./../../Router":"ll818","./../../Utils":"6IQWL","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"biJ86":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("./../../Router");
var _auth = require("./../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("./../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _portfolioAPI = require("./../../PortfolioAPI");
var _portfolioAPIDefault = parcelHelpers.interopDefault(_portfolioAPI);
var _toast = require("./../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class ProfileView {
    init() {
        console.log('ProfileView.init');
        document.title = 'Profile';
        this.userPortfolio = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getUserPortfolio();
    }
    async getUserPortfolio() {
        try {
            this.userPortfolio = await _portfolioAPIDefault.default.getUserPortfolio(_authDefault.default.currentUser._id);
            console.log(this.userPortfolio);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Profile" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">\n          <div class="profile-grid">\n            <sl-card class="profile-section">\n              ${_authDefault.default.currentUser && _authDefault.default.currentUser.avatar ? _litHtml.html`\n                <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${_authDefault.default.currentUser && _authDefault.default.currentUser.avatar ? `${_appDefault.default.apiBase}/images/${_authDefault.default.currentUser.avatar}` : ''}></sl-avatar>\n              ` : _litHtml.html`\n              <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>\n              `}\n              ${_authDefault.default.currentUser.displayName ? _litHtml.html`\n                <h2>${_authDefault.default.currentUser.firstName} ${_authDefault.default.currentUser.lastName}</h2>\n              ` : _litHtml.html`\n                <h2>${_authDefault.default.currentUser.displayName}</h2>\n              `}\n              \n              \n              <p>${_authDefault.default.currentUser.email}</p>\n              \n              <p>Updated: ${_momentDefault.default(_authDefault.default.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>\n\n              ${_authDefault.default.currentUser.bio ? _litHtml.html`\n                <h3>Bio</h3>\n                <p>${_authDefault.default.currentUser.bio}</p>\n              ` : _litHtml.html``}\n              ${_authDefault.default.currentUser.website ? _litHtml.html`\n                <p><sl-icon name = "link-45deg"></sl-icon> <a href="${_authDefault.default.currentUser.website}" target="_blank">${_authDefault.default.currentUser.website}</a> </p>\n              ` : _litHtml.html``}\n\n              <div id="profileSocialsGrid">\n                ${_authDefault.default.currentUser.facebook ? _litHtml.html`\n                  <sl-button type="default" size="small" circle href="${_authDefault.default.currentUser.facebook}" target="_blank"><sl-icon name="facebook"></sl-icon></sl-button>\n                ` : _litHtml.html``}\n                ${_authDefault.default.currentUser.twitter ? _litHtml.html`\n                  <sl-button type="default" size="small" circle href="${_authDefault.default.currentUser.twitter}" target="_blank"><sl-icon name="twitter"></sl-icon></sl-button>\n                ` : _litHtml.html``}\n                ${_authDefault.default.currentUser.instagram ? _litHtml.html`\n                  <sl-button type="default" size="small" circle href=" ${_authDefault.default.currentUser.instagram}" target="_blank"><sl-icon name="instagram"></sl-icon></sl-button>\n                ` : _litHtml.html``}\n                ${_authDefault.default.currentUser.youtube ? _litHtml.html`\n                  <sl-button type="default" size="small" circle href="${_authDefault.default.currentUser.youtube}" target="_blank"><sl-icon name="youtube"></sl-icon></sl-button>\n                ` : _litHtml.html``}\n              </div>\n              \n              <div slot="footer">\n                <sl-button type="info"  @click=${()=>_router.gotoRoute('/editProfile')
        }>Edit Profile</sl-button>\n              </div>\n              \n            </sl-card> \n\n            \n            \n          </div>  \n          \n        </div>\n      </div>      \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new ProfileView();

},{"./../../App":"4GIt1","lit-html":"5JY0r","./../../Router":"ll818","./../../Auth":"68fHK","./../../Utils":"6IQWL","moment":"dwxeL","./../../PortfolioAPI":"5aiIb","./../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"dwxeL":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
})(this, function() {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(obj).length === 0;
        else {
            var k;
            for(k in obj){
                if (hasOwnProp(obj, k)) return false;
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i;
        for(i = 0; i < arr.length; ++i)res.push(fn(arr[i], i));
        return res;
    }
    function extend(a, b) {
        for(var i in b)if (hasOwnProp(b, i)) a[i] = b[i];
        if (hasOwnProp(b, 'toString')) a.toString = b.toString;
        if (hasOwnProp(b, 'valueOf')) a.valueOf = b.valueOf;
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) m._pf = defaultParsingFlags();
        return m._pf;
    }
    var some;
    if (Array.prototype.some) some = Array.prototype.some;
    else some = function(fun) {
        var t = Object(this), len = t.length >>> 0, i;
        for(i = 0; i < len; i++){
            if (i in t && fun.call(this, t[i], i, t)) return true;
        }
        return false;
    };
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(m)) m._isValid = isNowValid;
            else return isNowValid;
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) extend(getParsingFlags(m), flags);
        else getParsingFlags(m).userInvalidated = true;
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) to._isAMomentObject = from._isAMomentObject;
        if (!isUndefined(from._i)) to._i = from._i;
        if (!isUndefined(from._f)) to._f = from._f;
        if (!isUndefined(from._l)) to._l = from._l;
        if (!isUndefined(from._strict)) to._strict = from._strict;
        if (!isUndefined(from._tzm)) to._tzm = from._tzm;
        if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
        if (!isUndefined(from._offset)) to._offset = from._offset;
        if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
        if (!isUndefined(from._locale)) to._locale = from._locale;
        if (momentProperties.length > 0) for(i = 0; i < momentProperties.length; i++){
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) to[prop] = val;
        }
        return to;
    }
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) this._d = new Date(NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) console.warn('Deprecation warning: ' + msg);
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) hooks.deprecationHandler(null, msg);
            if (firstTime) {
                var args = [], arg, i, key;
                for(i = 0; i < arguments.length; i++){
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for(key in arguments[0])if (hasOwnProp(arguments[0], key)) arg += key + ': ' + arguments[0][key] + ', ';
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else arg = arguments[i];
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {
    };
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) hooks.deprecationHandler(name, msg);
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for(i in config)if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) this[i] = prop;
            else this['_' + i] = prop;
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({
        }, parentConfig), prop;
        for(prop in childConfig)if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {
                };
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) res[prop] = childConfig[prop];
            else delete res[prop];
        }
        for(prop in parentConfig)if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) // make sure changes to properties don't modify parent config
        res[prop] = extend({
        }, res[prop]);
        return res;
    }
    function Locale(config) {
        if (config != null) this.set(config);
    }
    var keys;
    if (Object.keys) keys = Object.keys;
    else keys = function(obj) {
        var i, res = [];
        for(i in obj)if (hasOwnProp(obj, i)) res.push(i);
        return res;
    };
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {
    }, formatTokenFunctions = {
    };
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') func = function() {
            return this[callback]();
        };
        if (token) formatTokenFunctions[token] = func;
        if (padded) formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
        if (ordinal) formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, '');
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for(i = 0, length = array.length; i < length; i++)if (formatTokenFunctions[array[i]]) array[i] = formatTokenFunctions[array[i]];
        else array[i] = removeFormattingTokens(array[i]);
        return function(mom) {
            var output = '', i1;
            for(i1 = 0; i1 < length; i1++)output += isFunction(array[i1]) ? array[i1].call(mom, format) : array[i1];
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) return m.localeData().invalidDate();
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while(i >= 0 && localFormattingTokens.test(format)){
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) return format;
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') return tok.slice(1);
            return tok;
        }).join('');
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d', defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {
    };
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {
        }, normalizedProp, prop;
        for(prop in inputObject)if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
        }
        return normalizedInput;
    }
    var priorities = {
    };
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for(u in unitsObj)if (hasOwnProp(unitsObj, u)) units.push({
            unit: u,
            priority: priorities[u]
        });
        units.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
        if (number < 0) // -0 -> 0
        return Math.ceil(number) || 0;
        else return Math.floor(number);
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) value = absFloor(coercedNumber);
        return value;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else return get(this, unit);
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) return this[units]();
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i;
            for(i = 0; i < prioritized.length; i++)this[prioritized[i].unit](units[prioritized[i].unit]);
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units](value);
        }
        return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {
    };
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens = {
    };
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') token = [
            token
        ];
        if (isNumber(callback)) func = function(input, array) {
            array[callback] = toInt(input);
        };
        for(i = 0; i < token.length; i++)tokens[token[i]] = func;
    }
    function addWeekParseToken(token, callback) {
        addParseToken(token, function(input, array, config, token1) {
            config._w = config._w || {
            };
            callback(input, config._w, config, token1);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) tokens[token](input, config._a, config, token);
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
    else indexOf = function(o) {
        // I know
        var i;
        for(i = 0; i < this.length; ++i){
            if (this[i] === o) return i;
        }
        return -1;
    };
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) return NaN;
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    // FORMATTING
    addFormatToken('M', [
        'MM',
        2
    ], 'Mo', function() {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        'M',
        'MM'
    ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        'MMM',
        'MMMM'
    ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) array[MONTH] = month;
        else getParsingFlags(config).invalidMonth = input;
    });
    // LOCALES
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m, format) {
        if (!m) return isArray(this._months) ? this._months : this._months['standalone'];
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    function localeMonthsShort(m, format) {
        if (!m) return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for(i = 0; i < 12; ++i){
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) return i;
            else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) return i;
            else if (!strict && this._monthsParse[i].test(monthName)) return i;
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) // No op
        return mom;
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) value = toInt(value);
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else return get(this, 'Month');
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) this._monthsShortRegex = defaultMonthsShortRegex;
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsStrictRegex;
            else return this._monthsRegex;
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) this._monthsRegex = defaultMonthsRegex;
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for(i = 0; i < 12; i++){
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for(i = 0; i < 24; i++)mixedPieces[i] = regexEscape(mixedPieces[i]);
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken('Y', 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });
    addFormatToken(0, [
        'YY',
        2
    ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [
        'YYYY',
        4
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYY',
        5
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYYY',
        6,
        true
    ], 0, 'year');
    // ALIASES
    addUnitAlias('year', 'y');
    // PRIORITIES
    addUnitPriority('year', 1);
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken([
        'YYYYY',
        'YYYYYY'
    ], YEAR);
    addParseToken('YYYY', function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) date.setFullYear(y);
        } else date = new Date(y, m, d, h, M, s, ms);
        return date;
    }
    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
        } else date = new Date(Date.UTC.apply(null, arguments));
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken('w', [
        'ww',
        2
    ], 'wo', 'week');
    addFormatToken('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek');
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken([
        'w',
        'ww',
        'W',
        'WW'
    ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    // FORMATTING
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        'dd',
        'ddd',
        'dddd'
    ], function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) week.d = weekday;
        else getParsingFlags(config).invalidWeekday = input;
    });
    addWeekParseToken([
        'd',
        'e',
        'E'
    ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') return input;
        if (!isNaN(input)) return parseInt(input, 10);
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') return input;
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') return locale.weekdaysParse(input) % 7 || 7;
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }
    function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for(i = 0; i < 7; ++i){
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) return i;
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) return i;
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else return day;
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else return this.day() || 7;
    }
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) this._weekdaysRegex = defaultWeekdaysRegex;
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', [
        'HH',
        2
    ], 0, 'hour');
    addFormatToken('h', [
        'hh',
        2
    ], 0, hFormat);
    addFormatToken('k', [
        'kk',
        2
    ], 0, kFormat);
    addFormatToken('hmm', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken([
        'H',
        'HH'
    ], HOUR);
    addParseToken([
        'k',
        'kk'
    ], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        'a',
        'A'
    ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        'h',
        'hh'
    ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) return isLower ? 'pm' : 'PM';
        else return isLower ? 'am' : 'AM';
    }
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {
    }, localeFamilies = {
    }, globalLocale;
    function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for(i = 0; i < minl; i += 1){
            if (arr1[i] !== arr2[i]) return i;
        }
        return minl;
    }
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while(i < names.length){
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while(j > 0){
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) return locale;
                if (next && next.length >= j && commonPrefix(split, next) >= j - 1) break;
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (locales[name] === undefined && typeof module !== 'undefined' && module && module.exports) try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) data = getLocale(key);
            else data = defineLocale(key, values);
            if (data) // moment.duration._locale = moment._locale = data;
            globalLocale = data;
            else if (typeof console !== 'undefined' && console.warn) //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) parentConfig = locales[config.parentLocale]._config;
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) parentConfig = locale._config;
                    else {
                        if (!localeFamilies[config.parentLocale]) localeFamilies[config.parentLocale] = [];
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
            else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
            } else if (locales[name] != null) delete locales[name];
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
        if (!key) return globalLocale;
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) return locale;
            key = [
                key
            ];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) overflow = DATE;
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) overflow = WEEK;
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) overflow = WEEKDAY;
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        [
            'YYYYYY-MM-DD',
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            'YYYY-MM-DD',
            /\d{4}-\d\d-\d\d/
        ],
        [
            'GGGG-[W]WW-E',
            /\d{4}-W\d\d-\d/
        ],
        [
            'GGGG-[W]WW',
            /\d{4}-W\d\d/,
            false
        ],
        [
            'YYYY-DDD',
            /\d{4}-\d{3}/
        ],
        [
            'YYYY-MM',
            /\d{4}-\d\d/,
            false
        ],
        [
            'YYYYYYMMDD',
            /[+-]\d{10}/
        ],
        [
            'YYYYMMDD',
            /\d{8}/
        ],
        [
            'GGGG[W]WWE',
            /\d{4}W\d{3}/
        ],
        [
            'GGGG[W]WW',
            /\d{4}W\d{2}/,
            false
        ],
        [
            'YYYYDDD',
            /\d{7}/
        ],
        [
            'YYYYMM',
            /\d{6}/,
            false
        ],
        [
            'YYYY',
            /\d{4}/,
            false
        ], 
    ], // iso time formats and regexes
    isoTimes = [
        [
            'HH:mm:ss.SSSS',
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            'HH:mm:ss,SSSS',
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            'HH:mm:ss',
            /\d\d:\d\d:\d\d/
        ],
        [
            'HH:mm',
            /\d\d:\d\d/
        ],
        [
            'HHmmss.SSSS',
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            'HHmmss,SSSS',
            /\d\d\d\d\d\d,\d+/
        ],
        [
            'HHmmss',
            /\d\d\d\d\d\d/
        ],
        [
            'HHmm',
            /\d\d\d\d/
        ],
        [
            'HH',
            /\d\d/
        ], 
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for(i = 0, l = isoDates.length; i < l; i++)if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for(i = 0, l = isoTimes.length; i < l; i++)if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = 'Z';
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else config._isValid = false;
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10), 
        ];
        if (secondStr) result.push(parseInt(secondStr, 10));
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) return 2000 + year;
        else if (year <= 999) return 1900 + year;
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) return obsOffsets[obsOffset];
        else if (militaryOffset) // the only allowed military tz is Z
        return 0;
        else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) return;
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else config._isValid = false;
    }
    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        configFromRFC2822(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        if (config._strict) config._isValid = false;
        else // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) return a;
        if (b != null) return b;
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(), 
        ];
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) return;
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) dayOfYearFromWeekInfo(config);
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) getParsingFlags(config)._overflowDayOfYear = true;
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for(i = 0; i < 3 && config._a[i] == null; ++i)config._a[i] = input[i] = currentDate[i];
        // Zero out whatever was not defaulted, including time
        for(; i < 7; i++)config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        if (config._nextDay) config._a[HOUR] = 24;
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) getParsingFlags(config).weekdayMismatch = true;
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) weekdayOverflow = true;
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
            } else // default to beginning of week
            weekday = dow;
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) getParsingFlags(config)._overflowWeeks = true;
        else if (weekdayOverflow != null) getParsingFlags(config)._overflowWeekday = true;
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {
    };
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {
    };
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i, i, parsedInput, tokens1, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
        tokens1 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for(i = 0; i < tokens1.length; i++){
            token = tokens1[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) getParsingFlags(config).unusedTokens.push(token);
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) getParsingFlags(config).bigHour = undefined;
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem1) {
        var isPm;
        if (meridiem1 == null) // nothing to do
        return hour;
        if (locale.meridiemHour != null) return locale.meridiemHour(hour, meridiem1);
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem1);
            if (isPm && hour < 12) hour += 12;
            if (!isPm && hour === 12) hour = 0;
            return hour;
        } else // this is not supposed to happen
        return hour;
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for(i = 0; i < config._f.length; i++){
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({
            }, config);
            if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) validFormatFound = true;
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
                if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) bestFormatIsValid = true;
                }
            } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) return;
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function(obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === '') return createInvalid({
            nullInput: true
        });
        if (typeof input === 'string') config._i = input = config._locale.preparse(input);
        if (isMoment(input)) return new Moment(checkOverflow(input));
        else if (isDate(input)) config._d = input;
        else if (isArray(format)) configFromStringAndArray(config);
        else if (format) configFromStringAndFormat(config);
        else configFromInput(config);
        if (!isValid(config)) config._d = null;
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) config._d = new Date(hooks.now());
        else if (isDate(input)) config._d = new Date(input.valueOf());
        else if (typeof input === 'string') configFromString(config);
        else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) configFromObject(config);
        else if (isNumber(input)) // from milliseconds
        config._d = new Date(input);
        else hooks.createFromInputFallback(config);
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {
        };
        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) input = undefined;
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other < this ? this : other;
        else return createInvalid();
    }), prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other > this ? this : other;
        else return createInvalid();
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
        if (!moments.length) return createLocal();
        res = moments[0];
        for(i = 1; i < moments.length; ++i)if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now = function() {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond', 
    ];
    function isDurationValid(m) {
        var key, unitHasDecimal = false, i;
        for(key in m){
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) return false;
        }
        for(i = 0; i < ordering.length; ++i)if (m[ordering[i]]) {
            if (unitHasDecimal) return false; // only allow non-integers for smallest unit
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) unitHasDecimal = true;
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;
        this._data = {
        };
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) return Math.round(-1 * number) * -1;
        else return Math.round(number);
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for(i = 0; i < len; i++)if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) diffs++;
        return diffs + lengthDiff;
    }
    // FORMATTING
    function offset(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset1 = this.utcOffset(), sign = '+';
            if (offset1 < 0) {
                offset1 = -offset1;
                sign = '-';
            }
            return sign + zeroFill(~~(offset1 / 60), 2) + separator + zeroFill(~~offset1 % 60, 2);
        });
    }
    offset('Z', ':');
    offset('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken([
        'Z',
        'ZZ'
    ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher), chunk, parts, minutes;
        if (matches === null) return null;
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || [
            '-',
            0,
            0
        ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else return createLocal(input).local();
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {
    };
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset1 = this._offset || 0, localAdjust;
        if (!this.isValid()) return input != null ? this : NaN;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
            } else if (Math.abs(input) < 16 && !keepMinutes) input = input * 60;
            if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) this.add(localAdjust, 'm');
            if (offset1 !== input) {
                if (!keepLocalTime || this._changeInProgress) addSubtract(this, createDuration(input - offset1, 'm'), 1, false);
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else return this._isUTC ? offset1 : getDateOffset(this);
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') input = -input;
            this.utcOffset(input, keepLocalTime);
            return this;
        } else return -this.utcOffset();
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) this.subtract(getDateOffset(this), 'm');
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) this.utcOffset(this._tzm, false, true);
        else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) this.utcOffset(tZone);
            else this.utcOffset(0, true);
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) return false;
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
        var c = {
        }, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else this._isDSTShifted = false;
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
        else if (isNumber(input) || !isNaN(+input)) {
            duration = {
            };
            if (key) duration[key] = +input;
            else duration.milliseconds = +input;
        } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (match = isoRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) // checks for null or undefined
        duration = {
        };
        else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {
            };
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) ret._locale = input._locale;
        if (isDuration(input) && hasOwnProp(input, '_isValid')) ret._isValid = input._isValid;
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) --res.months;
        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) return {
            milliseconds: 0,
            months: 0
        };
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) res = positiveMomentsDifference(base, other);
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) // No op
        return;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) setMonth(mom, get(mom, 'Month') + months * isAdding);
        if (days) set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        if (milliseconds) mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        if (updateOffset) hooks.updateOffset(mom, days || months);
    }
    var add = createAdder(1, 'add'), subtract = createAdder(-1, 'subtract');
    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }
    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }
    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
        }).length === 0;
        return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now1) {
        var diff = myMoment.diff(now1, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now1 = time || createLocal(), sod = cloneWithOffset(now1, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse', output = formats && (isFunction(formats[format]) ? formats[format].call(this, now1) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now1)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() > localInput.valueOf();
        else return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() < localInput.valueOf();
        else return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) return false;
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() === localInput.valueOf();
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) return NaN;
        that = cloneWithOffset(input, this);
        if (!that.isValid()) return NaN;
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 60000;
        units = normalizeUnits(units);
        switch(units){
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1000;
                break; // 1000
            case 'minute':
                output = (this - that) / 60000;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 3600000;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 86400000;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 604800000;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        if (a.date() < b.date()) // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) return null;
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) return this.toDate().toISOString();
            else return new Date(this.valueOf() + this.utcOffset() * 60000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */ function inspect() {
        if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
        var func = 'moment', zone = '', prefix, year, datetime, suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
        if (!inputString) inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;
        if (key === undefined) return this._locale._abbr;
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) this._locale = newLocaleData;
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
        if (key === undefined) return this.localeData();
        else return this.locale(key);
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        else return new Date(y, m, d).valueOf();
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        else return Date.UTC(y, m, d);
    }
    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(), 
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({
        }, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
    addFormatToken('y', [
        'y',
        1
    ], 'yo', 'eraYear');
    addFormatToken('y', [
        'yy',
        2
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyy',
        3
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyyy',
        4
    ], 0, 'eraYear');
    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);
    addParseToken([
        'N',
        'NN',
        'NNN',
        'NNNN',
        'NNNNN'
    ], function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) getParsingFlags(config).era = era;
        else getParsingFlags(config).invalidEra = input;
    });
    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);
    addParseToken([
        'y',
        'yy',
        'yyy',
        'yyyy'
    ], YEAR);
    addParseToken([
        'yo'
    ], function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) match = input.match(config._locale._eraYearOrdinalRegex);
        if (config._locale.eraYearOrdinalParse) array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        else array[YEAR] = parseInt(input, 10);
    });
    function localeEras(m, format1) {
        var i, l, date, eras = this._eras || getLocale('en')._eras;
        for(i = 0, l = eras.length; i < l; ++i){
            switch(typeof eras[i].since){
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }
            switch(typeof eras[i].until){
                case 'undefined':
                    eras[i].until = Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }
    function localeErasParse(eraName, format1, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for(i = 0, l = eras.length; i < l; ++i){
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) switch(format1){
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) return eras[i];
                    break;
                case 'NNNN':
                    if (name === eraName) return eras[i];
                    break;
                case 'NNNNN':
                    if (narrow === eraName) return eras[i];
                    break;
            }
            else if ([
                name,
                abbr,
                narrow
            ].indexOf(eraName) >= 0) return eras[i];
        }
    }
    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === undefined) return hooks(era.since).year();
        else return hooks(era.since).year() + (year - era.offset) * dir;
    }
    function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].name;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].name;
        }
        return '';
    }
    function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].narrow;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].narrow;
        }
        return '';
    }
    function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].abbr;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].abbr;
        }
        return '';
    }
    function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
        return this.year();
    }
    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) computeErasParse.call(this);
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale1) {
        return locale1.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale1) {
        return locale1.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale1) {
        return locale1.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale1) {
        return locale1._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for(i = 0, l = eras.length; i < l; ++i){
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken(0, [
        'gg',
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        'GG',
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PRIORITY
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        'gg',
        'GG'
    ], function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) return weekOfYear(this, dow, doy).year;
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) week = weeksTarget;
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken('Q', 0, 'Qo', 'quarter');
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken('D', [
        'DD',
        2
    ], 'Do', 'date');
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIORITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale1) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale1._dayOfMonthOrdinalParse || locale1._ordinalParse : locale1._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        'D',
        'DD'
    ], DATE);
    addParseToken('Do', function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet('Date', true);
    // FORMATTING
    addFormatToken('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear');
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    // PARSING
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken([
        'DDD',
        'DDDD'
    ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }
    // FORMATTING
    addFormatToken('m', [
        'mm',
        2
    ], 0, 'minute');
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken([
        'm',
        'mm'
    ], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet('Minutes', false);
    // FORMATTING
    addFormatToken('s', [
        'ss',
        2
    ], 0, 'second');
    // ALIASES
    addUnitAlias('second', 's');
    // PRIORITY
    addUnitPriority('second', 15);
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken([
        's',
        'ss'
    ], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet('Seconds', false);
    // FORMATTING
    addFormatToken('S', 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        'SS',
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        'SSS',
        3
    ], 0, 'millisecond');
    addFormatToken(0, [
        'SSSS',
        4
    ], 0, function() {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        'SSSSS',
        5
    ], 0, function() {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        'SSSSSS',
        6
    ], 0, function() {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        'SSSSSSS',
        7
    ], 0, function() {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        'SSSSSSSS',
        8
    ], 0, function() {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        'SSSSSSSSS',
        9
    ], 0, function() {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token, getSetMillisecond;
    for(token = 'SSSS'; token.length <= 9; token += 'S')addRegexToken(token, matchUnsigned);
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for(token = 'S'; token.length <= 9; token += 'S')addParseToken(token, parseMs);
    getSetMillisecond = makeGetSet('Milliseconds', false);
    // FORMATTING
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) proto[Symbol.for('nodejs.util.inspect.custom')] = function() {
        return 'Moment<' + this.format() + '>';
    };
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format1, index, field, setter) {
        var locale1 = getLocale(), utc = createUTC().set(setter, index);
        return locale1[field](utc, format1);
    }
    function listMonthsImpl(format1, index, field) {
        if (isNumber(format1)) {
            index = format1;
            format1 = undefined;
        }
        format1 = format1 || '';
        if (index != null) return get$1(format1, index, field, 'month');
        var i, out = [];
        for(i = 0; i < 12; i++)out[i] = get$1(format1, i, field, 'month');
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format1, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format1)) {
                index = format1;
                format1 = undefined;
            }
            format1 = format1 || '';
        } else {
            format1 = localeSorted;
            index = format1;
            localeSorted = false;
            if (isNumber(format1)) {
                index = format1;
                format1 = undefined;
            }
            format1 = format1 || '';
        }
        var locale1 = getLocale(), shift = localeSorted ? locale1._week.dow : 0, i, out = [];
        if (index != null) return get$1(format1, (index + shift) % 7, field, 'day');
        for(i = 0; i < 7; i++)out[i] = get$1(format1, (i + shift) % 7, field, 'day');
        return out;
    }
    function listMonths(format1, index) {
        return listMonthsImpl(format1, index, 'months');
    }
    function listMonthsShort(format1, index) {
        return listMonthsImpl(format1, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format1, index) {
        return listWeekdaysImpl(localeSorted, format1, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format1, index) {
        return listWeekdaysImpl(localeSorted, format1, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format1, index) {
        return listWeekdaysImpl(localeSorted, format1, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD'
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC'
            }, 
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) return Math.floor(number);
        else return Math.ceil(number);
    }
    function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 86400000;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) return NaN;
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 86400000;
            months = this._months + daysToMonths(days);
            switch(units){
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch(units){
                case 'week':
                    return days / 7 + milliseconds / 604800000;
                case 'day':
                    return days + milliseconds / 86400000;
                case 'hour':
                    return days * 24 + milliseconds / 3600000;
                case 'minute':
                    return days * 1440 + milliseconds / 60000;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 86400000) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) return NaN;
        return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + toInt(this._months / 12) * 31536000000;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms'), asSeconds = makeAs('s'), asMinutes = makeAs('m'), asHours = makeAs('h'), asDays = makeAs('d'), asWeeks = makeAs('w'), asMonths = makeAs('M'), asQuarters = makeAs('Q'), asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function() {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds = makeGetter('milliseconds'), seconds = makeGetter('seconds'), minutes = makeGetter('minutes'), hours = makeGetter('hours'), days = makeGetter('days'), months = makeGetter('months'), years = makeGetter('years');
    function weeks() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale1) {
        return locale1.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds1, locale1) {
        var duration = createDuration(posNegDuration).abs(), seconds1 = round(duration.as('s')), minutes1 = round(duration.as('m')), hours1 = round(duration.as('h')), days1 = round(duration.as('d')), months1 = round(duration.as('M')), weeks1 = round(duration.as('w')), years1 = round(duration.as('y')), a = seconds1 <= thresholds1.ss && [
            's',
            seconds1
        ] || seconds1 < thresholds1.s && [
            'ss',
            seconds1
        ] || minutes1 <= 1 && [
            'm'
        ] || minutes1 < thresholds1.m && [
            'mm',
            minutes1
        ] || hours1 <= 1 && [
            'h'
        ] || hours1 < thresholds1.h && [
            'hh',
            hours1
        ] || days1 <= 1 && [
            'd'
        ] || days1 < thresholds1.d && [
            'dd',
            days1
        ];
        if (thresholds1.w != null) a = a || weeks1 <= 1 && [
            'w'
        ] || weeks1 < thresholds1.w && [
            'ww',
            weeks1
        ];
        a = a || months1 <= 1 && [
            'M'
        ] || months1 < thresholds1.M && [
            'MM',
            months1
        ] || years1 <= 1 && [
            'y'
        ] || [
            'yy',
            years1
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale1;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) return round;
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) return false;
        if (limit === undefined) return thresholds[threshold];
        thresholds[threshold] = limit;
        if (threshold === 's') thresholds.ss = limit - 1;
        return true;
    }
    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var withSuffix = false, th = thresholds, locale1, output;
        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') withSuffix = argWithSuffix;
        if (typeof argThresholds === 'object') {
            th = Object.assign({
            }, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) th.ss = argThresholds.s - 1;
        }
        locale1 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale1);
        if (withSuffix) output = locale1.pastFuture(+this, output);
        return locale1.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) return this.localeData().invalidDate();
        var seconds1 = abs$1(this._milliseconds) / 1000, days1 = abs$1(this._days), months1 = abs$1(this._months), minutes1, hours1, years1, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes1 = absFloor(seconds1 / 60);
        hours1 = absFloor(minutes1 / 60);
        seconds1 %= 60;
        minutes1 %= 60;
        // 12 months -> 1 year
        years1 = absFloor(months1 / 12);
        months1 %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds1 ? seconds1.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (years1 ? ymSign + years1 + 'Y' : '') + (months1 ? ymSign + months1 + 'M' : '') + (days1 ? daysSign + days1 + 'D' : '') + (hours1 || minutes1 || seconds1 ? 'T' : '') + (hours1 ? hmsSign + hours1 + 'H' : '') + (minutes1 ? hmsSign + minutes1 + 'M' : '') + (seconds1 ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    // FORMATTING
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = '2.29.1';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM'
    };
    return hooks;
});

},{}],"5aiIb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _auth = require("./Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class PortfolioAPI {
    async getPortfolioPs() {
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/portfolio`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting portfolio pieces!');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async getUserPortfolio() {
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/portfolio`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting user`s portfolio pieces!');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async newPortfolioP(formData) {
        // send fetch request
        const response = await fetch(`${_appDefault.default.apiBase}/portfolio`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            },
            body: formData
        });
        // if response not ok
        if (!response.ok) {
            let message = 'Problem adding portfolio piece';
            if (response.status == 400) {
                const err = await response.json();
                message = err.message;
            }
            // throw error (exit this function)      
            throw new Error(message);
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
}
exports.default = new PortfolioAPI();

},{"./App":"4GIt1","./Auth":"68fHK","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"a90tE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("./../../Router");
var _auth = require("./../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("./../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _userAPI = require("./../../UserAPI");
var _userAPIDefault = parcelHelpers.interopDefault(_userAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
class EditProfileView {
    init() {
        console.log('EditProfileView.init');
        document.title = 'Edit Profile';
        this.user = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getUser();
    }
    async getUser() {
        try {
            this.user = await _userAPIDefault.default.getUser(_authDefault.default.currentUser._id);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    async updateProfileSubmitHandler(e) {
        e.preventDefault();
        const formData = e.detail.formData;
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        try {
            const updatedUser = await _userAPIDefault.default.updateUser(_authDefault.default.currentUser._id, formData);
            delete updatedUser.password;
            this.user = updatedUser;
            _authDefault.default.currentUser = updatedUser;
            this.render();
            _toastDefault.default.show('profile updated');
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
        submitBtn.removeAttribute('loading');
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Edit Profile" user=${JSON.stringify(_authDefault.default.currentUser)}></va-app-header>\n      <div class="page-body">\n        <div class="page-content">        \n          ${this.user == null ? _litHtml.html`\n            <sl-spinner></sl-spinner>\n          ` : _litHtml.html`\n            <p>Updated: ${_momentDefault.default(_authDefault.default.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>\n            <sl-form class="page-form" @sl-submit=${this.updateProfileSubmitHandler.bind(this)}>\n              <div class="input-group">\n                <sl-input type="text" name="firstName" value="${this.user.firstName}" placeholder="First Name"></sl-input>\n              </div>\n              <div class="input-group">\n                <sl-input type="text" name="lastName" value="${this.user.lastName}" placeholder="Last Name"></sl-input>\n              </div>\n              <div class="input-group">\n                <label>Display Name/ Nickname</label><br>\n                ${this.user.displayName == null ? _litHtml.html`\n                <sl-input type="text" name="displayName" value="${this.user.firstName} ${this.user.lastName}" placeholder="Display Name"></sl-input>\n                ` : _litHtml.html`\n                <sl-input type="text" name="displayName" value="${this.user.displayName}" placeholder="Display Name"></sl-input>\n                `} \n              </div>\n              <div class="input-group">\n                <sl-input type="text" name="email" value="${this.user.email}" placeholder="Email Address"></sl-input>\n              </div> \n              <div class="input-group">\n                <sl-textarea name="bio" rows="4" value="${this.user.bio}" placeholder="Bio"></sl-textarea>\n              </div>  \n              <div class="input-group">\n                <label>Website URL</label><br>\n                <sl-input type="text" name="website" value="${this.user.website}" placeholder="www.example.com"></sl-input>\n              </div>\n              <div class="input-group">\n                <label>Facebook page</label><br>\n                <sl-input type="text" name="facebook" value="${this.user.facebook}" placeholder="www.facebook.com/example"></sl-input>\n              </div>\n              <div class="input-group">\n                <label>Twitter page</label><br>\n                <sl-input type="text" name="twitter" value="${this.user.twitter}" placeholder="www.twitter.com/example"></sl-input>\n              </div>\n              <div class="input-group">\n                <label>Instagram page</label><br>\n                <sl-input type="text" name="instagram" value="${this.user.instagram}" placeholder="www.instagram.com/example"></sl-input>\n              </div>\n              <div class="input-group">\n                <label>Youtube channel</label><br>\n                <sl-input type="text" name="youtube" value="${this.user.youtube}" placeholder="www.youtube.com/channel/exampleURLCode"></sl-input>\n              </div>         \n              <div class="input-group">\n                <label>Avatar</label><br>          \n                ${this.user.avatar ? _litHtml.html`\n                  <sl-avatar image="${_appDefault.default.apiBase}/images/${this.user.avatar}"></sl-avatar>\n                  <input type="file" name="avatar" />\n                ` : _litHtml.html`\n                  <input type="file" name="avatar" />\n                `}\n              </div>\n              <sl-button type="primary" class="submit-btn" submit>Update Profile</sl-button>\n            </sl-form>\n          `}\n        </div>\n      </div>\n      \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new EditProfileView();

},{"./../../App":"4GIt1","lit-html":"5JY0r","./../../Router":"ll818","./../../Auth":"68fHK","./../../Utils":"6IQWL","./../../UserAPI":"lWaG0","../../Toast":"9F5xG","moment":"dwxeL","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"eaLEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _userAPI = require("./../../UserAPI");
var _userAPIDefault = parcelHelpers.interopDefault(_userAPI);
var _toast = require("./../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class favouriteCreativesView {
    init() {
        document.title = 'Favourite Creatives';
        this.favouriteCreatives = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getFavCreatives();
    }
    async getFavCreatives() {
        try {
            const currentUser = await _userAPIDefault.default.getUser(_authDefault.default.currentUser._id);
            this.favCreatives = currentUser.favouriteCreatives;
            console.log(this.favCreatives);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Favourite Creatives" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content">        \n          <h1>Favourite Creatives</h1>\n          <div class="haircuts-grid">\n            ${this.favCreatives == null ? _litHtml.html`\n              <sl-spinner></sl-spinner>\n            ` : _litHtml.html`\n              ${this.favCreatives.map((creative)=>_litHtml.html`\n                <va-creative class="creative-card"\n                  id="${creative._id}"\n                  name="${creative.displayName}"\n                  email="${creative.email}"\n                  image="${creative.avatar}"\n                  bio="${creative.bio}"\n                  website="${creative.website}"\n                  facebook="${creative.facebook}"\n                  instagram="${creative.instagram}"\n                  twitter="${creative.twitter}"\n                  youtube="${creative.youtube}"\n                >\n                </va-creative>\n                  \n              `
        )}\n            `}\n          </div>\n          \n        </div>\n      </div>\n            \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new favouriteCreativesView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../UserAPI":"lWaG0","./../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"cwQDJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _projectAPI = require("./../../ProjectAPI");
var _projectAPIDefault = parcelHelpers.interopDefault(_projectAPI);
var _toast = require("./../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class ProjectsView {
    init() {
        document.title = 'Projects for bidding';
        this.projects = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getProjectPs();
    }
    async filterProjects(field, match) {
        //validate
        if (!field || !match) return;
        //get fresh copy of projects page
        this.projects = await _projectAPIDefault.default.getProjectPs();
        let filteredProjects;
        // tag
        if (field == 'tag') filteredProjects = this.projects.filter((project)=>project.tag == match
        );
        //render
        this.projects = filteredProjects;
        this.render();
    }
    clearFilterBtns() {
        //clear all checked buttons (attribute = 'checked')
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn)=>btn.removeAttribute("checked")
        );
    }
    handleFilterBtn(e) {
        this.clearFilterBtns();
        //set item = active (item add attribute 'checked')
        e.target.setAttribute("checked", "");
        //extract the field and match from buttons
        const field = e.target.getAttribute("data-field");
        const match = e.target.getAttribute("data-match");
        console.log("field = ", field);
        console.log("match = ", match);
        //filter portfolio pieces
        this.filterProjects(field, match);
    }
    clearFilters() {
        this.getProjectPs();
        this.clearFilterBtns();
    }
    async getProjectPs() {
        try {
            this.projects = await _projectAPIDefault.default.getProjectPs();
            console.log(this.projects);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n\n      <va-app-header title="Projects for bidding" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign"> \n          <div class= "postings-grid">\n            <h1 class="anim-in">Projects for bidding</h1>\n            ${_authDefault.default.currentUser.accessLevel == 2 ? _litHtml.html`\n                <sl-button type="primary" class="addItemBtn" @click="${()=>_router.gotoRoute('/newProject')
        }">Create a New Project for bidding!</sl-button>\n            ` : _litHtml.html``}\n          </div>       \n          <div class="filter-menu">                  \n            <div class="filter-search">\n              <div>Filter by:</div>\n              <strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1" id="searchbar"></sl-textarea>\n            </div>\n            <div class="filter-btns">\n              <div class="filter-dropdown"> \n                <sl-dropdown>\n                  <sl-button size="medium" type="info" slot="trigger" caret><strong>Genre</strong></sl-button>\n                  <sl-menu>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="photography" @click=${this.handleFilterBtn.bind(this)}>photography</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="illustration" @click=${this.handleFilterBtn.bind(this)}>illustrations</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="writing" @click=${this.handleFilterBtn.bind(this)}>writing</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="pre-production" @click=${this.handleFilterBtn.bind(this)}>pre-production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="production" @click=${this.handleFilterBtn.bind(this)}>production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="post-production" @click=${this.handleFilterBtn.bind(this)}>post-production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="animation" @click=${this.handleFilterBtn.bind(this)}>animation</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="voice-over" @click=${this.handleFilterBtn.bind(this)}>voice-over</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="2d-art" @click=${this.handleFilterBtn.bind(this)}>2D art</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="3d-art" @click=${this.handleFilterBtn.bind(this)}>3D art</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>\n                  </sl-menu>\n                </sl-dropdown>\n              </div>\n              <div>\n                <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>\n              </div>\n            </div> \n          </div>\n          <div class= "postings-grid">\n            \n            ${this.projects == null ? _litHtml.html`\n              <sl-spinner></sl-spinner>\n            ` : _litHtml.html`\n              ${this.projects.map((project)=>_litHtml.html`\n                <va-postings class="posting-card"\n                 image = "${project.image}"\n                 name = "${project.name}"\n                 description = "${project.description}"\n                 user = "${project.user.displayName}"\n                 tag = "${project.tag}"\n                > </va-postings>\n              `
        )}\n            `}\n          </div>\n          \n        </div>   \n      </div>\n         \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new ProjectsView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../ProjectAPI":"5xvMk","./../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"5xvMk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _auth = require("./Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class ProjectAPI {
    async getProjectPs() {
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/project`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting project postings');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async newProject(formData) {
        // send fetch request
        const response = await fetch(`${_appDefault.default.apiBase}/project`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            },
            body: formData
        });
        // if response not ok
        if (!response.ok) {
            let message = 'Problem adding project post';
            if (response.status == 400) {
                const err = await response.json();
                message = err.message;
            }
            // throw error (exit this function)      
            throw new Error(message);
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
}
exports.default = new ProjectAPI();

},{"./App":"4GIt1","./Auth":"68fHK","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"23UTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _portfolioAPI = require("./../../PortfolioAPI");
var _portfolioAPIDefault = parcelHelpers.interopDefault(_portfolioAPI);
var _bootstrap = require("bootstrap");
class portfolioView {
    init() {
        document.title = 'Portfolio Pieces';
        this.portfolioPs = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getPortfolioPs();
    }
    async filterPortfolioPs(field, match) {
        //validate
        if (!field || !match) return;
        //get fresh copy of portfolio page
        this.portfolioPs = await _portfolioAPIDefault.default.getPortfolioPs();
        let filteredPieces;
        // tag
        if (field == 'tag') filteredPieces = this.portfolioPs.filter((portfolio)=>portfolio.tag == match
        );
        //render
        this.portfolioPs = filteredPieces;
        this.render();
    }
    clearFilterBtns() {
        //clear all checked buttons (attribute = 'checked')
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn)=>btn.removeAttribute("checked")
        );
    }
    handleFilterBtn(e) {
        this.clearFilterBtns();
        //set item = active (item add attribute 'checked')
        e.target.setAttribute("checked", "");
        //extract the field and match from buttons
        const field = e.target.getAttribute("data-field");
        const match = e.target.getAttribute("data-match");
        console.log("field = ", field);
        console.log("match = ", match);
        //filter portfolio pieces
        this.filterPortfolioPs(field, match);
    }
    clearFilters() {
        this.getPortfolioPs();
        this.clearFilterBtns();
    }
    async getPortfolioPs() {
        try {
            this.portfolioPs = await _portfolioAPIDefault.default.getPortfolioPs();
            console.log(this.portfolioPs);
            this.render();
        } catch (err) {
            _bootstrap.Toast.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n        \n      <va-app-header title="Profile" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">\n          <div class="profile-grid">        \n            <h1>Portfolio Pieces</h1>\n              \n              <sl-card class="portfolio-section">\n                <div slot="header">\n                  ${_authDefault.default.currentUser.accessLevel == 1 ? _litHtml.html`\n                    <sl-button type="primary" class="addItemBtn" size="medium" @click=${()=>_router.gotoRoute('/newPortfolio')
        }>Add a new portfolio piece!</sl-button>\n                  ` : _litHtml.html``}\n                </div>\n                <div class="filter-menu">                  \n                  <div class="filter-search">\n                    <div>Filter by:</div>\n                    <strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1" id="searchbar"></sl-textarea>\n                  </div>\n                  <div class="filter-btns">\n                    <div class="filter-dropdown"> \n                      <sl-dropdown>\n                        <sl-button size="medium" type="info" slot="trigger" caret><strong>Genre</strong></sl-button>\n                          <sl-menu>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="photography" @click=${this.handleFilterBtn.bind(this)}>photography</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="illustration" @click=${this.handleFilterBtn.bind(this)}>illustrations</sl-menu-item>\n                            <sl-menu-item class="filter-btn"data-field="tag" data-match="writing" @click=${this.handleFilterBtn.bind(this)}>writing</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="pre-production" @click=${this.handleFilterBtn.bind(this)}>pre-production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="production" @click=${this.handleFilterBtn.bind(this)}>production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="post-production" @click=${this.handleFilterBtn.bind(this)}>post-production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="animation" @click=${this.handleFilterBtn.bind(this)}>animation</sl-menu-item>\n                            <sl-menu-item class="filter-btn"data-field="tag" data-match="voice-over" @click=${this.handleFilterBtn.bind(this)}>voice-over</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>\n                            <sl-menu-item class="filter-btn"data-field="tag" data-match="2d-art" @click=${this.handleFilterBtn.bind(this)}>2D art</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="3d-art" @click=${this.handleFilterBtn.bind(this)}>3D art</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>\n                          </sl-menu>\n                      </sl-dropdown>\n                    </div>\n                    <div>\n                      <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>\n                    </div>\n                  </div> \n                </div>\n\n                    ${this.portfolioPs == null ? _litHtml.html`\n                      <sl-spinner></sl-spinner>\n                    ` : _litHtml.html`\n                      ${this.portfolioPs.map((portfolioPs)=>_litHtml.html`\n                        <sl-card class="portfolio-card">\n                          <img \n                            slot="image" \n                            src="${_appDefault.default.apiBase}/images/${portfolioPs.image}" \n                            alt="${portfolioPs.name}"\n                          >\n                          <h3>${portfolioPs.name}</h3>\n                          <p>${portfolioPs.description}</p>\n                          <div slot="footer">\n                            <sl-tag type="info" size="small">${portfolioPs.tag}</sl-tag>\n                            <p >By ${portfolioPs.user.displayName}</p>\n                          </div>               \n                        </sl-card>\n                      `
        )}\n                      \n                    `}                                  \n              </sl-card>\n                \n          </div>\n        </div> \n      </div>\n           \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new portfolioView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../PortfolioAPI":"5aiIb","bootstrap":"4H1UX","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"4H1UX":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) : typeof define === 'function' && define.amd ? define([
        '@popperjs/core'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
})(this, function(Popper) {
    'use strict';
    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) Object.keys(e).forEach(function(k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        });
        n['default'] = e;
        return Object.freeze(n);
    }
    var Popper__namespace = /*#__PURE__*/ _interopNamespace(Popper);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NODE_TEXT = 3;
    const SelectorEngine = {
        find (selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne (selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
        },
        children (element, selector) {
            return [].concat(...element.children).filter((child)=>child.matches(selector)
            );
        },
        parents (element, selector) {
            const parents = [];
            let ancestor = element.parentNode;
            while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT){
                if (ancestor.matches(selector)) parents.push(ancestor);
                ancestor = ancestor.parentNode;
            }
            return parents;
        },
        prev (element, selector) {
            let previous = element.previousElementSibling;
            while(previous){
                if (previous.matches(selector)) return [
                    previous
                ];
                previous = previous.previousElementSibling;
            }
            return [];
        },
        next (element, selector) {
            let next = element.nextElementSibling;
            while(next){
                if (next.matches(selector)) return [
                    next
                ];
                next = next.nextElementSibling;
            }
            return [];
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const MAX_UID = 1000000;
    const MILLISECONDS_MULTIPLIER = 1000;
    const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
    const toType = (obj)=>{
        if (obj === null || obj === undefined) return `${obj}`;
        return ({
        }).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    };
    /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */ const getUID = (prefix)=>{
        do prefix += Math.floor(Math.random() * MAX_UID);
        while (document.getElementById(prefix))
        return prefix;
    };
    const getSelector = (element)=>{
        let selector = element.getAttribute('data-bs-target');
        if (!selector || selector === '#') {
            let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
            // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
            // `document.querySelector` will rightfully complain it is invalid.
            // See https://github.com/twbs/bootstrap/issues/32273
            if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) return null;
             // Just in case some CMS puts out a full URL with the anchor appended
            if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) hrefAttr = `#${hrefAttr.split('#')[1]}`;
            selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
        }
        return selector;
    };
    const getSelectorFromElement = (element)=>{
        const selector = getSelector(element);
        if (selector) return document.querySelector(selector) ? selector : null;
        return null;
    };
    const getElementFromSelector = (element)=>{
        const selector = getSelector(element);
        return selector ? document.querySelector(selector) : null;
    };
    const getTransitionDurationFromElement = (element)=>{
        if (!element) return 0;
         // Get transition-duration of the element
        let { transitionDuration , transitionDelay  } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
        if (!floatTransitionDuration && !floatTransitionDelay) return 0;
         // If multiple durations are defined, take the first
        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    };
    const triggerTransitionEnd = (element)=>{
        element.dispatchEvent(new Event(TRANSITION_END));
    };
    const isElement = (obj)=>{
        if (!obj || typeof obj !== 'object') return false;
        if (typeof obj.jquery !== 'undefined') obj = obj[0];
        return typeof obj.nodeType !== 'undefined';
    };
    const getElement = (obj)=>{
        if (isElement(obj)) // it's a jQuery object or a node element
        return obj.jquery ? obj[0] : obj;
        if (typeof obj === 'string' && obj.length > 0) return SelectorEngine.findOne(obj);
        return null;
    };
    const emulateTransitionEnd = (element, duration)=>{
        let called = false;
        const durationPadding = 5;
        const emulatedDuration = duration + durationPadding;
        function listener() {
            called = true;
            element.removeEventListener(TRANSITION_END, listener);
        }
        element.addEventListener(TRANSITION_END, listener);
        setTimeout(()=>{
            if (!called) triggerTransitionEnd(element);
        }, emulatedDuration);
    };
    const typeCheckConfig = (componentName, config, configTypes)=>{
        Object.keys(configTypes).forEach((property)=>{
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = value && isElement(value) ? 'element' : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        });
    };
    const isVisible = (element)=>{
        if (!element) return false;
        if (element.style && element.parentNode && element.parentNode.style) {
            const elementStyle = getComputedStyle(element);
            const parentNodeStyle = getComputedStyle(element.parentNode);
            return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
        }
        return false;
    };
    const isDisabled = (element)=>{
        if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
        if (element.classList.contains('disabled')) return true;
        if (typeof element.disabled !== 'undefined') return element.disabled;
        return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
    };
    const findShadowRoot = (element)=>{
        if (!document.documentElement.attachShadow) return null;
         // Can find the shadow root otherwise it'll return the document
        if (typeof element.getRootNode === 'function') {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) return element;
         // when we don't find a shadow root
        if (!element.parentNode) return null;
        return findShadowRoot(element.parentNode);
    };
    const noop = ()=>{
    };
    const reflow = (element)=>element.offsetHeight
    ;
    const getjQuery = ()=>{
        const { jQuery  } = window;
        if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) return jQuery;
        return null;
    };
    const onDOMContentLoaded = (callback)=>{
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback);
        else callback();
    };
    const isRTL = ()=>document.documentElement.dir === 'rtl'
    ;
    const defineJQueryPlugin = (plugin)=>{
        onDOMContentLoaded(()=>{
            const $ = getjQuery();
            /* istanbul ignore if */ if ($) {
                const name = plugin.NAME;
                const JQUERY_NO_CONFLICT = $.fn[name];
                $.fn[name] = plugin.jQueryInterface;
                $.fn[name].Constructor = plugin;
                $.fn[name].noConflict = ()=>{
                    $.fn[name] = JQUERY_NO_CONFLICT;
                    return plugin.jQueryInterface;
                };
            }
        });
    };
    const execute = (callback)=>{
        if (typeof callback === 'function') callback();
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const elementMap = new Map();
    var Data = {
        set (element, key, instance) {
            if (!elementMap.has(element)) elementMap.set(element, new Map());
            const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
            // can be removed later when multiple key/instances are fine to be used
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
                // eslint-disable-next-line no-console
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
                return;
            }
            instanceMap.set(key, instance);
        },
        get (element, key) {
            if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
            return null;
        },
        remove (element, key) {
            if (!elementMap.has(element)) return;
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key); // free up element references if there are no instances left for an element
            if (instanceMap.size === 0) elementMap.delete(element);
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
    const stripNameRegex = /\..*/;
    const stripUidRegex = /::\d+$/;
    const eventRegistry = {
    }; // Events storage
    let uidEvent = 1;
    const customEvents = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    };
    const customEventsRegex = /^(mouseenter|mouseleave)/i;
    const nativeEvents = new Set([
        'click',
        'dblclick',
        'mouseup',
        'mousedown',
        'contextmenu',
        'mousewheel',
        'DOMMouseScroll',
        'mouseover',
        'mouseout',
        'mousemove',
        'selectstart',
        'selectend',
        'keydown',
        'keypress',
        'keyup',
        'orientationchange',
        'touchstart',
        'touchmove',
        'touchend',
        'touchcancel',
        'pointerdown',
        'pointermove',
        'pointerup',
        'pointerleave',
        'pointercancel',
        'gesturestart',
        'gesturechange',
        'gestureend',
        'focus',
        'blur',
        'change',
        'reset',
        'select',
        'submit',
        'focusin',
        'focusout',
        'load',
        'unload',
        'beforeunload',
        'resize',
        'move',
        'DOMContentLoaded',
        'readystatechange',
        'error',
        'abort',
        'scroll'
    ]);
    /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */ function getUidEvent(element, uid) {
        return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
    }
    function getEvent(element) {
        const uid = getUidEvent(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {
        };
        return eventRegistry[uid];
    }
    function bootstrapHandler(element, fn) {
        return function handler(event) {
            event.delegateTarget = element;
            if (handler.oneOff) EventHandler.off(element, event.type, fn);
            return fn.apply(element, [
                event
            ]);
        };
    }
    function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for(let { target  } = event; target && target !== this; target = target.parentNode){
                for(let i = domElements.length; i--;)if (domElements[i] === target) {
                    event.delegateTarget = target;
                    if (handler.oneOff) // eslint-disable-next-line unicorn/consistent-destructuring
                    EventHandler.off(element, event.type, selector, fn);
                    return fn.apply(target, [
                        event
                    ]);
                }
            } // To please ESLint
            return null;
        };
    }
    function findHandler(events, handler, delegationSelector = null) {
        const uidEventList = Object.keys(events);
        for(let i = 0, len = uidEventList.length; i < len; i++){
            const event = events[uidEventList[i]];
            if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
        }
        return null;
    }
    function normalizeParams(originalTypeEvent, handler, delegationFn) {
        const delegation = typeof handler === 'string';
        const originalHandler = delegation ? delegationFn : handler;
        let typeEvent = getTypeEvent(originalTypeEvent);
        const isNative = nativeEvents.has(typeEvent);
        if (!isNative) typeEvent = originalTypeEvent;
        return [
            delegation,
            originalHandler,
            typeEvent
        ];
    }
    function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
        if (typeof originalTypeEvent !== 'string' || !element) return;
        if (!handler) {
            handler = delegationFn;
            delegationFn = null;
        } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
        // this prevents the handler from being dispatched the same way as mouseover or mouseout does
        if (customEventsRegex.test(originalTypeEvent)) {
            const wrapFn = (fn)=>{
                return function(event) {
                    if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
                };
            };
            if (delegationFn) delegationFn = wrapFn(delegationFn);
            else handler = wrapFn(handler);
        }
        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const events = getEvent(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {
        });
        const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
        if (previousFn) {
            previousFn.oneOff = previousFn.oneOff && oneOff;
            return;
        }
        const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
        const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
        fn.delegationSelector = delegation ? handler : null;
        fn.originalHandler = originalHandler;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, delegation);
    }
    function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) return;
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
    }
    function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {
        };
        Object.keys(storeElementEvent).forEach((handlerKey)=>{
            if (handlerKey.includes(namespace)) {
                const event = storeElementEvent[handlerKey];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    }
    function getTypeEvent(event) {
        // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
        event = event.replace(stripNameRegex, '');
        return customEvents[event] || event;
    }
    const EventHandler = {
        on (element, event, handler, delegationFn) {
            addHandler(element, event, handler, delegationFn, false);
        },
        one (element, event, handler, delegationFn) {
            addHandler(element, event, handler, delegationFn, true);
        },
        off (element, originalTypeEvent, handler, delegationFn) {
            if (typeof originalTypeEvent !== 'string' || !element) return;
            const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getEvent(element);
            const isNamespace = originalTypeEvent.startsWith('.');
            if (typeof originalHandler !== 'undefined') {
                // Simplest case: handler is passed, remove that listener ONLY.
                if (!events || !events[typeEvent]) return;
                removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
                return;
            }
            if (isNamespace) Object.keys(events).forEach((elementEvent)=>{
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            });
            const storeElementEvent = events[typeEvent] || {
            };
            Object.keys(storeElementEvent).forEach((keyHandlers)=>{
                const handlerKey = keyHandlers.replace(stripUidRegex, '');
                if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                    const event = storeElementEvent[keyHandlers];
                    removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
                }
            });
        },
        trigger (element, event, args) {
            if (typeof event !== 'string' || !element) return null;
            const $ = getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            const isNative = nativeEvents.has(typeEvent);
            let jQueryEvent;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            let evt = null;
            if (inNamespace && $) {
                jQueryEvent = $.Event(event, args);
                $(element).trigger(jQueryEvent);
                bubbles = !jQueryEvent.isPropagationStopped();
                nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            if (isNative) {
                evt = document.createEvent('HTMLEvents');
                evt.initEvent(typeEvent, bubbles, true);
            } else evt = new CustomEvent(event, {
                bubbles,
                cancelable: true
            });
             // merge custom information in our event
            if (typeof args !== 'undefined') Object.keys(args).forEach((key)=>{
                Object.defineProperty(evt, key, {
                    get () {
                        return args[key];
                    }
                });
            });
            if (defaultPrevented) evt.preventDefault();
            if (nativeDispatch) element.dispatchEvent(evt);
            if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') jQueryEvent.preventDefault();
            return evt;
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const VERSION = '5.0.1';
    class BaseComponent {
        constructor(element1){
            element1 = getElement(element1);
            if (!element1) return;
            this._element = element1;
            Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            Object.getOwnPropertyNames(this).forEach((propertyName)=>{
                this[propertyName] = null;
            });
        }
        _queueCallback(callback, element, isAnimated = true) {
            if (!isAnimated) {
                execute(callback);
                return;
            }
            const transitionDuration = getTransitionDurationFromElement(element);
            EventHandler.one(element, 'transitionend', ()=>execute(callback)
            );
            emulateTransitionEnd(element, transitionDuration);
        }
        /** Static */ static getInstance(element) {
            return Data.get(element, this.DATA_KEY);
        }
        static get VERSION() {
            return VERSION;
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$c = 'alert';
    const DATA_KEY$b = 'bs.alert';
    const EVENT_KEY$b = `.${DATA_KEY$b}`;
    const DATA_API_KEY$8 = '.data-api';
    const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
    const EVENT_CLOSE = `close${EVENT_KEY$b}`;
    const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
    const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
    const CLASS_NAME_ALERT = 'alert';
    const CLASS_NAME_FADE$6 = 'fade';
    const CLASS_NAME_SHOW$9 = 'show';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Alert extends BaseComponent {
        // Getters
        static get NAME() {
            return NAME$c;
        }
        close(element) {
            const rootElement = element ? this._getRootElement(element) : this._element;
            const customEvent = this._triggerCloseEvent(rootElement);
            if (customEvent === null || customEvent.defaultPrevented) return;
            this._removeElement(rootElement);
        }
        _getRootElement(element) {
            return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
        }
        _triggerCloseEvent(element) {
            return EventHandler.trigger(element, EVENT_CLOSE);
        }
        _removeElement(element) {
            element.classList.remove(CLASS_NAME_SHOW$9);
            const isAnimated = element.classList.contains(CLASS_NAME_FADE$6);
            this._queueCallback(()=>this._destroyElement(element)
            , element, isAnimated);
        }
        _destroyElement(element) {
            if (element.parentNode) element.parentNode.removeChild(element);
            EventHandler.trigger(element, EVENT_CLOSED);
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$b);
                if (!data) data = new Alert(this);
                if (config === 'close') data[config](this);
            });
        }
        static handleDismiss(alertInstance) {
            return function(event) {
                if (event) event.preventDefault();
                alertInstance.close(this);
            };
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */ defineJQueryPlugin(Alert);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$b = 'button';
    const DATA_KEY$a = 'bs.button';
    const EVENT_KEY$a = `.${DATA_KEY$a}`;
    const DATA_API_KEY$7 = '.data-api';
    const CLASS_NAME_ACTIVE$3 = 'active';
    const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
    const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Button extends BaseComponent {
        // Getters
        static get NAME() {
            return NAME$b;
        }
        toggle() {
            // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
            this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$a);
                if (!data) data = new Button(this);
                if (config === 'toggle') data[config]();
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
        event.preventDefault();
        const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
        let data = Data.get(button, DATA_KEY$a);
        if (!data) data = new Button(button);
        data.toggle();
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */ defineJQueryPlugin(Button);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ function normalizeData(val) {
        if (val === 'true') return true;
        if (val === 'false') return false;
        if (val === Number(val).toString()) return Number(val);
        if (val === '' || val === 'null') return null;
        return val;
    }
    function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`
        );
    }
    const Manipulator = {
        setDataAttribute (element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute (element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes (element) {
            if (!element) return {
            };
            const attributes = {
            };
            Object.keys(element.dataset).filter((key)=>key.startsWith('bs')
            ).forEach((key)=>{
                let pureKey = key.replace(/^bs/, '');
                pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                attributes[pureKey] = normalizeData(element.dataset[key]);
            });
            return attributes;
        },
        getDataAttribute (element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        },
        offset (element) {
            const rect = element.getBoundingClientRect();
            return {
                top: rect.top + document.body.scrollTop,
                left: rect.left + document.body.scrollLeft
            };
        },
        position (element) {
            return {
                top: element.offsetTop,
                left: element.offsetLeft
            };
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$a = 'carousel';
    const DATA_KEY$9 = 'bs.carousel';
    const EVENT_KEY$9 = `.${DATA_KEY$9}`;
    const DATA_API_KEY$6 = '.data-api';
    const ARROW_LEFT_KEY = 'ArrowLeft';
    const ARROW_RIGHT_KEY = 'ArrowRight';
    const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
    const SWIPE_THRESHOLD = 40;
    const Default$9 = {
        interval: 5000,
        keyboard: true,
        slide: false,
        pause: 'hover',
        wrap: true,
        touch: true
    };
    const DefaultType$9 = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean'
    };
    const ORDER_NEXT = 'next';
    const ORDER_PREV = 'prev';
    const DIRECTION_LEFT = 'left';
    const DIRECTION_RIGHT = 'right';
    const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
    const EVENT_SLID = `slid${EVENT_KEY$9}`;
    const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
    const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
    const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
    const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
    const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
    const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
    const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
    const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
    const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
    const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
    const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
    const CLASS_NAME_CAROUSEL = 'carousel';
    const CLASS_NAME_ACTIVE$2 = 'active';
    const CLASS_NAME_SLIDE = 'slide';
    const CLASS_NAME_END = 'carousel-item-end';
    const CLASS_NAME_START = 'carousel-item-start';
    const CLASS_NAME_NEXT = 'carousel-item-next';
    const CLASS_NAME_PREV = 'carousel-item-prev';
    const CLASS_NAME_POINTER_EVENT = 'pointer-event';
    const SELECTOR_ACTIVE$1 = '.active';
    const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
    const SELECTOR_ITEM = '.carousel-item';
    const SELECTOR_ITEM_IMG = '.carousel-item img';
    const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
    const SELECTOR_INDICATORS = '.carousel-indicators';
    const SELECTOR_INDICATOR = '[data-bs-target]';
    const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
    const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    const POINTER_TYPE_TOUCH = 'touch';
    const POINTER_TYPE_PEN = 'pen';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Carousel extends BaseComponent {
        constructor(element2, config1){
            super(element2);
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = false;
            this._isSliding = false;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(config1);
            this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
            this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
            this._pointerEvent = Boolean(window.PointerEvent);
            this._addEventListeners();
        }
        static get Default() {
            return Default$9;
        }
        static get NAME() {
            return NAME$a;
        }
        next() {
            if (!this._isSliding) this._slide(ORDER_NEXT);
        }
        nextWhenVisible() {
            // Don't call next when the page isn't visible
            // or the carousel or its parent isn't visible
            if (!document.hidden && isVisible(this._element)) this.next();
        }
        prev() {
            if (!this._isSliding) this._slide(ORDER_PREV);
        }
        pause(event) {
            if (!event) this._isPaused = true;
            if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
                triggerTransitionEnd(this._element);
                this.cycle(true);
            }
            clearInterval(this._interval);
            this._interval = null;
        }
        cycle(event) {
            if (!event) this._isPaused = false;
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }
            if (this._config && this._config.interval && !this._isPaused) {
                this._updateInterval();
                this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
            }
        }
        to(index) {
            this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            const activeIndex = this._getItemIndex(this._activeElement);
            if (index > this._items.length - 1 || index < 0) return;
            if (this._isSliding) {
                EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index)
                );
                return;
            }
            if (activeIndex === index) {
                this.pause();
                this.cycle();
                return;
            }
            const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
            this._slide(order, this._items[index]);
        }
        _getConfig(config) {
            config = {
                ...Default$9,
                ...config
            };
            typeCheckConfig(NAME$a, config, DefaultType$9);
            return config;
        }
        _handleSwipe() {
            const absDeltax = Math.abs(this.touchDeltaX);
            if (absDeltax <= SWIPE_THRESHOLD) return;
            const direction = absDeltax / this.touchDeltaX;
            this.touchDeltaX = 0;
            if (!direction) return;
            this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
        }
        _addEventListeners() {
            if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event)
            );
            if (this._config.pause === 'hover') {
                EventHandler.on(this._element, EVENT_MOUSEENTER, (event)=>this.pause(event)
                );
                EventHandler.on(this._element, EVENT_MOUSELEAVE, (event)=>this.cycle(event)
                );
            }
            if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const start = (event)=>{
                if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) this.touchStartX = event.clientX;
                else if (!this._pointerEvent) this.touchStartX = event.touches[0].clientX;
            };
            const move = (event)=>{
                // ensure swiping with one touch and not pinching
                this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
            };
            const end = (event)=>{
                if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) this.touchDeltaX = event.clientX - this.touchStartX;
                this._handleSwipe();
                if (this._config.pause === 'hover') {
                    // If it's a touch-enabled device, mouseenter/leave are fired as
                    // part of the mouse compatibility events on first tap - the carousel
                    // would stop cycling until user tapped out of it;
                    // here, we listen for touchend, explicitly pause the carousel
                    // (as if it's the second time we tap on it, mouseenter compat event
                    // is NOT fired) and after a timeout (to allow for mouse compatibility
                    // events to fire) we explicitly restart cycling
                    this.pause();
                    if (this.touchTimeout) clearTimeout(this.touchTimeout);
                    this.touchTimeout = setTimeout((event1)=>this.cycle(event1)
                    , TOUCHEVENT_COMPAT_WAIT + this._config.interval);
                }
            };
            SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
                EventHandler.on(itemImg, EVENT_DRAG_START, (e)=>e.preventDefault()
                );
            });
            if (this._pointerEvent) {
                EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>start(event)
                );
                EventHandler.on(this._element, EVENT_POINTERUP, (event)=>end(event)
                );
                this._element.classList.add(CLASS_NAME_POINTER_EVENT);
            } else {
                EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>start(event)
                );
                EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>move(event)
                );
                EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>end(event)
                );
            }
        }
        _keydown(event) {
            if (/input|textarea/i.test(event.target.tagName)) return;
            if (event.key === ARROW_LEFT_KEY) {
                event.preventDefault();
                this._slide(DIRECTION_RIGHT);
            } else if (event.key === ARROW_RIGHT_KEY) {
                event.preventDefault();
                this._slide(DIRECTION_LEFT);
            }
        }
        _getItemIndex(element) {
            this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
            return this._items.indexOf(element);
        }
        _getItemByOrder(order, activeElement) {
            const isNext = order === ORDER_NEXT;
            const isPrev = order === ORDER_PREV;
            const activeIndex = this._getItemIndex(activeElement);
            const lastItemIndex = this._items.length - 1;
            const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;
            if (isGoingToWrap && !this._config.wrap) return activeElement;
            const delta = isPrev ? -1 : 1;
            const itemIndex = (activeIndex + delta) % this._items.length;
            return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        }
        _triggerSlideEvent(relatedTarget, eventDirectionName) {
            const targetIndex = this._getItemIndex(relatedTarget);
            const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
            return EventHandler.trigger(this._element, EVENT_SLIDE, {
                relatedTarget,
                direction: eventDirectionName,
                from: fromIndex,
                to: targetIndex
            });
        }
        _setActiveIndicatorElement(element) {
            if (this._indicatorsElement) {
                const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
                activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                activeIndicator.removeAttribute('aria-current');
                const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);
                for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
                    indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
                    indicators[i].setAttribute('aria-current', 'true');
                    break;
                }
            }
        }
        _updateInterval() {
            const element3 = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            if (!element3) return;
            const elementInterval = Number.parseInt(element3.getAttribute('data-bs-interval'), 10);
            if (elementInterval) {
                this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                this._config.interval = elementInterval;
            } else this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(directionOrOrder, element) {
            const order = this._directionToOrder(directionOrOrder);
            const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            const activeElementIndex = this._getItemIndex(activeElement);
            const nextElement = element || this._getItemByOrder(order, activeElement);
            const nextElementIndex = this._getItemIndex(nextElement);
            const isCycling = Boolean(this._interval);
            const isNext = order === ORDER_NEXT;
            const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
            const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
            const eventDirectionName = this._orderToDirection(order);
            if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
                this._isSliding = false;
                return;
            }
            const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
            if (slideEvent.defaultPrevented) return;
            if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
            return;
            this._isSliding = true;
            if (isCycling) this.pause();
            this._setActiveIndicatorElement(nextElement);
            this._activeElement = nextElement;
            const triggerSlidEvent = ()=>{
                EventHandler.trigger(this._element, EVENT_SLID, {
                    relatedTarget: nextElement,
                    direction: eventDirectionName,
                    from: activeElementIndex,
                    to: nextElementIndex
                });
            };
            if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
                nextElement.classList.add(orderClassName);
                reflow(nextElement);
                activeElement.classList.add(directionalClassName);
                nextElement.classList.add(directionalClassName);
                const completeCallBack = ()=>{
                    nextElement.classList.remove(directionalClassName, orderClassName);
                    nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                    activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                    this._isSliding = false;
                    setTimeout(triggerSlidEvent, 0);
                };
                this._queueCallback(completeCallBack, activeElement, true);
            } else {
                activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
                nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                this._isSliding = false;
                triggerSlidEvent();
            }
            if (isCycling) this.cycle();
        }
        _directionToOrder(direction) {
            if (![
                DIRECTION_RIGHT,
                DIRECTION_LEFT
            ].includes(direction)) return direction;
            if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
            return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
        }
        _orderToDirection(order) {
            if (![
                ORDER_NEXT,
                ORDER_PREV
            ].includes(order)) return order;
            if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
            return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
        }
        static carouselInterface(element, config) {
            let data = Data.get(element, DATA_KEY$9);
            let _config = {
                ...Default$9,
                ...Manipulator.getDataAttributes(element)
            };
            if (typeof config === 'object') _config = {
                ..._config,
                ...config
            };
            const action = typeof config === 'string' ? config : _config.slide;
            if (!data) data = new Carousel(element, _config);
            if (typeof config === 'number') data.to(config);
            else if (typeof action === 'string') {
                if (typeof data[action] === 'undefined') throw new TypeError(`No method named "${action}"`);
                data[action]();
            } else if (_config.interval && _config.ride) {
                data.pause();
                data.cycle();
            }
        }
        static jQueryInterface(config) {
            return this.each(function() {
                Carousel.carouselInterface(this, config);
            });
        }
        static dataApiClickHandler(event) {
            const target = getElementFromSelector(this);
            if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
            const config2 = {
                ...Manipulator.getDataAttributes(target),
                ...Manipulator.getDataAttributes(this)
            };
            const slideIndex = this.getAttribute('data-bs-slide-to');
            if (slideIndex) config2.interval = false;
            Carousel.carouselInterface(target, config2);
            if (slideIndex) Data.get(target, DATA_KEY$9).to(slideIndex);
            event.preventDefault();
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
    EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
        const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
        for(let i = 0, len = carousels.length; i < len; i++)Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$9));
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */ defineJQueryPlugin(Carousel);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$9 = 'collapse';
    const DATA_KEY$8 = 'bs.collapse';
    const EVENT_KEY$8 = `.${DATA_KEY$8}`;
    const DATA_API_KEY$5 = '.data-api';
    const Default$8 = {
        toggle: true,
        parent: ''
    };
    const DefaultType$8 = {
        toggle: 'boolean',
        parent: '(string|element)'
    };
    const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
    const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
    const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
    const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
    const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
    const CLASS_NAME_SHOW$8 = 'show';
    const CLASS_NAME_COLLAPSE = 'collapse';
    const CLASS_NAME_COLLAPSING = 'collapsing';
    const CLASS_NAME_COLLAPSED = 'collapsed';
    const WIDTH = 'width';
    const HEIGHT = 'height';
    const SELECTOR_ACTIVES = '.show, .collapsing';
    const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Collapse extends BaseComponent {
        constructor(element3, config2){
            super(element3);
            this._isTransitioning = false;
            this._config = this._getConfig(config2);
            this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
            const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
            for(let i = 0, len = toggleList.length; i < len; i++){
                const elem = toggleList[i];
                const selector = getSelectorFromElement(elem);
                const filterElement = SelectorEngine.find(selector).filter((foundElem)=>foundElem === this._element
                );
                if (selector !== null && filterElement.length) {
                    this._selector = selector;
                    this._triggerArray.push(elem);
                }
            }
            this._parent = this._config.parent ? this._getParent() : null;
            if (!this._config.parent) this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            if (this._config.toggle) this.toggle();
        }
        static get Default() {
            return Default$8;
        }
        static get NAME() {
            return NAME$9;
        }
        toggle() {
            if (this._element.classList.contains(CLASS_NAME_SHOW$8)) this.hide();
            else this.show();
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) return;
            let actives;
            let activesData;
            if (this._parent) {
                actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter((elem)=>{
                    if (typeof this._config.parent === 'string') return elem.getAttribute('data-bs-parent') === this._config.parent;
                    return elem.classList.contains(CLASS_NAME_COLLAPSE);
                });
                if (actives.length === 0) actives = null;
            }
            const container = SelectorEngine.findOne(this._selector);
            if (actives) {
                const tempActiveData = actives.find((elem)=>container !== elem
                );
                activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$8) : null;
                if (activesData && activesData._isTransitioning) return;
            }
            const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
            if (startEvent.defaultPrevented) return;
            if (actives) actives.forEach((elemActive)=>{
                if (container !== elemActive) Collapse.collapseInterface(elemActive, 'hide');
                if (!activesData) Data.set(elemActive, DATA_KEY$8, null);
            });
            const dimension = this._getDimension();
            this._element.classList.remove(CLASS_NAME_COLLAPSE);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.style[dimension] = 0;
            if (this._triggerArray.length) this._triggerArray.forEach((element4)=>{
                element4.classList.remove(CLASS_NAME_COLLAPSED);
                element4.setAttribute('aria-expanded', true);
            });
            this.setTransitioning(true);
            const complete = ()=>{
                this._element.classList.remove(CLASS_NAME_COLLAPSING);
                this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);
                this._element.style[dimension] = '';
                this.setTransitioning(false);
                EventHandler.trigger(this._element, EVENT_SHOWN$5);
            };
            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;
            this._queueCallback(complete, this._element, true);
            this._element.style[dimension] = `${this._element[scrollSize]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$8)) return;
            const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
            if (startEvent.defaultPrevented) return;
            const dimension = this._getDimension();
            this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);
            const triggerArrayLength = this._triggerArray.length;
            if (triggerArrayLength > 0) for(let i1 = 0; i1 < triggerArrayLength; i1++){
                const trigger = this._triggerArray[i1];
                const elem = getElementFromSelector(trigger);
                if (elem && !elem.classList.contains(CLASS_NAME_SHOW$8)) {
                    trigger.classList.add(CLASS_NAME_COLLAPSED);
                    trigger.setAttribute('aria-expanded', false);
                }
            }
            this.setTransitioning(true);
            const complete = ()=>{
                this.setTransitioning(false);
                this._element.classList.remove(CLASS_NAME_COLLAPSING);
                this._element.classList.add(CLASS_NAME_COLLAPSE);
                EventHandler.trigger(this._element, EVENT_HIDDEN$5);
            };
            this._element.style[dimension] = '';
            this._queueCallback(complete, this._element, true);
        }
        setTransitioning(isTransitioning) {
            this._isTransitioning = isTransitioning;
        }
        _getConfig(config) {
            config = {
                ...Default$8,
                ...config
            };
            config.toggle = Boolean(config.toggle); // Coerce string values
            typeCheckConfig(NAME$9, config, DefaultType$8);
            return config;
        }
        _getDimension() {
            return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
        }
        _getParent() {
            let { parent  } = this._config;
            parent = getElement(parent);
            const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
            SelectorEngine.find(selector, parent).forEach((element4)=>{
                const selected = getElementFromSelector(element4);
                this._addAriaAndCollapsedClass(selected, [
                    element4
                ]);
            });
            return parent;
        }
        _addAriaAndCollapsedClass(element, triggerArray) {
            if (!element || !triggerArray.length) return;
            const isOpen = element.classList.contains(CLASS_NAME_SHOW$8);
            triggerArray.forEach((elem)=>{
                if (isOpen) elem.classList.remove(CLASS_NAME_COLLAPSED);
                else elem.classList.add(CLASS_NAME_COLLAPSED);
                elem.setAttribute('aria-expanded', isOpen);
            });
        }
        static collapseInterface(element, config) {
            let data = Data.get(element, DATA_KEY$8);
            const _config = {
                ...Default$8,
                ...Manipulator.getDataAttributes(element),
                ...typeof config === 'object' && config ? config : {
                }
            };
            if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) _config.toggle = false;
            if (!data) data = new Collapse(element, _config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        }
        static jQueryInterface(config) {
            return this.each(function() {
                Collapse.collapseInterface(this, config);
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') event.preventDefault();
        const triggerData = Manipulator.getDataAttributes(this);
        const selector = getSelectorFromElement(this);
        const selectorElements = SelectorEngine.find(selector);
        selectorElements.forEach((element4)=>{
            const data = Data.get(element4, DATA_KEY$8);
            let config3;
            if (data) {
                // update parent attribute
                if (data._parent === null && typeof triggerData.parent === 'string') {
                    data._config.parent = triggerData.parent;
                    data._parent = data._getParent();
                }
                config3 = 'toggle';
            } else config3 = triggerData;
            Collapse.collapseInterface(element4, config3);
        });
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */ defineJQueryPlugin(Collapse);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$8 = 'dropdown';
    const DATA_KEY$7 = 'bs.dropdown';
    const EVENT_KEY$7 = `.${DATA_KEY$7}`;
    const DATA_API_KEY$4 = '.data-api';
    const ESCAPE_KEY$2 = 'Escape';
    const SPACE_KEY = 'Space';
    const TAB_KEY = 'Tab';
    const ARROW_UP_KEY = 'ArrowUp';
    const ARROW_DOWN_KEY = 'ArrowDown';
    const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
    const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
    const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
    const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
    const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
    const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
    const EVENT_CLICK = `click${EVENT_KEY$7}`;
    const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const CLASS_NAME_SHOW$7 = 'show';
    const CLASS_NAME_DROPUP = 'dropup';
    const CLASS_NAME_DROPEND = 'dropend';
    const CLASS_NAME_DROPSTART = 'dropstart';
    const CLASS_NAME_NAVBAR = 'navbar';
    const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
    const SELECTOR_MENU = '.dropdown-menu';
    const SELECTOR_NAVBAR_NAV = '.navbar-nav';
    const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
    const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
    const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
    const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
    const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
    const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
    const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
    const Default$7 = {
        offset: [
            0,
            2
        ],
        boundary: 'clippingParents',
        reference: 'toggle',
        display: 'dynamic',
        popperConfig: null,
        autoClose: true
    };
    const DefaultType$7 = {
        offset: '(array|string|function)',
        boundary: '(string|element)',
        reference: '(string|element|object)',
        display: 'string',
        popperConfig: '(null|object|function)',
        autoClose: '(boolean|string)'
    };
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Dropdown extends BaseComponent {
        constructor(element4, config3){
            super(element4);
            this._popper = null;
            this._config = this._getConfig(config3);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners();
        }
        static get Default() {
            return Default$7;
        }
        static get DefaultType() {
            return DefaultType$7;
        }
        static get NAME() {
            return NAME$8;
        }
        toggle() {
            if (isDisabled(this._element)) return;
            const isActive = this._element.classList.contains(CLASS_NAME_SHOW$7);
            if (isActive) {
                this.hide();
                return;
            }
            this.show();
        }
        show() {
            if (isDisabled(this._element) || this._menu.classList.contains(CLASS_NAME_SHOW$7)) return;
            const parent = Dropdown.getParentFromElement(this._element);
            const relatedTarget = {
                relatedTarget: this._element
            };
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);
            if (showEvent.defaultPrevented) return;
             // Totally disable Popper for Dropdowns in Navbar
            if (this._inNavbar) Manipulator.setDataAttribute(this._menu, 'popper', 'none');
            else {
                if (typeof Popper__namespace === 'undefined') throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
                let referenceElement = this._element;
                if (this._config.reference === 'parent') referenceElement = parent;
                else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
                else if (typeof this._config.reference === 'object') referenceElement = this._config.reference;
                const popperConfig = this._getPopperConfig();
                const isDisplayStatic = popperConfig.modifiers.find((modifier)=>modifier.name === 'applyStyles' && modifier.enabled === false
                );
                this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
                if (isDisplayStatic) Manipulator.setDataAttribute(this._menu, 'popper', 'static');
            } // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) [].concat(...document.body.children).forEach((elem)=>EventHandler.on(elem, 'mouseover', noop)
            );
            this._element.focus();
            this._element.setAttribute('aria-expanded', true);
            this._menu.classList.toggle(CLASS_NAME_SHOW$7);
            this._element.classList.toggle(CLASS_NAME_SHOW$7);
            EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
        }
        hide() {
            if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) return;
            const relatedTarget = {
                relatedTarget: this._element
            };
            this._completeHide(relatedTarget);
        }
        dispose() {
            if (this._popper) this._popper.destroy();
            super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar();
            if (this._popper) this._popper.update();
        }
        _addEventListeners() {
            EventHandler.on(this._element, EVENT_CLICK, (event)=>{
                event.preventDefault();
                this.toggle();
            });
        }
        _completeHide(relatedTarget) {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
            if (hideEvent.defaultPrevented) return;
             // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((elem)=>EventHandler.off(elem, 'mouseover', noop)
            );
            if (this._popper) this._popper.destroy();
            this._menu.classList.remove(CLASS_NAME_SHOW$7);
            this._element.classList.remove(CLASS_NAME_SHOW$7);
            this._element.setAttribute('aria-expanded', 'false');
            Manipulator.removeDataAttribute(this._menu, 'popper');
            EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
        }
        _getConfig(config) {
            config = {
                ...this.constructor.Default,
                ...Manipulator.getDataAttributes(this._element),
                ...config
            };
            typeCheckConfig(NAME$8, config, this.constructor.DefaultType);
            if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') // Popper virtual elements require a getBoundingClientRect method
            throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return config;
        }
        _getMenuElement() {
            return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
        }
        _getPlacement() {
            const parentDropdown = this._element.parentNode;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
             // We need to trim the value because custom properties can also include spaces
            const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
            return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
        }
        _detectNavbar() {
            return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
        }
        _getOffset() {
            const { offset  } = this._config;
            if (typeof offset === 'string') return offset.split(',').map((val)=>Number.parseInt(val, 10)
            );
            if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element)
            ;
            return offset;
        }
        _getPopperConfig() {
            const defaultBsPopperConfig = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            }; // Disable Popper if we have a static display
            if (this._config.display === 'static') defaultBsPopperConfig.modifiers = [
                {
                    name: 'applyStyles',
                    enabled: false
                }
            ];
            return {
                ...defaultBsPopperConfig,
                ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
            };
        }
        _selectMenuItem(event) {
            const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
            if (!items.length) return;
            let index = items.indexOf(event.target); // Up
            if (event.key === ARROW_UP_KEY && index > 0) index--;
             // Down
            if (event.key === ARROW_DOWN_KEY && index < items.length - 1) index++;
             // index is -1 if the first keydown is an ArrowUp
            index = index === -1 ? 0 : index;
            items[index].focus();
        }
        static dropdownInterface(element, config) {
            let data = Data.get(element, DATA_KEY$7);
            const _config = typeof config === 'object' ? config : null;
            if (!data) data = new Dropdown(element, _config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        }
        static jQueryInterface(config) {
            return this.each(function() {
                Dropdown.dropdownInterface(this, config);
            });
        }
        static clearMenus(event) {
            if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) return;
            const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
            for(let i1 = 0, len1 = toggles.length; i1 < len1; i1++){
                const context = Data.get(toggles[i1], DATA_KEY$7);
                if (!context || context._config.autoClose === false) continue;
                if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) continue;
                const relatedTarget = {
                    relatedTarget: context._element
                };
                if (event) {
                    const composedPath = event.composedPath();
                    const isMenuTarget = composedPath.includes(context._menu);
                    if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) continue;
                     // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                    if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
                    if (event.type === 'click') relatedTarget.clickEvent = event;
                }
                context._completeHide(relatedTarget);
            }
        }
        static getParentFromElement(element) {
            return getElementFromSelector(element) || element.parentNode;
        }
        static dataApiKeydownHandler(event) {
            // If not input/textarea:
            //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
            // If input/textarea:
            //  - If space key => not a dropdown command
            //  - If key is other than escape
            //    - If key is not up or down => not a dropdown command
            //    - If trigger inside the menu => not a dropdown command
            if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) return;
            const isActive = this.classList.contains(CLASS_NAME_SHOW$7);
            if (!isActive && event.key === ESCAPE_KEY$2) return;
            event.preventDefault();
            event.stopPropagation();
            if (isDisabled(this)) return;
            const getToggleButton = ()=>this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0]
            ;
            if (event.key === ESCAPE_KEY$2) {
                getToggleButton().focus();
                Dropdown.clearMenus();
                return;
            }
            if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
                getToggleButton().click();
                return;
            }
            if (!isActive || event.key === SPACE_KEY) {
                Dropdown.clearMenus();
                return;
            }
            Dropdown.getInstance(getToggleButton())._selectMenuItem(event);
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
        event.preventDefault();
        Dropdown.dropdownInterface(this);
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */ defineJQueryPlugin(Dropdown);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
    const SELECTOR_STICKY_CONTENT = '.sticky-top';
    const getWidth = ()=>{
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    };
    const hide = (width = getWidth())=>{
        _disableOverFlow(); // give padding to element to balances the hidden scrollbar width
        _setElementAttributes('body', 'paddingRight', (calculatedValue)=>calculatedValue + width
        ); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements, to keep shown fullwidth
        _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', (calculatedValue)=>calculatedValue + width
        );
        _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', (calculatedValue)=>calculatedValue - width
        );
    };
    const _disableOverFlow = ()=>{
        const actualValue = document.body.style.overflow;
        if (actualValue) Manipulator.setDataAttribute(document.body, 'overflow', actualValue);
        document.body.style.overflow = 'hidden';
    };
    const _setElementAttributes = (selector, styleProp, callback)=>{
        const scrollbarWidth = getWidth();
        SelectorEngine.find(selector).forEach((element5)=>{
            if (element5 !== document.body && window.innerWidth > element5.clientWidth + scrollbarWidth) return;
            const actualValue = element5.style[styleProp];
            const calculatedValue = window.getComputedStyle(element5)[styleProp];
            Manipulator.setDataAttribute(element5, styleProp, actualValue);
            element5.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
        });
    };
    const reset = ()=>{
        _resetElementAttributes('body', 'overflow');
        _resetElementAttributes('body', 'paddingRight');
        _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
        _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    };
    const _resetElementAttributes = (selector, styleProp)=>{
        SelectorEngine.find(selector).forEach((element5)=>{
            const value = Manipulator.getDataAttribute(element5, styleProp);
            if (typeof value === 'undefined') element5.style.removeProperty(styleProp);
            else {
                Manipulator.removeDataAttribute(element5, styleProp);
                element5.style[styleProp] = value;
            }
        });
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */ const Default$6 = {
        isVisible: true,
        // if false, we use the backdrop helper without adding any element to the dom
        isAnimated: false,
        rootElement: document.body,
        // give the choice to place backdrop under different elements
        clickCallback: null
    };
    const DefaultType$6 = {
        isVisible: 'boolean',
        isAnimated: 'boolean',
        rootElement: 'element',
        clickCallback: '(function|null)'
    };
    const NAME$7 = 'backdrop';
    const CLASS_NAME_BACKDROP = 'modal-backdrop';
    const CLASS_NAME_FADE$5 = 'fade';
    const CLASS_NAME_SHOW$6 = 'show';
    const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$7}`;
    class Backdrop {
        constructor(config4){
            this._config = this._getConfig(config4);
            this._isAppended = false;
            this._element = null;
        }
        show(callback) {
            if (!this._config.isVisible) {
                execute(callback);
                return;
            }
            this._append();
            if (this._config.isAnimated) reflow(this._getElement());
            this._getElement().classList.add(CLASS_NAME_SHOW$6);
            this._emulateAnimation(()=>{
                execute(callback);
            });
        }
        hide(callback) {
            if (!this._config.isVisible) {
                execute(callback);
                return;
            }
            this._getElement().classList.remove(CLASS_NAME_SHOW$6);
            this._emulateAnimation(()=>{
                this.dispose();
                execute(callback);
            });
        }
        _getElement() {
            if (!this._element) {
                const backdrop = document.createElement('div');
                backdrop.className = CLASS_NAME_BACKDROP;
                if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$5);
                this._element = backdrop;
            }
            return this._element;
        }
        _getConfig(config) {
            config = {
                ...Default$6,
                ...typeof config === 'object' ? config : {
                }
            };
            config.rootElement = config.rootElement || document.body;
            typeCheckConfig(NAME$7, config, DefaultType$6);
            return config;
        }
        _append() {
            if (this._isAppended) return;
            this._config.rootElement.appendChild(this._getElement());
            EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, ()=>{
                execute(this._config.clickCallback);
            });
            this._isAppended = true;
        }
        dispose() {
            if (!this._isAppended) return;
            EventHandler.off(this._element, EVENT_MOUSEDOWN);
            this._getElement().parentNode.removeChild(this._element);
            this._isAppended = false;
        }
        _emulateAnimation(callback) {
            if (!this._config.isAnimated) {
                execute(callback);
                return;
            }
            const backdropTransitionDuration = getTransitionDurationFromElement(this._getElement());
            EventHandler.one(this._getElement(), 'transitionend', ()=>execute(callback)
            );
            emulateTransitionEnd(this._getElement(), backdropTransitionDuration);
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$6 = 'modal';
    const DATA_KEY$6 = 'bs.modal';
    const EVENT_KEY$6 = `.${DATA_KEY$6}`;
    const DATA_API_KEY$3 = '.data-api';
    const ESCAPE_KEY$1 = 'Escape';
    const Default$5 = {
        backdrop: true,
        keyboard: true,
        focus: true
    };
    const DefaultType$5 = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean'
    };
    const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
    const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
    const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
    const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
    const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
    const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$6}`;
    const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
    const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
    const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
    const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
    const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
    const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
    const CLASS_NAME_OPEN = 'modal-open';
    const CLASS_NAME_FADE$4 = 'fade';
    const CLASS_NAME_SHOW$5 = 'show';
    const CLASS_NAME_STATIC = 'modal-static';
    const SELECTOR_DIALOG = '.modal-dialog';
    const SELECTOR_MODAL_BODY = '.modal-body';
    const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
    const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Modal extends BaseComponent {
        constructor(element5, config5){
            super(element5);
            this._config = this._getConfig(config5);
            this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
            this._backdrop = this._initializeBackDrop();
            this._isShown = false;
            this._ignoreBackdropClick = false;
            this._isTransitioning = false;
        }
        static get Default() {
            return Default$5;
        }
        static get NAME() {
            return NAME$6;
        }
        toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
            if (this._isShown || this._isTransitioning) return;
            if (this._isAnimated()) this._isTransitioning = true;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                relatedTarget
            });
            if (this._isShown || showEvent.defaultPrevented) return;
            this._isShown = true;
            hide();
            document.body.classList.add(CLASS_NAME_OPEN);
            this._adjustDialog();
            this._setEscapeEvent();
            this._setResizeEvent();
            EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, (event)=>this.hide(event)
            );
            EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, ()=>{
                EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, (event)=>{
                    if (event.target === this._element) this._ignoreBackdropClick = true;
                });
            });
            this._showBackdrop(()=>this._showElement(relatedTarget)
            );
        }
        hide(event) {
            if (event) event.preventDefault();
            if (!this._isShown || this._isTransitioning) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
            if (hideEvent.defaultPrevented) return;
            this._isShown = false;
            const isAnimated = this._isAnimated();
            if (isAnimated) this._isTransitioning = true;
            this._setEscapeEvent();
            this._setResizeEvent();
            EventHandler.off(document, EVENT_FOCUSIN$2);
            this._element.classList.remove(CLASS_NAME_SHOW$5);
            EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
            EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
            this._queueCallback(()=>this._hideModal()
            , this._element, isAnimated);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((htmlElement)=>EventHandler.off(htmlElement, EVENT_KEY$6)
            );
            this._backdrop.dispose();
            super.dispose();
            /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */ EventHandler.off(document, EVENT_FOCUSIN$2);
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Backdrop({
                isVisible: Boolean(this._config.backdrop),
                // 'static' option will be translated to true, and booleans will keep their value
                isAnimated: this._isAnimated()
            });
        }
        _getConfig(config) {
            config = {
                ...Default$5,
                ...Manipulator.getDataAttributes(this._element),
                ...config
            };
            typeCheckConfig(NAME$6, config, DefaultType$5);
            return config;
        }
        _showElement(relatedTarget) {
            const isAnimated = this._isAnimated();
            const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) // Don't move modal's DOM position
            document.body.appendChild(this._element);
            this._element.style.display = 'block';
            this._element.removeAttribute('aria-hidden');
            this._element.setAttribute('aria-modal', true);
            this._element.setAttribute('role', 'dialog');
            this._element.scrollTop = 0;
            if (modalBody) modalBody.scrollTop = 0;
            if (isAnimated) reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOW$5);
            if (this._config.focus) this._enforceFocus();
            const transitionComplete = ()=>{
                if (this._config.focus) this._element.focus();
                this._isTransitioning = false;
                EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                    relatedTarget
                });
            };
            this._queueCallback(transitionComplete, this._dialog, isAnimated);
        }
        _enforceFocus() {
            EventHandler.off(document, EVENT_FOCUSIN$2); // guard against infinite focus loop
            EventHandler.on(document, EVENT_FOCUSIN$2, (event)=>{
                if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) this._element.focus();
            });
        }
        _setEscapeEvent() {
            if (this._isShown) EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
                if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
                    event.preventDefault();
                    this.hide();
                } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) this._triggerBackdropTransition();
            });
            else EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
        }
        _setResizeEvent() {
            if (this._isShown) EventHandler.on(window, EVENT_RESIZE, ()=>this._adjustDialog()
            );
            else EventHandler.off(window, EVENT_RESIZE);
        }
        _hideModal() {
            this._element.style.display = 'none';
            this._element.setAttribute('aria-hidden', true);
            this._element.removeAttribute('aria-modal');
            this._element.removeAttribute('role');
            this._isTransitioning = false;
            this._backdrop.hide(()=>{
                document.body.classList.remove(CLASS_NAME_OPEN);
                this._resetAdjustments();
                reset();
                EventHandler.trigger(this._element, EVENT_HIDDEN$3);
            });
        }
        _showBackdrop(callback) {
            EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, (event)=>{
                if (this._ignoreBackdropClick) {
                    this._ignoreBackdropClick = false;
                    return;
                }
                if (event.target !== event.currentTarget) return;
                if (this._config.backdrop === true) this.hide();
                else if (this._config.backdrop === 'static') this._triggerBackdropTransition();
            });
            this._backdrop.show(callback);
        }
        _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_FADE$4);
        }
        _triggerBackdropTransition() {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
            if (hideEvent.defaultPrevented) return;
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            if (!isModalOverflowing) this._element.style.overflowY = 'hidden';
            this._element.classList.add(CLASS_NAME_STATIC);
            const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
            EventHandler.off(this._element, 'transitionend');
            EventHandler.one(this._element, 'transitionend', ()=>{
                this._element.classList.remove(CLASS_NAME_STATIC);
                if (!isModalOverflowing) {
                    EventHandler.one(this._element, 'transitionend', ()=>{
                        this._element.style.overflowY = '';
                    });
                    emulateTransitionEnd(this._element, modalTransitionDuration);
                }
            });
            emulateTransitionEnd(this._element, modalTransitionDuration);
            this._element.focus();
        }
        // the following methods are used to handle overflowing modals
        // ----------------------------------------------------------------------
        _adjustDialog() {
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            const scrollbarWidth = getWidth();
            const isBodyOverflowing = scrollbarWidth > 0;
            if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) this._element.style.paddingLeft = `${scrollbarWidth}px`;
            if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) this._element.style.paddingRight = `${scrollbarWidth}px`;
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = '';
            this._element.style.paddingRight = '';
        }
        static jQueryInterface(config, relatedTarget) {
            return this.each(function() {
                const data = Modal.getInstance(this) || new Modal(this, typeof config === 'object' ? config : {
                });
                if (typeof config !== 'string') return;
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config](relatedTarget);
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
        const target = getElementFromSelector(this);
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        EventHandler.one(target, EVENT_SHOW$3, (showEvent)=>{
            if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
            return;
            EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
                if (isVisible(this)) this.focus();
            });
        });
        const data = Modal.getInstance(target) || new Modal(target);
        data.toggle(this);
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */ defineJQueryPlugin(Modal);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$5 = 'offcanvas';
    const DATA_KEY$5 = 'bs.offcanvas';
    const EVENT_KEY$5 = `.${DATA_KEY$5}`;
    const DATA_API_KEY$2 = '.data-api';
    const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
    const ESCAPE_KEY = 'Escape';
    const Default$4 = {
        backdrop: true,
        keyboard: true,
        scroll: false
    };
    const DefaultType$4 = {
        backdrop: 'boolean',
        keyboard: 'boolean',
        scroll: 'boolean'
    };
    const CLASS_NAME_SHOW$4 = 'show';
    const OPEN_SELECTOR = '.offcanvas.show';
    const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
    const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
    const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
    const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
    const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$5}`;
    const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
    const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
    const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
    const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
    const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Offcanvas extends BaseComponent {
        constructor(element6, config6){
            super(element6);
            this._config = this._getConfig(config6);
            this._isShown = false;
            this._backdrop = this._initializeBackDrop();
            this._addEventListeners();
        }
        static get NAME() {
            return NAME$5;
        }
        static get Default() {
            return Default$4;
        }
        toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
            if (this._isShown) return;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
                relatedTarget
            });
            if (showEvent.defaultPrevented) return;
            this._isShown = true;
            this._element.style.visibility = 'visible';
            this._backdrop.show();
            if (!this._config.scroll) {
                hide();
                this._enforceFocusOnElement(this._element);
            }
            this._element.removeAttribute('aria-hidden');
            this._element.setAttribute('aria-modal', true);
            this._element.setAttribute('role', 'dialog');
            this._element.classList.add(CLASS_NAME_SHOW$4);
            const completeCallBack = ()=>{
                EventHandler.trigger(this._element, EVENT_SHOWN$2, {
                    relatedTarget
                });
            };
            this._queueCallback(completeCallBack, this._element, true);
        }
        hide() {
            if (!this._isShown) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
            if (hideEvent.defaultPrevented) return;
            EventHandler.off(document, EVENT_FOCUSIN$1);
            this._element.blur();
            this._isShown = false;
            this._element.classList.remove(CLASS_NAME_SHOW$4);
            this._backdrop.hide();
            const completeCallback = ()=>{
                this._element.setAttribute('aria-hidden', true);
                this._element.removeAttribute('aria-modal');
                this._element.removeAttribute('role');
                this._element.style.visibility = 'hidden';
                if (!this._config.scroll) reset();
                EventHandler.trigger(this._element, EVENT_HIDDEN$2);
            };
            this._queueCallback(completeCallback, this._element, true);
        }
        dispose() {
            this._backdrop.dispose();
            super.dispose();
            EventHandler.off(document, EVENT_FOCUSIN$1);
        }
        _getConfig(config) {
            config = {
                ...Default$4,
                ...Manipulator.getDataAttributes(this._element),
                ...typeof config === 'object' ? config : {
                }
            };
            typeCheckConfig(NAME$5, config, DefaultType$4);
            return config;
        }
        _initializeBackDrop() {
            return new Backdrop({
                isVisible: this._config.backdrop,
                isAnimated: true,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _enforceFocusOnElement(element) {
            EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop
            EventHandler.on(document, EVENT_FOCUSIN$1, (event)=>{
                if (document !== event.target && element !== event.target && !element.contains(event.target)) element.focus();
            });
            element.focus();
        }
        _addEventListeners() {
            EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, ()=>this.hide()
            );
            EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
                if (this._config.keyboard && event.key === ESCAPE_KEY) this.hide();
            });
        }
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Data.get(this, DATA_KEY$5) || new Offcanvas(this, typeof config === 'object' ? config : {
                });
                if (typeof config !== 'string') return;
                if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
                data[config](this);
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
        const target = getElementFromSelector(this);
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        EventHandler.one(target, EVENT_HIDDEN$2, ()=>{
            // focus on trigger when it is closed
            if (isVisible(this)) this.focus();
        }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
        const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
        if (allReadyOpen && allReadyOpen !== target) Offcanvas.getInstance(allReadyOpen).hide();
        const data = Data.get(target, DATA_KEY$5) || new Offcanvas(target);
        data.toggle(this);
    });
    EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
        SelectorEngine.find(OPEN_SELECTOR).forEach((el)=>(Data.get(el, DATA_KEY$5) || new Offcanvas(el)).show()
        );
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */ defineJQueryPlugin(Offcanvas);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const uriAttrs = new Set([
        'background',
        'cite',
        'href',
        'itemtype',
        'longdesc',
        'poster',
        'src',
        'xlink:href'
    ]);
    const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */ const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
    /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */ const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    const allowedAttribute = (attr, allowedAttributeList)=>{
        const attrName = attr.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attrName)) {
            if (uriAttrs.has(attrName)) return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
            return true;
        }
        const regExp = allowedAttributeList.filter((attrRegex)=>attrRegex instanceof RegExp
        ); // Check if a regular expression validates the attribute.
        for(let i1 = 0, len1 = regExp.length; i1 < len1; i1++){
            if (regExp[i1].test(attrName)) return true;
        }
        return false;
    };
    const DefaultAllowlist = {
        // Global attributes allowed on any supplied element below.
        '*': [
            'class',
            'dir',
            'id',
            'lang',
            'role',
            ARIA_ATTRIBUTE_PATTERN
        ],
        a: [
            'target',
            'href',
            'title',
            'rel'
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            'src',
            'srcset',
            'alt',
            'title',
            'width',
            'height'
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
        if (!unsafeHtml.length) return unsafeHtml;
        if (sanitizeFn && typeof sanitizeFn === 'function') return sanitizeFn(unsafeHtml);
        const domParser = new window.DOMParser();
        const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
        const allowlistKeys = Object.keys(allowList);
        const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
        for(let i1 = 0, len1 = elements.length; i1 < len1; i1++){
            const el = elements[i1];
            const elName = el.nodeName.toLowerCase();
            if (!allowlistKeys.includes(elName)) {
                el.parentNode.removeChild(el);
                continue;
            }
            const attributeList = [].concat(...el.attributes);
            const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
            attributeList.forEach((attr)=>{
                if (!allowedAttribute(attr, allowedAttributes)) el.removeAttribute(attr.nodeName);
            });
        }
        return createdDocument.body.innerHTML;
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$4 = 'tooltip';
    const DATA_KEY$4 = 'bs.tooltip';
    const EVENT_KEY$4 = `.${DATA_KEY$4}`;
    const CLASS_PREFIX$1 = 'bs-tooltip';
    const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, 'g');
    const DISALLOWED_ATTRIBUTES = new Set([
        'sanitize',
        'allowList',
        'sanitizeFn'
    ]);
    const DefaultType$3 = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(array|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacements: 'array',
        boundary: '(string|element)',
        customClass: '(string|function)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        allowList: 'object',
        popperConfig: '(null|object|function)'
    };
    const AttachmentMap = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: isRTL() ? 'left' : 'right',
        BOTTOM: 'bottom',
        LEFT: isRTL() ? 'right' : 'left'
    };
    const Default$3 = {
        animation: true,
        template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        selector: false,
        placement: 'top',
        offset: [
            0,
            0
        ],
        container: false,
        fallbackPlacements: [
            'top',
            'right',
            'bottom',
            'left'
        ],
        boundary: 'clippingParents',
        customClass: '',
        sanitize: true,
        sanitizeFn: null,
        allowList: DefaultAllowlist,
        popperConfig: null
    };
    const Event$2 = {
        HIDE: `hide${EVENT_KEY$4}`,
        HIDDEN: `hidden${EVENT_KEY$4}`,
        SHOW: `show${EVENT_KEY$4}`,
        SHOWN: `shown${EVENT_KEY$4}`,
        INSERTED: `inserted${EVENT_KEY$4}`,
        CLICK: `click${EVENT_KEY$4}`,
        FOCUSIN: `focusin${EVENT_KEY$4}`,
        FOCUSOUT: `focusout${EVENT_KEY$4}`,
        MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
        MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
    };
    const CLASS_NAME_FADE$3 = 'fade';
    const CLASS_NAME_MODAL = 'modal';
    const CLASS_NAME_SHOW$3 = 'show';
    const HOVER_STATE_SHOW = 'show';
    const HOVER_STATE_OUT = 'out';
    const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
    const TRIGGER_HOVER = 'hover';
    const TRIGGER_FOCUS = 'focus';
    const TRIGGER_CLICK = 'click';
    const TRIGGER_MANUAL = 'manual';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Tooltip extends BaseComponent {
        constructor(element7, config7){
            if (typeof Popper__namespace === 'undefined') throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
            super(element7); // private
            this._isEnabled = true;
            this._timeout = 0;
            this._hoverState = '';
            this._activeTrigger = {
            };
            this._popper = null; // Protected
            this._config = this._getConfig(config7);
            this.tip = null;
            this._setListeners();
        }
        static get Default() {
            return Default$3;
        }
        static get NAME() {
            return NAME$4;
        }
        static get Event() {
            return Event$2;
        }
        static get DefaultType() {
            return DefaultType$3;
        }
        enable() {
            this._isEnabled = true;
        }
        disable() {
            this._isEnabled = false;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(event) {
            if (!this._isEnabled) return;
            if (event) {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger.click = !context._activeTrigger.click;
                if (context._isWithActiveTrigger()) context._enter(null, context);
                else context._leave(null, context);
            } else {
                if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
                    this._leave(null, this);
                    return;
                }
                this._enter(null, this);
            }
        }
        dispose() {
            clearTimeout(this._timeout);
            EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
            if (this.tip && this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);
            if (this._popper) this._popper.destroy();
            super.dispose();
        }
        show() {
            if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
            if (!(this.isWithContent() && this._isEnabled)) return;
            const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
            const shadowRoot = findShadowRoot(this._element);
            const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
            if (showEvent.defaultPrevented || !isInTheDom) return;
            const tip = this.getTipElement();
            const tipId = getUID(this.constructor.NAME);
            tip.setAttribute('id', tipId);
            this._element.setAttribute('aria-describedby', tipId);
            this.setContent();
            if (this._config.animation) tip.classList.add(CLASS_NAME_FADE$3);
            const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
            const attachment = this._getAttachment(placement);
            this._addAttachmentClass(attachment);
            const { container  } = this._config;
            Data.set(tip, this.constructor.DATA_KEY, this);
            if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                container.appendChild(tip);
                EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
            }
            if (this._popper) this._popper.update();
            else this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
            tip.classList.add(CLASS_NAME_SHOW$3);
            const customClass = typeof this._config.customClass === 'function' ? this._config.customClass() : this._config.customClass;
            if (customClass) tip.classList.add(...customClass.split(' '));
             // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((element8)=>{
                EventHandler.on(element8, 'mouseover', noop);
            });
            const complete = ()=>{
                const prevHoverState = this._hoverState;
                this._hoverState = null;
                EventHandler.trigger(this._element, this.constructor.Event.SHOWN);
                if (prevHoverState === HOVER_STATE_OUT) this._leave(null, this);
            };
            const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);
            this._queueCallback(complete, this.tip, isAnimated);
        }
        hide() {
            if (!this._popper) return;
            const tip = this.getTipElement();
            const complete = ()=>{
                if (this._isWithActiveTrigger()) return;
                if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) tip.parentNode.removeChild(tip);
                this._cleanTipClass();
                this._element.removeAttribute('aria-describedby');
                EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);
                if (this._popper) {
                    this._popper.destroy();
                    this._popper = null;
                }
            };
            const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
            if (hideEvent.defaultPrevented) return;
            tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((element8)=>EventHandler.off(element8, 'mouseover', noop)
            );
            this._activeTrigger[TRIGGER_CLICK] = false;
            this._activeTrigger[TRIGGER_FOCUS] = false;
            this._activeTrigger[TRIGGER_HOVER] = false;
            const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);
            this._queueCallback(complete, this.tip, isAnimated);
            this._hoverState = '';
        }
        update() {
            if (this._popper !== null) this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const element8 = document.createElement('div');
            element8.innerHTML = this._config.template;
            this.tip = element8.children[0];
            return this.tip;
        }
        setContent() {
            const tip = this.getTipElement();
            this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
            tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
        }
        setElementContent(element, content) {
            if (element === null) return;
            if (isElement(content)) {
                content = getElement(content); // content is a DOM node or a jQuery
                if (this._config.html) {
                    if (content.parentNode !== element) {
                        element.innerHTML = '';
                        element.appendChild(content);
                    }
                } else element.textContent = content.textContent;
                return;
            }
            if (this._config.html) {
                if (this._config.sanitize) content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
                element.innerHTML = content;
            } else element.textContent = content;
        }
        getTitle() {
            let title = this._element.getAttribute('data-bs-original-title');
            if (!title) title = typeof this._config.title === 'function' ? this._config.title.call(this._element) : this._config.title;
            return title;
        }
        updateAttachment(attachment) {
            if (attachment === 'right') return 'end';
            if (attachment === 'left') return 'start';
            return attachment;
        }
        _initializeOnDelegatedTarget(event, context) {
            const dataKey = this.constructor.DATA_KEY;
            context = context || Data.get(event.delegateTarget, dataKey);
            if (!context) {
                context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
                Data.set(event.delegateTarget, dataKey, context);
            }
            return context;
        }
        _getOffset() {
            const { offset  } = this._config;
            if (typeof offset === 'string') return offset.split(',').map((val)=>Number.parseInt(val, 10)
            );
            if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element)
            ;
            return offset;
        }
        _getPopperConfig(attachment) {
            const defaultBsPopperConfig = {
                placement: attachment,
                modifiers: [
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: 'preventOverflow',
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: 'onChange',
                        enabled: true,
                        phase: 'afterWrite',
                        fn: (data)=>this._handlePopperPlacementChange(data)
                    }
                ],
                onFirstUpdate: (data)=>{
                    if (data.options.placement !== data.placement) this._handlePopperPlacementChange(data);
                }
            };
            return {
                ...defaultBsPopperConfig,
                ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
            };
        }
        _addAttachmentClass(attachment) {
            this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
        }
        _getAttachment(placement) {
            return AttachmentMap[placement.toUpperCase()];
        }
        _setListeners() {
            const triggers = this._config.trigger.split(' ');
            triggers.forEach((trigger)=>{
                if (trigger === 'click') EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, (event)=>this.toggle(event)
                );
                else if (trigger !== TRIGGER_MANUAL) {
                    const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
                    const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    EventHandler.on(this._element, eventIn, this._config.selector, (event)=>this._enter(event)
                    );
                    EventHandler.on(this._element, eventOut, this._config.selector, (event)=>this._leave(event)
                    );
                }
            });
            this._hideModalHandler = ()=>{
                if (this._element) this.hide();
            };
            EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
            if (this._config.selector) this._config = {
                ...this._config,
                trigger: 'manual',
                selector: ''
            };
            else this._fixTitle();
        }
        _fixTitle() {
            const title = this._element.getAttribute('title');
            const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');
            if (title || originalTitleType !== 'string') {
                this._element.setAttribute('data-bs-original-title', title || '');
                if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) this._element.setAttribute('aria-label', title);
                this._element.setAttribute('title', '');
            }
        }
        _enter(event, context) {
            context = this._initializeOnDelegatedTarget(event, context);
            if (event) context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
                context._hoverState = HOVER_STATE_SHOW;
                return;
            }
            clearTimeout(context._timeout);
            context._hoverState = HOVER_STATE_SHOW;
            if (!context._config.delay || !context._config.delay.show) {
                context.show();
                return;
            }
            context._timeout = setTimeout(()=>{
                if (context._hoverState === HOVER_STATE_SHOW) context.show();
            }, context._config.delay.show);
        }
        _leave(event, context) {
            context = this._initializeOnDelegatedTarget(event, context);
            if (event) context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            if (context._isWithActiveTrigger()) return;
            clearTimeout(context._timeout);
            context._hoverState = HOVER_STATE_OUT;
            if (!context._config.delay || !context._config.delay.hide) {
                context.hide();
                return;
            }
            context._timeout = setTimeout(()=>{
                if (context._hoverState === HOVER_STATE_OUT) context.hide();
            }, context._config.delay.hide);
        }
        _isWithActiveTrigger() {
            for(const trigger in this._activeTrigger){
                if (this._activeTrigger[trigger]) return true;
            }
            return false;
        }
        _getConfig(config) {
            const dataAttributes = Manipulator.getDataAttributes(this._element);
            Object.keys(dataAttributes).forEach((dataAttr)=>{
                if (DISALLOWED_ATTRIBUTES.has(dataAttr)) delete dataAttributes[dataAttr];
            });
            config = {
                ...this.constructor.Default,
                ...dataAttributes,
                ...typeof config === 'object' && config ? config : {
                }
            };
            config.container = config.container === false ? document.body : getElement(config.container);
            if (typeof config.delay === 'number') config.delay = {
                show: config.delay,
                hide: config.delay
            };
            if (typeof config.title === 'number') config.title = config.title.toString();
            if (typeof config.content === 'number') config.content = config.content.toString();
            typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
            if (config.sanitize) config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
            return config;
        }
        _getDelegateConfig() {
            const config8 = {
            };
            if (this._config) {
                for(const key in this._config)if (this.constructor.Default[key] !== this._config[key]) config8[key] = this._config[key];
            }
            return config8;
        }
        _cleanTipClass() {
            const tip = this.getTipElement();
            const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);
            if (tabClass !== null && tabClass.length > 0) tabClass.map((token)=>token.trim()
            ).forEach((tClass)=>tip.classList.remove(tClass)
            );
        }
        _handlePopperPlacementChange(popperData) {
            const { state  } = popperData;
            if (!state) return;
            this.tip = state.elements.popper;
            this._cleanTipClass();
            this._addAttachmentClass(this._getAttachment(state.placement));
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$4);
                const _config = typeof config === 'object' && config;
                if (!data && /dispose|hide/.test(config)) return;
                if (!data) data = new Tooltip(this, _config);
                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */ defineJQueryPlugin(Tooltip);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$3 = 'popover';
    const DATA_KEY$3 = 'bs.popover';
    const EVENT_KEY$3 = `.${DATA_KEY$3}`;
    const CLASS_PREFIX = 'bs-popover';
    const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
    const Default$2 = {
        ...Tooltip.Default,
        placement: 'right',
        offset: [
            0,
            8
        ],
        trigger: 'click',
        content: '',
        template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
    };
    const DefaultType$2 = {
        ...Tooltip.DefaultType,
        content: '(string|element|function)'
    };
    const Event$1 = {
        HIDE: `hide${EVENT_KEY$3}`,
        HIDDEN: `hidden${EVENT_KEY$3}`,
        SHOW: `show${EVENT_KEY$3}`,
        SHOWN: `shown${EVENT_KEY$3}`,
        INSERTED: `inserted${EVENT_KEY$3}`,
        CLICK: `click${EVENT_KEY$3}`,
        FOCUSIN: `focusin${EVENT_KEY$3}`,
        FOCUSOUT: `focusout${EVENT_KEY$3}`,
        MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
        MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
    };
    const CLASS_NAME_FADE$2 = 'fade';
    const CLASS_NAME_SHOW$2 = 'show';
    const SELECTOR_TITLE = '.popover-header';
    const SELECTOR_CONTENT = '.popover-body';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Popover extends Tooltip {
        // Getters
        static get Default() {
            return Default$2;
        }
        static get NAME() {
            return NAME$3;
        }
        static get Event() {
            return Event$1;
        }
        static get DefaultType() {
            return DefaultType$2;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent() {
            const tip = this.getTipElement(); // we use append for html objects to maintain js events
            this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());
            let content = this._getContent();
            if (typeof content === 'function') content = content.call(this._element);
            this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
            tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        }
        _addAttachmentClass(attachment) {
            this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
        }
        _getContent() {
            return this._element.getAttribute('data-bs-content') || this._config.content;
        }
        _cleanTipClass() {
            const tip = this.getTipElement();
            const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);
            if (tabClass !== null && tabClass.length > 0) tabClass.map((token)=>token.trim()
            ).forEach((tClass)=>tip.classList.remove(tClass)
            );
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$3);
                const _config = typeof config === 'object' ? config : null;
                if (!data && /dispose|hide/.test(config)) return;
                if (!data) {
                    data = new Popover(this, _config);
                    Data.set(this, DATA_KEY$3, data);
                }
                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */ defineJQueryPlugin(Popover);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$2 = 'scrollspy';
    const DATA_KEY$2 = 'bs.scrollspy';
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const DATA_API_KEY$1 = '.data-api';
    const Default$1 = {
        offset: 10,
        method: 'auto',
        target: ''
    };
    const DefaultType$1 = {
        offset: 'number',
        method: 'string',
        target: '(string|element)'
    };
    const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
    const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
    const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
    const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
    const CLASS_NAME_ACTIVE$1 = 'active';
    const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
    const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
    const SELECTOR_NAV_LINKS = '.nav-link';
    const SELECTOR_NAV_ITEMS = '.nav-item';
    const SELECTOR_LIST_ITEMS = '.list-group-item';
    const SELECTOR_DROPDOWN$1 = '.dropdown';
    const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
    const METHOD_OFFSET = 'offset';
    const METHOD_POSITION = 'position';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class ScrollSpy extends BaseComponent {
        constructor(element8, config8){
            super(element8);
            this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
            this._config = this._getConfig(config8);
            this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            EventHandler.on(this._scrollElement, EVENT_SCROLL, ()=>this._process()
            );
            this.refresh();
            this._process();
        }
        static get Default() {
            return Default$1;
        }
        static get NAME() {
            return NAME$2;
        }
        refresh() {
            const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
            const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
            const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            const targets = SelectorEngine.find(this._selector);
            targets.map((element9)=>{
                const targetSelector = getSelectorFromElement(element9);
                const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
                if (target) {
                    const targetBCR = target.getBoundingClientRect();
                    if (targetBCR.width || targetBCR.height) return [
                        Manipulator[offsetMethod](target).top + offsetBase,
                        targetSelector
                    ];
                }
                return null;
            }).filter((item)=>item
            ).sort((a, b)=>a[0] - b[0]
            ).forEach((item)=>{
                this._offsets.push(item[0]);
                this._targets.push(item[1]);
            });
        }
        dispose() {
            EventHandler.off(this._scrollElement, EVENT_KEY$2);
            super.dispose();
        }
        _getConfig(config) {
            config = {
                ...Default$1,
                ...Manipulator.getDataAttributes(this._element),
                ...typeof config === 'object' && config ? config : {
                }
            };
            if (typeof config.target !== 'string' && isElement(config.target)) {
                let { id  } = config.target;
                if (!id) {
                    id = getUID(NAME$2);
                    config.target.id = id;
                }
                config.target = `#${id}`;
            }
            typeCheckConfig(NAME$2, config, DefaultType$1);
            return config;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const scrollTop = this._getScrollTop() + this._config.offset;
            const scrollHeight = this._getScrollHeight();
            const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
            if (this._scrollHeight !== scrollHeight) this.refresh();
            if (scrollTop >= maxScroll) {
                const target = this._targets[this._targets.length - 1];
                if (this._activeTarget !== target) this._activate(target);
                return;
            }
            if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                this._activeTarget = null;
                this._clear();
                return;
            }
            for(let i1 = this._offsets.length; i1--;){
                const isActiveTarget = this._activeTarget !== this._targets[i1] && scrollTop >= this._offsets[i1] && (typeof this._offsets[i1 + 1] === 'undefined' || scrollTop < this._offsets[i1 + 1]);
                if (isActiveTarget) this._activate(this._targets[i1]);
            }
        }
        _activate(target) {
            this._activeTarget = target;
            this._clear();
            const queries = this._selector.split(',').map((selector)=>`${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`
            );
            const link = SelectorEngine.findOne(queries.join(','));
            if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
                link.classList.add(CLASS_NAME_ACTIVE$1);
            } else {
                // Set triggered link as active
                link.classList.add(CLASS_NAME_ACTIVE$1);
                SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach((listGroup)=>{
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)
                    ); // Handle special case when .nav-link is inside .nav-item
                    SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach((navItem)=>{
                        SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)
                        );
                    });
                });
            }
            EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
                relatedTarget: target
            });
        }
        _clear() {
            SelectorEngine.find(this._selector).filter((node)=>node.classList.contains(CLASS_NAME_ACTIVE$1)
            ).forEach((node)=>node.classList.remove(CLASS_NAME_ACTIVE$1)
            );
        }
        static jQueryInterface(config) {
            return this.each(function() {
                const data = ScrollSpy.getInstance(this) || new ScrollSpy(this, typeof config === 'object' ? config : {
                });
                if (typeof config !== 'string') return;
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
        SelectorEngine.find(SELECTOR_DATA_SPY).forEach((spy)=>new ScrollSpy(spy)
        );
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */ defineJQueryPlugin(ScrollSpy);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME$1 = 'tab';
    const DATA_KEY$1 = 'bs.tab';
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const DATA_API_KEY = '.data-api';
    const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
    const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
    const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
    const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
    const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
    const CLASS_NAME_ACTIVE = 'active';
    const CLASS_NAME_FADE$1 = 'fade';
    const CLASS_NAME_SHOW$1 = 'show';
    const SELECTOR_DROPDOWN = '.dropdown';
    const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
    const SELECTOR_ACTIVE = '.active';
    const SELECTOR_ACTIVE_UL = ':scope > li > .active';
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
    const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
    const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Tab extends BaseComponent {
        // Getters
        static get NAME() {
            return NAME$1;
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) return;
            let previous;
            const target = getElementFromSelector(this._element);
            const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
            if (listElement) {
                const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
                previous = SelectorEngine.find(itemSelector, listElement);
                previous = previous[previous.length - 1];
            }
            const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
                relatedTarget: this._element
            }) : null;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
                relatedTarget: previous
            });
            if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
            this._activate(this._element, listElement);
            const complete = ()=>{
                EventHandler.trigger(previous, EVENT_HIDDEN$1, {
                    relatedTarget: this._element
                });
                EventHandler.trigger(this._element, EVENT_SHOWN$1, {
                    relatedTarget: previous
                });
            };
            if (target) this._activate(target, target.parentNode, complete);
            else complete();
        }
        _activate(element, container, callback) {
            const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
            const active = activeElements[0];
            const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);
            const complete = ()=>this._transitionComplete(element, active, callback)
            ;
            if (active && isTransitioning) {
                active.classList.remove(CLASS_NAME_SHOW$1);
                this._queueCallback(complete, element, true);
            } else complete();
        }
        _transitionComplete(element, active, callback) {
            if (active) {
                active.classList.remove(CLASS_NAME_ACTIVE);
                const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
                if (dropdownChild) dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
                if (active.getAttribute('role') === 'tab') active.setAttribute('aria-selected', false);
            }
            element.classList.add(CLASS_NAME_ACTIVE);
            if (element.getAttribute('role') === 'tab') element.setAttribute('aria-selected', true);
            reflow(element);
            if (element.classList.contains(CLASS_NAME_FADE$1)) element.classList.add(CLASS_NAME_SHOW$1);
            let parent = element.parentNode;
            if (parent && parent.nodeName === 'LI') parent = parent.parentNode;
            if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
                const dropdownElement = element.closest(SELECTOR_DROPDOWN);
                if (dropdownElement) SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach((dropdown)=>dropdown.classList.add(CLASS_NAME_ACTIVE)
                );
                element.setAttribute('aria-expanded', true);
            }
            if (callback) callback();
        }
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Data.get(this, DATA_KEY$1) || new Tab(this);
                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const data = Data.get(this, DATA_KEY$1) || new Tab(this);
        data.show();
    });
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */ defineJQueryPlugin(Tab);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */ const NAME = 'toast';
    const DATA_KEY = 'bs.toast';
    const EVENT_KEY = `.${DATA_KEY}`;
    const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
    const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
    const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
    const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
    const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
    const EVENT_HIDE = `hide${EVENT_KEY}`;
    const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
    const EVENT_SHOW = `show${EVENT_KEY}`;
    const EVENT_SHOWN = `shown${EVENT_KEY}`;
    const CLASS_NAME_FADE = 'fade';
    const CLASS_NAME_HIDE = 'hide';
    const CLASS_NAME_SHOW = 'show';
    const CLASS_NAME_SHOWING = 'showing';
    const DefaultType = {
        animation: 'boolean',
        autohide: 'boolean',
        delay: 'number'
    };
    const Default = {
        animation: true,
        autohide: true,
        delay: 5000
    };
    const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
    /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */ class Toast extends BaseComponent {
        constructor(element9, config9){
            super(element9);
            this._config = this._getConfig(config9);
            this._timeout = null;
            this._hasMouseInteraction = false;
            this._hasKeyboardInteraction = false;
            this._setListeners();
        }
        static get DefaultType() {
            return DefaultType;
        }
        static get Default() {
            return Default;
        }
        static get NAME() {
            return NAME;
        }
        show() {
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
            if (showEvent.defaultPrevented) return;
            this._clearTimeout();
            if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
            const complete = ()=>{
                this._element.classList.remove(CLASS_NAME_SHOWING);
                this._element.classList.add(CLASS_NAME_SHOW);
                EventHandler.trigger(this._element, EVENT_SHOWN);
                this._maybeScheduleHide();
            };
            this._element.classList.remove(CLASS_NAME_HIDE);
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOWING);
            this._queueCallback(complete, this._element, this._config.animation);
        }
        hide() {
            if (!this._element.classList.contains(CLASS_NAME_SHOW)) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (hideEvent.defaultPrevented) return;
            const complete = ()=>{
                this._element.classList.add(CLASS_NAME_HIDE);
                EventHandler.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.classList.remove(CLASS_NAME_SHOW);
            this._queueCallback(complete, this._element, this._config.animation);
        }
        dispose() {
            this._clearTimeout();
            if (this._element.classList.contains(CLASS_NAME_SHOW)) this._element.classList.remove(CLASS_NAME_SHOW);
            super.dispose();
        }
        _getConfig(config) {
            config = {
                ...Default,
                ...Manipulator.getDataAttributes(this._element),
                ...typeof config === 'object' && config ? config : {
                }
            };
            typeCheckConfig(NAME, config, this.constructor.DefaultType);
            return config;
        }
        _maybeScheduleHide() {
            if (!this._config.autohide) return;
            if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
            this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay);
        }
        _onInteraction(event, isInteracting) {
            switch(event.type){
                case 'mouseover':
                case 'mouseout':
                    this._hasMouseInteraction = isInteracting;
                    break;
                case 'focusin':
                case 'focusout':
                    this._hasKeyboardInteraction = isInteracting;
                    break;
            }
            if (isInteracting) {
                this._clearTimeout();
                return;
            }
            const nextElement = event.relatedTarget;
            if (this._element === nextElement || this._element.contains(nextElement)) return;
            this._maybeScheduleHide();
        }
        _setListeners() {
            EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, ()=>this.hide()
            );
            EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true)
            );
            EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false)
            );
            EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true)
            );
            EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false)
            );
        }
        _clearTimeout() {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY);
                const _config = typeof config === 'object' && config;
                if (!data) data = new Toast(this, _config);
                if (typeof config === 'string') {
                    if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                    data[config](this);
                }
            });
        }
    }
    /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */ defineJQueryPlugin(Toast);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ var index_umd = {
        Alert,
        Button,
        Carousel,
        Collapse,
        Dropdown,
        Modal,
        Offcanvas,
        Popover,
        ScrollSpy,
        Tab,
        Toast,
        Tooltip
    };
    return index_umd;
});

},{"@popperjs/core":"jXzgX"}],"jXzgX":[function(require,module,exports) {
/**
 * @popperjs/core v2.9.2 - MIT License
 */ 'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
    };
}
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node);
    else return getHTMLElementScroll(node);
}
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
// means it doesn't take into account transforms.
function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
function getParentNode(element) {
    if (getNodeName(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element));
}
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf(getNodeName(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if (isHTMLElement(node) && isScrollParent(node)) return node;
    return getScrollParent(getParentNode(node));
}
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/ function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;
    if (isIE && isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = getComputedStyle(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && [
        'html',
        'body'
    ].indexOf(getNodeName(currentNode)) < 0){
        var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options'
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        Object.keys(modifier).forEach(function(key) {
            switch(key){
                case 'name':
                    if (typeof modifier.name !== 'string') console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                    break;
                case 'enabled':
                    if (typeof modifier.enabled !== 'boolean') console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                case 'phase':
                    if (modifierPhases.indexOf(modifier.phase) < 0) console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                    break;
                case 'fn':
                    if (typeof modifier.fn !== 'function') console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'effect':
                    if (typeof modifier.effect !== 'function') console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'requires':
                    if (!Array.isArray(modifier.requires)) console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                    break;
                case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists)) console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                    break;
                case 'options':
                case 'data':
                    break;
                default:
                    console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function(s) {
                        return "\"" + s + "\"";
                    }).join(', ') + "; but \"" + key + "\" was provided.");
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged1, current) {
        var existing = merged1[current.name];
        merged1[current.name] = existing ? Object.assign({
        }, existing, current, {
            options: Object.assign({
            }, existing.options, current.options),
            data: Object.assign({
            }, existing.data, current.data)
        }) : current;
        return merged1;
    }, {
    }); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + getWindowScrollBarX(element),
        y: y
    };
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === 'rtl') x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
function rectToClientRect(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents1 = listScrollParents(getParentNode(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents1.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents1 = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents1[0];
    var clippingRect = clippingParents1.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
function getVariation(placement) {
    return placement.split('-')[1];
}
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
function computeOffsets(_ref) {
    var reference1 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference1.x + reference1.width / 2 - element.width / 2;
    var commonY = reference1.y + reference1.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case top:
            offsets = {
                x: commonX,
                y: reference1.y - element.height
            };
            break;
        case bottom:
            offsets = {
                x: commonX,
                y: reference1.y + reference1.height
            };
            break;
        case right:
            offsets = {
                x: reference1.x + reference1.width,
                y: commonY
            };
            break;
        case left:
            offsets = {
                x: reference1.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference1.x,
                y: reference1.y
            };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case start:
                offsets[mainAxis] = offsets[mainAxis] - (reference1[len] / 2 - element[len] / 2);
                break;
            case end:
                offsets[mainAxis] = offsets[mainAxis] + (reference1[len] / 2 - element[len] / 2);
                break;
        }
    }
    return offsets;
}
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
function mergePaddingObject(paddingObject) {
    return Object.assign({
    }, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}
function detectOverflow(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({
    }, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                right,
                bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                top,
                bottom
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference1, popper1, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({
            }, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(options1) {
                cleanupModifierEffects();
                state.options = Object.assign({
                }, defaultOptions, state.options, options1);
                state.scrollParents = {
                    reference: isElement(reference1) ? listScrollParents(reference1) : reference1.contextElement ? listScrollParents(reference1.contextElement) : [],
                    popper: listScrollParents(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === 'flip';
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.'
                    ].join(' '));
                }
                var _getComputedStyle = getComputedStyle(popper1), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.'
                ].join(' '));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference2, popper2)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: getCompositeRect(reference2, getOffsetParent(popper2), state.options.strategy === 'fixed'),
                    popper: getLayoutRect(popper2)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference1, popper1)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state1) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state1);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options1 = _ref3$options === void 0 ? {
                } : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options1
                    });
                    var noopFn = function noopFn1() {
                    };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var passive = {
    passive: true
};
function effect$2(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {
    },
    effect: effect$2,
    data: {
    }
};
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {
    }
};
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: round(round(x * dpr) / dpr) || 0,
        y: round(round(y * dpr) / dpr) || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper1 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
        var offsetParent = getOffsetParent(popper1);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === getWindow(popper1)) {
            offsetParent = getDocumentElement(popper1);
            if (getComputedStyle(offsetParent).position !== 'static') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        if (placement === top) {
            sideY = bottom; // $FlowFixMe[prop-missing]
            y -= offsetParent[heightProp] - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left) {
            sideX = right; // $FlowFixMe[prop-missing]
            x -= offsetParent[widthProp] - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref4) {
    var state = _ref4.state, options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';
    if (adaptive && [
        'transform',
        'top',
        'right',
        'bottom',
        'left'
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        'Popper: Detected CSS transitions on at least one of the following',
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        '\n\n',
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        'for smooth transitions, or remove these properties from the CSS',
        'transition declaration on the popper element if only transitioning',
        'opacity or background-color for example.',
        '\n\n',
        'We recommend using the popper element as a wrapper around an inner',
        'element that can have any CSS property transitioned for animations.'
    ].join(' '));
    var commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {
    }
};
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {
        };
        var attributes = state.attributes[name] || {
        };
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!isHTMLElement(element) || !getNodeName(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name1) {
            var value = attributes[name1];
            if (value === false) element.removeAttribute(name1);
            else element.setAttribute(name1, value === true ? '' : value);
        });
    });
}
function effect$1(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style1, property) {
                style1[property] = '';
                return style1;
            }, {
            }); // arrow is optional + virtual elements
            if (!isHTMLElement(element) || !getNodeName(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$1,
    requires: [
        'computeStyles'
    ]
};
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [
        left,
        top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({
    }, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        left,
        right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset1 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset1);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};
var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash$1[matched];
    });
}
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement1) {
        return getVariation(placement1) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement1) {
        return allowedAutoPlacements.indexOf(placement1) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements$1;
        console.error([
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(' '));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement1) {
        acc[placement1] = detectOverflow(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[getBasePlacement(placement1)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) return [];
    var oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeVariationPlacement(placement),
        oppositePlacement,
        getOppositeVariationPlacement(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        getOppositePlacement(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements1 = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements1[0];
    for(var i = 0; i < placements1.length; i++){
        var placement = placements1[i];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [
            top,
            bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = detectOverflow(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop1(_i) {
            var fittingPlacement = placements1.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
}
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets1 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets1) return;
    if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === 'y' ? top : left;
        var altSide = mainAxis === 'y' ? bottom : right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset1 = popperOffsets1[mainAxis];
        var min$1 = popperOffsets1[mainAxis] + overflow[mainSide];
        var max$1 = popperOffsets1[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets1[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets1[mainAxis] + maxOffset - offsetModifierValue;
        if (checkMainAxis) {
            var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset1, tether ? max(max$1, tetherMax) : max$1);
            popperOffsets1[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset1;
        }
        if (checkAltAxis) {
            var _mainSide = mainAxis === 'x' ? top : left;
            var _altSide = mainAxis === 'x' ? bottom : right;
            var _offset = popperOffsets1[altAxis];
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
            popperOffsets1[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
        }
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};
var toPaddingObject = function toPaddingObject1(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets1 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [
        left,
        right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets1) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets1[axis] - state.rects.popper[len];
    var startDiff = popperOffsets1[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min1 = paddingObject[minProp];
    var max1 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min1, center, max1); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!isHTMLElement(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
        'the arrow.'
    ].join(' '));
    if (!contains(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.'
        ].join(' '));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        top,
        right,
        bottom,
        left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};
var defaultModifiers$1 = [
    eventListeners,
    popperOffsets$1,
    computeStyles$1,
    applyStyles$1
];
var createPopper$1 = /*#__PURE__*/ popperGenerator({
    defaultModifiers: defaultModifiers$1
}); // eslint-disable-next-line import/no-unused-modules
var defaultModifiers = [
    eventListeners,
    popperOffsets$1,
    computeStyles$1,
    applyStyles$1,
    offset$1,
    flip$1,
    preventOverflow$1,
    arrow$1,
    hide$1
];
var createPopper = /*#__PURE__*/ popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
exports.applyStyles = applyStyles$1;
exports.arrow = arrow$1;
exports.computeStyles = computeStyles$1;
exports.createPopper = createPopper;
exports.createPopperLite = createPopper$1;
exports.defaultModifiers = defaultModifiers;
exports.detectOverflow = detectOverflow;
exports.eventListeners = eventListeners;
exports.flip = flip$1;
exports.hide = hide$1;
exports.offset = offset$1;
exports.popperGenerator = popperGenerator;
exports.popperOffsets = popperOffsets$1;
exports.preventOverflow = preventOverflow$1;

},{}],"chdRw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _jobAPI = require("./../../JobAPI");
var _jobAPIDefault = parcelHelpers.interopDefault(_jobAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class jobVacanciesView {
    init() {
        document.title = 'Job Vacancies';
        this.jobs = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getJobs();
    }
    async filterJobs(field, match) {
        //validate
        if (!field || !match) return;
        //get fresh copy of projects page
        this.jobs = await _jobAPIDefault.default.getJobs();
        let filteredJobs;
        // tag
        if (field == 'tag') filteredJobs = this.jobs.filter((job)=>job.tag == match
        );
        //render
        this.jobs = filteredJobs;
        this.render();
    }
    clearFilterBtns() {
        //clear all checked buttons (attribute = 'checked')
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn)=>btn.removeAttribute("checked")
        );
    }
    handleFilterBtn(e) {
        this.clearFilterBtns();
        //set item = active (item add attribute 'checked')
        e.target.setAttribute("checked", "");
        //extract the field and match from buttons
        const field = e.target.getAttribute("data-field");
        const match = e.target.getAttribute("data-match");
        console.log("field = ", field);
        console.log("match = ", match);
        //filter job vacncies postings
        this.filterJobs(field, match);
    }
    clearFilters() {
        this.getJobs();
        this.clearFilterBtns();
    }
    async getJobs() {
        try {
            this.jobs = await _jobAPIDefault.default.getJobs();
            console.log(this.jobs);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n\n      <va-app-header title="Job Vacancies" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">\n          <div class= "postings-grid">\n            <h1 class="anim-in">Job Vacancies</h1>\n            ${_authDefault.default.currentUser.accessLevel == 2 ? _litHtml.html`\n                <sl-button type="primary" class="addItemBtn" @click="${()=>_router.gotoRoute('/newJob')
        }">Create a New Job Vacancy Posting!</sl-button>\n            ` : _litHtml.html``}\n          </div>\n          <div class="filter-menu">                  \n            <div class="filter-search">\n              <div>Filter by:</div>\n              <strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1" id="searchbar"></sl-textarea>\n            </div>\n            <div class="filter-btns">\n              <div class="filter-dropdown"> \n                <sl-dropdown>\n                  <sl-button size="medium" type="info" slot="trigger" caret><strong>Genre</strong></sl-button>\n                  <sl-menu>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="photography" @click=${this.handleFilterBtn.bind(this)}>photography</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="illustration" @click=${this.handleFilterBtn.bind(this)}>illustrations</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="writing" @click=${this.handleFilterBtn.bind(this)}>writing</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="pre-production" @click=${this.handleFilterBtn.bind(this)}>pre-production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="production" @click=${this.handleFilterBtn.bind(this)}>production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="post-production" @click=${this.handleFilterBtn.bind(this)}>post-production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="animation" @click=${this.handleFilterBtn.bind(this)}>animation</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="voice-over" @click=${this.handleFilterBtn.bind(this)}>voice-over</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="2d-art" @click=${this.handleFilterBtn.bind(this)}>2D art</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="3d-art" @click=${this.handleFilterBtn.bind(this)}>3D art</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>\n                  </sl-menu>\n                </sl-dropdown>\n              </div>\n                <div>\n                  <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>\n                </div>\n            </div> \n          </div>\n          \n          <div class= "postings-grid">\n            \n            ${this.jobs == null ? _litHtml.html`\n              <sl-spinner></sl-spinner>\n            ` : _litHtml.html`\n              ${this.jobs.map((job)=>_litHtml.html`\n                <va-postings class="posting-card"\n                 image = "${job.image}"\n                 name = "${job.name}"\n                 description = "${job.description}"\n                 user = "${job.user.displayName}"\n                 tag = "${job.tag}"\n                > </va-postings>\n              `
        )}\n            `}\n          </div>\n        </div> \n      </div>\n           \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new jobVacanciesView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../JobAPI":"c2lSf","../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"c2lSf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _auth = require("./Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class JobAPI {
    async getJobs() {
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/job`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting job postings');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async newJob(formData) {
        // send fetch request
        const response = await fetch(`${_appDefault.default.apiBase}/job`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            },
            body: formData
        });
        // if response not ok
        if (!response.ok) {
            let message = 'Problem adding job post';
            if (response.status == 400) {
                const err = await response.json();
                message = err.message;
            }
            // throw error (exit this function)      
            throw new Error(message);
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
}
exports.default = new JobAPI();

},{"./App":"4GIt1","./Auth":"68fHK","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"9Lvlo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _userAPI = require("./../../UserAPI");
var _userAPIDefault = parcelHelpers.interopDefault(_userAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class CreativesView {
    init() {
        document.title = 'Creatives';
        this.creatives = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getCreatives();
    }
    async filterCreatives(field, match) {
        //validate
        if (!field || !match) return;
        //get fresh copy of projects page
        this.creatives = await _userAPIDefault.default.getCreatives();
        let filteredCreatives;
        // tag
        if (field == 'tag') filteredCreatives = this.creatives.filter((creative)=>creative.tag == match
        );
        //render
        this.creatives = filteredCreatives;
        this.render();
    }
    clearFilterBtns() {
        //clear all checked buttons (attribute = 'checked')
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn)=>btn.removeAttribute("checked")
        );
    }
    handleFilterBtn(e) {
        this.clearFilterBtns();
        //set item = active (item add attribute 'checked')
        e.target.setAttribute("checked", "");
        //extract the field and match from buttons
        const field = e.target.getAttribute("data-field");
        const match = e.target.getAttribute("data-match");
        console.log("field = ", field);
        console.log("match = ", match);
        //filter collaboration invites
        this.filterCollabIs(field, match);
    }
    clearFilters() {
        this.getCollaborationIs();
        this.clearFilterBtns();
    }
    async getCreatives() {
        try {
            this.creatives = await _userAPIDefault.default.getCreatives();
            console.log(this.creatives);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Creatives" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">        \n          <h1 class="anim-in">Creatives</h1>\n          <div class="filter-menu">\n            <div>Filter by:</div>\n              <div class="filter-search"><strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1"></sl-textarea></div>\n              <div>\n                <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>\n              </div>\n          </div>\n\n          <div class="creative-grid">\n            ${this.creatives == null ? _litHtml.html`\n              <sl-spinner></sl-spinner>\n            ` : _litHtml.html`\n              ${this.creatives.map((creative)=>_litHtml.html`\n              <va-creative class="creative-card"\n                id="${creative._id}"\n                name="${creative.displayName}"\n                email="${creative.email}"\n                image="${creative.avatar}"\n                bio="${creative.bio}"\n                website="${creative.website}"\n                facebook="${creative.facebook}"\n                instagram="${creative.instagram}"\n                twitter="${creative.twitter}"\n                youtube="${creative.youtube}"\n\n              >\n              </va-creative>\n                \n              `
        )}\n            `}\n          </div>\n          \n        </div>\n      </div>\n            \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new CreativesView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../UserAPI":"lWaG0","../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"22t69":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _collaborationAPI = require("./../../CollaborationAPI");
var _collaborationAPIDefault = parcelHelpers.interopDefault(_collaborationAPI);
var _toast = require("./../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class CollaborationsView {
    init() {
        document.title = 'Collaborations';
        this.collaborations = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getCollaborationIs();
    }
    async filterCollabIs(field, match) {
        //validate
        if (!field || !match) return;
        //get fresh copy of projects page
        this.collaborationIs = await _collaborationAPIDefault.default.getCollaborationIs();
        let filteredCollaborationIs;
        // tag
        if (field == 'tag') filteredCollaborationIs = this.collaborationIs.filter((collaboration)=>collaboration.tag == match
        );
        //render
        this.collaborationIs = filteredCollaborationIs;
        this.render();
    }
    clearFilterBtns() {
        //clear all checked buttons (attribute = 'checked')
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn)=>btn.removeAttribute("checked")
        );
    }
    handleFilterBtn(e) {
        this.clearFilterBtns();
        //set item = active (item add attribute 'checked')
        e.target.setAttribute("checked", "");
        //extract the field and match from buttons
        const field = e.target.getAttribute("data-field");
        const match = e.target.getAttribute("data-match");
        console.log("field = ", field);
        console.log("match = ", match);
        //filter collaboration invites
        this.filterCollabIs(field, match);
    }
    clearFilters() {
        this.getCollaborationIs();
        this.clearFilterBtns();
    }
    async getCollaborationIs() {
        try {
            this.collaborations = await _collaborationAPIDefault.default.getCollaborationIs();
            console.log(this.collaborations);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Profile" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">        \n          <div class= "postings-grid">\n              <h1 class="anim-in">Collaboration Invitations</h1>\n              ${_authDefault.default.currentUser.accessLevel == 1 ? _litHtml.html`\n                  <sl-button type="primary" class="addItemBtn" @click="${()=>_router.gotoRoute('/newCollaboration')
        }">Create a New Collaboration Invitation!</sl-button>\n              ` : _litHtml.html``}\n          </div>\n\n          <div class="filter-menu">                  \n            <div class="filter-search">\n              <div>Filter by:</div>\n              <strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1" id="searchbar"></sl-textarea>\n            </div>\n            <div class="filter-btns">\n              <div class="filter-dropdown"> \n                <sl-dropdown>\n                  <sl-button size="medium" type="info" slot="trigger" caret><strong>Genre</strong></sl-button>\n                  <sl-menu>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="photography" @click=${this.handleFilterBtn.bind(this)}>photography</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="illustration" @click=${this.handleFilterBtn.bind(this)}>illustrations</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="writing" @click=${this.handleFilterBtn.bind(this)}>writing</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="pre-production" @click=${this.handleFilterBtn.bind(this)}>pre-production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="production" @click=${this.handleFilterBtn.bind(this)}>production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="post-production" @click=${this.handleFilterBtn.bind(this)}>post-production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="animation" @click=${this.handleFilterBtn.bind(this)}>animation</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="voice-over" @click=${this.handleFilterBtn.bind(this)}>voice-over</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>\n                    <sl-menu-item class="filter-btn"data-field="tag" data-match="2d-art" @click=${this.handleFilterBtn.bind(this)}>2D art</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="3d-art" @click=${this.handleFilterBtn.bind(this)}>3D art</sl-menu-item>\n                    <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>\n                  </sl-menu>\n                </sl-dropdown>\n              </div>\n              <div>\n                <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>\n              </div>\n            </div> \n          </div>\n\n          <div class= "postings-grid">\n            \n            ${this.collaborations == null ? _litHtml.html`\n              <sl-spinner></sl-spinner>\n            ` : _litHtml.html`\n              ${this.collaborations.map((job)=>_litHtml.html`\n                <va-postings class="posting-card"\n                 image = "${collaboration.image}"\n                 name = "${collaboration.name}"\n                 description = "${collaboration.description}"\n                 user = "${collaboration.user.displayName}"\n                 tag = "${collaboration.tag}"\n                > </va-postings>\n              `
        )}\n            `}\n          </div>\n        </div>\n      </div>\n            \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new CollaborationsView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../CollaborationAPI":"YDhcM","./../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"YDhcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _auth = require("./Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _toast = require("./Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class CollaborationAPI {
    async getCollaborationIs() {
        // fetch the json data
        const response = await fetch(`${_appDefault.default.apiBase}/collaboration`, {
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        });
        // if response not ok
        if (!response.ok) {
            // console log error
            const err = await response.json();
            if (err) console.log(err);
            // throw error (exit this function)      
            throw new Error('Problem getting collaboration invitations');
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
    async newCollaboration(formData) {
        // send fetch request
        const response = await fetch(`${_appDefault.default.apiBase}/collaboration`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            },
            body: formData
        });
        // if response not ok
        if (!response.ok) {
            let message = 'Problem adding collaboration invitation';
            if (response.status == 400) {
                const err = await response.json();
                message = err.message;
            }
            // throw error (exit this function)      
            throw new Error(message);
        }
        // convert response payload into json - store as data
        const data = await response.json();
        // return data
        return data;
    }
}
exports.default = new CollaborationAPI();

},{"./App":"4GIt1","./Auth":"68fHK","./Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"6eV27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _jobAPI = require("./../../JobAPI");
var _jobAPIDefault = parcelHelpers.interopDefault(_jobAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class newJobView {
    init() {
        document.title = 'New Job Form';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    async newJobSubmitHandler(e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        const formData = e.detail.formData;
        console.log(formData);
        try {
            await _jobAPIDefault.default.newJob(formData);
            _toastDefault.default.show('Job Posting added!');
            submitBtn.removeAttribute('loading');
            //reset form
            //reset text + text area inputs
            const textInputs = document.querySelectorAll('sl-input, sl-textarea');
            if (textInputs) textInputs.forEach((textInputs1)=>textInputs1.value = null
            );
            //Reset file input
            const fileInput = document.querySelector('input[type=file]');
            if (fileInput) fileInput.value = null;
        } catch (err) {
            _toastDefault.default.show(err, 'error');
            submitBtn.removeAttribute('loading');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="New Job Form" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content">\n        <h1 class="anim-in">New Job Posting</h1>        \n          <sl-form class="page-form" @sl-submit=${this.newJobSubmitHandler}>\n            <input type="hidden" name="user" value="${_authDefault.default.currentUser._id}" />\n            <div class="input-group" style="margin-bottom: 2em;">\n              <sl-input name="name" type="text" placeholder="Job Name" required></sl-input>\n            </div>\n            <div class="input-group" style="margin-bottom: 2em;">\n              <sl-textarea name="description" rows="6" placeholder="Job Details"></sl-textarea>\n            </div>\n            <div class="input-group" style="margin-bottom: 2em;">\n              <label>Image</label><br>\n              <input type="file" name="image" />              \n            </div>\n            <div class="input-group">\n              <sl-select name="tag" placeholder="This is a/ an..." multiple clearable>\n                <sl-menu-item value="photography">Photography type of job</sl-menu-item>\n                <sl-menu-item value="illustration">Illustration type of job</sl-menu-item>\n                <sl-menu-item value="writing">Writing type of job</sl-menu-item>\n                <sl-menu-item value="pre-production">Pre-production type of job</sl-menu-item>\n                <sl-menu-item value="production">Production type of job</sl-menu-item>\n                <sl-menu-item value="post-production">Post-production type of job</sl-menu-item>                \n                <sl-menu-item value="animation">Animation type of job</sl-menu-item>\n                <sl-menu-item value="audio">Audio related type of job</sl-menu-item>\n                <sl-menu-item value="game-production">Video Game Development type of job</sl-menu-item>\n                <sl-menu-item value="website-dev">Website Development type of job</sl-menu-item>\n                <sl-menu-item value="2d-related">2D Related type of job</sl-menu-item>\n                <sl-menu-item value="3d-related">3D Related type of job</sl-menu-item>                \n                <sl-menu-item value="others">Others - Please provide details in description</sl-menu-item>\n              </sl-select>\n            </div>\n          \n            <sl-button type="primary" size="medium" class="submit-btn" submit>Submit a Job Posting!</sl-button>\n          </sl-form>        \n\n          \n        </div> \n      </div>\n           \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new newJobView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../JobAPI":"c2lSf","../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"kyocu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _collaborationAPI = require("./../../CollaborationAPI");
var _collaborationAPIDefault = parcelHelpers.interopDefault(_collaborationAPI);
var _toast = require("./../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class newCollaborationView {
    init() {
        document.title = 'Post Collaboration request';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    async newCollaborationSubmitHandler(e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        const formData = e.detail.formData;
        console.log(formData);
        try {
            await _collaborationAPIDefault.default.newCollaboration(formData);
            _toastDefault.default.show('Collaboration Request added!');
            submitBtn.removeAttribute('loading');
            //reset form
            //reset text + text area inputs
            const textInputs = document.querySelectorAll('sl-input, sl-textarea');
            if (textInputs) textInputs.forEach((textInputs1)=>textInputs1.value = null
            );
            //Reset file input
            const fileInput = document.querySelector('input[type=file]');
            if (fileInput) fileInput.value = null;
        } catch (err) {
            _toastDefault.default.show(err, 'error');
            submitBtn.removeAttribute('loading');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="New Collaboration Invitation Form" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content">\n        <h1 class="anim-in">New Collaboration Invitation form</h1>        \n          <sl-form class="page-form" @sl-submit=${this.newCollaborationSubmitHandler}>\n            <input type="hidden" name="user" value="${_authDefault.default.currentUser._id}" />\n            <div class="input-group" style="margin-bottom: 2em;">\n              <sl-input name="name" type="text" placeholder="Collaboration item Name" required></sl-input>\n            </div>\n            <div class="input-group" style="margin-bottom: 2em;">\n              <sl-textarea name="description" rows="6" placeholder="Collaboration Details"></sl-textarea>\n            </div>\n            <div class="input-group" style="margin-bottom: 2em;">\n              <label>Image</label><br>\n              <input type="file" name="image" />              \n            </div>\n            <div class="input-group">\n              <sl-select name="tag" placeholder="This Collaboration requires..." multiple clearable>\n                <sl-menu-item value="photography">Photographs</sl-menu-item>\n                <sl-menu-item value="illustration">Illustration</sl-menu-item>\n                <sl-menu-item value="writing">Writing assistance</sl-menu-item>\n                <sl-menu-item value="pre-production">Pre-production assistance</sl-menu-item>\n                <sl-menu-item value="production">Production assistance</sl-menu-item>\n                <sl-menu-item value="post-production">Post-production assistance</sl-menu-item>\n                <sl-menu-item value="animation">Animation</sl-menu-item>\n                <sl-menu-item value="audio">Audio specialisation</sl-menu-item>                \n                <sl-menu-item value="game-production">Video Game Development assistance</sl-menu-item>\n                <sl-menu-item value="website-dev">Website Development assistance</sl-menu-item>\n                <sl-menu-item value="2d-related">2D related assistance</sl-menu-item>\n                <sl-menu-item value="3d-related">3D related Development assistance</sl-menu-item>                \n                <sl-menu-item value="others">Others - Please provide details in description</sl-menu-item>\n              </sl-select>\n            </div>\n          \n            <sl-button type="primary" size="medium" class="submit-btn" submit>Submit a Collaboration Invite!</sl-button>\n          </sl-form>        \n\n          \n        </div> \n      </div>\n           \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new newCollaborationView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../CollaborationAPI":"YDhcM","./../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"bfJsH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _projectAPI = require("./../../ProjectAPI");
var _projectAPIDefault = parcelHelpers.interopDefault(_projectAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class newProjectView {
    init() {
        document.title = 'Submit a new project for bidding';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    async newProjectSubmitHandler(e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        const formData = e.detail.formData;
        console.log(formData);
        try {
            await _projectAPIDefault.default.newProject(formData);
            _toastDefault.default.show('Project Posting added!');
            submitBtn.removeAttribute('loading');
            //reset form
            //reset text + text area inputs
            const textInputs = document.querySelectorAll('sl-input, sl-textarea');
            if (textInputs) textInputs.forEach((textInputs1)=>textInputs1.value = null
            );
            //Reset file input
            const fileInput = document.querySelector('input[type=file]');
            if (fileInput) fileInput.value = null;
        } catch (err) {
            _toastDefault.default.show(err, 'error');
            submitBtn.removeAttribute('loading');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="New Project Form" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content">\n        <h1 class="anim-in">New Project for bidding Posting</h1>        \n          <sl-form class="page-form" @sl-submit=${this.newProjectSubmitHandler}>\n            <input type="hidden" name="user" value="${_authDefault.default.currentUser._id}" />\n            <div class="input-group" style="margin-bottom: 2em;">\n              <sl-input name="name" type="text" placeholder="Project Name" required></sl-input>\n            </div>\n            <div class="input-group" style="margin-bottom: 2em;">\n              <sl-textarea name="description" rows="6" placeholder="Project Details"></sl-textarea>\n            </div>\n            <div class="input-group" style="margin-bottom: 2em;">\n              <label>Image</label><br>\n              <input type="file" name="image" />              \n            </div>\n            <div class="input-group">\n              <sl-select name="tag" placeholder="This is a/ an..." multiple clearable>\n                <sl-menu-item value="photography">Photography type of Project</sl-menu-item>\n                <sl-menu-item value="illustration">Illustration type of Project</sl-menu-item>\n                <sl-menu-item value="writing">Writing type of Project</sl-menu-item>                                \n                <sl-menu-item value="pre-production">Pre-production type of Project</sl-menu-item>\n                <sl-menu-item value="production">Production type of Project</sl-menu-item>\n                <sl-menu-item value="post-production">Post-production type of Project</sl-menu-item>\n                <sl-menu-item value="animation">Animation type of Project</sl-menu-item>\n                <sl-menu-item value="website-dev">Website Development type of Project</sl-menu-item>\n                <sl-menu-item value="audio-production">Audio Production type of Project</sl-menu-item>\n                <sl-menu-item value="game-production">Video Game Development Project</sl-menu-item>\n                <sl-menu-item value="others">Others - Please provide details in description</sl-menu-item>\n              </sl-select>\n            </div>\n          \n            <sl-button type="primary" size="medium" class="submit-btn" submit>Submit a New Project for Bidding!</sl-button>\n          </sl-form>        \n\n          \n        </div> \n      </div>\n           \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new newProjectView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../ProjectAPI":"5xvMk","../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"kUhfD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _portfolioAPI = require("../../PortfolioAPI");
var _portfolioAPIDefault = parcelHelpers.interopDefault(_portfolioAPI);
var _toast = require("../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class newPortfolioView {
    init() {
        document.title = 'New Portfolio piece';
        this.render();
        _utilsDefault.default.pageIntroAnim();
    }
    async newPortfolioSubmitHandler(e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.setAttribute('loading', '');
        const formData = e.detail.formData;
        console.log(formData);
        try {
            await _portfolioAPIDefault.default.newPortfolioP(formData);
            _toastDefault.default.show('Portfolio piece added!');
            submitBtn.removeAttribute('loading');
            //reset form
            //reset text inputs
            const textInputs = document.querySelectorAll('sl-input, sl-textarea');
            if (textInputs) textInputs.forEach((textInputs1)=>textInputs1.value = null
            );
        /*Reset sl-select 
        const choiceSelect = document.querySelector('sl-select')
        if(choiceSelect) choiceSelect.value = null
        Reset file input
        const fileInput = document.querySelector('input[type=file]')
        if(fileInput) fileInput.value = null*/ } catch (err) {
            _toastDefault.default.show(err, 'error');
            submitBtn.removeAttribute('loading');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Submit New Portfolio Piece" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content">        \n          <h1>Submit New Portfolio piece</h1>\n          <sl-form class="page-form" @sl-submit=${this.newPortfolioSubmitHandler}>\n            <input type="hidden" name="user" value="${_authDefault.default.currentUser._id}" />\n            <div class="input-group" style="margin-bottom: 2em;">\n              <label>Image (For Preview)</label><br>\n              <input type="file" name="image" />              \n            </div>\n            <div class="input-group">\n              <sl-input name="name" type="text" placeholder="Portfolio piece Title" required></sl-input>\n            </div>\n            <div class="input-group">\n              <sl-textarea name="description" rows="3" placeholder="Description"></sl-textarea>\n            </div>\n            <div class="input-group" >\n              <sl-select name="tag" placeholder="Genre of portfolio piece" multiple clearable hoist required>\n                <sl-menu-item value="photography">Photography</sl-menu-item>\n                <sl-menu-item value="illustration">Illustration</sl-menu-item>\n                <sl-menu-item value="writing">Writing</sl-menu-item>\n                <sl-menu-item value="pre-production">Pre-production material</sl-menu-item>\n                <sl-menu-item value="production">Production material</sl-menu-item>\n                <sl-menu-item value="post-production">Post-production material</sl-menu-item>\n                <sl-menu-item value="animation">Animation</sl-menu-item>\n                <sl-menu-item value="voice-over">Voice-over related</sl-menu-item>\n                <sl-menu-item value="game-production">Game production related</sl-menu-item>\n                <sl-menu-item value="website-dev">Website development</sl-menu-item>\n                <sl-menu-item value="2d-art">2D art</sl-menu-item>\n                <sl-menu-item value="3d-art">3D art</sl-menu-item>\n                <sl-menu-item value="others">Others (Please elaborate in the desciption above)</sl-menu-item>\n              </sl-select>\n            </div>\n            <div class="input-group" style="margin-bottom: 1em;">\n              <label>Link to that piece outside the website.</label><br>\n              <sl-textarea name="link" rows="1" placeholder="www.example.com"></sl-textarea>\n            </div>\n            \n            <sl-button type="primary" class="submit-btn" submit size="medium" style="width: 100%;">Add Portfolio piece</sl-button>\n          </sl-form> \n          \n        </div>\n      </div>      \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new newPortfolioView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","../../PortfolioAPI":"5aiIb","../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"fD97N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("../../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _litHtml = require("lit-html");
var _router = require("../../Router");
var _auth = require("../../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _utils = require("../../Utils");
var _utilsDefault = parcelHelpers.interopDefault(_utils);
var _userAPI = require("./../../UserAPI");
var _userAPIDefault = parcelHelpers.interopDefault(_userAPI);
var _portfolioAPI = require("./../../PortfolioAPI");
var _portfolioAPIDefault = parcelHelpers.interopDefault(_portfolioAPI);
var _toast = require("./../../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
class CreativesNewView {
    init() {
        document.title = 'Creatives';
        this.creatives = null;
        this.render();
        _utilsDefault.default.pageIntroAnim();
        this.getCreatives();
    }
    async filterCreatives(field, match) {
        //check if filter parameters are valid----------
        if (!field || !match) return;
        //Get fresh copy of all creatives registered 
        this.creatives = await _userAPIDefault.default.getCreatives();
        let filteredCreatives;
        //tag 
        if (field == 'tag') filteredCreatives = this.creatives.filter((creative)=>creative.tag == match
        );
        //render
        this.creatives = filteredCreatives;
        this.render();
    }
    clearFilterBtns() {
        //clear all checked buttons (attribute = 'checked')
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn)=>btn.removeAttribute("checked")
        );
    }
    handleFilterBtn(e) {
        this.clearFilterBtns();
        //set item = active (item add attribute 'checked')
        e.target.setAttribute("checked", "");
        //extract the field and match from buttons
        const field = e.target.getAttribute("data-field");
        const match = e.target.getAttribute("data-match");
        console.log("field = ", field);
        console.log("match = ", match);
        //filter creatives
        this.filterCreatives(field, match);
    }
    clearFilters() {
        this.getCreatives();
        this.clearFilterBtns();
    }
    async getCreatives() {
        try {
            this.creatives = await _userAPIDefault.default.getCreatives();
            console.log(this.creatives);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        const template = _litHtml.html`\n      <va-app-header title="Creatives" user="${JSON.stringify(_authDefault.default.currentUser)}"></va-app-header>\n      <div class="page-body">\n        <div class="page-content calign">        \n          <div class="creatives-grid">\n            <h1>Creatives</h1>\n            <div class="filter-btns">\n              <div class="filter-dropdown"> \n                      <sl-dropdown>\n                        <sl-button size="medium" type="info" slot="trigger" caret><strong>Genre</strong></sl-button>\n                          <sl-menu>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="photography" @click=${this.handleFilterBtn.bind(this)}>photography</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="illustration" @click=${this.handleFilterBtn.bind(this)}>illustrations</sl-menu-item>\n                            <sl-menu-item class="filter-btn"data-field="tag" data-match="writing" @click=${this.handleFilterBtn.bind(this)}>writing</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="pre-production" @click=${this.handleFilterBtn.bind(this)}>pre-production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="production" @click=${this.handleFilterBtn.bind(this)}>production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="post-production" @click=${this.handleFilterBtn.bind(this)}>post-production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="animation" @click=${this.handleFilterBtn.bind(this)}>animation</sl-menu-item>\n                            <sl-menu-item class="filter-btn"data-field="tag" data-match="voice-over" @click=${this.handleFilterBtn.bind(this)}>voice-over</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>\n                            <sl-menu-item class="filter-btn"data-field="tag" data-match="2d-art" @click=${this.handleFilterBtn.bind(this)}>2D art</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="3d-art" @click=${this.handleFilterBtn.bind(this)}>3D art</sl-menu-item>\n                            <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>\n                          </sl-menu>\n                      </sl-dropdown>\n                </div>\n                <div>\n                  <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>\n                </div>\n              </div> \n            </div>\n            ${this.creatives == null ? _litHtml.html`\n              <sl-spinner></sl-spinner>\n            ` : _litHtml.html`\n              ${this.creatives.map((creative)=>_litHtml.html`\n                <va-creative class="creative-card"\n                  name = "${creative.displayName}"\n                  email = "${creative.email}"\n                  image = "${creative.image}"\n                  bio = "${creative.bio}"\n                  website = "${creative.website}"\n                  facebook = "${creative.facebook}"\n                  twitter = "${creative.twitter}"\n                  instagram ="${creative.instagram}"\n                  youtube = "${creative.youtube}"\n                ></va-creative>\n              `
        )}\n            `}\n\n          </div>\n          \n        </div> \n      </div>\n           \n    `;
        _litHtml.render(template, _appDefault.default.rootEl);
    }
}
exports.default = new CreativesNewView();

},{"../../App":"4GIt1","lit-html":"5JY0r","../../Router":"ll818","../../Auth":"68fHK","../../Utils":"6IQWL","./../../UserAPI":"lWaG0","./../../PortfolioAPI":"5aiIb","./../../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"4zh6y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _litElement = require("@polymer/lit-element");
var _router = require("./../Router");
var _auth = require("./../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _app = require("./../App");
var _appDefault = parcelHelpers.interopDefault(_app);
customElements.define('va-app-header', class AppHeader extends _litElement.LitElement {
    constructor(){
        super();
    }
    static get properties() {
        return {
            title: {
                type: String
            },
            user: {
                type: Object
            }
        };
    }
    firstUpdated() {
        super.firstUpdated();
        this.navActiveLinks();
    }
    navActiveLinks() {
        const currentPath = window.location.pathname;
        const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a');
        navLinks.forEach((navLink)=>{
            if (navLink.href.slice(-1) == '#') return;
            if (navLink.pathname === currentPath) navLink.classList.add('active');
        });
    }
    hamburgerClick() {
        const appMenu = this.shadowRoot.querySelector('.app-side-menu');
        appMenu.show();
    }
    menuClick(e) {
        e.preventDefault();
        const pathname = e.target.closest('a').pathname;
        const appSideMenu = this.shadowRoot.querySelector('.app-side-menu');
        // hide appMenu
        appSideMenu.hide();
        appSideMenu.addEventListener('sl-after-hide', ()=>{
            // goto route after menu is hidden
            _router.gotoRoute(pathname);
        });
    }
    render() {
        return _litElement.html`\n    <style>      \n      * {\n        box-sizing: border-box;\n      }\n      .app-header {\n        background: var(--brand-color);\n        position: fixed;\n        top: 0;\n        right: 0;\n        left: 0;\n        height: var(--app-header-height);\n        color: black;\n        display: flex;\n        z-index: 9;\n        box-shadow: 0 0.3em 3px black;\n        align-items: center;\n      }\n      \n\n      .app-header-main {\n        flex-grow: 1;\n        display: flex;\n        align-items: center;\n        margin-left: 13em;\n        .app-header-main a {\n          font-size: 1.4em;\n        }\n      }\n\n      .app-header-main::slotted(h1){\n        color: black;\n      }\n\n      .app-header-logo{\n        height: 50px;\n        margin-bottom: 0.10em;\n        margin-top: 0.40em;\n        margin-right: 1.25em;\n      }\n\n      .app-logo a {\n        color: #fff;\n        text-decoration: none;\n        font-weight: bold;\n        font-size: 1.2em;\n        padding: .6em;\n        display: inline-block;        \n      }\n\n      .app-logo img {\n        width: 90px;\n      }\n      \n      .hamburger-btn::part(base) {\n        color: #fff;\n      }\n\n      .app-top-nav {\n        display: flex;\n        height: 100%;\n        align-items: center;\n        margin-left: 0;\n        margin-right:13em;\n      }\n\n      .app-top-nav a {\n        display: inline-block;\n        padding: .8em;\n        text-decoration: none;\n        color: black;\n      }\n      \n      .app-side-menu-items a {\n        display: block;\n        padding: .5em;\n        text-decoration: none;\n        font-size: 1.3em;\n        color: #333;\n      }\n\n      .app-side-menu-logo {\n        width: 200px;\n        margin-bottom: 1em;\n        position: absolute;\n        top: 2em;\n        left: 1.5em;\n      }\n\n      .page-title {\n        color: var(--app-header-txt-color);\n        margin-right: 0.5em;\n        font-size: var(--app-header-title-font-size);\n      }\n\n      /* active nav links */\n      .app-top-nav a.active,\n      .app-side-menu-items a.active {\n        font-weight: bold;\n      }\n\n      #avatarName, .page-title{\n        color: white\n      }\n\n       /* RESPONSIVE - IPAD ------------------- */\n       @media all and (max-width: 1024px){\n        .app-header-main {\n          margin-left: 3em;\n        }\n        .app-top-nav {\n          margin-right: 3em;\n        }\n      } \n\n      /* RESPONSIVE - MOBILE ------------------- */\n      @media all and (max-width: 768px){       \n\n        .app-header-main{\n          margin-left: 1em;\n        }\n\n        .app-top-nav{\n          margin-right: 1em;\n        }\n\n        .page-title{\n          display: none;\n        }\n      }\n      /* RESPONSIVE - MOBILE Large ------------------- */\n      @media all and (max-width: 425px){\n        #home{\n          display:none;\n        }\n        .app-header-main{\n          margin-left: 0em;\n        }\n        .app-top-nav{\n          margin-right: 0;\n        }\n\n        #avatarName{\n          display: none;\n        }\n\n      }  \n    </style>\n\n\n\n    <header class="app-header">\n      <div class="app-header-main">\n        <sl-icon-button class="hamburger-btn" name="list" @click="${this.hamburgerClick}" style="font-size: 1.5em;"></sl-icon-button>\n        <a href="/" @click="${this.menuClick}"><img class="app-header-logo" src="/images/creahaven-logo-white.svg"></a>\n        <slot></slot>\n      </div>\n\n\n      <nav class="app-top-nav">\n        ${this.title ? _litElement.html`\n            <h6 class="page-title">${this.title}</h6>\n        ` : _litElement.html``}      \n        <sl-dropdown>\n          <a slot="trigger" href="#" @click="${(e)=>e.preventDefault()
        }">\n            <sl-avatar style="--size: 24px;" image=${this.user && this.user.avatar ? `${_appDefault.default.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar> <strong id="avatarName">${this.user && this.user.displayName}</strong> \n          </a>\n          <sl-menu>            \n            <sl-menu-item @click="${()=>_router.gotoRoute('/profile')
        }">Profile</sl-menu-item>\n            <sl-menu-item @click="${()=>_router.gotoRoute('/editProfile')
        }">Edit Profile</sl-menu-item>\n            <sl-menu-item @click="${()=>_router.gotoRoute('/favouriteCreatives')
        }">Favourite Creatives</sl-menu-item>\n            <sl-menu-divider></sl-menu-divider>\n            ${this.user.accessLevel == 1 ? _litElement.html`\n              <sl-menu-item @click="${()=>_router.gotoRoute('/newPortfolio')
        }">Post a new Portfolio Piece!</sl-menu-item>\n            ` : _litElement.html``}\n            ${this.user.accessLevel == 1 ? _litElement.html`\n              <sl-menu-item @click="${()=>_router.gotoRoute('/newCollaboration')
        }">Post a new Collaboration Request!</sl-menu-item>\n            ` : _litElement.html``}\n            ${this.user.accessLevel == 2 ? _litElement.html`\n              <sl-menu-item @click="${()=>_router.gotoRoute('/newJob')
        }">Post a new Job Vacancy posting!</sl-menu-item>\n            ` : _litElement.html``}\n            ${this.user.accessLevel == 2 ? _litElement.html`\n              <sl-menu-item @click="${()=>_router.gotoRoute('/newProject')
        }">Post a new Project listing!</sl-menu-item>\n            ` : _litElement.html``}\n            <sl-menu-divider></sl-menu-divider>\n            <sl-menu-item @click="${()=>_authDefault.default.signOut()
        }">Sign Out</sl-menu-item>\n          </sl-menu>\n        </sl-dropdown>\n      </nav>\n    </header>\n\n    <sl-drawer class="app-side-menu" placement="left">\n      <img class="app-side-menu-logo" src="/images/creahaven-logo.svg">\n      <nav class="app-side-menu-items">\n        <a href="/" @click="${this.menuClick}"> <sl-icon name="house-door-fill"></sl-icon>Home</a>\n        <a href="/creatives" @click="${this.menuClick}">Find a Creative!</a>\n        <a href="/portfolios" @click="${this.menuClick}">View Portfolio pieces!</a>\n        <a href="/collaborations" @click="${this.menuClick}">Find a Collaboration!</a>\n        <a href="/jobs" @click="${this.menuClick}">Find a Job vacancy!</a>\n        <a href="/projects" @click="${this.menuClick}">Find a project for bidding!</a>\n      </nav>  \n    </sl-drawer>\n    `;
    }
});

},{"@polymer/lit-element":"f7gOj","./../Router":"ll818","./../Auth":"68fHK","./../App":"4GIt1","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"f7gOj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>_litHtml1.html
);
parcelHelpers.export(exports, "svg", ()=>_litHtml1.svg
);
parcelHelpers.export(exports, "TemplateResult", ()=>_litHtml1.TemplateResult
);
parcelHelpers.export(exports, "SVGTemplateResult", ()=>_litHtml1.SVGTemplateResult
);
parcelHelpers.export(exports, "LitElement", ()=>LitElement
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _litHtml = require("lit-html");
var _shadyRender = require("lit-html/lib/shady-render");
var _updatingElementJs = require("./lib/updating-element.js");
var _cssTagJs = require("./lib/css-tag.js");
parcelHelpers.exportAll(_updatingElementJs, exports);
var _decoratorsJs = require("./lib/decorators.js");
parcelHelpers.exportAll(_decoratorsJs, exports);
var _litHtml1 = require("lit-html/lit-html");
parcelHelpers.exportAll(_cssTagJs, exports);
class LitElement extends _updatingElementJs.UpdatingElement {
    /**
     * Array of styles to apply to the element. The styles should be defined
     * using the `css` tag function.
     */ static get styles() {
        return [];
    }
    static get _uniqueStyles() {
        if (this._styles === undefined) {
            const styles = this.styles;
            // As a performance optimization to avoid duplicated styling that can
            // occur especially when composing via subclassing, de-duplicate styles
            // preserving the last item in the list. The last item is kept to
            // try to preserve cascade order with the assumption that it's most
            // important that last added styles override previous styles.
            const styleSet = styles.reduceRight((set, s)=>{
                set.add(s);
                // on IE set.add does not return the set.
                return set;
            }, new Set());
            // Array.form does not work on Set in IE
            this._styles = [];
            styleSet.forEach((v)=>this._styles.unshift(v)
            );
        }
        return this._styles;
    }
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */ initialize() {
        super.initialize();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) this.adoptStyles();
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */ createRenderRoot() {
        return this.attachShadow({
            mode: 'open'
        });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */ adoptStyles() {
        const styles = this.constructor._uniqueStyles;
        if (styles.length === 0) return;
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s)=>s.cssText
        ), this.localName);
        else if (_cssTagJs.supportsAdoptingStyleSheets) this.renderRoot.adoptedStyleSheets = styles.map((s)=>s.styleSheet
        );
        else // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) window.ShadyCSS.styleElement(this);
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */ update(changedProperties) {
        super.update(changedProperties);
        const templateResult = this.render();
        if (templateResult instanceof _litHtml.TemplateResult) this.constructor.render(templateResult, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
        });
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._uniqueStyles.forEach((s)=>{
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */ render() {
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */ LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */ LitElement.render = _shadyRender.render;

},{"lit-html":"5JY0r","lit-html/lib/shady-render":"j9HAc","./lib/updating-element.js":"dkCfO","./lib/decorators.js":"93Z03","lit-html/lit-html":"5JY0r","./lib/css-tag.js":"9dD1J","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"j9HAc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>_litHtmlJs.html
);
parcelHelpers.export(exports, "svg", ()=>_litHtmlJs.svg
);
parcelHelpers.export(exports, "TemplateResult", ()=>_litHtmlJs.TemplateResult
);
parcelHelpers.export(exports, "shadyTemplateFactory", ()=>shadyTemplateFactory
);
parcelHelpers.export(exports, "render", ()=>render
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */ /**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */ var _domJs = require("./dom.js");
var _modifyTemplateJs = require("./modify-template.js");
var _renderJs = require("./render.js");
var _templateFactoryJs = require("./template-factory.js");
var _templateInstanceJs = require("./template-instance.js");
var _templateJs = require("./template.js");
var _litHtmlJs = require("../lit-html.js");
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName)=>`${type}--${scopeName}`
;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') compatibleShadyCSSVersion = false;
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` + `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` + `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
const shadyTemplateFactory = (scopeName)=>(result)=>{
        const cacheKey = getTemplateCacheKey(result.type, scopeName);
        let templateCache = _templateFactoryJs.templateCaches.get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            _templateFactoryJs.templateCaches.set(cacheKey, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) return template;
        const key = result.strings.join(_templateJs.marker);
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            const element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) window.ShadyCSS.prepareTemplateDom(element, scopeName);
            template = new _templateJs.Template(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    }
;
const TEMPLATE_TYPES = [
    'html',
    'svg'
];
/**
 * Removes all style elements from Templates for the given scopeName.
 */ const removeStylesFromLitTemplates = (scopeName)=>{
    TEMPLATE_TYPES.forEach((type)=>{
        const templates = _templateFactoryJs.templateCaches.get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) templates.keyString.forEach((template)=>{
            const { element: { content  }  } = template;
            // IE 11 doesn't support the iterable param Set constructor
            const styles = new Set();
            Array.from(content.querySelectorAll('style')).forEach((s)=>{
                styles.add(s);
            });
            _modifyTemplateJs.removeNodesFromTemplate(template, styles);
        });
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */ const prepareTemplateStyles = (scopeName, renderedDOM, template)=>{
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length  } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for(let i = 0; i < length; i++){
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) _modifyTemplateJs.insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
    else content.insertBefore(condensedStyle, content.firstChild);
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        _modifyTemplateJs.removeNodesFromTemplate(template, removes);
    }
};
const render = (result, container, options)=>{
    if (!options || typeof options !== 'object' || !options.scopeName) throw new Error('The `scopeName` option is required.');
    const scopeName = options.scopeName;
    const hasRendered = _renderJs.parts.has(container);
    const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11 && !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    _renderJs.render(result, renderContainer, Object.assign({
        templateFactory: shadyTemplateFactory(scopeName)
    }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = _renderJs.parts.get(renderContainer);
        _renderJs.parts.delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof _templateInstanceJs.TemplateInstance ? part.value.template : undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        _domJs.removeNodes(container, container.firstChild);
        container.appendChild(renderContainer);
        _renderJs.parts.set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) window.ShadyCSS.styleElement(container.host);
};

},{"./dom.js":"68lVQ","./modify-template.js":"4O5KR","./render.js":"bbaaB","./template-factory.js":"bjcvA","./template-instance.js":"cqEzc","./template.js":"hsr3O","../lit-html.js":"5JY0r","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"4O5KR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */ parcelHelpers.export(exports, "removeNodesFromTemplate", ()=>removeNodesFromTemplate
);
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */ parcelHelpers.export(exports, "insertNodeIntoTemplate", ()=>insertNodeIntoTemplate
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _templateJs = require("./template.js");
const walkerNodeFilter = 133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ ;
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content  } , parts  } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while(walker.nextNode()){
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) currentRemovingNode = null;
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) currentRemovingNode = node;
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) removeCount++;
        while(part !== undefined && part.index === nodeIndex){
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n)=>n.parentNode.removeChild(n)
    );
}
const countNodes = (node)=>{
    let count = node.nodeType === 11 ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while(walker.nextNode())count++;
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1)=>{
    for(let i = startIndex + 1; i < parts.length; i++){
        const part = parts[i];
        if (_templateJs.isTemplatePartActive(part)) return i;
    }
    return -1;
};
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content  } , parts  } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while(walker.nextNode()){
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while(partIndex !== -1 && parts[partIndex].index === walkerIndex){
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while(partIndex !== -1){
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}

},{"./template.js":"hsr3O","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"dkCfO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultConverter", ()=>defaultConverter
);
parcelHelpers.export(exports, "notEqual", ()=>notEqual
);
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */ parcelHelpers.export(exports, "UpdatingElement", ()=>UpdatingElement
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */ const JSCompiler_renameProperty = (prop, _obj)=>prop
;
/**
 * Returns the property descriptor for a property on this prototype by walking
 * up the prototype chain. Note that we stop just before Object.prototype, which
 * also avoids issues with Symbol polyfills (core-js, get-own-property-symbols),
 * which create accessors for the symbols on Object.prototype.
 */ const descriptorFromPrototype = (name, proto)=>{
    if (name in proto) while(proto !== Object.prototype){
        if (proto.hasOwnProperty(name)) return Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
    }
    return undefined;
};
const defaultConverter = {
    toAttribute (value, type) {
        switch(type){
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute (value, type) {
        switch(type){
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
const notEqual = (value, old)=>{
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const microtaskPromise = Promise.resolve(true);
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 4;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 8;
const STATE_IS_REFLECTING_TO_PROPERTY = 16;
const STATE_HAS_CONNECTED = 32;
class UpdatingElement extends HTMLElement {
    constructor(){
        super();
        this._updateState = 0;
        this._instanceProperties = undefined;
        this._updatePromise = microtaskPromise;
        this._hasConnectedResolver = undefined;
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */ this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */ this._reflectingProperties = undefined;
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */ static get observedAttributes() {
        // note: piggy backing on this to ensure we're _finalized.
        this._finalize();
        const attributes = [];
        for (const [p, v] of this._classProperties){
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        }
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `_finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */ static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) superProperties.forEach((v, k)=>this._classProperties.set(k, v)
            );
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */ static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `_finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        if (!options.noAccessor) {
            const superDesc = descriptorFromPrototype(name, this.prototype);
            let desc;
            // If there is a super accessor, capture it and "super" to it
            if (superDesc !== undefined && superDesc.set && superDesc.get) {
                const { set , get  } = superDesc;
                desc = {
                    get () {
                        return get.call(this);
                    },
                    set (value) {
                        const oldValue = this[name];
                        set.call(this, value);
                        this.requestUpdate(name, oldValue);
                    },
                    configurable: true,
                    enumerable: true
                };
            } else {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                desc = {
                    get () {
                        return this[key];
                    },
                    set (value) {
                        const oldValue = this[name];
                        this[key] = value;
                        this.requestUpdate(name, oldValue);
                    },
                    configurable: true,
                    enumerable: true
                };
            }
            Object.defineProperty(this.prototype, name, desc);
        }
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */ static _finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) return;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (typeof superCtor._finalize === 'function') superCtor._finalize();
        this.finalized = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : []
            ];
            for (const p of propKeys)// note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            this.createProperty(p, props[p]);
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */ static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */ static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */ static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */ static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) return;
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */ initialize() {
        this._saveInstanceProperties();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */ _saveInstanceProperties() {
        for (const [p] of this.constructor._classProperties)if (this.hasOwnProperty(p)) {
            const value = this[p];
            delete this[p];
            if (!this._instanceProperties) this._instanceProperties = new Map();
            this._instanceProperties.set(p, value);
        }
    }
    /**
     * Applies previously saved instance properties.
     */ _applyInstanceProperties() {
        for (const [p, v] of this._instanceProperties)this[p] = v;
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED;
        // Ensure connection triggers an update. Updates cannot complete before
        // connection and if one is pending connection the `_hasConnectionResolver`
        // will exist. If so, resolve it to complete the update, otherwise
        // requestUpdate.
        if (this._hasConnectedResolver) {
            this._hasConnectedResolver();
            this._hasConnectedResolver = undefined;
        } else this.requestUpdate();
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */ disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */ attributeChangedCallback(name, old, value) {
        if (old !== value) this._attributeToProperty(name, value);
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) return;
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) this.removeAttribute(attr);
            else this.setAttribute(attr, attrValue);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) return;
        const ctor = this.constructor;
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] = ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */ requestUpdate(name, oldValue) {
        let shouldRequestUpdate = true;
        // if we have a property key, perform property update steps.
        if (name !== undefined && !this._changedProperties.has(name)) {
            const ctor = this.constructor;
            const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                // track old value when changing.
                this._changedProperties.set(name, oldValue);
                // add to reflecting properties set
                if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) this._reflectingProperties = new Map();
                    this._reflectingProperties.set(name, options);
                }
            // abort the request if the property should not be considered changed.
            } else shouldRequestUpdate = false;
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) this._enqueueUpdate();
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */ async _enqueueUpdate() {
        // Mark state updating...
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        let resolve;
        const previousUpdatePromise = this._updatePromise;
        this._updatePromise = new Promise((res)=>resolve = res
        );
        // Ensure any previous update has resolved before updating.
        // This `await` also ensures that property changes are batched.
        await previousUpdatePromise;
        // Make sure the element has connected before updating.
        if (!this._hasConnected) await new Promise((res)=>this._hasConnectedResolver = res
        );
        // Allow `performUpdate` to be asynchronous to enable scheduling of updates.
        const result = this.performUpdate();
        // Note, this is to avoid delaying an additional microtask unless we need
        // to.
        if (result != null && typeof result.then === 'function') await result;
        resolve(!this._hasRequestedUpdate);
    }
    get _hasConnected() {
        return this._updateState & STATE_HAS_CONNECTED;
    }
    get _hasRequestedUpdate() {
        return this._updateState & STATE_UPDATE_REQUESTED;
    }
    get hasUpdated() {
        return this._updateState & STATE_HAS_UPDATED;
    }
    /**
     * Performs an element update.
     *
     * You can override this method to change the timing of updates. For instance,
     * to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */ performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) this._applyInstanceProperties();
        if (this.shouldUpdate(this._changedProperties)) {
            const changedProperties = this._changedProperties;
            this.update(changedProperties);
            this._markUpdated();
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        } else this._markUpdated();
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */ get updateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */ shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */ update(_changedProperties) {
        if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
            for (const [k, v] of this._reflectingProperties)this._propertyToAttribute(k, this[k], v);
            this._reflectingProperties = undefined;
        }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */ updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */ firstUpdated(_changedProperties) {
    }
}
/**
 * Marks class as having finished creating properties.
 */ UpdatingElement.finalized = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"93Z03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>customElement
);
parcelHelpers.export(exports, "property", ()=>property
);
parcelHelpers.export(exports, "query", ()=>query
);
parcelHelpers.export(exports, "queryAll", ()=>queryAll
);
parcelHelpers.export(exports, "eventOptions", ()=>eventOptions
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const legacyCustomElement = (tagName, clazz)=>{
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    return clazz;
};
const standardCustomElement = (tagName, descriptor)=>{
    const { kind , elements  } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher (clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
const customElement = (tagName)=>(classOrDescriptor)=>typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor)
;
const standardProperty = (options, element)=>{
    // createProperty() takes care of defining the property, but we still must
    // return some kind of descriptor, so return a descriptor for an unused
    // prototype field. The finisher calls createProperty().
    return {
        kind: 'field',
        key: Symbol(),
        placement: 'own',
        descriptor: {
        },
        // When @babel/plugin-proposal-decorators implements initializers,
        // do this instead of the initializer below. See:
        // https://github.com/babel/babel/issues/9260 extras: [
        //   {
        //     kind: 'initializer',
        //     placement: 'own',
        //     initializer: descriptor.initializer,
        //   }
        // ],
        initializer () {
            if (typeof element.initializer === 'function') this[element.key] = element.initializer.call(this);
        },
        finisher (clazz) {
            clazz.createProperty(element.key, options);
        }
    };
};
const legacyProperty = (options, proto, name)=>{
    proto.constructor.createProperty(name, options);
};
const property = (options)=>(protoOrDescriptor, name)=>name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor)
;
const query = _query((target, selector)=>target.querySelector(selector)
);
const queryAll = _query((target, selector)=>target.querySelectorAll(selector)
);
const legacyQuery = (descriptor, proto, name)=>{
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element)=>({
        kind: 'method',
        placement: 'prototype',
        key: element.key,
        descriptor
    })
;
/**
 * Base-implementation of `@query` and `@queryAll` decorators.
 *
 * @param queryFn exectute a `selector` (ie, querySelector or querySelectorAll)
 * against `target`.
 */ function _query(queryFn) {
    return (selector)=>(protoOrDescriptor, name)=>{
            const descriptor = {
                get () {
                    return queryFn(this.renderRoot, selector);
                },
                enumerable: true,
                configurable: true
            };
            return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
        }
    ;
}
const standardEventOptions = (options, element)=>{
    return Object.assign({
    }, element, {
        finisher (clazz) {
            Object.assign(clazz.prototype[element.key], options);
        }
    });
};
const legacyEventOptions = (options, proto, name)=>{
    Object.assign(proto[name], options);
};
const eventOptions = (options)=>(protoOrDescriptor, name)=>name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"9dD1J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>supportsAdoptingStyleSheets
);
parcelHelpers.export(exports, "CSSResult", ()=>CSSResult
);
parcelHelpers.export(exports, "css", ()=>css
);
const supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype;
class CSSResult {
    constructor(cssText){
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
            // is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            } else this._styleSheet = null;
        }
        return this._styleSheet;
    }
}
const textFromCSSResult = (value)=>{
    if (value instanceof CSSResult) return value.cssText;
    else throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}.`);
};
const css = (strings, ...values)=>{
    const cssText1 = values.reduce((acc, v, idx)=>acc + textFromCSSResult(v) + strings[idx + 1]
    , strings[0]);
    return new CSSResult(cssText1);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"13pv7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _litElement = require("@polymer/lit-element");
var _litHtml = require("lit-html");
var _router = require("../Router");
var _auth = require("../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _app = require("../App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _userAPI = require("./../UserAPI");
var _userAPIDefault = parcelHelpers.interopDefault(_userAPI);
var _portfolioAPI = require("./../PortfolioAPI");
var _portfolioAPIDefault = parcelHelpers.interopDefault(_portfolioAPI);
var _toast = require("./../Toast");
var _toastDefault = parcelHelpers.interopDefault(_toast);
customElements.define('va-creative', class Creative extends _litElement.LitElement {
    constructor(){
        super();
    }
    static get properties() {
        return {
            id: {
                type: String
            },
            name: {
                type: String
            },
            email: {
                type: String
            },
            image: {
                type: String
            },
            bio: {
                type: String
            },
            website: {
                type: String
            },
            facebook: {
                type: String
            },
            twitter: {
                type: String
            },
            instagram: {
                type: String
            },
            youtube: {
                type: String
            }
        };
    }
    firstUpdated() {
        super.firstUpdated();
    }
    async getUserPortfolio() {
        try {
            this.userPortfolio = await _portfolioAPIDefault.default.getUserPortfolio();
            console.log(this.userPortfolio);
            this.render();
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    moreInfoHandler() {
        //create sl-dialog
        const dialogEl = document.createElement('sl-dialog');
        //add class name
        dialogEl.className = 'creatives-dialog';
        //Generate User's portfolio 
        getUserPortfolio();
        // sl-dialog content
        const dialogContent = _litElement.html`\n      <style>\n        .wrap {\n          display: flex;\n        }\n        .image {\n          width: 40%;\n          padding-left: 1em;\n        }\n        .image img {\n          width: 100%;\n        }\n        .content {\n          padding-right: 1em;\n          width: 60%;\n        }\n\n        .email{\n          font-style: italic;\n          opacity: 0.8;\n        }\n\n        span{\n          font-size: 0.9em;\n          font-weight: bold;\n          font-style: italic;\n        } \n\n        .creative-socials{ \n          width: 100%;\n        }\n      </style>\n      <div class="wrap">\n        <div class="image">\n          <img src="${_appDefault.default.apiBase}/images/${this.image}" alt="${this.name}" />\n          <h2>${this.name}</h2>\n          <h4 class="email">${this.email}</h4>\n          <p>Bio: <span>${this.bio}</span></p>\n          <p></p><sl-icon name = "link-45deg"></sl-icon><a href="${this.website}" target="_blank">${this.website}</a> </p>\n          <div class="creative-socials">\n            ${this.facebook ? _litElement.html`\n              <sl-button href="${this.facebook}" target="_blank" size="medium" circle> <sl-icon name="facebook"></sl-icon> </sl-button>\n            ` : _litElement.html``}\n            ${this.facebook ? _litElement.html`\n              <sl-button href="${this.instagram}" target="_blank" size="medium" circle> <sl-icon name="instagram"></sl-icon></sl-button>\n            ` : _litElement.html``}            \n            ${this.facebook ? _litElement.html`\n              <sl-button href="${this.twitter}" target="_blank" size="medium" circle> <sl-icon name="twitter"></sl-icon> </sl-button>\n            ` : _litElement.html``}            \n            ${this.facebook ? _litElement.html`\n              <sl-button  href="${this.youtube}" target="_blank" size="medium" circle> <sl-icon name="youtube"></sl-icon> </sl-button>\n            ` : _litElement.html``}            \n          </div>\n          <br>\n          <div slot="footer">\n            <sl-button @click=${this.addFavHandler.bind(this)}>\n              <sl-icon slot="prefix" name="heart-fill"></sl-icon>\n              Add to Favourites\n            </sl-button>\n          </div>\n        </div>\n        <div class="content">\n        </div>\n        \n      </div>\n    `;
        _litHtml.render(dialogContent, dialogEl);
        // append to body 
        document.body.append(dialogEl);
        // show sl-dialog
        dialogEl.show();
        // hide dialogEl on closing
        dialogEl.addEventListener('sl-after-hide', ()=>{
            dialogEl.remove();
        });
    }
    async addFavHandler() {
        try {
            await _userAPIDefault.default.addFavCreative(this.id);
            _toastDefault.default.show('Creative added to favourites');
        } catch (err) {
            _toastDefault.default.show(err, 'error');
        }
    }
    render() {
        return _litElement.html`\n    <style>\n\n      .email{\n        font-style: italic;\n        opacity: 0.8;\n      }\n\n      span{\n          font-size: 0.9em;\n          font-weight: bold;\n          font-style: italic;\n        } \n\n      .creative-socials{ \n        width: 100%;\n        margin-bottom: 0.25em;\n      }\n\n    </style>\n    <sl-card>\n      <img slot="image" src="${_appDefault.default.apiBase}/images/${this.image}"/>\n      <h2>${this.name}</h2>\n      <h4 class="email">${this.email}</h4>\n      <p>Bio: <span>${this.bio}</span></p>\n      <p><sl-icon name = "link-45deg"></sl-icon><a href="${this.website}" target="_blank">${this.website}</a> </p>\n      <div class="creative-socials">\n        ${this.facebook ? _litElement.html`\n          <sl-button href="${this.facebook}" target="_blank" size="small" circle> <sl-icon name="facebook"></sl-icon> </sl-button>\n        ` : _litElement.html``}\n        ${this.instagram ? _litElement.html`\n          <sl-button href="${this.instagram}" target="_blank" size="small" circle> <sl-icon name="instagram"></sl-icon></sl-button>\n        ` : _litElement.html``}        \n        ${this.twitter ? _litElement.html`\n          <sl-button href="${this.twitter}" target="_blank" size="small" circle> <sl-icon name="twitter"></sl-icon> </sl-button>\n        ` : _litElement.html``}        \n        ${this.youtube ? _litElement.html`\n          <sl-button  href="${this.youtube}" target="_blank" size="small" circle> <sl-icon name="youtube"></sl-icon> </sl-button>\n        ` : _litElement.html``}\n        \n      </div>\n      <div slot="footer">\n        <sl-button @click=${this.moreInfoHandler.bind(this)}>More Info</sl-button>\n        <sl-icon-button name="suit-heart-fill" label="Add to favourites" @click=${this.addFavHandler.bind(this)}></sl-icon-button>\n      </div>\n      \n    </sl-card>\n    `;
    }
});

},{"@polymer/lit-element":"f7gOj","lit-html":"5JY0r","../Router":"ll818","../Auth":"68fHK","../App":"4GIt1","./../UserAPI":"lWaG0","./../Toast":"9F5xG","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","./../PortfolioAPI":"5aiIb"}],"jBlmH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _litElement = require("@polymer/lit-element");
var _router = require("../Router");
var _litHtml = require("lit-html");
var _auth = require("../Auth");
var _authDefault = parcelHelpers.interopDefault(_auth);
var _app = require("../App");
var _appDefault = parcelHelpers.interopDefault(_app);
customElements.define('va-postings', class creativePostings extends _litElement.LitElement {
    constructor(){
        super();
    }
    static get properties() {
        return {
            id: {
                type: String
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            image: {
                type: String
            },
            user: {
                type: String
            },
            tag: {
                type: String
            }
        };
    }
    firstUpdated() {
        super.firstUpdated();
    }
    moreInfoHandler() {
        // create sl-dialog
        const dialogEl = document.createElement('sl-dialog');
        //set DialogEl class name
        dialogEl.className = 'posting-dialog';
        // sl-dialog content
        const dialogContent = _litElement.html`\n        <style>\n          .wrap {\n            display: flex;\n          }\n          .image {\n            width: 40%;\n          }\n          .image img {\n            width: 100%;\n          }\n          .content {\n            padding-left: 2em;\n          }\n          .author{\n            font-size: 0.9em;\n            font-style: italic;\n            opacity: 0.8;\n          }         \n        </style>\n        <div class="wrap">\n          <div class="image">\n            ${this.image == null ? _litElement.html`` : _litElement.html`\n              <img src="${_appDefault.default.apiBase}/images/${this.image}" alt="${this.name}" />\n            `}\n          </div>\n          <div class="content">\n            <h2>${this.name}</h2>\n            <h4>${this.description}</h4>\n            <p class="author">By ${this.user}</p>\n            \n            <sl-tag >${this.tag}</sl-tag>\n            \n          </div>\n        </div>\n\n      `;
        _litHtml.render(dialogContent, dialogEl);
        // append to document body
        document.body.append(dialogEl);
        // show sl-dialog
        dialogEl.show();
        // on closing, hide dialogEl
        dialogEl.addEventListener('sl-after-hide', ()=>{
            dialogEl.remove();
        });
    }
    render() {
        return _litElement.html`\n    <style>\n      .wrap {\n        background: #fff;\n        border-radius: 10px;\n        box-shadow: 0px 5px 20px rgba(0,0,0,0.1);\n        margin-bottom: 0.5em;\n        padding: 1em;\n      }\n\n      .author{\n        font-size: 0.9em;\n        font-style: italic;\n        opacity: 0.8;\n      }\n    </style>\n\n    <sl-card>\n      ${this.image == null ? _litElement.html`` : _litElement.html`\n        <img slot="image" src="${_appDefault.default.apiBase}/images/${this.image}" alt="${this.name}" />\n      `}\n      <h2>${this.name}</h2>\n      <h4>${this.description}</h4>\n      <p class="author">By ${this.user}</p>\n      \n      <div slot="footer">\n        <sl-tag type="info">${this.tag}</sl-tag>\n        <sl-button @click=${this.moreInfoHandler.bind(this)}> More Info</sl-button>\n      </div>\n    </sl-card>\n\n    <sl-dialog>\n      ${this.image == null ? _litElement.html`` : _litElement.html`\n          <img slot="image" src="${_appDefault.default.apiBase}/images/${this.image}" alt="${this.name}" />\n        `}\n        <h2>${this.name}</h2>\n        <h3>${this.description}</h3>\n        <p class="author">By ${this.user}</p>\n        \n        <sl-tag type="info">${this.tag}</sl-tag>\n    </sl-dialog>\n    `;
    }
});

},{"@polymer/lit-element":"f7gOj","../Router":"ll818","lit-html":"5JY0r","../Auth":"68fHK","../App":"4GIt1","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"lN886":[function() {},{}]},["em4Qp","1NxEw"], "1NxEw", "parcelRequire1878")

//# sourceMappingURL=index.33522cf5.js.map
