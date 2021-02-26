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

  var lessonadd = makeStyles({
    top: {
      textAlign: "center"
    },
    title: {
      fontWeight: 'bold',
      margin: "0 auto",
      marginTop: "20px"
    },
    inputform: {
      marginTop: '50px',
      width: '500px',
      margin: "0 auto"
    },
    inputtitle: {
      margin: "0 auto"
    },
    textarea: {
      marginTop: '20px',
      margin: "0 auto"
    },
    detailinfo: {
      marginTop: '20px',
      margin: "0 auto"
    }
  }); //使用するステートの設定(Hook)

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

  var classes = lessonadd();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u540D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u5834\u6240"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangePlace
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u6240\u8981\u6642\u9593"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u6599\u91D1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangePrice
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u8A73\u7D30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeComment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/mypage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: doSubmit,
        children: "\u8FFD\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25BZGQuanMiXSwibmFtZXMiOlsiTGVzc29uQWRkIiwicHJvcHMiLCJsZXNzb25hZGQiLCJtYWtlU3R5bGVzIiwidG9wIiwidGV4dEFsaWduIiwidGl0bGUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaW5wdXRmb3JtIiwid2lkdGgiLCJpbnB1dHRpdGxlIiwidGV4dGFyZWEiLCJkZXRhaWxpbmZvIiwidXNlU3RhdGUiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsImRvQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvQ2hhbmdlUGxhY2UiLCJkb0NoYW5nZVRpbWUiLCJkb0NoYW5nZVByaWNlIiwiZG9DaGFuZ2VDb21tZW50IiwiZG9TdWJtaXQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJhZGQiLCJjcmVhdGVyaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImxlc3NvbnRpbWUiLCJ0aGVuIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiY2xhc3NlcyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxTQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUd4QixNQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQztBQUMvQkMsT0FBRyxFQUFFO0FBQ0RDLGVBQVMsRUFBQztBQURULEtBRDBCO0FBSS9CQyxTQUFLLEVBQUM7QUFDRkMs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LFVBREY7QUFtQkc7O0dBOUZNbEMsUzs7S0FBQUEsUztBQWdHVEEsU0FBUyxHQUFFc0QsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnZELFNBQXhCLENBQVg7QUFDZUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2FkZC5mZmFhZDljNmI4MDJlYzZhZWQ1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTGVzc29uQWRkIChwcm9wcyl7XHJcblxyXG5cclxuICBjb25zdCBsZXNzb25hZGQgPSBtYWtlU3R5bGVzKHtcclxudG9wIDp7XHJcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxufSxcclxudGl0bGU6e1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbiAgICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbn0sXHJcbmlucHV0Zm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiAnNTBweCcsXHJcbiAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG5pbnB1dHRpdGxlOiB7XHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxudGV4dGFyZWE6IHtcclxuICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbmRldGFpbGluZm86IHtcclxuICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn1cclxufSk7XHJcblxyXG5cclxuICAvL+S9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruioreWumihIb29rKVxyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vaW5wdXTjgavlhaXlipvjgZXjgozjgZ/lh6bnkIbjgpJl44Gn5Y+X44GR5Y+W44Gj44Gm44K544OG44O844OI44Gr5YWl44KM44KL6Zai5pWwXHJcbiAgY29uc3QgZG9DaGFuZ2VOYW1lID0oZSk9PntcclxuICAgIHNldExlc3Nvbm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZVBsYWNlPSAoZSk9PntcclxuICAgIHNldFBsYWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VUaW1lID0gKGUpPT57XHJcbiAgICBzZXRUaW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VQcmljZSA9IChlKT0+e1xyXG4gICAgc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZUNvbW1lbnQgPSAoZSk9PntcclxuICAgIHNldExlc3NvbmNvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy/ov73liqDjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgolmaXJlYmFzZeOBq+OCueODhuODvOODiOOBruaDheWgseOCkuabuOOBjei+vOOCgOWHpueQhlxyXG4gIC8vYWRk44Gn6L+95Yqg44GX44Gm44GE44KL44GL44KJ44CB44OJ44Kt44Ol44Oh44Oz44OIaWTjga/jg6bjg4vjg7zjgq/jgappZOOBjOiHquWLleOBp+W9k+OBpuOCieOCjOOCi1xyXG4gIC8vUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbChpZCnjgpJlbmNvZGUoIC7ihpIqICnjgavjgZfjgablrprmlbDjgavku6PlhaVcclxuICBjb25zdCBkb1N1Ym1pdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5hZGQoe1xyXG4gICAgICAgIGNyZWF0ZXJpZDogZW1haWwsXHJcbiAgICAgICAgbGVzc29ubmFtZTpsZXNzb25uYW1lLFxyXG4gICAgICAgIGxlc3NvbnBsYWNlOnBsYWNlLFxyXG4gICAgICAgIGxlc3NvbnByaWNlOnByaWNlLFxyXG4gICAgICAgIGxlc3NvbnRleHQ6bGVzc29uY29tbWVudCxcclxuICAgICAgICBsZXNzb250aW1lOnRpbWVcclxuICAgICAgfSkudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uSUQ6XCIsZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAgICAgY29uc3QgY2xhc3NlcyA9IGxlc3NvbmFkZCgpO1xyXG5cclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8aDI+44Os44OD44K544Oz6L+95YqgPC9oMj5cclxuICAgIDxwPuODrOODg+OCueODs+WQjTwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZU5hbWV9PjwvaW5wdXQ+XHJcbiAgICA8cD7loLTmiYA8L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VQbGFjZX0+PC9pbnB1dD5cclxuICAgIDxwPuaJgOimgeaZgumWkzwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZVRpbWV9PjwvaW5wdXQ+XHJcbiAgICA8cD7mlpnph5E8L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VQcmljZX0+PC9pbnB1dD5cclxuICAgIDxwPuODrOODg+OCueODs+ips+e0sDwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZUNvbW1lbnR9PjwvaW5wdXQ+XHJcbiAgICB7Lyog6KaB56K66KqNIDog44Oa44O844K456e75YuV5Yem55CG44GMZmlyZWJhc2Xmm7jjgY3ovrzjgoDlh6bnkIbjgojjgorlhYjjgavlrp/ooYzjgZXjgozjgovjga7jgYzlpKfkuIjlpKvjgarjga7jgYsgKi99XHJcbiAgICB7LyogbmV4dC5qc+OBrlJvdXRlcuODoeOCveODg+ODieOCkuS9v+OBo+OBpuOAgWRvc3VibWl05YaF44Gn44Oa44O844K456e75YuV44GX44Gf44GL44Gj44Gf44GM44Ko44Op44O844GM5Ye644Gf44Gu44Gn44Go44KK44GC44GI44GaTGlua+OCkuS9v+OBo+OBpuOBguOCiyAqL31cclxuICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvU3VibWl0fT7ov73liqA8L2J1dHRvbj5cclxuICAgIDwvTGluaz5cclxuICA8L2Rpdj5cclxuKTt9XHJcblxyXG5MZXNzb25BZGQgPWNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKExlc3NvbkFkZCk7XHJcbmV4cG9ydCBkZWZhdWx0IExlc3NvbkFkZDsiXSwic291cmNlUm9vdCI6IiJ9