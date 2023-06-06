/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\r\nconst contactButton = document.getElementById(\"contact\");\r\nconst contactHtml = `<div id=\"contacts\">\r\n        <div class=\"contact\">\r\n          <div>\r\n            <h2>Alfred (Manager):</h2>\r\n            <p>Email: <span>alfred.manager@gmail.com</span></p>\r\n            <p>Handy Number: 0172 13929010</p>\r\n          </div>\r\n          <div class=\"profile-pic\" id=\"alfred\"></div>\r\n        </div>\r\n        <div class=\"contact\">\r\n          <div>\r\n            <h2>Helga (Waitress):</h2>\r\n            <p>Email: <span>helga.waitress@gmail.com</span></p>\r\n            <p>Handy Number: 0175 13617219</p>\r\n          </div>\r\n          <div class=\"profile-pic\" id=\"helga\"></div>\r\n        </div>\r\n        <div class=\"contact\">\r\n          <div>\r\n            <h2>Bernd (chef)::</h2>\r\n            <p>Email: <span>bernd.chef@gmail.com</span></p>\r\n            <p>Handy Number: 0178 13558139</p>\r\n          </div>\r\n          <div class=\"profile-pic\" id=\"bernd\"></div>\r\n        </div>\r\n      </div>`;\r\n\r\nfunction contact() {\r\n  contactButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = contactHtml;\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://git_test/./src/contacts.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultHome\": () => (/* binding */ defaultHome),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\r\n\r\nconst homeButton = document.getElementById(\"home\");\r\nconst homeHtml = `<img src=\"/dist/fotos/images.jpg\" alt=\"\" />\r\n      <img src=\"/dist/fotos/Unbenannt.jpg\" alt=\"\" />\r\n      <ul>\r\n        <li>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti\r\n          explicabo ex aliquid inventore alias ratione repellendus qui neque nam\r\n          error.\r\n        </li>\r\n        <li>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti\r\n          explicabo ex aliquid inventore alias ratione repellendus qui neque nam\r\n          error.\r\n        </li>\r\n        <li>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti\r\n          explicabo ex aliquid inventore alias ratione repellendus qui neque nam\r\n          error.\r\n        </li>\r\n      </ul>`;\r\n\r\nfunction defaultHome() {\r\n  content.innerHTML = homeHtml;\r\n}\r\n\r\nfunction home() {\r\n  homeButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = homeHtml;\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://git_test/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.js */ \"./src/contacts.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.defaultHome)();\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();\r\n\r\n(0,_contacts_js__WEBPACK_IMPORTED_MODULE_1__.contact)();\r\n\r\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\r\n\n\n//# sourceURL=webpack://git_test/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\r\n\r\nconst menuButton = document.getElementById(\"menu\");\r\n\r\nconst menuHtml = ``;\r\n\r\nfunction menu() {\r\n  menuButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = menuHtml;\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://git_test/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;