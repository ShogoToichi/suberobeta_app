webpackHotUpdate_N_E("pages/toppage",{

/***/ "./components/toppage/parts/Caption.js":
/*!*********************************************!*\
  !*** ./components/toppage/parts/Caption.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Caption; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/colors */ "./static/colors.js");


var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\toppage\\parts\\Caption.js";




var toptitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  title: {
    position: 'relative',
    width: '100%',
    margin: '5px',
    textAlign: 'left'
  },
  cap: {
    marginLeft: "20px"
  },
  maincap: Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    marginLeft: "30px",
    color: Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_5__["Color"]).colors.bgGreen,
    fontWeight: 'bold',
    padding: '4px',
    fontSize: "160px"
  }, "marginLeft", "20px"),
  img: {
    position: 'absolute',
    top: '50px',
    right: '200px',
    height: '300px',
    width: '300px'
  }
});
function Caption(props) {
  var classes = toptitle();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.title,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h5",
      clasName: classes.cap,
      children: ["\u597D\u304D\u306A\u6642\u9593\u306B\u597D\u304D\u306A\u5834\u6240\u3067", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }, this), "\u30B9\u30AD\u30FC\u30FB\u30B9\u30CE\u30FC\u30DC\u30FC\u30C9\u30EC\u30C3\u30B9\u30F3\u306F"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h1",
      className: classes.maincap,
      children: "subero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../../static/snowboard.jpg",
      width: "100px",
      alt: "\u30B9\u30CE\u30FC\u30DC\u30FC\u30C9\u753B\u50CF",
      className: classes.img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}
_c = Caption;

var _c;

$RefreshReg$(_c, "Caption");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3BwYWdlL3BhcnRzL0NhcHRpb24uanMiXSwibmFtZXMiOlsidG9wdGl0bGUiLCJtYWtlU3R5bGVzIiwidGl0bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiY2FwIiwibWFyZ2luTGVmdCIsIm1haW5jYXAiLCJjb2xvciIsInVzZUNvbnRleHQiLCJDb2xvciIsImNvbG9ycyIsImJnR3JlZW4iLCJmb250V2VpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiaW1nIiwidG9wIiwicmlnaHQiLCJoZWlnaHQiLCJDYXB0aW9uIiwicHJvcHMiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQywyRUFBVSxDQUFDO0FBQ3hCQyxPQUFLLEVBQUU7QUFDSEMsWUFBUSxFQUFFLFVBRFA7QUFFSEMsU0FBSyxFQUFFLE1BRko7QUFHSEMsVUFBTSxFQUFFLEtBSEw7QUFJSEMsYUFBUyxFQUFFO0FBSlIsR0FEaUI7QUFPeEJDLEtBQUcsRUFBRTtBQUNEQyxjQUFVLEVBQUU7QUFEWCxHQVBtQjtBQVV4QkMsU0FBTyxFQUFFO0FBQ0xELGNBQVUsRUFBRSxNQURUO0FBRUhFLFNBQUssRUFBRUMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJDLE9BRjdCO0FBR0hDLGNBQVUsRUFBRSxNQUhUO0FBSUhDLFdBQU8sRUFBQyxLQUpMO0FBS0hDLFlBQVEsRUFBQztBQUxOLG1CQU1RLE1BTlIsQ0FWaUI7QUFrQnhCQyxLQUFHLEVBQUU7QUFDRGYsWUFBUSxFQUFFLFVBRFQ7QUFFRGdCLE9BQUcsRUFBRSxNQUZKO0FBR0RDLFNBQUssRUFBRSxPQUhOO0FBSURDLFVBQU0sRUFBRSxPQUpQO0FBS0RqQixTQUFLLEVBQUU7QUFMTjtBQWxCbUIsQ0FBRCxDQUEzQjtBQTRCZSxTQUFTa0IsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFFbkMsTUFBTUMsT0FBTyxHQUFHeEIsUUFBUSxFQUF4QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFd0IsT0FBTyxDQUFDdEIsS0FBeEI7QUFBQSw0QkFDSSxxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixjQUFRLEVBQUVzQixPQUFPLENBQUNqQixHQUEzQztBQUFBLDBHQUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUkscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFFaUIsT0FBTyxDQUFDZixPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBVUk7QUFBSyxTQUFHLEVBQUMsK0JBQVQ7QUFBeUMsV0FBSyxFQUFDLE9BQS9DO0FBQXVELFNBQUcsRUFBQyxrREFBM0Q7QUFBc0UsZUFBUyxFQUFFZSxPQUFPLENBQUNOO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIO0tBbEJ1QkksTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3BwYWdlLmZmOWMwNDU0ZTQ5M2I3MDVkNGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSBcIi4uLy4uLy4uL3N0YXRpYy9jb2xvcnNcIjtcclxuXHJcbmNvbnN0IHRvcHRpdGxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnNXB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIH0sXHJcbiAgICBjYXA6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcclxuICAgIH0sXHJcbiAgICBtYWluY2FwOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgICAgY29sb3I6IHVzZUNvbnRleHQoQ29sb3IpLmNvbG9ycy5iZ0dyZWVuLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICBwYWRkaW5nOic0cHgnLFxyXG4gICAgICAgIGZvbnRTaXplOlwiMTYwcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OlwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIGltZzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzUwcHgnLFxyXG4gICAgICAgIHJpZ2h0OiAnMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgIH0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FwdGlvbihwcm9wcykge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdG9wdGl0bGUoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjbGFzTmFtZT17Y2xhc3Nlcy5jYXB9PlxyXG4gICAgICAgICAgICAgICAg5aW944GN44Gq5pmC6ZaT44Gr5aW944GN44Gq5aC05omA44GnPGJyIC8+XHJcbiAgICAgICAgICAgICAgICDjgrnjgq3jg7zjg7vjgrnjg47jg7zjg5zjg7zjg4njg6zjg4Pjgrnjg7Pjga9cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5jYXB9ICA+XHJcbiAgICAgICAgICAgICAgICBzdWJlcm9cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvc25vd2JvYXJkLmpwZ1wiIHdpZHRoPVwiMTAwcHhcIiBhbHQ9XCLjgrnjg47jg7zjg5zjg7zjg4nnlLvlg49cIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==