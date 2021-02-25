webpackHotUpdate_N_E("pages/message/[lessonid]",{

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\Message.js",
    _s2 = $RefreshSig$();








function Message(props) {
  _s2();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      createrid = _useState[0],
      setCreaterid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      buyerid = _useState3[0],
      setBuyerid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lessonname = _useState4[0],
      setLessonname = _useState4[1];

  var style2 = {
    backgroundColor: bl
  };
  var style1 = {
    backgroundColor: red
  };
  var messagedata = [];
  var messageitems = []; //lessondata及びlessoncreaterのprofileを取得

  var getMessageData = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var email, db, router;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_6__["default"].decode(props.email);
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore(); //router.query.lessonidでページのurlの末尾を取得

              router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
              _context.next = 6;
              return db.collection("lessons").doc(router.query.lessonid).get() //データ取得後の処理
              //取得したデータをlessondataにしまってから、それをステートに突っ込む
              .then(function (doc) {
                var lessondata = doc.data();
                setCreaterid(lessondata.createrid);
                setLessonname(lessondata.lessonname);
                setBuyerid(lessondata.buyerid);
                db.collection("lessons").doc(router.query.lessonid).collection("message").orderBy("time").get().then(function (querySnapshot) {
                  querySnapshot.forEach(function (doc) {
                    messagedata.push(doc.data());
                  });

                  for (var i in messagedata) {
                    var text = messagedata[i].text;
                    var userid = messagedata[i].userid;

                    if (userid == email) {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                          style: "style1",
                          children: text
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 50,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 17
                      }, this));
                    } else {
                      messageitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                          style: "style2",
                          children: text
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 17
                      }, this));
                    }
                  }

                  setMessages(messageitems);
                });
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
    }));

    return function getMessageData() {
      return _ref.apply(this, arguments);
    };
  }();

  var userfilter = function userfilter() {
    if (email == createrid || email == buyerid) {
      return messages;
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u305B\u3093"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: lessonname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, this), userfilter]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 3
  }, this);
}

_s2(Message, "QylGlgG1QFg+T0XQptmUiXjf1Ow=");

_c = Message;
Message = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Message);
/* harmony default export */ __webpack_exports__["default"] = (Message);

var _c;

$RefreshReg$(_c, "Message");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibCIsInN0eWxlMSIsInJlZCIsIm1lc3NhZ2VkYXRhIiwibWVzc2FnZWl0ZW1zIiwiZ2V0TWVzc2FnZURhdGEiLCJlbWFpbCIsIkxpYiIsImRlY29kZSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJsZXNzb25pZCIsImdldCIsInRoZW4iLCJsZXNzb25kYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJpIiwidGV4dCIsInVzZXJpZCIsInVzZXJmaWx0ZXIiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDZkMsU0FEZTtBQUFBLE1BQ0xDLFlBREs7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRWZHLFFBRmU7QUFBQSxNQUVOQyxXQUZNOztBQUFBLG1CQUdNSixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2ZLLE9BSGU7QUFBQSxNQUdQQyxVQUhPOztBQUFBLG1CQUlhTixzREFBUSxDQUFDLEVBQUQsQ0FKckI7QUFBQSxN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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBUUYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFLSTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHaUMsVUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1DOztJQXRFUTFDLE87O0tBQUFBLE87QUF5RVRBLE9BQU8sR0FBRzJDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0I1QyxPQUF4QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS4yYTAyMjNhM2Q5NjZkZTA3MDE5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSAocHJvcHMpe1xyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXllcmlkLHNldEJ1eWVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIGNvbnN0IHN0eWxlMiA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6YmwsXHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlMSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6cmVkLFxyXG4gIH1cclxuICBjb25zdCBtZXNzYWdlZGF0YT1bXTtcclxuICBjb25zdCBtZXNzYWdlaXRlbXM9W107XHJcblxyXG4gIC8vbGVzc29uZGF0YeWPiuOBs2xlc3NvbmNyZWF0ZXLjga5wcm9maWxl44KS5Y+W5b6XXHJcbiAgY29uc3QgZ2V0TWVzc2FnZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmRlY29kZShwcm9wcy5lbWFpbCk7XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIC8vcm91dGVyLnF1ZXJ5Lmxlc3Nvbmlk44Gn44Oa44O844K444GudXJs44Gu5pyr5bC+44KS5Y+W5b6XXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmdldCgpXHJcbiAgICAvL+ODh+ODvOOCv+WPluW+l+W+jOOBruWHpueQhlxyXG4gICAgLy/lj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJsZXNzb25kYXRh44Gr44GX44G+44Gj44Gm44GL44KJ44CB44Gd44KM44KS44K544OG44O844OI44Gr56qB44Gj6L6844KAXHJcbiAgICAudGhlbihmdW5jdGlvbihkb2Mpe1xyXG4gICAgICBjb25zdCBsZXNzb25kYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBzZXRDcmVhdGVyaWQobGVzc29uZGF0YS5jcmVhdGVyaWQpO1xyXG4gICAgICAgIHNldExlc3Nvbm5hbWUobGVzc29uZGF0YS5sZXNzb25uYW1lKTtcclxuICAgICAgICBzZXRCdXllcmlkKGxlc3NvbmRhdGEuYnV5ZXJpZCk7XHJcblxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLmRvYyhyb3V0ZXIucXVlcnkubGVzc29uaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlXCIpLm9yZGVyQnkoXCJ0aW1lXCIpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZWRhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBmb3IobGV0IGkgaW4gbWVzc2FnZWRhdGEpe1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IG1lc3NhZ2VkYXRhW2ldLnRleHQ7XHJcbiAgICAgICAgICAgIGxldCB1c2VyaWQgPSBtZXNzYWdlZGF0YVtpXS51c2VyaWQ7XHJcbiAgICAgICAgICAgIGlmKHVzZXJpZCA9PSBlbWFpbCl7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17XCJzdHlsZTFcIn0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTt9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1wic3R5bGUyXCJ9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VpdGVtcyk7XHJcbiAgICAgICAgICB9KVxyXG4gIH0pfVxyXG4gIGNvbnN0IHVzZXJmaWx0ZXIgPSgpPT57XHJcbiAgICBpZiAoZW1haWw9PWNyZWF0ZXJpZCB8fCBlbWFpbD09YnV5ZXJpZCl7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiA8cD7jg6Hjg4Pjgrvjg7zjgrjjga/jgZTliKnnlKjjgYTjgZ/jgaDjgZHjgb7jgZvjgpM8L3A+XHJcbiAgICB9XHJcbiAgfVxyXG5yZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAge3VzZXJmaWx0ZXJ9XHJcbiAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuXHJcbk1lc3NhZ2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNZXNzYWdlKTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwic291cmNlUm9vdCI6IiJ9