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

  var _this = this;

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
    backgroundColor: "red"
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
                    var userid = messagedata[i].userid;

                    if (userid == email) {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        style: style1,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 21
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        style: style2,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 21
                      }, this));
                    }
                  }

                  if (email == createrid || email == buyerid) {
                    setMessages(messageitems);
                  } else {
                    errorMessage = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                      children: "\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u305B\u3093"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 30
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

  var userfilter = function userfilter() {
    if (email == createrid || email == buyerid) {
      return messages;
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u305B\u3093"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: getMessageData,
      children: "\u8AAD\u307F\u8FBC\u307F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }, this), userfilter]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsImVycm9yTWVzc2FnZSIsInVzZXJmaWx0ZXIiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEI7QUFEc0Isa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWZDLFNBRmU7QUFBQSxNQUVMQyxZQUZLOztBQUFBLG1CQUdTRixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdmRyxRQUhlO0FBQUEsTUFHTkMsV0FITTs7QUFBQSxtQkFJTUosc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUlmSyxPQUplO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYU4sc0RBQVEsQ0FBQyxF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VUFBVSxHQUFFLFNBQVpBLFVBQVksR0FBSTtBQUNwQixRQUFJdEIsS0FBSyxJQUFFaEIsU0FBUCxJQUFvQmdCLEtBQUssSUFBRVosT0FBL0IsRUFBdUM7QUFDckMsYUFBT0YsUUFBUDtBQUNELEtBRkQsTUFHSTtBQUNGLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBUUYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRWEsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUtUO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dnQyxVQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0M7O0dBakZRekMsTztVQWlCUWlCLHFEOzs7S0FqQlJqQixPO0FBb0ZUQSxPQUFPLEdBQUcwQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCM0MsT0FBeEIsQ0FBVjtBQUNlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tsZXNzb25pZF0uNTM4YjVkMjhiOTc4MGM0Njk5Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UgKHByb3BzKXtcclxuICAvL+OCueODhuODvOODiOWumue+qVxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXllcmlkLHNldEJ1eWVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIC8v6YCB5L+h6ICF44Gr44KI44Gj44Gm44K544K/44Kk44Or44KS5aSJ5pu044GZ44KL44OG44K544OI55So44Gu44K544K/44Kk44OrXHJcbiAgY29uc3Qgc3R5bGUyID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yIDpcImJsdWVcIixcclxuICB9XHJcbiAgY29uc3Qgc3R5bGUxID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yIDpcInJlZFwiLFxyXG4gIH1cclxuICBjb25zdCBtZXNzYWdlZGF0YT1bXTtcclxuICBjb25zdCBtZXNzYWdlaXRlbXM9W107XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vbGVzc29uZGF0YeWPiuOBs21lc3NhZ2XjgpLlj5blvpdcclxuICBjb25zdCBnZXRNZXNzYWdlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAvL3JvdXRlci5xdWVyeS5sZXNzb25pZOOBp+ODmuODvOOCuOOBrnVybOOBruacq+WwvuOCkuWPluW+l1xyXG4gICAgLy/lhYjjgavjg6zjg4Pjgrnjg7PlkI3jgajkvZzmiJDogIXjgIHos7zlhaXogIXjga5pZOOCkuWPluW+l1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0QnV5ZXJpZChsZXNzb25kYXRhLmJ1eWVyaWQpO1xyXG5cclxuICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOaDheWgseWPluW+l+WHpueQhlxyXG4gICAgICAgIC8vb3JkZXJCeSh0aW1lKeOBp+aZgumWk+OBruWPpOOBhOmghuOBq+S4puOBueOCi1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlXCIpLm9yZGVyQnkoXCJ0aW1lXCIpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJtZXNzYWdlZGF0YemFjeWIl+OBq+WFpeOCjOOCi+OAglxyXG4gICAgICAgIC8v6YWN5YiX44Gu57mw44KK6L+U44GX5Yem55CG44Gn44Oh44OD44K744O844K444GuanN444KS5L2c44KK44CBXHJcbiAgICAgICAgLy9tZXNzYWdlaXRlbXPjgavlhaXjgozjgabjgIHmnIDlvozjgatzdGF0ZeOBq+WFpeOCjOOCi1xyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gbWVzc2FnZWRhdGEpe1xyXG4gICAgICAgICAgICAgIGxldCB0ZXh0ID0gbWVzc2FnZWRhdGFbaV0udGV4dDtcclxuICAgICAgICAgICAgICBsZXQgdXNlcmlkID0gbWVzc2FnZWRhdGFbaV0udXNlcmlkO1xyXG4gICAgICAgICAgICAgIGlmKHVzZXJpZCA9PSBlbWFpbCl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGUxfT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICApO31cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZTJ9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbWFpbD09Y3JlYXRlcmlkIHx8IGVtYWlsPT1idXllcmlkKXtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VpdGVtcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U9PHA+44GU5Yip55So44GE44Gf44Gg44GR44G+44Gb44KTPC9wPlxyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gIH0pfVxyXG4gIFxyXG4gIGNvbnN0IHVzZXJmaWx0ZXIgPSgpPT57XHJcbiAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiA8cD7jg6Hjg4Pjgrvjg7zjgrjjga/jgZTliKnnlKjjgYTjgZ/jgaDjgZHjgb7jgZvjgpM8L3A+XHJcbiAgICB9XHJcbiAgfVxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxidXR0b24gb25DbGljaz17Z2V0TWVzc2FnZURhdGF9PuiqreOBv+i+vOOBvzwvYnV0dG9uPlxyXG4gICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICB7dXNlcmZpbHRlcn1cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=