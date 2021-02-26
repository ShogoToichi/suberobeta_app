webpackHotUpdate_N_E("pages/profile_edit",{

/***/ "./components/GetImage.js":
/*!********************************!*\
  !*** ./components/GetImage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\GetImage.js",
    _s = $RefreshSig$();

//ProfileAddでimport
//inputに入れられたファイルをfirebase storageに突っ込む
//取得した画像のurlを取得してcloudfirestoreに入れて引っぱり出せるようにする






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
      db.collection("users").doc(email).set(imageurlimageUrl, {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: conso,
      children: "conso"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJHZXRJbWFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJmaXJlYmFzZSIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJmaXJlQmFzZVVybCIsImRiIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJpbWFnZXVybGltYWdlVXJsIiwibWVyZ2UiLCJjb25zbyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRWhCRyxRQUZnQjtBQUFBLE1BRU5DLFdBRk07O0FBR3ZCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUMzQixRQUFNTCxLQUFLLEdBQUdLLEtBQUss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LDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IvQyxRQUF4QixDQUFYO0FBQ2VBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVfZWRpdC40NmZkOTUzZmJlZmU5YjA0YTRlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Qcm9maWxlQWRk44GnaW1wb3J0XHJcbi8vaW5wdXTjgavlhaXjgozjgonjgozjgZ/jg5XjgqHjgqTjg6vjgpJmaXJlYmFzZSBzdG9yYWdl44Gr56qB44Gj6L6844KAXHJcbi8v5Y+W5b6X44GX44Gf55S75YOP44GudXJs44KS5Y+W5b6X44GX44GmY2xvdWRmaXJlc3RvcmXjgavlhaXjgozjgablvJXjgaPjgbHjgorlh7rjgZvjgovjgojjgYbjgavjgZnjgotcclxuXHJcbmltcG9ydCBmaXJlYmFzZSx7c3RvcmFnZX0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5cclxuZnVuY3Rpb24gR2V0SW1hZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKGltYWdlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpbWFnZSA9PT0gXCJcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuODleOCoeOCpOODq+OBjOmBuOaKnuOBleOCjOOBpuOBhOOBvuOBm+OCk1wiKTtcclxuICAgIH1cclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieWHpueQhlxyXG4gICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGAvcHJvZmlsZWltYWdlcy8ke2ltYWdlLm5hbWV9YCkucHV0KGltYWdlKTtcclxuICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb21wbGV0ZVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSBzbmFwc2hvdCA9PiB7XHJcbiAgICAvLyDpgLLooYzkuK3jga5zbmFwc2hvdOOCkuW+l+OCi1xyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ44Gu6YCy6KGM5bqm44KS6KGo56S6XHJcbiAgICBjb25zdCBwZXJjZW50ID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnQgKyBcIiUgZG9uZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcclxuICB9O1xyXG4gIGNvbnN0IGVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgLy8g44Ko44Op44O844OP44Oz44OJ44Oq44Oz44KwXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfTtcclxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIC8vIOWujOS6huW+jOOBruWHpueQhlxyXG4gICAgLy8g55S75YOP6KGo56S644Gu44Gf44KB44CB44Ki44OD44OX44Ot44O844OJ44GX44Gf55S75YOP44GuVVJM44KS5Y+W5b6XXHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoXCJwcm9maWxlaW1hZ2VzXCIpXHJcbiAgICAgIC5jaGlsZChpbWFnZS5uYW1lKVxyXG4gICAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAudGhlbihmaXJlQmFzZVVybCA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgIC8vIOWPluW+l+OBl+OBn+eUu+WDj+OBruWQjeWJjeOCkmZpcmViYXNl44Gr5L+d5a2YXHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KFxyXG4gICAgICAgICAgaW1hZ2V1cmxpbWFnZVVybFxyXG4gICAgICAgICx7bWVyZ2UgOiB0cnVlfSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbmZ1bmN0aW9uIGNvbnNvKCl7XHJcbiAgY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvbnNvfT5jb25zbzwvYnV0dG9uPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX0gLz5cclxuICAgICAgICA8YnV0dG9uPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwidXBsb2FkZWRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuR2V0SW1hZ2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShHZXRJbWFnZSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdldEltYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=