exports.id = 5535;
exports.ids = [5535];
exports.modules = {

/***/ 45456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ()=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const fillColor = theme.palette.primary.main;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        fill: "none",
        height: "100%",
        viewBox: "0 0 24 24",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                opacity: 0.16,
                d: "M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z",
                fill: fillColor
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z",
                fill: fillColor
            })
        ]
    });
};


/***/ }),

/***/ 89852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ RTL)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8440);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_cache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const styleCache = ()=>(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_3__["default"])({
        key: "rtl",
        prepend: true,
        // @ts-ignore
        stylisPlugins: [
            (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5___default())
        ]
    });
const RTL = (props)=>{
    const { children, direction = "ltr" } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === "rtl") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
            value: styleCache(),
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
RTL.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "ltr",
        "rtl"
    ])
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const Scrollbar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_0___default()))``;


/***/ }),

/***/ 61991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ SettingsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Settings03__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43546);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92494);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__);







const SettingsButton = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
        title: "Settings",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                backgroundColor: "background.paper",
                borderRadius: "50%",
                bottom: 0,
                boxShadow: 16,
                margin: (theme)=>theme.spacing(4),
                position: "fixed",
                right: 0,
                zIndex: (theme)=>theme.zIndex.speedDial
            },
            ...props,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                    color: "primary.contrastText",
                    p: "10px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Settings03__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            })
        })
    });
SettingsButton.propTypes = {
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};


/***/ }),

/***/ 95713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* reexport */ SettingsDrawer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/RefreshCcw01.js
var RefreshCcw01 = __webpack_require__(28485);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/X.js
var X = __webpack_require__(45331);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(65168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(97898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/components/scrollbar.tsx
var scrollbar = __webpack_require__(92795);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(58369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
// EXTERNAL MODULE: ./src/theme/colors.ts
var colors = __webpack_require__(65953);
;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-color-preset.tsx







const OptionsColorPreset = (props)=>{
    const { onChange, value } = props;
    const options = [
        {
            label: "Green",
            value: "green",
            color: colors/* green */.ek.main
        },
        {
            label: "Blue",
            value: "blue",
            color: colors/* blue */.iN.main
        },
        {
            label: "Indigo",
            value: "indigo",
            color: colors/* indigo */.QN.main
        },
        {
            label: "Purple",
            value: "purple",
            color: colors/* purple */.jk.main
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Primary Color"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                alignItems: "center",
                direction: "row",
                flexWrap: "wrap",
                gap: 2,
                children: options.map((option)=>/*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                        icon: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            sx: {
                                backgroundColor: option.color,
                                borderRadius: "50%",
                                flexShrink: 0,
                                height: 24,
                                width: 24
                            }
                        }),
                        label: option.label,
                        onClick: ()=>onChange?.(option.value),
                        sx: {
                            borderColor: "transparent",
                            borderRadius: 1.5,
                            borderStyle: "solid",
                            borderWidth: 2,
                            ...option.value === value && {
                                borderColor: "primary.main"
                            }
                        }
                    }, option.value))
            })
        ]
    });
};
OptionsColorPreset.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: external_prop_types_default().oneOf([
        "blue",
        "green",
        "indigo",
        "purple"
    ])
};

;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-contrast.tsx





const options = [
    {
        label: "Normal",
        value: "normal"
    },
    {
        label: "High",
        value: "high"
    }
];
const OptionsContrast = (props)=>{
    const { onChange, value } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Contrast"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                alignItems: "center",
                direction: "row",
                flexWrap: "wrap",
                gap: 2,
                children: options.map((option)=>/*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                        label: option.label,
                        onClick: ()=>onChange?.(option.value),
                        sx: {
                            borderColor: "transparent",
                            borderRadius: 1.5,
                            borderStyle: "solid",
                            borderWidth: 2,
                            ...option.value === value && {
                                borderColor: "primary.main"
                            }
                        }
                    }, option.label))
            })
        ]
    });
};
OptionsContrast.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: external_prop_types_default().oneOf([
        "normal",
        "high"
    ])
};

// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/LeftIndent01.js
var LeftIndent01 = __webpack_require__(35294);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/RightIndent01.js
var RightIndent01 = __webpack_require__(87587);
;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-direction.tsx








const options_direction_options = [
    {
        label: "Left-to-right",
        value: "ltr",
        icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
            fontSize: "small",
            children: /*#__PURE__*/ jsx_runtime.jsx(LeftIndent01/* default */.Z, {})
        })
    },
    {
        label: "Right-to-left",
        value: "rtl",
        icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
            fontSize: "small",
            children: /*#__PURE__*/ jsx_runtime.jsx(RightIndent01/* default */.Z, {})
        })
    }
];
const OptionsDirection = (props)=>{
    const { onChange, value } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Orientation"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                alignItems: "center",
                direction: "row",
                flexWrap: "wrap",
                gap: 2,
                children: options_direction_options.map((option)=>/*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                        icon: option.icon,
                        label: option.label,
                        onClick: ()=>onChange?.(option.value),
                        sx: {
                            borderColor: "transparent",
                            borderRadius: 1.5,
                            borderStyle: "solid",
                            borderWidth: 2,
                            ...option.value === value && {
                                borderColor: "primary.main"
                            }
                        }
                    }, option.label))
            })
        ]
    });
};
OptionsDirection.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: external_prop_types_default().oneOf([
        "ltr",
        "rtl"
    ])
};

// EXTERNAL MODULE: ./src/components/logo.tsx
var logo = __webpack_require__(45456);
;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-layout.tsx






const options_layout_options = [
    {
        label: "Vertical",
        value: "vertical",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
            sx: {
                display: "flex",
                flex: "1 1 auto"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    sx: {
                        borderRightColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                        borderRightStyle: "dashed",
                        borderRightWidth: 1,
                        px: 1,
                        py: 0.5
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    display: "inline-flex",
                                    height: 12,
                                    width: 12
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    backgroundColor: "primary.main",
                                    borderRadius: "2px",
                                    height: 4,
                                    width: 26
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.600" : "neutral.300",
                                    borderRadius: "2px",
                                    height: 4,
                                    width: 26
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.600" : "neutral.300",
                                    borderRadius: "2px",
                                    height: 4,
                                    width: 26
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    sx: {
                        display: "flex",
                        flex: "1 1 auto",
                        p: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                            borderColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                            borderRadius: 1,
                            borderStyle: "dashed",
                            borderWidth: 1,
                            flex: "1 1 auto"
                        }
                    })
                })
            ]
        })
    },
    {
        label: "Horizontal",
        value: "horizontal",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
            sx: {
                display: "flex",
                flex: "1 1 auto",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    sx: {
                        borderBottomColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                        borderBottomStyle: "dashed",
                        borderBottomWidth: 1,
                        px: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    display: "inline-flex",
                                    height: 12,
                                    width: 12
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    backgroundColor: "primary.main",
                                    borderRadius: "2px",
                                    height: 4,
                                    width: 16
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.600" : "neutral.300",
                                    borderRadius: "2px",
                                    height: 4,
                                    width: 16
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.600" : "neutral.300",
                                    borderRadius: "2px",
                                    height: 4,
                                    width: 16
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    sx: {
                        display: "flex",
                        flex: "1 1 auto",
                        p: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                            borderColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                            borderRadius: 1,
                            borderStyle: "dashed",
                            borderWidth: 1,
                            flex: "1 1 auto"
                        }
                    })
                })
            ]
        })
    }
];
const OptionsLayout = (props)=>{
    const { onChange, value } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Layout"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: "repeat(2, minmax(0, 140px))"
                },
                children: options_layout_options.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                onClick: ()=>onChange?.(option.value),
                                sx: {
                                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.900" : "background.paper",
                                    borderColor: "divider",
                                    borderRadius: 1,
                                    borderStyle: "solid",
                                    borderWidth: 2,
                                    cursor: "pointer",
                                    display: "flex",
                                    height: 88,
                                    ...option.value === value && {
                                        borderColor: "primary.main"
                                    }
                                },
                                children: option.icon
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                align: "center",
                                sx: {
                                    fontWight: 500
                                },
                                variant: "body2",
                                children: option.label
                            })
                        ]
                    }, option.value))
            })
        ]
    });
};
OptionsLayout.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: external_prop_types_default().oneOf([
        "horizontal",
        "vertical"
    ])
};

;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-nav-color.tsx





const options_nav_color_options = [
    {
        label: "Blend-in",
        value: "blend-in"
    },
    {
        label: "Discrete",
        value: "discrete"
    },
    {
        label: "Evident",
        value: "evident"
    }
];
const OptionsNavColor = (props)=>{
    const { onChange, value } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Nav Color"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                alignItems: "center",
                direction: "row",
                flexWrap: "wrap",
                gap: 2,
                children: options_nav_color_options.map((option)=>/*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                        label: option.label,
                        onClick: ()=>onChange?.(option.value),
                        sx: {
                            borderColor: "transparent",
                            borderRadius: 1.5,
                            borderStyle: "solid",
                            borderWidth: 2,
                            ...option.value === value && {
                                borderColor: "primary.main"
                            }
                        }
                    }, option.label))
            })
        ]
    });
};
OptionsNavColor.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: external_prop_types_default().oneOf([
        "blend-in",
        "discrete",
        "evident"
    ])
};

// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Moon01.js
var Moon01 = __webpack_require__(71677);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Sun.js
var Sun = __webpack_require__(15974);
;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-color-scheme.tsx








const options_color_scheme_options = [
    {
        label: "Light",
        value: "light",
        icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
            fontSize: "small",
            children: /*#__PURE__*/ jsx_runtime.jsx(Sun/* default */.Z, {})
        })
    },
    {
        label: "Dark",
        value: "dark",
        icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
            fontSize: "small",
            children: /*#__PURE__*/ jsx_runtime.jsx(Moon01/* default */.Z, {})
        })
    }
];
const OptionsColorScheme = (props)=>{
    const { onChange, value } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Color Scheme"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                alignItems: "center",
                direction: "row",
                flexWrap: "wrap",
                gap: 2,
                children: options_color_scheme_options.map((option)=>/*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                        icon: option.icon,
                        label: option.label,
                        onClick: ()=>onChange?.(option.value),
                        sx: {
                            borderColor: "transparent",
                            borderRadius: 1.5,
                            borderStyle: "solid",
                            borderWidth: 2,
                            ...option.value === value && {
                                borderColor: "primary.main"
                            }
                        }
                    }, option.value))
            })
        ]
    });
};
OptionsColorScheme.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: external_prop_types_default().oneOf([
        "light",
        "dark"
    ])
};

;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/options-stretch.tsx





const options_stretch_options = [
    {
        label: "Compact",
        value: false,
        icon: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
            sx: {
                backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.900" : "background.paper",
                flex: "1 1 auto",
                p: 1
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                sx: {
                    display: "grid",
                    gap: 0.5,
                    gridTemplateColumns: "repeat(2, 1fr)",
                    height: "100%",
                    mx: "auto",
                    width: "70%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                            borderColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                            borderRadius: 1,
                            borderStyle: "dashed",
                            borderWidth: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                            borderColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                            borderRadius: 1,
                            borderStyle: "dashed",
                            borderWidth: 1
                        }
                    })
                ]
            })
        })
    },
    {
        label: "Wide",
        value: true,
        icon: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
            sx: {
                backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.900" : "background.paper",
                flex: "1 1 auto",
                p: 1
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                sx: {
                    display: "grid",
                    gap: 0.5,
                    gridTemplateColumns: "repeat(2, 1fr)",
                    height: "100%",
                    mx: "auto"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                            borderColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                            borderRadius: 1,
                            borderStyle: "dashed",
                            borderWidth: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                            borderColor: (theme)=>theme.palette.mode === "dark" ? "neutral.500" : "neutral.300",
                            borderRadius: 1,
                            borderStyle: "dashed",
                            borderWidth: 1
                        }
                    })
                ]
            })
        })
    }
];
const OptionsStretch = (props)=>{
    const { onChange, value } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        spacing: 1,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                color: "text.secondary",
                variant: "overline",
                children: "Content"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    gap: 1,
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 140px))"
                },
                children: options_stretch_options.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                onClick: ()=>onChange?.(option.value),
                                sx: {
                                    borderColor: "divider",
                                    borderRadius: 1,
                                    borderStyle: "solid",
                                    borderWidth: 2,
                                    cursor: "pointer",
                                    display: "flex",
                                    height: 64,
                                    overflow: "hidden",
                                    ...option.value === value && {
                                        borderColor: "primary.main"
                                    }
                                },
                                children: option.icon
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                align: "center",
                                sx: {
                                    fontWight: 500
                                },
                                variant: "body2",
                                children: option.label
                            })
                        ]
                    }, index))
            })
        ]
    });
};
OptionsStretch.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/settings-drawer.tsx



















const SettingsDrawer = (props)=>{
    const { canReset, onClose, onUpdate, onReset, open, values = {}, ...other } = props;
    const handleFieldUpdate = (0,external_react_.useCallback)((field, value)=>{
        onUpdate?.({
            [field]: value
        });
    }, [
        onUpdate
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx((Drawer_default()), {
        disableScrollLock: true,
        anchor: "right",
        onClose: onClose,
        open: open,
        ModalProps: {
            BackdropProps: {
                invisible: true
            },
            sx: {
                zIndex: 1400
            }
        },
        PaperProps: {
            elevation: 24,
            sx: {
                maxWidth: "100%",
                width: 440
            }
        },
        ...other,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(scrollbar/* Scrollbar */.L, {
            sx: {
                height: "100%",
                "& .simplebar-content": {
                    height: "100%"
                },
                "& .simplebar-scrollbar:before": {
                    background: "var(--nav-scrollbar-color)"
                }
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    alignItems: "center",
                    direction: "row",
                    justifyContent: "space-between",
                    spacing: 3,
                    sx: {
                        px: 3,
                        pt: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            variant: "h6",
                            children: "App Settings"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                            alignItems: "center",
                            direction: "row",
                            spacing: 0.5,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Badge_default()), {
                                    anchorOrigin: {
                                        horizontal: "right",
                                        vertical: "top"
                                    },
                                    color: "error",
                                    sx: {
                                        [`& .${Badge_.badgeClasses.badge}`]: {
                                            top: 6,
                                            right: 6,
                                            ...!canReset && {
                                                display: "none"
                                            }
                                        }
                                    },
                                    variant: "dot",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                        color: "inherit",
                                        onClick: onReset,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                            fontSize: "small",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(RefreshCcw01/* default */.Z, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                    color: "inherit",
                                    onClick: onClose,
                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(X/* default */.Z, {})
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    spacing: 5,
                    sx: {
                        p: 3
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsColorPreset, {
                            onChange: (value)=>handleFieldUpdate("colorPreset", value),
                            value: values.colorPreset
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsColorScheme, {
                            onChange: (value)=>handleFieldUpdate("paletteMode", value),
                            value: values.paletteMode
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsNavColor, {
                            onChange: (value)=>handleFieldUpdate("navColor", value),
                            value: values.navColor
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsLayout, {
                            onChange: (value)=>handleFieldUpdate("layout", value),
                            value: values.layout
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsStretch, {
                            onChange: (value)=>handleFieldUpdate("stretch", value),
                            value: values.stretch
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsContrast, {
                            onChange: (value)=>handleFieldUpdate("contrast", value),
                            value: values.contrast
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(OptionsDirection, {
                            onChange: (value)=>handleFieldUpdate("direction", value),
                            value: values.direction
                        })
                    ]
                })
            ]
        })
    });
};
SettingsDrawer.propTypes = {
    canReset: (external_prop_types_default()).bool,
    onClose: (external_prop_types_default()).func,
    onReset: (external_prop_types_default()).func,
    onUpdate: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool,
    // @ts-ignore
    values: (external_prop_types_default()).object
};

;// CONCATENATED MODULE: ./src/components/settings/settings-drawer/index.ts



/***/ }),

/***/ 25842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45456);



const SplashScreen = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            alignItems: "center",
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            left: 0,
            p: 3,
            position: "fixed",
            top: 0,
            width: "100vw",
            zIndex: 1400
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
            sx: {
                display: "inline-flex",
                height: 48,
                width: 48
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .T, {})
        })
    });


