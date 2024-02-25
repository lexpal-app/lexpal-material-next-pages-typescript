"use strict";
exports.id = 7981;
exports.ids = [7981];
exports.modules = {

/***/ 20592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ BreadcrumbsSeparator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);


const BreadcrumbsSeparator = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            backgroundColor: "neutral.500",
            borderRadius: "50%",
            height: 4,
            width: 4
        }
    });


/***/ }),

/***/ 43829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ArrowLeft.js
var ArrowLeft = __webpack_require__(30136);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__(87185);
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(14475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(73646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(85246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: ./src/components/breadcrumbs-separator.tsx
var breadcrumbs_separator = __webpack_require__(20592);
// EXTERNAL MODULE: ./src/components/router-link.tsx
var router_link = __webpack_require__(83172);
// EXTERNAL MODULE: ./src/paths.ts
var paths = __webpack_require__(45025);
;// CONCATENATED MODULE: ./src/layouts/components/layout.tsx















const LayoutRoot = (0,styles_.styled)("div")(({ theme })=>({
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column"
    }));
const LayoutContainer = (0,styles_.styled)("div")({
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%"
});
const Layout = (props)=>{
    const { breadcrumbs, children, title } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LayoutRoot, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                    py: "120px"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        spacing: 3,
                        children: [
                            !breadcrumbs && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Link_default()), {
                                    color: "text.primary",
                                    component: router_link/* RouterLink */.r,
                                    href: paths/* paths */.H.components.index,
                                    sx: {
                                        alignItems: "center",
                                        display: "inline-flex"
                                    },
                                    underline: "hover",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                            sx: {
                                                mr: 1
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx(ArrowLeft/* default */.Z, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "subtitle2",
                                            children: "Components"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h1",
                                    children: title
                                })
                            }),
                            breadcrumbs && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((Breadcrumbs_default()), {
                                    separator: /*#__PURE__*/ jsx_runtime.jsx(breadcrumbs_separator/* BreadcrumbsSeparator */.$, {}),
                                    children: breadcrumbs.map((item, index)=>{
                                        const isLast = breadcrumbs.length - 1 === index;
                                        if (isLast) {
                                            return /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                color: "text.secondary",
                                                variant: "subtitle2",
                                                children: item.title
                                            }, index);
                                        }
                                        return /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                                            color: "text.primary",
                                            component: router_link/* RouterLink */.r,
                                            href: item.href,
                                            variant: "subtitle2",
                                            children: item.title
                                        }, index);
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime.jsx(LayoutContainer, {
                children: children
            })
        ]
    });
};
Layout.propTypes = {
    breadcrumbs: (external_prop_types_default()).array,
    children: (external_prop_types_default()).node.isRequired,
    title: (external_prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/components/index.ts



/***/ }),

/***/ 79130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ Previewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Moon01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71677);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Sun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15974);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_hooks_use_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29159);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71278);














const Previewer = (props)=>{
    const { children, title, ...other } = props;
    const settings = (0,src_hooks_use_settings__WEBPACK_IMPORTED_MODULE_12__/* .useSettings */ .r)();
    const [paletteMode, setPaletteMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(settings.paletteMode);
    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,src_theme__WEBPACK_IMPORTED_MODULE_13__/* .createTheme */ .j)({
            ...settings,
            paletteMode
        });
    }, [
        settings,
        paletteMode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPaletteMode(settings.paletteMode);
    }, [
        settings.paletteMode
    ]);
    const handleModeSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setPaletteMode((prevState)=>{
            return prevState === "light" ? "dark" : "light";
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_6___default()), {
        variant: "outlined",
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7___default()), {
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                    onClick: handleModeSwitch,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_10___default()), {
                        fontSize: "small",
                        children: paletteMode === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Moon01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Sun__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                }),
                title: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        colorScheme: paletteMode
                    },
                    children: children
                })
            })
        ]
    });
};
Previewer.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
};


/***/ })

};
;