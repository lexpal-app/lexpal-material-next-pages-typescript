"use strict";
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 90820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ SeverityPill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const SeverityPillRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("span")(({ theme, ownerState })=>{
    const backgroundColor = theme.palette[ownerState.color].alpha12;
    const color = theme.palette.mode === "dark" ? theme.palette[ownerState.color].main : theme.palette[ownerState.color].dark;
    return {
        alignItems: "center",
        backgroundColor,
        borderRadius: 12,
        color,
        cursor: "default",
        display: "inline-flex",
        flexGrow: 0,
        flexShrink: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 2,
        fontWeight: 600,
        justifyContent: "center",
        letterSpacing: 0.5,
        minWidth: 20,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textTransform: "uppercase",
        whiteSpace: "nowrap"
    };
});
const SeverityPill = (props)=>{
    const { color = "primary", children, ...other } = props;
    const ownerState = {
        color
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SeverityPillRoot, {
        ownerState: ownerState,
        ...other,
        children: children
    });
};
SeverityPill.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "error",
        "info",
        "warning",
        "success"
    ])
};


/***/ })

};
;