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


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\GetImage.js",
    _s = $RefreshSig$();

//ProfileAddでimport
//inputに入れられたファイルをfirebase storageに突っ込む
//取得した画像のurlを取得してcloudに入れて引っぱり出せるようにする





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
      var email = Lib.encodeEmail(props.email);
      db.collection("users").doc(email).set({
        profile: {
          imageurl: imageUrl
        }
      }, {
        merge: true
      }).then(function () {
        console.log(email);
        console.log(imageUrl);
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJHZXRJbWFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJmaXJlYmFzZSIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJmaXJlQmFzZVVybCIsImRiIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJwcm9maWxlIiwiaW1hZ2V1cmwiLCJtZXJnZSIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRWhCRyxRQUZnQjtBQUFBLE1BRU5DLFdBRk07O0FBR3ZCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUMzQixRQUFNTCxLQUFLLEdBQUdLLEtBQUssQ0FBQ0MsTUFBTixD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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZV9lZGl0LjViOThkZjA3YWFjYzAzODc3NzI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1Byb2ZpbGVBZGTjgadpbXBvcnRcclxuLy9pbnB1dOOBq+WFpeOCjOOCieOCjOOBn+ODleOCoeOCpOODq+OCkmZpcmViYXNlIHN0b3JhZ2XjgavnqoHjgaPovrzjgoBcclxuLy/lj5blvpfjgZfjgZ/nlLvlg4/jga51cmzjgpLlj5blvpfjgZfjgaZjbG91ZOOBq+WFpeOCjOOBpuW8leOBo+OBseOCiuWHuuOBm+OCi+OCiOOBhuOBq+OBmeOCi1xyXG5cclxuaW1wb3J0IGZpcmViYXNlLHtzdG9yYWdlfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdldEltYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShpbWFnZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaW1hZ2UgPT09IFwiXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLjg5XjgqHjgqTjg6vjgYzpgbjmip7jgZXjgozjgabjgYTjgb7jgZvjgpNcIik7XHJcbiAgICB9XHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIZcclxuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgL3Byb2ZpbGVpbWFnZXMvJHtpbWFnZS5uYW1lfWApLnB1dChpbWFnZSk7XHJcbiAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICBuZXh0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgY29tcGxldGVcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBuZXh0ID0gc25hcHNob3QgPT4ge1xyXG4gICAgLy8g6YCy6KGM5Lit44Guc25hcHNob3TjgpLlvpfjgotcclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieOBrumAsuihjOW6puOCkuihqOekulxyXG4gICAgY29uc3QgcGVyY2VudCA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICBjb25zb2xlLmxvZyhwZXJjZW50ICsgXCIlIGRvbmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XHJcbiAgfTtcclxuICBjb25zdCBlcnJvciA9IGVycm9yID0+IHtcclxuICAgIC8vIOOCqOODqeODvOODj+ODs+ODieODquODs+OCsFxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH07XHJcbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAvLyDlrozkuoblvozjga7lh6bnkIZcclxuICAgIC8vIOeUu+WDj+ihqOekuuOBruOBn+OCgeOAgeOCouODg+ODl+ODreODvOODieOBl+OBn+eUu+WDj+OBrlVSTOOCkuWPluW+l1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgICAuY2hpbGQoaW1hZ2UubmFtZSlcclxuICAgICAgLmdldERvd25sb2FkVVJMKClcclxuICAgICAgLnRoZW4oZmlyZUJhc2VVcmwgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVXJsKGZpcmVCYXNlVXJsKTtcclxuICAgICAgICAvLyDlj5blvpfjgZfjgZ/nlLvlg4/jga7lkI3liY3jgpJmaXJlYmFzZeOBq+S/neWtmFxyXG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLnNldCh7XHJcbiAgICAgICAgICBwcm9maWxlOntpbWFnZXVybDppbWFnZVVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0se21lcmdlIDogdHJ1ZX0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlfSAvPlxyXG4gICAgICAgIDxidXR0b24+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJ1cGxvYWRlZFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5HZXRJbWFnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKEdldEltYWdlKTtcclxuZXhwb3J0IGRlZmF1bHQgR2V0SW1hZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==