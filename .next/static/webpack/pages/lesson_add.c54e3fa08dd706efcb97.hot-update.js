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
        onChange: doChangeTime
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
        fullWidth: true,
        onChange: doChangePlace
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
        lineNumber: 128,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-textarea",
        label: "\u6599\u91D1",
        placeholder: "\uFFE5\u3007\u3007\u3007\u3007\u5186",
        multiline: true,
        fullWidth: true,
        onChange: doChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.detailinfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: classes.textarea,
          noValidate: true,
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
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
          lineNumber: 139,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
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
        lineNumber: 151,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25BZGQuanMiXSwibmFtZXMiOlsiTGVzc29uQWRkIiwicHJvcHMiLCJsZXNzb25hZGQiLCJtYWtlU3R5bGVzIiwidG9wIiwidGV4dEFsaWduIiwidGl0bGUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaW5wdXRmb3JtIiwid2lkdGgiLCJpbnB1dHRpdGxlIiwidGV4dGFyZWEiLCJkZXRhaWxpbmZvIiwidXNlU3RhdGUiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsImRvQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvQ2hhbmdlUGxhY2UiLCJkb0NoYW5nZVRpbWUiLCJkb0NoYW5nZVByaWNlIiwiZG9DaGFuZ2VDb21tZW50IiwiZG9TdWJtaXQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJhZGQiLCJjcmVhdGVyaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImxlc3NvbnRpbWUiLCJ0aGVuIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiY2xhc3NlcyIsImRvQ2hhbmdlIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBR3hCLE1BQU1DLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUMvQkMsT0FBRyxFQUFFO0FBQ0RDLGVBQVMsRUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fYWRkLmM1NGUzZmEwOGRkNzA2ZWZjYjk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuXHJcblxyXG5mdW5jdGlvbiBMZXNzb25BZGQgKHByb3BzKXtcclxuXHJcblxyXG4gIGNvbnN0IGxlc3NvbmFkZCA9IG1ha2VTdHlsZXMoe1xyXG50b3AgOntcclxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG59LFxyXG50aXRsZTp7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxuICAgIG1hcmdpblRvcDpcIjIwcHhcIixcclxufSxcclxuaW5wdXRmb3JtOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcclxuICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbmlucHV0dGl0bGU6IHtcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG50ZXh0YXJlYToge1xyXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuZGV0YWlsaW5mbzoge1xyXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufVxyXG59KTtcclxuXHJcblxyXG4gIC8v5L2/55So44GZ44KL44K544OG44O844OI44Gu6Kit5a6aKEhvb2spXHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9pbnB1dOOBq+WFpeWKm+OBleOCjOOBn+WHpueQhuOCkmXjgaflj5fjgZHlj5bjgaPjgabjgrnjg4bjg7zjg4jjgavlhaXjgozjgovplqLmlbBcclxuICBjb25zdCBkb0NoYW5nZU5hbWUgPShlKT0+e1xyXG4gICAgc2V0TGVzc29ubmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlUGxhY2U9IChlKT0+e1xyXG4gICAgc2V0UGxhY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZVRpbWUgPSAoZSk9PntcclxuICAgIHNldFRpbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZVByaWNlID0gKGUpPT57XHJcbiAgICBzZXRQcmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlQ29tbWVudCA9IChlKT0+e1xyXG4gICAgc2V0TGVzc29uY29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvL+i/veWKoOODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiWZpcmViYXNl44Gr44K544OG44O844OI44Gu5oOF5aCx44KS5pu444GN6L6844KA5Yem55CGXHJcbiAgLy9hZGTjgafov73liqDjgZfjgabjgYTjgovjgYvjgonjgIHjg4njgq3jg6Xjg6Hjg7Pjg4hpZOOBr+ODpuODi+ODvOOCr+OBqmlk44GM6Ieq5YuV44Gn5b2T44Gm44KJ44KM44KLXHJcbiAgLy9SZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWlsKGlkKeOCkmVuY29kZSggLuKGkiogKeOBq+OBl+OBpuWumuaVsOOBq+S7o+WFpVxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbClcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmFkZCh7XHJcbiAgICAgICAgY3JlYXRlcmlkOiBlbWFpbCxcclxuICAgICAgICBsZXNzb25uYW1lOmxlc3Nvbm5hbWUsXHJcbiAgICAgICAgbGVzc29ucGxhY2U6cGxhY2UsXHJcbiAgICAgICAgbGVzc29ucHJpY2U6cHJpY2UsXHJcbiAgICAgICAgbGVzc29udGV4dDpsZXNzb25jb21tZW50LFxyXG4gICAgICAgIGxlc3NvbnRpbWU6dGltZVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25JRDpcIixkb2MuaWQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gICAgICBjb25zdCBjbGFzc2VzID0gbGVzc29uYWRkKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+5paw6KaP44Os44OD44K544Oz44Gu6L+95YqgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg4XCI+6Ieq5YiG44Gu6IO95Yqb44KS55Sf44GL44GX44Gm44CB44Km44Kj44Oz44K/44O844K544Od44O844OE44Gu6Lyq44KS5bqD44GS44G+44GX44KH44GG44CCPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dGZvcm19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0dGl0bGV9IHZhcmlhbnQ9XCJoOFwiPuODrOODg+OCueODs+OBq+mWouOBmeOCi+aDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5ZCNXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaXpeaZglwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjgIfmnIjjgIfml6XljYjliY3jgIfmmYLvvZ7jgIfmnIjjgIfml6XljYjliY3jgIfmmYJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZVRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLloLTmiYBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH44CH44K544Kt44O85aC0XCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VQbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaWmemHkVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLvv6XjgIfjgIfjgIfjgIflhoZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WGheWuuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwifX0gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCJjb2xvcj1cImluZ2VyaXRcIiA+6L+9IOWKoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkxlc3NvbkFkZCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTGVzc29uQWRkKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uQWRkO1xyXG5cclxuXHJcblxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3B9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPuaWsOimj+ODrOODg+OCueODs+OBrui/veWKoDwvVHlwb2dyYXBoeT5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuiHquWIhuOBruiDveWKm+OCkueUn+OBi+OBl+OBpuOAgeOCpuOCo+ODs+OCv+ODvOOCueODneODvOODhOOBrui8quOCkuW6g+OBkuOBvuOBl+OCh+OBhuOAgjwvVHlwb2dyYXBoeT5cclxuXHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAvLyAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj7jg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gIC8vICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pmCXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZgu+9nuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZglwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgLy8gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbGFiZWw9XCLloLTmiYBcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH44CH44K544Kt44O85aC0XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAvLyAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaWmemHkVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLvv6XjgIfjgIfjgIfjgIflhoZcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxpbmZvfT5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW11bHRpbGluZS1zdGF0aWNcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5YaF5a65XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAvLyAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgLy8gICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fSB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcImNvbG9yPVwiaW5nZXJpdFwiID7ov70g5YqgPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvTGluaz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyA8ZGl2PlxyXG4gIC8vICAgPGgyPuODrOODg+OCueODs+i/veWKoDwvaDI+XHJcbiAgLy8gICA8cD7jg6zjg4Pjgrnjg7PlkI08L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfT48L2lucHV0PlxyXG4gIC8vICAgPHA+5aC05omAPC9wPlxyXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUGxhY2V9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7miYDopoHmmYLplpM8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VUaW1lfT48L2lucHV0PlxyXG4gIC8vICAgPHA+5paZ6YeRPC9wPlxyXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUHJpY2V9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7jg6zjg4Pjgrnjg7PoqbPntLA8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VDb21tZW50fT48L2lucHV0PlxyXG4gIC8vICAgey8qIOimgeeiuuiqjSA6IOODmuODvOOCuOenu+WLleWHpueQhuOBjGZpcmViYXNl5pu444GN6L6844KA5Yem55CG44KI44KK5YWI44Gr5a6f6KGM44GV44KM44KL44Gu44GM5aSn5LiI5aSr44Gq44Gu44GLICovfVxyXG4gIC8vICAgey8qIG5leHQuanPjga5Sb3V0ZXLjg6Hjgr3jg4Pjg4njgpLkvb/jgaPjgabjgIFkb3N1Ym1pdOWGheOBp+ODmuODvOOCuOenu+WLleOBl+OBn+OBi+OBo+OBn+OBjOOCqOODqeODvOOBjOWHuuOBn+OBruOBp+OBqOOCiuOBguOBiOOBmkxpbmvjgpLkvb/jgaPjgabjgYLjgosgKi99XHJcbiAgLy8gICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gIC8vICAgPGJ1dHRvbiBvbkNsaWNrPXtkb1N1Ym1pdH0+6L+95YqgPC9idXR0b24+XHJcbiAgLy8gICA8L0xpbms+XHJcbiAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==