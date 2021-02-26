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
    marginBottom: "10px",
    marginLeft: ""
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
                        style: {
                          marginBottom: "0px"
                        },
                        children: creatername
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        style: style,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 21
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 19
                    }, this));
                  } else {
                    messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        style: style,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 21
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
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
                    lineNumber: 92,
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
      lineNumber: 100,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJjcmVhdGVybmFtZSIsInNldENyZWF0ZXJOYW1lIiwiYnV5ZXJuYW1lIiwic2V0QnV5ZXJOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImZvbnRTaXplIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZ2V0TWVzc2FnZURhdGEiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImNyZWF0ZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJvcmRlckJ5IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwiaSIsInRleHQiLCJ1c2VyaWQiLCJlcnJvck1lc3NhZ2UiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFDdEI7QUFEc0Isa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWZDLFNBRmU7QUFBQSxNQUVMQyxZQUZL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QUFBQTtBQUFBLEtBQXBCOztBQTRERixzQkFDRTtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFQSxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSzFCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dKLFFBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPQzs7R0FqR1FMLE87VUF5QlE0QixxRDs7O0tBekJSNUIsTztBQW9HVEEsT0FBTyxHQUFHdUQsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnhELE9BQXhCLENBQVY7QUFDZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bbGVzc29uaWRdLjhjMWNiMTFlN2NmM2FjYjVkYzkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlIChwcm9wcyl7XHJcbiAgLy/jgrnjg4bjg7zjg4jlrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcyxzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV5ZXJpZCxzZXRCdXllcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlcm5hbWUsc2V0Q3JlYXRlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1eWVybmFtZSwgc2V0QnV5ZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIC8v6YCB5L+h6ICF44Gr44KI44Gj44Gm44K544K/44Kk44Or44KS5aSJ5pu044GZ44KL44OG44K544OI55So44Gu44K544K/44Kk44OrXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAvLyBib3JkZXI6XCJzb2xpZCAxcHggI0RERFwiLCBcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCIjRTBFMEUwXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICBoZWlnaHQ6XCI0MHB4XCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsXHJcbiAgICBwYWRkaW5nOlwiMTBweCAyMHB4IDBweCAyMHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjIwcHhcIixcclxuICAgIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIixcclxuICAgIG1hcmdpbkJvdHRvbTpcIjEwcHhcIixcclxuICAgIG1hcmdpbkxlZnQ6XCJcIlxyXG4gIH1cclxuICBjb25zdCBtZXNzYWdlZGF0YT1bXTtcclxuICBjb25zdCBtZXNzYWdlaXRlbXM9W107XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHlj4rjgbNtZXNzYWdl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TWVzc2FnZURhdGE9IGFzeW5jKCk9PntcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICAvL+WFiOOBq+ODrOODg+OCueODs+WQjeOBqOS9nOaIkOiAheOAgeizvOWFpeiAheOBrmlk44KS5Y+W5b6XXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRCdXllcmlkKGxlc3NvbmRhdGEuYnV5ZXJpZCk7XHJcbiAgICAgIH0pXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNyZWF0ZXJpZCkuZ2V0KClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBjb25zdCBjcmVhdGVyZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc2V0Q3JlYXRlck5hbWUoY3JlYXRlcmRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgfSlcclxuICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOaDheWgseWPluW+l+WHpueQhlxyXG4gICAgICAgIC8vb3JkZXJCeSh0aW1lKeOBp+aZgumWk+OBruWPpOOBhOmghuOBq+S4puOBueOCi1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VcIikub3JkZXJCeShcInRpbWVcIilcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkm1lc3NhZ2VkYXRh6YWN5YiX44Gr5YWl44KM44KL44CCXHJcbiAgICAgICAgLy/phY3liJfjga7nubDjgorov5TjgZflh6bnkIbjgafjg6Hjg4Pjgrvjg7zjgrjjga5qc3jjgpLkvZzjgorjgIFcclxuICAgICAgICAvL21lc3NhZ2VpdGVtc+OBq+WFpeOCjOOBpuOAgeacgOW+jOOBq3N0YXRl44Gr5YWl44KM44KLXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VkYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBtZXNzYWdlZGF0YSl7XHJcbiAgICAgICAgICAgICAgbGV0IHRleHQgPSBtZXNzYWdlZGF0YVtpXS50ZXh0O1xyXG4gICAgICAgICAgICAgIGxldCB1c2VyaWQgPSBtZXNzYWdlZGF0YVtpXS51c2VyaWQ7XHJcbiAgICAgICAgICAgICAgLy/pgIHkv6HogIXjgahSZWR1eOODoeOCouODieOBruavlOi8g+OBp+OCueOCv+OCpOODq+WIhuWykFxyXG4gICAgICAgICAgICAgIGlmKHVzZXJpZCA9PSBlbWFpbCl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjBweFwifX0+e2NyZWF0ZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO31cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+S9nOaIkOiAheOAgeizvOWFpeiAheS7peWkluODoeODg+OCu+ODvOOCuOOBjOimi+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlaXRlbXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlPTxwPuOBlOWIqeeUqOOBhOOBn+OBoOOBkeOBvuOBm+OCkzwvcD5cclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICB9XHJcbiAgXHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNZXNzYWdlRGF0YX0+6Kqt44G/6L6844G/PC9idXR0b24+XHJcbiAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgIHttZXNzYWdlc31cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=