webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: fireappp, initStore, storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireappp", function() { return fireappp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");



 //Firebaseの初期化

var firebaseConfig = {
  apiKey: "AIzaSyDT8vE8-4oyfaupBRZCr_2grNoiIGfMfIg",
  authDomain: "subero-prototype.firebaseapp.com",
  projectId: "subero-prototype",
  storageBucket: "subero-prototype.appspot.com",
  messagingSenderId: "720087044660",
  appId: "1:720087044660:web:35bf8de9cc22e0e0d3f061",
  measurementId: "G-3F0618JDJ9"
}; // Initialize Firebase

var fireapp;

try {
  firebase__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}

var fireappp = fireapp; // ステートの初期値

var initial = {
  login: false,
  username: "(click here!)",
  email: "",
  imageu: imageu
}; // // レデューサー
// function calcReducer (state = initial, action) {
//   switch (action.type) {
//     //計算実行
//     case "ENTER":
//       let data2 = state.data.slice();
//       let s = action.value;
//       data2.unshift(s);
//       let num = s.replace(/[^0-9]/g,"");
//       let number2 = state.number.slice();
//       number2.unshift(num);
//       let result = (state.result * 1) + (num * 1);
//       return {
//         message:"ENTER",
//         data:data2,
//         number:number2,
//         result:result
//       };
//       //リセット
//     case "RESET":
//       return {
//         message:"RESET",
//         data:[],
//         number:[],
//         result:[]
//       };
//    //デフォルト
//     default:
//       return state;
//   }
// }

function fireReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "UPDATE_USER":
      return action.value;

    default:
      return state;
  }
} //   //initStore関数


