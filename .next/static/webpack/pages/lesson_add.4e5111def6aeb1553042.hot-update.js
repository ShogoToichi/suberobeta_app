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
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonAdd.js",
    _s = $RefreshSig$();












function LessonAdd(props) {
  _s();

  var lessonadd = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
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
    className: classes.top,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.title,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        children: "\u65B0\u898F\u30EC\u30C3\u30B9\u30F3\u306E\u8FFD\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "h8",
      children: "\u81EA\u5206\u306E\u80FD\u529B\u3092\u751F\u304B\u3057\u3066\u3001\u30A6\u30A3\u30F3\u30BF\u30FC\u30B9\u30DD\u30FC\u30C4\u306E\u8F2A\u3092\u5E83\u3052\u307E\u3057\u3087\u3046\u3002"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.inputform,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.inputtitle,
        variant: "h8",
        children: "\u30EC\u30C3\u30B9\u30F3\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-textarea",
        label: "\u30EC\u30C3\u30B9\u30F3\u540D",
        placeholder: "",
        multiline: true,
        fullWidth: true,
        onChange: doChangeName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-textarea",
        label: "\u65E5\u6642",
        placeholder: "\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642\uFF5E\u3007\u6708\u3007\u65E5\u5348\u524D\u3007\u6642",
        multiline: true,
        fullWidth: true,
        onChange: doChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-textarea",
        label: "\u5834\u6240",
        placeholder: "\u3007\u3007\u30B9\u30AD\u30FC\u5834",
        multiline: true,
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-textarea",
        label: "\u6599\u91D1",
        placeholder: "\uFFE5\u3007\u3007\u3007\u3007\u5186",
        multiline: true,
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.detailinfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: classes.textarea,
          noValidate: true,
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: "outlined-multiline-static",
          label: "\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9",
          placeholder: "",
          multiline: true,
          rows: 8,
          variant: "outlined",
          fullWidth: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/mypage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          marginTop: "10px"
        },
        variant: "outlined",
        size: "large",
        color: "ingerit",
        children: "\u8FFD \u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }, this);
}

_s(LessonAdd, "NJMKWAHw7FmOWVdEuO/dFuFDz88=");

