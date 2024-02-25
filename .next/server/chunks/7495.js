"use strict";
exports.id = 7495;
exports.ids = [7495];
exports.modules = {

/***/ 82623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ socialApi)
});

// EXTERNAL MODULE: ./src/utils/deep-copy.ts
var deep_copy = __webpack_require__(35634);
// EXTERNAL MODULE: external "date-fns/subHours"
var subHours_ = __webpack_require__(97863);
var subHours_default = /*#__PURE__*/__webpack_require__.n(subHours_);
// EXTERNAL MODULE: external "date-fns/subMinutes"
var subMinutes_ = __webpack_require__(54548);
var subMinutes_default = /*#__PURE__*/__webpack_require__.n(subMinutes_);
;// CONCATENATED MODULE: ./src/api/social/data.ts


const now = new Date();
const profile = {
    id: "5e86809283e28b96d2d38537",
    avatar: "/assets/avatars/avatar-anika-visser.png",
    bio: "Product Designer",
    connectedStatus: "not_connected",
    cover: "/assets/covers/abstract-1-4x3-large.png",
    currentCity: "Bucharest",
    currentJobCompany: "Devias IO",
    currentJobTitle: "Product Designer",
    email: "anika.visser@devias.io",
    name: "Anika Visser",
    originCity: "Rm. Valcea",
    previousJobCompany: "Focus Aesthetic Dynamics",
    previousJobTitle: "UX Designer",
    profileProgress: 50,
    quote: "Everyone thinks of changing the world, but no one thinks of changing himself."
};
const connections = [
    {
        id: "5e887ac47eed253091be10cb",
        avatar: "/assets/avatars/avatar-carson-darrin.png",
        commonConnections: 10,
        name: "Carson Darrin",
        status: "rejected"
    },
    {
        id: "5e887b209c28ac3dd97f6db5",
        avatar: "/assets/avatars/avatar-fran-perez.png",
        commonConnections: 8,
        name: "Fran Perez",
        status: "pending"
    },
    {
        id: "5e86805e2bafd54f66cc95c3",
        avatar: "/assets/avatars/avatar-miron-vitold.png",
        commonConnections: 5,
        name: "Miron Vitold",
        status: "not_connected"
    },
    {
        id: "5e887a1fbefd7938eea9c981",
        avatar: "/assets/avatars/avatar-penjani-inyene.png",
        commonConnections: 1,
        name: "Penjani Inyene",
        status: "connected"
    }
];
const posts = [
    {
        id: "5e887faca2b7a1ddce01221a",
        author: {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Anika Visser"
        },
        comments: [
            {
                id: "5e887fc17162ba254da30771",
                author: {
                    id: "5e887b7602bdbc4dbb234b27",
                    avatar: "/assets/avatars/avatar-jie-yan-song.png",
                    name: "Jie Yan Song"
                },
                createdAt: subHours_default()(now, 3).getTime(),
                message: "Could use some more statistics, but that’s me haha"
            },
            {
                id: "5e887fc759bebe8d5d54a2e5",
                author: {
                    id: "5e887a1fbefd7938eea9c981",
                    avatar: "/assets/avatars/avatar-penjani-inyene.png",
                    name: "Penjani Inyene"
                },
                createdAt: subHours_default()(now, 2).getTime(),
                message: "Hmm, honestly this looks nice but I would change the shadow though"
            }
        ],
        createdAt: subHours_default()(now, 4).getTime(),
        isLiked: true,
        likes: 24,
        media: "/assets/covers/minimal-1-4x3-large.png",
        message: "Just made this overview screen for a project, what-cha thinkin?"
    },
    {
        id: "5e887faf03e78a5359765636",
        author: {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Anika Visser"
        },
        comments: [
            {
                id: "5e887fde4992eca63b9e9ef5",
                author: {
                    id: "5e8877da9a65442b11551975",
                    avatar: "/assets/avatars/avatar-iulia-albu.png",
                    name: "Iulia Albu"
                },
                createdAt: subHours_default()(now, 3).getTime(),
                message: "That’s actually deep. Thanks for the design, would you consider making an interaction?"
            },
            {
                id: "5e887feb11b7add1ebfcca78",
                author: {
                    id: "5e887b209c28ac3dd97f6db5",
                    avatar: "/assets/avatars/avatar-fran-perez.png",
                    name: "Fran Perez"
                },
                createdAt: subHours_default()(now, 2).getTime(),
                message: "Oh... so sentimental"
            }
        ],
        createdAt: subHours_default()(now, 7).getTime(),
        isLiked: false,
        likes: 65,
        message: "As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it."
    }
];
const feed = [
    {
        id: "5e887fa38598b6fe61667757",
        author: {
            id: "5e88792be2d4cfb4bf0971d9",
            avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
            name: "Siegbert Gottfried"
        },
        comments: [
            {
                id: "5e887fb6c648772b52f860a8",
                author: {
                    id: "5e8680e60cba5019c5ca6fda",
                    avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
                    name: "Nasimiyu Danai"
                },
                createdAt: subHours_default()(now, 3).getTime(),
                message: "I've been using Angular for the past 3 years"
            }
        ],
        createdAt: subMinutes_default()(now, 16).getTime(),
        isLiked: true,
        likes: 1,
        message: "Hey guys! What's your favorite framework?"
    },
    {
        id: "5e887faca2b7a1ddce01221a",
        author: {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Anika Visser"
        },
        comments: [
            {
                id: "5e887fc17162ba254da30771",
                author: {
                    id: "5e887b7602bdbc4dbb234b27",
                    avatar: "/assets/avatars/avatar-jie-yan-song.png",
                    name: "Jie Yan Song"
                },
                createdAt: subHours_default()(now, 3).getTime(),
                message: "Could use some more statistics, but that’s me haha"
            },
            {
                id: "5e887fc759bebe8d5d54a2e5",
                author: {
                    id: "5e887a1fbefd7938eea9c981",
                    avatar: "/assets/avatars/avatar-penjani-inyene.png",
                    name: "Penjani Inyene"
                },
                createdAt: subHours_default()(now, 2).getTime(),
                message: "Hmm, honestly this looks nice but I would change the shadow though"
            }
        ],
        createdAt: subHours_default()(now, 4).getTime(),
        isLiked: true,
        likes: 24,
        media: "/assets/covers/minimal-1-4x3-large.png",
        message: "Just made this overview screen for a project, what-cha thinkin?"
    },
    {
        id: "5e887faf03e78a5359765636",
        author: {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Anika Visser"
        },
        comments: [
            {
                id: "5e887fde4992eca63b9e9ef5",
                author: {
                    id: "5e8877da9a65442b11551975",
                    avatar: "/assets/avatars/avatar-iulia-albu.png",
                    name: "Iulia Albu"
                },
                createdAt: subHours_default()(now, 3).getTime(),
                message: "That’s actually deep. Thanks for the design, would you consider making an interaction?"
            },
            {
                id: "5e887feb11b7add1ebfcca78",
                author: {
                    id: "5e887b209c28ac3dd97f6db5",
                    avatar: "/assets/avatars/avatar-fran-perez.png",
                    name: "Fran Perez"
                },
                createdAt: subHours_default()(now, 2).getTime(),
                message: "Oh... so sentimental"
            }
        ],
        createdAt: subHours_default()(now, 7).getTime(),
        isLiked: false,
        likes: 65,
        message: "As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it."
    }
];

