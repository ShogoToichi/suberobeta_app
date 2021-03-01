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
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
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
        lineNumber: 43,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
        lineNumber: 53,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
        lineNumber: 63,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 73,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.detailinfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: classes.textarea,
          noValidate: true,
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
          lineNumber: 83,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
          lineNumber: 97,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25hZGQvcGFydHMvSW5wdXRGb3JtLmpzIl0sIm5hbWVzIjpbImlucHV0Zm9ybSIsIm1ha2VTdHlsZXMiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsIm1hcmdpbiIsImlucHV0dGl0bGUiLCJ0ZXh0YXJlYSIsImRldGFpbGluZm8iLCJidG5hcmVhIiwidGV4dEFsaWduIiwiYWRkYnRuIiwiSW5wdXRGb3JtIiwicHJvcHMiLCJjbGFzc2VzIiwiZG9DaGFuZ2VOYW1lIiwiZG9DaGFuZ2VUaW1lIiwiZG9DaGFuZ2VQbGFjZSIsImRvQ2hhbmdlUHJpY2UiLCJkb0NoYW5nZUNvbW1lbnQiLCJkb1N1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCRCxXQUFTLEVBQUU7QUFDUEUsYUFBUyxFQUFFLE1BREo7QUFFUEMsU0FBSyxFQUFFLEtBRkE7QUFHUEMsVUFBTSxFQUFDO0FBSEEsR0FEYztBQU16QkMsWUFBVSxFQUFFO0FBQ1JELFVBQU0sRUFBQztBQURDLEdBTmE7QUFTekJFLFVBQVEsRUFBRTtBQUNOSixhQUFTLEVBQUUsTUFETDtBQUVORSxVQUFNLEVBQUM7QUFGRCxHQVRlO0FBYXpCRyxZQUFVLEVBQUU7QUFDUkwsYUFBUyxFQUFFLE1BREg7QUFFUkUsVUFBTSxFQUFDO0FBRkMsR0FiYTtBQWlCekJJLFNBQU8sRUFBRTtBQUNMQyxhQUFTLEVBQUU7QUFETixHQWpCZ0I7QUFvQnpCQyxRQUFNLEVBQUU7QUFDSlIsYUFBUyxFQUFDLE1BRE47QUFFSkUsVUFBTSxFQUFDO0FBRkg7QUFwQmlCLENBQUQsQ0FBNUI7QUEwQmUsU0FBU08sU0FBVCxDQUFtQkMsS0FBbkIsRUFBeUI7QUFDcEMsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0Esc0JB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QUFtQyxpQkFBTyxFQUFDLFVBQTNDO0FBQXNELGNBQUksRUFBQyxPQUEzRDtBQUFtRSxpQkFBTyxFQUFFRSxLQUFLLENBQUNPLFFBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpRUg7S0FuRXVCUixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9hZGQuYjI2ZjRmNjQ3MjY4ZDA2ZjEwYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuXHJcbmNvbnN0IGlucHV0Zm9ybSA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRmb3JtOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNTBweCcsXHJcbiAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG4gICAgaW5wdXR0aXRsZToge1xyXG4gICAgICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG4gICAgdGV4dGFyZWE6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuICAgIGRldGFpbGluZm86IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuICAgIGJ0bmFyZWE6IHtcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYWRkYnRuOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOlwiMTBweFwiLFxyXG4gICAgICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZvcm0ocHJvcHMpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IGlucHV0Zm9ybSgpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj7jg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5kb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmmYJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH5pyI44CH5pel5Y2I5YmN44CH5pmC772e44CH5pyI44CH5pel5Y2I5YmN44CH5pmCXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5aC05omAXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+OAh+OCueOCreODvOWgtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmRvQ2hhbmdlUGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmlpnph5FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi77+l44CH44CH44CH44CH5YaGXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WGheWuuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmFyZWF9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZGJ0bn0gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17cHJvcHMuZG9TdWJtaXR9Pui/vSDliqA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9