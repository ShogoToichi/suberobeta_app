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
    listStyle: "none",
    border: "2pt"
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
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: classes.MuiListItemDevider,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: classes.lessonitem,
            primary: "\u30FB\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            size: "large",
            className: classes.messagebtn,
            onClick: props.onClick,
            children: "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: "\u30FB\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, this), "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: "\u30FB\u300C\u30EC\u30C3\u30B9\u30F3\u540D\u300D\u3000\u300C\u751F\u5F92\u540D\u300D\u3000\u300C\u65E5\u6642\u300D\u3000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, this), "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"]
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
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
            lineNumber: 68,
            columnNumber: 69
          }, this),
          className: classes.btn,
          children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50c1VpL015TGVzc29uTGlzdFVpLmpzIl0sIm5hbWVzIjpbIm15bGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJsaXN0IiwibWFyZ2luIiwiYWRkYnRuIiwidGV4dEFsaWduIiwiYnRuIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtZXNzYWdlYnRuIiwibGVzc29uaXRlbSIsImxpc3RTdHlsZSIsImJvcmRlciIsIm15TGVzc29uTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsIk11aUxpc3RJdGVtRGV2aWRlciIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBR0Msc0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFDO0FBQ0RDLFVBQU0sRUFBRTtBQURQLEdBRHVCO0FBSTVCQyxRQUFNLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBRFAsR0FKb0I7QUFPNUJDLEtBQUcsRUFBRTtBQUNEQyxtQkFBZSxFQUFFLE1BRGhCO0FBRURDLFNBQUssRUFBQztBQUZMLEdBUHVCO0FBVzVCQyxZQUFVLEVBQUU7QUFDUkYsbUJBQWUsRUFBRSxNQURUO0FBRVJDLFNBQUssRUFBQztBQUZFLEdBWGdCO0FBZTVCRSxZQUFVLEVBQUM7QUFDUEMsYUFBUyxFQUFDLE1BREg7QUFFUEMsVUFBTSxFQUFHO0FBRkY7QUFmaUIsQ0FBRCxDQUEvQjtBQXNCZSxTQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUN4QyxNQUFNQyxPQUFPLEdBQUlmLFlBQVksRUFBN0I7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWUsT0FBTyxDQUFDYixJQUF4QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFYSxPQUFPLENBQUNiLElBQXhCO0FBQUEsOEJBQ0EscUVBQUMsNkRBQUQ7QUFBSyxhQUFLLEVBQUMsT0FBWDtBQUFtQixlQUFPLEVBQUMsTUFBM0I7QUFBa0Msa0JBQVUsRUFBQyxNQUE3QztBQUFvRCxTQUFDLEVBQUUsQ0FBdkQ7QUFBQSwrQkFDQSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFLQSxxRUFBQyw4REFBRDtBQUFBLGdDQUNBLHFFQUFDLGtFQUFEO0FBQVUsbUJBQVMsRUFBRWEsT0FBTyxDQUFDQyxrQkFBN0I7QUFBQSxrQ0FDSSxxRUFBQyxzRUFBRDtBQUFjLHFCQUFTLEVBQUVELE9BQU8sQ0FBQ0wsVUFBakM7QUFBNkMsbUJBQU8sRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsZ0VBQUQ7QUFBUSxnQkFBSSxFQUFDLE9BQWI7QUFBcUIscUJBQVMsRUFBRUssT0FBTyxDQUFDTixVQUF4QztBQUFvRCxtQkFBTyxFQUFFSyxLQUFLLENBQUNHLE9BQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUtBLHFFQUFDLGtFQUFEO0FBQVUsZ0JBQU0sTUFBaEI7QUFBQSxrQ0FDSSxxRUFBQyxzRUFBRDtBQUFjLG1CQUFPLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEEsZUFTQSxxRUFBQyxrRUFBRDtBQUFVLGdCQUFNLE1BQWhCO0FBQUEsa0NBQ0kscUVBQUMsc0VBQUQ7QUFBYyxtQkFBTyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRBLGVBYUEscUVBQUMsa0VBQUQ7QUFBVSxnQkFBTSxNQUFoQjtBQUFBLGtDQUNJLHFFQUFDLHNFQUFEO0FBQWMsbUJBQU8sRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQTBCSTtBQUFLLGVBQVMsRUFBRUYsT0FBTyxDQUFDWCxNQUF4QjtBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBQSwrQkFDQSxxRUFBQyxnRUFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsY0FBSSxFQUFDLE9BQWpDO0FBQXlDLG1CQUFTLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXBEO0FBQTZFLG1CQUFTLEVBQUVXLE9BQU8sQ0FBQ1QsR0FBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMGYwOGZlODBjNGJhZTRjNzllZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGJvcmRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zeXN0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IG15bGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGlzdDp7XHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgYWRkYnRuOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVGQVwiLFxyXG4gICAgICAgIGNvbG9yOlwid2hpdGVcIixcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNERERcIixcclxuICAgICAgICBjb2xvcjpcImJsYWNrXCIsXHJcbiAgICB9LFxyXG4gICAgbGVzc29uaXRlbTp7XHJcbiAgICAgICAgbGlzdFN0eWxlOlwibm9uZVwiLFxyXG4gICAgICAgIGJvcmRlciA6IFwiMnB0XCIsXHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG15TGVzc29uTGlzdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyAgPSBteWxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBiZ2NvbG9yPVwiIzVGQVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgcD17MX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPk1544Os44OD44K544Oz5bGl5q20PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLk11aUxpc3RJdGVtRGV2aWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZXNzb25pdGVtfSBwcmltYXJ5PVwi44O744CM44Os44OD44K544Oz5ZCN44CN44CA44CM55Sf5b6S5ZCN44CN44CA44CM5pel5pmC44CN44CAXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VidG59IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PuWPluW8leODoeODg+OCu+ODvOOCuDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwi44O744CM44Os44OD44K544Oz5ZCN44CN44CA44CM55Sf5b6S5ZCN44CN44CA44CM5pel5pmC44CN44CAXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICDlj5blvJXjg6Hjg4Pjgrvjg7zjgrhcclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIuODu+OAjOODrOODg+OCueODs+WQjeOAjeOAgOOAjOeUn+W+kuWQjeOAjeOAgOOAjOaXpeaZguOAjeOAgFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAg5Y+W5byV44Oh44OD44K744O844K4XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCLjg7vjgIzjg6zjg4Pjgrnjg7PlkI3jgI3jgIDjgIznlJ/lvpLlkI3jgI3jgIDjgIzml6XmmYLjgI3jgIBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOWPluW8leODoeODg+OCu+ODvOOCuFxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkYnRufT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGVzc29uX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgc3RhcnRJY29uPXs8SWNvbj5hZGRfY2lyY2xlPC9JY29uPn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0+44Os44OD44K544Oz6L+95YqgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9