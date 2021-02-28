webpackHotUpdate_N_E("pages/index",{

/***/ "./components/toppage/Footer.js":
/*!**************************************!*\
  !*** ./components/toppage/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/colors */ "./static/colors.js");


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\toppage\\Footer.js",
    _s = $RefreshSig$();

//フッター設定用ファイル
//レイアウトで読み込む


function Footer(props) {
  _s();

  var footer_style = {
    marginTop: "20px",
    color: Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_2__["Color"]).colors.footer_,
    position: "absolute",
    bottom: "0",
    right: "20px",
    fontSize: "16px"
  };
  var footer_p = {
    mergin: "0px",
    padding: "0px",
    color: Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_2__["Color"]).colors.footer_p
  };
  var footer = {
    color: "#999",
    fontSize: "11pt",
    borderBottom: "1px solid #999",
    margin: "50px 0px 10px 0px",
    position: "relative",
    height: "120px",
    backgroundColor: Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_static_colors__WEBPACK_IMPORTED_MODULE_2__["Color"]).colors.grayBtn,
    paddingLeft: "30px",
    paddingTop: "1px"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    style: footer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: footer_p,
      children: "\u4F01\u696D\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: footer_p,
      children: "\u30A2\u30AF\u30BB\u30B9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: footer_p,
      children: "\u63A1\u7528\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: footer_style,
      children: props.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }, this);
}

_s(Footer, "hX7Qmvhro/719iq/7VkSSddWyyE=");

_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3BwYWdlL0Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImZvb3Rlcl9zdHlsZSIsIm1hcmdpblRvcCIsImNvbG9yIiwidXNlQ29udGV4dCIsIkNvbG9yIiwiY29sb3JzIiwiZm9vdGVyXyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJmb250U2l6ZSIsImZvb3Rlcl9wIiwibWVyZ2luIiwicGFkZGluZyIsImZvb3RlciIsImJvcmRlckJvdHRvbSIsIm1hcmdpbiIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImdyYXlCdG4iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQUE7O0FBRXRDLE1BQU1DLFlBQVksR0FBQztBQUNqQkMsYUFBUyxFQUFDLE1BRE87QUFFakJDLFNBQUssRUFBQ0Msd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJDLE9BRmQ7QUFHakJDLFlBQVEsRUFBRSxVQUhPO0FBSWpCQyxVQUFNLEVBQUMsR0FKVTtBQUtqQkMsU0FBSyxFQUFDLE1BTFc7QUFNakJDLFlBQVEsRUFBQztBQU5RLEdBQW5CO0FBVUEsTUFBTUMsUUFBUSxHQUFDO0FBQ2JDLFVBQU0sRUFBQyxLQURNO0FBRWJDLFdBQU8sRUFBQyxLQUZLO0FBR2JYLFNBQUssRUFBQ0Msd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJNO0FBSGxCLEdBQWY7QUFNRSxNQUFNRyxNQUFNLEdBQUc7QUFDYlosU0FBSyxFQUFDLE1BRE87QUFFYlEsWUFBUSxFQUFDLE1BRkk7QUFHYkssZ0JBQVksRUFBRSxnQkFIRDtBQUliQyxVQUFNLEVBQUMsbUJBSk07QUFLYlQsWUFBUSxFQUFFLFVBTEc7QUFNYlUsVUFBTSxFQUFDLE9BTk07QUFPYkMsbUJBQWUsRUFBQ2Ysd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJjLE9BUDVCO0FBUWJDLGVBQVcsRUFBQyxNQVJDO0FBU2JDLGNBQVUsRUFBQztBQVRFLEdBQWY7QUFZRSxzQkFBUTtBQUFRLFNBQUssRUFBRVAsTUFBZjtBQUFBLDRCQUNOO0FBQUcsV0FBSyxFQUFFSCxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sZUFFTjtBQUFHLFdBQUssRUFBRUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZNLGVBR047QUFBRyxXQUFLLEVBQUVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFITSxlQUlOO0FBQUssV0FBSyxFQUFFWCxZQUFaO0FBQUEsZ0JBQTJCRCxLQUFLLENBQUNlO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQU1EOztHQXBDcUJoQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkZjk3YWUyYjg2NWUwZjBhMThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+ODleODg+OCv+ODvOioreWumueUqOODleOCoeOCpOODq1xyXG4vL+ODrOOCpOOCouOCpuODiOOBp+iqreOBv+i+vOOCgFxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb2xvcn1mcm9tIFwiLi4vLi4vc3RhdGljL2NvbG9yc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyIChwcm9wcyl7XHJcblxyXG5jb25zdCBmb290ZXJfc3R5bGU9e1xyXG4gIG1hcmdpblRvcDpcIjIwcHhcIixcclxuICBjb2xvcjp1c2VDb250ZXh0KENvbG9yKS5jb2xvcnMuZm9vdGVyXyxcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGJvdHRvbTpcIjBcIixcclxuICByaWdodDpcIjIwcHhcIixcclxuICBmb250U2l6ZTpcIjE2cHhcIixcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZvb3Rlcl9wPXtcclxuICBtZXJnaW46XCIwcHhcIixcclxuICBwYWRkaW5nOlwiMHB4XCIsXHJcbiAgY29sb3I6dXNlQ29udGV4dChDb2xvcikuY29sb3JzLmZvb3Rlcl9wLFxyXG59XHJcblxyXG4gIGNvbnN0IGZvb3RlciA9IHtcclxuICAgIGNvbG9yOlwiIzk5OVwiLFxyXG4gICAgZm9udFNpemU6XCIxMXB0XCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICM5OTlcIixcclxuICAgIG1hcmdpbjpcIjUwcHggMHB4IDEwcHggMHB4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgaGVpZ2h0OlwiMTIwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjp1c2VDb250ZXh0KENvbG9yKS5jb2xvcnMuZ3JheUJ0bixcclxuICAgIHBhZGRpbmdMZWZ0OlwiMzBweFwiLFxyXG4gICAgcGFkZGluZ1RvcDpcIjFweFwiLFxyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKDxmb290ZXIgc3R5bGU9e2Zvb3Rlcn0+XHJcbiAgICAgIDxwIHN0eWxlPXtmb290ZXJfcH0+5LyB5qWt5oOF5aCxPC9wPlxyXG4gICAgICA8cCBzdHlsZT17Zm9vdGVyX3B9PuOCouOCr+OCu+OCuTwvcD5cclxuICAgICAgPHAgc3R5bGU9e2Zvb3Rlcl9wfT7mjqHnlKjmg4XloLE8L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2Zvb3Rlcl9zdHlsZX0+e3Byb3BzLmZvb3Rlcn08L2Rpdj5cclxuICAgIDwvZm9vdGVyPik7XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9