_c = LessonAdd;
LessonAdd = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(LessonAdd);
/* harmony default export */ __webpack_exports__["default"] = (LessonAdd); //       <div className={classes.top}>
//           <div className={classes.title}>
//           <Typography variant="h5">新規レッスンの追加</Typography>
//           </div>
//           <Typography variant="h8">自分の能力を生かして、ウィンタースポーツの輪を広げましょう。</Typography>
//           <div className = {classes.inputform}>
//               <Typography className={classes.inputtitle} variant="h8">レッスンに関する情報を入力してください。</Typography>
//               <br></br>
//               <form className={classes.textarea} noValidate autoComplete="off"></form>
//                       <TextField
//                   id="standard-textarea"
//                   label="レッスン名"
//                   placeholder=""
//                   multiline
//                   fullWidth
//                   />
//               <form className={classes.textarea} noValidate autoComplete="off"></form>
//                       <TextField
//                   id="standard-textarea"
//                   label="日時"
//                   placeholder="〇月〇日午前〇時～〇月〇日午前〇時"
//                   multiline
//                   fullWidth
//                   />
//               <form className={classes.textarea} noValidate autoComplete="off"></form>
//                       <TextField
//                   id="standard-textarea"
//                   label="場所"
//                   placeholder="〇〇スキー場"
//                   multiline
//                   fullWidth
//                   />
//               <form className={classes.textarea} noValidate autoComplete="off"></form>
//                       <TextField
//                   id="standard-textarea"
//                   label="料金"
//                   placeholder="￥〇〇〇〇円"
//                   multiline
//                   fullWidth
//                   />
//               <div className={classes.detailinfo}>
//               <form className={classes.textarea} noValidate autoComplete="off"></form>
//                       <TextField
//                   id="outlined-multiline-static"
//                   label="レッスン内容"
//                   placeholder=""
//                   multiline
//                   rows={8}
//                   variant="outlined"
//                   fullWidth
//                   />
//               </div>
//           </div>
//           <Link href="/mypage">
//           <Button style={{marginTop:"10px"}} variant="outlined" size="large"color="ingerit" >追 加</Button>
//           </Link>
//       </div>
// <div>
//   <h2>レッスン追加</h2>
//   <p>レッスン名</p>
//   <input type="text" onChange={doChangeName}></input>
//   <p>場所</p>
//   <input type="text" onChange={doChangePlace}></input>
//   <p>所要時間</p>
//   <input type="text" onChange={doChangeTime}></input>
//   <p>料金</p>
//   <input type="text" onChange={doChangePrice}></input>
//   <p>レッスン詳細</p>
//   <input type="text" onChange={doChangeComment}></input>
//   {/* 要確認 : ページ移動処理がfirebase書き込む処理より先に実行されるのが大丈夫なのか */}
//   {/* next.jsのRouterメソッドを使って、dosubmit内でページ移動したかったがエラーが出たのでとりあえずLinkを使ってある */}
//   <Link href="/mypage">
//   <button onClick={doSubmit}>追加</button>
//   </Link>
// </div>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25BZGQuanMiXSwibmFtZXMiOlsiTGVzc29uQWRkIiwicHJvcHMiLCJsZXNzb25hZGQiLCJtYWtlU3R5bGVzIiwidG9wIiwidGV4dEFsaWduIiwidGl0bGUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaW5wdXRmb3JtIiwid2lkdGgiLCJpbnB1dHRpdGxlIiwidGV4dGFyZWEiLCJkZXRhaWxpbmZvIiwidXNlU3RhdGUiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsImRvQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvQ2hhbmdlUGxhY2UiLCJkb0NoYW5nZVRpbWUiLCJkb0NoYW5nZVByaWNlIiwiZG9DaGFuZ2VDb21tZW50IiwiZG9TdWJtaXQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJhZGQiLCJjcmVhdGVyaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImxlc3NvbnRpbWUiLCJ0aGVuIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiY2xhc3NlcyIsImRvQ2hhbmdlIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBR3hCLE1BQU1DLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUMvQkMsT0FBRyxFQUFFO0FBQ0RDLGVBQVMsRUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9hZGQuNGU1MTExZGVmNmFlYjE1NTMwNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIExlc3NvbkFkZCAocHJvcHMpe1xyXG5cclxuXHJcbiAgY29uc3QgbGVzc29uYWRkID0gbWFrZVN0eWxlcyh7XHJcbnRvcCA6e1xyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbn0sXHJcbnRpdGxlOntcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG4gICAgbWFyZ2luVG9wOlwiMjBweFwiLFxyXG59LFxyXG5pbnB1dGZvcm06IHtcclxuICAgIG1hcmdpblRvcDogJzUwcHgnLFxyXG4gICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuaW5wdXR0aXRsZToge1xyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbnRleHRhcmVhOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG5kZXRhaWxpbmZvOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59XHJcbn0pO1xyXG5cclxuXHJcbiAgLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTmFtZSA9KGUpPT57XHJcbiAgICBzZXRMZXNzb25uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VQbGFjZT0gKGUpPT57XHJcbiAgICBzZXRQbGFjZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlVGltZSA9IChlKT0+e1xyXG4gICAgc2V0VGltZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlUHJpY2UgPSAoZSk9PntcclxuICAgIHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VDb21tZW50ID0gKGUpPT57XHJcbiAgICBzZXRMZXNzb25jb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL2FkZOOBp+i/veWKoOOBl+OBpuOBhOOCi+OBi+OCieOAgeODieOCreODpeODoeODs+ODiGlk44Gv44Om44OL44O844Kv44GqaWTjgYzoh6rli5XjgaflvZPjgabjgonjgozjgotcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuYWRkKHtcclxuICAgICAgICBjcmVhdGVyaWQ6IGVtYWlsLFxyXG4gICAgICAgIGxlc3Nvbm5hbWU6bGVzc29ubmFtZSxcclxuICAgICAgICBsZXNzb25wbGFjZTpwbGFjZSxcclxuICAgICAgICBsZXNzb25wcmljZTpwcmljZSxcclxuICAgICAgICBsZXNzb250ZXh0Omxlc3NvbmNvbW1lbnQsXHJcbiAgICAgICAgbGVzc29udGltZTp0aW1lXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3NvbklEOlwiLGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBsZXNzb25hZGQoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9wfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj7mlrDopo/jg6zjg4Pjgrnjg7Pjga7ov73liqA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7oh6rliIbjga7og73lipvjgpLnlJ/jgYvjgZfjgabjgIHjgqbjgqPjg7Pjgr/jg7zjgrnjg53jg7zjg4Tjga7ovKrjgpLluoPjgZLjgb7jgZfjgofjgYbjgII8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmlucHV0Zm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR0aXRsZX0gdmFyaWFudD1cImg4XCI+44Os44OD44K544Oz44Gr6Zai44GZ44KL5oOF5aCx44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6zjg4Pjgrnjg7PlkI1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pmCXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZgu+9nuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZglwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5aC05omAXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+OAh+OCueOCreODvOWgtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmlpnph5FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi77+l44CH44CH44CH44CH5YaGXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WGheWuuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwifX0gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCJjb2xvcj1cImluZ2VyaXRcIiA+6L+9IOWKoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkxlc3NvbkFkZCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTGVzc29uQWRkKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uQWRkO1xyXG5cclxuXHJcblxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3B9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPuaWsOimj+ODrOODg+OCueODs+OBrui/veWKoDwvVHlwb2dyYXBoeT5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuiHquWIhuOBruiDveWKm+OCkueUn+OBi+OBl+OBpuOAgeOCpuOCo+ODs+OCv+ODvOOCueODneODvOODhOOBrui8quOCkuW6g+OBkuOBvuOBl+OCh+OBhuOAgjwvVHlwb2dyYXBoeT5cclxuXHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAvLyAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj7jg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gIC8vICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pmCXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZgu+9nuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZglwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgLy8gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbGFiZWw9XCLloLTmiYBcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH44CH44K544Kt44O85aC0XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAvLyAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaWmemHkVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLvv6XjgIfjgIfjgIfjgIflhoZcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxpbmZvfT5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW11bHRpbGluZS1zdGF0aWNcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5YaF5a65XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAvLyAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgLy8gICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fSB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcImNvbG9yPVwiaW5nZXJpdFwiID7ov70g5YqgPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvTGluaz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyA8ZGl2PlxyXG4gIC8vICAgPGgyPuODrOODg+OCueODs+i/veWKoDwvaDI+XHJcbiAgLy8gICA8cD7jg6zjg4Pjgrnjg7PlkI08L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfT48L2lucHV0PlxyXG4gIC8vICAgPHA+5aC05omAPC9wPlxyXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUGxhY2V9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7miYDopoHmmYLplpM8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VUaW1lfT48L2lucHV0PlxyXG4gIC8vICAgPHA+5paZ6YeRPC9wPlxyXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUHJpY2V9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7jg6zjg4Pjgrnjg7PoqbPntLA8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VDb21tZW50fT48L2lucHV0PlxyXG4gIC8vICAgey8qIOimgeeiuuiqjSA6IOODmuODvOOCuOenu+WLleWHpueQhuOBjGZpcmViYXNl5pu444GN6L6844KA5Yem55CG44KI44KK5YWI44Gr5a6f6KGM44GV44KM44KL44Gu44GM5aSn5LiI5aSr44Gq44Gu44GLICovfVxyXG4gIC8vICAgey8qIG5leHQuanPjga5Sb3V0ZXLjg6Hjgr3jg4Pjg4njgpLkvb/jgaPjgabjgIFkb3N1Ym1pdOWGheOBp+ODmuODvOOCuOenu+WLleOBl+OBn+OBi+OBo+OBn+OBjOOCqOODqeODvOOBjOWHuuOBn+OBruOBp+OBqOOCiuOBguOBiOOBmkxpbmvjgpLkvb/jgaPjgabjgYLjgosgKi99XHJcbiAgLy8gICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gIC8vICAgPGJ1dHRvbiBvbkNsaWNrPXtkb1N1Ym1pdH0+6L+95YqgPC9idXR0b24+XHJcbiAgLy8gICA8L0xpbms+XHJcbiAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==