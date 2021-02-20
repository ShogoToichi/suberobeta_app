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
      var db, router, lessonid;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
              lessonid = router.query.lessonid;
              _context.next = 6;
              return db.collection("lessons").doc(lessonid).get().then(function (doc) {
                var lesson_data = doc.data();
                var lesson_id = doc.id; // setCreaterid(lessondata.createrid);
                // setLessonid(lessonid);
                // setPurchased(lessondata.purchased);
                // setLessonname(lessondata.lessonname);
                // setPlace(lessondata.lessonplace);
                // setTime(lessondata.lessontime);
                // setPrice(lesson.lessonprice);
                // setLessoncomment(lessondata.lessontext);

                console.log(doc.data()); // let lessonid =    doc.id;
                // let createrid =   doc.data().createrid;
                // let name =  doc.data().lessonname;
                // let place = doc.data().lessonplace;
                // let time =  doc.data().lessontime;
                // let text =  doc.data().lessontext;
                // let price = doc.data().lessonprice;
                // let purchased = doc.data().purchased;
              });

            case 6:
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: place
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: lessoncomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 7
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImxlc3Nvbl9kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQXFCQyxLQUFyQixFQUEyQjtBQUFBOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWxCQyxTQUZrQjtBQUFBLE1BRVJDLFlBRlE7O0FBQUEsbUJBR0tGLHNEQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHbEJHLFFBSGtCO0FBQUEsTUFHVEMsV0FIUzs7QUFBQSxtQkFJT0osc0RBQVEsQ0FBQyxFQUFELENBSmY7QUFBQSxNQUlsQkssU0FKa0I7QUFBQSxNQUlSQyxZQUpROztBQUFBLG1CQUtVTixzREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQSxNQUtsQk8sVUFMa0I7QUFBQSxNQUtQQyxhQUxPOztBQUFBLG1CQU1BUixzREFBUSxDQUFDLEVBQUQsQ0FOUjtBQUFBLE1BTWxCUyxLQU5rQjtBQUFBLE1BTVpDLFFBTlk7O0FBQUEsbUJBT0ZWLHNEQUFRLENBQUMsRUFBRCxDQVBOO0FBQUEsTUFPbEJXLElBUGtCO0FBQUEsTUFPYkMsT0FQYTs7QUFBQSxtQkFRQVosc0RBQVEsQ0FBQyxFQUFELENBUlI7QUFBQSxNQVFsQmEsS0FSa0I7QUFBQSxNQVFaQyxRQVJZOztBQUFBLG1CQVNnQmQsc0RBQVEsQ0FBQyxFQUFELENBVHhCO0FBQUEsTUFTbEJlLGFBVGtCO0FBQUEsTUFTSkMsZ0JBVEk7O0FBV3pCLE1BQU1DLFdBQVc7QUFBQTs7QUFBQSxxVkFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDWEMsZ0JBRFcsR0FDTkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURNO0FBRVhDLG9CQUZXLEdBRUZDLDZEQUFTLEVBRlA7QUFHWG5CLHNCQUhXLEdBR0FrQixNQUFNLENBQUNFLEtBQVAsQ0FBYXBCLFFBSGI7QUFBQTtBQUFBLHFCQUlYZSxFQUFFLENBQUNNLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixDQUE2QnRCLFFBQTdCLEVBQXVDdUIsR0FBdkMsR0FDTEMsSUFESyxDQUNBLFVBQVNGLEdBQVQsRUFBYTtBQUNqQixvQkFBTUcsV0FBVyxHQUFHSCxHQUFHLENBQUNJLElBQUosRUFBcEI7QUFDQSxvQkFBTUMsU0FBUyxHQUFHTCxHQUFHLENBQUNNLEVBQXRCLENBRmlCLENBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixHQUFHLENBQUNJLElBQUosRUFBWixFQVhlLENBY2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILGVBeEJLLENBSlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjtBQUFBLGNBRUFQLHFEQUZBO0FBQUE7O0FBQUEsb0JBQVhMLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBOEJFLE1BQUdkLFFBQVEsSUFBRyxFQUFkLEVBQWlCO0FBQ2ZjLGVBQVc7QUFDWjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFLVjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUlNO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQSxnQkFBSUo7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLGdCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsZ0JBQUlJO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0g7O0lBeERRakIsVTs7S0FBQUEsVTtBQTBETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2luZm8vW2xlc3NvbmlkXS4yYTBhNTNiYTNjN2I0MjU0MTJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGVzc29uSW5mbyAocHJvcHMpe1xyXG4gIFxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmlkLHNldExlc3NvbmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1cmNoYXNlZCxzZXRQdXJjaGFzZWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBnZXRGaXJlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGxlc3NvbmlkID0gcm91dGVyLnF1ZXJ5Lmxlc3NvbmlkO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKGxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uX2RhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBjb25zdCBsZXNzb25faWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgLy8gc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICAvLyBzZXRMZXNzb25pZChsZXNzb25pZCk7XHJcbiAgICAgICAgLy8gc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICAvLyBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgLy8gc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgLy8gc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIC8vIHNldFByaWNlKGxlc3Nvbi5sZXNzb25wcmljZSk7XHJcbiAgICAgICAgLy8gc2V0TGVzc29uY29tbWVudChsZXNzb25kYXRhLmxlc3NvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGxlc3NvbmlkID0gICAgZG9jLmlkO1xyXG4gICAgICAgIC8vIGxldCBjcmVhdGVyaWQgPSAgIGRvYy5kYXRhKCkuY3JlYXRlcmlkO1xyXG4gICAgICAgIC8vIGxldCBuYW1lID0gIGRvYy5kYXRhKCkubGVzc29ubmFtZTtcclxuICAgICAgICAvLyBsZXQgcGxhY2UgPSBkb2MuZGF0YSgpLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgIC8vIGxldCB0aW1lID0gIGRvYy5kYXRhKCkubGVzc29udGltZTtcclxuICAgICAgICAvLyBsZXQgdGV4dCA9ICBkb2MuZGF0YSgpLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgLy8gbGV0IHByaWNlID0gZG9jLmRhdGEoKS5sZXNzb25wcmljZTtcclxuICAgICAgICAvLyBsZXQgcHVyY2hhc2VkID0gZG9jLmRhdGEoKS5wdXJjaGFzZWQ7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICAgaWYobGVzc29uaWQgPT1cIlwiKXtcclxuICAgICAgZ2V0RmlyZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPuODrOODg+OCueODs+aDheWgsTwvaDE+XHJcbiAgICAgICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICAgICAgPHA+e3ByaWNlfTwvcD5cclxuICAgICAgICA8cD57cGxhY2V9PC9wPlxyXG4gICAgICAgIDxwPnt0aW1lfTwvcD5cclxuICAgICAgICA8cD57bGVzc29uY29tbWVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==