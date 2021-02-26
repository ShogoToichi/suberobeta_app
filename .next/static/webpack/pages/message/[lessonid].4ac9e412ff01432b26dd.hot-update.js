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
                          style: style,
                          children: text
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 21
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 21
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 19
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                          style: style,
                          children: text
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 21
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 72,
                          columnNumber: 21
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
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
                      lineNumber: 82,
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
      lineNumber: 90,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwibWVzc2FnZWRhdGEiLCJtZXNzYWdlaXRlbXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRNZXNzYWdlRGF0YSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJnZXQiLCJ0aGVuIiwibGVzc29uZGF0YSIsImRhdGEiLCJvcmRlckJ5IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwiaSIsInRleHQiLCJ1c2VyaWQiLCJlcnJvck1lc3NhZ2UiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFDdEI7QUFEc0Isa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWZDLFNBRmU7QUFBQSxNQUVMQyxZQUZLOztBQUFBLG1CQUdTRixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdmRyxRQUhlO0FBQUEsTUFHTkMsV0FITTs7QUFBQSxtQkFJTUosc0RBQVEsQ0FBQyxFQUFELENBSmQ7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Q0YsbUJBeEIwQixDQXlCM0I7OztBQUNBLHNCQUFJbkIsS0FBSyxJQUFFdEIsU0FBUCxJQUFvQnNCLEtBQUssSUFBRWxCLE9BQS9CLEVBQXVDO0FBQ25DRCwrQkFBVyxDQUFDZSxZQUFELENBQVg7QUFDRCxtQkFGSCxNQUdNO0FBQ0Ysd0JBQU15QixZQUFZLGdCQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFuQjs7QUFDQXhDLCtCQUFXLENBQUN3QyxZQUFELENBQVg7QUFDRDtBQUNKLGlCQXRDSDtBQXVDTCxlQWpETyxDQUxjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQWR0QixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQXdERixzQkFDRTtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFQSxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS2Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR0osUUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9DOztHQXZGUUwsTztVQXNCUXVCLHFEOzs7S0F0QlJ2QixPO0FBMEZUQSxPQUFPLEdBQUcrQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCaEQsT0FBeEIsQ0FBVjtBQUNlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tsZXNzb25pZF0uNGFjOWU0MTJmZjAxNDMyYjI2ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UgKHByb3BzKXtcclxuICAvL+OCueODhuODvOODiOWumue+qVxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXllcmlkLHNldEJ1eWVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIC8v6YCB5L+h6ICF44Gr44KI44Gj44Gm44K544K/44Kk44Or44KS5aSJ5pu044GZ44KL44OG44K544OI55So44Gu44K544K/44Kk44OrXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAvLyBib3JkZXI6XCJzb2xpZCAxcHggI0RERFwiLCBcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCIjRTBFMEUwXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICBoZWlnaHQ6XCI0MHB4XCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsXHJcbiAgICBwYWRkaW5nOlwiMTBweCAyMHB4IDBweCAyMHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjIwcHhcIixcclxuICAgIGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIixcclxuICAgIG1hcmdpbkJvdHRvbTpcIjEwcHhcIixcclxuICB9XHJcbiAgY29uc3QgbWVzc2FnZWRhdGE9W107XHJcbiAgY29uc3QgbWVzc2FnZWl0ZW1zPVtdO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvL2xlc3NvbmRhdGHlj4rjgbNtZXNzYWdl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TWVzc2FnZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIC8v5YWI44Gr44Os44OD44K544Oz5ZCN44Go5L2c5oiQ6ICF44CB6LO85YWl6ICF44GuaWTjgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldEJ1eWVyaWQobGVzc29uZGF0YS5idXllcmlkKTtcclxuXHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjmg4XloLHlj5blvpflh6bnkIZcclxuICAgICAgICAvL29yZGVyQnkodGltZSnjgafmmYLplpPjga7lj6TjgYTpoIbjgavkuKbjgbnjgotcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5jb2xsZWN0aW9uKFwibWVzc2FnZVwiKS5vcmRlckJ5KFwidGltZVwiKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbWVzc2FnZWRhdGHphY3liJfjgavlhaXjgozjgovjgIJcclxuICAgICAgICAvL+mFjeWIl+OBrue5sOOCiui/lOOBl+WHpueQhuOBp+ODoeODg+OCu+ODvOOCuOOBrmpzeOOCkuS9nOOCiuOAgVxyXG4gICAgICAgIC8vbWVzc2FnZWl0ZW1z44Gr5YWl44KM44Gm44CB5pyA5b6M44Grc3RhdGXjgavlhaXjgozjgotcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZWRhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIG1lc3NhZ2VkYXRhKXtcclxuICAgICAgICAgICAgICBsZXQgdGV4dCA9IG1lc3NhZ2VkYXRhW2ldLnRleHQ7XHJcbiAgICAgICAgICAgICAgbGV0IHVzZXJpZCA9IG1lc3NhZ2VkYXRhW2ldLnVzZXJpZDtcclxuICAgICAgICAgICAgICAvL+mAgeS/oeiAheOBqFJlZHV444Oh44Ki44OJ44Gu5q+U6LyD44Gn44K544K/44Kk44Or5YiG5bKQXHJcbiAgICAgICAgICAgICAgaWYodXNlcmlkID09IGVtYWlsKXtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT57dGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7fVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9Pnt0ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/kvZzmiJDogIXjgIHos7zlhaXogIXku6XlpJbjg6Hjg4Pjgrvjg7zjgrjjgYzopovjgozjgarjgYTjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgaWYgKGVtYWlsPT1jcmVhdGVyaWQgfHwgZW1haWw9PWJ1eWVyaWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZWl0ZW1zKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZT08cD7jgZTliKnnlKjjgYTjgZ/jgaDjgZHjgb7jgZvjgpM8L3A+XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgfSl9XHJcbiAgXHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNZXNzYWdlRGF0YX0+6Kqt44G/6L6844G/PC9idXR0b24+XHJcbiAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgIHttZXNzYWdlc31cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=