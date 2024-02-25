"use strict";
exports.id = 153;
exports.ids = [153];
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

/***/ 79643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ applyPagination)
/* harmony export */ });
function applyPagination(documents, page, rowsPerPage) {
    return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}


/***/ }),

/***/ 35634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ deepCopy)
/* harmony export */ });
// eslint-disable-next-line consistent-return
function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
        return obj.reduce((arr, item, index)=>{
            arr[index] = deepCopy(item);
            return arr;
        }, []);
    }
    if (obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, key)=>{
            newObj[key] = deepCopy(obj[key]);
            return newObj;
        }, {});
    }
}


/***/ })

};
;