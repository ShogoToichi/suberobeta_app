webpackHotUpdate_N_E("pages/profile_edit",{

/***/ "./components/ProfileEdit.js":
/*!***********************************!*\
  !*** ./components/ProfileEdit.js ***!
  \***********************************/
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




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\ProfileEdit.js",
    _s = $RefreshSig$();








function ProfileEdit(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      introduction = _useState2[0],
      setIntroduction = _useState2[1];

  var doChangeName = function doChangeName(e) {
    setName(e.target.value);
  };

  var doChangeIntroduction = function doChangeIntroduction(e) {
    setIntroduction(e.target.value);
  };

  var doSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              _context.next = 4;
              return db.collection("lessons").doc(email).update({
                "profile.name": "といまん２"
              }).then(function () {
                console.log(name, introduction);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u540D\u524D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "\u7D39\u4ECB\u6587"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: doChangeIntroduction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: doSubmit,
      children: "\u5909\u66F4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, this);
}

_s(ProfileEdit, "lliEKUGuxrkfXLvgTfckokmj3/g=");

_c = ProfileEdit;
ProfileEdit = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
})(ProfileEdit);
/* harmony default export */ __webpack_exports__["default"] = (ProfileEdit);

var _c;

$RefreshReg$(_c, "ProfileEdit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRWRpdCIsInByb3BzIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImludHJvZHVjdGlvbiIsInNldEludHJvZHVjdGlvbiIsImRvQ2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvQ2hhbmdlSW50cm9kdWN0aW9uIiwiZG9TdWJtaXQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZW1haWwiLCJMaWIiLCJlbmNvZGVFbWFpbCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1cGRhdGUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxXQUFULENBQXNCQyxLQUF0QixFQUE0QjtBQUFBOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRW5CQyxJQUZtQjtBQUFBLE1BRWRDLE9BRmM7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsRUFBRCxDQUhwQjtBQUFBLE1BR3BCRyxZQUhvQjtBQUFBLE1BR1BDLGVBSE87O0FBSzFCLE1BQU1DLFlBQVksR0FBRSxTQUFkQSxZQUFjLENBQUNDLENBQUQsRUFBSztBQUN2QkosV0FBTyxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxvQkFBb0IsR0FBRSxTQUF0QkEsb0JBQXNCLENBQUNILENBQUQsRUFBSztBQUMvQkYsbUJBQWUsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsUUFBUTtBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxnQkFEUyxHQUNKQyxnREFBUSxDQUFDQyxTQUFULEVBREk7QUFFVEMsbUJBRlMsR0FFREMsMkRBQUcsQ0FBQ0MsV0FBSixDQUFnQmpCLEtBQUssQ0FBQ2UsS0FBdEIsQ0FGQztBQUFBO0FBQUEscUJBR1RILEVBQUUsQ0FBQ00sVUFBSCxDQUFjLFNBQWQsRUFBeUJDLEdBQXpCLENBQTZCSixLQUE3QixFQUFvQ0ssTUFBcEMsQ0FBMkM7QUFDL0MsZ0NBQWU7QUFEZ0MsZUFBM0MsRUFHSEMsSUFIRyxDQUdFLFlBQVU7QUFDZEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZckIsSUFBWixFQUFpQkUsWUFBakI7QUFDRCxlQUxHLENBSFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk8sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVlGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRUw7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsY0FBUSxFQUFFSTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRTtBQUFRLGFBQU8sRUFBRUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdHOztHQW5DTVosVzs7S0FBQUEsVztBQXFDVEEsV0FBVyxHQUFFeUIsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUQsQ0FBUCxDQUF3QjFCLFdBQXhCLENBQWI7QUFDZUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZV9lZGl0LjU3NDJmM2QxNmNhZTliNWQ4MzVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9maWxlRWRpdCAocHJvcHMpe1xyXG5cclxuICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0W2ludHJvZHVjdGlvbixzZXRJbnRyb2R1Y3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRvQ2hhbmdlTmFtZSA9KGUpPT57XHJcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgZG9DaGFuZ2VJbnRyb2R1Y3Rpb24gPShlKT0+e1xyXG4gICAgc2V0SW50cm9kdWN0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRvU3VibWl0ID0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5lbmNvZGVFbWFpbChwcm9wcy5lbWFpbClcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhlbWFpbCkudXBkYXRlKHtcclxuICAgICAgXCJwcm9maWxlLm5hbWVcIjpcIuOBqOOBhOOBvuOCk++8klwiLFxyXG4gICAgICBcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLGludHJvZHVjdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxoMj7jg5fjg63jg5XjgqPjg7zjg6vnt6jpm4Y8L2gyPlxyXG4gICAgPHA+5ZCN5YmNPC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2RvQ2hhbmdlTmFtZX0+PC9pbnB1dD5cclxuICAgIDxwPue0ueS7i+aWhzwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtkb0NoYW5nZUludHJvZHVjdGlvbn0+PC9pbnB1dD5cclxuICAgIHsvKiA8TGluayBocmVmPVwiL215cGFnZVwiPiAqL31cclxuICAgIDxidXR0b24gb25DbGljaz17ZG9TdWJtaXR9PuWkieabtDwvYnV0dG9uPlxyXG4gICAgey8qIDwvTGluaz4gKi99XHJcbiAgPC9kaXY+XHJcbik7fVxyXG5cclxuUHJvZmlsZUVkaXQgPWNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKFByb2ZpbGVFZGl0KTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUVkaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=