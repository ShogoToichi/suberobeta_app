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
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonlist\\LessonList.js",
    _s = $RefreshSig$();


 // import "firebase/storage";





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
                    lineNumber: 78,
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "レッスン一覧",
      subtitle: "時間や場所、レベルなど自分に合ったレッスンを見つけよう"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 10
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25saXN0L0xlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsibGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJyYXlvdXQiLCJ0b3AiLCJ3aWR0aCIsIm1hcmdpbiIsImJ0biIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2FyZGhlYWRlciIsImN1cnNvciIsInN1YnRpdGxlIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlckJvdHRvbSIsInRpdGxlIiwiTGVzc29uTGlzdCIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibmFtZSIsImxlc3Nvbm5hbWUiLCJwbGFjZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ04sYUFBTztBQURELEdBRG9CO0FBSzVCQyxLQUFHLEVBQUU7QUFDSEMsU0FBSyxFQUFFLE1BREo7QUFFSEMsVUFBTSxFQUFFO0FBRkwsR0FMdUI7QUFXNUJMLFlBQVUsRUFBRTtBQUNWSSxTQUFLLEVBQUUsT0FERztBQUVWQyxVQUFNLEVBQUU7QUFGRSxHQVhnQjtBQWdCNUJDLEtBQUcsRUFBQztBQUNGLGFBQU8sT0FETDtBQUVGQyxTQUFLLEVB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YWdlcy9sZXNzb25fbGlzdC4xMmRmZDA3NTVkYjIyZThmOTk3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuLy8gaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vbm9ybWFsX3BhcnRzL1RpdGxlXCJcclxuXHJcblxyXG5jb25zdCBsZXNzb25saXN0ID0gbWFrZVN0eWxlcyh7XHJcbiAgcmF5b3V0OiB7XHJcbiAgICBmbG9hdDogJ2NlbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgdG9wOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luOiAnOHB4JyxcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIGxlc3Nvbmxpc3Q6IHtcclxuICAgIHdpZHRoOiAnNjAwcHgnLFxyXG4gICAgbWFyZ2luOiAnNXB4JyxcclxuICB9LFxyXG5cclxuICBidG46e1xyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0QTgnIFxyXG4gIH0sXHJcbiAgY2FyZGhlYWRlcjp7XHJcbiAgICBjdXJzb3IgOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIHN1YnRpdGxlOntcclxuICAgIG1hcmdpbjpcIjEwcHggMHB4IDIwcHggNDBweFwiLCBcclxuICAgIHBhZGRpbmdCb3R0b206IFwiOHB4XCIsXHJcbiAgICBib3JkZXJCb3R0b206XCJzb2xpZCAzcHggI0NDQ1wiLFxyXG4gIH0sXHJcbiAgdGl0bGU6e1xyXG4gICAgbWFyZ2luOlwiIDMwcHggMHB4IDIwcHggNDBweFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIExlc3Nvbkxpc3QgKCl7XHJcbiAgLy/jgrnjg4bjg7zjg4jjga7oqK3lrppcclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJubyBpdGVtXCIpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHjga9maXJlYmFzZeOBruODrOODg+OCueODs2RhdGHjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbmlk44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NpZOOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIC8vbGVzc29uaXRlbXPjga/lgKTjgpLmuKHjgZXjgozjgZ88TGVzc29uLz7jgYzopoHntKDjga7phY3liJfjgpLjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICBjb25zdCBnZXRGaXJlRGF0YSA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zID0gW107XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5nZXQoKS50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAvLyDlj5fjgZHlj5bjgaPjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgavlr77jgZfjgabjgIFmb3JFYWNo44Gn57mw44KK6L+U44GX5Yem55CGXHJcbiAgICAgIC8v44OH44O844K/44KS44Ki44Oz44K344OV44OI44Gn6YWN5YiX44Gr5YWl44KM44KL44GT44Go44Gn44CB5paw44GX44GE5oqV56i/44GM6YWN5YiX44Gu6aCt44Gr44GP44KLXHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGxlc3NvbmRhdGEudW5zaGlmdChkb2MuZGF0YSgpKTtcclxuICAgICAgICBsZXNzb25pZC51bnNoaWZ0KGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2ZpcmViYXNl44Gu44OH44O844K/44KS5YWl44KM44Gf6YWN5YiX44Gr5a++44GX44Gm57mw44KK6L+U44GX5Yem55CG44GnXHJcbiAgICAgIC8v44Os44OD44K544Oz44Kz44Oz44Od44O844ON44Oz44OI44Gr5YCk44KS5rih44GX44CB44Gd44KM44KSbGVzc29uaXRlbXPjgatwdXNo44GZ44KLXHJcbiAgICAgIC8v5aSJ5pWw44KS44GL44G+44Gb44Gm44GC44KL44GM44CB5LiN6KaB44Gq5rCX44GM44GZ44KLXHJcbiAgICAgIGZvciAobGV0IGkgaW4gbGVzc29uZGF0YSl7XHJcbiAgICAgICAgbGV0IGlkID0gbGVzc29uaWRbaV07XHJcbiAgICAgICAgbGV0IG5hbWUgPWxlc3NvbmRhdGFbaV0ubGVzc29ubmFtZTtcclxuICAgICAgICBsZXQgcGxhY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgIGxldCB0aW1lID0gbGVzc29uZGF0YVtpXS5sZXNzb250aW1lO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gbGVzc29uZGF0YVtpXS5sZXNzb250ZXh0O1xyXG4gICAgICAgIGxldCBwcmljZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucHJpY2U7XHJcbiAgICAgICAgbGVzc29uaXRlbXMucHVzaChcclxuICAgICAgICAgIDxMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAvL+acgOW+jOOBq2xlc3Nvbml0ZW1z44KS44K544OG44O844OI44Gr44GE44KM44KLXHJcbiAgICAgIHNldEl0ZW1zKGxlc3Nvbml0ZW1zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYoaXRlbXMgPT1cIm5vIGl0ZW1cIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gbGVzc29ubGlzdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgPFRpdGxlIHRpdGxlPXtcIuODrOODg+OCueODs+S4gOimp1wifSBzdWJ0aXRsZT17XCLmmYLplpPjgoTloLTmiYDjgIHjg6zjg5njg6vjgarjganoh6rliIbjgavlkIjjgaPjgZ/jg6zjg4Pjgrnjg7PjgpLopovjgaTjgZHjgojjgYZcIn0vPlxyXG4gICAgICAgIHtpdGVtc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3Nvbkxpc3Q7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9