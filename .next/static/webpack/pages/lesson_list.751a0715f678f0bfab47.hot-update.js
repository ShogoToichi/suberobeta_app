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
                    lineNumber: 38,
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
      lineNumber: 60,
      columnNumber: 10
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZXNzb25saXN0L0xlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsiTGVzc29uTGlzdCIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibmFtZSIsImxlc3Nvbm5hbWUiLCJwbGFjZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwiY2xhc3NlcyIsImxlc3Nvbmxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNwQjtBQURvQixrQkFFS0Msc0RBQVEsQ0FBQyxTQUFELENBRmI7QUFBQSxNQUViQyxLQUZhO0FBQUEsTUFFUEMsUUFGTyxpQkFJcEI7QUFDQTtBQUNBOzs7QUFDQSxNQUFNQyxXQUFXO0FBQUEsZ1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLGdCQURZLEdBQ1BDLGdEQUFRLENBQUNDLFNBQVQsRUFETztBQUVaQyx3QkFGWSxHQUVDLEVBRkQ7QUFHWkMsc0JBSFksR0FHRCxFQUhDO0FBSVpDLHlCQUpZLEdBSUUsRUFKRjtBQUFBO0FBQUEscUJBS1pMLEVBQUUsQ0FBQ00sVUFBSCxDQUFjLFNBQWQsRUFBeUJDLEdBQXpCLEdBQStCQyxJQUEvQixDQUFvQyxVQUFTQyxhQUFULEVBQXVCO0FBQy9EO0FBQ0E7QUFDQUEsNkJBQWEsQ0FBQ0MsT0FBZCxDQUFzQixVQUFTQyxHQUFULEVBQWE7QUFDakNSLDRCQUFVLENBQUNTLE9BQVgsQ0FBbUJELEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUNBVCwwQkFBUSxDQUFDUSxPQUFULENBQWlCRCxHQUFHLENBQUNHLEVBQXJCO0FBQ0QsaUJBSEQsRUFIK0QsQ0FPL0Q7QUFDQTtBQUNBOztBQUNBLHFCQUFLLElBQUlDLENBQVQsSUFBY1osVUFBZCxFQUF5QjtBQUN2QixzQkFBSVcsRUFBRSxHQUFHVixRQUFRLENBQUNXLENBQUQsQ0FBakI7QUFDQSxzQkFBSUMsSUFBSSxHQUFFYixVQUFVLENBQUNZLENBQUQsQ0FBVixDQUFjRSxVQUF4QjtBQUNBLHNCQUFJQyxLQUFLLEdBQUdmLFVBQVUsQ0FBQ1ksQ0FBRCxDQUFWLENBQWNJLFdBQTFCO0FBQ0Esc0JBQUlDLElBQUksR0FBR2pCLFVBQVUsQ0FBQ1ksQ0FBRCxDQUFWLENBQWNNLFVBQXpCO0FBQ0Esc0JBQUlDLElBQUksR0FBR25CLFVBQVUsQ0FBQ1ksQ0FBRCxDQUFWLENBQWNRLFVBQXpCO0FBQ0Esc0JBQUlDLEtBQUssR0FBR3JCLFVBQVUsQ0FBQ1ksQ0FBRCxDQUFWLENBQWNVLFdBQTFCO0FBQ0FwQiw2QkFBVyxDQUFDcUIsSUFBWixlQUNFLHFFQUFDLCtDQUFEO0FBQVEsNEJBQVEsRUFBRVosRUFBbEI7QUFDUSx3QkFBSSxFQUFFRSxJQURkO0FBRVEseUJBQUssRUFBRUUsS0FGZjtBQUdRLHdCQUFJLEVBQUVFLElBSGQ7QUFJUSx3QkFBSSxFQUFFRSxJQUpkO0FBS1EseUJBQUssRUFBRUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGO0FBU0QsaUJBMUI4RCxDQTJCL0Q7OztBQUNBMUIsd0JBQVEsQ0FBQ08sV0FBRCxDQUFSO0FBQ0QsZUE3QkssQ0FMWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYTixXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQXFDQSxNQUFHRixLQUFLLElBQUcsU0FBWCxFQUFxQjtBQUNuQkUsZUFBVztBQUNaOztBQUVELE1BQU00QixPQUFPLEdBQUdDLFVBQVUsRUFBMUI7QUFFQSxzQkFDRTtBQUFBLDRCQUNLLHFFQUFDLDJEQUFEO0FBQU8sV0FBSyxFQUFFLFFBQWQ7QUFBd0IsY0FBUSxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETCxFQUVLL0IsS0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQXhEUUYsVTs7S0FBQUEsVTtBQTBETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVzc29uX2xpc3QuNzUxYTA3MTVmNjc4ZjBiZmFiNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vbm9ybWFsX3BhcnRzL1RpdGxlXCJcclxuXHJcbmZ1bmN0aW9uIExlc3Nvbkxpc3QgKCl7XHJcbiAgLy/jgrnjg4bjg7zjg4jjga7oqK3lrppcclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJubyBpdGVtXCIpO1xyXG5cclxuICAvL2xlc3NvbmRhdGHjga9maXJlYmFzZeOBruODrOODg+OCueODs2RhdGHjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICAvL2xlc3Nvbmlk44GvZmlyZWJhc2Xjga7jg6zjg4Pjgrnjg7NpZOOCkuOBhOOBo+OBn+OCk+S/neeuoeOBmeOCi1xyXG4gIC8vbGVzc29uaXRlbXPjga/lgKTjgpLmuKHjgZXjgozjgZ88TGVzc29uLz7jgYzopoHntKDjga7phY3liJfjgpLjgpLjgYTjgaPjgZ/jgpPkv53nrqHjgZnjgotcclxuICBjb25zdCBnZXRGaXJlRGF0YSA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zID0gW107XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5nZXQoKS50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAvLyDlj5fjgZHlj5bjgaPjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgavlr77jgZfjgabjgIFmb3JFYWNo44Gn57mw44KK6L+U44GX5Yem55CGXHJcbiAgICAgIC8v44OH44O844K/44KS44Ki44Oz44K344OV44OI44Gn6YWN5YiX44Gr5YWl44KM44KL44GT44Go44Gn44CB5paw44GX44GE5oqV56i/44GM6YWN5YiX44Gu6aCt44Gr44GP44KLXHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGxlc3NvbmRhdGEudW5zaGlmdChkb2MuZGF0YSgpKTtcclxuICAgICAgICBsZXNzb25pZC51bnNoaWZ0KGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2ZpcmViYXNl44Gu44OH44O844K/44KS5YWl44KM44Gf6YWN5YiX44Gr5a++44GX44Gm57mw44KK6L+U44GX5Yem55CG44GnXHJcbiAgICAgIC8v44Os44OD44K544Oz44Kz44Oz44Od44O844ON44Oz44OI44Gr5YCk44KS5rih44GX44CB44Gd44KM44KSbGVzc29uaXRlbXPjgatwdXNo44GZ44KLXHJcbiAgICAgIC8v5aSJ5pWw44KS44GL44G+44Gb44Gm44GC44KL44GM44CB5LiN6KaB44Gq5rCX44GM44GZ44KLXHJcbiAgICAgIGZvciAobGV0IGkgaW4gbGVzc29uZGF0YSl7XHJcbiAgICAgICAgbGV0IGlkID0gbGVzc29uaWRbaV07XHJcbiAgICAgICAgbGV0IG5hbWUgPWxlc3NvbmRhdGFbaV0ubGVzc29ubmFtZTtcclxuICAgICAgICBsZXQgcGxhY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgIGxldCB0aW1lID0gbGVzc29uZGF0YVtpXS5sZXNzb250aW1lO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gbGVzc29uZGF0YVtpXS5sZXNzb250ZXh0O1xyXG4gICAgICAgIGxldCBwcmljZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucHJpY2U7XHJcbiAgICAgICAgbGVzc29uaXRlbXMucHVzaChcclxuICAgICAgICAgIDxMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAvL+acgOW+jOOBq2xlc3Nvbml0ZW1z44KS44K544OG44O844OI44Gr44GE44KM44KLXHJcbiAgICAgIHNldEl0ZW1zKGxlc3Nvbml0ZW1zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYoaXRlbXMgPT1cIm5vIGl0ZW1cIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gbGVzc29ubGlzdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgPFRpdGxlIHRpdGxlPXtcIuODrOODg+OCueODs+S4gOimp1wifSBzdWJ0aXRsZT17XCLmmYLplpPjgoTloLTmiYDjgIHjg6zjg5njg6vjgarjganoh6rliIbjgavlkIjjgaPjgZ/jg6zjg4Pjgrnjg7PjgpLopovjgaTjgZHjgojjgYZcIn0vPlxyXG4gICAgICAgIHtpdGVtc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlc3Nvbkxpc3Q7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9