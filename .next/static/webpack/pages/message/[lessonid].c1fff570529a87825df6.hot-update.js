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
                setserfilter = true;
              } else {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VyZmlsdGVyIiwic2V0VXNlcmZpbHRlciIsImRvQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRvU3VibWl0IiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImFkZCIsInVzZXJpZCIsInRleHQiLCJ0aW1lIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInRoZW4iLCJjcmVhdGVyaWQiLCJidXllcmlkIiwic2V0c2VyZmlsdGVyIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUd4QjtBQUh3QixrQkFJS0Msc0RBQVEsQ0FBQyxFQUFELENBSmI7QUFBQSxNQUlqQkMsT0FKaUI7QUFBQSxNQUlUQyxVQUpTOztBQUFBLG1CQUtXRixzREFBUSxDQUFDLEVBQUQsQ0FMbkI7QUFBQSxNQUtqQkcsVUFMaUI7QUFBQSxNQUtOQyxhQUxNLGtCQU94Qjs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFFLFNBQWpCQSxlQUFpQixDQUFDQyxDQUFELEVBQUs7QUFDMUJKLGNBQVUsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQVp3QixDQWN4QjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxnQkFEUyxHQUNKQyxnREFBUSxDQUFDQyxTQUFULEVBREk7QUFFVEMsbUJBRlMsR0FFREMsMkRBQUcsQ0FBQ0MsV0FBSixDQUFnQmxCLEtBQUssQ0FBQ2dCLEtBQXRCLENBRkM7QUFHWEcsZUFIVyxHQUdQLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUhPO0FBQUE7QUFBQSxxQkFJVFIsRUFBRSxDQUFDUyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJiLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhQyxRQUExQyxFQUFvREgsVUFBcEQsQ0FBK0QsU0FBL0QsRUFBMEVJLEdBQTFFLENBQThFO0FBQ2xGQyxzQkFBTSxFQUFFWCxLQUQwRTtBQUVsRlksb0JBQUksRUFBRTFCLE9BRjRFO0FBR2xGMkIsb0JBQUksRUFBRWYsZ0RBQVEsQ0FBQ0MsU0FBVCxDQUFtQmUsVUFBbkIsQ0FBOEJDLGVBQTlCO0FBSDRFLGVBQTlFLEVBSURDLElBSkMsQ0FJSSxZQUFVO0FBQ2hCN0IsMEJBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxlQU5HLENBSlM7O0FBQUE7QUFXVEMsd0JBWFMsR0FXRSxFQVhGOztBQVliLGtCQUFJWSxLQUFLLElBQUVpQixTQUFQLElBQW9CakIsS0FBSyxJQUFFa0IsT0FBL0IsRUFBdUM7QUFDckNDLDRCQUFZLEdBQUMsSUFBYjtBQUNILGVBRkMsTUFHRSxDQUVIOztBQWpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSdkIsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBakJ3QixDQW9DeEI7OztBQUdGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFRLEVBQUVOLGVBQTdCO0FBQThDLFdBQUssRUFBRUo7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVVLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRzs7R0E1Q01iLFU7VUFZUVkscUQ7OztLQVpSWixVO0FBOENUQSxVQUFVLEdBQUVxQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCdEMsVUFBeEIsQ0FBWjtBQUNlQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tsZXNzb25pZF0uYzFmZmY1NzA1MjlhODc4MjVkZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v44Oh44OD44K744O844K46YCB5L+h44OV44Kp44O844OgXHJcbi8vbWVzc2FnZS9bbGVzc29uaWRd44Gn44Kk44Oz44Od44O844OIXHJcblxyXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUFkZChwcm9wcyl7XHJcblxyXG5cclxuICAvL+S9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruioreWumihIb29rKVxyXG4gIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJmaWx0ZXIsc2V0VXNlcmZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9pbnB1dOOBq+WFpeWKm+OBleOCjOOBn+WHpueQhuOCkmXjgaflj5fjgZHlj5bjgaPjgabjgrnjg4bjg7zjg4jjgavlhaXjgozjgovplqLmlbBcclxuICBjb25zdCBkb0NoYW5nZU1lc3NhZ2UgPShlKT0+e1xyXG4gICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy/ov73liqDjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgolmaXJlYmFzZeOBq+OCueODhuODvOODiOOBruaDheWgseOCkuabuOOBjei+vOOCgOWHpueQhlxyXG4gIC8vYWRk44Gn6L+95Yqg44GX44Gm44GE44KL44GL44KJ44CB44OJ44Kt44Ol44Oh44Oz44OIaWTjga/jg6bjg4vjg7zjgq/jgappZOOBjOiHquWLleOBp+W9k+OBpuOCieOCjOOCi1xyXG4gIC8vUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbChpZCnjgpJlbmNvZGUoIC7ihpIqICnjgavjgZfjgablrprmlbDjgavku6PlhaVcclxuICBjb25zdCBkb1N1Ym1pdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlXCIpLmFkZCh7XHJcbiAgICAgIHVzZXJpZDogZW1haWwsXHJcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgIHRpbWU6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgfSlcclxuICAgICAgbGV0IHVzZXJmaWx0ZXI9XCJcIjtcclxuICAgICAgaWYgKGVtYWlsPT1jcmVhdGVyaWQgfHwgZW1haWw9PWJ1eWVyaWQpe1xyXG4gICAgICAgIHNldHNlcmZpbHRlcj10cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgLy9cclxuICAgICAgICAgICAgICAgIFxyXG5cclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VNZXNzYWdlfSB2YWx1ZT17bWVzc2FnZX0+PC9pbnB1dD5cclxuICAgIDxidXR0b24gb25DbGljaz17ZG9TdWJtaXR9PumAgeS/oTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4pO31cclxuXHJcbk1lc3NhZ2VBZGQgPWNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2VBZGQpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQWRkO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==