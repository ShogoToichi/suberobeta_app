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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      profileusername = _useState9[0],
      setProfileusername = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      profileintroduction = _useState10[0],
      setProfileintroduction = _useState10[1];

  var getLessonData = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, router;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
              _context.next = 5;
              return db.collection("lessons").doc(router.query.lessonid).get().then(function (doc) {
                var lessondata = doc.data();
                var lessonid = doc.id;
                setCreaterid(lessondata.createrid);
                setLessonid(lessonid);
                setPurchased(lessondata.purchased);
                setLessonname(lessondata.lessonname);
                setPlace(lessondata.lessonplace);
                setTime(lessondata.lessontime);
                setPrice(lessondata.lessonprice);
                setLessoncomment(lessondata.lessontext);
                console.log(router.query.lessonid, " : ", doc.id, " : ", doc.data());
              });

            case 5:
              _context.next = 7;
              return db.collection("users").doc(createrid).get().then(function (doc) {
                var userdata = doc.data();
                setProfileusername(userdata.name);
                setProfileintroduction(userdata.introduction);
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
    }));

    return function getLessonData() {
      return _ref.apply(this, arguments);
    };
  }();

  var getProfileData = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getProfileData() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (lessonid == "") {
    getLessonData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
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
      children: ["\u6599\u91D1 : ", price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u5834\u6240 : ", place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6642\u9593 : ", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u8A73\u7D30 : ", lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Profile, {
      title: "\u30E6\u30FC\u30B6\u30FC\u60C5\u5831",
      username: profileusername,
      id: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }, this);
}

_s2(LessonInfo, "yzmJ4fkcWaNwUA92IKXv127OZHk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwicHJvZmlsZWludHJvZHVjdGlvbiIsInNldFByb2ZpbGVpbnRyb2R1Y3Rpb24iLCJnZXRMZXNzb25EYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZXJkYXRhIiwibmFtZSIsImludHJvZHVjdGlvbiIsImdldFByb2ZpbGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFbEJDLFNBRmtCO0FBQUEsTUFFUkMsWUFGUTs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdsQkcsUUFIa0I7QUFBQSxNQUdUQyxXQUhTOztBQUFBLG1CQUlPSixzREFBUSxDQUFD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QUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQSxvQkFBZEEsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFJRSxNQUFHekMsUUFBUSxJQUFHLEVBQWQsRUFBaUI7QUFDZmtCLGlCQUFhO0FBQ2Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS2Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLG9DQUFTTSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQSxvQ0FBU0osS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUEsb0NBQVNFLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBLG9DQUFTSSxhQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsT0FBRDtBQUFTLFdBQUssRUFBQyxzQ0FBZjtBQUF3QixjQUFRLEVBQUVFLGVBQWxDO0FBQW1ELFFBQUU7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUg7O0lBM0RRbkIsVTs7S0FBQUEsVTtBQTZETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2luZm8vW2xlc3NvbmlkXS5mMTdlMjBkMDgzYzgyOTk3MjcyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBMZXNzb25JbmZvIChwcm9wcyl7XHJcbiAgXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uaWQsc2V0TGVzc29uaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVyY2hhc2VkLHNldFB1cmNoYXNlZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGV1c2VybmFtZSxzZXRQcm9maWxldXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGVpbnRyb2R1Y3Rpb24sc2V0UHJvZmlsZWludHJvZHVjdGlvbl09dXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICBjb25zdCBnZXRMZXNzb25EYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBjb25zdCBsZXNzb25pZCA9IGRvYy5pZDtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3NvbmlkKGxlc3NvbmlkKTtcclxuICAgICAgICBzZXRQdXJjaGFzZWQobGVzc29uZGF0YS5wdXJjaGFzZWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRQbGFjZShsZXNzb25kYXRhLmxlc3NvbnBsYWNlKTtcclxuICAgICAgICBzZXRUaW1lKGxlc3NvbmRhdGEubGVzc29udGltZSk7XHJcbiAgICAgICAgc2V0UHJpY2UobGVzc29uZGF0YS5sZXNzb25wcmljZSk7XHJcbiAgICAgICAgc2V0TGVzc29uY29tbWVudChsZXNzb25kYXRhLmxlc3NvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5sZXNzb25pZCxcIiA6IFwiLGRvYy5pZCAsXCIgOiBcIixkb2MuZGF0YSgpKTtcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjcmVhdGVyaWQpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCB1c2VyZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIHNldFByb2ZpbGV1c2VybmFtZSh1c2VyZGF0YS5uYW1lKTtcclxuICAgICAgc2V0UHJvZmlsZWludHJvZHVjdGlvbih1c2VyZGF0YS5pbnRyb2R1Y3Rpb24pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UHJvZmlsZURhdGE9YXN5bmMoKT0+e1xyXG5cclxuICB9XHJcblxyXG4gICAgaWYobGVzc29uaWQgPT1cIlwiKXtcclxuICAgICAgZ2V0TGVzc29uRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+44Os44OD44K544Oz5oOF5aCxPC9oMT5cclxuICAgICAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgICAgICA8cD7mlpnph5EgOiB7cHJpY2V9PC9wPlxyXG4gICAgICAgIDxwPuWgtOaJgCA6IHtwbGFjZX08L3A+XHJcbiAgICAgICAgPHA+5pmC6ZaTIDoge3RpbWV9PC9wPlxyXG4gICAgICAgIDxwPuips+e0sCA6IHtsZXNzb25jb21tZW50fTwvcD5cclxuICAgICAgICA8UHJvZmlsZSB0aXRsZT1cIuODpuODvOOCtuODvOaDheWgsVwiIHVzZXJuYW1lPXtwcm9maWxldXNlcm5hbWV9IGlkLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3NvbkluZm87XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9