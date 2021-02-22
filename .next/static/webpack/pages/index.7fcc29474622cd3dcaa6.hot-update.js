webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\GetImage.js",
    _s = $RefreshSig$();





function GetImage() {
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


    var uploadTask = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage.ref("/profileimages/".concat(image.name)).put(image);
    uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage.TaskEvent.STATE_CHANGED, next, error, complete);
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
    firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage.ref("profileimages").child(image.name).getDownloadURL().then(function (fireBaseUrl) {
      setImageUrl(fireBaseUrl);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(GetImage, "u9LA1aX7ridNT4pCTPfyBZ4Kwm0=");

_c = GetImage;
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_TopContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopContents */ "./components/TopContents.js");
/* harmony import */ var _components_Fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Fire */ "./components/Fire.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Account */ "./components/Account.js");
/* harmony import */ var _components_GetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GetImage */ "./components/GetImage.js");


var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\pages\\index.js",
    _this = undefined;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8",
    title: "Top page.",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Account__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TopContents__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GetImage__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZXRJbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiaGFuZGxlSW1hZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ1cGxvYWRUYXNrIiwiZmlyZWJhc2UiLCJzdG9yYWdlIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwiVGFza0V2ZW50IiwiU1RBVEVfQ0hBTkdFRCIsIm5leHQiLCJlcnJvciIsImNvbXBsZXRlIiwic25hcHNob3QiLCJwZXJjZW50IiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidGhlbiIsImZpcmVCYXNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDWEMsS0FEVztBQUFBLE1BQ0pDLFFBREk7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRVhHLFFBRlc7QUFBQSxNQUVEQyxXQUZDOztBQUdsQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0IsUUFBTUwsS0FBSyxHQUFHSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFkO0FBQ0FOLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFJQSxNQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSCxLQUFLLEVBQUk7QUFDeEJBLFNBQUssQ0FBQ0ksY0FBTjs7QUFDQSxRQUFJVCxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQlUsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDRCxLQUp1QixDQUt4Qjs7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxnREFBUSxDQUFDQyxPQUFULENBQWlCQyxHQUFqQiwwQkFBdUNmLEtBQUssQ0FBQ2dCLElBQTdDLEdBQXFEQyxHQUFyRCxDQUF5RGpCLEtBQXpELENBQW5CO0FBQ0FZLGNBQVUsQ0FBQ00sRUFBWCxDQUNFTCxnREFBUSxDQUFDQyxPQUFULENBQWlCSyxTQUFqQixDQUEyQkMsYUFEN0IsRUFFRUMsSUFGRixFQUdFQyxLQUhGLEVBSUVDLFFBSkY7QUFNRCxHQWJEOztBQWNBLE1BQU1GLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFHLFFBQVEsRUFBSTtBQUN2QjtBQUNBO0FBQ0EsUUFBTUMsT0FBTyxHQUFJRCxRQUFRLENBQUNFLGdCQUFULEdBQTRCRixRQUFRLENBQUNHLFVBQXRDLEdBQW9ELEdBQXBFO0FBQ0FqQixXQUFPLENBQUNDLEdBQVIsQ0FBWWMsT0FBTyxHQUFHLFFBQXRCO0FBQ0FmLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYSxRQUFaO0FBQ0QsR0FORDs7QUFPQSxNQUFNRixLQUFLLEdBQUcsZUFBQUEsTUFBSyxFQUFJO0FBQ3JCO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVyxNQUFaO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCO0FBQ0E7QUFDQVYsb0RBQVEsQ0FBQ0MsT0FBVCxDQUNHQyxHQURILENBQ08sZUFEUCxFQUVHYSxLQUZILENBRVM1QixLQUFLLENBQUNnQixJQUZmLEVBR0dhLGNBSEgsR0FJR0MsSUFKSCxDQUlRLFVBQUFDLFdBQVcsRUFBSTtBQUNuQjVCLGlCQUFXLENBQUM0QixXQUFELENBQVg7QUFDRCxLQU5IO0FBT0QsR0FWRDs7QUFXQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sY0FBUSxFQUFFdkIsUUFBaEI7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVKO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRTtBQUFLLFNBQUcsRUFBRUYsUUFBVjtBQUFvQixTQUFHLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBckRRSixROztLQUFBQSxRO0FBc0RNQSx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZTtBQUFBLHNCQUNiLHFFQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFDLHNDQUFmO0FBQXdCLFNBQUssRUFBQyxXQUE5QjtBQUFBLDRCQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYTtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2ZjYzI5NDc0NjIyY2QzZGNhYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEdldEltYWdlKCkge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVJbWFnZSA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UoaW1hZ2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGltYWdlID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi44OV44Kh44Kk44Or44GM6YG45oqe44GV44KM44Gm44GE44G+44Gb44KTXCIpO1xyXG4gICAgfVxyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ5Yem55CGXHJcbiAgICBjb25zdCB1cGxvYWRUYXNrID0gZmlyZWJhc2Uuc3RvcmFnZS5yZWYoYC9wcm9maWxlaW1hZ2VzLyR7aW1hZ2UubmFtZX1gKS5wdXQoaW1hZ2UpO1xyXG4gICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgbmV4dCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGNvbXBsZXRlXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgbmV4dCA9IHNuYXBzaG90ID0+IHtcclxuICAgIC8vIOmAsuihjOS4reOBrnNuYXBzaG9044KS5b6X44KLXHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4njga7pgLLooYzluqbjgpLooajnpLpcclxuICAgIGNvbnN0IHBlcmNlbnQgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgY29uc29sZS5sb2cocGVyY2VudCArIFwiJSBkb25lXCIpO1xyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QpO1xyXG4gIH07XHJcbiAgY29uc3QgZXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAvLyDjgqjjg6njg7zjg4/jg7Pjg4njg6rjg7PjgrBcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgLy8g5a6M5LqG5b6M44Gu5Yem55CGXHJcbiAgICAvLyDnlLvlg4/ooajnpLrjga7jgZ/jgoHjgIHjgqLjg4Pjg5fjg63jg7zjg4njgZfjgZ/nlLvlg4/jga5VUkzjgpLlj5blvpdcclxuICAgIGZpcmViYXNlLnN0b3JhZ2VcclxuICAgICAgLnJlZihcInByb2ZpbGVpbWFnZXNcIilcclxuICAgICAgLmNoaWxkKGltYWdlLm5hbWUpXHJcbiAgICAgIC5nZXREb3dubG9hZFVSTCgpXHJcbiAgICAgIC50aGVuKGZpcmVCYXNlVXJsID0+IHtcclxuICAgICAgICBzZXRJbWFnZVVybChmaXJlQmFzZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoMT7nlLvlg4/jgqLjg4Pjg5fjg63jg7zjg4k8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX0gLz5cclxuICAgICAgICA8YnV0dG9uPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwidXBsb2FkZWRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHZXRJbWFnZTsiLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBUb3BDb250ZW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub3BDb250ZW50c1wiO1xyXG5pbXBvcnQgRmlyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9GaXJlXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnRcIjtcclxuaW1wb3J0IEdldEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0dldEltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PihcclxuICA8TGF5b3V0IGhlYWRlcj1cIuODiOODg+ODl+ODmuODvOOCuFwiIHRpdGxlPVwiVG9wIHBhZ2UuXCI+XHJcbiAgICA8QWNjb3VudC8+XHJcbiAgICA8VG9wQ29udGVudHMvPlxyXG4gICAgPEdldEltYWdlLz5cclxuICA8L0xheW91dD5cclxuKTsiXSwic291cmNlUm9vdCI6IiJ9