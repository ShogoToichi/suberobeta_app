webpackHotUpdate_N_E("pages/profile_edit",{

/***/ "./components/profileedit/ProfileEdit.js":
/*!***********************************************!*\
  !*** ./components/profileedit/ProfileEdit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GetImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GetImage */ "./components/profileedit/GetImage.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\profileedit\\ProfileEdit.js",
    _s = $RefreshSig$();

//要検討画像アップロード処理















var plofiledit = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  title: {
    margin: '10px',
    fontWeight: 'bold'
  },
  name: {
    marginTop: '20px'
  },
  upload: {
    marginTop: '40px'
  },
  plofile: {
    marginTop: '40px'
  },
  buttongroup: {
    marginTop: '40px',
    textAlign: 'center'
  },
  button: {
    width: '200px',
    backgroundColor: '#DDD',
    color: 'black',
    margin: "0px 20px"
  }
});

function ProfileEdit(props) {
  _s();

  var style = {
    width: "50%",
    margin: "0 auto",
    marginTop: "150px"
  }; //使用するステートの設定(Hook)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      introduction = _useState2[0],
      setIntroduction = _useState2[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


  var doChangeName = function doChangeName(e) {
    setName(e.target.value);
  };

  var doChangeIntroduction = function doChangeIntroduction(e) {
    setIntroduction(e.target.value);
  }; //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入


  var doSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              _context.next = 4;
              return db.collection("users").doc(email).set({
                profile: {
                  name: name,
                  introduction: introduction
                }
              }, {
                merge: true
              }).then(function () {
                //いろいろ確認に利用、いらない処理
                console.log(name, introduction);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var classes = plofiledit();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.title,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h5",
        children: "\u30DE\u30A4\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.name,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h8",
        children: "\u30E6\u30FC\u30B6\u540D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "standard-textarea",
        label: "\u30E6\u30FC\u30B6\u540D",
        placeholder: "",
        multiline: true,
        maxWidth: true,
        onChange: doChangeName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.upload,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h8",
        children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GetImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.plofile,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "standard-textarea",
        label: "\u81EA\u5DF1\u7D39\u4ECB\u6587",
        placeholder: "",
        rows: 8,
        multiline: true,
        variant: "outlined",
        fullWidth: true,
        onChange: doChangeIntroduction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.buttongroup,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_16__["default"], {
        disableElevation: true,
        variant: "outlined",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.button,
            onClick: doSubmit,
            children: "\u5909\u66F4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.button,
            children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(ProfileEdit, "lliEKUGuxrkfXLvgTfckokmj3/g=");

_c = ProfileEdit;
ProfileEdit = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(ProfileEdit);
/* harmony default export */ __webpack_exports__["default"] = (ProfileEdit);

var _c;

$RefreshReg$(_c, "ProfileEdit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9Qcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiUHJvZmlsZUVkaXQiLCJwcm9wcyIsInN0eWxlIiwidXNlU3RhdGUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiZG9DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZG9DaGFuZ2VJbnRyb2R1Y3Rpb24iLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInByb2ZpbGUiLCJtZXJnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFVBQVUsR0FBR0MsdUVBQVUsQ0FBQztBQUMxQkMsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRSxNQURMO0FBRUhDLGNBQVUsRUFBRTtBQUZULEdBRG1CO0FBSzFCQyxNQUFJLEVBQUU7QUFDRkMsYUFBUyxFQUFFO0FBRFQsR0FMb0I7QUFRMUJDLFFBQU0sRUFBRTtBQUNKRCxhQUFTLEVBQUU7QUFEUCxHQVJrQjtBQVcxQkUsU0FBTyxFQUFFO0FBQ0xG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QTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREM7O0dBNUZNSSxXOztLQUFBQSxXO0FBOEZUQSxXQUFXLEdBQUU0QiwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCN0IsV0FBeEIsQ0FBYjtBQUNlQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlX2VkaXQuOGUzMDA2NDRjNmQ2ZDYyNjUyODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6KaB5qSc6KiO55S75YOP44Ki44OD44OX44Ot44O844OJ5Yem55CGXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdldEltYWdlIGZyb20gXCIuL0dldEltYWdlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuXHJcblxyXG5cclxuY29uc3QgcGxvZmlsZWRpdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCdcclxuICAgIH0sXHJcbiAgICBwbG9maWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCcsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uZ3JvdXA6e1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOntcclxuICAgICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREREJyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBtYXJnaW46XCIwcHggMjBweFwiLFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVFZGl0IChwcm9wcyl7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMTUwcHhcIixcclxuICB9O1xyXG4vL+S9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruioreWumihIb29rKVxyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3RbaW50cm9kdWN0aW9uLHNldEludHJvZHVjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9pbnB1dOOBq+WFpeWKm+OBleOCjOOBn+WHpueQhuOCkmXjgaflj5fjgZHlj5bjgaPjgabjgrnjg4bjg7zjg4jjgavlhaXjgozjgovplqLmlbBcclxuICBjb25zdCBkb0NoYW5nZU5hbWUgPShlKT0+e1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlSW50cm9kdWN0aW9uID0oZSk9PntcclxuICAgIHNldEludHJvZHVjdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvL+i/veWKoOODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiWZpcmViYXNl44Gr44K544OG44O844OI44Gu5oOF5aCx44KS5pu444GN6L6844KA5Yem55CGXHJcbiAgLy9SZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWlsKGlkKeOCkmVuY29kZSggLuKGkiogKeOBq+OBl+OBpuWumuaVsOOBq+S7o+WFpVxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbClcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLnNldCh7XHJcbiAgICAgIHByb2ZpbGU6eyBuYW1lOm5hbWUgLCBpbnRyb2R1Y3Rpb246aW50cm9kdWN0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgfSx7bWVyZ2U6IHRydWV9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8v44GE44KN44GE44KN56K66KqN44Gr5Yip55So44CB44GE44KJ44Gq44GE5Yem55CGXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSxpbnRyb2R1Y3Rpb24pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZWRpdCgpO1xyXG4gIFxyXG5cclxuXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPuODnuOCpOODl+ODreODleOCo+ODvOODq+e3qOmbhjwvVHlwb2dyYXBoeT4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg4XCI+44Om44O844K25ZCNPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6bjg7zjgrblkI1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51cGxvYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuODl+ODreODleOCo+ODvOODq+eUu+WDj+OBruOCouODg+ODl+ODreODvOODiTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdldEltYWdlIG5hbWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBsb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuiHquW3see0ueS7i+aWh1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VJbnRyb2R1Y3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25ncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGRpc2FibGVFbGV2YXRpb24gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXtkb1N1Ym1pdH0+5aSJ5pu0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PuOCreODo+ODs+OCu+ODqzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiBcclxuKTt9XHJcblxyXG5Qcm9maWxlRWRpdCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoUHJvZmlsZUVkaXQpO1xyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRWRpdDtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==