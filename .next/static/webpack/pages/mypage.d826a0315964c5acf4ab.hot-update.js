webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/mypage/parts/MyProFileDetail.js":
/*!****************************************************!*\
  !*** ./components/mypage/parts/MyProFileDetail.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyProfileDetail; });
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
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../normal_parts/Title */ "./components/normal_parts/Title.js");
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../static/colors */ "./static/colors.js");


var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\mypage\\parts\\MyProFileDetail.js",
    _s = $RefreshSig$();












var myprofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_s(function (theme) {
  _s();

  return {
    myprof: {
      width: "60%"
    },
    card: {
      marginTop: '20px'
    },
    btn: {
      backgroundColor: Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_11__["Color"]).colors.bgGreen,
      color: 'balck'
    },
    title: {
      fontWeight: 'bold',
      margin: '5px',
      borderBottom: "solid 1px #BBB",
      paddingBottom: "7px"
    },
    description: {
      margin: '30px'
    }
  };
}, "gDsCjeeItUuvgOWf1v4qoK9RF6k="));
function MyProfileDetail(props) {
  var classes = myprofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.myprof,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "My Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.card,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"] // avatarからIgmに変更する
        , {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            sizes: "string",
            src: props.imageurl,
            className: classes.avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, this),
          action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/profile_edit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
              variant: "outlined",
              size: "large",
              className: classes.btn,
              children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u5909\u66F4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this),
          title: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "h5",
            className: classes.title,
            children: "\u81EA\u5DF1\u7D39\u4ECB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "h6",
            className: classes.description,
            children: props.introduction
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}
_c = MyProfileDetail;

var _c;

$RefreshReg$(_c, "MyProfileDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teXBhZ2UvcGFydHMvTXlQcm9GaWxlRGV0YWlsLmpzIl0sIm5hbWVzIjpbIm15cHJvZmlsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm15cHJvZiIsIndpZHRoIiwiY2FyZCIsIm1hcmdpblRvcCIsImJ0biIsImJhY2tncm91bmRDb2xvciIsInVzZUNvbnRleHQiLCJDb2xvciIsImNvbG9ycyIsImJnR3JlZW4iLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImJvcmRlckJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJkZXNjcmlwdGlvbiIsIk15UHJvZmlsZURldGFpbCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdldXJsIiwiYXZhdGFyIiwibmFtZSIsImludHJvZHVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxJQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3JDQyxVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREgsS0FENkI7QUFJckNDLFFBQUksRUFBRTtBQUNGQyxlQUFTLEVBQUU7QUFEVCxLQUorQjtBQU9yQ0MsT0FBRyxFQUFFO0FBQ0RDLHFCQUFlLEVBQUVDLHdEQUFVLENBQUNDLHFEQUFELENBQVYsQ0FBa0JDLE1BQWxCLENBQXlCQyxPQUR6QztBQUVEQyxXQUFLLEVBQUU7QUFGTixLQVBnQztBQVdyQ0MsU0FBSyxFQUFFO0FBQ0hDLGdCQUFVLEVBQUUsTUFEVDtBQUVIQyxZQUFNLEVBQUUsS0FGTDtBQUdIQyxrQkFBWSxFQUFFLGdCQUhYO0FBSUhDLG1CQUFhLEVBQUU7QUFKWixLQVg4QjtBQWlCckNDLGVBQVcsRUFBQztBQUNSSCxZQUFNLEVBQUU7QUFEQTtBQWpCeUIsR0FBWjtBQUFBLENBQUQsa0NBQTVCO0FBc0JlLFNBQVNJLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQStCO0FBQzFDLE1BQU1DLE9BQU8sR0FBR3RCLFNBQVMsRUFBekI7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXNCLE9BQU8sQ0FBQ25CLE1BQXhCO0FBQUEsNEJBQ0kscUVBQUMsNERBQUQ7QUFBTyxXQUFLLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRW1CLE9BQU8sQ0FBQ2pCLElBQXhCO0FBQUEsNkJBQ0kscUVBQUMsOERBQUQ7QUFBQSxnQ0FDSSxxRUFBQyw0REFBRCxDQUNBO0FBREE7QUFFUSxnQkFBTSxlQUNOLHFFQUFDLGdFQUFEO0FBQVEsaUJBQUssRUFBQyxRQUFkO0FBQXVCLGVBQUcsRUFBRWdCLEtBQUssQ0FBQ0UsUUFBbEM7QUFBNEMscUJBQVMsRUFBRUQsT0FBTyxDQUFDRTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhSO0FBTUEsZ0JBQU0sZUFDRixxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsZUFBWDtBQUFBLG1DQUNJLHFFQUFDLGdFQUFEO0FBQVEscUJBQU8sRUFBQyxVQUFoQjtBQUEyQixrQkFBSSxFQUFDLE9BQWhDO0FBQXdDLHVCQUFTLEVBQUVGLE9BQU8sQ0FBQ2YsR0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBV0EsZUFBSyxFQUFHYyxLQUFLLENBQUNJO0FBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQWVJLHFFQUFDLHFFQUFEO0FBQUEsa0NBQ0kscUVBQUMsb0VBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQXlCLHFCQUFTLEVBQUVILE9BQU8sQ0FBQ1IsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyxvRUFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBeUIscUJBQVMsRUFBRVEsT0FBTyxDQUFDSCxXQUE1QztBQUFBLHNCQUNLRSxLQUFLLENBQUNLO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIO0tBL0J1Qk4sZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBhZ2UuZDgyNmEwMzE1OTY0YzVhY2Y0YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vbm9ybWFsX3BhcnRzL1RpdGxlXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCIuLi8uLi8uLi9zdGF0aWMvY29sb3JzXCI7XHJcblxyXG5cclxuY29uc3QgbXlwcm9maWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBteXByb2Y6IHtcclxuICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB1c2VDb250ZXh0KENvbG9yKS5jb2xvcnMuYmdHcmVlbixcclxuICAgICAgICBjb2xvcjogJ2JhbGNrJyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJywgXHJcbiAgICAgICAgbWFyZ2luOiAnNXB4JywgIFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogXCJzb2xpZCAxcHggI0JCQlwiICxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjdweFwiLFxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOntcclxuICAgICAgICBtYXJnaW46ICczMHB4JyBcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15UHJvZmlsZURldGFpbChwcm9wcyl7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gbXlwcm9maWxlKCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubXlwcm9mfT5cclxuICAgICAgICAgICAgPFRpdGxlIHRpdGxlPXtcIk15IFBhZ2VcIn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGF2YXRhcuOBi+OCiUlnbeOBq+WkieabtOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZXM9XCJzdHJpbmdcIiBzcmM9e3Byb3BzLmltYWdldXJsfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZV9lZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJsYXJnZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PuODl+ODreODleOCo+ODvOODq+WkieabtDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PuiHquW3see0ueS7izwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pbnRyb2R1Y3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=