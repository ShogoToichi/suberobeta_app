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
                    lineNumber: 69,
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
        lineNumber: 92,
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
        lineNumber: 93,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbImxlc3Nvbmxpc3QiLCJtYWtlU3R5bGVzIiwicmF5b3V0IiwidG9wIiwid2lkdGgiLCJtYXJnaW4iLCJidG4iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmRoZWFkZXIiLCJjdXJzb3IiLCJMZXNzb25MaXN0IiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImxlc3NvbmlkIiwibGVzc29uaXRlbXMiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwidW5zaGlmdCIsImRhdGEiLCJpZCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjbGFzc2VzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDTixhQUFPO0FBREQsR0FEb0I7QUFLNUJDLEtBQUcsRUFBRTtBQUNIQyxTQUFLLEVBQUUsTUFESjtBQUVIQyxVQUFNLEVBQUU7QUFGTCxHQUx1QjtBQVc1QkwsWUFBVSxFQUFFO0FBQ1ZJLFNBQUssRUFBRSxPQURHO0FBRVZDLFVBQU0sRUFBRTtBQUZFLEdBWGdCO0FBZ0I1QkMsS0FBRyxFQUFDO0FBQ0YsYUFBTyxPQURMO0FBRUZDLFNBQUssRUFBRSxPQUZMO0FBR0ZDLG1CQUFlLEVBQUU7QUFIZixHQWhCd0I7QUFx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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUtLaEMsS0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQTNEUUYsVTs7S0FBQUEsVTtBQTZETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2xpc3QuY2VkMjk4MDljZDNjOWVmMWI0YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcbmNvbnN0IGxlc3Nvbmxpc3QgPSBtYWtlU3R5bGVzKHtcclxuICByYXlvdXQ6IHtcclxuICAgIGZsb2F0OiAnY2VudGVyJyxcclxuICB9LFxyXG5cclxuICB0b3A6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW46ICc4cHgnLFxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgbGVzc29ubGlzdDoge1xyXG4gICAgd2lkdGg6ICc2MDBweCcsXHJcbiAgICBtYXJnaW46ICc1cHgnLFxyXG4gIH0sXHJcblxyXG4gIGJ0bjp7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzkwRUU5MCcgXHJcbiAgfSxcclxuICBjYXJkaGVhZGVyOntcclxuICAgIGN1cnNvciA6IFwicG9pbnRlclwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTGVzc29uTGlzdCAoKXtcclxuICAvL+OCueODhuODvOODiOOBruioreWumlxyXG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShcIm5vIGl0ZW1cIik7XHJcblxyXG4gIC8vbGVzc29uZGF0YeOBr2ZpcmViYXNl44Gu44Os44OD44K544OzZGF0YeOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIC8vbGVzc29uaWTjga9maXJlYmFzZeOBruODrOODg+OCueODs2lk44KS44GE44Gj44Gf44KT5L+d566h44GZ44KLXHJcbiAgLy9sZXNzb25pdGVtc+OBr+WApOOCkua4oeOBleOCjOOBnzxMZXNzb24vPuOBjOimgee0oOOBrumFjeWIl+OCkuOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBbXTtcclxuICAgIGNvbnN0IGxlc3NvbmlkID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pdGVtcyA9IFtdO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZ2V0KCkudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgLy8g5Y+X44GR5Y+W44Gj44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44Gr5a++44GX44Gm44CBZm9yRWFjaOOBp+e5sOOCiui/lOOBl+WHpueQhlxyXG4gICAgICAvL+ODh+ODvOOCv+OCkuOCouODs+OCt+ODleODiOOBp+mFjeWIl+OBq+WFpeOCjOOCi+OBk+OBqOOBp+OAgeaWsOOBl+OBhOaKleeov+OBjOmFjeWIl+OBrumgreOBq+OBj+OCi1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgbGVzc29uaWQudW5zaGlmdChkb2MuaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9maXJlYmFzZeOBruODh+ODvOOCv+OCkuWFpeOCjOOBn+mFjeWIl+OBq+WvvuOBl+OBpue5sOOCiui/lOOBl+WHpueQhuOBp1xyXG4gICAgICAvL+ODrOODg+OCueODs+OCs+ODs+ODneODvOODjeODs+ODiOOBq+WApOOCkua4oeOBl+OAgeOBneOCjOOCkmxlc3Nvbml0ZW1z44GrcHVzaOOBmeOCi1xyXG4gICAgICAvL+WkieaVsOOCkuOBi+OBvuOBm+OBpuOBguOCi+OBjOOAgeS4jeimgeOBquawl+OBjOOBmeOCi1xyXG4gICAgICBmb3IgKGxldCBpIGluIGxlc3NvbmRhdGEpe1xyXG4gICAgICAgIGxldCBpZCA9IGxlc3NvbmlkW2ldO1xyXG4gICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wbGFjZTtcclxuICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGltZTtcclxuICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnByaWNlO1xyXG4gICAgICAgIGxlc3Nvbml0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8TGVzc29uIGxlc3NvbmlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4gICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgLy/mnIDlvozjgatsZXNzb25pdGVtc+OCkuOCueODhuODvOODiOOBq+OBhOOCjOOCi1xyXG4gICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGl0ZW1zID09XCJubyBpdGVtXCIpe1xyXG4gICAgZ2V0RmlyZURhdGEoKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IGxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJheW91dH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9wfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAyMH19PuODrOODg+OCueODs+S4gOimpzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAyMH19IHZhcmlhbnQ9XCJoOFwiPuaZgumWk+OChOWgtOaJgOOAgeODrOODmeODq+OBquOBqeiHquWIhuOBq+WQiOOBo+OBn+ODrOODg+OCueODs+OCkuimi+OBpOOBkeOCiOOBhjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2l0ZW1zfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uTGlzdDtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=