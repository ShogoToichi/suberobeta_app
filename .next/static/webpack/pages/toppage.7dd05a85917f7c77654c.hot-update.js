webpackHotUpdate_N_E("pages/toppage",{

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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");








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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "out",
        size: "large",
        color: "inherit",
        onClick: this.login_check,
        children: "\u30ED\u30B0\u30A4\u30F3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsImxvZ2luX2NoZWNrIiwiYmluZCIsImZpcmViYXNlIiwiYXV0aCIsInNldFBlcnNpc3RlbmNlIiwiQXV0aCIsIlBlcnNpc3RlbmNlIiwiTE9DQUwiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNlbGYiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidmFsdWUiLCJsb2dpbiIsInVzZXJuYW1lIiwidXNlciIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJpbWFnZXVybCIsImNvbnNvbGUiLCJsb2ciLCJzaWduT3V0IiwiZGF0YSIsImxvZ291dCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBTUosbUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsOEJBQU1BLEtBQU4sRUFEZ0IsQ0FFaEI7O0FBRmdCLGtXQUxWO0FBQ05DLGNBQVEsRUFBQyxNQURIO0FBRU5DLGFBQU8sRUFBQztBQUZGLEtBS1U7O0FBR2hCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsa0xBQW5CO0FBSGdCO0FBSWpCLEcsQ0FFRDs7Ozs7NEJBQ087QUFBQTs7QUFDTEMsdURBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsY0FBaEIsQ0FBK0JGLGlEQUFRLENBQUNDLElBQVQsQ0FBY0UsSUFBZCxDQUFtQkMsV0FBbkIsQ0FBK0JDLEtBQTlEO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLElBQUlOLGlEQUFRLENBQUNDLElBQVQsQ0FBY00sa0JBQWxCLEVBQWY7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBUix1REFBUSxDQUFDQyxJQUFULEdBQWdCUSxlQUFoQixDQUFnQ0gsUUFBaEMsRUFDQTtBQURBLE9BRUdJLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVU7QUFDZCxjQUFJLENBQUNoQixLQUFMLENBQVdpQixRQUFYLENBQW9CO0FBQ2xCQyxjQUFJLEVBQUMsYUFEYTtBQUVsQkMsZUFBSyxFQUFDO0FBQ0pDLGlCQUFLLEVBQUMsSUFERjtBQUVKQyxvQkFBUSxFQUFFTCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsV0FGbEI7QUFHSkMsaUJBQUssRUFBRVIsTUFBTSxDQUFDTSxJQUFQLENBQVlFLEtBSGY7QUFJSkMsb0JBQVEsRUFBRztBQUpQO0FBRlksU0FBcEIsRUFEYyxDQVVkO0FBQ0E7QUFDQTs7QUFDRCxPQWZIO0FBZ0JELEssQ0FFRDs7Ozs2QkFDUTtBQUNOQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0F0Qix1REFBUSxDQUFDQyxJQUFULEdBQWdCc0IsT0FBaEI7QUFDQSxXQUFLNUIsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQjtBQUNsQkMsWUFBSSxFQUFDLGFBRGE7QUFFbEJDLGFBQUssRUFBQztBQUNKQyxlQUFLLEVBQUMsS0FERjtBQUVKQyxrQkFBUSxFQUFDLGVBRkw7QUFHSkcsZUFBSyxFQUFDLEVBSEY7QUFJSkssY0FBSSxFQUFDLEVBSkQ7QUFLSkosa0JBQVEsRUFBQztBQUxMO0FBRlksT0FBcEIsRUFITSxDQWFOO0FBQ0QsSyxDQUVEOzs7O2tDQUNhO0FBQ1gsVUFBSSxLQUFLekIsS0FBTCxDQUFXb0IsS0FBWCxLQUFvQixLQUF4QixFQUE4QjtBQUM1QixhQUFLQSxLQUFMO0FBQ0QsT0FGRCxNQUVNO0FBQ0osYUFBS1UsTUFBTDtBQUNEO0FBQ0Y7Ozs2QkFFTztBQUNOLDBCQUVFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLEtBQWhCO0FBQXNCLFlBQUksRUFBQyxPQUEzQjtBQUFtQyxhQUFLLEVBQUMsU0FBekM7QUFDQSxlQUFPLEVBQUUsS0FBSzNCLFdBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUtEOzs7O0VBbkVtQjRCLCtDOztBQXNFdEJoQyxPQUFPLEdBQUdpQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFVQSxLQUFWO0FBQUEsQ0FBRCxDQUFQLENBQXlCbEMsT0FBekIsQ0FBVjtBQUNlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3BwYWdlLjdkZDA1YTg1OTE3ZjdjNzc2NTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3R5bGUgPSB7XHJcbiAgICBmb250U2l6ZTpcIjEycHRcIixcclxuICAgIHBhZGRpbmc6XCI1cHggMTBweFwiXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvLyDlsZ7mgKflgKTjgajjgZfjgabkvb/jgYbjgZ/jgoHjgavjg5DjgqTjg7Pjg4lcclxuICAgIHRoaXMubG9naW5fY2hlY2sgPSB0aGlzLmxvZ2luX2NoZWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvL+ODreOCsOOCpOODs+WHpueQhlxyXG4gIGxvZ2luKCl7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2V0UGVyc2lzdGVuY2UoZmlyZWJhc2UuYXV0aC5BdXRoLlBlcnNpc3RlbmNlLkxPQ0FMKVxyXG4gICAgbGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgLy/jg63jgrDjgqTjg7Plh6bnkIblrozkuoblvoxyZXN1bHTjgaflgKTjgpLlj5fjgZHlj5bjgopSZWR1eOOBuFxyXG4gICAgICAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpcIlVQREFURV9VU0VSXCIsXHJcbiAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgIGxvZ2luOnRydWUsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiByZXN1bHQudXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHJlc3VsdC51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBpbWFnZXVybCA6IFwiXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/jg63jgrDjgqTjg7PmmYLjga7lh6bnkIbjgpJwcm9wc+OBp+WPl+OBkeWPluOCjOOCi+OCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgIC8v44Go44KK44G+5L2/44Gj44Gm44Gq44GEXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ2luZWQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL+ODreOCsOOCouOCpuODiOapn+iDvVxyXG4gIGxvZ291dCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJsb2dvdXRcIik7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6XCJVUERBVEVfVVNFUlwiLFxyXG4gICAgICB2YWx1ZTp7XHJcbiAgICAgICAgbG9naW46ZmFsc2UsXHJcbiAgICAgICAgdXNlcm5hbWU6XCIoY2xpY2sgaGVyZSEpXCIsXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBkYXRhOltdLFxyXG4gICAgICAgIGltYWdldXJsOlwiXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyB0aGlzLnByb3BzLm9uTG9nb3V0ZWQoKTtcclxuICB9XHJcblxyXG4gIC8v44Ot44Kw44Kk44Oz44CB44Ot44Kw44Ki44Km44OI5Yem55CG44KS44Kv44Oq44OD44Kv5pmC44Gr5YiG5bKQ44GZ44KL6Zai5pWwXHJcbiAgbG9naW5fY2hlY2soKXtcclxuICAgIGlmICh0aGlzLnByb3BzLmxvZ2luID09PWZhbHNlKXtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ291dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0XCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJpbmhlcml0XCIgXHJcbiAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5fY2hlY2t9PuODreOCsOOCpOODszwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFjY291bnQgPSBjb25uZWN0KChzdGF0ZSk9PiBzdGF0ZSkoQWNjb3VudCk7XHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==