/***/ }),

/***/ 99939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86201);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79590);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Toaster = ()=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, {
        position: "bottom-right",
        toastOptions: {
            style: {
                backdropFilter: "blur(6px)",
                background: (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.neutral[900], 0.8),
                color: theme.palette.common.white,
                boxShadow: theme.shadows[16]
            }
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HR: () => (/* binding */ enableDevTools),
/* harmony export */   PG: () => (/* binding */ gtmConfig),
/* harmony export */   i8: () => (/* binding */ version),
/* harmony export */   jZ: () => (/* binding */ mapboxConfig)
/* harmony export */ });
/* unused harmony exports amplifyConfig, auth0Config, firebaseConfig */
const enableDevTools = process.env.NEXT_PUBLIC_ENABLE_REDUX_DEV_TOOLS === "true";
const amplifyConfig = {
    aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
    aws_cognito_identity_pool_id: process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID
};
const auth0Config = {
    base_url: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
    client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    issuer_base_url: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL
};
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
};
const gtmConfig = {
    containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
};
const mapboxConfig = {
    apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY
};
const version = "6.4.2";


/***/ }),

/***/ 12337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  he: () => (/* reexport */ AuthConsumer),
  Vo: () => (/* reexport */ AuthContext),
  Ho: () => (/* reexport */ AuthProvider)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/utils/auth.ts
var auth = __webpack_require__(64687);
;// CONCATENATED MODULE: ./src/contexts/auth/jwt/auth-context.ts


const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};
const AuthContext = (0,external_react_.createContext)({
    ...initialState,
    issuer: auth/* Issuer */.M.JWT,
    signIn: ()=>Promise.resolve(),
    signUp: ()=>Promise.resolve(),
    signOut: ()=>Promise.resolve()
});

;// CONCATENATED MODULE: ./src/contexts/auth/jwt/auth-consumer.tsx

