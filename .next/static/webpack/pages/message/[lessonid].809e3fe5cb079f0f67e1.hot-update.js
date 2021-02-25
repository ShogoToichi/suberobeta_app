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
                //配列の繰り返し処理でメッセージのjsxを作り、messageitem
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
                        lineNumber: 55,
                        columnNumber: 19
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                        style: style2,
                        children: text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
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
        lineNumber: 71,
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
      lineNumber: 76,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }, this), messages]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsInVzZXJmaWx0ZXIiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEI7QUFEc0Isa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWZDLFNBRmU7QUFBQSxNQUVMQyxZQUZLOztBQUFBLG1CQUdTRixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdmRyxRQUhlO0FBQUEsTUFHTkMsV0FITTs7QUFBQSxtQkFJTUosc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUlmSyxPQUplO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYU4sc0RBQVEsQ0FBQyxFQUFELENBTHJCO0FBQUEs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QUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVhLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFLVDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHSixRQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0M7O0dBekVRTCxPO1VBaUJRaUIscUQ7OztLQWpCUmpCLE87QUE0RVRBLE9BQU8sR0FBR3lDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IxQyxPQUF4QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS44MDllM2ZlNWNiMDc5ZjBmNjdlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSAocHJvcHMpe1xyXG4gIC8v44K544OG44O844OI5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2J1eWVyaWQsc2V0QnV5ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcbiAgLy/pgIHkv6HogIXjgavjgojjgaPjgabjgrnjgr/jgqTjg6vjgpLlpInmm7TjgZnjgovjg4bjgrnjg4jnlKjjga7jgrnjgr/jgqTjg6tcclxuICBjb25zdCBzdHlsZTIgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwiYmx1ZVwiLFxyXG4gIH1cclxuICBjb25zdCBzdHlsZTEgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwicmVkXCIsXHJcbiAgfVxyXG4gIGNvbnN0IG1lc3NhZ2VkYXRhPVtdO1xyXG4gIGNvbnN0IG1lc3NhZ2VpdGVtcz1bXTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy9sZXNzb25kYXRh5Y+K44GzbWVzc2FnZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldE1lc3NhZ2VEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICAvL+WFiOOBq+ODrOODg+OCueODs+WQjeOBqOS9nOaIkOiAheOAgeizvOWFpeiAheOBrmlk44KS5Y+W5b6XXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRCdXllcmlkKGxlc3NvbmRhdGEuYnV5ZXJpZCk7XHJcblxyXG4gICAgICAgIC8v44Oh44OD44K744O844K45oOF5aCx5Y+W5b6X5Yem55CGXHJcbiAgICAgICAgLy9vcmRlckJ5KHRpbWUp44Gn5pmC6ZaT44Gu5Y+k44GE6aCG44Gr5Lim44G544KLXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VcIikub3JkZXJCeShcInRpbWVcIilcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkm1lc3NhZ2VkYXRh6YWN5YiX44Gr5YWl44KM44KL44CCXHJcbiAgICAgICAgLy/phY3liJfjga7nubDjgorov5TjgZflh6bnkIbjgafjg6Hjg4Pjgrvjg7zjgrjjga5qc3jjgpLkvZzjgorjgIFtZXNzYWdlaXRlbVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VkYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yKGxldCBpIGluIG1lc3NhZ2VkYXRhKXtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBtZXNzYWdlZGF0YVtpXS50ZXh0O1xyXG4gICAgICAgICAgICBsZXQgdXNlcmlkID0gbWVzc2FnZWRhdGFbaV0udXNlcmlkO1xyXG4gICAgICAgICAgICBpZih1c2VyaWQgPT0gZW1haWwpe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGUxfT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgKTt9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGUyfT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZWl0ZW1zKTtcclxuICAgICAgICAgIH0pXHJcbiAgfSl9XHJcbiAgY29uc3QgdXNlcmZpbHRlciA9KCk9PntcclxuICAgIGlmIChlbWFpbD09Y3JlYXRlcmlkIHx8IGVtYWlsPT1idXllcmlkKXtcclxuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIDxwPuODoeODg+OCu+ODvOOCuOOBr+OBlOWIqeeUqOOBhOOBn+OBoOOBkeOBvuOBm+OCkzwvcD5cclxuICAgIH1cclxuICB9XHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNZXNzYWdlRGF0YX0+6Kqt44G/6L6844G/PC9idXR0b24+XHJcbiAgICA8aDI+e2xlc3Nvbm5hbWV9PC9oMj5cclxuICAgIHttZXNzYWdlc31cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=