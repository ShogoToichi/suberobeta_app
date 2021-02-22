webpackHotUpdate_N_E("pages/mypage",{

/***/ "./static/address_lib.js":
/*!*******************************!*\
  !*** ./static/address_lib.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");



//encode,decode処理
//deepcopyはたぶん使わないやつ
var Lib = /*#__PURE__*/function () {
  function Lib() {
    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lib);
  }

  Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lib, null, [{
    key: "deepcopy",
    value: function deepcopy(val) {
      return JSON.parse(JSON.stringify(val));
    }
  }, {
    key: "encodeEmail",
    value: function encodeEmail(val) {
      return val.split(".").join("*");
    }
  }, {
    key: "decodeEmail",
    value: function decodeEmail(val) {
      return val.split("*").join(".");
    }
  }]);

  return Lib;
}();

/* harmony default export */ __webpack_exports__["default"] = (Lib);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGljL2FkZHJlc3NfbGliLmpzIl0sIm5hbWVzIjpbIkxpYiIsInZhbCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFHTUEsRzs7Ozs7Ozs2QkFDWUMsRyxFQUFJO0FBQ2xCLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsR0FBZixDQUFYLENBQVA7QUFDRDs7O2dDQUVrQkEsRyxFQUFJO0FBQ3JCLGFBQU9BLEdBQUcsQ0FBQ0ksS0FBSixDQUFVLEdBQVYsRUFBZUMsSUFBZixDQUFvQixHQUFwQixDQUFQO0FBQ0Q7OztnQ0FDa0JMLEcsRUFBSTtBQUNyQixhQUFPQSxHQUFHLENBQUNJLEtBQUosQ0FBVSxHQUFWLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsQ0FBUDtBQUNEOzs7Ozs7QUFHWU4sa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlwYWdlLmU1Yzc5ZjBhZjZmNDU1ZDEwNjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2VuY29kZSxkZWNvZGXlh6bnkIZcclxuLy9kZWVwY29weeOBr+OBn+OBtuOCk+S9v+OCj+OBquOBhOOChOOBpFxyXG5cclxuXHJcbmNsYXNzIExpYntcclxuICBzdGF0aWMgZGVlcGNvcHkodmFsKXtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVuY29kZUVtYWlsKHZhbCl7XHJcbiAgICByZXR1cm4gdmFsLnNwbGl0KFwiLlwiKS5qb2luKFwiKlwiKTtcclxuICB9XHJcbiAgc3RhdGljIGRlY29kZUVtYWlsKHZhbCl7XHJcbiAgICByZXR1cm4gdmFsLnNwbGl0KFwiKlwiKS5qb2luKFwiLlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpYjsiXSwic291cmNlUm9vdCI6IiJ9