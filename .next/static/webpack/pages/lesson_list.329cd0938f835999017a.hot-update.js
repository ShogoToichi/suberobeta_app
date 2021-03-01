webpackHotUpdate_N_E("pages/lesson_list",{

/***/ "./components/lessonlist/LessonList.js":
/*!*********************************************!*\
  !*** ./components/lessonlist/LessonList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lesson */ "./components/lessonlist/Lesson.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonlist\\LessonList.js",
    _s = $RefreshSig$();


 // import "firebase/storage";





impt;
var lessonlist = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  rayout: {
    "float": 'center'
  },
  top: {
    width: '100%',
    margin: '8px'
  },
  lessonlist: {
    width: '600px',
    margin: '5px'
  },
  btn: {
    "float": 'right',
    color: 'black',
    backgroundColor: '#4A8'
  },
  cardheader: {
    cursor: "pointer"
  },
  subtitle: {
    margin: "10px 0px 20px 40px",
    paddingBottom: "8px",
    borderBottom: "solid 3px #CCC"
  },
  title: {
    margin: " 30px 0px 20px 40px"
  }
});

function LessonList() {
  _s();

  //ステートの設定
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no item"),
      items = _useState[0],
      setItems = _useState[1]; //lessondataはfirebaseのレッスンdataをいったん保管する
  //lessonidはfirebaseのレッスンidをいったん保管する
  //lessonitemsは値を渡された<Lesson/>が要素の配列ををいったん保管する


  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, lessonid, lessonitems;
      return C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              lessondata = [];
              lessonid = [];
              lessonitems = [];
              _context.next = 6;
              return db.collection("lessons").get().then(function (querySnapshot) {
                // 受け取ったオブジェクトの配列に対して、forEachで繰り返し処理
                //データをアンシフトで配列に入れることで、新しい投稿が配列の頭にくる
                querySnapshot.forEach(function (doc) {
                  lessondata.unshift(doc.data());
                  lessonid.unshift(doc.id);
                }); //firebaseのデータを入れた配列に対して繰り返し処理で
                //レッスンコンポーネントに値を渡し、それをlessonitemsにpushする
                //変数をかませてあるが、不要な気がする

                for (var i in lessondata) {
                  var id = lessonid[i];
                  var name = lessondata[i].lessonname;
                  var place = lessondata[i].lessonplace;
                  var time = lessondata[i].lessontime;
                  var text = lessondata[i].lessontext;
                  var price = lessondata[i].lessonprice;
                  lessonitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Lesson__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    lessonid: id,
                    name: name,
                    place: place,
                    time: time,
                    text: text,
                    price: price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 11
                  }, this));
                } //最後にlessonitemsをステートにいれる


                setItems(lessonitems);
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getFireData() {
      return _ref.apply(this, arguments);
    };
  }();

  if (items == "no item") {
    getFireData();
  }

  var classes = lessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Title, {
      title: "レッスン一覧",
      subtitle: "時間や場所、レベルなど自分に合ったレッスンを見つけよう"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 10
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

_s(LessonList, "EPa/xZ/h77DmlluBT9LjkTFWT9Q=");

_c = LessonList;
/* harmony default export */ __webpack_exports__["default"] = (LessonList);

var _c;

$RefreshReg$(_c, "LessonList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25saXN0L0xlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsiaW1wdCIsImxlc3Nvbmxpc3QiLCJtYWtlU3R5bGVzIiwicmF5b3V0IiwidG9wIiwid2lkdGgiLCJtYXJnaW4iLCJidG4iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmRoZWFkZXIiLCJjdXJzb3IiLCJzdWJ0aXRsZSIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJCb3R0b20iLCJ0aXRsZSIsIkxlc3Nvbkxpc3QiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXRGaXJlRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJsZXNzb25kYXRhIiwibGVzc29uaWQiLCJsZXNzb25pdGVtcyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJ1bnNoaWZ0IiwiZGF0YSIsImlkIiwiaSIsIm5hbWUiLCJsZXNzb25uYW1lIiwicGxhY2UiLCJsZXNzb25wbGFjZSIsInRpbWUiLCJsZXNzb250aW1lIiwidGV4dCIsImxlc3NvbnRleHQiLCJwcmljZSIsImxlc3NvbnByaWNlIiwicHVzaCIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLElBQUk7QUFHSixJQUFNQyxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNOLGFBQU87QUFERCxHQURvQjtBQUs1QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRTtBQUZMLEdBTHVCO0FBVzVCTCxZQUFVLEVBQUU7QUFDVkksU0FBSyxFQUFFLE9BREc7QUFFVkMsVUFBTSxFQUFFO0FBRkUsR0FYZ0I7QUFnQjVCQyxLQUFHLEVBQUM7QUFDRixhQUFP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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fbGlzdC4zMjljZDA5MzhmODM1OTk5MDE3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuLy8gaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXB0XHJcblxyXG5cclxuY29uc3QgbGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gIHJheW91dDoge1xyXG4gICAgZmxvYXQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIHRvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBsZXNzb25saXN0OiB7XHJcbiAgICB3aWR0aDogJzYwMHB4JyxcclxuICAgIG1hcmdpbjogJzVweCcsXHJcbiAgfSxcclxuXHJcbiAgYnRuOntcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNEE4JyBcclxuICB9LFxyXG4gIGNhcmRoZWFkZXI6e1xyXG4gICAgY3Vyc29yIDogXCJwb2ludGVyXCIsXHJcbiAgfSxcclxuICBzdWJ0aXRsZTp7XHJcbiAgICBtYXJnaW46XCIxMHB4IDBweCAyMHB4IDQwcHhcIiwgXHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjhweFwiLFxyXG4gICAgYm9yZGVyQm90dG9tOlwic29saWQgM3B4ICNDQ0NcIixcclxuICB9LFxyXG4gIHRpdGxlOntcclxuICAgIG1hcmdpbjpcIiAzMHB4IDBweCAyMHB4IDQwcHhcIixcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBMZXNzb25MaXN0ICgpe1xyXG4gIC8v44K544OG44O844OI44Gu6Kit5a6aXHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgLy9sZXNzb25kYXRh44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NkYXRh44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgLy9sZXNzb25pZOOBr2ZpcmViYXNl44Gu44Os44OD44K544OzaWTjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbml0ZW1z44Gv5YCk44KS5rih44GV44KM44GfPExlc3Nvbi8+44GM6KaB57Sg44Gu6YWN5YiX44KS44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgY29uc3QgZ2V0RmlyZURhdGEgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBbXTtcclxuICAgIGNvbnN0IGxlc3NvbmlkID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pdGVtcyA9IFtdO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZ2V0KCkudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgLy8g5Y+X44GR5Y+W44Gj44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44Gr5a++44GX44Gm44CBZm9yRWFjaOOBp+e5sOOCiui/lOOBl+WHpueQhlxyXG4gICAgICAvL+ODh+ODvOOCv+OCkuOCouODs+OCt+ODleODiOOBp+mFjeWIl+OBq+WFpeOCjOOCi+OBk+OBqOOBp+OAgeaWsOOBl+OBhOaKleeov+OBjOmFjeWIl+OBrumgreOBq+OBj+OCi1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgbGVzc29uaWQudW5zaGlmdChkb2MuaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9maXJlYmFzZeOBruODh+ODvOOCv+OCkuWFpeOCjOOBn+mFjeWIl+OBq+WvvuOBl+OBpue5sOOCiui/lOOBl+WHpueQhuOBp1xyXG4gICAgICAvL+ODrOODg+OCueODs+OCs+ODs+ODneODvOODjeODs+ODiOOBq+WApOOCkua4oeOBl+OAgeOBneOCjOOCkmxlc3Nvbml0ZW1z44GrcHVzaOOBmeOCi1xyXG4gICAgICAvL+WkieaVsOOCkuOBi+OBvuOBm+OBpuOBguOCi+OBjOOAgeS4jeimgeOBquawl+OBjOOBmeOCi1xyXG4gICAgICBmb3IgKGxldCBpIGluIGxlc3NvbmRhdGEpe1xyXG4gICAgICAgIGxldCBpZCA9IGxlc3NvbmlkW2ldO1xyXG4gICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wbGFjZTtcclxuICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGltZTtcclxuICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnByaWNlO1xyXG4gICAgICAgIGxlc3Nvbml0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8TGVzc29uIGxlc3NvbmlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4gICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgLy/mnIDlvozjgatsZXNzb25pdGVtc+OCkuOCueODhuODvOODiOOBq+OBhOOCjOOCi1xyXG4gICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGl0ZW1zID09XCJubyBpdGVtXCIpe1xyXG4gICAgZ2V0RmlyZURhdGEoKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IGxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgIDxUaXRsZSB0aXRsZT17XCLjg6zjg4Pjgrnjg7PkuIDopqdcIn0gc3VidGl0bGU9e1wi5pmC6ZaT44KE5aC05omA44CB44Os44OZ44Or44Gq44Gp6Ieq5YiG44Gr5ZCI44Gj44Gf44Os44OD44K544Oz44KS6KaL44Gk44GR44KI44GGXCJ9Lz5cclxuICAgICAgICB7aXRlbXN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25MaXN0O1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==