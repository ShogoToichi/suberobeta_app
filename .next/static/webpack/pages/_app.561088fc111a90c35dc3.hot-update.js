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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWFwcCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJmaXJlYXBwcCIsImluaXRpYWwiLCJsb2dpbiIsInVzZXJuYW1lIiwiZW1haWwiLCJpbWFnZXVybCIsImZpcmVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsY0FBYyxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUseUNBRFM7QUFFakJDLFlBQVUsRUFBRSxrQ0FGSztBQUdqQkMsV0FBUyxFQUFFLGtCQUhNO0FBSWpCQyxlQUFhLEVBQUUsOEJBSkU7QUFLakJDLG1CQUFpQixFQUFFLGNBTEY7QUFNakJDLE9BQUssRUFBRSwyQ0FOVTtBQU9qQkMsZUFBYSxFQUFFO0FBUEUsQ0FBckIsQyxDQVNFOztBQUNGLElBQUlDLE9BQUo7O0FBQ0EsSUFBSTtBQUNGQyxrREFBUSxDQUFDQyxhQUFULENBQXVCVixjQUF2QjtBQUNELENBRkQsQ0FFRSxPQUFPVyxLQUFQLEVBQWM7QUFDZEMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csT0FBbEI7QUFDRDs7QUFDTSxJQUFNQyxRQUFRLEdBQUdQLE9BQWpCLEMsQ0FHUDs7QUFDQSxJQUFNUSxPQUFPLEdBQUc7QUFDZEMsT0FBSyxFQUFDLEtBRFE7QUFFZEMsVUFBUSxFQUFDLGVBRks7QUFHZEMsT0FBSyxFQUFDLEVBSFE7QUFJZEMsVUFBUSxFQUFSQTtBQUpjLENBQWhCLEMsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxXQUFULEdBQStDO0FBQUEsTUFBekJDLEtBQXlCLHVFQUFqQk4sT0FBaUI7QUFBQSxNQUFSTyxNQUFROztBQUM1QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPRCxNQUFNLENBQUNFLEtBQWQ7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBSko7QUFNQSxDLENBRUg7OztBQUNTLFNBQVNJLFNBQVQsR0FBb0M7QUFBQSxNQUFqQkosS0FBaUIsdUVBQVROLE9BQVM7QUFDekMsU0FBT1cseURBQVcsQ0FBQ04sV0FBRCxFQUFjQyxLQUFkLEVBQ2ZNLDZEQUFlLENBQUNDLG1EQUFELENBREEsQ0FBbEI7QUFFRDtBQUdNLElBQU1DLE9BQU8sR0FBR3JCLGdEQUFRLENBQUNxQixPQUFULEVBQWhCO0FBQ1FyQiwrR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2MTA4OGZjMTExYTkwYzM1ZGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuLy9GaXJlYmFzZeOBruWIneacn+WMllxyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFQ4dkU4LTRveWZhdXBCUlpDcl8yZ3JOb2lJR2ZNZklnXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInN1YmVyby1wcm90b3R5cGUuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwic3ViZXJvLXByb3RvdHlwZVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJzdWJlcm8tcHJvdG90eXBlLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3MjAwODcwNDQ2NjBcIixcclxuICAgIGFwcElkOiBcIjE6NzIwMDg3MDQ0NjYwOndlYjozNWJmOGRlOWNjMjJlMGUwZDNmMDYxXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctM0YwNjE4SkRKOVwiXHJcbiAgfTtcclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbnZhciBmaXJlYXBwO1xyXG50cnkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBmaXJlYXBwcCA9IGZpcmVhcHA7XHJcblxyXG5cclxuLy8g44K544OG44O844OI44Gu5Yid5pyf5YCkXHJcbmNvbnN0IGluaXRpYWwgPSB7XHJcbiAgbG9naW46ZmFsc2UsXHJcbiAgdXNlcm5hbWU6XCIoY2xpY2sgaGVyZSEpXCIsXHJcbiAgZW1haWw6XCJcIixcclxuICBpbWFnZXVybFxyXG59XHJcblxyXG4vLyAvLyDjg6zjg4fjg6Xjg7zjgrXjg7xcclxuLy8gZnVuY3Rpb24gY2FsY1JlZHVjZXIgKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XHJcbi8vICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgLy/oqIjnrpflrp/ooYxcclxuLy8gICAgIGNhc2UgXCJFTlRFUlwiOlxyXG4vLyAgICAgICBsZXQgZGF0YTIgPSBzdGF0ZS5kYXRhLnNsaWNlKCk7XHJcbi8vICAgICAgIGxldCBzID0gYWN0aW9uLnZhbHVlO1xyXG4vLyAgICAgICBkYXRhMi51bnNoaWZ0KHMpO1xyXG4vLyAgICAgICBsZXQgbnVtID0gcy5yZXBsYWNlKC9bXjAtOV0vZyxcIlwiKTtcclxuLy8gICAgICAgbGV0IG51bWJlcjIgPSBzdGF0ZS5udW1iZXIuc2xpY2UoKTtcclxuLy8gICAgICAgbnVtYmVyMi51bnNoaWZ0KG51bSk7XHJcbi8vICAgICAgIGxldCByZXN1bHQgPSAoc3RhdGUucmVzdWx0ICogMSkgKyAobnVtICogMSk7XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgbWVzc2FnZTpcIkVOVEVSXCIsXHJcbi8vICAgICAgICAgZGF0YTpkYXRhMixcclxuLy8gICAgICAgICBudW1iZXI6bnVtYmVyMixcclxuLy8gICAgICAgICByZXN1bHQ6cmVzdWx0XHJcbi8vICAgICAgIH07XHJcbi8vICAgICAgIC8v44Oq44K744OD44OIXHJcbi8vICAgICBjYXNlIFwiUkVTRVRcIjpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBtZXNzYWdlOlwiUkVTRVRcIixcclxuLy8gICAgICAgICBkYXRhOltdLFxyXG4vLyAgICAgICAgIG51bWJlcjpbXSxcclxuLy8gICAgICAgICByZXN1bHQ6W11cclxuLy8gICAgICAgfTtcclxuLy8gICAgLy/jg4fjg5Xjgqnjg6vjg4hcclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICB9XHJcbi8vIH1cclxuZnVuY3Rpb24gZmlyZVJlZHVjZXIgKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XHJcbiAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICBjYXNlIFwiVVBEQVRFX1VTRVJcIjpcclxuICAgICAgIHJldHVybiBhY3Rpb24udmFsdWU7XHJcbiAgICAgZGVmYXVsdDpcclxuICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgfVxyXG4gIH1cclxuXHJcbi8vICAgLy9pbml0U3RvcmXplqLmlbBcclxuICBleHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGZpcmVSZWR1Y2VyLCBzdGF0ZSxcclxuICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxyXG4gIH1cclxuICBcclxuXHJcbiAgZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==