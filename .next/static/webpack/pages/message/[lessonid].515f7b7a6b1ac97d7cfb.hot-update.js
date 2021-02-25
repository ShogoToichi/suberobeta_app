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







function MessageAdd(props) {
  _s();

  //使用するステートの設定(Hook)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState[0],
      setMessage = _useState[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


  var doChangeMessage = function doChangeMessage(e) {
    setMessage(e.target.value);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入

  var doSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              _context.next = 4;
              return db.collection("lessons").doc(router.query.lessonid).collection(message).add({
                userid: email,
                text: message,
                time: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date("December 101815"))
              }).then(function () {
                setMessage("");
              });

            case 4:
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

_s(MessageAdd, "92Sx2S9TGTspWNmr+8qEgxjdxY8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJkb0NoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJhZGQiLCJ1c2VyaWQiLCJ0ZXh0IiwidGltZSIsIlRpbWVzdGFtcCIsImZyb21EYXRlIiwiRGF0ZSIsInRoZW4iLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFHeEI7QUFId0Isa0JBSUtDLHNEQUFRLENBQUMsRUFBRCxDQUpiO0FBQUEsTUFJakJDLE9BSmlCO0FBQUEsTUFJVEMsVUFKUyxpQkFNeEI7OztBQUNBLE1BQU1DLGVBQWUsR0FBRSxTQUFqQkEsZUFBaUIsQ0FBQ0MsQ0FBRCxFQUFLO0FBQzFCRixjQUFVLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDRCxHQUZEOztBQUdBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FWd0IsQ0FZeEI7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZ0JBRFMsR0FDSkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURJO0FBRVRDLG1CQUZTLEdBRURDLDJEQUFHLENBQUNDLFdBQUosQ0FBZ0JoQixLQUFLLENBQUNjLEtBQXRCLENBRkM7QUFBQTtBQUFBLHFCQUdUSCxFQUFFLENBQUNNLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixDQUE2QlYsTUFBTSxDQUFDVyxLQUFQLENBQWFDLFFBQTFDLEVBQW9ESCxVQUFwRCxDQUErRGYsT0FBL0QsRUFBd0VtQixHQUF4RSxDQUE0RTtBQUM5RUMsc0JBQU0sRUFBRVIsS0FEc0U7QUFFOUVTLG9CQUFJLEVBQUVyQixPQUZ3RTtBQUc5RXNCLG9CQUFJLEVBQUNaLGdEQUFRLENBQUNDLFNBQVQsQ0FBbUJZLFNBQW5CLENBQTZCQyxRQUE3QixDQUFzQyxJQUFJQyxJQUFKLENBQVMsaUJBQVQsQ0FBdEM7QUFIeUUsZUFBNUUsRUFJREMsSUFKQyxDQUlJLFlBQVU7QUFDaEJ6QiwwQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELGVBTkcsQ0FIUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSTyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBWUYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRU4sZUFBN0I7QUFBOEMsV0FBSyxFQUFFRjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGFBQU8sRUFBRVEsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtHOztHQWhDTVgsVTtVQVVRVSxxRDs7O0tBVlJWLFU7QUFrQ1RBLFVBQVUsR0FBRThCLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IvQixVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS41MTVmN2I3YTZiMWFjOTdkN2NmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VBZGQocHJvcHMpe1xyXG5cclxuXHJcbiAgLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTWVzc2FnZSA9KGUpPT57XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL2FkZOOBp+i/veWKoOOBl+OBpuOBhOOCi+OBi+OCieOAgeODieOCreODpeODoeODs+ODiGlk44Gv44Om44OL44O844Kv44GqaWTjgYzoh6rli5XjgaflvZPjgabjgonjgozjgotcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24obWVzc2FnZSkuYWRkKHtcclxuICAgICAgICB1c2VyaWQ6IGVtYWlsLFxyXG4gICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgdGltZTpmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5ldyBEYXRlKFwiRGVjZW1iZXIgMTAxODE1XCIpKSxcclxuICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VNZXNzYWdlfSB2YWx1ZT17bWVzc2FnZX0+PC9pbnB1dD5cclxuICAgIDxidXR0b24gb25DbGljaz17ZG9TdWJtaXR9PumAgeS/oTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4pO31cclxuXHJcbk1lc3NhZ2VBZGQgPWNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2VBZGQpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQWRkO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==