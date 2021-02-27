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
      lineNumber: 108,
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
        lineNumber: 112,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      elevation: 24,
      rounded: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageurl,
        className: im
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "aria-label": "recipe",
        className: classes.avatar,
        src: imageurl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.infolist,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h6",
          className: classes.info,
          children: ["\u8B1B\u5E2B\u540D\uFF1A ", profileusername]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 110
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 119
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u6599\u91D1\uFF1A", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 114
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u5834\u6240\uFF1A", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 114
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u65E5\u6642\uFF1A", time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 113
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info,
          children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", lessoncomment]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 126
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h7",
          display: "block",
          className: classes.info
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL0xlc3NvbkluZm8uanMiXSwibmFtZXMiOlsicGxvZmlsZSIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiaW5mbyIsImJ1eWJ0biIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJMZXNzb25JbmZvIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNyZWF0ZXJpZCIsInNldENyZWF0ZXJpZCIsImxlc3NvbmlkIiwic2V0TGVzc29uaWQiLCJwdXJjaGFzZWQiLCJzZXRQdXJjaGFzZWQiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsInByb2ZpbGV1c2VybmFtZSIsInNldFByb2ZpbGV1c2VybmFtZSIsImltYWdldXJsIiwic2V0SW1hZ2V1cmwiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TGVzc29uRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJlcnJvciIsImRvYnV5IiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInNldCIsImJ1eWVyaWQiLCJtZXJnZSIsImNsYXNzZXMiLCJpbSIsImF2YXRhciIsImluZm9saXN0IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBp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Z0JBSjVGLGVBS0kscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFPLEVBQUMsT0FBakM7QUFBeUMsbUJBQVMsRUFBRTJDLE9BQU8sQ0FBQzVELElBQTVEO0FBQUEsbUVBQTBFcUIsYUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBS3lHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTHpHLGVBTUkscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFPLEVBQUMsT0FBakM7QUFBeUMsbUJBQVMsRUFBRXVDLE9BQU8sQ0FBQzVEO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBOUZJSSxVO1VBZVEyQixxRDs7O0tBZlIzQixVO0FBaUdUQSxVQUFVLEdBQUU0RCwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCN0QsVUFBeEIsQ0FBWjtBQUNlQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLmRlZTlkM2FhMjAwNmQyYzU0OTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+KAu+imgei/veWKoCA6ICDjg7twdXJjaGFzZWTjgYvkvZXjgYvjgaflj5fku5jkuK3jga7jg6zjg4Pjgrnjg7PjgajjgZ3jgYbjgafjgarjgYTjg6zjg4Pjgrnjg7Pos7zlhaXjg5zjgr/jg7Pjga7ooajnpLrjgpLlpInmm7RcclxuLy8gICAgICAgICAgICDjg7vos7zlhaXlvoxwdXJjaGFzZWTjga7mm7jjgY3mj5vjgYjlj4rjgbNtZXNzYWdl44G444Gu56e75YuVXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fWZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcblxyXG5jb25zdCBwbG9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgICAgICBtYXJnaW46ICcxNXB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgZGlzcGxheTpcImlubGluZVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDpcIjMwcHhcIixcclxuICAgICAgICBmb250U2l6ZTpcIjMwcHhcIixcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgYnV5YnRuOiB7XHJcbiAgICAgICAgZGlzcGxheTpcImlubGluZUJsb2NrXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDpcIjMwcHhcIixcclxuICAgICAgICBmb250U2l6ZTpcIjIzcHhcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206XCIxNXB4XCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIExlc3NvbkluZm8gKHByb3BzKXtcclxuICBcclxuICAvLyDkvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7lrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25pZCxzZXRMZXNzb25pZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdXJjaGFzZWQsc2V0UHVyY2hhc2VkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZmlsZXVzZXJuYW1lLHNldFByb2ZpbGV1c2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9sZXNzb25kYXRh5Y+K44GzbGVzc29uY3JlYXRlcuOBrnByb2ZpbGXjgpLlj5blvpdcclxuICBjb25zdCBnZXRMZXNzb25EYXRhPSBhc3luYygpPT57XHJcbiAgICAvL3JvdXRlci5xdWVyeS5sZXNzb25pZOOBp+ODmuODvOOCuOOBrnVybOOBruacq+WwvuOCkuWPluW+l1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v44OH44O844K/5Y+W5b6X5b6M44Gu5Yem55CGXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC8vbGVzc29uaWTjga/lj5blvpfjgZfjgarjgY/jgabjgYTjgYTjgYvjgoJcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBjb25zdCBsZXNzb25faWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChsZXNzb25faWQpO1xyXG4gICAgICAgIHNldFB1cmNoYXNlZChsZXNzb25kYXRhLnB1cmNoYXNlZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldFBsYWNlKGxlc3NvbmRhdGEubGVzc29ucGxhY2UpO1xyXG4gICAgICAgIHNldFRpbWUobGVzc29uZGF0YS5sZXNzb250aW1lKTtcclxuICAgICAgICBzZXRQcmljZShsZXNzb25kYXRhLmxlc3NvbnByaWNlKTtcclxuICAgICAgICBzZXRMZXNzb25jb21tZW50KGxlc3NvbmRhdGEubGVzc29udGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkKTtcclxuICAgICAgICAvL+OBk+OBk+OBi+OCieODl+ODreODleOCo+ODvOODq+WPluW+l+WHpueQhlxyXG4gICAgICAgIC8v44Os44OD44K544Oz5oOF5aCx44Gn5Y+W5b6X44GX44GfY3JlYXRlcmlk44GnZmlyZWJhc2XjgpLlj4LnhadcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNyZWF0ZXJpZCkuZ2V0KClcclxuICAgICAgICAvL2lm5paH44Gu5Yem55CG44Gv44Ko44Op44O844GM44GC44Gj44Gf5pmC44Gu44Gf44KB44Gu5Yem55CGXHJcbiAgICAgICAgLy/jg43jg4Pjg4joqJjkuovjga7jgrPjg5Tjg5rjgarjga7jgafjgIHlv4XopoHmgKfjgYzjganjgozjgbvjganjgYLjgovjgYvjga/orI5cclxuICAgICAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgaWYgKGRvYy5leGlzdHMpe1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZXJpZCx1c2VyZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGV1c2VybmFtZSh1c2VyZGF0YS5wcm9maWxlLm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRJbWFnZXVybCh1c2VyZGF0YS5pbWFnZXVybClcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGRvY3VtZW50OlwiLGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICBjb25zdCBkb2J1eSA9IGFzeW5jKCk9PntcclxuICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5zZXQoe1xyXG4gICAgICBidXllcmlkOmVtYWlsXHJcbiAgICB9LHttZXJnZTogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYobGVzc29ubmFtZSA9PVwiXCIpe1xyXG4gICAgICBnZXRMZXNzb25EYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHBsb2ZpbGUoKTtcclxuXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2xlc3Nvbm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL21lc3NhZ2UvJHtyb3V0ZXIucXVlcnkubGVzc29uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9tZXNzZ2UvW2xlc3NvbmlkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lID0ge2NsYXNzZXMuYnV5YnRufSBzaXplPVwibGFyZ2VcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtkb2J1eX0+6LO85YWlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsyNH0gcm91bmRlZD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdldXJsfSBjbGFzc05hbWU9e2ltfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cInJlY2lwZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9IHNyYz17aW1hZ2V1cmx9PlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7orJvluKvlkI3vvJoge3Byb2ZpbGV1c2VybmFtZX08L1R5cG9ncmFwaHk+PGJyPjwvYnI+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoN1wiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT7mlpnph5HvvJp7cHJpY2V9PC9UeXBvZ3JhcGh5Pjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDdcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+5aC05omA77yae3ByaWNlfTwvVHlwb2dyYXBoeT48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuaXpeaZgu+8mnt0aW1lfTwvVHlwb2dyYXBoeT48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PuODrOODg+OCueODs+WGheWuue+8mntsZXNzb25jb21tZW50fTwvVHlwb2dyYXBoeT48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg3XCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbkxlc3NvbkluZm89IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKExlc3NvbkluZm8pO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==