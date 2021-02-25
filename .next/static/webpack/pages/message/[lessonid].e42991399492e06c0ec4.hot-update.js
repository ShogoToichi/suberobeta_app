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
    _s2 = $RefreshSig$();







function MessageAdd(props) {
  _s2();

  //使用するステートの設定(Hook)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState[0],
      setMessage = _useState[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


  var doChangeMessage = function doChangeMessage(e) {
    setMessage(e.target.value);
  }; //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入


  var doSubmit = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email, router;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              db = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
              _context.next = 6;
              return db.collection("lessons").doc(router.query.lessonid).collection(message).add({
                userid: email,
                text: message,
                time: db.FieldValue.serverTimestamp()
              }).then(function () {
                setMessage("");
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
    }));

    return function doSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeMessage,
      value: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: doSubmit,
      children: "\u9001\u4FE1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, this);
}

_s2(MessageAdd, "1qb3g7n3TPscMHKOMXs30tr1mMM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJkb0NoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJhZGQiLCJ1c2VyaWQiLCJ0ZXh0IiwidGltZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ0aGVuIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBR3hCO0FBSHdCLGtCQUlLQyxzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSWpCQyxPQUppQjtBQUFBLE1BSVRDLFVBSlMsaUJBTXhCOzs7QUFDQSxNQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLENBQUNDLENBQUQsRUFBSztBQUMxQkYsY0FBVSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FGRCxDQVB3QixDQVd4QjtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLFFBQVE7QUFBQTs7QUFBQSxxVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDVEMsZ0JBRFMsR0FDSkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURJO0FBRVRDLG1CQUZTLEdBRURDLDJEQUFHLENBQUNDLFdBQUosQ0FBZ0JkLEtBQUssQ0FBQ1ksS0FBdEIsQ0FGQztBQUdURyxvQkFIUyxHQUdBQyw2REFBUyxFQUhUO0FBQUE7QUFBQSxxQkFJVFAsRUFBRSxDQUFDUSxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxRQUExQyxFQUFvREgsVUFBcEQsQ0FBK0RmLE9BQS9ELEVBQXdFbUIsR0FBeEUsQ0FBNEU7QUFDOUVDLHNCQUFNLEVBQUVWLEtBRHNFO0FBRTlFVyxvQkFBSSxFQUFFckIsT0FGd0U7QUFHOUVzQixvQkFBSSxFQUFFZixFQUFFLENBQUNnQixVQUFILENBQWNDLGVBQWQ7QUFId0UsZUFBNUUsRUFJREMsSUFKQyxDQUlJLFlBQVU7QUFDaEJ4QiwwQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELGVBTkcsQ0FKUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIO0FBQUEsY0FHR2EscURBSEg7QUFBQTs7QUFBQSxvQkFBUlIsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWFGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFRLEVBQUVKLGVBQTdCO0FBQThDLFdBQUs7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVJLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRzs7SUFoQ01ULFU7O0tBQUFBLFU7QUFrQ1RBLFVBQVUsR0FBRTZCLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0I5QixVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS5lNDI5OTEzOTk0OTJlMDZjMGVjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VBZGQocHJvcHMpe1xyXG5cclxuXHJcbiAgLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTWVzc2FnZSA9KGUpPT57XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL2FkZOOBp+i/veWKoOOBl+OBpuOBhOOCi+OBi+OCieOAgeODieOCreODpeODoeODs+ODiGlk44Gv44Om44OL44O844Kv44GqaWTjgYzoh6rli5XjgaflvZPjgabjgonjgozjgotcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihtZXNzYWdlKS5hZGQoe1xyXG4gICAgICAgIHVzZXJpZDogZW1haWwsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB0aW1lOiBkYi5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZU1lc3NhZ2V9IHZhbHVlPjwvaW5wdXQ+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvU3VibWl0fT7pgIHkv6E8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuKTt9XHJcblxyXG5NZXNzYWdlQWRkID1jb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNZXNzYWdlQWRkKTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUFkZDtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=