"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./src/libs/firebase.js":
/*!******************************!*\
  !*** ./src/libs/firebase.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nconst firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert({\n            client_email: process.env.FIREBASE_CLIENT_EMAIL,\n            privateKey: firebasePrivateKey.replace(/\\\\n/g, \"\\n\"),\n            project_id: process.env.FIREBASE_PROJECT_ID\n        }),\n        databaseURL: \"https://sarmad-gardezi-com-default-rtdb.firebaseio.com\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().database());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGlicy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFDbkMsTUFBTUMsa0JBQWtCLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxvQkFBb0I7QUFFM0QsSUFBSSxDQUFDSixtRUFBaUIsRUFBRTtJQUN0QkEsbUVBQW1CLENBQUM7UUFDbEJRLFVBQVUsRUFBRVIscUVBQXFCLENBQUM7WUFDOUJVLFlBQVksRUFBRVIsT0FBTyxDQUFDQyxHQUFHLENBQUNRLHFCQUFxQjtZQUMvQ0MsVUFBVSxFQUFFWCxrQkFBa0IsQ0FBQ1ksT0FBTyxTQUFTLElBQUksQ0FBQztZQUNwREMsVUFBVSxFQUFFWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksbUJBQW1CO1NBQzlDLENBQUM7UUFDRkMsV0FBVyxFQUFFLHdEQUF3RDtLQUN4RSxDQUFDLENBQUM7Q0FDRjtBQUVELGlFQUFlaEIsOERBQWMsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FybWFkLWdhcmRlemkvLi9zcmMvbGlicy9maXJlYmFzZS5qcz80YjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5jb25zdCBmaXJlYmFzZVByaXZhdGVLZXkgPSBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUklWQVRFX0tFWVxuXG5pZiAoIWFkbWluLmFwcHMubGVuZ3RoKSB7XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xJRU5UX0VNQUlMLFxuICAgICAgICBwcml2YXRlS2V5OiBmaXJlYmFzZVByaXZhdGVLZXkucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpLFxuICAgICAgICBwcm9qZWN0X2lkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lEXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3Nhcm1hZC1nYXJkZXppLWNvbS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20nXG59KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRtaW4uZGF0YWJhc2UoKTsiXSwibmFtZXMiOlsiYWRtaW4iLCJmaXJlYmFzZVByaXZhdGVLZXkiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfUFJJVkFURV9LRVkiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImNyZWRlbnRpYWwiLCJjZXJ0IiwiY2xpZW50X2VtYWlsIiwiRklSRUJBU0VfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZUtleSIsInJlcGxhY2UiLCJwcm9qZWN0X2lkIiwiRklSRUJBU0VfUFJPSkVDVF9JRCIsImRhdGFiYXNlVVJMIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/libs/firebase.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/views/[slug].js":
/*!***************************************!*\
  !*** ./src/pages/api/views/[slug].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/firebase */ \"(api)/./src/libs/firebase.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // increment the views\n    if (req.method === \"POST\") {\n        const ref = _libs_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ref(\"views\").child(req.query.slug);\n        const { snapshot  } = await ref.transaction((currentViews)=>{\n            if (currentViews === null) {\n                return 1;\n            }\n            return currentViews + 3;\n        });\n        return res.status(200).json({\n            total: snapshot.val()\n        });\n    }\n    // fetch the views\n    if (req.method === \"GET\") {\n        const snapshot1 = await _libs_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ref(\"views\").child(req.query.slug).once(\"value\");\n        const views = snapshot1.val();\n        return res.status(200).json({\n            total: views\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3ZpZXdzL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV2QyxpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMvQixzQkFBc0I7SUFDdEIsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLEdBQUcsR0FBR0osMERBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssS0FBSyxDQUFDSixHQUFHLENBQUNLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBQ2pELE1BQU0sRUFBRUMsUUFBUSxHQUFFLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxXQUFXLENBQUMsQ0FBQ0MsWUFBWSxHQUFLO1lBQzNELElBQUlBLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQzthQUNUO1lBRUQsT0FBT0EsWUFBWSxHQUFHLENBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU9SLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDMUJDLEtBQUssRUFBRUwsUUFBUSxDQUFDTSxHQUFHLEVBQUU7U0FDdEIsQ0FBQztLQUNIO0lBRUQsa0JBQWtCO0lBQ2xCLElBQUliLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNSyxTQUFRLEdBQUcsTUFBTVIsMERBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssS0FBSyxDQUFDSixHQUFHLENBQUNLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUUsTUFBTUMsS0FBSyxHQUFHUixTQUFRLENBQUNNLEdBQUcsRUFBRTtRQUU1QixPQUFPWixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRUcsS0FBSztTQUFFLENBQUM7S0FDOUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nhcm1hZC1nYXJkZXppLy4vc3JjL3BhZ2VzL2FwaS92aWV3cy9bc2x1Z10uanM/MDcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vbGlicy9maXJlYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gaW5jcmVtZW50IHRoZSB2aWV3c1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IHJlZiA9IGRiLnJlZigndmlld3MnKS5jaGlsZChyZXEucXVlcnkuc2x1ZylcbiAgICAgIGNvbnN0IHsgc25hcHNob3QgfSA9IGF3YWl0IHJlZi50cmFuc2FjdGlvbigoY3VycmVudFZpZXdzKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50Vmlld3MgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gIFxuICAgICAgICByZXR1cm4gY3VycmVudFZpZXdzICsgM1xuICAgICAgfSlcbiAgXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICB0b3RhbDogc25hcHNob3QudmFsKCksXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgLy8gZmV0Y2ggdGhlIHZpZXdzXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLnJlZigndmlld3MnKS5jaGlsZChyZXEucXVlcnkuc2x1Zykub25jZSgndmFsdWUnKVxuICAgICAgY29uc3Qgdmlld3MgPSBzbmFwc2hvdC52YWwoKVxuICBcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRvdGFsOiB2aWV3cyB9KVxuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJkYiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlZiIsImNoaWxkIiwicXVlcnkiLCJzbHVnIiwic25hcHNob3QiLCJ0cmFuc2FjdGlvbiIsImN1cnJlbnRWaWV3cyIsInN0YXR1cyIsImpzb24iLCJ0b3RhbCIsInZhbCIsIm9uY2UiLCJ2aWV3cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/views/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/views/[slug].js"));
module.exports = __webpack_exports__;

})();