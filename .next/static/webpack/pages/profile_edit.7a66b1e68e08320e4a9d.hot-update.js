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
  }(); ///////////////画像取得処理//////////////////////


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      image = _useState3[0],
      setImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      imageUrl = _useState4[0],
      setImageUrl = _useState4[1];

  function GetImage() {
    var handleImage = function handleImage(event) {
      var image = event.target.files[0];
      setImage(image);
    };

    var onSubmit = function onSubmit(event) {
      event.preventDefault();

      if (image === "") {
        console.log("ファイルが選択されていません");
      } // アップロード処理


      var uploadTask = storage.ref("/profileimages/".concat(image.name)).put(image);
      uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_4__["default"].storage.TaskEvent.STATE_CHANGED, next, error, complete);
    };

    var next = function next(snapshot) {
      // 進行中のsnapshotを得る
      // アップロードの進行度を表示
      var percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      console.log(percent + "% done");
      console.log(snapshot);
    };

    var error = function error(_error) {
      // エラーハンドリング
      console.log(_error);
    };

    var complete = function complete() {
      // 完了後の処理
      // 画像表示のため、アップロードした画像のURLを取得
      storage.ref("profileimages").child(image.name).getDownloadURL().then(function (fireBaseUrl) {
        setImageUrl(fireBaseUrl); // 取得した画像の名前をfirebaseに保存

        var db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
        var email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
        db.collection("users").doc(email).set({
          "imageurl": fireBaseUrl
        }, {
          merge: true
        }).then(function () {
          console.log(fireBaseUrl);
          console.log(imageUrl);
        });
      });
    };
  }

  var classes = plofiledit();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.title,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h5",
        children: "\u30DE\u30A4\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.name,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h8",
        children: "\u30E6\u30FC\u30B6\u540D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
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
        lineNumber: 154,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.upload,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h8",
        children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        accept: "image/*",
        className: classes.input,
        id: "icon-button-file",
        type: "file"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: style,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GetImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
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
        lineNumber: 188,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
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
            lineNumber: 203,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.button,
            children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }, this);
}

