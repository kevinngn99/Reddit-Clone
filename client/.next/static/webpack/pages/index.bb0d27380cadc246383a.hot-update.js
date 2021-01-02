webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/components/NavBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ME_QUERY = \"\\nquery Me {\\n  me {\\n    id\\n    username\\n  }\\n}\\n\";\nvar LOGOUT_MUTATION = \"\\nmutation {\\n  logout\\n}\\n\";\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useQuery = Object(urql__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])({\n    query: ME_QUERY,\n    pause: true\n  }),\n      _useQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useQuery, 1),\n      _useQuery2$ = _useQuery2[0],\n      data = _useQuery2$.data,\n      fetching = _useQuery2$.fetching;\n\n  var _useMutation = Object(urql__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"])(LOGOUT_MUTATION),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      logoutFetching = _useMutation2[0].fetching,\n      logout = _useMutation2[1];\n\n  var body;\n\n  if (fetching) {\n    body = null;\n  } else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n          mr: 2,\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        mr: 2,\n        children: data.me.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        onClick: function onClick() {\n          return logout();\n        },\n        isLoading: logoutFetching,\n        variant: \"link\",\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    bg: \"tan\",\n    p: 4,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      ml: \"auto\",\n      children: body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavBar, \"famHlLgUruo6CATYaO/euMupmWw=\", false, function () {\n  return [urql__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"], urql__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"]];\n});\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk1FX1FVRVJZIiwiTE9HT1VUX01VVEFUSU9OIiwiTmF2QmFyIiwidXNlUXVlcnkiLCJxdWVyeSIsInBhdXNlIiwiZGF0YSIsImZldGNoaW5nIiwidXNlTXV0YXRpb24iLCJsb2dvdXRGZXRjaGluZyIsImxvZ291dCIsImJvZHkiLCJtZSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsUUFBUSx5REFBZDtBQVNBLElBQU1DLGVBQWUsZ0NBQXJCOztBQU1BLElBQU1DLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZkMscURBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUVKLFFBQVI7QUFBa0JLLFNBQUssRUFBRTtBQUF6QixHQUFELENBRE87QUFBQTtBQUFBO0FBQUEsTUFDbkNDLElBRG1DLGVBQ25DQSxJQURtQztBQUFBLE1BQzdCQyxRQUQ2QixlQUM3QkEsUUFENkI7O0FBQUEscUJBRUdDLHdEQUFXLENBQUNQLGVBQUQsQ0FGZDtBQUFBO0FBQUEsTUFFekJRLGNBRnlCLG9CQUVuQ0YsUUFGbUM7QUFBQSxNQUVQRyxNQUZPOztBQUc1QyxNQUFJQyxJQUFKOztBQUVBLE1BQUlKLFFBQUosRUFBYztBQUNaSSxRQUFJLEdBQUcsSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFTSxFQUFQLENBQUosRUFBZTtBQUNwQkQsUUFBSSxnQkFDRjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQVUsWUFBSSxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFNLFlBQUUsRUFBRSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsV0FBZjtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUEsb0JBREY7QUFVRCxHQVhNLE1BV0E7QUFDTEEsUUFBSSxnQkFDRixxRUFBQyxxREFBRDtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQSxrQkFBYUwsSUFBSSxDQUFDTSxFQUFMLENBQVFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHVEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1ILE1BQU0sRUFBWjtBQUFBLFNBRFg7QUFFRSxpQkFBUyxFQUFFRCxjQUZiO0FBR0UsZUFBTyxFQUFDLE1BSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlEOztBQUVELHNCQUNFLHFFQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDLEtBQVQ7QUFBZSxLQUFDLEVBQUUsQ0FBbEI7QUFBQSwyQkFDRSxxRUFBQyxvREFBRDtBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQUEsZ0JBQWdCRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0F0Q0Q7O0dBQU1ULE07VUFDeUJDLDZDLEVBQ2tCSyxnRDs7O0tBRjNDTixNO0FBd0NTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIExpbmssIEZsZXgsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcInVycWxcIjtcblxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XG5cbmNvbnN0IE1FX1FVRVJZID0gYFxucXVlcnkgTWUge1xuICBtZSB7XG4gICAgaWRcbiAgICB1c2VybmFtZVxuICB9XG59XG5gO1xuXG5jb25zdCBMT0dPVVRfTVVUQVRJT04gPSBgXG5tdXRhdGlvbiB7XG4gIGxvZ291dFxufVxuYDtcblxuY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VRdWVyeSh7cXVlcnk6IE1FX1FVRVJZLCBwYXVzZTogdHJ1ZX0pO1xuICBjb25zdCBbeyBmZXRjaGluZzogbG9nb3V0RmV0Y2hpbmcgfSwgbG9nb3V0XSA9IHVzZU11dGF0aW9uKExPR09VVF9NVVRBVElPTik7XG4gIGxldCBib2R5O1xuXG4gIGlmIChmZXRjaGluZykge1xuICAgIGJvZHkgPSBudWxsO1xuICB9IGVsc2UgaWYgKCFkYXRhPy5tZSkge1xuICAgIGJvZHkgPSAoXG4gICAgICA8PlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgIDxMaW5rIG1yPXsyfT5Mb2dpbjwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICA8TGluaz5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgYm9keSA9IChcbiAgICAgIDxGbGV4PlxuICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YS5tZS51c2VybmFtZX08L0JveD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfVxuICAgICAgICAgIGlzTG9hZGluZz17bG9nb3V0RmV0Y2hpbmd9XG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgTG9nb3V0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGJnPVwidGFuXCIgcD17NH0+XG4gICAgICA8Qm94IG1sPVwiYXV0b1wiPntib2R5fTwvQm94PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})