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
    doSubmit();
    onSubmit();
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "App",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: onSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            onChange: handleImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Upload"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: imageUrl,
          alt: "uploaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
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
        lineNumber: 191,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
            lineNumber: 206,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.button,
            children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9Qcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiUHJvZmlsZUVkaXQiLCJwcm9wcyIsInN0eWxlIiwidXNlU3RhdGUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiZG9DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZG9DaGFuZ2VJbnRyb2R1Y3Rpb24iLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInByb2ZpbGUiLCJtZXJnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsImZpcmVCYXNlVXJsIiwic3VibWl0IiwiY2xhc3NlcyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVEsRUFBRWtCO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ1IsZUErQ1E7QUFBSyxlQUFTLEVBQUUyQyxPQUFPLENBQUM1RCxXQUF4QjtBQUFBLDZCQUNRLHFFQUFDLHNFQUFEO0FBQWEsd0JBQWdCLE1BQTdCO0FBQThCLGVBQU8sRUFBQyxVQUF0QztBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDSixxRUFBQyxpRUFBRDtBQUFRLHFCQUFTLEVBQUU0RCxPQUFPLENBQUMxRCxNQUEzQjtBQUFtQyxtQkFBTyxFQUFFZ0IsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUkscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNKLHFFQUFDLGlFQUFEO0FBQVEscUJBQVMsRUFBRTBDLE9BQU8sQ0FBQzFELE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNERDOztHQXBLTUksVzs7S0FBQUEsVztBQXNLVEEsV0FBVyxHQUFFdUQsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QnhELFdBQXhCLENBQWI7QUFDZUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZV9lZGl0LjNkOGNmMDY4MDliYmQ5ZWM0NDNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+imgeaknOiojueUu+WDj+OCouODg+ODl+ODreODvOODieWHpueQhlxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uLy4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHZXRJbWFnZSBmcm9tIFwiLi9HZXRJbWFnZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmEnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnXHJcblxyXG5cclxuXHJcbmNvbnN0IHBsb2ZpbGVkaXQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnXHJcbiAgICB9LFxyXG4gICAgcGxvZmlsZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbmdyb3VwOntcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjp7XHJcbiAgICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0RERCcsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgbWFyZ2luOlwiMHB4IDIwcHhcIixcclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQcm9maWxlRWRpdCAocHJvcHMpe1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjE1MHB4XCIsXHJcbiAgfTtcclxuLy/kvb/nlKjjgZnjgovjgrnjg4bjg7zjg4jjga7oqK3lrpooSG9vaylcclxuICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0W2ludHJvZHVjdGlvbixzZXRJbnRyb2R1Y3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vaW5wdXTjgavlhaXlipvjgZXjgozjgZ/lh6bnkIbjgpJl44Gn5Y+X44GR5Y+W44Gj44Gm44K544OG44O844OI44Gr5YWl44KM44KL6Zai5pWwXHJcbiAgY29uc3QgZG9DaGFuZ2VOYW1lID0oZSk9PntcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBkb0NoYW5nZUludHJvZHVjdGlvbiA9KGUpPT57XHJcbiAgICBzZXRJbnRyb2R1Y3Rpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy/ov73liqDjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgolmaXJlYmFzZeOBq+OCueODhuODvOODiOOBruaDheWgseOCkuabuOOBjei+vOOCgOWHpueQhlxyXG4gIC8vUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbChpZCnjgpJlbmNvZGUoIC7ihpIqICnjgavjgZfjgablrprmlbDjgavku6PlhaVcclxuICBjb25zdCBkb1N1Ym1pdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGVtYWlsKS5zZXQoe1xyXG4gICAgICBwcm9maWxlOnsgbmFtZTpuYW1lICwgaW50cm9kdWN0aW9uOmludHJvZHVjdGlvblxyXG4gICAgICAgIH1cclxuICAgIH0se21lcmdlOiB0cnVlfSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAvL+OBhOOCjeOBhOOCjeeiuuiqjeOBq+WIqeeUqOOAgeOBhOOCieOBquOBhOWHpueQhlxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsaW50cm9kdWN0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICAvLy8vLy8vLy8vLy8vLy/nlLvlg4/lj5blvpflh6bnkIYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKGltYWdlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpbWFnZSA9PT0gXCJcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuODleOCoeOCpOODq+OBjOmBuOaKnuOBleOCjOOBpuOBhOOBvuOBm+OCk1wiKTtcclxuICAgIH1cclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieWHpueQhlxyXG4gICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGAvcHJvZmlsZWltYWdlcy8ke2ltYWdlLm5hbWV9YCkucHV0KGltYWdlKTtcclxuICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb21wbGV0ZVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSBzbmFwc2hvdCA9PiB7XHJcbiAgICAvLyDpgLLooYzkuK3jga5zbmFwc2hvdOOCkuW+l+OCi1xyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ44Gu6YCy6KGM5bqm44KS6KGo56S6XHJcbiAgICBjb25zdCBwZXJjZW50ID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnQgKyBcIiUgZG9uZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcclxuICB9O1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgLy8g44Ko44Op44O844OP44Oz44OJ44Oq44Oz44KwXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfTtcclxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIC8vIOWujOS6huW+jOOBruWHpueQhlxyXG4gICAgLy8g55S75YOP6KGo56S644Gu44Gf44KB44CB44Ki44OD44OX44Ot44O844OJ44GX44Gf55S75YOP44GuVVJM44KS5Y+W5b6XXHJcbiAgICBzdG9yYWdlXHJcbiAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgLmNoaWxkKGltYWdlLm5hbWUpXHJcbiAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAudGhlbihmaXJlQmFzZVVybCA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgIC8vIOWPluW+l+OBl+OBn+eUu+WDj+OBruWQjeWJjeOCkmZpcmViYXNl44Gr5L+d5a2YXHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KHtcclxuICAgICAgICAgIFwiaW1hZ2V1cmxcIjpmaXJlQmFzZVVybCxcclxuICAgICAgICB9XHJcbiAgICAgICAgLHttZXJnZSA6IHRydWV9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaXJlQmFzZVVybCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8v44GT44GT44G+44Gn55S75YOP5Y+W5b6XLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIFxyXG5cclxuY29uc3Qgc3VibWl0ID0gKGV2ZW50KT0+e1xyXG4gIGRvU3VibWl0KCk7XHJcbiAgb25TdWJtaXQoKTtcclxufVxyXG5cclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHBsb2ZpbGVkaXQoKTtcclxuICBcclxuXHJcblxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj7jg57jgqTjg5fjg63jg5XjgqPjg7zjg6vnt6jpm4Y8L1R5cG9ncmFwaHk+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuODpuODvOOCtuWQjTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44Om44O844K25ZCNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkb0NoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXBsb2FkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDhcIj7jg5fjg63jg5XjgqPjg7zjg6vnlLvlg4/jga7jgqLjg4Pjg5fjg63jg7zjg4k8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlfSAvPlxyXG4gICAgICAgIDxidXR0b24+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJ1cGxvYWRlZFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBsb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuiHquW3see0ueS7i+aWh1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZG9DaGFuZ2VJbnRyb2R1Y3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25ncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGRpc2FibGVFbGV2YXRpb24gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXtkb1N1Ym1pdH0+5aSJ5pu0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PuOCreODo+ODs+OCu+ODqzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiBcclxuKTt9XHJcblxyXG5Qcm9maWxlRWRpdCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoUHJvZmlsZUVkaXQpO1xyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRWRpdDtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==