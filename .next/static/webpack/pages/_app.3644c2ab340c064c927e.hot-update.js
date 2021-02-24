webpackHotUpdate_N_E("pages/_app",{

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
    return configuerStore(initialState);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlZHV4LXN0b3JlLmpzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiX05SU18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY29uZmlndWVyU3RvcmUiLCJ3aW5kb3ciLCJpbml0U3RvcmUiLCJBcHAiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLFFBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsc0JBQWQ7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMkJDLFlBQTNCLEVBQXlDO0FBQ3ZDLE1BQUdILFFBQUgsRUFBYTtBQUNYLFdBQU9JLGNBQWMsQ0FBQ0QsWUFBRCxDQUFyQjtBQUNEOztBQUNELE1BQUksQ0FBQ0UsTUFBTSxDQUFDSixLQUFELENBQVgsRUFBb0I7QUFDbEJJLFVBQU0sQ0FBQ0osS0FBRCxDQUFOLEdBQWdCSyxTQUFTLENBQUNILFlBQUQsQ0FBekI7QUFDRDs7QUFDRCxTQUFPRSxNQUFNLENBQUNKLEtBQUQsQ0FBYjtBQUNEOztBQUVjLHlFQUFDTSxHQUFELEVBQVM7QUFDdEI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtWEFFZ0NDLFVBRmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdVQyw0QkFIVixHQUd1QlAsZ0JBQWdCLEVBSHZDO0FBSUlNLDRCQUFVLENBQUNFLEdBQVgsQ0FBZUQsVUFBZixHQUE0QkEsVUFBNUI7QUFDSUUsMEJBTFIsR0FLbUIsRUFMbkI7O0FBQUEsd0JBTVEsT0FBT0osR0FBRyxDQUFDSyxlQUFYLEtBQStCLFVBTnZDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBT3VCTCxHQUFHLENBQUNLLGVBQUosQ0FBb0JKLFVBQXBCLENBUHZCOztBQUFBO0FBT01HLDBCQVBOOztBQUFBO0FBQUEsbUZBVVNBLFFBVlQ7QUFXTUUscUNBQWlCLEVBQUVKLFVBQVUsQ0FBQ0ssUUFBWDtBQVh6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWNFLDJCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdDQUFNQSxLQUFOO0FBQ0EsWUFBS04sVUFBTCxHQUFrQlAsZ0JBQWdCLENBQUNhLEtBQUssQ0FBQ0YsaUJBQVAsQ0FBbEM7QUFGa0I7QUFHbkI7O0FBakJIO0FBQUE7QUFBQSwrQkFtQlc7QUFDUCw0QkFBTyxxRUFBQyxHQUFELGtDQUFTLEtBQUtFLEtBQWQ7QUFDUCxvQkFBVSxFQUFFLEtBQUtOO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUVEO0FBdEJIOztBQUFBO0FBQUEsSUFBbUNPLGdEQUFuQztBQXdCRCxDQXpCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM2NDRjMmFiMzQwYzA2NGM5MjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZXh0Lmpz44GuUmVkdXjjga7oqK3lrprjg5XjgqHjgqTjg6s/XHJcblxyXG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiLi9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PVwidW5kZWZpbmVkXCJcclxuY29uc3QgX05SU18gPSBcIl9fTkVYVF9SRURVWF9TVE9SRV9fXCJcclxuXHJcbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUgKGluaXRpYWxTdGF0ZSkge1xyXG4gIGlmKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gY29uZmlndWVyU3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICBpZiAoIXdpbmRvd1tfTlJTX10pIHtcclxuICAgIHdpbmRvd1tfTlJTX10gPSBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19OUlNfXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoQXBwKSA9PiB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpZHRoUmVkdXggZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCkge1xyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlXHJcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLi4uYXBwUHJvcHMsXHJcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc31cclxuICAgICAgcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPlxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=