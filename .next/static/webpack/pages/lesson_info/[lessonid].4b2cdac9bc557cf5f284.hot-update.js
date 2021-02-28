webpackHotUpdate_N_E("pages/lesson_info/[lessonid]",{

/***/ "./components/lessoninfo/parts/LessonDitail.js":
/*!*****************************************************!*\
  !*** ./components/lessoninfo/parts/LessonDitail.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LessonDitail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _normal_parts_Img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../normal_parts/Img */ "./components/normal_parts/Img.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");

var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessoninfo\\parts\\LessonDitail.js";





var plofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  teachername: {
    margin: "20px"
  },
  info: {
    margin: "10px"
  }
});
function LessonDitail(props) {
  var classes = plofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    elevation: 24,
    rounded: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Img__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: props.imageurl,
      size: "70"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h6",
        className: classes.creatername,
        children: ["\u8B1B\u5E2B\u540D\uFF1A ", props.profileusername]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h7",
        display: "block",
        className: classes.info,
        children: ["\u6599\u91D1\uFF1A", props.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h7",
        display: "block",
        className: classes.info,
        children: ["\u5834\u6240\uFF1A", props.place]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h7",
        display: "block",
        className: classes.info,
        children: ["\u65E5\u6642\uFF1A", props.time]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h7",
        display: "block",
        className: classes.info,
        children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.lessoncomment]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h7",
        display: "block",
        className: classes.info
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
_c = LessonDitail;

var _c;

$RefreshReg$(_c, "LessonDitail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL3BhcnRzL0xlc3NvbkRpdGFpbC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlIiwibWFrZVN0eWxlcyIsInRlYWNoZXJuYW1lIiwibWFyZ2luIiwiaW5mbyIsIkxlc3NvbkRpdGFpbCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdldXJsIiwiY3JlYXRlcm5hbWUiLCJwcm9maWxldXNlcm5hbWUiLCJwcmljZSIsInBsYWNlIiwidGltZSIsImxlc3NvbmNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywyRUFBVSxDQUFDO0FBQ3ZCQyxhQUFXLEVBQUU7QUFDVEMsVUFBTSxFQUFFO0FBREMsR0FEVTtBQUl2QkMsTUFBSSxFQUFFO0FBQ0ZELFVBQU0sRUFBRTtBQUROO0FBSmlCLENBQUQsQ0FBMUI7QUFTZSxTQUFTRSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUN4QyxNQUFNQyxPQUFPLEdBQUdQLE9BQU8sRUFBdkI7QUFDQSxzQkFDSSxxRUFBQywrREFBRDtBQUFPLGFBQVMsRUFBRSxFQUFsQjtBQUFzQixXQUFPLE1BQTdCO0FBQUEsNEJBQ1UscUVBQUMseURBQUQ7QUFBSyxTQUFHLEVBQUVNLEtBQUssQ0FBQ0UsUUFBaEI7QUFBMEIsVUFBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVixlQUVZO0FBQUEsOEJBQ0kscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBRUQsT0FBTyxDQUFDRSxXQUE1QztBQUFBLGdEQUErREgsS0FBSyxDQUFDSSxlQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQU8sRUFBQyxPQUFqQztBQUF5QyxpQkFBUyxFQUFFSCxPQUFPLENBQUNILElBQTVEO0FBQUEseUNBQXNFRSxLQUFLLENBQUNLLEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUkscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBTyxFQUFDLE9BQWpDO0FBQXlDLGlCQUFTLEVBQUVKLE9BQU8sQ0FBQ0gsSUFBNUQ7QUFBQSx5Q0FBc0VFLEtBQUssQ0FBQ00sS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFNSSxxRUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFPLEVBQUMsT0FBakM7QUFBeUMsaUJBQVMsRUFBRUwsT0FBTyxDQUFDSCxJQUE1RDtBQUFBLHlDQUFzRUUsS0FBSyxDQUFDTyxJQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQU8sRUFBQyxPQUFqQztBQUF5QyxpQkFBUyxFQUFFTixPQUFPLENBQUNILElBQTVEO0FBQUEsaUVBQTBFRSxLQUFLLENBQUNRLGFBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBUUkscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBTyxFQUFDLE9BQWpDO0FBQXlDLGlCQUFTLEVBQUVQLE9BQU8sQ0FBQ0g7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7S0FqQnVCQyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9pbmZvL1tsZXNzb25pZF0uNGIyY2RhYzliYzU1N2NmNWYyODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgSW1nIGZyb20gXCIuLi8uLi9ub3JtYWxfcGFydHMvSW1nXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuY29uc3QgcGxvZmlsZSA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGVhY2hlcm5hbWU6IHtcclxuICAgICAgICBtYXJnaW46IFwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlc3NvbkRpdGFpbChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHBsb2ZpbGUoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsyNH0gcm91bmRlZD5cclxuICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e3Byb3BzLmltYWdldXJsfSBzaXplPVwiNzBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNyZWF0ZXJuYW1lfT7orJvluKvlkI3vvJoge3Byb3BzLnByb2ZpbGV1c2VybmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7mlpnph5HvvJp7cHJvcHMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuWgtOaJgO+8mntwcm9wcy5wbGFjZX08L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5pel5pmC77yae3Byb3BzLnRpbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+44Os44OD44K544Oz5YaF5a6577yae3Byb3BzLmxlc3NvbmNvbW1lbnR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9