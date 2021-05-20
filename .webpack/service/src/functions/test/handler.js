/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/test/handler.ts":
/*!***************************************!*\
  !*** ./src/functions/test/handler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRecords\": () => (/* binding */ getRecords),\n/* harmony export */   \"createRecord\": () => (/* binding */ createRecord),\n/* harmony export */   \"updateRecord\": () => (/* binding */ updateRecord),\n/* harmony export */   \"deleteRecord\": () => (/* binding */ deleteRecord)\n/* harmony export */ });\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n\r\nconst AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nconst docClient = new AWS.DynamoDB.DocumentClient();\r\nconst getRecords = async (event) => {\r\n    const records = await docClient.scan({\r\n        TableName: \"todos-dev\"\r\n    }).promise();\r\n    console.log(event);\r\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)({\r\n        message: records,\r\n    });\r\n};\r\nconst createRecord = async (event) => {\r\n    console.log(event);\r\n    const params = {\r\n        TableName: \"todos-dev\",\r\n        Item: {\r\n            id: \"42545647534\",\r\n            name: \"new record\",\r\n            updatedAt: \"1610623040157\",\r\n            userid: \"7eea6c82-41fa-4130-a315-11463ade5884\"\r\n        }\r\n    };\r\n    console.log(params);\r\n    const records = await docClient.put(params, function (err, data) {\r\n        if (err) {\r\n            console.error(\"Unable to add item. Error JSON:\", JSON.stringify(err, null, 2));\r\n        }\r\n        else {\r\n            console.log(\"Added item:\", JSON.stringify(data, null, 2));\r\n        }\r\n    }).promise();\r\n    console.log(records);\r\n};\r\nconst updateRecord = async (event) => {\r\n    console.log(event);\r\n    var params = {\r\n        TableName: \"todos-dev\",\r\n        Key: {\r\n            id: \"38e8ed70-57d2-11eb-b2d7-df9df9c1f931\"\r\n        },\r\n        UpdateExpression: \"SET userId = :label\",\r\n        ExpressionAttributeValues: {\r\n            \":label\": \"777777777777777777777\"\r\n        },\r\n        ReturnValues: \"UPDATED_NEW\",\r\n    };\r\n    console.log(params);\r\n    const records = await docClient.update(params, function (err, data) {\r\n        if (err) {\r\n            console.error(\"Unable to update item. Error JSON:\", JSON.stringify(err, null, 2));\r\n        }\r\n        else {\r\n            console.log(\"UpdateItem succeeded:\", JSON.stringify(data, null, 2));\r\n        }\r\n    }).promise();\r\n    console.log(records);\r\n};\r\nconst deleteRecord = async (event) => {\r\n    var params = {\r\n        TableName: \"todos-dev\",\r\n        Key: {\r\n            id: \"42545647534\"\r\n        },\r\n    };\r\n    const records = await docClient.delete(params, function (err, data) {\r\n        if (err) {\r\n            console.error(\"Unable to delete item. Error JSON:\", JSON.stringify(err, null, 2));\r\n        }\r\n        else {\r\n            console.log(\"DeleteItem succeeded:\", JSON.stringify(data, null, 2));\r\n        }\r\n    }).promise();\r\n    console.log(event, records);\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3Rlc3QvaGFuZGxlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RzLy4vc3JjL2Z1bmN0aW9ucy90ZXN0L2hhbmRsZXIudHM/YTcyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QVBJR2F0ZXdheVByb3h5RXZlbnR9IGZyb20gXCJhd3MtbGFtYmRhXCI7XHJcbmltcG9ydCB7Zm9ybWF0SlNPTlJlc3BvbnNlfSBmcm9tIFwiQGxpYnMvYXBpR2F0ZXdheVwiO1xyXG5jb25zdCBBV1MgPSByZXF1aXJlKFwiYXdzLXNka1wiKTtcclxuXHJcbmNvbnN0IGRvY0NsaWVudCA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcclxuXHJcbmNvbnN0IGdldFJlY29yZHMgPSBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVjb3Jkcz0gYXdhaXQgZG9jQ2xpZW50LnNjYW4oe1xyXG4gICAgICAgIFRhYmxlTmFtZTogXCJ0b2Rvcy1kZXZcIlxyXG4gICAgfSkucHJvbWlzZSgpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcclxuICAgICAgICBtZXNzYWdlOiByZWNvcmRzLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVJlY29yZCA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQpID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOlwidG9kb3MtZGV2XCIsXHJcbiAgICAgICAgSXRlbToge1xyXG4gICAgICAgICAgICBpZDogXCI0MjU0NTY0NzUzNFwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIm5ldyByZWNvcmRcIixcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBcIjE2MTA2MjMwNDAxNTdcIixcclxuICAgICAgICAgICAgdXNlcmlkOiBcIjdlZWE2YzgyLTQxZmEtNDEzMC1hMzE1LTExNDYzYWRlNTg4NFwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBkb2NDbGllbnQucHV0KHBhcmFtcywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGFkZCBpdGVtLiBFcnJvciBKU09OOlwiLCBKU09OLnN0cmluZ2lmeShlcnIsIG51bGwsIDIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIGl0ZW06XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5wcm9taXNlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZWNvcmRzKTtcclxufVxyXG5cclxuY29uc3QgdXBkYXRlUmVjb3JkID0gYXN5bmMgKGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIFRhYmxlTmFtZTpcInRvZG9zLWRldlwiLFxyXG4gICAgICAgIEtleTp7XHJcbiAgICAgICAgICAgIGlkOiBcIjM4ZThlZDcwLTU3ZDItMTFlYi1iMmQ3LWRmOWRmOWMxZjkzMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVcGRhdGVFeHByZXNzaW9uOiBcIlNFVCB1c2VySWQgPSA6bGFiZWxcIixcclxuICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIFwiOmxhYmVsXCI6IFwiNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJldHVyblZhbHVlczpcIlVQREFURURfTkVXXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcblxyXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRvY0NsaWVudC51cGRhdGUocGFyYW1zLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gdXBkYXRlIGl0ZW0uIEVycm9yIEpTT046XCIsIEpTT04uc3RyaW5naWZ5KGVyciwgbnVsbCwgMikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlSXRlbSBzdWNjZWVkZWQ6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5wcm9taXNlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVjb3Jkcyk7XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVJlY29yZCA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQpID0+IHtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIFRhYmxlTmFtZTpcInRvZG9zLWRldlwiLFxyXG4gICAgICAgIEtleTp7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0MjU0NTY0NzUzNFwiXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGRvY0NsaWVudC5kZWxldGUocGFyYW1zLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZGVsZXRlIGl0ZW0uIEVycm9yIEpTT046XCIsIEpTT04uc3RyaW5naWZ5KGVyciwgbnVsbCwgMikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlSXRlbSBzdWNjZWVkZWQ6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5wcm9taXNlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZXZlbnQscmVjb3Jkcyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0UmVjb3JkcyxcclxuICAgIGNyZWF0ZVJlY29yZCxcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICAgIGRlbGV0ZVJlY29yZFxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/test/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\r\n    return {\r\n        statusCode: 200,\r\n        body: JSON.stringify(response)\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0LCBIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIlxuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSBcImpzb24tc2NoZW1hLXRvLXRzXCI7XG5cbnR5cGUgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBPbWl0PEFQSUdhdGV3YXlQcm94eUV2ZW50LCAnYm9keSc+ICYgeyBib2R5OiBGcm9tU2NoZW1hPFM+IH1cbmV4cG9ydCB0eXBlIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBIYW5kbGVyPFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LCBBUElHYXRld2F5UHJveHlSZXN1bHQ+XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAocmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/test/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;