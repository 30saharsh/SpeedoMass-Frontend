"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar.module.css */ \"(app-pages-browser)/./components/NavBar.module.css\");\n/* harmony import */ var _components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _JoinUsPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JoinUsPopup */ \"(app-pages-browser)/./components/JoinUsPopup.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader */ \"(app-pages-browser)/./components/Loader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const toggleMenu = ()=>{\n        setShowMenu(!showMenu);\n        console.log(showMenu);\n    };\n    const JoinButton = ()=>{\n        togglePopup();\n    // router.push(\"/joinus\")\n    };\n    const togglePopup = ()=>{\n        setShowPopup(!showPopup);\n    };\n    const handleRoleSelection = (role)=>{\n        // Handle the role selection (e.g., navigate to a specific page)\n        console.log(\"Selected role: \".concat(role));\n        if (role === \"employee\") {\n            router.push(\"/job\");\n        } else if (role === \"investor\") {\n            router.push(\"/investor\");\n        }\n    };\n    const AboutHandler = ()=>{\n        setLoading(true);\n    };\n    const ServiceHandler = ()=>{\n        setLoading(true);\n    };\n    const CSHandler = ()=>{\n        setLoading(true);\n    };\n    const ContactHandler = ()=>{\n        setLoading(true);\n    };\n    const PortfolioHandler = ()=>{\n        setLoading(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().hmbutton),\n                        onClick: toggleMenu,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().hamburgericon),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/smlogo.png\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().middle),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: AboutHandler,\n                                href: \"/about\",\n                                children: \"About Us\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: ServiceHandler,\n                                href: \"/services\",\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: CSHandler,\n                                href: \"\",\n                                children: \"Case Studies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: PortfolioHandler,\n                                href: \"\",\n                                children: \"Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: ContactHandler,\n                                href: \"/contact\",\n                                children: \"Contact Us\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().join),\n                        onClick: JoinButton,\n                        children: \"Join Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            showMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 77,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/about\",\n                        children: \"About Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/services\",\n                        children: \"Services\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"\",\n                        children: \"Case Studies\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"\",\n                        children: \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/contact\",\n                        children: \"Contact Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/joinus\",\n                        children: \"Join Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 76,\n                columnNumber: 18\n            }, undefined),\n            showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_JoinUsPopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClose: togglePopup,\n                onSelectRole: handleRoleSelection\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 88,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"SsWIZ/OFwh1rRH+6VAqIvYRS/RQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QztBQUNRO0FBQ3hCO0FBQ2U7QUFDSjtBQUNWO0FBRTlCLE1BQU1PLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU1XLGFBQWE7UUFDakJOLFlBQVksQ0FBQ0Q7UUFDYlEsUUFBUUMsR0FBRyxDQUFDVDtJQUNkO0lBRUEsTUFBTVUsYUFBYTtRQUNqQkM7SUFDSix5QkFBeUI7SUFDdkI7SUFDQSxNQUFNQSxjQUFjO1FBQ2xCUixhQUFhLENBQUNEO0lBQ2hCO0lBRUEsTUFBTVUsc0JBQXNCLENBQUNDO1FBQzNCLGdFQUFnRTtRQUNoRUwsUUFBUUMsR0FBRyxDQUFDLGtCQUF1QixPQUFMSTtRQUU5QixJQUFHQSxTQUFTLFlBQVc7WUFDckJQLE9BQU9RLElBQUksQ0FBQztRQUNkLE9BQ0ssSUFBSUQsU0FBUyxZQUFXO1lBQzNCUCxPQUFPUSxJQUFJLENBQUM7UUFDZDtJQUNGO0lBQ0YsTUFBTUMsZUFBZTtRQUNuQlYsV0FBVztJQUNiO0lBQ0EsTUFBTVcsaUJBQWlCO1FBQ3JCWCxXQUFXO0lBQ2I7SUFDQSxNQUFNWSxZQUFZO1FBQ2hCWixXQUFXO0lBQ2I7SUFDQSxNQUFNYSxpQkFBaUI7UUFDckJiLFdBQVc7SUFDYjtJQUNBLE1BQU1jLG1CQUFtQjtRQUN2QmQsV0FBVztJQUNiO0lBRUUscUJBQ0UsOERBQUNlOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVczQiwwRUFBVTs7a0NBQzFCLDhEQUFDNkI7d0JBQU9GLFdBQVczQiwrRUFBZTt3QkFBRStCLFNBQVNsQjtrQ0FDekMsNEVBQUNhOzRCQUFJQyxXQUFXM0Isb0ZBQW9COzs4Q0FDbEMsOERBQUNpQztvQ0FBS04sV0FBVzNCLDJFQUFXOzs7Ozs7OENBQzVCLDhEQUFDaUM7b0NBQUtOLFdBQVczQiwyRUFBVzs7Ozs7OzhDQUM1Qiw4REFBQ2lDO29DQUFLTixXQUFXM0IsMkVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdoQyw4REFBQ21DO3dCQUFJQyxLQUFJO3dCQUFjQyxLQUFJOzs7Ozs7a0NBQzNCLDhEQUFDWDt3QkFBSUMsV0FBVzNCLDZFQUFhOzswQ0FDM0IsOERBQUNDLGlEQUFJQTtnQ0FBQ3NDLE1BQUs7MENBQUk7Ozs7OzswQ0FDZiw4REFBQ3RDLGlEQUFJQTtnQ0FBQzhCLFNBQVNWO2dDQUFja0IsTUFBSzswQ0FBUzs7Ozs7OzBDQUMzQyw4REFBQ3RDLGlEQUFJQTtnQ0FBRThCLFNBQVNUO2dDQUFnQmlCLE1BQUs7MENBQVk7Ozs7OzswQ0FDakQsOERBQUN0QyxpREFBSUE7Z0NBQUM4QixTQUFTUjtnQ0FBV2dCLE1BQUs7MENBQUc7Ozs7OzswQ0FDbEMsOERBQUN0QyxpREFBSUE7Z0NBQUM4QixTQUFTTjtnQ0FBbUJjLE1BQUs7MENBQUc7Ozs7OzswQ0FDMUMsOERBQUN0QyxpREFBSUE7Z0NBQUM4QixTQUFTUDtnQ0FBZ0JlLE1BQUs7MENBQVc7Ozs7Ozs7Ozs7OztrQ0FFakQsOERBQUNWO3dCQUFPRixXQUFXM0IsMkVBQVc7d0JBQUUrQixTQUFTZjtrQ0FBYTs7Ozs7Ozs7Ozs7O1lBRzFEViwwQkFBYSw4REFBQ29CO2dCQUFJQyxXQUFXM0IsMkVBQVc7O2tDQUNuQyw4REFBQ0MsaURBQUlBO3dCQUFDc0MsTUFBSztrQ0FBSTs7Ozs7O2tDQUNkLDhEQUFDdEMsaURBQUlBO3dCQUFDc0MsTUFBSztrQ0FBUzs7Ozs7O2tDQUNwQiw4REFBQ3RDLGlEQUFJQTt3QkFBQ3NDLE1BQUs7a0NBQVk7Ozs7OztrQ0FDdkIsOERBQUN0QyxpREFBSUE7d0JBQUNzQyxNQUFLO2tDQUFHOzs7Ozs7a0NBQ2QsOERBQUN0QyxpREFBSUE7d0JBQUNzQyxNQUFLO2tDQUFHOzs7Ozs7a0NBQ2QsOERBQUN0QyxpREFBSUE7d0JBQUNzQyxNQUFLO2tDQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDdEMsaURBQUlBO3dCQUFDc0MsTUFBSztrQ0FBVzs7Ozs7Ozs7Ozs7O1lBRXRCL0IsMkJBQ0YsOERBQUNMLG9EQUFXQTtnQkFBQ3VDLFNBQVN6QjtnQkFBYTBCLGNBQWN6Qjs7Ozs7O1lBRWxEUix5QkFBVyw4REFBQ04sK0NBQU1BOzs7Ozs7Ozs7OztBQUd6QjtHQWxGTUM7O1FBSVdILHNEQUFTQTs7O0tBSnBCRztBQW9GTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjkxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSm9pblVzUG9wdXAgZnJvbSBcIi4vSm9pblVzUG9wdXBcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TWVudSghc2hvd01lbnUpO1xyXG4gICAgY29uc29sZS5sb2coc2hvd01lbnUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgSm9pbkJ1dHRvbiA9ICgpID0+e1xyXG4gICAgdG9nZ2xlUG9wdXAoKTtcclxuLy8gcm91dGVyLnB1c2goXCIvam9pbnVzXCIpXHJcbiAgfVxyXG4gIGNvbnN0IHRvZ2dsZVBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BvcHVwKCFzaG93UG9wdXApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvbGVTZWxlY3Rpb24gPSAocm9sZSkgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHRoZSByb2xlIHNlbGVjdGlvbiAoZS5nLiwgbmF2aWdhdGUgdG8gYSBzcGVjaWZpYyBwYWdlKVxyXG4gICAgY29uc29sZS5sb2coYFNlbGVjdGVkIHJvbGU6ICR7cm9sZX1gKTtcclxuXHJcbiAgICBpZihyb2xlID09PSBcImVtcGxveWVlXCIpe1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9qb2JcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJvbGUgPT09IFwiaW52ZXN0b3JcIil7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2ludmVzdG9yXCIpXHJcbiAgICB9XHJcbiAgfTtcclxuY29uc3QgQWJvdXRIYW5kbGVyID0gKCk9PntcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG59XHJcbmNvbnN0IFNlcnZpY2VIYW5kbGVyID0gKCk9PntcclxuICBzZXRMb2FkaW5nKHRydWUpXHJcbn1cclxuY29uc3QgQ1NIYW5kbGVyID0gKCk9PntcclxuICBzZXRMb2FkaW5nKHRydWUpXHJcbn1cclxuY29uc3QgQ29udGFjdEhhbmRsZXIgPSAoKT0+e1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxufVxyXG5jb25zdCBQb3J0Zm9saW9IYW5kbGVyID0gKCkgPT57XHJcbiAgc2V0TG9hZGluZyh0cnVlKVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaG1idXR0b259IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oYW1idXJnZXJpY29ufT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3NtbG9nby5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e0Fib3V0SGFuZGxlcn0gaHJlZj1cIi9hYm91dFwiPkFib3V0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgIG9uQ2xpY2s9e1NlcnZpY2VIYW5kbGVyfSBocmVmPVwiL3NlcnZpY2VzXCI+U2VydmljZXM8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtDU0hhbmRsZXJ9IGhyZWY9XCJcIj5DYXNlIFN0dWRpZXM8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtQb3J0Zm9saW9IYW5kbGVyfSAgaHJlZj1cIlwiPlBvcnRmb2xpbzwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e0NvbnRhY3RIYW5kbGVyfSBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0IFVzPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuam9pbn0gb25DbGljaz17Sm9pbkJ1dHRvbn0gPkpvaW4gVXM8L2J1dHRvbj5cclxuICBcclxuICAgICAgPC9kaXY+XHJcbiAgIHtzaG93TWVudSAmJiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPkNhc2UgU3R1ZGllczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5Qb3J0Zm9saW88L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9qb2ludXNcIiA+Sm9pbiBVczwvTGluaz5cclxuICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICA8Sm9pblVzUG9wdXAgb25DbG9zZT17dG9nZ2xlUG9wdXB9IG9uU2VsZWN0Um9sZT17aGFuZGxlUm9sZVNlbGVjdGlvbn0gLz5cclxuICAgICAgKX1cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlci8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluayIsInVzZVJvdXRlciIsIkpvaW5Vc1BvcHVwIiwiTG9hZGVyIiwiTmF2QmFyIiwic2hvd01lbnUiLCJzZXRTaG93TWVudSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidG9nZ2xlTWVudSIsImNvbnNvbGUiLCJsb2ciLCJKb2luQnV0dG9uIiwidG9nZ2xlUG9wdXAiLCJoYW5kbGVSb2xlU2VsZWN0aW9uIiwicm9sZSIsInB1c2giLCJBYm91dEhhbmRsZXIiLCJTZXJ2aWNlSGFuZGxlciIsIkNTSGFuZGxlciIsIkNvbnRhY3RIYW5kbGVyIiwiUG9ydGZvbGlvSGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImJ1dHRvbiIsImhtYnV0dG9uIiwib25DbGljayIsImhhbWJ1cmdlcmljb24iLCJzcGFuIiwibGluZSIsImltZyIsInNyYyIsImFsdCIsIm1pZGRsZSIsImhyZWYiLCJqb2luIiwibWVudSIsIm9uQ2xvc2UiLCJvblNlbGVjdFJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/NavBar.js\n"));

/***/ })

});