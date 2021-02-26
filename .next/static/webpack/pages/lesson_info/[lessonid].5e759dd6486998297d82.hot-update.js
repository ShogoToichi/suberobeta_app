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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonInfo.js",
    _s = $RefreshSig$();

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動








function LessonInfo(props) {
  _s();

  // 使用するステートの定義
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

  var db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //lessondata及びlessoncreaterのprofileを取得

  var getLessonData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return db.collection("lessons").doc(router.query.lessonid).get() //データ取得後の処理
              //取得したデータをlessondataにしまってから、それをステートに突っ込む
              //lessonidは取得しなくていいかも
              .then(function (doc) {
                var lessondata = doc.data();
                var lesson_id = doc.id;
                setCreaterid(lessondata.createrid);
                setLessonid(lesson_id);
                setPurchased(lessondata.purchased);
                setLessonname(lessondata.lessonname);
                setPlace(lessondata.lessonplace);
                setTime(lessondata.lessontime);
                setPrice(lessondata.lessonprice);
                setLessoncomment(lessondata.lessontext);
                console.log(createrid); //ここからプロフィール取得処理
                //レッスン情報で取得したcreateridでfirebaseを参照

                db.collection("users").doc(createrid).get() //if文の処理はエラーがあった時のための処理
                //ネット記事のコピペなので、必要性がどれほどあるかは謎
                .then(function (doc) {
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

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getLessonData() {
      return _ref.apply(this, arguments);
    };
  }();

  var dobuy = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_8__["default"].encodeEmail(props.email);
              _context2.next = 3;
              return db.collection("lessons").doc(router.query.lessonid).set({
                buyerid: email
              }, {
                merge: true
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function dobuy() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (lessonname == "") {
    getLessonData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      as: "/message/".concat(router.query.lessonid),
      href: "/messge/[lessonid]",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: dobuy,
        children: "\u8CFC\u5165"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6599\u91D1 : ", price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u5834\u6240 : ", place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6642\u9593 : ", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u8A73\u7D30 : ", lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lessonprofile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], {
        username: profileusername,
        introduction: profileintroduction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 7
  }, this);
}

_s(LessonInfo, "CHB7VJb41hKmkkThG3yev3VwSg0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = LessonInfo;
LessonInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(LessonInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwicHJvZmlsZWludHJvZHVjdGlvbiIsInNldFByb2ZpbGVpbnRyb2R1Y3Rpb24iLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TGVzc29uRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJpbnRyb2R1Y3Rpb24iLCJlcnJvciIsImRvYnV5IiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInNldCIsImJ1eWVyaWQiLCJtZXJnZSIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFVBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBRXpCO0FBRnlCLGtCQUdPQyxzREFB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QUFBO0FBQUEsWUFGRixlQU1FO0FBQUEsZ0JBQUt6QztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsb0NBQVNNLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLG9DQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQSxvQ0FBU0UsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQUEsb0NBQVNJLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0EscUVBQUMsZ0RBQUQ7QUFBVSxnQkFBUSxFQUFFRSxlQUFwQjtBQUFxQyxvQkFBWSxFQUFFRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JDOztHQXRGSXJCLFU7VUFlUTJCLHFEOzs7S0FmUjNCLFU7QUF5RlRBLFVBQVUsR0FBRXlELDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IxRCxVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9pbmZvL1tsZXNzb25pZF0uNWU3NTlkZDY0ODY5OTgyOTdkODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v4oC76KaB6L+95YqgIDogIOODu3B1cmNoYXNlZOOBi+S9leOBi+OBp+WPl+S7mOS4reOBruODrOODg+OCueODs+OBqOOBneOBhuOBp+OBquOBhOODrOODg+OCueODs+izvOWFpeODnOOCv+ODs+OBruihqOekuuOCkuWkieabtFxyXG4vLyAgICAgICAgICAgIOODu+izvOWFpeW+jHB1cmNoYXNlZOOBruabuOOBjeaPm+OBiOWPiuOBs21lc3NhZ2Xjgbjjga7np7vli5VcclxuXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9Qcm9maWxlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH1mcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBMZXNzb25JbmZvIChwcm9wcyl7XHJcbiAgXHJcbiAgLy8g5L2/55So44GZ44KL44K544OG44O844OI44Gu5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uaWQsc2V0TGVzc29uaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVyY2hhc2VkLHNldFB1cmNoYXNlZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGV1c2VybmFtZSxzZXRQcm9maWxldXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGVpbnRyb2R1Y3Rpb24sc2V0UHJvZmlsZWludHJvZHVjdGlvbl09dXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHlj4rjgbNsZXNzb25jcmVhdGVy44GucHJvZmlsZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldExlc3NvbkRhdGE9IGFzeW5jKCk9PntcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/jg4fjg7zjgr/lj5blvpflvozjga7lh6bnkIZcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLy9sZXNzb25pZOOBr+WPluW+l+OBl+OBquOBj+OBpuOBhOOBhOOBi+OCglxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGNvbnN0IGxlc3Nvbl9pZCA9IGRvYy5pZDtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3NvbmlkKGxlc3Nvbl9pZCk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIHNldFByaWNlKGxlc3NvbmRhdGEubGVzc29ucHJpY2UpO1xyXG4gICAgICAgIHNldExlc3NvbmNvbW1lbnQobGVzc29uZGF0YS5sZXNzb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQpO1xyXG4gICAgICAgIC8v44GT44GT44GL44KJ44OX44Ot44OV44Kj44O844Or5Y+W5b6X5Yem55CGXHJcbiAgICAgICAgLy/jg6zjg4Pjgrnjg7Pmg4XloLHjgaflj5blvpfjgZfjgZ9jcmVhdGVyaWTjgadmaXJlYmFzZeOCkuWPgueFp1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY3JlYXRlcmlkKS5nZXQoKVxyXG4gICAgICAgIC8vaWbmlofjga7lh6bnkIbjga/jgqjjg6njg7zjgYzjgYLjgaPjgZ/mmYLjga7jgZ/jgoHjga7lh6bnkIZcclxuICAgICAgICAvL+ODjeODg+ODiOiomOS6i+OBruOCs+ODlOODmuOBquOBruOBp+OAgeW/heimgeaAp+OBjOOBqeOCjOOBu+OBqeOBguOCi+OBi+OBr+isjlxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICBpZiAoZG9jLmV4aXN0cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkLHVzZXJkYXRhKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZXVzZXJuYW1lKHVzZXJkYXRhLnByb2ZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGVpbnRyb2R1Y3Rpb24odXNlcmRhdGEucHJvZmlsZS5pbnRyb2R1Y3Rpb24pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBkYXRhXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBkb2N1bWVudDpcIixlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICAgY29uc3QgZG9idXkgPSBhc3luYygpPT57XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuc2V0KHtcclxuICAgICAgYnV5ZXJpZDplbWFpbFxyXG4gICAgfSx7bWVyZ2U6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGxlc3Nvbm5hbWUgPT1cIlwiKXtcclxuICAgICAgZ2V0TGVzc29uRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPuODrOODg+OCueODs+aDheWgsTwvaDE+XHJcbiAgICAgICAgPExpbmsgYXM9e2AvbWVzc2FnZS8ke3JvdXRlci5xdWVyeS5sZXNzb25pZH1gfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvbWVzc2dlL1tsZXNzb25pZF1cIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG9idXl9PuizvOWFpTwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgICAgICA8cD7mlpnph5EgOiB7cHJpY2V9PC9wPlxyXG4gICAgICAgIDxwPuWgtOaJgCA6IHtwbGFjZX08L3A+XHJcbiAgICAgICAgPHA+5pmC6ZaTIDoge3RpbWV9PC9wPlxyXG4gICAgICAgIDxwPuips+e0sCA6IHtsZXNzb25jb21tZW50fTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlc3NvbnByb2ZpbGVcIj5cclxuICAgICAgICA8UHJvZmlsZSAgdXNlcm5hbWU9e3Byb2ZpbGV1c2VybmFtZX0gaW50cm9kdWN0aW9uPXtwcm9maWxlaW50cm9kdWN0aW9ufS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbkxlc3NvbkluZm89IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKExlc3NvbkluZm8pO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==