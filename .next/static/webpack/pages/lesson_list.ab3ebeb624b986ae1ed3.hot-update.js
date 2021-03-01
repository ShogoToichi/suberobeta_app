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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonlist\\LessonList.js",
    _s = $RefreshSig$();


 // import "firebase/storage";




var lessonlist = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
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
                    lineNumber: 77,
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "レッスン一覧",
      subtitle: "時間や場所、レベルなど自分に合ったレッスンを見つけよう"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 10
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25saXN0L0xlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsibGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJyYXlvdXQiLCJ0b3AiLCJ3aWR0aCIsIm1hcmdpbiIsImJ0biIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2FyZGhlYWRlciIsImN1cnNvciIsInN1YnRpdGxlIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlckJvdHRvbSIsInRpdGxlIiwiTGVzc29uTGlzdCIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibmFtZSIsImxlc3Nvbm5hbWUiLCJwbGFjZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ04sYUFBTztBQURELEdBRG9CO0FBSzVCQyxLQUFHLEVBQUU7QUFDSEMsU0FBSyxFQUFFLE1BREo7QUFFSEMsVUFBTSxFQUFFO0FBRkwsR0FMdUI7QUFXNUJMLFlBQVUsRUFBRTtBQUNWSSxTQUFLLEVBQUUsT0FERztBQUVWQyxVQUFNLEVBQUU7QUFGRSxHQVhnQjtBQWdCNUJDLEtBQUcsRUFBQztBQUNGLGFBQU8sT0FETDtBQUVGQyxTQUFLLEVBQUUsT0FG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ZXNzb25fbGlzdC5hYjNlYmViNjI0Yjk4NmFlMWVkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuLy8gaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9ub3JtYWxfcGFydHMvVGl0bGVcIlxyXG5cclxuXHJcbmNvbnN0IGxlc3Nvbmxpc3QgPSBtYWtlU3R5bGVzKHtcclxuICByYXlvdXQ6IHtcclxuICAgIGZsb2F0OiAnY2VudGVyJyxcclxuICB9LFxyXG5cclxuICB0b3A6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW46ICc4cHgnLFxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgbGVzc29ubGlzdDoge1xyXG4gICAgd2lkdGg6ICc2MDBweCcsXHJcbiAgICBtYXJnaW46ICc1cHgnLFxyXG4gIH0sXHJcblxyXG4gIGJ0bjp7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzRBOCcgXHJcbiAgfSxcclxuICBjYXJkaGVhZGVyOntcclxuICAgIGN1cnNvciA6IFwicG9pbnRlclwiLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6e1xyXG4gICAgbWFyZ2luOlwiMTBweCAwcHggMjBweCA0MHB4XCIsIFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCI4cHhcIixcclxuICAgIGJvcmRlckJvdHRvbTpcInNvbGlkIDNweCAjQ0NDXCIsXHJcbiAgfSxcclxuICB0aXRsZTp7XHJcbiAgICBtYXJnaW46XCIgMzBweCAwcHggMjBweCA0MHB4XCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTGVzc29uTGlzdCAoKXtcclxuICAvL+OCueODhuODvOODiOOBruioreWumlxyXG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShcIm5vIGl0ZW1cIik7XHJcblxyXG4gIC8vbGVzc29uZGF0YeOBr2ZpcmViYXNl44Gu44Os44OD44K544OzZGF0YeOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIC8vbGVzc29uaWTjga9maXJlYmFzZeOBruODrOODg+OCueODs2lk44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgLy9sZXNzb25pdGVtc+OBr+WApOOCkua4oeOBleOCjOOBnzxMZXNzb24vPuOBjOimgee0oOOBrumFjeWIl+OCkuOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIGNvbnN0IGdldEZpcmVEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBsZXNzb25kYXRhID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pZCA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaXRlbXMgPSBbXTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmdldCgpLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgIC8vIOWPl+OBkeWPluOBo+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OBq+WvvuOBl+OBpuOAgWZvckVhY2jjgafnubDjgorov5TjgZflh6bnkIZcclxuICAgICAgLy/jg4fjg7zjgr/jgpLjgqLjg7Pjgrfjg5Xjg4jjgafphY3liJfjgavlhaXjgozjgovjgZPjgajjgafjgIHmlrDjgZfjgYTmipXnqL/jgYzphY3liJfjga7poK3jgavjgY/jgotcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgbGVzc29uZGF0YS51bnNoaWZ0KGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIGxlc3NvbmlkLnVuc2hpZnQoZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vZmlyZWJhc2Xjga7jg4fjg7zjgr/jgpLlhaXjgozjgZ/phY3liJfjgavlr77jgZfjgabnubDjgorov5TjgZflh6bnkIbjgadcclxuICAgICAgLy/jg6zjg4Pjgrnjg7PjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavlgKTjgpLmuKHjgZfjgIHjgZ3jgozjgpJsZXNzb25pdGVtc+OBq3B1c2jjgZnjgotcclxuICAgICAgLy/lpInmlbDjgpLjgYvjgb7jgZvjgabjgYLjgovjgYzjgIHkuI3opoHjgarmsJfjgYzjgZnjgotcclxuICAgICAgZm9yIChsZXQgaSBpbiBsZXNzb25kYXRhKXtcclxuICAgICAgICBsZXQgaWQgPSBsZXNzb25pZFtpXTtcclxuICAgICAgICBsZXQgbmFtZSA9bGVzc29uZGF0YVtpXS5sZXNzb25uYW1lO1xyXG4gICAgICAgIGxldCBwbGFjZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucGxhY2U7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgbGV0IHRleHQgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgbGV0IHByaWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wcmljZTtcclxuICAgICAgICBsZXNzb25pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPExlc3NvbiBsZXNzb25pZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlPXtwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgdGltZT17dGltZX1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIC8v5pyA5b6M44GrbGVzc29uaXRlbXPjgpLjgrnjg4bjg7zjg4jjgavjgYTjgozjgotcclxuICAgICAgc2V0SXRlbXMobGVzc29uaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihpdGVtcyA9PVwibm8gaXRlbVwiKXtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSBsZXNzb25saXN0KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICA8VGl0bGUgdGl0bGU9e1wi44Os44OD44K544Oz5LiA6KanXCJ9IHN1YnRpdGxlPXtcIuaZgumWk+OChOWgtOaJgOOAgeODrOODmeODq+OBquOBqeiHquWIhuOBq+WQiOOBo+OBn+ODrOODg+OCueODs+OCkuimi+OBpOOBkeOCiOOBhlwifS8+XHJcbiAgICAgICAge2l0ZW1zfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uTGlzdDtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=