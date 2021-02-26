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
              return db.collection(users).doc(lessondata.createrid).get().then(function (doc) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJjcmVhdGVybmFtZSIsInNldENyZWF0ZXJOYW1lIiwiYnV5ZXJuYW1lIiwic2V0QnV5ZXJOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZyIsImZvbnRTaXplIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIm1lc3NhZ2VkYXRhIiwibWVzc2FnZWl0ZW1zIiwicm91dGVyIiwidXNlUm91dGVyIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJnZXRNZXNzYWdlRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImxlc3NvbmlkIiwiZ2V0IiwidGhlbiIsImxlc3NvbmRhdGEiLCJkYXRhIiwidXNlcnMiLCJjcmVhdGVyZGF0YSIsInByb2ZpbGUiLCJuYW1lIiwib3JkZXJCeSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwicHVzaCIsImkiLCJ0ZXh0IiwidXNlcmlkIiwiZXJyb3JNZXNzYWdlIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQ3RCO0FBRHNCLGtCQUVVQyxzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVmQyxTQUZlO0FBQUEsTUFFTEMsWUFGSzs7QUFB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS3pCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dKLFFBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPQzs7R0FoR1FMLE87VUF3QlEyQixxRDs7O0tBeEJSM0IsTztBQW1HVEEsT0FBTyxHQUFHdUQsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnhELE9BQXhCLENBQVY7QUFDZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bbGVzc29uaWRdLjY0MGYwYWJmZjM5MTE5ZGRiM2M3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlIChwcm9wcyl7XHJcbiAgLy/jgrnjg4bjg7zjg4jlrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcyxzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV5ZXJpZCxzZXRCdXllcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlcm5hbWUsc2V0Q3JlYXRlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1eWVybmFtZSwgc2V0QnV5ZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIC8v6YCB5L+h6ICF44Gr44KI44Gj44Gm44K544K/44Kk44Or44KS5aSJ5pu044GZ44KL44OG44K544OI55So44Gu44K544K/44Kk44OrXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAvLyBib3JkZXI6XCJzb2xpZCAxcHggI0RERFwiLCBcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCIjRTBFMEUwXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICBoZWlnaHQ6XCI0MHB4XCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsXHJcbiAgICBwYWRkaW5nOlwiMTBweCAyMHB4IDBweCAyMHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjIwcHhcIixcclxuICAgIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIixcclxuICAgIG1hcmdpbkJvdHRvbTpcIjEwcHhcIixcclxuICB9XHJcbiAgY29uc3QgbWVzc2FnZWRhdGE9W107XHJcbiAgY29uc3QgbWVzc2FnZWl0ZW1zPVtdO1xyXG4gIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuXHJcbiAgLy9sZXNzb25kYXRh5Y+K44GzbWVzc2FnZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldE1lc3NhZ2VEYXRhPSBhc3luYygpPT57XHJcbiAgICAvL3JvdXRlci5xdWVyeS5sZXNzb25pZOOBp+ODmuODvOOCuOOBrnVybOOBruacq+WwvuOCkuWPluW+l1xyXG4gICAgLy/lhYjjgavjg6zjg4Pjgrnjg7PlkI3jgajkvZzmiJDogIXjgIHos7zlhaXogIXjga5pZOOCkuWPluW+l1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0QnV5ZXJpZChsZXNzb25kYXRhLmJ1eWVyaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKHVzZXJzKS5kb2MobGVzc29uZGF0YS5jcmVhdGVyaWQpLmdldCgpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlcmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIHNldENyZWF0ZXJOYW1lKGNyZWF0ZXJkYXRhLnByb2ZpbGUubmFtZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjmg4XloLHlj5blvpflh6bnkIZcclxuICAgICAgICAvL29yZGVyQnkodGltZSnjgafmmYLplpPjga7lj6TjgYTpoIbjgavkuKbjgbnjgotcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlXCIpLm9yZGVyQnkoXCJ0aW1lXCIpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJtZXNzYWdlZGF0YemFjeWIl+OBq+WFpeOCjOOCi+OAglxyXG4gICAgICAgIC8v6YWN5YiX44Gu57mw44KK6L+U44GX5Yem55CG44Gn44Oh44OD44K744O844K444GuanN444KS5L2c44KK44CBXHJcbiAgICAgICAgLy9tZXNzYWdlaXRlbXPjgavlhaXjgozjgabjgIHmnIDlvozjgatzdGF0ZeOBq+WFpeOCjOOCi1xyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gbWVzc2FnZWRhdGEpe1xyXG4gICAgICAgICAgICAgIGxldCB0ZXh0ID0gbWVzc2FnZWRhdGFbaV0udGV4dDtcclxuICAgICAgICAgICAgICBsZXQgdXNlcmlkID0gbWVzc2FnZWRhdGFbaV0udXNlcmlkO1xyXG4gICAgICAgICAgICAgIC8v6YCB5L+h6ICF44GoUmVkdXjjg6HjgqLjg4njga7mr5TovIPjgafjgrnjgr/jgqTjg6vliIblspBcclxuICAgICAgICAgICAgICBpZih1c2VyaWQgPT0gZW1haWwpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NyZWF0ZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO31cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+S9nOaIkOiAheOAgeizvOWFpeiAheS7peWkluODoeODg+OCu+ODvOOCuOOBjOimi+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlaXRlbXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlPTxwPuOBlOWIqeeUqOOBhOOBn+OBoOOBkeOBvuOBm+OCkzwvcD5cclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICB9XHJcbiAgXHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNZXNzYWdlRGF0YX0+6Kqt44G/6L6844G/PC9idXR0b24+XHJcbiAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgIHttZXNzYWdlc31cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=