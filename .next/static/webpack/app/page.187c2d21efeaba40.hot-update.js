/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Navbar.js":
/*!**********************************!*\
  !*** ./app/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"(app-pages-browser)/./app/components/Footer.js\");\n/* harmony import */ var _components_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Customer */ \"(app-pages-browser)/./app/components/Customer.js\");\n/* harmony import */ var _components_Technicians__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Technicians */ \"(app-pages-browser)/./app/components/Technicians.js\");\n/* harmony import */ var _components_Assistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Assistance */ \"(app-pages-browser)/./app/components/Assistance.js\");\n/* harmony import */ var _components_Avoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Avoid */ \"(app-pages-browser)/./app/components/Avoid.js\");\n/* harmony import */ var _components_Helppage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Helppage */ \"(app-pages-browser)/./app/components/Helppage.js\");\n/* harmony import */ var _services_content_PrinterSetup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/content/PrinterSetup */ \"(app-pages-browser)/./app/services/content/PrinterSetup.js\");\n/* harmony import */ var _components_FooterSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/FooterSection */ \"(app-pages-browser)/./app/components/FooterSection.js\");\n/* harmony import */ var _Jivochat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Jivochat */ \"(app-pages-browser)/./app/Jivochat.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Navbar__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_services_content_PrinterSetup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technicians__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assistance__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Avoid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Helppage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FooterSection__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Jivochat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rafat/printinfos/app/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0E7QUFDSTtBQUNNO0FBQ0Y7QUFDVjtBQUNNO0FBRWM7QUFDaEI7QUFDWTtBQUNyQjtBQUVsQyxTQUFTVztJQUNQLHFCQUNFOzswQkFFRSw4REFBQ1gsMkRBQU1BOzs7OzswQkFFUCw4REFBQ08sc0VBQVlBOzs7OzswQkFDYiw4REFBQ0osK0RBQVdBOzs7OzswQkFDWiw4REFBQ0MsOERBQVVBOzs7OzswQkFDWCw4REFBQ0MseURBQUtBOzs7OzswQkFDTiw4REFBQ0MsNERBQVFBOzs7OzswQkFFVCw4REFBQ0csaUVBQWFBOzs7OzswQkFDZCw4REFBQ0Msa0RBQVFBOzs7Ozs7O0FBTWY7S0FuQlNDO0FBb0JULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBDdXN0b21lciBmcm9tIFwiLi9jb21wb25lbnRzL0N1c3RvbWVyXCI7XG5pbXBvcnQgVGVjaG5pY2lhbnMgZnJvbSBcIi4vY29tcG9uZW50cy9UZWNobmljaWFuc1wiO1xuaW1wb3J0IEFzc2lzdGFuY2UgZnJvbSBcIi4vY29tcG9uZW50cy9Bc3Npc3RhbmNlXCI7XG5pbXBvcnQgQXZvaWQgZnJvbSBcIi4vY29tcG9uZW50cy9Bdm9pZFwiO1xuaW1wb3J0IEhlbHBwYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvSGVscHBhZ2VcIjtcblxuaW1wb3J0IFByaW50ZXJTZXR1cCBmcm9tIFwiLi9zZXJ2aWNlcy9jb250ZW50L1ByaW50ZXJTZXR1cFwiO1xuaW1wb3J0IHsgSGVscCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5pbXBvcnQgRm9vdGVyU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclNlY3Rpb25cIjtcbmltcG9ydCBKaXZvQ2hhdCBmcm9tIFwiLi9KaXZvY2hhdFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxOYXZCYXIgLz5cblxuICAgICAgPFByaW50ZXJTZXR1cC8+XG4gICAgICA8VGVjaG5pY2lhbnMvPlxuICAgICAgPEFzc2lzdGFuY2UvPlxuICAgICAgPEF2b2lkLz5cbiAgICAgIDxIZWxwcGFnZS8+XG4gICAgICB7LyogPEN1c3RvbWVyLz4gKi99XG4gICAgICA8Rm9vdGVyU2VjdGlvbi8+XG4gICAgICA8Sml2b0NoYXQvPlxuXG5cbiAgICA8Lz5cblxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJGb290ZXIiLCJDdXN0b21lciIsIlRlY2huaWNpYW5zIiwiQXNzaXN0YW5jZSIsIkF2b2lkIiwiSGVscHBhZ2UiLCJQcmludGVyU2V0dXAiLCJIZWxwIiwiRm9vdGVyU2VjdGlvbiIsIkppdm9DaGF0IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});