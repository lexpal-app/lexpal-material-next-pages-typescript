"use strict";
exports.id = 9756;
exports.ids = [9756];
exports.modules = {

/***/ 70450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ customersApi)
});

// EXTERNAL MODULE: ./src/utils/apply-pagination.ts
var apply_pagination = __webpack_require__(79643);
// EXTERNAL MODULE: ./src/utils/apply-sort.ts
var apply_sort = __webpack_require__(72486);
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
;// CONCATENATED MODULE: ./src/api/customers/data.ts




const now = new Date();
const customers = [
    {
        id: "5e887ac47eed253091be10cb",
        avatar: "/assets/avatars/avatar-carson-darrin.png",
        city: "Cleveland",
        country: "USA",
        currency: "$",
        email: "carson.darrin@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: "Carson Darrin",
        state: "Ohio",
        totalSpent: 300.0,
        totalOrders: 3,
        updatedAt: subDays_default()(subHours_default()(now, 7), 1).getTime()
    },
    {
        id: "5e887b209c28ac3dd97f6db5",
        avatar: "/assets/avatars/avatar-fran-perez.png",
        city: "Atlanta",
        country: "USA",
        currency: "$",
        email: "fran.perez@devias.io",
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: "Fran Perez",
        state: "Georgia",
        totalSpent: 0.0,
        totalOrders: 0,
        updatedAt: subDays_default()(subHours_default()(now, 1), 2).getTime()
    },
    {
        id: "5e887b7602bdbc4dbb234b27",
        avatar: "/assets/avatars/avatar-jie-yan-song.png",
        city: "North Canton",
        country: "USA",
        currency: "$",
        email: "jie.yan.song@devias.io",
        hasAcceptedMarketing: false,
        isProspect: false,
        isReturning: false,
        name: "Jie Yan Song",
        state: "Ohio",
        totalSpent: 5600.0,
        totalOrders: 6,
        updatedAt: subDays_default()(subHours_default()(now, 4), 2).getTime()
    },
    {
        id: "5e86809283e28b96d2d38537",
        avatar: "/assets/avatars/avatar-anika-visser.png",
        city: "Madrid",
        country: "Spain",
        currency: "$",
        email: "anika.visser@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: "Anika Visser",
        state: "Madrid",
        totalSpent: 500.0,
        totalOrders: 1,
        updatedAt: subDays_default()(subHours_default()(now, 11), 2).getTime()
    },
    {
        id: "5e86805e2bafd54f66cc95c3",
        avatar: "/assets/avatars/avatar-miron-vitold.png",
        city: "San Diego",
        country: "USA",
        currency: "$",
        email: "miron.vitold@devias.io",
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: "Miron Vitold",
        totalSpent: 0.0,
        totalOrders: 0,
        state: "California",
        updatedAt: subDays_default()(subHours_default()(now, 7), 3).getTime()
    },
    {
        id: "5e887a1fbefd7938eea9c981",
        avatar: "/assets/avatars/avatar-penjani-inyene.png",
        city: "Berkeley",
        country: "USA",
        currency: "$",
        email: "penjani.inyene@devias.io",
        hasAcceptedMarketing: false,
        isProspect: true,
        isReturning: false,
        name: "Penjani Inyene",
        state: "California",
        totalSpent: 0.0,
        totalOrders: 0,
        updatedAt: subDays_default()(subHours_default()(now, 5), 4).getTime()
    },
    {
        id: "5e887d0b3d090c1b8f162003",
        avatar: "/assets/avatars/avatar-omar-darboe.png",
        currency: "$",
        email: "omar.darobe@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: false,
        city: "Carson City",
        country: "USA",
        name: "Omar Darobe",
        state: "Nevada",
        totalSpent: 100.0,
        totalOrders: 4,
        updatedAt: subDays_default()(subHours_default()(now, 15), 4).getTime()
    },
    {
        id: "5e88792be2d4cfb4bf0971d9",
        avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
        city: "Los Angeles",
        country: "USA",
        currency: "$",
        email: "siegbert.gottfried@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: "Siegbert Gottfried",
        state: "California",
        totalSpent: 1000.0,
        totalOrders: 2,
        updatedAt: subDays_default()(subHours_default()(now, 2), 5).getTime()
    },
    {
        id: "5e8877da9a65442b11551975",
        avatar: "/assets/avatars/avatar-iulia-albu.png",
        city: "Murray",
        country: "USA",
        email: "iulia.albu@devias.io",
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: "Iulia Albu",
        state: "Utah",
        totalSpent: 0.0,
        totalOrders: 0,
        updatedAt: subDays_default()(subHours_default()(now, 8), 6).getTime()
    },
    {
        id: "5e8680e60cba5019c5ca6fda",
        avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
        city: "Salt Lake City",
        country: "USA",
        currency: "$",
        email: "nasimiyu.danai@devias.io",
        hasAcceptedMarketing: false,
        isProspect: false,
        isReturning: true,
        name: "Nasimiyu Danai",
        state: "Utah",
        totalSpent: 200.0,
        totalOrders: 7,
        updatedAt: subDays_default()(subHours_default()(now, 1), 9).getTime()
    }
];
const customer = {
    id: "5e86805e2bafd54f66cc95c3",
    address1: "Street John Wick, no. 7",
    address2: "House #25",
    avatar: "/assets/avatars/avatar-miron-vitold.png",
    balance: 0,
    city: "San Diego",
    country: "USA",
    currency: "$",
    email: "miron.vitold@devias.io",
    hasDiscount: false,
    isVerified: true,
    name: "Miron Vitold",
    phone: "+55 748 327 439",
    state: "New York",
    vatRate: 19,
    zipCode: "240355"
};
const emails = [
    {
        id: "5ece2ce3613486d95ffaea58",
        createdAt: subDays_default()(subHours_default()(subMinutes_default()(now, 34), 5), 3).getTime(),
        description: "Order confirmation"
    },
    {
        id: "5ece2ce8cebf7ad1d100c0cd",
        createdAt: subDays_default()(subHours_default()(subMinutes_default()(now, 49), 11), 4).getTime(),
        description: "Order confirmation"
    }
];
const invoices = [
    {
        id: "528651571NT",
        issueDate: now.getTime(),
        status: "paid",
        amount: 1358.75
    },
    {
        id: "311658671JR",
        issueDate: now.getTime(),
        status: "unpaid",
        amount: 1451.75
    }
];
const logs = [
    {
        id: "5ece2cfeb6e2ac847bba11ce",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 56), 2), 2).getTime(),
        description: "Purchase",
        ip: "84.234.243.42",
        method: "POST",
        route: "/api/purchase",
        status: 200
    },
    {
        id: "5ece2d02510484b2952e1e05",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 56), 2), 2).getTime(),
        description: "Purchase",
        ip: "84.234.243.42",
        method: "POST",
        route: "/api/purchase",
        status: 522
    },
    {
        id: "5ece2d08e2748e4e9788901a",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 23), 8), 2).getTime(),
        description: "Cart remove",
        ip: "84.234.243.42",
        method: "DELETE",
        route: "/api/products/d65654e/remove",
        status: 200
    },
    {
        id: "5ece2d0c47214e342c2d7f28",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 54), 20), 2).getTime(),
        description: "Cart add",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products/d65654e/add",
        status: 200
    },
    {
        id: "5ece2d11e4060a97b2b57623",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 16), 34), 2).getTime(),
        description: "Cart add",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products/c85727f/add",
        status: 200
    },
    {
        id: "5ece2d16cf6d53d8e33656af",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 30), 54), 2).getTime(),
        description: "View product",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products/c85727f",
        status: 200
    },
    {
        id: "5ece2d1b2ec5071be9286a96",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 40), 56), 2).getTime(),
        description: "Get products",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products",
        status: 200
    },
    {
        id: "5ece2d22e68d5498917e47bc",
        createdAt: subDays_default()(subMinutes_default()(subSeconds_default()(now, 5), 57), 2).getTime(),
        description: "Login",
        ip: "84.234.243.42",
        method: "POST",
        route: "/api/auth/login",
        status: 200
    }
];

