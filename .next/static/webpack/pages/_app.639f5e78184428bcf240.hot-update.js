webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/configureStore.js":
/*!*******************************!*\
  !*** ./lib/configureStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");





var persistConfig = {
  key: 'subero',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default.a
};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _store__WEBPACK_IMPORTED_MODULE_4__["default"]);
function configureStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistStore"])(store);
  return {
    store: store,
    persistor: persistor
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configureStore */ "./lib/configureStore.js");









var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\lib\\redux-store.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// next.jsのReduxの設定ファイル?



var isServer = false;
var _NRS_ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  if (isServer) {
    return initStore(initialState);
  }

  if (!window[_NRS_]) {
    window[_NRS_] = initStore(initialState);
  }

  return window[_NRS_];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return /*#__PURE__*/function (_Component) {
    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWidthRedux, _Component);

    var _super = _createSuper(AppWidthRedux);

    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWidthRedux, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(appContext) {
          var reduxStore, appProps;
          return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  reduxStore = getOrCreateStore();
                  appContext.ctx.reduxStore = reduxStore;
                  appProps = {};

                  if (!(typeof App.getInitialProps === "function")) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return App.getInitialProps(appContext);

                case 6:
                  appProps = _context.sent;

                case 7:
                  return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
                    initialReduxState: reduxStore.getState()
                  }));

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function AppWidthRedux(props) {
      var _this;

      Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppWidthRedux);

      _this = _super.call(this, props);
      _this.reduxStore = getOrCreateStore(props.initialReduxState);
      return _this;
    }

    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWidthRedux, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(App, _objectSpread(_objectSpread({}, this.props), {}, {
          reduxStore: this.reduxStore
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }, this);
      }
    }]);

    return AppWidthRedux;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/redux-persist/es/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-persist/es/constants.js ***!
  \****************************************************/
/*! exports provided: KEY_PREFIX, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, DEFAULT_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_PREFIX", function() { return KEY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLUSH", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REHYDRATE", function() { return REHYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSIST", function() { return PERSIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURGE", function() { return PURGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VERSION", function() { return DEFAULT_VERSION; });
var KEY_PREFIX = 'persist:';
var FLUSH = 'persist/FLUSH';
var REHYDRATE = 'persist/REHYDRATE';
var PAUSE = 'persist/PAUSE';
var PERSIST = 'persist/PERSIST';
var PURGE = 'persist/PURGE';
var REGISTER = 'persist/REGISTER';
var DEFAULT_VERSION = -1;

/***/ }),

