webpackHotUpdate_N_E("pages/index",{

/***/ "./components/context_test.js":
/*!************************************!*\
  !*** ./components/context_test.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/colors */ "./static/colors.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\test.js",
    _s = $RefreshSig$();



function Test() {
  _s();

  var color = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_1__["Color"]);

  var conso = function conso() {
    console.log(color);
  };

  var colorred = "blue";
  conso();
  var test = {
    backgroundColor: Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_1__["Color"]).colors.headerColor,
    width: "120px",
    height: "30px",
    color: "#444"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: test,
    children: "\u3053\u3093\u306B\u3061\u306F\u4E16\u754C"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }, this);
}

_s(Test, "X1JNKyRUn0x0+ly/PAQWG5WOBoU=");

_c = Test;

var _c;

$RefreshReg$(_c, "Test");

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

/***/ "./components/test.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_normal_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/normal/Layout */ "./components/normal/Layout.js");
/* harmony import */ var _components_context_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context_test */ "./components/context_test.js");


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\pages\\index.js",
    _this = undefined;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_normal_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8",
    title: "Top page.",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_context_test__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZXN0IiwiY29sb3IiLCJ1c2VDb250ZXh0IiwiQ29sb3IiLCJjb25zbyIsImNvbnNvbGUiLCJsb2ciLCJjb2xvcnJlZCIsInRlc3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJoZWFkZXJDb2xvciIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZTtBQUFBOztBQUM1QixNQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNDLG9EQUFELENBQXhCOztBQUVBLE1BQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQUk7QUFBQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFBb0IsR0FBckM7O0FBRUEsTUFBTU0sUUFBUSxHQUFHLE1BQWpCO0FBRUFILE9BQUs7QUFFTCxNQUFNSSxJQUFJLEdBQUM7QUFDVEMsbUJBQWUsRUFBQ1Asd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBVixDQUFrQk8sTUFBbEIsQ0FBeUJDLFdBRGhDO0FBRVRDLFNBQUssRUFBQyxPQUZHO0FBR1RDLFVBQU0sRUFBQyxNQUhFO0FBSVRaLFNBQUssRUFBQztBQUpHLEdBQVg7QUFPQSxzQkFDSTtBQUFLLFNBQUssRUFBRU8sSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBckJ1QlIsSTs7S0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUdlO0FBQUEsc0JBQ2IscUVBQUMsaUVBQUQ7QUFBUSxVQUFNLEVBQUMsc0NBQWY7QUFBd0IsU0FBSyxFQUFDLFdBQTlCO0FBQUEsMkJBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYTtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2M0YTMwYzhiNTM5MjA5ZTQ1MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sb3J9IGZyb20gXCIuLi9zdGF0aWMvY29sb3JzXCI7XHJcbmltcG9ydCBSZWFjdCx7dXNlQ29udGV4dH1mcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QoKXtcclxuICBjb25zdCBjb2xvciA9IHVzZUNvbnRleHQoQ29sb3IpOyBcclxuXHJcbiAgY29uc3QgY29uc289KCk9Pntjb25zb2xlLmxvZyhjb2xvcik7fVxyXG5cclxuICBjb25zdCBjb2xvcnJlZCA9IFwiYmx1ZVwiO1xyXG5cclxuICBjb25zbygpO1xyXG5cclxuICBjb25zdCB0ZXN0PXtcclxuICAgIGJhY2tncm91bmRDb2xvcjp1c2VDb250ZXh0KENvbG9yKS5jb2xvcnMuaGVhZGVyQ29sb3IsXHJcbiAgICB3aWR0aDpcIjEyMHB4XCIsXHJcbiAgICBoZWlnaHQ6XCIzMHB4XCIsXHJcbiAgICBjb2xvcjpcIiM0NDRcIixcclxuICB9XHJcblxyXG4gIHJldHVybihcclxuICAgICAgPGRpdiBzdHlsZT17dGVzdH0+XHJcbiAgICAgICAg44GT44KT44Gr44Gh44Gv5LiW55WMXHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3JtYWwvTGF5b3V0XCI7XHJcbmltcG9ydCBUZXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRfdGVzdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+KFxyXG4gIDxMYXlvdXQgaGVhZGVyPVwi44OI44OD44OX44Oa44O844K4XCIgdGl0bGU9XCJUb3AgcGFnZS5cIj5cclxuICAgICAgPFRlc3QvPlxyXG4gIDwvTGF5b3V0PlxyXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=