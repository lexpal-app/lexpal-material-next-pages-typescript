"use strict";
exports.id = 5545;
exports.ids = [5545];
exports.modules = {

/***/ 48050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ usePageView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_libs_gtm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12808);


const usePageView = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        src_libs_gtm__WEBPACK_IMPORTED_MODULE_1__/* .gtm */ .w.push({
            event: "page_view"
        });
    }, []);
};


/***/ }),

/***/ 6932:
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
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(69868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(14475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(73646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(14904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(85246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/components/logo.tsx
var logo = __webpack_require__(45456);
// EXTERNAL MODULE: ./src/components/router-link.tsx
var router_link = __webpack_require__(83172);
// EXTERNAL MODULE: ./src/paths.ts
var paths = __webpack_require__(45025);
;// CONCATENATED MODULE: ./src/layouts/marketing/footer.tsx











const sections = [
    {
        title: "Menu",
        items: [
            {
                title: "Browse Components",
                path: paths/* paths */.H.components.index
            },
            {
                title: "Documentation",
                external: true,
                path: paths/* paths */.H.docs
            }
        ]
    },
    {
        title: "Legal",
        items: [
            {
                title: "Terms & Conditions",
                path: "#"
            },
            {
                title: "License",
                path: "#"
            },
            {
                title: "Contact",
                path: "#"
            }
        ]
    },
    {
        title: "Social",
        items: [
            {
                title: "Instagram",
                path: "#"
            },
            {
                title: "LinkedIn",
                path: "#"
            }
        ]
    }
];
const Footer = (props)=>/*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
        sx: {
            backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
            borderTopColor: "divider",
            borderTopStyle: "solid",
            borderTopWidth: 1,
            pb: 6,
            pt: {
                md: 15,
                xs: 6
            }
        },
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Container_default()), {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Unstable_Grid2_default()), {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Unstable_Grid2_default()), {
                            xs: 12,
                            sm: 4,
                            md: 3,
                            sx: {
                                order: {
                                    xs: 4,
                                    md: 1
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                        alignItems: "center",
                                        component: router_link/* RouterLink */.r,
                                        direction: "row",
                                        display: "inline-flex",
                                        href: paths/* paths */.H.index,
                                        spacing: 1,
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                sx: {
                                                    display: "inline-flex",
                                                    height: 24,
                                                    width: 24
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
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
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "PRO"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        color: "text.secondary",
                                        variant: "caption",
                                        children: "\xa9 2022 Devias IO"
                                    })
                                ]
                            })
                        }),
                        sections.map((section, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Unstable_Grid2_default()), {
                                xs: 12,
                                sm: 4,
                                md: 3,
                                sx: {
                                    order: {
                                        md: index + 2,
                                        xs: index + 1
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        color: "text.secondary",
                                        variant: "overline",
                                        children: section.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                        component: "ul",
                                        spacing: 1,
                                        sx: {
                                            listStyle: "none",
                                            m: 0,
                                            p: 0
                                        },
                                        children: section.items.map((item)=>{
                                            const linkProps = item.path ? item.external ? {
                                                component: "a",
                                                href: item.path,
                                                target: "_blank"
                                            } : {
                                                component: router_link/* RouterLink */.r,
                                                href: item.path
                                            } : {};
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                                alignItems: "center",
                                                direction: "row",
                                                spacing: 2,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                        sx: {
                                                            backgroundColor: "primary.main",
                                                            height: 2,
                                                            width: 12
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                                                        color: "text.primary",
                                                        variant: "subtitle2",
                                                        ...linkProps,
                                                        children: item.title
                                                    })
                                                ]
                                            }, item.title);
                                        })
                                    })
                                ]
                            }, section.title))
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                    sx: {
                        my: 6
                    }
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    color: "text.secondary",
                    variant: "caption",
                    children: "All Rights Reserved."
                })
            ]
        })
    });

// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(92494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(97898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: ./src/hooks/use-pathname.ts
var use_pathname = __webpack_require__(6400);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronDown.js
var ChevronDown = __webpack_require__(94207);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronRight.js
var ChevronRight = __webpack_require__(27264);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(15732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
;// CONCATENATED MODULE: ./src/layouts/marketing/side-nav-item.tsx










const SideNavItem = (props)=>{
    const { active, children, disabled, external, open: openProp, path, title } = props;
    const [open, setOpen] = (0,external_react_.useState)(!!openProp);
    const handleToggle = (0,external_react_.useCallback)(()=>{
        setOpen((prevOpen)=>!prevOpen);
    }, []);
    // Branch
    if (children) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
                    disabled: disabled,
                    onClick: handleToggle,
                    sx: {
                        alignItems: "center",
                        borderRadius: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                        px: "12px",
                        py: "6px",
                        textAlign: "left",
                        width: "100%",
                        ...active && {
                            backgroundColor: "action.hover"
                        },
                        "&:hover": {
                            backgroundColor: "action.hover"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            component: "span",
                            sx: {
                                flexGrow: 1,
                                fontFamily: (theme)=>theme.typography.fontFamily,
                                fontSize: 14,
                                fontWeight: 500,
                                lineHeight: "24px",
                                whiteSpace: "nowrap",
                                ...active && {
                                    color: "primary.main"
                                }
                            },
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            sx: {
                                color: "action.active",
                                fontSize: 16,
                                ml: 2
                            },
                            children: open ? /*#__PURE__*/ jsx_runtime.jsx(ChevronDown/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime.jsx(ChevronRight/* default */.Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Collapse_default()), {
                    in: open,
                    sx: {
                        mt: 0.5
                    },
                    children: children
                })
            ]
        });
    }
    // Leaf
    const linkProps = path ? external ? {
        component: "a",
        href: path,
        target: "_blank"
    } : {
        component: router_link/* RouterLink */.r,
        href: path
    } : {};
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime.jsx((ButtonBase_default()), {
            sx: {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                px: "12px",
                py: "6px",
                textAlign: "left",
                width: "100%",
                ...active && {
                    backgroundColor: "action.hover"
                },
                "&:hover": {
                    backgroundColor: "action.hover"
                }
            },
            ...linkProps,
            children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                component: "span",
                sx: {
                    flexGrow: 1,
                    fontFamily: (theme)=>theme.typography.fontFamily,
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px",
                    whiteSpace: "nowrap",
                    ...active && {
                        color: "primary.main"
                    }
                },
                children: title
            })
        })
    });
};
SideNavItem.propTypes = {
    active: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).any,
    depth: (external_prop_types_default()).number,
    disabled: (external_prop_types_default()).bool,
    external: (external_prop_types_default()).bool,
    open: (external_prop_types_default()).bool,
    path: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/marketing/side-nav.tsx











const items = [
    {
        title: "Components",
        path: paths/* paths */.H.components.index
    },
    {
        title: "Pages",
        children: [
            {
                subheader: "Dashboard",
                items: [
                    {
                        title: "Overview",
                        path: paths/* paths */.H.dashboard.index
                    },
                    {
                        title: "Customers",
                        path: paths/* paths */.H.dashboard.customers.index
                    },
                    {
                        title: "Logistics",
                        path: paths/* paths */.H.dashboard.logistics.index
                    },
                    {
                        title: "File Manager",
                        path: paths/* paths */.H.dashboard.fileManager
                    },
                    {
                        title: "Academy",
                        path: paths/* paths */.H.dashboard.academy.index
                    }
                ]
            },
            {
                subheader: "Other",
                items: [
                    {
                        title: "Blog",
                        path: paths/* paths */.H.dashboard.blog.index
                    },
                    {
                        title: "Pricing",
                        path: paths/* paths */.H.pricing
                    },
                    {
                        title: "Contact",
                        path: paths/* paths */.H.contact
                    },
                    {
                        title: "Checkout",
                        path: paths/* paths */.H.checkout
                    },
                    {
                        title: "Error",
                        path: paths/* paths */.H.notFound
                    }
                ]
            }
        ]
    },
    {
        title: "Docs",
        path: paths/* paths */.H.docs,
        external: true
    }
];
const renderItems = ({ depth = 0, items, pathname })=>items.reduce((acc, item)=>reduceChildRoutes({
            acc,
            depth,
            item,
            pathname
        }), []);
