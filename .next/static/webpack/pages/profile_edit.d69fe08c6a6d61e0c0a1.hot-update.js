webpackHotUpdate_N_E("pages/profile_edit",{

/***/ "./components/sample.js":
/*!******************************!*\
  !*** ./components/sample.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-file-upload */ "./node_modules/use-file-upload/dist/index.modern.js");





var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\sample.js",
    _this = undefined,
    _s = $RefreshSig$();




var Sample = function Sample() {
  _s();

  var defaultSrc = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";

  var _useFileUpload = Object(use_file_upload__WEBPACK_IMPORTED_MODULE_5__["useFileUpload"])(),
      _useFileUpload2 = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useFileUpload, 2),
      files = _useFileUpload2[0],
      selectFiles = _useFileUpload2[1];

  var _useState = useState(null),
      _useState2 = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      imageurl = _useState2[0],
      setImageurl = _useState2[1];

  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email, userRef, setImage;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase.firestore();
              email = Lib.encodeEmail(props.email);
              userRef = db.collection("users").doc(email);
              setImage = userRef.set({
                profile: {
                  imagesorce: (files === null || files === void 0 ? void 0 : files.source) || defaultSrc
                }
              }, {
                merge: true
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getFireData() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: (files === null || files === void 0 ? void 0 : files.source) || defaultSrc,
      alt: "preview"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          selectFiles({
            accept: "image/*"
          }, function (_ref2) {
            var name = _ref2.name,
                size = _ref2.size,
                source = _ref2.source,
                file = _ref2.file;
            console.log("Files Selected", {
              name: name,
              size: size,
              source: source,
              file: file
            });
          });
          console.log(files);
        },
        children: "\u753B\u50CF\u3092\u30A2\u30C3\u30D7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Sample, "MAMI8DKbYvyczOsvghcRLx6zj9g=", false, function () {
  return [use_file_upload__WEBPACK_IMPORTED_MODULE_5__["useFileUpload"]];
});

_c = Sample;
/* harmony default export */ __webpack_exports__["default"] = (Sample);

var _c;

$RefreshReg$(_c, "Sample");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zYW1wbGUuanMiXSwibmFtZXMiOlsiU2FtcGxlIiwiZGVmYXVsdFNyYyIsInVzZUZpbGVVcGxvYWQiLCJmaWxlcyIsInNlbGVjdEZpbGVzIiwidXNlU3RhdGUiLCJpbWFnZXVybCIsInNldEltYWdldXJsIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInByb3BzIiwidXNlclJlZiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXRJbWFnZSIsInNldCIsInByb2ZpbGUiLCJpbWFnZXNvcmNlIiwic291cmNlIiwibWVyZ2UiLCJhY2NlcHQiLCJuYW1lIiwic2l6ZSIsImZpbGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxVQUFVLEdBQ2QscUdBREY7O0FBRG1CLHVCQUlVQyxxRUFBYSxFQUp2QjtBQUFBO0FBQUEsTUFJWkMsS0FKWTtBQUFBLE1BSUxDLFdBSks7O0FBQUEsa0JBTVlDLFFBQVEsQ0FBQyxJQUFELENBTnBCO0FBQUE7QUFBQSxNQU1aQyxRQU5ZO0FBQUEsTUFNSEMsV0FORzs7QUFRbkIsTUFBTUMsV0FBVztBQUFBLGtWQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYQyxnQkFEVyxHQUNOQyxRQUFRLENBQUNDLFNBQVQsRUFETTtBQUVYQyxtQkFGVyxHQUVIQyxHQUFHLENBQUNDLFdBQUosQ0FBZ0JDLEtBQUssQ0FBQ0gsS0FBdEIsQ0FGRztBQUdiSSxxQkFIYSxHQUdKUCxFQUFFLENBQUNRLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQk4sS0FBM0IsQ0FISTtBQUliTyxzQkFKYSxHQUlKSCxPQUFPLENBQUNJLEdBQVIsQ0FBWTtBQUN2QkMsdUJBQU8sRUFBQztBQUFFQyw0QkFBVSxFQUFFLENBQUFuQixLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRW9CLE1BQVAsS0FBaUJ0QjtBQUEvQjtBQURlLGVBQVosRUFFWDtBQUFDdUIscUJBQUssRUFBRTtBQUFSLGVBRlcsQ0FKSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFYaEIsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFLENBQUFMLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFFb0IsTUFBUCxLQUFpQnRCLFVBQTNCO0FBQXVDLFNBQUcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDZCQUNFO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JHLHFCQUFXLENBQUM7QUFBRXFCLGtCQUFNLEVBQUU7QUFBVixXQUFELEVBQXdCLGlCQUFrQztBQUFBLGdCQUEvQkMsSUFBK0IsU0FBL0JBLElBQStCO0FBQUEsZ0JBQXpCQyxJQUF5QixTQUF6QkEsSUFBeUI7QUFBQSxnQkFBbkJKLE1BQW1CLFNBQW5CQSxNQUFtQjtBQUFBLGdCQUFYSyxJQUFXLFNBQVhBLElBQVc7QUFDbkVDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QjtBQUFFSixrQkFBSSxFQUFKQSxJQUFGO0FBQVFDLGtCQUFJLEVBQUpBLElBQVI7QUFBY0osb0JBQU0sRUFBTkEsTUFBZDtBQUFzQkssa0JBQUksRUFBSkE7QUFBdEIsYUFBOUI7QUFDRCxXQUZVLENBQVg7QUFHQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsS0FBWjtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0FwQ0Q7O0dBQU1ILE07VUFJeUJFLDZEOzs7S0FKekJGLE07QUFzQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVfZWRpdC5kNjlmZTA4YzZhNmQ2MWUwYzBhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGaWxlVXBsb2FkIH0gZnJvbSBcInVzZS1maWxlLXVwbG9hZFwiO1xyXG4gXHJcbmNvbnN0IFNhbXBsZSA9ICgpID0+IHtcclxuICBjb25zdCBkZWZhdWx0U3JjID1cclxuICAgIFwiaHR0cHM6Ly93d3cucG5na2l0LmNvbS9wbmcvZnVsbC8zMDEtMzAxMjY5NF9hY2NvdW50LXVzZXItcHJvZmlsZS1hdmF0YXItY29tbWVudHMtZmEtdXNlci1jaXJjbGUucG5nXCI7XHJcbiBcclxuICBjb25zdCBbZmlsZXMsIHNlbGVjdEZpbGVzXSA9IHVzZUZpbGVVcGxvYWQoKTtcclxuICBcclxuICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGxldCB1c2VyUmVmPSBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGVtYWlsKTtcclxuICAgIGxldCBzZXRJbWFnZT11c2VyUmVmLnNldCh7XHJcbiAgICAgIHByb2ZpbGU6eyBpbWFnZXNvcmNlIDpmaWxlcz8uc291cmNlIHx8IGRlZmF1bHRTcmMgfVxyXG4gICAgfSx7bWVyZ2U6IHRydWV9KTtcclxuICAgIH1cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPXtmaWxlcz8uc291cmNlIHx8IGRlZmF1bHRTcmN9IGFsdD1cInByZXZpZXdcIiAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0RmlsZXMoeyBhY2NlcHQ6IFwiaW1hZ2UvKlwiIH0sICh7IG5hbWUsIHNpemUsIHNvdXJjZSwgZmlsZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlcyBTZWxlY3RlZFwiLCB7IG5hbWUsIHNpemUsIHNvdXJjZSwgZmlsZSB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDnlLvlg4/jgpLjgqLjg4Pjg5dcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZTsiXSwic291cmNlUm9vdCI6IiJ9