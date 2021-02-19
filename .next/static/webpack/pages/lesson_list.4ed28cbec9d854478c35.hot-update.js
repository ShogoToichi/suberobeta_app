webpackHotUpdate_N_E("pages/lesson_list",{

/***/ "./components/LessonList.js":
/*!**********************************!*\
  !*** ./components/LessonList.js ***!
  \**********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Lesson */ "./components/Lesson.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\programing_practice\\suberobeta_app\\components\\LessonList.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var LessonList = /*#__PURE__*/function (_Component) {
  Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LessonList, _Component);

  var _super = _createSuper(LessonList);

  function LessonList(props) {
    var _this;

    Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LessonList);

    _this = _super.call(this, props);
    _this.getFireData = _this.getFireData.bind(Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.data = [];
    return _this;
  }

  Object(C_Users_programing_practice_suberobeta_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LessonList, [{
    key: "getFireData",
    value: function getFireData() {
      var db = firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database();
      var ref = db.collection("lessons").get().then(function (snapshot) {
        snapshot.forEach(function (doc) {
          this.data.unshift(doc.data);
        });
        console.log(this.data);
      });
    } // getItem(lessondata){
    //     if(lessondata ===undefined){return;}
    //     let res = [];
    //     for (let i in lessondata){
    //         let id = lessondata[i]["lessonid"]
    //         let name =lessondata[i]["lessonname"];
    //         let place = lessondata[i]["lessonplace"]
    //         let time = lessondata[i]["lessontime"]
    //         let text = lessondata[i]["lessontext"]
    //         res.push(
    //           <Lesson lessonid={id}
    //                   name={name}
    //                   place={place}
    //                   time={time}
    //                   text={text}
    //           />
    //         );
    //         break;
    //       }
    //       return res;
    //     }

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "\u30EC\u30C3\u30B9\u30F3\u4E00\u89A7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: this.getFireData,
          children: "\u8AAD\u307F\u8FBC\u307F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this);
    }
  }]);

  return LessonList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); //LessonList = connect((state)=>state)(LessonList);


/* harmony default export */ __webpack_exports__["default"] = (LessonList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZXNzb25MaXN0LmpzIl0sIm5hbWVzIjpbIkxlc3Nvbkxpc3QiLCJwcm9wcyIsImdldEZpcmVEYXRhIiwiYmluZCIsImRhdGEiLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInVuc2hpZnQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxVOzs7OztBQUVKLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFpQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixrTEFBakI7QUFDQSxVQUFLQyxJQUFMLEdBQVksRUFBWjtBQUhnQjtBQUlqQjs7OztrQ0FHWTtBQUNiLFVBQUlDLEVBQUUsR0FBR0MsZ0RBQVEsQ0FBQ0MsUUFBVCxFQUFUO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxTQUFkLEVBQXlCQyxHQUF6QixHQUErQkMsSUFBL0IsQ0FBb0MsVUFBU0MsUUFBVCxFQUFrQjtBQUM5REEsZ0JBQVEsQ0FBQ0MsT0FBVCxDQUFpQixVQUFTQyxHQUFULEVBQWE7QUFDNUIsZUFBS1YsSUFBTCxDQUFVVyxPQUFWLENBQWtCRCxHQUFHLENBQUNWLElBQXRCO0FBQ0QsU0FGRDtBQUdBWSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLYixJQUFqQjtBQUNELE9BTFMsQ0FBVjtBQU1LLEssQ0FJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBR2M7QUFDTiwwQkFDQTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBUSxpQkFBTyxFQUFJLEtBQUtGLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBTUw7Ozs7RUFwRHNCZ0IsK0MsR0F1RHpCOzs7QUFDZWxCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlc3Nvbl9saXN0LjRlZDI4Y2JlYzlkODU0NDc4YzM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgTGVzc29uIGZyb20gXCIuL0xlc3NvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuY2xhc3MgTGVzc29uTGlzdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5nZXRGaXJlRGF0YT10aGlzLmdldEZpcmVEYXRhLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICB9XHJcblxyXG5cclxuICBnZXRGaXJlRGF0YSgpe1xyXG4gIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlICgpO1xyXG4gIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKFwibGVzc29uc1wiKS5nZXQoKS50aGVuKGZ1bmN0aW9uKHNuYXBzaG90KXtcclxuICAgIHNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgdGhpcy5kYXRhLnVuc2hpZnQoZG9jLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gIH0pXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuLy8gZ2V0SXRlbShsZXNzb25kYXRhKXtcclxuLy8gICAgIGlmKGxlc3NvbmRhdGEgPT09dW5kZWZpbmVkKXtyZXR1cm47fVxyXG4vLyAgICAgbGV0IHJlcyA9IFtdO1xyXG4vLyAgICAgZm9yIChsZXQgaSBpbiBsZXNzb25kYXRhKXtcclxuLy8gICAgICAgICBsZXQgaWQgPSBsZXNzb25kYXRhW2ldW1wibGVzc29uaWRcIl1cclxuLy8gICAgICAgICBsZXQgbmFtZSA9bGVzc29uZGF0YVtpXVtcImxlc3Nvbm5hbWVcIl07XHJcbi8vICAgICAgICAgbGV0IHBsYWNlID0gbGVzc29uZGF0YVtpXVtcImxlc3NvbnBsYWNlXCJdXHJcbi8vICAgICAgICAgbGV0IHRpbWUgPSBsZXNzb25kYXRhW2ldW1wibGVzc29udGltZVwiXVxyXG4vLyAgICAgICAgIGxldCB0ZXh0ID0gbGVzc29uZGF0YVtpXVtcImxlc3NvbnRleHRcIl1cclxuXHJcbi8vICAgICAgICAgcmVzLnB1c2goXHJcbi8vICAgICAgICAgICA8TGVzc29uIGxlc3NvbmlkPXtpZH1cclxuLy8gICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuLy8gICAgICAgICAgICAgICAgICAgcGxhY2U9e3BsYWNlfVxyXG4vLyAgICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIHJldHVybiByZXM7XHJcbi8vICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+44Os44OD44K544Oz5LiA6KanPC9oMj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHt0aGlzLmdldEZpcmVEYXRhfT7oqq3jgb/ovrzjgb88L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vTGVzc29uTGlzdCA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKExlc3Nvbkxpc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25MaXN0O1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==