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
  }; //////////////////////ここまで画像取得/////////////////////////////  


  var submit = function submit() {
    doSubmit, onSubmit;
  };

  var classes = plofiledit();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.title,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h5",
        children: "\u30DE\u30A4\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.name,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h8",
        children: "\u30E6\u30FC\u30B6\u540D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 163,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.upload,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h8",
        children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        accept: "image/*",
        className: classes.input,
        id: "icon-button-file",
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: style,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GetImage__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
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
        lineNumber: 197,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
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
            onClick: submit,
            children: "\u5909\u66F4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.button,
            children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9Qcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiUHJvZmlsZUVkaXQiLCJwcm9wcyIsInN0eWxlIiwidXNlU3RhdGUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiZG9DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZG9DaGFuZ2VJbnRyb2R1Y3Rpb24iLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInByb2ZpbGUiLCJtZXJnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsImZpcmVCYXNlVXJsIiwic3VibWl0IiwiY2xhc3NlcyIsImlucHV0IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZV9lZGl0LmU2NDkzOTBjYzMyZTMyODk2Nzc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+imgeaknOiojueUu+WDj+OCouODg+ODl+ODreODvOODieWHpueQhlxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uLy4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHZXRJbWFnZSBmcm9tIFwiLi9HZXRJbWFnZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmEnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnXHJcblxyXG5cclxuXHJcbmNvbnN0IHBsb2ZpbGVkaXQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnXHJcbiAgICB9LFxyXG4gICAgcGxvZmlsZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbmdyb3VwOntcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjp7XHJcbiAgICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0RERCcsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgbWFyZ2luOlwiMHB4IDIwcHhcIixcclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQcm9maWxlRWRpdCAocHJvcHMpe1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjE1MHB4XCIsXHJcbiAgfTtcclxuLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0W2ludHJvZHVjdGlvbixzZXRJbnRyb2R1Y3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vaW5wdXTjgavlhaXlipvjgZXjgozjgZ/lh6bnkIbjgpJl44Gn5Y+X44GR5Y+W44Gj44Gm44K544OG44O844OI44Gr5YWl44KM44KL6Zai5pWwXHJcbiAgY29uc3QgZG9DaGFuZ2VOYW1lID0oZSk9PntcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZUludHJvZHVjdGlvbiA9KGUpPT57XHJcbiAgICBzZXRJbnRyb2R1Y3Rpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy/ov73liqDjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgolmaXJlYmFzZeOBq+OCueODhuODvOODiOOBruaDheWgseOCkuabuOOBjei+vOOCgOWHpueQhlxyXG4gIC8vUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbChpZCnjgpJlbmNvZGUoIC7ihpIqICnjgavjgZfjgablrprmlbDjgavku6PlhaVcclxuICBjb25zdCBkb1N1Ym1pdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGVtYWlsKS5zZXQoe1xyXG4gICAgICBwcm9maWxlOnsgbmFtZTpuYW1lICwgaW50cm9kdWN0aW9uOmludHJvZHVjdGlvblxyXG4gICAgICAgIH1cclxuICAgIH0se21lcmdlOiB0cnVlfSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAvL+OBhOOCjeOBhOOCjeeiuuiqjeOBq+WIqeeUqOOAgeOBhOOCieOBquOBhOWHpueQhlxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsaW50cm9kdWN0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICAvLy8vLy8vLy8vLy8vLy/nlLvlg4/lj5blvpflh6bnkIYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKGltYWdlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpbWFnZSA9PT0gXCJcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuODleOCoeOCpOODq+OBjOmBuOaKnuOBleOCjOOBpuOBhOOBvuOBm+OCk1wiKTtcclxuICAgIH1cclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieWHpueQhlxyXG4gICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGAvcHJvZmlsZWltYWdlcy8ke2ltYWdlLm5hbWV9YCkucHV0KGltYWdlKTtcclxuICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb21wbGV0ZVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSBzbmFwc2hvdCA9PiB7XHJcbiAgICAvLyDpgLLooYzkuK3jga5zbmFwc2hvdOOCkuW+l+OCi1xyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ44Gu6YCy6KGM5bqm44KS6KGo56S6XHJcbiAgICBjb25zdCBwZXJjZW50ID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnQgKyBcIiUgZG9uZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcclxuICB9O1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgLy8g44Ko44Op44O844OP44Oz44OJ44Oq44Oz44KwXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfTtcclxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIC8vIOWujOS6huW+jOOBruWHpueQhlxyXG4gICAgLy8g55S75YOP6KGo56S644Gu44Gf44KB44CB44Ki44OD44OX44Ot44O844OJ44GX44Gf55S75YOP44GuVVJM44KS5Y+W5b6XXHJcbiAgICBzdG9yYWdlXHJcbiAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgLmNoaWxkKGltYWdlLm5hbWUpXHJcbiAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAudGhlbihmaXJlQmFzZVVybCA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgIC8vIOWPluW+l+OBl+OBn+eUu+WDj+OBruWQjeWJjeOCkmZpcmViYXNl44Gr5L+d5a2YXHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KHtcclxuICAgICAgICAgIFwiaW1hZ2V1cmxcIjpmaXJlQmFzZVVybCxcclxuICAgICAgICB9XHJcbiAgICAgICAgLHttZXJnZSA6IHRydWV9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaXJlQmFzZVVybCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8v44GT44GT44G+44Gn55S75YOP5Y+W5b6XLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIFxyXG5cclxuY29uc3Qgc3VibWl0ID0gKCgpPT57XHJcbiAgZG9TdWJtaXQsXHJcbiAgb25TdWJtaXRcclxufSlcclxuXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBwbG9maWxlZGl0KCk7XHJcbiAgXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+44Oe44Kk44OX44Ot44OV44Kj44O844Or57eo6ZuGPC9UeXBvZ3JhcGh5PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7jg6bjg7zjgrblkI08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuODpuODvOOCtuWQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVwbG9hZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg4XCI+44OX44Ot44OV44Kj44O844Or55S75YOP44Gu44Ki44OD44OX44Ot44O844OJPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYWNjZXB0PVwiaW1hZ2UvKlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0gaWQ9XCJpY29uLWJ1dHRvbi1maWxlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbnsvKiDkvb/nlKjkuojlrpogKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgPEdldEltYWdlLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wbG9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLoh6rlt7HntLnku4vmlodcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RvQ2hhbmdlSW50cm9kdWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBkaXNhYmxlRWxldmF0aW9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17c3VibWl0fT7lpInmm7Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+44Kt44Oj44Oz44K744OrPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuIFxyXG4pO31cclxuXHJcblByb2ZpbGVFZGl0ID1jb25uZWN0KChzdGF0ZSk9PnN0YXRlKShQcm9maWxlRWRpdCk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVFZGl0O1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9