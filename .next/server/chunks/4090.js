"use strict";
exports.id = 4090;
exports.ids = [4090];
exports.modules = {

/***/ 6142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3025);
/* harmony import */ var src_hooks_use_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59599);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45025);






const GuestGuard = (props)=>{
    const { children } = props;
    const { isAuthenticated } = (0,src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const router = (0,src_hooks_use_router__WEBPACK_IMPORTED_MODULE_4__/* .useRouter */ .t)();
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const check = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (isAuthenticated) {
            router.replace(src_paths__WEBPACK_IMPORTED_MODULE_5__/* .paths */ .H.dashboard.index);
        } else {
            setChecked(true);
        }
    }, [
        isAuthenticated,
        router
    ]);
    // Only check on mount, this allows us to redirect the user manually when auth state changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        check();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    if (!checked) {
        return null;
    }
    // If got here, it means that the redirect did not occur, and that tells us that the user is
    // not authenticated / authorized.
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
GuestGuard.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};


/***/ }),

/***/ 83058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ IssuerGuard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(14475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(69868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__(8425);
;// CONCATENATED MODULE: ./src/components/error.tsx







const Error = (props)=>{
    const { statusCode, title } = props;
    const mdUp = useMediaQuery_default()((theme)=>theme.breakpoints.down("md"));
    const text = `${statusCode}: ${title}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(seo/* Seo */.p, {
                title: text
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                component: "main",
                sx: {
                    alignItems: "center",
                    display: "flex",
                    flexGrow: 1,
                    py: "80px"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            mb: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            align: "center",
                            variant: mdUp ? "h1" : "h4",
                            children: text
                        })
                    })
                })
            })
        ]
    });
};
Error.propTypes = {
    statusCode: (external_prop_types_default()).number.isRequired,
    title: (external_prop_types_default()).string.isRequired
};

// EXTERNAL MODULE: ./src/hooks/use-auth.ts
var use_auth = __webpack_require__(3025);
;// CONCATENATED MODULE: ./src/guards/issuer-guard.tsx




// This guard protects an auth page from being loaded when using a different issuer.
// For example, if we are using Auth0, and we try to load `/auth/firebase/login` path, this
// will render an error.
const IssuerGuard = (props)=>{
    const { children, issuer: expectedIssuer } = props;
    const { issuer } = (0,use_auth/* useAuth */.a)();
    if (expectedIssuer !== issuer) {
        return /*#__PURE__*/ jsx_runtime.jsx(Error, {
            statusCode: 400,
            title: `Issuer mismatch, currently using ${issuer}`
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: children
    });
};
IssuerGuard.propTypes = {
    children: (external_prop_types_default()).any,
    issuer: (external_prop_types_default()).any
};


/***/ }),

/***/ 3025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_contexts_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12337);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_contexts_auth_jwt__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .Vo);


/***/ }),

/***/ 59599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* reexport safe */ next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
// NOTE: We only re-export the useRouter to maintain consistency between CRA and Next.js



/***/ })

};
;