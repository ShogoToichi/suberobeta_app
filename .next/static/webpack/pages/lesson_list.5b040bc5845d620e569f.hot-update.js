webpackHotUpdate_N_E("pages/lesson_list",{

/***/ "./components/Lesson.js":
/*!******************************!*\
  !*** ./components/Lesson.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lesson; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");

var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\Lesson.js";
//値を渡してレッスンを表示する箱
//Linkタグのところはlessoninfo/[lessonid]にページ移動する処理









var lessonlist = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  rayout: {
    "float": 'center'
  },
  top: {
    width: '100%',
    margin: '8px'
  },
  lessonlist: {
    width: '600px',
    margin: '5px'
  },
  btn: {
    "float": 'right',
    color: 'black',
    backgroundColor: '#5B9'
  },
  cardheader: {
    cursor: "pointer"
  }
});
function Lesson(props) {
  var classes = lessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.lessonlist,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/mypage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\u8A73\u7D30\u3078"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 23
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
          "aria-label": "recipe",
          className: classes.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 27
        }, this),
        className: classes.cardheader,
        title: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "body2",
          children: ["\u65E5\u6642:", props.time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "body2",
          children: ["\u5834\u6240\uFF1A", props.place]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "body2",
          children: ["\u6599\u91D1\uFF1A", props.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "body2",
          children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, this);
}
_c = Lesson;

var _c;

$RefreshReg$(_c, "Lesson");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb24uanMiXSwibmFtZXMiOlsibGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJyYXlvdXQiLCJ0b3AiLCJ3aWR0aCIsIm1hcmdpbiIsImJ0biIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2FyZGhlYWRlciIsImN1cnNvciIsIkxlc3NvbiIsInByb3BzIiwiY2xhc3NlcyIsImF2YXRhciIsIm5hbWUiLCJ0aW1lIiwicGxhY2UiLCJwcmljZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNOLGFBQU87QUFERCxHQURvQjtBQUs1QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRTtBQUZMLEdBTHVCO0FBVzVCTCxZQUFVLEVBQUU7QUFDVkksU0FBSyxFQUFFLE9BREc7QUFFVkMsVUFBTSxFQUFFO0FBRkUsR0FYZ0I7QUFnQjVCQyxLQUFHLEVBQUM7QUFDRixhQUFPLE9BREw7QUFFRkMsU0FBSyxFQUFFLE9BRkw7QUFHRkMsbUJBQWUsRUFBRTtBQUhmLEdBaEJ3QjtBQXFCNUJDLFlBQVUsRUFBQztBQUNYQyxVQUFNLEVBQUc7QUFERTtBQXJCaUIsQ0FBRCxDQUE3QjtBQTBCZSxTQUFTQyxNQUFULENBQWlCQyxLQUFqQixFQUF1QjtBQUNsQyxNQUFNQyxPQUFPLEdBQUdiLFVBQVUsRUFBMUI7QUFDQSxzQkFDRjtBQUFLLGFBQVMsRUFBRWEsT0FBTyxDQUFDYixVQUF4QjtBQUFBLDRCQUtvQixxRUFBQyxnREFBRDtBQUFPLFVBQUksRUFBQyxTQUFaO0FBQUEsNkJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTHBCLGVBUVkscUVBQUMsOERBQUQ7QUFBQSw4QkFDUSxxRUFBQyw0REFBRDtBQUNJLGNBQU0sZUFDTixxRUFBQyxnRUFBRDtBQUFRLHdCQUFXLFFBQW5CO0FBQTRCLG1CQUFTLEVBQUVhLE9BQU8sQ0FBQ0M7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUtJLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ0osVUFMdkI7QUFNSSxhQUFLLEVBQUVHLEtBQUssQ0FBQ0c7QUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSLGVBU0kscUVBQUMscUVBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFPLEVBQUMsT0FBcEI7QUFBQSxzQ0FBZ0NILEtBQUssQ0FBQ0ksSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQUEsMkNBQWdDSixLQUFLLENBQUNLLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUFBLDJDQUFnQ0wsS0FBSyxDQUFDTSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFPLEVBQUMsT0FBcEI7QUFBQSxtRUFBb0NOLEtBQUssQ0FBQ08sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURFO0FBMkJDO0tBN0JtQlIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fbGlzdC41YjA0MGJjNTg0NWQ2MjBlNTY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/lgKTjgpLmuKHjgZfjgabjg6zjg4Pjgrnjg7PjgpLooajnpLrjgZnjgovnrrFcclxuLy9MaW5r44K/44Kw44Gu44Go44GT44KN44GvbGVzc29uaW5mby9bbGVzc29uaWRd44Gr44Oa44O844K456e75YuV44GZ44KL5Yem55CGXHJcblxyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5cclxuY29uc3QgbGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gIHJheW91dDoge1xyXG4gICAgZmxvYXQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIHRvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBsZXNzb25saXN0OiB7XHJcbiAgICB3aWR0aDogJzYwMHB4JyxcclxuICAgIG1hcmdpbjogJzVweCcsXHJcbiAgfSxcclxuXHJcbiAgYnRuOntcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNUI5JyBcclxuICB9LFxyXG4gIGNhcmRoZWFkZXI6e1xyXG4gIGN1cnNvciA6IFwicG9pbnRlclwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXNzb24gKHByb3BzKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBsZXNzb25saXN0KCk7XHJcbiAgICByZXR1cm4oXHJcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVzc29ubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBhcz17YC9sZXNzb25faW5mby8ke3Byb3BzLmxlc3NvbmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9sZXNzb25faW5mby9bbGVzc29uaWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPuips+e0sOOBuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPuips+e0sOOBuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cInJlY2lwZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZGhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+5pel5pmCOntwcm9wcy50aW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj7loLTmiYDvvJp7cHJvcHMucGxhY2V9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPuaWmemHke+8mntwcm9wcy5wcmljZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+44Os44OD44K544Oz5YaF5a6577yae3Byb3BzLnRleHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IFxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=