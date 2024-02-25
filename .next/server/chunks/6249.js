"use strict";
exports.id = 6249;
exports.ids = [6249];
exports.modules = {

/***/ 5386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ blogApi)
});

// EXTERNAL MODULE: ./src/utils/deep-copy.ts
var deep_copy = __webpack_require__(35634);
// EXTERNAL MODULE: external "date-fns/subDays"
var subDays_ = __webpack_require__(95358);
var subDays_default = /*#__PURE__*/__webpack_require__.n(subDays_);
// EXTERNAL MODULE: external "date-fns/subHours"
var subHours_ = __webpack_require__(97863);
var subHours_default = /*#__PURE__*/__webpack_require__.n(subHours_);
// EXTERNAL MODULE: external "date-fns/subMinutes"
var subMinutes_ = __webpack_require__(54548);
var subMinutes_default = /*#__PURE__*/__webpack_require__.n(subMinutes_);
// EXTERNAL MODULE: external "date-fns/subSeconds"
var subSeconds_ = __webpack_require__(81818);
var subSeconds_default = /*#__PURE__*/__webpack_require__.n(subSeconds_);
;// CONCATENATED MODULE: ./src/api/blog/data.ts




const now = new Date();
const posts = [
    {
        id: "24b76cac9a128cd949747080",
        author: {
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            name: "Jie Yan Song"
        },
        category: "Programming",
        cover: "/assets/covers/business-2-4x4-large.png",
        publishedAt: subMinutes_default()(subSeconds_default()(now, 16), 45).getTime(),
        readTime: "5 min",
        shortDescription: "Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.",
        title: "Why I Still Lisp, and You Should Too"
    },
    {
        id: "a9c19d0caf2ca91020aacd1f",
        author: {
            avatar: "/assets/avatars/avatar-omar-darboe.png",
            name: "Omar Darobe"
        },
        category: "Productivity",
        cover: "/assets/covers/abstract-2-4x4-large.png",
        publishedAt: subHours_default()(subMinutes_default()(subSeconds_default()(now, 29), 51), 6).getTime(),
        readTime: "6 min",
        shortDescription: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        title: "Scrum Has Hit the Glass Ceiling"
    },
    {
        id: "44df90cbf89963b8aa625c7d",
        author: {
            avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
            name: "Siegbert Gottfried"
        },
        category: "Entrepreneurs",
        cover: "/assets/covers/minimal-2-4x4-large.png",
        publishedAt: subHours_default()(subMinutes_default()(subSeconds_default()(now, 6), 46), 16).getTime(),
        readTime: "3 min",
        shortDescription: "Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst.",
        title: "How Model View Controller (MVC) Architectures Work"
    },
    {
        id: "c597c300fe3f817c41a2f01d",
        author: {
            avatar: "/assets/avatars/avatar-iulia-albu.png",
            name: "Iulia Albu"
        },
        category: "Innovation",
        cover: "/assets/covers/minimal-1-4x4-large.png",
        publishedAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 52), 39), 7), 5).getTime(),
        readTime: "1 min",
        shortDescription: "Phasellus eu commodo lacus, eget tristique nunc. Ut ullamcorper semper nunc sit amet vehicula.",
        title: "Generating Passive Income Is Hard, Here Is a Better Option"
    }
];
const post = {
    id: "24b76cac9a128cd949747080",
    author: {
        avatar: "/assets/avatars/avatar-jie-yan-song.png",
        name: "Jie Yan Song"
    },
    category: "Programming",
    content: `
## Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.

Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor ex, non consequat ipsum aliquam at. Duis dapibus dolor in nisi viverra, a elementum nulla viverra. Etiam feugiat turpis leo, nec finibus diam rhoncus ac. Sed at metus et orci consequat facilisis vel vel diam.

## Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.
  

Etiam faucibus massa auctor gravida finibus.
Cras nulla magna, dapibus sit amet accumsan nec, ullamcorper sit amet dolor.

Donec leo nisi, porta et gravida nec, tincidunt ac velit. Aliquam in turpis a quam tempus dapibus. Morbi in tellus tempor, hendrerit mi vel, aliquet tellus. Quisque vel interdum ante. Nunc quis purus sem. Donec at risus lacinia ipsum cursus condimentum at ac dui. Nulla bibendum feugiat tellus ac tristique. Proin auctor, lectus et accumsan varius, justo odio vulputate neque, et efficitur augue leo id ex. Aliquam eget turpis nisl. Nam sapien massa, sollicitudin et vehicula a, fringilla vitae purus. Praesent a vestibulum felis.

\`\`\`javascript
// This is a comment

const x = () => {};

\`\`\`

Class aptent taciti sociosqu ad litora torquent \`const d = 3;\` per conubia nostra, per inceptos himenaeos. Morbi maximus metus eget nulla malesuada, sit amet luctus est fringilla. Aenean imperdiet rhoncus justo, ut pharetra lorem gravida placerat. Duis et enim lorem. Aliquam placerat elit est, vitae fermentum ipsum finibus sed. Donec dapibus magna non tortor commodo rhoncus. Suspendisse luctus tincidunt eros, aliquet pellentesque neque venenatis quis. Aliquam auctor felis nec orci ornare gravida. Fusce ac neque sit amet nibh scelerisque molestie. Nullam in lorem viverra, aliquam nunc vel, interdum orci. Fusce mattis est neque, et tincidunt justo blandit quis. Etiam tincidunt purus in libero semper, vitae placerat dui vehicula. Pellentesque sit amet imperdiet purus, quis lacinia eros.

Duis placerat turpis non metus dapibus sagittis. Vestibulum ex massa, tempus pulvinar varius at, placerat non justo. Ut tristique nisl sed porta pulvinar. Nunc ex nibh, tempor eget elit vel, fringilla ornare risus. Praesent vel lacus finibus, laoreet nulla quis, semper tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat quis dui ac varius. Suspendisse potenti. Maecenas sagittis lacus vitae ex rhoncus, eu fringilla urna luctus.

## Donec vel erat augue. Aenean ut nisl cursus nulla tempus ultricies vel eget lorem.

Suspendisse pharetra dolor in massa molestie, vel molestie nunc accumsan. Cras varius aliquet pellentesque. Curabitur ac mi fermentum nibh congue pharetra in eu nunc. Vivamus mattis urna a fringilla facilisis. Cras finibus nulla in nulla imperdiet pharetra. Morbi vel tortor turpis.
`,
    cover: "/assets/covers/business-2-4x4-large.png",
    publishedAt: subMinutes_default()(subSeconds_default()(now, 16), 45).getTime(),
    readTime: "5 min",
    shortDescription: "Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.",
    title: "Why I Still Lisp, and You Should Too"
};

