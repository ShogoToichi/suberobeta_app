webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MyLesson.js":
/*!********************************!*\
  !*** ./components/MyLesson.js ***!
  \********************************/
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
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MyLesson.js";






function Lesson(props) {
  var mylessonlist = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
    lessonitem: {
      margin: '30px 20px'
    },
    addbtn: {
      textAlign: 'center'
    },
    messagebtn: {
      backgroundColor: "#DDD",
      color: "black"
    }
  });
  var classes = mylessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      divider: true,
      className: classes.lessonitem,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
        primary: "".concat(props.name, " in ").concat(props.place)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: "/message/".concat(props.lessonid),
        href: "/message/[lessonid]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          size: "large",
          className: classes.messagebtn,
          onClick: props.onClick,
          children: "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbi5qcyJdLCJuYW1lcyI6WyJMZXNzb24iLCJwcm9wcyIsIm15bGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJsZXNzb25pdGVtIiwibWFyZ2luIiwiYWRkYnRuIiwidGV4dEFsaWduIiwibWVzc2FnZWJ0biIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsIm5hbWUiLCJwbGFjZSIsImxlc3NvbmlkIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFpQkMsS0FBakIsRUFBdUI7QUFFcEMsTUFBTUMsWUFBWSxHQUFHQyxzRUFBVSxDQUFDO0FBQzlCQyxjQUFVLEVBQUM7QUFDUEMsWUFBTSxFQUFFO0FBREQsS0FEbUI7QUFJOUJDLFVBQU0sRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUpzQjtBQU85QkMsY0FBVSxFQUFFO0FBQ1JDLHFCQUFlLEVBQUUsTUFEVDtBQUVSQyxXQUFLLEVBQUM7QUFGRTtBQVBrQixHQUFELENBQS9CO0FBYUUsTUFBTUMsT0FBTyxHQUFJVCxZQUFZLEVBQTdCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxrRUFBRDtBQUFVLGFBQU8sRUFBRSxJQUFuQjtBQUF5QixlQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsVUFBNUM7QUFBQSw4QkFDWSxxRUFBQyxzRUFBRDtBQUFnQixlQUFPLFlBQUtILEtBQUssQ0FBQ1csSUFBWCxpQkFBc0JYLEtBQUssQ0FBQ1ksS0FBNUI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURaLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTSxVQUFFLHFCQUFjWixLQUFLLENBQUNhLFFBQXBCLENBQVI7QUFDRSxZQUFJLEVBQUMscUJBRFA7QUFBQSwrQkFFSSxxRUFBQyxnRUFBRDtBQUFRLGNBQUksRUFBQyxPQUFiO0FBQXFCLG1CQUFTLEVBQUVILE9BQU8sQ0FBQ0gsVUFBeEM7QUFBb0QsaUJBQU8sRUFBRVAsS0FBSyxDQUFDYyxPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXQztLQTVCbUJmLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTEyODM4YmU1YzY1ODkxMzllYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVzc29uIChwcm9wcyl7XHJcblxyXG4gIGNvbnN0IG15bGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGVzc29uaXRlbTp7XHJcbiAgICAgICAgbWFyZ2luOiAnMzBweCAyMHB4JyxcclxuICAgIH0sXHJcbiAgICBhZGRidG46IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VidG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RERFwiLFxyXG4gICAgICAgIGNvbG9yOlwiYmxhY2tcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgID0gbXlsZXNzb25saXN0KCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaXN0SXRlbSBkaXZpZGVyPXt0cnVlfSBjbGFzc05hbWU9e2NsYXNzZXMubGVzc29uaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCAgIHByaW1hcnk9e2Ake3Byb3BzLm5hbWV9IGluICR7cHJvcHMucGxhY2V9YH0vPlxyXG4gICAgICAgICAgICA8TGluayBhcz17YC9tZXNzYWdlLyR7cHJvcHMubGVzc29uaWR9YH1cclxuICAgICAgICAgICAgICBocmVmPVwiL21lc3NhZ2UvW2xlc3NvbmlkXVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZWJ0bn0gb25DbGljaz17cHJvcHMub25DbGlja30+5Y+W5byV44Oh44OD44K744O844K4PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=