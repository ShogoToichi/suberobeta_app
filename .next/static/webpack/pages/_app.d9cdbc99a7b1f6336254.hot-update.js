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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");









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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlZHV4LXN0b3JlLmpzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiX05SU18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdFN0b3JlIiwid2luZG93IiwiQXBwIiwiYXBwQ29udGV4dCIsInJlZHV4U3RvcmUiLCJjdHgiLCJhcHBQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxRQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLHNCQUFkOztBQUVBLFNBQVNDLGdCQUFULENBQTJCQyxZQUEzQixFQUF5QztBQUN2QyxNQUFHSCxRQUFILEVBQWE7QUFDWCxXQUFPSSxTQUFTLENBQUNELFlBQUQsQ0FBaEI7QUFDRDs7QUFDRCxNQUFJLENBQUNFLE1BQU0sQ0FBQ0osS0FBRCxDQUFYLEVBQW9CO0FBQ2xCSSxVQUFNLENBQUNKLEtBQUQsQ0FBTixHQUFnQkcsU0FBUyxDQUFDRCxZQUFELENBQXpCO0FBQ0Q7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDSixLQUFELENBQWI7QUFDRDs7QUFFYyx5RUFBQ0ssR0FBRCxFQUFTO0FBQ3RCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbVhBRWdDQyxVQUZoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHVUMsNEJBSFYsR0FHdUJOLGdCQUFnQixFQUh2QztBQUlJSyw0QkFBVSxDQUFDRSxHQUFYLENBQWVELFVBQWYsR0FBNEJBLFVBQTVCO0FBQ0lFLDBCQUxSLEdBS21CLEVBTG5COztBQUFBLHdCQU1RLE9BQU9KLEdBQUcsQ0FBQ0ssZUFBWCxLQUErQixVQU52QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQU91QkwsR0FBRyxDQUFDSyxlQUFKLENBQW9CSixVQUFwQixDQVB2Qjs7QUFBQTtBQU9NRywwQkFQTjs7QUFBQTtBQUFBLG1GQVVTQSxRQVZUO0FBV01FLHFDQUFpQixFQUFFSixVQUFVLENBQUNLLFFBQVg7QUFYekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjRSwyQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtOLFVBQUwsR0FBa0JOLGdCQUFnQixDQUFDWSxLQUFLLENBQUNGLGlCQUFQLENBQWxDO0FBRmtCO0FBR25COztBQWpCSDtBQUFBO0FBQUEsK0JBbUJXO0FBQ1AsNEJBQU8scUVBQUMsR0FBRCxrQ0FBUyxLQUFLRSxLQUFkO0FBQ1Asb0JBQVUsRUFBRSxLQUFLTjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFFRDtBQXRCSDs7QUFBQTtBQUFBLElBQW1DTyxnREFBbkM7QUF3QkQsQ0F6QkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kOWNkYmM5OWE3YjFmNjMzNjI1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC5qc+OBrlJlZHV444Gu6Kit5a6a44OV44Kh44Kk44OrP1xyXG5cclxuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbmZpIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09XCJ1bmRlZmluZWRcIlxyXG5jb25zdCBfTlJTXyA9IFwiX19ORVhUX1JFRFVYX1NUT1JFX19cIlxyXG5cclxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZSAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgaWYoaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICBpZiAoIXdpbmRvd1tfTlJTX10pIHtcclxuICAgIHdpbmRvd1tfTlJTX10gPSBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19OUlNfXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoQXBwKSA9PiB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpZHRoUmVkdXggZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCkge1xyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlXHJcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLi4uYXBwUHJvcHMsXHJcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc31cclxuICAgICAgcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPlxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=