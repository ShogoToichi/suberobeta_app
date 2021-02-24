webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/configureStore.js":
/*!*******************************!*\
  !*** ./lib/configureStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");





var persistConfig = {
  key: 'subero',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default.a
};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _store__WEBPACK_IMPORTED_MODULE_4__["fireReducer"]);
function configureStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistStore"])(store);
  return {
    store: store,
    persistor: persistor
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbmZpZ3VyZVN0b3JlLmpzIl0sIm5hbWVzIjpbInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwiZmlyZVJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJwZXJzaXN0b3IiLCJwZXJzaXN0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNsQkMsS0FBRyxFQUFFLFFBRGE7QUFFbEJDLFNBQU8sRUFBUEEsZ0VBQU9BO0FBRlcsQ0FBdEI7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBR0Msb0VBQWMsQ0FBQ0osYUFBRCxFQUFnQkssa0RBQWhCLENBQXZDO0FBRWUsU0FBU0MsY0FBVCxHQUEwQjtBQUNyQyxNQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQ3JCTCxnQkFEcUIsRUFFckJNLDZEQUFlLENBQUNDLG1EQUFELENBRk0sQ0FBekI7QUFLQSxNQUFNQyxTQUFTLEdBQUdDLGtFQUFZLENBQUNMLEtBQUQsQ0FBOUI7QUFFQSxTQUFPO0FBQUVBLFNBQUssRUFBTEEsS0FBRjtBQUFTSSxhQUFTLEVBQVRBO0FBQVQsR0FBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmYyZjZmN2UwODRmMGU1NzRiYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHtmaXJlUmVkdWNlcn0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogJ3N1YmVybycsXHJcbiAgICBzdG9yYWdlLFxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGZpcmVSZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3RvcmUsIHBlcnNpc3RvciB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==