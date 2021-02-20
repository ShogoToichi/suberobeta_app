webpackHotUpdate_N_E("pages/mypage",{

/***/ "./components/MyLessonList.js":
/*!************************************!*\
  !*** ./components/MyLessonList.js ***!
  \************************************/
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
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lesson */ "./components/Lesson.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\MyLessonList.js",
    _s = $RefreshSig$();









function MyLessonList(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("no item"),
      items = _useState[0],
      setItems = _useState[1];

  var getFireData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, lessonid, lessonitems, email;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              lessondata = [];
              lessonid = [];
              lessonitems = [];
              email = _static_address_lib__WEBPACK_IMPORTED_MODULE_8__["default"].encodeEmail(props.email);
              _context.next = 7;
              return db.collection("lessons").where("createrid", "==", email).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  console.log(doc.id, " => ", doc.data());
                  doc.data().map(function (data) {
                    lessondata.unshift(data);
                  });
                  doc.id;
                  lessonid.unshift(doc.id);
                });

                for (var i in lessondata) {
                  var id = lessonid[i];
                  var name = lessondata[i].lessonname;
                  var place = lessondata[i].lessonplace;
                  var time = lessondata[i].lessontime;
                  var text = lessondata[i].lessontext;
                  var price = lessondata[i].lessonprice;
                  lessonitems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Lesson__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    lessonid: id,
                    name: name,
                    place: place,
                    time: time,
                    text: text,
                    price: price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 11
                  }, this));
                  break;
                }

                console.log(lessonitems);
                setItems(lessonitems);
                console.log(items);
              });

            case 7:
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

  if (items == "no item") {
    getFireData();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "\u6295\u7A3F\u3057\u305F\u30EC\u30C3\u30B9\u30F3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), items, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/lesson_add",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: getFireData,
      children: "\u691C\u8A3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(MyLessonList, "EPa/xZ/h77DmlluBT9LjkTFWT9Q=");

_c = MyLessonList;
MyLessonList = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(MyLessonList);
/* harmony default export */ __webpack_exports__["default"] = (MyLessonList);

var _c;

$RefreshReg$(_c, "MyLessonList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsiTXlMZXNzb25MaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXRGaXJlRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJsZXNzb25kYXRhIiwibGVzc29uaWQiLCJsZXNzb25pdGVtcyIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwibWFwIiwidW5zaGlmdCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxDQUF1QkMsS0FBdkIsRUFBNkI7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxTQUFELENBRE47QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNkQyxRQURjOztBQUczQixNQUFNQyxXQUFXO0FBQUEsa1ZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGdCQURXLEdBQ05DLGdEQUFRLENBQUNDLFNBQVQsRUFETTtBQUVYQyx3QkFGVyxHQUVFLEVBRkY7QUFHWEMsc0JBSFcsR0FHQSxFQUhBO0FBSVhDLHlCQUpXLEdBSUMsRUFKRDtBQUtYQyxtQkFMVyxHQUtIQywyREFBRyxDQUFDQyxXQUFKLENBQWdCYixLQUFLLENBQUNXLEtBQXRCLENBTEc7QUFBQTtBQUFBLHFCQU1YTixFQUFFLENBQUNTLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxLQUF6QixDQUErQixXQUEvQixFQUEyQyxJQUEzQyxFQUFnREosS0FBaEQsRUFBdURLLEdBQXZELEdBQ0xDLElBREssQ0FDQSxVQUFTQyxhQUFULEVBQXVCO0FBQzNCQSw2QkFBYSxDQUFDQyxPQUFkLENBQXNCLFVBQVNDLEdBQVQsRUFBYTtBQUNqQ0MseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLEVBQWhCLEVBQW9CLE1BQXBCLEVBQTRCSCxHQUFHLENBQUNJLElBQUosRUFBNUI7QUFDQUoscUJBQUcsQ0FBQ0ksSUFBSixHQUFXQyxHQUFYLENBQWUsVUFBQ0QsSUFBRCxFQUFRO0FBQ3JCaEIsOEJBQVUsQ0FBQ2tCLE9BQVgsQ0FBbUJGLElBQW5CO0FBQ0QsbUJBRkQ7QUFHQUoscUJBQUcsQ0FBQ0csRUFBSjtBQUNBZCwwQkFBUSxDQUFDaUIsT0FBVCxDQUFpQk4sR0FBRyxDQUFDRyxFQUFyQjtBQUNELGlCQVBEOztBQVFBLHFCQUFLLElBQUlJLENBQVQsSUFBY25CLFVBQWQsRUFBeUI7QUFDdkIsc0JBQUllLEVBQUUsR0FBR2QsUUFBUSxDQUFDa0IsQ0FBRCxDQUFqQjtBQUNBLHNCQUFJQyxJQUFJLEdBQUVwQixVQUFVLENBQUNtQixDQUFELENBQVYsQ0FBY0UsVUFBeEI7QUFDQSxzQkFBSUMsS0FBSyxHQUFHdEIsVUFBVSxDQUFDbUIsQ0FBRCxDQUFWLENBQWNJLFdBQTFCO0FBQ0Esc0JBQUlDLElBQUksR0FBR3hCLFVBQVUsQ0FBQ21CLENBQUQsQ0FBVixDQUFjTSxVQUF6QjtBQUNBLHNCQUFJQyxJQUFJLEdBQUcxQixVQUFVLENBQUNtQixDQUFELENBQVYsQ0FBY1EsVUFBekI7QUFDQSxzQkFBSUMsS0FBSyxHQUFHNUIsVUFBVSxDQUFDbUIsQ0FBRCxDQUFWLENBQWNVLFdBQTFCO0FBQ0EzQiw2QkFBVyxDQUFDNEIsSUFBWixlQUNFLHFFQUFDLCtDQUFEO0FBQVEsNEJBQVEsRUFBRWYsRUFBbEI7QUFDUSx3QkFBSSxFQUFFSyxJQURkO0FBRVEseUJBQUssRUFBRUUsS0FGZjtBQUdRLHdCQUFJLEVBQUVFLElBSGQ7QUFJUSx3QkFBSSxFQUFFRSxJQUpkO0FBS1EseUJBQUssRUFBRUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGO0FBU0E7QUFDRDs7QUFDRGYsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixXQUFaO0FBQ0FQLHdCQUFRLENBQUNPLFdBQUQsQ0FBUjtBQUNBVyx1QkFBTyxDQUFDQyxHQUFSLENBQVlwQixLQUFaO0FBQ0QsZUEvQkssQ0FOVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFYRSxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQXdDQSxNQUFHRixLQUFLLElBQUcsU0FBWCxFQUFxQjtBQUNuQkUsZUFBVztBQUNaOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHRixLQUZILGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBTUk7QUFBUSxhQUFPLEVBQUVFLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0F6RFFMLFk7O0tBQUFBLFk7QUEyRFRBLFlBQVksR0FBR3dDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J6QyxZQUF4QixDQUFmO0FBQ2VBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215cGFnZS40MWU2NDhjOTk4N2I4ZTJiNmRmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTXlMZXNzb25MaXN0IChwcm9wcyl7XHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zPVtdO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikud2hlcmUoXCJjcmVhdGVyaWRcIixcIj09XCIsZW1haWwpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgZG9jLmRhdGEoKS5tYXAoKGRhdGEpPT57XHJcbiAgICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2MuaWRcclxuICAgICAgICBsZXNzb25pZC51bnNoaWZ0KGRvYy5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBpIGluIGxlc3NvbmRhdGEpe1xyXG4gICAgICAgIGxldCBpZCA9IGxlc3NvbmlkW2ldO1xyXG4gICAgICAgIGxldCBuYW1lID1sZXNzb25kYXRhW2ldLmxlc3Nvbm5hbWU7XHJcbiAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wbGFjZTtcclxuICAgICAgICBsZXQgdGltZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGltZTtcclxuICAgICAgICBsZXQgdGV4dCA9IGxlc3NvbmRhdGFbaV0ubGVzc29udGV4dDtcclxuICAgICAgICBsZXQgcHJpY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnByaWNlO1xyXG4gICAgICAgIGxlc3Nvbml0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8TGVzc29uIGxlc3NvbmlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4gICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cobGVzc29uaXRlbXMpXHJcbiAgICAgIHNldEl0ZW1zKGxlc3Nvbml0ZW1zKTtcclxuICAgICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihpdGVtcyA9PVwibm8gaXRlbVwiKXtcclxuICAgIGdldEZpcmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+5oqV56i/44GX44Gf44Os44OD44K544OzPC9oMj5cclxuICAgICAge2l0ZW1zfVxyXG4gICAgICA8TGluayBocmVmPVwiL2xlc3Nvbl9hZGRcIj5cclxuICAgICAgICA8YnV0dG9uPuODrOODg+OCueODs+i/veWKoDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRGaXJlRGF0YX0+5qSc6Ki8PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5NeUxlc3Nvbkxpc3QgPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShNeUxlc3Nvbkxpc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBNeUxlc3Nvbkxpc3Q7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=