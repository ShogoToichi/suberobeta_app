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
    color: react__WEBPACK_IMPORTED_MODULE_1__["useContext"],
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

_s(Footer, "bm0ZwwmmMt3H7bFMoQVNW1+jl04=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3BwYWdlL0Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImZvb3Rlcl9zdHlsZSIsIm1hcmdpblRvcCIsImNvbG9yIiwidXNlQ29udGV4dCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJmb250U2l6ZSIsImZvb3Rlcl9wIiwibWVyZ2luIiwicGFkZGluZyIsIkNvbG9yIiwiY29sb3JzIiwiZm9vdGVyIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZ3JheUJ0biIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFpQkMsS0FBakIsRUFBdUI7QUFBQTs7QUFFdEMsTUFBTUMsWUFBWSxHQUFDO0FBQ2pCQyxhQUFTLEVBQUMsTUFETztBQUVqQkMsU0FBSyxFQUFDQyxnREFGVztBQUdqQkMsWUFBUSxFQUFFLFVBSE87QUFJakJDLFVBQU0sRUFBQyxHQUpVO0FBS2pCQyxTQUFLLEVBQUMsTUFMVztBQU1qQkMsWUFBUSxFQUFDO0FBTlEsR0FBbkI7QUFVQSxNQUFNQyxRQUFRLEdBQUM7QUFDYkMsVUFBTSxFQUFDLEtBRE07QUFFYkMsV0FBTyxFQUFDLEtBRks7QUFHYlIsU0FBSyxFQUFDQyx3REFBVSxDQUFDUSxvREFBRCxDQUFWLENBQWtCQyxNQUFsQixDQUF5Qko7QUFIbEIsR0FBZjtBQU1FLE1BQU1LLE1BQU0sR0FBRztBQUNiWCxTQUFLLEVBQUMsTUFETztBQUViSyxZQUFRLEVBQUMsTUFGSTtBQUdiTyxnQkFBWSxFQUFFLGdCQUhEO0FBSWJDLFVBQU0sRUFBQyxtQkFKTTtBQUtiWCxZQUFRLEVBQUUsVUFMRztBQU1iWSxVQUFNLEVBQUMsT0FOTTtBQU9iQyxtQkFBZSxFQUFDZCx3REFBVSxDQUFDUSxvREFBRCxDQUFWLENBQWtCQyxNQUFsQixDQUF5Qk0sT0FQNUI7QUFRYkMsZUFBVyxFQUFDLE1BUkM7QUFTYkMsY0FBVSxFQUFDO0FBVEUsR0FBZjtBQVlFLHNCQUFRO0FBQVEsU0FBSyxFQUFFUCxNQUFmO0FBQUEsNEJBQ047QUFBRyxXQUFLLEVBQUVMLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxlQUVOO0FBQUcsV0FBSyxFQUFFQSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk0sZUFHTjtBQUFHLFdBQUssRUFBRUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhNLGVBSU47QUFBSyxXQUFLLEVBQUVSLFlBQVo7QUFBQSxnQkFBMkJELEtBQUssQ0FBQ2M7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBTUQ7O0dBcENxQmYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjJjOTM2ODdiNjkzZjI1NmI4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/jg5Xjg4Pjgr/jg7zoqK3lrprnlKjjg5XjgqHjgqTjg6tcclxuLy/jg6zjgqTjgqLjgqbjg4jjgafoqq3jgb/ovrzjgoBcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50ICwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29sb3J9ZnJvbSBcIi4uLy4uL3N0YXRpYy9jb2xvcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlciAocHJvcHMpe1xyXG5cclxuY29uc3QgZm9vdGVyX3N0eWxlPXtcclxuICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbiAgY29sb3I6dXNlQ29udGV4dCxcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGJvdHRvbTpcIjBcIixcclxuICByaWdodDpcIjIwcHhcIixcclxuICBmb250U2l6ZTpcIjE2cHhcIixcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZvb3Rlcl9wPXtcclxuICBtZXJnaW46XCIwcHhcIixcclxuICBwYWRkaW5nOlwiMHB4XCIsXHJcbiAgY29sb3I6dXNlQ29udGV4dChDb2xvcikuY29sb3JzLmZvb3Rlcl9wLFxyXG59XHJcblxyXG4gIGNvbnN0IGZvb3RlciA9IHtcclxuICAgIGNvbG9yOlwiIzk5OVwiLFxyXG4gICAgZm9udFNpemU6XCIxMXB0XCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICM5OTlcIixcclxuICAgIG1hcmdpbjpcIjUwcHggMHB4IDEwcHggMHB4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgaGVpZ2h0OlwiMTIwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjp1c2VDb250ZXh0KENvbG9yKS5jb2xvcnMuZ3JheUJ0bixcclxuICAgIHBhZGRpbmdMZWZ0OlwiMzBweFwiLFxyXG4gICAgcGFkZGluZ1RvcDpcIjFweFwiLFxyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKDxmb290ZXIgc3R5bGU9e2Zvb3Rlcn0+XHJcbiAgICAgIDxwIHN0eWxlPXtmb290ZXJfcH0+5LyB5qWt5oOF5aCxPC9wPlxyXG4gICAgICA8cCBzdHlsZT17Zm9vdGVyX3B9PuOCouOCr+OCu+OCuTwvcD5cclxuICAgICAgPHAgc3R5bGU9e2Zvb3Rlcl9wfT7mjqHnlKjmg4XloLE8L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2Zvb3Rlcl9zdHlsZX0+e3Byb3BzLmZvb3Rlcn08L2Rpdj5cclxuICAgIDwvZm9vdGVyPik7XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9