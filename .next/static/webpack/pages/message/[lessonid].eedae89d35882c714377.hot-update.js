webpackHotUpdate_N_E("pages/message/[lessonid]",{

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
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
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\Message.js",
    _s = $RefreshSig$();








function Message(props) {
  _s();

  //ステート定義
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      createrid = _useState[0],
      setCreaterid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      buyerid = _useState3[0],
      setBuyerid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonname = _useState4[0],
      setLessonname = _useState4[1]; //送信者によってスタイルを変更するテスト用のスタイル


  var style2 = {
    backgroundColor: "blue"
  };
  var style1 = {
    // border:"solid 1px #DDD", 
    backgroundColor: "#E0E0E0",
    borderRadius: "7px",
    height: "40px",
    verticalAlign: "middle",
    paddingTop: "10px",
    fontSize: "20px",
    display: "inline-block",
    marginBottom: marginBottom
  };
  var messagedata = [];
  var messageitems = [];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //lessondata及びmessageを取得

  var getMessageData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var email, db;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_6__["default"].encodeEmail(props.email);
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore(); //router.query.lessonidでページのurlの末尾を取得
              //先にレッスン名と作成者、購入者のidを取得

              _context.next = 4;
              return db.collection("lessons").doc(router.query.lessonid).get() //取得したデータをlessondataにしまってから、それをステートに突っ込む
              .then(function (doc) {
                var lessondata = doc.data();
                setCreaterid(lessondata.createrid);
                setLessonname(lessondata.lessonname);
                setBuyerid(lessondata.buyerid); //メッセージ情報取得処理
                //orderBy(time)で時間の古い順に並べる

                db.collection("lessons").doc(router.query.lessonid).collection("message").orderBy("time").get() //取得したデータをmessagedata配列に入れる。
                //配列の繰り返し処理でメッセージのjsxを作り、
                //messageitemsに入れて、最後にstateに入れる
                .then(function (querySnapshot) {
                  querySnapshot.forEach(function (doc) {
                    messagedata.push(doc.data());
                  });

                  for (var i in messagedata) {
                    var text = messagedata[i].text;
                    var userid = messagedata[i].userid; //送信者とReduxメアドの比較でスタイル分岐

                    if (userid == email) {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                          style: style1,
                          children: text
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 21
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 21
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 19
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        style: style2,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 21
                      }, this));
                    }
                  } //作成者、購入者以外メッセージが見れないようにする


                  if (email == createrid || email == buyerid) {
                    setMessages(messageitems);
                  } else {
                    var errorMessage = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                      children: "\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u305B\u3093"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 36
                    }, this);

                    setMessages(errorMessage);
                  }
                });
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMessageData() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: getMessageData,
      children: "\u8AAD\u307F\u8FBC\u307F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 3
  }, this);
}

_s(Message, "f3O60XEJqkHCjhKUgQjRypr6XY8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Message;
Message = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Message);
/* harmony default export */ __webpack_exports__["default"] = (Message);

var _c;

