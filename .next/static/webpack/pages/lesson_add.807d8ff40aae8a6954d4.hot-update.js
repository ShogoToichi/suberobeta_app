webpackHotUpdate_N_E("pages/lesson_add",{

/***/ "./components/LessonAdd.js":
/*!*********************************!*\
  !*** ./components/LessonAdd.js ***!
  \*********************************/
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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonAdd.js",
    _s = $RefreshSig$();








function LessonAdd(props) {
  _s();

  //使用するステートの設定(Hook)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonname = _useState[0],
      setLessonname = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      place = _useState2[0],
      setPlace = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      time = _useState3[0],
      setTime = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState4[0],
      setPrice = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessoncomment = _useState5[0],
      setLessoncomment = _useState5[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


  var doChangeName = function doChangeName(e) {
    setLessonname(e.target.value);
  };

  var doChangePlace = function doChangePlace(e) {
    setPlace(e.target.value);
  };

  var doChangeTime = function doChangeTime(e) {
    setTime(e.target.value);
  };

  var doChangePrice = function doChangePrice(e) {
    setPrice(e.target.value);
  };

  var doChangeComment = function doChangeComment(e) {
    setLessoncomment(e.target.value);
  }; //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入


  var doSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              _context.next = 4;
              return db.collection("lessons").add({
                createrid: email,
                lessonname: lessonname,
                lessonplace: place,
                lessonprice: price,
                lessontext: lessoncomment,
                lessontime: time
              }).then(function (doc) {
                console.log("LessonID:", doc.id);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u540D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u5834\u6240"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangePlace
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u6240\u8981\u6642\u9593"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u6599\u91D1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangePrice
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u8A73\u7D30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeComment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/mypage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: doSubmit,
        children: "\u8FFD\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

_s(LessonAdd, "NJMKWAHw7FmOWVdEuO/dFuFDz88=");

_c = LessonAdd;
LessonAdd = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(LessonAdd);
/* harmony default export */ __webpack_exports__["default"] = (LessonAdd);

var _c;

$RefreshReg$(_c, "LessonAdd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25BZGQuanMiXSwibmFtZXMiOlsiTGVzc29uQWRkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwiZG9DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZG9DaGFuZ2VQbGFjZSIsImRvQ2hhbmdlVGltZSIsImRvQ2hhbmdlUHJpY2UiLCJkb0NoYW5nZUNvbW1lbnQiLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImFkZCIsImNyZWF0ZXJpZCIsImxlc3NvbnBsYWNlIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwibGVzc29udGltZSIsInRoZW4iLCJkb2MiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsU0FBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFLeEI7QUFMd0Isa0JBTVdDLHNEQUFRLENBQUMsRUFBRCxDQU5uQjtBQUFBLE1BTWpCQyxVQU5pQjtBQUFBLE1BTU5DLGFBTk07O0FBQUEsbUJBT0NGLHNEQUFRLENBQUMsRUFBRCxDQVBUO0FBQUEsTUFPakJHLEtBUGlCO0FBQUEsTUFPWEMsUUFQVzs7QUFBQSxtQkFRREosc0RBQVEsQ0FBQyxFQUFELENBUlA7QUFBQSxNQVFqQkssSUFSaUI7QUFBQSxNQVFaQyxPQVJZOztBQUFBLG1CQVNDTixzREFBUSxDQUFDLEVBQUQsQ0FUVDtBQUFBLE1B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QSxZQVZGLGVBV0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFRLEVBQUVDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFNBQVg7QUFBQSw2QkFDQTtBQUFRLGVBQU8sRUFBRUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkc7O0dBbkVNckIsUzs7S0FBQUEsUztBQXFFVEEsU0FBUyxHQUFFd0MsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnpDLFNBQXhCLENBQVg7QUFDZUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2FkZC44MDdkOGZmNDBhYWU4YTY5NTRkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTGVzc29uQWRkIChwcm9wcyl7XHJcblxyXG5cclxuICBcclxuXHJcbiAgLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTmFtZSA9KGUpPT57XHJcbiAgICBzZXRMZXNzb25uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VQbGFjZT0gKGUpPT57XHJcbiAgICBzZXRQbGFjZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlVGltZSA9IChlKT0+e1xyXG4gICAgc2V0VGltZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlUHJpY2UgPSAoZSk9PntcclxuICAgIHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VDb21tZW50ID0gKGUpPT57XHJcbiAgICBzZXRMZXNzb25jb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL2FkZOOBp+i/veWKoOOBl+OBpuOBhOOCi+OBi+OCieOAgeODieOCreODpeODoeODs+ODiGlk44Gv44Om44OL44O844Kv44GqaWTjgYzoh6rli5XjgaflvZPjgabjgonjgozjgotcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuYWRkKHtcclxuICAgICAgICBjcmVhdGVyaWQ6IGVtYWlsLFxyXG4gICAgICAgIGxlc3Nvbm5hbWU6bGVzc29ubmFtZSxcclxuICAgICAgICBsZXNzb25wbGFjZTpwbGFjZSxcclxuICAgICAgICBsZXNzb25wcmljZTpwcmljZSxcclxuICAgICAgICBsZXNzb250ZXh0Omxlc3NvbmNvbW1lbnQsXHJcbiAgICAgICAgbGVzc29udGltZTp0aW1lXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3NvbklEOlwiLGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxoMj7jg6zjg4Pjgrnjg7Pov73liqA8L2gyPlxyXG4gICAgPHA+44Os44OD44K544Oz5ZCNPC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlTmFtZX0+PC9pbnB1dD5cclxuICAgIDxwPuWgtOaJgDwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZVBsYWNlfT48L2lucHV0PlxyXG4gICAgPHA+5omA6KaB5pmC6ZaTPC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlVGltZX0+PC9pbnB1dD5cclxuICAgIDxwPuaWmemHkTwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZVByaWNlfT48L2lucHV0PlxyXG4gICAgPHA+44Os44OD44K544Oz6Kmz57SwPC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlQ29tbWVudH0+PC9pbnB1dD5cclxuICAgIHsvKiDopoHnorroqo0gOiDjg5rjg7zjgrjnp7vli5Xlh6bnkIbjgYxmaXJlYmFzZeabuOOBjei+vOOCgOWHpueQhuOCiOOCiuWFiOOBq+Wun+ihjOOBleOCjOOCi+OBruOBjOWkp+S4iOWkq+OBquOBruOBiyAqL31cclxuICAgIHsvKiBuZXh0Lmpz44GuUm91dGVy44Oh44K944OD44OJ44KS5L2/44Gj44Gm44CBZG9zdWJtaXTlhoXjgafjg5rjg7zjgrjnp7vli5XjgZfjgZ/jgYvjgaPjgZ/jgYzjgqjjg6njg7zjgYzlh7rjgZ/jga7jgafjgajjgorjgYLjgYjjgZpMaW5r44KS5L2/44Gj44Gm44GC44KLICovfVxyXG4gICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgIDxidXR0b24gb25DbGljaz17ZG9TdWJtaXR9Pui/veWKoDwvYnV0dG9uPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pO31cclxuXHJcbkxlc3NvbkFkZCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTGVzc29uQWRkKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uQWRkOyJdLCJzb3VyY2VSb290IjoiIn0=