function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(fireReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}
var storage = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage();
/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_2__["default"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWFwcCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJmaXJlYXBwcCIsImluaXRpYWwiLCJsb2dpbiIsInVzZXJuYW1lIiwiZW1haWwiLCJpbWFnZXUiLCJmaXJlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInZhbHVlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJzdG9yYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQUlBLGNBQWMsR0FBRztBQUNqQkMsUUFBTSxFQUFFLHlDQURTO0FBRWpCQyxZQUFVLEVBQUUsa0NBRks7QUFHakJDLFdBQVMsRUFBRSxrQkFITTtBQUlqQkMsZUFBYSxFQUFFLDhCQUpFO0FBS2pCQyxtQkFBaUIsRUFBRSxjQUxGO0FBTWpCQyxPQUFLLEVBQUUsMkNBTlU7QUFPakJDLGVBQWEsRUFBRTtBQVBFLENBQXJCLEMsQ0FTRTs7QUFDRixJQUFJQyxPQUFKOztBQUNBLElBQUk7QUFDRkMsa0RBQVEsQ0FBQ0MsYUFBVCxDQUF1QlYsY0FBdkI7QUFDRCxDQUZELENBRUUsT0FBT1csS0FBUCxFQUFjO0FBQ2RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE9BQWxCO0FBQ0Q7O0FBQ00sSUFBTUMsUUFBUSxHQUFHUCxPQUFqQixDLENBR1A7O0FBQ0EsSUFBTVEsT0FBTyxHQUFHO0FBQ2RDLE9BQUssRUFBQyxLQURRO0FBRWRDLFVBQVEsRUFBQyxlQUZLO0FBR2RDLE9BQUssRUFBQyxFQUhRO0FBSWRDLFFBQU0sRUFBTkE7QUFKYyxDQUFoQixDLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsV0FBVCxHQUErQztBQUFBLE1BQXpCQyxLQUF5Qix1RUFBakJOLE9BQWlCO0FBQUEsTUFBUk8sTUFBUTs7QUFDNUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxhQUFMO0FBQ0UsYUFBT0QsTUFBTSxDQUFDRSxLQUFkOztBQUNGO0FBQ0UsYUFBT0gsS0FBUDtBQUpKO0FBTUEsQyxDQUVIOzs7QUFDUyxTQUFTSSxTQUFULEdBQW9DO0FBQUEsTUFBakJKLEtBQWlCLHVFQUFUTixPQUFTO0FBQ3pDLFNBQU9XLHlEQUFXLENBQUNOLFdBQUQsRUFBY0MsS0FBZCxFQUNmTSw2REFBZSxDQUFDQyxtREFBRCxDQURBLENBQWxCO0FBRUQ7QUFHTSxJQUFNQyxPQUFPLEdBQUdyQixnREFBUSxDQUFDcUIsT0FBVCxFQUFoQjtBQUNRckIsK0dBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NDI4MzE3NjI3Mzk4ZDE1Y2Y1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbi8vRmlyZWJhc2Xjga7liJ3mnJ/ljJZcclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURUOHZFOC00b3lmYXVwQlJaQ3JfMmdyTm9pSUdmTWZJZ1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJzdWJlcm8tcHJvdG90eXBlLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInN1YmVyby1wcm90b3R5cGVcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwic3ViZXJvLXByb3RvdHlwZS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzIwMDg3MDQ0NjYwXCIsXHJcbiAgICBhcHBJZDogXCIxOjcyMDA4NzA0NDY2MDp3ZWI6MzViZjhkZTljYzIyZTBlMGQzZjA2MVwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTNGMDYxOEpESjlcIlxyXG4gIH07XHJcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG52YXIgZmlyZWFwcDtcclxudHJ5IHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxufVxyXG5leHBvcnQgY29uc3QgZmlyZWFwcHAgPSBmaXJlYXBwO1xyXG5cclxuXHJcbi8vIOOCueODhuODvOODiOOBruWIneacn+WApFxyXG5jb25zdCBpbml0aWFsID0ge1xyXG4gIGxvZ2luOmZhbHNlLFxyXG4gIHVzZXJuYW1lOlwiKGNsaWNrIGhlcmUhKVwiLFxyXG4gIGVtYWlsOlwiXCIsXHJcbiAgaW1hZ2V1XHJcbn1cclxuXHJcbi8vIC8vIOODrOODh+ODpeODvOOCteODvFxyXG4vLyBmdW5jdGlvbiBjYWxjUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcclxuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAvL+ioiOeul+Wun+ihjFxyXG4vLyAgICAgY2FzZSBcIkVOVEVSXCI6XHJcbi8vICAgICAgIGxldCBkYXRhMiA9IHN0YXRlLmRhdGEuc2xpY2UoKTtcclxuLy8gICAgICAgbGV0IHMgPSBhY3Rpb24udmFsdWU7XHJcbi8vICAgICAgIGRhdGEyLnVuc2hpZnQocyk7XHJcbi8vICAgICAgIGxldCBudW0gPSBzLnJlcGxhY2UoL1teMC05XS9nLFwiXCIpO1xyXG4vLyAgICAgICBsZXQgbnVtYmVyMiA9IHN0YXRlLm51bWJlci5zbGljZSgpO1xyXG4vLyAgICAgICBudW1iZXIyLnVuc2hpZnQobnVtKTtcclxuLy8gICAgICAgbGV0IHJlc3VsdCA9IChzdGF0ZS5yZXN1bHQgKiAxKSArIChudW0gKiAxKTtcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBtZXNzYWdlOlwiRU5URVJcIixcclxuLy8gICAgICAgICBkYXRhOmRhdGEyLFxyXG4vLyAgICAgICAgIG51bWJlcjpudW1iZXIyLFxyXG4vLyAgICAgICAgIHJlc3VsdDpyZXN1bHRcclxuLy8gICAgICAgfTtcclxuLy8gICAgICAgLy/jg6rjgrvjg4Pjg4hcclxuLy8gICAgIGNhc2UgXCJSRVNFVFwiOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIG1lc3NhZ2U6XCJSRVNFVFwiLFxyXG4vLyAgICAgICAgIGRhdGE6W10sXHJcbi8vICAgICAgICAgbnVtYmVyOltdLFxyXG4vLyAgICAgICAgIHJlc3VsdDpbXVxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAvL+ODh+ODleOCqeODq+ODiFxyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5mdW5jdGlvbiBmaXJlUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcclxuICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgIGNhc2UgXCJVUERBVEVfVVNFUlwiOlxyXG4gICAgICAgcmV0dXJuIGFjdGlvbi52YWx1ZTtcclxuICAgICBkZWZhdWx0OlxyXG4gICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICB9XHJcbiAgfVxyXG5cclxuLy8gICAvL2luaXRTdG9yZemWouaVsFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoZmlyZVJlZHVjZXIsIHN0YXRlLFxyXG4gICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgfVxyXG4gIFxyXG5cclxuICBleHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuICBleHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiXSwic291cmNlUm9vdCI6IiJ9