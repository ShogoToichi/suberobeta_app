webpackHotUpdate_N_E("pages/profile_edit",{

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
  imageurl: imageurl
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWFwcCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJmaXJlYXBwcCIsImluaXRpYWwiLCJsb2dpbiIsInVzZXJuYW1lIiwiZW1haWwiLCJpbWFnZXVybCIsImZpcmVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsY0FBYyxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUseUNBRFM7QUFFakJDLFlBQVUsRUFBRSxrQ0FGSztBQUdqQkMsV0FBUyxFQUFFLGtCQUhNO0FBSWpCQyxlQUFhLEVBQUUsOEJBSkU7QUFLakJDLG1CQUFpQixFQUFFLGNBTEY7QUFNakJDLE9BQUssRUFBRSwyQ0FOVTtBQU9qQkMsZUFBYSxFQUFFO0FBUEUsQ0FBckIsQyxDQVNFOztBQUNGLElBQUlDLE9BQUo7O0FBQ0EsSUFBSTtBQUNGQyxrREFBUSxDQUFDQyxhQUFULENBQXVCVixjQUF2QjtBQUNELENBRkQsQ0FFRSxPQUFPVyxLQUFQLEVBQWM7QUFDZEMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csT0FBbEI7QUFDRDs7QUFDTSxJQUFNQyxRQUFRLEdBQUdQLE9BQWpCLEMsQ0FHUDs7QUFDQSxJQUFNUSxPQUFPLEdBQUc7QUFDZEMsT0FBSyxFQUFDLEtBRFE7QUFFZEMsVUFBUSxFQUFDLGVBRks7QUFHZEMsT0FBSyxFQUFDLEVBSFE7QUFJZEMsVUFBUSxFQUFSQTtBQUpjLENBQWhCLEMsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxXQUFULEdBQStDO0FBQUEsTUFBekJDLEtBQXlCLHVFQUFqQk4sT0FBaUI7QUFBQSxNQUFSTyxNQUFROztBQUM1QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPRCxNQUFNLENBQUNFLEtBQWQ7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBSko7QUFNQSxDLENBRUg7OztBQUNTLFNBQVNJLFNBQVQsR0FBb0M7QUFBQSxNQUFqQkosS0FBaUIsdUVBQVROLE9BQVM7QUFDekMsU0FBT1cseURBQVcsQ0FBQ04sV0FBRCxFQUFjQyxLQUFkLEVBQ2ZNLDZEQUFlLENBQUNDLG1EQUFELENBREEsQ0FBbEI7QUFFRDtBQUdNLElBQU1DLE9BQU8sR0FBR3JCLGdEQUFRLENBQUNxQixPQUFULEVBQWhCO0FBQ1FyQiwrR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlX2VkaXQuNTYxMDg4ZmMxMTFhOTBjMzVkYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG4vL0ZpcmViYXNl44Gu5Yid5pyf5YyWXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEVDh2RTgtNG95ZmF1cEJSWkNyXzJnck5vaUlHZk1mSWdcIixcclxuICAgIGF1dGhEb21haW46IFwic3ViZXJvLXByb3RvdHlwZS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJzdWJlcm8tcHJvdG90eXBlXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInN1YmVyby1wcm90b3R5cGUuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjcyMDA4NzA0NDY2MFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo3MjAwODcwNDQ2NjA6d2ViOjM1YmY4ZGU5Y2MyMmUwZTBkM2YwNjFcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0zRjA2MThKREo5XCJcclxuICB9O1xyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxudmFyIGZpcmVhcHA7XHJcbnRyeSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGZpcmVhcHBwID0gZmlyZWFwcDtcclxuXHJcblxyXG4vLyDjgrnjg4bjg7zjg4jjga7liJ3mnJ/lgKRcclxuY29uc3QgaW5pdGlhbCA9IHtcclxuICBsb2dpbjpmYWxzZSxcclxuICB1c2VybmFtZTpcIihjbGljayBoZXJlISlcIixcclxuICBlbWFpbDpcIlwiLFxyXG4gIGltYWdldXJsXHJcbn1cclxuXHJcbi8vIC8vIOODrOODh+ODpeODvOOCteODvFxyXG4vLyBmdW5jdGlvbiBjYWxjUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcclxuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAvL+ioiOeul+Wun+ihjFxyXG4vLyAgICAgY2FzZSBcIkVOVEVSXCI6XHJcbi8vICAgICAgIGxldCBkYXRhMiA9IHN0YXRlLmRhdGEuc2xpY2UoKTtcclxuLy8gICAgICAgbGV0IHMgPSBhY3Rpb24udmFsdWU7XHJcbi8vICAgICAgIGRhdGEyLnVuc2hpZnQocyk7XHJcbi8vICAgICAgIGxldCBudW0gPSBzLnJlcGxhY2UoL1teMC05XS9nLFwiXCIpO1xyXG4vLyAgICAgICBsZXQgbnVtYmVyMiA9IHN0YXRlLm51bWJlci5zbGljZSgpO1xyXG4vLyAgICAgICBudW1iZXIyLnVuc2hpZnQobnVtKTtcclxuLy8gICAgICAgbGV0IHJlc3VsdCA9IChzdGF0ZS5yZXN1bHQgKiAxKSArIChudW0gKiAxKTtcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBtZXNzYWdlOlwiRU5URVJcIixcclxuLy8gICAgICAgICBkYXRhOmRhdGEyLFxyXG4vLyAgICAgICAgIG51bWJlcjpudW1iZXIyLFxyXG4vLyAgICAgICAgIHJlc3VsdDpyZXN1bHRcclxuLy8gICAgICAgfTtcclxuLy8gICAgICAgLy/jg6rjgrvjg4Pjg4hcclxuLy8gICAgIGNhc2UgXCJSRVNFVFwiOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIG1lc3NhZ2U6XCJSRVNFVFwiLFxyXG4vLyAgICAgICAgIGRhdGE6W10sXHJcbi8vICAgICAgICAgbnVtYmVyOltdLFxyXG4vLyAgICAgICAgIHJlc3VsdDpbXVxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAvL+ODh+ODleOCqeODq+ODiFxyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5mdW5jdGlvbiBmaXJlUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcclxuICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgIGNhc2UgXCJVUERBVEVfVVNFUlwiOlxyXG4gICAgICAgcmV0dXJuIGFjdGlvbi52YWx1ZTtcclxuICAgICBkZWZhdWx0OlxyXG4gICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICB9XHJcbiAgfVxyXG5cclxuLy8gICAvL2luaXRTdG9yZemWouaVsFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoZmlyZVJlZHVjZXIsIHN0YXRlLFxyXG4gICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgfVxyXG4gIFxyXG5cclxuICBleHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuICBleHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiXSwic291cmNlUm9vdCI6IiJ9