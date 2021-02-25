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
      var db, email, d, userfilter;
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
              userfilter = "";

              if (email == createrid || email == buyerid) {
                setUserfilter(true);
              } else {
                setU;
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubmit() {
      return _ref.apply(this, arguments);
    };
  }(); //


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeMessage,
      value: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: doSubmit,
      children: "\u9001\u4FE1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VyZmlsdGVyIiwic2V0VXNlcmZpbHRlciIsImRvQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRvU3VibWl0IiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImFkZCIsInVzZXJpZCIsInRleHQiLCJ0aW1lIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInRoZW4iLCJjcmVhdGVyaWQiLCJidXllcmlkIiwic2V0VSIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFHeEI7QUFId0Isa0JBSUtDLHNEQUFRLENBQUMsRUFBRCxDQUpiO0FBQUEsTUFJakJDLE9BSmlCO0FBQUEsTUFJVEMsVUFKUzs7QUFBQSxtQkFLV0Ysc0RBQVEsQ0FBQyxFQUFELENBTG5CO0FBQUEsTUFLakJHLFVBTGlCO0FBQUEsTUFLTkMsYUFMTSxrQkFPeEI7OztBQUNBLE1BQU1DLGVBQWUsR0FBRSxTQUFqQkEsZUFBaUIsQ0FBQ0MsQ0FBRCxFQUFLO0FBQzFCSixjQUFVLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDRCxHQUZEOztBQUlBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0Fad0IsQ0FjeEI7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZ0JBRFMsR0FDSkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURJO0FBRVRDLG1CQUZTLEdBRURDLDJEQUFHLENBQUNDLFdBQUosQ0FBZ0JsQixLQUFLLENBQUNnQixLQUF0QixDQUZDO0FBR1hHLGVBSFcsR0FHUCxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFITztBQUFBO0FBQUEscUJBSVRSLEVBQUUsQ0FBQ1MsVUFBSCxDQUFjLFNBQWQsRUFBeUJDLEdBQXpCLENBQTZCYixNQUFNLENBQUNjLEtBQVAsQ0FBYUMsUUFBMUMsRUFBb0RILFVBQXBELENBQStELFNBQS9ELEVBQTBFSSxHQUExRSxDQUE4RTtBQUNsRkMsc0JBQU0sRUFBRVgsS0FEMEU7QUFFbEZZLG9CQUFJLEVBQUUxQixPQUY0RTtBQUdsRjJCLG9CQUFJLEVBQUVmLGdEQUFRLENBQUNDLFNBQVQsQ0FBbUJlLFVBQW5CLENBQThCQyxlQUE5QjtBQUg0RSxlQUE5RSxFQUlEQyxJQUpDLENBSUksWUFBVTtBQUNoQjdCLDBCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsZUFORyxDQUpTOztBQUFBO0FBV1RDLHdCQVhTLEdBV0UsRUFYRjs7QUFZYixrQkFBSVksS0FBSyxJQUFFaUIsU0FBUCxJQUFvQmpCLEtBQUssSUFBRWtCLE9BQS9CLEVBQXVDO0FBQ3JDN0IsNkJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSCxlQUZDLE1BR0U7QUFDRDhCLG9CQUFJO0FBQ047O0FBakJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJ2QixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQsQ0FqQndCLENBb0N4Qjs7O0FBR0Ysc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRU4sZUFBN0I7QUFBOEMsV0FBSyxFQUFFSjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGFBQU8sRUFBRVUsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtHOztHQTVDTWIsVTtVQVlRWSxxRDs7O0tBWlJaLFU7QUE4Q1RBLFVBQVUsR0FBRXFDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J0QyxVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS4zMDZhMmE0NThiNTM2ODA1MGJlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/jg6Hjg4Pjgrvjg7zjgrjpgIHkv6Hjg5Xjgqnjg7zjg6BcclxuLy9tZXNzYWdlL1tsZXNzb25pZF3jgafjgqTjg7Pjg53jg7zjg4hcclxuXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlQWRkKHByb3BzKXtcclxuXHJcblxyXG4gIC8v5L2/55So44GZ44KL44K544OG44O844OI44Gu6Kit5a6aKEhvb2spXHJcbiAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcmZpbHRlcixzZXRVc2VyZmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTWVzc2FnZSA9KGUpPT57XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL+i/veWKoOODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiWZpcmViYXNl44Gr44K544OG44O844OI44Gu5oOF5aCx44KS5pu444GN6L6844KA5Yem55CGXHJcbiAgLy9hZGTjgafov73liqDjgZfjgabjgYTjgovjgYvjgonjgIHjg4njgq3jg6Xjg6Hjg7Pjg4hpZOOBr+ODpuODi+ODvOOCr+OBqmlk44GM6Ieq5YuV44Gn5b2T44Gm44KJ44KM44KLXHJcbiAgLy9SZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWlsKGlkKeOCkmVuY29kZSggLuKGkiogKeOBq+OBl+OBpuWumuaVsOOBq+S7o+WFpVxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VcIikuYWRkKHtcclxuICAgICAgdXNlcmlkOiBlbWFpbCxcclxuICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgdGltZTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdXNlcmZpbHRlcj1cIlwiO1xyXG4gICAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgICAgc2V0VXNlcmZpbHRlcih0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICBzZXRVICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9PjwvaW5wdXQ+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvU3VibWl0fT7pgIHkv6E8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuKTt9XHJcblxyXG5NZXNzYWdlQWRkID1jb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNZXNzYWdlQWRkKTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUFkZDtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=