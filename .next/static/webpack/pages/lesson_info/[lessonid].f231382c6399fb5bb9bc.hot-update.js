webpackHotUpdate_N_E("pages/lesson_info/[lessonid]",{

/***/ "./components/lessoninfo/LessonInfo.js":
/*!*********************************************!*\
  !*** ./components/lessoninfo/LessonInfo.js ***!
  \*********************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Lib_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Lib/address_lib */ "./Lib/address_lib.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _parts_BuyBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parts/BuyBtn */ "./components/lessoninfo/parts/BuyBtn.js");
/* harmony import */ var _normal_parts_Img__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../normal_parts/Img */ "./components/normal_parts/Img.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessoninfo\\LessonInfo.js",
    _s = $RefreshSig$();

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動










var plofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  title: {
    padding: "2px",
    margin: '15px',
    fontWeight: 'bold',
    display: "inline",
    marginTop: "30px",
    fontSize: "30px"
  },
  info: {
    margin: '10px'
  },
  creatername: {
    margin: "20px 10px 10px 10px",
    paddingTop: "40px"
  } // img:{
  //   height:"70px",
  //   width:"70px",
  //   borderRadius:"35px",
  //   position:"absolute",
  //   top:"155px",
  //   left:"4px",
  // },

});

function LessonInfo(props) {
  _s();

  // 使用するステートの定義
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      createrid = _useState[0],
      setCreaterid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonid = _useState2[0],
      setLessonid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      purchased = _useState3[0],
      setPurchased = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonname = _useState4[0],
      setLessonname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      place = _useState5[0],
      setPlace = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      time = _useState6[0],
      setTime = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState7[0],
      setPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessoncomment = _useState8[0],
      setLessoncomment = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      profileusername = _useState9[0],
      setProfileusername = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      imageurl = _useState10[0],
      setImageurl = _useState10[1];

  var db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //lessondata及びlessoncreaterのprofileを取得

  var getLessonData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return db.collection("lessons").doc(router.query.lessonid).get() //データ取得後の処理
              //取得したデータをlessondataにしまってから、それをステートに突っ込む
              //lessonidは取得しなくていいかも
              .then(function (doc) {
                var lessondata = doc.data();
                var lesson_id = doc.id;
                setCreaterid(lessondata.createrid);
                setLessonid(lesson_id);
                setPurchased(lessondata.purchased);
                setLessonname(lessondata.lessonname);
                setPlace(lessondata.lessonplace);
                setTime(lessondata.lessontime);
                setPrice(lessondata.lessonprice);
                setLessoncomment(lessondata.lessontext);
                console.log(createrid); //ここからプロフィール取得処理
                //レッスン情報で取得したcreateridでfirebaseを参照

                db.collection("users").doc(createrid).get() //if文の処理はエラーがあった時のための処理
                //ネット記事のコピペなので、必要性がどれほどあるかは謎
                .then(function (doc) {
                  if (doc.exists) {
                    var userdata = doc.data();
                    console.log(createrid, userdata);
                    setProfileusername(userdata.profile.name);
                    setImageurl(userdata.imageurl);
                  } else {
                    console.log("no data");
                  }
                })["catch"](function (error) {
                  console.log("Error getting document:", error);
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getLessonData() {
      return _ref.apply(this, arguments);
    };
  }();

  var dobuy = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var email;
      return C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = _Lib_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              _context2.next = 3;
              return db.collection("lessons").doc(router.query.lessonid).set({
                buyerid: email
              }, {
                merge: true
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function dobuy() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (lessonname == "") {
    getLessonData();
  }

  var classes = plofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginTop: "30px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h6",
      className: classes.title,
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_BuyBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      lessonid: router.query.lessonid,
      onClick: dobuy,
      children: "\u8CFC\u5165"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
      elevation: 24,
      rounded: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Img__WEBPACK_IMPORTED_MODULE_12__["default"], {
        src: imageurl,
        size: "70"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.infolist,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h6",
          className: classes.creatername,
          children: ["\u8B1B\u5E2B\u540D\uFF1A ", profileusername]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 126
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u6599\u91D1\uFF1A", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 114
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u5834\u6240\uFF1A", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 114
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u65E5\u6642\uFF1A", time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 113
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", lessoncomment]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 126
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }, this);
}

_s(LessonInfo, "QrCcscyG5gbxvEidbUi8QbEc9Y4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = LessonInfo;
LessonInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(LessonInfo);
/* harmony default export */ __webpack_exports__["default"] = (LessonInfo);

var _c;

$RefreshReg$(_c, "LessonInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL0xlc3NvbkluZm8uanMiXSwibmFtZXMiOlsicGxvZmlsZSIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiaW5mbyIsImNyZWF0ZXJuYW1lIiwicGFkZGluZ1RvcCIsIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwiaW1hZ2V1cmwiLCJzZXRJbWFnZXVybCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRMZXNzb25EYXRhIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsImxlc3NvbmRhdGEiLCJkYXRhIiwibGVzc29uX2lkIiwiaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnRpbWUiLCJsZXNzb25wcmljZSIsImxlc3NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZXhpc3RzIiwidXNlcmRhdGEiLCJwcm9maWxlIiwibmFtZSIsImVycm9yIiwiZG9idXkiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwic2V0IiwiYnV5ZXJpZCIsIm1lcmdlIiwiY2xhc3NlcyIsImluZm9saXN0IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQXpGSUcsVTtVQWVRMkIscUQ7OztLQWZSM0IsVTtBQTRGVEEsVUFBVSxHQUFFMEQsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QjNELFVBQXhCLENBQVo7QUFDZUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2luZm8vW2xlc3NvbmlkXS5mMjMxMzgyYzYzOTlmYjViYjliYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/igLvopoHov73liqAgOiAg44O7cHVyY2hhc2Vk44GL5L2V44GL44Gn5Y+X5LuY5Lit44Gu44Os44OD44K544Oz44Go44Gd44GG44Gn44Gq44GE44Os44OD44K544Oz6LO85YWl44Oc44K/44Oz44Gu6KGo56S644KS5aSJ5pu0XHJcbi8vICAgICAgICAgICAg44O76LO85YWl5b6McHVyY2hhc2Vk44Gu5pu444GN5o+b44GI5Y+K44GzbWVzc2FnZeOBuOOBruenu+WLlVxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7Y29ubmVjdH1mcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vLi4vTGliL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgQnV5QnRuIGZyb20gXCIuL3BhcnRzL0J1eUJ0blwiO1xyXG5pbXBvcnQgSW1nIGZyb20gXCIuLi9ub3JtYWxfcGFydHMvSW1nXCI7XHJcblxyXG5jb25zdCBwbG9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgICAgICBtYXJnaW46ICcxNXB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgZGlzcGxheTpcImlubGluZVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDpcIjMwcHhcIixcclxuICAgICAgICBmb250U2l6ZTpcIjMwcHhcIixcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlcm5hbWUgOiB7XHJcbiAgICAgIG1hcmdpbjpcIjIwcHggMTBweCAxMHB4IDEwcHhcIixcclxuICAgICAgcGFkZGluZ1RvcDpcIjQwcHhcIixcclxuICAgIH0sXHJcbiAgICAvLyBpbWc6e1xyXG4gICAgLy8gICBoZWlnaHQ6XCI3MHB4XCIsXHJcbiAgICAvLyAgIHdpZHRoOlwiNzBweFwiLFxyXG4gICAgLy8gICBib3JkZXJSYWRpdXM6XCIzNXB4XCIsXHJcbiAgICAvLyAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgIC8vICAgdG9wOlwiMTU1cHhcIixcclxuICAgIC8vICAgbGVmdDpcIjRweFwiLFxyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGVzc29uSW5mbyAocHJvcHMpe1xyXG4gIFxyXG4gIC8vIOS9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruWumue+qVxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmlkLHNldExlc3NvbmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1cmNoYXNlZCxzZXRQdXJjaGFzZWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxldXNlcm5hbWUsc2V0UHJvZmlsZXVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZXVybCxzZXRJbWFnZXVybF09dXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHlj4rjgbNsZXNzb25jcmVhdGVy44GucHJvZmlsZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldExlc3NvbkRhdGE9IGFzeW5jKCk9PntcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/jg4fjg7zjgr/lj5blvpflvozjga7lh6bnkIZcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLy9sZXNzb25pZOOBr+WPluW+l+OBl+OBquOBj+OBpuOBhOOBhOOBi+OCglxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGNvbnN0IGxlc3Nvbl9pZCA9IGRvYy5pZDtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3NvbmlkKGxlc3Nvbl9pZCk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIHNldFByaWNlKGxlc3NvbmRhdGEubGVzc29ucHJpY2UpO1xyXG4gICAgICAgIHNldExlc3NvbmNvbW1lbnQobGVzc29uZGF0YS5sZXNzb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQpO1xyXG4gICAgICAgIC8v44GT44GT44GL44KJ44OX44Ot44OV44Kj44O844Or5Y+W5b6X5Yem55CGXHJcbiAgICAgICAgLy/jg6zjg4Pjgrnjg7Pmg4XloLHjgaflj5blvpfjgZfjgZ9jcmVhdGVyaWTjgadmaXJlYmFzZeOCkuWPgueFp1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY3JlYXRlcmlkKS5nZXQoKVxyXG4gICAgICAgIC8vaWbmlofjga7lh6bnkIbjga/jgqjjg6njg7zjgYzjgYLjgaPjgZ/mmYLjga7jgZ/jgoHjga7lh6bnkIZcclxuICAgICAgICAvL+ODjeODg+ODiOiomOS6i+OBruOCs+ODlOODmuOBquOBruOBp+OAgeW/heimgeaAp+OBjOOBqeOCjOOBu+OBqeOBguOCi+OBi+OBr+isjlxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICBpZiAoZG9jLmV4aXN0cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkLHVzZXJkYXRhKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZXVzZXJuYW1lKHVzZXJkYXRhLnByb2ZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgIHNldEltYWdldXJsKHVzZXJkYXRhLmltYWdldXJsKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZGF0YVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgZG9jdW1lbnQ6XCIsZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAgIGNvbnN0IGRvYnV5ID0gYXN5bmMoKT0+e1xyXG4gICAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLnNldCh7XHJcbiAgICAgIGJ1eWVyaWQ6ZW1haWxcclxuICAgIH0se21lcmdlOiB0cnVlfSlcclxuICAgIH1cclxuXHJcbiAgICBpZihsZXNzb25uYW1lID09XCJcIil7XHJcbiAgICAgIGdldExlc3NvbkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZSgpO1xyXG5cclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57bGVzc29ubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8QnV5QnRuIGxlc3NvbmlkPXtyb3V0ZXIucXVlcnkubGVzc29uaWR9IG9uQ2xpY2s9e2RvYnV5fT5cclxuICAgICAgICAgICAgICAgICAg6LO85YWlXHJcbiAgICAgICAgICAgICAgICA8L0J1eUJ0bj5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezI0fSByb3VuZGVkPlxyXG4gICAgICAgICAgICAgICAgICA8SW1nIHNyYz17aW1hZ2V1cmx9IHNpemU9XCI3MFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVybmFtZX0+6Kyb5bir5ZCN77yaIHtwcm9maWxldXNlcm5hbWV9PC9UeXBvZ3JhcGh5Pjxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5paZ6YeR77yae3ByaWNlfTwvVHlwb2dyYXBoeT48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuWgtOaJgO+8mntwcmljZX08L1R5cG9ncmFwaHk+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7ml6XmmYLvvJp7dGltZX08L1R5cG9ncmFwaHk+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7jg6zjg4Pjgrnjg7PlhoXlrrnvvJp7bGVzc29uY29tbWVudH08L1R5cG9ncmFwaHk+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5MZXNzb25JbmZvPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShMZXNzb25JbmZvKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uSW5mbztcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=