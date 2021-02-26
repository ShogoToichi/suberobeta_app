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




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonList.js",
    _s = $RefreshSig$();


 // import "firebase/storage";



var lessonlist = makeStyles({
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
    backgroundColor: '#90EE90'
  },
  cardheader: {
    cursor: "pointer"
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
                    lineNumber: 68,
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
        variant: "h5",
        style: {
          marginTop: 10,
          marginBottom: 20
        },
        children: "\u30EC\u30C3\u30B9\u30F3\u4E00\u89A7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: 10,
          marginBottom: 20
        },
        variant: "h8",
        children: "\u6642\u9593\u3084\u5834\u6240\u3001\u30EC\u30D9\u30EB\u306A\u3069\u81EA\u5206\u306B\u5408\u3063\u305F\u30EC\u30C3\u30B9\u30F3\u3092\u898B\u3064\u3051\u3088\u3046"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbImxlc3Nvbmxpc3QiLCJtYWtlU3R5bGVzIiwicmF5b3V0IiwidG9wIiwid2lkdGgiLCJtYXJnaW4iLCJidG4iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmRoZWFkZXIiLCJjdXJzb3IiLCJMZXNzb25MaXN0IiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImxlc3NvbmlkIiwibGVzc29uaXRlbXMiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwidW5zaGlmdCIsImRhdGEiLCJpZCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjbGFzc2VzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQyxVQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNOLGFBQU87QUFERCxHQURvQjtBQUs1QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRTtBQUZMLEdBTHVCO0FBVzVCTCxZQUFVLEVBQUU7QUFDVkksU0FBSyxFQUFFLE9BREc7QUFFVkMsVUFBTSxFQUFFO0FBRkUsR0FYZ0I7QUFnQjVCQyxLQUFHLEVBQUM7QUFDRixhQUFPLE9BREw7QUFFRkMsU0FBSyxFQUFFLE9BRkw7QUFHRkMsbUJBQWUsRUFBRTtBQUhmLEdBaEJ3QjtBQXFCNUJDLFlB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QTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBS0toQyxLQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBM0RRRixVOztLQUFBQSxVO0FBNkRNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fbGlzdC4zZjEzMzkyZjlkODA1MDU2YzQxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuLy8gaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcblxyXG5jb25zdCBsZXNzb25saXN0ID0gbWFrZVN0eWxlcyh7XHJcbiAgcmF5b3V0OiB7XHJcbiAgICBmbG9hdDogJ2NlbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgdG9wOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luOiAnOHB4JyxcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIGxlc3Nvbmxpc3Q6IHtcclxuICAgIHdpZHRoOiAnNjAwcHgnLFxyXG4gICAgbWFyZ2luOiAnNXB4JyxcclxuICB9LFxyXG5cclxuICBidG46e1xyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM5MEVFOTAnIFxyXG4gIH0sXHJcbiAgY2FyZGhlYWRlcjp7XHJcbiAgICBjdXJzb3IgOiBcInBvaW50ZXJcIixcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIExlc3Nvbkxpc3QgKCl7XHJcbiAgLy/jgrnjg4bjg7zjg4jjga7oqK3lrppcclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJubyBpdGVtXCIpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHjga9maXJlYmFzZeOBruODrOODg+OCueODs2RhdGHjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbmlk44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NpZOOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIC8vbGVzc29uaXRlbXPjga/lgKTjgpLmuKHjgZXjgozjgZ88TGVzc29uLz7jgYzopoHntKDjga7phY3liJfjgpLjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICBjb25zdCBnZXRGaXJlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBsZXNzb25kYXRhID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pZCA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaXRlbXMgPSBbXTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmdldCgpLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgIC8vIOWPl+OBkeWPluOBo+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OBq+WvvuOBl+OBpuOAgWZvckVhY2jjgafnubDjgorov5TjgZflh6bnkIZcclxuICAgICAgLy/jg4fjg7zjgr/jgpLjgqLjg7Pjgrfjg5Xjg4jjgafphY3liJfjgavlhaXjgozjgovjgZPjgajjgafjgIHmlrDjgZfjgYTmipXnqL/jgYzphY3liJfjga7poK3jgavjgY/jgotcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgbGVzc29uZGF0YS51bnNoaWZ0KGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIGxlc3NvbmlkLnVuc2hpZnQoZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vZmlyZWJhc2Xjga7jg4fjg7zjgr/jgpLlhaXjgozjgZ/phY3liJfjgavlr77jgZfjgabnubDjgorov5TjgZflh6bnkIbjgadcclxuICAgICAgLy/jg6zjg4Pjgrnjg7PjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavlgKTjgpLmuKHjgZfjgIHjgZ3jgozjgpJsZXNzb25pdGVtc+OBq3B1c2jjgZnjgotcclxuICAgICAgLy/lpInmlbDjgpLjgYvjgb7jgZvjgabjgYLjgovjgYzjgIHkuI3opoHjgarmsJfjgYzjgZnjgotcclxuICAgICAgZm9yIChsZXQgaSBpbiBsZXNzb25kYXRhKXtcclxuICAgICAgICBsZXQgaWQgPSBsZXNzb25pZFtpXTtcclxuICAgICAgICBsZXQgbmFtZSA9bGVzc29uZGF0YVtpXS5sZXNzb25uYW1lO1xyXG4gICAgICAgIGxldCBwbGFjZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucGxhY2U7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgbGV0IHRleHQgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgbGV0IHByaWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wcmljZTtcclxuICAgICAgICBsZXNzb25pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPExlc3NvbiBsZXNzb25pZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlPXtwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgdGltZT17dGltZX1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIC8v5pyA5b6M44GrbGVzc29uaXRlbXPjgpLjgrnjg4bjg7zjg4jjgavjgYTjgozjgotcclxuICAgICAgc2V0SXRlbXMobGVzc29uaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihpdGVtcyA9PVwibm8gaXRlbVwiKXtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSBsZXNzb25saXN0KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yYXlvdXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMjB9fT7jg6zjg4Pjgrnjg7PkuIDopqc8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMjB9fSB2YXJpYW50PVwiaDhcIj7mmYLplpPjgoTloLTmiYDjgIHjg6zjg5njg6vjgarjganoh6rliIbjgavlkIjjgaPjgZ/jg6zjg4Pjgrnjg7PjgpLopovjgaTjgZHjgojjgYY8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpdGVtc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3Nvbkxpc3Q7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9