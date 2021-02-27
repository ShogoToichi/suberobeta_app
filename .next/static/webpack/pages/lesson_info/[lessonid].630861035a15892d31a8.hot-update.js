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
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\lessoninfo\\LessonInfo.js",
    _s = $RefreshSig$();

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動











var plofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
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
  buybtn: {
    display: "inlineBlock",
    marginLeft: "30px",
    fontSize: "23px",
    marginBottom: "15px"
  },
  img: {
    height: "70px",
    width: "70px",
    borderRadius: "35px"
  }
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
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
    var _ref2 = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "h6",
      className: classes.title,
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      as: "/message/".concat(router.query.lessonid),
      href: "/messge/[lessonid]",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.buybtn,
        size: "large",
        variant: "outlined",
        onClick: dobuy,
        children: "\u8CFC\u5165"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      elevation: 24,
      rounded: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageurl,
        className: classes.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "aria-label": "recipe",
        className: classes.avatar,
        src: imageurl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.infolist,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h6",
          className: classes.info,
          children: ["\u8B1B\u5E2B\u540D\uFF1A ", profileusername]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 110
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 119
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u6599\u91D1\uFF1A", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 114
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u5834\u6240\uFF1A", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 114
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u65E5\u6642\uFF1A", time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 113
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", lessoncomment]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 126
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL0xlc3NvbkluZm8uanMiXSwibmFtZXMiOlsicGxvZmlsZSIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiaW5mbyIsImJ1eWJ0biIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJpbWciLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwiaW1hZ2V1cmwiLCJzZXRJbWFnZXVybCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRMZXNzb25EYXRhIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsImxlc3NvbmRhdGEiLCJkYXRhIiwibGVzc29uX2lkIiwiaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnRpbWUiLCJsZXNzb25wcmljZSIsImxlc3NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZXhpc3RzIiwidXNlcmRhdGEiLCJwcm9maWxlIiwibmFtZSIsImVycm9yIiwiZG9idXkiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwic2V0IiwiYnV5ZXJpZCIsIm1lcmdlIiwiY2xhc3NlcyIsImF2YXRhciIsImlu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QXlCLGlCQUFPLEVBQUMsT0FBakM7QUFBeUMsbUJBQVMsRUFBRXlDLE9BQU8sQ0FBQ2hFLElBQTVEO0FBQUEsMkNBQXNFcUIsSUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBSTRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSjVGLGVBS0kscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFPLEVBQUMsT0FBakM7QUFBeUMsbUJBQVMsRUFBRTJDLE9BQU8sQ0FBQ2hFLElBQTVEO0FBQUEsbUVBQTBFeUIsYUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBS3lHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTHpHLGVBTUkscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFPLEVBQUMsT0FBakM7QUFBeUMsbUJBQVMsRUFBRXVDLE9BQU8sQ0FBQ2hFO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBOUZJUSxVO1VBZVEyQixxRDs7O0tBZlIzQixVO0FBaUdUQSxVQUFVLEdBQUUyRCwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCNUQsVUFBeEIsQ0FBWjtBQUNlQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLjYzMDg2MTAzNWExNTg5MmQzMWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+KAu+imgei/veWKoCA6ICDjg7twdXJjaGFzZWTjgYvkvZXjgYvjgaflj5fku5jkuK3jga7jg6zjg4Pjgrnjg7PjgajjgZ3jgYbjgafjgarjgYTjg6zjg4Pjgrnjg7Pos7zlhaXjg5zjgr/jg7Pjga7ooajnpLrjgpLlpInmm7RcclxuLy8gICAgICAgICAgICDjg7vos7zlhaXlvoxwdXJjaGFzZWTjga7mm7jjgY3mj5vjgYjlj4rjgbNtZXNzYWdl44G444Gu56e75YuVXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fWZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcblxyXG5jb25zdCBwbG9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgICAgICBtYXJnaW46ICcxNXB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgZGlzcGxheTpcImlubGluZVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDpcIjMwcHhcIixcclxuICAgICAgICBmb250U2l6ZTpcIjMwcHhcIixcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgYnV5YnRuOiB7XHJcbiAgICAgICAgZGlzcGxheTpcImlubGluZUJsb2NrXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDpcIjMwcHhcIixcclxuICAgICAgICBmb250U2l6ZTpcIjIzcHhcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206XCIxNXB4XCIsXHJcbiAgICB9LFxyXG4gICAgaW1nOntcclxuICAgICAgaGVpZ2h0OlwiNzBweFwiLFxyXG4gICAgICB3aWR0aDpcIjcwcHhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOlwiMzVweFwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMZXNzb25JbmZvIChwcm9wcyl7XHJcbiAgXHJcbiAgLy8g5L2/55So44GZ44KL44K544OG44O844OI44Gu5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uaWQsc2V0TGVzc29uaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVyY2hhc2VkLHNldFB1cmNoYXNlZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGV1c2VybmFtZSxzZXRQcm9maWxldXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdldXJsLHNldEltYWdldXJsXT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vbGVzc29uZGF0YeWPiuOBs2xlc3NvbmNyZWF0ZXLjga5wcm9maWxl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TGVzc29uRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+ODh+ODvOOCv+WPluW+l+W+jOOBruWHpueQhlxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAvL2xlc3Nvbmlk44Gv5Y+W5b6X44GX44Gq44GP44Gm44GE44GE44GL44KCXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgY29uc3QgbGVzc29uX2lkID0gZG9jLmlkO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29uaWQobGVzc29uX2lkKTtcclxuICAgICAgICBzZXRQdXJjaGFzZWQobGVzc29uZGF0YS5wdXJjaGFzZWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRQbGFjZShsZXNzb25kYXRhLmxlc3NvbnBsYWNlKTtcclxuICAgICAgICBzZXRUaW1lKGxlc3NvbmRhdGEubGVzc29udGltZSk7XHJcbiAgICAgICAgc2V0UHJpY2UobGVzc29uZGF0YS5sZXNzb25wcmljZSk7XHJcbiAgICAgICAgc2V0TGVzc29uY29tbWVudChsZXNzb25kYXRhLmxlc3NvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZXJpZCk7XHJcbiAgICAgICAgLy/jgZPjgZPjgYvjgonjg5fjg63jg5XjgqPjg7zjg6vlj5blvpflh6bnkIZcclxuICAgICAgICAvL+ODrOODg+OCueODs+aDheWgseOBp+WPluW+l+OBl+OBn2NyZWF0ZXJpZOOBp2ZpcmViYXNl44KS5Y+C54WnXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjcmVhdGVyaWQpLmdldCgpXHJcbiAgICAgICAgLy9pZuaWh+OBruWHpueQhuOBr+OCqOODqeODvOOBjOOBguOBo+OBn+aZguOBruOBn+OCgeOBruWHpueQhlxyXG4gICAgICAgIC8v44ON44OD44OI6KiY5LqL44Gu44Kz44OU44Oa44Gq44Gu44Gn44CB5b+F6KaB5oCn44GM44Gp44KM44G744Gp44GC44KL44GL44Gv6KyOXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgIGlmIChkb2MuZXhpc3RzKXtcclxuICAgICAgICAgICAgY29uc3QgdXNlcmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQsdXNlcmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxldXNlcm5hbWUodXNlcmRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2V1cmwodXNlcmRhdGEuaW1hZ2V1cmwpXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBkYXRhXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBkb2N1bWVudDpcIixlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICAgY29uc3QgZG9idXkgPSBhc3luYygpPT57XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuc2V0KHtcclxuICAgICAgYnV5ZXJpZDplbWFpbFxyXG4gICAgfSx7bWVyZ2U6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGxlc3Nvbm5hbWUgPT1cIlwiKXtcclxuICAgICAgZ2V0TGVzc29uRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSBwbG9maWxlKCk7XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntsZXNzb25uYW1lfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBhcz17YC9tZXNzYWdlLyR7cm91dGVyLnF1ZXJ5Lmxlc3NvbmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbWVzc2dlL1tsZXNzb25pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmJ1eWJ0bn0gc2l6ZT1cImxhcmdlXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17ZG9idXl9PuizvOWFpTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MjR9IHJvdW5kZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXVybH0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJyZWNpcGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBzcmM9e2ltYWdldXJsfT5cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+6Kyb5bir5ZCN77yaIHtwcm9maWxldXNlcm5hbWV9PC9UeXBvZ3JhcGh5Pjxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5paZ6YeR77yae3ByaWNlfTwvVHlwb2dyYXBoeT48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuWgtOaJgO+8mntwcmljZX08L1R5cG9ncmFwaHk+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7ml6XmmYLvvJp7dGltZX08L1R5cG9ncmFwaHk+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7jg6zjg4Pjgrnjg7PlhoXlrrnvvJp7bGVzc29uY29tbWVudH08L1R5cG9ncmFwaHk+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5MZXNzb25JbmZvPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShMZXNzb25JbmZvKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uSW5mbztcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=