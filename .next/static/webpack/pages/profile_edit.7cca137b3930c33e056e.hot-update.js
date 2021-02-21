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
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase.firestore();
              email = Lib.encodeEmail(props.email);
              _context.next = 4;
              return db.collection("users").doc(email).set({
                profile: {
                  ima: ima
                }
              }).then(function (doc) {
                var profiledata = doc.data();
                setName(profiledata.profile.name);
                setIntroduction(profiledata.profile.introduction);
                setImageurl(profiledata.profile.imageurl);
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
      lineNumber: 28,
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
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zYW1wbGUuanMiXSwibmFtZXMiOlsiU2FtcGxlIiwiZGVmYXVsdFNyYyIsInVzZUZpbGVVcGxvYWQiLCJmaWxlcyIsInNlbGVjdEZpbGVzIiwidXNlU3RhdGUiLCJpbWFnZXVybCIsInNldEltYWdldXJsIiwiZ2V0RmlyZURhdGEiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsInByb3BzIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInByb2ZpbGUiLCJpbWEiLCJ0aGVuIiwicHJvZmlsZWRhdGEiLCJkYXRhIiwic2V0TmFtZSIsIm5hbWUiLCJzZXRJbnRyb2R1Y3Rpb24iLCJpbnRyb2R1Y3Rpb24iLCJzb3VyY2UiLCJhY2NlcHQiLCJzaXplIiwiZmlsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFVBQVUsR0FDZCxxR0FERjs7QUFEbUIsdUJBSVVDLHFFQUFhLEVBSnZCO0FBQUE7QUFBQSxNQUlaQyxLQUpZO0FBQUEsTUFJTEMsV0FKSzs7QUFBQSxrQkFNWUMsUUFBUSxDQUFDLElBQUQsQ0FOcEI7QUFBQTtBQUFBLE1BTVpDLFFBTlk7QUFBQSxNQU1IQyxXQU5HOztBQVFuQixNQUFNQyxXQUFXO0FBQUEsa1ZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGdCQURXLEdBQ05DLFFBQVEsQ0FBQ0MsU0FBVCxFQURNO0FBRVhDLG1CQUZXLEdBRUhDLEdBQUcsQ0FBQ0MsV0FBSixDQUFnQkMsS0FBSyxDQUFDSCxLQUF0QixDQUZHO0FBQUE7QUFBQSxxQkFHWEgsRUFBRSxDQUFDTyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJMLEtBQTNCLEVBQWtDTSxHQUFsQyxDQUFzQztBQUMxQ0MsdUJBQU8sRUFBQztBQUFFQyxxQkFBRyxFQUFIQTtBQUFGO0FBRGtDLGVBQXRDLEVBR0xDLElBSEssQ0FHQSxVQUFTSixHQUFULEVBQWE7QUFDakIsb0JBQU1LLFdBQVcsR0FBR0wsR0FBRyxDQUFDTSxJQUFKLEVBQXBCO0FBQ0FDLHVCQUFPLENBQUNGLFdBQVcsQ0FBQ0gsT0FBWixDQUFvQk0sSUFBckIsQ0FBUDtBQUNBQywrQkFBZSxDQUFDSixXQUFXLENBQUNILE9BQVosQ0FBb0JRLFlBQXJCLENBQWY7QUFDQXBCLDJCQUFXLENBQUNlLFdBQVcsQ0FBQ0gsT0FBWixDQUFvQmIsUUFBckIsQ0FBWDtBQUNELGVBUkssQ0FIVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFYRSxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQWNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUUsQ0FBQUwsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUV5QixNQUFQLEtBQWlCM0IsVUFBM0I7QUFBdUMsU0FBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsNkJBQ0U7QUFDRSxlQUFPLEVBQUUsbUJBQU07QUFDYkcscUJBQVcsQ0FBQztBQUFFeUIsa0JBQU0sRUFBRTtBQUFWLFdBQUQsRUFBd0IsaUJBQWtDO0FBQUEsZ0JBQS9CSixJQUErQixTQUEvQkEsSUFBK0I7QUFBQSxnQkFBekJLLElBQXlCLFNBQXpCQSxJQUF5QjtBQUFBLGdCQUFuQkYsTUFBbUIsU0FBbkJBLE1BQW1CO0FBQUEsZ0JBQVhHLElBQVcsU0FBWEEsSUFBVztBQUNuRUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCO0FBQUVSLGtCQUFJLEVBQUpBLElBQUY7QUFBUUssa0JBQUksRUFBSkEsSUFBUjtBQUFjRixvQkFBTSxFQUFOQSxNQUFkO0FBQXNCRyxrQkFBSSxFQUFKQTtBQUF0QixhQUE5QjtBQUNELFdBRlUsQ0FBWDtBQUdBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVk5QixLQUFaO0FBQ0QsU0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXhDRDs7R0FBTUgsTTtVQUl5QkUsNkQ7OztLQUp6QkYsTTtBQTBDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZV9lZGl0LjdjY2ExMzdiMzkzMGMzM2UwNTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZpbGVVcGxvYWQgfSBmcm9tIFwidXNlLWZpbGUtdXBsb2FkXCI7XHJcbiBcclxuY29uc3QgU2FtcGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRTcmMgPVxyXG4gICAgXCJodHRwczovL3d3dy5wbmdraXQuY29tL3BuZy9mdWxsLzMwMS0zMDEyNjk0X2FjY291bnQtdXNlci1wcm9maWxlLWF2YXRhci1jb21tZW50cy1mYS11c2VyLWNpcmNsZS5wbmdcIjtcclxuIFxyXG4gIGNvbnN0IFtmaWxlcywgc2VsZWN0RmlsZXNdID0gdXNlRmlsZVVwbG9hZCgpO1xyXG4gIFxyXG4gIGNvbnN0IFtpbWFnZXVybCxzZXRJbWFnZXVybF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuc2V0KHtcclxuICAgICAgcHJvZmlsZTp7IGltYSB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgcHJvZmlsZWRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICBzZXROYW1lKHByb2ZpbGVkYXRhLnByb2ZpbGUubmFtZSk7XHJcbiAgICAgIHNldEludHJvZHVjdGlvbihwcm9maWxlZGF0YS5wcm9maWxlLmludHJvZHVjdGlvbik7XHJcbiAgICAgIHNldEltYWdldXJsKHByb2ZpbGVkYXRhLnByb2ZpbGUuaW1hZ2V1cmwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZyBzcmM9e2ZpbGVzPy5zb3VyY2UgfHwgZGVmYXVsdFNyY30gYWx0PVwicHJldmlld1wiIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RGaWxlcyh7IGFjY2VwdDogXCJpbWFnZS8qXCIgfSwgKHsgbmFtZSwgc2l6ZSwgc291cmNlLCBmaWxlIH0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGVzIFNlbGVjdGVkXCIsIHsgbmFtZSwgc2l6ZSwgc291cmNlLCBmaWxlIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOeUu+WDj+OCkuOCouODg+ODl1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=