;// CONCATENATED MODULE: ./src/api/blog/index.ts


class BlogApi {
    getPosts(request = {}) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(posts));
    }
    getPost(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(post));
    }
}
const blogApi = new BlogApi();


/***/ }),

/***/ 20592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ BreadcrumbsSeparator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);


const BreadcrumbsSeparator = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            backgroundColor: "neutral.500",
            borderRadius: "50%",
            height: 4,
            width: 4
        }
    });


/***/ }),

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

/***/ 52895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostNewsletter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);







const PostNewsletter = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
        elevation: 16,
        sx: {
            py: 10,
            px: 8
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                    xs: 12,
                    md: 6,
                    sx: {
                        order: {
                            xs: 1,
                            md: 0
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            variant: "h4",
                            children: "Join the developer list"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            color: "text.secondary",
                            variant: "body2",
                            sx: {
                                mb: 3,
                                mt: 1
                            },
                            children: "Subscribe to our newsletter to make sure you don't miss anything."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                            fullWidth: true,
                            label: "Email address",
                            name: "email",
                            sx: {
                                flexGrow: 1
                            },
                            type: "email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                            fullWidth: true,
                            size: "large",
                            sx: {
                                mt: 2
                            },
                            variant: "contained",
                            children: "Subscribe"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                    xs: 12,
                    md: 6,
                    sx: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                        component: "img",
                        src: "/assets/iconly/iconly-glass-volume.svg",
                        sx: {
                            maxWidth: "100%",
                            width: 260
                        }
                    })
                })
            ]
        })
    });
};


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


/***/ }),

/***/ 59586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ getInitials)
/* harmony export */ });
const getInitials = (name = "")=>name.replace(/\s+/, " ").split(" ").slice(0, 2).map((v)=>v && v[0].toUpperCase()).join("");


/***/ })

};
;