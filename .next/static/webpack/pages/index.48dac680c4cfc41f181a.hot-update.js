webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Fire.js":
/*!****************************!*\
  !*** ./components/Fire.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fire; });
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lesson */ "./components/Lesson.js");




var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\Fire.js",
    _s = $RefreshSig$();

//Firebase関連をいろいろ試すために使ってたファイル


 //export default function Fire(){
//  const firetest =async()=>{
//    const db=firebase.firestore();
//    await db.collection("users").doc("toichi*gmail*com").get().then((doc)=>{
//      console.log("Data:",doc.data());
//    });
//    console.log("fire");
//  }
//  return(
//    <button onClick={firetest}>fire</button>
//  );
//}

function Fire() {
  _s();

  var _this = this;

  var data = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Lesson__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lessonid: "8"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 15
  }, this)];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      items = _useState[0],
      setItems = _useState[1];

  var lessonids = [1, 2, 3, 4];

  var firetest = /*#__PURE__*/function () {
    var _ref = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, lessondata, id;
      return C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
              lessondata = [];
              _context.next = 4;
              return db.collection("lessons").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  lessondata.unshift(doc.data());
                });
                console.log(lessondata[0].lessonname);
              });

            case 4:
              id = lessonids;
              id.push(5);
              setItems([1, 2, 3, 4, 5]);
              console.log(items); // const new_data = <Lesson lessonid="9" name="beginner lesson" place="saitama uni" time="one hour" text="let's enjoy snowboard with me!" price="2000yen"/>

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function firetest() {
      return _ref.apply(this, arguments);
    };
  }(); // data.push(new_data);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      onClick: firetest,
      children: "fire"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 12
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), items.map(function (lessonid) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Lesson__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: lessonid
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Fire, "18HaVn6LFmR0D+xZ0rWm1yUGNaE=");

_c = Fire;

var _c;

$RefreshReg$(_c, "Fire");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJlLmpzIl0sIm5hbWVzIjpbIkZpcmUiLCJkYXRhIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVzc29uaWRzIiwiZmlyZXRlc3QiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwibGVzc29uZGF0YSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJ1bnNoaWZ0IiwiY29uc29sZSIsImxvZyIsImxlc3Nvbm5hbWUiLCJpZCIsInB1c2giLCJtYXAiLCJsZXNzb25pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxJQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDNUIsTUFBSUMsSUFBSSxHQUFHLGNBQUMscUVBQUMsK0NBQUQ7QUFBUSxZQUFRLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFELENBQVg7O0FBRDRCLGtCQUVIQyxzREFBUSxDQUFDLENBQUQsQ0FGTDtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWZDLFFBRmU7O0FBRzVCLE1BQU1DLFNBQVMsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBbEI7O0FBRUEsTUFBTUMsUUFBUTtBQUFBLGtWQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxnQkFEUSxHQUNMQyxnREFBUSxDQUFDQyxTQUFULEVBREs7QUFFUkMsd0JBRlEsR0FFSyxFQUZMO0FBQUE7QUFBQSxxQkFHUkgsRUFBRSxDQUFDSSxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsR0FBK0JDLElBQS9CLENBQW9DLFVBQVNDLGFBQVQsRUFBdUI7QUFDL0RBLDZCQUFhLENBQUNDLE9BQWQsQ0FBc0IsVUFBU0MsR0FBVCxFQUFhO0FBQ2pDTiw0QkFBVSxDQUFDTyxPQUFYLENBQW1CRCxHQUFHLENBQUNmLElBQUosRUFBbkI7QUFDRCxpQkFGRDtBQUdBaUIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZVCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFVBQTFCO0FBQ0QsZUFMSyxDQUhROztBQUFBO0FBU1JDLGdCQVRRLEdBU0hoQixTQVRHO0FBVWRnQixnQkFBRSxDQUFDQyxJQUFILENBQVEsQ0FBUjtBQUNBbEIsc0JBQVEsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQUQsQ0FBUjtBQUNBYyxxQkFBTyxDQUFDQyxHQUFSLENBQVloQixLQUFaLEVBWmMsQ0FhaEI7O0FBYmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQVJHLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZCxDQUw0QixDQW9COUI7OztBQUVFLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVBLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDZCQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dILEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFDQyxRQUFELEVBQVk7QUFDckIsMEJBQU8scUVBQUMsK0NBQUQ7QUFBUSxZQUFJLEVBQUVBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGQSxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBL0J1QnhCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDhkYWM2ODBjNGNmYzQxZjE4MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRmlyZWJhc2XplqLpgKPjgpLjgYTjgo3jgYTjgo3oqabjgZnjgZ/jgoHjgavkvb/jgaPjgabjgZ/jg5XjgqHjgqTjg6tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmUoKXtcclxuLy8gIGNvbnN0IGZpcmV0ZXN0ID1hc3luYygpPT57XHJcbi8vICAgIGNvbnN0IGRiPWZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4vLyAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKFwidG9pY2hpKmdtYWlsKmNvbVwiKS5nZXQoKS50aGVuKChkb2MpPT57XHJcbi8vICAgICAgY29uc29sZS5sb2coXCJEYXRhOlwiLGRvYy5kYXRhKCkpO1xyXG4vLyAgICB9KTtcclxuLy8gICAgY29uc29sZS5sb2coXCJmaXJlXCIpO1xyXG4vLyAgfVxyXG4vLyAgcmV0dXJuKFxyXG4vLyAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZpcmV0ZXN0fT5maXJlPC9idXR0b24+XHJcbi8vICApO1xyXG4vL31cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlKCl7XHJcbiAgbGV0IGRhdGEgPSBbPExlc3NvbiBsZXNzb25pZD1cIjhcIi8+XVxyXG4gIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZSgwKTsgIFxyXG4gIGNvbnN0IGxlc3NvbmlkcyA9IFsxLDIsMyw0XTtcclxuICBcclxuICBjb25zdCBmaXJldGVzdCA9YXN5bmMoKT0+e1xyXG4gICAgY29uc3QgZGI9ZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICBjb25zdCBsZXNzb25kYXRhID0gW107XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5nZXQoKS50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICBsZXNzb25kYXRhLnVuc2hpZnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhsZXNzb25kYXRhWzBdLmxlc3Nvbm5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpZCA9IGxlc3NvbmlkcztcclxuICAgIGlkLnB1c2goNSk7XHJcbiAgICBzZXRJdGVtcyhbMSwyLDMsNCw1XSk7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtcyk7XHJcbiAgLy8gY29uc3QgbmV3X2RhdGEgPSA8TGVzc29uIGxlc3NvbmlkPVwiOVwiIG5hbWU9XCJiZWdpbm5lciBsZXNzb25cIiBwbGFjZT1cInNhaXRhbWEgdW5pXCIgdGltZT1cIm9uZSBob3VyXCIgdGV4dD1cImxldCdzIGVuam95IHNub3dib2FyZCB3aXRoIG1lIVwiIHByaWNlPVwiMjAwMHllblwiLz5cclxufVxyXG4vLyBkYXRhLnB1c2gobmV3X2RhdGEpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZpcmV0ZXN0fT5maXJlPC9idXR0b24+XHJcbiAgICAgIDxkaXY+PHA+aGVsbG88L3A+PC9kaXY+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGxlc3NvbmlkKT0+e1xyXG4gICAgICAgIHJldHVybiA8TGVzc29uIG5hbWU9e2xlc3NvbmlkfS8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9