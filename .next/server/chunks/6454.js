"use strict";
exports.id = 6454;
exports.ids = [6454];
exports.modules = {

/***/ 92869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Tip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Lightbulb04__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27934);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);






const TipRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)("div")(({ theme })=>({
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.neutral[800] : theme.palette.neutral[100],
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        padding: theme.spacing(1)
    }));
const Tip = (props)=>{
    const { message } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TipRoot, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
                color: "action",
                sx: {
                    mr: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Lightbulb04__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                color: "text.secondary",
                sx: {
                    alignItems: "center",
                    display: "flex",
                    "& span": {
                        fontWeight: 700,
                        mr: 0.5
                    }
                },
                variant: "caption",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Tip."
                    }),
                    " ",
                    message
                ]
            })
        ]
    });
};
Tip.propTypes = {
    message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};


/***/ }),

/***/ 33437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ withAuthGuard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/hooks/use-auth.ts
var use_auth = __webpack_require__(3025);
// EXTERNAL MODULE: ./src/hooks/use-router.ts
var use_router = __webpack_require__(59599);
// EXTERNAL MODULE: ./src/paths.ts
var paths = __webpack_require__(45025);
// EXTERNAL MODULE: ./src/utils/auth.ts
var auth = __webpack_require__(64687);
;// CONCATENATED MODULE: ./src/guards/auth-guard.tsx







const loginPaths = {
    [auth/* Issuer */.M.Amplify]: paths/* paths */.H.auth.amplify.login,
    [auth/* Issuer */.M.Auth0]: paths/* paths */.H.auth.auth0.login,
    [auth/* Issuer */.M.Firebase]: paths/* paths */.H.auth.firebase.login,
    [auth/* Issuer */.M.JWT]: paths/* paths */.H.auth.jwt.login
};
const AuthGuard = (props)=>{
    const { children } = props;
    const router = (0,use_router/* useRouter */.t)();
    const { isAuthenticated, issuer } = (0,use_auth/* useAuth */.a)();
    const [checked, setChecked] = (0,external_react_.useState)(false);
    const check = (0,external_react_.useCallback)(()=>{
        if (!isAuthenticated) {
            const searchParams = new URLSearchParams({
                returnTo: window.location.pathname
            }).toString();
            const href = loginPaths[issuer] + `?${searchParams}`;
            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [
        isAuthenticated,
        issuer,
        router
    ]);
    // Only check on mount, this allows us to redirect the user manually when auth state changes
    (0,external_react_.useEffect)(()=>{
        check();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    if (!checked) {
        return null;
    }
    // If got here, it means that the redirect did not occur, and that tells us that the user is
    // authenticated / authorized.
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: children
    });
};
AuthGuard.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./src/hocs/with-auth-guard.tsx


const withAuthGuard = (Component)=>{
    return function WithAuthGuard(props) {
        return /*#__PURE__*/ jsx_runtime.jsx(AuthGuard, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...props
            })
        });
    };
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

/***/ 52942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDialog() {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        open: false,
        data: undefined
    });
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data)=>{
        setState({
            open: true,
            data
        });
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setState({
            open: false
        });
    }, []);
    return {
        data: state.data,
        handleClose,
        handleOpen,
        open: state.open
    };
}


/***/ }),

/***/ 21991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useMockedUser)
/* harmony export */ });
const useMockedUser = ()=>{
    // To get the user from the authContext, you can use
    // `const { user } = useAuth();`
    return {
        id: "5e86809283e28b96d2d38537",
        avatar: "/assets/avatars/avatar-anika-visser.png",
        name: "Anika Visser",
        email: "anika.visser@devias.io"
    };
};


/***/ }),

/***/ 73539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
    }, []);
    const handleToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen((prevState)=>!prevState);
    }, []);
    return {
        anchorRef,
        handleClose,
        handleOpen,
        handleToggle,
        open
    };
}


/***/ }),

/***/ 59599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* reexport safe */ next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
// NOTE: We only re-export the useRouter to maintain consistency between CRA and Next.js



/***/ }),

/***/ 15148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const AlignLeft02 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M18 20c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 18.3978 21 17.9319 21 17c0-.9319 0-1.3978-.1522-1.7654a2.0005 2.0005 0 0 0-1.0824-1.0824C19.3978 14 18.9319 14 18 14H6c-.9319 0-1.3978 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C3 15.6022 3 16.0681 3 17c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C4.6022 20 5.0681 20 6 20h12Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M14 10c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C17 8.3978 17 7.9319 17 7c0-.9319 0-1.3978-.1522-1.7654a2.0003 2.0003 0 0 0-1.0824-1.0824C15.3978 4 14.9319 4 14 4H6c-.9319 0-1.3978 0-1.7654.1522a2 2 0 0 0-1.0824 1.0824C3 5.6022 3 6.0681 3 7c0 .9319 0 1.3978.1522 1.7654a2 2 0 0 0 1.0824 1.0824C4.6022 10 5.0681 10 6 10h8Zm4 10c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 18.3978 21 17.9319 21 17c0-.9319 0-1.3978-.1522-1.7654a2.0005 2.0005 0 0 0-1.0824-1.0824C19.3978 14 18.9319 14 18 14H6c-.9319 0-1.3978 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C3 15.6022 3 16.0681 3 17c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C4.6022 20 5.0681 20 6 20h12Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignLeft02);


/***/ }),

/***/ 49442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const BarChartSquare02 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8 15v2m4-6v6m4-10v10m-8.2 4h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChartSquare02);


/***/ }),

/***/ 80378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Building04 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M18 3H6v18h12V3Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9.5 7h5m-5 4h5m-5 4h5m3.5 6V6.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C16.4802 3 15.9201 3 14.8 3H9.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C6 4.5198 6 5.08 6 6.2V21m14 0H4"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Building04);


/***/ }),

/***/ 11397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Calendar = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M3 8.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 4 6.1198 4 7.8 4h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 6.2798 21 7.1198 21 8.8V10H3V8.8Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 19.7202 21 18.8802 21 17.2V8.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 4 17.8802 4 16.2 4H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.2798 3 7.1198 3 8.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 22 6.1198 22 7.8 22Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);


/***/ }),

/***/ 47868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const CheckDone01 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M2 11.2c0-1.1201 0-1.6802.218-2.108a1.9999 1.9999 0 0 1 .874-.874C3.5198 8 4.08 8 5.2 8h7.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.988.218 2.108v7.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C14.4802 22 13.9201 22 12.8 22H5.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C2 20.4802 2 19.9201 2 18.8v-7.6Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m6 15 2 2 4.5-4.5M8 8V5.2c0-1.1201 0-1.6802.218-2.108a1.9999 1.9999 0 0 1 .874-.874C9.5198 2 10.08 2 11.2 2h7.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874C22 3.5198 22 4.08 22 5.2v7.6c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C20.4802 16 19.9201 16 18.8 16H16M5.2 22h7.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C16 20.4802 16 19.9201 16 18.8v-7.6c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C14.4802 8 13.9201 8 12.8 8H5.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C2 9.5198 2 10.08 2 11.2v7.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C3.5198 22 4.08 22 5.2 22Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckDone01);


/***/ }),

/***/ 33248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const CurrencyBitcoinCircle = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M12 22c5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9.5 7.5h4.25C14.9926 7.5 16 8.5074 16 9.75S14.9926 12 13.75 12H9.5h4.75c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H9.5m0-9H8m1.5 0v9m0 0H8M10 6v1.5m0 9V18m3-12v1.5m0 9V18m9-6c0 5.5228-4.4772 10-10 10-5.5229 0-10-4.4772-10-10C2 6.4771 6.4771 2 12 2c5.5228 0 10 4.4771 10 10Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyBitcoinCircle);


/***/ }),

/***/ 70261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const File01 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M4 6.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 2 7.1198 2 8.8 2h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 4.2798 20 5.1198 20 6.8v10.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C17.7202 22 16.8802 22 15.2 22H8.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C4 19.7202 4 18.8802 4 17.2V6.8Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 2 7.1198 2 8.8 2h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 4.2798 20 5.1198 20 6.8v10.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C17.7202 22 16.8802 22 15.2 22H8.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C4 19.7202 4 18.8802 4 17.2V6.8Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File01);


/***/ }),

/***/ 3446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const GraduationHat01 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M12.3578 3.679c-.1312-.0656-.1968-.0984-.2656-.1113a.4997.4997 0 0 0-.1844 0c-.0688.0129-.1344.0457-.2656.1113L2 8.5l9.6422 4.8212c.1312.0656.1968.0984.2656.1113a.5014.5014 0 0 0 .1844 0c.0688-.0129.1344-.0457.2656-.1113L22 8.5001 12.3578 3.679Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 10.0001v6.0111c0 .359 0 .5384.0546.6969a.9995.9995 0 0 0 .231.3736c.1173.1198.2778.2001.5989.3606l5.4 2.7c.2623.1312.3935.1968.5311.2226.1219.0228.2469.0228.3688 0 .1376-.0258.2688-.0914.5311-.2226l5.4-2.7c.3211-.1605.4816-.2408.5989-.3606a.999.999 0 0 0 .2309-.3736C19 16.5496 19 16.3702 19 16.0112v-6.0111m-17-1.5 9.6422-4.8211c.1312-.0656.1968-.0984.2656-.1113a.4997.4997 0 0 1 .1844 0c.0688.0129.1344.0457.2656.1113L22 8.5l-9.6422 4.8212c-.1312.0656-.1968.0984-.2656.1113a.5014.5014 0 0 1-.1844 0c-.0688-.0129-.1344-.0457-.2656-.1113L2 8.5001Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GraduationHat01);


/***/ }),

/***/ 67550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const LineChartUp04 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V9l-6.4485 4.6061c-.196.1399-.2939.2099-.3988.231a.4996.4996 0 0 1-.2765-.0229c-.1-.038-.1852-.1232-.3554-.2934l-3.0416-3.0416c-.1702-.1702-.2554-.2554-.3554-.2934a.4996.4996 0 0 0-.2765-.0229c-.1049.0211-.2028.0911-.3988.231L3 15v1.2c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m21 9-6.4485 4.6061c-.196.1399-.2939.2099-.3988.231a.4996.4996 0 0 1-.2765-.0229c-.1-.038-.1852-.1232-.3554-.2934l-3.0416-3.0416c-.1702-.1702-.2554-.2554-.3554-.2934a.4996.4996 0 0 0-.2765-.0229c-.1049.0211-.2028.0911-.3988.231L3 15m4.8 6h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartUp04);


/***/ }),

/***/ 41232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Lock01 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M4 14.8c0-1.6802 0-2.5202.327-3.162a2.9997 2.9997 0 0 1 1.311-1.311C6.2798 10 7.1198 10 8.8 10h6.4c1.6802 0 2.5202 0 3.162.327a2.9994 2.9994 0 0 1 1.311 1.311C20 12.2798 20 13.1198 20 14.8v1.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C17.7202 21 16.8802 21 15.2 21H8.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C4 18.7202 4 17.8802 4 16.2v-1.4Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M17 10V8c0-2.7614-2.2386-5-5-5S7 5.2386 7 8v2m5 4.5v2M8.8 21h6.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C20 18.7202 20 17.8802 20 16.2v-1.4c0-1.6802 0-2.5202-.327-3.162a2.9994 2.9994 0 0 0-1.311-1.311C17.7202 10 16.8802 10 15.2 10H8.8c-1.6802 0-2.5202 0-3.162.327a2.9997 2.9997 0 0 0-1.311 1.311C4 12.2798 4 13.1198 4 14.8v1.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C6.2798 21 7.1198 21 8.8 21Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lock01);


/***/ }),

/***/ 43492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Mail03 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M8.9689 11c-.3601 0-.5402 0-.7143-.031a2.0028 2.0028 0 0 1-.4492-.136c-.162-.0708-.312-.1707-.6116-.3704L2 7c0-1.6569 1.3432-3 3-3h14c1.6569 0 3 1.3431 3 3l-5.1938 3.4626c-.2997.1997-.4495.2996-.6116.3704a2.0027 2.0027 0 0 1-.4492.136c-.1741.031-.3542.031-.7143.031H8.9689Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m2 7 5.1938 3.4626c.2997.1997.4495.2996.6116.3704.1439.0628.2946.1084.4492.136.174.031.3542.031.7143.031h6.0622c.3601 0 .5402 0 .7143-.031a2.0027 2.0027 0 0 0 .4492-.136c.1621-.0708.3119-.1707.6116-.3704L22 7M6.8 20h10.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C22 17.7202 22 16.8802 22 15.2V8.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C19.7202 4 18.8802 4 17.2 4H6.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.2798 2 7.1198 2 8.8v6.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C4.2798 20 5.1198 20 6.8 20Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mail03);


/***/ }),

