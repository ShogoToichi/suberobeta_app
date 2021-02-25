webpackHotUpdate_N_E("pages/message/[lessonid]",{

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");








var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\Account.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Account = /*#__PURE__*/function (_Component) {
  Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Account, _Component);

  var _super = _createSuper(Account);

  function Account(props) {
    var _this;

    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Account);

    _this = _super.call(this, props); // 属性値として使うためにバインド

    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    _this.login_check = _this.login_check.bind(Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  } //ログイン処理


  Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Account, [{
    key: "login",
    value: function login() {
      var _this2 = this;

      firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth.Auth.Persistence.LOCAL);
      var provider = new firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth.GoogleAuthProvider();
      var self = this;
      firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth().signInWithPopup(provider) //ログイン処理完了後resultで値を受け取りReduxへ
      .then(function (result) {
        _this2.props.dispatch({
          type: "UPDATE_USER",
          value: {
            login: true,
            username: result.user.displayName,
            email: result.user.email,
            imageurl: ""
          }
        }); //ログイン時の処理をpropsで受け取れるようにする
        //とりま使ってない
        // this.props.onLogined();

      });
    } //ログアウト機能

  }, {
    key: "logout",
    value: function logout() {
      console.log("logout");
      firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth().signOut();
      this.props.dispatch({
        type: "UPDATE_USER",
        value: {
          login: false,
          username: "(click here!)",
          email: "",
          data: [],
          imageurl: ""
        }
      }); // this.props.onLogouted();
    } //ログイン、ログアウト処理をクリック時に分岐する関数

  }, {
    key: "login_check",
    value: function login_check() {
      if (this.props.login === false) {
        this.login();
      } else {
        this.logout();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "account",
          onClick: this.login_check,
          children: ["LOGINED: ", this.props.username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, this);
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Account = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(Account);
/* harmony default export */ __webpack_exports__["default"] = (Account);

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

/***/ "./pages/message/[lessonid].js":
/*!*************************************!*\
  !*** ./pages/message/[lessonid].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return message; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Message */ "./components/Message.js");
/* harmony import */ var _components_MessageAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MessageAdd */ "./components/MessageAdd.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Account */ "./components/Account.js");

var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\pages\\message\\[lessonid].js";





function message() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Message__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MessageAdd__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tZXNzYWdlL1tsZXNzb25pZF0uanMiXSwibmFtZXMiOlsiQWNjb3VudCIsInByb3BzIiwiZm9udFNpemUiLCJwYWRkaW5nIiwibG9naW5fY2hlY2siLCJiaW5kIiwiZmlyZWJhc2UiLCJhdXRoIiwic2V0UGVyc2lzdGVuY2UiLCJBdXRoIiwiUGVyc2lzdGVuY2UiLCJMT0NBTCIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2VsZiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsImxvZ2luIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsImltYWdldXJsIiwiY29uc29sZSIsImxvZyIsInNpZ25PdXQiLCJkYXRhIiwibG9nb3V0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBTUosbUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsOEJBQU1BLEtBQU4sRUFEZ0IsQ0FFaEI7O0FBRmdCLGtXQUxWO0FBQ05DLGNBQVEsRUFBQyxNQURIO0FBRU5DLGFBQU8sRUFBQztBQUZGLEtBS1U7O0FBR2hCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsa0xBQW5CO0FBSGdCO0FBSWpCLEcsQ0FFRDs7Ozs7NEJBQ087QUFBQTs7QUFDTEMsdURBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsY0FBaEIsQ0FBK0JGLGlEQUFRLENBQUNDLElBQVQsQ0FBY0UsSUFBZCxDQUFtQkMsV0FBbkIsQ0FBK0JDLEtBQTlEO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLElBQUlOLGlEQUFRLENBQUNDLElBQVQsQ0FBY00sa0JBQWxCLEVBQWY7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBUix1REFBUSxDQUFDQyxJQUFULEdBQWdCUSxlQUFoQixDQUFnQ0gsUUFBaEMsRUFDQTtBQURBLE9BRUdJLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVU7QUFDZCxjQUFJLENBQUNoQixLQUFMLENBQVdpQixRQUFYLENBQW9CO0FBQ2xCQyxjQUFJLEVBQUMsYUFEYTtBQUVsQkMsZUFBSyxFQUFDO0FBQ0pDLGlCQUFLLEVBQUMsSUFERjtBQUVKQyxvQkFBUSxFQUFFTCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsV0FGbEI7QUFHSkMsaUJBQUssRUFBRVIsTUFBTSxDQUFDTSxJQUFQLENBQVlFLEtBSGY7QUFJSkMsb0JBQVEsRUFBRztBQUpQO0FBRlksU0FBcEIsRUFEYyxDQVVkO0FBQ0E7QUFDQTs7QUFDRCxPQWZIO0FBZ0JELEssQ0FFRDs7Ozs2QkFDUTtBQUNOQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0F0Qix1REFBUSxDQUFDQyxJQUFULEdBQWdCc0IsT0FBaEI7QUFDQSxXQUFLNUIsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQjtBQUNsQkMsWUFBSSxFQUFDLGFBRGE7QUFFbEJDLGFBQUssRUFBQztBQUNKQyxlQUFLLEVBQUMsS0FERjtBQUVKQyxrQkFBUSxFQUFDLGVBRkw7QUFHSkcsZUFBSyxFQUFDLEVBSEY7QUFJSkssY0FBSSxFQUFDLEVBSkQ7QUFLSkosa0JBQVEsRUFBQztBQUxMO0FBRlksT0FBcEIsRUFITSxDQWFOO0FBQ0QsSyxDQUVEOzs7O2tDQUNhO0FBQ1gsVUFBSSxLQUFLekIsS0FBTCxDQUFXb0IsS0FBWCxLQUFvQixLQUF4QixFQUE4QjtBQUM1QixhQUFLQSxLQUFMO0FBQ0QsT0FGRCxNQUVNO0FBQ0osYUFBS1UsTUFBTDtBQUNEO0FBQ0Y7Ozs2QkFFTztBQUNOLDBCQUNFO0FBQUcsaUJBQVMsRUFBQyxPQUFiO0FBQUEsK0JBQ0E7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQ0UsaUJBQU8sRUFBRSxLQUFLM0IsV0FEaEI7QUFBQSxrQ0FFWSxLQUFLSCxLQUFMLENBQVdxQixRQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFRRDs7OztFQXRFbUJVLCtDOztBQXlFdEJoQyxPQUFPLEdBQUdpQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFVQSxLQUFWO0FBQUEsQ0FBRCxDQUFQLENBQXlCbEMsT0FBekIsQ0FBVjtBQUNlQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTbUMsT0FBVCxHQUFrQjtBQUMvQixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsOEJBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS5hYTUyMmQxYWEzYjA1NDkwMjFkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdHlsZSA9IHtcclxuICAgIGZvbnRTaXplOlwiMTJwdFwiLFxyXG4gICAgcGFkZGluZzpcIjVweCAxMHB4XCJcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIOWxnuaAp+WApOOBqOOBl+OBpuS9v+OBhuOBn+OCgeOBq+ODkOOCpOODs+ODiVxyXG4gICAgdGhpcy5sb2dpbl9jaGVjayA9IHRoaXMubG9naW5fY2hlY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Kk44Oz5Yem55CGXHJcbiAgbG9naW4oKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zZXRQZXJzaXN0ZW5jZShmaXJlYmFzZS5hdXRoLkF1dGguUGVyc2lzdGVuY2UuTE9DQUwpXHJcbiAgICBsZXQgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXHJcbiAgICAvL+ODreOCsOOCpOODs+WHpueQhuWujOS6huW+jHJlc3VsdOOBp+WApOOCkuWPl+OBkeWPluOCilJlZHV444G4XHJcbiAgICAgIC50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOlwiVVBEQVRFX1VTRVJcIixcclxuICAgICAgICAgIHZhbHVlOntcclxuICAgICAgICAgICAgbG9naW46dHJ1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHJlc3VsdC51c2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogcmVzdWx0LnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIGltYWdldXJsIDogXCJcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+ODreOCsOOCpOODs+aZguOBruWHpueQhuOCknByb3Bz44Gn5Y+X44GR5Y+W44KM44KL44KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgLy/jgajjgorjgb7kvb/jgaPjgabjgarjgYRcclxuICAgICAgICAvLyB0aGlzLnByb3BzLm9uTG9naW5lZCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Ki44Km44OI5qmf6IO9XHJcbiAgbG9nb3V0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpcIlVQREFURV9VU0VSXCIsXHJcbiAgICAgIHZhbHVlOntcclxuICAgICAgICBsb2dpbjpmYWxzZSxcclxuICAgICAgICB1c2VybmFtZTpcIihjbGljayBoZXJlISlcIixcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIGRhdGE6W10sXHJcbiAgICAgICAgaW1hZ2V1cmw6XCJcIlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgLy/jg63jgrDjgqTjg7PjgIHjg63jgrDjgqLjgqbjg4jlh6bnkIbjgpLjgq/jg6rjg4Pjgq/mmYLjgavliIblspDjgZnjgovplqLmlbBcclxuICBsb2dpbl9jaGVjaygpe1xyXG4gICAgaWYgKHRoaXMucHJvcHMubG9naW4gPT09ZmFsc2Upe1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY291bnRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5fY2hlY2t9PlxyXG4gICAgICAgIExPR0lORUQ6IHt0aGlzLnByb3BzLnVzZXJuYW1lfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BY2NvdW50ID0gY29ubmVjdCgoc3RhdGUpPT4gc3RhdGUpKEFjY291bnQpO1xyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZVwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlQWRkXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FjY291bnRcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lc3NhZ2UoKXtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxNZXNzYWdlLz5cclxuICAgICAgICA8TWVzc2FnZUFkZC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==