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
      setLessonname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      creatername = _useState5[0],
      setCreaterName = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      buyername = _useState6[0],
      setBuyerName = _useState6[1]; //送信者によってスタイルを変更するテスト用のスタイル


  var style = {
    // border:"solid 1px #DDD", 
    backgroundColor: "#E0E0E0",
    borderRadius: "7px",
    height: "40px",
    verticalAlign: "middle",
    padding: "10px 20px 0px 20px",
    fontSize: "20px",
    display: "inline-block",
    marginBottom: "10px"
  };
  var messagedata = [];
  var messageitems = [];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var email = _static_address_lib__WEBPACK_IMPORTED_MODULE_6__["default"].encodeEmail(props.email);
  var db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore(); //lessondata及びmessageを取得

  var getMessageData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return db.collection("lessons").doc(router.query.lessonid).get() //取得したデータをlessondataにしまってから、それをステートに突っ込む
              .then(function (doc) {
                var lessondata = doc.data();
                setCreaterid(lessondata.createrid);
                setLessonname(lessondata.lessonname);
                setBuyerid(lessondata.buyerid);
              });

            case 2:
              _context.next = 4;
              return db.collection("users").doc(createrid).get().then(function (doc) {
                var createrdata = doc.data();
                setCreaterName(createrdata.profile.name);
              });

            case 4:
              _context.next = 6;
              return db.collection("lessons").doc(router.query.lessonid).collection("message").orderBy("time").get() //取得したデータをmessagedata配列に入れる。
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
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        children: creatername
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        style: style,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 21
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 19
                    }, this));
                  } else {
                    messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        style: style,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 21
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 19
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
                    lineNumber: 91,
                    columnNumber: 36
                  }, this);

                  setMessages(errorMessage);
                }
              });

            case 6:
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
      lineNumber: 99,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 3
  }, this);
}