/***/ 84496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const MessageChatSquare = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M22 14.2c0-1.1201 0-1.6802-.218-2.108a1.9996 1.9996 0 0 0-.874-.874C20.4802 11 19.9201 11 18.8 11h-5.6c-1.1201 0-1.6802 0-2.108.218a1.9996 1.9996 0 0 0-.874.874C10 12.5198 10 13.0799 10 14.2v2.5143c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218h1.7969c.3726 0 .5589 0 .7387.0331.1595.0294.3148.0781.4626.145.1665.0754.3195.1818.6254.3945L19 22v-2.0857c.9319 0 1.3978 0 1.7654-.1523a2 2 0 0 0 1.0824-1.0823C22 18.3121 22 17.8462 22 16.9143V14.2Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m10 15-3.0753 3.1137c-.429.4343-.6434.6515-.8277.6668a.4998.4998 0 0 1-.421-.1729c-.1204-.1404-.1204-.4456-.1204-1.0561v-1.5599c0-.5476-.4485-.9439-.9904-1.0233v0a3 3 0 0 1-2.5335-2.5335C2 12.2186 2 11.9605 2 11.4444V6.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C4.2798 2 5.1198 2 6.8 2h7.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C19 4.2798 19 5.1198 19 6.8V11m0 11-2.1764-1.5131c-.3059-.2127-.4589-.3191-.6254-.3945a2.0017 2.0017 0 0 0-.4626-.145c-.1798-.0331-.3661-.0331-.7387-.0331H13.2c-1.1201 0-1.6802 0-2.108-.218a1.9996 1.9996 0 0 1-.874-.874C10 18.3944 10 17.8344 10 16.7143V14.2c0-1.1201 0-1.6802.218-2.108a1.9996 1.9996 0 0 1 .874-.874C11.5198 11 12.0799 11 13.2 11h5.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.9879.218 2.108v2.7143c0 .9319 0 1.3978-.1522 1.7654a2 2 0 0 1-1.0824 1.0823c-.3676.1523-.8335.1523-1.7654.1523V22Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageChatSquare);


/***/ }),

/***/ 63708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const ReceiptCheck = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M4 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 3 7.1198 3 8.8 3h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 5.2798 20 6.1198 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21V7.8Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m9 10.5 2 2L15.5 8M20 21V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C17.7202 3 16.8802 3 15.2 3H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.2798 4 6.1198 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2L20 21Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptCheck);


/***/ }),

/***/ 75664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Share07 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M18 8c1.6569 0 3-1.3431 3-3 0-1.6568-1.3431-3-3-3s-3 1.3432-3 3c0 1.6569 1.3431 3 3 3ZM6 15c1.6569 0 3-1.3431 3-3S7.6569 9 6 9s-3 1.3431-3 3 1.3431 3 3 3Zm12 7c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98M21 5c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3c0-1.6568 1.3431-3 3-3s3 1.3432 3 3ZM9 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Zm12 7c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share07);


/***/ }),

/***/ 90044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const ShoppingBag03 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M16.283 21c1.8107 0 2.7161 0 3.3844-.3618a2.9996 2.9996 0 0 0 1.3195-1.434c.305-.696.2298-1.5983.0795-3.4028l-.7-8.4c-.1294-1.5526-.1941-2.329-.5379-2.9165a3.0005 3.0005 0 0 0-1.2944-1.191C17.92 3 17.141 3 15.583 3H8.4162c-1.558 0-2.337 0-2.9511.2938a3 3 0 0 0-1.2944 1.191c-.3438.5876-.4085 1.364-.5379 2.9166l-.7 8.4c-.1504 1.8045-.2256 2.7068.0795 3.4028a2.9998 2.9998 0 0 0 1.3195 1.434C5 21 5.9054 21 7.7162 21h8.5668Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15.9996 8a3.9996 3.9996 0 0 1-1.1716 2.8284 3.9996 3.9996 0 0 1-5.6568 0A3.9999 3.9999 0 0 1 7.9996 8m-4.3668-.5986-.7 8.4c-.1504 1.8045-.2256 2.7068.0795 3.4028a2.9998 2.9998 0 0 0 1.3195 1.434C5 21 5.9054 21 7.7162 21h8.5668c1.8107 0 2.7161 0 3.3844-.3618a2.9996 2.9996 0 0 0 1.3195-1.434c.305-.696.2298-1.5983.0795-3.4028l-.7-8.4c-.1294-1.5526-.1941-2.329-.5379-2.9165a3.0005 3.0005 0 0 0-1.2944-1.191C17.92 3 17.141 3 15.583 3H8.4162c-1.558 0-2.337 0-2.9511.2938a3 3 0 0 0-1.2944 1.191c-.3438.5876-.4085 1.364-.5379 2.9166Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingBag03);


/***/ }),

/***/ 21658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const ShoppingCart01 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M17.3519 16.5h-8.558c-.9901 0-1.4852 0-1.8827-.1826a2.0005 2.0005 0 0 1-.8532-.7451c-.2346-.3692-.3013-.8598-.4348-1.8409L4.5712 6h16.4619c.3317 0 .4976 0 .6143.068a.5.5 0 0 1 .2197.2655c.045.1274.0139.2903-.0481.6162l-1.3237 6.9491c-.1763.9259-.2645 1.3888-.5032 1.7354a1.9996 1.9996 0 0 1-.8413.6962c-.3851.1696-.8564.1696-1.7989.1696Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M2 2h1.3062c.246 0 .369 0 .468.0452a.5.5 0 0 1 .213.1848c.0587.0915.0761.2133.111.4569L4.5713 6m0 0 1.052 7.7314c.1334.9811.2001 1.4717.4347 1.8409.2067.3254.503.5841.8533.7451.3975.1826.8925.1826 1.8827.1826h8.5579c.9425 0 1.4138 0 1.799-.1696a2.0009 2.0009 0 0 0 .8413-.6962c.2386-.3466.3268-.8095.5032-1.7354l1.3236-6.9491c.0621-.3259.0931-.4888.0481-.6162a.4996.4996 0 0 0-.2197-.2655C21.5308 6 21.365 6 21.0332 6H4.5714ZM10 21c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Zm8 0c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCart01);


/***/ }),

/***/ 2084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Truck01 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M5.2 4h5.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874C14 5.5198 14 6.08 14 7.2V17h-4c0-1.6569-1.3431-3-3-3-1.6505 0-2.9896 1.3328-3 2.9808-.3922-.0239-.6705-.0778-.908-.1988a1.9997 1.9997 0 0 1-.874-.874C2 15.4802 2 14.9201 2 13.8V7.2c0-1.1201 0-1.6802.218-2.108a1.9999 1.9999 0 0 1 .874-.874C3.5198 4 4.08 4 5.2 4Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M14 7h2.3373c.2445 0 .3668 0 .4819.0276a1 1 0 0 1 .2891.1198c.1009.0618.1874.1483.3603.3212l4.0628 4.0628c.1729.1729.2594.2594.3212.3603a.9981.9981 0 0 1 .1198.2891c.0276.1151.0276.2374.0276.4819V15.5c0 .4659 0 .6989-.0761.8827a1.0002 1.0002 0 0 1-.5412.5412C21.1989 17 20.9659 17 20.5 17m-5 0H14m0 0V7.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C12.4802 4 11.9201 4 10.8 4H5.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C2 5.5198 2 6.08 2 7.2V15c0 1.1046.8954 2 2 2m10 0h-4m0 0c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3m6 0c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3m16.5.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5S16.6193 15 18 15s2.5 1.1193 2.5 2.5Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Truck01);


/***/ }),

/***/ 6281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Upload04 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M12 22c5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m16 12-4-4m0 0-4 4m4-4v9.2c0 1.3907 0 2.0861.5505 2.8646.3658.5173 1.4189 1.1557 2.0467 1.2408.9449.128 1.3037-.0592 2.0214-.4335C19.8167 19.2036 22 15.8568 22 12c0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 3.7014 2.011 6.9331 5 8.6622"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload04);


/***/ }),

/***/ 85541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Users03 = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M9.4998 12c2.4853 0 4.5-2.0147 4.5-4.5S11.9851 3 9.4998 3s-4.5 2.0147-4.5 4.5 2.0148 4.5 4.5 4.5Zm0 3c-2.8306 0-5.3464 1.5446-6.9407 3.9383-.3493.5245-.524.7867-.5038 1.1216.0156.2608.1866.5801.395.7377C2.7179 21 3.086 21 3.8222 21h11.3553c.7362 0 1.1043 0 1.3719-.2024.2084-.1576.3793-.4769.395-.7377.0201-.3349-.1545-.5971-.5038-1.1216C14.8463 16.5446 12.3305 15 9.4998 15Z",
                opacity: 0.12
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M17.9998 15.8369c1.4559.7314 2.7042 1.9051 3.6153 3.3727.1804.2907.2706.436.3018.6372.0634.409-.2163.9117-.5971 1.0736-.1875.0796-.3983.0796-.82.0796m-4.5-9.4678c1.4818-.7363 2.5-2.2653 2.5-4.0322 0-1.7669-1.0182-3.2959-2.5-4.0322m-2 4.0322c0 2.4853-2.0147 4.5-4.5 4.5s-4.5-2.0147-4.5-4.5S7.0146 3 9.4998 3c2.4853 0 4.5 2.0147 4.5 4.5ZM2.5591 18.9383C4.1534 16.5446 6.6692 15 9.4998 15c2.8307 0 5.3465 1.5446 6.9408 3.9383.3493.5245.5239.7867.5038 1.1216-.0157.2608-.1866.5801-.395.7377C16.2818 21 15.9137 21 15.1775 21H3.8222c-.7362 0-1.1043 0-1.372-.2024-.2083-.1576-.3793-.4769-.395-.7377-.02-.3349.1546-.5971.5039-1.1216Z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users03);


/***/ }),

/***/ 2259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ AccountButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _untitled_ui_icons_react_build_esm_User01__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92736);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92494);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_hooks_use_mocked_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21991);
/* harmony import */ var src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73539);
/* harmony import */ var _account_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_account_popover__WEBPACK_IMPORTED_MODULE_7__]);
_account_popover__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const AccountButton = ()=>{
    const user = (0,src_hooks_use_mocked_user__WEBPACK_IMPORTED_MODULE_8__/* .useMockedUser */ .I)();
    const popover = (0,src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_6__/* .usePopover */ .S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                component: (_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default()),
                onClick: popover.handleOpen,
                ref: popover.anchorRef,
                sx: {
                    alignItems: "center",
                    display: "flex",
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "divider",
                    height: 40,
                    width: 40,
                    borderRadius: "50%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                    sx: {
                        height: 32,
                        width: 32
                    },
                    src: user.avatar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_User01__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_popover__WEBPACK_IMPORTED_MODULE_7__/* .AccountPopover */ .x, {
                anchorEl: popover.anchorRef.current,
                onClose: popover.handleClose,
                open: popover.open
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54295:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ AccountPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86201);
/* harmony import */ var _untitled_ui_icons_react_build_esm_CreditCard01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70105);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Settings04__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89045);
/* harmony import */ var _untitled_ui_icons_react_build_esm_User03__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14153);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65768);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_components_router_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83172);
/* harmony import */ var src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3025);
/* harmony import */ var src_hooks_use_mocked_user__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(21991);
/* harmony import */ var src_hooks_use_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(59599);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45025);
/* harmony import */ var src_utils_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






















const AccountPopover = (props)=>{
    const { anchorEl, onClose, open, ...other } = props;
    const router = (0,src_hooks_use_router__WEBPACK_IMPORTED_MODULE_18__/* .useRouter */ .t)();
    const auth = (0,src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_17__/* .useAuth */ .a)();
    const user = (0,src_hooks_use_mocked_user__WEBPACK_IMPORTED_MODULE_21__/* .useMockedUser */ .I)();
    const handleLogout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            onClose?.();
            switch(auth.issuer){
                case src_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* .Issuer */ .M.Amplify:
                    {
                        await auth.signOut();
                        break;
                    }
                case src_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* .Issuer */ .M.Auth0:
                    {
                        await auth.logout();
                        break;
                    }
                case src_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* .Issuer */ .M.Firebase:
                    {
                        await auth.signOut();
                        break;
                    }
                case src_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* .Issuer */ .M.JWT:
                    {
                        await auth.signOut();
                        break;
                    }
                default:
                    {
                        console.warn("Using an unknown Auth Issuer, did not log out");
                    }
            }
            router.push(src_paths__WEBPACK_IMPORTED_MODULE_19__/* .paths */ .H.index);
        } catch (err) {
            console.error(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Something went wrong!");
        }
    }, [
        auth,
        router,
        onClose
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Popover__WEBPACK_IMPORTED_MODULE_13___default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "center",
            vertical: "bottom"
        },
        disableScrollLock: true,
        onClose: onClose,
        open: !!open,
        PaperProps: {
            sx: {
                width: 200
            }
        },
        ...other,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                sx: {
                    p: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                        variant: "body1",
                        children: user.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                        color: "text.secondary",
                        variant: "body2",
                        children: "demo@devias.io"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                sx: {
                    p: 1
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        component: src_components_router_link__WEBPACK_IMPORTED_MODULE_16__/* .RouterLink */ .r,
                        href: src_paths__WEBPACK_IMPORTED_MODULE_19__/* .paths */ .H.dashboard.social.profile,
                        onClick: onClose,
                        sx: {
                            borderRadius: 1,
                            px: 1,
                            py: 0.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    fontSize: "small",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_User03__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default()), {
                                primary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    variant: "body1",
                                    children: "Profile"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        component: src_components_router_link__WEBPACK_IMPORTED_MODULE_16__/* .RouterLink */ .r,
                        href: src_paths__WEBPACK_IMPORTED_MODULE_19__/* .paths */ .H.dashboard.account,
                        onClick: onClose,
                        sx: {
                            borderRadius: 1,
                            px: 1,
                            py: 0.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    fontSize: "small",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Settings04__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default()), {
                                primary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    variant: "body1",
                                    children: "Settings"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        component: src_components_router_link__WEBPACK_IMPORTED_MODULE_16__/* .RouterLink */ .r,
                        href: src_paths__WEBPACK_IMPORTED_MODULE_19__/* .paths */ .H.dashboard.index,
                        onClick: onClose,
                        sx: {
                            borderRadius: 1,
                            px: 1,
                            py: 0.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    fontSize: "small",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_CreditCard01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default()), {
                                primary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    variant: "body1",
                                    children: "Billing"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {
                sx: {
                    my: "0 !important"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                sx: {
                    display: "flex",
                    p: 1,
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                    color: "inherit",
                    onClick: handleLogout,
                    size: "small",
                    children: "Logout"
                })
            })
        ]
    });
};
AccountPopover.propTypes = {
    anchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* reexport safe */ _account_button__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _account_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_account_button__WEBPACK_IMPORTED_MODULE_0__]);
