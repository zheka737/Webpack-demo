(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");



function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
    element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
       console.log(text);
};

/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNLOztBQUU1QjtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDZDQUFDO0FBQ3pCLHNCQUFzQiw4Q0FBSzs7QUFFM0I7QUFDQTs7QUFFQSx1Qzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxFIiwiZmlsZSI6ImluZGV4LjFiY2U0NTJmMDVhM2I5ZDNlZTkwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBQcmludCBmcm9tICcuL3ByaW50JztcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSBQcmludC5iaW5kKG51bGwsICdIZWxsbyB3ZWJwYWNrIScpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludCh0ZXh0KSB7XG4gICAgICAgY29uc29sZS5sb2codGV4dCk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=