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
    border: "solid 1px #DDD",
    backgroundColor: "#DDD",
    borderRadius: "2px"
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
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        style: style1,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 21
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        style: style2,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
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
                      lineNumber: 73,
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
      lineNumber: 81,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsImVycm9yTWVzc2FnZSIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUFBOztBQUN0QjtBQURzQixrQkFFVUMsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFZkMsU0FGZTtBQUFBLE1BRUxDLFlBRks7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR2ZHLFFBSGU7QUFBQSxNQUdOQyxXQUhNOztBQUFBLG1CQUlNSixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWZLLE9BSmU7QUFBQSxNQUlQQyxVQUpPOztBQUFBLG1CQUthTixzREFBUSxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFkdEIsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFpREYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRUEsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUtYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dKLFFBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPQzs7R0E5RVFMLE87VUFvQlFtQixxRDs7O0tBcEJSbkIsTztBQWlGVEEsT0FBTyxHQUFHMkMsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QjVDLE9BQXhCLENBQVY7QUFDZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bbGVzc29uaWRdLmUwMjEzNWJmMTlkMzFmNGQ4MzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlIChwcm9wcyl7XHJcbiAgLy/jgrnjg4bjg7zjg4jlrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcyxzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV5ZXJpZCxzZXRCdXllcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBcclxuICAvL+mAgeS/oeiAheOBq+OCiOOBo+OBpuOCueOCv+OCpOODq+OCkuWkieabtOOBmeOCi+ODhuOCueODiOeUqOOBruOCueOCv+OCpOODq1xyXG4gIGNvbnN0IHN0eWxlMiA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCJibHVlXCIsXHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlMSA9IHtcclxuICAgIGJvcmRlcjpcInNvbGlkIDFweCAjREREXCIsIFxyXG4gICAgYmFja2dyb3VuZENvbG9yIDpcIiNERERcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBtZXNzYWdlZGF0YT1bXTtcclxuICBjb25zdCBtZXNzYWdlaXRlbXM9W107XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vbGVzc29uZGF0YeWPiuOBs21lc3NhZ2XjgpLlj5blvpdcclxuICBjb25zdCBnZXRNZXNzYWdlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAvL3JvdXRlci5xdWVyeS5sZXNzb25pZOOBp+ODmuODvOOCuOOBrnVybOOBruacq+WwvuOCkuWPluW+l1xyXG4gICAgLy/lhYjjgavjg6zjg4Pjgrnjg7PlkI3jgajkvZzmiJDogIXjgIHos7zlhaXogIXjga5pZOOCkuWPluW+l1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0QnV5ZXJpZChsZXNzb25kYXRhLmJ1eWVyaWQpO1xyXG5cclxuICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOaDheWgseWPluW+l+WHpueQhlxyXG4gICAgICAgIC8vb3JkZXJCeSh0aW1lKeOBp+aZgumWk+OBruWPpOOBhOmghuOBq+S4puOBueOCi1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlXCIpLm9yZGVyQnkoXCJ0aW1lXCIpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJtZXNzYWdlZGF0YemFjeWIl+OBq+WFpeOCjOOCi+OAglxyXG4gICAgICAgIC8v6YWN5YiX44Gu57mw44KK6L+U44GX5Yem55CG44Gn44Oh44OD44K744O844K444GuanN444KS5L2c44KK44CBXHJcbiAgICAgICAgLy9tZXNzYWdlaXRlbXPjgavlhaXjgozjgabjgIHmnIDlvozjgatzdGF0ZeOBq+WFpeOCjOOCi1xyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gbWVzc2FnZWRhdGEpe1xyXG4gICAgICAgICAgICAgIGxldCB0ZXh0ID0gbWVzc2FnZWRhdGFbaV0udGV4dDtcclxuICAgICAgICAgICAgICBsZXQgdXNlcmlkID0gbWVzc2FnZWRhdGFbaV0udXNlcmlkO1xyXG4gICAgICAgICAgICAgIC8v6YCB5L+h6ICF44GoUmVkdXjjg6HjgqLjg4njga7mr5TovIPjgafjgrnjgr/jgqTjg6vliIblspBcclxuICAgICAgICAgICAgICBpZih1c2VyaWQgPT0gZW1haWwpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlMX0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgKTt9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGUyfT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+S9nOaIkOiAheOAgeizvOWFpeiAheS7peWkluODoeODg+OCu+ODvOOCuOOBjOimi+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlaXRlbXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlPTxwPuOBlOWIqeeUqOOBhOOBn+OBoOOBkeOBvuOBm+OCkzwvcD5cclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICB9KX1cclxuICBcclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE1lc3NhZ2VEYXRhfT7oqq3jgb/ovrzjgb88L2J1dHRvbj5cclxuICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAge21lc3NhZ2VzfVxyXG4gIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcblxyXG5NZXNzYWdlID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTWVzc2FnZSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==