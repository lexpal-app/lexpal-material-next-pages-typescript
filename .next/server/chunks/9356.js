"use strict";
exports.id = 9356;
exports.ids = [9356];
exports.modules = {

/***/ 72357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ jobsApi)
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
;// CONCATENATED MODULE: ./src/api/jobs/data.ts




const now = new Date();
const companies = [
    {
        id: "GR-2FR43",
        averageRating: 4.5,
        employees: "50-100",
        isVerified: true,
        jobs: [
            {
                id: "560a3dfd48c1602f4ff5d6ac",
                currency: "$",
                isRemote: true,
                publishedAt: subMinutes_default()(now, 24).getTime(),
                salaryMax: "75k",
                salaryMin: "55k",
                title: "Remote React / React Native Developer"
            },
            {
                id: "6681e0dbfab15e83498b0d10",
                city: "Munich",
                country: "Germany",
                currency: "$",
                publishedAt: subHours_default()(now, 2).getTime(),
                salaryMax: "160k",
                salaryMin: "80k",
                title: "Senior Golang Backend Engineer"
            }
        ],
        logo: "/assets/companies/company-logo-1.svg",
        name: "Augmastic Inc.",
        shortDescription: "Building technologies and ideas that move us as the leaders in Augmented Reality"
    },
    {
        id: "FR-58F46",
        averageRating: 4.3,
        employees: "50-100",
        isVerified: false,
        jobs: [
            {
                id: "52cf72df2a519538d3d8a18d",
                currency: "$",
                isRemote: true,
                publishedAt: subHours_default()(now, 1).getTime(),
                salaryMax: "160k",
                salaryMin: "80k",
                title: "Remote React / React Native Developer"
            }
        ],
        logo: "/assets/companies/company-logo-2.svg",
        name: "Cryptomania SRL",
        shortDescription: "Monitor and optimize your content for long-term audience loyalty"
    },
    {
        id: "FR-2X70G",
        averageRating: 4.5,
        employees: "50-100",
        isVerified: false,
        jobs: [
            {
                id: "5f59ed345f6527d6dbb81339",
                currency: "$",
                isRemote: true,
                publishedAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 52), 39), 7), 5).getTime(),
                salaryMax: "210k",
                salaryMin: "150k",
                title: "Senior Backend Engineer"
            }
        ],
        logo: "/assets/companies/company-logo-3.svg",
        name: "Talkster Inc.",
        shortDescription: "Discover innovative companies and the people behind them"
    },
    {
        id: "RO-1K6WE",
        averageRating: 4.9,
        employees: "1-10",
        isVerified: true,
        jobs: [
            {
                id: "96b71438ad92a9c729111680",
                currency: "$",
                isRemote: true,
                publishedAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 41), 89), 45), 8).getTime(),
                salaryMax: "160k",
                salaryMin: "80k",
                title: "Mid Frontend Developer"
            }
        ],
        logo: "/assets/companies/company-logo-4.svg",
        name: "Devias IO SRL",
        shortDescription: "Impact-ready developer tools and templates"
    }
];
const company = {
    id: "GR-2FR43",
    activities: [
        {
            id: "f66e15066cc6bf1c903f0c81",
            addedJob: "Remote React / React Native Developer",
            author: "Jie Yang Song",
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 3), 7), 5), 81).getTime(),
            type: "new_job"
        },
        {
            id: "e756e1393b620f87728ab28b",
            addedJob: "Senior Golang Backend Engineer",
            author: "Anika Visser",
            avatar: "/assets/avatars/avatar-iulia-albu.png",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 3), 7), 5), 82).getTime(),
            type: "new_job"
        },
        {
            id: "f80b8d4ed2a0ed9099593d39",
            addedMember: "Omar Darboe",
            author: "Jie Yang Song",
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 3), 7), 5), 83).getTime(),
            type: "new_team_member"
        },
        {
            id: "53b48b76b01ed00bddee2038",
            author: "Jie Yang Song",
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 3), 7), 5), 84).getTime(),
            createdCompany: "Augmastic Inc",
            type: "created"
        }
    ],
    assets: [
        {
            id: "08514371b9d92f92f12c8b0a",
            extension: "png",
            fileName: "company-cover.png",
            size: "23 Kb",
            url: "/assets/covers/abstract-2-4x4-small.png"
        },
        {
            id: "e7626dd2086bf8a7aa6a991d",
            extension: "pdf",
            fileName: "Presentation.pdf",
            size: "3 Mb",
            url: ""
        }
    ],
    averageRating: 3.66,
    description: `Augmastic is the world’s leading AR technology company, sparking creative and engaging journeys in the real world. Our products inspire outdoor exploration, exercise, and meaningful social interaction. 

 Originally formed at Google in 2011, we became an independent company in 2015 with a strong group of investors including Nintendo, The Pokémon Company, and Alsop Louie Partners. 

Niantic is an Equal Opportunity and Affirmative Action employer. We believe that cultivating a workplace where our people are supported and included is essential to creating great products our community will love. 

Our mission emphasizes seeking and hiring diverse voices, including those who are traditionally underrepresented in the technology industry, and we consider this to be one of the most important values we hold close. We're a hard-working, fun, and exciting group who value intellectual curiosity and a passion for problem-solving! We have growing offices located in San Francisco, Sunnyvale, Bellevue, Los Angeles, Tokyo, Hamburg, London, and Zurich.`,
    employees: "50-100",
    founders: [
        {
            id: "5e8883f7ed1486d665d8be1e",
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            name: "Jie Yang Song",
            role: "CEO & Co-founder"
        },
        {
            id: "5e887b209c28ac3dd97f6db5",
            avatar: "/assets/avatars/avatar-fran-perez.png",
            name: "Fran Perez",
            role: "CTO & Co-founder"
        },
        {
            id: "d058d861d43bbb36fb73b0bc",
            avatar: "/assets/avatars/avatar-omar-darboe.png",
            name: "Omar Darboe",
            role: "CFO"
        }
    ],
    images: [
        "/assets/gallery/gallery-1.jpg",
        "/assets/gallery/gallery-2.jpg",
        "/assets/gallery/gallery-3.jpg",
        "/assets/gallery/gallery-4.jpg",
        "/assets/gallery/gallery-5.jpg",
        "/assets/gallery/gallery-6.jpg"
    ],
    isVerified: true,
    jobs: [
        {
            id: "560a3dfd48c1602f4ff5d6ac",
            currency: "$",
            isRemote: true,
            publishedAt: subMinutes_default()(now, 24).getTime(),
            salaryMax: "75k",
            salaryMin: "55k",
            title: "Remote React / React Native Developer"
        },
        {
            id: "6681e0dbfab15e83498b0d10",
            city: "Munich",
            country: "Germany",
            currency: "$",
            publishedAt: subHours_default()(now, 2).getTime(),
            salaryMax: "160k",
            salaryMin: "80k",
            title: "Senior Golang Backend Engineer"
        }
    ],
    locations: [
        "New York City",
        "Milano",
        "Moscow"
    ],
    logo: "/assets/companies/company-logo-1.svg",
    members: [
        {
            id: "5e8883f7ed1486d665d8be1e",
            avatar: "/assets/avatars/avatar-jie-yan-song.png",
            name: "Jie Yang Song",
            role: "CEO & Co-founder",
            skills: [
                "JavaScript",
                "React",
                "Go"
            ]
        },
        {
            id: "5e887b209c28ac3dd97f6db5",
            avatar: "/assets/avatars/avatar-fran-perez.png",
            name: "Fran Perez",
            role: "CTO & Co-founder",
            skills: [
                "C",
                "C++",
                "Java"
            ]
        },
        {
            id: "d058d861d43bbb36fb73b0bc",
            avatar: "/assets/avatars/avatar-omar-darboe.png",
            name: "Omar Darboe",
            role: "CFO",
            skills: [
                "Go",
                "Python"
            ]
        }
    ],
    name: "Augmastic Inc.",
    reviews: [
        {
            id: "ab8ed24cd579605c386e1275",
            author: "Anika Visser",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 4), 9), 4), 2).getTime(),
            description: "I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.",
            rating: 3.8,
            title: "Great company, providing an awesome & easy to use product"
        },
        {
            id: "973a87618e946f08ea8d8491",
            author: "Victor Plesoianu",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 4), 9), 4), 25).getTime(),
            description: "Every day you learn something new - that is a typical day at work in Augmastic. I am surrounded by supportive people, from different cultures, we have a strong and unified team and help each other whenever is needed. The most enjoyable part of the job is that you meet new people, experts on different disciplines that might help you in your work, but the hardest part of the job is that there are too many tools and systems to use.",
            rating: 3.4,
            title: "Friendly environment"
        },
        {
            id: "7fdf64061aba2fd67d732006",
            author: "Victor Plesoianu",
            createdAt: subDays_default()(subHours_default()(subMinutes_default()(subSeconds_default()(now, 4), 9), 4), 70).getTime(),
            description: "I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.",
            rating: 3.8,
            title: "Great company, providing an awesome & easy to use product"
        }
    ],
    shortDescription: "Building technologies and ideas that move us as the leaders in Augmented Reality",
    website: "https://augmastic.dev"
};