_account_button__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useSections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58369);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_icons_untitled_ui_duocolor_align_left_02__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15148);
/* harmony import */ var src_icons_untitled_ui_duocolor_bar_chart_square_02__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49442);
/* harmony import */ var src_icons_untitled_ui_duocolor_building_04__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80378);
/* harmony import */ var src_icons_untitled_ui_duocolor_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11397);
/* harmony import */ var src_icons_untitled_ui_duocolor_check_done_01__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47868);
/* harmony import */ var src_icons_untitled_ui_duocolor_credit_card_01__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60075);
/* harmony import */ var src_icons_untitled_ui_duocolor_currency_bitcoin_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33248);
/* harmony import */ var src_icons_untitled_ui_duocolor_file_01__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70261);
/* harmony import */ var src_icons_untitled_ui_duocolor_graduation_hat_01__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3446);
/* harmony import */ var src_icons_untitled_ui_duocolor_home_smile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54077);
/* harmony import */ var src_icons_untitled_ui_duocolor_layout_alt_02__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53806);
/* harmony import */ var src_icons_untitled_ui_duocolor_line_chart_up_04__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67550);
/* harmony import */ var src_icons_untitled_ui_duocolor_lock_01__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41232);
/* harmony import */ var src_icons_untitled_ui_duocolor_log_out_01__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23947);
/* harmony import */ var src_icons_untitled_ui_duocolor_mail_03__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(43492);
/* harmony import */ var src_icons_untitled_ui_duocolor_mail_04__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88877);
/* harmony import */ var src_icons_untitled_ui_duocolor_message_chat_square__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84496);
/* harmony import */ var src_icons_untitled_ui_duocolor_receipt_check__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63708);
/* harmony import */ var src_icons_untitled_ui_duocolor_share_07__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(75664);
/* harmony import */ var src_icons_untitled_ui_duocolor_shopping_bag_03__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90044);
/* harmony import */ var src_icons_untitled_ui_duocolor_shopping_cart_01__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(21658);
/* harmony import */ var src_icons_untitled_ui_duocolor_truck_01__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2084);
/* harmony import */ var src_icons_untitled_ui_duocolor_upload_04__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6281);
/* harmony import */ var src_icons_untitled_ui_duocolor_users_03__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(85541);
/* harmony import */ var src_icons_untitled_ui_duocolor_x_square__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(57080);
/* harmony import */ var src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(23163);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(45025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
































const useSections = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            {
                items: [
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.overview),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_home_smile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.analytics),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.analytics,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_bar_chart_square_02__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.ecommerce),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.ecommerce,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_line_chart_up_04__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.crypto),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.crypto,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_currency_bitcoin_circle__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                        }),
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_3___default()), {
                            color: "primary",
                            label: "New",
                            size: "small"
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.account),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.account,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_home_smile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                        })
                    }
                ]
            },
            {
                subheader: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.concepts),
                items: [
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.customers),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.customers.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_users_03__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.list),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.customers.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.details),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.customers.details
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.edit),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.customers.edit
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.productList),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.products.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_shopping_bag_03__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.list),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.products.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.create),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.products.create
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.orderList),
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_shopping_cart_01__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})
                        }),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.orders.index,
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.list),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.orders.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.details),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.orders.details
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.invoiceList),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.invoices.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_receipt_check__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.list),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.invoices.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.details),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.invoices.details
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.logistics),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.logistics.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_truck_01__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.dashboard),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.logistics.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.fleet),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.logistics.fleet
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.academy),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.academy.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_graduation_hat_01__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.dashboard),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.academy.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.course),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.academy.courseDetails
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.jobList),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.jobs.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_building_04__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.browse),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.jobs.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.details),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.jobs.companies.details
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.create),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.jobs.create
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.socialMedia),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.social.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_share_07__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.profile),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.social.profile
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.feed),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.social.feed
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.blog),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.blog.index,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_layout_alt_02__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.postList),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.blog.index
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.postDetails),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.blog.postDetails
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.postCreate),
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.blog.postCreate
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.fileManager),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.fileManager,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_upload_04__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.kanban),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.kanban,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_check_done_01__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.mail),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.mail,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_mail_03__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.chat),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.chat,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_message_chat_square__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.calendar),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.calendar,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_calendar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        })
                    }
                ]
            },
            {
                subheader: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.pages),
                items: [
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.auth),
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_lock_01__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.login),
                                items: [
                                    {
                                        title: "Classic",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.login.classic
                                    },
                                    {
                                        title: "Modern",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.login.modern
                                    }
                                ]
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.register),
                                items: [
                                    {
                                        title: "Classic",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.register.classic
                                    },
                                    {
                                        title: "Modern",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.register.modern
                                    }
                                ]
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.forgotPassword),
                                items: [
                                    {
                                        title: "Classic",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.forgotPassword.classic
                                    },
                                    {
                                        title: "Modern",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.forgotPassword.modern
                                    }
                                ]
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.resetPassword),
                                items: [
                                    {
                                        title: "Classic",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.resetPassword.classic
                                    },
                                    {
                                        title: "Modern",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.resetPassword.modern
                                    }
                                ]
                            },
                            {
                                title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.verifyCode),
                                items: [
                                    {
                                        title: "Classic",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.verifyCode.classic
                                    },
                                    {
                                        title: "Modern",
                                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.authDemo.verifyCode.modern
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.pricing),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.pricing,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_credit_card_01__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.checkout),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.checkout,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_log_out_01__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.contact),
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.contact,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_mail_04__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_30__/* .tokens */ .T.nav.error),
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_x_square__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: "401",
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.notAuthorized
                            },
                            {
                                title: "404",
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.notFound
                            },
                            {
                                title: "500",
                                path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.serverError
                            }
                        ]
                    }
                ]
            },
            {
                subheader: "Misc",
                items: [
                    {
                        title: "Level 0",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_align_left_02__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        }),
                        items: [
                            {
                                title: "Level 1a",
                                items: [
                                    {
                                        title: "Level 2a",
                                        items: [
                                            {
                                                title: "Level 3a"
                                            },
                                            {
                                                title: "Level 3b",
                                                disabled: true
                                            }
                                        ]
                                    },
                                    {
                                        title: "Level 2b"
                                    }
                                ]
                            },
                            {
                                title: "Level 1b"
                            }
                        ]
                    },
                    {
                        title: "Disabled",
                        disabled: true,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_x_square__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: "Label",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_file_01__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        }),
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_3___default()), {
                            color: "primary",
                            label: "New",
                            size: "small"
                        })
                    },
                    {
                        title: "Blank",
                        path: src_paths__WEBPACK_IMPORTED_MODULE_31__/* .paths */ .H.dashboard.blank,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_file_01__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        })
                    },
                    {
                        title: "External Link",
                        path: "https://devias.io",
                        external: true,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_icons_untitled_ui_duocolor_file_01__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        })
                    }
                ]
            }
        ];
    }, [
        t
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* reexport */ ContactsButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "date-fns/subHours"
var subHours_ = __webpack_require__(97863);
var subHours_default = /*#__PURE__*/__webpack_require__.n(subHours_);
// EXTERNAL MODULE: external "date-fns/subMinutes"
var subMinutes_ = __webpack_require__(54548);
var subMinutes_default = /*#__PURE__*/__webpack_require__.n(subMinutes_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Users03.js
var Users03 = __webpack_require__(26495);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(27229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/hooks/use-popover.ts
var use_popover = __webpack_require__(73539);
// EXTERNAL MODULE: external "date-fns/formatDistanceStrict"
var formatDistanceStrict_ = __webpack_require__(59447);
var formatDistanceStrict_default = /*#__PURE__*/__webpack_require__.n(formatDistanceStrict_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(52120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(85246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(94192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemAvatar"
var ListItemAvatar_ = __webpack_require__(82101);
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(78315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(65768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/components/presence.tsx
var presence = __webpack_require__(57425);
// EXTERNAL MODULE: ./src/utils/date-locale.ts
var date_locale = __webpack_require__(13328);
;// CONCATENATED MODULE: ./src/layouts/dashboard/contacts-button/contacts-popover.tsx














const ContactsPopover = (props)=>{
    const { anchorEl, contacts = [], onClose, open = false, ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Popover_default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "center",
            vertical: "bottom"
        },
        disableScrollLock: true,
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                width: 320
            }
        },
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    p: 2
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    variant: "h6",
                    children: "Contacts"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    p: 2
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((List_default()), {
                    disablePadding: true,
                    children: contacts.map((contact)=>{
                        const showOnline = contact.isActive;
                        const lastActivity = !contact.isActive && contact.lastActivity ? formatDistanceStrict_default()(contact.lastActivity, new Date(), {
                            addSuffix: true,
                            locale: date_locale/* customLocale */.Z
                        }) : undefined;
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItem_default()), {
                            disableGutters: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemAvatar_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                        src: contact.avatar,
                                        sx: {
                                            cursor: "pointer"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    disableTypography: true,
                                    primary: /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                                        color: "text.primary",
                                        noWrap: true,
                                        sx: {
                                            cursor: "pointer"
                                        },
                                        underline: "none",
                                        variant: "subtitle2",
                                        children: contact.name
                                    })
                                }),
                                showOnline && /*#__PURE__*/ jsx_runtime.jsx(presence/* Presence */.z, {
                                    size: "small",
                                    status: "online"
                                }),
                                lastActivity && /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    color: "text.secondary",
                                    noWrap: true,
                                    variant: "caption",
                                    children: lastActivity
                                })
                            ]
                        }, contact.id);
                    })
                })
            })
        ]
    });
};
ContactsPopover.propTypes = {
    anchorEl: (external_prop_types_default()).any,
    contacts: (external_prop_types_default()).array,
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/contacts-button/contacts-button.tsx









const now = new Date();
const useContacts = ()=>{
    return [
        {
            id: "5e8891ab188cd2855e6029b7",
            avatar: "/assets/avatars/avatar-alcides-antonio.png",
            isActive: true,
            lastActivity: now.getTime(),
            name: "Alcides Antonio"
        },
        {
            id: "5e887a62195cc5aef7e8ca5d",
            avatar: "/assets/avatars/avatar-marcus-finn.png",
            isActive: false,
            lastActivity: subHours_default()(now, 2).getTime(),
            name: "Marcus Finn"
        },
        {
            id: "5e887ac47eed253091be10cb",
            avatar: "/assets/avatars/avatar-carson-darrin.png",
            isActive: false,
            lastActivity: subMinutes_default()(now, 15).getTime(),
            name: "Carson Darrin"
        },
        {
            id: "5e887b209c28ac3dd97f6db5",
            avatar: "/assets/avatars/avatar-fran-perez.png",
            isActive: true,
            lastActivity: now.getTime(),
            name: "Fran Perez"
        },
        {
            id: "5e887b7602bdbc4dbb234b27",
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            isActive: true,
            lastActivity: now.getTime(),
            name: "Jie Yan Song"
        }
    ];
};
const ContactsButton = ()=>{
    const popover = (0,use_popover/* usePopover */.S)();
    const contacts = useContacts();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                title: "Contacts",
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    onClick: popover.handleOpen,
                    ref: popover.anchorRef,
                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                        children: /*#__PURE__*/ jsx_runtime.jsx(Users03/* default */.Z, {})
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ContactsPopover, {
                anchorEl: popover.anchorRef.current,
                contacts: contacts,
                onClose: popover.handleClose,
                open: popover.open
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/contacts-button/index.ts



/***/ }),

/***/ 73125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ HorizontalLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19131);
/* harmony import */ var _top_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26127);
/* harmony import */ var _use_mobile_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42183);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_top_nav__WEBPACK_IMPORTED_MODULE_5__]);
_top_nav__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const HorizontalLayoutRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%"
});
const HorizontalLayoutContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")({
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%"
});
const HorizontalLayout = (props)=>{
    const { children, navColor, sections } = props;
    const lgUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()((theme)=>theme.breakpoints.up("lg"));
    const mobileNav = (0,_use_mobile_nav__WEBPACK_IMPORTED_MODULE_6__/* .useMobileNav */ .O)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_top_nav__WEBPACK_IMPORTED_MODULE_5__/* .TopNav */ .t, {
                color: navColor,
                onMobileNav: mobileNav.handleOpen,
                sections: sections
            }),
            !lgUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_nav__WEBPACK_IMPORTED_MODULE_4__/* .MobileNav */ .z, {
                color: navColor,
                onClose: mobileNav.handleClose,
                open: mobileNav.open,
                sections: sections
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HorizontalLayoutRoot, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HorizontalLayoutContainer, {
                    children: children
                })
            })
        ]
    });
};
HorizontalLayout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    navColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "blend-in",
        "discrete",
        "evident"
    ]),
    sections: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* reexport safe */ _horizontal_layout__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _horizontal_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_horizontal_layout__WEBPACK_IMPORTED_MODULE_0__]);
