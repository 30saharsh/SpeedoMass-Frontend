"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/joinus/page",{

/***/ "(app-pages-browser)/./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar.module.css */ \"(app-pages-browser)/./components/NavBar.module.css\");\n/* harmony import */ var _components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _JoinUsPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JoinUsPopup */ \"(app-pages-browser)/./components/JoinUsPopup.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader */ \"(app-pages-browser)/./components/Loader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const toggleMenu = ()=>{\n        setShowMenu(!showMenu);\n        console.log(showMenu);\n    };\n    const JoinButton = ()=>{\n        togglePopup();\n    // router.push(\"/joinus\")\n    };\n    const togglePopup = ()=>{\n        setShowPopup(!showPopup);\n    };\n    const handleRoleSelection = (role)=>{\n        // Handle the role selection (e.g., navigate to a specific page)\n        console.log(\"Selected role: \".concat(role));\n        if (role === \"employee\") {\n            router.push(\"/job\");\n        } else if (role === \"investor\") {\n            router.push(\"/investor\");\n        }\n    };\n    const AboutHandler = ()=>{\n        setLoading(true);\n    };\n    const ServiceHandler = ()=>{\n        setLoading(true);\n    };\n    const CSHandler = ()=>{\n        setLoading(true);\n    };\n    const ContactHandler = ()=>{\n        setLoading(true);\n    };\n    const PortfolioHandler = ()=>{\n        setLoading(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().hmbutton),\n                        onClick: toggleMenu,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().hamburgericon),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/smlogo.png\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().middle),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: AboutHandler,\n                                href: \"/about\",\n                                children: \"About Us\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: ServiceHandler,\n                                href: \"/services\",\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: CSHandler,\n                                href: \"\",\n                                children: \"Case Studies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: PortfolioHandler,\n                                href: \"\",\n                                children: \"Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: ContactHandler,\n                                href: \"/contact\",\n                                children: \"Contact Us\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().join),\n                        onClick: JoinButton,\n                        children: \"Join Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            showMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 77,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/about\",\n                        children: \"About Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/services\",\n                        children: \"Services\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"\",\n                        children: \"Case Studies\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"\",\n                        children: \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/contact\",\n                        children: \"Contact Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/joinus\",\n                        children: \"Join Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 76,\n                columnNumber: 18\n            }, undefined),\n            showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_JoinUsPopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClose: togglePopup,\n                onSelectRole: handleRoleSelection\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n                lineNumber: 88,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sahar\\\\speedomass\\\\components\\\\NavBar.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"sc4jXbhbc/5Yoa1fKXDAvGrRcF0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QztBQUNRO0FBQ3hCO0FBQ2U7QUFDSjtBQUNWO0FBRTlCLE1BQU1PLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU1XLGFBQWE7UUFDakJOLFlBQVksQ0FBQ0Q7UUFDYlEsUUFBUUMsR0FBRyxDQUFDVDtJQUNkO0lBRUEsTUFBTVUsYUFBYTtRQUNqQkM7SUFDSix5QkFBeUI7SUFDdkI7SUFDQSxNQUFNQSxjQUFjO1FBQ2xCUixhQUFhLENBQUNEO0lBQ2hCO0lBRUEsTUFBTVUsc0JBQXNCLENBQUNDO1FBQzNCLGdFQUFnRTtRQUNoRUwsUUFBUUMsR0FBRyxDQUFDLGtCQUF1QixPQUFMSTtRQUU5QixJQUFHQSxTQUFTLFlBQVc7WUFDckJQLE9BQU9RLElBQUksQ0FBQztRQUNkLE9BQ0ssSUFBSUQsU0FBUyxZQUFXO1lBQzNCUCxPQUFPUSxJQUFJLENBQUM7UUFDZDtJQUNGO0lBQ0YsTUFBTUMsZUFBZTtRQUNuQlYsV0FBVztJQUNiO0lBQ0EsTUFBTVcsaUJBQWlCO1FBQ3JCWCxXQUFXO0lBQ2I7SUFDQSxNQUFNWSxZQUFZO1FBQ2hCWixXQUFXO0lBQ2I7SUFDQSxNQUFNYSxpQkFBaUI7UUFDckJiLFdBQVc7SUFDYjtJQUNBLE1BQU1jLG1CQUFtQjtRQUN2QmQsV0FBVztJQUNiO0lBRUUscUJBQ0UsOERBQUNlOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVczQiwwRUFBVTs7a0NBQzFCLDhEQUFDNkI7d0JBQU9GLFdBQVczQiwrRUFBZTt3QkFBRStCLFNBQVNsQjtrQ0FDekMsNEVBQUNhOzRCQUFJQyxXQUFXM0Isb0ZBQW9COzs4Q0FDbEMsOERBQUNpQztvQ0FBS04sV0FBVzNCLDJFQUFXOzs7Ozs7OENBQzVCLDhEQUFDaUM7b0NBQUtOLFdBQVczQiwyRUFBVzs7Ozs7OzhDQUM1Qiw4REFBQ2lDO29DQUFLTixXQUFXM0IsMkVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdoQyw4REFBQ21DO3dCQUFJQyxLQUFJO3dCQUFjQyxLQUFJOzs7Ozs7a0NBQzNCLDhEQUFDWDt3QkFBSUMsV0FBVzNCLDZFQUFhOzswQ0FDM0IsOERBQUNDLGlEQUFJQTtnQ0FBQ3NDLE1BQUs7MENBQUk7Ozs7OzswQ0FDZiw4REFBQ3RDLGlEQUFJQTtnQ0FBQzhCLFNBQVNWO2dDQUFja0IsTUFBSzswQ0FBUzs7Ozs7OzBDQUMzQyw4REFBQ3RDLGlEQUFJQTtnQ0FBRThCLFNBQVNUO2dDQUFnQmlCLE1BQUs7MENBQVk7Ozs7OzswQ0FDakQsOERBQUN0QyxpREFBSUE7Z0NBQUM4QixTQUFTUjtnQ0FBV2dCLE1BQUs7MENBQUc7Ozs7OzswQ0FDbEMsOERBQUN0QyxpREFBSUE7Z0NBQUM4QixTQUFTTjtnQ0FBbUJjLE1BQUs7MENBQUc7Ozs7OzswQ0FDMUMsOERBQUN0QyxpREFBSUE7Z0NBQUM4QixTQUFTUDtnQ0FBZ0JlLE1BQUs7MENBQVc7Ozs7Ozs7Ozs7OztrQ0FFakQsOERBQUNWO3dCQUFPRixXQUFXM0IsMkVBQVc7d0JBQUUrQixTQUFTZjtrQ0FBYTs7Ozs7Ozs7Ozs7O1lBRzFEViwwQkFBYSw4REFBQ29CO2dCQUFJQyxXQUFXM0IsMkVBQVc7O2tDQUNuQyw4REFBQ0MsaURBQUlBO3dCQUFDc0MsTUFBSztrQ0FBSTs7Ozs7O2tDQUNkLDhEQUFDdEMsaURBQUlBO3dCQUFDc0MsTUFBSztrQ0FBUzs7Ozs7O2tDQUNwQiw4REFBQ3RDLGlEQUFJQTt3QkFBQ3NDLE1BQUs7a0NBQVk7Ozs7OztrQ0FDdkIsOERBQUN0QyxpREFBSUE7d0JBQUNzQyxNQUFLO2tDQUFHOzs7Ozs7a0NBQ2QsOERBQUN0QyxpREFBSUE7d0JBQUNzQyxNQUFLO2tDQUFHOzs7Ozs7a0NBQ2QsOERBQUN0QyxpREFBSUE7d0JBQUNzQyxNQUFLO2tDQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDdEMsaURBQUlBO3dCQUFDc0MsTUFBSztrQ0FBVzs7Ozs7Ozs7Ozs7O1lBRXRCL0IsMkJBQ0YsOERBQUNMLG9EQUFXQTtnQkFBQ3VDLFNBQVN6QjtnQkFBYTBCLGNBQWN6Qjs7Ozs7O1lBRWxEUix5QkFBVyw4REFBQ04sK0NBQU1BOzs7Ozs7Ozs7OztBQUd6QjtHQWxGTUM7O1FBSVdILHNEQUFTQTs7O0tBSnBCRztBQW9GTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjkxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSm9pblVzUG9wdXAgZnJvbSBcIi4vSm9pblVzUG9wdXBcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01lbnUoIXNob3dNZW51KTtcclxuICAgIGNvbnNvbGUubG9nKHNob3dNZW51KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IEpvaW5CdXR0b24gPSAoKSA9PntcclxuICAgIHRvZ2dsZVBvcHVwKCk7XHJcbi8vIHJvdXRlci5wdXNoKFwiL2pvaW51c1wiKVxyXG4gIH1cclxuICBjb25zdCB0b2dnbGVQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cCghc2hvd1BvcHVwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSb2xlU2VsZWN0aW9uID0gKHJvbGUpID0+IHtcclxuICAgIC8vIEhhbmRsZSB0aGUgcm9sZSBzZWxlY3Rpb24gKGUuZy4sIG5hdmlnYXRlIHRvIGEgc3BlY2lmaWMgcGFnZSlcclxuICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCByb2xlOiAke3JvbGV9YCk7XHJcblxyXG4gICAgaWYocm9sZSA9PT0gXCJlbXBsb3llZVwiKXtcclxuICAgICAgcm91dGVyLnB1c2goXCIvam9iXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyb2xlID09PSBcImludmVzdG9yXCIpe1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9pbnZlc3RvclwiKVxyXG4gICAgfVxyXG4gIH07XHJcbmNvbnN0IEFib3V0SGFuZGxlciA9ICgpPT57XHJcbiAgc2V0TG9hZGluZyh0cnVlKTtcclxufVxyXG5jb25zdCBTZXJ2aWNlSGFuZGxlciA9ICgpPT57XHJcbiAgc2V0TG9hZGluZyh0cnVlKVxyXG59XHJcbmNvbnN0IENTSGFuZGxlciA9ICgpPT57XHJcbiAgc2V0TG9hZGluZyh0cnVlKVxyXG59XHJcbmNvbnN0IENvbnRhY3RIYW5kbGVyID0gKCk9PntcclxuICBzZXRMb2FkaW5nKHRydWUpXHJcbn1cclxuY29uc3QgUG9ydGZvbGlvSGFuZGxlciA9ICgpID0+e1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmhtYnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyaWNvbn0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zbWxvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pZGRsZX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtBYm91dEhhbmRsZXJ9IGhyZWY9XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rICBvbkNsaWNrPXtTZXJ2aWNlSGFuZGxlcn0gaHJlZj1cIi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgb25DbGljaz17Q1NIYW5kbGVyfSBocmVmPVwiXCI+Q2FzZSBTdHVkaWVzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgb25DbGljaz17UG9ydGZvbGlvSGFuZGxlcn0gIGhyZWY9XCJcIj5Qb3J0Zm9saW88L0xpbms+XHJcbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtDb250YWN0SGFuZGxlcn0gaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmpvaW59IG9uQ2xpY2s9e0pvaW5CdXR0b259ID5Kb2luIFVzPC9idXR0b24+XHJcbiAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICB7c2hvd01lbnUgJiYgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5TZXJ2aWNlczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5DYXNlIFN0dWRpZXM8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+UG9ydGZvbGlvPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvam9pbnVzXCIgPkpvaW4gVXM8L0xpbms+XHJcbiAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgPEpvaW5Vc1BvcHVwIG9uQ2xvc2U9e3RvZ2dsZVBvcHVwfSBvblNlbGVjdFJvbGU9e2hhbmRsZVJvbGVTZWxlY3Rpb259IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJKb2luVXNQb3B1cCIsIkxvYWRlciIsIk5hdkJhciIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInRvZ2dsZU1lbnUiLCJjb25zb2xlIiwibG9nIiwiSm9pbkJ1dHRvbiIsInRvZ2dsZVBvcHVwIiwiaGFuZGxlUm9sZVNlbGVjdGlvbiIsInJvbGUiLCJwdXNoIiwiQWJvdXRIYW5kbGVyIiwiU2VydmljZUhhbmRsZXIiLCJDU0hhbmRsZXIiLCJDb250YWN0SGFuZGxlciIsIlBvcnRmb2xpb0hhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJidXR0b24iLCJobWJ1dHRvbiIsIm9uQ2xpY2siLCJoYW1idXJnZXJpY29uIiwic3BhbiIsImxpbmUiLCJpbWciLCJzcmMiLCJhbHQiLCJtaWRkbGUiLCJocmVmIiwiam9pbiIsIm1lbnUiLCJvbkNsb3NlIiwib25TZWxlY3RSb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/NavBar.js\n"));

/***/ })

});