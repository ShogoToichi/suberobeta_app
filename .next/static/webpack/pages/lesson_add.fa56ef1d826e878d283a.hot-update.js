webpackHotUpdate_N_E("pages/lesson_add",{

/***/ "./components/lessonadd/LessonAdd.js":
/*!*******************************************!*\
  !*** ./components/lessonadd/LessonAdd.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Lib_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Lib/address_lib */ "./Lib/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");
/* harmony import */ var _parts_InputForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parts/InputForm */ "./components/lessonadd/parts/InputForm.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonadd\\LessonAdd.js",
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
    var _ref = Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              email = _Lib_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: "新規レッスンの追加",
      subtitle: "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_InputForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
      doChangeName: doChangeName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.inputform,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.inputtitle,
        variant: "h8",
        children: "\u30EC\u30C3\u30B9\u30F3\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 101,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
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
        lineNumber: 111,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 121,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.textarea,
        noValidate: true,
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-textarea",
        label: "\u6599\u91D1",
        placeholder: "\uFFE5\u3007\u3007\u3007\u3007\u5186",
        multiline: true,
        fullWidth: true,
        onChange: doChangePrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.detailinfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: classes.textarea,
          noValidate: true,
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: "outlined-multiline-static",
          label: "\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9",
          placeholder: "",
          multiline: true,
          rows: 8,
          variant: "outlined",
          fullWidth: true,
          onChange: doChangeComment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
        onClick: doSubmit,
        children: "\u8FFD \u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25hZGQvTGVzc29uQWRkLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkFkZCIsInByb3BzIiwibGVzc29uYWRkIiwibWFrZVN0eWxlcyIsInRvcCIsInRleHRBbGlnbiIsInRpdGxlIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImlucHV0Zm9ybSIsIndpZHRoIiwiaW5wdXR0aXRsZSIsInRleHRhcmVhIiwiZGV0YWlsaW5mbyIsInVzZVN0YXRlIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJwbGFjZSIsInNldFBsYWNlIiwidGltZSIsInNldFRpbWUiLCJwcmljZSIsInNldFByaWNlIiwibGVzc29uY29tbWVudCIsInNldExlc3NvbmNvbW1lbnQiLCJkb0NoYW5nZU5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkb0NoYW5nZVBsYWNlIiwiZG9DaGFuZ2VUaW1lIiwiZG9DaGFuZ2VQcmljZSIsImRvQ2hhbmdlQ29tbWVudCIsImRvU3VibWl0IiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJjb2xsZWN0aW9uIiwiYWRkIiwiY3JlYXRlcmlkIiwibGVzc29ucGxhY2UiLCJsZXNzb25wcmljZSIsImxlc3NvbnRleHQiLCJsZXNzb250aW1lIiwidGhlbiIsImRvYyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImNsYXNzZXMiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsU0FBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFHeEIsTUFBTUMsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQy9CQyxPQUFHLEVBQUU7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2FkZC5mYTU2ZWYxZDgyNmU4NzhkMjgzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uLy4uL0xpYi9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vbm9ybWFsX3BhcnRzL1RpdGxlXCJcclxuaW1wb3J0IElucHV0Rm9ybSBmcm9tIFwiLi9wYXJ0cy9JbnB1dEZvcm1cIlxyXG5cclxuXHJcbmZ1bmN0aW9uIExlc3NvbkFkZCAocHJvcHMpe1xyXG5cclxuXHJcbiAgY29uc3QgbGVzc29uYWRkID0gbWFrZVN0eWxlcyh7XHJcbnRvcCA6e1xyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbn0sXHJcbnRpdGxlOntcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG4gICAgbWFyZ2luVG9wOlwiMjBweFwiLFxyXG59LFxyXG5pbnB1dGZvcm06IHtcclxuICAgIG1hcmdpblRvcDogJzUwcHgnLFxyXG4gICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIixcclxufSxcclxuaW5wdXR0aXRsZToge1xyXG4gICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbn0sXHJcbnRleHRhcmVhOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59LFxyXG5kZXRhaWxpbmZvOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG59XHJcbn0pO1xyXG5cclxuXHJcbiAgLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTmFtZSA9KGUpPT57XHJcbiAgICBzZXRMZXNzb25uYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VQbGFjZT0gKGUpPT57XHJcbiAgICBzZXRQbGFjZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlVGltZSA9IChlKT0+e1xyXG4gICAgc2V0VGltZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlUHJpY2UgPSAoZSk9PntcclxuICAgIHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VDb21tZW50ID0gKGUpPT57XHJcbiAgICBzZXRMZXNzb25jb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL2FkZOOBp+i/veWKoOOBl+OBpuOBhOOCi+OBi+OCieOAgeODieOCreODpeODoeODs+ODiGlk44Gv44Om44OL44O844Kv44GqaWTjgYzoh6rli5XjgaflvZPjgabjgonjgozjgotcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuYWRkKHtcclxuICAgICAgICBjcmVhdGVyaWQ6IGVtYWlsLFxyXG4gICAgICAgIGxlc3Nvbm5hbWU6bGVzc29ubmFtZSxcclxuICAgICAgICBsZXNzb25wbGFjZTpwbGFjZSxcclxuICAgICAgICBsZXNzb25wcmljZTpwcmljZSxcclxuICAgICAgICBsZXNzb250ZXh0Omxlc3NvbmNvbW1lbnQsXHJcbiAgICAgICAgbGVzc29udGltZTp0aW1lXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3NvbklEOlwiLGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBsZXNzb25hZGQoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9wfT5cclxuICAgICAgICAgICAgPFRpdGxlIFxyXG4gICAgICAgICAgICB0aXRsZT17XCLmlrDopo/jg6zjg4Pjgrnjg7Pjga7ov73liqBcIn0gXHJcbiAgICAgICAgICAgIHN1YnRpdGxlPXtcIuiHquWIhuOBruiDveWKm+OCkueUn+OBi+OBl+OBpuOAgeOCpuOCo+ODs+OCv+ODvOOCueODneODvOODhOOBrui8quOCkuW6g+OBkuOBvuOBl+OCh+OBhuOAglwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRGb3JtIGRvQ2hhbmdlTmFtZT17ZG9DaGFuZ2VOYW1lfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj7jg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmmYJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH5pyI44CH5pel5Y2I5YmN44CH5pmC772e44CH5pyI44CH5pel5Y2I5YmN44CH5pmCXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5aC05omAXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+OAh+OCueOCreODvOWgtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlUGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmlpnph5FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi77+l44CH44CH44CH44CH5YaGXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WGheWuuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fSB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcImNvbG9yPVwiaW5nZXJpdFwiIG9uQ2xpY2s9e2RvU3VibWl0fT7ov70g5YqgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuTGVzc29uQWRkID1jb25uZWN0KChzdGF0ZSk9PnN0YXRlKShMZXNzb25BZGQpO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25BZGQ7XHJcblxyXG5cclxuXHJcblxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcH0+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAvLyAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+5paw6KaP44Os44OD44K544Oz44Gu6L+95YqgPC9UeXBvZ3JhcGh5PlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg4XCI+6Ieq5YiG44Gu6IO95Yqb44KS55Sf44GL44GX44Gm44CB44Km44Kj44Oz44K/44O844K544Od44O844OE44Gu6Lyq44KS5bqD44GS44G+44GX44KH44GG44CCPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5pbnB1dGZvcm19PlxyXG4gIC8vICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0dGl0bGV9IHZhcmlhbnQ9XCJoOFwiPuODrOODg+OCueODs+OBq+mWouOBmeOCi+aDheWgseOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgjwvVHlwb2dyYXBoeT5cclxuICAvLyAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gIC8vICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5ZCNXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgLy8gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmmYJcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH5pyI44CH5pel5Y2I5YmN44CH5pmC772e44CH5pyI44CH5pel5Y2I5YmN44CH5pmCXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAvLyAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuWgtOaJgFwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjgIfjgIfjgrnjgq3jg7zloLRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gIC8vICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5paZ6YeRXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu+/peOAh+OAh+OAh+OAh+WGhlwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbGluZm99PlxyXG4gIC8vICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbXVsdGlsaW5lLXN0YXRpY1wiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6zjg4Pjgrnjg7PlhoXlrrlcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAvLyAgICAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAvLyAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJsYXJnZVwiY29sb3I9XCJpbmdlcml0XCIgPui/vSDliqA8L0J1dHRvbj5cclxuICAvLyAgICAgICAgICAgPC9MaW5rPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vIDxkaXY+XHJcbiAgLy8gICA8aDI+44Os44OD44K544Oz6L+95YqgPC9oMj5cclxuICAvLyAgIDxwPuODrOODg+OCueODs+WQjTwvcD5cclxuICAvLyAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZU5hbWV9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7loLTmiYA8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VQbGFjZX0+PC9pbnB1dD5cclxuICAvLyAgIDxwPuaJgOimgeaZgumWkzwvcD5cclxuICAvLyAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZVRpbWV9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7mlpnph5E8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VQcmljZX0+PC9pbnB1dD5cclxuICAvLyAgIDxwPuODrOODg+OCueODs+ips+e0sDwvcD5cclxuICAvLyAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZUNvbW1lbnR9PjwvaW5wdXQ+XHJcbiAgLy8gICB7Lyog6KaB56K66KqNIDog44Oa44O844K456e75YuV5Yem55CG44GMZmlyZWJhc2Xmm7jjgY3ovrzjgoDlh6bnkIbjgojjgorlhYjjgavlrp/ooYzjgZXjgozjgovjga7jgYzlpKfkuIjlpKvjgarjga7jgYsgKi99XHJcbiAgLy8gICB7LyogbmV4dC5qc+OBrlJvdXRlcuODoeOCveODg+ODieOCkuS9v+OBo+OBpuOAgWRvc3VibWl05YaF44Gn44Oa44O844K456e75YuV44GX44Gf44GL44Gj44Gf44GM44Ko44Op44O844GM5Ye644Gf44Gu44Gn44Go44KK44GC44GI44GaTGlua+OCkuS9v+OBo+OBpuOBguOCiyAqL31cclxuICAvLyAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgLy8gICA8YnV0dG9uIG9uQ2xpY2s9e2RvU3VibWl0fT7ov73liqA8L2J1dHRvbj5cclxuICAvLyAgIDwvTGluaz5cclxuICAvLyA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9