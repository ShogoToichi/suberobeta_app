webpackHotUpdate_N_E("pages/message/[lessonid]",{

/***/ "./components/MessageAdd.js":
/*!**********************************!*\
  !*** ./components/MessageAdd.js ***!
  \**********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MessageAdd.js",
    _s = $RefreshSig$();

//メッセージ送信フォーム
//message/[lessonid]でインポート








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      width: '500px'
    },
    btn: {
      margin: "auto 0 "
    }
  };
});

function MessageAdd(props) {
  _s();

  //使用するステートの設定(Hook)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      userfilter = _useState2[0],
      setUserfilter = _useState2[1]; //inputに入力された処理をeで受け取ってステートに入れる関数


  var doChangeMessage = function doChangeMessage(e) {
    setMessage(e.target.value);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); //追加ボタンを押したらfirebaseにステートの情報を書き込む処理
  //addで追加しているから、ドキュメントidはユニークなidが自動で当てられる
  //Reduxからユーザーのemail(id)をencode( .→* )にして定数に代入

  var doSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var db, email, d;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore();
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_7__["default"].encodeEmail(props.email);
              d = new Date().getTime();
              _context.next = 5;
              return db.collection("lessons").doc(router.query.lessonid).collection("message").add({
                userid: email,
                text: message,
                time: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp()
              }).then(function () {
                setMessage("");
              });

            case 5:
              //userfilterのTorFを、マテリアルUIの表示に関する属性に用いて、
              //作成者、購入者以外にフォームを表示しなくする予定
              if (email == createrid || email == buyerid) {
                setUserfilter(true);
              } else {
                setUserfilter(false);
              }

            case 6:
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

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "outlined-basic",
        variant: "outlined",
        onChange: doChangeMessage,
        value: message,
        multiline: true,
        rows: 3,
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      style: classees.btn,
      onClick: doSubmit,
      children: "\u9001\u4FE1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 1
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 3
  }, this);
}

_s(MessageAdd, "gCG5Nmme/DOq2Vef4Iw+UJOnjhY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], useStyles];
});

_c = MessageAdd;
MessageAdd = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(MessageAdd);
/* harmony default export */ __webpack_exports__["default"] = (MessageAdd);

var _c;

$RefreshReg$(_c, "MessageAdd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQWRkLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW4iLCJzcGFjaW5nIiwid2lkdGgiLCJidG4iLCJNZXNzYWdlQWRkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlcmZpbHRlciIsInNldFVzZXJmaWx0ZXIiLCJkb0NoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkb1N1Ym1pdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJlbWFpbCIsIkxpYiIsImVuY29kZUVtYWlsIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJhZGQiLCJ1c2VyaWQiLCJ0ZXh0IiwidGltZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ0aGVuIiwiY3JlYXRlcmlkIiwiYnV5ZXJpZCIsImNsYXNzZXMiLCJjbGFzc2VlcyIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNGQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FETjtBQUVGQyxXQUFLLEVBQUU7QUFGTCxLQURpQztBQUt2Q0MsT0FBRyxFQUFDO0FBQ0ZILFlBQU0sRUFBQztBQURMO0FBTG1DLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVVBLFNBQVNJLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBR3hCO0FBSHdCLGtCQUlLQyxzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSWpCQyxPQUppQjtBQUFBLE1BSVRDLFVBSlM7O0FBQUEsbUJBS1dGLHNEQUFRLENBQUMsRUFBRCxDQUxuQjtBQUFBLE1BS2pCRyxVQUxpQjtBQUFBLE1BS05DLGFBTE0sa0JBT3hCOzs7QUFDQSxNQUFNQyxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLENBQUNDLENBQUQsRUFBSztBQUMxQkosY0FBVSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBWndCLENBY3hCO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxRQUFRO0FBQUEsa1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLGdCQURTLEdBQ0pDLGdEQUFRLENBQUNDLFNBQVQsRUFESTtBQUVUQyxtQkFGUyxHQUVEQywyREFBRyxDQUFDQyxXQUFKLENBQWdCbEIsS0FBSyxDQUFDZ0IsS0FBdEIsQ0FGQztBQUdYRyxlQUhXLEdBR1AsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBSE87QUFBQTtBQUFBLHFCQUlUUixFQUFFLENBQUNTLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixDQUE2QmIsTUFBTSxDQUFDYyxLQUFQLENBQWFDLFFBQTFDLEVBQW9ESCxVQUFwRCxDQUErRCxTQUEvRCxFQUEwRUksR0FBMUUsQ0FBOEU7QUFDbEZDLHNCQUFNLEVBQUVYLEtBRDBFO0FBRWxGWSxvQkFBSSxFQUFFMUIsT0FGNEU7QUFHbEYyQixvQkFBSSxFQUFFZixnREFBUSxDQUFDQyxTQUFULENBQW1CZSxVQUFuQixDQUE4QkMsZUFBOUI7QUFINEUsZUFBOUUsRUFJREMsSUFKQyxDQUlJLFlBQVU7QUFDaEI3QiwwQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELGVBTkcsQ0FKUzs7QUFBQTtBQVdiO0FBQ0E7QUFDQSxrQkFBSWEsS0FBSyxJQUFFaUIsU0FBUCxJQUFvQmpCLEtBQUssSUFBRWtCLE9BQS9CLEVBQXVDO0FBQ3JDN0IsNkJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSCxlQUZDLE1BR0U7QUFDREEsNkJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRjs7QUFsQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk8sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQXFCRixNQUFNdUIsT0FBTyxHQUFHNUMsU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0Y7QUFBTSxlQUFTLEVBQUU0QyxPQUFPLENBQUN6QyxJQUF6QjtBQUErQixnQkFBVSxNQUF6QztBQUEwQyxrQkFBWSxFQUFDLEtBQXZEO0FBQUEsNkJBQ0UscUVBQUMsbUVBQUQ7QUFBVyxVQUFFLEVBQUMsZ0JBQWQ7QUFBZ0MsZUFBTyxFQUFDLFVBQXhDO0FBQW1ELGdCQUFRLEVBQUVZLGVBQTdEO0FBQThFLGFBQUssRUFBRUosT0FBckY7QUFBOEYsaUJBQVMsRUFBRSxJQUF6RztBQUErRyxZQUFJLEVBQUUsQ0FBckg7QUFBd0gsaUJBQVMsRUFBRTtBQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURFLGVBSUYscUVBQUMsaUVBQUQ7QUFBUSxXQUFLLEVBQUVrQyxRQUFRLENBQUN0QyxHQUF4QjtBQUE2QixhQUFPLEVBQUVjLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRzs7R0EvQ01iLFU7VUFZUVkscUQsRUEwQkRwQixTOzs7S0F0Q1BRLFU7QUFpRFRBLFVBQVUsR0FBRXNDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J2QyxVQUF4QixDQUFaO0FBQ2VBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS44ZWY5YjA2YWRmZGZjNDczNDY1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/jg6Hjg4Pjgrvjg7zjgrjpgIHkv6Hjg5Xjgqnjg7zjg6BcclxuLy9tZXNzYWdlL1tsZXNzb25pZF3jgafjgqTjg7Pjg53jg7zjg4hcclxuXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn1mcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpYiBmcm9tIFwiLi4vc3RhdGljL2FkZHJlc3NfbGliXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgfSxcclxuICBidG46e1xyXG4gICAgbWFyZ2luOlwiYXV0byAwIFwiLFxyXG4gIH1cclxufSkpO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUFkZChwcm9wcyl7XHJcblxyXG5cclxuICAvL+S9v+eUqOOBmeOCi+OCueODhuODvOODiOOBruioreWumihIb29rKVxyXG4gIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJmaWx0ZXIsc2V0VXNlcmZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9pbnB1dOOBq+WFpeWKm+OBleOCjOOBn+WHpueQhuOCkmXjgaflj5fjgZHlj5bjgaPjgabjgrnjg4bjg7zjg4jjgavlhaXjgozjgovplqLmlbBcclxuICBjb25zdCBkb0NoYW5nZU1lc3NhZ2UgPShlKT0+e1xyXG4gICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy/ov73liqDjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgolmaXJlYmFzZeOBq+OCueODhuODvOODiOOBruaDheWgseOCkuabuOOBjei+vOOCgOWHpueQhlxyXG4gIC8vYWRk44Gn6L+95Yqg44GX44Gm44GE44KL44GL44KJ44CB44OJ44Kt44Ol44Oh44Oz44OIaWTjga/jg6bjg4vjg7zjgq/jgappZOOBjOiHquWLleOBp+W9k+OBpuOCieOCjOOCi1xyXG4gIC8vUmVkdXjjgYvjgonjg6bjg7zjgrbjg7zjga5lbWFpbChpZCnjgpJlbmNvZGUoIC7ihpIqICnjgavjgZfjgablrprmlbDjgavku6PlhaVcclxuICBjb25zdCBkb1N1Ym1pdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlXCIpLmFkZCh7XHJcbiAgICAgIHVzZXJpZDogZW1haWwsXHJcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgIHRpbWU6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLy91c2VyZmlsdGVy44GuVG9yRuOCkuOAgeODnuODhuODquOCouODq1VJ44Gu6KGo56S644Gr6Zai44GZ44KL5bGe5oCn44Gr55So44GE44Gm44CBXHJcbiAgICAgIC8v5L2c5oiQ6ICF44CB6LO85YWl6ICF5Lul5aSW44Gr44OV44Kp44O844Og44KS6KGo56S644GX44Gq44GP44GZ44KL5LqI5a6aXHJcbiAgICAgIGlmIChlbWFpbD09Y3JlYXRlcmlkIHx8IGVtYWlsPT1idXllcmlkKXtcclxuICAgICAgICBzZXRVc2VyZmlsdGVyKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgIHNldFVzZXJmaWx0ZXIoZmFsc2UpOyAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbnJldHVybihcclxuICA8ZGl2PlxyXG48Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICA8VGV4dEZpZWxkIGlkPVwib3V0bGluZWQtYmFzaWNcIiAgdmFyaWFudD1cIm91dGxpbmVkXCIgb25DaGFuZ2U9e2RvQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9IG11bHRpbGluZT17dHJ1ZX0gcm93cz17M30gZnVsbFdpZHRoPXt0cnVlfS8+XHJcbjwvZm9ybT5cclxuPEJ1dHRvbiBzdHlsZT17Y2xhc3NlZXMuYnRufSBvbkNsaWNrPXtkb1N1Ym1pdH0+6YCB5L+hPC9CdXR0b24+XHJcbiAgPC9kaXY+XHJcbik7fVxyXG5cclxuTWVzc2FnZUFkZCA9Y29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTWVzc2FnZUFkZCk7XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VBZGQ7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9