$RefreshReg$(_c, "Message");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIm1lc3NhZ2VkYXRhIiwibWVzc2FnZWl0ZW1zIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TWVzc2FnZURhdGEiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImxlc3NvbmlkIiwiZ2V0IiwidGhlbiIsImxlc3NvbmRhdGEiLCJkYXRhIiwib3JkZXJCeSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwicHVzaCIsImkiLCJ0ZXh0IiwidXNlcmlkIiwiZXJyb3JNZXNzYWdlIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQ3RCO0FBRHNCLGtCQUVVQyxzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVmQyxTQUZlO0FBQUEsTUFFTEMsWUFGSzs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHZkcsUUFIZTtBQUFBLE1BR05DLFdBSE07O0FBQUEsbUJBSU1KLHNEQUFRLENB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QXFCM0I7OztBQUNBLHNCQUFJbkIsS0FBSyxJQUFFdkIsU0FBUCxJQUFvQnVCLEtBQUssSUFBRW5CLE9BQS9CLEVBQXVDO0FBQ25DRCwrQkFBVyxDQUFDZ0IsWUFBRCxDQUFYO0FBQ0QsbUJBRkgsTUFHTTtBQUNGLHdCQUFNeUIsWUFBWSxnQkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBbkI7O0FBQ0F6QywrQkFBVyxDQUFDeUMsWUFBRCxDQUFYO0FBQ0Q7QUFDSixpQkFsQ0g7QUFtQ0wsZUE3Q08sQ0FMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFkdEIsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFvREYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRUEsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUtoQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHSixRQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0M7O0dBdEZRTCxPO1VBeUJRd0IscUQ7OztLQXpCUnhCLE87QUF5RlRBLE9BQU8sR0FBR2dELDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JqRCxPQUF4QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS5lZWRhZTg5ZDM1ODgyYzcxNDM3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSAocHJvcHMpe1xyXG4gIC8v44K544OG44O844OI5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1eWVyaWQsc2V0QnV5ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcbiAgLy/pgIHkv6HogIXjgavjgojjgaPjgabjgrnjgr/jgqTjg6vjgpLlpInmm7TjgZnjgovjg4bjgrnjg4jnlKjjga7jgrnjgr/jgqTjg6tcclxuICBjb25zdCBzdHlsZTIgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwiYmx1ZVwiLFxyXG4gIH1cclxuICBjb25zdCBzdHlsZTEgPSB7XHJcbiAgICAvLyBib3JkZXI6XCJzb2xpZCAxcHggI0RERFwiLCBcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCIjRTBFMEUwXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICBoZWlnaHQ6XCI0MHB4XCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsXHJcbiAgICBwYWRkaW5nVG9wOlwiMTBweFwiLFxyXG4gICAgZm9udFNpemU6XCIyMHB4XCIsXHJcbiAgICBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBtYXJnaW5Cb3R0b21cclxuICB9XHJcbiAgY29uc3QgbWVzc2FnZWRhdGE9W107XHJcbiAgY29uc3QgbWVzc2FnZWl0ZW1zPVtdO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvL2xlc3NvbmRhdGHlj4rjgbNtZXNzYWdl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TWVzc2FnZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIC8v5YWI44Gr44Os44OD44K544Oz5ZCN44Go5L2c5oiQ6ICF44CB6LO85YWl6ICF44GuaWTjgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldEJ1eWVyaWQobGVzc29uZGF0YS5idXllcmlkKTtcclxuXHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjmg4XloLHlj5blvpflh6bnkIZcclxuICAgICAgICAvL29yZGVyQnkodGltZSnjgafmmYLplpPjga7lj6TjgYTpoIbjgavkuKbjgbnjgotcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5jb2xsZWN0aW9uKFwibWVzc2FnZVwiKS5vcmRlckJ5KFwidGltZVwiKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbWVzc2FnZWRhdGHphY3liJfjgavlhaXjgozjgovjgIJcclxuICAgICAgICAvL+mFjeWIl+OBrue5sOOCiui/lOOBl+WHpueQhuOBp+ODoeODg+OCu+ODvOOCuOOBrmpzeOOCkuS9nOOCiuOAgVxyXG4gICAgICAgIC8vbWVzc2FnZWl0ZW1z44Gr5YWl44KM44Gm44CB5pyA5b6M44Grc3RhdGXjgavlhaXjgozjgotcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZWRhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIG1lc3NhZ2VkYXRhKXtcclxuICAgICAgICAgICAgICBsZXQgdGV4dCA9IG1lc3NhZ2VkYXRhW2ldLnRleHQ7XHJcbiAgICAgICAgICAgICAgbGV0IHVzZXJpZCA9IG1lc3NhZ2VkYXRhW2ldLnVzZXJpZDtcclxuICAgICAgICAgICAgICAvL+mAgeS/oeiAheOBqFJlZHV444Oh44Ki44OJ44Gu5q+U6LyD44Gn44K544K/44Kk44Or5YiG5bKQXHJcbiAgICAgICAgICAgICAgaWYodXNlcmlkID09IGVtYWlsKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlMX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO31cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlMn0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+S9nOaIkOiAheOAgeizvOWFpeiAheS7peWkluODoeODg+OCu+ODvOOCuOOBjOimi+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlaXRlbXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlPTxwPuOBlOWIqeeUqOOBhOOBn+OBoOOBkeOBvuOBm+OCkzwvcD5cclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICB9KX1cclxuICBcclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE1lc3NhZ2VEYXRhfT7oqq3jgb/ovrzjgb88L2J1dHRvbj5cclxuICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAge21lc3NhZ2VzfVxyXG4gIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcblxyXG5NZXNzYWdlID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTWVzc2FnZSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==