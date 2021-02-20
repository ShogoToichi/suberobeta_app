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
                  lessondata.unshift(doc.data());
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
                    lineNumber: 33,
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
      lineNumber: 55,
      columnNumber: 7
    }, this), items, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/lesson_add",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        children: "\u30EC\u30C3\u30B9\u30F3\u8FFD\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsiTXlMZXNzb25MaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXRGaXJlRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJsZXNzb25kYXRhIiwibGVzc29uaWQiLCJsZXNzb25pdGVtcyIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJ1bnNoaWZ0IiwiZGF0YSIsImlkIiwiaSIsIm5hbWUiLCJsZXNzb25uYW1lIiwicGxhY2UiLCJsZXNzb25wbGFjZSIsInRpbWUiLCJsZXNzb250aW1lIiwidGV4dCIsImxlc3NvbnRleHQiLCJwcmljZSIsImxlc3NvbnByaWNlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxDQUF1QkMsS0FBdkIsRUFBNkI7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxTQUFELENBRE47QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNkQyxRQURjOztBQUczQixNQUFNQyxXQUFXO0FBQUEsa1ZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGdCQURXLEdBQ05DLGdEQUFRLENBQUNDLFNBQVQsRUFETTtBQUVYQyx3QkFGVyxHQUVFLEVBRkY7QUFHWEMsc0JBSFcsR0FHQSxFQUhBO0FBSVhDLHlCQUpXLEdBSUMsRUFKRDtBQUtYQyxtQkFMVyxHQUtIQywyREFBRyxDQUFDQyxXQUFKLENBQWdCYixLQUFLLENBQUNXLEtBQXRCLENBTEc7QUFBQTtBQUFBLHFCQU1YTixFQUFFLENBQUNTLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxLQUF6QixDQUErQixXQUEvQixFQUEyQyxJQUEzQyxFQUFnREosS0FBaEQsRUFBdURLLEdBQXZELEdBQ0xDLElBREssQ0FDQSxVQUFTQyxhQUFULEVBQXVCO0FBQzNCQSw2QkFBYSxDQUFDQyxPQUFkLENBQXNCLFVBQVNDLEdBQVQsRUFBYTtBQUNqQ1osNEJBQVUsQ0FBQ2EsT0FBWCxDQUFtQkQsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBQ0FiLDBCQUFRLENBQUNZLE9BQVQsQ0FBaUJELEdBQUcsQ0FBQ0csRUFBckI7QUFDRCxpQkFIRDs7QUFJQSxxQkFBSyxJQUFJQyxDQUFULElBQWNoQixVQUFkLEVBQXlCO0FBQ3ZCLHNCQUFJZSxFQUFFLEdBQUdkLFFBQVEsQ0FBQ2UsQ0FBRCxDQUFqQjtBQUNBLHNCQUFJQyxJQUFJLEdBQUVqQixVQUFVLENBQUNnQixDQUFELENBQVYsQ0FBY0UsVUFBeEI7QUFDQSxzQkFBSUMsS0FBSyxHQUFHbkIsVUFBVSxDQUFDZ0IsQ0FBRCxDQUFWLENBQWNJLFdBQTFCO0FBQ0Esc0JBQUlDLElBQUksR0FBR3JCLFVBQVUsQ0FBQ2dCLENBQUQsQ0FBVixDQUFjTSxVQUF6QjtBQUNBLHNCQUFJQyxJQUFJLEdBQUd2QixVQUFVLENBQUNnQixDQUFELENBQVYsQ0FBY1EsVUFBekI7QUFDQSxzQkFBSUMsS0FBSyxHQUFHekIsVUFBVSxDQUFDZ0IsQ0FBRCxDQUFWLENBQWNVLFdBQTFCO0FBQ0F4Qiw2QkFBVyxDQUFDeUIsSUFBWixlQUNFLHFFQUFDLCtDQUFEO0FBQVEsNEJBQVEsRUFBRVosRUFBbEI7QUFDUSx3QkFBSSxFQUFFRSxJQURkO0FBRVEseUJBQUssRUFBRUUsS0FGZjtBQUdRLHdCQUFJLEVBQUVFLElBSGQ7QUFJUSx3QkFBSSxFQUFFRSxJQUpkO0FBS1EseUJBQUssRUFBRUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGO0FBU0E7QUFDRDs7QUFDREcsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsV0FBWjtBQUNBUCx3QkFBUSxDQUFDTyxXQUFELENBQVI7QUFDQTBCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWW5DLEtBQVo7QUFDRCxlQTNCSyxDQU5XOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQVhFLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBb0NBLE1BQUdGLEtBQUssSUFBRyxTQUFYLEVBQXFCO0FBQ25CRSxlQUFXO0FBQ1o7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdGLEtBRkgsZUFHRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FwRFFILFk7O0tBQUFBLFk7QUFzRFRBLFlBQVksR0FBR3VDLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0J4QyxZQUF4QixDQUFmO0FBQ2VBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215cGFnZS4zNDQ0Mzc0OWZiYzBjOWE3MDQzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaWIgZnJvbSBcIi4uL3N0YXRpYy9hZGRyZXNzX2xpYlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTXlMZXNzb25MaXN0IChwcm9wcyl7XHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwibm8gaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlyZURhdGE9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlICgpO1xyXG4gICAgY29uc3QgbGVzc29uZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgbGVzc29uaWQgPSBbXTtcclxuICAgIGNvbnN0IGxlc3Nvbml0ZW1zPVtdO1xyXG4gICAgY29uc3QgZW1haWwgPSBMaWIuZW5jb2RlRW1haWwocHJvcHMuZW1haWwpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImxlc3NvbnNcIikud2hlcmUoXCJjcmVhdGVyaWRcIixcIj09XCIsZW1haWwpLmdldCgpXHJcbiAgICAudGhlbihmdW5jdGlvbihxdWVyeVNuYXBzaG90KXtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGRvYyl7XHJcbiAgICAgICAgbGVzc29uZGF0YS51bnNoaWZ0KGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIGxlc3NvbmlkLnVuc2hpZnQoZG9jLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gbGVzc29uZGF0YSl7XHJcbiAgICAgICAgbGV0IGlkID0gbGVzc29uaWRbaV07XHJcbiAgICAgICAgbGV0IG5hbWUgPWxlc3NvbmRhdGFbaV0ubGVzc29ubmFtZTtcclxuICAgICAgICBsZXQgcGxhY2UgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnBsYWNlO1xyXG4gICAgICAgIGxldCB0aW1lID0gbGVzc29uZGF0YVtpXS5sZXNzb250aW1lO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gbGVzc29uZGF0YVtpXS5sZXNzb250ZXh0O1xyXG4gICAgICAgIGxldCBwcmljZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucHJpY2U7XHJcbiAgICAgICAgbGVzc29uaXRlbXMucHVzaChcclxuICAgICAgICAgIDxMZXNzb24gbGVzc29uaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZT17cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpbWU9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhsZXNzb25pdGVtcylcclxuICAgICAgc2V0SXRlbXMobGVzc29uaXRlbXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGl0ZW1zID09XCJubyBpdGVtXCIpe1xyXG4gICAgZ2V0RmlyZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj7mipXnqL/jgZfjgZ/jg6zjg4Pjgrnjg7M8L2gyPlxyXG4gICAgICB7aXRlbXN9XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvbGVzc29uX2FkZFwiPlxyXG4gICAgICAgIDxidXR0b24+44Os44OD44K544Oz6L+95YqgPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk15TGVzc29uTGlzdCA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKE15TGVzc29uTGlzdCk7XHJcbmV4cG9ydCBkZWZhdWx0IE15TGVzc29uTGlzdDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==