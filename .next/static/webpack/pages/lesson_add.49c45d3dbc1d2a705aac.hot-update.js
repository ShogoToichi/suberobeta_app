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
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/colors */ "./static/colors.js");


var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonadd\\parts\\InputForm.js",
    _s = $RefreshSig$();









var inputform = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_s(function (theme) {
  _s();

  return {
    inputform: {
      marginTop: '50px',
      width: '80%',
      margin: "0 auto"
    },
    contents: {
      marginTop: "20px"
    },
    detailinfo: {
      marginTop: '20px',
      margin: "0 auto"
    },
    btnarea: {
      textAlign: "center"
    },
    addbtn: {
      backgroundColor: useContext(_static_colors__WEBPACK_IMPORTED_MODULE_8__["Color"]).colors.bgGreen,
      marginTop: "10px",
      margin: "0 auto"
    }
  };
}, "gDsCjeeItUuvgOWf1v4qoK9RF6k="));
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
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u30EC\u30C3\u30B9\u30F3\u540D",
        fullWidth: true,
        onChange: props.doChangeName,
        className: classes.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u65E5\u6642",
        placeholder: "\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642\uFF5E\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642",
        fullWidth: true,
        onChange: props.doChangeTime,
        className: classes.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u5834\u6240",
        placeholder: "\u3007\u3007\u30B9\u30AD\u30FC\u5834",
        fullWidth: true,
        onChange: props.doChangePlace,
        className: classes.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "standard-textarea",
        label: "\u6599\u91D1",
        placeholder: "\uFFE5\u3007\u3007\u3007\u3007\u5186",
        fullWidth: true,
        onChange: props.doChangePrice,
        className: classes.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
          onChange: props.doChangeComment,
          className: classes.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
          lineNumber: 88,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25hZGQvcGFydHMvSW5wdXRGb3JtLmpzIl0sIm5hbWVzIjpbImlucHV0Zm9ybSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsIndpZHRoIiwibWFyZ2luIiwiY29udGVudHMiLCJkZXRhaWxpbmZvIiwiYnRuYXJlYSIsInRleHRBbGlnbiIsImFkZGJ0biIsImJhY2tncm91bmRDb2xvciIsInVzZUNvbnRleHQiLCJDb2xvciIsImNvbG9ycyIsImJnR3JlZW4iLCJJbnB1dEZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJpbnB1dHRpdGxlIiwiZG9DaGFuZ2VOYW1lIiwiZG9DaGFuZ2VUaW1lIiwiZG9DaGFuZ2VQbGFjZSIsImRvQ2hhbmdlUHJpY2UiLCJkb0NoYW5nZUNvbW1lbnQiLCJkb1N1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxJQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3JDRixhQUFTLEVBQUU7QUFDUEcsZUFBUyxFQUFFLE1BREo7QUFFUEMsV0FBSyxFQUFFLEtBRkE7QUFHUEMsWUFBTSxFQUFDO0FBSEEsS0FEMEI7QUFNckNDLFlBQVEsRUFBRTtBQUNOSCxlQUFTLEVBQUU7QUFETCxLQU4yQjtBQVNyQ0ksY0FBVSxFQUFFO0FBQ1JKLGVBQVMsRUFBRSxNQURIO0FBRVJFLFlBQU0sRUFBQztBQUZDLEtBVHlCO0FBYXJDRyxXQUFPLEVBQUU7QUFDTEMsZUFBUyxFQUFFO0FBRE4sS0FiNEI7QUFnQnJDQyxVQUFNLEVBQUU7QUFDSkMscUJBQWUsRUFBRUMsVUFBVSxDQUFDQyxvREFBRCxDQUFWLENBQWtCQyxNQUFsQixDQUF5QkMsT0FEdEM7QUFFSlosZUFBUyxFQUFDLE1BRk47QUFHSkUsWUFBTSxFQUFDO0FBSEg7QUFoQjZCLEdBQVo7QUFBQSxDQUFELGtDQUE1QjtBQXVCZSxTQUFTVyxTQUFULENBQW1CQyxLQUFuQixFQUF5QjtBQUNwQyxNQUFNQyxPQUFPLEdBQUdsQixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUlrQixPQUFPLENBQUNsQixTQUExQjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0kscUVBQUMsb0VBQUQ7QUFDQSxpQkFBUyxFQUFFa0IsT0FBTyxDQUFDQyxVQURuQjtBQUMrQixlQUFPLEVBQUMsSUFEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtRLHFFQUFDLG1FQUFEO0FBQ0ksVUFBRSxFQUFDLG1CQURQO0FBRUksYUFBSyxFQUFDLGdDQUZWO0FBR0ksaUJBQVMsTUFIYjtBQUlJLGdCQUFRLEVBQUVGLEtBQUssQ0FBQ0csWUFKcEI7QUFLSSxpQkFBUyxFQUFFRixPQUFPLENBQUNaO0FBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMUixlQVlRLHFFQUFDLG1FQUFEO0FBQ0ksVUFBRSxFQUFDLG1CQURQO0FBRUksYUFBSyxFQUFDLGNBRlY7QUFHSSxtQkFBVyxFQUFDLHdHQUhoQjtBQUlJLGlCQUFTLE1BSmI7QUFLSSxnQkFBUSxFQUFFVyxLQUFLLENBQUNJLFlBTHBCO0FBTUksaUJBQVMsRUFBRUgsT0FBTyxDQUFDWjtBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWlIsZUFvQlEscUVBQUMsbUVBQUQ7QUFDSSxVQUFFLEVBQUMsbUJBRFA7QUFFSSxhQUFLLEVBQUMsY0FGVjtBQUdJLG1CQUFXLEVBQUMsc0NBSGhCO0FBSUksaUJBQVMsTUFKYjtBQUtJLGdCQUFRLEVBQUVXLEtBQUssQ0FBQ0ssYUFMcEI7QUFNSSxpQkFBUyxFQUFFSixPQUFPLENBQUNaO0FBTnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQlIsZUE0QlEscUVBQUMsbUVBQUQ7QUFDSSxVQUFFLEVBQUMsbUJBRFA7QUFFSSxhQUFLLEVBQUMsY0FGVjtBQUdJLG1CQUFXLEVBQUMsc0NBSGhCO0FBSUksaUJBQVMsTUFKYjtBQUtJLGdCQUFRLEVBQUVXLEtBQUssQ0FBQ00sYUFMcEI7QUFNSSxpQkFBUyxFQUFFTCxPQUFPLENBQUNaO0FBTnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QlIsZUFvQ0k7QUFBSyxpQkFBUyxFQUFFWSxPQUFPLENBQUNYLFVBQXhCO0FBQUEsK0JBQ0kscUVBQUMsbUVBQUQ7QUFDSSxZQUFFLEVBQUMsMkJBRFA7QUFFSSxlQUFLLEVBQUMsc0NBRlY7QUFHSSxtQkFBUyxNQUhiO0FBSUksY0FBSSxFQUFFLENBSlY7QUFLSSxpQkFBTyxFQUFDLFVBTFo7QUFNSSxtQkFBUyxNQU5iO0FBT0ksa0JBQVEsRUFBRVUsS0FBSyxDQUFDTyxlQVBwQjtBQVFJLG1CQUFTLEVBQUVOLE9BQU8sQ0FBQ1o7QUFSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFrREk7QUFBSyxlQUFTLEVBQUVZLE9BQU8sQ0FBQ1YsT0FBeEI7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUEsK0JBQ0EscUVBQUMsZ0VBQUQ7QUFBUSxtQkFBUyxFQUFFVSxPQUFPLENBQUNSLE1BQTNCO0FBQW1DLGlCQUFPLEVBQUMsVUFBM0M7QUFBc0QsY0FBSSxFQUFDLE9BQTNEO0FBQW1FLGlCQUFPLEVBQUVPLEtBQUssQ0FBQ1EsUUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBESDtLQTVEdUJULFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2FkZC40OWM0NWQzZGJjMWQyYTcwNWFhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGljL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgaW5wdXRmb3JtID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBpbnB1dGZvcm06IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcclxuICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbiAgICBjb250ZW50czoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsaW5mbzoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG4gICAgYnRuYXJlYToge1xyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBhZGRidG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHVzZUNvbnRleHQoQ29sb3IpLmNvbG9ycy5iZ0dyZWVuLFxyXG4gICAgICAgIG1hcmdpblRvcDpcIjEwcHhcIixcclxuICAgICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZvcm0ocHJvcHMpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IGlucHV0Zm9ybSgpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0dGl0bGV9IHZhcmlhbnQ9XCJoOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOODrOODg+OCueODs+OBq+mWouOBmeOCi+aDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5ZCNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5kb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pmCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjgIfmnIjjgIfml6XljYjliY3jgIfmmYLvvZ7jgIfmnIjjgIfml6XljYjliY3jgIfmmYJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmRvQ2hhbmdlVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLloLTmiYBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+OAh+OCueOCreODvOWgtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VQbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmlpnph5FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu+/peOAh+OAh+OAh+OAh+WGhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxpbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbXVsdGlsaW5lLXN0YXRpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5YaF5a65XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuZG9DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmFyZWF9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZGJ0bn0gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17cHJvcHMuZG9TdWJtaXR9Pui/vSDliqA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9