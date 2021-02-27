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
      style: {}
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlZWRpdC9HZXRJbWFnZS5qcyJdLCJuYW1lcyI6WyJwbG9maWxlZGl0IiwibWFrZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ1cGxvYWQiLCJwbG9maWxlIiwiYnV0dG9uZ3JvdXAiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiR2V0SW1hZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVJbWFnZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVwbG9hZFRhc2siLCJzdG9yYWdlIiwicmVmIiwicHV0Iiwib24iLCJmaXJlYmFzZSIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInNuYXBzaG90IiwicGVyY2VudCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJmaXJlQmFzZVVybCIsImRiIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJtZXJnZSIsImNsYXNzZXMiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQyxzRUFBVSxDQUFDO0FBQzFCQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFLE1BREw7QUFF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QUhELEVBR2lCVixJQUhqQixDQUdzQixZQUFVO0FBQzlCbkIsZUFBTyxDQUFDQyxHQUFSLENBQVltQixXQUFaO0FBQ0FwQixlQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBWjtBQUNILE9BTkM7QUFPRCxLQWhCSDtBQWlCRCxHQXBCRDs7QUFzQkUsTUFBTXNDLE9BQU8sR0FBRzFELFVBQVUsRUFBMUI7QUFFRixzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0U7QUFBTSxjQUFRLEVBQUUwQixRQUFoQjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUo7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssU0FBRyxFQUFFRixRQUFWO0FBQW9CLFNBQUcsRUFBQyxVQUF4QjtBQUFtQyxXQUFLLEVBQUU7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBakVRTCxROztLQUFBQSxRO0FBbUVUQSxRQUFRLEdBQUc0QywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCN0MsUUFBeEIsQ0FBWDtBQUNlQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlX2VkaXQuMzI2NmM0NDE2OWVkOGEzYjYxMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUHJvZmlsZUFkZOOBp2ltcG9ydFxyXG4vL2lucHV044Gr5YWl44KM44KJ44KM44Gf44OV44Kh44Kk44Or44KSZmlyZWJhc2Ugc3RvcmFnZeOBq+eqgeOBo+i+vOOCgFxyXG4vL+WPluW+l+OBl+OBn+eUu+WDj+OBrnVybOOCkuWPluW+l+OBl+OBpmNsb3VkZmlyZXN0b3Jl44Gr5YWl44KM44Gm5byV44Gj44Gx44KK5Ye644Gb44KL44KI44GG44Gr44GZ44KLXHJcblxyXG5pbXBvcnQgZmlyZWJhc2Use3N0b3JhZ2V9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi8uLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcblxyXG5jb25zdCBwbG9maWxlZGl0ID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCdcclxuICAgIH0sXHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4J1xyXG4gICAgfSxcclxuICAgIHBsb2ZpbGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICBidXR0b25ncm91cDp7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidXR0b246e1xyXG4gICAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEREQnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIG1hcmdpbjpcIjBweCAyMHB4XCIsXHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEdldEltYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShpbWFnZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaW1hZ2UgPT09IFwiXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLjg5XjgqHjgqTjg6vjgYzpgbjmip7jgZXjgozjgabjgYTjgb7jgZvjgpNcIik7XHJcbiAgICB9XHJcbiAgICAvLyDjgqLjg4Pjg5fjg63jg7zjg4nlh6bnkIZcclxuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgL3Byb2ZpbGVpbWFnZXMvJHtpbWFnZS5uYW1lfWApLnB1dChpbWFnZSk7XHJcbiAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICBuZXh0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgY29tcGxldGVcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBuZXh0ID0gc25hcHNob3QgPT4ge1xyXG4gICAgLy8g6YCy6KGM5Lit44Guc25hcHNob3TjgpLlvpfjgotcclxuICAgIC8vIOOCouODg+ODl+ODreODvOODieOBrumAsuihjOW6puOCkuihqOekulxyXG4gICAgY29uc3QgcGVyY2VudCA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICBjb25zb2xlLmxvZyhwZXJjZW50ICsgXCIlIGRvbmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XHJcbiAgfTtcclxuICBjb25zdCBlcnJvciA9IGVycm9yID0+IHtcclxuICAgIC8vIOOCqOODqeODvOODj+ODs+ODieODquODs+OCsFxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH07XHJcbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAvLyDlrozkuoblvozjga7lh6bnkIZcclxuICAgIC8vIOeUu+WDj+ihqOekuuOBruOBn+OCgeOAgeOCouODg+ODl+ODreODvOODieOBl+OBn+eUu+WDj+OBrlVSTOOCkuWPluW+l1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKFwicHJvZmlsZWltYWdlc1wiKVxyXG4gICAgICAuY2hpbGQoaW1hZ2UubmFtZSlcclxuICAgICAgLmdldERvd25sb2FkVVJMKClcclxuICAgICAgLnRoZW4oZmlyZUJhc2VVcmwgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVXJsKGZpcmVCYXNlVXJsKTtcclxuICAgICAgICAvLyDlj5blvpfjgZfjgZ/nlLvlg4/jga7lkI3liY3jgpJmaXJlYmFzZeOBq+S/neWtmFxyXG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKVxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLnNldCh7XHJcbiAgICAgICAgICBcImltYWdldXJsXCI6ZmlyZUJhc2VVcmwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7bWVyZ2UgOiB0cnVlfSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlyZUJhc2VVcmwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gcGxvZmlsZWRpdCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9IC8+XHJcbiAgICAgICAgPGJ1dHRvbj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cInVwbG9hZGVkXCIgc3R5bGU9e3t9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuR2V0SW1hZ2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShHZXRJbWFnZSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdldEltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9