/***/ "./node_modules/redux-persist/es/createMigrate.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-persist/es/createMigrate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMigrate; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function createMigrate(migrations, config) {
  var _ref = config || {},
      debug = _ref.debug;

  return function (state, currentVersion) {
    if (!state) {
      if ( true && debug) console.log('redux-persist: no inbound state, skipping migration');
      return Promise.resolve(undefined);
    }

    var inboundVersion = state._persist && state._persist.version !== undefined ? state._persist.version : _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VERSION"];

    if (inboundVersion === currentVersion) {
      if ( true && debug) console.log('redux-persist: versions match, noop migration');
      return Promise.resolve(state);
    }

    if (inboundVersion > currentVersion) {
      if (true) console.error('redux-persist: downgrading version is not supported');
      return Promise.resolve(state);
    }

    var migrationKeys = Object.keys(migrations).map(function (ver) {
      return parseInt(ver);
    }).filter(function (key) {
      return currentVersion >= key && key > inboundVersion;
    }).sort(function (a, b) {
      return a - b;
    });
    if ( true && debug) console.log('redux-persist: migrationKeys', migrationKeys);

    try {
      var migratedState = migrationKeys.reduce(function (state, versionKey) {
        if ( true && debug) console.log('redux-persist: running migration for versionKey', versionKey);
        return migrations[versionKey](state);
      }, state);
      return Promise.resolve(migratedState);
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createPersistoid.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-persist/es/createPersistoid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPersistoid; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

// @TODO remove once flow < 0.63 support is no longer required.
function createPersistoid(config) {
  // defaults
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var transforms = config.transforms || [];
  var throttle = config.throttle || 0;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__["KEY_PREFIX"]).concat(config.key);
  var storage = config.storage;
  var serialize;

  if (config.serialize === false) {
    serialize = function serialize(x) {
      return x;
    };
  } else if (typeof config.serialize === 'function') {
    serialize = config.serialize;
  } else {
    serialize = defaultSerialize;
  }

  var writeFailHandler = config.writeFailHandler || null; // initialize stateful values

  var lastState = {};
  var stagedState = {};
  var keysToProcess = [];
  var timeIterator = null;
  var writePromise = null;

  var update = function update(state) {
    // add any changed keys to the queue
    Object.keys(state).forEach(function (key) {
      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop

      if (lastState[key] === state[key]) return; // value unchanged? noop

      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop

      keysToProcess.push(key); // add key to queue
    }); //if any key is missing in the new state which was present in the lastState,
    //add it for processing too

    Object.keys(lastState).forEach(function (key) {
      if (state[key] === undefined && passWhitelistBlacklist(key) && keysToProcess.indexOf(key) === -1 && lastState[key] !== undefined) {
        keysToProcess.push(key);
      }
    }); // start the time iterator if not running (read: throttle)

    if (timeIterator === null) {
      timeIterator = setInterval(processNextKey, throttle);
    }

    lastState = state;
  };

  function processNextKey() {
    if (keysToProcess.length === 0) {
      if (timeIterator) clearInterval(timeIterator);
      timeIterator = null;
      return;
    }

    var key = keysToProcess.shift();
    var endState = transforms.reduce(function (subState, transformer) {
      return transformer.in(subState, key, lastState);
    }, lastState[key]);

    if (endState !== undefined) {
      try {
        stagedState[key] = serialize(endState);
      } catch (err) {
        console.error('redux-persist/createPersistoid: error serializing state', err);
      }
    } else {
      //if the endState is undefined, no need to persist the existing serialized content
      delete stagedState[key];
    }

    if (keysToProcess.length === 0) {
      writeStagedState();
    }
  }

  function writeStagedState() {
    // cleanup any removed keys just before write.
    Object.keys(stagedState).forEach(function (key) {
      if (lastState[key] === undefined) {
        delete stagedState[key];
      }
    });
    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
    if (blacklist && blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function onWriteFail(err) {
    // @TODO add fail handlers (typically storage full)
    if (writeFailHandler) writeFailHandler(err);

    if (err && "development" !== 'production') {
      console.error('Error storing data', err);
    }
  }

  var flush = function flush() {
    while (keysToProcess.length !== 0) {
      processNextKey();
    }

    return writePromise || Promise.resolve();
  }; // return `persistoid`


  return {
    update: update,
    flush: flush
  };
} // @NOTE in the future this may be exposed via config

function defaultSerialize(data) {
  return JSON.stringify(data);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createTransform.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-persist/es/createTransform.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTransform; });
function createTransform( // @NOTE inbound: transform state coming from redux on its way to being serialized and stored
inbound, // @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
outbound) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var whitelist = config.whitelist || null;
  var blacklist = config.blacklist || null;

  function whitelistBlacklistCheck(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return true;
    if (blacklist && blacklist.indexOf(key) !== -1) return true;
    return false;
  }

  return {
    in: function _in(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key, fullState) : state;
    },
    out: function out(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key, fullState) : state;
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/getStoredState.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/es/getStoredState.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStoredState; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function getStoredState(config) {
  var transforms = config.transforms || [];
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__["KEY_PREFIX"]).concat(config.key);
  var storage = config.storage;
  var debug = config.debug;
  var deserialize;

  if (config.deserialize === false) {
    deserialize = function deserialize(x) {
      return x;
    };
  } else if (typeof config.deserialize === 'function') {
    deserialize = config.deserialize;
  } else {
    deserialize = defaultDeserialize;
  }

  return storage.getItem(storageKey).then(function (serialized) {
    if (!serialized) return undefined;else {
      try {
        var state = {};
        var rawState = deserialize(serialized);
        Object.keys(rawState).forEach(function (key) {
          state[key] = transforms.reduceRight(function (subState, transformer) {
            return transformer.out(subState, key, rawState);
          }, deserialize(rawState[key]));
        });
        return state;
      } catch (err) {
        if ( true && debug) console.log("redux-persist/getStoredState: Error restoring data ".concat(serialized), err);
        throw err;
      }
    }
  });
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-persist/es/index.js ***!
  \************************************************/
/*! exports provided: persistReducer, persistCombineReducers, persistStore, createMigrate, createTransform, getStoredState, createPersistoid, purgeStoredState, KEY_PREFIX, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, DEFAULT_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistReducer */ "./node_modules/redux-persist/es/persistReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistReducer", function() { return _persistReducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistCombineReducers */ "./node_modules/redux-persist/es/persistCombineReducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistCombineReducers", function() { return _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _persistStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistStore */ "./node_modules/redux-persist/es/persistStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistStore", function() { return _persistStore__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createMigrate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMigrate */ "./node_modules/redux-persist/es/createMigrate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMigrate", function() { return _createMigrate__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _createTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransform */ "./node_modules/redux-persist/es/createTransform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransform", function() { return _createTransform__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getStoredState */ "./node_modules/redux-persist/es/getStoredState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoredState", function() { return _getStoredState__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createPersistoid */ "./node_modules/redux-persist/es/createPersistoid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPersistoid", function() { return _createPersistoid__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purgeStoredState */ "./node_modules/redux-persist/es/purgeStoredState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purgeStoredState", function() { return _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_PREFIX", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["KEY_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FLUSH", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["FLUSH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REHYDRATE", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["REHYDRATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["PAUSE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERSIST", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["PERSIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PURGE", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["PURGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["REGISTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VERSION", function() { return _constants__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_VERSION"]; });











/***/ }),

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/redux-persist/es/persistCombineReducers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return persistCombineReducers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistReducer */ "./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel2 */ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js");



// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
function persistCombineReducers(config, reducers) {
  config.stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_2__["default"] : config.stateReconciler;
  return Object(_persistReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(config, Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers));
}

/***/ }),

/***/ "./node_modules/redux-persist/es/persistReducer.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/es/persistReducer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return persistReducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
/* harmony import */ var _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel1 */ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPersistoid */ "./node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStoredState */ "./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purgeStoredState */ "./node_modules/redux-persist/es/purgeStoredState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var DEFAULT_TIMEOUT = 5000;
/*
  @TODO add validation / handling for:
  - persisting a reducer which has nested _persist
  - handling actions that fire before reydrate is called
*/

function persistReducer(config, baseReducer) {
  if (true) {
    if (!config) throw new Error('config is required for persistReducer');
    if (!config.key) throw new Error('key is required in persistor config');
    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }

  var version = config.version !== undefined ? config.version : _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VERSION"];
  var debug = config.debug || false;
  var stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__["default"] : config.stateReconciler;
  var getStoredState = config.getStoredState || _getStoredState__WEBPACK_IMPORTED_MODULE_3__["default"];
  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
  var _persistoid = null;
  var _purge = false;
  var _paused = true;

  var conditionalUpdate = function conditionalUpdate(state) {
    // update the persistoid only if we are rehydrated and not paused
    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
    return state;
  };

  return function (state, action) {
    var _ref = state || {},
        _persist = _ref._persist,
        rest = _objectWithoutProperties(_ref, ["_persist"]); // $FlowIgnore need to update State type


    var restState = rest;

    if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__["PERSIST"]) {
      var _sealed = false;

      var _rehydrate = function _rehydrate(payload, err) {
        // dev warning if we are already sealed
        if ( true && _sealed) console.error("redux-persist: rehydrate for \"".concat(config.key, "\" called after timeout."), payload, err); // only rehydrate if we are not already sealed

        if (!_sealed) {
          action.rehydrate(config.key, payload, err);
          _sealed = true;
        }
      };

      timeout && setTimeout(function () {
        !_sealed && _rehydrate(undefined, new Error("redux-persist: persist timed out for persist key \"".concat(config.key, "\"")));
      }, timeout); // @NOTE PERSIST resumes if paused.

      _paused = false; // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set

      if (!_persistoid) _persistoid = Object(_createPersistoid__WEBPACK_IMPORTED_MODULE_2__["default"])(config); // @NOTE PERSIST can be called multiple times, noop after the first

      if (_persist) {
        // We still need to call the base reducer because there might be nested
        // uses of persistReducer which need to be aware of the PERSIST action
        return _objectSpread({}, baseReducer(restState, action), {
          _persist: _persist
        });
      }

      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');
      action.register(config.key);
      getStoredState(config).then(function (restoredState) {
        var migrate = config.migrate || function (s, v) {
          return Promise.resolve(s);
        };

        migrate(restoredState, version).then(function (migratedState) {
          _rehydrate(migratedState);
        }, function (migrateErr) {
          if ( true && migrateErr) console.error('redux-persist: migration error', migrateErr);

          _rehydrate(undefined, migrateErr);
        });
      }, function (err) {
        _rehydrate(undefined, err);
      });
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: {
          version: version,
          rehydrated: false
        }
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__["PURGE"]) {
      _purge = true;
      action.result(Object(_purgeStoredState__WEBPACK_IMPORTED_MODULE_4__["default"])(config));
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__["FLUSH"]) {
      action.result(_persistoid && _persistoid.flush());
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__["PAUSE"]) {
      _paused = true;
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__["REHYDRATE"]) {
      // noop on restState if purging
      if (_purge) return _objectSpread({}, restState, {
        _persist: _objectSpread({}, _persist, {
          rehydrated: true
        }) // @NOTE if key does not match, will continue to default else below

      });

      if (action.key === config.key) {
        var reducedState = baseReducer(restState, action);
        var inboundState = action.payload; // only reconcile state if stateReconciler and inboundState are both defined

        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;

        var _newState = _objectSpread({}, reconciledRest, {
          _persist: _objectSpread({}, _persist, {
            rehydrated: true
          })
        });

        return conditionalUpdate(_newState);
      }
    } // if we have not already handled PERSIST, straight passthrough


    if (!_persist) return baseReducer(state, action); // run base reducer:
    // is state modified ? return original : return updated

    var newState = baseReducer(restState, action);
    if (newState === restState) return state;
    return conditionalUpdate(_objectSpread({}, newState, {
      _persist: _persist
    }));
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/persistStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-persist/es/persistStore.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return persistStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  registry: [],
  bootstrapped: false
};

var persistorReducer = function persistorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["REGISTER"]:
      return _objectSpread({}, state, {
        registry: [].concat(_toConsumableArray(state.registry), [action.key])
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["REHYDRATE"]:
      var firstIndex = state.registry.indexOf(action.key);

      var registry = _toConsumableArray(state.registry);

      registry.splice(firstIndex, 1);
      return _objectSpread({}, state, {
        registry: registry,
        bootstrapped: registry.length === 0
      });

    default:
      return state;
  }
};

function persistStore(store, options, cb) {
  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
  if (true) {
    var optionsToTest = options || {};
    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
    bannedKeys.forEach(function (k) {
      if (!!optionsToTest[k]) console.error("redux-persist: invalid option passed to persistStore: \"".concat(k, "\". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer."));
    });
  }

  var boostrappedCb = cb || false;

  var _pStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistorReducer, initialState, options && options.enhancer ? options.enhancer : undefined);

  var register = function register(key) {
    _pStore.dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["REGISTER"],
      key: key
    });
  };

  var rehydrate = function rehydrate(key, payload, err) {
    var rehydrateAction = {
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["REHYDRATE"],
      payload: payload,
      err: err,
      key: key // dispatch to `store` to rehydrate and `persistor` to track result

    };
    store.dispatch(rehydrateAction);

    _pStore.dispatch(rehydrateAction);

    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };

  var persistor = _objectSpread({}, _pStore, {
    purge: function purge() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["PURGE"],
        result: function result(purgeResult) {
          results.push(purgeResult);
        }
      });
      return Promise.all(results);
    },
    flush: function flush() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["FLUSH"],
        result: function result(flushResult) {
          results.push(flushResult);
        }
      });
      return Promise.all(results);
    },
    pause: function pause() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["PAUSE"]
      });
    },
    persist: function persist() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["PERSIST"],
        register: register,
        rehydrate: rehydrate
      });
    }
  });

  if (!(options && options.manualPersist)) {
    persistor.persist();
  }

  return persistor;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-persist/es/purgeStoredState.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return purgeStoredState; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function purgeStoredState(config) {
  var storage = config.storage;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__["KEY_PREFIX"]).concat(config.key);
  return storage.removeItem(storageKey, warnIfRemoveError);
}

function warnIfRemoveError(err) {
  if (err && "development" !== 'production') {
    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
  }
}

/***/ }),

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoMergeLevel1; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel1: 
    - merges 1 level of substate
    - skips substate if already modified
*/
function autoMergeLevel1(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      } // otherwise hard set the new value


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoMergeLevel2; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel2: 
    - merges 2 level of substate
    - skips substate if already modified
    - this is essentially redux-perist v4 behavior
*/
function autoMergeLevel2(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      }

      if (isPlainEnoughObject(reducedState[key])) {
        // if object is plain enough shallow merge the new values (hence "Level2")
        newState[key] = _objectSpread({}, newState[key], {}, inboundState[key]);
        return;
      } // otherwise hard set


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

