webpackHotUpdate_N_E("pages/lesson_list",{

/***/ "./components/LessonList.js":
/*!**********************************!*\
  !*** ./components/LessonList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lesson */ "./components/Lesson.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonList.js";







function LessonList(props) {
  // constructor(props){
  //   super(props);
  //   this.getFireData=this.getFireData.bind(this);
  //   this.data = [];
  // }
  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].database();
              _context.next = 3;
              return db.collection("lessons").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  constdata.unshift(doc.data);
                  console.log(this.data);
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getFireData() {
      return _ref.apply(this, arguments);
    };
  }(); // getItem(lessondata){
  //     if(lessondata ===undefined){return;}
  //     let res = [];
  //     for (let i in lessondata){
  //         let id = lessondata[i]["lessonid"]
  //         let name =lessondata[i]["lessonname"];
  //         let place = lessondata[i]["lessonplace"]
  //         let time = lessondata[i]["lessontime"]
  //         let text = lessondata[i]["lessontext"]
  //         res.push(
  //           <Lesson lessonid={id}
  //                   name={name}
  //                   place={place}
  //                   time={time}
  //                   text={text}
  //           />
  //         );
  //         break;
  //       }
  //       return res;
  //     }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\u30EC\u30C3\u30B9\u30F3\u4E00\u89A7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: getFireData,
      children: "\u8AAD\u307F\u8FBC\u307F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
} //LessonList = connect((state)=>state)(LessonList);


_c = LessonList;
/* harmony default export */ __webpack_exports__["default"] = (LessonList);

var _c;

$RefreshReg$(_c, "LessonList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbIkxlc3Nvbkxpc3QiLCJwcm9wcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImNvbnN0ZGF0YSIsInVuc2hpZnQiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxVQUFULENBQXFCQyxLQUFyQixFQUEyQjtBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUMsV0FBVztBQUFBLGtWQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyxnQkFEYSxHQUNSQyxnREFBUSxDQUFDQyxRQUFULEVBRFE7QUFBQTtBQUFBLHFCQUViRixFQUFFLENBQUNHLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixHQUErQkMsSUFBL0IsQ0FBb0MsVUFBU0MsYUFBVCxFQUF1QjtBQUMvREEsNkJBQWEsQ0FBQ0MsT0FBZCxDQUFzQixVQUFTQyxHQUFULEVBQWE7QUFDakNDLDJCQUFTLENBQUNDLE9BQVYsQ0FBa0JGLEdBQUcsQ0FBQ0csSUFBdEI7QUFDQUMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtGLElBQWpCO0FBQ0QsaUJBSEQ7QUFJRCxlQUxLLENBRmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBWFosV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQixDQVR5QixDQXFCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDUSxzQkFDQTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGFBQU8sRUFBSUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQU9QLEMsQ0FFRDs7O0tBcERTRixVO0FBcURNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fbGlzdC40OTk0MWY5YmE3NmRlMWI2OWJhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExlc3Nvbkxpc3QgKHByb3BzKXtcclxuXHJcbiAgLy8gY29uc3RydWN0b3IocHJvcHMpe1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vICAgdGhpcy5nZXRGaXJlRGF0YT10aGlzLmdldEZpcmVEYXRhLmJpbmQodGhpcyk7XHJcbiAgLy8gICB0aGlzLmRhdGEgPSBbXTtcclxuICAvLyB9XHJcblxyXG5cclxuICBjb25zdCBnZXRGaXJlRGF0YT0gYXN5bmMoKT0+e1xyXG4gIGNvbnN0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UgKCk7XHJcbiAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZ2V0KCkudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdGRhdGEudW5zaGlmdChkb2MuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4vLyBnZXRJdGVtKGxlc3NvbmRhdGEpe1xyXG4vLyAgICAgaWYobGVzc29uZGF0YSA9PT11bmRlZmluZWQpe3JldHVybjt9XHJcbi8vICAgICBsZXQgcmVzID0gW107XHJcbi8vICAgICBmb3IgKGxldCBpIGluIGxlc3NvbmRhdGEpe1xyXG4vLyAgICAgICAgIGxldCBpZCA9IGxlc3NvbmRhdGFbaV1bXCJsZXNzb25pZFwiXVxyXG4vLyAgICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldW1wibGVzc29ubmFtZVwiXTtcclxuLy8gICAgICAgICBsZXQgcGxhY2UgPSBsZXNzb25kYXRhW2ldW1wibGVzc29ucGxhY2VcIl1cclxuLy8gICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV1bXCJsZXNzb250aW1lXCJdXHJcbi8vICAgICAgICAgbGV0IHRleHQgPSBsZXNzb25kYXRhW2ldW1wibGVzc29udGV4dFwiXVxyXG5cclxuLy8gICAgICAgICByZXMucHVzaChcclxuLy8gICAgICAgICAgIDxMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4vLyAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbi8vICAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbi8vICAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmV0dXJuIHJlcztcclxuLy8gICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj7jg6zjg4Pjgrnjg7PkuIDopqc8L2gyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2dldEZpcmVEYXRhfT7oqq3jgb/ovrzjgb88L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICBcclxufVxyXG5cclxuLy9MZXNzb25MaXN0ID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTGVzc29uTGlzdCk7XHJcbmV4cG9ydCBkZWZhdWx0IExlc3Nvbkxpc3Q7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9