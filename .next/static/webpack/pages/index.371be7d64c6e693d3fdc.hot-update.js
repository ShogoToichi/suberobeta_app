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
          image: image
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsImxvZ2luX2NoZWNrIiwiYmluZCIsImZpcmViYXNlIiwiYXV0aCIsInNldFBlcnNpc3RlbmNlIiwiQXV0aCIsIlBlcnNpc3RlbmNlIiwiTE9DQUwiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNlbGYiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidmFsdWUiLCJsb2dpbiIsInVzZXJuYW1lIiwidXNlciIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJpbWFnZXVybCIsImNvbnNvbGUiLCJsb2ciLCJzaWduT3V0IiwiZGF0YSIsImltYWdlIiwibG9nb3V0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsTzs7Ozs7QUFNSixtQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsS0FBTixFQURnQixDQUVoQjs7QUFGZ0Isa1dBTFY7QUFDTkMsY0FBUSxFQUFDLE1BREg7QUFFTkMsYUFBTyxFQUFDO0FBRkYsS0FLVTs7QUFHaEIsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixrTEFBbkI7QUFIZ0I7QUFJakIsRyxDQUVEOzs7Ozs0QkFDTztBQUFBOztBQUNMQyx1REFBUSxDQUFDQyxJQUFULEdBQWdCQyxjQUFoQixDQUErQkYsaURBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxJQUFkLENBQW1CQyxXQUFuQixDQUErQkMsS0FBOUQ7QUFDQSxVQUFJQyxRQUFRLEdBQUcsSUFBSU4saURBQVEsQ0FBQ0MsSUFBVCxDQUFjTSxrQkFBbEIsRUFBZjtBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FSLHVEQUFRLENBQUNDLElBQVQsR0FBZ0JRLGVBQWhCLENBQWdDSCxRQUFoQyxFQUNBO0FBREEsT0FFR0ksSUFGSCxDQUVRLFVBQUNDLE1BQUQsRUFBVTtBQUNkLGNBQUksQ0FBQ2hCLEtBQUwsQ0FBV2lCLFFBQVgsQ0FBb0I7QUFDbEJDLGNBQUksRUFBQyxhQURhO0FBRWxCQyxlQUFLLEVBQUM7QUFDSkMsaUJBQUssRUFBQyxJQURGO0FBRUpDLG9CQUFRLEVBQUVMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQyxXQUZsQjtBQUdKQyxpQkFBSyxFQUFFUixNQUFNLENBQUNNLElBQVAsQ0FBWUUsS0FIZjtBQUlKQyxvQkFBUSxFQUFHO0FBSlA7QUFGWSxTQUFwQixFQURjLENBVWQ7QUFDQTtBQUNBOztBQUNELE9BZkg7QUFnQkQsSyxDQUVEOzs7OzZCQUNRO0FBQ05DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQXRCLHVEQUFRLENBQUNDLElBQVQsR0FBZ0JzQixPQUFoQjtBQUNBLFdBQUs1QixLQUFMLENBQVdpQixRQUFYLENBQW9CO0FBQ2xCQyxZQUFJLEVBQUMsYUFEYTtBQUVsQkMsYUFBSyxFQUFDO0FBQ0pDLGVBQUssRUFBQyxLQURGO0FBRUpDLGtCQUFRLEVBQUMsZUFGTDtBQUdKRyxlQUFLLEVBQUMsRUFIRjtBQUlKSyxjQUFJLEVBQUMsRUFKRDtBQUtKQyxlQUFLLEVBQUxBO0FBTEk7QUFGWSxPQUFwQixFQUhNLENBYU47QUFDRCxLLENBRUQ7Ozs7a0NBQ2E7QUFDWCxVQUFJLEtBQUs5QixLQUFMLENBQVdvQixLQUFYLEtBQW9CLEtBQXhCLEVBQThCO0FBQzVCLGFBQUtBLEtBQUw7QUFDRCxPQUZELE1BRU07QUFDSixhQUFLVyxNQUFMO0FBQ0Q7QUFDRjs7OzZCQUVPO0FBQ04sMEJBQ0U7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBQSwrQkFDQTtBQUFNLG1CQUFTLEVBQUMsU0FBaEI7QUFDRSxpQkFBTyxFQUFFLEtBQUs1QixXQURoQjtBQUFBLGtDQUVZLEtBQUtILEtBQUwsQ0FBV3FCLFFBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVFEOzs7O0VBdEVtQlcsK0M7O0FBeUV0QmpDLE9BQU8sR0FBR2tDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVVBLEtBQVY7QUFBQSxDQUFELENBQVAsQ0FBeUJuQyxPQUF6QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3MWJlN2Q2NGM2ZTY5M2QzZmRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0eWxlID0ge1xyXG4gICAgZm9udFNpemU6XCIxMnB0XCIsXHJcbiAgICBwYWRkaW5nOlwiNXB4IDEwcHhcIlxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8g5bGe5oCn5YCk44Go44GX44Gm5L2/44GG44Gf44KB44Gr44OQ44Kk44Oz44OJXHJcbiAgICB0aGlzLmxvZ2luX2NoZWNrID0gdGhpcy5sb2dpbl9jaGVjay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy/jg63jgrDjgqTjg7Plh6bnkIZcclxuICBsb2dpbigpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNldFBlcnNpc3RlbmNlKGZpcmViYXNlLmF1dGguQXV0aC5QZXJzaXN0ZW5jZS5MT0NBTClcclxuICAgIGxldCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgIC8v44Ot44Kw44Kk44Oz5Yem55CG5a6M5LqG5b6McmVzdWx044Gn5YCk44KS5Y+X44GR5Y+W44KKUmVkdXjjgbhcclxuICAgICAgLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6XCJVUERBVEVfVVNFUlwiLFxyXG4gICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICBsb2dpbjp0cnVlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogcmVzdWx0LnVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiByZXN1bHQudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgaW1hZ2V1cmwgOiBcIlwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v44Ot44Kw44Kk44Oz5pmC44Gu5Yem55CG44KScHJvcHPjgaflj5fjgZHlj5bjgozjgovjgojjgYbjgavjgZnjgotcclxuICAgICAgICAvL+OBqOOCiuOBvuS9v+OBo+OBpuOBquOBhFxyXG4gICAgICAgIC8vIHRoaXMucHJvcHMub25Mb2dpbmVkKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/jg63jgrDjgqLjgqbjg4jmqZ/og71cclxuICBsb2dvdXQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOlwiVVBEQVRFX1VTRVJcIixcclxuICAgICAgdmFsdWU6e1xyXG4gICAgICAgIGxvZ2luOmZhbHNlLFxyXG4gICAgICAgIHVzZXJuYW1lOlwiKGNsaWNrIGhlcmUhKVwiLFxyXG4gICAgICAgIGVtYWlsOlwiXCIsXHJcbiAgICAgICAgZGF0YTpbXSxcclxuICAgICAgICBpbWFnZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgLy/jg63jgrDjgqTjg7PjgIHjg63jgrDjgqLjgqbjg4jlh6bnkIbjgpLjgq/jg6rjg4Pjgq/mmYLjgavliIblspDjgZnjgovplqLmlbBcclxuICBsb2dpbl9jaGVjaygpe1xyXG4gICAgaWYgKHRoaXMucHJvcHMubG9naW4gPT09ZmFsc2Upe1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY291bnRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5fY2hlY2t9PlxyXG4gICAgICAgIExPR0lORUQ6IHt0aGlzLnByb3BzLnVzZXJuYW1lfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BY2NvdW50ID0gY29ubmVjdCgoc3RhdGUpPT4gc3RhdGUpKEFjY291bnQpO1xyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyJdLCJzb3VyY2VSb290IjoiIn0=