webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/mypage/MyBuyLessonList.js":
/*!**********************************************!*\
  !*** ./components/mypage/MyBuyLessonList.js ***!
  \**********************************************/
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
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _parts_MyLesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/MyLesson */ "./components/mypage/parts/MyLesson.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Lib_address_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Lib/address_lib */ "./Lib/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\mypage\\MyBuyLessonList.js",
    _s = $RefreshSig$();

//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン購入者とReduxのemailが一致するデータを参照













var mylessonlist = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  list: {
    margin: '20px'
  },
  addbtn: {
    textAlign: 'center'
  },
  btn: {
    backgroundColor: "#4A8",
    color: "white"
  }
});

function MyBuyLessonList(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no item"),
      items = _useState[0],
      setItems = _useState[1];

  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, lessonid, lessonitems, email;
      return C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              lessondata = [];
              lessonid = [];
              lessonitems = [];
              email = _Lib_address_lib__WEBPACK_IMPORTED_MODULE_8__["default"].encodeEmail(props.email);
              _context.next = 7;
              return db.collection("lessons").where("buyerid", "==", email).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  lessondata.unshift(doc.data());
                  lessonid.unshift(doc.id);
                });

                for (var i in lessonid) {
                  var id = lessonid[i];
                  var name = lessondata[i].lessonname;
                  var place = lessondata[i].lessonplace;
                  var time = lessondata[i].lessontime;
                  var text = lessondata[i].lessontext;
                  var price = lessondata[i].lessonprice;
                  lessonitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_parts_MyLesson__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    lessonid: id,
                    name: name,
                    place: place,
                    time: time,
                    text: text,
                    price: price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 11
                  }, this));
                }

                setItems(lessonitems);
              });

            case 7:
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

  var classes = mylessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classes.list,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.list,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "white",
        bgcolor: "#4A8",
        fontWeight: "bold",
        p: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          variant: "h8",
          children: "\u8CFC\u5165\u3057\u305F\u30EC\u30C3\u30B9\u30F3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

_s(MyBuyLessonList, "EPa/xZ/h77DmlluBT9LjkTFWT9Q=");

_c = MyBuyLessonList;
MyBuyLessonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(MyBuyLessonList);
/* harmony default export */ __webpack_exports__["default"] = (MyBuyLessonList);

var _c;

$RefreshReg$(_c, "MyBuyLessonList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teXBhZ2UvTXlCdXlMZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbIm15bGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJsaXN0IiwibWFyZ2luIiwiYWRkYnRuIiwidGV4dEFsaWduIiwiYnRuIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJNeUJ1eUxlc3Nvbkxpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibmFtZSIsImxlc3Nvbm5hbWUiLCJwbGFjZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwiY2xhc3NlcyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUdDLHVFQUFVLENBQUM7QUFDNUJDLE1BQUksRUFBQztBQUNEQyxVQUFNLEVBQUU7QUFEUCxHQUR1QjtBQUk1QkMsUUFBTSxFQUFFO0FBQ0pDLGFBQVMsRUFBRTtBQURQLEdBSm9CO0FBTzVCQyxLQUFHLEVBQUU7QUFDREMsbUJBQWUsRUFBRSxNQURoQjtBQUVEQyxTQUFLLEVBQUM7QUFGTDtBQVB1QixDQUFE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LFVBRE47QUFVRDs7R0F0RFFILGU7O0tBQUFBLGU7QUF3RFRBLGVBQWUsR0FBR3NDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J2QyxlQUF4QixDQUFsQjtBQUNlQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBhZ2UuYTc0Y2VjZDYzOTZmNjgyZTcwYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v5Z+65pys55qE44Gr44GvPExlc3Nvbkxpc3QvPuOBqOWQjOOBmOOBquOBruOBp+OBneOBoeOCieOCkuWPgueFp1xyXG4vLy53aGVyZeOBp+ODrOODg+OCueODs+izvOWFpeiAheOBqFJlZHV444GuZW1haWzjgYzkuIDoh7TjgZnjgovjg4fjg7zjgr/jgpLlj4LnhadcclxuXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IE15TGVzc29uIGZyb20gXCIuL3BhcnRzL015TGVzc29uXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vLi4vTGliL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcclxuXHJcblxyXG5jb25zdCBteWxlc3Nvbmxpc3QgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpc3Q6e1xyXG4gICAgICAgIG1hcmdpbjogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIGFkZGJ0bjoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0QThcIixcclxuICAgICAgICBjb2xvcjpcIndoaXRlXCIsXHJcbiAgICB9LFxyXG4gICAgfVxyXG4pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE15QnV5TGVzc29uTGlzdCAocHJvcHMpe1xyXG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShcIm5vIGl0ZW1cIik7XHJcblxyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBbXTtcclxuICAgIGNvbnN0IGxlc3NvbmlkID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pdGVtcz1bXTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuXHJcbiAgICBcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLndoZXJlKFwiYnV5ZXJpZFwiLFwiPT1cIixlbWFpbCkuZ2V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgIGxlc3NvbmRhdGEudW5zaGlmdChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgIGxlc3NvbmlkLnVuc2hpZnQoZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gbGVzc29uaWQpe1xyXG4gICAgICAgIGxldCBpZCA9IGxlc3NvbmlkW2ldO1xyXG4gICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wbGFjZTtcclxuICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGltZTtcclxuICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnByaWNlO1xyXG4gICAgICAgIGxlc3Nvbml0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8TXlMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGl0ZW1zID09XCJubyBpdGVtXCIpe1xyXG4gICAgZ2V0RmlyZURhdGEoKTtcclxuICB9XHJcblxyXG5jb25zdCBjbGFzc2VzICA9IG15bGVzc29ubGlzdCgpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBiZ2NvbG9yPVwiIzRBOFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgcD17MX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuizvOWFpeOBl+OBn+ODrOODg+OCueODszwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpdGVtc31cclxuICAgICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5NeUJ1eUxlc3Nvbkxpc3QgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNeUJ1eUxlc3Nvbkxpc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBNeUJ1eUxlc3Nvbkxpc3RcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=