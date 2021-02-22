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
      setImageUrl(fireBaseUrl);
      props.dispatch({
        type: "UPDATE_USER",
        value: {
          imageurl: fireV
        }
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJHZXRJbWFnZSIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVwbG9hZFRhc2siLCJzdG9yYWdlIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwiZmlyZWJhc2UiLCJUYXNrRXZlbnQiLCJTVEFURV9DSEFOR0VEIiwibmV4dCIsImVycm9yIiwiY29tcGxldGUiLCJzbmFwc2hvdCIsInBlcmNlbnQiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ0aGVuIiwiZmlyZUJhc2VVcmwiLCJwcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsInZhbHVlIiwiaW1hZ2V1cmwiLCJmaXJlViJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVYRyxRQUZXO0FBQUEsTUFFREMsV0FGQzs7QUFHbEIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsS0FBSyxFQUFJO0FBQzNCLFFBQU1MLEtBQUssR0FBR0ssS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBZDtBQUNBTixZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBSUEsTUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUgsS0FBSyxFQUFJO0FBQ3hCQSxTQUFLLENBQUNJLGNBQU47O0FBQ0EsUUFBSVQsS0FBSyxLQUFLLEVBQWQsRUFBa0I7QUFDaEJVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0QsS0FKdUIsQ0FLeEI7OztBQUNBLFFBQU1DLFVBQVUsR0FBR0MsOENBQU8sQ0FBQ0MsR0FBUiwwQkFBOEJkLEtBQUssQ0FBQ2UsSUFBcEMsR0FBNENDLEdBQTVDLENBQWdEaEIsS0FBaEQsQ0FBbkI7QUFDQVksY0FBVSxDQUFDSyxFQUFYLENBQ0VDLDhDQUFRLENBQUNMLE9BQVQsQ0FBaUJNLFNBQWpCLENBQTJCQyxhQUQ3QixFQUVFQyxJQUZGLEVBR0VDLEtBSEYsRUFJRUMsUUFKRjtBQU1ELEdBYkQ7O0FBY0EsTUFBTUYsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUcsUUFBUSxFQUFJO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFNQyxPQUFPLEdBQUlELFFBQVEsQ0FBQ0UsZ0JBQVQsR0FBNEJGLFFBQVEsQ0FBQ0csVUFBdEMsR0FBb0QsR0FBcEU7QUFDQWpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYyxPQUFPLEdBQUcsUUFBdEI7QUFDQWYsV0FBTyxDQUFDQyxHQUFSLENBQVlhLFFBQVo7QUFDRCxHQU5EOztBQU9BLE1BQU1GLEtBQUssR0FBRyxlQUFBQSxNQUFLLEVBQUk7QUFDckI7QUFDQVosV0FBTyxDQUFDQyxHQUFSLENBQVlXLE1BQVo7QUFDRCxHQUhEOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckI7QUFDQTtBQUNBVixrREFBTyxDQUNKQyxHQURILENBQ08sZUFEUCxFQUVHYyxLQUZILENBRVM1QixLQUFLLENBQUNlLElBRmYsRUFHR2MsY0FISCxHQUlHQyxJQUpILENBSVEsVUFBQUMsV0FBVyxFQUFJO0FBQ25CNUIsaUJBQVcsQ0FBQzRCLFdBQUQsQ0FBWDtBQUNBQyxXQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUNiQyxZQUFJLEVBQUMsYUFEUTtBQUViQyxhQUFLLEVBQUM7QUFDSkMsa0JBQVEsRUFBQ0M7QUFETDtBQUZPLE9BQWY7QUFNRCxLQVpIO0FBYUQsR0FoQkQ7O0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUU3QixRQUFoQjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUo7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQU1FO0FBQUssU0FBRyxFQUFFRixRQUFWO0FBQW9CLFNBQUcsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0EzRFFKLFE7O0tBQUFBLFE7QUE0RE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVfZWRpdC44YzJlYzliNTU2Y2NmNzY2MWE0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlLHtzdG9yYWdlfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEdldEltYWdlKCkge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVJbWFnZSA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UoaW1hZ2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGltYWdlID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi44OV44Kh44Kk44Or44GM6YG45oqe44GV44KM44Gm44GE44G+44Gb44KTXCIpO1xyXG4gICAgfVxyXG4gICAgLy8g44Ki44OD44OX44Ot44O844OJ5Yem55CGXHJcbiAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYC9wcm9maWxlaW1hZ2VzLyR7aW1hZ2UubmFtZX1gKS5wdXQoaW1hZ2UpO1xyXG4gICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgbmV4dCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGNvbXBsZXRlXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgbmV4dCA9IHNuYXBzaG90ID0+IHtcclxuICAgIC8vIOmAsuihjOS4reOBrnNuYXBzaG9044KS5b6X44KLXHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4njga7pgLLooYzluqbjgpLooajnpLpcclxuICAgIGNvbnN0IHBlcmNlbnQgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgY29uc29sZS5sb2cocGVyY2VudCArIFwiJSBkb25lXCIpO1xyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QpO1xyXG4gIH07XHJcbiAgY29uc3QgZXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAvLyDjgqjjg6njg7zjg4/jg7Pjg4njg6rjg7PjgrBcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgLy8g5a6M5LqG5b6M44Gu5Yem55CGXHJcbiAgICAvLyDnlLvlg4/ooajnpLrjga7jgZ/jgoHjgIHjgqLjg4Pjg5fjg63jg7zjg4njgZfjgZ/nlLvlg4/jga5VUkzjgpLlj5blvpdcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihcInByb2ZpbGVpbWFnZXNcIilcclxuICAgICAgLmNoaWxkKGltYWdlLm5hbWUpXHJcbiAgICAgIC5nZXREb3dubG9hZFVSTCgpXHJcbiAgICAgIC50aGVuKGZpcmVCYXNlVXJsID0+IHtcclxuICAgICAgICBzZXRJbWFnZVVybChmaXJlQmFzZVVybCk7XHJcbiAgICAgICAgcHJvcHMuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpcIlVQREFURV9VU0VSXCIsXHJcbiAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgIGltYWdldXJsOmZpcmVWXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoMT7nlLvlg4/jgqLjg4Pjg5fjg63jg7zjg4k8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX0gLz5cclxuICAgICAgICA8YnV0dG9uPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwidXBsb2FkZWRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHZXRJbWFnZTsiXSwic291cmNlUm9vdCI6IiJ9