;// CONCATENATED MODULE: ./src/api/jobs/index.ts


class JobsApi {
    getCompanies(request = {}) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(companies));
    }
    getCompany(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(company));
    }
}
const jobsApi = new JobsApi();


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

/***/ 15601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ CompanyJobs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_formatDistanceStrict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59447);
/* harmony import */ var date_fns_formatDistanceStrict__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceStrict__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);








const CompanyJobs = (props)=>{
    const { jobs = [], ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {
        variant: "outlined",
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
            divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {}),
            children: jobs.map((job)=>{
                const location = job.isRemote ? "Remote possible" : `(${job.country}, ${job.city})`;
                const publishedAt = date_fns_formatDistanceStrict__WEBPACK_IMPORTED_MODULE_2___default()(job.publishedAt, new Date(), {
                    addSuffix: true
                });
                const salary = `${job.currency}${job.salaryMin} - ${job.currency}${job.salaryMax}`;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                    alignItems: "center",
                    direction: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    sx: {
                        px: 2,
                        py: 1.5
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "subtitle1",
                                    children: job.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    color: "text.secondary",
                                    variant: "caption",
                                    children: [
                                        location,
                                        " • ",
                                        salary
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                            alignItems: "center",
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    color: "text.secondary",
                                    variant: "caption",
                                    children: publishedAt
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    size: "small",
                                    children: "Apply"
                                })
                            ]
                        })
                    ]
                }, job.id);
            })
        })
    });
};
CompanyJobs.propTypes = {
    jobs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
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