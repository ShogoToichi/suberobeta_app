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

      firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth;
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
          items: []
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsImxvZ2luX2NoZWNrIiwiYmluZCIsImZpcmViYXNlIiwiYXV0aCIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2VsZiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsImxvZ2luIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIml0ZW0iLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJzaWduT3V0IiwiZGF0YSIsImxvZ291dCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBTUosbUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsOEJBQU1BLEtBQU4sRUFEZ0IsQ0FFaEI7O0FBRmdCLGtXQUxWO0FBQ05DLGNBQVEsRUFBQyxNQURIO0FBRU5DLGFBQU8sRUFBQztBQUZGLEtBS1U7O0FBR2hCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsa0xBQW5CO0FBSGdCO0FBSWpCLEcsQ0FFRDs7Ozs7NEJBQ087QUFBQTs7QUFDTEMsdURBQVEsQ0FBQ0MsSUFBVDtBQUNBLFVBQUlDLFFBQVEsR0FBRyxJQUFJRixpREFBUSxDQUFDQyxJQUFULENBQWNFLGtCQUFsQixFQUFmO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUosdURBQVEsQ0FBQ0MsSUFBVCxHQUFnQkksZUFBaEIsQ0FBZ0NILFFBQWhDLEVBQ0E7QUFEQSxPQUVHSSxJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFVO0FBQ2QsY0FBSSxDQUFDWixLQUFMLENBQVdhLFFBQVgsQ0FBb0I7QUFDbEJDLGNBQUksRUFBQyxhQURhO0FBRWxCQyxlQUFLLEVBQUM7QUFDSkMsaUJBQUssRUFBQyxJQURGO0FBRUpDLG9CQUFRLEVBQUVMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQyxXQUZsQjtBQUdKQyxpQkFBSyxFQUFFUixNQUFNLENBQUNNLElBQVAsQ0FBWUUsS0FIZjtBQUlKQyxnQkFBSSxFQUFDLE1BQUksQ0FBQ3JCLEtBQUwsQ0FBV3NCO0FBSlo7QUFGWSxTQUFwQixFQURjLENBVWQ7QUFDQTtBQUNBOztBQUNELE9BZkg7QUFnQkQsSyxDQUVEOzs7OzZCQUNRO0FBQ05DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQW5CLHVEQUFRLENBQUNDLElBQVQsR0FBZ0JtQixPQUFoQjtBQUNBLFdBQUt6QixLQUFMLENBQVdhLFFBQVgsQ0FBb0I7QUFDbEJDLFlBQUksRUFBQyxhQURhO0FBRWxCQyxhQUFLLEVBQUM7QUFDSkMsZUFBSyxFQUFDLEtBREY7QUFFSkMsa0JBQVEsRUFBQyxlQUZMO0FBR0pHLGVBQUssRUFBQyxFQUhGO0FBSUpNLGNBQUksRUFBQyxFQUpEO0FBS0pKLGVBQUssRUFBQztBQUxGO0FBRlksT0FBcEIsRUFITSxDQWFOO0FBQ0QsSyxDQUVEOzs7O2tDQUNhO0FBQ1gsVUFBSSxLQUFLdEIsS0FBTCxDQUFXZ0IsS0FBWCxLQUFvQixLQUF4QixFQUE4QjtBQUM1QixhQUFLQSxLQUFMO0FBQ0QsT0FGRCxNQUVNO0FBQ0osYUFBS1csTUFBTDtBQUNEO0FBQ0Y7Ozs2QkFFTztBQUNOLDBCQUNFO0FBQUcsaUJBQVMsRUFBQyxPQUFiO0FBQUEsK0JBQ0E7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQ0UsaUJBQU8sRUFBRSxLQUFLeEIsV0FEaEI7QUFBQSxrQ0FFWSxLQUFLSCxLQUFMLENBQVdpQixRQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFRRDs7OztFQXRFbUJXLCtDOztBQXlFdEI3QixPQUFPLEdBQUc4QiwyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFVQSxLQUFWO0FBQUEsQ0FBRCxDQUFQLENBQXlCL0IsT0FBekIsQ0FBVjtBQUNlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mY2UxZjg2OGY1OTliNTU2NjE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdHlsZSA9IHtcclxuICAgIGZvbnRTaXplOlwiMTJwdFwiLFxyXG4gICAgcGFkZGluZzpcIjVweCAxMHB4XCJcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIOWxnuaAp+WApOOBqOOBl+OBpuS9v+OBhuOBn+OCgeOBq+ODkOOCpOODs+ODiVxyXG4gICAgdGhpcy5sb2dpbl9jaGVjayA9IHRoaXMubG9naW5fY2hlY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Kk44Oz5Yem55CGXHJcbiAgbG9naW4oKXtcclxuICAgIGZpcmViYXNlLmF1dGhcclxuICAgIGxldCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgIC8v44Ot44Kw44Kk44Oz5Yem55CG5a6M5LqG5b6McmVzdWx044Gn5YCk44KS5Y+X44GR5Y+W44KKUmVkdXjjgbhcclxuICAgICAgLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6XCJVUERBVEVfVVNFUlwiLFxyXG4gICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICBsb2dpbjp0cnVlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogcmVzdWx0LnVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiByZXN1bHQudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgaXRlbTp0aGlzLnByb3BzLml0ZW1zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/jg63jgrDjgqTjg7PmmYLjga7lh6bnkIbjgpJwcm9wc+OBp+WPl+OBkeWPluOCjOOCi+OCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgIC8v44Go44KK44G+5L2/44Gj44Gm44Gq44GEXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ2luZWQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL+ODreOCsOOCouOCpuODiOapn+iDvVxyXG4gIGxvZ291dCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJsb2dvdXRcIik7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6XCJVUERBVEVfVVNFUlwiLFxyXG4gICAgICB2YWx1ZTp7XHJcbiAgICAgICAgbG9naW46ZmFsc2UsXHJcbiAgICAgICAgdXNlcm5hbWU6XCIoY2xpY2sgaGVyZSEpXCIsXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBkYXRhOltdLFxyXG4gICAgICAgIGl0ZW1zOltdXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5wcm9wcy5vbkxvZ291dGVkKCk7XHJcbiAgfVxyXG5cclxuICAvL+ODreOCsOOCpOODs+OAgeODreOCsOOCouOCpuODiOWHpueQhuOCkuOCr+ODquODg+OCr+aZguOBq+WIhuWykOOBmeOCi+mWouaVsFxyXG4gIGxvZ2luX2NoZWNrKCl7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5sb2dpbiA9PT1mYWxzZSl7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGhpcy5sb2dvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3VudFwiXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5sb2dpbl9jaGVja30+XHJcbiAgICAgICAgTE9HSU5FRDoge3RoaXMucHJvcHMudXNlcm5hbWV9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFjY291bnQgPSBjb25uZWN0KChzdGF0ZSk9PiBzdGF0ZSkoQWNjb3VudCk7XHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==