;// CONCATENATED MODULE: ./src/api/social/index.ts


class SocialApi {
    getProfile(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(profile));
    }
    getConnections(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(connections));
    }
    getPosts(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(posts));
    }
    getFeed(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(feed));
    }
}
const socialApi = new SocialApi();


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

/***/ 76778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ SocialPostAdd)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Attachment01__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35485);
/* harmony import */ var _untitled_ui_icons_react_build_esm_FaceSmile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59938);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Image01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63692);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Link01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71471);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_hooks_use_mocked_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21991);
/* harmony import */ var src_utils_get_initials__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59586);
















const SocialPostAdd = (props)=>{
    const user = (0,src_hooks_use_mocked_user__WEBPACK_IMPORTED_MODULE_14__/* .useMockedUser */ .I)();
    const smUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_13___default()((theme)=>theme.breakpoints.up("sm"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_7___default()), {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11___default()), {
                alignItems: "flex-start",
                direction: "row",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), {
                        src: user.avatar,
                        sx: {
                            height: 40,
                            width: 40
                        },
                        children: (0,src_utils_get_initials__WEBPACK_IMPORTED_MODULE_15__/* .getInitials */ .Q)(user.name)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11___default()), {
                        spacing: 3,
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default()), {
                                fullWidth: true,
                                multiline: true,
                                placeholder: "What's on your mind",
                                rows: 3
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11___default()), {
                                alignItems: "center",
                                direction: "row",
                                justifyContent: "space-between",
                                spacing: 3,
                                children: [
                                    smUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        alignItems: "center",
                                        direction: "row",
                                        spacing: 1,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Image01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Attachment01__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Link01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_FaceSmile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            variant: "contained",
                                            children: "Post"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 20777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ SocialPostCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "date-fns/formatDistanceToNowStrict"
var formatDistanceToNowStrict_ = __webpack_require__(30901);
var formatDistanceToNowStrict_default = /*#__PURE__*/__webpack_require__.n(formatDistanceToNowStrict_);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Clock.js
var Clock = __webpack_require__(10304);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Heart.js
var Heart = __webpack_require__(9973);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Share07.js
var Share07 = __webpack_require__(91592);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(52120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(68167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardActionArea"
var CardActionArea_ = __webpack_require__(82592);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(19361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(46731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(73646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(85246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(28742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/SvgIcon"
var SvgIcon_ = __webpack_require__(38356);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(27229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(27163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./src/sections/dashboard/social/social-comment.tsx








const SocialComment = (props)=>{
    const { authorAvatar, authorName, createdAt, message, ...other } = props;
    const ago = formatDistanceToNowStrict_default()(createdAt);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
        alignItems: "flex-start",
        direction: "row",
        spacing: 2,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                component: "a",
                href: "#",
                src: authorAvatar
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                spacing: 1,
                sx: {
                    backgroundColor: (theme)=>theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
                    borderRadius: 1,
                    flexGrow: 1,
                    p: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                                color: "text.primary",
                                href: "#",
                                variant: "subtitle2",
                                children: authorName
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                                color: "text.secondary",
                                variant: "caption",
                                children: [
                                    ago,
                                    " ago"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                        variant: "body2",
                        children: message
                    })
                ]
            })
        ]
    });
};
SocialComment.propTypes = {
    authorAvatar: (external_prop_types_default()).string.isRequired,
    authorName: (external_prop_types_default()).string.isRequired,
    createdAt: (external_prop_types_default()).number.isRequired,
    message: (external_prop_types_default()).string.isRequired
};

// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/FaceSmile.js
var FaceSmile = __webpack_require__(59938);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Link01.js
var Link01 = __webpack_require__(71471);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Attachment01.js
var Attachment01 = __webpack_require__(35485);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Plus.js
var Plus = __webpack_require__(10216);
// EXTERNAL MODULE: ./node_modules/@untitled-ui/icons-react/build/esm/Image01.js
var Image01 = __webpack_require__(63692);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(53819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(36042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(69868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: ./src/hooks/use-mocked-user.ts
var use_mocked_user = __webpack_require__(21991);
// EXTERNAL MODULE: ./src/utils/get-initials.ts
var get_initials = __webpack_require__(59586);
;// CONCATENATED MODULE: ./src/sections/dashboard/social/social-comment-add.tsx















const SocialCommentAdd = (props)=>{
    const smUp = useMediaQuery_default()((theme)=>theme.breakpoints.up("sm"));
    const user = (0,use_mocked_user/* useMockedUser */.I)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
            alignItems: "flex-start",
            direction: "row",
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                    src: user.avatar,
                    sx: {
                        height: 40,
                        width: 40
                    },
                    children: (0,get_initials/* getInitials */.Q)(user.name)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    spacing: 3,
                    sx: {
                        flexGrow: 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((TextField_default()), {
                            fullWidth: true,
                            multiline: true,
                            placeholder: "Type your reply",
                            rows: 3,
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                    alignItems: "center",
                                    direction: "row",
                                    spacing: 1,
                                    children: [
                                        !smUp && /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(Plus/* default */.Z, {})
                                            })
                                        }),
                                        smUp && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(Image01/* default */.Z, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(Attachment01/* default */.Z, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(Link01/* default */.Z, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(FaceSmile/* default */.Z, {})
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                        variant: "contained",
                                        children: "Send"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/dashboard/social/social-post-card.tsx






















const SocialPostCard = (props)=>{
    const { authorAvatar, authorName, comments, createdAt, isLiked: isLikedProp, likes: likesProp, media, message, ...other } = props;
    const [isLiked, setIsLiked] = (0,external_react_.useState)(isLikedProp);
    const [likes, setLikes] = (0,external_react_.useState)(likesProp);
    const handleLike = (0,external_react_.useCallback)(()=>{
        setIsLiked(true);
        setLikes((prevLikes)=>prevLikes + 1);
    }, []);
    const handleUnlike = (0,external_react_.useCallback)(()=>{
        setIsLiked(false);
        setLikes((prevLikes)=>prevLikes - 1);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((CardHeader_default()), {
                avatar: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                    component: "a",
                    href: "#",
                    src: authorAvatar
                }),
                disableTypography: true,
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    alignItems: "center",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                            color: "action",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Clock/* default */.Z, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                            color: "text.secondary",
                            variant: "caption",
                            children: [
                                formatDistanceToNowStrict_default()(createdAt),
                                " ago"
                            ]
                        })
                    ]
                }),
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    alignItems: "center",
                    direction: "row",
                    spacing: 0.5,
                    sx: {
                        mb: 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                            color: "text.primary",
                            href: "#",
                            variant: "subtitle2",
                            children: authorName
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            variant: "body2",
                            children: "updated her status"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                sx: {
                    pb: 2,
                    px: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                        variant: "body1",
                        children: message
                    }),
                    media && /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                        sx: {
                            mt: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((CardActionArea_default()), {
                            children: /*#__PURE__*/ jsx_runtime.jsx((CardMedia_default()), {
                                image: media,
                                sx: {
                                    backgroundPosition: "top",
                                    height: 500
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        alignItems: "center",
                        direction: "row",
                        justifyContent: "space-between",
                        spacing: 2,
                        sx: {
                            mt: 2
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                    alignItems: "center",
                                    direction: "row",
                                    children: [
                                        isLiked ? /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Unlike",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                                onClick: handleUnlike,
                                                children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                    sx: {
                                                        color: "error.main",
                                                        "& path": {
                                                            fill: (theme)=>theme.palette.error.main,
                                                            fillOpacity: 1
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Heart/* default */.Z, {})
                                                })
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Like",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                                onClick: handleLike,
                                                children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Heart/* default */.Z, {})
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            color: "text.secondary",
                                            variant: "subtitle2",
                                            children: likes
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((SvgIcon_default()), {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(Share07/* default */.Z, {})
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                        sx: {
                            my: 3
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                        spacing: 3,
                        children: comments.map((comment)=>/*#__PURE__*/ jsx_runtime.jsx(SocialComment, {
                                authorAvatar: comment.author.avatar,
                                authorName: comment.author.name,
                                createdAt: comment.createdAt,
                                message: comment.message
                            }, comment.id))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                        sx: {
                            my: 3
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(SocialCommentAdd, {})
                ]
            })
        ]
    });
};
SocialPostCard.propTypes = {
    authorAvatar: (external_prop_types_default()).string.isRequired,
    authorName: (external_prop_types_default()).string.isRequired,
    comments: (external_prop_types_default()).array.isRequired,
    createdAt: (external_prop_types_default()).number.isRequired,
    isLiked: (external_prop_types_default()).bool.isRequired,
    likes: (external_prop_types_default()).number.isRequired,
    media: (external_prop_types_default()).string,
    message: (external_prop_types_default()).string.isRequired
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