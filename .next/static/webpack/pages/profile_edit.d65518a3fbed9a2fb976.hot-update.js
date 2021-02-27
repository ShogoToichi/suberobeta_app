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
        "imageurl": fireBaseUrl
      }, {
        merge: true
      }).then(function () {
        console.log(fireBaseUrl);
        console.log(imageUrl);
      });
    });
  };

  var classes = plofiledit();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded",
      style: {
        height: "50px",
        width: "50px",
        borderRadius: "25px",
        margin: "20px 0px 0px 20px",
        display: "inline"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      display: "inline",
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

_s(GetImage, "u9LA1aX7ridNT4pCTPfyBZ4Kwm0=");

_c = GetImage;
GetImage = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(GetImage);
/* harmony default export */ __webpack_exports__["default"] = (GetImage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiR2V0SW1hZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVwbG9hZFRhc2siLCJzdG9yYWdlIiwicmVmIiwicHV0Iiwib24iLCJmaXJlYmFzZSIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJmaXJlQmFzZVVybCIsImRiIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJtZXJnZSIsImNsYXNzZXMiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0Msc0VBQVUsQ0FBQztBQUMxQkMs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cm9maWxlX2VkaXQuZDY1NTE4YTNmYmVkOWEyZmI5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUHJvZmlsZUFkZOOBp2ltcG9ydFxyXG4vL2lucHV044Gr5YWl44KM44KJ44KM44Gf44OV44Kh44Kk44Or44KSZmlyZWJhc2Ugc3RvcmFnZeOBq+eqgeOBo+i+vOOCgFxyXG4vL+WPluW+l+OBl+OBn+eUu+WDj+OBrnVybOOCkuWPluW+l+OBl+OBpmNsb3VkZmlyZXN0b3Jl44Gr5YWl44KM44Gm5byV44Gj44Gx44KK5Ye644Gb44KL44KI44GG44Gr44GZ44KLXHJcblxyXG5pbXBvcnQgZmlyZWJhc2Use3N0b3JhZ2V9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcblxyXG5jb25zdCBwbG9maWxlZGl0ID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCdcclxuICAgIH0sXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4J1xyXG4gICAgfSxcclxuICAgIHBsb2ZpbGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICBidXR0b25ncm91cDp7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidXR0b246e1xyXG4gICAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEREQnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIG1hcmdpbjpcIjBweCAyMHB4XCIsXHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEdldEltYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShpbWFnZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaW1hZ2UgPT09IFwiXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLjg5XjgqHjgqTjg6vjgYzpgbjmip7jgZXjgozjgabjgYTjgb7jgZvjgpNcIik7XHJcbiAgICB9XHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIZcclxuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgL3Byb2ZpbGVpbWFnZXMvJHtpbWFnZS5uYW1lfWApLnB1dChpbWFnZSk7XHJcbiAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICBuZXh0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgY29tcGxldGVcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBuZXh0ID0gc25hcHNob3QgPT4ge1xyXG4gICAgLy8g6YCy6KGM5Lit44Guc25hcHNob3TjgpLlvpfjgotcclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieOBrumAsuihjOW6puOCkuihqOekulxyXG4gICAgY29uc3QgcGVyY2VudCA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICBjb25zb2xlLmxvZyhwZXJjZW50ICsgXCIlIGRvbmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XHJcbiAgfTtcclxuICBjb25zdCBlcnJvciA9IGVycm9yID0+IHtcclxuICAgIC8vIOOCqOODqeODvOODj+ODs+ODieODquODs+OCsFxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH07XHJcbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAvLyDlrozkuoblvozjga7lh6bnkIZcclxuICAgIC8vIOeUu+WDj+ihqOekuuOBruOBn+OCgeOAgeOCouODg+ODl+ODreODvOODieOBl+OBn+eUu+WDj+OBrlVSTOOCkuWPluW+l1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgICAuY2hpbGQoaW1hZ2UubmFtZSlcclxuICAgICAgLmdldERvd25sb2FkVVJMKClcclxuICAgICAgLnRoZW4oZmlyZUJhc2VVcmwgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVXJsKGZpcmVCYXNlVXJsKTtcclxuICAgICAgICAvLyDlj5blvpfjgZfjgZ/nlLvlg4/jga7lkI3liY3jgpJmaXJlYmFzZeOBq+S/neWtmFxyXG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLnNldCh7XHJcbiAgICAgICAgICBcImltYWdldXJsXCI6ZmlyZUJhc2VVcmwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7bWVyZ2UgOiB0cnVlfSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZWRpdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9IC8+XHJcbiAgICAgICAgPGJ1dHRvbj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cInVwbG9hZGVkXCIgc3R5bGU9e3toZWlnaHQ6XCI1MHB4XCIsd2lkdGg6XCI1MHB4XCIsYm9yZGVyUmFkaXVzOlwiMjVweFwiLG1hcmdpbjpcIjIwcHggMHB4IDBweCAyMHB4XCIsZGlzcGxheTpcImlubGluZVwifX0gLz5cclxuICAgICAgPHAgZGlzcGxheT1cImlubGluZVwiPntwcm9wcy5uYW1lfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkdldEltYWdlID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoR2V0SW1hZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBHZXRJbWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==