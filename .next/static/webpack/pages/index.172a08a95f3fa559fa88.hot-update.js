webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Fire.js":
/*!****************************!*\
  !*** ./components/Fire.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fire; });
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lesson */ "./components/Lesson.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\Fire.js",
    _s = $RefreshSig$();

//Firebase関連をいろいろ試すために使ってたファイル
//


 //export default function Fire(){
//  const firetest =async()=>{
//    const db=firebase.firestore();
//    await db.collection("users").doc("toichi*gmail*com").get().then((doc)=>{
//      console.log("Data:",doc.data());
//    });
//    console.log("fire");
//  }
//  return(
//    <button onClick={firetest}>fire</button>
//  );
//}

function Fire() {
  _s();

  var _this = this;

  var data = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Lesson__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lessonid: "8"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 15
  }, this)];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      items = _useState[0],
      setItems = _useState[1];

  var lessonids = [1, 2, 3, 4];

  var firetest = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, id;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              lessondata = [];
              _context.next = 4;
              return db.collection("lessons").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  lessondata.unshift(doc.data());
                });
                console.log(lessondata[0].lessonname);
              });

            case 4:
              id = lessonids;
              id.push(5);
              setItems([1, 2, 3, 4, 5]);
              console.log(items); // const new_data = <Lesson lessonid="9" name="beginner lesson" place="saitama uni" time="one hour" text="let's enjoy snowboard with me!" price="2000yen"/>

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function firetest() {
      return _ref.apply(this, arguments);
    };
  }(); // data.push(new_data);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      onClick: firetest,
      children: "fire"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 12
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), items.map(function (lessonid) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Lesson__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: lessonid
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Fire, "18HaVn6LFmR0D+xZ0rWm1yUGNaE=");

_c = Fire;

var _c;

$RefreshReg$(_c, "Fire");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJlLmpzIl0sIm5hbWVzIjpbIkZpcmUiLCJkYXRhIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVzc29uaWRzIiwiZmlyZXRlc3QiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJ1bnNoaWZ0IiwiY29uc29sZSIsImxvZyIsImxlc3Nvbm5hbWUiLCJpZCIsInB1c2giLCJtYXAiLCJsZXNzb25pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNBLElBQVQsR0FBZTtBQUFBOztBQUFBOztBQUM1QixNQUFJQyxJQUFJLEdBQUcsY0FBQyxxRUFBQywrQ0FBRDtBQUFRLFlBQVEsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUQsQ0FBWDs7QUFENEIsa0JBRUhDLHNEQUFRLENBQUMsQ0FBRCxDQUZMO0FBQUEsTUFFckJDLEtBRnFCO0FBQUEsTUFFZkMsUUFGZTs7QUFHNUIsTUFBTUMsU0FBUyxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFsQjs7QUFFQSxNQUFNQyxRQUFRO0FBQUEsa1ZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLGdCQURRLEdBQ0xDLGdEQUFRLENBQUNDLFNBQVQsRUFESztBQUVSQyx3QkFGUSxHQUVLLEVBRkw7QUFBQTtBQUFBLHFCQUdSSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixHQUErQkMsSUFBL0IsQ0FBb0MsVUFBU0MsYUFBVCxFQUF1QjtBQUMvREEsNkJBQWEsQ0FBQ0MsT0FBZCxDQUFzQixVQUFTQyxHQUFULEVBQWE7QUFDakNOLDRCQUFVLENBQUNPLE9BQVgsQ0FBbUJELEdBQUcsQ0FBQ2YsSUFBSixFQUFuQjtBQUNELGlCQUZEO0FBR0FpQix1QkFBTyxDQUFDQyxHQUFSLENBQVlULFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1UsVUFBMUI7QUFDRCxlQUxLLENBSFE7O0FBQUE7QUFTUkMsZ0JBVFEsR0FTSGhCLFNBVEc7QUFVZGdCLGdCQUFFLENBQUNDLElBQUgsQ0FBUSxDQUFSO0FBQ0FsQixzQkFBUSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBRCxDQUFSO0FBQ0FjLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQVosRUFaYyxDQWFoQjs7QUFiZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBUkcsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBTDRCLENBb0I5Qjs7O0FBRUUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRUEsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsNkJBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR0gsS0FBSyxDQUFDb0IsR0FBTixDQUFVLFVBQUNDLFFBQUQsRUFBWTtBQUNyQiwwQkFBTyxxRUFBQywrQ0FBRDtBQUFRLFlBQUksRUFBRUE7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZBLENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0EvQnVCeEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNzJhMDhhOTVmM2ZhNTU5ZmE4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9GaXJlYmFzZemWoumAo+OCkuOBhOOCjeOBhOOCjeippuOBmeOBn+OCgeOBq+S9v+OBo+OBpuOBn+ODleOCoeOCpOODq1xyXG4vL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlKCl7XHJcbi8vICBjb25zdCBmaXJldGVzdCA9YXN5bmMoKT0+e1xyXG4vLyAgICBjb25zdCBkYj1maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuLy8gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhcInRvaWNoaSpnbWFpbCpjb21cIikuZ2V0KCkudGhlbigoZG9jKT0+e1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKFwiRGF0YTpcIixkb2MuZGF0YSgpKTtcclxuLy8gICAgfSk7XHJcbi8vICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKTtcclxuLy8gIH1cclxuLy8gIHJldHVybihcclxuLy8gICAgPGJ1dHRvbiBvbkNsaWNrPXtmaXJldGVzdH0+ZmlyZTwvYnV0dG9uPlxyXG4vLyAgKTtcclxuLy99XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZSgpe1xyXG4gIGxldCBkYXRhID0gWzxMZXNzb24gbGVzc29uaWQ9XCI4XCIvPl1cclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoMCk7ICBcclxuICBjb25zdCBsZXNzb25pZHMgPSBbMSwyLDMsNF07XHJcbiAgXHJcbiAgY29uc3QgZmlyZXRlc3QgPWFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiPWZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZ2V0KCkudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgbGVzc29uZGF0YS51bnNoaWZ0KGRvYy5kYXRhKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cobGVzc29uZGF0YVswXS5sZXNzb25uYW1lKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaWQgPSBsZXNzb25pZHM7XHJcbiAgICBpZC5wdXNoKDUpO1xyXG4gICAgc2V0SXRlbXMoWzEsMiwzLDQsNV0pO1xyXG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG4gIC8vIGNvbnN0IG5ld19kYXRhID0gPExlc3NvbiBsZXNzb25pZD1cIjlcIiBuYW1lPVwiYmVnaW5uZXIgbGVzc29uXCIgcGxhY2U9XCJzYWl0YW1hIHVuaVwiIHRpbWU9XCJvbmUgaG91clwiIHRleHQ9XCJsZXQncyBlbmpveSBzbm93Ym9hcmQgd2l0aCBtZSFcIiBwcmljZT1cIjIwMDB5ZW5cIi8+XHJcbn1cclxuLy8gZGF0YS5wdXNoKG5ld19kYXRhKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaXJldGVzdH0+ZmlyZTwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PjxwPmhlbGxvPC9wPjwvZGl2PlxyXG4gICAgICB7aXRlbXMubWFwKChsZXNzb25pZCk9PntcclxuICAgICAgICByZXR1cm4gPExlc3NvbiBuYW1lPXtsZXNzb25pZH0vPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==