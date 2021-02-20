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
      introduction: Profi
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwicHJvZmlsZWludHJvZHVjdGlvbiIsInNldFByb2ZpbGVpbnRyb2R1Y3Rpb24iLCJnZXRMZXNzb25EYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZXJkYXRhIiwibmFtZSIsImludHJvZHVjdGlvbiIsImdldFByb2ZpbGVEYXRhIiwiUHJvZmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVsQkMsU0FGa0I7QUFBQSxNQUVSQyxZQUZROztBQUFBLG1CQUdLRixzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR2xCRyxRQUhrQjtBQUFBLE1BR1RDLFdBSFM7O0FBQUEsbUJBSU9KLHNEQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJbEJLLFNBSmtCO0FBQUEsTUFJUkMsWUFKUTs7QUFBQSxtQkFLVU4sc0RBQVEsQ0FBQyxFQUFELENBTGxCO0FBQUEsTUFLbEJPLFVBTGtCO0FBQUEsTUFLUEMsYUFMTzs7QUFBQSxtQkFNQVIsc0RBQVEsQ0FBQyxFQUFELENBTlI7QUFBQSxNQU1sQlMsS0FOa0I7QUFBQSxNQU1aQyxRQU5ZOztBQUFBLG1CQU9GVixzREFBUSxDQUFDLEVBQUQsQ0FQTjtBQUFBLE1BT2xCVyxJQVBrQjtBQUFBLE1BT2JDLE9BUGE7O0FBQUEsbUJBUUFaLHNEQUFRLENBQUMsRUFBRCxDQVJSO0FBQUEsTUFRbEJhLEtBUmtCO0FBQUEsTUFRWkMsUUFSWTs7QUFBQSxtQkFTZ0JkLHNEQUFRLENBQUMsRUFBRCxDQVR4QjtBQUFBLE1BU2xCZSxhQVRrQjtBQUFBLE1BU0pDLGdCQVRJOztBQUFBLG1CQVVvQmhCLHNEQUFRLENBQUMsRUFBRCxDQVY1QjtBQUFBLE1BVWxCaUIsZUFWa0I7QUFBQSxNQVVGQyxrQkFWRTs7QUFBQSxvQkFXMEJsQixzREFBUSxDQUFDLEVBQUQsQ0FYbEM7QUFBQSxNQVdsQm1CLG1CQVhrQjtBQUFBLE1BV0VDLHNCQVhGOztBQWN6QixNQUFNQyxhQUFhO0FBQUE7O0FBQUEscVZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ2JDLGdCQURhLEdBQ1JDLGdEQUFRLENBQUNDLFNBQVQsRUFEUTtBQUViQyxvQkFGYSxHQUVKQyw2REFBUyxFQUZMO0FBQUE7QUFBQSxxQkFHYkosRUFBRSxDQUFDSyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhMUIsUUFBMUMsRUFBb0QyQixHQUFwRCxHQUNMQyxJQURLLENBQ0EsVUFBU0gsR0FBVCxFQUFhO0FBQ2pCLG9CQUFNSSxVQUFVLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSixFQUFuQjtBQUNBLG9CQUFNOUIsUUFBUSxHQUFHeUIsR0FBRyxDQUFDTSxFQUFyQjtBQUNFaEMsNEJBQVksQ0FBQzhCLFVBQVUsQ0FBQy9CLFNBQVosQ0FBWjtBQUNBRywyQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDQUcsNEJBQVksQ0FBQzBCLFVBQVUsQ0FBQzNCLFNBQVosQ0FBWjtBQUNBRyw2QkFBYSxDQUFDd0IsVUFBVSxDQUFDekIsVUFBWixDQUFiO0FBQ0FHLHdCQUFRLENBQUNzQixVQUFVLENBQUNHLFdBQVosQ0FBUjtBQUNBdkIsdUJBQU8sQ0FBQ29CLFVBQVUsQ0FBQ0ksVUFBWixDQUFQO0FBQ0F0Qix3QkFBUSxDQUFDa0IsVUFBVSxDQUFDSyxXQUFaLENBQVI7QUFDQXJCLGdDQUFnQixDQUFDZ0IsVUFBVSxDQUFDTSxVQUFaLENBQWhCO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBTSxDQUFDSSxLQUFQLENBQWExQixRQUF6QixFQUFrQyxLQUFsQyxFQUF3Q3lCLEdBQUcsQ0FBQ00sRUFBNUMsRUFBZ0QsS0FBaEQsRUFBc0ROLEdBQUcsQ0FBQ0ssSUFBSixFQUF0RDtBQUNILGVBYkssQ0FIYTs7QUFBQTtBQUFBO0FBQUEscUJBaUJiWCxFQUFFLENBQUNLLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQjNCLFNBQTNCLEVBQXNDNkIsR0FBdEMsR0FDTEMsSUFESyxDQUNBLFVBQVNILEdBQVQsRUFBYTtBQUNqQixvQkFBTWEsUUFBUSxHQUFHYixHQUFHLENBQUNLLElBQUosRUFBakI7QUFDQWYsa0NBQWtCLENBQUN1QixRQUFRLENBQUNDLElBQVYsQ0FBbEI7QUFDQXRCLHNDQUFzQixDQUFDcUIsUUFBUSxDQUFDRSxZQUFWLENBQXRCO0FBQ0QsZUFMSyxDQWpCYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGO0FBQUEsY0FFRmpCLHFEQUZFO0FBQUE7O0FBQUEsb0JBQWJMLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBeUJBLE1BQU11QixjQUFjO0FBQUEsbVZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBLG9CQUFkQSxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQUlFLE1BQUd6QyxRQUFRLElBQUcsRUFBZCxFQUFpQjtBQUNma0IsaUJBQWE7QUFDZDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFLZDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsb0NBQVNNLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFBLG9DQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSxvQ0FBU0UsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsb0NBQVNJLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRSxxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLHNDQUFmO0FBQXdCLGNBQVEsRUFBRUUsZUFBbEM7QUFBbUQsa0JBQVksRUFBRTRCO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlIOztJQTNEUS9DLFU7O0tBQUFBLFU7QUE2RE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9pbmZvL1tsZXNzb25pZF0uMWQ5NjYxNjUwYTQ5YTJhNjU2ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGVzc29uSW5mbyAocHJvcHMpe1xyXG4gIFxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmlkLHNldExlc3NvbmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1cmNoYXNlZCxzZXRQdXJjaGFzZWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxldXNlcm5hbWUsc2V0UHJvZmlsZXVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlaW50cm9kdWN0aW9uLHNldFByb2ZpbGVpbnRyb2R1Y3Rpb25dPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgY29uc3QgZ2V0TGVzc29uRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgY29uc3QgbGVzc29uaWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChsZXNzb25pZCk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIHNldFByaWNlKGxlc3NvbmRhdGEubGVzc29ucHJpY2UpO1xyXG4gICAgICAgIHNldExlc3NvbmNvbW1lbnQobGVzc29uZGF0YS5sZXNzb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkubGVzc29uaWQsXCIgOiBcIixkb2MuaWQgLFwiIDogXCIsZG9jLmRhdGEoKSk7XHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY3JlYXRlcmlkKS5nZXQoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgdXNlcmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBzZXRQcm9maWxldXNlcm5hbWUodXNlcmRhdGEubmFtZSk7XHJcbiAgICAgIHNldFByb2ZpbGVpbnRyb2R1Y3Rpb24odXNlcmRhdGEuaW50cm9kdWN0aW9uKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFByb2ZpbGVEYXRhPWFzeW5jKCk9PntcclxuXHJcbiAgfVxyXG5cclxuICAgIGlmKGxlc3NvbmlkID09XCJcIil7XHJcbiAgICAgIGdldExlc3NvbkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPuODrOODg+OCueODs+aDheWgsTwvaDE+XHJcbiAgICAgICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICAgICAgPHA+5paZ6YeRIDoge3ByaWNlfTwvcD5cclxuICAgICAgICA8cD7loLTmiYAgOiB7cGxhY2V9PC9wPlxyXG4gICAgICAgIDxwPuaZgumWkyA6IHt0aW1lfTwvcD5cclxuICAgICAgICA8cD7oqbPntLAgOiB7bGVzc29uY29tbWVudH08L3A+XHJcbiAgICAgICAgPFByb2ZpbGUgdGl0bGU9XCLjg6bjg7zjgrbjg7zmg4XloLFcIiB1c2VybmFtZT17cHJvZmlsZXVzZXJuYW1lfSBpbnRyb2R1Y3Rpb249e1Byb2ZpfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==