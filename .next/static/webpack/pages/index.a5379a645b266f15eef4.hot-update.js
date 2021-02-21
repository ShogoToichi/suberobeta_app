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
            // data:this.props.data,
            item: _this2.props.items
          }
        }); // this.props.onLogined();

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
          // data:[],
          items: []
        }
      }); // this.props.onLogouted();
    } //ログイン、ログアウトのチェックマーク

  }, {
    key: "login_check",
    value: function login_check() {
      if (this.props.login === false) {
        this.login();
      } else {
        this.logout();
      }
    } //レンダリング

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
          lineNumber: 68,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsImxvZ2luX2NoZWNrIiwiYmluZCIsInByb3ZpZGVyIiwiZmlyZWJhc2UiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2VsZiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsImxvZ2luIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIml0ZW0iLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJzaWduT3V0IiwibG9nb3V0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsTzs7Ozs7QUFNSixtQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsS0FBTixFQURnQixDQUVoQjs7QUFGZ0Isa1dBTFY7QUFDTkMsY0FBUSxFQUFDLE1BREg7QUFFTkMsYUFBTyxFQUFDO0FBRkYsS0FLVTs7QUFHaEIsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixrTEFBbkI7QUFIZ0I7QUFJakIsRyxDQUVEOzs7Ozs0QkFDTztBQUFBOztBQUNMLFVBQUlDLFFBQVEsR0FBRyxJQUFJQyxpREFBUSxDQUFDQyxJQUFULENBQWNDLGtCQUFsQixFQUFmO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUgsdURBQVEsQ0FBQ0MsSUFBVCxHQUFnQkcsZUFBaEIsQ0FBZ0NMLFFBQWhDLEVBQ0E7QUFEQSxPQUVHTSxJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFVO0FBQ2QsY0FBSSxDQUFDWixLQUFMLENBQVdhLFFBQVgsQ0FBb0I7QUFDbEJDLGNBQUksRUFBQyxhQURhO0FBRWxCQyxlQUFLLEVBQUM7QUFDSkMsaUJBQUssRUFBQyxJQURGO0FBRUpDLG9CQUFRLEVBQUVMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQyxXQUZsQjtBQUdKQyxpQkFBSyxFQUFFUixNQUFNLENBQUNNLElBQVAsQ0FBWUUsS0FIZjtBQUlKO0FBQ0FDLGdCQUFJLEVBQUMsTUFBSSxDQUFDckIsS0FBTCxDQUFXc0I7QUFMWjtBQUZZLFNBQXBCLEVBRGMsQ0FXZDs7QUFDRCxPQWRIO0FBZUQsSyxDQUVEOzs7OzZCQUNRO0FBQ05DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQWxCLHVEQUFRLENBQUNDLElBQVQsR0FBZ0JrQixPQUFoQjtBQUNBLFdBQUt6QixLQUFMLENBQVdhLFFBQVgsQ0FBb0I7QUFDbEJDLFlBQUksRUFBQyxhQURhO0FBRWxCQyxhQUFLLEVBQUM7QUFDSkMsZUFBSyxFQUFDLEtBREY7QUFFSkMsa0JBQVEsRUFBQyxlQUZMO0FBR0pHLGVBQUssRUFBQyxFQUhGO0FBSUo7QUFDQUUsZUFBSyxFQUFDO0FBTEY7QUFGWSxPQUFwQixFQUhNLENBYU47QUFDRCxLLENBRUQ7Ozs7a0NBQ2E7QUFDWCxVQUFJLEtBQUt0QixLQUFMLENBQVdnQixLQUFYLEtBQW9CLEtBQXhCLEVBQThCO0FBQzVCLGFBQUtBLEtBQUw7QUFDRCxPQUZELE1BRU07QUFDSixhQUFLVSxNQUFMO0FBQ0Q7QUFDRixLLENBRUQ7Ozs7NkJBQ1E7QUFDTiwwQkFDRTtBQUFHLGlCQUFTLEVBQUMsT0FBYjtBQUFBLCtCQUNBO0FBQU0sbUJBQVMsRUFBQyxTQUFoQjtBQUNFLGlCQUFPLEVBQUUsS0FBS3ZCLFdBRGhCO0FBQUEsa0NBRVksS0FBS0gsS0FBTCxDQUFXaUIsUUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBUUQ7Ozs7RUFyRW1CVSwrQzs7QUF3RXRCNUIsT0FBTyxHQUFHNkIsMkRBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBVUEsS0FBVjtBQUFBLENBQUQsQ0FBUCxDQUF5QjlCLE9BQXpCLENBQVY7QUFDZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTUzNzlhNjQ1YjI2NmYxNWVlZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3R5bGUgPSB7XHJcbiAgICBmb250U2l6ZTpcIjEycHRcIixcclxuICAgIHBhZGRpbmc6XCI1cHggMTBweFwiXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvLyDlsZ7mgKflgKTjgajjgZfjgabkvb/jgYbjgZ/jgoHjgavjg5DjgqTjg7Pjg4lcclxuICAgIHRoaXMubG9naW5fY2hlY2sgPSB0aGlzLmxvZ2luX2NoZWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvL+ODreOCsOOCpOODs+WHpueQhlxyXG4gIGxvZ2luKCl7XHJcbiAgICBsZXQgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXHJcbiAgICAvL+ODreOCsOOCpOODs+WHpueQhuWujOS6huW+jHJlc3VsdOOBp+WApOOCkuWPl+OBkeWPluOCilJlZHV444G4XHJcbiAgICAgIC50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOlwiVVBEQVRFX1VTRVJcIixcclxuICAgICAgICAgIHZhbHVlOntcclxuICAgICAgICAgICAgbG9naW46dHJ1ZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHJlc3VsdC51c2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogcmVzdWx0LnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6dGhpcy5wcm9wcy5kYXRhLFxyXG4gICAgICAgICAgICBpdGVtOnRoaXMucHJvcHMuaXRlbXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLm9uTG9naW5lZCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Ki44Km44OI5qmf6IO9XHJcbiAgbG9nb3V0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpcIlVQREFURV9VU0VSXCIsXHJcbiAgICAgIHZhbHVlOntcclxuICAgICAgICBsb2dpbjpmYWxzZSxcclxuICAgICAgICB1c2VybmFtZTpcIihjbGljayBoZXJlISlcIixcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIC8vIGRhdGE6W10sXHJcbiAgICAgICAgaXRlbXM6W11cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyB0aGlzLnByb3BzLm9uTG9nb3V0ZWQoKTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Kk44Oz44CB44Ot44Kw44Ki44Km44OI44Gu44OB44Kn44OD44Kv44Oe44O844KvXHJcbiAgbG9naW5fY2hlY2soKXtcclxuICAgIGlmICh0aGlzLnByb3BzLmxvZ2luID09PWZhbHNlKXtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ291dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/jg6zjg7Pjg4Djg6rjg7PjgrBcclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY291bnRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5fY2hlY2t9PlxyXG4gICAgICAgIExPR0lORUQ6IHt0aGlzLnByb3BzLnVzZXJuYW1lfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BY2NvdW50ID0gY29ubmVjdCgoc3RhdGUpPT4gc3RhdGUpKEFjY291bnQpO1xyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyJdLCJzb3VyY2VSb290IjoiIn0=