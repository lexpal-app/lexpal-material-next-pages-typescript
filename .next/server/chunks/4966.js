"use strict";
exports.id = 4966;
exports.ids = [4966];
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

/***/ 47576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45456);
/* harmony import */ var src_components_logos_logo_samsung__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84714);
/* harmony import */ var src_components_logos_logo_visma__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83428);
/* harmony import */ var src_components_logos_logo_bolt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12800);
/* harmony import */ var src_components_logos_logo_aws__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62550);
/* harmony import */ var src_components_logos_logo_accenture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86126);
/* harmony import */ var src_components_logos_logo_att__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40250);
/* harmony import */ var src_components_router_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83172);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45025);














const Layout = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            backgroundColor: "background.default",
            display: "flex",
            flex: "1 1 auto",
            flexDirection: {
                xs: "column-reverse",
                md: "row"
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    alignItems: "center",
                    backgroundColor: "neutral.800",
                    backgroundImage: 'url("/assets/gradient-bg.svg")',
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    color: "common.white",
                    display: "flex",
                    flex: {
                        xs: "0 0 auto",
                        md: "1 1 auto"
                    },
                    justifyContent: "center",
                    p: {
                        xs: 4,
                        md: 8
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    maxWidth: "md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                mb: 1
                            },
                            variant: "h4",
                            children: "Welcome to Devias Kit PRO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            color: "text.secondary",
                            sx: {
                                mb: 4
                            },
                            children: "A professional kit that comes with ready-to-use MUI components developed with one common goal in mind, help you build faster & beautiful applications."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            variant: "subtitle2",
                            sx: {
                                mb: 2
                            },
                            children: "Join 6,000+ forward-thinking companies:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                            alignItems: "center",
                            direction: "row",
                            flexWrap: "wrap",
                            gap: 4,
                            sx: {
                                color: "text.primary",
                                "& > *": {
                                    color: "neutral.400",
                                    flex: "0 0 auto"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logos_logo_samsung__WEBPACK_IMPORTED_MODULE_6__/* .LogoSamsung */ .T, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logos_logo_visma__WEBPACK_IMPORTED_MODULE_7__/* .LogoVisma */ .z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logos_logo_bolt__WEBPACK_IMPORTED_MODULE_8__/* .LogoBolt */ .p, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logos_logo_aws__WEBPACK_IMPORTED_MODULE_9__/* .LogoAws */ .f, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logos_logo_accenture__WEBPACK_IMPORTED_MODULE_10__/* .LogoAccenture */ .D, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logos_logo_att__WEBPACK_IMPORTED_MODULE_11__/* .LogoAtt */ .m, {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    backgroundColor: "background.paper",
                    display: "flex",
                    flex: {
                        xs: "1 1 auto",
                        md: "0 0 auto"
                    },
                    flexDirection: "column",
                    justifyContent: {
                        md: "center"
                    },
                    maxWidth: "100%",
                    p: {
                        xs: 4,
                        md: 8
                    },
                    width: {
                        md: 600
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                mb: 4
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                                alignItems: "center",
                                component: src_components_router_link__WEBPACK_IMPORTED_MODULE_12__/* .RouterLink */ .r,
                                direction: "row",
                                display: "inline-flex",
                                href: src_paths__WEBPACK_IMPORTED_MODULE_13__/* .paths */ .H.index,
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
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {})
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
                        }),
                        children
                    ]
                })
            })
        ]
    });
};
Layout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};


/***/ }),

/***/ 30136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);




var ArrowLeft = function ArrowLeft(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fill: "#fff",
      fillOpacity: 0.01,
      d: "m12 19-7-7 7-7"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 12H5m0 0 7 7m-7-7 7-7"
    })]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLeft);

/***/ })

};
;