webpackHotUpdate_N_E("pages/index",{

/***/ "./componentsUi/MyLessonListUi.js":
/*!****************************************!*\
  !*** ./componentsUi/MyLessonListUi.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return myLessonList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");

var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\componentsUi\\MyLessonListUi.js";











var mylessonlist = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  list: {
    margin: '20px'
  },
  addbtn: {
    textAlign: 'center'
  },
  btn: {
    backgroundColor: "#5FA",
    color: "white"
  },
  messagebtn: {
    backgroundColor: "#DDD",
    color: "black"
  },
  lessonitem: {
    margin: "20px 0px"
  }
});
function myLessonList(props) {
  var classes = mylessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.list,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "white",
        bgcolor: "#5FA",
        fontWeight: "bold",
        p: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "h8",
          children: "My\u30EC\u30C3\u30B9\u30F3\u5C65\u6B74"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        divider: true,
        className: classes.lessonitem,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
          primary: "".concat(props.name, " at ").concat(props.place)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          as: "/message/".concat(props.lessonid),
          href: "/message/[lessonid]",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            size: "large",
            className: classes.messagebtn,
            onClick: props.onClick,
            children: "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          divider: true,
          className: classes.lessonitem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: "\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            size: "large",
            className: classes.messagebtn,
            onClick: props.onClick,
            children: "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: "\u30FB\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this), "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: "\u30FB\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, this), "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: "\u30FB\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, this), "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.addbtn,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/lesson_add",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "contained",
          size: "large",
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: "add_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 69
          }, this),
          className: classes.btn,
          children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50c1VpL015TGVzc29uTGlzdFVpLmpzIl0sIm5hbWVzIjpbIm15bGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJsaXN0IiwibWFyZ2luIiwiYWRkYnRuIiwidGV4dEFsaWduIiwiYnRuIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtZXNzYWdlYnRuIiwibGVzc29uaXRlbSIsIm15TGVzc29uTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsIm5hbWUiLCJwbGFjZSIsImxlc3NvbmlkIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHQyxzRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFFO0FBRFAsR0FEdUI7QUFJNUJDLFFBQU0sRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUCxHQUpvQjtBQU81QkMsS0FBRyxFQUFFO0FBQ0RDLG1CQUFlLEVBQUUsTUFEaEI7QUFFREMsU0FBSyxFQUFDO0FBRkwsR0FQdUI7QUFXNUJDLFlBQVUsRUFBRTtBQUNSRixtQkFBZSxFQUFFLE1BRFQ7QUFFUkMsU0FBSyxFQUFDO0FBRkUsR0FYZ0I7QUFlNUJFLFlBQVUsRUFBQztBQUNQUCxVQUFNLEVBQUM7QUFEQTtBQWZpQixDQUFELENBQS9CO0FBcUJlLFNBQVNRLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3hDLE1BQU1DLE9BQU8sR0FBSWIsWUFBWSxFQUE3QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFYSxPQUFPLENBQUNYLElBQXhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVXLE9BQU8sQ0FBQ1gsSUFBeEI7QUFBQSw4QkFDQSxxRUFBQyw2REFBRDtBQUFLLGFBQUssRUFBQyxPQUFYO0FBQW1CLGVBQU8sRUFBQyxN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QUE2Q0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDU0ZjRmY2JiZmNkYzM5ZTRiOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBib3JkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcclxuXHJcblxyXG5jb25zdCBteWxlc3Nvbmxpc3QgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpc3Q6e1xyXG4gICAgICAgIG1hcmdpbjogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIGFkZGJ0bjoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1RkFcIixcclxuICAgICAgICBjb2xvcjpcIndoaXRlXCIsXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZWJ0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREREXCIsXHJcbiAgICAgICAgY29sb3I6XCJibGFja1wiLFxyXG4gICAgfSxcclxuICAgIGxlc3Nvbml0ZW06e1xyXG4gICAgICAgIG1hcmdpbjpcIjIwcHggMHB4XCIsXHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG15TGVzc29uTGlzdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyAgPSBteWxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBiZ2NvbG9yPVwiIzVGQVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgcD17MX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPk1544Os44OD44K544Oz5bGl5q20PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gZGl2aWRlcj17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlc3Nvbml0ZW19PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCAgcHJpbWFyeT17YCR7cHJvcHMubmFtZX0gYXQgJHtwcm9wcy5wbGFjZX1gfS8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBhcz17YC9tZXNzYWdlLyR7cHJvcHMubGVzc29uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9tZXNzYWdlL1tsZXNzb25pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlYnRufSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT7lj5blvJXjg6Hjg4Pjgrvjg7zjgrg8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuIFxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGRpdmlkZXI9e3RydWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZXNzb25pdGVtfT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgIHByaW1hcnk9XCLjgIzjg6zjg4Pjgrnjg7PlkI3jgI3jgIDjgIznlJ/lvpLlkI3jgI3jgIDjgIzml6XmmYLjgI3jgIBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZWJ0bn0gb25DbGljaz17cHJvcHMub25DbGlja30+5Y+W5byV44Oh44OD44K744O844K4PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCLjg7vjgIzjg6zjg4Pjgrnjg7PlkI3jgI3jgIDjgIznlJ/lvpLlkI3jgI3jgIDjgIzml6XmmYLjgI3jgIBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOWPluW8leODoeODg+OCu+ODvOOCuFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwi44O744CM44Os44OD44K544Oz5ZCN44CN44CA44CM55Sf5b6S5ZCN44CN44CA44CM5pel5pmC44CN44CAXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICDlj5blvJXjg6Hjg4Pjgrvjg7zjgrhcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIuODu+OAjOODrOODg+OCueODs+WQjeOAjeOAgOOAjOeUn+W+kuWQjeOAjeOAgOOAjOaXpeaZguOAjeOAgFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAg5Y+W5byV44Oh44OD44K744O844K4XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRidG59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sZXNzb25fYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBzdGFydEljb249ezxJY29uPmFkZF9jaXJjbGU8L0ljb24+fSBjbGFzc05hbWU9e2NsYXNzZXMuYnRufT7jg6zjg4Pjgrnjg7Pov73liqA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=