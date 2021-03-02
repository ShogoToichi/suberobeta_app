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

              if (!props.login) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
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
                    columnNumber: 13
                  }, this));
                }

                setItems(lessonitems);
              });

            case 8:
              _context.next = 11;
              break;

            case 10:
              setItems("購入済みのレッスンはありません");

            case 11:
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

  if (items == "noitem") {
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
          lineNumber: 86,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), items]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teXBhZ2UvTXlCdXlMZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbIm15bGVzc29ubGlzdCIsIm1ha2VTdHlsZXMiLCJsaXN0IiwibWFyZ2luIiwiYWRkYnRuIiwidGV4dEFsaWduIiwiYnRuIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJNeUJ1eUxlc3Nvbkxpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImxlc3NvbmRhdGEiLCJsZXNzb25pZCIsImxlc3Nvbml0ZW1zIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImxvZ2luIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwidW5zaGlmdCIsImRhdGEiLCJpZCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjbGFzc2VzIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBR0MsdUVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFDO0FBQ0RDLFVBQU0sRUFBRTtBQURQLEdBRHVCO0FBSTVCQyxRQUFNLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBRFAsR0FKb0I7QUFPNUJDLEtBQUcsRUFBRTtBQUNEQyxtQkFBZSxFQUFFLE1BRGhCO0FBRURDLFNBQUssRUFBQztBQUZMO0FBUHVCLENBQUQsQ0FBL0I7O0FBZUEsU0FBU0MsZUFBVCxDQUEwQkMsS0FBMUIsRUFBZ0M7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxTQUFELENBREg7QUFBQSxNQUN2QkMsS0FEdUI7QUFBQSxNQUNqQkMsUUFEaUI7O0FBRzlCLE1BQU1DLFdBQVc7QUFBQSxnV0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsZ0JBRFcsR0FDTkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURNO0FBRVhDLHdCQUZXLEdBRUUsRUFGRjtBQUdYQyxzQkFIVyxHQUdBLEVBSEE7QUFJWEMseUJBSlcsR0FJQyxFQUpEO0FBS1hDLG1CQUxXLEdBS0hDLHdEQUFHLENBQUNDLFdBQUosQ0FBZ0JiLEtBQUssQ0FBQ1csS0FBdEIsQ0FMRzs7QUFBQSxtQkFPZFgsS0FBSyxDQUFDYyxLQVBRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBUVRULEVBQUUsQ0FBQ1UsVUFBSCxDQUFjLFNBQWQsRUFBeUJDLEtBQXpCLENBQStCLFNBQS9CLEVBQXlDLElBQXpDLEVBQThDTCxLQUE5QyxFQUFxRE0sR0FBckQsR0FDTEMsSUFESyxDQUNBLFVBQVNDLGFBQVQsRUFBdUI7QUFDM0JBLDZCQUFhLENBQUNDLE9BQWQsQ0FBc0IsVUFBU0MsR0FBVCxFQUFhO0FBQy9CYiw0QkFBVSxDQUFDYyxPQUFYLENBQW1CRCxHQUFHLENBQUNFLElBQUosRUFBbkI7QUFDQWQsMEJBQVEsQ0FBQ2EsT0FBVCxDQUFpQkQsR0FBRyxDQUFDRyxFQUFyQjtBQUNILGlCQUhEOztBQUlBLHFCQUFLLElBQUlDLENBQVQsSUFBY2hCLFFBQWQsRUFBdUI7QUFDckIsc0JBQUllLEVBQUUsR0FBR2YsUUFBUSxDQUFDZ0IsQ0FBRCxDQUFqQjtBQUNBLHNCQUFJQyxJQUFJLEdBQUVsQixVQUFVLENBQUNpQixDQUFELENBQVYsQ0FBY0UsVUFBeEI7QUFDQSxzQkFBSUMsS0FBSyxHQUFHcEIsVUFBVSxDQUFDaUIsQ0FBRCxDQUFWLENBQWNJLFdBQTFCO0FBQ0Esc0JBQUlDLElBQUksR0FBR3RCLFVBQVUsQ0FBQ2lCLENBQUQsQ0FBVixDQUFjTSxVQUF6QjtBQUNBLHNCQUFJQyxJQUFJLEdBQUd4QixVQUFVLENBQUNpQixDQUFELENBQVYsQ0FBY1EsVUFBekI7QUFDQSxzQkFBSUMsS0FBSyxHQUFHMUIsVUFBVSxDQUFDaUIsQ0FBRCxDQUFWLENBQWNVLFdBQTFCO0FBQ0F6Qiw2QkFBVyxDQUFDMEIsSUFBWixlQUNFLHFFQUFDLHVEQUFEO0FBQVUsNEJBQVEsRUFBRVosRUFBcEI7QUFDUSx3QkFBSSxFQUFFRSxJQURkO0FBRVEseUJBQUssRUFBRUUsS0FGZjtBQUdRLHdCQUFJLEVBQUVFLElBSGQ7QUFJUSx3QkFBSSxFQUFFRSxJQUpkO0FBS1EseUJBQUssRUFBRUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGO0FBU0Q7O0FBQ0QvQix3QkFBUSxDQUFDTyxXQUFELENBQVI7QUFDRCxlQXhCSyxDQVJTOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW1DZlAsc0JBQVEsQ0FBQyxpQkFBRCxDQUFSOztBQW5DZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFYQyxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQXVDQSxNQUFHRixLQUFLLElBQUcsUUFBWCxFQUFvQjtBQUNsQkUsZUFBVztBQUNaOztBQUVILE1BQU1pQyxPQUFPLEdBQUkvQyxZQUFZLEVBQTdCO0FBRUUsc0JBQ007QUFBSyxhQUFTLEVBQUUrQyxPQUFPLENBQUM3QyxJQUF4QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFNkMsT0FBTyxDQUFDN0MsSUFBeEI7QUFBQSw2QkFDQSxxRUFBQyw4REFBRDtBQUFLLGFBQUssRUFBQyxPQUFYO0FBQW1CLGVBQU8sRUFBQyxNQUEzQjtBQUFrQyxrQkFBVSxFQUFDLE1BQTdDO0FBQW9ELFNBQUMsRUFBRSxDQUF2RDtBQUFBLCtCQUNBLHFFQUFDLHFFQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFNT1UsS0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQVVEOztHQTFEUUgsZTs7S0FBQUEsZTtBQTREVEEsZUFBZSxHQUFHdUMsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnhDLGVBQXhCLENBQWxCO0FBQ2VBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215cGFnZS41YWQ5MjFiMmFiZTYwYjNhYTRhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/ln7rmnKznmoTjgavjga88TGVzc29uTGlzdC8+44Go5ZCM44GY44Gq44Gu44Gn44Gd44Gh44KJ44KS5Y+C54WnXHJcbi8vLndoZXJl44Gn44Os44OD44K544Oz6LO85YWl6ICF44GoUmVkdXjjga5lbWFpbOOBjOS4gOiHtOOBmeOCi+ODh+ODvOOCv+OCkuWPgueFp1xyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTXlMZXNzb24gZnJvbSBcIi4vcGFydHMvTXlMZXNzb25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9MaWIvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xyXG5cclxuXHJcbmNvbnN0IG15bGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGlzdDp7XHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgYWRkYnRuOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRBOFwiLFxyXG4gICAgICAgIGNvbG9yOlwid2hpdGVcIixcclxuICAgIH0sXHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZnVuY3Rpb24gTXlCdXlMZXNzb25MaXN0IChwcm9wcyl7XHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zPVtdO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG5cclxuICAgIGlmKHByb3BzLmxvZ2luKXtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikud2hlcmUoXCJidXllcmlkXCIsXCI9PVwiLGVtYWlsKS5nZXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgICAgbGVzc29uZGF0YS51bnNoaWZ0KGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICBsZXNzb25pZC51bnNoaWZ0KGRvYy5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBsZXNzb25pZCl7XHJcbiAgICAgICAgICBsZXQgaWQgPSBsZXNzb25pZFtpXTtcclxuICAgICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgICBsZXQgcGxhY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICAgIGxldCBwcmljZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucHJpY2U7XHJcbiAgICAgICAgICBsZXNzb25pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICA8TXlMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRJdGVtcyhcIuizvOWFpea4iOOBv+OBruODrOODg+OCueODs+OBr+OBguOCiuOBvuOBm+OCk1wiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoaXRlbXMgPT1cIm5vaXRlbVwiKXtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuY29uc3QgY2xhc3NlcyAgPSBteWxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCIgYmdjb2xvcj1cIiM0QThcIiBmb250V2VpZ2h0PVwiYm9sZFwiIHA9ezF9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7os7zlhaXjgZfjgZ/jg6zjg4Pjgrnjg7M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTXlCdXlMZXNzb25MaXN0ID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTXlCdXlMZXNzb25MaXN0KTtcclxuZXhwb3J0IGRlZmF1bHQgTXlCdXlMZXNzb25MaXN0XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9