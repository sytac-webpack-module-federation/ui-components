"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkui_components"] = self["webpackChunkui_components"] || []).push([["src_LitButton_js"],{

/***/ "./src/LitButton.js":
/*!**************************!*\
  !*** ./src/LitButton.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyButton\": () => (/* binding */ MyButton),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ \"./node_modules/lit/decorators.js\");\n\n\nclass MyButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\n  static properties = {\n    title: {\n      type: String\n    }\n  };\n  render() {\n    return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n        <button>${this.title}</button>\n    `;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('my-button')(MyButton));\n\n//# sourceURL=webpack://ui-components/./src/LitButton.js?");

/***/ })

}]);