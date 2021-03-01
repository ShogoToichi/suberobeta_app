webpackHotUpdate_N_E("pages/lesson_list",{

/***/ "./components/lessonlist/Lesson.js":
false,

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
/* harmony import */ var _parts_Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/Lesson */ "./components/lessonlist/parts/Lesson.js");
/* harmony import */ var _normal_parts_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../normal_parts/Title */ "./components/normal_parts/Title.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonlist\\LessonList.js",
    _s = $RefreshSig$();


 // import "firebase/storage";




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
                  lessonitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_parts_Lesson__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    lessonid: id,
                    name: name,
                    place: place,
                    time: time,
                    text: text,
                    price: price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_normal_parts_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "レッスン一覧",
      subtitle: "時間や場所、レベルなど自分に合ったレッスンを見つけよう"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 10
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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

/***/ }),

/***/ "./components/lessonlist/parts/Lesson.js":
/*!***********************************************!*\
  !*** ./components/lessonlist/parts/Lesson.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lesson; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");

var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\lessonlist\\Lesson.js";
//値を渡してレッスンを表示する箱
//Linkタグのところはlessoninfo/[lessonid]にページ移動する処理








var lessonlist = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  rayout: {
    "float": 'center'
  },
  top: {
    width: '100%',
    margin: '8px'
  },
  lessonlist: {
    width: '600px',
    margin: '5px',
    marginLeft: "70px"
  },
  btn: {
    "float": 'right',
    color: 'black',
    backgroundColor: '#5B9'
  },
  cardheader: {
    cursor: "pointer"
  }
});
function Lesson(props) {
  var classes = lessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.lessonlist,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: "/lesson_info/".concat(props.lessonid),
        href: "/lesson_info/[lessonid]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
            "aria-label": "recipe",
            className: classes.avatar,
            src: props.imageurl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 27
          }, this),
          className: classes.cardheader,
          title: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 23
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u65E5\u6642:", props.time]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u5834\u6240\uFF1A", props.place]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u6599\u91D1\uFF1A", props.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            marginBottom: "5px"
          },
          variant: "body2",
          children: ["\u30EC\u30C3\u30B9\u30F3\u5185\u5BB9\uFF1A", props.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, this);
}
_c = Lesson;

var _c;

$RefreshReg$(_c, "Lesson");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25saXN0L0xlc3Nvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGVzc29ubGlzdC9MZXNzb24uanMiXSwibmFtZXMiOlsiTGVzc29uTGlzdCIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibmFtZSIsImxlc3Nvbm5hbWUiLCJwbGFjZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwibGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJyYXlvdXQiLCJ0b3AiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJidG4iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmRoZWFkZXIiLCJjdXJzb3IiLCJMZXNzb24iLCJwcm9wcyIsImNsYXNzZXMiLCJhdmF0YXIiLCJpbWFnZXVybCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQ3BCO0FBRG9CLGtCQUVLQyxzREFBUSxDQUFDLFNBQUQsQ0FGYjtBQUFBLE1BRWJDLEtBRmE7QUFBQSxNQUVQQyxRQUZPLGlCQUlwQjtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLFdBQVc7QUFBQSxnV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWkMsZ0JBRFksR0FDUEMs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QUF5QyxpQkFBTyxFQUFDLE9BQWpEO0FBQUEsMkNBQTZESixLQUFLLENBQUNoQixLQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSxxRUFBQyxvRUFBRDtBQUFZLGVBQUssRUFBRTtBQUFDb0Isd0JBQVksRUFBQztBQUFkLFdBQW5CO0FBQXlDLGlCQUFPLEVBQUMsT0FBakQ7QUFBQSxtRUFBaUVKLEtBQUssQ0FBQ2xCLElBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUF1QkM7S0F6Qm1CaUIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZXNzb25fbGlzdC4zMzMwNjM1ZmQ5NGYwMDcyODk1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuLy8gaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL3BhcnRzL0xlc3NvblwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uL25vcm1hbF9wYXJ0cy9UaXRsZVwiXHJcblxyXG5mdW5jdGlvbiBMZXNzb25MaXN0ICgpe1xyXG4gIC8v44K544OG44O844OI44Gu6Kit5a6aXHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgLy9sZXNzb25kYXRh44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NkYXRh44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgLy9sZXNzb25pZOOBr2ZpcmViYXNl44Gu44Os44OD44K544OzaWTjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbml0ZW1z44Gv5YCk44KS5rih44GV44KM44GfPExlc3Nvbi8+44GM6KaB57Sg44Gu6YWN5YiX44KS44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgY29uc3QgZ2V0RmlyZURhdGEgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBbXTtcclxuICAgIGNvbnN0IGxlc3NvbmlkID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pdGVtcyA9IFtdO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZ2V0KCkudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgLy8g5Y+X44GR5Y+W44Gj44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44Gr5a++44GX44Gm44CBZm9yRWFjaOOBp+e5sOOCiui/lOOBl+WHpueQhlxyXG4gICAgICAvL+ODh+ODvOOCv+OCkuOCouODs+OCt+ODleODiOOBp+mFjeWIl+OBq+WFpeOCjOOCi+OBk+OBqOOBp+OAgeaWsOOBl+OBhOaKleeov+OBjOmFjeWIl+OBrumgreOBq+OBj+OCi1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgbGVzc29uaWQudW5zaGlmdChkb2MuaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9maXJlYmFzZeOBruODh+ODvOOCv+OCkuWFpeOCjOOBn+mFjeWIl+OBq+WvvuOBl+OBpue5sOOCiui/lOOBl+WHpueQhuOBp1xyXG4gICAgICAvL+ODrOODg+OCueODs+OCs+ODs+ODneODvOODjeODs+ODiOOBq+WApOOCkua4oeOBl+OAgeOBneOCjOOCkmxlc3Nvbml0ZW1z44GrcHVzaOOBmeOCi1xyXG4gICAgICAvL+WkieaVsOOCkuOBi+OBvuOBm+OBpuOBguOCi+OBjOOAgeS4jeimgeOBquawl+OBjOOBmeOCi1xyXG4gICAgICBmb3IgKGxldCBpIGluIGxlc3NvbmRhdGEpe1xyXG4gICAgICAgIGxldCBpZCA9IGxlc3NvbmlkW2ldO1xyXG4gICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wbGFjZTtcclxuICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGltZTtcclxuICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnByaWNlO1xyXG4gICAgICAgIGxlc3Nvbml0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8TGVzc29uIGxlc3NvbmlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4gICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgLy/mnIDlvozjgatsZXNzb25pdGVtc+OCkuOCueODhuODvOODiOOBq+OBhOOCjOOCi1xyXG4gICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGl0ZW1zID09XCJubyBpdGVtXCIpe1xyXG4gICAgZ2V0RmlyZURhdGEoKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgIDxUaXRsZSB0aXRsZT17XCLjg6zjg4Pjgrnjg7PkuIDopqdcIn0gc3VidGl0bGU9e1wi5pmC6ZaT44KE5aC05omA44CB44Os44OZ44Or44Gq44Gp6Ieq5YiG44Gr5ZCI44Gj44Gf44Os44OD44K544Oz44KS6KaL44Gk44GR44KI44GGXCJ9Lz5cclxuICAgICAgICB7aXRlbXN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25MaXN0O1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy/lgKTjgpLmuKHjgZfjgabjg6zjg4Pjgrnjg7PjgpLooajnpLrjgZnjgovnrrFcclxuLy9MaW5r44K/44Kw44Gu44Go44GT44KN44GvbGVzc29uaW5mby9bbGVzc29uaWRd44Gr44Oa44O844K456e75YuV44GZ44KL5Yem55CGXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IHsgQ2FyZEhlYWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5cclxuY29uc3QgbGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gIHJheW91dDoge1xyXG4gICAgZmxvYXQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIHRvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBsZXNzb25saXN0OiB7XHJcbiAgICB3aWR0aDogJzYwMHB4JyxcclxuICAgIG1hcmdpbjogJzVweCcsXHJcbiAgICBtYXJnaW5MZWZ0OlwiNzBweFwiLFxyXG4gIH0sXHJcblxyXG4gIGJ0bjp7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzVCOScgXHJcbiAgfSxcclxuICBjYXJkaGVhZGVyOntcclxuICBjdXJzb3IgOiBcInBvaW50ZXJcIixcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVzc29uIChwcm9wcyl7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gbGVzc29ubGlzdCgpO1xyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlc3Nvbmxpc3R9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9sZXNzb25faW5mby8ke3Byb3BzLmxlc3NvbmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9sZXNzb25faW5mby9bbGVzc29uaWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwicmVjaXBlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPXtwcm9wcy5pbWFnZXVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1cHhcIn19IHZhcmlhbnQ9XCJib2R5MlwiPuaXpeaZgjp7cHJvcHMudGltZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1cHhcIn19IHZhcmlhbnQ9XCJib2R5MlwiPuWgtOaJgO+8mntwcm9wcy5wbGFjZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1cHhcIn19IHZhcmlhbnQ9XCJib2R5MlwiPuaWmemHke+8mntwcm9wcy5wcmljZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1cHhcIn19IHZhcmlhbnQ9XCJib2R5MlwiPuODrOODg+OCueODs+WGheWuue+8mntwcm9wcy50ZXh0fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9