_s(ProfileEdit, "tZCDa3JL43NZ44zGWl7IHLHaX7s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9Qcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiUHJvZmlsZUVkaXQiLCJwcm9wcyIsInN0eWxlIiwidXNlU3RhdGUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiZG9DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZG9DaGFuZ2VJbnRyb2R1Y3Rpb24iLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInByb2ZpbGUiLCJtZXJnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJHZXRJbWFnZSIsImhhbmRsZUltYWdlIiwiZXZlbnQiLCJmaWxlcyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWRUYXNrIiwic3RvcmFnZSIsInJlZiIsInB1dCIsIm9uIiwiVGFza0V2ZW50IiwiU1RBVEVfQ0hBTkdFRCIsIm5leHQiLCJlcnJvciIsImNvbXBsZXRlIiwic25hcHNob3QiLCJwZXJjZW50IiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwiZmlyZUJhc2VVcmwiLCJjbGFzc2VzIiwiaW5wdXQiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsRUFIWjtBQUlBLFlBQUksRUFBRSxDQUpOO0FBS0EsaUJBQVMsTUFMVDtBQU1BLGVBQU8sRUFBQyxVQU5SO0FBT0EsaUJBQVMsTUFQVDtBQVFBLGdCQUFRLEVBQUVrQjtBQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENSLGVBcURRO0FBQUssZUFBUyxFQUFFMkMsT0FBTyxDQUFDNUQsV0FBeEI7QUFBQSw2QkFDUSxxRUFBQyxzRUFBRDtBQUFhLHdCQUFnQixNQUE3QjtBQUE4QixlQUFPLEVBQUMsVUFBdEM7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0oscUVBQUMsaUVBQUQ7QUFBUSxxQkFBUyxFQUFFNEQsT0FBTyxDQUFDMUQsTUFBM0I7QUFBbUMsbUJBQU8sRUFBRWdCLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDSixxRUFBQyxpRUFBRDtBQUFRLHFCQUFTLEVBQUUwQyxPQUFPLENBQUMxRCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtFQzs7R0FqS01JLFc7O0tBQUFBLFc7QUFtS1RBLFdBQVcsR0FBRXdELDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J6RCxXQUF4QixDQUFiO0FBQ2VBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVfZWRpdC43YTY2YjFlNjhlMDgzMjBlNGE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/opoHmpJzoqI7nlLvlg4/jgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIZcclxuXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR2V0SW1hZ2UgZnJvbSBcIi4vR2V0SW1hZ2VcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJ1xyXG5cclxuXHJcblxyXG5jb25zdCBwbG9maWxlZGl0ID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCdcclxuICAgIH0sXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4J1xyXG4gICAgfSxcclxuICAgIHBsb2ZpbGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICBidXR0b25ncm91cDp7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidXR0b246e1xyXG4gICAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEREQnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIG1hcmdpbjpcIjBweCAyMHB4XCIsXHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUVkaXQgKHByb3BzKXtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICB3aWR0aDogXCI1MCVcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIG1hcmdpblRvcDogXCIxNTBweFwiLFxyXG4gIH07XHJcbi8v5L2/55So44GZ44KL44K544OG44O844OI44Gu6Kit5a6aKEhvb2spXHJcbiAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdFtpbnRyb2R1Y3Rpb24sc2V0SW50cm9kdWN0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL2lucHV044Gr5YWl5Yqb44GV44KM44Gf5Yem55CG44KSZeOBp+WPl+OBkeWPluOBo+OBpuOCueODhuODvOODiOOBq+WFpeOCjOOCi+mWouaVsFxyXG4gIGNvbnN0IGRvQ2hhbmdlTmFtZSA9KGUpPT57XHJcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VJbnRyb2R1Y3Rpb24gPShlKT0+e1xyXG4gICAgc2V0SW50cm9kdWN0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8v6L+95Yqg44Oc44K/44Oz44KS5oq844GX44Gf44KJZmlyZWJhc2Xjgavjgrnjg4bjg7zjg4jjga7mg4XloLHjgpLmm7jjgY3ovrzjgoDlh6bnkIZcclxuICAvL1JlZHV444GL44KJ44Om44O844K244O844GuZW1haWwoaWQp44KSZW5jb2RlKCAu4oaSKiAp44Gr44GX44Gm5a6a5pWw44Gr5Luj5YWlXHJcbiAgY29uc3QgZG9TdWJtaXQgPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KHtcclxuICAgICAgcHJvZmlsZTp7IG5hbWU6bmFtZSAsIGludHJvZHVjdGlvbjppbnRyb2R1Y3Rpb25cclxuICAgICAgICB9XHJcbiAgICB9LHttZXJnZTogdHJ1ZX0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgLy/jgYTjgo3jgYTjgo3norroqo3jgavliKnnlKjjgIHjgYTjgonjgarjgYTlh6bnkIZcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLGludHJvZHVjdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLy8vLy8vLy8vLy8vLy8v55S75YOP5Y+W5b6X5Yem55CGLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbmZ1bmN0aW9uIEdldEltYWdlKCl7XHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKGltYWdlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpbWFnZSA9PT0gXCJcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuODleOCoeOCpOODq+OBjOmBuOaKnuOBleOCjOOBpuOBhOOBvuOBm+OCk1wiKTtcclxuICAgIH1cclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieWHpueQhlxyXG4gICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGAvcHJvZmlsZWltYWdlcy8ke2ltYWdlLm5hbWV9YCkucHV0KGltYWdlKTtcclxuICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb21wbGV0ZVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSBzbmFwc2hvdCA9PiB7XHJcbiAgICAvLyDpgLLooYzkuK3jga5zbmFwc2hvdOOCkuW+l+OCi1xyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ44Gu6YCy6KGM5bqm44KS6KGo56S6XHJcbiAgICBjb25zdCBwZXJjZW50ID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnQgKyBcIiUgZG9uZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcclxuICB9O1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgLy8g44Ko44Op44O844OP44Oz44OJ44Oq44Oz44KwXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfTtcclxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIC8vIOWujOS6huW+jOOBruWHpueQhlxyXG4gICAgLy8g55S75YOP6KGo56S644Gu44Gf44KB44CB44Ki44OD44OX44Ot44O844OJ44GX44Gf55S75YOP44GuVVJM44KS5Y+W5b6XXHJcbiAgICBzdG9yYWdlXHJcbiAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgLmNoaWxkKGltYWdlLm5hbWUpXHJcbiAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAudGhlbihmaXJlQmFzZVVybCA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgIC8vIOWPluW+l+OBl+OBn+eUu+WDj+OBruWQjeWJjeOCkmZpcmViYXNl44Gr5L+d5a2YXHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KHtcclxuICAgICAgICAgIFwiaW1hZ2V1cmxcIjpmaXJlQmFzZVVybCxcclxuICAgICAgICB9XHJcbiAgICAgICAgLHttZXJnZSA6IHRydWV9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaXJlQmFzZVVybCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBwbG9maWxlZGl0KCk7XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+44Oe44Kk44OX44Ot44OV44Kj44O844Or57eo6ZuGPC9UeXBvZ3JhcGh5PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7jg6bjg7zjgrblkI08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODpuODvOOCtuWQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXBsb2FkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7jg5fjg63jg5XjgqPjg7zjg6vnlLvlg4/jga7jgqLjg4Pjg5fjg63jg7zjg4k8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFjY2VwdD1cImltYWdlLypcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9IGlkPVwiaWNvbi1idXR0b24tZmlsZVwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbnsvKiDkvb/nlKjkuojlrpogKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgPEdldEltYWdlLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wbG9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLoh6rlt7HntLnku4vmlodcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlSW50cm9kdWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBkaXNhYmxlRWxldmF0aW9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17ZG9TdWJtaXR9PuWkieabtDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT7jgq3jg6Pjg7Pjgrvjg6s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gXHJcbik7fVxyXG5cclxuUHJvZmlsZUVkaXQgPWNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKFByb2ZpbGVFZGl0KTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUVkaXQ7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=