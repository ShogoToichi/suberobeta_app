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

                  if (email == createrid || email == buyerid) {
                    setMessages(messageitems);
                  } else {
                    error;
                    setMessages();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsImVycm9yIiwidXNlcmZpbHRlciIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUFBOztBQUFBOztBQUN0QjtBQURzQixrQkFFVUMsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFZkMsU0FGZTtBQUFBLE1BRUxDLFlBRks7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR2ZHLFFBSGU7QUFBQSxNQUdOQyxXQUhNOztBQUFBLG1CQUlNSixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWZLLE9BSmU7QUFBQSxNQUlQQyxVQUpPOztBQUFBLG1CQUthTixzREFBUSxDQUFDLEVBQUQsQ0FM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SyxJQUFFWixPQUEvQixFQUF1QztBQUNyQyxhQUFPRixRQUFQO0FBQ0QsS0FGRCxNQUdJO0FBQ0YsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFRRixzQkFDRTtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFYSxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS1Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR2dDLFVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPQzs7R0FqRlF6QyxPO1VBaUJRaUIscUQ7OztLQWpCUmpCLE87QUFvRlRBLE9BQU8sR0FBRzBDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IzQyxPQUF4QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS5kZjViZjU5MWYzZjA4MDE5ZDVkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSAocHJvcHMpe1xyXG4gIC8v44K544OG44O844OI5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1eWVyaWQsc2V0QnV5ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcbiAgLy/pgIHkv6HogIXjgavjgojjgaPjgabjgrnjgr/jgqTjg6vjgpLlpInmm7TjgZnjgovjg4bjgrnjg4jnlKjjga7jgrnjgr/jgqTjg6tcclxuICBjb25zdCBzdHlsZTIgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwiYmx1ZVwiLFxyXG4gIH1cclxuICBjb25zdCBzdHlsZTEgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwicmVkXCIsXHJcbiAgfVxyXG4gIGNvbnN0IG1lc3NhZ2VkYXRhPVtdO1xyXG4gIGNvbnN0IG1lc3NhZ2VpdGVtcz1bXTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy9sZXNzb25kYXRh5Y+K44GzbWVzc2FnZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldE1lc3NhZ2VEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICAvL+WFiOOBq+ODrOODg+OCueODs+WQjeOBqOS9nOaIkOiAheOAgeizvOWFpeiAheOBrmlk44KS5Y+W5b6XXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRCdXllcmlkKGxlc3NvbmRhdGEuYnV5ZXJpZCk7XHJcblxyXG4gICAgICAgIC8v44Oh44OD44K744O844K45oOF5aCx5Y+W5b6X5Yem55CGXHJcbiAgICAgICAgLy9vcmRlckJ5KHRpbWUp44Gn5pmC6ZaT44Gu5Y+k44GE6aCG44Gr5Lim44G544KLXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VcIikub3JkZXJCeShcInRpbWVcIilcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkm1lc3NhZ2VkYXRh6YWN5YiX44Gr5YWl44KM44KL44CCXHJcbiAgICAgICAgLy/phY3liJfjga7nubDjgorov5TjgZflh6bnkIbjgafjg6Hjg4Pjgrvjg7zjgrjjga5qc3jjgpLkvZzjgorjgIFcclxuICAgICAgICAvL21lc3NhZ2VpdGVtc+OBq+WFpeOCjOOBpuOAgeacgOW+jOOBq3N0YXRl44Gr5YWl44KM44KLXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZWRhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBmb3IobGV0IGkgaW4gbWVzc2FnZWRhdGEpe1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IG1lc3NhZ2VkYXRhW2ldLnRleHQ7XHJcbiAgICAgICAgICAgIGxldCB1c2VyaWQgPSBtZXNzYWdlZGF0YVtpXS51c2VyaWQ7XHJcbiAgICAgICAgICAgIGlmKHVzZXJpZCA9PSBlbWFpbCl7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZTF9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgICApO31cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZTJ9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VpdGVtcyk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBlcnJvclxyXG4gICAgICBzZXRNZXNzYWdlcygpXHJcbiAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gIH0pfVxyXG4gIFxyXG4gIGNvbnN0IHVzZXJmaWx0ZXIgPSgpPT57XHJcbiAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiA8cD7jg6Hjg4Pjgrvjg7zjgrjjga/jgZTliKnnlKjjgYTjgZ/jgaDjgZHjgb7jgZvjgpM8L3A+XHJcbiAgICB9XHJcbiAgfVxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxidXR0b24gb25DbGljaz17Z2V0TWVzc2FnZURhdGF9PuiqreOBv+i+vOOBvzwvYnV0dG9uPlxyXG4gICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICB7dXNlcmZpbHRlcn1cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=