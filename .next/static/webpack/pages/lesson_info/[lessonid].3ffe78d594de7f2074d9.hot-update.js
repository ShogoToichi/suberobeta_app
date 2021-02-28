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
    marginLeft: "500px"
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
      lineNumber: 26,
      columnNumber: 19
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6",
      className: classes.username,
      children: ["\u8B1B\u5E2B\u540D\uFF1A ", props.profileusername]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u6599\u91D1\uFF1A", props.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u5834\u6240\uFF1A", props.place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u65E5\u6642\uFF1A", props.time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info,
      children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h7",
      display: "block",
      className: classes.info
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL3BhcnRzL0xlc3NvbkRpdGFpbC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlIiwibWFrZVN0eWxlcyIsInBhcGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiZGlzcGxheSIsIm1hcmdpbiIsImluZm8iLCJtYXJnaW5MZWZ0IiwiTGVzc29uRGl0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiaW1nIiwiaW1hZ2V1cmwiLCJwcm9maWxldXNlcm5hbWUiLCJwcmljZSIsInBsYWNlIiwidGltZSIsImxlc3NvbmNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywyRUFBVSxDQUFDO0FBQ3ZCQyxPQUFLLEVBQUU7QUFDSEMsWUFBUSxFQUFFLFVBRFA7QUFFSEMsU0FBSyxFQUFDLEtBRkg7QUFHSEMsYUFBUyxFQUFFO0FBSFIsR0FEZ0I7QUFNdkJDLFVBQVEsRUFBRTtBQUNOQyxXQUFPLEVBQUUsY0FESDtBQUVOQyxVQUFNLEVBQUU7QUFGRixHQU5hO0FBVXZCQyxNQUFJLEVBQUU7QUFDRkMsY0FBVSxFQUFFO0FBRFY7QUFWaUIsQ0FBRCxDQUExQjtBQWVlLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3hDLE1BQU1DLE9BQU8sR0FBR2IsT0FBTyxFQUF2QjtBQUNBLHNCQUNJLHFFQUFDLCtEQUFEO0FBQU8sYUFBUyxFQUFFYSxPQUFPLENBQUNYLEtBQTFCO0FBQWlDLGFBQVMsRUFBRSxFQUE1QztBQUFnRCxXQUFPLE1BQXZEO0FBQUEsNEJBQ1UscUVBQUMseURBQUQ7QUFBSyxlQUFTLEVBQUVXLE9BQU8sQ0FBQ0MsR0FBeEI7QUFBNkIsU0FBRyxFQUFFRixLQUFLLENBQUNHLFFBQXhDO0FBQWtELFVBQUksRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFYsZUFFZ0IscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFFRixPQUFPLENBQUNQLFFBQTVDO0FBQUEsOENBQTRETSxLQUFLLENBQUNJLGVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZoQixlQUdnQixxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFPLEVBQUMsT0FBakM7QUFBeUMsZUFBUyxFQUFFSCxPQUFPLENBQUNKLElBQTVEO0FBQUEsdUNBQXNFRyxLQUFLLENBQUNLLEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhoQixlQUtnQixxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFPLEVBQUMsT0FBakM7QUFBeUMsZUFBUyxFQUFFSixPQUFPLENBQUNKLElBQTVEO0FBQUEsdUNBQXNFRyxLQUFLLENBQUNNLEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxoQixlQU9nQixxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFPLEVBQUMsT0FBakM7QUFBeUMsZUFBUyxFQUFFTCxPQUFPLENBQUNKLElBQTVEO0FBQUEsdUNBQXNFRyxLQUFLLENBQUNPLElBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBoQixlQVFnQixxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFPLEVBQUMsT0FBakM7QUFBeUMsZUFBUyxFQUFFTixPQUFPLENBQUNKLElBQTVEO0FBQUEsK0RBQTBFRyxLQUFLLENBQUNRLGFBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJoQixlQVNnQixxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFPLEVBQUMsT0FBakM7QUFBeUMsZUFBUyxFQUFFUCxPQUFPLENBQUNKO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDtLQWZ1QkUsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLjNmZmU3OGQ1OTRkZTdmMjA3NGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IEltZyBmcm9tIFwiLi4vLi4vbm9ybWFsX3BhcnRzL0ltZ1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmNvbnN0IHBsb2ZpbGUgPSBtYWtlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDpcIjgwJVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCJcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjBweFwiLFxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjUwMHB4XCIsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVzc29uRGl0YWlsKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZSgpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MjR9IHJvdW5kZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gc3JjPXtwcm9wcy5pbWFnZXVybH0gc2l6ZT1cIjcwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcm5hbWV9Puism+W4q+WQje+8miB7cHJvcHMucHJvZmlsZXVzZXJuYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuaWmemHke+8mntwcm9wcy5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5aC05omA77yae3Byb3BzLnBsYWNlfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7ml6XmmYLvvJp7cHJvcHMudGltZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7jg6zjg4Pjgrnjg7PlhoXlrrnvvJp7cHJvcHMubGVzc29uY29tbWVudH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=