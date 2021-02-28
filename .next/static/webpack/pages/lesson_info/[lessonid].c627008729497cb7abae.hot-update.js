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
  paper: {
    position: "absolute",
    width: "80%",
    marginTop: "20px"
  },
  username: {
    display: "inline-block",
    margin: "0px"
  },
  info: {
    marginLeft: "50px",
    marginTopn: "10px"
  }
});
function LessonDitail(props) {
  var classes = plofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper,
    elevation: 24,
    rounded: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Img__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.img,
      src: props.imageurl,
      size: "70"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6",
      className: classes.username,
      children: ["\u8B1B\u5E2B\u540D\uFF1A ", props.profileusername]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u6599\u91D1\uFF1A", props.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u5834\u6240\uFF1A", props.place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u65E5\u6642\uFF1A", props.time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL3BhcnRzL0xlc3NvbkRpdGFpbC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlIiwibWFrZVN0eWxlcyIsInBhcGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiZGlzcGxheSIsIm1hcmdpbiIsImluZm8iLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wbiIsIkxlc3NvbkRpdGFpbCIsInByb3BzIiwiY2xhc3NlcyIsImltZyIsImltYWdldXJsIiwicHJvZmlsZXVzZXJuYW1lIiwicHJpY2UiLCJwbGFjZSIsInRpbWUiLCJsZXNzb25jb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsMkVBQVUsQ0FBQztBQUN2QkMsT0FBSyxFQUFFO0FBQ0hDLFlBQVEsRUFBRSxVQURQO0FBRUhDLFNBQUssRUFBQyxLQUZIO0FBR0hDLGFBQVMsRUFBRTtBQUhSLEdBRGdCO0FBTXZCQyxVQUFRLEVBQUU7QUFDTkMsV0FBTyxFQUFFLGNBREg7QUFFTkMsVUFBTSxFQUFFO0FBRkYsR0FOYTtBQVV2QkMsTUFBSSxFQUFFO0FBQ0ZDLGNBQVUsRUFBRSxNQURWO0FBRUZDLGNBQVUsRUFBRTtBQUZWO0FBVmlCLENBQUQsQ0FBMUI7QUFnQmUsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDeEMsTUFBTUMsT0FBTyxHQUFHZCxPQUFPLEVBQXZCO0FBQ0Esc0JBQ0kscUVBQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUVjLE9BQU8sQ0FBQ1osS0FBMUI7QUFBaUMsYUFBUyxFQUFFLEVBQTVDO0FBQWdELFdBQU8sTUFBdkQ7QUFBQSw0QkFDVSxxRUFBQyx5REFBRDtBQUFLLGVBQVMsRUFBRVksT0FBTyxDQUFDQyxHQUF4QjtBQUE2QixTQUFHLEVBQUVGLEtBQUssQ0FBQ0csUUFBeEM7QUFBa0QsVUFBSSxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVixlQUVnQixxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUVGLE9BQU8sQ0FBQ1IsUUFBNUM7QUFBQSw4Q0FBNERPLEtBQUssQ0FBQ0ksZUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmhCLGVBR2dCLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQU8sRUFBQyxPQUFqQztBQUF5QyxlQUFTLEVBQUVILE9BQU8sQ0FBQ0wsSUFBNUQ7QUFBQSx1Q0FBc0VJLEtBQUssQ0FBQ0ssS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSGhCLGVBS2dCLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQU8sRUFBQyxPQUFqQztBQUF5QyxlQUFTLEVBQUVKLE9BQU8sQ0FBQ0wsSUFBNUQ7QUFBQSx1Q0FBc0VJLEtBQUssQ0FBQ00sS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTGhCLGVBT2dCLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQU8sRUFBQyxPQUFqQztBQUF5QyxlQUFTLEVBQUVMLE9BQU8sQ0FBQ0wsSUFBNUQ7QUFBQSx1Q0FBc0VJLEtBQUssQ0FBQ08sSUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUGhCLGVBUWdCLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQU8sRUFBQyxPQUFqQztBQUF5QyxlQUFTLEVBQUVOLE9BQU8sQ0FBQ0wsSUFBNUQ7QUFBQSwrREFBMEVJLEtBQUssQ0FBQ1EsYUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUmhCLGVBU2dCLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQU8sRUFBQyxPQUFqQztBQUF5QyxlQUFTLEVBQUVQLE9BQU8sQ0FBQ0w7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIO0tBZnVCRyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9pbmZvL1tsZXNzb25pZF0uYzYyNzAwODcyOTQ5N2NiN2FiYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgSW1nIGZyb20gXCIuLi8uLi9ub3JtYWxfcGFydHMvSW1nXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuY29uc3QgcGxvZmlsZSA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOlwiODAlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIlxyXG4gICAgfSxcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNTBweFwiLFxyXG4gICAgICAgIG1hcmdpblRvcG46IFwiMTBweFwiXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVzc29uRGl0YWlsKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZSgpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MjR9IHJvdW5kZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gc3JjPXtwcm9wcy5pbWFnZXVybH0gc2l6ZT1cIjcwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcm5hbWV9Puism+W4q+WQje+8miB7cHJvcHMucHJvZmlsZXVzZXJuYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuaWmemHke+8mntwcm9wcy5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5aC05omA77yae3Byb3BzLnBsYWNlfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7ml6XmmYLvvJp7cHJvcHMudGltZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7jg6zjg4Pjgrnjg7PlhoXlrrnvvJp7cHJvcHMubGVzc29uY29tbWVudH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=