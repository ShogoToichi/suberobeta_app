webpackHotUpdate_N_E("pages/message/[lessonid]",{

/***/ "./components/MessageAdd.js":
/*!**********************************!*\
  !*** ./components/MessageAdd.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MessageAdd.js",
    _s = $RefreshSig$();

//メッセージ送信フォーム
//message/[lessonid]でインポート






function MessageAdd(props) {
  _s();

  //使用するステートの設定(Hook)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      userfilter = _useState2[0],
      setUserfilter = _useState2[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


  var doChangeMessage = function doChangeMessage(e) {
    setMessage(e.target.value);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入

  var doSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email, d;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              d = new Date().getTime();
              _context.next = 5;
              return db.collection("lessons").doc(router.query.lessonid).collection("message").add({
                userid: email,
                text: message,
                time: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp()
              }).then(function () {
                setMessage("");
              });

            case 5:
              //userfilterのTorFを、マテリアルUIの表示に関する属性に用いて、
              //作成者、購入者以外にフォームを表示しなくする
              if (email == createrid || email == buyerid) {
                setUserfilter(true);
              } else {
                setUserfilter(false);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeMessage,
      value: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: doSubmit,
      children: "\u9001\u4FE1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 3
  }, this);
}

_s(MessageAdd, "Ca4ecmfO/3/ZdFG8+4G1g8EpnVg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = MessageAdd;
MessageAdd = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(MessageAdd);
/* harmony default export */ __webpack_exports__["default"] = (MessageAdd);

var _c;

$RefreshReg$(_c, "MessageAdd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VyZmlsdGVyIiwic2V0VXNlcmZpbHRlciIsImRvQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRvU3VibWl0IiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImFkZCIsInVzZXJpZCIsInRleHQiLCJ0aW1lIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInRoZW4iLCJjcmVhdGVyaWQiLCJidXllcmlkIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUd4QjtBQUh3QixrQkFJS0Msc0RBQVEsQ0FBQyxFQUFELENBSmI7QUFBQSxNQUlqQkMsT0FKaUI7QUFBQSxNQUlUQyxVQUpTOztBQUFBLG1CQUtXRixzREFBUSxDQUFDLEVBQUQsQ0FMbkI7QUFBQSxNQUtqQkcsVUFMaUI7QUFBQSxNQUtOQyxhQUxNLGtCQU94Qjs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFFLFNBQWpCQSxlQUFpQixDQUFDQyxDQUFELEVBQUs7QUFDMUJKLGNBQVUsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQVp3QixDQWN4QjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxnQkFEUyxHQUNKQyxnREFBUSxDQUFDQyxTQUFULEVBREk7QUFFVEMsbUJBRlMsR0FFREMsMkRBQUcsQ0FBQ0MsV0FBSixDQUFnQmxCLEtBQUssQ0FBQ2dCLEtBQXRCLENBRkM7QUFHWEcsZUFIVyxHQUdQLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUhPO0FBQUE7QUFBQSxxQkFJVFIsRUFBRSxDQUFDUyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJiLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhQyxRQUExQyxFQUFvREgsVUFBcEQsQ0FBK0QsU0FBL0QsRUFBMEVJLEdBQTFFLENBQThFO0FBQ2xGQyxzQkFBTSxFQUFFWCxLQUQwRTtBQUVsRlksb0JBQUksRUFBRTFCLE9BRjRFO0FBR2xGMkIsb0JBQUksRUFBRWYsZ0RBQVEsQ0FBQ0MsU0FBVCxDQUFtQmUsVUFBbkIsQ0FBOEJDLGVBQTlCO0FBSDRFLGVBQTlFLEVBSURDLElBSkMsQ0FJSSxZQUFVO0FBQ2hCN0IsMEJBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxlQU5HLENBSlM7O0FBQUE7QUFXYjtBQUNBO0FBQ0Esa0JBQUlhLEtBQUssSUFBRWlCLFNBQVAsSUFBb0JqQixLQUFLLElBQUVrQixPQUEvQixFQUF1QztBQUNyQzdCLDZCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0gsZUFGQyxNQUdFO0FBQ0RBLDZCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Y7O0FBbEJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJPLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFxQkYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRU4sZUFBN0I7QUFBOEMsV0FBSyxFQUFFSjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGFBQU8sRUFBRVUsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtHOztHQTNDTWIsVTtVQVlRWSxxRDs7O0tBWlJaLFU7QUE2Q1RBLFVBQVUsR0FBRW9DLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JyQyxVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS4yMDQ1ZmZiZWE5ZWFiZjA3ZGQ3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/jg6Hjg4Pjgrvjg7zjgrjpgIHkv6Hjg5Xjgqnjg7zjg6BcclxuLy9tZXNzYWdlL1tsZXNzb25pZF3jgafjgqTjg7Pjg53jg7zjg4hcclxuXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlQWRkKHByb3BzKXtcclxuXHJcblxyXG4gIC8v5L2/55So44GZ44KL44K544OG44O844OI44Gu6Kit5a6aKEhvb2spXHJcbiAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcmZpbHRlcixzZXRVc2VyZmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTWVzc2FnZSA9KGUpPT57XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL+i/veWKoOODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiWZpcmViYXNl44Gr44K544OG44O844OI44Gu5oOF5aCx44KS5pu444GN6L6844KA5Yem55CGXHJcbiAgLy9hZGTjgafov73liqDjgZfjgabjgYTjgovjgYvjgonjgIHjg4njgq3jg6Xjg6Hjg7Pjg4hpZOOBr+ODpuODi+ODvOOCr+OBqmlk44GM6Ieq5YuV44Gn5b2T44Gm44KJ44KM44KLXHJcbiAgLy9SZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWlsKGlkKeOCkmVuY29kZSggLuKGkiogKeOBq+OBl+OBpuWumuaVsOOBq+S7o+WFpVxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VcIikuYWRkKHtcclxuICAgICAgdXNlcmlkOiBlbWFpbCxcclxuICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgdGltZTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAvL3VzZXJmaWx0ZXLjga5Ub3JG44KS44CB44Oe44OG44Oq44Ki44OrVUnjga7ooajnpLrjgavplqLjgZnjgovlsZ7mgKfjgavnlKjjgYTjgabjgIFcclxuICAgICAgLy/kvZzmiJDogIXjgIHos7zlhaXogIXku6XlpJbjgavjg5Xjgqnjg7zjg6DjgpLooajnpLrjgZfjgarjgY/jgZnjgotcclxuICAgICAgaWYgKGVtYWlsPT1jcmVhdGVyaWQgfHwgZW1haWw9PWJ1eWVyaWQpe1xyXG4gICAgICAgIHNldFVzZXJmaWx0ZXIodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgc2V0VXNlcmZpbHRlcihmYWxzZSk7ICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VNZXNzYWdlfSB2YWx1ZT17bWVzc2FnZX0+PC9pbnB1dD5cclxuICAgIDxidXR0b24gb25DbGljaz17ZG9TdWJtaXR9PumAgeS/oTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4pO31cclxuXHJcbk1lc3NhZ2VBZGQgPWNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2VBZGQpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQWRkO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==