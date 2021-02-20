webpackHotUpdate_N_E("pages/lesson_info/[lessonid]",{

/***/ "./components/LessonInfo.js":
/*!**********************************!*\
  !*** ./components/LessonInfo.js ***!
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonInfo.js",
    _s2 = $RefreshSig$();





function LessonInfo(props) {
  _s2();

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

    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, router;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // const lessonid = router.query.lessonid;

              _context.next = 5;
              return db.collection("lessons").doc(router.query.lessonid).get().then(function (doc) {
                var lesson_data = doc.data();
                var lesson_id = doc.id;
                setCreaterid(lessondata.createrid);
                setLessonid(lessonid);
                setPurchased(lessondata.purchased);
                setLessonname(lessondata.lessonname);
                setPlace(lessondata.lessonplace);
                setTime(lessondata.lessontime);
                setPrice(lesson.lessonprice);
                setLessoncomment(lessondata.lessontext);
                console.log(router.query.lessonid, " : ", doc.id, " : ", doc.data()); // let lessonid =    doc.id;
                // let createrid =   doc.data().createrid;
                // let name =  doc.data().lessonname;
                // let place = doc.data().lessonplace;
                // let time =  doc.data().lessontime;
                // let text =  doc.data().lessontext;
                // let price = doc.data().lessonprice;
                // let purchased = doc.data().purchased;
              });

            case 5:
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

  if (lessonid == "") {
    getFireData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])().query.lessonid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: place
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: lessoncomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 7
  }, this);
}

_s2(LessonInfo, "xPIGbqX/B/KXhb/+oUMabRveXqw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsImxlc3Nvbl9kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29uZGF0YSIsImxlc3NvbnBsYWNlIiwibGVzc29udGltZSIsImxlc3NvbiIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVsQkMsU0FGa0I7QUFBQSxNQUVSQyxZQUZROztBQUFBLG1CQUdLRixzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR2xCRyxRQUhrQjtBQUFBLE1BR1RDLFdBSFM7O0FBQUEsbUJBSU9KLHNEQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJbEJLLFNBSmtCO0FBQUEsTUFJUkMsWUFKUTs7QUFBQSxtQkFLVU4sc0RBQVEsQ0FBQyxFQUFELENBTGxCO0FBQUEsTUFLbEJPLFVBTGtCO0FBQUEs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c3Nvbl9pbmZvL1tsZXNzb25pZF0uZTQxNDBkMjQ4MjRiOGE2ZDlhNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIExlc3NvbkluZm8gKHByb3BzKXtcclxuICBcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25pZCxzZXRMZXNzb25pZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdXJjaGFzZWQsc2V0UHVyY2hhc2VkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAvLyBjb25zdCBsZXNzb25pZCA9IHJvdXRlci5xdWVyeS5sZXNzb25pZDtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25fZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGNvbnN0IGxlc3Nvbl9pZCA9IGRvYy5pZDtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3NvbmlkKGxlc3NvbmlkKTtcclxuICAgICAgICBzZXRQdXJjaGFzZWQobGVzc29uZGF0YS5wdXJjaGFzZWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRQbGFjZShsZXNzb25kYXRhLmxlc3NvbnBsYWNlKTtcclxuICAgICAgICBzZXRUaW1lKGxlc3NvbmRhdGEubGVzc29udGltZSk7XHJcbiAgICAgICAgc2V0UHJpY2UobGVzc29uLmxlc3NvbnByaWNlKTtcclxuICAgICAgICBzZXRMZXNzb25jb21tZW50KGxlc3NvbmRhdGEubGVzc29udGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkLFwiIDogXCIsZG9jLmlkICxcIiA6IFwiLGRvYy5kYXRhKCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGxlc3NvbmlkID0gICAgZG9jLmlkO1xyXG4gICAgICAgIC8vIGxldCBjcmVhdGVyaWQgPSAgIGRvYy5kYXRhKCkuY3JlYXRlcmlkO1xyXG4gICAgICAgIC8vIGxldCBuYW1lID0gIGRvYy5kYXRhKCkubGVzc29ubmFtZTtcclxuICAgICAgICAvLyBsZXQgcGxhY2UgPSBkb2MuZGF0YSgpLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgIC8vIGxldCB0aW1lID0gIGRvYy5kYXRhKCkubGVzc29udGltZTtcclxuICAgICAgICAvLyBsZXQgdGV4dCA9ICBkb2MuZGF0YSgpLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgLy8gbGV0IHByaWNlID0gZG9jLmRhdGEoKS5sZXNzb25wcmljZTtcclxuICAgICAgICAvLyBsZXQgcHVyY2hhc2VkID0gZG9jLmRhdGEoKS5wdXJjaGFzZWQ7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICAgaWYobGVzc29uaWQgPT1cIlwiKXtcclxuICAgICAgZ2V0RmlyZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPuODrOODg+OCueODs+aDheWgsTwvaDE+XHJcbiAgICAgICAgPHA+e3VzZVJvdXRlcigpLnF1ZXJ5Lmxlc3NvbmlkfTwvcD5cclxuICAgICAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgICAgICA8cD57cHJpY2V9PC9wPlxyXG4gICAgICAgIDxwPntwbGFjZX08L3A+XHJcbiAgICAgICAgPHA+e3RpbWV9PC9wPlxyXG4gICAgICAgIDxwPntsZXNzb25jb21tZW50fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3NvbkluZm87XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9