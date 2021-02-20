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
                    return;
                  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxlc3Nvbkxpc3QuanMiXSwibmFtZXMiOlsiTXlMZXNzb25MaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXRGaXJlRGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJsZXNzb25kYXRhIiwibGVzc29uaWQiLCJsZXNzb25pdGVtcyIsImVtYWlsIiwiTGliIiwiZW5jb2RlRW1haWwiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwibWFwIiwidW5zaGlmdCIsImkiLCJuYW1lIiwibGVzc29ubmFtZSIsInBsYWNlIiwibGVzc29ucGxhY2UiLCJ0aW1lIiwibGVzc29udGltZSIsInRleHQiLCJsZXNzb250ZXh0IiwicHJpY2UiLCJsZXNzb25wcmljZSIsInB1c2giLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxDQUF1QkMsS0FBdkIsRUFBNkI7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxTQUFELENBRE47QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNkQyxRQURjOztBQUczQixNQUFNQyxXQUFXO0FBQUEsa1ZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGdCQURXLEdBQ05DLGdEQUFRLENBQUNDLFNBQVQsRUFETTtBQUVYQyx3QkFGVyxHQUVFLEVBRkY7QUFHWEMsc0JBSFcsR0FHQSxFQUhBO0FBSVhDLHlCQUpXLEdBSUMsRUFKRDtBQUtYQyxtQkFMVyxHQUtIQywyREFBRyxDQUFDQyxXQUFKLENBQWdCYixLQUFLLENBQUNXLEtBQXRCLENBTEc7QUFBQTtBQUFBLHFCQU1YTixFQUFFLENBQUNTLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxLQUF6QixDQUErQixXQUEvQixFQUEyQyxJQUEzQyxFQUFnREosS0FBaEQsRUFBdURLLEdBQXZELEdBQ0xDLElBREssQ0FDQSxVQUFTQyxhQUFULEVBQXVCO0FBQzNCQSw2QkFBYSxDQUFDQyxPQUFkLENBQXNCLFVBQVNDLEdBQVQsRUFBYTtBQUNqQ0MseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLEVBQWhCLEVBQW9CLE1BQXBCLEVBQTRCSCxHQUFHLENBQUNJLElBQUosRUFBNUI7QUFDQUoscUJBQUcsQ0FBQ0ksSUFBSixHQUFXQyxHQUFYLENBQWUsVUFBQ0QsSUFBRCxFQUFRO0FBQ3JCO0FBQ0QsbUJBRkQ7QUFHQWhCLDRCQUFVLENBQUNrQixPQUFYLENBQW1CTixHQUFHLENBQUNJLElBQUosRUFBbkI7QUFDQWYsMEJBQVEsQ0FBQ2lCLE9BQVQsQ0FBaUJOLEdBQUcsQ0FBQ0csRUFBckI7QUFDRCxpQkFQRDs7QUFRQSxxQkFBSyxJQUFJSSxDQUFULElBQWNuQixVQUFkLEVBQXlCO0FBQ3ZCLHNCQUFJZSxFQUFFLEdBQUdkLFFBQVEsQ0FBQ2tCLENBQUQsQ0FBakI7QUFDQSxzQkFBSUMsSUFBSSxHQUFFcEIsVUFBVSxDQUFDbUIsQ0FBRCxDQUFWLENBQWNFLFVBQXhCO0FBQ0Esc0JBQUlDLEtBQUssR0FBR3RCLFVBQVUsQ0FBQ21CLENBQUQsQ0FBVixDQUFjSSxXQUExQjtBQUNBLHNCQUFJQyxJQUFJLEdBQUd4QixVQUFVLENBQUNtQixDQUFELENBQVYsQ0FBY00sVUFBekI7QUFDQSxzQkFBSUMsSUFBSSxHQUFHMUIsVUFBVSxDQUFDbUIsQ0FBRCxDQUFWLENBQWNRLFVBQXpCO0FBQ0Esc0JBQUlDLEtBQUssR0FBRzVCLFVBQVUsQ0FBQ21CLENBQUQsQ0FBVixDQUFjVSxXQUExQjtBQUNBM0IsNkJBQVcsQ0FBQzRCLElBQVosZUFDRSxxRUFBQywrQ0FBRDtBQUFRLDRCQUFRLEVBQUVmLEVBQWxCO0FBQ1Esd0JBQUksRUFBRUssSUFEZDtBQUVRLHlCQUFLLEVBQUVFLEtBRmY7QUFHUSx3QkFBSSxFQUFFRSxJQUhkO0FBSVEsd0JBQUksRUFBRUUsSUFKZDtBQUtRLHlCQUFLLEVBQUVFO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERjtBQVNBO0FBQ0Q7O0FBQ0RmLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVosV0FBWjtBQUNBUCx3QkFBUSxDQUFDTyxXQUFELENBQVI7QUFDQVcsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsS0FBWjtBQUNELGVBL0JLLENBTlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBWEUsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUF3Q0EsTUFBR0YsS0FBSyxJQUFHLFNBQVgsRUFBcUI7QUFDbkJFLGVBQVc7QUFDWjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0YsS0FGSCxlQUdFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQU1JO0FBQVEsYUFBTyxFQUFFRSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBekRRTCxZOztLQUFBQSxZO0FBMkRUQSxZQUFZLEdBQUd3QywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFTQSxLQUFUO0FBQUEsQ0FBRCxDQUFQLENBQXdCekMsWUFBeEIsQ0FBZjtBQUNlQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBhZ2UuMTQwMDE5OGU4ZTBhNmEyODY0ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IExlc3NvbiBmcm9tIFwiLi9MZXNzb25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGliIGZyb20gXCIuLi9zdGF0aWMvYWRkcmVzc19saWJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE15TGVzc29uTGlzdCAocHJvcHMpe1xyXG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShcIm5vIGl0ZW1cIik7XHJcblxyXG4gIGNvbnN0IGdldEZpcmVEYXRhPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSAoKTtcclxuICAgIGNvbnN0IGxlc3NvbmRhdGEgPSBbXTtcclxuICAgIGNvbnN0IGxlc3NvbmlkID0gW107XHJcbiAgICBjb25zdCBsZXNzb25pdGVtcz1bXTtcclxuICAgIGNvbnN0IGVtYWlsID0gTGliLmVuY29kZUVtYWlsKHByb3BzLmVtYWlsKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJsZXNzb25zXCIpLndoZXJlKFwiY3JlYXRlcmlkXCIsXCI9PVwiLGVtYWlsKS5nZXQoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24ocXVlcnlTbmFwc2hvdCl7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihkb2Mpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIGRvYy5kYXRhKCkubWFwKChkYXRhKT0+e1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgbGVzc29uaWQudW5zaGlmdChkb2MuaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChsZXQgaSBpbiBsZXNzb25kYXRhKXtcclxuICAgICAgICBsZXQgaWQgPSBsZXNzb25pZFtpXTtcclxuICAgICAgICBsZXQgbmFtZSA9bGVzc29uZGF0YVtpXS5sZXNzb25uYW1lO1xyXG4gICAgICAgIGxldCBwbGFjZSA9IGxlc3NvbmRhdGFbaV0ubGVzc29ucGxhY2U7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRpbWU7XHJcbiAgICAgICAgbGV0IHRleHQgPSBsZXNzb25kYXRhW2ldLmxlc3NvbnRleHQ7XHJcbiAgICAgICAgbGV0IHByaWNlID0gbGVzc29uZGF0YVtpXS5sZXNzb25wcmljZTtcclxuICAgICAgICBsZXNzb25pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPExlc3NvbiBsZXNzb25pZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlPXtwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgdGltZT17dGltZX1cclxuICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGxlc3Nvbml0ZW1zKVxyXG4gICAgICBzZXRJdGVtcyhsZXNzb25pdGVtcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYoaXRlbXMgPT1cIm5vIGl0ZW1cIil7XHJcbiAgICBnZXRGaXJlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPuaKleeov+OBl+OBn+ODrOODg+OCueODszwvaDI+XHJcbiAgICAgIHtpdGVtc31cclxuICAgICAgPExpbmsgaHJlZj1cIi9sZXNzb25fYWRkXCI+XHJcbiAgICAgICAgPGJ1dHRvbj7jg6zjg4Pjgrnjg7Pov73liqA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0RmlyZURhdGF9PuaknOiovDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTXlMZXNzb25MaXN0ID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoTXlMZXNzb25MaXN0KTtcclxuZXhwb3J0IGRlZmF1bHQgTXlMZXNzb25MaXN0O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9