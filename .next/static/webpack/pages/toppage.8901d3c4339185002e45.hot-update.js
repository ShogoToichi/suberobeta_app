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



var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\toppage\\parts\\Caption.js",
    _s = $RefreshSig$();





var toptitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_s(function (theme) {
  _s();

  return {
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
      color: Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_5__["Color"]).colors.he,
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
  };
}, "gDsCjeeItUuvgOWf1v4qoK9RF6k="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3BwYWdlL3BhcnRzL0NhcHRpb24uanMiXSwibmFtZXMiOlsidG9wdGl0bGUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0aXRsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJjYXAiLCJtYXJnaW5MZWZ0IiwibWFpbmNhcCIsImNvbG9yIiwidXNlQ29udGV4dCIsIkNvbG9yIiwiY29sb3JzIiwiaGUiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiaW1nIiwidG9wIiwicmlnaHQiLCJoZWlnaHQiLCJDYXB0aW9uIiwicHJvcHMiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQywyRUFBVSxJQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3BDQyxTQUFLLEVBQUU7QUFDSEMsY0FBUSxFQUFFLFVBRFA7QUFFSEMsV0FBSyxFQUFFLE1BRko7QUFHSEMsWUFBTSxFQUFFLEtBSEw7QUFJSEMsZUFBUyxFQUFFO0FBSlIsS0FENkI7QUFPcENDLE9BQUcsRUFBRTtBQUNEQyxnQkFBVSxFQUFFO0FBRFgsS0FQK0I7QUFVcENDLFdBQU8sRUFBRTtBQUNMRCxnQkFBVSxFQUFFLE1BRFQ7QUFFSEUsV0FBSyxFQUFFQyx3REFBVSxDQUFDQyxvREFBRCxDQUFWLENBQWtCQyxNQUFsQixDQUF5QkMsRUFGN0I7QUFHSEMsZ0JBQVUsRUFBRSxNQUhUO0FBSUhDLGFBQU8sRUFBQyxLQUpMO0FBS0hDLGNBQVEsRUFBQztBQUxOLHFCQU1RLE1BTlIsQ0FWNkI7QUFrQnBDQyxPQUFHLEVBQUU7QUFDRGYsY0FBUSxFQUFFLFVBRFQ7QUFFRGdCLFNBQUcsRUFBRSxNQUZKO0FBR0RDLFdBQUssRUFBRSxPQUhOO0FBSURDLFlBQU0sRUFBRSxPQUpQO0FBS0RqQixXQUFLLEVBQUU7QUFMTjtBQWxCK0IsR0FBWjtBQUFBLENBQUQsa0NBQTNCO0FBNEJlLFNBQVNrQixPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUVuQyxNQUFNQyxPQUFPLEdBQUd6QixRQUFRLEVBQXhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUV5QixPQUFPLENBQUN0QixLQUF4QjtBQUFBLDRCQUNJLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGNBQVEsRUFBRXNCLE9BQU8sQ0FBQ2pCLEdBQTNDO0FBQUEsMEdBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSSxxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUVpQixPQUFPLENBQUNmLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFVSTtBQUFLLFNBQUcsRUFBQywrQkFBVDtBQUF5QyxXQUFLLEVBQUMsT0FBL0M7QUFBdUQsU0FBRyxFQUFDLGtEQUEzRDtBQUFzRSxlQUFTLEVBQUVlLE9BQU8sQ0FBQ047QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7S0FsQnVCSSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvcHBhZ2UuODkwMWQzYzQzMzkxODUwMDJlNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGljL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgdG9wdGl0bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtYXJnaW46ICc1cHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgfSxcclxuICAgIGNhcDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIG1haW5jYXA6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjMwcHhcIixcclxuICAgICAgICBjb2xvcjogdXNlQ29udGV4dChDb2xvcikuY29sb3JzLmhlLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICBwYWRkaW5nOic0cHgnLFxyXG4gICAgICAgIGZvbnRTaXplOlwiMTYwcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OlwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIGltZzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzUwcHgnLFxyXG4gICAgICAgIHJpZ2h0OiAnMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgIH0sXHJcblxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXB0aW9uKHByb3BzKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB0b3B0aXRsZSgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNsYXNOYW1lPXtjbGFzc2VzLmNhcH0+XHJcbiAgICAgICAgICAgICAgICDlpb3jgY3jgarmmYLplpPjgavlpb3jgY3jgarloLTmiYDjgac8YnIgLz5cclxuICAgICAgICAgICAgICAgIOOCueOCreODvOODu+OCueODjuODvOODnOODvOODieODrOODg+OCueODs+OBr1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmNhcH0gID5cclxuICAgICAgICAgICAgICAgIHN1YmVyb1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9zbm93Ym9hcmQuanBnXCIgd2lkdGg9XCIxMDBweFwiIGFsdD1cIuOCueODjuODvOODnOODvOODieeUu+WDj1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9