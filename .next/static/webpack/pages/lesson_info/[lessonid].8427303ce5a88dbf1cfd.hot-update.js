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
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Profile */ "./components/Profile.js");




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
                console.log(createrid);
                db.collection("users").doc(createrid).get().then(function (doc) {
                  if (doc.exists) {
                    var userdata = doc.data();
                    console.log(createrid, userdata);
                    setProfileusername(userdata.profile.name);
                    setProfileintroduction(userdata.profile.introduction);
                  } else {
                    console.log("no data");
                  }
                })["catch"](function (error) {
                  console.log("Error getting document:", error);
                });
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
  }(); // const getProfileData=async()=>{


  if (lessonid == "") {
    getLessonData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6599\u91D1 : ", price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u5834\u6240 : ", place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6642\u9593 : ", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u8A73\u7D30 : ", lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Porofile, {
        username: profileusername,
        introduction: profileintroduction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwicHJvZmlsZWludHJvZHVjdGlvbiIsInNldFByb2ZpbGVpbnRyb2R1Y3Rpb24iLCJnZXRMZXNzb25EYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJpbnRyb2R1Y3Rpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQXFCQyxLQUFyQixFQUEyQjtBQUFBOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWxCQyxTQUZrQjtBQUFBLE1BRVJDLFlBRlE7O0FBQUEsbUJBR0tGLHNEQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHbEJHLFFBSGtCO0FBQUEsTUFHVEMsV0FIUzs7QUFBQSxt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QUFBO0FBQUEsS0FBRjtBQUFBLGNBRUZwQixxREFGRTtBQUFBOztBQUFBLG9CQUFiTCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5CLENBZHlCLENBOEN6Qjs7O0FBR0UsTUFBR2xCLFFBQVEsSUFBRyxFQUFkLEVBQWlCO0FBQ2ZrQixpQkFBYTtBQUNkOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUtkO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxvQ0FBU00sS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsb0NBQVNKLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLG9DQUFTRSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQSxvQ0FBU0ksYUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVFFO0FBQUssZUFBUyxNQUFkO0FBQUEsNkJBQ0EscUVBQUMsUUFBRDtBQUFXLGdCQUFRLEVBQUVFLGVBQXJCO0FBQXNDLG9CQUFZLEVBQUVFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlQzs7SUFwRUlyQixVOztLQUFBQSxVO0FBc0VNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLjg0MjczMDNjZTVhODhkYmYxY2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZVwiO1xyXG5cclxuZnVuY3Rpb24gTGVzc29uSW5mbyAocHJvcHMpe1xyXG4gIFxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmlkLHNldExlc3NvbmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1cmNoYXNlZCxzZXRQdXJjaGFzZWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxldXNlcm5hbWUsc2V0UHJvZmlsZXVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlaW50cm9kdWN0aW9uLHNldFByb2ZpbGVpbnRyb2R1Y3Rpb25dPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgY29uc3QgZ2V0TGVzc29uRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgY29uc3QgbGVzc29uaWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChsZXNzb25pZCk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIHNldFByaWNlKGxlc3NvbmRhdGEubGVzc29ucHJpY2UpO1xyXG4gICAgICAgIHNldExlc3NvbmNvbW1lbnQobGVzc29uZGF0YS5sZXNzb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY3JlYXRlcmlkKS5nZXQoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICBpZiAoZG9jLmV4aXN0cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkLHVzZXJkYXRhKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZXVzZXJuYW1lKHVzZXJkYXRhLnByb2ZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGVpbnRyb2R1Y3Rpb24odXNlcmRhdGEucHJvZmlsZS5pbnRyb2R1Y3Rpb24pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBkYXRhXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBkb2N1bWVudDpcIixlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gY29uc3QgZ2V0UHJvZmlsZURhdGE9YXN5bmMoKT0+e1xyXG4gIFxyXG5cclxuICAgIGlmKGxlc3NvbmlkID09XCJcIil7XHJcbiAgICAgIGdldExlc3NvbkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPuODrOODg+OCueODs+aDheWgsTwvaDE+XHJcbiAgICAgICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICAgICAgPHA+5paZ6YeRIDoge3ByaWNlfTwvcD5cclxuICAgICAgICA8cD7loLTmiYAgOiB7cGxhY2V9PC9wPlxyXG4gICAgICAgIDxwPuaZgumWkyA6IHt0aW1lfTwvcD5cclxuICAgICAgICA8cD7oqbPntLAgOiB7bGVzc29uY29tbWVudH08L3A+XHJcbiAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17Z2V0UHJvZmlsZURhdGF9PuaknOiovDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT5cclxuICAgICAgICA8UG9yb2ZpbGUgIHVzZXJuYW1lPXtwcm9maWxldXNlcm5hbWV9IGludHJvZHVjdGlvbj17cHJvZmlsZWludHJvZHVjdGlvbn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3NvbkluZm87XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9