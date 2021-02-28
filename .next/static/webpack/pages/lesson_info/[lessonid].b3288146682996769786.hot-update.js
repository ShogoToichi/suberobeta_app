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
    marginTop: "40px"
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
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL3BhcnRzL0xlc3NvbkRpdGFpbC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlIiwibWFrZVN0eWxlcyIsInBhcGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiZGlzcGxheSIsIm1hcmdpbiIsImluZm8iLCJtYXJnaW5MZWZ0IiwiTGVzc29uRGl0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiaW1nIiwiaW1hZ2V1cmwiLCJwcm9maWxldXNlcm5hbWUiLCJwcmljZSIsInBsYWNlIiwidGltZSIsImxlc3NvbmNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywyRUFBVSxDQUFDO0FBQ3ZCQyxPQUFLLEVBQUU7QUFDSEMsWUFBUSxFQUFFLFVBRFA7QUFFSEMsU0FBSyxFQUFDLEtBRkg7QUFHSEMsYUFBUyxFQUFFO0FBSFIsR0FEZ0I7QUFNdkJDLFVBQVEsRUFBRTtBQUNOQyxXQUFPLEVBQUUsY0FESDtBQUVOQyxVQUFNLEVBQUU7QUFGRixHQU5hO0FBVXZCQyxNQUFJLEVBQUU7QUFDRkMsY0FBVSxFQUFFLE1BRFY7QUFFRkwsYUFBUyxFQUFFO0FBRlQ7QUFWaUIsQ0FBRCxDQUExQjtBQWdCZSxTQUFTTSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUN4QyxNQUFNQyxPQUFPLEdBQUdiLE9BQU8sRUFBdkI7QUFDQSxzQkFDSSxxRUFBQywrREFBRDtBQUFPLGFBQVMsRUFBRWEsT0FBTyxDQUFDWCxLQUExQjtBQUFpQyxhQUFTLEVBQUUsRUFBNUM7QUFBZ0QsV0FBTyxNQUF2RDtBQUFBLDRCQUNRLHFFQUFDLHlEQUFEO0FBQUssZUFBUyxFQUFFVyxPQUFPLENBQUNDLEdBQXhCO0FBQTZCLFNBQUcsRUFBRUYsS0FBSyxDQUFDRyxRQUF4QztBQUFrRCxVQUFJLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURSLGVBRWdCLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQVMsRUFBRUYsT0FBTyxDQUFDUCxRQUE1QztBQUFBLDhDQUE0RE0sS0FBSyxDQUFDSSxlQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGaEIsZUFHZ0IscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBTyxFQUFDLE9BQWpDO0FBQXlDLGVBQVMsRUFBRUgsT0FBTyxDQUFDSixJQUE1RDtBQUFBLHVDQUFzRUcsS0FBSyxDQUFDSyxLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIaEIsZUFLZ0IscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBTyxFQUFDLE9BQWpDO0FBQXlDLGVBQVMsRUFBRUosT0FBTyxDQUFDSixJQUE1RDtBQUFBLHVDQUFzRUcsS0FBSyxDQUFDTSxLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMaEIsZUFPZ0IscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBTyxFQUFDLE9BQWpDO0FBQXlDLGVBQVMsRUFBRUwsT0FBTyxDQUFDSixJQUE1RDtBQUFBLHVDQUFzRUcsS0FBSyxDQUFDTyxJQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQaEIsZUFRZ0IscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBTyxFQUFDLE9BQWpDO0FBQXlDLGVBQVMsRUFBRU4sT0FBTyxDQUFDSixJQUE1RDtBQUFBLCtEQUEwRUcsS0FBSyxDQUFDUSxhQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSaEIsZUFTZ0IscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBTyxFQUFDLE9BQWpDO0FBQXlDLGVBQVMsRUFBRVAsT0FBTyxDQUFDSjtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7S0FmdUJFLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2luZm8vW2xlc3NvbmlkXS5iMzI4ODE0NjY4Mjk5Njc2OTc4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInXHJcbmltcG9ydCBJbWcgZnJvbSBcIi4uLy4uL25vcm1hbF9wYXJ0cy9JbWdcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcblxyXG5jb25zdCBwbG9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6XCI4MCVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiXHJcbiAgICB9LFxyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIG1hcmdpbjogXCIwcHhcIixcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1MHB4XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIlxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlc3NvbkRpdGFpbChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHBsb2ZpbGUoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezI0fSByb3VuZGVkPlxyXG4gICAgICAgICAgICAgICAgPEltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSBzcmM9e3Byb3BzLmltYWdldXJsfSBzaXplPVwiNzBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VybmFtZX0+6Kyb5bir5ZCN77yaIHtwcm9wcy5wcm9maWxldXNlcm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5paZ6YeR77yae3Byb3BzLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7loLTmiYDvvJp7cHJvcHMucGxhY2V9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuaXpeaZgu+8mntwcm9wcy50aW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuODrOODg+OCueODs+WGheWuue+8mntwcm9wcy5sZXNzb25jb21tZW50fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==