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
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");





var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MessageAdd.js",
    _s2 = $RefreshSig$();







function MessageAdd(props) {
  _s2();

  //使用するステートの設定(Hook)
  var _useState = useState(""),
      _useState2 = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


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

              db = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_8__["default"].encodeEmail(props.email);
              router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
              _context.next = 6;
              return db.collection("lessons").doc(router.query.lessonid).collection(message).add({
                userid: email,
                text: message,
                time: db.FieldValue.serverTimestamp()
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
    }));

    return function doSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u540D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: doSubmit,
      children: "\u8FFD\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, this);
}

_s2(MessageAdd, "1qb3g7n3TPscMHKOMXs30tr1mMM=");

_c = MessageAdd;
MessageAdd = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJkb0NoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJhZGQiLCJ1c2VyaWQiLCJ0ZXh0IiwidGltZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUd4QjtBQUh3QixrQkFJS0MsUUFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBO0FBQUEsTUFJakJDLE9BSmlCO0FBQUEsTUFJVEMsVUFKUyxrQkFNeEI7OztBQUNBLE1BQU1DLGVBQWUsR0FBRSxTQUFqQkEsZUFBaUIsQ0FBQ0MsQ0FBRCxFQUFLO0FBQzFCRixjQUFVLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDRCxHQUZELENBUHdCLENBV3hCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBOztBQUFBLHFWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNUQyxnQkFEUyxHQUNKQyxnREFBUSxDQUFDQyxTQUFULEVBREk7QUFFVEMsbUJBRlMsR0FFREMsMkRBQUcsQ0FBQ0MsV0FBSixDQUFnQmQsS0FBSyxDQUFDWSxLQUF0QixDQUZDO0FBR1RHLG9CQUhTLEdBR0FDLDZEQUFTLEVBSFQ7QUFBQTtBQUFBLHFCQUlUUCxFQUFFLENBQUNRLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixDQUE2QkgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLFFBQTFDLEVBQW9ESCxVQUFwRCxDQUErRGYsT0FBL0QsRUFBd0VtQixHQUF4RSxDQUE0RTtBQUM5RUMsc0JBQU0sRUFBRVYsS0FEc0U7QUFFOUVXLG9CQUFJLEVBQUVyQixPQUZ3RTtBQUc5RXNCLG9CQUFJLEVBQUVmLEVBQUUsQ0FBQ2dCLFVBQUgsQ0FBY0MsZUFBZDtBQUh3RSxlQUE1RSxDQUpTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7QUFBQSxjQUdHVixxREFISDtBQUFBOztBQUFBLG9CQUFSUixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBY0Ysc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFRLEVBQUVKO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQVEsYUFBTyxFQUFFSSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUc7O0lBbENNVCxVOztLQUFBQSxVO0FBb0NUQSxVQUFVLEdBQUU0QiwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCN0IsVUFBeEIsQ0FBWjtBQUNlQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tsZXNzb25pZF0uYTNhZDRkZmE3MTJiOTBjMjY0NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VBZGQocHJvcHMpe1xyXG5cclxuXHJcbiAgLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTWVzc2FnZSA9KGUpPT57XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL2FkZOOBp+i/veWKoOOBl+OBpuOBhOOCi+OBi+OCieOAgeODieOCreODpeODoeODs+ODiGlk44Gv44Om44OL44O844Kv44GqaWTjgYzoh6rli5XjgaflvZPjgabjgonjgozjgotcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihtZXNzYWdlKS5hZGQoe1xyXG4gICAgICAgIHVzZXJpZDogZW1haWwsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB0aW1lOiBkYi5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG5cclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8cD7jg6zjg4Pjgrnjg7PlkI08L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VNZXNzYWdlfT48L2lucHV0PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtkb1N1Ym1pdH0+6L+95YqgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbik7fVxyXG5cclxuTWVzc2FnZUFkZCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTWVzc2FnZUFkZCk7XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VBZGQ7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9