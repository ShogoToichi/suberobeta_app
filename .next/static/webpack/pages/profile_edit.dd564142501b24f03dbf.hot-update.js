webpackHotUpdate_N_E("pages/profile_edit",{

/***/ "./components/profileedit/GetImage.js":
/*!********************************************!*\
  !*** ./components/profileedit/GetImage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\profileedit\\GetImage.js",
    _s = $RefreshSig$();

//ProfileAddでimport
//inputに入れられたファイルをfirebase storageに突っ込む
//取得した画像のurlを取得してcloudfirestoreに入れて引っぱり出せるようにする










var plofiledit = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
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

function GetImage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      image = _useState[0],
      setImage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  var handleImage = function handleImage(event) {
    var image = event.target.files[0];
    setImage(image);
  };

  var onSubmit = function onSubmit(event) {
    event.preventDefault();

    if (image === "") {
      console.log("ファイルが選択されていません");
    } // アップロード処理


    var uploadTask = _store__WEBPACK_IMPORTED_MODULE_1__["storage"].ref("/profileimages/".concat(image.name)).put(image);
    uploadTask.on(_store__WEBPACK_IMPORTED_MODULE_1__["default"].storage.TaskEvent.STATE_CHANGED, next, error, complete);
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
    _store__WEBPACK_IMPORTED_MODULE_1__["storage"].ref("profileimages").child(image.name).getDownloadURL().then(function (fireBaseUrl) {
      setImageUrl(fireBaseUrl); // 取得した画像の名前をfirebaseに保存

      var db = _store__WEBPACK_IMPORTED_MODULE_1__["default"].firestore();
      var email = _static_address_lib__WEBPACK_IMPORTED_MODULE_5__["default"].encodeEmail(props.email);
      db.collection("users").doc(email).set({
        "profile.imageurl": fireBase
      }, {
        merge: true
      }).then(function () {
        console.log(email);
        console.log(imageUrl);
      });
    });
  };

  function conso() {
    console.log(imageUrl);
  }

  var classes = plofiledit();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: conso,
      children: "conso"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

_s(GetImage, "u9LA1aX7ridNT4pCTPfyBZ4Kwm0=");

_c = GetImage;
GetImage = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(GetImage);
/* harmony default export */ __webpack_exports__["default"] = (GetImage); // <div className={classes.upload}>
//         <Typography variant="h8">プロフィール画像のアップロード</Typography>
//         <br></br>
//         <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
//         <label htmlFor="icon-button">
//             <IconButton color="primary" aria-label="upload picture" component="span">
//             <PhotoCamera />
//             </IconButton>
//         </label>
// </div>

var _c;

$RefreshReg$(_c, "GetImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiR2V0SW1hZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVwbG9hZFRhc2siLCJzdG9yYWdlIiwicmVmIiwicHV0Iiwib24iLCJmaXJlYmFzZSIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJmaXJlQmFzZVVybCIsImRiIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJmaXJlQmFzZSIsIm1lcmdlIiwiY29uc28iLCJjbGFzc2VzIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0Msc0VBQVUsQ0FBQztBQUMxQkMsT0FBSyxFQUFFO0FBQ0hD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QUNDLGFBQUssRUFBRztBQUFULE9BSEQsRUFHaUJYLElBSGpCLENBR3NCLFlBQVU7QUFDOUJuQixlQUFPLENBQUNDLEdBQVIsQ0FBWXNCLEtBQVo7QUFDQXZCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVCxRQUFaO0FBQ0gsT0FOQztBQU9ELEtBaEJIO0FBaUJELEdBcEJEOztBQXNCRixXQUFTdUMsS0FBVCxHQUFnQjtBQUNkL0IsV0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVo7QUFDRDs7QUFHRyxNQUFNd0MsT0FBTyxHQUFHNUQsVUFBVSxFQUExQjtBQUVGLHNCQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRTJELEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGNBQVEsRUFBRWpDLFFBQWhCO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFSjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBTUU7QUFBSyxTQUFHLEVBQUVGLFFBQVY7QUFBb0IsU0FBRyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQXZFUUwsUTs7S0FBQUEsUTtBQXlFVEEsUUFBUSxHQUFHOEMsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3Qi9DLFFBQXhCLENBQVg7QUFDZUEsdUVBQWYsRSxDQUdZO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVfZWRpdC5kZDU2NDE0MjUwMWIyNGYwM2RiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Qcm9maWxlQWRk44GnaW1wb3J0XHJcbi8vaW5wdXTjgavlhaXjgozjgonjgozjgZ/jg5XjgqHjgqTjg6vjgpJmaXJlYmFzZSBzdG9yYWdl44Gr56qB44Gj6L6844KAXHJcbi8v5Y+W5b6X44GX44Gf55S75YOP44GudXJs44KS5Y+W5b6X44GX44GmY2xvdWRmaXJlc3RvcmXjgavlhaXjgozjgablvJXjgaPjgbHjgorlh7rjgZvjgovjgojjgYbjgavjgZnjgotcclxuXHJcbmltcG9ydCBmaXJlYmFzZSx7c3RvcmFnZX0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uLy4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5cclxuXHJcbmNvbnN0IHBsb2ZpbGVkaXQgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnXHJcbiAgICB9LFxyXG4gICAgcGxvZmlsZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbmdyb3VwOntcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjp7XHJcbiAgICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0RERCcsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgbWFyZ2luOlwiMHB4IDIwcHhcIixcclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gR2V0SW1hZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKGltYWdlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpbWFnZSA9PT0gXCJcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuODleOCoeOCpOODq+OBjOmBuOaKnuOBleOCjOOBpuOBhOOBvuOBm+OCk1wiKTtcclxuICAgIH1cclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieWHpueQhlxyXG4gICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGAvcHJvZmlsZWltYWdlcy8ke2ltYWdlLm5hbWV9YCkucHV0KGltYWdlKTtcclxuICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb21wbGV0ZVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSBzbmFwc2hvdCA9PiB7XHJcbiAgICAvLyDpgLLooYzkuK3jga5zbmFwc2hvdOOCkuW+l+OCi1xyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ44Gu6YCy6KGM5bqm44KS6KGo56S6XHJcbiAgICBjb25zdCBwZXJjZW50ID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnQgKyBcIiUgZG9uZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcclxuICB9O1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgLy8g44Ko44Op44O844OP44Oz44OJ44Oq44Oz44KwXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfTtcclxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIC8vIOWujOS6huW+jOOBruWHpueQhlxyXG4gICAgLy8g55S75YOP6KGo56S644Gu44Gf44KB44CB44Ki44OD44OX44Ot44O844OJ44GX44Gf55S75YOP44GuVVJM44KS5Y+W5b6XXHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoXCJwcm9maWxlaW1hZ2VzXCIpXHJcbiAgICAgIC5jaGlsZChpbWFnZS5uYW1lKVxyXG4gICAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAudGhlbihmaXJlQmFzZVVybCA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgIC8vIOWPluW+l+OBl+OBn+eUu+WDj+OBruWQjeWJjeOCkmZpcmViYXNl44Gr5L+d5a2YXHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KHtcclxuICAgICAgICAgIFwicHJvZmlsZS5pbWFnZXVybFwiOmZpcmVCYXNlLFxyXG4gICAgICAgIH1cclxuICAgICAgICAse21lcmdlIDogdHJ1ZX0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG5mdW5jdGlvbiBjb25zbygpe1xyXG4gIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxufVxyXG5cclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZWRpdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25zb30+Y29uc288L2J1dHRvbj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9IC8+XHJcbiAgICAgICAgPGJ1dHRvbj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cInVwbG9hZGVkXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkdldEltYWdlID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoR2V0SW1hZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBHZXRJbWFnZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51cGxvYWR9PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoOFwiPuODl+ODreODleOCo+ODvOODq+eUu+WDj+OBruOCouODg+ODl+ODreODvOODiTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPGlucHV0IGFjY2VwdD1cImltYWdlLypcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9IGlkPVwiaWNvbi1idXR0b24tZmlsZVwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAvLyA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9