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
    backgroundColor: '#90EE90'
  }
});
function Lesson(props) {
  var classes = lessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: "/lesson_info/".concat(props.lessonid),
      href: "/lesson_info/[lessonid]",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["place: ", props.place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["price: ", props.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["time: ", props.time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["comment: ", props.text]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }, this);
}
_c = Lesson;

/*#__PURE__*/
Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          lineNumber: 59,
          columnNumber: 27
        }, undefined),
        title: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "body2",
        children: ["\u65E5\u6642:", props.time]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "body2",
        children: ["\u5834\u6240\uFF1A", props.place]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "body2",
        children: ["\u6599\u91D1\uFF1A", props.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "body2",
        children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.text]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 15
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 53,
  columnNumber: 2
}, undefined);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb24uanMiXSwibmFtZXMiOlsibGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJyYXlvdXQiLCJ0b3AiLCJ3aWR0aCIsIm1hcmdpbiIsImJ0biIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiTGVzc29uIiwicHJvcHMiLCJjbGFzc2VzIiwibGVzc29uaWQiLCJuYW1lIiwicGxhY2UiLCJwcmljZSIsInRpbWUiLCJ0ZXh0IiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDTixhQUFPO0FBREQsR0FEb0I7QUFLNUJDLEtBQUcsRUFBRTtBQUNIQyxTQUFLLEVBQUUsTUFESjtBQUVIQyxVQUFNLEVBQUU7QUFGTCxHQUx1QjtBQVc1QkwsWUFBVSxFQUFFO0FBQ1ZJLFNBQUssRUFBRSxPQURHO0FBRVZDLFVBQU0sRUFBRTtBQUZFLEdBWGdCO0FBZ0I1QkMsS0FBRyxFQUFDO0FBQ0YsYUFBTyxPQURMO0FBRUZDLFNBQUssRUFBRSxPQUZMO0FBR0ZDLG1CQUFlLEVBQUU7QUFIZjtBQWhCd0IsQ0FBRCxDQUE3QjtBQXVCZSxTQUFTQyxNQUFULENBQWlCQyxLQUFqQixFQUF1QjtBQUNsQyxNQUFNQyxPQUFPLEdBQUdYLFVBQVUsRUFBMUI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBRSx5QkFBa0JVLEtBQUssQ0FBQ0UsUUFBeEIsQ0FBUjtBQUNFLFVBQUksRUFBQyx5QkFEUDtBQUFBLDZCQUVJO0FBQUEsa0JBQUlGLEtBQUssQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSw0QkFBV0gsS0FBSyxDQUFDSSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsNEJBQVdKLEtBQUssQ0FBQ0ssS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFBLDJCQUFVTCxLQUFLLENBQUNNLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUU7QUFBQSw4QkFBYU4sS0FBSyxDQUFDTyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlDO0tBZG1CUixNOztBQWdCdkI7QUFBQTtBQUFLLFdBQVMsRUFBRUUsT0FBTyxDQUFDWCxVQUF4QjtBQUFBLHlCQUNhLHFFQUFDLDhEQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxRQUFFLHlCQUFrQlUsS0FBSyxDQUFDRSxRQUF4QixDQUFSO0FBQ0UsVUFBSSxFQUFDLHlCQURQO0FBQUEsNkJBRUkscUVBQUMsNERBQUQ7QUFDSSxjQUFNLGVBQ04scUVBQUMsZ0VBQUQ7QUFBUSx3QkFBVyxRQUFuQjtBQUE0QixtQkFBUyxFQUFFRCxPQUFPLENBQUNPO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFLSSxhQUFLLEVBQUVSLEtBQUssQ0FBQ0c7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFXSSxxRUFBQyxxRUFBRDtBQUFBLDhCQUNFLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQUEsb0NBQWdDSCxLQUFLLENBQUNNLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQUEseUNBQWdDTixLQUFLLENBQUNJLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQUEseUNBQWdDSixLQUFLLENBQUNLLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQUEsaUVBQW9DTCxLQUFLLENBQUNPLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fbGlzdC5mODVjZTBmOTJlZDkzYzI1OGI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/lgKTjgpLmuKHjgZfjgabjg6zjg4Pjgrnjg7PjgpLooajnpLrjgZnjgovnrrFcclxuLy9MaW5r44K/44Kw44Gu44Go44GT44KN44GvbGVzc29uaW5mby9bbGVzc29uaWRd44Gr44Oa44O844K456e75YuV44GZ44KL5Yem55CGXHJcblxyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5cclxuY29uc3QgbGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gIHJheW91dDoge1xyXG4gICAgZmxvYXQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIHRvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBsZXNzb25saXN0OiB7XHJcbiAgICB3aWR0aDogJzYwMHB4JyxcclxuICAgIG1hcmdpbjogJzVweCcsXHJcbiAgfSxcclxuXHJcbiAgYnRuOntcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBFRTkwJyBcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlc3NvbiAocHJvcHMpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IGxlc3Nvbmxpc3QoKTtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBhcz17YC9sZXNzb25faW5mby8ke3Byb3BzLmxlc3NvbmlkfWB9XHJcbiAgICAgICAgICBocmVmPVwiL2xlc3Nvbl9pbmZvL1tsZXNzb25pZF1cIj5cclxuICAgICAgICAgICAgPGE+e3Byb3BzLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwPnBsYWNlOiB7cHJvcHMucGxhY2V9PC9wPlxyXG4gICAgICAgIDxwPnByaWNlOiB7cHJvcHMucHJpY2V9PC9wPlxyXG4gICAgICAgIDxwPnRpbWU6IHtwcm9wcy50aW1lfTwvcD5cclxuICAgICAgICA8cD5jb21tZW50OiB7cHJvcHMudGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBcclxuXHJcbiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZXNzb25saXN0fT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvbGVzc29uX2luZm8vJHtwcm9wcy5sZXNzb25pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbGVzc29uX2luZm8vW2xlc3NvbmlkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cInJlY2lwZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj7ml6XmmYI6e3Byb3BzLnRpbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPuWgtOaJgO+8mntwcm9wcy5wbGFjZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+5paZ6YeR77yae3Byb3BzLnByaWNlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj7jg6zjg4Pjgrnjg7PlhoXlrrnvvJp7cHJvcHMudGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=