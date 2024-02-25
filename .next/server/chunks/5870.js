"use strict";
exports.id = 5870;
exports.ids = [5870];
exports.modules = {

/***/ 83172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ RouterLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



/**
 * This is a wrapper over `next/link` component.
 * We use this to help us maintain consistency between Vite and Next.js
 */ const RouterLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function RouterLink(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: ref,
        ...props
    });
});


/***/ }),

/***/ 15870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45456);
/* harmony import */ var src_components_router_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83172);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45025);









const TOP_NAV_HEIGHT = 64;
const LayoutRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)("div")(({ theme })=>({
        backgroundColor: theme.palette.background.default,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        height: "100%"
    }));
const Layout = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutRoot, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                component: "header",
                sx: {
                    left: 0,
                    position: "fixed",
                    right: 0,
                    top: 0,
                    zIndex: (theme)=>theme.zIndex.appBar
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                        direction: "row",
                        spacing: 2,
                        sx: {
                            height: TOP_NAV_HEIGHT
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                            alignItems: "center",
                            component: src_components_router_link__WEBPACK_IMPORTED_MODULE_7__/* .RouterLink */ .r,
                            direction: "row",
                            display: "inline-flex",
                            href: src_paths__WEBPACK_IMPORTED_MODULE_8__/* .paths */ .H.index,
                            spacing: 1,
                            sx: {
                                textDecoration: "none"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        display: "inline-flex",
                                        height: 24,
                                        width: 24
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_6__/* .Logo */ .T, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        color: "text.primary",
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontSize: 14,
                                        fontWeight: 800,
                                        letterSpacing: "0.3px",
                                        lineHeight: 2.5,
                                        "& span": {
                                            color: "primary.main"
                                        }
                                    },
                                    children: [
                                        "Devias Kit ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "PRO"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    flex: "1 1 auto"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
                    maxWidth: "sm",
                    sx: {
                        py: {
                            xs: "60px",
                            md: "120px"
                        }
                    },
                    children: children
                })
            })
        ]
    });
};
Layout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};


/***/ })

};
;