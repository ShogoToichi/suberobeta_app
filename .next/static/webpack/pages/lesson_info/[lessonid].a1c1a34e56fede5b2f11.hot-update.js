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

  var getProfileData = async;

  if (lessonid == "") {
    getLessonData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6599\u91D1 : ", price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u5834\u6240 : ", place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6642\u9593 : ", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u8A73\u7D30 : ", lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwiZ2V0TGVzc29uRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJnZXQiLCJ0aGVuIiwibGVzc29uZGF0YSIsImRhdGEiLCJpZCIsImxlc3NvbnBsYWNlIiwibGVzc29udGltZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9maWxlRGF0YSIsImFzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFbEJDLFNBRmtCO0FBQUEsTUFFUkMsWUFGUTs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdsQkcsUUFIa0I7QUFBQSxNQUdUQyxXQUhTOztBQUFBLG1CQUlPSixzREFBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSWxCSyxTQUprQjtBQUFBLE1BSVJDLFlBSlE7O0FBQUEsbUJBS1VOLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2xCTyxVQUxrQjtBQUFBLE1BS1BDLGFBTE87O0FBQUEsbUJBTUFSLHNEQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNbEJTLEtBTmtCO0FBQUEsTUFNWkMsUUFOWTs7QUFBQSxtQkFPRlYsc0RBQVEsQ0FBQyxFQUFELENBUE47QUFBQSxNQU9sQlcsSUFQa0I7QUFBQSxNQU9iQyxPQVBhOztBQUFBLG1CQVFBWixzREFBUSxDQUFDLEVBQUQsQ0FSUjtBQUFBLE1BUWxCYSxLQVJrQjtBQUFBLE1BUVpDLFFBUlk7O0FBQUEsbUJBU2dCZCxzREFBUSxDQUFDLEVBQUQsQ0FUeEI7QUFBQSxNQVNsQmUsYUFUa0I7QUFBQSxNQVNKQyxnQkFUSTs7QUFXekIsTUFBTUMsYUFBYTtBQUFBOztBQUFBLHFWQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNiQyxnQkFEYSxHQUNSQyxnREFBUSxDQUFDQyxTQUFULEVBRFE7QUFFYkMsb0JBRmEsR0FFSkMsNkRBQVMsRUFGTDtBQUFBO0FBQUEscUJBR2JKLEVBQUUsQ0FBQ0ssVUFBSCxDQUFjLFNBQWQsRUFBeUJDLEdBQXpCLENBQTZCSCxNQUFNLENBQUNJLEtBQVAsQ0FBYXRCLFFBQTFDLEVBQW9EdUIsR0FBcEQsR0FDTEMsSUFESyxDQUNBLFVBQVNILEdBQVQsRUFBYTtBQUNqQixvQkFBTUksVUFBVSxHQUFHSixHQUFHLENBQUNLLElBQUosRUFBbkI7QUFDQSxvQkFBTTFCLFFBQVEsR0FBR3FCLEdBQUcsQ0FBQ00sRUFBckI7QUFDRTVCLDRCQUFZLENBQUMwQixVQUFVLENBQUMzQixTQUFaLENBQVo7QUFDQUcsMkJBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0FHLDRCQUFZLENBQUNzQixVQUFVLENBQUN2QixTQUFaLENBQVo7QUFDQUcsNkJBQWEsQ0FBQ29CLFVBQVUsQ0FBQ3JCLFVBQVosQ0FBYjtBQUNBRyx3QkFBUSxDQUFDa0IsVUFBVSxDQUFDRyxXQUFaLENBQVI7QUFDQW5CLHVCQUFPLENBQUNnQixVQUFVLENBQUNJLFVBQVosQ0FBUDtBQUNBbEIsd0JBQVEsQ0FBQ2MsVUFBVSxDQUFDSyxXQUFaLENBQVI7QUFDQWpCLGdDQUFnQixDQUFDWSxVQUFVLENBQUNNLFVBQVosQ0FBaEI7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFNLENBQUNJLEtBQVAsQ0FBYXRCLFFBQXpCLEVBQWtDLEtBQWxDLEVBQXdDcUIsR0FBRyxDQUFDTSxFQUE1QyxFQUFnRCxLQUFoRCxFQUFzRE4sR0FBRyxDQUFDSyxJQUFKLEVBQXREO0FBQ0gsZUFiSyxDQUhhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7QUFBQSxjQUVGUCxxREFGRTtBQUFBOztBQUFBLG9CQUFiTCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQW1CQSxNQUFNb0IsY0FBYyxHQUFDQyxLQUFyQjs7QUFFRSxNQUFHbkMsUUFBUSxJQUFHLEVBQWQsRUFBaUI7QUFDZmMsaUJBQWE7QUFDZDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFLVjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsb0NBQVNNLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFBLG9DQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSxvQ0FBU0UsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsb0NBQVNJLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXSDs7SUEvQ1FqQixVOztLQUFBQSxVO0FBaURNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLmExYzFhMzRlNTZmZWRlNWIyZjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIExlc3NvbkluZm8gKHByb3BzKXtcclxuICBcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25pZCxzZXRMZXNzb25pZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdXJjaGFzZWQsc2V0UHVyY2hhc2VkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZ2V0TGVzc29uRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgY29uc3QgbGVzc29uaWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChsZXNzb25pZCk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIHNldFByaWNlKGxlc3NvbmRhdGEubGVzc29ucHJpY2UpO1xyXG4gICAgICAgIHNldExlc3NvbmNvbW1lbnQobGVzc29uZGF0YS5sZXNzb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkubGVzc29uaWQsXCIgOiBcIixkb2MuaWQgLFwiIDogXCIsZG9jLmRhdGEoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFByb2ZpbGVEYXRhPWFzeW5jXHJcblxyXG4gICAgaWYobGVzc29uaWQgPT1cIlwiKXtcclxuICAgICAgZ2V0TGVzc29uRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+44Os44OD44K544Oz5oOF5aCxPC9oMT5cclxuICAgICAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgICAgICA8cD7mlpnph5EgOiB7cHJpY2V9PC9wPlxyXG4gICAgICAgIDxwPuWgtOaJgCA6IHtwbGFjZX08L3A+XHJcbiAgICAgICAgPHA+5pmC6ZaTIDoge3RpbWV9PC9wPlxyXG4gICAgICAgIDxwPuips+e0sCA6IHtsZXNzb25jb21tZW50fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3NvbkluZm87XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9