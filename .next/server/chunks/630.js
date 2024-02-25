"use strict";
exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 70630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ MultiSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_ChevronDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94207);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73539);











const MultiSelect = (props)=>{
    const { label, onChange, options, value = [], ...other } = props;
    const popover = (0,src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_10__/* .usePopover */ .S)();
    const handleValueChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        let newValue = [
            ...value
        ];
        if (event.target.checked) {
            newValue.push(event.target.value);
        } else {
            newValue = newValue.filter((item)=>item !== event.target.value);
        }
        onChange?.(newValue);
    }, [
        onChange,
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                color: "inherit",
                endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_ChevronDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                }),
                onClick: popover.handleOpen,
                ref: popover.anchorRef,
                ...other,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {
                anchorEl: popover.anchorRef.current,
                onClose: popover.handleClose,
                open: popover.open,
                PaperProps: {
                    style: {
                        width: 250
                    }
                },
                children: options.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default()), {
                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
                                checked: value.includes(option.value),
                                onChange: handleValueChange,
                                value: option.value
                            }),
                            label: option.label,
                            sx: {
                                flexGrow: 1,
                                mr: 0
                            }
                        })
                    }, option.label))
            })
        ]
    });
};
MultiSelect.propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
    value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired
};


/***/ })

};
;