_horizontal_layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ TopNavSection)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronDown.js
var ChevronDown = __webpack_require__(94207);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronRight.js
var ChevronRight = __webpack_require__(27264);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(92494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(31011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(78315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/dropdown/dropdown-context.tsx

const noop = (...args)=>{};
const DropdownContext = /*#__PURE__*/ (0,external_react_.createContext)({
    anchorEl: null,
    onMenuEnter: noop,
    onMenuLeave: noop,
    onTriggerEnter: noop,
    onTriggerLeave: noop,
    open: false
});

;// CONCATENATED MODULE: ./src/components/dropdown/dropdown.tsx




const Dropdown = (props)=>{
    const { children, delay = 50 } = props;
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    const cleanupRef = (0,external_react_.useRef)(null);
    const handleTriggerEnter = (0,external_react_.useCallback)((event)=>{
        clearTimeout(cleanupRef.current);
        setAnchorEl(event.currentTarget);
    }, []);
    const handleTriggerLeave = (0,external_react_.useCallback)((_)=>{
        cleanupRef.current = setTimeout(()=>{
            setAnchorEl(null);
        }, delay);
    }, [
        delay
    ]);
    const handleMenuEnter = (0,external_react_.useCallback)((_)=>{
        clearTimeout(cleanupRef.current);
    }, []);
    const handleMenuLeave = (0,external_react_.useCallback)((_)=>{
        cleanupRef.current = setTimeout(()=>{
            setAnchorEl(null);
        }, delay);
    }, [
        delay
    ]);
    const open = !!anchorEl;
    return /*#__PURE__*/ jsx_runtime.jsx(DropdownContext.Provider, {
        value: {
            anchorEl,
            onMenuEnter: handleMenuEnter,
            onMenuLeave: handleMenuLeave,
            onTriggerEnter: handleTriggerEnter,
            onTriggerLeave: handleTriggerLeave,
            open
        },
        children: children
    });
};
Dropdown.propTypes = {
    children: external_prop_types_default().arrayOf((external_prop_types_default()).any).isRequired,
    delay: (external_prop_types_default()).number
};

;// CONCATENATED MODULE: ./src/components/dropdown/dropdown-trigger.tsx



const DropdownTrigger = (props)=>{
    const { children } = props;
    const { onTriggerEnter, onTriggerLeave } = (0,external_react_.useContext)(DropdownContext);
    return /*#__PURE__*/ (0,external_react_.cloneElement)(children, {
        onMouseEnter: (event)=>{
            children.props.onMouseEnter?.(event);
            onTriggerEnter(event);
        },
        onMouseLeave: (event)=>{
            children.props.onMouseLeave?.(event);
            onTriggerLeave(event);
        }
    });
};
DropdownTrigger.propTypes = {
    children: (external_prop_types_default()).element.isRequired
};

// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(65768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
;// CONCATENATED MODULE: ./src/components/dropdown/dropdown-menu.tsx





const DropdownMenu = (props)=>{
    const { anchorEl, children, PaperProps, ...other } = props;
    const ctx = (0,external_react_.useContext)(DropdownContext);
    return /*#__PURE__*/ jsx_runtime.jsx((Popover_default()), {
        anchorEl: anchorEl || ctx.anchorEl,
        anchorOrigin: {
            horizontal: "left",
            vertical: "bottom"
        },
        open: ctx.open,
        PaperProps: {
            ...PaperProps,
            onMouseEnter: ctx.onMenuEnter,
            onMouseLeave: ctx.onMenuLeave,
            sx: {
                ...PaperProps?.sx,
                pointerEvents: "auto"
            }
        },
        sx: {
            pointerEvents: "none"
        },
        transformOrigin: {
            horizontal: "left",
            vertical: "top"
        },
        ...other,
        children: children
    });
};
DropdownMenu.propTypes = {
    anchorEl: (external_prop_types_default()).any,
    // @ts-ignore
    anchorOrigin: (external_prop_types_default()).object,
    children: (external_prop_types_default()).any,
    disableScrollLock: (external_prop_types_default()).bool,
    PaperProps: (external_prop_types_default()).object,
    // @ts-ignore
    transformOrigin: (external_prop_types_default()).object
};

;// CONCATENATED MODULE: ./src/components/dropdown/index.ts




// EXTERNAL MODULE: ./src/components/router-link.tsx
var router_link = __webpack_require__(83172);
;// CONCATENATED MODULE: ./src/layouts/dashboard/horizontal-layout/top-nav-item.tsx











const renderChildItems = ({ items, depth = 0 })=>{
    return items.map((item)=>{
        // Branch
        if (item.items) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dropdown, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(DropdownTrigger, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ListItemButton_default()), {
                            disabled: item.disabled,
                            sx: {
                                borderRadius: 1,
                                px: 1.5,
                                py: 0.5
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                                    primary: item.title,
                                    primaryTypographyProps: {
                                        sx: {
                                            color: "text.secondary",
                                            fontSize: 14,
                                            fontWeight: 500
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    fontSize: "small",
                                    sx: {
                                        color: "neutral.400"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx(ChevronRight/* default */.Z, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(DropdownMenu, {
                        anchorOrigin: {
                            horizontal: "right",
                            vertical: "top"
                        },
                        disableScrollLock: true,
                        PaperProps: {
                            elevation: 8,
                            sx: {
                                maxWidth: "100%",
                                ml: 1,
                                p: 1,
                                width: 200
                            }
                        },
                        transformOrigin: {
                            horizontal: "left",
                            vertical: "top"
                        },
                        children: renderChildItems({
                            items: item.items,
                            depth: depth + 1
                        })
                    })
                ]
            }, item.title);
        }
        const linkProps = item.path ? item.external ? {
            component: "a",
            href: item.path,
            target: "_blank"
        } : {
            component: router_link/* RouterLink */.r,
            href: item.path
        } : {};
        // Leaf
        return /*#__PURE__*/ jsx_runtime.jsx((ListItemButton_default()), {
            disabled: item.disabled,
            sx: {
                borderRadius: 1,
                px: 1.5,
                py: 0.5
            },
            ...linkProps,
            children: /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                primary: item.title,
                primaryTypographyProps: {
                    sx: {
                        color: "text.secondary",
                        fontSize: 14,
                        fontWeight: 500
                    }
                }
            })
        }, item.title);
    });
};
const TopNavItem = (props)=>{
    const { active, disabled, external, items, icon, label, path, title } = props;
    // With dropdown
    if (items) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dropdown, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(DropdownTrigger, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
                            disabled: disabled,
                            sx: {
                                alignItems: "center",
                                borderRadius: 1,
                                display: "flex",
                                justifyContent: "flex-start",
                                px: "16px",
                                py: "6px",
                                textAlign: "left",
                                width: "100%",
                                ...active && {
                                    backgroundColor: "var(--nav-item-active-bg)"
                                },
                                "&:hover": {
                                    backgroundColor: "var(--nav-item-hover-bg)"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                    component: "span",
                                    sx: {
                                        alignItems: "center",
                                        color: "var(--nav-item-icon-color)",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        mr: 2,
                                        ...active && {
                                            color: "var(--nav-item-icon-active-color)"
                                        }
                                    },
                                    children: icon
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                    component: "span",
                                    sx: {
                                        color: "var(--nav-item-color)",
                                        flexGrow: 1,
                                        fontFamily: (theme)=>theme.typography.fontFamily,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        lineHeight: "24px",
                                        whiteSpace: "nowrap",
                                        ...active && {
                                            color: "var(--nav-item-active-color)"
                                        },
                                        ...disabled && {
                                            color: "var(--nav-item-disabled-color)"
                                        }
                                    },
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    sx: {
                                        color: "var(--nav-item-chevron-color)",
                                        fontSize: 16,
                                        ml: 1
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx(ChevronDown/* default */.Z, {})
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(DropdownMenu, {
                    disableScrollLock: true,
                    PaperProps: {
                        elevation: 8,
                        sx: {
                            maxWidth: "100%",
                            p: 1,
                            width: 200
                        }
                    },
                    children: renderChildItems({
                        items,
                        depth: 0
                    })
                })
            ]
        });
    }
    // Without dropdown
    const linkProps = path ? external ? {
        component: "a",
        href: path,
        target: "_blank"
    } : {
        component: router_link/* RouterLink */.r,
        href: path
    } : {};
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
            disabled: disabled,
            sx: {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                px: "16px",
                py: "6px",
                textAlign: "left",
                width: "100%",
                ...active && {
                    backgroundColor: "var(--nav-item-active-bg)"
                },
                "&:hover": {
                    backgroundColor: "var(--nav-item-hover-bg)"
                }
            },
            ...linkProps,
            children: [
                icon && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        alignItems: "center",
                        color: "var(--nav-item-icon-color)",
                        display: "inline-flex",
                        justifyContent: "center",
                        mr: 2,
                        ...active && {
                            color: "var(--nav-item-icon-active-color)"
                        }
                    },
                    children: icon
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        color: "var(--nav-item-color)",
                        flexGrow: 1,
                        fontFamily: (theme)=>theme.typography.fontFamily,
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: "24px",
                        whiteSpace: "nowrap",
                        ...active && {
                            color: "var(--nav-item-active-color)"
                        },
                        ...disabled && {
                            color: "var(--nav-item-disabled-color)"
                        }
                    },
                    children: title
                }),
                label && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        ml: 1
                    },
                    children: label
                })
            ]
        })
    });
};
TopNavItem.propTypes = {
    active: (external_prop_types_default()).bool,
    disabled: (external_prop_types_default()).bool,
    external: (external_prop_types_default()).bool,
    icon: (external_prop_types_default()).node,
    items: (external_prop_types_default()).array,
    label: (external_prop_types_default()).node,
    path: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/horizontal-layout/top-nav-section.tsx




const TopNavSection = (props)=>{
    const { items = [], pathname } = props;
    return /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
        component: "ul",
        direction: "row",
        spacing: 1,
        sx: {
            listStyle: "none",
            m: 0,
            p: 0
        },
        children: items.map((item)=>{
            const checkPath = !!(item.path && pathname);
            const partialMatch = checkPath ? pathname.includes(item.path) : false;
            const exactMatch = checkPath ? pathname === item.path : false;
            // Branch
            if (item.items) {
                return /*#__PURE__*/ jsx_runtime.jsx(TopNavItem, {
                    active: partialMatch,
                    disabled: item.disabled,
                    icon: item.icon,
                    items: item.items,
                    label: item.label,
                    title: item.title
                }, item.title);
            }
            // Leaf
            return /*#__PURE__*/ jsx_runtime.jsx(TopNavItem, {
                active: exactMatch,
                disabled: item.disabled,
                external: item.external,
                icon: item.icon,
                label: item.label,
                path: item.path,
                title: item.title
            }, item.title);
        })
    });
};
TopNavSection.propTypes = {
    items: (external_prop_types_default()).array,
    pathname: (external_prop_types_default()).string,
    subheader: (external_prop_types_default()).string
};


/***/ }),

