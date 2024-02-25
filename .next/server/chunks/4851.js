"use strict";
exports.id = 4851;
exports.ids = [4851];
exports.modules = {

/***/ 59401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMounted = ()=>{
    const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        isMounted.current = true;
        return ()=>{
            isMounted.current = false;
        };
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>isMounted.current, []);
};


/***/ }),

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

/***/ 59588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ AuthIssuer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45025);








const issuers = {
    Amplify: "/assets/logos/logo-amplify.svg",
    Auth0: "/assets/logos/logo-auth0.svg",
    Firebase: "/assets/logos/logo-firebase.svg",
    JWT: "/assets/logos/logo-jwt.svg"
};
const AuthIssuer = (props)=>{
    const { issuer: currentIssuer } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            borderColor: "divider",
            borderRadius: 2.5,
            borderStyle: "solid",
            borderWidth: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                variant: "body2",
                children: [
                    "Visit our",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        component: "a",
                        href: src_paths__WEBPACK_IMPORTED_MODULE_7__/* .paths */ .H.docs,
                        target: "_blank",
                        underline: "hover",
                        variant: "subtitle2",
                        children: "docs"
                    }),
                    " ",
                    "and find out how to switch between"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                alignItems: "center",
                direction: "row",
                gap: 3,
                sx: {
                    mt: 2
                },
                children: Object.keys(issuers).map((issuer)=>{
                    const isCurrent = issuer === currentIssuer;
                    const icon = issuers[issuer];
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                        title: issuer,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            component: "img",
                            src: icon,
                            sx: {
                                height: 30,
                                "&:not(:hover)": {
                                    ...!isCurrent && {
                                        filter: "grayscale(100%)"
                                    }
                                }
                            }
                        })
                    }, issuer);
                })
            })
        ]
    });
};
AuthIssuer.propTypes = {
    // @ts-ignore
    issuer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};


/***/ })

};
;