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
        lineNumber: 89,
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
        lineNumber: 90,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbImxlc3Nvbmxpc3QiLCJtYWtlU3R5bGVzIiwicmF5b3V0IiwidG9wIiwid2lkdGgiLCJtYXJnaW4iLCJidG4iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmRoZWFkZXIiLCJjdXJzb3IiLCJMZXNzb25MaXN0IiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImxlc3NvbmlkIiwibGVzc29uaXRlbXMiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwidW5zaGlmdCIsImRhdGEiLCJpZCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjbGFzc2VzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQyxVQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNOLGFBQU87QUFERCxHQURvQjtBQUs1QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRTtBQUZMLEdBTHVCO0FBVzVCTCxZQUFVLEVBQUU7QUFDVkksU0FBSyxFQUFFLE9BREc7QUFFVkMsVUFBTSxFQUFFO0FBRkUsR0FYZ0I7QUFnQjVCQyxLQUFHLEVBQUM7QUFDRixhQUFPLE9BREw7QUFFRkMsU0FBSyxFQUFFLE9BRkw7QUFHRkMsbUJBQWUsRUFBRTtBQUhmLEdBaEJ3QjtBQXFCNUJDLFlB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXpEUUYsVTs7S0FBQUEsVTtBQTJETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2xpc3QuMWU5MzhlZWY3ZDczMWYwNmZlOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcblxyXG5cclxuY29uc3QgbGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gIHJheW91dDoge1xyXG4gICAgZmxvYXQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIHRvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBsZXNzb25saXN0OiB7XHJcbiAgICB3aWR0aDogJzYwMHB4JyxcclxuICAgIG1hcmdpbjogJzVweCcsXHJcbiAgfSxcclxuXHJcbiAgYnRuOntcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBFRTkwJyBcclxuICB9LFxyXG4gIGNhcmRoZWFkZXI6e1xyXG4gICAgY3Vyc29yIDogXCJwb2ludGVyXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBMZXNzb25MaXN0ICgpe1xyXG4gIC8v44K544OG44O844OI44Gu6Kit5a6aXHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgLy9sZXNzb25kYXRh44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NkYXRh44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgLy9sZXNzb25pZOOBr2ZpcmViYXNl44Gu44Os44OD44K544OzaWTjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbml0ZW1z44Gv5YCk44KS5rih44GV44KM44GfPExlc3Nvbi8+44GM6KaB57Sg44Gu6YWN5YiX44KS44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zID0gW107XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5nZXQoKS50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAvLyDlj5fjgZHlj5bjgaPjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgavlr77jgZfjgabjgIFmb3JFYWNo44Gn57mw44KK6L+U44GX5Yem55CGXHJcbiAgICAgIC8v44OH44O844K/44KS44Ki44Oz44K344OV44OI44Gn6YWN5YiX44Gr5YWl44KM44KL44GT44Go44Gn44CB5paw44GX44GE5oqV56i/44GM6YWN5YiX44Gu6aCt44Gr44GP44KLXHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGxlc3NvbmRhdGEudW5zaGlmdChkb2MuZGF0YSgpKTtcclxuICAgICAgICBsZXNzb25pZC51bnNoaWZ0KGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2ZpcmViYXNl44Gu44OH44O844K/44KS5YWl44KM44Gf6YWN5YiX44Gr5a++44GX44Gm57mw44KK6L+U44GX5Yem55CG44GnXHJcbiAgICAgIC8v44Os44OD44K544Oz44Kz44Oz44Od44O844ON44Oz44OI44Gr5YCk44KS5rih44GX44CB44Gd44KM44KSbGVzc29uaXRlbXPjgatwdXNo44GZ44KLXHJcbiAgICAgIC8v5aSJ5pWw44KS44GL44G+44Gb44Gm44GC44KL44GM44CB5LiN6KaB44Gq5rCX44GM44GZ44KLXHJcbiAgICAgIGZvciAobGV0IGkgaW4gbGVzc29uZGF0YSl7XHJcbiAgICAgICAgbGV0IGlkID0gbGVzc29uaWRbaV07XHJcbiAgICAgICAgbGV0IG5hbWUgPWxlc3NvbmRhdGFbaV0ubGVzc29ubmFtZTtcclxuICAgICAgICBsZXQgcGxhY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgIGxldCB0aW1lID0gbGVzc29uZGF0YVtpXS5sZXNzb250aW1lO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gbGVzc29uZGF0YVtpXS5sZXNzb250ZXh0O1xyXG4gICAgICAgIGxldCBwcmljZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucHJpY2U7XHJcbiAgICAgICAgbGVzc29uaXRlbXMucHVzaChcclxuICAgICAgICAgIDxMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAvL+acgOW+jOOBq2xlc3Nvbml0ZW1z44KS44K544OG44O844OI44Gr44GE44KM44KLXHJcbiAgICAgIHNldEl0ZW1zKGxlc3Nvbml0ZW1zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYoaXRlbXMgPT1cIm5vIGl0ZW1cIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmF5b3V0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3B9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDIwfX0+44Os44OD44K544Oz5LiA6KanPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDIwfX0gdmFyaWFudD1cImg4XCI+5pmC6ZaT44KE5aC05omA44CB44Os44OZ44Or44Gq44Gp6Ieq5YiG44Gr5ZCI44Gj44Gf44Os44OD44K544Oz44KS6KaL44Gk44GR44KI44GGPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXRlbXN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25MaXN0O1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==