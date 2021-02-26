webpackHotUpdate_N_E("pages/mypage",{

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
      margin: '30px 30px 30px 30px'
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
        style: {
          font: font
        },
        primary: "".concat(props.name, "\u3000in ").concat(props.place)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbi5qcyJdLCJuYW1lcyI6WyJMZXNzb24iLCJwcm9wcyIsIm15bGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJsZXNzb25pdGVtIiwibWFyZ2luIiwiYWRkYnRuIiwidGV4dEFsaWduIiwibWVzc2FnZWJ0biIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2xhc3NlcyIsImZvbnQiLCJuYW1lIiwicGxhY2UiLCJsZXNzb25pZCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBRXBDLE1BQU1DLFlBQVksR0FBR0Msc0VBQVUsQ0FBQztBQUM5QkMsY0FBVSxFQUFDO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBRG1CO0FBSTlCQyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FKc0I7QUFPOUJDLGNBQVUsRUFBRTtBQUNSQyxxQkFBZSxFQUFFLE1BRFQ7QUFFUkMsV0FBSyxFQUFDO0FBRkU7QUFQa0IsR0FBRCxDQUEvQjtBQWFFLE1BQU1DLE9BQU8sR0FBSVQsWUFBWSxFQUE3QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsa0VBQUQ7QUFBVSxhQUFPLEVBQUUsSUFBbkI7QUFBeUIsZUFBUyxFQUFFUyxPQUFPLENBQUNQLFVBQTVDO0FBQUEsOEJBQ1kscUVBQUMsc0VBQUQ7QUFBZSxhQUFLLEVBQUU7QUFBQ1EsY0FBSSxFQUFKQTtBQUFELFNBQXRCO0FBQThCLGVBQU8sWUFBS1gsS0FBSyxDQUFDWSxJQUFYLHNCQUFzQlosS0FBSyxDQUFDYSxLQUE1QjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFosZUFFSSxxRUFBQyxnREFBRDtBQUFNLFVBQUUscUJBQWNiLEtBQUssQ0FBQ2MsUUFBcEIsQ0FBUjtBQUNFLFlBQUksRUFBQyxxQkFEUDtBQUFBLCtCQUVJLHFFQUFDLGdFQUFEO0FBQVEsY0FBSSxFQUFDLE9BQWI7QUFBcUIsbUJBQVMsRUFBRUosT0FBTyxDQUFDSCxVQUF4QztBQUFvRCxpQkFBTyxFQUFFUCxLQUFLLENBQUNlLE9BQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdDO0tBNUJtQmhCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlwYWdlLjQ2NzRmMTA4Mzc0ODg2YmI4YTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlc3NvbiAocHJvcHMpe1xyXG5cclxuICBjb25zdCBteWxlc3Nvbmxpc3QgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxlc3Nvbml0ZW06e1xyXG4gICAgICAgIG1hcmdpbjogJzMwcHggMzBweCAzMHB4IDMwcHgnLFxyXG4gICAgfSxcclxuICAgIGFkZGJ0bjoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZWJ0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREREXCIsXHJcbiAgICAgICAgY29sb3I6XCJibGFja1wiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyAgPSBteWxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpc3RJdGVtIGRpdmlkZXI9e3RydWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZXNzb25pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0ICBzdHlsZT17e2ZvbnR9fSBwcmltYXJ5PXtgJHtwcm9wcy5uYW1lfeOAgGluICR7cHJvcHMucGxhY2V9YH0vPlxyXG4gICAgICAgICAgICA8TGluayBhcz17YC9tZXNzYWdlLyR7cHJvcHMubGVzc29uaWR9YH1cclxuICAgICAgICAgICAgICBocmVmPVwiL21lc3NhZ2UvW2xlc3NvbmlkXVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZWJ0bn0gb25DbGljaz17cHJvcHMub25DbGlja30+5Y+W5byV44Oh44OD44K744O844K4PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=