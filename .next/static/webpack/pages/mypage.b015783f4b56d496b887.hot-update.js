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








function MyProfile(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no data"),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no data"),
      introduction = _useState2[0],
      setIntroduction = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      imageurl = _useState3[0],
      setImageurl = _useState3[1];

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

  var conso = function conso() {
    console.log(imageurl);
    getFireData();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("image", {
      src: "blob:http://localhost:3000/bf4c11bb-691a-4d64-94f0-bd13ecd37752"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: introduction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: conso,
      children: "conso"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/profile_edit",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVByb2ZpbGUuanMiXSwibmFtZXMiOlsiTXlQcm9maWxlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwiaW1hZ2V1cmwiLCJzZXRJbWFnZXVybCIsImdldEZpcmVEYXRhIiwiZGIiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInByb2ZpbGVkYXRhIiwiZGF0YSIsInByb2ZpbGUiLCJjb25zbyIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUUsU0FBU0EsU0FBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxTQUFELENBREw7QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNkQyxPQURjOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLFNBQUQsQ0FGckI7QUFBQSxNQUVuQkcsWUFGbUI7QUFBQSxNQUVOQyxlQUZNOztBQUFBLG1CQUdLSixzREFBUSxDQUFDLElBQUQsQ0FIYjtBQUFBLE1BR25CSyxRQUhtQjtBQUFBLE1BR1ZDLFdBSFU7O0FBSzFCLE1BQU1DLFdBQVc7QUFBQSxrVkFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsZ0JBRFcsR0FDTkMsZ0RBQVEsQ0FBQ0MsU0FBVCxFQURNO0FBRVhDLG1CQUZXLEdBRUhDLDJEQUFHLENBQUNDLFdBQUosQ0FBZ0JkLEtBQUssQ0FBQ1ksS0FBdEIsQ0FGRztBQUFBO0FBQUEscUJBR1hILEVBQUUsQ0FBQ00sVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCSixLQUEzQixFQUFrQ0ssR0FBbEMsR0FDTEMsSUFESyxDQUNBLFVBQVNGLEdBQVQsRUFBYTtBQUNqQixvQkFBTUcsV0FBVyxHQUFHSCxHQUFHLENBQUNJLElBQUosRUFBcEI7QUFDQWpCLHVCQUFPLENBQUNnQixXQUFXLENBQUNFLE9BQVosQ0FBb0JuQixJQUFyQixDQUFQO0FBQ0FHLCtCQUFlLENBQUNjLFdBQVcsQ0FBQ0UsT0FBWixDQUFvQmpCLFlBQXJCLENBQWY7QUFDQUcsMkJBQVcsQ0FBQ1ksV0FBVyxDQUFDRSxPQUFaLENBQW9CZixRQUFyQixDQUFYO0FBQ0QsZUFOSyxDQUhXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQVhFLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBWUEsTUFBTWMsS0FBSyxHQUFFLFNBQVBBLEtBQU8sR0FBSTtBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFFBQVo7QUFDQUUsZUFBVztBQUNaLEdBSEQ7O0FBS0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTyxTQUFHLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGdCQUFLTjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsZ0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBUSxhQUFPLEVBQUVrQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBbENVdkIsUzs7S0FBQUEsUztBQXFDWEEsU0FBUyxHQUFFMEIsMkRBQU8sQ0FBRSxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUYsQ0FBUCxDQUF5QjNCLFNBQXpCLENBQVg7QUFDZUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlwYWdlLmIwMTU3ODNmNGI1NmQ0OTZiODg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbiAgZnVuY3Rpb24gTXlQcm9maWxlIChwcm9wcyl7XHJcbiAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZShcIm5vIGRhdGFcIik7XHJcbiAgY29uc3QgW2ludHJvZHVjdGlvbixzZXRJbnRyb2R1Y3Rpb25dID0gdXNlU3RhdGUoXCJubyBkYXRhXCIpO1xyXG4gIGNvbnN0IFtpbWFnZXVybCxzZXRJbWFnZXVybF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhlbWFpbCkuZ2V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IHByb2ZpbGVkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgc2V0TmFtZShwcm9maWxlZGF0YS5wcm9maWxlLm5hbWUpO1xyXG4gICAgICBzZXRJbnRyb2R1Y3Rpb24ocHJvZmlsZWRhdGEucHJvZmlsZS5pbnRyb2R1Y3Rpb24pO1xyXG4gICAgICBzZXRJbWFnZXVybChwcm9maWxlZGF0YS5wcm9maWxlLmltYWdldXJsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjb25zbyA9KCk9PntcclxuICAgIGNvbnNvbGUubG9nKGltYWdldXJsKTtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT7jg5fjg63jg5XjgqPjg7zjg6s8L2gxPlxyXG4gICAgICA8aW1hZ2Ugc3JjPXtcImJsb2I6aHR0cDovL2xvY2FsaG9zdDozMDAwL2JmNGMxMWJiLTY5MWEtNGQ2NC05NGYwLWJkMTNlY2QzNzc1MlwifS8+XHJcbiAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgICA8cD57aW50cm9kdWN0aW9ufTwvcD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25zb30+Y29uc288L2J1dHRvbj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlX2VkaXRcIj5cclxuICAgICAgICA8YnV0dG9uPuODl+ODreODleOCo+ODvOODq+e3qOmbhjwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5NeVByb2ZpbGU9IGNvbm5lY3QgKChzdGF0ZSk9PnN0YXRlKShNeVByb2ZpbGUpO1xyXG5leHBvcnQgZGVmYXVsdCBNeVByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==