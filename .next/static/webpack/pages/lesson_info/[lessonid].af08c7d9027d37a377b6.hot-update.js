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
              email = Lib.encodeEmail(props.email);
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
      lineNumber: 79,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
      as: "/message/".concat(router.query.lessonid),
      href: "/messge/[lessonid]",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: dobuy,
        children: "\u8CFC\u5165"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6599\u91D1 : ", price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u5834\u6240 : ", place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6642\u9593 : ", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u8A73\u7D30 : ", lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lessonprofile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], {
        username: profileusername,
        introduction: profileintroduction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 7
  }, this);
}

_s(LessonInfo, "CHB7VJb41hKmkkThG3yev3VwSg0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = LessonInfo;
LessonInfo;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwicHJvZmlsZWludHJvZHVjdGlvbiIsInNldFByb2ZpbGVpbnRyb2R1Y3Rpb24iLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TGVzc29uRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJpbnRyb2R1Y3Rpb24iLCJlcnJvciIsImRvYnV5IiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInNldCIsImJ1eWVyaWQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFBQTs7QUFFekI7QUFGeUIsa0JBR09DLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHbEJDLFNBSGtCO0FB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QUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsb0NBQVNNLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLG9DQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQSxvQ0FBU0UsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQUEsb0NBQVNJLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0EscUVBQUMsZ0RBQUQ7QUFBVSxnQkFBUSxFQUFFRSxlQUFwQjtBQUFxQyxvQkFBWSxFQUFFRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JDOztHQXRGSXJCLFU7VUFlUTJCLHFEOzs7S0FmUjNCLFU7QUF5RlRBLFVBQVU7QUFDS0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2luZm8vW2xlc3NvbmlkXS5hZjA4YzdkOTAyN2QzN2EzNzdiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/igLvopoHov73liqAgOiAg44O7cHVyY2hhc2Vk44GL5L2V44GL44Gn5Y+X5LuY5Lit44Gu44Os44OD44K544Oz44Go44Gd44GG44Gn44Gq44GE44Os44OD44K544Oz6LO85YWl44Oc44K/44Oz44Gu6KGo56S644KS5aSJ5pu0XHJcbi8vICAgICAgICAgICAg44O76LO85YWl5b6McHVyY2hhc2Vk44Gu5pu444GN5o+b44GI5Y+K44GzbWVzc2FnZeOBuOOBruenu+WLlVxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcclxuXHJcbmZ1bmN0aW9uIExlc3NvbkluZm8gKHByb3BzKXtcclxuICBcclxuICAvLyDkvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7lrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25pZCxzZXRMZXNzb25pZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdXJjaGFzZWQsc2V0UHVyY2hhc2VkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZmlsZXVzZXJuYW1lLHNldFByb2ZpbGV1c2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZmlsZWludHJvZHVjdGlvbixzZXRQcm9maWxlaW50cm9kdWN0aW9uXT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vbGVzc29uZGF0YeWPiuOBs2xlc3NvbmNyZWF0ZXLjga5wcm9maWxl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TGVzc29uRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+ODh+ODvOOCv+WPluW+l+W+jOOBruWHpueQhlxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAvL2xlc3Nvbmlk44Gv5Y+W5b6X44GX44Gq44GP44Gm44GE44GE44GL44KCXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgY29uc3QgbGVzc29uX2lkID0gZG9jLmlkO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29uaWQobGVzc29uX2lkKTtcclxuICAgICAgICBzZXRQdXJjaGFzZWQobGVzc29uZGF0YS5wdXJjaGFzZWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRQbGFjZShsZXNzb25kYXRhLmxlc3NvbnBsYWNlKTtcclxuICAgICAgICBzZXRUaW1lKGxlc3NvbmRhdGEubGVzc29udGltZSk7XHJcbiAgICAgICAgc2V0UHJpY2UobGVzc29uZGF0YS5sZXNzb25wcmljZSk7XHJcbiAgICAgICAgc2V0TGVzc29uY29tbWVudChsZXNzb25kYXRhLmxlc3NvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZXJpZCk7XHJcbiAgICAgICAgLy/jgZPjgZPjgYvjgonjg5fjg63jg5XjgqPjg7zjg6vlj5blvpflh6bnkIZcclxuICAgICAgICAvL+ODrOODg+OCueODs+aDheWgseOBp+WPluW+l+OBl+OBn2NyZWF0ZXJpZOOBp2ZpcmViYXNl44KS5Y+C54WnXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjcmVhdGVyaWQpLmdldCgpXHJcbiAgICAgICAgLy9pZuaWh+OBruWHpueQhuOBr+OCqOODqeODvOOBjOOBguOBo+OBn+aZguOBruOBn+OCgeOBruWHpueQhlxyXG4gICAgICAgIC8v44ON44OD44OI6KiY5LqL44Gu44Kz44OU44Oa44Gq44Gu44Gn44CB5b+F6KaB5oCn44GM44Gp44KM44G744Gp44GC44KL44GL44Gv6KyOXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgIGlmIChkb2MuZXhpc3RzKXtcclxuICAgICAgICAgICAgY29uc3QgdXNlcmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQsdXNlcmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxldXNlcm5hbWUodXNlcmRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZWludHJvZHVjdGlvbih1c2VyZGF0YS5wcm9maWxlLmludHJvZHVjdGlvbilcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGRvY3VtZW50OlwiLGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICBjb25zdCBkb2J1eSA9IGFzeW5jKCk9PntcclxuICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5zZXQoe1xyXG4gICAgICBidXllcmlkOmVtYWlsXHJcbiAgICB9LHttZXJnZTogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYobGVzc29ubmFtZSA9PVwiXCIpe1xyXG4gICAgICBnZXRMZXNzb25EYXRhKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+44Os44OD44K544Oz5oOF5aCxPC9oMT5cclxuICAgICAgICA8TGluayBhcz17YC9tZXNzYWdlLyR7cm91dGVyLnF1ZXJ5Lmxlc3NvbmlkfWB9XHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9tZXNzZ2UvW2xlc3NvbmlkXVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb2J1eX0+6LO85YWlPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAgICAgIDxwPuaWmemHkSA6IHtwcmljZX08L3A+XHJcbiAgICAgICAgPHA+5aC05omAIDoge3BsYWNlfTwvcD5cclxuICAgICAgICA8cD7mmYLplpMgOiB7dGltZX08L3A+XHJcbiAgICAgICAgPHA+6Kmz57SwIDoge2xlc3NvbmNvbW1lbnR9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVzc29ucHJvZmlsZVwiPlxyXG4gICAgICAgIDxQcm9maWxlICB1c2VybmFtZT17cHJvZmlsZXVzZXJuYW1lfSBpbnRyb2R1Y3Rpb249e3Byb2ZpbGVpbnRyb2R1Y3Rpb259Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuTGVzc29uSW5mb1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==