function isPlainEnoughObject(o) {
  return o !== null && !Array.isArray(o) && _typeof(o) === 'object';
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
/*!********************************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/createWebStorage.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createWebStorage;

var _getStorage = _interopRequireDefault(__webpack_require__(/*! ./getStorage */ "./node_modules/redux-persist/lib/storage/getStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWebStorage(type) {
  var storage = (0, _getStorage.default)(type);
  return {
    getItem: function getItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.getItem(key));
      });
    },
    setItem: function setItem(key, item) {
      return new Promise(function (resolve, reject) {
        resolve(storage.setItem(key, item));
      });
    },
    removeItem: function removeItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.removeItem(key));
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/getStorage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getStorage;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function noop() {}

var noopStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop
};

function hasStorage(storageType) {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== 'object' || !(storageType in self)) {
    return false;
  }

  try {
    var storage = self[storageType];
    var testKey = "redux-persist ".concat(storageType, " test");
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (true) console.warn("redux-persist ".concat(storageType, " test failed, persistence will be disabled."));
    return false;
  }

  return true;
}

function getStorage(type) {
  var storageType = "".concat(type, "Storage");
  if (hasStorage(storageType)) return self[storageType];else {
    if (true) {
      console.error("redux-persist failed to create sync storage. falling back to noop storage.");
    }

    return noopStorage;
  }
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _createWebStorage = _interopRequireDefault(__webpack_require__(/*! ./createWebStorage */ "./node_modules/redux-persist/lib/storage/createWebStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWebStorage.default)('local');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvcmVkdXgtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlTWlncmF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlUGVyc2lzdG9pZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlVHJhbnNmb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9nZXRTdG9yZWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RDb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9wZXJzaXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3B1cmdlU3RvcmVkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2NyZWF0ZVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwiZmlyZVJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwicGVyc2lzdG9yIiwicGVyc2lzdFN0b3JlIiwiaXNTZXJ2ZXIiLCJfTlJTXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0U3RvcmUiLCJBcHAiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDbEJDLEtBQUcsRUFBRSxRQURhO0FBRWxCQyxTQUFPLEVBQVBBLGdFQUFPQTtBQUZXLENBQXRCO0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUdDLG9FQUFjLENBQUNKLGFBQUQsRUFBZ0JLLDhDQUFoQixDQUF2QztB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Q2U7QUFDZjs7QUFFQSxpQ0FBaUMsZ0JBQWdCOzs7QUFHakQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBLE9BQU87OztBQUdQO0FBQ0EsS0FBSztBQUNMOztBQUVBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7O0FBRUEseUNBQXlDLG1CQUFPLENBQUMsNEVBQWM7O0FBRS9ELHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTs7QUFFQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3Vjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUViO0FBQ0E7O0FBRUEsK0NBQStDLG1CQUFPLENBQUMsd0ZBQW9COztBQUUzRSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUEsMkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MzlmNWU3ODE4NDQyOGJjZjI0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgZmlyZVJlZHVjZXIgZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogJ3N1YmVybycsXHJcbiAgICBzdG9yYWdlLFxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGZpcmVSZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcbiAgICByZXR1cm4geyBzdG9yZSwgcGVyc2lzdG9yIH07XHJcbn0iLCIvLyBuZXh0Lmpz44GuUmVkdXjjga7oqK3lrprjg5XjgqHjgqTjg6s/XHJcblxyXG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiLi9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PVwidW5kZWZpbmVkXCJcclxuY29uc3QgX05SU18gPSBcIl9fTkVYVF9SRURVWF9TVE9SRV9fXCJcclxuXHJcbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUgKGluaXRpYWxTdGF0ZSkge1xyXG4gIGlmKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSlcclxuICB9XHJcbiAgaWYgKCF3aW5kb3dbX05SU19dKSB7XHJcbiAgICB3aW5kb3dbX05SU19dID0gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSlcclxuICB9XHJcbiAgcmV0dXJuIHdpbmRvd1tfTlJTX11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKEFwcCkgPT4ge1xyXG4gIHJldHVybiBjbGFzcyBBcHBXaWR0aFJlZHV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGFwcENvbnRleHQpIHtcclxuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKVxyXG4gICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZVxyXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fVxyXG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIC4uLmFwcFByb3BzLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgIHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz5cclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgdmFyIEtFWV9QUkVGSVggPSAncGVyc2lzdDonO1xuZXhwb3J0IHZhciBGTFVTSCA9ICdwZXJzaXN0L0ZMVVNIJztcbmV4cG9ydCB2YXIgUkVIWURSQVRFID0gJ3BlcnNpc3QvUkVIWURSQVRFJztcbmV4cG9ydCB2YXIgUEFVU0UgPSAncGVyc2lzdC9QQVVTRSc7XG5leHBvcnQgdmFyIFBFUlNJU1QgPSAncGVyc2lzdC9QRVJTSVNUJztcbmV4cG9ydCB2YXIgUFVSR0UgPSAncGVyc2lzdC9QVVJHRSc7XG5leHBvcnQgdmFyIFJFR0lTVEVSID0gJ3BlcnNpc3QvUkVHSVNURVInO1xuZXhwb3J0IHZhciBERUZBVUxUX1ZFUlNJT04gPSAtMTsiLCJpbXBvcnQgeyBERUZBVUxUX1ZFUlNJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNaWdyYXRlKG1pZ3JhdGlvbnMsIGNvbmZpZykge1xuICB2YXIgX3JlZiA9IGNvbmZpZyB8fCB7fSxcbiAgICAgIGRlYnVnID0gX3JlZi5kZWJ1ZztcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBjdXJyZW50VmVyc2lvbikge1xuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdDogbm8gaW5ib3VuZCBzdGF0ZSwgc2tpcHBpbmcgbWlncmF0aW9uJyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgdmFyIGluYm91bmRWZXJzaW9uID0gc3RhdGUuX3BlcnNpc3QgJiYgc3RhdGUuX3BlcnNpc3QudmVyc2lvbiAhPT0gdW5kZWZpbmVkID8gc3RhdGUuX3BlcnNpc3QudmVyc2lvbiA6IERFRkFVTFRfVkVSU0lPTjtcblxuICAgIGlmIChpbmJvdW5kVmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdDogdmVyc2lvbnMgbWF0Y2gsIG5vb3AgbWlncmF0aW9uJyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoaW5ib3VuZFZlcnNpb24gPiBjdXJyZW50VmVyc2lvbikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3Q6IGRvd25ncmFkaW5nIHZlcnNpb24gaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgdmFyIG1pZ3JhdGlvbktleXMgPSBPYmplY3Qua2V5cyhtaWdyYXRpb25zKS5tYXAoZnVuY3Rpb24gKHZlcikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZlcik7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvbiA+PSBrZXkgJiYga2V5ID4gaW5ib3VuZFZlcnNpb247XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdDogbWlncmF0aW9uS2V5cycsIG1pZ3JhdGlvbktleXMpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBtaWdyYXRlZFN0YXRlID0gbWlncmF0aW9uS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCB2ZXJzaW9uS2V5KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdDogcnVubmluZyBtaWdyYXRpb24gZm9yIHZlcnNpb25LZXknLCB2ZXJzaW9uS2V5KTtcbiAgICAgICAgcmV0dXJuIG1pZ3JhdGlvbnNbdmVyc2lvbktleV0oc3RhdGUpO1xuICAgICAgfSwgc3RhdGUpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtaWdyYXRlZFN0YXRlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgeyBLRVlfUFJFRklYLCBSRUhZRFJBVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vLyBAVE9ETyByZW1vdmUgb25jZSBmbG93IDwgMC42MyBzdXBwb3J0IGlzIG5vIGxvbmdlciByZXF1aXJlZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBlcnNpc3RvaWQoY29uZmlnKSB7XG4gIC8vIGRlZmF1bHRzXG4gIHZhciBibGFja2xpc3QgPSBjb25maWcuYmxhY2tsaXN0IHx8IG51bGw7XG4gIHZhciB3aGl0ZWxpc3QgPSBjb25maWcud2hpdGVsaXN0IHx8IG51bGw7XG4gIHZhciB0cmFuc2Zvcm1zID0gY29uZmlnLnRyYW5zZm9ybXMgfHwgW107XG4gIHZhciB0aHJvdHRsZSA9IGNvbmZpZy50aHJvdHRsZSB8fCAwO1xuICB2YXIgc3RvcmFnZUtleSA9IFwiXCIuY29uY2F0KGNvbmZpZy5rZXlQcmVmaXggIT09IHVuZGVmaW5lZCA/IGNvbmZpZy5rZXlQcmVmaXggOiBLRVlfUFJFRklYKS5jb25jYXQoY29uZmlnLmtleSk7XG4gIHZhciBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XG4gIHZhciBzZXJpYWxpemU7XG5cbiAgaWYgKGNvbmZpZy5zZXJpYWxpemUgPT09IGZhbHNlKSB7XG4gICAgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZy5zZXJpYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXJpYWxpemUgPSBjb25maWcuc2VyaWFsaXplO1xuICB9IGVsc2Uge1xuICAgIHNlcmlhbGl6ZSA9IGRlZmF1bHRTZXJpYWxpemU7XG4gIH1cblxuICB2YXIgd3JpdGVGYWlsSGFuZGxlciA9IGNvbmZpZy53cml0ZUZhaWxIYW5kbGVyIHx8IG51bGw7IC8vIGluaXRpYWxpemUgc3RhdGVmdWwgdmFsdWVzXG5cbiAgdmFyIGxhc3RTdGF0ZSA9IHt9O1xuICB2YXIgc3RhZ2VkU3RhdGUgPSB7fTtcbiAgdmFyIGtleXNUb1Byb2Nlc3MgPSBbXTtcbiAgdmFyIHRpbWVJdGVyYXRvciA9IG51bGw7XG4gIHZhciB3cml0ZVByb21pc2UgPSBudWxsO1xuXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgICAvLyBhZGQgYW55IGNoYW5nZWQga2V5cyB0byB0aGUgcXVldWVcbiAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIXBhc3NXaGl0ZWxpc3RCbGFja2xpc3Qoa2V5KSkgcmV0dXJuOyAvLyBpcyBrZXlzcGFjZSBpZ25vcmVkPyBub29wXG5cbiAgICAgIGlmIChsYXN0U3RhdGVba2V5XSA9PT0gc3RhdGVba2V5XSkgcmV0dXJuOyAvLyB2YWx1ZSB1bmNoYW5nZWQ/IG5vb3BcblxuICAgICAgaWYgKGtleXNUb1Byb2Nlc3MuaW5kZXhPZihrZXkpICE9PSAtMSkgcmV0dXJuOyAvLyBpcyBrZXkgYWxyZWFkeSBxdWV1ZWQ/IG5vb3BcblxuICAgICAga2V5c1RvUHJvY2Vzcy5wdXNoKGtleSk7IC8vIGFkZCBrZXkgdG8gcXVldWVcbiAgICB9KTsgLy9pZiBhbnkga2V5IGlzIG1pc3NpbmcgaW4gdGhlIG5ldyBzdGF0ZSB3aGljaCB3YXMgcHJlc2VudCBpbiB0aGUgbGFzdFN0YXRlLFxuICAgIC8vYWRkIGl0IGZvciBwcm9jZXNzaW5nIHRvb1xuXG4gICAgT2JqZWN0LmtleXMobGFzdFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChzdGF0ZVtrZXldID09PSB1bmRlZmluZWQgJiYgcGFzc1doaXRlbGlzdEJsYWNrbGlzdChrZXkpICYmIGtleXNUb1Byb2Nlc3MuaW5kZXhPZihrZXkpID09PSAtMSAmJiBsYXN0U3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleXNUb1Byb2Nlc3MucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pOyAvLyBzdGFydCB0aGUgdGltZSBpdGVyYXRvciBpZiBub3QgcnVubmluZyAocmVhZDogdGhyb3R0bGUpXG5cbiAgICBpZiAodGltZUl0ZXJhdG9yID09PSBudWxsKSB7XG4gICAgICB0aW1lSXRlcmF0b3IgPSBzZXRJbnRlcnZhbChwcm9jZXNzTmV4dEtleSwgdGhyb3R0bGUpO1xuICAgIH1cblxuICAgIGxhc3RTdGF0ZSA9IHN0YXRlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3NOZXh0S2V5KCkge1xuICAgIGlmIChrZXlzVG9Qcm9jZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRpbWVJdGVyYXRvcikgY2xlYXJJbnRlcnZhbCh0aW1lSXRlcmF0b3IpO1xuICAgICAgdGltZUl0ZXJhdG9yID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0ga2V5c1RvUHJvY2Vzcy5zaGlmdCgpO1xuICAgIHZhciBlbmRTdGF0ZSA9IHRyYW5zZm9ybXMucmVkdWNlKGZ1bmN0aW9uIChzdWJTdGF0ZSwgdHJhbnNmb3JtZXIpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm1lci5pbihzdWJTdGF0ZSwga2V5LCBsYXN0U3RhdGUpO1xuICAgIH0sIGxhc3RTdGF0ZVtrZXldKTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGFnZWRTdGF0ZVtrZXldID0gc2VyaWFsaXplKGVuZFN0YXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdyZWR1eC1wZXJzaXN0L2NyZWF0ZVBlcnNpc3RvaWQ6IGVycm9yIHNlcmlhbGl6aW5nIHN0YXRlJywgZXJyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9pZiB0aGUgZW5kU3RhdGUgaXMgdW5kZWZpbmVkLCBubyBuZWVkIHRvIHBlcnNpc3QgdGhlIGV4aXN0aW5nIHNlcmlhbGl6ZWQgY29udGVudFxuICAgICAgZGVsZXRlIHN0YWdlZFN0YXRlW2tleV07XG4gICAgfVxuXG4gICAgaWYgKGtleXNUb1Byb2Nlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB3cml0ZVN0YWdlZFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGVTdGFnZWRTdGF0ZSgpIHtcbiAgICAvLyBjbGVhbnVwIGFueSByZW1vdmVkIGtleXMganVzdCBiZWZvcmUgd3JpdGUuXG4gICAgT2JqZWN0LmtleXMoc3RhZ2VkU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGxhc3RTdGF0ZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHN0YWdlZFN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgd3JpdGVQcm9taXNlID0gc3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIHNlcmlhbGl6ZShzdGFnZWRTdGF0ZSkpLmNhdGNoKG9uV3JpdGVGYWlsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhc3NXaGl0ZWxpc3RCbGFja2xpc3Qoa2V5KSB7XG4gICAgaWYgKHdoaXRlbGlzdCAmJiB3aGl0ZWxpc3QuaW5kZXhPZihrZXkpID09PSAtMSAmJiBrZXkgIT09ICdfcGVyc2lzdCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdC5pbmRleE9mKGtleSkgIT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbldyaXRlRmFpbChlcnIpIHtcbiAgICAvLyBAVE9ETyBhZGQgZmFpbCBoYW5kbGVycyAodHlwaWNhbGx5IHN0b3JhZ2UgZnVsbClcbiAgICBpZiAod3JpdGVGYWlsSGFuZGxlcikgd3JpdGVGYWlsSGFuZGxlcihlcnIpO1xuXG4gICAgaWYgKGVyciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIGRhdGEnLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlIChrZXlzVG9Qcm9jZXNzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcHJvY2Vzc05leHRLZXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpO1xuICB9OyAvLyByZXR1cm4gYHBlcnNpc3RvaWRgXG5cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIGZsdXNoOiBmbHVzaFxuICB9O1xufSAvLyBATk9URSBpbiB0aGUgZnV0dXJlIHRoaXMgbWF5IGJlIGV4cG9zZWQgdmlhIGNvbmZpZ1xuXG5mdW5jdGlvbiBkZWZhdWx0U2VyaWFsaXplKGRhdGEpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybSggLy8gQE5PVEUgaW5ib3VuZDogdHJhbnNmb3JtIHN0YXRlIGNvbWluZyBmcm9tIHJlZHV4IG9uIGl0cyB3YXkgdG8gYmVpbmcgc2VyaWFsaXplZCBhbmQgc3RvcmVkXG5pbmJvdW5kLCAvLyBATk9URSBvdXRib3VuZDogdHJhbnNmb3JtIHN0YXRlIGNvbWluZyBmcm9tIHN0b3JhZ2UsIG9uIGl0cyB3YXkgdG8gYmUgcmVoeWRyYXRlZCBpbnRvIHJlZHV4XG5vdXRib3VuZCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIHdoaXRlbGlzdCA9IGNvbmZpZy53aGl0ZWxpc3QgfHwgbnVsbDtcbiAgdmFyIGJsYWNrbGlzdCA9IGNvbmZpZy5ibGFja2xpc3QgfHwgbnVsbDtcblxuICBmdW5jdGlvbiB3aGl0ZWxpc3RCbGFja2xpc3RDaGVjayhrZXkpIHtcbiAgICBpZiAod2hpdGVsaXN0ICYmIHdoaXRlbGlzdC5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdC5pbmRleE9mKGtleSkgIT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluOiBmdW5jdGlvbiBfaW4oc3RhdGUsIGtleSwgZnVsbFN0YXRlKSB7XG4gICAgICByZXR1cm4gIXdoaXRlbGlzdEJsYWNrbGlzdENoZWNrKGtleSkgJiYgaW5ib3VuZCA/IGluYm91bmQoc3RhdGUsIGtleSwgZnVsbFN0YXRlKSA6IHN0YXRlO1xuICAgIH0sXG4gICAgb3V0OiBmdW5jdGlvbiBvdXQoc3RhdGUsIGtleSwgZnVsbFN0YXRlKSB7XG4gICAgICByZXR1cm4gIXdoaXRlbGlzdEJsYWNrbGlzdENoZWNrKGtleSkgJiYgb3V0Ym91bmQgPyBvdXRib3VuZChzdGF0ZSwga2V5LCBmdWxsU3RhdGUpIDogc3RhdGU7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCB7IEtFWV9QUkVGSVggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdG9yZWRTdGF0ZShjb25maWcpIHtcbiAgdmFyIHRyYW5zZm9ybXMgPSBjb25maWcudHJhbnNmb3JtcyB8fCBbXTtcbiAgdmFyIHN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWcua2V5UHJlZml4ICE9PSB1bmRlZmluZWQgPyBjb25maWcua2V5UHJlZml4IDogS0VZX1BSRUZJWCkuY29uY2F0KGNvbmZpZy5rZXkpO1xuICB2YXIgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuICB2YXIgZGVidWcgPSBjb25maWcuZGVidWc7XG4gIHZhciBkZXNlcmlhbGl6ZTtcblxuICBpZiAoY29uZmlnLmRlc2VyaWFsaXplID09PSBmYWxzZSkge1xuICAgIGRlc2VyaWFsaXplID0gZnVuY3Rpb24gZGVzZXJpYWxpemUoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnLmRlc2VyaWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVzZXJpYWxpemUgPSBjb25maWcuZGVzZXJpYWxpemU7XG4gIH0gZWxzZSB7XG4gICAgZGVzZXJpYWxpemUgPSBkZWZhdWx0RGVzZXJpYWxpemU7XG4gIH1cblxuICByZXR1cm4gc3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpLnRoZW4oZnVuY3Rpb24gKHNlcmlhbGl6ZWQpIHtcbiAgICBpZiAoIXNlcmlhbGl6ZWQpIHJldHVybiB1bmRlZmluZWQ7ZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgdmFyIHJhd1N0YXRlID0gZGVzZXJpYWxpemUoc2VyaWFsaXplZCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHJhd1N0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBzdGF0ZVtrZXldID0gdHJhbnNmb3Jtcy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoc3ViU3RhdGUsIHRyYW5zZm9ybWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtZXIub3V0KHN1YlN0YXRlLCBrZXksIHJhd1N0YXRlKTtcbiAgICAgICAgICB9LCBkZXNlcmlhbGl6ZShyYXdTdGF0ZVtrZXldKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKFwicmVkdXgtcGVyc2lzdC9nZXRTdG9yZWRTdGF0ZTogRXJyb3IgcmVzdG9yaW5nIGRhdGEgXCIuY29uY2F0KHNlcmlhbGl6ZWQpLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdERlc2VyaWFsaXplKHNlcmlhbCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWwpO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICcuL3BlcnNpc3RSZWR1Y2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGVyc2lzdENvbWJpbmVSZWR1Y2VycyB9IGZyb20gJy4vcGVyc2lzdENvbWJpbmVSZWR1Y2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBlcnNpc3RTdG9yZSB9IGZyb20gJy4vcGVyc2lzdFN0b3JlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlTWlncmF0ZSB9IGZyb20gJy4vY3JlYXRlTWlncmF0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVRyYW5zZm9ybSB9IGZyb20gJy4vY3JlYXRlVHJhbnNmb3JtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0U3RvcmVkU3RhdGUgfSBmcm9tICcuL2dldFN0b3JlZFN0YXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlUGVyc2lzdG9pZCB9IGZyb20gJy4vY3JlYXRlUGVyc2lzdG9pZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHB1cmdlU3RvcmVkU3RhdGUgfSBmcm9tICcuL3B1cmdlU3RvcmVkU3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBwZXJzaXN0UmVkdWNlciBmcm9tICcuL3BlcnNpc3RSZWR1Y2VyJztcbmltcG9ydCBhdXRvTWVyZ2VMZXZlbDIgZnJvbSAnLi9zdGF0ZVJlY29uY2lsZXIvYXV0b01lcmdlTGV2ZWwyJztcbi8vIGNvbWJpbmVSZWR1Y2VycyArIHBlcnNpc3RSZWR1Y2VyIHdpdGggc3RhdGVSZWNvbmNpbGVyIGRlZmF1bHRlZCB0byBhdXRvTWVyZ2VMZXZlbDJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBlcnNpc3RDb21iaW5lUmVkdWNlcnMoY29uZmlnLCByZWR1Y2Vycykge1xuICBjb25maWcuc3RhdGVSZWNvbmNpbGVyID0gY29uZmlnLnN0YXRlUmVjb25jaWxlciA9PT0gdW5kZWZpbmVkID8gYXV0b01lcmdlTGV2ZWwyIDogY29uZmlnLnN0YXRlUmVjb25jaWxlcjtcbiAgcmV0dXJuIHBlcnNpc3RSZWR1Y2VyKGNvbmZpZywgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSk7XG59IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IHsgRkxVU0gsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVIWURSQVRFLCBERUZBVUxUX1ZFUlNJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgYXV0b01lcmdlTGV2ZWwxIGZyb20gJy4vc3RhdGVSZWNvbmNpbGVyL2F1dG9NZXJnZUxldmVsMSc7XG5pbXBvcnQgY3JlYXRlUGVyc2lzdG9pZCBmcm9tICcuL2NyZWF0ZVBlcnNpc3RvaWQnO1xuaW1wb3J0IGRlZmF1bHRHZXRTdG9yZWRTdGF0ZSBmcm9tICcuL2dldFN0b3JlZFN0YXRlJztcbmltcG9ydCBwdXJnZVN0b3JlZFN0YXRlIGZyb20gJy4vcHVyZ2VTdG9yZWRTdGF0ZSc7XG52YXIgREVGQVVMVF9USU1FT1VUID0gNTAwMDtcbi8qXG4gIEBUT0RPIGFkZCB2YWxpZGF0aW9uIC8gaGFuZGxpbmcgZm9yOlxuICAtIHBlcnNpc3RpbmcgYSByZWR1Y2VyIHdoaWNoIGhhcyBuZXN0ZWQgX3BlcnNpc3RcbiAgLSBoYW5kbGluZyBhY3Rpb25zIHRoYXQgZmlyZSBiZWZvcmUgcmV5ZHJhdGUgaXMgY2FsbGVkXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZXJzaXN0UmVkdWNlcihjb25maWcsIGJhc2VSZWR1Y2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFjb25maWcpIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIHJlcXVpcmVkIGZvciBwZXJzaXN0UmVkdWNlcicpO1xuICAgIGlmICghY29uZmlnLmtleSkgdGhyb3cgbmV3IEVycm9yKCdrZXkgaXMgcmVxdWlyZWQgaW4gcGVyc2lzdG9yIGNvbmZpZycpO1xuICAgIGlmICghY29uZmlnLnN0b3JhZ2UpIHRocm93IG5ldyBFcnJvcihcInJlZHV4LXBlcnNpc3Q6IGNvbmZpZy5zdG9yYWdlIGlzIHJlcXVpcmVkLiBUcnkgdXNpbmcgb25lIG9mIHRoZSBwcm92aWRlZCBzdG9yYWdlIGVuZ2luZXMgYGltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnYFwiKTtcbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gY29uZmlnLnZlcnNpb24gIT09IHVuZGVmaW5lZCA/IGNvbmZpZy52ZXJzaW9uIDogREVGQVVMVF9WRVJTSU9OO1xuICB2YXIgZGVidWcgPSBjb25maWcuZGVidWcgfHwgZmFsc2U7XG4gIHZhciBzdGF0ZVJlY29uY2lsZXIgPSBjb25maWcuc3RhdGVSZWNvbmNpbGVyID09PSB1bmRlZmluZWQgPyBhdXRvTWVyZ2VMZXZlbDEgOiBjb25maWcuc3RhdGVSZWNvbmNpbGVyO1xuICB2YXIgZ2V0U3RvcmVkU3RhdGUgPSBjb25maWcuZ2V0U3RvcmVkU3RhdGUgfHwgZGVmYXVsdEdldFN0b3JlZFN0YXRlO1xuICB2YXIgdGltZW91dCA9IGNvbmZpZy50aW1lb3V0ICE9PSB1bmRlZmluZWQgPyBjb25maWcudGltZW91dCA6IERFRkFVTFRfVElNRU9VVDtcbiAgdmFyIF9wZXJzaXN0b2lkID0gbnVsbDtcbiAgdmFyIF9wdXJnZSA9IGZhbHNlO1xuICB2YXIgX3BhdXNlZCA9IHRydWU7XG5cbiAgdmFyIGNvbmRpdGlvbmFsVXBkYXRlID0gZnVuY3Rpb24gY29uZGl0aW9uYWxVcGRhdGUoc3RhdGUpIHtcbiAgICAvLyB1cGRhdGUgdGhlIHBlcnNpc3RvaWQgb25seSBpZiB3ZSBhcmUgcmVoeWRyYXRlZCBhbmQgbm90IHBhdXNlZFxuICAgIHN0YXRlLl9wZXJzaXN0LnJlaHlkcmF0ZWQgJiYgX3BlcnNpc3RvaWQgJiYgIV9wYXVzZWQgJiYgX3BlcnNpc3RvaWQudXBkYXRlKHN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdmFyIF9yZWYgPSBzdGF0ZSB8fCB7fSxcbiAgICAgICAgX3BlcnNpc3QgPSBfcmVmLl9wZXJzaXN0LFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIl9wZXJzaXN0XCJdKTsgLy8gJEZsb3dJZ25vcmUgbmVlZCB0byB1cGRhdGUgU3RhdGUgdHlwZVxuXG5cbiAgICB2YXIgcmVzdFN0YXRlID0gcmVzdDtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gUEVSU0lTVCkge1xuICAgICAgdmFyIF9zZWFsZWQgPSBmYWxzZTtcblxuICAgICAgdmFyIF9yZWh5ZHJhdGUgPSBmdW5jdGlvbiBfcmVoeWRyYXRlKHBheWxvYWQsIGVycikge1xuICAgICAgICAvLyBkZXYgd2FybmluZyBpZiB3ZSBhcmUgYWxyZWFkeSBzZWFsZWRcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX3NlYWxlZCkgY29uc29sZS5lcnJvcihcInJlZHV4LXBlcnNpc3Q6IHJlaHlkcmF0ZSBmb3IgXFxcIlwiLmNvbmNhdChjb25maWcua2V5LCBcIlxcXCIgY2FsbGVkIGFmdGVyIHRpbWVvdXQuXCIpLCBwYXlsb2FkLCBlcnIpOyAvLyBvbmx5IHJlaHlkcmF0ZSBpZiB3ZSBhcmUgbm90IGFscmVhZHkgc2VhbGVkXG5cbiAgICAgICAgaWYgKCFfc2VhbGVkKSB7XG4gICAgICAgICAgYWN0aW9uLnJlaHlkcmF0ZShjb25maWcua2V5LCBwYXlsb2FkLCBlcnIpO1xuICAgICAgICAgIF9zZWFsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aW1lb3V0ICYmIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAhX3NlYWxlZCAmJiBfcmVoeWRyYXRlKHVuZGVmaW5lZCwgbmV3IEVycm9yKFwicmVkdXgtcGVyc2lzdDogcGVyc2lzdCB0aW1lZCBvdXQgZm9yIHBlcnNpc3Qga2V5IFxcXCJcIi5jb25jYXQoY29uZmlnLmtleSwgXCJcXFwiXCIpKSk7XG4gICAgICB9LCB0aW1lb3V0KTsgLy8gQE5PVEUgUEVSU0lTVCByZXN1bWVzIGlmIHBhdXNlZC5cblxuICAgICAgX3BhdXNlZCA9IGZhbHNlOyAvLyBATk9URSBvbmx5IGV2ZXIgY3JlYXRlIHBlcnNpc3RvaWQgb25jZSwgZW5zdXJlIHdlIGNhbGwgaXQgYXQgbGVhc3Qgb25jZSwgZXZlbiBpZiBfcGVyc2lzdCBoYXMgYWxyZWFkeSBiZWVuIHNldFxuXG4gICAgICBpZiAoIV9wZXJzaXN0b2lkKSBfcGVyc2lzdG9pZCA9IGNyZWF0ZVBlcnNpc3RvaWQoY29uZmlnKTsgLy8gQE5PVEUgUEVSU0lTVCBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLCBub29wIGFmdGVyIHRoZSBmaXJzdFxuXG4gICAgICBpZiAoX3BlcnNpc3QpIHtcbiAgICAgICAgLy8gV2Ugc3RpbGwgbmVlZCB0byBjYWxsIHRoZSBiYXNlIHJlZHVjZXIgYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBuZXN0ZWRcbiAgICAgICAgLy8gdXNlcyBvZiBwZXJzaXN0UmVkdWNlciB3aGljaCBuZWVkIHRvIGJlIGF3YXJlIG9mIHRoZSBQRVJTSVNUIGFjdGlvblxuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pLCB7XG4gICAgICAgICAgX3BlcnNpc3Q6IF9wZXJzaXN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGFjdGlvbi5yZWh5ZHJhdGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGFjdGlvbi5yZWdpc3RlciAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVycm9yKCdyZWR1eC1wZXJzaXN0OiBlaXRoZXIgcmVoeWRyYXRlIG9yIHJlZ2lzdGVyIGlzIG5vdCBhIGZ1bmN0aW9uIG9uIHRoZSBQRVJTSVNUIGFjdGlvbi4gVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBhY3Rpb24gaXMgYmVpbmcgcmVwbGF5ZWQuIFRoaXMgaXMgYW4gdW5leHBsb3JlZCB1c2UgY2FzZSwgcGxlYXNlIG9wZW4gYW4gaXNzdWUgYW5kIHdlIHdpbGwgZmlndXJlIG91dCBhIHJlc29sdXRpb24uJyk7XG4gICAgICBhY3Rpb24ucmVnaXN0ZXIoY29uZmlnLmtleSk7XG4gICAgICBnZXRTdG9yZWRTdGF0ZShjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3RvcmVkU3RhdGUpIHtcbiAgICAgICAgdmFyIG1pZ3JhdGUgPSBjb25maWcubWlncmF0ZSB8fCBmdW5jdGlvbiAocywgdikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWlncmF0ZShyZXN0b3JlZFN0YXRlLCB2ZXJzaW9uKS50aGVuKGZ1bmN0aW9uIChtaWdyYXRlZFN0YXRlKSB7XG4gICAgICAgICAgX3JlaHlkcmF0ZShtaWdyYXRlZFN0YXRlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKG1pZ3JhdGVFcnIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBtaWdyYXRlRXJyKSBjb25zb2xlLmVycm9yKCdyZWR1eC1wZXJzaXN0OiBtaWdyYXRpb24gZXJyb3InLCBtaWdyYXRlRXJyKTtcblxuICAgICAgICAgIF9yZWh5ZHJhdGUodW5kZWZpbmVkLCBtaWdyYXRlRXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF9yZWh5ZHJhdGUodW5kZWZpbmVkLCBlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pLCB7XG4gICAgICAgIF9wZXJzaXN0OiB7XG4gICAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgICByZWh5ZHJhdGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBQVVJHRSkge1xuICAgICAgX3B1cmdlID0gdHJ1ZTtcbiAgICAgIGFjdGlvbi5yZXN1bHQocHVyZ2VTdG9yZWRTdGF0ZShjb25maWcpKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbiksIHtcbiAgICAgICAgX3BlcnNpc3Q6IF9wZXJzaXN0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBGTFVTSCkge1xuICAgICAgYWN0aW9uLnJlc3VsdChfcGVyc2lzdG9pZCAmJiBfcGVyc2lzdG9pZC5mbHVzaCgpKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbiksIHtcbiAgICAgICAgX3BlcnNpc3Q6IF9wZXJzaXN0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBQQVVTRSkge1xuICAgICAgX3BhdXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gUkVIWURSQVRFKSB7XG4gICAgICAvLyBub29wIG9uIHJlc3RTdGF0ZSBpZiBwdXJnaW5nXG4gICAgICBpZiAoX3B1cmdlKSByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgcmVzdFN0YXRlLCB7XG4gICAgICAgIF9wZXJzaXN0OiBfb2JqZWN0U3ByZWFkKHt9LCBfcGVyc2lzdCwge1xuICAgICAgICAgIHJlaHlkcmF0ZWQ6IHRydWVcbiAgICAgICAgfSkgLy8gQE5PVEUgaWYga2V5IGRvZXMgbm90IG1hdGNoLCB3aWxsIGNvbnRpbnVlIHRvIGRlZmF1bHQgZWxzZSBiZWxvd1xuXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGlvbi5rZXkgPT09IGNvbmZpZy5rZXkpIHtcbiAgICAgICAgdmFyIHJlZHVjZWRTdGF0ZSA9IGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgdmFyIGluYm91bmRTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkOyAvLyBvbmx5IHJlY29uY2lsZSBzdGF0ZSBpZiBzdGF0ZVJlY29uY2lsZXIgYW5kIGluYm91bmRTdGF0ZSBhcmUgYm90aCBkZWZpbmVkXG5cbiAgICAgICAgdmFyIHJlY29uY2lsZWRSZXN0ID0gc3RhdGVSZWNvbmNpbGVyICE9PSBmYWxzZSAmJiBpbmJvdW5kU3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlUmVjb25jaWxlcihpbmJvdW5kU3RhdGUsIHN0YXRlLCByZWR1Y2VkU3RhdGUsIGNvbmZpZykgOiByZWR1Y2VkU3RhdGU7XG5cbiAgICAgICAgdmFyIF9uZXdTdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHJlY29uY2lsZWRSZXN0LCB7XG4gICAgICAgICAgX3BlcnNpc3Q6IF9vYmplY3RTcHJlYWQoe30sIF9wZXJzaXN0LCB7XG4gICAgICAgICAgICByZWh5ZHJhdGVkOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbmFsVXBkYXRlKF9uZXdTdGF0ZSk7XG4gICAgICB9XG4gICAgfSAvLyBpZiB3ZSBoYXZlIG5vdCBhbHJlYWR5IGhhbmRsZWQgUEVSU0lTVCwgc3RyYWlnaHQgcGFzc3Rocm91Z2hcblxuXG4gICAgaWYgKCFfcGVyc2lzdCkgcmV0dXJuIGJhc2VSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pOyAvLyBydW4gYmFzZSByZWR1Y2VyOlxuICAgIC8vIGlzIHN0YXRlIG1vZGlmaWVkID8gcmV0dXJuIG9yaWdpbmFsIDogcmV0dXJuIHVwZGF0ZWRcblxuICAgIHZhciBuZXdTdGF0ZSA9IGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKTtcbiAgICBpZiAobmV3U3RhdGUgPT09IHJlc3RTdGF0ZSkgcmV0dXJuIHN0YXRlO1xuICAgIHJldHVybiBjb25kaXRpb25hbFVwZGF0ZShfb2JqZWN0U3ByZWFkKHt9LCBuZXdTdGF0ZSwge1xuICAgICAgX3BlcnNpc3Q6IF9wZXJzaXN0XG4gICAgfSkpO1xuICB9O1xufSIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgRkxVU0gsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVIsIFJFSFlEUkFURSB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIHJlZ2lzdHJ5OiBbXSxcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZVxufTtcblxudmFyIHBlcnNpc3RvclJlZHVjZXIgPSBmdW5jdGlvbiBwZXJzaXN0b3JSZWR1Y2VyKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFR0lTVEVSOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgIHJlZ2lzdHJ5OiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0YXRlLnJlZ2lzdHJ5KSwgW2FjdGlvbi5rZXldKVxuICAgICAgfSk7XG5cbiAgICBjYXNlIFJFSFlEUkFURTpcbiAgICAgIHZhciBmaXJzdEluZGV4ID0gc3RhdGUucmVnaXN0cnkuaW5kZXhPZihhY3Rpb24ua2V5KTtcblxuICAgICAgdmFyIHJlZ2lzdHJ5ID0gX3RvQ29uc3VtYWJsZUFycmF5KHN0YXRlLnJlZ2lzdHJ5KTtcblxuICAgICAgcmVnaXN0cnkuc3BsaWNlKGZpcnN0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgIHJlZ2lzdHJ5OiByZWdpc3RyeSxcbiAgICAgICAgYm9vdHN0cmFwcGVkOiByZWdpc3RyeS5sZW5ndGggPT09IDBcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVyc2lzdFN0b3JlKHN0b3JlLCBvcHRpb25zLCBjYikge1xuICAvLyBoZWxwIGNhdGNoIGluY29ycmVjdCB1c2FnZSBvZiBwYXNzaW5nIFBlcnNpc3RDb25maWcgaW4gYXMgUGVyc2lzdG9yT3B0aW9uc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBvcHRpb25zVG9UZXN0ID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYmFubmVkS2V5cyA9IFsnYmxhY2tsaXN0JywgJ3doaXRlbGlzdCcsICd0cmFuc2Zvcm1zJywgJ3N0b3JhZ2UnLCAna2V5UHJlZml4JywgJ21pZ3JhdGUnXTtcbiAgICBiYW5uZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmICghIW9wdGlvbnNUb1Rlc3Rba10pIGNvbnNvbGUuZXJyb3IoXCJyZWR1eC1wZXJzaXN0OiBpbnZhbGlkIG9wdGlvbiBwYXNzZWQgdG8gcGVyc2lzdFN0b3JlOiBcXFwiXCIuY29uY2F0KGssIFwiXFxcIi4gWW91IG1heSBiZSBpbmNvcnJlY3RseSBwYXNzaW5nIHBlcnNpc3RDb25maWcgaW50byBwZXJzaXN0U3RvcmUsIHdoZXJlYXMgaXQgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIHBlcnNpc3RSZWR1Y2VyLlwiKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYm9vc3RyYXBwZWRDYiA9IGNiIHx8IGZhbHNlO1xuXG4gIHZhciBfcFN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdG9yUmVkdWNlciwgaW5pdGlhbFN0YXRlLCBvcHRpb25zICYmIG9wdGlvbnMuZW5oYW5jZXIgPyBvcHRpb25zLmVuaGFuY2VyIDogdW5kZWZpbmVkKTtcblxuICB2YXIgcmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlcihrZXkpIHtcbiAgICBfcFN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFR0lTVEVSLFxuICAgICAga2V5OiBrZXlcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlKGtleSwgcGF5bG9hZCwgZXJyKSB7XG4gICAgdmFyIHJlaHlkcmF0ZUFjdGlvbiA9IHtcbiAgICAgIHR5cGU6IFJFSFlEUkFURSxcbiAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICBlcnI6IGVycixcbiAgICAgIGtleToga2V5IC8vIGRpc3BhdGNoIHRvIGBzdG9yZWAgdG8gcmVoeWRyYXRlIGFuZCBgcGVyc2lzdG9yYCB0byB0cmFjayByZXN1bHRcblxuICAgIH07XG4gICAgc3RvcmUuZGlzcGF0Y2gocmVoeWRyYXRlQWN0aW9uKTtcblxuICAgIF9wU3RvcmUuZGlzcGF0Y2gocmVoeWRyYXRlQWN0aW9uKTtcblxuICAgIGlmIChib29zdHJhcHBlZENiICYmIHBlcnNpc3Rvci5nZXRTdGF0ZSgpLmJvb3RzdHJhcHBlZCkge1xuICAgICAgYm9vc3RyYXBwZWRDYigpO1xuICAgICAgYm9vc3RyYXBwZWRDYiA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcGVyc2lzdG9yID0gX29iamVjdFNwcmVhZCh7fSwgX3BTdG9yZSwge1xuICAgIHB1cmdlOiBmdW5jdGlvbiBwdXJnZSgpIHtcbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFBVUkdFLFxuICAgICAgICByZXN1bHQ6IGZ1bmN0aW9uIHJlc3VsdChwdXJnZVJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChwdXJnZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgIH0sXG4gICAgZmx1c2g6IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkxVU0gsXG4gICAgICAgIHJlc3VsdDogZnVuY3Rpb24gcmVzdWx0KGZsdXNoUmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZsdXNoUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFBBVVNFXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHBlcnNpc3Q6IGZ1bmN0aW9uIHBlcnNpc3QoKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFBFUlNJU1QsXG4gICAgICAgIHJlZ2lzdGVyOiByZWdpc3RlcixcbiAgICAgICAgcmVoeWRyYXRlOiByZWh5ZHJhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCEob3B0aW9ucyAmJiBvcHRpb25zLm1hbnVhbFBlcnNpc3QpKSB7XG4gICAgcGVyc2lzdG9yLnBlcnNpc3QoKTtcbiAgfVxuXG4gIHJldHVybiBwZXJzaXN0b3I7XG59IiwiaW1wb3J0IHsgS0VZX1BSRUZJWCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHB1cmdlU3RvcmVkU3RhdGUoY29uZmlnKSB7XG4gIHZhciBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XG4gIHZhciBzdG9yYWdlS2V5ID0gXCJcIi5jb25jYXQoY29uZmlnLmtleVByZWZpeCAhPT0gdW5kZWZpbmVkID8gY29uZmlnLmtleVByZWZpeCA6IEtFWV9QUkVGSVgpLmNvbmNhdChjb25maWcua2V5KTtcbiAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5LCB3YXJuSWZSZW1vdmVFcnJvcik7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlJlbW92ZUVycm9yKGVycikge1xuICBpZiAoZXJyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKCdyZWR1eC1wZXJzaXN0L3B1cmdlU3RvcmVkU3RhdGU6IEVycm9yIHB1cmdpbmcgZGF0YSBzdG9yZWQgc3RhdGUnLCBlcnIpO1xuICB9XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLypcbiAgYXV0b01lcmdlTGV2ZWwxOiBcbiAgICAtIG1lcmdlcyAxIGxldmVsIG9mIHN1YnN0YXRlXG4gICAgLSBza2lwcyBzdWJzdGF0ZSBpZiBhbHJlYWR5IG1vZGlmaWVkXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b01lcmdlTGV2ZWwxKGluYm91bmRTdGF0ZSwgb3JpZ2luYWxTdGF0ZSwgcmVkdWNlZFN0YXRlLCBfcmVmKSB7XG4gIHZhciBkZWJ1ZyA9IF9yZWYuZGVidWc7XG5cbiAgdmFyIG5ld1N0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgcmVkdWNlZFN0YXRlKTsgLy8gb25seSByZWh5ZHJhdGUgaWYgaW5ib3VuZFN0YXRlIGV4aXN0cyBhbmQgaXMgYW4gb2JqZWN0XG5cblxuICBpZiAoaW5ib3VuZFN0YXRlICYmIF90eXBlb2YoaW5ib3VuZFN0YXRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhpbmJvdW5kU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gaWdub3JlIF9wZXJzaXN0IGRhdGFcbiAgICAgIGlmIChrZXkgPT09ICdfcGVyc2lzdCcpIHJldHVybjsgLy8gaWYgcmVkdWNlciBtb2RpZmllcyBzdWJzdGF0ZSwgc2tpcCBhdXRvIHJlaHlkcmF0aW9uXG5cbiAgICAgIGlmIChvcmlnaW5hbFN0YXRlW2tleV0gIT09IHJlZHVjZWRTdGF0ZVtrZXldKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdC9zdGF0ZVJlY29uY2lsZXI6IHN1YiBzdGF0ZSBmb3Iga2V5IGAlc2AgbW9kaWZpZWQsIHNraXBwaW5nLicsIGtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIGhhcmQgc2V0IHRoZSBuZXcgdmFsdWVcblxuXG4gICAgICBuZXdTdGF0ZVtrZXldID0gaW5ib3VuZFN0YXRlW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZyAmJiBpbmJvdW5kU3RhdGUgJiYgX3R5cGVvZihpbmJvdW5kU3RhdGUpID09PSAnb2JqZWN0JykgY29uc29sZS5sb2coXCJyZWR1eC1wZXJzaXN0L3N0YXRlUmVjb25jaWxlcjogcmVoeWRyYXRlZCBrZXlzICdcIi5jb25jYXQoT2JqZWN0LmtleXMoaW5ib3VuZFN0YXRlKS5qb2luKCcsICcpLCBcIidcIikpO1xuICByZXR1cm4gbmV3U3RhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLypcbiAgYXV0b01lcmdlTGV2ZWwyOiBcbiAgICAtIG1lcmdlcyAyIGxldmVsIG9mIHN1YnN0YXRlXG4gICAgLSBza2lwcyBzdWJzdGF0ZSBpZiBhbHJlYWR5IG1vZGlmaWVkXG4gICAgLSB0aGlzIGlzIGVzc2VudGlhbGx5IHJlZHV4LXBlcmlzdCB2NCBiZWhhdmlvclxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9NZXJnZUxldmVsMihpbmJvdW5kU3RhdGUsIG9yaWdpbmFsU3RhdGUsIHJlZHVjZWRTdGF0ZSwgX3JlZikge1xuICB2YXIgZGVidWcgPSBfcmVmLmRlYnVnO1xuXG4gIHZhciBuZXdTdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHJlZHVjZWRTdGF0ZSk7IC8vIG9ubHkgcmVoeWRyYXRlIGlmIGluYm91bmRTdGF0ZSBleGlzdHMgYW5kIGlzIGFuIG9iamVjdFxuXG5cbiAgaWYgKGluYm91bmRTdGF0ZSAmJiBfdHlwZW9mKGluYm91bmRTdGF0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMoaW5ib3VuZFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8vIGlnbm9yZSBfcGVyc2lzdCBkYXRhXG4gICAgICBpZiAoa2V5ID09PSAnX3BlcnNpc3QnKSByZXR1cm47IC8vIGlmIHJlZHVjZXIgbW9kaWZpZXMgc3Vic3RhdGUsIHNraXAgYXV0byByZWh5ZHJhdGlvblxuXG4gICAgICBpZiAob3JpZ2luYWxTdGF0ZVtrZXldICE9PSByZWR1Y2VkU3RhdGVba2V5XSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Qvc3RhdGVSZWNvbmNpbGVyOiBzdWIgc3RhdGUgZm9yIGtleSBgJXNgIG1vZGlmaWVkLCBza2lwcGluZy4nLCBrZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYWluRW5vdWdoT2JqZWN0KHJlZHVjZWRTdGF0ZVtrZXldKSkge1xuICAgICAgICAvLyBpZiBvYmplY3QgaXMgcGxhaW4gZW5vdWdoIHNoYWxsb3cgbWVyZ2UgdGhlIG5ldyB2YWx1ZXMgKGhlbmNlIFwiTGV2ZWwyXCIpXG4gICAgICAgIG5ld1N0YXRlW2tleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBuZXdTdGF0ZVtrZXldLCB7fSwgaW5ib3VuZFN0YXRlW2tleV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIG90aGVyd2lzZSBoYXJkIHNldFxuXG5cbiAgICAgIG5ld1N0YXRlW2tleV0gPSBpbmJvdW5kU3RhdGVba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnICYmIGluYm91bmRTdGF0ZSAmJiBfdHlwZW9mKGluYm91bmRTdGF0ZSkgPT09ICdvYmplY3QnKSBjb25zb2xlLmxvZyhcInJlZHV4LXBlcnNpc3Qvc3RhdGVSZWNvbmNpbGVyOiByZWh5ZHJhdGVkIGtleXMgJ1wiLmNvbmNhdChPYmplY3Qua2V5cyhpbmJvdW5kU3RhdGUpLmpvaW4oJywgJyksIFwiJ1wiKSk7XG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZnVuY3Rpb24gaXNQbGFpbkVub3VnaE9iamVjdChvKSB7XG4gIHJldHVybiBvICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KG8pICYmIF90eXBlb2YobykgPT09ICdvYmplY3QnO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlV2ViU3RvcmFnZTtcblxudmFyIF9nZXRTdG9yYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRTdG9yYWdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlV2ViU3RvcmFnZSh0eXBlKSB7XG4gIHZhciBzdG9yYWdlID0gKDAsIF9nZXRTdG9yYWdlLmRlZmF1bHQpKHR5cGUpO1xuICByZXR1cm4ge1xuICAgIGdldEl0ZW06IGZ1bmN0aW9uIGdldEl0ZW0oa2V5KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXNvbHZlKHN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbShrZXksIGl0ZW0pIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc29sdmUoc3RvcmFnZS5zZXRJdGVtKGtleSwgaXRlbSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKGtleSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZShzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRTdG9yYWdlO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIG5vb3BTdG9yYWdlID0ge1xuICBnZXRJdGVtOiBub29wLFxuICBzZXRJdGVtOiBub29wLFxuICByZW1vdmVJdGVtOiBub29wXG59O1xuXG5mdW5jdGlvbiBoYXNTdG9yYWdlKHN0b3JhZ2VUeXBlKSB7XG4gIGlmICgodHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzZWxmKSkgIT09ICdvYmplY3QnIHx8ICEoc3RvcmFnZVR5cGUgaW4gc2VsZikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0cnkge1xuICAgIHZhciBzdG9yYWdlID0gc2VsZltzdG9yYWdlVHlwZV07XG4gICAgdmFyIHRlc3RLZXkgPSBcInJlZHV4LXBlcnNpc3QgXCIuY29uY2F0KHN0b3JhZ2VUeXBlLCBcIiB0ZXN0XCIpO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh0ZXN0S2V5LCAndGVzdCcpO1xuICAgIHN0b3JhZ2UuZ2V0SXRlbSh0ZXN0S2V5KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGVzdEtleSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgY29uc29sZS53YXJuKFwicmVkdXgtcGVyc2lzdCBcIi5jb25jYXQoc3RvcmFnZVR5cGUsIFwiIHRlc3QgZmFpbGVkLCBwZXJzaXN0ZW5jZSB3aWxsIGJlIGRpc2FibGVkLlwiKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UodHlwZSkge1xuICB2YXIgc3RvcmFnZVR5cGUgPSBcIlwiLmNvbmNhdCh0eXBlLCBcIlN0b3JhZ2VcIik7XG4gIGlmIChoYXNTdG9yYWdlKHN0b3JhZ2VUeXBlKSkgcmV0dXJuIHNlbGZbc3RvcmFnZVR5cGVdO2Vsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwicmVkdXgtcGVyc2lzdCBmYWlsZWQgdG8gY3JlYXRlIHN5bmMgc3RvcmFnZS4gZmFsbGluZyBiYWNrIHRvIG5vb3Agc3RvcmFnZS5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vb3BTdG9yYWdlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlV2ViU3RvcmFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2ViU3RvcmFnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlV2ViU3RvcmFnZS5kZWZhdWx0KSgnbG9jYWwnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==