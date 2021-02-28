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
/* harmony import */ var _parts_BuyBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/BuyBtn */ "./components/lessoninfo/parts/BuyBtn.js");
/* harmony import */ var _parts_LessonDitail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/LessonDitail */ "./components/lessoninfo/parts/LessonDitail.js");
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessoninfo\\LessonInfo.js",
    _s = $RefreshSig$();

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動









var plofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_BuyBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
      lessonid: router.query.lessonid,
      onClick: dobuy,
      children: "\u8CFC\u5165"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_LessonDitail__WEBPACK_IMPORTED_MODULE_10__["default"], {
      imageurl: imageurl,
      profileusername: profileusername,
      price: price,
      place: place,
      time: time,
      lessoncoment: lessoncomment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL0xlc3NvbkluZm8uanMiXSwibmFtZXMiOlsicGxvZmlsZSIsIm1ha2VTdHlsZXMiLCJjcmVhdGVybmFtZSIsIm1hcmdpbiIsInBhZGRpbmdUb3AiLCJpbWciLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkxlc3NvbkluZm8iLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibGVzc29uaWQiLCJzZXRMZXNzb25pZCIsInB1cmNoYXNlZCIsInNldFB1cmNoYXNlZCIsImxlc3Nvbm5hbWUiLCJzZXRMZXNzb25uYW1lIiwicGxhY2UiLCJzZXRQbGFjZSIsInRpbWUiLCJzZXRUaW1lIiwicHJpY2UiLCJzZXRQcmljZSIsImxlc3NvbmNvbW1lbnQiLCJzZXRMZXNzb25jb21tZW50IiwicHJvZmlsZXVzZXJuYW1lIiwic2V0UHJvZmlsZXVzZXJuYW1lIiwiaW1hZ2V1cmwiLCJzZXRJbWFnZXVybCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRMZXNzb25EYXRhIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsImxlc3NvbmRhdGEiLCJkYXRhIiwibGVzc29uX2lkIiwiaWQiLCJsZXNzb25wbGFjZSIsImxlc3NvbnRpbWUiLCJsZXNzb25wcmljZSIsImxlc3NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZXhpc3RzIiwidXNlcmRhdGEiLCJwcm9maWxlIiwibmFtZSIsImVycm9yIiwiZG9idXkiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwic2V0IiwiYnV5ZXJpZCIsIm1lcmdlIiwiY2xhc3NlcyIsIm1hcmdpblRvcCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGVBRk0sQ0FGTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMTixLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBT0EsTUFBR3hDLFVBQVUsSUFBRyxFQUFoQixFQUFtQjtBQUNqQm1CLGlCQUFhO0FBQ2Q7O0FBRUQsTUFBTTRCLE9BQU8sR0FBR3BFLE9BQU8sRUFBdkI7QUFFRSxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFDcUUsZUFBUyxFQUFDO0FBQVgsS0FBWjtBQUFBLDRCQUNRLHFFQUFDLDREQUFEO0FBQU8sV0FBSyxFQUFFaEQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFIsZUFFUSxxRUFBQyxxREFBRDtBQUFRLGNBQVEsRUFBRWlCLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhMUIsUUFBL0I7QUFBeUMsYUFBTyxFQUFFNEMsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixlQUtRLHFFQUFDLDREQUFEO0FBQ0UsY0FBUSxFQUFFNUIsUUFEWjtBQUVFLHFCQUFlLEVBQUVGLGVBRm5CO0FBR0UsV0FBSyxFQUFFSixLQUhUO0FBSUUsV0FBSyxFQUFFSixLQUpUO0FBS0UsVUFBSSxFQUFFRSxJQUxSO0FBTUUsa0JBQVksRUFBRUk7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQXJGSWpCLFU7VUFlUTJCLHFEOzs7S0FmUjNCLFU7QUF3RlRBLFVBQVUsR0FBRTBELDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IzRCxVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9pbmZvL1tsZXNzb25pZF0uYTk5NmI1YWU1M2ZjZGVhYmRkOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v4oC76KaB6L+95YqgIDogIOODu3B1cmNoYXNlZOOBi+S9leOBi+OBp+WPl+S7mOS4reOBruODrOODg+OCueODs+OBqOOBneOBhuOBp+OBquOBhOODrOODg+OCueODs+izvOWFpeODnOOCv+ODs+OBruihqOekuuOCkuWkieabtFxyXG4vLyAgICAgICAgICAgIOODu+izvOWFpeW+jHB1cmNoYXNlZOOBruabuOOBjeaPm+OBiOWPiuOBs21lc3NhZ2Xjgbjjga7np7vli5VcclxuXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9ZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uLy4uL0xpYi9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1eUJ0biBmcm9tIFwiLi9wYXJ0cy9CdXlCdG5cIjtcclxuaW1wb3J0IExlc3NvbkRpdGFpbCBmcm9tIFwiLi9wYXJ0cy9MZXNzb25EaXRhaWxcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9ub3JtYWxfcGFydHMvVGl0bGVcIlxyXG5cclxuY29uc3QgcGxvZmlsZSA9IG1ha2VTdHlsZXMoe1xyXG4gXHJcbiAgICBjcmVhdGVybmFtZSA6IHtcclxuICAgICAgbWFyZ2luOlwiMjBweCAxMHB4IDEwcHggMTBweFwiLFxyXG4gICAgICBwYWRkaW5nVG9wOlwiNDBweFwiLFxyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgIGhlaWdodDpcIjcwcHhcIixcclxuICAgICAgd2lkdGg6XCI3MHB4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czpcIjM1cHhcIixcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICB0b3A6XCIxNTVweFwiLFxyXG4gICAgICBsZWZ0OlwiNHB4XCIsXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMZXNzb25JbmZvIChwcm9wcyl7XHJcbiAgXHJcbiAgLy8g5L2/55So44GZ44KL44K544OG44O844OI44Gu5a6a576pXHJcbiAgY29uc3QgW2NyZWF0ZXJpZCxzZXRDcmVhdGVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uaWQsc2V0TGVzc29uaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVyY2hhc2VkLHNldFB1cmNoYXNlZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25uYW1lLHNldExlc3Nvbm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYWNlLHNldFBsYWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsZXNzb25jb21tZW50LHNldExlc3NvbmNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2ZpbGV1c2VybmFtZSxzZXRQcm9maWxldXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdldXJsLHNldEltYWdldXJsXT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vbGVzc29uZGF0YeWPiuOBs2xlc3NvbmNyZWF0ZXLjga5wcm9maWxl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TGVzc29uRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+ODh+ODvOOCv+WPluW+l+W+jOOBruWHpueQhlxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAvL2xlc3Nvbmlk44Gv5Y+W5b6X44GX44Gq44GP44Gm44GE44GE44GL44KCXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgY29uc3QgbGVzc29uX2lkID0gZG9jLmlkO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29uaWQobGVzc29uX2lkKTtcclxuICAgICAgICBzZXRQdXJjaGFzZWQobGVzc29uZGF0YS5wdXJjaGFzZWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRQbGFjZShsZXNzb25kYXRhLmxlc3NvbnBsYWNlKTtcclxuICAgICAgICBzZXRUaW1lKGxlc3NvbmRhdGEubGVzc29udGltZSk7XHJcbiAgICAgICAgc2V0UHJpY2UobGVzc29uZGF0YS5sZXNzb25wcmljZSk7XHJcbiAgICAgICAgc2V0TGVzc29uY29tbWVudChsZXNzb25kYXRhLmxlc3NvbnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZXJpZCk7XHJcbiAgICAgICAgLy/jgZPjgZPjgYvjgonjg5fjg63jg5XjgqPjg7zjg6vlj5blvpflh6bnkIZcclxuICAgICAgICAvL+ODrOODg+OCueODs+aDheWgseOBp+WPluW+l+OBl+OBn2NyZWF0ZXJpZOOBp2ZpcmViYXNl44KS5Y+C54WnXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjcmVhdGVyaWQpLmdldCgpXHJcbiAgICAgICAgLy9pZuaWh+OBruWHpueQhuOBr+OCqOODqeODvOOBjOOBguOBo+OBn+aZguOBruOBn+OCgeOBruWHpueQhlxyXG4gICAgICAgIC8v44ON44OD44OI6KiY5LqL44Gu44Kz44OU44Oa44Gq44Gu44Gn44CB5b+F6KaB5oCn44GM44Gp44KM44G744Gp44GC44KL44GL44Gv6KyOXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgIGlmIChkb2MuZXhpc3RzKXtcclxuICAgICAgICAgICAgY29uc3QgdXNlcmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQsdXNlcmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRQcm9maWxldXNlcm5hbWUodXNlcmRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2V1cmwodXNlcmRhdGEuaW1hZ2V1cmwpXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBkYXRhXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBkb2N1bWVudDpcIixlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICAgY29uc3QgZG9idXkgPSBhc3luYygpPT57XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuc2V0KHtcclxuICAgICAgYnV5ZXJpZDplbWFpbFxyXG4gICAgfSx7bWVyZ2U6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGxlc3Nvbm5hbWUgPT1cIlwiKXtcclxuICAgICAgZ2V0TGVzc29uRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSBwbG9maWxlKCk7XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHRpdGxlPXtsZXNzb25uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1eUJ0biBsZXNzb25pZD17cm91dGVyLnF1ZXJ5Lmxlc3NvbmlkfSBvbkNsaWNrPXtkb2J1eX0+XHJcbiAgICAgICAgICAgICAgICAgIOizvOWFpVxyXG4gICAgICAgICAgICAgICAgPC9CdXlCdG4+XHJcbiAgICAgICAgICAgICAgICA8TGVzc29uRGl0YWlsIFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZXVybD17aW1hZ2V1cmx9IFxyXG4gICAgICAgICAgICAgICAgICBwcm9maWxldXNlcm5hbWU9e3Byb2ZpbGV1c2VybmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX0gXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlPXtwbGFjZX0gXHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9IFxyXG4gICAgICAgICAgICAgICAgICBsZXNzb25jb21lbnQ9e2xlc3NvbmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5MZXNzb25JbmZvPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShMZXNzb25JbmZvKTtcclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uSW5mbztcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=