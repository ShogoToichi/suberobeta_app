webpackHotUpdate_N_E("pages/lesson_info/[lessonid]",{

/***/ "./components/LessonInfo.js":
/*!**********************************!*\
  !*** ./components/LessonInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonInfo.js",
    _s2 = $RefreshSig$();





function LessonInfo(props) {
  _s2();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      createrid = _useState[0],
      setCreaterid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonid = _useState2[0],
      setLessonid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      purchased = _useState3[0],
      setPurchased = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonname = _useState4[0],
      setLessonname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      place = _useState5[0],
      setPlace = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      time = _useState6[0],
      setTime = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState7[0],
      setPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessoncomment = _useState8[0],
      setLessoncomment = _useState8[1];

  var getFireData = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, router, lessondata, lessonid, lessonitems;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
              lessondata = [];
              lessonid = [];
              lessonitems = [];
              _context.next = 8;
              return db.collection("lessons").doc(router.query.lessonid).get().then(function (doc) {
                setCreaterid(doc.data().createrid);
                setLessonid(doc.id);
                setPurchased(doc.data().purchased);
                setLessonname(doc.data().lessonname);
                setPlace(doc.data().lessonplace);
                setTime(doc.data().lessontime);
                setPrice(doc.data().lessonprice);
                setLessoncomment(doc.data().lessontext); // let lessonid =    doc.id;
                // let createrid =   doc.data().createrid;
                // let name =  doc.data().lessonname;
                // let place = doc.data().lessonplace;
                // let time =  doc.data().lessontime;
                // let text =  doc.data().lessontext;
                // let price = doc.data().lessonprice;
                // let purchased = doc.data().purchased;
              });

            case 8:
              if (items == "no item") {
                getFireData();
              }

              return _context.abrupt("return", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
                  children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 9
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
                  children: lessonname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 9
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: price
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 9
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: place
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 9
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: time
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 9
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: lessoncomment
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 9
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 7
              }, _this));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
    }));

    return function getFireData() {
      return _ref.apply(this, arguments);
    };
  }();
}

_s2(LessonInfo, "pFUFapK17tw/vwDh8Zn5LZ7WunI=");

_c = LessonInfo;
/* harmony default export */ __webpack_exports__["default"] = (LessonInfo);

var _c;

$RefreshReg$(_c, "LessonInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwibGVzc29uZGF0YSIsImxlc3Nvbml0ZW1zIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJpZCIsImxlc3NvbnBsYWNlIiwibGVzc29udGltZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFbEJDLFNBRmtCO0FBQUEsTUFFUkMsWUFGUTs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdsQkcsUUFIa0I7QUFBQSxNQUdUQyxXQUhTOztBQUFBLG1CQUlPSixzREFBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSWxCSyxTQUprQjtBQUFBLE1BSVJDLFlBSlE7O0FBQUEsbUJBS1VOLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2xCTyxVQUxrQjtBQUFBLE1BS1BDLGFBTE87O0FBQUEsbUJBTUFSLHNEQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNbEJTLEtBTmtCO0FBQUEsTUFNWkMsUUFOWTs7QUFBQSxtQkFPRlYsc0RBQVEsQ0FBQyxFQUFELENBUE47QUFBQSxNQU9sQlcsSUFQa0I7QUFBQSxNQU9iQyxPQVBhOztBQUFBLG1CQVFBWixzREFBUSxDQUFDLEVBQUQsQ0FSUjtBQUFBLE1BUWxCYSxLQVJrQjtBQUFBLE1BUVpDLFFBUlk7O0FBQUEsbUJBU2dCZCxzREFBUSxDQUFDLEVBQUQsQ0FUeEI7QUFBQSxNQVNsQmUsYUFUa0I7QUFBQSxNQVNKQyxnQkFUSTs7QUFXekIsTUFBTUMsV0FBVztBQUFBOztBQUFBLHFWQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNYQyxnQkFEVyxHQUNOQyxnREFBUSxDQUFDQyxTQUFULEVBRE07QUFFWEMsb0JBRlcsR0FFRkMsNkRBQVMsRUFGUDtBQUdYQyx3QkFIVyxHQUdFLEVBSEY7QUFJWHBCLHNCQUpXLEdBSUEsRUFKQTtBQUtYcUIseUJBTFcsR0FLQyxFQUxEO0FBQUE7QUFBQSxxQkFNWE4sRUFBRSxDQUFDTyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJMLE1BQU0sQ0FBQ00sS0FBUCxDQUFheEIsUUFBMUMsRUFBb0R5QixHQUFwRCxHQUNMQyxJQURLLENBQ0EsVUFBU0gsR0FBVCxFQUFhO0FBQ2Z4Qiw0QkFBWSxDQUFDd0IsR0FBRyxDQUFDSSxJQUFKLEdBQVc3QixTQUFaLENBQVo7QUFDQUcsMkJBQVcsQ0FBQ3NCLEdBQUcsQ0FBQ0ssRUFBTCxDQUFYO0FBQ0F6Qiw0QkFBWSxDQUFDb0IsR0FBRyxDQUFDSSxJQUFKLEdBQVd6QixTQUFaLENBQVo7QUFDQUcsNkJBQWEsQ0FBQ2tCLEdBQUcsQ0FBQ0ksSUFBSixHQUFXdkIsVUFBWixDQUFiO0FBQ0FHLHdCQUFRLENBQUNnQixHQUFHLENBQUNJLElBQUosR0FBV0UsV0FBWixDQUFSO0FBQ0FwQix1QkFBTyxDQUFDYyxHQUFHLENBQUNJLElBQUosR0FBV0csVUFBWixDQUFQO0FBQ0FuQix3QkFBUSxDQUFDWSxHQUFHLENBQUNJLElBQUosR0FBV0ksV0FBWixDQUFSO0FBQ0FsQixnQ0FBZ0IsQ0FBQ1UsR0FBRyxDQUFDSSxJQUFKLEdBQVdLLFVBQVosQ0FBaEIsQ0FSZSxDQVVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxlQXBCSyxDQU5XOztBQUFBO0FBMkJqQixrQkFBR0MsS0FBSyxJQUFHLFNBQVgsRUFBcUI7QUFDbkJuQiwyQkFBVztBQUNaOztBQTdCZ0IsNERBZ0NmO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDRCQUFLVjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFBLDRCQUFJTTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsZUFJRTtBQUFBLDRCQUFJSjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFLRTtBQUFBLDRCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFNRTtBQUFBLDRCQUFJSTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhDZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGO0FBQUEsY0FFQU8scURBRkE7QUFBQTs7QUFBQSxvQkFBWEwsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjtBQTJDRDs7SUF0RFFuQixVOztLQUFBQSxVO0FBd0RNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLjZjNTVjMDgxMGE4NDI4MzE0YWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBMZXNzb25JbmZvIChwcm9wcyl7XHJcbiAgXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uaWQsc2V0TGVzc29uaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVyY2hhc2VkLHNldFB1cmNoYXNlZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zPVtdO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGRvYy5kYXRhKCkuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChkb2MuaWQpO1xyXG4gICAgICAgIHNldFB1cmNoYXNlZChkb2MuZGF0YSgpLnB1cmNoYXNlZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShkb2MuZGF0YSgpLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldFBsYWNlKGRvYy5kYXRhKCkubGVzc29ucGxhY2UpO1xyXG4gICAgICAgIHNldFRpbWUoZG9jLmRhdGEoKS5sZXNzb250aW1lKTtcclxuICAgICAgICBzZXRQcmljZShkb2MuZGF0YSgpLmxlc3NvbnByaWNlKTtcclxuICAgICAgICBzZXRMZXNzb25jb21tZW50KGRvYy5kYXRhKCkubGVzc29udGV4dCk7XHJcblxyXG4gICAgICAgIC8vIGxldCBsZXNzb25pZCA9ICAgIGRvYy5pZDtcclxuICAgICAgICAvLyBsZXQgY3JlYXRlcmlkID0gICBkb2MuZGF0YSgpLmNyZWF0ZXJpZDtcclxuICAgICAgICAvLyBsZXQgbmFtZSA9ICBkb2MuZGF0YSgpLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgLy8gbGV0IHBsYWNlID0gZG9jLmRhdGEoKS5sZXNzb25wbGFjZTtcclxuICAgICAgICAvLyBsZXQgdGltZSA9ICBkb2MuZGF0YSgpLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgLy8gbGV0IHRleHQgPSAgZG9jLmRhdGEoKS5sZXNzb250ZXh0O1xyXG4gICAgICAgIC8vIGxldCBwcmljZSA9IGRvYy5kYXRhKCkubGVzc29ucHJpY2U7XHJcbiAgICAgICAgLy8gbGV0IHB1cmNoYXNlZCA9IGRvYy5kYXRhKCkucHVyY2hhc2VkO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gICAgaWYoaXRlbXMgPT1cIm5vIGl0ZW1cIil7XHJcbiAgICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT7jg6zjg4Pjgrnjg7Pmg4XloLE8L2gxPlxyXG4gICAgICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAgICAgIDxwPntwcmljZX08L3A+XHJcbiAgICAgICAgPHA+e3BsYWNlfTwvcD5cclxuICAgICAgICA8cD57dGltZX08L3A+XHJcbiAgICAgICAgPHA+e2xlc3NvbmNvbW1lbnR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uSW5mbztcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=