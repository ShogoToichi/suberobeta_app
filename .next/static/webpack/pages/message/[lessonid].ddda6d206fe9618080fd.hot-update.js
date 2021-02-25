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
                        columnNumber: 19
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        style: style2,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 19
                      }, this));
                    }
                  }

                  setMessages(messageitems);
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
        lineNumber: 73,
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
      lineNumber: 78,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsInVzZXJmaWx0ZXIiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEI7QUFEc0Isa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWZDLFNBRmU7QUFBQSxNQUVMQyxZQUZLOztBQUFBLG1CQUdTRixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdmRyxRQUhlO0FBQUEsTUFHTkMsV0FITTs7QUFBQSxtQkFJTUosc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUlmSyxPQUplO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYU4sc0RBQVEsQ0FBQyxFQUFELENBTHJCO0FBQUEs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UUYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRWEsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUtUO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dKLFFBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPQzs7R0EzRVFMLE87VUFpQlFpQixxRDs7O0tBakJSakIsTztBQThFVEEsT0FBTyxHQUFHeUMsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QjFDLE9BQXhCLENBQVY7QUFDZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZS9bbGVzc29uaWRdLmRkZGE2ZDIwNmZlOTYxODA4MGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlIChwcm9wcyl7XHJcbiAgLy/jgrnjg4bjg7zjg4jlrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcyxzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV5ZXJpZCxzZXRCdXllcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBcclxuICAvL+mAgeS/oeiAheOBq+OCiOOBo+OBpuOCueOCv+OCpOODq+OCkuWkieabtOOBmeOCi+ODhuOCueODiOeUqOOBruOCueOCv+OCpOODq1xyXG4gIGNvbnN0IHN0eWxlMiA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCJibHVlXCIsXHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlMSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCJyZWRcIixcclxuICB9XHJcbiAgY29uc3QgbWVzc2FnZWRhdGE9W107XHJcbiAgY29uc3QgbWVzc2FnZWl0ZW1zPVtdO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvL2xlc3NvbmRhdGHlj4rjgbNtZXNzYWdl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TWVzc2FnZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIC8v5YWI44Gr44Os44OD44K544Oz5ZCN44Go5L2c5oiQ6ICF44CB6LO85YWl6ICF44GuaWTjgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldEJ1eWVyaWQobGVzc29uZGF0YS5idXllcmlkKTtcclxuXHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjmg4XloLHlj5blvpflh6bnkIZcclxuICAgICAgICAvL29yZGVyQnkodGltZSnjgafmmYLplpPjga7lj6TjgYTpoIbjgavkuKbjgbnjgotcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5jb2xsZWN0aW9uKFwibWVzc2FnZVwiKS5vcmRlckJ5KFwidGltZVwiKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbWVzc2FnZWRhdGHphY3liJfjgavlhaXjgozjgovjgIJcclxuICAgICAgICAvL+mFjeWIl+OBrue5sOOCiui/lOOBl+WHpueQhuOBp+ODoeODg+OCu+ODvOOCuOOBrmpzeOOCkuS9nOOCiuOAgVxyXG4gICAgICAgIC8vbWVzc2FnZWl0ZW1z44Gr5YWl44KM44Gm44CB5pyA5b6M44Grc3RhdGXjgavlhaXjgozjgotcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgICAgICBtZXNzYWdlZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGZvcihsZXQgaSBpbiBtZXNzYWdlZGF0YSl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gbWVzc2FnZWRhdGFbaV0udGV4dDtcclxuICAgICAgICAgICAgbGV0IHVzZXJpZCA9IG1lc3NhZ2VkYXRhW2ldLnVzZXJpZDtcclxuICAgICAgICAgICAgaWYodXNlcmlkID09IGVtYWlsKXtcclxuICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlMX0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICk7fVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlMn0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VpdGVtcyk7XHJcbiAgICAgICAgICB9KVxyXG4gIH0pfVxyXG4gIFxyXG4gIGNvbnN0IHVzZXJmaWx0ZXIgPSgpPT57XHJcbiAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiA8cD7jg6Hjg4Pjgrvjg7zjgrjjga/jgZTliKnnlKjjgYTjgZ/jgaDjgZHjgb7jgZvjgpM8L3A+XHJcbiAgICB9XHJcbiAgfVxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxidXR0b24gb25DbGljaz17Z2V0TWVzc2FnZURhdGF9PuiqreOBv+i+vOOBvzwvYnV0dG9uPlxyXG4gICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICB7bWVzc2FnZXN9XHJcbiAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuXHJcbk1lc3NhZ2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNZXNzYWdlKTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwic291cmNlUm9vdCI6IiJ9