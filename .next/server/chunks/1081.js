"use strict";
exports.id = 1081;
exports.ids = [1081];
exports.modules = {

/***/ 18469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ invoicesApi)
});

// EXTERNAL MODULE: external "date-fns/endOfDay"
var endOfDay_ = __webpack_require__(40557);
var endOfDay_default = /*#__PURE__*/__webpack_require__.n(endOfDay_);
// EXTERNAL MODULE: external "date-fns/startOfDay"
var startOfDay_ = __webpack_require__(7585);
var startOfDay_default = /*#__PURE__*/__webpack_require__.n(startOfDay_);
// EXTERNAL MODULE: ./src/utils/apply-pagination.ts
var apply_pagination = __webpack_require__(79643);
// EXTERNAL MODULE: ./src/utils/deep-copy.ts
var deep_copy = __webpack_require__(35634);
// EXTERNAL MODULE: external "date-fns/addDays"
var addDays_ = __webpack_require__(66011);
var addDays_default = /*#__PURE__*/__webpack_require__.n(addDays_);
// EXTERNAL MODULE: external "date-fns/subDays"
var subDays_ = __webpack_require__(95358);
var subDays_default = /*#__PURE__*/__webpack_require__.n(subDays_);
// EXTERNAL MODULE: external "date-fns/subHours"
var subHours_ = __webpack_require__(97863);
var subHours_default = /*#__PURE__*/__webpack_require__.n(subHours_);
;// CONCATENATED MODULE: ./src/api/invoices/data.ts



const now = new Date();
const invoices = [
    {
        id: "5ecb868d0f437390ef3ac62c",
        currency: "$",
        customer: {
            email: "contact@acme.com",
            name: "ACME SRL"
        },
        dueDate: addDays_default()(now, 5).getTime(),
        issueDate: subHours_default()(now, 1).getTime(),
        number: "INV-0019",
        status: "paid",
        totalAmount: 55.5
    },
    {
        id: "59d78b0b0e15394130c373ff",
        currency: "$",
        customer: {
            email: "sales@blind-spots.com",
            name: "Blind Spots Inc."
        },
        dueDate: addDays_default()(now, 6).getTime(),
        issueDate: subHours_default()(now, 1).getTime(),
        number: "INV-0018",
        status: "paid",
        totalAmount: 688.9
    },
    {
        id: "2a05e7f757c35fe823da3c5a",
        currency: "$",
        customer: {
            email: "sales@beauty-clinic.com",
            name: "Beauty Clinic SRL"
        },
        dueDate: addDays_default()(now, 9).getTime(),
        issueDate: subHours_default()(now, 1).getTime(),
        number: "INV-0017",
        status: "paid",
        totalAmount: 695.2
    },
    {
        id: "5ecb868ada8deedee0638502",
        currency: "$",
        customer: {
            email: "sales@matt-jason.com",
            name: "Matt Jason"
        },
        dueDate: addDays_default()(now, 25).getTime(),
        issueDate: subDays_default()(subHours_default()(now, 5), 2).getTime(),
        number: "INV-0021",
        status: "pending",
        totalAmount: 23.11
    },
    {
        id: "750f519b8bc4d21af9528437",
        currency: "$",
        customer: {
            email: "sales@matt-jason.com",
            name: "Matt Jason"
        },
        dueDate: addDays_default()(now, 17).getTime(),
        issueDate: subDays_default()(subHours_default()(now, 4), 2).getTime(),
        number: "INV-0020",
        status: "pending",
        totalAmount: 253.76
    },
    {
        id: "5ecb868700aba84d0f1c0e48",
        currency: "$",
        customer: {
            email: "support@terrythomas.io",
            name: "Terry Thomas"
        },
        dueDate: addDays_default()(now, 11).getTime(),
        issueDate: subDays_default()(subHours_default()(now, 4), 6).getTime(),
        number: "INV-0015",
        status: "canceled",
        totalAmount: 781.5
    },
    {
        id: "5ecb8682038e1rl239438dks1",
        currency: "$",
        customer: {
            email: "contact@dispatcher.co.uk",
            name: "Dispatcher Inc."
        },
        dueDate: addDays_default()(now, 3).getTime(),
        issueDate: subDays_default()(subHours_default()(now, 2), 15).getTime(),
        number: "INV-0014",
        status: "paid",
        totalAmount: 96.64
    },
    {
        id: "5ecb8682038e1ddf4e868764",
        currency: "$",
        customer: {
            email: "info@novelty.co.uk",
            name: "Novelty I.S"
        },
        dueDate: addDays_default()(now, 1).getTime(),
        issueDate: subDays_default()(subHours_default()(now, 2), 15).getTime(),
        number: "INV-0013",
        status: "canceled",
        totalAmount: 496.23
    }
];
const invoice = {
    id: "5ecb86785312dcc69b5799ad",
    currency: "$",
    customer: {
        address: "271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand",
        company: "Countdown Grey Lynn",
        email: "contact@acme.com",
        name: "ACME SRL",
        taxId: "6934656584231"
    },
    dueDate: addDays_default()(now, 5).getTime(),
    issueDate: subHours_default()(now, 1).getTime(),
    items: [
        {
            id: "5ecb8694db1760a701dfbf74",
            currency: "$",
            description: "Freelancer Subscription (12/05/2019 - 11/06/2019)",
            quantity: 1,
            totalAmount: 55.5,
            unitAmount: 55.5
        }
    ],
    number: "INV-0019",
    status: "paid",
    subtotalAmount: 50.0,
    taxAmount: 5.5,
    totalAmount: 55.5
};

;// CONCATENATED MODULE: ./src/api/invoices/index.ts





class InvoicesApi {
    getInvoices(request = {}) {
        const { filters, page, rowsPerPage } = request;
        let data = (0,deep_copy/* deepCopy */.p)(invoices);
        let count = data.length;
        if (typeof filters !== "undefined") {
            data = data.filter((invoice)=>{
                if (typeof filters.query !== "undefined" && filters.query !== "") {
                    const matched = invoice.number.toLowerCase().includes(filters.query.toLowerCase());
                    if (!matched) {
                        return false;
                    }
                }
                if (typeof filters.startDate !== "undefined") {
                    if (typeof invoice.issueDate === "undefined") {
                        return false;
                    }
                    const matched = endOfDay_default()(invoice.issueDate) >= startOfDay_default()(filters.startDate);
                    if (!matched) {
                        return false;
                    }
                }
                if (typeof filters.endDate !== "undefined") {
                    if (typeof invoice.issueDate === "undefined") {
                        return false;
                    }
                    const matched = startOfDay_default()(invoice.issueDate) <= endOfDay_default()(filters.endDate);
                    if (!matched) {
                        return false;
                    }
                }
                if (typeof filters.customers !== "undefined" && filters.customers.length > 0) {
                    const matched = filters.customers.includes(invoice.customer.name);
                    if (!matched) {
                        return false;
                    }
                }
                if (typeof filters.status !== "undefined") {
                    if (invoice.status !== filters.status) {
                        return false;
                    }
                }
                return true;
            });
            count = data.length;
        }
        if (typeof page !== "undefined" && typeof rowsPerPage !== "undefined") {
            data = (0,apply_pagination/* applyPagination */.i)(data, page, rowsPerPage);
        }
        return Promise.resolve({
            data,
            count
        });
    }
    getInvoice(request) {
        return Promise.resolve((0,deep_copy/* deepCopy */.p)(invoice));
    }
}
const invoicesApi = new InvoicesApi();


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