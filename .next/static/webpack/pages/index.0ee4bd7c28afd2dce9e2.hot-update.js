webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MyLesson.js":
/*!********************************!*\
  !*** ./components/MyLesson.js ***!
  \********************************/
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
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MyLesson.js";






function Lesson(props) {
  var mylessonlist = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
    lessonitem: {
      margin: '30px 30px 30px 30px'
    },
    addbtn: {
      textAlign: 'center'
    },
    messagebtn: {
      backgroundColor: "#DDD",
      color: "black"
    }
  });
  var classes = mylessonlist();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      divider: true,
      className: classes.lessonitem,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
        primary: "".concat(props.name, "   in  ").concat(props.place)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: "/message/".concat(props.lessonid),
        href: "/message/[lessonid]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          size: "large",
          className: classes.messagebtn,
          onClick: props.onClick,
          children: "\u53D6\u5F15\u30E1\u30C3\u30BB\u30FC\u30B8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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
    backgroundColor: "#5FA",
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
          children: "My\u30EC\u30C3\u30B9\u30F3\u5C65\u6B74"
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

/***/ }),

/***/ "./componentsUi/MyLessonListUi.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MyLessonList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLessonList */ "./components/MyLessonList.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Account */ "./components/Account.js");


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\pages\\index.js",
    _this = undefined;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8",
    title: "Top page.",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyLessonList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "\u521D\u5FC3\u8005\u30EC\u30C3\u30B9\u30F3\uFF01",
      place: "\u57FC\u7389\u5927\u5B66"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
});

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

/***/ }),

/***/ "./static/address_lib.js":
/*!*******************************!*\
  !*** ./static/address_lib.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");



//encode,decode処理
//deepcopyはたぶん使わないやつ
var Lib = /*#__PURE__*/function () {
  function Lib() {
    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lib);
  }

  Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lib, null, [{
    key: "deepcopy",
    value: function deepcopy(val) {
      return JSON.parse(JSON.stringify(val));
    }
  }, {
    key: "encodeEmail",
    value: function encodeEmail(val) {
      return val.split(".").join("*");
    }
  }, {
    key: "decodeEmail",
    value: function decodeEmail(val) {
      return val.split("*").join(".");
    }
  }]);

  return Lib;
}();

