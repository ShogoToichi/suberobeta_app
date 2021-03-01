webpackHotUpdate_N_E("pages/lesson_add",{

/***/ "./components/lessonadd/parts/InputForm.js":
/*!*************************************************!*\
  !*** ./components/lessonadd/parts/InputForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");

var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonadd\\parts\\InputForm.js";







var inputform = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  inputform: {
    marginTop: '50px',
    width: '80%',
    margin: "0 auto"
  },
  detailinfo: {
    marginTop: '20px',
    margin: "0 auto"
  },
  btnarea: {
    textAlign: "center"
  },
  addbtn: {
    marginTop: "10px",
    margin: "0 auto"
  }
});
function InputForm(props) {
  var classes = inputform();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.inputform,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.inputtitle,
        variant: "h8",
        children: "\u30EC\u30C3\u30B9\u30F3\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u30EC\u30C3\u30B9\u30F3\u540D",
        fullWidth: true,
        onChange: props.doChangeName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u65E5\u6642",
        placeholder: "\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642\uFF5E\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642",
        fullWidth: true,
        onChange: props.doChangeTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u5834\u6240",
        placeholder: "\u3007\u3007\u30B9\u30AD\u30FC\u5834",
        fullWidth: true,
        onChange: props.doChangePlace
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u6599\u91D1",
        placeholder: "\uFFE5\u3007\u3007\u3007\u3007\u5186",
        fullWidth: true,
        onChange: props.doChangePrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.detailinfo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: "outlined-multiline-static",
          label: "\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9",
          multiline: true,
          rows: 8,
          variant: "outlined",
          fullWidth: true,
          onChange: props.doChangeComment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.btnarea,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/mypage",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: classes.addbtn,
          variant: "outlined",
          size: "large",
          onClick: props.doSubmit,
          children: "\u8FFD \u52A0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}
_c = InputForm;

var _c;

$RefreshReg$(_c, "InputForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25hZGQvcGFydHMvSW5wdXRGb3JtLmpzIl0sIm5hbWVzIjpbImlucHV0Zm9ybSIsIm1ha2VTdHlsZXMiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsIm1hcmdpbiIsImRldGFpbGluZm8iLCJidG5hcmVhIiwidGV4dEFsaWduIiwiYWRkYnRuIiwiSW5wdXRGb3JtIiwicHJvcHMiLCJjbGFzc2VzIiwiaW5wdXR0aXRsZSIsImRvQ2hhbmdlTmFtZSIsImRvQ2hhbmdlVGltZSIsImRvQ2hhbmdlUGxhY2UiLCJkb0NoYW5nZVByaWNlIiwiZG9DaGFuZ2VDb21tZW50IiwiZG9TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkQsV0FBUyxFQUFFO0FBQ1BFLGFBQVMsRUFBRSxNQURKO0FBRVBDLFNBQUssRUFBRSxLQUZBO0FBR1BDLFVBQU0sRUFBQztBQUhBLEdBRGM7QUFPekJDLFlBQVUsRUFBRTtBQUNSSCxhQUFTLEVBQUUsTUFESDtBQUVSRSxVQUFNLEVBQUM7QUFGQyxHQVBhO0FBV3pCRSxTQUFPLEVBQUU7QUFDTEMsYUFBUyxFQUFFO0FBRE4sR0FYZ0I7QUFjekJDLFFBQU0sRUFBRTtBQUNKTixhQUFTLEVBQUMsTUFETjtBQUVKRSxVQUFNLEVBQUM7QUFGSDtBQWRpQixDQUFELENBQTVCO0FBb0JlLFNBQVNLLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQXlCO0FBQ3BDLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFJVyxPQUFPLENBQUNYLFNBQTFCO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSSxxRUFBQyxvRUFBRDtBQUNBLGlCQUFTLEVBQUVXLE9BQU8sQ0FBQ0MsVUFEbkI7QUFDK0IsZUFBTyxFQUFDLElBRHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLUSxxRUFBQyxtRUFBRDtBQUNJLFVBQUUsRUFBQyxtQkFEUDtBQUVJLGFBQUssRUFBQyxnQ0FGVjtBQUdJLGlCQUFTLE1BSGI7QUFJSSxnQkFBUSxFQUFFRixLQUFLLENBQUNHO0FBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMUixlQVdRLHFFQUFDLG1FQUFEO0FBQ0ksVUFBRSxFQUFDLG1CQURQO0FBRUksYUFBSyxFQUFDLGNBRlY7QUFHSSxtQkFBVyxFQUFDLHdHQUhoQjtBQUlJLGlCQUFTLE1BSmI7QUFLSSxnQkFBUSxFQUFFSCxLQUFLLENBQUNJO0FBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYUixlQWtCUSxxRUFBQyxtRUFBRDtBQUNJLFVBQUUsRUFBQyxtQkFEUDtBQUVJLGFBQUssRUFBQyxjQUZWO0FBR0ksbUJBQVcsRUFBQyxzQ0FIaEI7QUFJSSxpQkFBUyxNQUpiO0FBS0ksZ0JBQVEsRUFBRUosS0FBSyxDQUFDSztBQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJSLGVBeUJRLHFFQUFDLG1FQUFEO0FBQ0ksVUFBRSxFQUFDLG1CQURQO0FBRUksYUFBSyxFQUFDLGNBRlY7QUFHSSxtQkFBVyxFQUFDLHNDQUhoQjtBQUlJLGlCQUFTLE1BSmI7QUFLSSxnQkFBUSxFQUFFTCxLQUFLLENBQUNNO0FBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QlIsZUFnQ0k7QUFBSyxpQkFBUyxFQUFFTCxPQUFPLENBQUNOLFVBQXhCO0FBQUEsK0JBQ0kscUVBQUMsbUVBQUQ7QUFDSSxZQUFFLEVBQUMsMkJBRFA7QUFFSSxlQUFLLEVBQUMsc0NBRlY7QUFHSSxtQkFBUyxNQUhiO0FBSUksY0FBSSxFQUFFLENBSlY7QUFLSSxpQkFBTyxFQUFDLFVBTFo7QUFNSSxtQkFBUyxNQU5iO0FBT0ksa0JBQVEsRUFBRUssS0FBSyxDQUFDTztBQVBwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQTZDSTtBQUFLLGVBQVMsRUFBRU4sT0FBTyxDQUFDTCxPQUF4QjtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFDQSxxRUFBQyxnRUFBRDtBQUFRLG1CQUFTLEVBQUVLLE9BQU8sQ0FBQ0gsTUFBM0I7QUFBbUMsaUJBQU8sRUFBQyxVQUEzQztBQUFzRCxjQUFJLEVBQUMsT0FBM0Q7QUFBbUUsaUJBQU8sRUFBRUUsS0FBSyxDQUFDUSxRQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcURIO0tBdkR1QlQsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fYWRkLjUwZDAxOThlZDgzMDFhYzRhMjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcblxyXG5jb25zdCBpbnB1dGZvcm0gPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0Zm9ybToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzUwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuXHJcbiAgICBkZXRhaWxpbmZvOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbiAgICBidG5hcmVhOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGFkZGJ0bjoge1xyXG4gICAgICAgIG1hcmdpblRvcDpcIjEwcHhcIixcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGb3JtKHByb3BzKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBpbnB1dGZvcm0oKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0Zm9ybX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj5cclxuICAgICAgICAgICAgICAgICAgICDjg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmmYJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZgu+9nuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLloLTmiYBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+OAh+OCueOCreODvOWgtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VQbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5paZ6YeRXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLvv6XjgIfjgIfjgIfjgIflhoZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmRvQ2hhbmdlUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbGluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6zjg4Pjgrnjg7PlhoXlrrlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5kb0NoYW5nZUNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmFyZWF9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZGJ0bn0gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17cHJvcHMuZG9TdWJtaXR9Pui/vSDliqA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9