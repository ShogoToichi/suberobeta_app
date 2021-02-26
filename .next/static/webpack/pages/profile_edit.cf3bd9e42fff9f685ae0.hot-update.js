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
      db.collection("users").doc(email).set({
        "profile.imageurl": imageUrl
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: conso,
      children: "conso"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageUrl,
      alt: "uploaded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJHZXRJbWFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJmaXJlYmFzZSIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJmaXJlQmFzZVVybCIsImRiIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJtZXJnZSIsImNvbnNvIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVEMsUUFEUzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFaEJHLFFBRmdCO0FBQUEsTUFFTkMsV0FGTTs7QUFHdkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsS0FBSyxFQUFJO0FBQzNCLFFBQU1MLEtBQUssR0FBR0ssS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtB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QUc2QywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCOUMsUUFBeEIsQ0FBWDtBQUNlQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlX2VkaXQuY2YzYmQ5ZTQyZmZmOWY2ODVhZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUHJvZmlsZUFkZOOBp2ltcG9ydFxyXG4vL2lucHV044Gr5YWl44KM44KJ44KM44Gf44OV44Kh44Kk44Or44KSZmlyZWJhc2Ugc3RvcmFnZeOBq+eqgeOBo+i+vOOCgFxyXG4vL+WPluW+l+OBl+OBn+eUu+WDj+OBrnVybOOCkuWPluW+l+OBl+OBpmNsb3VkZmlyZXN0b3Jl44Gr5YWl44KM44Gm5byV44Gj44Gx44KK5Ye644Gb44KL44KI44GG44Gr44GZ44KLXHJcblxyXG5pbXBvcnQgZmlyZWJhc2Use3N0b3JhZ2V9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuXHJcbmZ1bmN0aW9uIEdldEltYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShpbWFnZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaW1hZ2UgPT09IFwiXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLjg5XjgqHjgqTjg6vjgYzpgbjmip7jgZXjgozjgabjgYTjgb7jgZvjgpNcIik7XHJcbiAgICB9XHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIZcclxuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgL3Byb2ZpbGVpbWFnZXMvJHtpbWFnZS5uYW1lfWApLnB1dChpbWFnZSk7XHJcbiAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICBuZXh0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgY29tcGxldGVcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBuZXh0ID0gc25hcHNob3QgPT4ge1xyXG4gICAgLy8g6YCy6KGM5Lit44Guc25hcHNob3TjgpLlvpfjgotcclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieOBrumAsuihjOW6puOCkuihqOekulxyXG4gICAgY29uc3QgcGVyY2VudCA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICBjb25zb2xlLmxvZyhwZXJjZW50ICsgXCIlIGRvbmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XHJcbiAgfTtcclxuICBjb25zdCBlcnJvciA9IGVycm9yID0+IHtcclxuICAgIC8vIOOCqOODqeODvOODj+ODs+ODieODquODs+OCsFxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH07XHJcbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAvLyDlrozkuoblvozjga7lh6bnkIZcclxuICAgIC8vIOeUu+WDj+ihqOekuuOBruOBn+OCgeOAgeOCouODg+ODl+ODreODvOODieOBl+OBn+eUu+WDj+OBrlVSTOOCkuWPluW+l1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgICAuY2hpbGQoaW1hZ2UubmFtZSlcclxuICAgICAgLmdldERvd25sb2FkVVJMKClcclxuICAgICAgLnRoZW4oZmlyZUJhc2VVcmwgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVXJsKGZpcmVCYXNlVXJsKTtcclxuICAgICAgICAvLyDlj5blvpfjgZfjgZ/nlLvlg4/jga7lkI3liY3jgpJmaXJlYmFzZeOBq+S/neWtmFxyXG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLnNldCh7XHJcbiAgICAgICAgICBcInByb2ZpbGUuaW1hZ2V1cmxcIjppbWFnZVVybCxcclxuICAgICAgICB9XHJcbiAgICAgICAgLHttZXJnZSA6IHRydWV9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuZnVuY3Rpb24gY29uc28oKXtcclxuICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y29uc299PmNvbnNvPC9idXR0b24+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlfSAvPlxyXG4gICAgICAgIDxidXR0b24+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJ1cGxvYWRlZFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5HZXRJbWFnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKEdldEltYWdlKTtcclxuZXhwb3J0IGRlZmF1bHQgR2V0SW1hZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==