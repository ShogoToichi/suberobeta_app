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
/* harmony import */ var _parts_BuyBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/BuyBtn */ "./components/lessoninfo/parts/BuyBtn.js");
/* harmony import */ var _parts_LessonDitail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/LessonDitail */ "./components/lessoninfo/parts/LessonDitail.js");
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessoninfo\\LessonInfo.js",
    _s = $RefreshSig$();

//※要追加 :  ・purchasedか何かで受付中のレッスンとそうでないレッスン購入ボタンの表示を変更
//            ・購入後purchasedの書き換え及びmessageへの移動










var plofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])({
  grid: {
    width: "100"
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      container: true,
      spacing: 2,
      className: classes.grid,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: lessonname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_BuyBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        lessonid: router.query.lessonid,
        onClick: dobuy,
        children: "\u8CFC\u5165"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_LessonDitail__WEBPACK_IMPORTED_MODULE_9__["default"], {
        imageurl: imageurl,
        profileusername: profileusername,
        price: price,
        place: place,
        time: time,
        lessoncomment: lessoncomment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25pbmZvL0xlc3NvbkluZm8uanMiXSwibmFtZXMiOlsicGxvZmlsZSIsIm1ha2VTdHlsZXMiLCJncmlkIiwid2lkdGgiLCJMZXNzb25JbmZvIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNyZWF0ZXJpZCIsInNldENyZWF0ZXJpZCIsImxlc3NvbmlkIiwic2V0TGVzc29uaWQiLCJwdXJjaGFzZWQiLCJzZXRQdXJjaGFzZWQiLCJsZXNzb25uYW1lIiwic2V0TGVzc29ubmFtZSIsInBsYWNlIiwic2V0UGxhY2UiLCJ0aW1lIiwic2V0VGltZSIsInByaWNlIiwic2V0UHJpY2UiLCJsZXNzb25jb21tZW50Iiwic2V0TGVzc29uY29tbWVudCIsInByb2ZpbGV1c2VybmFtZSIsInNldFByb2ZpbGV1c2VybmFtZSIsImltYWdldXJsIiwic2V0SW1hZ2V1cmwiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TGVzc29uRGF0YSIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsImxlc3Nvbl9pZCIsImlkIiwibGVzc29ucGxhY2UiLCJsZXNzb250aW1lIiwibGVzc29ucHJpY2UiLCJsZXNzb250ZXh0IiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInVzZXJkYXRhIiwicHJvZmlsZSIsIm5hbWUiLCJlcnJvciIsImRvYnV5IiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInNldCIsImJ1eWVyaWQiLCJtZXJnZSIsImNsYXNzZXMiLCJtYXJnaW5Ub3AiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FB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LCtEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUE0QixlQUFTLEVBQUVELE9BQU8sQ0FBQzFELElBQS9DO0FBQUEsOEJBQ00scUVBQUMsNERBQUQ7QUFBTyxhQUFLLEVBQUVXO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROLGVBRU0scUVBQUMscURBQUQ7QUFBUSxnQkFBUSxFQUFFaUIsTUFBTSxDQUFDSyxLQUFQLENBQWExQixRQUEvQjtBQUF5QyxlQUFPLEVBQUU0QyxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZOLGVBS00scUVBQUMsMkRBQUQ7QUFDRSxnQkFBUSxFQUFFNUIsUUFEWjtBQUVFLHVCQUFlLEVBQUVGLGVBRm5CO0FBR0UsYUFBSyxFQUFFSixLQUhUO0FBSUUsYUFBSyxFQUFFSixLQUpUO0FBS0UsWUFBSSxFQUFFRSxJQUxSO0FBTUUscUJBQWEsRUFBRUk7QUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0F2RklqQixVO1VBZVEyQixxRDs7O0tBZlIzQixVO0FBMEZUQSxVQUFVLEdBQUUwRCwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCM0QsVUFBeEIsQ0FBWjtBQUNlQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25faW5mby9bbGVzc29uaWRdLjExNmY4ODk3ZWFkZjliN2RjM2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+KAu+imgei/veWKoCA6ICDjg7twdXJjaGFzZWTjgYvkvZXjgYvjgaflj5fku5jkuK3jga7jg6zjg4Pjgrnjg7PjgajjgZ3jgYbjgafjgarjgYTjg6zjg4Pjgrnjg7Pos7zlhaXjg5zjgr/jg7Pjga7ooajnpLrjgpLlpInmm7RcclxuLy8gICAgICAgICAgICDjg7vos7zlhaXlvoxwdXJjaGFzZWTjga7mm7jjgY3mj5vjgYjlj4rjgbNtZXNzYWdl44G444Gu56e75YuVXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fWZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9MaWIvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IEJ1eUJ0biBmcm9tIFwiLi9wYXJ0cy9CdXlCdG5cIjtcclxuaW1wb3J0IExlc3NvbkRpdGFpbCBmcm9tIFwiLi9wYXJ0cy9MZXNzb25EaXRhaWxcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9ub3JtYWxfcGFydHMvVGl0bGVcIlxyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBwbG9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgZ3JpZDoge1xyXG4gICAgd2lkdGg6IFwiMTAwXCJcclxuICB9LFxyXG59KVxyXG5cclxuZnVuY3Rpb24gTGVzc29uSW5mbyAocHJvcHMpe1xyXG4gIFxyXG4gIC8vIOS9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruWumue+qVxyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3NvbmlkLHNldExlc3NvbmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1cmNoYXNlZCxzZXRQdXJjaGFzZWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFjZSxzZXRQbGFjZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29uY29tbWVudCxzZXRMZXNzb25jb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9maWxldXNlcm5hbWUsc2V0UHJvZmlsZXVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZXVybCxzZXRJbWFnZXVybF09dXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHlj4rjgbNsZXNzb25jcmVhdGVy44GucHJvZmlsZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldExlc3NvbkRhdGE9IGFzeW5jKCk9PntcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/jg4fjg7zjgr/lj5blvpflvozjga7lh6bnkIZcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLy9sZXNzb25pZOOBr+WPluW+l+OBl+OBquOBj+OBpuOBhOOBhOOBi+OCglxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIGNvbnN0IGxlc3Nvbl9pZCA9IGRvYy5pZDtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3NvbmlkKGxlc3Nvbl9pZCk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VkKGxlc3NvbmRhdGEucHVyY2hhc2VkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0UGxhY2UobGVzc29uZGF0YS5sZXNzb25wbGFjZSk7XHJcbiAgICAgICAgc2V0VGltZShsZXNzb25kYXRhLmxlc3NvbnRpbWUpO1xyXG4gICAgICAgIHNldFByaWNlKGxlc3NvbmRhdGEubGVzc29ucHJpY2UpO1xyXG4gICAgICAgIHNldExlc3NvbmNvbW1lbnQobGVzc29uZGF0YS5sZXNzb250ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVyaWQpO1xyXG4gICAgICAgIC8v44GT44GT44GL44KJ44OX44Ot44OV44Kj44O844Or5Y+W5b6X5Yem55CGXHJcbiAgICAgICAgLy/jg6zjg4Pjgrnjg7Pmg4XloLHjgaflj5blvpfjgZfjgZ9jcmVhdGVyaWTjgadmaXJlYmFzZeOCkuWPgueFp1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY3JlYXRlcmlkKS5nZXQoKVxyXG4gICAgICAgIC8vaWbmlofjga7lh6bnkIbjga/jgqjjg6njg7zjgYzjgYLjgaPjgZ/mmYLjga7jgZ/jgoHjga7lh6bnkIZcclxuICAgICAgICAvL+ODjeODg+ODiOiomOS6i+OBruOCs+ODlOODmuOBquOBruOBp+OAgeW/heimgeaAp+OBjOOBqeOCjOOBu+OBqeOBguOCi+OBi+OBr+isjlxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICBpZiAoZG9jLmV4aXN0cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3JlYXRlcmlkLHVzZXJkYXRhKTtcclxuICAgICAgICAgICAgc2V0UHJvZmlsZXVzZXJuYW1lKHVzZXJkYXRhLnByb2ZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgIHNldEltYWdldXJsKHVzZXJkYXRhLmltYWdldXJsKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZGF0YVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgZG9jdW1lbnQ6XCIsZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAgIGNvbnN0IGRvYnV5ID0gYXN5bmMoKT0+e1xyXG4gICAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLnNldCh7XHJcbiAgICAgIGJ1eWVyaWQ6ZW1haWxcclxuICAgIH0se21lcmdlOiB0cnVlfSlcclxuICAgIH1cclxuXHJcbiAgICBpZihsZXNzb25uYW1lID09XCJcIil7XHJcbiAgICAgIGdldExlc3NvbkRhdGEoKTtcclxuICAgIH1cclxuXHJcbmNvbnN0IGNsYXNzZXMgPSBwbG9maWxlKCk7XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjMwcHhcIn19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0aXRsZT17bGVzc29ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXlCdG4gbGVzc29uaWQ9e3JvdXRlci5xdWVyeS5sZXNzb25pZH0gb25DbGljaz17ZG9idXl9PlxyXG4gICAgICAgICAgICAgICAgICDos7zlhaVcclxuICAgICAgICAgICAgICAgIDwvQnV5QnRuPlxyXG4gICAgICAgICAgICAgICAgPExlc3NvbkRpdGFpbCBcclxuICAgICAgICAgICAgICAgICAgaW1hZ2V1cmw9e2ltYWdldXJsfSBcclxuICAgICAgICAgICAgICAgICAgcHJvZmlsZXVzZXJuYW1lPXtwcm9maWxldXNlcm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9IFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9IFxyXG4gICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfSBcclxuICAgICAgICAgICAgICAgICAgbGVzc29uY29tbWVudD17bGVzc29uY29tbWVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbkxlc3NvbkluZm89IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKExlc3NvbkluZm8pO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25JbmZvO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==