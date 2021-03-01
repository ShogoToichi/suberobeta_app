webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/mypage/MyProfile.js":
/*!****************************************!*\
  !*** ./components/mypage/MyProfile.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Lib_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Lib/address_lib */ "./Lib/address_lib.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _parts_MyProFileDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/MyProFileDetail */ "./components/mypage/parts/MyProFileDetail.js");




var _jsxFileName = "C:\\Users\\t.osato\\Documents\\subero\\suberobeta_app-1\\components\\mypage\\MyProfile.js",
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
      setImageurl = _useState3[1];

  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email;
      return C_Users_t_osato_Documents_subero_suberobeta_app_1_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore(); //emailにReduxからユーザーのemailを取得

              email = _Lib_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email); //emailでfirebaseを参照

              _context.next = 4;
              return db.collection("users").doc(email).get().then(function (doc) {
                //取得したデータを定数に入れてから、ステートに入れる
                var profiledata = doc.data();
                setName(profiledata.profile.name);
                setIntroduction(profiledata.profile.introduction);
                setImageurl(profiledata.imageurl);
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

  var classes = myprofile();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_parts_MyProFileDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      imageurl: imageurl,
      name: name,
      introduction: introduction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teXBhZ2UvTXlQcm9maWxlLmpzIl0sIm5hbWVzIjpbIk15UHJvZmlsZSIsInByb3BzIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImludHJvZHVjdGlvbiIsInNldEludHJvZHVjdGlvbiIsImltYWdldXJsIiwic2V0SW1hZ2V1cmwiLCJnZXRGaXJlRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJwcm9maWxlZGF0YSIsImRhdGEiLCJwcm9maWxlIiwiY2xhc3NlcyIsIm15cHJvZmlsZSIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0ksU0FBU0EsU0FBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFDdEI7QUFEc0Isa0JBRUhDLHNEQUFRLENBQUMsU0FBRCxDQUZMO0FBQUEsTUFFbkJDLElBRm1CO0FBQUEsTUFFZEMsT0FGYzs7QUFBQSxtQkFHYUYsc0RBQVEsQ0FBQyxTQUFELENBSHJCO0FBQUEsTUFHbkJHLFlBSG1CO0FBQUEsTUFHTkMsZUFITTs7QUFBQSxtQkFJS0osc0RBQVEsQ0FBQyxJQUFELENBSmI7QUFBQSxNQUluQkssUUFKbUI7QUFBQSxNQUlWQyxXQUpVOztBQU0xQixNQUFNQyxXQUFXO0FBQUEsZ1dBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLGdCQURTLEdBQ0pDLGdEQUFRLENBQUNDLFNBQVQsRUFESSxFQUVmOztBQUNNQyxtQkFIUyxHQUdEQyx3REFBRyxDQUFDQyxXQUFKLENBQWdCZCxLQUFLLENBQUNZLEtBQXRCLENBSEMsRUFJZjs7QUFKZTtBQUFBLHFCQUtUSCxFQUFFLENBQUNNLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQkosS0FBM0IsRUFBa0NLLEdBQWxDLEdBQ0xDLElBREssQ0FDQSxVQUFTRixHQUFULEVBQWE7QUFDbkI7QUFDQSxvQkFBTUcsV0FBVyxHQUFHSCxHQUFHLENBQUNJLElBQUosRUFBcEI7QUFDQWpCLHVCQUFPLENBQUNnQixXQUFXLENBQUNFLE9BQVosQ0FBb0JuQixJQUFyQixDQUFQO0FBQ0FHLCtCQUFlLENBQUNjLFdBQVcsQ0FBQ0UsT0FBWixDQUFvQmpCLFlBQXJCLENBQWY7QUFDQUcsMkJBQVcsQ0FBQ1ksV0FBVyxDQUFDYixRQUFiLENBQVg7QUFDQyxlQVBLLENBTFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBWEUsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFlQSxNQUFHTixJQUFJLElBQUksU0FBWCxFQUFxQjtBQUNqQk0sZUFBVztBQUNkOztBQUVELE1BQU1jLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLHNCQUNRO0FBQUEsMkJBQ0kscUVBQUMsOERBQUQ7QUFDSSxjQUFRLEVBQUVqQixRQURkO0FBRUksVUFBSSxFQUFFSixJQUZWO0FBR0ksa0JBQVksRUFBRUU7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQVNIOztHQW5DWUwsUzs7S0FBQUEsUztBQXFDYkEsU0FBUyxHQUFFeUIsMkRBQU8sQ0FBRSxVQUFDQyxLQUFEO0FBQUEsU0FBU0EsS0FBVDtBQUFBLENBQUYsQ0FBUCxDQUF5QjFCLFNBQXpCLENBQVg7QUFDZUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlwYWdlLmRmZmUwNTFjZGNmM2UyMWVhMzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+imgei/veWKoCA6IOeUu+WDj+OCouODg+ODl+ODreODvOODiVxyXG5cclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uLy4uL0xpYi9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE15UHJvRmlsZURldGFpbCBmcm9tIFwiLi9wYXJ0cy9NeVByb0ZpbGVEZXRhaWxcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBNeVByb2ZpbGUgKHByb3BzKXtcclxuICAgICAgICAvL+OCueODhuODvOODiOOBruioreWumlxyXG4gICAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZShcIm5vIGRhdGFcIik7XHJcbiAgICBjb25zdCBbaW50cm9kdWN0aW9uLHNldEludHJvZHVjdGlvbl0gPSB1c2VTdGF0ZShcIm5vIGRhdGFcIik7XHJcbiAgICBjb25zdCBbaW1hZ2V1cmwsc2V0SW1hZ2V1cmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgICAgICAvL2VtYWls44GrUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbOOCkuWPluW+l1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgICAgICAvL2VtYWls44GnZmlyZWJhc2XjgpLlj4LnhadcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGVtYWlsKS5nZXQoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpLlrprmlbDjgavlhaXjgozjgabjgYvjgonjgIHjgrnjg4bjg7zjg4jjgavlhaXjgozjgotcclxuICAgICAgICBjb25zdCBwcm9maWxlZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc2V0TmFtZShwcm9maWxlZGF0YS5wcm9maWxlLm5hbWUpO1xyXG4gICAgICAgIHNldEludHJvZHVjdGlvbihwcm9maWxlZGF0YS5wcm9maWxlLmludHJvZHVjdGlvbik7XHJcbiAgICAgICAgc2V0SW1hZ2V1cmwocHJvZmlsZWRhdGEuaW1hZ2V1cmwpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKG5hbWUgPT0gXCJubyBkYXRhXCIpe1xyXG4gICAgICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IG15cHJvZmlsZSgpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE15UHJvRmlsZURldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXVybD17aW1hZ2V1cmx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGludHJvZHVjdGlvbj17aW50cm9kdWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5NeVByb2ZpbGU9IGNvbm5lY3QgKChzdGF0ZSk9PnN0YXRlKShNeVByb2ZpbGUpO1xyXG5leHBvcnQgZGVmYXVsdCBNeVByb2ZpbGU7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9