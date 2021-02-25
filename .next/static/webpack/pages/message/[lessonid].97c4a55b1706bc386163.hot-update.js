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
    backgroundColor: "blue"
  };
  var style1 = {
    backgroundColor: "red"
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
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJkZWNvZGUiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJnZXQiLCJ0aGVuIiwibGVzc29uZGF0YSIsImRhdGEiLCJvcmRlckJ5IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwiaSIsInRleHQiLCJ1c2VyaWQiLCJ1c2VyZmlsdGVyIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2ZDLFNBRGU7QUFBQSxNQUNMQyxZQURLOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVmRyxRQUZlO0FBQUEsTUFFTkMsV0FGTTs7QUFBQSxtQkFHTUosc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJYU4sc0RBQVEsQ0FBQyxFQUFELENBSnJCO0FBQUEsTUFJZk8sVUFKZTtB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QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBUUYsc0JBQ0U7QUFBQSw0QkFFRTtBQUFBLGdCQUFLSTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHK0IsVUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9DOztJQXZFUXhDLE87O0tBQUFBLE87QUEwRVRBLE9BQU8sR0FBR3lDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0IxQyxPQUF4QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW2xlc3NvbmlkXS45N2M0YTU1YjE3MDZiYzM4NjE2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZSAocHJvcHMpe1xyXG4gIGNvbnN0IFtjcmVhdGVyaWQsc2V0Q3JlYXRlcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtidXllcmlkLHNldEJ1eWVyaWRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGVzc29ubmFtZSxzZXRMZXNzb25uYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG4gIGNvbnN0IHN0eWxlMiA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCJibHVlXCIsXHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlMSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvciA6XCJyZWRcIixcclxuICB9XHJcbiAgY29uc3QgbWVzc2FnZWRhdGE9W107XHJcbiAgY29uc3QgbWVzc2FnZWl0ZW1zPVtdO1xyXG5cclxuICAvL2xlc3NvbmRhdGHlj4rjgbNsZXNzb25jcmVhdGVy44GucHJvZmlsZeOCkuWPluW+l1xyXG4gIGNvbnN0IGdldE1lc3NhZ2VEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBlbWFpbCA9IExpYi5kZWNvZGUocHJvcHMuZW1haWwpO1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUgKCk7XHJcbiAgICAvL3JvdXRlci5xdWVyeS5sZXNzb25pZOOBp+ODmuODvOOCuOOBrnVybOOBruacq+WwvuOCkuWPluW+l1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5nZXQoKVxyXG4gICAgLy/jg4fjg7zjgr/lj5blvpflvozjga7lh6bnkIZcclxuICAgIC8v5Y+W5b6X44GX44Gf44OH44O844K/44KSbGVzc29uZGF0YeOBq+OBl+OBvuOBo+OBpuOBi+OCieOAgeOBneOCjOOCkuOCueODhuODvOODiOOBq+eqgeOBo+i+vOOCgFxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9jKXtcclxuICAgICAgY29uc3QgbGVzc29uZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc2V0Q3JlYXRlcmlkKGxlc3NvbmRhdGEuY3JlYXRlcmlkKTtcclxuICAgICAgICBzZXRMZXNzb25uYW1lKGxlc3NvbmRhdGEubGVzc29ubmFtZSk7XHJcbiAgICAgICAgc2V0QnV5ZXJpZChsZXNzb25kYXRhLmJ1eWVyaWQpO1xyXG5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5kb2Mocm91dGVyLnF1ZXJ5Lmxlc3NvbmlkKS5jb2xsZWN0aW9uKFwibWVzc2FnZVwiKS5vcmRlckJ5KFwidGltZVwiKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VkYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yKGxldCBpIGluIG1lc3NhZ2VkYXRhKXtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBtZXNzYWdlZGF0YVtpXS50ZXh0O1xyXG4gICAgICAgICAgICBsZXQgdXNlcmlkID0gbWVzc2FnZWRhdGFbaV0udXNlcmlkO1xyXG4gICAgICAgICAgICBpZih1c2VyaWQgPT0gZW1haWwpe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1wic3R5bGUxXCJ9Pnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7fVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtcInN0eWxlMlwifT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRNZXNzYWdlcyhtZXNzYWdlaXRlbXMpO1xyXG4gICAgICAgICAgfSlcclxuICB9KX1cclxuICBjb25zdCB1c2VyZmlsdGVyID0oKT0+e1xyXG4gICAgaWYgKGVtYWlsPT1jcmVhdGVyaWQgfHwgZW1haWw9PWJ1eWVyaWQpe1xyXG4gICAgICByZXR1cm4gbWVzc2FnZXM7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gPHA+44Oh44OD44K744O844K444Gv44GU5Yip55So44GE44Gf44Gg44GR44G+44Gb44KTPC9wPlxyXG4gICAgfVxyXG4gIH1cclxucmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICBcclxuICAgIDxoMj57bGVzc29ubmFtZX08L2gyPlxyXG4gICAge3VzZXJmaWx0ZXJ9XHJcbiAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuXHJcbk1lc3NhZ2UgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNZXNzYWdlKTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwic291cmNlUm9vdCI6IiJ9