webpackHotUpdate_N_E("pages/lesson_list",{

/***/ "./components/LessonList.js":
/*!**********************************!*\
  !*** ./components/LessonList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lesson */ "./components/Lesson.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonList.js",
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
    marginBottom: "20px",
    border: "solid 1px #CCC"
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
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, lessonid, lessonitems;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
    className: classes.rayout,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.top,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "h3",
        style: {
          margin: " 30px 0px 20px 40px"
        },
        children: "\u30EC\u30C3\u30B9\u30F3\u4E00\u89A7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.subtitle,
        variant: "h6",
        children: "\u6642\u9593\u3084\u5834\u6240\u3001\u30EC\u30D9\u30EB\u306A\u3069\u81EA\u5206\u306B\u5408\u3063\u305F\u30EC\u30C3\u30B9\u30F3\u3092\u898B\u3064\u3051\u3088\u3046"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbImxlc3Nvbmxpc3QiLCJtYWtlU3R5bGVzIiwicmF5b3V0IiwidG9wIiwid2lkdGgiLCJtYXJnaW4iLCJidG4iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmRoZWFkZXIiLCJjdXJzb3IiLCJzdWJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInRpdGxlIiwiTGVzc29uTGlzdCIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibmFtZSIsImxlc3Nvbm5hbWUiLCJwbGFjZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNOLGFBQU87QUFERCxHQURvQjtBQUs1QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRTtBQUZMLEdBTHVCO0FBVzVCTCxZQUFVLEVBQUU7QUFDVkksU0FBSyxFQUFFLE9BREc7QUFFVkMsVUFBTSxFQUFFO0FBRkUsR0FYZ0I7QUFnQjVCQyxLQUFHLEVBQUM7QUFDRixhQUFPLE9BREw7QUFFRkMsU0FBSyxFQUFFLE9BRkw7QUFHRkMsbUJB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QUMsb0VBQUQ7QUFBWSxpQkFBUyxFQUFFMEMsT0FBTyxDQUFDcEMsUUFBL0I7QUFBeUMsZUFBTyxFQUFDLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFLS00sS0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQTNEUUYsVTs7S0FBQUEsVTtBQTZETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2xpc3QuNGYyZjA3YzM3NDg3NTg0NTdiOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5jb25zdCBsZXNzb25saXN0ID0gbWFrZVN0eWxlcyh7XHJcbiAgcmF5b3V0OiB7XHJcbiAgICBmbG9hdDogJ2NlbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgdG9wOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luOiAnOHB4JyxcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIGxlc3Nvbmxpc3Q6IHtcclxuICAgIHdpZHRoOiAnNjAwcHgnLFxyXG4gICAgbWFyZ2luOiAnNXB4JyxcclxuICB9LFxyXG5cclxuICBidG46e1xyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0QTgnIFxyXG4gIH0sXHJcbiAgY2FyZGhlYWRlcjp7XHJcbiAgICBjdXJzb3IgOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG4gIHN1YnRpdGxlOntcclxuICAgIG1hcmdpbjpcIjEwcHggMHB4IDIwcHggNDBweFwiLCBcclxuICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgICBib3JkZXI6XCJzb2xpZCAxcHggI0NDQ1wiLFxyXG4gIH0sXHJcbiAgdGl0bGU6e1xyXG4gICAgbWFyZ2luOlwiIDMwcHggMHB4IDIwcHggNDBweFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIExlc3Nvbkxpc3QgKCl7XHJcbiAgLy/jgrnjg4bjg7zjg4jjga7oqK3lrppcclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJubyBpdGVtXCIpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHjga9maXJlYmFzZeOBruODrOODg+OCueODs2RhdGHjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbmlk44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NpZOOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIC8vbGVzc29uaXRlbXPjga/lgKTjgpLmuKHjgZXjgozjgZ88TGVzc29uLz7jgYzopoHntKDjga7phY3liJfjgpLjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICBjb25zdCBnZXRGaXJlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBsZXNzb25kYXRhID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pZCA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaXRlbXMgPSBbXTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmdldCgpLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgIC8vIOWPl+OBkeWPluOBo+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OBq+WvvuOBl+OBpuOAgWZvckVhY2jjgafnubDjgorov5TjgZflh6bnkIZcclxuICAgICAgLy/jg4fjg7zjgr/jgpLjgqLjg7Pjgrfjg5Xjg4jjgafphY3liJfjgavlhaXjgozjgovjgZPjgajjgafjgIHmlrDjgZfjgYTmipXnqL/jgYzphY3liJfjga7poK3jgavjgY/jgotcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgbGVzc29uZGF0YS51bnNoaWZ0KGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIGxlc3NvbmlkLnVuc2hpZnQoZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vZmlyZWJhc2Xjga7jg4fjg7zjgr/jgpLlhaXjgozjgZ/phY3liJfjgavlr77jgZfjgabnubDjgorov5TjgZflh6bnkIbjgadcclxuICAgICAgLy/jg6zjg4Pjgrnjg7PjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavlgKTjgpLmuKHjgZfjgIHjgZ3jgozjgpJsZXNzb25pdGVtc+OBq3B1c2jjgZnjgotcclxuICAgICAgLy/lpInmlbDjgpLjgYvjgb7jgZvjgabjgYLjgovjgYzjgIHkuI3opoHjgarmsJfjgYzjgZnjgotcclxuICAgICAgZm9yIChsZXQgaSBpbiBsZXNzb25kYXRhKXtcclxuICAgICAgICBsZXQgaWQgPSBsZXNzb25pZFtpXTtcclxuICAgICAgICBsZXQgbmFtZSA9bGVzc29uZGF0YVtpXS5sZXNzb25uYW1lO1xyXG4gICAgICAgIGxldCBwbGFjZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucGxhY2U7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgbGV0IHRleHQgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgbGV0IHByaWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wcmljZTtcclxuICAgICAgICBsZXNzb25pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPExlc3NvbiBsZXNzb25pZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlPXtwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgdGltZT17dGltZX1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIC8v5pyA5b6M44GrbGVzc29uaXRlbXPjgpLjgrnjg4bjg7zjg4jjgavjgYTjgozjgotcclxuICAgICAgc2V0SXRlbXMobGVzc29uaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihpdGVtcyA9PVwibm8gaXRlbVwiKXtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSBsZXNzb25saXN0KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yYXlvdXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHN0eWxlPXt7IG1hcmdpbjpcIiAzMHB4IDBweCAyMHB4IDQwcHhcIn19PuODrOODg+OCueODs+S4gOimpzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfSB2YXJpYW50PVwiaDZcIj7mmYLplpPjgoTloLTmiYDjgIHjg6zjg5njg6vjgarjganoh6rliIbjgavlkIjjgaPjgZ/jg6zjg4Pjgrnjg7PjgpLopovjgaTjgZHjgojjgYY8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpdGVtc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3Nvbkxpc3Q7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9