const AuthConsumer = AuthContext.Consumer;

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/utils/create-resource-id.ts
var create_resource_id = __webpack_require__(93649);
;// CONCATENATED MODULE: ./src/utils/jwt.ts
/* eslint-disable no-bitwise */ const JWT_SECRET = "devias-top-secret-key";
const JWT_EXPIRES_IN = 3600 * 24 * 2; // 2 days
// Since we are unable to sign a JWT in a browser
// because "jsonwebtoken" library is available on server side only, NodeJS environment
// we simply simulate a signed token, no complex checks because on server side
// you're using the library
const sign = (payload, privateKey, header)=>{
    const now = new Date();
    header.expiresIn = new Date(now.getTime() + header.expiresIn);
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    const signature = btoa(Array.from(encodedPayload).map((item, key)=>String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0))).join(""));
    return `${encodedHeader}.${encodedPayload}.${signature}`;
};
// Since we create a fake signed token, we have to implement a fake jwt decode
// platform to simulate "jwt-decode" library.
const decode = (token)=>{
    const [encodedHeader, encodedPayload, signature] = token.split(".");
    const header = JSON.parse(atob(encodedHeader));
    const payload = JSON.parse(atob(encodedPayload));
    const now = new Date();
    if (now < header.expiresIn) {
        throw new Error("Expired token");
    }
    const verifiedSignature = btoa(Array.from(encodedPayload).map((item, key)=>String.fromCharCode(item.charCodeAt(0) ^ JWT_SECRET[key % JWT_SECRET.length].charCodeAt(0))).join(""));
    if (verifiedSignature !== signature) {
        throw new Error("Invalid signature");
    }
    return payload;
};
const verify = (token, privateKey)=>{
    const [encodedHeader, encodedPayload, signature] = token.split(".");
    const header = JSON.parse(atob(encodedHeader));
    const payload = JSON.parse(atob(encodedPayload));
    const now = new Date();
    if (now < header.expiresIn) {
        throw new Error("Expired token");
    }
    const verifiedSignature = btoa(Array.from(encodedPayload).map((item, key)=>String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0))).join(""));
    if (verifiedSignature !== signature) {
        throw new Error("Invalid signature");
    }
    return payload;
};

// EXTERNAL MODULE: ./src/utils/wait.ts
var wait = __webpack_require__(98954);
;// CONCATENATED MODULE: ./src/api/auth/data.ts
const users = [
    {
        id: "5e86809283e28b96d2d38537",
        avatar: "/assets/avatars/avatar-anika-visser.png",
        email: "demo@devias.io",
        name: "Anika Visser",
        password: "Password123!",
        plan: "Premium"
    }
];

;// CONCATENATED MODULE: ./src/api/auth/index.ts




const STORAGE_KEY = "users";
// NOTE: We use sessionStorage since memory storage is lost after page reload.
//  This should be replaced with a server call that returns DB persisted data.
const getPersistedUsers = ()=>{
    try {
        const data = sessionStorage.getItem(STORAGE_KEY);
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return [];
    }
};
const persistUser = (user)=>{
    try {
        const users = getPersistedUsers();
        const data = JSON.stringify([
            ...users,
            user
        ]);
        sessionStorage.setItem(STORAGE_KEY, data);
    } catch (err) {
        console.error(err);
    }
};
class AuthApi {
    async signIn(request) {
        const { email, password } = request;
        await (0,wait/* wait */.D)(500);
        return new Promise((resolve, reject)=>{
            try {
                // Merge static users (data file) with persisted users (browser storage)
                const mergedUsers = [
                    ...users,
                    ...getPersistedUsers()
                ];
                // Find the user
                const user = mergedUsers.find((user)=>user.email === email);
                if (!user || user.password !== password) {
                    reject(new Error("Please check your email and password"));
                    return;
                }
                // Create the access token
                const accessToken = sign({
                    userId: user.id
                }, JWT_SECRET, {
                    expiresIn: JWT_EXPIRES_IN
                });
                resolve({
                    accessToken
                });
            } catch (err) {
                console.error("[Auth Api]: ", err);
                reject(new Error("Internal server error"));
            }
        });
    }
    async signUp(request) {
        const { email, name, password } = request;
        await (0,wait/* wait */.D)(1000);
        return new Promise((resolve, reject)=>{
            try {
                // Merge static users (data file) with persisted users (browser storage)
                const mergedUsers = [
                    ...users,
                    ...getPersistedUsers()
                ];
                // Check if a user already exists
                let user = mergedUsers.find((user)=>user.email === email);
                if (user) {
                    reject(new Error("User already exists"));
                    return;
                }
                user = {
                    id: (0,create_resource_id/* createResourceId */.h)(),
                    avatar: undefined,
                    email,
                    name,
                    password,
                    plan: "Standard"
                };
                persistUser(user);
                const accessToken = sign({
                    userId: user.id
                }, JWT_SECRET, {
                    expiresIn: JWT_EXPIRES_IN
                });
                resolve({
                    accessToken
                });
            } catch (err) {
                console.error("[Auth Api]: ", err);
                reject(new Error("Internal server error"));
            }
        });
    }
    me(request) {
        const { accessToken } = request;
        return new Promise((resolve, reject)=>{
            try {
                // Decode access token
                const decodedToken = decode(accessToken);
                // Merge static users (data file) with persisted users (browser storage)
                const mergedUsers = [
                    ...users,
                    ...getPersistedUsers()
                ];
                // Find the user
                const { userId } = decodedToken;
                const user = mergedUsers.find((user)=>user.id === userId);
                if (!user) {
                    reject(new Error("Invalid authorization token"));
                    return;
                }
                resolve({
                    id: user.id,
                    avatar: user.avatar,
                    email: user.email,
                    name: user.name,
                    plan: user.plan
                });
            } catch (err) {
                console.error("[Auth Api]: ", err);
                reject(new Error("Internal server error"));
            }
        });
    }
}
const authApi = new AuthApi();

;// CONCATENATED MODULE: ./src/contexts/auth/jwt/auth-provider.tsx






const auth_provider_STORAGE_KEY = "accessToken";
var ActionType;
(function(ActionType) {
    ActionType["INITIALIZE"] = "INITIALIZE";
    ActionType["SIGN_IN"] = "SIGN_IN";
    ActionType["SIGN_UP"] = "SIGN_UP";
    ActionType["SIGN_OUT"] = "SIGN_OUT";
})(ActionType || (ActionType = {}));
const handlers = {
    INITIALIZE: (state, action)=>{
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    SIGN_IN: (state, action)=>{
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    SIGN_UP: (state, action)=>{
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    SIGN_OUT: (state)=>({
            ...state,
            isAuthenticated: false,
            user: null
        })
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;
const AuthProvider = (props)=>{
    const { children } = props;
    const [state, dispatch] = (0,external_react_.useReducer)(reducer, initialState);
    const initialize = (0,external_react_.useCallback)(async ()=>{
        try {
            const accessToken = window.sessionStorage.getItem(auth_provider_STORAGE_KEY);
            if (accessToken) {
                const user = await authApi.me({
                    accessToken
                });
                dispatch({
                    type: ActionType.INITIALIZE,
                    payload: {
                        isAuthenticated: true,
                        user
                    }
                });
            } else {
                dispatch({
                    type: ActionType.INITIALIZE,
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: ActionType.INITIALIZE,
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            });
        }
    }, [
        dispatch
    ]);
    (0,external_react_.useEffect)(()=>{
        initialize();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const signIn = (0,external_react_.useCallback)(async (email, password)=>{
        const { accessToken } = await authApi.signIn({
            email,
            password
        });
        const user = await authApi.me({
            accessToken
        });
        sessionStorage.setItem(auth_provider_STORAGE_KEY, accessToken);
        dispatch({
            type: ActionType.SIGN_IN,
            payload: {
                user
            }
        });
    }, [
        dispatch
    ]);
    const signUp = (0,external_react_.useCallback)(async (email, name, password)=>{
        const { accessToken } = await authApi.signUp({
            email,
            name,
            password
        });
        const user = await authApi.me({
            accessToken
        });
        sessionStorage.setItem(auth_provider_STORAGE_KEY, accessToken);
        dispatch({
            type: ActionType.SIGN_UP,
            payload: {
                user
            }
        });
    }, [
        dispatch
    ]);
    const signOut = (0,external_react_.useCallback)(async ()=>{
        sessionStorage.removeItem(auth_provider_STORAGE_KEY);
        dispatch({
            type: ActionType.SIGN_OUT
        });
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(AuthContext.Provider, {
        value: {
            ...state,
            issuer: auth/* Issuer */.M.JWT,
            signIn,
            signUp,
            signOut
        },
        children: children
    });
};
AuthProvider.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};

;// CONCATENATED MODULE: ./src/contexts/auth/jwt/index.ts





/***/ }),

/***/ 58625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ix: () => (/* reexport */ SettingsConsumer),
  J6: () => (/* reexport */ SettingsContext),
  mu: () => (/* reexport */ SettingsProvider)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/contexts/settings/settings-context.tsx

const defaultSettings = {
    colorPreset: "indigo",
    contrast: "normal",
    direction: "ltr",
    layout: "vertical",
    navColor: "evident",
    paletteMode: "light",
    responsiveFontSizes: true,
    stretch: false
};
const initialState = {
    ...defaultSettings,
    isInitialized: false,
    openDrawer: false
};
const SettingsContext = /*#__PURE__*/ (0,external_react_.createContext)({
    ...initialState,
    handleDrawerClose: ()=>{},
    handleDrawerOpen: ()=>{},
    handleReset: ()=>{},
    handleUpdate: ()=>{},
    isCustom: false
});

;// CONCATENATED MODULE: ./src/contexts/settings/settings-consumer.ts

const SettingsConsumer = SettingsContext.Consumer;

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "lodash.isequal"
var external_lodash_isequal_ = __webpack_require__(82901);
var external_lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isequal_);
;// CONCATENATED MODULE: ./src/contexts/settings/settings-provider.tsx





const STORAGE_KEY = "app.settings";
const restoreSettings = ()=>{
    let value = null;
    try {
        const restored = window.localStorage.getItem(STORAGE_KEY);
        if (restored) {
            value = JSON.parse(restored);
        }
    } catch (err) {
        console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
    }
    return value;
};
const deleteSettings = ()=>{
    try {
        window.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
        console.error(err);
    }
};
const storeSettings = (value)=>{
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (err) {
        console.error(err);
    }
};
const SettingsProvider = (props)=>{
    const { children } = props;
    const [state, setState] = (0,external_react_.useState)(initialState);
    (0,external_react_.useEffect)(()=>{
        const restored = restoreSettings();
        if (restored) {
            setState((prevState)=>({
                    ...prevState,
                    ...restored,
                    isInitialized: true
                }));
        }
    }, []);
    const handleReset = (0,external_react_.useCallback)(()=>{
        deleteSettings();
        setState((prevState)=>({
                ...prevState,
                ...defaultSettings
            }));
    }, []);
    const handleUpdate = (0,external_react_.useCallback)((settings)=>{
        setState((prevState)=>{
            storeSettings({
                colorPreset: prevState.colorPreset,
                contrast: prevState.contrast,
                direction: prevState.direction,
                layout: prevState.layout,
                navColor: prevState.navColor,
                paletteMode: prevState.paletteMode,
                responsiveFontSizes: prevState.responsiveFontSizes,
                stretch: prevState.stretch,
                ...settings
            });
            return {
                ...prevState,
                ...settings
            };
        });
    }, []);
    const handleDrawerOpen = (0,external_react_.useCallback)(()=>{
        setState((prevState)=>({
                ...prevState,
                openDrawer: true
            }));
    }, []);
    const handleDrawerClose = (0,external_react_.useCallback)(()=>{
        setState((prevState)=>({
                ...prevState,
                openDrawer: false
            }));
    }, []);
    const isCustom = (0,external_react_.useMemo)(()=>{
        return !external_lodash_isequal_default()(defaultSettings, {
            colorPreset: state.colorPreset,
            contrast: state.contrast,
            direction: state.direction,
            layout: state.layout,
            navColor: state.navColor,
            paletteMode: state.paletteMode,
            responsiveFontSizes: state.responsiveFontSizes,
            stretch: state.stretch
        });
    }, [
        state
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(SettingsContext.Provider, {
        value: {
            ...state,
            handleDrawerClose,
            handleDrawerOpen,
            handleReset,
            handleUpdate,
            isCustom
        },
        children: children
    });
};
SettingsProvider.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};

;// CONCATENATED MODULE: ./src/contexts/settings/index.ts





/***/ }),

/***/ 11851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ useAnalytics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_libs_gtm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12808);


function useAnalytics(config) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        src_libs_gtm__WEBPACK_IMPORTED_MODULE_1__/* .gtm */ .w.initialize(config);
    }, [
        config
    ]);
}


