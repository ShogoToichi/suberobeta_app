webpackHotUpdate_N_E("pages/index",{

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
            item: _this2.props.items
          }
        }); //ログイン時の処理をpropsで受け取れるようにする
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
          items: []
        }
      });
      this.props.onLogouted();
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
          lineNumber: 67,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsImxvZ2luX2NoZWNrIiwiYmluZCIsInByb3ZpZGVyIiwiZmlyZWJhc2UiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2VsZiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsImxvZ2luIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIml0ZW0iLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJzaWduT3V0IiwiZGF0YSIsIm9uTG9nb3V0ZWQiLCJsb2dvdXQiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxPOzs7OztBQU1KLG1CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOLEVBRGdCLENBRWhCOztBQUZnQixrV0FMVjtBQUNOQyxjQUFRLEVBQUMsTUFESDtBQUVOQyxhQUFPLEVBQUM7QUFGRixLQUtVOztBQUdoQixVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLGtMQUFuQjtBQUhnQjtBQUlqQixHLENBRUQ7Ozs7OzRCQUNPO0FBQUE7O0FBQ0wsVUFBSUMsUUFBUSxHQUFHLElBQUlDLGlEQUFRLENBQUNDLElBQVQsQ0FBY0Msa0JBQWxCLEVBQWY7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBSCx1REFBUSxDQUFDQyxJQUFULEdBQWdCRyxlQUFoQixDQUFnQ0wsUUFBaEMsRUFDQTtBQURBLE9BRUdNLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVU7QUFDZCxjQUFJLENBQUNaLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQjtBQUNsQkMsY0FBSSxFQUFDLGFBRGE7QUFFbEJDLGVBQUssRUFBQztBQUNKQyxpQkFBSyxFQUFDLElBREY7QUFFSkMsb0JBQVEsRUFBRUwsTUFBTSxDQUFDTSxJQUFQLENBQVlDLFdBRmxCO0FBR0pDLGlCQUFLLEVBQUVSLE1BQU0sQ0FBQ00sSUFBUCxDQUFZRSxLQUhmO0FBSUpDLGdCQUFJLEVBQUMsTUFBSSxDQUFDckIsS0FBTCxDQUFXc0I7QUFKWjtBQUZZLFNBQXBCLEVBRGMsQ0FVZDtBQUNBOztBQUNELE9BZEg7QUFlRCxLLENBRUQ7Ozs7NkJBQ1E7QUFDTkMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBbEIsdURBQVEsQ0FBQ0MsSUFBVCxHQUFnQmtCLE9BQWhCO0FBQ0EsV0FBS3pCLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQjtBQUNsQkMsWUFBSSxFQUFDLGFBRGE7QUFFbEJDLGFBQUssRUFBQztBQUNKQyxlQUFLLEVBQUMsS0FERjtBQUVKQyxrQkFBUSxFQUFDLGVBRkw7QUFHSkcsZUFBSyxFQUFDLEVBSEY7QUFJSk0sY0FBSSxFQUFDLEVBSkQ7QUFLSkosZUFBSyxFQUFDO0FBTEY7QUFGWSxPQUFwQjtBQVVBLFdBQUt0QixLQUFMLENBQVcyQixVQUFYO0FBQ0QsSyxDQUVEOzs7O2tDQUNhO0FBQ1gsVUFBSSxLQUFLM0IsS0FBTCxDQUFXZ0IsS0FBWCxLQUFvQixLQUF4QixFQUE4QjtBQUM1QixhQUFLQSxLQUFMO0FBQ0QsT0FGRCxNQUVNO0FBQ0osYUFBS1ksTUFBTDtBQUNEO0FBQ0Y7Ozs2QkFFTztBQUNOLDBCQUNFO0FBQUcsaUJBQVMsRUFBQyxPQUFiO0FBQUEsK0JBQ0E7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQ0UsaUJBQU8sRUFBRSxLQUFLekIsV0FEaEI7QUFBQSxrQ0FFWSxLQUFLSCxLQUFMLENBQVdpQixRQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFRRDs7OztFQXBFbUJZLCtDOztBQXVFdEI5QixPQUFPLEdBQUcrQiwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFVQSxLQUFWO0FBQUEsQ0FBRCxDQUFQLENBQXlCaEMsT0FBekIsQ0FBVjtBQUNlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NWQyNjRlYjk2NTNhZWI5MDJjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdHlsZSA9IHtcclxuICAgIGZvbnRTaXplOlwiMTJwdFwiLFxyXG4gICAgcGFkZGluZzpcIjVweCAxMHB4XCJcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIOWxnuaAp+WApOOBqOOBl+OBpuS9v+OBhuOBn+OCgeOBq+ODkOOCpOODs+ODiVxyXG4gICAgdGhpcy5sb2dpbl9jaGVjayA9IHRoaXMubG9naW5fY2hlY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Kk44Oz5Yem55CGXHJcbiAgbG9naW4oKXtcclxuICAgIGxldCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgIC8v44Ot44Kw44Kk44Oz5Yem55CG5a6M5LqG5b6McmVzdWx044Gn5YCk44KS5Y+X44GR5Y+W44KKUmVkdXjjgbhcclxuICAgICAgLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6XCJVUERBVEVfVVNFUlwiLFxyXG4gICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICBsb2dpbjp0cnVlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogcmVzdWx0LnVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiByZXN1bHQudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgaXRlbTp0aGlzLnByb3BzLml0ZW1zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/jg63jgrDjgqTjg7PmmYLjga7lh6bnkIbjgpJwcm9wc+OBp+WPl+OBkeWPluOCjOOCi+OCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMub25Mb2dpbmVkKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/jg63jgrDjgqLjgqbjg4jmqZ/og71cclxuICBsb2dvdXQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOlwiVVBEQVRFX1VTRVJcIixcclxuICAgICAgdmFsdWU6e1xyXG4gICAgICAgIGxvZ2luOmZhbHNlLFxyXG4gICAgICAgIHVzZXJuYW1lOlwiKGNsaWNrIGhlcmUhKVwiLFxyXG4gICAgICAgIGVtYWlsOlwiXCIsXHJcbiAgICAgICAgZGF0YTpbXSxcclxuICAgICAgICBpdGVtczpbXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMub25Mb2dvdXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgLy/jg63jgrDjgqTjg7PjgIHjg63jgrDjgqLjgqbjg4jlh6bnkIbjgpLjgq/jg6rjg4Pjgq/mmYLjgavliIblspDjgZnjgovplqLmlbBcclxuICBsb2dpbl9jaGVjaygpe1xyXG4gICAgaWYgKHRoaXMucHJvcHMubG9naW4gPT09ZmFsc2Upe1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY291bnRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5fY2hlY2t9PlxyXG4gICAgICAgIExPR0lORUQ6IHt0aGlzLnByb3BzLnVzZXJuYW1lfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BY2NvdW50ID0gY29ubmVjdCgoc3RhdGUpPT4gc3RhdGUpKEFjY291bnQpO1xyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyJdLCJzb3VyY2VSb290IjoiIn0=