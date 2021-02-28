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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _parts_BuyBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/BuyBtn */ "./components/lessoninfo/parts/BuyBtn.js");
/* harmony import */ var _normal_parts_Img__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../normal_parts/Img */ "./components/normal_parts/Img.js");
/* harmony import */ var _parts_LessonDitail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/LessonDitail */ "./components/lessoninfo/parts/LessonDitail.js");
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessoninfo\\LessonInfo.js",
    _s = $RefreshSig$();

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動












var plofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  info: {
    margin: '10px'
  },
  creatername: {
    margin: "20px 10px 10px 10px",
    paddingTop: "40px"
  },
  img: {
    height: "70px",
    width: "70px",
    borderRadius: "35px",
    position: "absolute",
    top: "155px",
    left: "4px"
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_BuyBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
      lessonid: router.query.lessonid,
      onClick: dobuy,
      children: "\u8CFC\u5165"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_LessonDitail__WEBPACK_IMPORTED_MODULE_12__["default"], {
      imageurl: imageurl,
      profileusername: profileusername,
      price: price,
      place: place,
      time: time,
      lessoncoment: lessoncomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL0xlc3NvbkluZm8uanMiXSwibmFtZXMiOlsicGxvZmlsZSIsIm1ha2VTdHlsZXMiLCJpbmZvIiwibWFyZ2luIiwiY3JlYXRlcm5hbWUiLCJwYWRkaW5nVG9wIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJMZXNzb25JbmZvIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNyZWF0ZXJpZCIsInNldENyZWF0ZXJpZCIsImxlc3NvbmlkIiwic2V0TGVzc29uaWQiLCJwdXJjaGFzZWQiLCJzZXRQdXJjaGFzZWQiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsInByb2ZpbGV1c2VybmFtZSIsInNldFByb2ZpbGV1c2VybmFtZSIsImltYWdldXJsIiwic2V0SW1hZ2V1cmwiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TGVzc29uRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJlcnJvciIsImRvYnV5IiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInNldCIsImJ1eWVyaWQiLCJtZXJnZSIsImNsYXNzZXMiLCJtYXJnaW5Ub3AiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZjBiZTFjOWQ0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/igLvopoHov73liqAgOiAg44O7cHVyY2hhc2Vk44GL5L2V44GL44Gn5Y+X5LuY5Lit44Gu44Os44OD44K544Oz44Go44Gd44GG44Gn44Gq44GE44Os44OD44K544Oz6LO85YWl44Oc44K/44Oz44Gu6KGo56S644KS5aSJ5pu0XHJcbi8vICAgICAgICAgICAg44O76LO85YWl5b6McHVyY2hhc2Vk44Gu5pu444GN5o+b44GI5Y+K44GzbWVzc2FnZeOBuOOBruenu+WLlVxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7Y29ubmVjdH1mcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vLi4vTGliL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInXHJcbmltcG9ydCBCdXlCdG4gZnJvbSBcIi4vcGFydHMvQnV5QnRuXCI7XHJcbmltcG9ydCBJbWcgZnJvbSBcIi4uL25vcm1hbF9wYXJ0cy9JbWdcIjtcclxuaW1wb3J0IExzc29uRGl0YWlsIGZyb20gXCIuL3BhcnRzL0xlc3NvbkRpdGFpbFwiXHJcbmltcG9ydCBMZXNzb25EaXRhaWwgZnJvbSBcIi4vcGFydHMvTGVzc29uRGl0YWlsXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vbm9ybWFsX3BhcnRzL1RpdGxlXCJcclxuXHJcbmNvbnN0IHBsb2ZpbGUgPSBtYWtlU3R5bGVzKHtcclxuIFxyXG4gICAgaW5mbzoge1xyXG4gICAgICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZXJuYW1lIDoge1xyXG4gICAgICBtYXJnaW46XCIyMHB4IDEwcHggMTBweCAxMHB4XCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6XCI0MHB4XCIsXHJcbiAgICB9LFxyXG4gICAgaW1nOntcclxuICAgICAgaGVpZ2h0OlwiNzBweFwiLFxyXG4gICAgICB3aWR0aDpcIjcwcHhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOlwiMzVweFwiLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDpcIjE1NXB4XCIsXHJcbiAgICAgIGxlZnQ6XCI0cHhcIixcclxuXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIExlc3NvbkluZm8gKHByb3BzKXtcclxuICBcclxuICAvLyDkvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7lrprnvqlcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25pZCxzZXRMZXNzb25pZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdXJjaGFzZWQsc2V0UHVyY2hhc2VkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhY2Usc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmNvbW1lbnQsc2V0TGVzc29uY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZmlsZXVzZXJuYW1lLHNldFByb2ZpbGV1c2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdPXVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9sZXNzb25kYXRh5Y+K44GzbGVzc29uY3JlYXRlcuOBrnByb2ZpbGXjgpLlj5blvpdcclxuICBjb25zdCBnZXRMZXNzb25EYXRhPSBhc3luYygpPT57XHJcbiAgICAvL3JvdXRlci5xdWVyeS5sZXNzb25pZOOBp+ODmuODvOOCuOOBrnVybOOBruacq+WwvuOCkuWPluW+l1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v44OH44O844K/5Y+W5b6X5b6M44Gu5Yem55CGXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC8vbGVzc29uaWTjga/lj5blvpfjgZfjgarjgY/jgabjgYTjgYTjgYvjgoJcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBjb25zdCBsZXNzb25faWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25pZChsZXNzb25faWQpO1xyXG4gICAgICAgIHNldFB1cmNoYXNlZChsZXNzb25kYXRhLnB1cmNoYXNlZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldFBsYWNlKGxlc3NvbmRhdGEubGVzc29ucGxhY2UpO1xyXG4gICAgICAgIHNldFRpbWUobGVzc29uZGF0YS5sZXNzb250aW1lKTtcclxuICAgICAgICBzZXRQcmljZShsZXNzb25kYXRhLmxlc3NvbnByaWNlKTtcclxuICAgICAgICBzZXRMZXNzb25jb21tZW50KGxlc3NvbmRhdGEubGVzc29udGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkKTtcclxuICAgICAgICAvL+OBk+OBk+OBi+OCieODl+ODreODleOCo+ODvOODq+WPluW+l+WHpueQhlxyXG4gICAgICAgIC8v44Os44OD44K544Oz5oOF5aCx44Gn5Y+W5b6X44GX44GfY3JlYXRlcmlk44GnZmlyZWJhc2XjgpLlj4LnhadcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNyZWF0ZXJpZCkuZ2V0KClcclxuICAgICAgICAvL2lm5paH44Gu5Yem55CG44Gv44Ko44Op44O844GM44GC44Gj44Gf5pmC44Gu44Gf44KB44Gu5Yem55CGXHJcbiAgICAgICAgLy/jg43jg4Pjg4joqJjkuovjga7jgrPjg5Tjg5rjgarjga7jgafjgIHlv4XopoHmgKfjgYzjganjgozjgbvjganjgYLjgovjgYvjga/orI5cclxuICAgICAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgaWYgKGRvYy5leGlzdHMpe1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZXJpZCx1c2VyZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGV1c2VybmFtZSh1c2VyZGF0YS5wcm9maWxlLm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRJbWFnZXVybCh1c2VyZGF0YS5pbWFnZXVybClcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGRvY3VtZW50OlwiLGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICBjb25zdCBkb2J1eSA9IGFzeW5jKCk9PntcclxuICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5zZXQoe1xyXG4gICAgICBidXllcmlkOmVtYWlsXHJcbiAgICB9LHttZXJnZTogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYobGVzc29ubmFtZSA9PVwiXCIpe1xyXG4gICAgICBnZXRMZXNzb25EYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHBsb2ZpbGUoKTtcclxuXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGl0bGU9e2xlc3Nvbm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV5QnRuIGxlc3NvbmlkPXtyb3V0ZXIucXVlcnkubGVzc29uaWR9IG9uQ2xpY2s9e2RvYnV5fT5cclxuICAgICAgICAgICAgICAgICAg6LO85YWlXHJcbiAgICAgICAgICAgICAgICA8L0J1eUJ0bj5cclxuICAgICAgICAgICAgICAgIDxMZXNzb25EaXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgIGltYWdldXJsPXtpbWFnZXVybH0gXHJcbiAgICAgICAgICAgICAgICAgIHByb2ZpbGV1c2VybmFtZT17cHJvZmlsZXVzZXJuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfSBcclxuICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfSBcclxuICAgICAgICAgICAgICAgICAgdGltZT17dGltZX0gXHJcbiAgICAgICAgICAgICAgICAgIGxlc3NvbmNvbWVudD17bGVzc29uY29tbWVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbkxlc3NvbkluZm89IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKExlc3NvbkluZm8pO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==