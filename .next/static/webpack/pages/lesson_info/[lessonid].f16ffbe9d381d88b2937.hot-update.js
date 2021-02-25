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

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動





function LessonInfo(props) {
  _s2();

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
      setProfileintroduction = _useState10[1]; //lessondata及びlessoncreaterのprofileを取得


  var getLessonData = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, router;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore(); //router.query.lessonidでページのurlの末尾を取得

              router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
              _context.next = 5;
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

  if (lessonname == "") {
    getLessonData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30EC\u30C3\u30B9\u30F3\u60C5\u5831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "\u8CFC\u5165"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6599\u91D1 : ", price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u5834\u6240 : ", place]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u6642\u9593 : ", time]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u8A73\u7D30 : ", lessoncomment]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lessonprofile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], {
        username: profileusername,
        introduction: profileintroduction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25JbmZvLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwicHJvZmlsZWludHJvZHVjdGlvbiIsInNldFByb2ZpbGVpbnRyb2R1Y3Rpb24iLCJnZXRMZXNzb25EYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJpbnRyb2R1Y3Rpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFBQTs7QUFFekI7QUFGeUIsa0JBR09DLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHbEJDLFNBSGtCO0FBQUEsTUFHUkMsWUFIUTs7QUFBQSxtQkFJS0Ysc0RBQVEsQ0FBQyxFQUFELENBSmI7QUFBQSxNQUlsQkcs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eUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXNDTSxLQUF0QztBQUNELGlCQWREO0FBZUgsZUFqQ0ssQ0FKYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGO0FBQUEsY0FHRnJCLHFEQUhFO0FBQUE7O0FBQUEsb0JBQWJMLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBd0NFLE1BQUdkLFVBQVUsSUFBRyxFQUFoQixFQUFtQjtBQUNqQmMsaUJBQWE7QUFDZDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQSxnQkFBS2Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLG9DQUFTTSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQSxvQ0FBU0osS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsb0NBQVNFLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLG9DQUFTSSxhQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNBLHFFQUFDLGdEQUFEO0FBQVUsZ0JBQVEsRUFBRUUsZUFBcEI7QUFBcUMsb0JBQVksRUFBRUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCQzs7SUEzRUlyQixVOztLQUFBQSxVO0FBNkVNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLmYxNmZmYmU5ZDM4MWQ4OGIyOTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+KAu+imgei/veWKoCA6ICDjg7twdXJjaGFzZWTjgYvkvZXjgYvjgaflj5fku5jkuK3jga7jg6zjg4Pjgrnjg7PjgajjgZ3jgYbjgafjgarjgYTjg6zjg4Pjgrnjg7Pos7zlhaXjg5zjgr/jg7Pjga7ooajnpLrjgpLlpInmm7RcclxuLy8gICAgICAgICAgICDjg7vos7zlhaXlvoxwdXJjaGFzZWTjga7mm7jjgY3mj5vjgYjlj4rjgbNtZXNzYWdl44G444Gu56e75YuVXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZVwiO1xyXG5cclxuZnVuY3Rpb24gTGVzc29uSW5mbyAocHJvcHMpe1xyXG4gIFxyXG4gIC8vIOS9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruWumue+qVxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmlkLHNldExlc3NvbmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1cmNoYXNlZCxzZXRQdXJjaGFzZWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxldXNlcm5hbWUsc2V0UHJvZmlsZXVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxlaW50cm9kdWN0aW9uLHNldFByb2ZpbGVpbnRyb2R1Y3Rpb25dPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHlj4rjgbNsZXNzb25jcmVhdGVy44GucHJvZmlsZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldExlc3NvbkRhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v44OH44O844K/5Y+W5b6X5b6M44Gu5Yem55CGXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC8vbGVzc29uaWTjga/lj5blvpfjgZfjgarjgY/jgabjgYTjgYTjgYvjgoJcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBjb25zdCBsZXNzb25faWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChsZXNzb25faWQpO1xyXG4gICAgICAgIHNldFB1cmNoYXNlZChsZXNzb25kYXRhLnB1cmNoYXNlZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldFBsYWNlKGxlc3NvbmRhdGEubGVzc29ucGxhY2UpO1xyXG4gICAgICAgIHNldFRpbWUobGVzc29uZGF0YS5sZXNzb250aW1lKTtcclxuICAgICAgICBzZXRQcmljZShsZXNzb25kYXRhLmxlc3NvbnByaWNlKTtcclxuICAgICAgICBzZXRMZXNzb25jb21tZW50KGxlc3NvbmRhdGEubGVzc29udGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkKTtcclxuICAgICAgICAvL+OBk+OBk+OBi+OCieODl+ODreODleOCo+ODvOODq+WPluW+l+WHpueQhlxyXG4gICAgICAgIC8v44Os44OD44K544Oz5oOF5aCx44Gn5Y+W5b6X44GX44GfY3JlYXRlcmlk44GnZmlyZWJhc2XjgpLlj4LnhadcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNyZWF0ZXJpZCkuZ2V0KClcclxuICAgICAgICAvL2lm5paH44Gu5Yem55CG44Gv44Ko44Op44O844GM44GC44Gj44Gf5pmC44Gu44Gf44KB44Gu5Yem55CGXHJcbiAgICAgICAgLy/jg43jg4Pjg4joqJjkuovjga7jgrPjg5Tjg5rjgarjga7jgafjgIHlv4XopoHmgKfjgYzjganjgozjgbvjganjgYLjgovjgYvjga/orI5cclxuICAgICAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgaWYgKGRvYy5leGlzdHMpe1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZXJpZCx1c2VyZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGV1c2VybmFtZSh1c2VyZGF0YS5wcm9maWxlLm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxlaW50cm9kdWN0aW9uKHVzZXJkYXRhLnByb2ZpbGUuaW50cm9kdWN0aW9uKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZGF0YVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgZG9jdW1lbnQ6XCIsZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAgIGlmKGxlc3Nvbm5hbWUgPT1cIlwiKXtcclxuICAgICAgZ2V0TGVzc29uRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+44Os44OD44K544Oz5oOF5aCxPC9oMT5cclxuICAgICAgICBcclxuICAgICAgICA8YnV0dG9uPuizvOWFpTwvYnV0dG9uPlxyXG4gICAgICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAgICAgIDxwPuaWmemHkSA6IHtwcmljZX08L3A+XHJcbiAgICAgICAgPHA+5aC05omAIDoge3BsYWNlfTwvcD5cclxuICAgICAgICA8cD7mmYLplpMgOiB7dGltZX08L3A+XHJcbiAgICAgICAgPHA+6Kmz57SwIDoge2xlc3NvbmNvbW1lbnR9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVzc29ucHJvZmlsZVwiPlxyXG4gICAgICAgIDxQcm9maWxlICB1c2VybmFtZT17cHJvZmlsZXVzZXJuYW1lfSBpbnRyb2R1Y3Rpb249e3Byb2ZpbGVpbnRyb2R1Y3Rpb259Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==