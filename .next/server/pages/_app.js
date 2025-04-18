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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CustomCursor = ()=>{\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isPointer, setIsPointer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHovering, setIsHovering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const onMouseMove = (e)=>{\n            setPosition({\n                x: e.clientX,\n                y: e.clientY\n            });\n            const target = e.target;\n            const isClickable = target.tagName === \"A\" || target.tagName === \"BUTTON\" || target.onclick !== null || window.getComputedStyle(target).cursor === \"pointer\";\n            setIsPointer(isClickable);\n            setIsHovering(isClickable);\n            setIsVisible(true);\n            // Update CSS variables\n            document.documentElement.style.setProperty(\"--cursor-x\", `${e.clientX}px`);\n            document.documentElement.style.setProperty(\"--cursor-y\", `${e.clientY}px`);\n            document.documentElement.style.setProperty(\"--cursor-scale\", isClickable ? \"0.5\" : \"1\");\n            document.documentElement.style.setProperty(\"--cursor-opacity\", \"1\");\n        };\n        const onMouseLeave = ()=>{\n            setIsVisible(false);\n            document.documentElement.style.setProperty(\"--cursor-opacity\", \"0\");\n        };\n        const onMouseEnter = ()=>{\n            setIsVisible(true);\n            document.documentElement.style.setProperty(\"--cursor-opacity\", \"1\");\n        };\n        window.addEventListener(\"mousemove\", onMouseMove);\n        window.addEventListener(\"mouseleave\", onMouseLeave);\n        window.addEventListener(\"mouseenter\", onMouseEnter);\n        document.body.classList.add(\"cursor-glow\");\n        return ()=>{\n            window.removeEventListener(\"mousemove\", onMouseMove);\n            window.removeEventListener(\"mouseleave\", onMouseLeave);\n            window.removeEventListener(\"mouseenter\", onMouseEnter);\n            document.body.classList.remove(\"cursor-glow\");\n        };\n    }, []);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `cursor-dot ${isHovering ? \"hover\" : \"\"}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zinat\\\\Documents\\\\dev comming\\\\components\\\\CustomCursor.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `cursor-outline ${isHovering ? \"hover\" : \"\"}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zinat\\\\Documents\\\\dev comming\\\\components\\\\CustomCursor.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbUN1cnNvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLGVBQWU7SUFDbkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQUVJLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ3RELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGNBQWMsQ0FBQ0M7WUFDbkJWLFlBQVk7Z0JBQUVDLEdBQUdTLEVBQUVDLE9BQU87Z0JBQUVULEdBQUdRLEVBQUVFLE9BQU87WUFBQztZQUV6QyxNQUFNQyxTQUFTSCxFQUFFRyxNQUFNO1lBQ3ZCLE1BQU1DLGNBQ0pELE9BQU9FLE9BQU8sS0FBSyxPQUNuQkYsT0FBT0UsT0FBTyxLQUFLLFlBQ25CRixPQUFPRyxPQUFPLEtBQUssUUFDbkJDLE9BQU9DLGdCQUFnQixDQUFDTCxRQUFRTSxNQUFNLEtBQUs7WUFFN0NmLGFBQWFVO1lBQ2JSLGNBQWNRO1lBQ2ROLGFBQWE7WUFFYix1QkFBdUI7WUFDdkJZLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUViLEVBQUVDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekVTLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUViLEVBQUVFLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekVRLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsa0JBQWtCVCxjQUFjLFFBQVE7WUFDbkZNLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsb0JBQW9CO1FBQ2pFO1FBRUEsTUFBTUMsZUFBZTtZQUNuQmhCLGFBQWE7WUFDYlksU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxvQkFBb0I7UUFDakU7UUFFQSxNQUFNRSxlQUFlO1lBQ25CakIsYUFBYTtZQUNiWSxTQUFTQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLG9CQUFvQjtRQUNqRTtRQUVBTixPQUFPUyxnQkFBZ0IsQ0FBQyxhQUFhakI7UUFDckNRLE9BQU9TLGdCQUFnQixDQUFDLGNBQWNGO1FBQ3RDUCxPQUFPUyxnQkFBZ0IsQ0FBQyxjQUFjRDtRQUN0Q0wsU0FBU08sSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUU1QixPQUFPO1lBQ0xaLE9BQU9hLG1CQUFtQixDQUFDLGFBQWFyQjtZQUN4Q1EsT0FBT2EsbUJBQW1CLENBQUMsY0FBY047WUFDekNQLE9BQU9hLG1CQUFtQixDQUFDLGNBQWNMO1lBQ3pDTCxTQUFTTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDO1FBQ2pDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDeEIsV0FBVyxPQUFPO0lBRXZCLHFCQUNFOzswQkFDRSw4REFBQ3lCO2dCQUFJQyxXQUFXLENBQUMsV0FBVyxFQUFFNUIsYUFBYSxVQUFVLEdBQUcsQ0FBQzs7Ozs7OzBCQUN6RCw4REFBQzJCO2dCQUFJQyxXQUFXLENBQUMsZUFBZSxFQUFFNUIsYUFBYSxVQUFVLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFHbkU7QUFFQSxpRUFBZVAsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnN0cnVjdC1jb21pbmctc29vbi8uL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDdXN0b21DdXJzb3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW2lzUG9pbnRlciwgc2V0SXNQb2ludGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNIb3ZlcmluZywgc2V0SXNIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBzZXRQb3NpdGlvbih7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGlzQ2xpY2thYmxlID0gXHJcbiAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCBcclxuICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicgfHwgXHJcbiAgICAgICAgdGFyZ2V0Lm9uY2xpY2sgIT09IG51bGwgfHxcclxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmN1cnNvciA9PT0gJ3BvaW50ZXInO1xyXG4gICAgICBcclxuICAgICAgc2V0SXNQb2ludGVyKGlzQ2xpY2thYmxlKTtcclxuICAgICAgc2V0SXNIb3ZlcmluZyhpc0NsaWNrYWJsZSk7XHJcbiAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBDU1MgdmFyaWFibGVzXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJzb3IteCcsIGAke2UuY2xpZW50WH1weGApO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3Vyc29yLXknLCBgJHtlLmNsaWVudFl9cHhgKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnNvci1zY2FsZScsIGlzQ2xpY2thYmxlID8gJzAuNScgOiAnMScpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3Vyc29yLW9wYWNpdHknLCAnMScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJzb3Itb3BhY2l0eScsICcwJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3Vyc29yLW9wYWNpdHknLCAnMScpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjdXJzb3ItZ2xvdycpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnNvci1nbG93Jyk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFpc1Zpc2libGUpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdXJzb3ItZG90ICR7aXNIb3ZlcmluZyA/ICdob3ZlcicgOiAnJ31gfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGN1cnNvci1vdXRsaW5lICR7aXNIb3ZlcmluZyA/ICdob3ZlcicgOiAnJ31gfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUN1cnNvcjsgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3VzdG9tQ3Vyc29yIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiaXNQb2ludGVyIiwic2V0SXNQb2ludGVyIiwiaXNIb3ZlcmluZyIsInNldElzSG92ZXJpbmciLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJvbk1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRhcmdldCIsImlzQ2xpY2thYmxlIiwidGFnTmFtZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZUVudGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CustomCursor.tsx\n");

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