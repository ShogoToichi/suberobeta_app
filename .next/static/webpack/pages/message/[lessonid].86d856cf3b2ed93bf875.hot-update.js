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
    backgroundColor: "bl"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3JlYXRlcmlkIiwic2V0Q3JlYXRlcmlkIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImJ1eWVyaWQiLCJzZXRCdXllcmlkIiwibGVzc29ubmFtZSIsInNldExlc3Nvbm5hbWUiLCJzdHlsZTIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTEiLCJyZWQiLCJtZXNzYWdlZGF0YSIsIm1lc3NhZ2VpdGVtcyIsImdldE1lc3NhZ2VEYXRhIiwiZW1haWwiLCJMaWIiLCJkZWNvZGUiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImRvYyIsInF1ZXJ5IiwibGVzc29uaWQiLCJnZXQiLCJ0aGVuIiwibGVzc29uZGF0YSIsImRhdGEiLCJvcmRlckJ5IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwiaSIsInRleHQiLCJ1c2VyaWQiLCJ1c2VyZmlsdGVyIiwiY29ubmVjdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2ZDLFNBRGU7QUFBQSxNQUNMQyxZQURLOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVmRyxRQUZlO0FBQUEsTUFFTkMsV0FGTTs7QUFBQSxtQkFHTUosc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJYU4sc0RBQVEsQ0FBQyxFQUFELENBSnJCO0FBQUEsTUFJZk8s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QTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVFGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0k7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR2dDLFVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNQzs7SUF0RVF6QyxPOztLQUFBQSxPO0FBeUVUQSxPQUFPLEdBQUcwQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCM0MsT0FBeEIsQ0FBVjtBQUNlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tsZXNzb25pZF0uODZkODU2Y2YzYjJlZDkzYmY4NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfWZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UgKHByb3BzKXtcclxuICBjb25zdCBbY3JlYXRlcmlkLHNldENyZWF0ZXJpZF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcyxzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV5ZXJpZCxzZXRCdXllcmlkXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xlc3Nvbm5hbWUsc2V0TGVzc29ubmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBcclxuICBjb25zdCBzdHlsZTIgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOlwiYmxcIixcclxuICB9XHJcbiAgY29uc3Qgc3R5bGUxID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yIDpyZWQsXHJcbiAgfVxyXG4gIGNvbnN0IG1lc3NhZ2VkYXRhPVtdO1xyXG4gIGNvbnN0IG1lc3NhZ2VpdGVtcz1bXTtcclxuXHJcbiAgLy9sZXNzb25kYXRh5Y+K44GzbGVzc29uY3JlYXRlcuOBrnByb2ZpbGXjgpLlj5blvpdcclxuICBjb25zdCBnZXRNZXNzYWdlRGF0YT0gYXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZGVjb2RlKHByb3BzLmVtYWlsKTtcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgLy9yb3V0ZXIucXVlcnkubGVzc29uaWTjgafjg5rjg7zjgrjjga51cmzjga7mnKvlsL7jgpLlj5blvpdcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuZ2V0KClcclxuICAgIC8v44OH44O844K/5Y+W5b6X5b6M44Gu5Yem55CGXHJcbiAgICAvL+WPluW+l+OBl+OBn+ODh+ODvOOCv+OCkmxlc3NvbmRhdGHjgavjgZfjgb7jgaPjgabjgYvjgonjgIHjgZ3jgozjgpLjgrnjg4bjg7zjg4jjgavnqoHjgaPovrzjgoBcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIHNldENyZWF0ZXJpZChsZXNzb25kYXRhLmNyZWF0ZXJpZCk7XHJcbiAgICAgICAgc2V0TGVzc29ubmFtZShsZXNzb25kYXRhLmxlc3Nvbm5hbWUpO1xyXG4gICAgICAgIHNldEJ1eWVyaWQobGVzc29uZGF0YS5idXllcmlkKTtcclxuXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikuZG9jKHJvdXRlci5xdWVyeS5sZXNzb25pZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VcIikub3JkZXJCeShcInRpbWVcIilcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgICAgICBtZXNzYWdlZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGZvcihsZXQgaSBpbiBtZXNzYWdlZGF0YSl7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gbWVzc2FnZWRhdGFbaV0udGV4dDtcclxuICAgICAgICAgICAgbGV0IHVzZXJpZCA9IG1lc3NhZ2VkYXRhW2ldLnVzZXJpZDtcclxuICAgICAgICAgICAgaWYodXNlcmlkID09IGVtYWlsKXtcclxuICAgICAgICAgICAgICBtZXNzYWdlaXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtcInN0eWxlMVwifT57dGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO31cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZWl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17XCJzdHlsZTJcIn0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZWl0ZW1zKTtcclxuICAgICAgICAgIH0pXHJcbiAgfSl9XHJcbiAgY29uc3QgdXNlcmZpbHRlciA9KCk9PntcclxuICAgIGlmIChlbWFpbD09Y3JlYXRlcmlkIHx8IGVtYWlsPT1idXllcmlkKXtcclxuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIDxwPuODoeODg+OCu+ODvOOCuOOBr+OBlOWIqeeUqOOBhOOBn+OBoOOBkeOBvuOBm+OCkzwvcD5cclxuICAgIH1cclxuICB9XHJcbnJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPGgyPntsZXNzb25uYW1lfTwvaDI+XHJcbiAgICB7dXNlcmZpbHRlcn1cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5cclxuTWVzc2FnZSA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE1lc3NhZ2UpO1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=