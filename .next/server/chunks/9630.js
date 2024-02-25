"use strict";
exports.id = 9630;
exports.ids = [9630];
exports.modules = {

/***/ 57425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Presence)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const sizes = {
    small: 8,
    medium: 16,
    large: 23
};
const PresenceRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("span")(({ theme, ownerState })=>{
    const size = sizes[ownerState.size];
    const colors = {
        offline: theme.palette.neutral[100],
        away: theme.palette.warning.main,
        busy: theme.palette.error.main,
        online: theme.palette.success.main
    };
    const color = colors[ownerState.status];
    return {
        backgroundColor: color,
        borderRadius: "50%",
        display: "inline-block",
        flexGrow: 0,
        flexShrink: 0,
        height: size,
        width: size
    };
});
const Presence = (props)=>{
    const { size = "medium", status = "offline", ...other } = props;
    const ownerState = {
        size,
        status
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PresenceRoot, {
        ownerState: ownerState,
        ...other
    });
};
Presence.propTypes = {
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "small",
        "medium",
        "large"
    ]),
    status: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "online",
        "offline",
        "away",
        "busy"
    ])
};


/***/ }),

/***/ 29159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_contexts_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58625);


const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_contexts_settings__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J6);


/***/ })

};
;