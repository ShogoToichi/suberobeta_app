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
    color: '#3CB371',
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
        lineNumber: 40,
        columnNumber: 29
      }, this), "\u30B9\u30AD\u30FC\u30FB\u30B9\u30CE\u30FC\u30DC\u30FC\u30C9\u30EC\u30C3\u30B9\u30F3\u306F"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h1",
      className: classes.maincap,
      children: "subero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../../static/snowboard.jpg",
      width: "100px",
      alt: "\u30B9\u30CE\u30FC\u30DC\u30FC\u30C9\u753B\u50CF",
      className: classes.img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3BwYWdlL3BhcnRzL0NhcHRpb24uanMiXSwibmFtZXMiOlsidG9wdGl0bGUiLCJtYWtlU3R5bGVzIiwidGl0bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiY2FwIiwibWFyZ2luTGVmdCIsIm1haW5jYXAiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJpbWciLCJ0b3AiLCJyaWdodCIsImhlaWdodCIsIkNhcHRpb24iLCJwcm9wcyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDJFQUFVLENBQUM7QUFDeEJDLE9BQUssRUFBRTtBQUNIQyxZQUFRLEVBQUUsVUFEUDtBQUVIQyxTQUFLLEVBQUUsTUFGSjtBQUdIQyxVQUFNLEVBQUUsS0FITDtBQUlIQyxhQUFTLEVBQUU7QUFKUixHQURpQjtBQU94QkMsS0FBRyxFQUFFO0FBQ0RDLGNBQVUsRUFBRTtBQURYLEdBUG1CO0FBVXhCQyxTQUFPLEVBQUU7QUFDTEQsY0FBVSxFQUFFLE1BRFQ7QUFFSEUsU0FBSyxFQUFFLFNBRko7QUFHSEMsY0FBVSxFQUFFLE1BSFQ7QUFJSEMsV0FBTyxFQUFDLEtBSkw7QUFLSEMsWUFBUSxFQUFDO0FBTE4sbUJBTVEsTUFOUixDQVZpQjtBQWtCeEJDLEtBQUcsRUFBRTtBQUNEWCxZQUFRLEVBQUUsVUFEVDtBQUVEWSxPQUFHLEVBQUUsTUFGSjtBQUdEQyxTQUFLLEVBQUUsT0FITjtBQUlEQyxVQUFNLEVBQUUsT0FKUDtBQUtEYixTQUFLLEVBQUU7QUFMTjtBQWxCbUIsQ0FBRCxDQUEzQjtBQTRCZSxTQUFTYyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUVuQyxNQUFNQyxPQUFPLEdBQUdwQixRQUFRLEVBQXhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVvQixPQUFPLENBQUNsQixLQUF4QjtBQUFBLDRCQUNJLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGNBQVEsRUFBRWtCLE9BQU8sQ0FBQ2IsR0FBM0M7QUFBQSwwR0FDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU1JLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQVMsRUFBRWEsT0FBTyxDQUFDWCxPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBVUk7QUFBSyxTQUFHLEVBQUMsK0JBQVQ7QUFBeUMsV0FBSyxFQUFDLE9BQS9DO0FBQXVELFNBQUcsRUFBQyxrREFBM0Q7QUFBc0UsZUFBUyxFQUFFVyxPQUFPLENBQUNOO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIO0tBbEJ1QkksTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3BwYWdlLjFiMmQ0MjgyMDVkMjg5NjE2YjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcblxyXG5jb25zdCB0b3B0aXRsZSA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpbjogJzVweCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICB9LFxyXG4gICAgY2FwOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbmNhcDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMzBweFwiLFxyXG4gICAgICAgIGNvbG9yOiAnIzNDQjM3MScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgIHBhZGRpbmc6JzRweCcsXHJcbiAgICAgICAgZm9udFNpemU6XCIxNjBweFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnNTBweCcsXHJcbiAgICAgICAgcmlnaHQ6ICcyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgfSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXB0aW9uKHByb3BzKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB0b3B0aXRsZSgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNsYXNOYW1lPXtjbGFzc2VzLmNhcH0+XHJcbiAgICAgICAgICAgICAgICDlpb3jgY3jgarmmYLplpPjgavlpb3jgY3jgarloLTmiYDjgac8YnIgLz5cclxuICAgICAgICAgICAgICAgIOOCueOCreODvOODu+OCueODjuODvOODnOODvOODieODrOODg+OCueODs+OBr1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmNhcH0gID5cclxuICAgICAgICAgICAgICAgIHN1YmVyb1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9zbm93Ym9hcmQuanBnXCIgd2lkdGg9XCIxMDBweFwiIGFsdD1cIuOCueODjuODvOODnOODvOODieeUu+WDj1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9