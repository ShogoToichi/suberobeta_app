webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/MyProfile.js":
/*!*********************************!*\
  !*** ./components/MyProfile.js ***!
  \*********************************/
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
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MyProfile.js",
    _s = $RefreshSig$();

//要追加 : 画像アップロード















var myprofile = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])({
  card: {
    marginTop: '20px'
  },
  button: {
    backgroundColor: '#E7E7E7',
    color: 'balck'
  },
  title: {
    paddingBottom: "16px",
    borderBottom: "solid 4px #DDD"
  }
});

function MyProfile(props) {
  _s();

  //ステートの設定
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no data"),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no data"),
      introduction = _useState2[0],
      setIntroduction = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      imageurl = _useState3[0],
      setImageurl = _useState3[1];

  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore(); //emailにReduxからユーザーのemailを取得

              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email); //emailでfirebaseを参照

              _context.next = 4;
              return db.collection("users").doc(email).get().then(function (doc) {
                //取得したデータを定数に入れてから、ステートに入れる
                var profiledata = doc.data();
                setName(profiledata.profile.name);
                setIntroduction(profiledata.profile.introduction);
                setImageurl(profiledata.imageurl);
              });

            case 4:
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

  if (name == "no data") {
    getFireData();
  }

  var classes = myprofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: conso,
      children: "\u691C\u8A3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("image", {
      src: imageurl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      style: {
        fontWeight: 'bold',
        margin: '15px'
      },
      variant: "h3",
      className: classes.title,
      children: "My page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.card,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["CardHeader"], {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
            "aria-label": "recipe",
            src: props.imageurl,
            className: classes.avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this),
          action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/profile_edit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
              variant: "outlined",
              size: "large",
              className: classes.button,
              children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u5909\u66F4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this),
          title: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              fontWeight: 'bold',
              margin: '5px',
              borderBottom: "solid 1px #BBB",
              paddingBottom: "7px"
            },
            variant: "h5",
            children: "\u81EA\u5DF1\u7D39\u4ECB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              marginTop: '10px'
            },
            variant: "h5",
            children: introduction
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

_s(MyProfile, "BDAlfeQTnfJjvNb5iosETph5vKo=");

_c = MyProfile;
MyProfile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(MyProfile);
/* harmony default export */ __webpack_exports__["default"] = (MyProfile);

var _c;

$RefreshReg$(_c, "MyProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVByb2ZpbGUuanMiXSwibmFtZXMiOlsibXlwcm9maWxlIiwibWFrZVN0eWxlcyIsImNhcmQiLCJtYXJnaW5Ub3AiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRpdGxlIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlckJvdHRvbSIsIk15UHJvZmlsZSIsInByb3BzIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImludHJvZHVjdGlvbiIsInNldEludHJvZHVjdGlvbiIsImltYWdldXJsIiwic2V0SW1hZ2V1cmwiLCJnZXRGaXJlRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJwcm9maWxlZGF0YSIsImRhdGEiLCJwcm9maWxlIiwiY2xhc3NlcyIsImNvbnNvIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImF2YXRhciIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsYUFBUyxFQUFFO0FBRFQsR0FEbUI7QUFJekJDLFFBQU0sRUFBRTtBQUNKQyxtQkFBZSxFQUFFLFNBRGI7QUFFSkMsU0FBSyxFQUFFO0FBRkgsR0FKaUI7QUFRekJDLE9BQUssRUFBQztBQUNGQyxpQkFBYSxFQUFDLE1BRFo7QUFFRkMsZ0JBQVksRUFBQztBQUZYO0FBUm1CLENBQUQsQ0FBNUI7O0FBZ0JFLFNBQVNDLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FB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M0IsMEJBQVksRUFBRSxnQkFBbkQ7QUFBcUVELDJCQUFhLEVBQUU7QUFBcEYsYUFBbkI7QUFBK0csbUJBQU8sRUFBQyxJQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLHFFQUFDLG9FQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDTCx1QkFBUyxFQUFFO0FBQVosYUFBbkI7QUFBeUMsbUJBQU8sRUFBQyxJQUFqRDtBQUFBLHNCQUNLWTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQThCRDs7R0F4RFVMLFM7O0tBQUFBLFM7QUEyRFhBLFNBQVMsR0FBRTRCLDJEQUFPLENBQUUsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFGLENBQVAsQ0FBeUI3QixTQUF6QixDQUFYO0FBQ2VBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215cGFnZS5lOGI2Mzc2ZDJmYWYxNjFkOTNiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/opoHov73liqAgOiDnlLvlg4/jgqLjg4Pjg5fjg63jg7zjg4lcclxuXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCB7IFBpbkRyb3BTaGFycCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuY29uc3QgbXlwcm9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U3RTdFNycsXHJcbiAgICAgICAgY29sb3I6ICdiYWxjaycsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIHBhZGRpbmdCb3R0b206XCIxNnB4XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOlwic29saWQgNHB4ICNERERcIixcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gTXlQcm9maWxlIChwcm9wcyl7XHJcbiAgICAvL+OCueODhuODvOODiOOBruioreWumlxyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoXCJubyBkYXRhXCIpO1xyXG4gIGNvbnN0IFtpbnRyb2R1Y3Rpb24sc2V0SW50cm9kdWN0aW9uXSA9IHVzZVN0YXRlKFwibm8gZGF0YVwiKTtcclxuICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIC8vZW1haWzjgatSZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWls44KS5Y+W5b6XXHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICAvL2VtYWls44GnZmlyZWJhc2XjgpLlj4LnhadcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkuWumuaVsOOBq+WFpeOCjOOBpuOBi+OCieOAgeOCueODhuODvOODiOOBq+WFpeOCjOOCi1xyXG4gICAgICBjb25zdCBwcm9maWxlZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIHNldE5hbWUocHJvZmlsZWRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgc2V0SW50cm9kdWN0aW9uKHByb2ZpbGVkYXRhLnByb2ZpbGUuaW50cm9kdWN0aW9uKTtcclxuICAgICAgc2V0SW1hZ2V1cmwocHJvZmlsZWRhdGEuaW1hZ2V1cmwpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaWYobmFtZSA9PSBcIm5vIGRhdGFcIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gbXlwcm9maWxlKCk7XHJcbiAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvbnNvfT7mpJzoqLw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz17aW1hZ2V1cmx9IGFsdD1cInVwbG9hZGVkXCIvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJyxtYXJnaW46ICcxNXB4J319IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+TXkgcGFnZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cInJlY2lwZVwiIHNyYz17cHJvcHMuaW1hZ2V1cmx9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlX2VkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+44OX44Ot44OV44Kj44O844Or5aSJ5pu0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbjogJzVweCcsICBib3JkZXJCb3R0b206IFwic29saWQgMXB4ICNCQkJcIiAscGFkZGluZ0JvdHRvbTogXCI3cHhcIn19IHZhcmlhbnQ9XCJoNVwiPuiHquW3see0ueS7izwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4JyB9fSB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnRyb2R1Y3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbk15UHJvZmlsZT0gY29ubmVjdCAoKHN0YXRlKT0+c3RhdGUpKE15UHJvZmlsZSk7XHJcbmV4cG9ydCBkZWZhdWx0IE15UHJvZmlsZTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=