/***/ 26127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Menu01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11347);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45456);
/* harmony import */ var src_components_router_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83172);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92795);
/* harmony import */ var src_hooks_use_pathname__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6400);
/* harmony import */ var src_paths__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45025);
/* harmony import */ var _account_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87283);
/* harmony import */ var _contacts_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60485);
/* harmony import */ var _language_switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84857);
/* harmony import */ var _notifications_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56821);
/* harmony import */ var _tenant_switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90000);
/* harmony import */ var _top_nav_section__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_account_button__WEBPACK_IMPORTED_MODULE_15__, _language_switch__WEBPACK_IMPORTED_MODULE_17__]);
([_account_button__WEBPACK_IMPORTED_MODULE_15__, _language_switch__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const useCssVars = (color)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        switch(color){
            case "blend-in":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.background.default,
                        "--nav-color": theme.palette.neutral[100],
                        "--nav-divider-color": theme.palette.neutral[800],
                        "--nav-border-color": theme.palette.neutral[700],
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[600],
                        "--nav-item-icon-color": theme.palette.neutral[500],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[700],
                        "--nav-item-chevron-color": theme.palette.neutral[700],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.background.default,
                        "--nav-color": theme.palette.text.primary,
                        "--nav-divider-color": theme.palette.divider,
                        "--nav-border-color": theme.palette.neutral[100],
                        "--nav-logo-border": theme.palette.neutral[100],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.text.secondary,
                        "--nav-item-hover-bg": theme.palette.action.hover,
                        "--nav-item-active-bg": theme.palette.action.selected,
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[400],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[400],
                        "--nav-item-chevron-color": theme.palette.neutral[400],
                        "--nav-scrollbar-color": theme.palette.neutral[900]
                    };
                }
            case "discrete":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.neutral[900],
                        "--nav-color": theme.palette.neutral[100],
                        "--nav-divider-color": theme.palette.neutral[800],
                        "--nav-border-color": theme.palette.neutral[700],
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[600],
                        "--nav-item-icon-color": theme.palette.neutral[500],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[700],
                        "--nav-item-chevron-color": theme.palette.neutral[700],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.neutral[50],
                        "--nav-color": theme.palette.text.primary,
                        "--nav-divider-color": theme.palette.neutral[200],
                        "--nav-border-color": theme.palette.divider,
                        "--nav-logo-border": theme.palette.neutral[200],
                        "--nav-section-title-color": theme.palette.neutral[500],
                        "--nav-item-color": theme.palette.neutral[500],
                        "--nav-item-hover-bg": theme.palette.action.hover,
                        "--nav-item-active-bg": theme.palette.action.selected,
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[400],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[400],
                        "--nav-item-chevron-color": theme.palette.neutral[400],
                        "--nav-scrollbar-color": theme.palette.neutral[900]
                    };
                }
            case "evident":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.neutral[800],
                        "--nav-color": theme.palette.common.white,
                        "--nav-divider-color": theme.palette.neutral[700],
                        "--nav-border-color": "transparent",
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.common.white,
                        "--nav-item-disabled-color": theme.palette.neutral[500],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[500],
                        "--nav-item-chevron-color": theme.palette.neutral[600],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.neutral[800],
                        "--nav-color": theme.palette.common.white,
                        "--nav-divider-color": theme.palette.neutral[700],
                        "--nav-border-color": "transparent",
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.common.white,
                        "--nav-item-disabled-color": theme.palette.neutral[500],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[500],
                        "--nav-item-chevron-color": theme.palette.neutral[600],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                }
            default:
                return {};
        }
    }, [
        theme,
        color
    ]);
};
const TopNav = (props)=>{
    const { color = "evident", onMobileNav, sections = [] } = props;
    const pathname = (0,src_hooks_use_pathname__WEBPACK_IMPORTED_MODULE_13__/* .usePathname */ .j)();
    const mdUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default()((theme)=>theme.breakpoints.up("md"));
    const cssVars = useCssVars(color);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
        component: "header",
        sx: {
            ...cssVars,
            backgroundColor: "var(--nav-bg)",
            borderBottomColor: "var(--nav-border-color)",
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            color: "var(--nav-color)",
            left: 0,
            position: "sticky",
            top: 0,
            zIndex: (theme)=>theme.zIndex.appBar
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                alignItems: "center",
                direction: "row",
                justifyContent: "space-between",
                spacing: 2,
                sx: {
                    px: 3,
                    py: 1
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 2,
                        children: [
                            !mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                onClick: onMobileNav,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Menu01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                component: src_components_router_link__WEBPACK_IMPORTED_MODULE_11__/* .RouterLink */ .r,
                                href: src_paths__WEBPACK_IMPORTED_MODULE_14__/* .paths */ .H.index,
                                sx: {
                                    borderColor: "var(--nav-logo-border)",
                                    borderRadius: 1,
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    display: "inline-flex",
                                    height: 40,
                                    p: "4px",
                                    width: 40
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_10__/* .Logo */ .T, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tenant_switch__WEBPACK_IMPORTED_MODULE_19__/* .TenantSwitch */ .n, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_language_switch__WEBPACK_IMPORTED_MODULE_17__/* .LanguageSwitch */ .U, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_notifications_button__WEBPACK_IMPORTED_MODULE_18__/* .NotificationsButton */ .t, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contacts_button__WEBPACK_IMPORTED_MODULE_16__/* .ContactsButton */ .I, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_button__WEBPACK_IMPORTED_MODULE_15__/* .AccountButton */ .s, {})
                        ]
                    })
                ]
            }),
            mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    borderTopWidth: 1,
                    borderTopStyle: "solid",
                    borderTopColor: "var(--nav-divider-color)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_12__/* .Scrollbar */ .L, {
                    sx: {
                        "& .simplebar-scrollbar:before": {
                            background: "var(--nav-scrollbar-color)"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                        alignItems: "center",
                        component: "nav",
                        direction: "row",
                        spacing: 1,
                        sx: {
                            px: 2,
                            py: 1.5
                        },
                        children: sections.map((section, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_top_nav_section__WEBPACK_IMPORTED_MODULE_20__/* .TopNavSection */ .o, {
                                items: section.items,
                                pathname: pathname,
                                subheader: section.subheader
                            }, index))
                    })
                })
            })
        ]
    });
};
TopNav.propTypes = {
    color: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "blend-in",
        "discrete",
        "evident"
    ]),
    onMobileNav: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    sections: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useMobileNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_hooks_use_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6400);


const useMobileNav = ()=>{
    const pathname = (0,src_hooks_use_pathname__WEBPACK_IMPORTED_MODULE_1__/* .usePathname */ .j)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handlePathnameChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (open) {
            setOpen(false);
        }
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handlePathnameChange();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        pathname
    ]);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
    }, []);
    return {
        handleOpen,
        handleClose,
        open
    };
};


/***/ }),

/***/ 26454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_0__]);
_layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* reexport safe */ _language_switch__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _language_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_language_switch__WEBPACK_IMPORTED_MODULE_0__]);
_language_switch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ LanguagePopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86201);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65768);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_locales_tokens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const languageOptions = {
    en: {
        icon: "/assets/flags/flag-uk.svg",
        label: "English"
    },
    de: {
        icon: "/assets/flags/flag-de.svg",
        label: "German"
    },
    es: {
        icon: "/assets/flags/flag-es.svg",
        label: "Spanish"
    }
};
const LanguagePopover = (props)=>{
    const { anchorEl, onClose, open = false, ...other } = props;
    const { i18n, t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (language)=>{
        onClose?.();
        await i18n.changeLanguage(language);
        const message = t(src_locales_tokens__WEBPACK_IMPORTED_MODULE_11__/* .tokens */ .T.common.languageChanged);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(message);
    }, [
        onClose,
        i18n,
        t
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Popover__WEBPACK_IMPORTED_MODULE_9___default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "right",
            vertical: "bottom"
        },
        disableScrollLock: true,
        transformOrigin: {
            horizontal: "right",
            vertical: "top"
        },
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                width: 220
            }
        },
        ...other,
        children: Object.keys(languageOptions).map((language)=>{
            const option = languageOptions[language];
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                onClick: ()=>handleChange(language),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                width: 28,
                                "& img": {
                                    width: "100%"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: option.label,
                                src: option.icon
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default()), {
                        primary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                            variant: "subtitle2",
                            children: option.label
                        })
                    })
                ]
            }, language);
        })
    });
};
LanguagePopover.propTypes = {
    anchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ LanguageSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73539);
