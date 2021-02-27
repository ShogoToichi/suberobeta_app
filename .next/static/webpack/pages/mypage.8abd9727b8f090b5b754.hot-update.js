webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/mypage/MyProfile.js":
/*!****************************************!*\
  !*** ./components/mypage/MyProfile.js ***!
  \****************************************/
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\mypage\\MyProfile.js",
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

  function conso() {
    console.log(imageurl);
  }

  var classes = myprofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: conso,
      children: "\u691C\u8A3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        height: "40px",
        widdth: widdth
      },
      src: imageurl,
      alt: "no data"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
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
            lineNumber: 76,
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
              lineNumber: 81,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this),
          title: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
            lineNumber: 88,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              marginTop: '10px'
            },
            variant: "h5",
            children: introduction
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teXBhZ2UvTXlQcm9maWxlLmpzIl0sIm5hbWVzIjpbIm15cHJvZmlsZSIsIm1ha2VTdHlsZXMiLCJjYXJkIiwibWFyZ2luVG9wIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0aXRsZSIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJCb3R0b20iLCJNeVByb2ZpbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJpbnRyb2R1Y3Rpb24iLCJzZXRJbnRyb2R1Y3Rpb24iLCJpbWFnZXVybCIsInNldEltYWdldXJsIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwicHJvZmlsZWRhdGEiLCJkYXRhIiwicHJvZmlsZSIsImNvbnNvIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJoZWlnaHQiLCJ3aWRkdGgiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiYXZhdGFyIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxhQUFTLEVBQUU7QUFEVCxHQURtQjtBQUl6QkMsUUFBTSxFQUFFO0FBQ0pDLG1CQUFlLEVBQUUsU0FEYjtBQUVKQyxTQUFLLEVBQUU7QUFGSCxHQUppQjtBQVF6QkMsT0FBSyxFQUFDO0FBQ0ZDLGlCQUFhLEVBQUMsTUFEWjtBQUVGQyxnQkFBWSxFQUFDO0FBRlg7QUFSbUIsQ0FBRCxDQUE1Qjs7QUFn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QUFBQTtBQUFBLGtCQU5KO0FBVUEsZUFBSyxFQUFFUztBQVZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFjSSxxRUFBQyxzRUFBRDtBQUFBLGtDQUNJLHFFQUFDLG9FQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDMEIsd0JBQVUsRUFBRSxNQUFiO0FBQXFCQyxvQkFBTSxFQUFFLEtBQTdCO0FBQXFDL0IsMEJBQVksRUFBRSxnQkFBbkQ7QUFBcUVELDJCQUFhLEVBQUU7QUFBcEYsYUFBbkI7QUFBK0csbUJBQU8sRUFBQyxJQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLHFFQUFDLG9FQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDTCx1QkFBUyxFQUFFO0FBQVosYUFBbkI7QUFBeUMsbUJBQU8sRUFBQyxJQUFqRDtBQUFBLHNCQUNLWTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQThCRDs7R0E1RFVMLFM7O0tBQUFBLFM7QUErRFhBLFNBQVMsR0FBRWdDLDJEQUFPLENBQUUsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFGLENBQVAsQ0FBeUJqQyxTQUF6QixDQUFYO0FBQ2VBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215cGFnZS44YWJkOTcyN2I4ZjA5MGI1Yjc1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/opoHov73liqAgOiDnlLvlg4/jgqLjg4Pjg5fjg63jg7zjg4lcclxuXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCB7IFBpbkRyb3BTaGFycCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcblxyXG5cclxuY29uc3QgbXlwcm9maWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U3RTdFNycsXHJcbiAgICAgICAgY29sb3I6ICdiYWxjaycsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIHBhZGRpbmdCb3R0b206XCIxNnB4XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOlwic29saWQgNHB4ICNERERcIixcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gTXlQcm9maWxlIChwcm9wcyl7XHJcbiAgICAvL+OCueODhuODvOODiOOBruioreWumlxyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoXCJubyBkYXRhXCIpO1xyXG4gIGNvbnN0IFtpbnRyb2R1Y3Rpb24sc2V0SW50cm9kdWN0aW9uXSA9IHVzZVN0YXRlKFwibm8gZGF0YVwiKTtcclxuICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIC8vZW1haWzjgatSZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWls44KS5Y+W5b6XXHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbCk7XHJcbiAgICAvL2VtYWls44GnZmlyZWJhc2XjgpLlj4LnhadcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkuWumuaVsOOBq+WFpeOCjOOBpuOBi+OCieOAgeOCueODhuODvOODiOOBq+WFpeOCjOOCi1xyXG4gICAgICBjb25zdCBwcm9maWxlZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIHNldE5hbWUocHJvZmlsZWRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgc2V0SW50cm9kdWN0aW9uKHByb2ZpbGVkYXRhLnByb2ZpbGUuaW50cm9kdWN0aW9uKTtcclxuICAgICAgc2V0SW1hZ2V1cmwocHJvZmlsZWRhdGEuaW1hZ2V1cmwpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaWYobmFtZSA9PSBcIm5vIGRhdGFcIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuICBcclxuZnVuY3Rpb24gY29uc28oKXtcclxuICBjb25zb2xlLmxvZyhpbWFnZXVybCk7XHJcbn1cclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IG15cHJvZmlsZSgpO1xyXG4gIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25zb30+5qSc6Ki8PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6XCI0MHB4XCIgLCB3aWRkdGh9fXNyYz17aW1hZ2V1cmx9IGFsdD1cIm5vIGRhdGFcIi8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLG1hcmdpbjogJzE1cHgnfX0gdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5NeSBwYWdlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwicmVjaXBlXCIgc3JjPXtwcm9wcy5pbWFnZXVybH0gY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVfZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT7jg5fjg63jg5XjgqPjg7zjg6vlpInmm7Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgbWFyZ2luOiAnNXB4JywgIGJvcmRlckJvdHRvbTogXCJzb2xpZCAxcHggI0JCQlwiICxwYWRkaW5nQm90dG9tOiBcIjdweFwifX0gdmFyaWFudD1cImg1XCI+6Ieq5bex57S55LuLPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnIH19IHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ludHJvZHVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuTXlQcm9maWxlPSBjb25uZWN0ICgoc3RhdGUpPT5zdGF0ZSkoTXlQcm9maWxlKTtcclxuZXhwb3J0IGRlZmF1bHQgTXlQcm9maWxlO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==