/***/ }),

/***/ 64082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useNprogress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);



function useNprogress() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeStart", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().start));
        next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeError", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().done));
        next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeComplete", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().done));
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off("routeChangeStart", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().start));
            next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off("routeChangeError", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().done));
            next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off("routeChangeComplete", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().done));
        };
    }, []);
}


/***/ }),

/***/ 12808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ gtm)
/* harmony export */ });
const warn = (...args)=>{
    if (true) {
        return;
    }
    console.warn(...args);
};
class GTM {
    configure(config) {
        if (!config.containerId) {
            warn("GTM requires a GTM ID to be loaded.");
            return;
        }
        this.CONTAINER_ID = config.containerId;
    }
    initialize(config) {
        if (this.initialized) {
            warn("GTM can only be initialized once.");
            return;
        }
        // Maybe you want to load events from server side (in NextJS apps for example),
        // those can be queued.
        // SSR queued events can be loaded in the initialize script.
        // For the moment we do not implement it, but in future we might add it.
        if (!document) {
            warn("GTM can be initialized only on client side.");
            return;
        }
        this.configure(config);
        if (!this.CONTAINER_ID) {
            return;
        }
        const script = document.createElement("script");
        const noscript = document.createElement("noscript");
        script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${this.CONTAINER_ID}');
    `;
        noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${this.CONTAINER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
        document.head.insertBefore(script, document.head.childNodes[0]);
        document.body.insertBefore(noscript, document.body.childNodes[0]);
    }
    // eslint-disable-next-line class-methods-use-this
    push(...args) {
        if (!window) {
            warn("GTM push works only on client side.");
            return;
        }
        if (!window.dataLayer) {
            window.dataLayer = [];
        }
        window.dataLayer.push(...args);
    }
    constructor(){
        this.initialized = false;
    }
}
// Singleton
const gtm = new GTM();


/***/ }),

/***/ 40306:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57987);
/* harmony import */ var _translations_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21769);
/* harmony import */ var _translations_de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99670);
/* harmony import */ var _translations_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable import/no-named-as-default-member */ 




i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    resources: {
        en: {
            translation: _translations_en__WEBPACK_IMPORTED_MODULE_2__.en
        },
        de: {
            translation: _translations_de__WEBPACK_IMPORTED_MODULE_3__.de
        },
        es: {
            translation: _translations_es__WEBPACK_IMPORTED_MODULE_4__.es
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ tokens)
/* harmony export */ });
const tokens = {
    common: {
        languageChanged: "common.languageChanged"
    },
    nav: {
        academy: "nav.academy",
        account: "nav.account",
        analytics: "nav.analytics",
        auth: "nav.auth",
        blog: "nav.blog",
        browse: "nav.browse",
        calendar: "nav.calendar",
        chat: "nav.chat",
        checkout: "nav.checkout",
        concepts: "nav.concepts",
        contact: "nav.contact",
        course: "nav.course",
        create: "nav.create",
        crypto: "nav.crypto",
        customers: "nav.customers",
        dashboard: "nav.dashboard",
        details: "nav.details",
        ecommerce: "nav.ecommerce",
        edit: "nav.edit",
        error: "nav.error",
        feed: "nav.feed",
        fileManager: "nav.fileManager",
        files: "nav.files",
        finance: "nav.finance",
        fleet: "nav.fleet",
        forgotPassword: "nav.forgotPassword",
        invoiceList: "nav.invoices",
        jobList: "nav.jobList",
        kanban: "nav.kanban",
        list: "nav.list",
        login: "nav.login",
        logistics: "nav.logistics",
        mail: "nav.mail",
        management: "nav.management",
        orderList: "nav.orders",
        overview: "nav.overview",
        pages: "nav.pages",
        postCreate: "nav.postCreate",
        postDetails: "nav.postDetails",
        postList: "nav.postList",
        pricing: "nav.pricing",
        productList: "nav.products",
        profile: "nav.profile",
        register: "nav.register",
        resetPassword: "nav.resetPassword",
        socialMedia: "nav.socialMedia",
        verifyCode: "nav.verifyCode"
    }
};


/***/ }),

/***/ 99670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de: () => (/* binding */ de)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23163);

const de = {
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.common.languageChanged]: "Sprache ge\xe4ndert",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.academy]: "Akademie",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.account]: "Konto",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.analytics]: "Analytik",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.auth]: "Authentifizierung",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.blog]: "Blog",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.browse]: "Durchsuche",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.calendar]: "Kalender",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.chat]: "Plaudern",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.checkout]: "Auschecken",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.concepts]: "Konzepte",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.contact]: "Kontakt",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.course]: "Kurs",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.create]: "Schaffen",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.crypto]: "Crypto",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.customers]: "Kunden",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.dashboard]: "Dashboard",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.details]: "Einzelheiten",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.ecommerce]: "E-Commerce",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.edit]: "Bearbeiten",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.error]: "Fehler",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.feed]: "F\xfcttern",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.fileManager]: "Dateimanager",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.finance]: "Finanzen",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.fleet]: "Flotte",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.forgotPassword]: "Passwort Vergessen",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.invoiceList]: "Rechnungen",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.jobList]: "Stellenangebote",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.kanban]: "Kanban",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.list]: "Auff\xfchren",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.login]: "Anmeldung",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.logistics]: "Logistik",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.mail]: "E-Mail",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.management]: "Verwaltung",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.orderList]: "Auftr\xe4ge",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.overview]: "\xdcberblick",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.pages]: "Seiten",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postCreate]: "Beitrag erstellen",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postDetails]: "Beitragsdetails",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postList]: "Beitragsliste",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.pricing]: "Preisgestaltung",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.productList]: "Produkte",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.profile]: "Profil",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.register]: "Registrieren",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.resetPassword]: "Passwort Zur\xfccksetzen",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.socialMedia]: "Sozialen Medien",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.verifyCode]: "Code \xdcberpr\xfcfen"
};


/***/ }),

/***/ 21769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   en: () => (/* binding */ en)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23163);

const en = {
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.common.languageChanged]: "Language changed",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.academy]: "Academy",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.account]: "Account",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.analytics]: "Analytics",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.auth]: "Auth",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.blog]: "Blog",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.browse]: "Browse",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.calendar]: "Calendar",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.chat]: "Chat",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.checkout]: "Checkout",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.concepts]: "Concepts",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.contact]: "Contact",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.course]: "Course",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.create]: "Create",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.crypto]: "Crypto",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.customers]: "Customers",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.dashboard]: "Dashboard",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.details]: "Details",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.ecommerce]: "E-Commerce",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.edit]: "Edit",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.error]: "Error",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.feed]: "Feed",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.fileManager]: "File Manager",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.finance]: "Finance",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.fleet]: "Fleet",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.forgotPassword]: "Forgot Password",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.invoiceList]: "Invoices",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.jobList]: "Job Listings",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.kanban]: "Kanban",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.list]: "List",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.login]: "Login",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.logistics]: "Logistics",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.mail]: "Mail",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.management]: "Management",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.orderList]: "Orders",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.overview]: "Overview",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.pages]: "Pages",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postCreate]: "Post Create",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postDetails]: "Post Details",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postList]: "Post List",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.pricing]: "Pricing",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.productList]: "Products",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.profile]: "Profile",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.register]: "Register",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.resetPassword]: "Reset Password",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.socialMedia]: "Social Media",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.verifyCode]: "Verify Code"
};


/***/ }),

/***/ 90675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   es: () => (/* binding */ es)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23163);

const es = {
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.common.languageChanged]: "Se ha cambiado el idioma",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.academy]: "Academia",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.account]: "Cuenta",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.analytics]: "Anal\xedtica",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.auth]: "Autenticaci\xf3n",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.blog]: "Blog",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.browse]: "Buscar",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.calendar]: "Calendario",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.chat]: "Chat",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.checkout]: "Pago",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.concepts]: "Conceptos",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.contact]: "Contacto",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.course]: "Curso",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.create]: "Crear",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.crypto]: "Crypto",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.customers]: "Clientes",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.dashboard]: "Dashboard",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.details]: "Detalles",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.ecommerce]: "E-Commerce",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.edit]: "Editar",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.error]: "Error",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.feed]: "Fuente social",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.fileManager]: "Administrador de Archivos",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.finance]: "Finanzas",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.fleet]: "Parque",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.forgotPassword]: "Recuperar Contrase\xf1a",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.invoiceList]: "Facturas",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.jobList]: "Listado de Trabajos",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.kanban]: "Kanban",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.list]: "Lista",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.login]: "Acceso",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.logistics]: "Log\xedstica",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.mail]: "Correo",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.management]: "Gesti\xf3n",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.orderList]: "Pedidos",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.overview]: "Visi\xf3n general",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.pages]: "P\xe1ginas",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postCreate]: "Crear Articulo",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postDetails]: "Detalles del Articulo",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.postList]: "Lista de Articulos",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.pricing]: "Precios",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.productList]: "Productos",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.profile]: "Perfil",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.register]: "Registrarse",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.resetPassword]: "Restablecer Contrase\xf1a",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.socialMedia]: "Redes Sociales",
    [_tokens__WEBPACK_IMPORTED_MODULE_0__/* .tokens */ .T.nav.verifyCode]: "Verificar C\xf3digo"
};


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35312);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48710);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45991);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53139);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44046);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_global_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28363);
/* harmony import */ var src_global_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_global_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_locales_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40306);
/* harmony import */ var src_components_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89852);
/* harmony import */ var src_components_splash_screen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25842);
/* harmony import */ var src_components_settings_settings_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61991);
/* harmony import */ var src_components_settings_settings_drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95713);
/* harmony import */ var src_components_toaster__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99939);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38725);
/* harmony import */ var src_contexts_auth_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(12337);
/* harmony import */ var src_contexts_settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(58625);
/* harmony import */ var src_hooks_use_analytics__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11851);
/* harmony import */ var src_hooks_use_nprogress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(64082);
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(10459);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71278);
/* harmony import */ var src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(61029);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_7__, src_locales_i18n__WEBPACK_IMPORTED_MODULE_13__, src_components_rtl__WEBPACK_IMPORTED_MODULE_14__, src_components_toaster__WEBPACK_IMPORTED_MODULE_18__, src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_26__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_7__, src_locales_i18n__WEBPACK_IMPORTED_MODULE_13__, src_components_rtl__WEBPACK_IMPORTED_MODULE_14__, src_components_toaster__WEBPACK_IMPORTED_MODULE_18__, src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Remove if react-quill is not used


// Remove if react-draft-wysiwyg is not used

// Remove if simplebar is not used

// Remove if mapbox is not used









// Remove if locales are not used














const clientSideEmotionCache = (0,src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_26__/* .createEmotionCache */ .S)();
const CustomApp = (props)=>{
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    (0,src_hooks_use_analytics__WEBPACK_IMPORTED_MODULE_22__/* .useAnalytics */ .z)(src_config__WEBPACK_IMPORTED_MODULE_19__/* .gtmConfig */ .PG);
    (0,src_hooks_use_nprogress__WEBPACK_IMPORTED_MODULE_23__/* .useNprogress */ .W)();
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Devias Kit PRO"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
                store: src_store__WEBPACK_IMPORTED_MODULE_24__/* .store */ .h,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_11__.LocalizationProvider, {
                    dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_10__.AdapterDateFns,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_auth_jwt__WEBPACK_IMPORTED_MODULE_20__/* .AuthProvider */ .Ho, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_auth_jwt__WEBPACK_IMPORTED_MODULE_20__/* .AuthConsumer */ .he, {
                            children: (auth)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_settings__WEBPACK_IMPORTED_MODULE_21__/* .SettingsProvider */ .mu, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_settings__WEBPACK_IMPORTED_MODULE_21__/* .SettingsConsumer */ .ix, {
                                        children: (settings)=>{
                                            // Prevent theme flicker when restoring custom settings from browser storage
                                            if (!settings.isInitialized) {
                                            // return null;
                                            }
                                            const theme = (0,src_theme__WEBPACK_IMPORTED_MODULE_25__/* .createTheme */ .j)({
                                                colorPreset: settings.colorPreset,
                                                contrast: settings.contrast,
                                                direction: settings.direction,
                                                paletteMode: settings.paletteMode,
                                                responsiveFontSizes: settings.responsiveFontSizes
                                            });
                                            // Prevent guards from redirecting
                                            const showSlashScreen = !auth.isInitialized;
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {
                                                theme: theme,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                                                name: "color-scheme",
                                                                content: settings.paletteMode
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                                                name: "theme-color",
                                                                content: theme.palette.neutral[900]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_rtl__WEBPACK_IMPORTED_MODULE_14__/* .RTL */ .l, {
                                                        direction: settings.direction,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                                            showSlashScreen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_splash_screen__WEBPACK_IMPORTED_MODULE_15__/* .SplashScreen */ .c, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                                        ...pageProps
                                                                    })),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_settings_settings_button__WEBPACK_IMPORTED_MODULE_16__/* .SettingsButton */ .l, {
                                                                        onClick: settings.handleDrawerOpen
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_settings_settings_drawer__WEBPACK_IMPORTED_MODULE_17__/* .SettingsDrawer */ .b, {
                                                                        canReset: settings.isCustom,
                                                                        onClose: settings.handleDrawerClose,
                                                                        onReset: settings.handleReset,
                                                                        onUpdate: settings.handleUpdate,
                                                                        open: settings.openDrawer,
                                                                        values: {
                                                                            colorPreset: settings.colorPreset,
                                                                            contrast: settings.contrast,
                                                                            direction: settings.direction,
                                                                            paletteMode: settings.paletteMode,
                                                                            responsiveFontSizes: settings.responsiveFontSizes,
                                                                            stretch: settings.stretch,
                                                                            layout: settings.layout,
                                                                            navColor: settings.navColor
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_toaster__WEBPACK_IMPORTED_MODULE_18__/* .Toaster */ .x, {})
                                                        ]
                                                    })
                                                ]
                                            });
                                        }
                                    })
                                })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61029);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_3__]);
([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CustomDocument = ({ emotionStyleTags })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon-16x16.png",
                        type: "image/png",
                        sizes: "16x16"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon-32x32.png",
                        type: "image/png",
                        sizes: "32x32"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon.png",
                        href: "/apple-touch-icon.png",
                        type: "image/png",
                        sizes: "180x180"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "emotion-insertion-point",
                        content: ""
                    }),
                    emotionStyleTags
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
};
CustomDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = (0,src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_3__/* .createEmotionCache */ .S)();
    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__["default"])(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        emotionCache: cache,
                        ...props
                    });
                }
        });
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        emotionStyleTags
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDocument);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ reducer),
/* harmony export */   t: () => (/* binding */ slice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    events: []
};
const reducers = {
    getEvents (state, action) {
        state.events = action.payload;
    },
    createEvent (state, action) {
        state.events.push(action.payload);
    },
    updateEvent (state, action) {
        const event = action.payload;
        state.events = state.events.map((_event)=>{
            if (_event.id === event.id) {
                return event;
            }
            return _event;
        });
    },
    deleteEvent (state, action) {
        state.events = state.events.filter((event)=>event.id !== action.payload);
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "calendar",
    initialState,
    reducers
});
const { reducer } = slice;


/***/ }),

/***/ 87343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ reducer),
/* harmony export */   t: () => (/* binding */ slice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);


const initialState = {
    contacts: {
        byId: {},
        allIds: []
    },
    currentThreadId: undefined,
    threads: {
        byId: {},
        allIds: []
    }
};
const reducers = {
    getContacts (state, action) {
        const contacts = action.payload;
        state.contacts.byId = (0,src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__/* .objFromArray */ .y)(contacts);
        state.contacts.allIds = Object.keys(state.contacts.byId);
    },
    getThreads (state, action) {
        const threads = action.payload;
        state.threads.byId = (0,src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__/* .objFromArray */ .y)(threads);
        state.threads.allIds = Object.keys(state.threads.byId);
    },
    getThread (state, action) {
        const thread = action.payload;
        if (thread) {
            state.threads.byId[thread.id] = thread;
            if (!state.threads.allIds.includes(thread.id)) {
                state.threads.allIds.unshift(thread.id);
            }
        }
    },
    markThreadAsSeen (state, action) {
        const threadId = action.payload;
        const thread = state.threads.byId[threadId];
        if (thread) {
            thread.unreadCount = 0;
        }
    },
    setCurrentThread (state, action) {
        state.currentThreadId = action.payload;
    },
    addMessage (state, action) {
        const { threadId, message } = action.payload;
        const thread = state.threads.byId[threadId];
        if (thread) {
            thread.messages.push(message);
        }
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "chat",
    initialState,
    reducers
});
const { reducer } = slice;


/***/ }),

/***/ 77453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ reducer),
/* harmony export */   t: () => (/* binding */ slice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);


const initialState = {
    isLoaded: false,
    columns: {
        byId: {},
        allIds: []
    },
    tasks: {
        byId: {},
        allIds: []
    },
    members: {
        byId: {},
        allIds: []
    }
};
const reducers = {
    getBoard (state, action) {
        const board = action.payload;
        state.columns.byId = (0,src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__/* .objFromArray */ .y)(board.columns);
        state.columns.allIds = Object.keys(state.columns.byId);
        state.tasks.byId = (0,src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__/* .objFromArray */ .y)(board.tasks);
        state.tasks.allIds = Object.keys(state.tasks.byId);
        state.members.byId = (0,src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__/* .objFromArray */ .y)(board.members);
        state.members.allIds = Object.keys(state.members.byId);
        state.isLoaded = true;
    },
    createColumn (state, action) {
        const column = action.payload;
        state.columns.byId[column.id] = column;
        state.columns.allIds.push(column.id);
    },
    updateColumn (state, action) {
        const column = action.payload;
        state.columns.byId[column.id] = column;
    },
    clearColumn (state, action) {
        const columnId = action.payload;
        // taskIds to be removed
        const { taskIds } = state.columns.byId[columnId];
        // Delete the taskIds references from the column
        state.columns.byId[columnId].taskIds = [];
        // Delete the tasks from state
        taskIds.forEach((taskId)=>{
            delete state.tasks.byId[taskId];
        });
        state.tasks.allIds = state.tasks.allIds.filter((taskId)=>taskIds.includes(taskId));
    },
    deleteColumn (state, action) {
        const columnId = action.payload;
        delete state.columns.byId[columnId];
        state.columns.allIds = state.columns.allIds.filter((_columnId)=>_columnId !== columnId);
    },
    createTask (state, action) {
        const task = action.payload;
        state.tasks.byId[task.id] = task;
        state.tasks.allIds.push(task.id);
        // Add the taskId reference to the column
        state.columns.byId[task.columnId].taskIds.push(task.id);
    },
    updateTask (state, action) {
        const task = action.payload;
        Object.assign(state.tasks.byId[task.id], task);
    },
    moveTask (state, action) {
        const { taskId, position, columnId } = action.payload;
        const sourceColumnId = state.tasks.byId[taskId].columnId;
        // Remove task from source column
        state.columns.byId[sourceColumnId].taskIds = state.columns.byId[sourceColumnId].taskIds.filter((_taskId)=>_taskId !== taskId);
        // If columnId exists, it means that we have to add the task to the new column
        if (columnId) {
            // Change task's columnId reference
            state.tasks.byId[taskId].columnId = columnId;
            // Push the taskId to the specified position
            state.columns.byId[columnId].taskIds.splice(position, 0, taskId);
        } else {
            // Push the taskId to the specified position
            state.columns.byId[sourceColumnId].taskIds.splice(position, 0, taskId);
        }
    },
    deleteTask (state, action) {
        const taskId = action.payload;
        const { columnId } = state.tasks.byId[taskId];
        delete state.tasks.byId[taskId];
        state.tasks.allIds = state.tasks.allIds.filter((_taskId)=>_taskId !== taskId);
        state.columns.byId[columnId].taskIds = state.columns.byId[columnId].taskIds.filter((_taskId)=>_taskId !== taskId);
    },
    addComment (state, action) {
        const { taskId, comment } = action.payload;
        const task = state.tasks.byId[taskId];
        task.comments.push(comment);
    },
    addChecklist (state, action) {
        const { taskId, checklist } = action.payload;
        const task = state.tasks.byId[taskId];
        task.checklists.push(checklist);
    },
    updateChecklist (state, action) {
        const { taskId, checklist } = action.payload;
        const task = state.tasks.byId[taskId];
        task.checklists = task.checklists.map((_checklist)=>{
            if (_checklist.id === checklist.id) {
                return checklist;
            }
            return _checklist;
        });
    },
    deleteChecklist (state, action) {
        const { taskId, checklistId } = action.payload;
        const task = state.tasks.byId[taskId];
        task.checklists = task.checklists.filter((checklist)=>checklist.id !== checklistId);
    },
    addCheckItem (state, action) {
        const { taskId, checklistId, checkItem } = action.payload;
        const task = state.tasks.byId[taskId];
        const checklist = task.checklists.find((checklist)=>checklist.id === checklistId);
        if (!checklist) {
            return;
        }
        checklist.checkItems.push(checkItem);
    },
    updateCheckItem (state, action) {
        const { taskId, checklistId, checkItem } = action.payload;
        const task = state.tasks.byId[taskId];
        const checklist = task.checklists.find((checklist)=>checklist.id === checklistId);
        if (!checklist) {
            return;
        }
        checklist.checkItems = checklist.checkItems.map((_checkItem)=>{
            if (_checkItem.id === checkItem.id) {
                return checkItem;
            }
            return _checkItem;
        });
    },
    deleteCheckItem (state, action) {
        const { taskId, checklistId, checkItemId } = action.payload;
        const task = state.tasks.byId[taskId];
        const checklist = task.checklists.find((_checklist)=>_checklist.id === checklistId);
        if (!checklist) {
            return;
        }
        checklist.checkItems = checklist.checkItems.filter((checkItem)=>checkItem.id !== checkItemId);
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "kanban",
    initialState,
    reducers
});
const { reducer } = slice;


/***/ }),

/***/ 6883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ reducer),
/* harmony export */   t: () => (/* binding */ slice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);


const initialState = {
    emails: {
        byId: {},
        allIds: []
    },
    labels: []
};
const reducers = {
    getLabels (state, action) {
        state.labels = action.payload;
    },
    getEmails (state, action) {
        const emails = action.payload;
        state.emails.byId = (0,src_utils_obj_from_array__WEBPACK_IMPORTED_MODULE_1__/* .objFromArray */ .y)(emails);
        state.emails.allIds = Object.keys(state.emails.byId);
    },
    getEmail (state, action) {
        const email = action.payload;
        state.emails.byId[email.id] = email;
        if (!state.emails.allIds.includes(email.id)) {
            state.emails.allIds.push(email.id);
        }
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "mail",
    initialState,
    reducers
});
const { reducer } = slice;


/***/ }),

/***/ 10459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ store),
  I0: () => (/* binding */ useDispatch),
  v9: () => (/* binding */ useSelector)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(38725);
// EXTERNAL MODULE: ./src/slices/calendar.ts
var calendar = __webpack_require__(57446);
// EXTERNAL MODULE: ./src/slices/chat.ts
var chat = __webpack_require__(87343);
// EXTERNAL MODULE: ./src/slices/kanban.ts
var kanban = __webpack_require__(77453);
// EXTERNAL MODULE: ./src/slices/mail.ts
var mail = __webpack_require__(6883);
;// CONCATENATED MODULE: ./src/store/root-reducer.ts





const rootReducer = (0,toolkit_.combineReducers)({
    calendar: calendar/* reducer */.I,
    chat: chat/* reducer */.I,
    kanban: kanban/* reducer */.I,
    mail: mail/* reducer */.I
});

;// CONCATENATED MODULE: ./src/store/index.ts




const store = (0,toolkit_.configureStore)({
    reducer: rootReducer,
    devTools: config/* enableDevTools */.HR
});
const useSelector = external_react_redux_.useSelector;
const useDispatch = ()=>(0,external_react_redux_.useDispatch)();


/***/ }),

/***/ 65953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kp: () => (/* binding */ warning),
/* harmony export */   QN: () => (/* binding */ indigo),
/* harmony export */   Vp: () => (/* binding */ success),
/* harmony export */   ek: () => (/* binding */ green),
/* harmony export */   iN: () => (/* binding */ blue),
/* harmony export */   jk: () => (/* binding */ purple),
/* harmony export */   n$: () => (/* binding */ neutral),
/* harmony export */   um: () => (/* binding */ info),
/* harmony export */   vU: () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79590);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__);

const withAlphas = (color)=>{
    return {
        ...color,
        alpha4: (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(color.main, 0.04),
        alpha8: (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(color.main, 0.08),
        alpha12: (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(color.main, 0.12),
        alpha30: (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(color.main, 0.3),
        alpha50: (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(color.main, 0.5)
    };
};
const neutral = {
    50: "#F8F9FA",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D2D6DB",
    400: "#9DA4AE",
    500: "#6C737F",
    600: "#4D5761",
    700: "#2F3746",
    800: "#1C2536",
    900: "#111927"
};
const blue = withAlphas({
    lightest: "#F5F8FF",
    light: "#EBEFFF",
    main: "#2970FF",
    dark: "#004EEB",
    darkest: "#00359E",
    contrastText: "#FFFFFF"
});
const green = withAlphas({
    lightest: "#F6FEF9",
    light: "#EDFCF2",
    main: "#16B364",
    dark: "#087443",
    darkest: "#084C2E",
    contrastText: "#FFFFFF"
});
const indigo = withAlphas({
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#6366F1",
    dark: "#4338CA",
    darkest: "#312E81",
    contrastText: "#FFFFFF"
});
const purple = withAlphas({
    lightest: "#F9F5FF",
    light: "#F4EBFF",
    main: "#9E77ED",
    dark: "#6941C6",
    darkest: "#42307D",
    contrastText: "#FFFFFF"
});
const success = withAlphas({
    lightest: "#F0FDF9",
    light: "#3FC79A",
    main: "#10B981",
    dark: "#0B815A",
    darkest: "#134E48",
    contrastText: "#FFFFFF"
});
const info = withAlphas({
    lightest: "#ECFDFF",
    light: "#CFF9FE",
    main: "#06AED4",
    dark: "#0E7090",
    darkest: "#164C63",
    contrastText: "#FFFFFF"
});
const warning = withAlphas({
    lightest: "#FFFAEB",
    light: "#FEF0C7",
    main: "#F79009",
    dark: "#B54708",
    darkest: "#7A2E0E",
    contrastText: "#FFFFFF"
});
const error = withAlphas({
    lightest: "#FEF3F2",
    light: "#FEE4E2",
    main: "#F04438",
    dark: "#B42318",
    darkest: "#7A271A",
    contrastText: "#FFFFFF"
});


/***/ }),

/***/ 71278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ createTheme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
;// CONCATENATED MODULE: ./src/theme/base/create-typography.ts
const createTypography = ()=>{
    return {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: 1.66
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        h1: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2
        },
        h2: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h3: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.2
        },
        h4: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2
        },
        h5: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.2
        },
        h6: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            lineHeight: 1.2
        }
    };
};

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(60911);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(95612);
;// CONCATENATED MODULE: ./src/theme/base/create-components.tsx




// Used only to create transitions
const muiTheme = (0,styles_.createTheme)();
const createComponents = ()=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px 16px"
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                checkedIcon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    fill: "none",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        clipRule: "evenodd",
                        d: "M9 3.5C5.68629 3.5 3 6.18629 3 9.5V15.5C3 18.8137 5.68629 21.5 9 21.5H15C18.3137 21.5 21 18.8137 21 15.5V9.5C21 6.18629 18.3137 3.5 15 3.5H9ZM16.7179 10.1961C17.1024 9.79966 17.0926 9.16657 16.6961 8.7821C16.2997 8.39763 15.6666 8.40737 15.2821 8.80385L10.6667 13.5635L8.7179 11.5539C8.33343 11.1574 7.70034 11.1476 7.30385 11.5321C6.90737 11.9166 6.89763 12.5497 7.2821 12.9461L9.94877 15.6961C10.1371 15.8904 10.3961 16 10.6667 16C10.9372 16 11.1962 15.8904 11.3846 15.6961L16.7179 10.1961Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                }),
                color: "primary",
                icon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    fill: "none",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        height: "16",
                        rx: "5",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        width: "16",
                        x: "4",
                        y: "4.5"
                    })
                }),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    fill: "none",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        clipRule: "evenodd",
                        d: "M9 5.5H15C17.2091 5.5 19 7.29086 19 9.5V15.5C19 17.7091 17.2091 19.5 15 19.5H9C6.79086 19.5 5 17.7091 5 15.5V9.5C5 7.29086 6.79086 5.5 9 5.5ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5H15C18.3137 3.5 21 6.18629 21 9.5V15.5C21 18.8137 18.3137 21.5 15 21.5H9C5.68629 21.5 3 18.8137 3 15.5V9.5ZM8 11.5C7.44772 11.5 7 11.9477 7 12.5C7 13.0523 7.44772 13.5 8 13.5H16C16.5523 13.5 17 13.0523 17 12.5C17 11.9477 16.5523 11.5 16 11.5H8Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                })
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#root, #__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    borderRadius: 8,
                    borderStyle: "solid",
                    borderWidth: 1,
                    overflow: "hidden",
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ]),
                    "&:before": {
                        display: "none"
                    },
                    "&:after": {
                        display: "none"
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                },
                notchedOutline: {
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ])
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    [`&.${InputLabel_.inputLabelClasses.filled}`]: {
                        transform: "translate(12px, 18px) scale(1)"
                    },
                    [`&.${InputLabel_.inputLabelClasses.shrink}`]: {
                        [`&.${InputLabel_.inputLabelClasses.standard}`]: {
                            transform: "translate(0, -1.5px) scale(0.85)"
                        },
                        [`&.${InputLabel_.inputLabelClasses.filled}`]: {
                            transform: "translate(12px, 6px) scale(0.85)"
                        },
                        [`&.${InputLabel_.inputLabelClasses.outlined}`]: {
                            transform: "translate(14px, -9px) scale(0.85)"
                        }
                    }
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    overflow: "hidden"
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    marginRight: "16px",
                    minWidth: "unset"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                elevation: 16
            }
        },
        MuiRadio: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiSwitch: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "15px 16px"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    [`& .${TableCell_.tableCellClasses.root}`]: {
                        borderBottom: "none",
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    [`& .${TableCell_.tableCellClasses.paddingCheckbox}`]: {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled"
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/base/create-options.ts


// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.
const createOptions = (config)=>{
    const { direction = "ltr" } = config;
    return {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440
            }
        },
        components: createComponents(),
        direction,
        shape: {
            borderRadius: 8
        },
        typography: createTypography()
    };
};

// EXTERNAL MODULE: external "@mui/system/colorManipulator"
var colorManipulator_ = __webpack_require__(79590);
// EXTERNAL MODULE: external "@mui/material/Backdrop"
var Backdrop_ = __webpack_require__(85074);
// EXTERNAL MODULE: external "@mui/material/FilledInput"
var FilledInput_ = __webpack_require__(62967);
// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(37730);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(21598);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(75574);
;// CONCATENATED MODULE: ./src/theme/dark/create-components.ts







const create_components_createComponents = ({ palette })=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.neutral[300],
                    color: colors_.common.black
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    [`&:not(.${Backdrop_.backdropClasses.invisible})`]: {
                        backgroundColor: (0,colorManipulator_.alpha)(colors_.common.black, 0.5)
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    [`&.${Paper_.paperClasses.elevation1}`]: {
                        boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.08), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.06)"
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                icon: {
                    color: palette.action.active
                },
                root: {
                    borderColor: palette.neutral[700]
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "#nprogress .bar": {
                    backgroundColor: palette.primary.main
                },
                ".slick-dots li button": {
                    "&:before": {
                        fontSize: 10,
                        color: palette.primary.main
                    }
                },
                ".slick-dots li.slick-active button": {
                    "&:before": {
                        color: palette.primary.main
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderColor: palette.divider,
                    "&:hover": {
                        backgroundColor: palette.action.hover
                    },
                    [`&.${FilledInput_.filledInputClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    },
                    [`&.${FilledInput_.filledInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        borderColor: palette.primary.main,
                        boxShadow: `${palette.primary.main} 0 0 0 2px`
                    },
                    [`&.${FilledInput_.filledInputClasses.error}`]: {
                        borderColor: palette.error.main,
                        boxShadow: `${palette.error.main} 0 0 0 2px`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: palette.action.hover,
                        [`& .${OutlinedInput_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.divider
                        }
                    },
                    [`&.${OutlinedInput_.outlinedInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        [`& .${OutlinedInput_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.primary.main,
                            borderWidth: "3px"
                        }
                    },
                    [`&.${FilledInput_.filledInputClasses.error}`]: {
                        [`& .${OutlinedInput_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.error.main,
                            borderWidth: "3px"
                        }
                    }
                },
                notchedOutline: {
                    borderColor: palette.divider
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: palette.neutral[500]
                },
                track: {
                    backgroundColor: palette.neutral[400],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    [`& .${TableCell_.tableCellClasses.root}`]: {
                        backgroundColor: palette.neutral[800],
                        color: palette.neutral[400]
                    }
                }
            }
        },
        // @ts-ignore
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.divider
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backdropFilter: "blur(6px)",
                    background: (0,colorManipulator_.alpha)(palette.neutral[900], 0.8)
                }
            }
        }
    };
};

// EXTERNAL MODULE: ./src/theme/colors.ts
var colors = __webpack_require__(65953);
;// CONCATENATED MODULE: ./src/theme/utils.ts

const getPrimary = (preset)=>{
    switch(preset){
        case "blue":
            return colors/* blue */.iN;
        case "green":
            return colors/* green */.ek;
        case "indigo":
            return colors/* indigo */.QN;
        case "purple":
            return colors/* purple */.jk;
        default:
            console.error('Invalid color preset, accepted values: "blue", "green", "indigo" or "purple"".');
            return colors/* blue */.iN;
    }
};

;// CONCATENATED MODULE: ./src/theme/dark/create-palette.ts



const createPalette = (config)=>{
    const { colorPreset, contrast } = config;
    return {
        action: {
            active: colors/* neutral */.n$[500],
            disabled: (0,colorManipulator_.alpha)(colors/* neutral */.n$[100], 0.38),
            disabledBackground: (0,colorManipulator_.alpha)(colors/* neutral */.n$[100], 0.12),
            focus: (0,colorManipulator_.alpha)(colors/* neutral */.n$[100], 0.16),
            hover: (0,colorManipulator_.alpha)(colors/* neutral */.n$[100], 0.04),
            selected: (0,colorManipulator_.alpha)(colors/* neutral */.n$[100], 0.12)
        },
        background: {
            default: contrast === "high" ? "#0B0F19" : "#0E1320",
            paper: colors/* neutral */.n$[900]
        },
        divider: "#2D3748",
        error: colors/* error */.vU,
        info: colors/* info */.um,
        mode: "dark",
        neutral: colors/* neutral */.n$,
        primary: getPrimary(colorPreset),
        success: colors/* success */.Vp,
        text: {
            primary: "#EDF2F7",
            secondary: "#A0AEC0",
            disabled: "rgba(255, 255, 255, 0.48)"
        },
        warning: colors/* warning */.Kp
    };
};

;// CONCATENATED MODULE: ./src/theme/dark/create-shadows.ts
const createShadows = ()=>{
    return [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.24)",
        "0px 1px 2px rgba(0, 0, 0, 0.24)",
        "0px 1px 4px rgba(0, 0, 0, 0.24)",
        "0px 1px 5px rgba(0, 0, 0, 0.24)",
        "0px 1px 6px rgba(0, 0, 0, 0.24)",
        "0px 2px 6px rgba(0, 0, 0, 0.24)",
        "0px 3px 6px rgba(0, 0, 0, 0.24)",
        "0px 4px 6px rgba(0, 0, 0, 0.24)",
        "0px 5px 12px rgba(0, 0, 0, 0.24)",
        "0px 5px 14px rgba(0, 0, 0, 0.24)",
        "0px 5px 15px rgba(0, 0, 0, 0.24)",
        "0px 6px 15px rgba(0, 0, 0, 0.24)",
        "0px 7px 15px rgba(0, 0, 0, 0.24)",
        "0px 8px 15px rgba(0, 0, 0, 0.24)",
        "0px 9px 15px rgba(0, 0, 0, 0.24)",
        "0px 10px 15px rgba(0, 0, 0, 0.24)",
        "0px 12px 22px rgba(0, 0, 0, 0.24)",
        "0px 13px 22px rgba(0, 0, 0, 0.24)",
        "0px 14px 24px rgba(0, 0, 0, 0.24)",
        "0px 20px 25px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)"
    ];
};

;// CONCATENATED MODULE: ./src/theme/dark/create-options.ts



const create_options_createOptions = (config)=>{
    const { colorPreset, contrast } = config;
    const palette = createPalette({
        colorPreset,
        contrast
    });
    const components = create_components_createComponents({
        palette
    });
    const shadows = createShadows();
    return {
        components,
        palette,
        shadows
    };
};

;// CONCATENATED MODULE: ./src/theme/light/create-components.ts







const light_create_components_createComponents = ({ palette })=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.neutral[200],
                    color: colors_.common.black
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    [`&:not(.${Backdrop_.backdropClasses.invisible})`]: {
                        backgroundColor: (0,colorManipulator_.alpha)(palette.neutral[900], 0.75)
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    [`&.${Paper_.paperClasses.elevation1}`]: {
                        boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)"
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                icon: {
                    color: palette.action.active
                },
                root: {
                    borderColor: palette.neutral[200]
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "#nprogress .bar": {
                    backgroundColor: palette.primary.main
                },
                ".slick-dots li button": {
                    "&:before": {
                        fontSize: 10,
                        color: palette.primary.main
                    }
                },
                ".slick-dots li.slick-active button": {
                    "&:before": {
                        color: palette.primary.main
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderColor: palette.neutral[200],
                    "&:hover": {
                        backgroundColor: palette.action.hover
                    },
                    [`&.${FilledInput_.filledInputClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    },
                    [`&.${FilledInput_.filledInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        borderColor: palette.primary.main,
                        boxShadow: `${palette.primary.main} 0 0 0 2px`
                    },
                    [`&.${FilledInput_.filledInputClasses.error}`]: {
                        borderColor: palette.error.main,
                        boxShadow: `${palette.error.main} 0 0 0 2px`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: palette.action.hover,
                        [`& .${OutlinedInput_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.neutral[200]
                        }
                    },
                    [`&.${OutlinedInput_.outlinedInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        [`& .${OutlinedInput_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.primary.main,
                            borderWidth: "3px"
                        }
                    },
                    [`&.${FilledInput_.filledInputClasses.error}`]: {
                        [`& .${OutlinedInput_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.error.main,
                            borderWidth: "3px"
                        }
                    }
                },
                notchedOutline: {
                    borderColor: palette.neutral[200]
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: palette.neutral[500]
                },
                track: {
                    backgroundColor: palette.neutral[400],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    [`& .${TableCell_.tableCellClasses.root}`]: {
                        backgroundColor: palette.neutral[50],
                        color: palette.neutral[700]
                    }
                }
            }
        },
        // @ts-ignore
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.divider
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backdropFilter: "blur(6px)",
                    background: (0,colorManipulator_.alpha)(palette.neutral[900], 0.8)
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/light/create-palette.ts




const create_palette_createPalette = (config)=>{
    const { colorPreset, contrast } = config;
    return {
        action: {
            active: colors/* neutral */.n$[500],
            disabled: (0,colorManipulator_.alpha)(colors/* neutral */.n$[900], 0.38),
            disabledBackground: (0,colorManipulator_.alpha)(colors/* neutral */.n$[900], 0.12),
            focus: (0,colorManipulator_.alpha)(colors/* neutral */.n$[900], 0.16),
            hover: (0,colorManipulator_.alpha)(colors/* neutral */.n$[900], 0.04),
            selected: (0,colorManipulator_.alpha)(colors/* neutral */.n$[900], 0.12)
        },
        background: {
            default: contrast === "high" ? colors/* neutral */.n$[50] : colors_.common.white,
            paper: colors_.common.white
        },
        divider: "#F2F4F7",
        error: colors/* error */.vU,
        info: colors/* info */.um,
        mode: "light",
        neutral: colors/* neutral */.n$,
        primary: getPrimary(colorPreset),
        success: colors/* success */.Vp,
        text: {
            primary: colors/* neutral */.n$[900],
            secondary: colors/* neutral */.n$[500],
            disabled: (0,colorManipulator_.alpha)(colors/* neutral */.n$[900], 0.38)
        },
        warning: colors/* warning */.Kp
    };
};

;// CONCATENATED MODULE: ./src/theme/light/create-shadows.ts
const create_shadows_createShadows = ()=>{
    return [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.08)",
        "0px 1px 5px rgba(0, 0, 0, 0.08)",
        "0px 1px 8px rgba(0, 0, 0, 0.08)",
        "0px 1px 10px rgba(0, 0, 0, 0.08)",
        "0px 1px 14px rgba(0, 0, 0, 0.08)",
        "0px 1px 18px rgba(0, 0, 0, 0.08)",
        "0px 2px 16px rgba(0, 0, 0, 0.08)",
        "0px 3px 14px rgba(0, 0, 0, 0.08)",
        "0px 3px 16px rgba(0, 0, 0, 0.08)",
        "0px 4px 18px rgba(0, 0, 0, 0.08)",
        "0px 4px 20px rgba(0, 0, 0, 0.08)",
        "0px 5px 22px rgba(0, 0, 0, 0.08)",
        "0px 5px 24px rgba(0, 0, 0, 0.08)",
        "0px 5px 26px rgba(0, 0, 0, 0.08)",
        "0px 6px 28px rgba(0, 0, 0, 0.08)",
        "0px 6px 30px rgba(0, 0, 0, 0.08)",
        "0px 6px 32px rgba(0, 0, 0, 0.08)",
        "0px 7px 34px rgba(0, 0, 0, 0.08)",
        "0px 7px 36px rgba(0, 0, 0, 0.08)",
        "0px 8px 38px rgba(0, 0, 0, 0.08)",
        "0px 8px 40px rgba(0, 0, 0, 0.08)",
        "0px 8px 42px rgba(0, 0, 0, 0.08)",
        "0px 9px 44px rgba(0, 0, 0, 0.08)",
        "0px 9px 46px rgba(0, 0, 0, 0.08)"
    ];
};

;// CONCATENATED MODULE: ./src/theme/light/create-options.ts



const light_create_options_createOptions = ({ colorPreset, contrast })=>{
    const palette = create_palette_createPalette({
        colorPreset,
        contrast
    });
    const components = light_create_components_createComponents({
        palette
    });
    const shadows = create_shadows_createShadows();
    return {
        components,
        palette,
        shadows
    };
};

;// CONCATENATED MODULE: ./src/theme/index.ts




const createTheme = (config)=>{
    let theme = (0,styles_.createTheme)(// Base options available for both dark and light palette modes
    createOptions({
        direction: config.direction
    }), // Options based on selected palette mode, color preset and contrast
    config.paletteMode === "dark" ? create_options_createOptions({
        colorPreset: config.colorPreset,
        contrast: config.contrast
    }) : light_create_options_createOptions({
        colorPreset: config.colorPreset,
        contrast: config.contrast
    }));
    if (config.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return theme;
};


/***/ }),

/***/ 64687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ Issuer)
/* harmony export */ });
var Issuer;
(function(Issuer) {
    Issuer["Auth0"] = "Auth0";
    Issuer["Firebase"] = "Firebase";
    Issuer["JWT"] = "JWT";
    Issuer["Amplify"] = "Amplify";
})(Issuer || (Issuer = {}));


/***/ }),

/***/ 61029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createEmotionCache = ()=>{
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: "css"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ createResourceId)
/* harmony export */ });
const createResourceId = ()=>{
    const arr = new Uint8Array(12);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, (v)=>v.toString(16).padStart(2, "0")).join("");
};


/***/ }),

/***/ 8722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ objFromArray)
/* harmony export */ });
const objFromArray = (arr, key = "id")=>arr.reduce((accumulator, current)=>{
        accumulator[current[key]] = current;
        return accumulator;
    }, {});


/***/ }),

/***/ 98954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ wait)
/* harmony export */ });
const wait = (time)=>new Promise((res)=>setTimeout(res, time));


/***/ }),

/***/ 28363:
/***/ (() => {



/***/ })

};
;