/* harmony import */ var _language_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_1__, _language_popover__WEBPACK_IMPORTED_MODULE_6__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_1__, _language_popover__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const languages = {
    en: "/assets/flags/flag-uk.svg",
    de: "/assets/flags/flag-de.svg",
    es: "/assets/flags/flag-es.svg"
};
const LanguageSwitch = ()=>{
    const { i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const popover = (0,src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_5__/* .usePopover */ .S)();
    const flag = languages[i18n.language];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: "Language",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onClick: popover.handleOpen,
                    ref: popover.anchorRef,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            width: 28,
                            "& img": {
                                width: "100%"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: flag
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_language_popover__WEBPACK_IMPORTED_MODULE_6__/* .LanguagePopover */ .T, {
                anchorEl: popover.anchorRef.current,
                onClose: popover.handleClose,
                open: popover.open
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_hocs_with_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33437);
/* harmony import */ var src_hooks_use_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29159);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51925);
/* harmony import */ var _horizontal_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86256);
/* harmony import */ var _vertical_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_4__, _horizontal_layout__WEBPACK_IMPORTED_MODULE_5__, _vertical_layout__WEBPACK_IMPORTED_MODULE_6__]);
([_config__WEBPACK_IMPORTED_MODULE_4__, _horizontal_layout__WEBPACK_IMPORTED_MODULE_5__, _vertical_layout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Layout = (0,src_hocs_with_auth_guard__WEBPACK_IMPORTED_MODULE_2__/* .withAuthGuard */ .I)((props)=>{
    const settings = (0,src_hooks_use_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .r)();
    const sections = (0,_config__WEBPACK_IMPORTED_MODULE_4__/* .useSections */ ._)();
    if (settings.layout === "horizontal") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_horizontal_layout__WEBPACK_IMPORTED_MODULE_5__/* .HorizontalLayout */ .G, {
            sections: sections,
            navColor: settings.navColor,
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vertical_layout__WEBPACK_IMPORTED_MODULE_6__/* .VerticalLayout */ .Z, {
        sections: sections,
        navColor: settings.navColor,
        ...props
    });
});
Layout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ MobileNav)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/File04.js
var File04 = __webpack_require__(54324);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(53819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(97898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
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
// EXTERNAL MODULE: ./src/components/logo.tsx
var logo = __webpack_require__(45456);
// EXTERNAL MODULE: ./src/components/router-link.tsx
var router_link = __webpack_require__(83172);
// EXTERNAL MODULE: ./src/components/scrollbar.tsx
var scrollbar = __webpack_require__(92795);
// EXTERNAL MODULE: ./src/hooks/use-pathname.ts
var use_pathname = __webpack_require__(6400);
// EXTERNAL MODULE: ./src/paths.ts
var paths = __webpack_require__(45025);
// EXTERNAL MODULE: ./src/layouts/dashboard/tenant-switch/index.ts + 2 modules
var tenant_switch = __webpack_require__(90000);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronDown.js
var ChevronDown = __webpack_require__(94207);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronRight.js
var ChevronRight = __webpack_require__(27264);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(92494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(15732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
;// CONCATENATED MODULE: ./src/layouts/dashboard/mobile-nav/mobile-nav-item.tsx










const MobileNavItem = (props)=>{
    const { active, children, depth = 0, disabled, external, icon, label, open: openProp, path, title } = props;
    const [open, setOpen] = (0,external_react_.useState)(!!openProp);
    const handleToggle = (0,external_react_.useCallback)(()=>{
        setOpen((prevOpen)=>!prevOpen);
    }, []);
    // Icons can be defined at top level only, deep levels have bullets instead of actual icons.
    let startIcon;
    if (depth === 0) {
        startIcon = icon;
    } else {
        startIcon = /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
            sx: {
                alignItems: "center",
                display: "center",
                height: 20,
                justifyContent: "center",
                width: 20
            },
            children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    borderRadius: "50%",
                    backgroundColor: "var(--nav-item-icon-color)",
                    height: 4,
                    opacity: 0,
                    width: 4,
                    ...active && {
                        backgroundColor: "var(--nav-item-icon-active-color)",
                        height: 6,
                        opacity: 1,
                        width: 6
                    }
                }
            })
        });
    }
    const offset = depth === 0 ? 0 : (depth - 1) * 16;
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
                        pl: `${16 + offset}px`,
                        pr: "16px",
                        py: "6px",
                        textAlign: "left",
                        width: "100%",
                        ...active && {
                            ...depth === 0 && {
                                backgroundColor: "var(--nav-item-active-bg)"
                            }
                        },
                        "&:hover": {
                            backgroundColor: "var(--nav-item-hover-bg)"
                        }
                    },
                    children: [
                        startIcon && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            component: "span",
                            sx: {
                                alignItems: "center",
                                color: "var(--nav-item-icon-color)",
                                display: "inline-flex",
                                justifyContent: "center",
                                mr: 2,
                                ...active && {
                                    color: "var(--nav-item-icon-active-color)"
                                }
                            },
                            children: startIcon
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            component: "span",
                            sx: {
                                color: "var(--nav-item-color)",
                                flexGrow: 1,
                                fontFamily: (theme)=>theme.typography.fontFamily,
                                fontSize: depth > 0 ? 13 : 14,
                                fontWeight: depth > 0 ? 500 : 600,
                                lineHeight: "24px",
                                whiteSpace: "nowrap",
                                ...active && {
                                    color: "var(--nav-item-active-color)"
                                },
                                ...disabled && {
                                    color: "var(--nav-item-disabled-color)"
                                }
                            },
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            sx: {
                                color: "var(--nav-item-chevron-color)",
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
            disabled: disabled,
            sx: {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                pl: `${16 + offset}px`,
                pr: "16px",
                py: "6px",
                textAlign: "left",
                width: "100%",
                ...active && {
                    ...depth === 0 && {
                        backgroundColor: "var(--nav-item-active-bg)"
                    }
                },
                "&:hover": {
                    backgroundColor: "var(--nav-item-hover-bg)"
                }
            },
            ...linkProps,
            children: [
                startIcon && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        alignItems: "center",
                        color: "var(--nav-item-icon-color)",
                        display: "inline-flex",
                        justifyContent: "center",
                        mr: 2,
                        ...active && {
                            color: "var(--nav-item-icon-active-color)"
                        }
                    },
                    children: startIcon
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        color: "var(--nav-item-color)",
                        flexGrow: 1,
                        fontFamily: (theme)=>theme.typography.fontFamily,
                        fontSize: depth > 0 ? 13 : 14,
                        fontWeight: depth > 0 ? 500 : 600,
                        lineHeight: "24px",
                        whiteSpace: "nowrap",
                        ...active && {
                            color: "var(--nav-item-active-color)"
                        },
                        ...disabled && {
                            color: "var(--nav-item-disabled-color)"
                        }
                    },
                    children: title
                }),
                label && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        ml: 2
                    },
                    children: label
                })
            ]
        })
    });
};
MobileNavItem.propTypes = {
    active: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node,
    depth: (external_prop_types_default()).number,
    disabled: (external_prop_types_default()).bool,
    external: (external_prop_types_default()).bool,
    icon: (external_prop_types_default()).node,
    label: (external_prop_types_default()).node,
    open: (external_prop_types_default()).bool,
    path: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/mobile-nav/mobile-nav-section.tsx





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
    if (item.items) {
        acc.push(/*#__PURE__*/ jsx_runtime.jsx(MobileNavItem, {
            active: partialMatch,
            depth: depth,
            disabled: item.disabled,
            icon: item.icon,
            label: item.label,
            open: partialMatch,
            title: item.title,
            children: /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                component: "ul",
                spacing: 0.5,
                sx: {
                    listStyle: "none",
                    m: 0,
                    p: 0
                },
                children: renderItems({
                    depth: depth + 1,
                    items: item.items,
                    pathname
                })
            })
        }, item.title));
    } else {
        acc.push(/*#__PURE__*/ jsx_runtime.jsx(MobileNavItem, {
            active: exactMatch,
            depth: depth,
            disabled: item.disabled,
            external: item.external,
            icon: item.icon,
            label: item.label,
            path: item.path,
            title: item.title
        }, item.title));
    }
    return acc;
};
const MobileNavSection = (props)=>{
    const { items = [], pathname, subheader = "", ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        component: "ul",
        spacing: 0.5,
        sx: {
            listStyle: "none",
            m: 0,
            p: 0
        },
        ...other,
        children: [
            subheader && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                component: "li",
                sx: {
                    color: "var(--nav-section-title-color)",
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: 1.66,
                    mb: 1,
                    ml: 1,
                    textTransform: "uppercase"
                },
                children: subheader
            }),
            renderItems({
                items,
                pathname
            })
        ]
    });
};
MobileNavSection.propTypes = {
    items: (external_prop_types_default()).array,
    pathname: (external_prop_types_default()).string,
    subheader: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/mobile-nav/mobile-nav.tsx


















const MOBILE_NAV_WIDTH = 280;
const useCssVars = (color)=>{
    const theme = (0,styles_.useTheme)();
    return (0,external_react_.useMemo)(()=>{
        switch(color){
            // Blend-in and discrete have no difference on mobile because
            // there's a backdrop and differences are not visible
            case "blend-in":
            case "discrete":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.background.default,
                        "--nav-color": theme.palette.neutral[100],
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[600],
                        "--nav-item-icon-color": theme.palette.neutral[500],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[700],
                        "--nav-item-chevron-color": theme.palette.neutral[700],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.background.default,
                        "--nav-color": theme.palette.text.primary,
                        "--nav-logo-border": theme.palette.neutral[100],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.text.secondary,
                        "--nav-item-hover-bg": theme.palette.action.hover,
                        "--nav-item-active-bg": theme.palette.action.selected,
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[400],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[400],
                        "--nav-item-chevron-color": theme.palette.neutral[400],
                        "--nav-scrollbar-color": theme.palette.neutral[900]
                    };
                }
            case "evident":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.neutral[800],
                        "--nav-color": theme.palette.common.white,
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.common.white,
                        "--nav-item-disabled-color": theme.palette.neutral[500],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[500],
                        "--nav-item-chevron-color": theme.palette.neutral[600],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.neutral[800],
                        "--nav-color": theme.palette.common.white,
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.common.white,
                        "--nav-item-disabled-color": theme.palette.neutral[500],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[500],
                        "--nav-item-chevron-color": theme.palette.neutral[600],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                }
            default:
                return {};
        }
    }, [
        theme,
        color
    ]);
};
const MobileNav = (props)=>{
    const { color = "evident", open, onClose, sections = [] } = props;
    const pathname = (0,use_pathname/* usePathname */.j)();
    const cssVars = useCssVars(color);
    return /*#__PURE__*/ jsx_runtime.jsx((Drawer_default()), {
        anchor: "left",
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                ...cssVars,
                backgroundColor: "var(--nav-bg)",
                color: "var(--nav-color)",
                width: MOBILE_NAV_WIDTH
            }
        },
        variant: "temporary",
        children: /*#__PURE__*/ jsx_runtime.jsx(scrollbar/* Scrollbar */.L, {
            sx: {
                height: "100%",
                "& .simplebar-content": {
                    height: "100%"
                },
                "& .simplebar-scrollbar:before": {
                    background: "var(--nav-scrollbar-color)"
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                sx: {
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 2,
                        sx: {
                            p: 3
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                component: router_link/* RouterLink */.r,
                                href: paths/* paths */.H.index,
                                sx: {
                                    borderColor: "var(--nav-logo-border)",
                                    borderRadius: 1,
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    display: "flex",
                                    height: 40,
                                    p: "4px",
                                    width: 40
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(tenant_switch/* TenantSwitch */.n, {
                                sx: {
                                    flexGrow: 1
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                        component: "nav",
                        spacing: 2,
                        sx: {
                            flexGrow: 1,
                            px: 2
                        },
                        children: sections.map((section, index)=>/*#__PURE__*/ jsx_runtime.jsx(MobileNavSection, {
                                items: section.items,
                                pathname: pathname,
                                subheader: section.subheader
                            }, index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                        sx: {
                            p: 3
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "neutral.400",
                                variant: "subtitle1",
                                children: "Need help?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "neutral.400",
                                sx: {
                                    mb: 2
                                },
                                variant: "body2",
                                children: "Please check our docs."
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                component: "a",
                                fullWidth: true,
                                href: paths/* paths */.H.docs,
                                startIcon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(File04/* default */.Z, {})
                                }),
                                target: "_blank",
                                variant: "contained",
                                children: "Documentation"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
MobileNav.propTypes = {
    color: external_prop_types_default().oneOf([
        "blend-in",
        "discrete",
        "evident"
    ]),
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool,
    sections: (external_prop_types_default()).array
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/mobile-nav/index.ts



/***/ }),

/***/ 56821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* reexport */ NotificationsButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Bell01.js
var Bell01 = __webpack_require__(46621);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(65168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(27229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/hooks/use-popover.ts
var use_popover = __webpack_require__(73539);
// EXTERNAL MODULE: external "date-fns/subDays"
var subDays_ = __webpack_require__(95358);
var subDays_default = /*#__PURE__*/__webpack_require__.n(subDays_);
// EXTERNAL MODULE: external "date-fns/subHours"
var subHours_ = __webpack_require__(97863);
var subHours_default = /*#__PURE__*/__webpack_require__.n(subHours_);
;// CONCATENATED MODULE: ./src/layouts/dashboard/notifications-button/notifications.ts


const now = new Date();
const notifications_notifications = [
    {
        id: "5e8883f1b51cc1956a5a1ec0",
        author: "Jie Yang Song",
        avatar: "/assets/avatars/avatar-jie-yan-song.png",
        createdAt: subHours_default()(now, 2).getTime(),
        job: "Remote React / React Native Developer",
        read: true,
        type: "job_add"
    },
    {
        id: "bfb21a370c017acc416757c7",
        author: "Jie Yang Song",
        avatar: "/assets/avatars/avatar-jie-yan-song.png",
        createdAt: subHours_default()(now, 2).getTime(),
        job: "Senior Golang Backend Engineer",
        read: false,
        type: "job_add"
    },
    {
        id: "20d9df4f23fff19668d7031c",
        createdAt: subDays_default()(now, 1).getTime(),
        description: "Logistics management is now available",
        read: true,
        type: "new_feature"
    },
    {
        id: "5e8883fca0e8612044248ecf",
        author: "Jie Yang Song",
        avatar: "/assets/avatars/avatar-jie-yan-song.png",
        company: "Augmastic Inc",
        createdAt: subHours_default()(now, 2).getTime(),
        read: false,
        type: "company_created"
    }
];

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__(14384);
var format_default = /*#__PURE__*/__webpack_require__.n(format_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/User01.js
var User01 = __webpack_require__(92736);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Mail04.js
var Mail04 = __webpack_require__(8437);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/MessageChatSquare.js
var MessageChatSquare = __webpack_require__(95918);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/X.js
var X = __webpack_require__(45331);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(52120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(85246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(94192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemAvatar"
var ListItemAvatar_ = __webpack_require__(82101);
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(78315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(65768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/components/scrollbar.tsx
var scrollbar = __webpack_require__(92795);
;// CONCATENATED MODULE: ./src/layouts/dashboard/notifications-button/notifications-popover.tsx





















const renderContent = (notification)=>{
    switch(notification.type){
        case "job_add":
            {
                const createdAt = format_default()(notification.createdAt, "MMM dd, h:mm a");
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((ListItemAvatar_default()), {
                            sx: {
                                mt: 0.5
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                src: notification.avatar,
                                children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(User01/* default */.Z, {})
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                            primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                                sx: {
                                    alignItems: "center",
                                    display: "flex",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        sx: {
                                            mr: 0.5
                                        },
                                        variant: "subtitle2",
                                        children: notification.author
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        sx: {
                                            mr: 0.5
                                        },
                                        variant: "body2",
                                        children: "added a new job"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                                        href: "#",
                                        underline: "always",
                                        variant: "body2",
                                        children: notification.job
                                    })
                                ]
                            }),
                            secondary: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "text.secondary",
                                variant: "caption",
                                children: createdAt
                            }),
                            sx: {
                                my: 0
                            }
                        })
                    ]
                });
            }
        case "new_feature":
            {
                const createdAt = format_default()(notification.createdAt, "MMM dd, h:mm a");
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((ListItemAvatar_default()), {
                            sx: {
                                mt: 0.5
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(MessageChatSquare/* default */.Z, {})
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                            primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                                sx: {
                                    alignItems: "center",
                                    display: "flex",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        sx: {
                                            mr: 0.5
                                        },
                                        children: "New feature!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: notification.description
                                    })
                                ]
                            }),
                            secondary: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "text.secondary",
                                variant: "caption",
                                children: createdAt
                            }),
                            sx: {
                                my: 0
                            }
                        })
                    ]
                });
            }
        case "company_created":
            {
                const createdAt = format_default()(notification.createdAt, "MMM dd, h:mm a");
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((ListItemAvatar_default()), {
                            sx: {
                                mt: 0.5
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                src: notification.avatar,
                                children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(User01/* default */.Z, {})
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((ListItemText_default()), {
                            primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                                sx: {
                                    alignItems: "center",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    m: 0
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        sx: {
                                            mr: 0.5
                                        },
                                        variant: "subtitle2",
                                        children: notification.author
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        sx: {
                                            mr: 0.5
                                        },
                                        variant: "body2",
                                        children: "created"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                                        href: "#",
                                        underline: "always",
                                        variant: "body2",
                                        children: notification.company
                                    })
                                ]
                            }),
                            secondary: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "text.secondary",
                                variant: "caption",
                                children: createdAt
                            }),
                            sx: {
                                my: 0
                            }
                        })
                    ]
                });
            }
        default:
            return null;
    }
};
const NotificationsPopover = (props)=>{
    const { anchorEl, notifications, onClose, onMarkAllAsRead, onRemoveOne, open = false, ...other } = props;
    const isEmpty = notifications.length === 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Popover_default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "left",
            vertical: "bottom"
        },
        disableScrollLock: true,
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                width: 380
            }
        },
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                alignItems: "center",
                direction: "row",
                justifyContent: "space-between",
                spacing: 2,
                sx: {
                    px: 3,
                    py: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                        color: "inherit",
                        variant: "h6",
                        children: "Notifications"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                        title: "Mark all as read",
                        children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                            onClick: onMarkAllAsRead,
                            size: "small",
                            color: "inherit",
                            children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                children: /*#__PURE__*/ jsx_runtime.jsx(Mail04/* default */.Z, {})
                            })
                        })
                    })
                ]
            }),
            isEmpty ? /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    p: 2
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    variant: "subtitle2",
                    children: "There are no notifications"
                })
            }) : /*#__PURE__*/ jsx_runtime.jsx(scrollbar/* Scrollbar */.L, {
                sx: {
                    maxHeight: 400
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((List_default()), {
                    disablePadding: true,
                    children: notifications.map((notification)=>/*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
                            divider: true,
                            sx: {
                                alignItems: "flex-start",
                                "&:hover": {
                                    backgroundColor: "action.hover"
                                },
                                "& .MuiListItemSecondaryAction-root": {
                                    top: "24%"
                                }
                            },
                            secondaryAction: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                title: "Remove",
                                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                    edge: "end",
                                    onClick: ()=>onRemoveOne?.(notification.id),
                                    size: "small",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(X/* default */.Z, {})
                                    })
                                })
                            }),
                            children: renderContent(notification)
                        }, notification.id))
                })
            })
        ]
    });
};
NotificationsPopover.propTypes = {
    anchorEl: (external_prop_types_default()).any,
    notifications: (external_prop_types_default()).array.isRequired,
    onClose: (external_prop_types_default()).func,
    onMarkAllAsRead: (external_prop_types_default()).func,
    onRemoveOne: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/notifications-button/notifications-button.tsx










const useNotifications = ()=>{
    const [notifications, setNotifications] = (0,external_react_.useState)(notifications_notifications);
    const unread = (0,external_react_.useMemo)(()=>{
        return notifications.reduce((acc, notification)=>acc + (notification.read ? 0 : 1), 0);
    }, [
        notifications
    ]);
    const handleRemoveOne = (0,external_react_.useCallback)((notificationId)=>{
        setNotifications((prevState)=>{
            return prevState.filter((notification)=>notification.id !== notificationId);
        });
    }, []);
    const handleMarkAllAsRead = (0,external_react_.useCallback)(()=>{
        setNotifications((prevState)=>{
            return prevState.map((notification)=>({
                    ...notification,
                    read: true
                }));
        });
    }, []);
    return {
        handleMarkAllAsRead,
        handleRemoveOne,
        notifications,
        unread
    };
};
const NotificationsButton = ()=>{
    const popover = (0,use_popover/* usePopover */.S)();
    const { handleRemoveOne, handleMarkAllAsRead, notifications, unread } = useNotifications();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                title: "Notifications",
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    ref: popover.anchorRef,
                    onClick: popover.handleOpen,
                    children: /*#__PURE__*/ jsx_runtime.jsx((Badge_default()), {
                        color: "error",
                        badgeContent: unread,
                        children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            children: /*#__PURE__*/ jsx_runtime.jsx(Bell01/* default */.Z, {})
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(NotificationsPopover, {
                anchorEl: popover.anchorRef.current,
                notifications: notifications,
                onClose: popover.handleClose,
                onMarkAllAsRead: handleMarkAllAsRead,
                onRemoveOne: handleRemoveOne,
                open: popover.open
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/notifications-button/index.ts



/***/ }),

/***/ 99926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ SearchButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/SearchMd.js
var SearchMd = __webpack_require__(95226);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(27229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/hooks/use-dialog.ts
var use_dialog = __webpack_require__(52942);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/X.js
var X = __webpack_require__(45331);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(65168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(49048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(73646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(33103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(36042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/components/tip.tsx
var tip = __webpack_require__(92869);
// EXTERNAL MODULE: ./src/utils/wait.ts
var wait = __webpack_require__(98954);
;// CONCATENATED MODULE: ./src/layouts/dashboard/search-button/search-dialog.tsx



















const articles = {
    Platform: [
        {
            description: "Provide your users with the content they need, exactly when they need it, by building a next-level site search experience using our AI-powered search API.",
            title: "Level up your site search experience with our hosted API",
            path: "Users / Api-usage"
        },
        {
            description: "Algolia is a search-as-a-service API that helps marketplaces build performant search experiences at scale while reducing engineering time.",
            title: "Build performant marketplace search at scale",
            path: "Users / Api-usage"
        }
    ],
    Resources: [
        {
            description: "Algolia’s architecture is heavily redundant, hosting every application on …",
            title: "Using NetInfo API to Improve Algolia’s JavaScript Client",
            path: "Resources / Blog posts"
        },
        {
            description: "Algolia is a search-as-a-service API that helps marketplaces build performant search experiences at scale while reducing engineering time.",
            title: "Build performance",
            path: "Resources / UI libraries"
        }
    ]
};
const SearchDialog = (props)=>{
    const { onClose, open = false, ...other } = props;
    const [value, setValue] = (0,external_react_.useState)("");
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [displayArticles, setDisplayArticles] = (0,external_react_.useState)(false);
    const handleSubmit = (0,external_react_.useCallback)(async (event)=>{
        event.preventDefault();
        setDisplayArticles(false);
        setIsLoading(true);
        // Do search here
        await (0,wait/* wait */.D)(1500);
        setIsLoading(false);
        setDisplayArticles(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Dialog_default()), {
        fullWidth: true,
        maxWidth: "sm",
        onClose: onClose,
        open: open,
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                alignItems: "center",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                sx: {
                    px: 3,
                    py: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                        variant: "h6",
                        children: "Search"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                        color: "inherit",
                        onClick: onClose,
                        children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            children: /*#__PURE__*/ jsx_runtime.jsx(X/* default */.Z, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((DialogContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(tip/* Tip */.C, {
                        message: "Search by entering a keyword and pressing Enter"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        component: "form",
                        onSubmit: handleSubmit,
                        sx: {
                            mt: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((TextField_default()), {
                            fullWidth: true,
                            InputProps: {
                                startAdornment: /*#__PURE__*/ jsx_runtime.jsx((InputAdornment_default()), {
                                    position: "start",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(SearchMd/* default */.Z, {})
                                    })
                                })
                            },
                            label: "Search",
                            onChange: (event)=>setValue(event.target.value),
                            placeholder: "Search...",
                            value: value
                        })
                    }),
                    isLoading && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            mt: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((CircularProgress_default()), {})
                    }),
                    displayArticles && /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                        spacing: 2,
                        sx: {
                            mt: 3
                        },
                        children: Object.keys(articles).map((type, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        variant: "h6",
                                        children: type
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                        divider: /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {}),
                                        sx: {
                                            borderColor: "divider",
                                            borderRadius: 1,
                                            borderStyle: "solid",
                                            borderWidth: 1
                                        },
                                        children: articles[type].map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                                                sx: {
                                                    p: 2
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                                        alignItems: "center",
                                                        direction: "row",
                                                        spacing: 2,
                                                        sx: {
                                                            pl: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((Badge_default()), {
                                                                color: "primary",
                                                                variant: "dot"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                                variant: "subtitle1",
                                                                children: article.title
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                        color: "text.secondary",
                                                        variant: "body2",
                                                        children: article.path
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                        color: "text.secondary",
                                                        variant: "body2",
                                                        sx: {
                                                            mt: 1
                                                        },
                                                        children: article.description
                                                    })
                                                ]
                                            }, article.title))
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
};
SearchDialog.propTypes = {
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/search-button/search-button.tsx







const SearchButton = ()=>{
    const dialog = (0,use_dialog/* useDialog */.R)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                title: "Search",
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    onClick: dialog.handleOpen,
                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                        children: /*#__PURE__*/ jsx_runtime.jsx(SearchMd/* default */.Z, {})
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(SearchDialog, {
                onClose: dialog.handleClose,
                open: dialog.open
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/search-button/index.ts



/***/ }),

/***/ 90000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* reexport */ TenantSwitch)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronDown.js
var ChevronDown = __webpack_require__(94207);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
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
// EXTERNAL MODULE: ./src/hooks/use-popover.ts
var use_popover = __webpack_require__(73539);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(29271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(65768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
;// CONCATENATED MODULE: ./src/layouts/dashboard/tenant-switch/tenant-popover.tsx




const TenantPopover = (props)=>{
    const { anchorEl, onChange, onClose, open = false, tenants, ...other } = props;
    return /*#__PURE__*/ jsx_runtime.jsx((Popover_default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "right",
            vertical: "bottom"
        },
        disableScrollLock: true,
        transformOrigin: {
            horizontal: "right",
            vertical: "top"
        },
        keepMounted: true,
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                width: 180
            }
        },
        ...other,
        children: tenants.map((tenant)=>/*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                onClick: ()=>onChange?.(tenant),
                children: tenant
            }, tenant))
    });
};
TenantPopover.propTypes = {
    anchorEl: (external_prop_types_default()).any,
    onChange: (external_prop_types_default()).func,
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool,
    tenants: (external_prop_types_default()).array.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/tenant-switch/tenant-switch.tsx










const tenants = [
    "Devias",
    "Acme Corp"
];
const TenantSwitch = (props)=>{
    const popover = (0,use_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                alignItems: "center",
                direction: "row",
                spacing: 2,
                ...props,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "inherit",
                                variant: "h6",
                                children: "Devias"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "neutral.400",
                                variant: "body2",
                                children: "Production"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                        onClick: popover.handleOpen,
                        ref: popover.anchorRef,
                        children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            sx: {
                                fontSize: 16
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(ChevronDown/* default */.Z, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(TenantPopover, {
                anchorEl: popover.anchorRef.current,
                onChange: popover.handleClose,
                onClose: popover.handleClose,
                open: popover.open,
                tenants: tenants
            })
        ]
    });
};
TenantSwitch.propTypes = {
    // @ts-ignore
    sx: (external_prop_types_default()).object
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/tenant-switch/index.ts



/***/ }),

/***/ 41315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _vertical_layout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _vertical_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vertical_layout__WEBPACK_IMPORTED_MODULE_0__]);
_vertical_layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ SideNav)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/File04.js
var File04 = __webpack_require__(54324);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(53819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(97898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
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
// EXTERNAL MODULE: ./src/components/logo.tsx
var logo = __webpack_require__(45456);
// EXTERNAL MODULE: ./src/components/router-link.tsx
var router_link = __webpack_require__(83172);
// EXTERNAL MODULE: ./src/components/scrollbar.tsx
var scrollbar = __webpack_require__(92795);
// EXTERNAL MODULE: ./src/hooks/use-pathname.ts
var use_pathname = __webpack_require__(6400);
// EXTERNAL MODULE: ./src/paths.ts
var paths = __webpack_require__(45025);
// EXTERNAL MODULE: ./src/layouts/dashboard/tenant-switch/index.ts + 2 modules
var tenant_switch = __webpack_require__(90000);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronDown.js
var ChevronDown = __webpack_require__(94207);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/ChevronRight.js
var ChevronRight = __webpack_require__(27264);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(92494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(15732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
;// CONCATENATED MODULE: ./src/layouts/dashboard/vertical-layout/side-nav-item.tsx










const SideNavItem = (props)=>{
    const { active, children, depth = 0, disabled, external, icon, label, open: openProp, path, title } = props;
    const [open, setOpen] = (0,external_react_.useState)(!!openProp);
    const handleToggle = (0,external_react_.useCallback)(()=>{
        setOpen((prevOpen)=>!prevOpen);
    }, []);
    // Icons can be defined at top level only, deep levels have bullets instead of actual icons.
    let startIcon;
    if (depth === 0) {
        startIcon = icon;
    } else {
        startIcon = /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
            sx: {
                alignItems: "center",
                display: "center",
                height: 20,
                justifyContent: "center",
                width: 20
            },
            children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    backgroundColor: "var(--nav-item-icon-color)",
                    borderRadius: "50%",
                    height: 4,
                    opacity: 0,
                    width: 4,
                    ...active && {
                        backgroundColor: "var(--nav-item-icon-active-color)",
                        height: 6,
                        opacity: 1,
                        width: 6
                    }
                }
            })
        });
    }
    const offset = depth === 0 ? 0 : (depth - 1) * 16;
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
                        pl: `${16 + offset}px`,
                        pr: "16px",
                        py: "6px",
                        textAlign: "left",
                        width: "100%",
                        ...active && {
                            ...depth === 0 && {
                                backgroundColor: "var(--nav-item-active-bg)"
                            }
                        },
                        "&:hover": {
                            backgroundColor: "var(--nav-item-hover-bg)"
                        }
                    },
                    children: [
                        startIcon && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            component: "span",
                            sx: {
                                alignItems: "center",
                                color: "var(--nav-item-icon-color)",
                                display: "inline-flex",
                                justifyContent: "center",
                                mr: 2,
                                ...active && {
                                    color: "var(--nav-item-icon-active-color)"
                                }
                            },
                            children: startIcon
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                            component: "span",
                            sx: {
                                color: "var(--nav-item-color)",
                                flexGrow: 1,
                                fontFamily: (theme)=>theme.typography.fontFamily,
                                fontSize: depth > 0 ? 13 : 14,
                                fontWeight: depth > 0 ? 500 : 600,
                                lineHeight: "24px",
                                whiteSpace: "nowrap",
                                ...active && {
                                    color: "var(--nav-item-active-color)"
                                },
                                ...disabled && {
                                    color: "var(--nav-item-disabled-color)"
                                }
                            },
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            sx: {
                                color: "var(--nav-item-chevron-color)",
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((ButtonBase_default()), {
            disabled: disabled,
            sx: {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "flex-start",
                pl: `${16 + offset}px`,
                pr: "16px",
                py: "6px",
                textAlign: "left",
                width: "100%",
                ...active && {
                    ...depth === 0 && {
                        backgroundColor: "var(--nav-item-active-bg)"
                    }
                },
                "&:hover": {
                    backgroundColor: "var(--nav-item-hover-bg)"
                }
            },
            ...linkProps,
            children: [
                startIcon && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        alignItems: "center",
                        color: "var(--nav-item-icon-color)",
                        display: "inline-flex",
                        justifyContent: "center",
                        mr: 2,
                        ...active && {
                            color: "var(--nav-item-icon-active-color)"
                        }
                    },
                    children: startIcon
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        color: "var(--nav-item-color)",
                        flexGrow: 1,
                        fontFamily: (theme)=>theme.typography.fontFamily,
                        fontSize: depth > 0 ? 13 : 14,
                        fontWeight: depth > 0 ? 500 : 600,
                        lineHeight: "24px",
                        whiteSpace: "nowrap",
                        ...active && {
                            color: "var(--nav-item-active-color)"
                        },
                        ...disabled && {
                            color: "var(--nav-item-disabled-color)"
                        }
                    },
                    children: title
                }),
                label && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        ml: 2
                    },
                    children: label
                })
            ]
        })
    });
};
SideNavItem.propTypes = {
    active: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node,
    depth: (external_prop_types_default()).number,
    disabled: (external_prop_types_default()).bool,
    external: (external_prop_types_default()).bool,
    icon: (external_prop_types_default()).node,
    label: (external_prop_types_default()).node,
    open: (external_prop_types_default()).bool,
    path: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/vertical-layout/side-nav-section.tsx





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
    if (item.items) {
        acc.push(/*#__PURE__*/ jsx_runtime.jsx(SideNavItem, {
            active: partialMatch,
            depth: depth,
            disabled: item.disabled,
            icon: item.icon,
            label: item.label,
            open: partialMatch,
            title: item.title,
            children: /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                component: "ul",
                spacing: 0.5,
                sx: {
                    listStyle: "none",
                    m: 0,
                    p: 0
                },
                children: renderItems({
                    depth: depth + 1,
                    items: item.items,
                    pathname
                })
            })
        }, item.title));
    } else {
        acc.push(/*#__PURE__*/ jsx_runtime.jsx(SideNavItem, {
            active: exactMatch,
            depth: depth,
            disabled: item.disabled,
            external: item.external,
            icon: item.icon,
            label: item.label,
            path: item.path,
            title: item.title
        }, item.title));
    }
    return acc;
};
const SideNavSection = (props)=>{
    const { items = [], pathname, subheader = "", ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        component: "ul",
        spacing: 0.5,
        sx: {
            listStyle: "none",
            m: 0,
            p: 0
        },
        ...other,
        children: [
            subheader && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                component: "li",
                sx: {
                    color: "var(--nav-section-title-color)",
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.66,
                    mb: 1,
                    ml: 1,
                    textTransform: "uppercase"
                },
                children: subheader
            }),
            renderItems({
                items,
                pathname
            })
        ]
    });
};
SideNavSection.propTypes = {
    items: (external_prop_types_default()).array,
    pathname: (external_prop_types_default()).string,
    subheader: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./src/layouts/dashboard/vertical-layout/side-nav.tsx


















const SIDE_NAV_WIDTH = 280;
const useCssVars = (color)=>{
    const theme = (0,styles_.useTheme)();
    return (0,external_react_.useMemo)(()=>{
        switch(color){
            case "blend-in":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.background.default,
                        "--nav-color": theme.palette.neutral[100],
                        "--nav-border-color": theme.palette.neutral[700],
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[600],
                        "--nav-item-icon-color": theme.palette.neutral[500],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[700],
                        "--nav-item-chevron-color": theme.palette.neutral[700],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.background.default,
                        "--nav-color": theme.palette.text.primary,
                        "--nav-border-color": theme.palette.neutral[100],
                        "--nav-logo-border": theme.palette.neutral[100],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.text.secondary,
                        "--nav-item-hover-bg": theme.palette.action.hover,
                        "--nav-item-active-bg": theme.palette.action.selected,
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[400],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[400],
                        "--nav-item-chevron-color": theme.palette.neutral[400],
                        "--nav-scrollbar-color": theme.palette.neutral[900]
                    };
                }
            case "discrete":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.neutral[900],
                        "--nav-color": theme.palette.neutral[100],
                        "--nav-border-color": theme.palette.neutral[700],
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[600],
                        "--nav-item-icon-color": theme.palette.neutral[500],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[700],
                        "--nav-item-chevron-color": theme.palette.neutral[700],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.neutral[50],
                        "--nav-color": theme.palette.text.primary,
                        "--nav-border-color": theme.palette.divider,
                        "--nav-logo-border": theme.palette.neutral[200],
                        "--nav-section-title-color": theme.palette.neutral[500],
                        "--nav-item-color": theme.palette.neutral[500],
                        "--nav-item-hover-bg": theme.palette.action.hover,
                        "--nav-item-active-bg": theme.palette.action.selected,
                        "--nav-item-active-color": theme.palette.text.primary,
                        "--nav-item-disabled-color": theme.palette.neutral[400],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[400],
                        "--nav-item-chevron-color": theme.palette.neutral[400],
                        "--nav-scrollbar-color": theme.palette.neutral[900]
                    };
                }
            case "evident":
                if (theme.palette.mode === "dark") {
                    return {
                        "--nav-bg": theme.palette.neutral[800],
                        "--nav-color": theme.palette.common.white,
                        "--nav-border-color": "transparent",
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.common.white,
                        "--nav-item-disabled-color": theme.palette.neutral[500],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[500],
                        "--nav-item-chevron-color": theme.palette.neutral[600],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                } else {
                    return {
                        "--nav-bg": theme.palette.neutral[800],
                        "--nav-color": theme.palette.common.white,
                        "--nav-border-color": "transparent",
                        "--nav-logo-border": theme.palette.neutral[700],
                        "--nav-section-title-color": theme.palette.neutral[400],
                        "--nav-item-color": theme.palette.neutral[400],
                        "--nav-item-hover-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
                        "--nav-item-active-color": theme.palette.common.white,
                        "--nav-item-disabled-color": theme.palette.neutral[500],
                        "--nav-item-icon-color": theme.palette.neutral[400],
                        "--nav-item-icon-active-color": theme.palette.primary.main,
                        "--nav-item-icon-disabled-color": theme.palette.neutral[500],
                        "--nav-item-chevron-color": theme.palette.neutral[600],
                        "--nav-scrollbar-color": theme.palette.neutral[400]
                    };
                }
            default:
                return {};
        }
    }, [
        theme,
        color
    ]);
};
const SideNav = (props)=>{
    const { color = "evident", sections = [] } = props;
    const pathname = (0,use_pathname/* usePathname */.j)();
    const cssVars = useCssVars(color);
    return /*#__PURE__*/ jsx_runtime.jsx((Drawer_default()), {
        anchor: "left",
        open: true,
        PaperProps: {
            sx: {
                ...cssVars,
                backgroundColor: "var(--nav-bg)",
                borderRightColor: "var(--nav-border-color)",
                borderRightStyle: "solid",
                borderRightWidth: 1,
                color: "var(--nav-color)",
                width: SIDE_NAV_WIDTH
            }
        },
        variant: "permanent",
        children: /*#__PURE__*/ jsx_runtime.jsx(scrollbar/* Scrollbar */.L, {
            sx: {
                height: "100%",
                "& .simplebar-content": {
                    height: "100%"
                },
                "& .simplebar-scrollbar:before": {
                    background: "var(--nav-scrollbar-color)"
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                sx: {
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 2,
                        sx: {
                            p: 3
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                component: router_link/* RouterLink */.r,
                                href: paths/* paths */.H.index,
                                sx: {
                                    borderColor: "var(--nav-logo-border)",
                                    borderRadius: 1,
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    display: "flex",
                                    height: 40,
                                    p: "4px",
                                    width: 40
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(logo/* Logo */.T, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(tenant_switch/* TenantSwitch */.n, {
                                sx: {
                                    flexGrow: 1
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                        component: "nav",
                        spacing: 2,
                        sx: {
                            flexGrow: 1,
                            px: 2
                        },
                        children: sections.map((section, index)=>/*#__PURE__*/ jsx_runtime.jsx(SideNavSection, {
                                items: section.items,
                                pathname: pathname,
                                subheader: section.subheader
                            }, index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                        sx: {
                            p: 3
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                variant: "subtitle1",
                                children: "Need help?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                color: "neutral.400",
                                sx: {
                                    mb: 2
                                },
                                variant: "body2",
                                children: "Please check our docs."
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                component: "a",
                                fullWidth: true,
                                href: paths/* paths */.H.docs,
                                startIcon: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(File04/* default */.Z, {})
                                }),
                                target: "_blank",
                                variant: "contained",
                                children: "Documentation"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
SideNav.propTypes = {
    color: external_prop_types_default().oneOf([
        "blend-in",
        "discrete",
        "evident"
    ]),
    sections: (external_prop_types_default()).array
};


/***/ }),

/***/ 96716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Menu01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11347);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79590);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _account_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87283);
/* harmony import */ var _contacts_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60485);
/* harmony import */ var _language_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84857);
/* harmony import */ var _notifications_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56821);
/* harmony import */ var _search_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_account_button__WEBPACK_IMPORTED_MODULE_9__, _language_switch__WEBPACK_IMPORTED_MODULE_11__]);
([_account_button__WEBPACK_IMPORTED_MODULE_9__, _language_switch__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 280;
const TopNav = (props)=>{
    const { onMobileNavOpen, ...other } = props;
    const lgUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default()((theme)=>theme.breakpoints.up("lg"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
        component: "header",
        sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: (theme)=>(0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.background.default, 0.8),
            position: "sticky",
            left: {
                lg: `${SIDE_NAV_WIDTH}px`
            },
            top: 0,
            width: {
                lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
            },
            zIndex: (theme)=>theme.zIndex.appBar
        },
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
            alignItems: "center",
            direction: "row",
            justifyContent: "space-between",
            spacing: 2,
            sx: {
                minHeight: TOP_NAV_HEIGHT,
                px: 2
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                    alignItems: "center",
                    direction: "row",
                    spacing: 2,
                    children: [
                        !lgUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                            onClick: onMobileNavOpen,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Menu01__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_button__WEBPACK_IMPORTED_MODULE_13__/* .SearchButton */ .Q, {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                    alignItems: "center",
                    direction: "row",
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_language_switch__WEBPACK_IMPORTED_MODULE_11__/* .LanguageSwitch */ .U, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_notifications_button__WEBPACK_IMPORTED_MODULE_12__/* .NotificationsButton */ .t, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contacts_button__WEBPACK_IMPORTED_MODULE_10__/* .ContactsButton */ .I, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_button__WEBPACK_IMPORTED_MODULE_9__/* .AccountButton */ .s, {})
                    ]
                })
            ]
        })
    });
};
TopNav.propTypes = {
    onMobileNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useMobileNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_hooks_use_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6400);


const useMobileNav = ()=>{
    const pathname = (0,src_hooks_use_pathname__WEBPACK_IMPORTED_MODULE_1__/* .usePathname */ .j)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handlePathnameChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (open) {
            setOpen(false);
        }
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handlePathnameChange();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        pathname
    ]);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
    }, []);
    return {
        handleOpen,
        handleClose,
        open
    };
};


