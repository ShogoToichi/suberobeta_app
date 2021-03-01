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

  //   const lessonadd = makeStyles({
  // top :{
  //     textAlign:"center",
  // },
  // title:{
  //     fontWeight: 'bold',
  //     margin:"0 auto",
  //     marginTop:"20px",
  // },
  // inputform: {
  //     marginTop: '50px',
  //     width: '500px',
  //     margin:"0 auto",
  // },
  // inputtitle: {
  //     margin:"0 auto",
  // },
  // textarea: {
  //     marginTop: '20px',
  //     margin:"0 auto",
  // },
  // detailinfo: {
  //     marginTop: '20px',
  //     margin:"0 auto",
  // }
  // });
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
  }(); // const classes = lessonadd();


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: "新規レッスンの追加",
      subtitle: "自分の能力を生かして、ウィンタースポーツの輪を広げましょう。"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_InputForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
      doChangeName: doChangeName,
      doChangeTime: doChangeTime,
      doChangePlace: doChangePlace,
      doChangePrice: doChangePrice,
      doChangeComment: doChangeComment,
      doSubmit: doSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25hZGQvTGVzc29uQWRkLmpzIl0sIm5hbWVzIjpbIkxlc3NvbkFkZCIsInByb3BzIiwidXNlU3RhdGUiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsImRvQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvQ2hhbmdlUGxhY2UiLCJkb0NoYW5nZVRpbWUiLCJkb0NoYW5nZVByaWNlIiwiZG9DaGFuZ2VDb21tZW50IiwiZG9TdWJtaXQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJhZGQiLCJjcmVhdGVyaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnByaWNlIiwibGVzc29udGV4dCIsImxlc3NvbnRpbWUiLCJ0aGVuIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBRzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRTtBQS9Cd0Isa0JBZ0NXQyxzREFBUSxDQUFDLEVBQUQsQ0FoQ25CO0FBQUEsTUFnQ2pCQyxVQWhDaUI7QUFBQSxNQWdDTkMsYUFoQ007O0FBQUEsbUJBaUNDRixzREFBUSxDQUFDLEVBQUQsQ0FqQ1Q7QUFBQSxNQWlDakJHLEtBakNpQjtBQUFBLE1BaUNYQyxRQWpDVzs7QUFBQSxtQkFrQ0RKLHNEQUFRLENBQUMsRUFBRCxDQWxDUDtBQUFBLE1Ba0NqQkssSUFsQ2lCO0FBQUEsTUFrQ1pDLE9BbENZOztBQUFBLG1CQW1DQ04sc0RBQVEsQ0FBQyxFQUFELENBbkNUO0FBQUEsTUFtQ2pCTyxLQW5DaUI7QUFBQSxNQW1DWEMsUUFuQ1c7O0FBQUEsbUJBb0NpQlIsc0RBQVEsQ0FBQyxFQUFELENBcEN6QjtBQUFBLE1Bb0NqQlMsYUFwQ2lCO0FBQUEsTUFvQ0hDLGdCQXBDRyxrQkFzQ3hCOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUUsU0FBZEEsWUFBYyxDQUFDQyxDQUFELEVBQUs7QUFDdkJWLGlCQUFhLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGFBQWEsR0FBRSxTQUFmQSxhQUFlLENBQUNILENBQUQsRUFBSztBQUN4QlIsWUFBUSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixDQUFELEVBQUs7QUFDeEJOLFdBQU8sQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTCxDQUFELEVBQUs7QUFDekJKLFlBQVEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsTUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDTixDQUFELEVBQUs7QUFDM0JGLG9CQUFnQixDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUNELEdBRkQsQ0FuRHdCLENBdUR4QjtBQUNBO0FBQ0E7OztBQUNBLE1BQU1LLFFBQVE7QUFBQSxnV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZ0JBRFMsR0FDSkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURJO0FBRVRDLG1CQUZTLEdBRURDLHdEQUFHLENBQUNDLFdBQUosQ0FBZ0IxQixLQUFLLENBQUN3QixLQUF0QixDQUZDO0FBQUE7QUFBQSxxQkFHVEgsRUFBRSxDQUFDTSxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkI7QUFDL0JDLHlCQUFTLEVBQUVMLEtBRG9CO0FBRS9CdEIsMEJBQVUsRUFBQ0EsVUFGb0I7QUFHL0I0QiwyQkFBVyxFQUFDMUIsS0FIbUI7QUFJL0IyQiwyQkFBVyxFQUFDdkIsS0FKbUI7QUFLL0J3QiwwQkFBVSxFQUFDdEIsYUFMb0I7QUFNL0J1QiwwQkFBVSxFQUFDM0I7QUFOb0IsZUFBN0IsRUFPRDRCLElBUEMsQ0FPSSxVQUFTQyxHQUFULEVBQWE7QUFDbkJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCRixHQUFHLENBQUNHLEVBQTVCO0FBQ0QsZUFURyxDQUhTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJsQixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQsQ0ExRHdCLENBeUVwQjs7O0FBRUYsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw0REFBRDtBQUNFLFdBQUssRUFBRSxXQURUO0FBRUUsY0FBUSxFQUFFO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0kscUVBQUMseURBQUQ7QUFDRSxrQkFBWSxFQUFFUixZQURoQjtBQUVFLGtCQUFZLEVBQUVLLFlBRmhCO0FBR0UsbUJBQWEsRUFBRUQsYUFIakI7QUFJRSxtQkFBYSxFQUFFRSxhQUpqQjtBQUtFLHFCQUFlLEVBQUVDLGVBTG5CO0FBTUUsY0FBUSxFQUFFQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJFSDs7R0F0SlFyQixTOztLQUFBQSxTO0FBd0pUQSxTQUFTLEdBQUV3QywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCekMsU0FBeEIsQ0FBWDtBQUNlQSx3RUFBZixFLENBS0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9hZGQuZjVkMGVkOGIzZjgxODEyYTJjZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9MaWIvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uL25vcm1hbF9wYXJ0cy9UaXRsZVwiXHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4vcGFydHMvSW5wdXRGb3JtXCJcclxuXHJcblxyXG5mdW5jdGlvbiBMZXNzb25BZGQgKHByb3BzKXtcclxuXHJcblxyXG4vLyAgIGNvbnN0IGxlc3NvbmFkZCA9IG1ha2VTdHlsZXMoe1xyXG4vLyB0b3AgOntcclxuLy8gICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4vLyB9LFxyXG4vLyB0aXRsZTp7XHJcbi8vICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbi8vICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxuLy8gICAgIG1hcmdpblRvcDpcIjIwcHhcIixcclxuLy8gfSxcclxuLy8gaW5wdXRmb3JtOiB7XHJcbi8vICAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcclxuLy8gICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4vLyAgICAgbWFyZ2luOlwiMCBhdXRvXCIsXHJcbi8vIH0sXHJcbi8vIGlucHV0dGl0bGU6IHtcclxuLy8gICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG4vLyB9LFxyXG4vLyB0ZXh0YXJlYToge1xyXG4vLyAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbi8vICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxuLy8gfSxcclxuLy8gZGV0YWlsaW5mbzoge1xyXG4vLyAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbi8vICAgICBtYXJnaW46XCIwIGF1dG9cIixcclxuLy8gfVxyXG4vLyB9KTtcclxuXHJcblxyXG4gIC8v5L2/55So44GZ44KL44K544OG44O844OI44Gu6Kit5a6aKEhvb2spXHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9pbnB1dOOBq+WFpeWKm+OBleOCjOOBn+WHpueQhuOCkmXjgaflj5fjgZHlj5bjgaPjgabjgrnjg4bjg7zjg4jjgavlhaXjgozjgovplqLmlbBcclxuICBjb25zdCBkb0NoYW5nZU5hbWUgPShlKT0+e1xyXG4gICAgc2V0TGVzc29ubmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlUGxhY2U9IChlKT0+e1xyXG4gICAgc2V0UGxhY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZVRpbWUgPSAoZSk9PntcclxuICAgIHNldFRpbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZVByaWNlID0gKGUpPT57XHJcbiAgICBzZXRQcmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlQ29tbWVudCA9IChlKT0+e1xyXG4gICAgc2V0TGVzc29uY29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvL+i/veWKoOODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiWZpcmViYXNl44Gr44K544OG44O844OI44Gu5oOF5aCx44KS5pu444GN6L6844KA5Yem55CGXHJcbiAgLy9hZGTjgafov73liqDjgZfjgabjgYTjgovjgYvjgonjgIHjg4njgq3jg6Xjg6Hjg7Pjg4hpZOOBr+ODpuODi+ODvOOCr+OBqmlk44GM6Ieq5YuV44Gn5b2T44Gm44KJ44KM44KLXHJcbiAgLy9SZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWlsKGlkKeOCkmVuY29kZSggLuKGkiogKeOBq+OBl+OBpuWumuaVsOOBq+S7o+WFpVxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbClcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmFkZCh7XHJcbiAgICAgICAgY3JlYXRlcmlkOiBlbWFpbCxcclxuICAgICAgICBsZXNzb25uYW1lOmxlc3Nvbm5hbWUsXHJcbiAgICAgICAgbGVzc29ucGxhY2U6cGxhY2UsXHJcbiAgICAgICAgbGVzc29ucHJpY2U6cHJpY2UsXHJcbiAgICAgICAgbGVzc29udGV4dDpsZXNzb25jb21tZW50LFxyXG4gICAgICAgIGxlc3NvbnRpbWU6dGltZVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25JRDpcIixkb2MuaWQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gICAgICAvLyBjb25zdCBjbGFzc2VzID0gbGVzc29uYWRkKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUaXRsZSBcclxuICAgICAgICAgICAgICB0aXRsZT17XCLmlrDopo/jg6zjg4Pjgrnjg7Pjga7ov73liqBcIn0gXHJcbiAgICAgICAgICAgICAgc3VidGl0bGU9e1wi6Ieq5YiG44Gu6IO95Yqb44KS55Sf44GL44GX44Gm44CB44Km44Kj44Oz44K/44O844K544Od44O844OE44Gu6Lyq44KS5bqD44GS44G+44GX44KH44GG44CCXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dEZvcm0gXHJcbiAgICAgICAgICAgICAgZG9DaGFuZ2VOYW1lPXtkb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgZG9DaGFuZ2VUaW1lPXtkb0NoYW5nZVRpbWV9XHJcbiAgICAgICAgICAgICAgZG9DaGFuZ2VQbGFjZT17ZG9DaGFuZ2VQbGFjZX1cclxuICAgICAgICAgICAgICBkb0NoYW5nZVByaWNlPXtkb0NoYW5nZVByaWNlfVxyXG4gICAgICAgICAgICAgIGRvQ2hhbmdlQ29tbWVudD17ZG9DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgICAgIGRvU3VibWl0PXtkb1N1Ym1pdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj7jg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLml6XmmYJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH5pyI44CH5pel5Y2I5YmN44CH5pmC772e44CH5pyI44CH5pel5Y2I5YmN44CH5pmCXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5aC05omAXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+OAh+OCueOCreODvOWgtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlUGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmlpnph5FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi77+l44CH44CH44CH44CH5YaGXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WGheWuuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fSB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcImNvbG9yPVwiaW5nZXJpdFwiIG9uQ2xpY2s9e2RvU3VibWl0fT7ov70g5YqgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkxlc3NvbkFkZCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTGVzc29uQWRkKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uQWRkO1xyXG5cclxuXHJcblxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3B9PlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPuaWsOimj+ODrOODg+OCueODs+OBrui/veWKoDwvVHlwb2dyYXBoeT5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuiHquWIhuOBruiDveWKm+OCkueUn+OBi+OBl+OBpuOAgeOCpuOCo+ODs+OCv+ODvOOCueODneODvOODhOOBrui8quOCkuW6g+OBkuOBvuOBl+OCh+OBhuOAgjwvVHlwb2dyYXBoeT5cclxuXHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaW5wdXRmb3JtfT5cclxuICAvLyAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHRpdGxlfSB2YXJpYW50PVwiaDhcIj7jg6zjg4Pjgrnjg7PjgavplqLjgZnjgovmg4XloLHjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODrOODg+OCueODs+WQjVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gIC8vICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPjwvZm9ybT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pmCXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZgu+9nuOAh+aciOOAh+aXpeWNiOWJjeOAh+aZglwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgLy8gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWF9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+PC9mb3JtPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbGFiZWw9XCLloLTmiYBcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44CH44CH44K544Kt44O85aC0XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAvLyAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAvLyAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuaWmemHkVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLvv6XjgIfjgIfjgIfjgIflhoZcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxpbmZvfT5cclxuICAvLyAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj48L2Zvcm0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW11bHRpbGluZS1zdGF0aWNcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Os44OD44K544Oz5YaF5a65XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAvLyAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgLy8gICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fSB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcImNvbG9yPVwiaW5nZXJpdFwiID7ov70g5YqgPC9CdXR0b24+XHJcbiAgLy8gICAgICAgICAgIDwvTGluaz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyA8ZGl2PlxyXG4gIC8vICAgPGgyPuODrOODg+OCueODs+i/veWKoDwvaDI+XHJcbiAgLy8gICA8cD7jg6zjg4Pjgrnjg7PlkI08L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfT48L2lucHV0PlxyXG4gIC8vICAgPHA+5aC05omAPC9wPlxyXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUGxhY2V9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7miYDopoHmmYLplpM8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VUaW1lfT48L2lucHV0PlxyXG4gIC8vICAgPHA+5paZ6YeRPC9wPlxyXG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlUHJpY2V9PjwvaW5wdXQ+XHJcbiAgLy8gICA8cD7jg6zjg4Pjgrnjg7PoqbPntLA8L3A+XHJcbiAgLy8gICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZG9DaGFuZ2VDb21tZW50fT48L2lucHV0PlxyXG4gIC8vICAgey8qIOimgeeiuuiqjSA6IOODmuODvOOCuOenu+WLleWHpueQhuOBjGZpcmViYXNl5pu444GN6L6844KA5Yem55CG44KI44KK5YWI44Gr5a6f6KGM44GV44KM44KL44Gu44GM5aSn5LiI5aSr44Gq44Gu44GLICovfVxyXG4gIC8vICAgey8qIG5leHQuanPjga5Sb3V0ZXLjg6Hjgr3jg4Pjg4njgpLkvb/jgaPjgabjgIFkb3N1Ym1pdOWGheOBp+ODmuODvOOCuOenu+WLleOBl+OBn+OBi+OBo+OBn+OBjOOCqOODqeODvOOBjOWHuuOBn+OBruOBp+OBqOOCiuOBguOBiOOBmkxpbmvjgpLkvb/jgaPjgabjgYLjgosgKi99XHJcbiAgLy8gICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gIC8vICAgPGJ1dHRvbiBvbkNsaWNrPXtkb1N1Ym1pdH0+6L+95YqgPC9idXR0b24+XHJcbiAgLy8gICA8L0xpbms+XHJcbiAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==