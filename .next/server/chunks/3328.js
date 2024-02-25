"use strict";
exports.id = 3328;
exports.ids = [3328];
exports.modules = {

/***/ 13328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ customLocale)
/* harmony export */ });
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24333);
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_0__);

const formatDistanceLocale = {
    lessThanXSeconds: "{{count}}s",
    xSeconds: "{{count}}s",
    halfAMinute: "30s",
    lessThanXMinutes: "{{count}}m",
    xMinutes: "{{count}}m",
    aboutXHours: "{{count}}h",
    xHours: "{{count}}h",
    xDays: "{{count}}d",
    aboutXWeeks: "{{count}}w",
    xWeeks: "{{count}}w",
    aboutXMonths: "{{count}}m",
    xMonths: "{{count}}m",
    aboutXYears: "{{count}}y",
    xYears: "{{count}}y",
    overXYears: "{{count}}y",
    almostXYears: "{{count}}y"
};
const customLocale = {
    ...(date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_0___default()),
    formatDistance: (token, count, options)=>{
        options = options || {};
        const result = formatDistanceLocale[token].replace("{{count}}", count);
        if (options.addSuffix) {
            if (options.comparison > 0) {
                return "in " + result;
            } else {
                return result + " ago";
            }
        }
        return result;
    }
};


/***/ })

};
;