/***/ }),

/***/ 15801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ VerticalLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19131);
/* harmony import */ var _side_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36285);
/* harmony import */ var _top_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96716);
/* harmony import */ var _use_mobile_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44080);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_top_nav__WEBPACK_IMPORTED_MODULE_6__]);
_top_nav__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const SIDE_NAV_WIDTH = 280;
const VerticalLayoutRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme })=>({
        display: "flex",
        flex: "1 1 auto",
        maxWidth: "100%",
        [theme.breakpoints.up("lg")]: {
            paddingLeft: SIDE_NAV_WIDTH
        }
    }));
const VerticalLayoutContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")({
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%"
});
const VerticalLayout = (props)=>{
    const { children, sections, navColor } = props;
    const lgUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()((theme)=>theme.breakpoints.up("lg"));
    const mobileNav = (0,_use_mobile_nav__WEBPACK_IMPORTED_MODULE_7__/* .useMobileNav */ .O)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_top_nav__WEBPACK_IMPORTED_MODULE_6__/* .TopNav */ .t, {
                onMobileNavOpen: mobileNav.handleOpen
            }),
            lgUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_side_nav__WEBPACK_IMPORTED_MODULE_5__/* .SideNav */ .k, {
                color: navColor,
                sections: sections
            }),
            !lgUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_nav__WEBPACK_IMPORTED_MODULE_4__/* .MobileNav */ .z, {
                color: navColor,
                onClose: mobileNav.handleClose,
                open: mobileNav.open,
                sections: sections
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerticalLayoutRoot, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerticalLayoutContainer, {
                    children: children
                })
            })
        ]
    });
};
VerticalLayout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    navColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "blend-in",
        "discrete",
        "evident"
    ]),
    sections: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;