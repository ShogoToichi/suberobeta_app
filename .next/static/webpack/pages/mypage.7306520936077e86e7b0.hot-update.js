webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/MyProfile.js":
/*!*********************************!*\
  !*** ./components/MyProfile.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MyProfile.js",
    _s = $RefreshSig$();

//要追加 : 画像アップロード







function MyProfile(props) {
  _s();

  //ステートの設定
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no data"),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no data"),
      introduction = _useState2[0],
      setIntroduction = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      imageurl = _useState3[0],
      setImageurl = _useState3[1]; //emailにReduxからユーザーのemailを取得
  //emailで参照


  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              _context.next = 4;
              return db.collection("users").doc(email).get().then(function (doc) {
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

  if (name == "no data") {
    getFireData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("image", {
      src: imageurl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: introduction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/profile_edit",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(MyProfile, "BDAlfeQTnfJjvNb5iosETph5vKo=");

_c = MyProfile;
MyProfile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(MyProfile);
/* harmony default export */ __webpack_exports__["default"] = (MyProfile);

var _c;

$RefreshReg$(_c, "MyProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVByb2ZpbGUuanMiXSwibmFtZXMiOlsiTXlQcm9maWxlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiaW1hZ2V1cmwiLCJzZXRJbWFnZXVybCIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInByb2ZpbGVkYXRhIiwiZGF0YSIsInByb2ZpbGUiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRSxTQUFTQSxTQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUN4QjtBQUR3QixrQkFFSEMsc0RBQVEsQ0FBQyxTQUFELENBRkw7QUFBQSxNQUVuQkMsSUFGbUI7QUFBQSxNQUVkQyxPQUZjOztBQUFBLG1CQUdhRixzREFBUSxDQUFDLFNBQUQsQ0FIckI7QUFBQSxNQUduQkcsWUFIbUI7QUFBQSxNQUdOQyxlQUhNOztBQUFBLG1CQUlLSixzREFBUSxDQUFDLElBQUQsQ0FKYjtBQUFBLE1BSW5CSyxRQUptQjtBQUFBLE1BSVZDLFdBSlUsa0JBTTFCO0FBQ0E7OztBQUNBLE1BQU1DLFdBQVc7QUFBQSxrVkFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsZ0JBRFcsR0FDTkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURNO0FBRVhDLG1CQUZXLEdBRUhDLDJEQUFHLENBQUNDLFdBQUosQ0FBZ0JkLEtBQUssQ0FBQ1ksS0FBdEIsQ0FGRztBQUFBO0FBQUEscUJBR1hILEVBQUUsQ0FBQ00sVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCSixLQUEzQixFQUFrQ0ssR0FBbEMsR0FDTEMsSUFESyxDQUNBLFVBQVNGLEdBQVQsRUFBYTtBQUNqQixvQkFBTUcsV0FBVyxHQUFHSCxHQUFHLENBQUNJLElBQUosRUFBcEI7QUFDQWpCLHVCQUFPLENBQUNnQixXQUFXLENBQUNFLE9BQVosQ0FBb0JuQixJQUFyQixDQUFQO0FBQ0FHLCtCQUFlLENBQUNjLFdBQVcsQ0FBQ0UsT0FBWixDQUFvQmpCLFlBQXJCLENBQWY7QUFDQUcsMkJBQVcsQ0FBQ1ksV0FBVyxDQUFDRSxPQUFaLENBQW9CZixRQUFyQixDQUFYO0FBQ0QsZUFOSyxDQUhXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQVhFLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBWUEsTUFBR04sSUFBSSxJQUFJLFNBQVgsRUFBcUI7QUFDbkJNLGVBQVc7QUFDWjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFPLFNBQUcsRUFBRUY7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGdCQUFLSjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsZ0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBbkNVTCxTOztLQUFBQSxTO0FBc0NYQSxTQUFTLEdBQUV1QiwyREFBTyxDQUFFLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRixDQUFQLENBQXlCeEIsU0FBekIsQ0FBWDtBQUNlQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBhZ2UuNzMwNjUyMDkzNjA3N2U4NmU3YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6KaB6L+95YqgIDog55S75YOP44Ki44OD44OX44Ot44O844OJXHJcblxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbiAgZnVuY3Rpb24gTXlQcm9maWxlIChwcm9wcyl7XHJcbiAgICAvL+OCueODhuODvOODiOOBruioreWumlxyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoXCJubyBkYXRhXCIpO1xyXG4gIGNvbnN0IFtpbnRyb2R1Y3Rpb24sc2V0SW50cm9kdWN0aW9uXSA9IHVzZVN0YXRlKFwibm8gZGF0YVwiKTtcclxuICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vZW1haWzjgatSZWR1eOOBi+OCieODpuODvOOCtuODvOOBrmVtYWls44KS5Y+W5b6XXHJcbiAgLy9lbWFpbOOBp+WPgueFp1xyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoZW1haWwpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBwcm9maWxlZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgIHNldE5hbWUocHJvZmlsZWRhdGEucHJvZmlsZS5uYW1lKTtcclxuICAgICAgc2V0SW50cm9kdWN0aW9uKHByb2ZpbGVkYXRhLnByb2ZpbGUuaW50cm9kdWN0aW9uKTtcclxuICAgICAgc2V0SW1hZ2V1cmwocHJvZmlsZWRhdGEucHJvZmlsZS5pbWFnZXVybCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaWYobmFtZSA9PSBcIm5vIGRhdGFcIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+44OX44Ot44OV44Kj44O844OrPC9oMT5cclxuICAgICAgPGltYWdlIHNyYz17aW1hZ2V1cmx9Lz5cclxuICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgIDxwPntpbnRyb2R1Y3Rpb259PC9wPlxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVfZWRpdFwiPlxyXG4gICAgICAgIDxidXR0b24+44OX44Ot44OV44Kj44O844Or57eo6ZuGPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbk15UHJvZmlsZT0gY29ubmVjdCAoKHN0YXRlKT0+c3RhdGUpKE15UHJvZmlsZSk7XHJcbmV4cG9ydCBkZWZhdWx0IE15UHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9