"use strict";
exports.id = 2553;
exports.ids = [2553];
exports.modules = {

/***/ 8425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const Seo = (props)=>{
    const { title } = props;
    const fullTitle = title ? title + " | Devias Kit PRO" : "Devias Kit PRO";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
            children: fullTitle
        })
    });
};
Seo.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};


/***/ }),

/***/ 45025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ paths)
/* harmony export */ });
const paths = {
    index: "/",
    checkout: "/checkout",
    contact: "/contact",
    pricing: "/pricing",
    auth: {
        auth0: {
            callback: "/auth/auth0/callback",
            login: "/auth/auth0/login"
        },
        jwt: {
            login: "/auth/jwt/login",
            register: "/auth/jwt/register"
        },
        firebase: {
            login: "/auth/firebase/login",
            register: "/auth/firebase/register"
        },
        amplify: {
            confirmRegister: "/auth/amplify/confirm-register",
            forgotPassword: "/auth/amplify/forgot-password",
            login: "/auth/amplify/login",
            register: "/auth/amplify/register",
            resetPassword: "/auth/amplify/reset-password"
        }
    },
    authDemo: {
        forgotPassword: {
            classic: "/auth-demo/forgot-password/classic",
            modern: "/auth-demo/forgot-password/modern"
        },
        login: {
            classic: "/auth-demo/login/classic",
            modern: "/auth-demo/login/modern"
        },
        register: {
            classic: "/auth-demo/register/classic",
            modern: "/auth-demo/register/modern"
        },
        resetPassword: {
            classic: "/auth-demo/reset-password/classic",
            modern: "/auth-demo/reset-password/modern"
        },
        verifyCode: {
            classic: "/auth-demo/verify-code/classic",
            modern: "/auth-demo/verify-code/modern"
        }
    },
    dashboard: {
        index: "/dashboard",
        academy: {
            index: "/dashboard/academy",
            courseDetails: "/dashboard/academy/courses/:courseId"
        },
        account: "/dashboard/account",
        analytics: "/dashboard/analytics",
        blank: "/dashboard/blank",
        blog: {
            index: "/dashboard/blog",
            postDetails: "/dashboard/blog/:postId",
            postCreate: "/dashboard/blog/create"
        },
        calendar: "/dashboard/calendar",
        chat: "/dashboard/chat",
        crypto: "/dashboard/crypto",
        customers: {
            index: "/dashboard/customers",
            details: "/dashboard/customers/:customerId",
            edit: "/dashboard/customers/:customerId/edit"
        },
        ecommerce: "/dashboard/ecommerce",
        fileManager: "/dashboard/file-manager",
        invoices: {
            index: "/dashboard/invoices",
            details: "/dashboard/invoices/:orderId"
        },
        jobs: {
            index: "/dashboard/jobs",
            create: "/dashboard/jobs/create",
            companies: {
                details: "/dashboard/jobs/companies/:companyId"
            }
        },
        kanban: "/dashboard/kanban",
        logistics: {
            index: "/dashboard/logistics",
            fleet: "/dashboard/logistics/fleet"
        },
        mail: "/dashboard/mail",
        orders: {
            index: "/dashboard/orders",
            details: "/dashboard/orders/:orderId"
        },
        products: {
            index: "/dashboard/products",
            create: "/dashboard/products/create"
        },
        social: {
            index: "/dashboard/social",
            profile: "/dashboard/social/profile",
            feed: "/dashboard/social/feed"
        }
    },
    components: {
        index: "/components",
        dataDisplay: {
            detailLists: "/components/data-display/detail-lists",
            tables: "/components/data-display/tables",
            quickStats: "/components/data-display/quick-stats"
        },
        lists: {
            groupedLists: "/components/lists/grouped-lists",
            gridLists: "/components/lists/grid-lists"
        },
        forms: "/components/forms",
        modals: "/components/modals",
        charts: "/components/charts",
        buttons: "/components/buttons",
        typography: "/components/typography",
        colors: "/components/colors",
        inputs: "/components/inputs"
    },
    docs: "https://material-kit-pro-react-docs.devias.io",
    notAuthorized: "/401",
    notFound: "/404",
    serverError: "/500"
};


/***/ })

};
;