const reduceChildRoutes = ({ acc, depth, item, pathname })=>{
    const checkPath = !!(item.path && pathname);
    const partialMatch = checkPath ? pathname.includes(item.path) : false;
    const exactMatch = checkPath ? pathname === item.path : false;
    if (item.children) {
        acc.push(/*#__PURE__*/ jsx_runtime.jsx(SideNavItem, {
            active: partialMatch,
            depth: depth,
            disabled: item.disabled,
            open: partialMatch,
            title: item.title,
            children: /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                spacing: 2,
                children: item.children.map((child, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        component: "ul",
                        spacing: 0.5,
                        sx: {
                            listStyle: "none",
                            m: 0,
                            p: 0
                        },
                        children: [
                            child.subheader && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                component: "li",
                                sx: {
                                    color: "text.secondary",
                                    fontSize: 12,
                                    fontWeight: 500,
                                    lineHeight: 1.66,
                                    mb: 1,
                                    pl: "24px",
                                    textTransform: "uppercase"
                                },
                                children: child.subheader
                            }),
                            child.items.map((item)=>{
                                const checkPath = !!(item.path && pathname);
                                const active = checkPath ? pathname === item.path : false;
                                const linkProps = item.path ? item.external ? {
                                    component: "a",
                                    href: item.path,
                                    target: "_blank"
                                } : {
                                    component: router_link/* RouterLink */.r,
                                    href: item.path
                                } : {};
                                return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
                                        sx: {
                                            alignItems: "center",
                                            borderRadius: 1,
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            pl: "24px",
                                            pr: "16px",
                                            py: "8px",
                                            textAlign: "left",
                                            "&:hover": {
                                                backgroundColor: "action.hover"
                                            },
                                            ...active && {
                                                color: "primary.main"
                                            }
                                        },
                                        ...linkProps,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                component: "span",
                                                sx: {
                                                    height: 6,
                                                    mr: 2,
                                                    width: 6
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                    sx: {
                                                        backgroundColor: "neutral.400",
                                                        borderRadius: "50%",
                                                        height: 4,
                                                        opacity: 0,
                                                        width: 4,
                                                        ...active && {
                                                            backgroundColor: "primary.main",
                                                            height: 6,
                                                            opacity: 1,
                                                            width: 6
                                                        }
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                component: "span",
                                                sx: {
                                                    flexGrow: 1,
                                                    fontFamily: (theme)=>theme.typography.fontFamily,
                                                    fontSize: 13,
                                                    fontWeight: 500,
                                                    lineHeight: "24px",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: item.title
                                            })
                                        ]
                                    })
                                }, item.title);
                            })
                        ]
                    }, index))
            })
        }, item.title));
    } else {
        acc.push(/*#__PURE__*/ jsx_runtime.jsx(SideNavItem, {
            active: exactMatch,
            depth: depth,
            disabled: item.disabled,
            external: item.external,
            path: item.path,
            title: item.title
        }, item.title));
    }
    return acc;
};
const SideNav = (props)=>{
    const { onClose, open = false } = props;
    const pathname = (0,use_pathname/* usePathname */.j)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Drawer_default()), {
        anchor: "right",
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                maxWidth: "100%",
                width: 300
            }
        },
        variant: "temporary",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    pt: 2,
                    px: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    alignItems: "center",
                    component: router_link/* RouterLink */.r,
                    direction: "row",
                    display: "inline-flex",
                    href: paths/* paths */.H.index,
                    spacing: 1,
                    sx: {
                        textDecoration: "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            sx: {
                                display: "inline-flex",
                                height: 24,
                                width: 24
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
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
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "PRO"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                component: "nav",
                sx: {
                    p: 2
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                    component: "ul",
                    spacing: 1,
                    sx: {
                        listStyle: "none",
                        m: 0,
                        p: 0
                    },
                    children: renderItems({
                        items,
                        pathname
                    })
                })
            })
        ]
    });
};
SideNav.propTypes = {
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool
};

// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Menu01.js
var Menu01 = __webpack_require__(11347);
// EXTERNAL MODULE: external "@mui/system/colorManipulator"
var colorManipulator_ = __webpack_require__(79590);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(53819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(58369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(38725);
// EXTERNAL MODULE: external "lodash.throttle"
var external_lodash_throttle_ = __webpack_require__(38622);
var external_lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(external_lodash_throttle_);
;// CONCATENATED MODULE: ./src/hooks/use-window-scroll.ts


const useWindowScroll = (config)=>{
    (0,external_react_.useEffect)(()=>{
        const { handler, delay } = config;
        const withThrottle = external_lodash_throttle_default()(handler, delay);
        window.addEventListener("scroll", withThrottle);
        return ()=>{
            window.removeEventListener("scroll", withThrottle);
        };
    }, [
        config
    ]);
};

// EXTERNAL MODULE: ./src/icons/untitled-ui/duocolor/credit-card-01.tsx
var credit_card_01 = __webpack_require__(60075);
// EXTERNAL MODULE: ./src/icons/untitled-ui/duocolor/home-smile.tsx
var home_smile = __webpack_require__(54077);
// EXTERNAL MODULE: ./src/icons/untitled-ui/duocolor/layout-alt-02.tsx
var layout_alt_02 = __webpack_require__(53806);
// EXTERNAL MODULE: ./src/icons/untitled-ui/duocolor/log-out-01.tsx
var log_out_01 = __webpack_require__(23947);
// EXTERNAL MODULE: ./src/icons/untitled-ui/duocolor/mail-04.tsx
var mail_04 = __webpack_require__(88877);
// EXTERNAL MODULE: ./src/icons/untitled-ui/duocolor/x-square.tsx
var x_square = __webpack_require__(57080);
;// CONCATENATED MODULE: ./src/layouts/marketing/pages-popover.tsx













const pages_popover_sections = [
    {
        items: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                    fontSize: "small",
                    children: /*#__PURE__*/ jsx_runtime.jsx(home_smile/* default */.Z, {})
                }),
                caption: "40+ screens",
                children: [
                    {
                        title: "Overview",
                        path: paths/* paths */.H.dashboard.index
                    },
                    {
                        title: "Customers",
                        path: paths/* paths */.H.dashboard.customers.index
                    },
                    {
                        title: "Logistics",
                        path: paths/* paths */.H.dashboard.logistics.index
                    },
                    {
                        title: "File Manager",
                        path: paths/* paths */.H.dashboard.fileManager
                    },
                    {
                        title: "Academy",
                        path: paths/* paths */.H.dashboard.academy.index
                    }
                ]
            }
        ]
    },
    {
        items: [
            {
                title: "Blog",
                path: paths/* paths */.H.dashboard.blog.index,
                icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                    fontSize: "small",
                    children: /*#__PURE__*/ jsx_runtime.jsx(layout_alt_02/* default */.Z, {})
                })
            },
            {
                title: "Pricing",
                path: paths/* paths */.H.pricing,
                icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                    fontSize: "small",
                    children: /*#__PURE__*/ jsx_runtime.jsx(credit_card_01/* default */.Z, {})
                })
            },
            {
                title: "Contact",
                path: paths/* paths */.H.contact,
                icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                    fontSize: "small",
                    children: /*#__PURE__*/ jsx_runtime.jsx(mail_04/* default */.Z, {})
                })
            },
            {
                title: "Checkout",
                path: paths/* paths */.H.checkout,
                icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                    fontSize: "small",
                    children: /*#__PURE__*/ jsx_runtime.jsx(log_out_01/* default */.Z, {})
                })
            },
            {
                title: "Error",
                path: paths/* paths */.H.notFound,
                icon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                    fontSize: "small",
                    children: /*#__PURE__*/ jsx_runtime.jsx(x_square/* default */.Z, {})
                })
            }
        ]
    }
];
const PagesPopover = ()=>/*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
        sx: {
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(2, 1fr)",
            p: 3
        },
        children: pages_popover_sections.map((section, index)=>{
            return /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                component: "ul",
                spacing: 0.5,
                sx: {
                    listStyle: "none",
                    m: 0,
                    p: 0
                },
                children: section.items.map((item)=>{
                    const linkProps = item.path ? item.external ? {
                        component: "a",
                        href: item.path,
                        target: "_blank"
                    } : {
                        component: router_link/* RouterLink */.r,
                        href: item.path
                    } : {};
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
                                sx: {
                                    alignItems: "center",
                                    borderRadius: 1,
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    px: "12px",
                                    py: "6px",
                                    textAlign: "left",
                                    width: "100%",
                                    "&:hover": {
                                        backgroundColor: "action.hover"
                                    }
                                },
                                ...linkProps,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                        component: "span",
                                        sx: {
                                            alignItems: "center",
                                            color: "action.active",
                                            display: "inline-flex",
                                            justifyContent: "center",
                                            mr: 2,
                                            width: 20
                                        },
                                        children: item.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                                        component: "span",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                component: "span",
                                                sx: {
                                                    display: "block",
                                                    fontFamily: (theme)=>theme.typography.fontFamily,
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    lineHeight: "24px",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: item.title
                                            }),
                                            item.caption && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                component: "span",
                                                sx: {
                                                    color: "text.secondary",
                                                    display: "block",
                                                    fontFamily: (theme)=>theme.typography.fontFamily,
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    lineHeight: "18px",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: item.caption
                                            })
                                        ]
                                    })
                                ]
                            }),
                            item.children && /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                component: "ul",
                                spacing: 0.5,
                                sx: {
                                    listStyle: "none",
                                    m: 0,
                                    p: 0,
                                    pl: 20 + 16 + "px"
                                },
                                children: item.children.map((child)=>{
                                    const linkProps = child.path ? child.external ? {
                                        component: "a",
                                        href: child.path,
                                        target: "_blank"
                                    } : {
                                        component: router_link/* RouterLink */.r,
                                        href: child.path
                                    } : {};
                                    return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((ButtonBase_default()), {
                                            sx: {
                                                alignItems: "center",
                                                borderRadius: 1,
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                px: "12px",
                                                py: "6px",
                                                textAlign: "left",
                                                width: "100%",
                                                "&:hover": {
                                                    backgroundColor: "action.hover"
                                                }
                                            },
                                            ...linkProps,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                                component: "span",
                                                sx: {
                                                    color: "text.secondary",
                                                    display: "block",
                                                    fontFamily: (theme)=>theme.typography.fontFamily,
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    lineHeight: "24px",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: child.title
                                            })
                                        })
                                    }, child.title);
                                })
                            })
                        ]
                    }, item.title);
                })
            }, index);
        })
    });

// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(21598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Portal"
var Portal_ = __webpack_require__(85841);
var Portal_default = /*#__PURE__*/__webpack_require__.n(Portal_);
;// CONCATENATED MODULE: ./src/layouts/marketing/top-nav-item.tsx












const TOP_NAV_HEIGHT = 64;
const TOP_NAV_SPACE = 16;
const OFFSET = 16;
const TopNavItem = (props)=>{
    const { active, external, path, popover, title } = props;
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleMouseEnter = (0,external_react_.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleMouseLeave = (0,external_react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    // With mega-menu
    if (popover) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "li",
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%"
                    },
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
                        disableRipple: true,
                        sx: {
                            alignItems: "center",
                            borderRadius: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                            px: "16px",
                            py: "8px",
                            textAlign: "left",
                            "&:hover": {
                                backgroundColor: "action.hover"
                            },
                            ...active && {
                                color: "primary.main"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                component: "span",
                                variant: "subtitle2",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                sx: {
                                    fontSize: 16,
                                    ml: 1
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(ChevronDown/* default */.Z, {})
                            })
                        ]
                    })
                }),
                open && /*#__PURE__*/ jsx_runtime.jsx((Portal_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        sx: {
                            left: 0,
                            position: "fixed",
                            pt: OFFSET + "px",
                            right: 0,
                            top: TOP_NAV_HEIGHT + TOP_NAV_SPACE,
                            zIndex: (theme)=>theme.zIndex.appBar + 100
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((Paper_default()), {
                            elevation: 16,
                            sx: {
                                backgroundColor: (theme)=>(0,colorManipulator_.alpha)(theme.palette.background.paper, 0.9),
                                backdropFilter: "blur(6px)",
                                mx: "auto",
                                width: (theme)=>theme.breakpoints.values.md
                            },
                            children: popover
                        })
                    })
                })
            ]
        });
    }
    // Simple
    const linkProps = path ? external ? {
        component: "a",
        href: path,
        target: "_blank"
    } : {
        component: router_link/* RouterLink */.r,
        href: path
    } : {};
    return /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
        component: "li",
        sx: {
            display: "flex",
            alignItems: "center",
            height: "100%"
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((ButtonBase_default()), {
            disableRipple: true,
            sx: {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                px: "16px",
                py: "8px",
                textAlign: "left",
                "&:hover": {
                    backgroundColor: "action.hover"
                },
                ...active && {
                    color: "primary.main"
                }
            },
            ...linkProps,
            children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                component: "span",
                variant: "subtitle2",
                children: title
            })
        })
    });
};
TopNavItem.propTypes = {
    active: (external_prop_types_default()).bool,
    external: (external_prop_types_default()).bool,
    path: (external_prop_types_default()).string,
    popover: (external_prop_types_default()).any,
    title: (external_prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/marketing/top-nav.tsx





















const top_nav_items = [
    {
        title: "Components",
        path: paths/* paths */.H.components.index
    },
    {
        title: "Pages",
        popover: /*#__PURE__*/ jsx_runtime.jsx(PagesPopover, {})
    },
    {
        title: "Docs",
        path: paths/* paths */.H.docs,
        external: true
    }
];
const top_nav_TOP_NAV_HEIGHT = 64;
const TopNav = (props)=>{
    const { onMobileNavOpen } = props;
    const pathname = (0,use_pathname/* usePathname */.j)();
    const mdUp = useMediaQuery_default()((theme)=>theme.breakpoints.up("md"));
    const [elevate, setElevate] = (0,external_react_.useState)(false);
    const offset = 64;
    const delay = 100;
    const handleWindowScroll = (0,external_react_.useCallback)(()=>{
        if (window.scrollY > offset) {
            setElevate(true);
        } else {
            setElevate(false);
        }
    }, []);
    useWindowScroll({
        handler: handleWindowScroll,
        delay
    });
    return /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
        component: "header",
        sx: {
            left: 0,
            position: "fixed",
            right: 0,
            top: 0,
            pt: 2,
            zIndex: (theme)=>theme.zIndex.appBar
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
            maxWidth: "lg",
            sx: {
                backdropFilter: "blur(6px)",
                backgroundColor: "transparent",
                borderRadius: 2.5,
                boxShadow: "none",
                transition: (theme)=>theme.transitions.create("box-shadow, background-color", {
                        easing: theme.transitions.easing.easeInOut,
                        duration: 200
                    }),
                ...elevate && {
                    backgroundColor: (theme)=>(0,colorManipulator_.alpha)(theme.palette.background.paper, 0.9),
                    boxShadow: 8
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                direction: "row",
                spacing: 2,
                sx: {
                    height: top_nav_TOP_NAV_HEIGHT
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 1,
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                alignItems: "center",
                                component: router_link/* RouterLink */.r,
                                direction: "row",
                                display: "inline-flex",
                                href: paths/* paths */.H.index,
                                spacing: 1,
                                sx: {
                                    textDecoration: "none"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                        sx: {
                                            display: "inline-flex",
                                            height: 24,
                                            width: 24
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                                    }),
                                    mdUp && /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
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
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "PRO"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                                label: `v${config/* version */.i8}`,
                                size: "small"
                            })
                        ]
                    }),
                    mdUp && /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 2,
                        children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            component: "nav",
                            sx: {
                                height: "100%"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                component: "ul",
                                alignItems: "center",
                                justifyContent: "center",
                                direction: "row",
                                spacing: 1,
                                sx: {
                                    height: "100%",
                                    listStyle: "none",
                                    m: 0,
                                    p: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: top_nav_items.map((item)=>{
                                        const checkPath = !!(item.path && pathname);
                                        const partialMatch = checkPath ? pathname.includes(item.path) : false;
                                        const exactMatch = checkPath ? pathname === item.path : false;
                                        const active = item.popover ? partialMatch : exactMatch;
                                        return /*#__PURE__*/ jsx_runtime.jsx(TopNavItem, {
                                            active: active,
                                            external: item.external,
                                            path: item.path,
                                            popover: item.popover,
                                            title: item.title
                                        }, item.title);
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        justifyContent: "flex-end",
                        spacing: 2,
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                component: "a",
                                size: mdUp ? "medium" : "small",
                                href: "https://mui.com/store/items/devias-kit-pro",
                                target: "_blank",
                                variant: "contained",
                                children: "Purchase Now"
                            }),
                            !mdUp && /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                onClick: onMobileNavOpen,
                                children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    fontSize: "small",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Menu01/* default */.Z, {})
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
TopNav.propTypes = {
    onMobileNavOpen: (external_prop_types_default()).func
};

;// CONCATENATED MODULE: ./src/layouts/marketing/use-mobile-nav.ts


const useMobileNav = ()=>{
    const pathname = (0,use_pathname/* usePathname */.j)();
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handlePathnameChange = (0,external_react_.useCallback)(()=>{
        if (open) {
            setOpen(false);
        }
    }, [
        open
    ]);
    (0,external_react_.useEffect)(()=>{
        handlePathnameChange();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        pathname
    ]);
    const handleOpen = (0,external_react_.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,external_react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    return {
        handleOpen,
        handleClose,
        open
    };
};

;// CONCATENATED MODULE: ./src/layouts/marketing/layout.tsx








const LayoutRoot = (0,styles_.styled)("div")(({ theme })=>({
        backgroundColor: theme.palette.background.default,
        height: "100%"
    }));
const Layout = (props)=>{
    const { children } = props;
    const lgUp = useMediaQuery_default()((theme)=>theme.breakpoints.up("lg"));
    const mobileNav = useMobileNav();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(TopNav, {
                onMobileNavOpen: mobileNav.handleOpen
            }),
            !lgUp && /*#__PURE__*/ jsx_runtime.jsx(SideNav, {
                onClose: mobileNav.handleClose,
                open: mobileNav.open
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(LayoutRoot, {
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
                ]
            })
        ]
    });
};
Layout.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./src/layouts/marketing/index.ts



/***/ })

};
;