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
    width: '500px',
    margin: "0 auto"
  },
  inputtitle: {
    margin: "0 auto"
  },
  textarea: {
    marginTop: '20px',
    margin: "0 auto"
  },
  detailinfo: {
    marginTop: '20px',
    margin: "0 auto"
  }
});
function InputForm(props) {
  var classes = inputform();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.inputform,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.inputtitle,
        variant: "h8",
        children: "\u30EC\u30C3\u30B9\u30F3\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u30EC\u30C3\u30B9\u30F3\u540D",
        placeholder: "",
        multiline: true,
        fullWidth: true,
        onChange: props.doChangeName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u65E5\u6642",
        placeholder: "\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642\uFF5E\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642",
        multiline: true,
        fullWidth: true,
        onChange: props.doChangeTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u5834\u6240",
        placeholder: "\u3007\u3007\u30B9\u30AD\u30FC\u5834",
        multiline: true,
        fullWidth: true,
        onChange: props.doChangePlace
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u6599\u91D1",
        placeholder: "\uFFE5\u3007\u3007\u3007\u3007\u5186",
        multiline: true,
        fullWidth: true,
        onChange: props.doChangePrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.detailinfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: classes.textarea,
          noValidate: true,
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: "outlined-multiline-static",
          label: "\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9",
          placeholder: "",
          multiline: true,
          rows: 8,
          variant: "outlined",
          fullWidth: true,
          onChange: props.doChangeComment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/mypage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.addbtn,
        style: {
          marginTop: "10px"
        },
        variant: "outlined",
        size: "large",
        color: "ingerit",
        onClick: props.doSubmit,
        children: "\u8FFD \u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25hZGQvcGFydHMvSW5wdXRGb3JtLmpzIl0sIm5hbWVzIjpbImlucHV0Zm9ybSIsIm1ha2VTdHlsZXMiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsIm1hcmdpbiIsImlucHV0dGl0bGUiLCJ0ZXh0YXJlYSIsImRldGFpbGluZm8iLCJJbnB1dEZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJkb0NoYW5nZU5hbWUiLCJkb0NoYW5nZVRpbWUiLCJkb0NoYW5nZVBsYWNlIiwiZG9DaGFuZ2VQcmljZSIsImRvQ2hhbmdlQ29tbWVudCIsImFkZGJ0biIsImRvU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDekJELFdBQVMsRUFBRTtBQUNQRSxhQUFTLEVBQUUsTUFESjtBQUVQQyxTQUFLLEVBQUUsT0FGQTtBQUdQQyxVQUFNLEVBQUM7QUFIQSxHQURjO0FBTXpCQyxZQUFVLEVBQUU7QUFDUkQsVUFBTSxFQUFDO0FBREMsR0FOYTtBQVN6QkUsVUFBUSxFQUFFO0FBQ05KLGFBQVMsRUFBRSxNQURMO0FBRU5FLFVBQU0sRUFBQztBQUZELEdBVGU7QUFhekJHLFlBQVUsRUFBRTtBQUNSTCxhQUFTLEVBQUUsTUFESDtBQUVSRSxVQUFNLEVBQUM7QUFGQztBQWJhLENBQUQsQ0FBNUI7QUFvQmUsU0FBU0ksU0FBVCxDQUFtQkMsS0FBbkIsRUFBeUI7QUFDcEMsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBSVUsT0FBTyxDQUFDVixTQUExQjtBQUFBLDhCQUNJLHFFQUFDLG9FQUFEO0FBQVksaUJBQVMsRUFBRVUsT0FBTyxDQUFDTCxVQUEvQjtBQUEyQyxlQUFPLEVBQUMsSUFBbkQ7QUFBQTtBQUFB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ZUFBTyxFQUFFTyxLQUFLLENBQUNRLFFBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStESDtLQWpFdUJULFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2FkZC44N2U2ODhiNDRmMWQzZWM3ZTdlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5cclxuY29uc3QgaW5wdXRmb3JtID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpbnB1dGZvcm06IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcclxuICAgICAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuICAgIGlucHV0dGl0bGU6IHtcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuICAgIHRleHRhcmVhOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbiAgICBkZXRhaWxpbmZvOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn1cclxuICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGb3JtKHByb3BzKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBpbnB1dGZvcm0oKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0Zm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR0aXRsZX0gdmFyaWFudD1cImg4XCI+44Os44OD44K544Oz44Gr6Zai44GZ44KL5oOF5aCx44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6zjg4Pjgrnjg7PlkI1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pmCXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZgu+9nuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZglwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmRvQ2hhbmdlVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuWgtOaJgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjgIfjgIfjgrnjgq3jg7zloLRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5kb0NoYW5nZVBsYWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5paZ6YeRXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu+/peOAh+OAh+OAh+OAh+WGhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmRvQ2hhbmdlUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbGluZm99PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbXVsdGlsaW5lLXN0YXRpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6zjg4Pjgrnjg7PlhoXlrrlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmRvQ2hhbmdlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRidG59IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwifX0gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCJjb2xvcj1cImluZ2VyaXRcIiBvbkNsaWNrPXtwcm9wcy5kb1N1Ym1pdH0+6L+9IOWKoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9