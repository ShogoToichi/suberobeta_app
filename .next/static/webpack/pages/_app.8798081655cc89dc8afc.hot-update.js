webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
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

/* harmony default export */ __webpack_exports__["default"] = (fireapp); // ステートの初期値

var initial = {
  login: false,
  username: "(click here!)",
  email: "",
  // data:[],
  items: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWFwcCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJpbml0aWFsIiwibG9naW4iLCJ1c2VybmFtZSIsImVtYWlsIiwiaXRlbXMiLCJmaXJlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInZhbHVlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFJQSxjQUFjLEdBQUc7QUFDakJDLFFBQU0sRUFBRSx5Q0FEUztBQUVqQkMsWUFBVSxFQUFFLGtDQUZLO0FBR2pCQyxXQUFTLEVBQUUsa0JBSE07QUFJakJDLGVBQWEsRUFBRSw4QkFKRTtBQUtqQkMsbUJBQWlCLEVBQUUsY0FMRjtBQU1qQkMsT0FBSyxFQUFFLDJDQU5VO0FBT2pCQyxlQUFhLEVBQUU7QUFQRSxDQUFyQixDLENBU0U7O0FBQ0YsSUFBSUMsT0FBSjs7QUFDQSxJQUFJO0FBQ0ZDLGtEQUFRLENBQUNDLGFBQVQsQ0FBdUJWLGNBQXZCO0FBQ0QsQ0FGRCxDQUVFLE9BQU9XLEtBQVAsRUFBYztBQUNkQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxPQUFsQjtBQUNEOztBQUNjTixzRUFBZixFLENBR0E7O0FBQ0EsSUFBTU8sT0FBTyxHQUFHO0FBQ2RDLE9BQUssRUFBQyxLQURRO0FBRWRDLFVBQVEsRUFBQyxlQUZLO0FBR2RDLE9BQUssRUFBQyxFQUhRO0FBSWQ7QUFDQUMsT0FBSyxFQUFDO0FBTFEsQ0FBaEIsQyxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFdBQVQsR0FBK0M7QUFBQSxNQUF6QkMsS0FBeUIsdUVBQWpCTixPQUFpQjtBQUFBLE1BQVJPLE1BQVE7O0FBQzVDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssYUFBTDtBQUNFLGFBQU9ELE1BQU0sQ0FBQ0UsS0FBZDs7QUFDRjtBQUNFLGFBQU9ILEtBQVA7QUFKSjtBQU1BLEMsQ0FFSDs7O0FBQ1MsU0FBU0ksU0FBVCxHQUFvQztBQUFBLE1BQWpCSixLQUFpQix1RUFBVE4sT0FBUztBQUN6QyxTQUFPVyx5REFBVyxDQUFDTixXQUFELEVBQWNDLEtBQWQsRUFDZk0sNkRBQWUsQ0FBQ0MsbURBQUQsQ0FEQSxDQUFsQjtBQUVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODc5ODA4MTY1NWNjODlkYzhhZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG4vL0ZpcmViYXNl44Gu5Yid5pyf5YyWXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEVDh2RTgtNG95ZmF1cEJSWkNyXzJnck5vaUlHZk1mSWdcIixcclxuICAgIGF1dGhEb21haW46IFwic3ViZXJvLXByb3RvdHlwZS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJzdWJlcm8tcHJvdG90eXBlXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInN1YmVyby1wcm90b3R5cGUuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjcyMDA4NzA0NDY2MFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo3MjAwODcwNDQ2NjA6d2ViOjM1YmY4ZGU5Y2MyMmUwZTBkM2YwNjFcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0zRjA2MThKREo5XCJcclxuICB9O1xyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxudmFyIGZpcmVhcHA7XHJcbnRyeSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWFwcDtcclxuXHJcblxyXG4vLyDjgrnjg4bjg7zjg4jjga7liJ3mnJ/lgKRcclxuY29uc3QgaW5pdGlhbCA9IHtcclxuICBsb2dpbjpmYWxzZSxcclxuICB1c2VybmFtZTpcIihjbGljayBoZXJlISlcIixcclxuICBlbWFpbDpcIlwiLFxyXG4gIC8vIGRhdGE6W10sXHJcbiAgaXRlbXM6W11cclxufVxyXG5cclxuLy8gLy8g44Os44OH44Ol44O844K144O8XHJcbi8vIGZ1bmN0aW9uIGNhbGNSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIC8v6KiI566X5a6f6KGMXHJcbi8vICAgICBjYXNlIFwiRU5URVJcIjpcclxuLy8gICAgICAgbGV0IGRhdGEyID0gc3RhdGUuZGF0YS5zbGljZSgpO1xyXG4vLyAgICAgICBsZXQgcyA9IGFjdGlvbi52YWx1ZTtcclxuLy8gICAgICAgZGF0YTIudW5zaGlmdChzKTtcclxuLy8gICAgICAgbGV0IG51bSA9IHMucmVwbGFjZSgvW14wLTldL2csXCJcIik7XHJcbi8vICAgICAgIGxldCBudW1iZXIyID0gc3RhdGUubnVtYmVyLnNsaWNlKCk7XHJcbi8vICAgICAgIG51bWJlcjIudW5zaGlmdChudW0pO1xyXG4vLyAgICAgICBsZXQgcmVzdWx0ID0gKHN0YXRlLnJlc3VsdCAqIDEpICsgKG51bSAqIDEpO1xyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIG1lc3NhZ2U6XCJFTlRFUlwiLFxyXG4vLyAgICAgICAgIGRhdGE6ZGF0YTIsXHJcbi8vICAgICAgICAgbnVtYmVyOm51bWJlcjIsXHJcbi8vICAgICAgICAgcmVzdWx0OnJlc3VsdFxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgICAvL+ODquOCu+ODg+ODiFxyXG4vLyAgICAgY2FzZSBcIlJFU0VUXCI6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgbWVzc2FnZTpcIlJFU0VUXCIsXHJcbi8vICAgICAgICAgZGF0YTpbXSxcclxuLy8gICAgICAgICBudW1iZXI6W10sXHJcbi8vICAgICAgICAgcmVzdWx0OltdXHJcbi8vICAgICAgIH07XHJcbi8vICAgIC8v44OH44OV44Kp44Or44OIXHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICByZXR1cm4gc3RhdGU7XHJcbi8vICAgfVxyXG4vLyB9XHJcbmZ1bmN0aW9uIGZpcmVSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xyXG4gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgY2FzZSBcIlVQREFURV9VU0VSXCI6XHJcbiAgICAgICByZXR1cm4gYWN0aW9uLnZhbHVlO1xyXG4gICAgIGRlZmF1bHQ6XHJcbiAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgIH1cclxuICB9XHJcblxyXG4vLyAgIC8vaW5pdFN0b3Jl6Zai5pWwXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZSA9IGluaXRpYWwpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShmaXJlUmVkdWNlciwgc3RhdGUsXHJcbiAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==