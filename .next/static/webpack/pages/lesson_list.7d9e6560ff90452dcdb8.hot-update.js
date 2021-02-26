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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: "/lesson_info/".concat(props.lessonid),
        href: "/lesson_info/[lessonid]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            "aria-label": "recipe",
            className: classes.avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 27
          }, this),
          className: classes.cardheader,
          title: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 23
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u65E5\u6642:", props.time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u5834\u6240\uFF1A", props.place]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u6599\u91D1\uFF1A", props.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }, this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb24uanMiXSwibmFtZXMiOlsibGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJyYXlvdXQiLCJ0b3AiLCJ3aWR0aCIsIm1hcmdpbiIsImJ0biIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2FyZGhlYWRlciIsImN1cnNvciIsIkxlc3NvbiIsInByb3BzIiwiY2xhc3NlcyIsImxlc3NvbmlkIiwiYXZhdGFyIiwibmFtZSIsIm1hcmdpbkJvdHRvbSIsInRpbWUiLCJwbGFjZSIsInByaWNlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ04sYUFBTztBQURELEdBRG9CO0FBSzVCQyxLQUFHLEVBQUU7QUFDSEMsU0FBSyxFQUFFLE1BREo7QUFFSEMsVUFBTSxFQUFFO0FBRkwsR0FMdUI7QUFXNUJMLFlBQVUsRUFBRTtBQUNWSSxTQUFLLEVBQUUsT0FERztBQUVWQyxVQUFNLEVBQUU7QUFGRSxHQVhnQjtBQWdCNUJDLEtBQUcsRUFBQztBQUNGLGFBQU8sT0FETDtBQUVGQyxTQUFLLEVBQUUsT0FGTDtBQUdGQyxtQkFBZSxFQUFFO0FBSGYsR0FoQndCO0FBcUI1QkMsWUFBVSxFQUFDO0FBQ1hDLFVBQU0sRUFBRztBQURFO0FBckJpQixDQUFELENBQTdCO0FBMEJlLFNBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQ2xDLE1BQU1DLE9BQU8sR0FBR2IsVUFBVSxFQUExQjtBQUNBLHNCQUNGO0FBQUssYUFBUyxFQUFFYSxPQUFPLENBQUNiLFVBQXhCO0FBQUEsMkJBQ1kscUVBQUMsOERBQUQ7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFNLFVBQUUseUJBQWtCWSxLQUFLLENBQUNFLFFBQXhCLENBQVI7QUFDRSxZQUFJLEVBQUMseUJBRFA7QUFBQSwrQkFFSSxxRUFBQyw0REFBRDtBQUNJLGdCQUFNLGVBQ04scUVBQUMsZ0VBQUQ7QUFBUSwwQkFBVyxRQUFuQjtBQUE0QixxQkFBUyxFQUFFRCxPQUFPLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFLSSxtQkFBUyxFQUFFRixPQUFPLENBQUNKLFVBTHZCO0FBTUksZUFBSyxFQUFFRyxLQUFLLENBQUNJO0FBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFZSSxxRUFBQyxxRUFBRDtBQUFBLGdDQUNFLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNDLHdCQUFZLEVBQUM7QUFBZCxXQUFuQjtBQUF5QyxpQkFBTyxFQUFDLE9BQWpEO0FBQUEsc0NBQTZETCxLQUFLLENBQUNNLElBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNELHdCQUFZLEVBQUM7QUFBZCxXQUFuQjtBQUF5QyxpQkFBTyxFQUFDLE9BQWpEO0FBQUEsMkNBQTZETCxLQUFLLENBQUNPLEtBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNGLHdCQUFZLEVBQUM7QUFBZCxXQUFuQjtBQUF5QyxpQkFBTyxFQUFDLE9BQWpEO0FBQUEsMkNBQTZETCxLQUFLLENBQUNRLEtBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNILHdCQUFZLEVBQUM7QUFBZCxXQUFuQjtBQUF5QyxpQkFBTyxFQUFDLE9BQWpEO0FBQUEsbUVBQWlFTCxLQUFLLENBQUNTLElBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUF1QkM7S0F6Qm1CVixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9saXN0LjdkOWU2NTYwZmY5MDQ1MmRjZGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WApOOCkua4oeOBl+OBpuODrOODg+OCueODs+OCkuihqOekuuOBmeOCi+eusVxyXG4vL0xpbmvjgr/jgrDjga7jgajjgZPjgo3jga9sZXNzb25pbmZvL1tsZXNzb25pZF3jgavjg5rjg7zjgrjnp7vli5XjgZnjgovlh6bnkIZcclxuXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcblxyXG5jb25zdCBsZXNzb25saXN0ID0gbWFrZVN0eWxlcyh7XHJcbiAgcmF5b3V0OiB7XHJcbiAgICBmbG9hdDogJ2NlbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgdG9wOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luOiAnOHB4JyxcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIGxlc3Nvbmxpc3Q6IHtcclxuICAgIHdpZHRoOiAnNjAwcHgnLFxyXG4gICAgbWFyZ2luOiAnNXB4JyxcclxuICB9LFxyXG5cclxuICBidG46e1xyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM1QjknIFxyXG4gIH0sXHJcbiAgY2FyZGhlYWRlcjp7XHJcbiAgY3Vyc29yIDogXCJwb2ludGVyXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlc3NvbiAocHJvcHMpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IGxlc3Nvbmxpc3QoKTtcclxuICAgIHJldHVybihcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZXNzb25saXN0fT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvbGVzc29uX2luZm8vJHtwcm9wcy5sZXNzb25pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbGVzc29uX2luZm8vW2xlc3NvbmlkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cInJlY2lwZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZGhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNXB4XCJ9fSB2YXJpYW50PVwiYm9keTJcIj7ml6XmmYI6e3Byb3BzLnRpbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNXB4XCJ9fSB2YXJpYW50PVwiYm9keTJcIj7loLTmiYDvvJp7cHJvcHMucGxhY2V9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNXB4XCJ9fSB2YXJpYW50PVwiYm9keTJcIj7mlpnph5HvvJp7cHJvcHMucHJpY2V9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNXB4XCJ9fSB2YXJpYW50PVwiYm9keTJcIj7jg6zjg4Pjgrnjg7PlhoXlrrnvvJp7cHJvcHMudGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==