;// CONCATENATED MODULE: ./src/api/customers/index.ts




class CustomersApi {
    getCustomers(request = {}) {
        const { filters, page, rowsPerPage, sortBy, sortDir } = request;
        let data = (0,deep_copy/* deepCopy */.p)(customers);
        let count = data.length;
        if (typeof filters !== "undefined") {
            data = data.filter((customer)=>{
                if (typeof filters.query !== "undefined" && filters.query !== "") {
                    let queryMatched = false;
                    const properties = [
                        "email",
                        "name"
                    ];
                    properties.forEach((property)=>{
                        if (customer[property].toLowerCase().includes(filters.query.toLowerCase())) {
                            queryMatched = true;
                        }
                    });
                    if (!queryMatched) {
                        return false;
                    }
                }
                if (typeof filters.hasAcceptedMarketing !== "undefined") {
                    if (customer.hasAcceptedMarketing !== filters.hasAcceptedMarketing) {
                        return false;
                    }
                }
                if (typeof filters.isProspect !== "undefined") {
                    if (customer.isProspect !== filters.isProspect) {
                        return false;
                    }
                }
                if (typeof filters.isReturning !== "undefined") {
                    if (customer.isReturning !== filters.isReturning) {
                        return false;
                    }
                }
                return true;
            });
            count = data.length;
        }
        if (typeof sortBy !== "undefined" && typeof sortDir !== "undefined") {
            data = (0,apply_sort/* applySort */.v)(data, sortBy, sortDir);
        }
        if (typeof page !== "undefined" && typeof rowsPerPage !== "undefined") {
            data = (0,apply_pagination/* applyPagination */.i)(data, page, rowsPerPage);
        }
        return Promise.resolve({
            data,
            count
        });
    }
    getCustomer(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(customer));
    }
    getEmails(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(emails));
    }
    getInvoices(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(invoices));
    }
    getLogs(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(logs));
    }
}
const customersApi = new CustomersApi();


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