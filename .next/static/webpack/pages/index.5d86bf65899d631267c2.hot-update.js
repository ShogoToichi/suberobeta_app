webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MyLessonList.js":
/*!************************************!*\
  !*** ./components/MyLessonList.js ***!
  \************************************/
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
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _MyLesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyLesson */ "./components/MyLesson.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MyLessonList.js",
    _s = $RefreshSig$();

//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照













var mylessonlist = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  list: {
    margin: '20px'
  },
  addbtn: {
    textAlign: 'center'
  },
  btn: {
    backgroundColor: "#0F8",
    color: "white"
  }
});

function MyLessonList(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no item"),
      items = _useState[0],
      setItems = _useState[1];

  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, lessonid, lessonitems, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              lessondata = [];
              lessonid = [];
              lessonitems = [];
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_8__["default"].encodeEmail(props.email);
              _context.next = 7;
              return db.collection("lessons").where("createrid", "==", email).get().then(function (querySnapshot) {
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
                  lessonitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_MyLesson__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    lessonid: id,
                    name: name,
                    place: place,
                    time: time,
                    text: text,
                    price: price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
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
        bgcolor: "#5FA",
        fontWeight: "bold",
        p: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          variant: "h8",
          children: "\u6295\u7A3F\u3057\u305F\u30EC\u30C3\u30B9\u30F3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), items, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.addbtn,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/lesson_add",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
          variant: "contained",
          size: "large",
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
            children: "add_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 69
          }, this),
          className: classes.btn,
          children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        onClick: getFireData,
        children: "\u691C\u8A3C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

_s(MyLessonList, "EPa/xZ/h77DmlluBT9LjkTFWT9Q=");

_c = MyLessonList;
MyLessonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(MyLessonList);
/* harmony default export */ __webpack_exports__["default"] = (MyLessonList);

var _c;

$RefreshReg$(_c, "MyLessonList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsibXlsZXNzb25saXN0IiwibWFrZVN0eWxlcyIsImxpc3QiLCJtYXJnaW4iLCJhZGRidG4iLCJ0ZXh0QWxpZ24iLCJidG4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIk15TGVzc29uTGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImxlc3NvbmlkIiwibGVzc29uaXRlbXMiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwidW5zaGlmdCIsImRhdGEiLCJpZCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjbGFzc2VzIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBR0MsdUVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFDO0FBQ0RDLFVBQU0sRUFBRTtBQURQLEdBRHVCO0FBSTVCQyxRQUFNLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBRFAsR0FKb0I7QUFPNUJDLEtBQUcsRUFBRTtBQUNEQyxtQkFBZSxFQUFFLE1BRGhCO0FBRURDLFNBQUssRUFBQztBQUZMO0FBUHVCLENBQUQsQ0FBL0I7O0FBZUEs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O0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBLCtCQUNBLHFFQUFDLGlFQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixjQUFJLEVBQUMsT0FBakM7QUFBeUMsbUJBQVMsZUFBRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcEQ7QUFBNkUsbUJBQVMsRUFBRTBDLE9BQU8sQ0FBQ3hDLEdBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBUSxlQUFPLEVBQUVRLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE47QUFnQkQ7O0dBMURRTCxZOztLQUFBQSxZO0FBNERUQSxZQUFZLEdBQUdzQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCdkMsWUFBeEIsQ0FBZjtBQUNlQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDg2YmY2NTg5OWQ2MzEyNjdjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/ln7rmnKznmoTjgavjga88TGVzc29uTGlzdC8+44Go5ZCM44GY44Gq44Gu44Gn44Gd44Gh44KJ44KS5Y+C54WnXHJcbi8vLndoZXJl44Gn44Os44OD44K544Oz5L2c5oiQ6ICF44GoUmVkdXjjga5lbWFpbOOBjOS4gOiHtOOBmeOCi+ODh+ODvOOCv+OCkuWPgueFp1xyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTXlMZXNzb24gZnJvbSBcIi4vTXlMZXNzb25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xyXG5cclxuXHJcbmNvbnN0IG15bGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGlzdDp7XHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgYWRkYnRuOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBGOFwiLFxyXG4gICAgICAgIGNvbG9yOlwid2hpdGVcIixcclxuICAgIH0sXHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuZnVuY3Rpb24gTXlMZXNzb25MaXN0IChwcm9wcyl7XHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zPVtdO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikud2hlcmUoXCJjcmVhdGVyaWRcIixcIj09XCIsZW1haWwpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICBsZXNzb25pZC51bnNoaWZ0KGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBpIGluIGxlc3NvbmlkKXtcclxuICAgICAgICBsZXQgaWQgPSBsZXNzb25pZFtpXTtcclxuICAgICAgICBsZXQgbmFtZSA9bGVzc29uZGF0YVtpXS5sZXNzb25uYW1lO1xyXG4gICAgICAgIGxldCBwbGFjZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucGxhY2U7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgbGV0IHRleHQgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgbGV0IHByaWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wcmljZTtcclxuICAgICAgICBsZXNzb25pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPE15TGVzc29uIGxlc3NvbmlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4gICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0SXRlbXMobGVzc29uaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihpdGVtcyA9PVwibm8gaXRlbVwiKXtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuY29uc3QgY2xhc3NlcyAgPSBteWxlc3Nvbmxpc3QoKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCIgYmdjb2xvcj1cIiM1RkFcIiBmb250V2VpZ2h0PVwiYm9sZFwiIHA9ezF9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7mipXnqL/jgZfjgZ/jg6zjg4Pjgrnjg7M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZGJ0bn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xlc3Nvbl9hZGRcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJsYXJnZVwiIHN0YXJ0SWNvbj17PEljb24+YWRkX2NpcmNsZTwvSWNvbj59IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PuODrOODg+OCueODs+i/veWKoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRGaXJlRGF0YX0+5qSc6Ki8PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk15TGVzc29uTGlzdCA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE15TGVzc29uTGlzdCk7XHJcbmV4cG9ydCBkZWZhdWx0IE15TGVzc29uTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==