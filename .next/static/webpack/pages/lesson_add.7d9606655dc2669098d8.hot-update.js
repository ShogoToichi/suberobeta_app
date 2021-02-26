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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u540D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u5834\u6240"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangePlace
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u6240\u8981\u6642\u9593"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u6599\u91D1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangePrice
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u30EC\u30C3\u30B9\u30F3\u8A73\u7D30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeComment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/mypage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: doSubmit,
        children: "\u8FFD\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25BZGQuanMiXSwibmFtZXMiOlsiTGVzc29uQWRkIiwicHJvcHMiLCJsZXNzb25hZGQiLCJtYWtlU3R5bGVzIiwidG9wIiwidGV4dEFsaWduIiwidGl0bGUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaW5wdXRmb3JtIiwid2lkdGgiLCJpbnB1dHRpdGxlIiwidGV4dGFyZWEiLCJkZXRhaWxpbmZvIiwidXNlU3RhdGUiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsImRvQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvQ2hhbmdlUGxhY2UiLCJkb0NoYW5nZVRpbWUiLCJkb0NoYW5nZVByaWNlIiwiZG9DaGFuZ2VDb21tZW50IiwiZG9TdWJtaXQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJhZGQiLCJjcmVhdGVyaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImxlc3NvbnRpbWUiLCJ0aGVuIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBR3hCLE1BQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUFDO0FBQy9CQyxPQUFHLEVBQUU7QUFDREMsZUFBUyxFQUFDO0FBRFQsS0FEMEI7QUFJL0JDLFNBQUssRUFBQztBQUNGQyxnQkFBVSxFQUFF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QUFFcUQsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnRELFNBQXhCLENBQVg7QUFDZUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2FkZC43ZDk2MDY2NTVkYzI2NjkwOThkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTGVzc29uQWRkIChwcm9wcyl7XHJcblxyXG5cclxuICBjb25zdCBsZXNzb25hZGQgPSBtYWtlU3R5bGVzKHtcclxudG9wIDp7XHJcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxufSxcclxudGl0bGU6e1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbiAgICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbn0sXHJcbmlucHV0Zm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiAnNTBweCcsXHJcbiAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG5pbnB1dHRpdGxlOiB7XHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxudGV4dGFyZWE6IHtcclxuICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbmRldGFpbGluZm86IHtcclxuICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn1cclxufSk7XHJcblxyXG5cclxuICAvL+S9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruioreWumihIb29rKVxyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vaW5wdXTjgavlhaXlipvjgZXjgozjgZ/lh6bnkIbjgpJl44Gn5Y+X44GR5Y+W44Gj44Gm44K544OG44O844OI44Gr5YWl44KM44KL6Zai5pWwXHJcbiAgY29uc3QgZG9DaGFuZ2VOYW1lID0oZSk9PntcclxuICAgIHNldExlc3Nvbm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZVBsYWNlPSAoZSk9PntcclxuICAgIHNldFBsYWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VUaW1lID0gKGUpPT57XHJcbiAgICBzZXRUaW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VQcmljZSA9IChlKT0+e1xyXG4gICAgc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZUNvbW1lbnQgPSAoZSk9PntcclxuICAgIHNldExlc3NvbmNvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy/ov73liqDjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgolmaXJlYmFzZeOBq+OCueODhuODvOODiOOBruaDheWgseOCkuabuOOBjei+vOOCgOWHpueQhlxyXG4gIC8vYWRk44Gn6L+95Yqg44GX44Gm44GE44KL44GL44KJ44CB44OJ44Kt44Ol44Oh44Oz44OIaWTjga/jg6bjg4vjg7zjgq/jgappZOOBjOiHquWLleOBp+W9k+OBpuOCieOCjOOCi1xyXG4gIC8vUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbChpZCnjgpJlbmNvZGUoIC7ihpIqICnjgavjgZfjgablrprmlbDjgavku6PlhaVcclxuICBjb25zdCBkb1N1Ym1pdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5hZGQoe1xyXG4gICAgICAgIGNyZWF0ZXJpZDogZW1haWwsXHJcbiAgICAgICAgbGVzc29ubmFtZTpsZXNzb25uYW1lLFxyXG4gICAgICAgIGxlc3NvbnBsYWNlOnBsYWNlLFxyXG4gICAgICAgIGxlc3NvbnByaWNlOnByaWNlLFxyXG4gICAgICAgIGxlc3NvbnRleHQ6bGVzc29uY29tbWVudCxcclxuICAgICAgICBsZXNzb250aW1lOnRpbWVcclxuICAgICAgfSkudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uSUQ6XCIsZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGgyPuODrOODg+OCueODs+i/veWKoDwvaDI+XHJcbiAgICA8cD7jg6zjg4Pjgrnjg7PlkI08L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfT48L2lucHV0PlxyXG4gICAgPHA+5aC05omAPC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUGxhY2V9PjwvaW5wdXQ+XHJcbiAgICA8cD7miYDopoHmmYLplpM8L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VUaW1lfT48L2lucHV0PlxyXG4gICAgPHA+5paZ6YeRPC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUHJpY2V9PjwvaW5wdXQ+XHJcbiAgICA8cD7jg6zjg4Pjgrnjg7PoqbPntLA8L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VDb21tZW50fT48L2lucHV0PlxyXG4gICAgey8qIOimgeeiuuiqjSA6IOODmuODvOOCuOenu+WLleWHpueQhuOBjGZpcmViYXNl5pu444GN6L6844KA5Yem55CG44KI44KK5YWI44Gr5a6f6KGM44GV44KM44KL44Gu44GM5aSn5LiI5aSr44Gq44Gu44GLICovfVxyXG4gICAgey8qIG5leHQuanPjga5Sb3V0ZXLjg6Hjgr3jg4Pjg4njgpLkvb/jgaPjgabjgIFkb3N1Ym1pdOWGheOBp+ODmuODvOOCuOenu+WLleOBl+OBn+OBi+OBo+OBn+OBjOOCqOODqeODvOOBjOWHuuOBn+OBruOBp+OBqOOCiuOBguOBiOOBmkxpbmvjgpLkvb/jgaPjgabjgYLjgosgKi99XHJcbiAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtkb1N1Ym1pdH0+6L+95YqgPC9idXR0b24+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9kaXY+XHJcbik7fVxyXG5cclxuTGVzc29uQWRkID1jb25uZWN0KChzdGF0ZSk9PnN0YXRlKShMZXNzb25BZGQpO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25BZGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==