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


  var submit = function submit(event) {
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
        lineNumber: 189,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
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
            lineNumber: 204,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.button,
            children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9Qcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiUHJvZmlsZUVkaXQiLCJwcm9wcyIsInN0eWxlIiwidXNlU3RhdGUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiZG9DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZG9DaGFuZ2VJbnRyb2R1Y3Rpb24iLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInByb2ZpbGUiLCJtZXJnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsImZpcmVCYXNlVXJsIiwic3VibWl0IiwiY2xhc3NlcyIsImlucHV0IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU9BLGlCQUFTLE1BUFQ7QUFRQSxnQkFBUSxFQUFFa0I7QUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDUixlQTZDUTtBQUFLLGVBQVMsRUFBRTJDLE9BQU8sQ0FBQzVELFdBQXhCO0FBQUEsNkJBQ1EscUVBQUMsc0VBQUQ7QUFBYSx3QkFBZ0IsTUFBN0I7QUFBOEIsZUFBTyxFQUFDLFVBQXRDO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNKLHFFQUFDLGlFQUFEO0FBQVEscUJBQVMsRUFBRTRELE9BQU8sQ0FBQzFELE1BQTNCO0FBQW1DLG1CQUFPLEVBQUVnQixRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0oscUVBQUMsaUVBQUQ7QUFBUSxxQkFBUyxFQUFFMEMsT0FBTyxDQUFDMUQsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwREM7O0dBbEtNSSxXOztLQUFBQSxXO0FBb0tUQSxXQUFXLEdBQUV3RCwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCekQsV0FBeEIsQ0FBYjtBQUNlQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlX2VkaXQuNzA3OWZiOWM0YzI2YzY1M2E3NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6KaB5qSc6KiO55S75YOP44Ki44OD44OX44Ot44O844OJ5Yem55CGXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdldEltYWdlIGZyb20gXCIuL0dldEltYWdlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCdcclxuXHJcblxyXG5cclxuY29uc3QgcGxvZmlsZWRpdCA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCdcclxuICAgIH0sXHJcbiAgICBwbG9maWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCcsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uZ3JvdXA6e1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOntcclxuICAgICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREREJyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBtYXJnaW46XCIwcHggMjBweFwiLFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVFZGl0IChwcm9wcyl7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMTUwcHhcIixcclxuICB9O1xyXG4vL+S9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruioreWumihIb29rKVxyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3RbaW50cm9kdWN0aW9uLHNldEludHJvZHVjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9pbnB1dOOBq+WFpeWKm+OBleOCjOOBn+WHpueQhuOCkmXjgaflj5fjgZHlj5bjgaPjgabjgrnjg4bjg7zjg4jjgavlhaXjgozjgovplqLmlbBcclxuICBjb25zdCBkb0NoYW5nZU5hbWUgPShlKT0+e1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRvQ2hhbmdlSW50cm9kdWN0aW9uID0oZSk9PntcclxuICAgIHNldEludHJvZHVjdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvL+i/veWKoOODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiWZpcmViYXNl44Gr44K544OG44O844OI44Gu5oOF5aCx44KS5pu444GN6L6844KA5Yem55CGXHJcbiAgLy9SZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWlsKGlkKeOCkmVuY29kZSggLuKGkiogKeOBq+OBl+OBpuWumuaVsOOBq+S7o+WFpVxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbClcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLnNldCh7XHJcbiAgICAgIHByb2ZpbGU6eyBuYW1lOm5hbWUgLCBpbnRyb2R1Y3Rpb246aW50cm9kdWN0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgfSx7bWVyZ2U6IHRydWV9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8v44GE44KN44GE44KN56K66KqN44Gr5Yip55So44CB44GE44KJ44Gq44GE5Yem55CGXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSxpbnRyb2R1Y3Rpb24pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG4gIC8vLy8vLy8vLy8vLy8vL+eUu+WDj+WPluW+l+WHpueQhi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZSA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UoaW1hZ2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGltYWdlID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi44OV44Kh44Kk44Or44GM6YG45oqe44GV44KM44Gm44GE44G+44Gb44KTXCIpO1xyXG4gICAgfVxyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ5Yem55CGXHJcbiAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYC9wcm9maWxlaW1hZ2VzLyR7aW1hZ2UubmFtZX1gKS5wdXQoaW1hZ2UpO1xyXG4gICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgbmV4dCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGNvbXBsZXRlXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgbmV4dCA9IHNuYXBzaG90ID0+IHtcclxuICAgIC8vIOmAsuihjOS4reOBrnNuYXBzaG9044KS5b6X44KLXHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4njga7pgLLooYzluqbjgpLooajnpLpcclxuICAgIGNvbnN0IHBlcmNlbnQgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgY29uc29sZS5sb2cocGVyY2VudCArIFwiJSBkb25lXCIpO1xyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QpO1xyXG4gIH07XHJcbiAgY29uc3QgZXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAvLyDjgqjjg6njg7zjg4/jg7Pjg4njg6rjg7PjgrBcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgLy8g5a6M5LqG5b6M44Gu5Yem55CGXHJcbiAgICAvLyDnlLvlg4/ooajnpLrjga7jgZ/jgoHjgIHjgqLjg4Pjg5fjg63jg7zjg4njgZfjgZ/nlLvlg4/jga5VUkzjgpLlj5blvpdcclxuICAgIHN0b3JhZ2VcclxuICAgIC5yZWYoXCJwcm9maWxlaW1hZ2VzXCIpXHJcbiAgICAuY2hpbGQoaW1hZ2UubmFtZSlcclxuICAgIC5nZXREb3dubG9hZFVSTCgpXHJcbiAgICAgIC50aGVuKGZpcmVCYXNlVXJsID0+IHtcclxuICAgICAgICBzZXRJbWFnZVVybChmaXJlQmFzZVVybCk7XHJcbiAgICAgICAgLy8g5Y+W5b6X44GX44Gf55S75YOP44Gu5ZCN5YmN44KSZmlyZWJhc2Xjgavkv53lrZhcclxuICAgICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbClcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGVtYWlsKS5zZXQoe1xyXG4gICAgICAgICAgXCJpbWFnZXVybFwiOmZpcmVCYXNlVXJsLFxyXG4gICAgICAgIH1cclxuICAgICAgICAse21lcmdlIDogdHJ1ZX0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZpcmVCYXNlVXJsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy/jgZPjgZPjgb7jgafnlLvlg4/lj5blvpcvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgXHJcblxyXG5jb25zdCBzdWJtaXQgPSAoZXZlbnQpPT57XHJcbiAgZG9TdWJtaXQsXHJcbiAgb25TdWJtaXRcclxufVxyXG5cclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHBsb2ZpbGVkaXQoKTtcclxuICBcclxuXHJcblxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj7jg57jgqTjg5fjg63jg5XjgqPjg7zjg6vnt6jpm4Y8L1R5cG9ncmFwaHk+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuODpuODvOOCtuWQjTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Om44O844K25ZCNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXBsb2FkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7jg5fjg63jg5XjgqPjg7zjg6vnlLvlg4/jga7jgqLjg4Pjg5fjg63jg7zjg4k8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fSBpZD1cImljb24tYnV0dG9uLWZpbGVcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWNvbi1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cInVwbG9hZCBwaWN0dXJlXCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGxvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6Ieq5bex57S55LuL5paHXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZUludHJvZHVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbmdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgZGlzYWJsZUVsZXZhdGlvbiB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e2RvU3VibWl0fT7lpInmm7Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215cGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+44Kt44Oj44Oz44K744OrPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuIFxyXG4pO31cclxuXHJcblByb2ZpbGVFZGl0ID1jb25uZWN0KChzdGF0ZSk9PnN0YXRlKShQcm9maWxlRWRpdCk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVFZGl0O1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9