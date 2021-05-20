/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/sign in-up/signup.ts":
/*!********************************************!*\
  !*** ./src/functions/sign in-up/signup.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nvar params = {\r\n    UserPoolId: 'eu-west-1_eWKVnUjrC',\r\n    Username: 'hadi2@gmail.com',\r\n    ForceAliasCreation: true,\r\n    TemporaryPassword: 'Hwqwqw1234343esw1@E',\r\n    UserAttributes: [\r\n        {\r\n            Name: 'email',\r\n            Value: 'hadi2@gmail.com'\r\n        },\r\n    ],\r\n    ValidationData: [\r\n        {\r\n            Name: 'email',\r\n            Value: 'hadi2@gmail.com'\r\n        },\r\n    ]\r\n};\r\nconst cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();\r\ncognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {\r\n    if (err)\r\n        console.log(err, err.stack);\r\n    else\r\n        console.log(data);\r\n}).promise();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3NpZ24gaW4tdXAvc2lnbnVwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zcmMvZnVuY3Rpb25zL3NpZ24gaW4tdXAvc2lnbnVwLnRzP2VlNjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZShcImF3cy1zZGtcIik7XHJcblxyXG52YXIgcGFyYW1zID0ge1xyXG4gICAgVXNlclBvb2xJZDogJ2V1LXdlc3QtMV9lV0tWblVqckMnLCAvKiByZXF1aXJlZCAqL1xyXG4gICAgVXNlcm5hbWU6ICdoYWRpMkBnbWFpbC5jb20nLCAvKiByZXF1aXJlZCAqL1xyXG4gICAgRm9yY2VBbGlhc0NyZWF0aW9uOiB0cnVlLFxyXG4gICAgVGVtcG9yYXJ5UGFzc3dvcmQ6ICdId3F3cXcxMjM0MzQzZXN3MUBFJyxcclxuICAgIFVzZXJBdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiAnZW1haWwnLCAvKiByZXF1aXJlZCAqL1xyXG4gICAgICAgICAgICBWYWx1ZTonaGFkaTJAZ21haWwuY29tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyogbW9yZSBpdGVtcyAqL1xyXG4gICAgXSxcclxuICAgIFZhbGlkYXRpb25EYXRhOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiAnZW1haWwnLCAvKiByZXF1aXJlZCAqL1xyXG4gICAgICAgICAgICBWYWx1ZTogJ2hhZGkyQGdtYWlsLmNvbSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qIG1vcmUgaXRlbXMgKi9cclxuICAgIF1cclxufTtcclxuXHJcbmNvbnN0IGNvZ25pdG9pZGVudGl0eXNlcnZpY2Vwcm92aWRlciA9IG5ldyBBV1MuQ29nbml0b0lkZW50aXR5U2VydmljZVByb3ZpZGVyKCk7XHJcbmNvZ25pdG9pZGVudGl0eXNlcnZpY2Vwcm92aWRlci5hZG1pbkNyZWF0ZVVzZXIocGFyYW1zLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcclxuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVyciwgZXJyLnN0YWNrKTsgLy8gYW4gZXJyb3Igb2NjdXJyZWRcclxuICAgIGVsc2UgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bCByZXNwb25zZVxyXG59KS5wcm9taXNlKCk7XHJcblxyXG5cclxuLy8gQVdTLmNvZ25pdG9pZGVudGl0eXNlcnZpY2Vwcm92aWRlci5hZG1pbkNyZWF0ZVVzZXIocGFyYW1zLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcclxuLy8gICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVyciwgZXJyLnN0YWNrKTsgLy8gYW4gZXJyb3Igb2NjdXJyZWRcclxuLy8gICAgIGVsc2UgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bCByZXNwb25zZVxyXG4vLyB9KS5wcm9taXNlKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/sign in-up/signup.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/sign in-up/signup.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;