_s(Message, "34tLb3R16b2O1iBrYe/OkkkyyC8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJjcmVhdGVybmFtZSIsInNldENyZWF0ZXJOYW1lIiwiYnV5ZXJuYW1lIiwic2V0QnV5ZXJOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImZvbnRTaXplIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIm1lc3NhZ2VkYXRhIiwibWVzc2FnZWl0ZW1zIiwicm91dGVyIiwidXNlUm91dGVyIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJnZXRNZXNzYWdlRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImxlc3NvbmlkIiwiZ2V0IiwidGhlbiIsImxlc3NvbmRhdGEiLCJkYXRhIiwiY3JlYXRlcmRhdGEiLCJwcm9maWxlIiwibmFtZSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsImVycm9yTWVzc2FnZSIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUFBOztBQUN0QjtBQURzQixrQkFFVUMsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFZkMsU0FGZTtBQUFBLE1BRUxDLFlBRks7O0FBQUEsbUJBR1NG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QTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUt6QjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHSixRQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0M7O0dBaEdRTCxPO1VBd0JRMkIscUQ7OztLQXhCUjNCLE87QUFtR1RBLE9BQU8sR0FBR3NELDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J2RCxPQUF4QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS4yZDY2NTE4ZDk3Nzk4NWM5ZDYzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSAocHJvcHMpe1xyXG4gIC8v44K544OG44O844OI5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1eWVyaWQsc2V0QnV5ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NyZWF0ZXJuYW1lLHNldENyZWF0ZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXllcm5hbWUsIHNldEJ1eWVyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBcclxuICAvL+mAgeS/oeiAheOBq+OCiOOBo+OBpuOCueOCv+OCpOODq+OCkuWkieabtOOBmeOCi+ODhuOCueODiOeUqOOBruOCueOCv+OCpOODq1xyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgLy8gYm9yZGVyOlwic29saWQgMXB4ICNERERcIiwgXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwiI0UwRTBFMFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjdweFwiLFxyXG4gICAgaGVpZ2h0OlwiNDBweFwiLFxyXG4gICAgdmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLFxyXG4gICAgcGFkZGluZzpcIjEwcHggMjBweCAwcHggMjBweFwiLFxyXG4gICAgZm9udFNpemU6XCIyMHB4XCIsXHJcbiAgICBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206XCIxMHB4XCIsXHJcbiAgfVxyXG4gIGNvbnN0IG1lc3NhZ2VkYXRhPVtdO1xyXG4gIGNvbnN0IG1lc3NhZ2VpdGVtcz1bXTtcclxuICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcblxyXG4gIC8vbGVzc29uZGF0YeWPiuOBs21lc3NhZ2XjgpLlj5blvpdcclxuICBjb25zdCBnZXRNZXNzYWdlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIC8v5YWI44Gr44Os44OD44K544Oz5ZCN44Go5L2c5oiQ6ICF44CB6LO85YWl6ICF44GuaWTjgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldEJ1eWVyaWQobGVzc29uZGF0YS5idXllcmlkKTtcclxuICAgICAgfSlcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY3JlYXRlcmlkKS5nZXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZXJkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBzZXRDcmVhdGVyTmFtZShjcmVhdGVyZGF0YS5wcm9maWxlLm5hbWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC8v44Oh44OD44K744O844K45oOF5aCx5Y+W5b6X5Yem55CGXHJcbiAgICAgICAgLy9vcmRlckJ5KHRpbWUp44Gn5pmC6ZaT44Gu5Y+k44GE6aCG44Gr5Lim44G544KLXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5jb2xsZWN0aW9uKFwibWVzc2FnZVwiKS5vcmRlckJ5KFwidGltZVwiKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbWVzc2FnZWRhdGHphY3liJfjgavlhaXjgozjgovjgIJcclxuICAgICAgICAvL+mFjeWIl+OBrue5sOOCiui/lOOBl+WHpueQhuOBp+ODoeODg+OCu+ODvOOCuOOBrmpzeOOCkuS9nOOCiuOAgVxyXG4gICAgICAgIC8vbWVzc2FnZWl0ZW1z44Gr5YWl44KM44Gm44CB5pyA5b6M44Grc3RhdGXjgavlhaXjgozjgotcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZWRhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIG1lc3NhZ2VkYXRhKXtcclxuICAgICAgICAgICAgICBsZXQgdGV4dCA9IG1lc3NhZ2VkYXRhW2ldLnRleHQ7XHJcbiAgICAgICAgICAgICAgbGV0IHVzZXJpZCA9IG1lc3NhZ2VkYXRhW2ldLnVzZXJpZDtcclxuICAgICAgICAgICAgICAvL+mAgeS/oeiAheOBqFJlZHV444Oh44Ki44OJ44Gu5q+U6LyD44Gn44K544K/44Kk44Or5YiG5bKQXHJcbiAgICAgICAgICAgICAgaWYodXNlcmlkID09IGVtYWlsKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjcmVhdGVybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9Pnt0ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTt9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9Pnt0ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/kvZzmiJDogIXjgIHos7zlhaXogIXku6XlpJbjg6Hjg4Pjgrvjg7zjgrjjgYzopovjgozjgarjgYTjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgaWYgKGVtYWlsPT1jcmVhdGVyaWQgfHwgZW1haWw9PWJ1eWVyaWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZWl0ZW1zKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZT08cD7jgZTliKnnlKjjgYTjgZ/jgaDjgZHjgb7jgZvjgpM8L3A+XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgfVxyXG4gIFxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxidXR0b24gb25DbGljaz17Z2V0TWVzc2FnZURhdGF9PuiqreOBv+i+vOOBvzwvYnV0dG9uPlxyXG4gICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICB7bWVzc2FnZXN9XHJcbiAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuXHJcbk1lc3NhZ2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNZXNzYWdlKTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwic291cmNlUm9vdCI6IiJ9