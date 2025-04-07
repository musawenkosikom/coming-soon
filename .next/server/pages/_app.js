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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CustomCursor.tsx":
/*!*************************************!*\
  !*** ./components/CustomCursor.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CustomCursor = ()=>{\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isPointer, setIsPointer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const onMouseMove = (e)=>{\n            setPosition({\n                x: e.clientX,\n                y: e.clientY\n            });\n            const target = e.target;\n            setIsPointer(window.getComputedStyle(target).cursor === \"pointer\");\n        };\n        window.addEventListener(\"mousemove\", onMouseMove);\n        document.body.classList.add(\"cursor-glow\");\n        return ()=>{\n            window.removeEventListener(\"mousemove\", onMouseMove);\n            document.body.classList.remove(\"cursor-glow\");\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-dot\",\n                style: {\n                    transform: `translate(${position.x}px, ${position.y}px) scale(${isPointer ? 0.5 : 1})`\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zinat\\\\Documents\\\\dev comming\\\\components\\\\CustomCursor.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-outline\",\n                style: {\n                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isPointer ? 1.5 : 1})`\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zinat\\\\Documents\\\\dev comming\\\\components\\\\CustomCursor.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbUN1cnNvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLGVBQWU7SUFDbkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQUVJLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ3RELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxjQUFjLENBQUNDO1lBQ25CTixZQUFZO2dCQUFFQyxHQUFHSyxFQUFFQyxPQUFPO2dCQUFFTCxHQUFHSSxFQUFFRSxPQUFPO1lBQUM7WUFFekMsTUFBTUMsU0FBU0gsRUFBRUcsTUFBTTtZQUN2QkwsYUFBYU0sT0FBT0MsZ0JBQWdCLENBQUNGLFFBQVFHLE1BQU0sS0FBSztRQUMxRDtRQUVBRixPQUFPRyxnQkFBZ0IsQ0FBQyxhQUFhUjtRQUNyQ1MsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUU1QixPQUFPO1lBQ0xQLE9BQU9RLG1CQUFtQixDQUFDLGFBQWFiO1lBQ3hDUyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDO1FBQ2pDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEMsV0FBVyxDQUFDLFVBQVUsRUFBRXhCLFNBQVNFLENBQUMsQ0FBQyxJQUFJLEVBQUVGLFNBQVNHLENBQUMsQ0FBQyxVQUFVLEVBQUVDLFlBQVksTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDeEY7Ozs7OzswQkFFRiw4REFBQ2lCO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNMQyxXQUFXLENBQUMsVUFBVSxFQUFFeEIsU0FBU0UsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFRixTQUFTRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEVBQUVDLFlBQVksTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDbEc7Ozs7Ozs7O0FBSVI7QUFFQSxpRUFBZUwsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnN0cnVjdC1jb21pbmctc29vbi8uL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDdXN0b21DdXJzb3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW2lzUG9pbnRlciwgc2V0SXNQb2ludGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgc2V0UG9zaXRpb24oeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBzZXRJc1BvaW50ZXIod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5jdXJzb3IgPT09ICdwb2ludGVyJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2N1cnNvci1nbG93Jyk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJzb3ItZ2xvdycpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLWRvdFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCkgc2NhbGUoJHtpc1BvaW50ZXIgPyAwLjUgOiAxfSlgLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3Itb3V0bGluZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnggLSAyMH1weCwgJHtwb3NpdGlvbi55IC0gMjB9cHgpIHNjYWxlKCR7aXNQb2ludGVyID8gMS41IDogMX0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUN1cnNvcjsgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3VzdG9tQ3Vyc29yIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiaXNQb2ludGVyIiwic2V0SXNQb2ludGVyIiwib25Nb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3Vyc29yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CustomCursor.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomCursor */ \"./components/CustomCursor.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zinat\\\\Documents\\\\dev comming\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomCursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zinat\\\\Documents\\\\dev comming\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytCO0FBQ3VCO0FBRXZDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0U7OzBCQUNFLDhEQUFDRDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCxnRUFBWUE7Ozs7Ozs7QUFHbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzdHJ1Y3QtY29taW5nLXNvb24vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IEN1c3RvbUN1cnNvciBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbUN1cnNvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxDdXN0b21DdXJzb3IgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIkN1c3RvbUN1cnNvciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();