/* harmony default export */ __webpack_exports__["default"] = (Lib);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zdGF0aWMvYWRkcmVzc19saWIuanMiXSwibmFtZXMiOlsiTGVzc29uIiwicHJvcHMiLCJteWxlc3Nvbmxpc3QiLCJtYWtlU3R5bGVzIiwibGVzc29uaXRlbSIsIm1hcmdpbiIsImFkZGJ0biIsInRleHRBbGlnbiIsIm1lc3NhZ2VidG4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNsYXNzZXMiLCJuYW1lIiwicGxhY2UiLCJsZXNzb25pZCIsIm9uQ2xpY2siLCJsaXN0IiwiYnRuIiwiTXlMZXNzb25MaXN0IiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImxlc3Nvbml0ZW1zIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJkYXRhIiwiaWQiLCJpIiwibGVzc29ubmFtZSIsImxlc3NvbnBsYWNlIiwidGltZSIsImxlc3NvbnRpbWUiLCJ0ZXh0IiwibGVzc29udGV4dCIsInByaWNlIiwibGVzc29ucHJpY2UiLCJwdXNoIiwiY29ubmVjdCIsInN0YXRlIiwidmFsIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF1QjtBQUVwQyxNQUFNQyxZQUFZLEdB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QUMsV0FBOUI7QUFBQSwyQkFDRSxxRUFBQyxnRUFBRDtBQUFjLFVBQUksRUFBQyxrREFBbkI7QUFBOEIsV0FBSyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0lBR01XLEc7Ozs7Ozs7NkJBQ1l3QixHLEVBQUk7QUFDbEIsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxHQUFmLENBQVgsQ0FBUDtBQUNEOzs7Z0NBRWtCQSxHLEVBQUk7QUFDckIsYUFBT0EsR0FBRyxDQUFDSSxLQUFKLENBQVUsR0FBVixFQUFlQyxJQUFmLENBQW9CLEdBQXBCLENBQVA7QUFDRDs7O2dDQUNrQkwsRyxFQUFJO0FBQ3JCLGFBQU9BLEdBQUcsQ0FBQ0ksS0FBSixDQUFVLEdBQVYsRUFBZUMsSUFBZixDQUFvQixHQUFwQixDQUFQO0FBQ0Q7Ozs7OztBQUdZN0Isa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVlNGJkN2MyOGFmZDJkY2U5ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVzc29uIChwcm9wcyl7XHJcblxyXG4gIGNvbnN0IG15bGVzc29ubGlzdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGVzc29uaXRlbTp7XHJcbiAgICAgICAgbWFyZ2luOiAnMzBweCAzMHB4IDMwcHggMzBweCcsXHJcbiAgICB9LFxyXG4gICAgYWRkYnRuOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNERERcIixcclxuICAgICAgICBjb2xvcjpcImJsYWNrXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzICA9IG15bGVzc29ubGlzdCgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGlzdEl0ZW0gZGl2aWRlcj17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlc3Nvbml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgICBwcmltYXJ5PXtgJHtwcm9wcy5uYW1lfSAgIGluICAke3Byb3BzLnBsYWNlfWB9Lz5cclxuICAgICAgICAgICAgPExpbmsgYXM9e2AvbWVzc2FnZS8ke3Byb3BzLmxlc3NvbmlkfWB9XHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9tZXNzYWdlL1tsZXNzb25pZF1cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VidG59IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PuWPluW8leODoeODg+OCu+ODvOOCuDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IFxyXG4iLCIvL+WfuuacrOeahOOBq+OBrzxMZXNzb25MaXN0Lz7jgajlkIzjgZjjgarjga7jgafjgZ3jgaHjgonjgpLlj4LnhadcclxuLy8ud2hlcmXjgafjg6zjg4Pjgrnjg7PkvZzmiJDogIXjgahSZWR1eOOBrmVtYWls44GM5LiA6Ie044GZ44KL44OH44O844K/44KS5Y+C54WnXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBNeUxlc3NvbiBmcm9tIFwiLi9NeUxlc3NvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcblxyXG5cclxuY29uc3QgbXlsZXNzb25saXN0ID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaXN0OntcclxuICAgICAgICBtYXJnaW46ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICBhZGRidG46IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJ0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNUZBXCIsXHJcbiAgICAgICAgY29sb3I6XCJ3aGl0ZVwiLFxyXG4gICAgfSxcclxuICAgIH1cclxuKTtcclxuXHJcblxyXG5mdW5jdGlvbiBNeUxlc3Nvbkxpc3QgKHByb3BzKXtcclxuICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJubyBpdGVtXCIpO1xyXG5cclxuICBjb25zdCBnZXRGaXJlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBsZXNzb25kYXRhID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pZCA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaXRlbXM9W107XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS53aGVyZShcImNyZWF0ZXJpZFwiLFwiPT1cIixlbWFpbCkuZ2V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgIGxlc3NvbmRhdGEudW5zaGlmdChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgIGxlc3NvbmlkLnVuc2hpZnQoZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gbGVzc29uaWQpe1xyXG4gICAgICAgIGxldCBpZCA9IGxlc3NvbmlkW2ldO1xyXG4gICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wbGFjZTtcclxuICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGltZTtcclxuICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnByaWNlO1xyXG4gICAgICAgIGxlc3Nvbml0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8TXlMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGl0ZW1zID09XCJubyBpdGVtXCIpe1xyXG4gICAgZ2V0RmlyZURhdGEoKTtcclxuICB9XHJcblxyXG5jb25zdCBjbGFzc2VzICA9IG15bGVzc29ubGlzdCgpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBiZ2NvbG9yPVwiIzVGQVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgcD17MX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPk1544Os44OD44K544Oz5bGl5q20PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRidG59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sZXNzb25fYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBzdGFydEljb249ezxJY29uPmFkZF9jaXJjbGU8L0ljb24+fSBjbGFzc05hbWU9e2NsYXNzZXMuYnRufT7jg6zjg4Pjgrnjg7Pov73liqA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0RmlyZURhdGF9PuaknOiovDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5NeUxlc3Nvbkxpc3QgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNeUxlc3Nvbkxpc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBNeUxlc3Nvbkxpc3Q7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBMZXNzb25MaXN0VWkgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMZXNzb25MaXN0XCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+KFxyXG4gIDxMYXlvdXQgaGVhZGVyPVwi44OI44OD44OX44Oa44O844K4XCIgdGl0bGU9XCJUb3AgcGFnZS5cIj5cclxuICAgIDxMZXNzb25MaXN0VWkgbmFtZT1cIuWIneW/g+iAheODrOODg+OCueODs++8gVwiIHBsYWNlPVwi5Z+8546J5aSn5a2mXCIvPlxyXG4gIDwvTGF5b3V0PlxyXG4pOyIsIi8vZW5jb2RlLGRlY29kZeWHpueQhlxyXG4vL2RlZXBjb3B544Gv44Gf44G244KT5L2/44KP44Gq44GE44KE44GkXHJcblxyXG5cclxuY2xhc3MgTGlie1xyXG4gIHN0YXRpYyBkZWVwY29weSh2YWwpe1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZW5jb2RlRW1haWwodmFsKXtcclxuICAgIHJldHVybiB2YWwuc3BsaXQoXCIuXCIpLmpvaW4oXCIqXCIpO1xyXG4gIH1cclxuICBzdGF0aWMgZGVjb2RlRW1haWwodmFsKXtcclxuICAgIHJldHVybiB2YWwuc3BsaXQoXCIqXCIpLmpvaW4oXCIuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGliOyJdLCJzb3VyY2VSb290IjoiIn0=