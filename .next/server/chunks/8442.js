"use strict";
exports.id = 8442;
exports.ids = [8442];
exports.modules = {

/***/ 28442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ FileDropzone)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _untitled_ui_icons_react_build_esm_Upload01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2957);
/* harmony import */ var _untitled_ui_icons_react_build_esm_X__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45331);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38356);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_components_file_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16143);
/* harmony import */ var src_utils_bytes_to_size__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(95809);



















const FileDropzone = (props)=>{
    const { caption, files = [], onRemove, onRemoveAll, onUpload, ...other } = props;
    const { getRootProps, getInputProps, isDragActive } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)(other);
    const hasAnyFiles = files.length > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    alignItems: "center",
                    border: 1,
                    borderRadius: 1,
                    borderStyle: "dashed",
                    borderColor: "divider",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    outline: "none",
                    p: 6,
                    ...isDragActive && {
                        backgroundColor: "action.active",
                        opacity: 0.5
                    },
                    "&:hover": {
                        backgroundColor: "action.hover",
                        cursor: "pointer",
                        opacity: 0.5
                    }
                },
                ...getRootProps(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13___default()), {
                        alignItems: "center",
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    height: 64,
                                    width: 64
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_Upload01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13___default()), {
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        sx: {
                                            "& span": {
                                                textDecoration: "underline"
                                            }
                                        },
                                        variant: "h6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Click to upload"
                                            }),
                                            " or drag and drop"
                                        ]
                                    }),
                                    caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        color: "text.secondary",
                                        variant: "body2",
                                        children: caption
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            hasAnyFiles && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    mt: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: files.map((file)=>{
                            const extension = file.name.split(".").pop();
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                sx: {
                                    border: 1,
                                    borderColor: "divider",
                                    borderRadius: 1,
                                    "& + &": {
                                        mt: 1
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_file_icon__WEBPACK_IMPORTED_MODULE_17__/* .FileIcon */ .a, {
                                            extension: extension
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        primary: file.name,
                                        primaryTypographyProps: {
                                            variant: "subtitle2"
                                        },
                                        secondary: (0,src_utils_bytes_to_size__WEBPACK_IMPORTED_MODULE_18__/* .bytesToSize */ .R)(file.size)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        title: "Remove",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            edge: "end",
                                            onClick: ()=>onRemove?.(file),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_untitled_ui_icons_react_build_esm_X__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                            })
                                        })
                                    })
                                ]
                            }, file.path);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13___default()), {
                        alignItems: "center",
                        direction: "row",
                        justifyContent: "flex-end",
                        spacing: 2,
                        sx: {
                            mt: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                color: "inherit",
                                onClick: onRemoveAll,
                                size: "small",
                                type: "button",
                                children: "Remove All"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                onClick: onUpload,
                                size: "small",
                                type: "button",
                                variant: "contained",
                                children: "Upload"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
FileDropzone.propTypes = {
    caption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    files: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onRemoveAll: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    // From Dropzone
    accept: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired).isRequired),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    getFilesFromEvent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    maxFiles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    maxSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    minSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    noClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    noDrag: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    noDragEventsBubbling: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    onDrop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onDropAccepted: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onDropRejected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onFileDialogCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    preventDropOnDocument: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};


/***/ }),

/***/ 16143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ FileIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const icons = {
    jpeg: "/assets/icons/icon-jpg.svg",
    jpg: "/assets/icons/icon-jpg.svg",
    mp4: "/assets/icons/icon-mp4.svg",
    pdf: "/assets/icons/icon-pdf.svg",
    png: "/assets/icons/icon-png.svg",
    svg: "/assets/icons/icon-svg.svg"
};
const FileIcon = (props)=>{
    const { extension } = props;
    let icon;
    if (!extension) {
        icon = "/assets/icons/icon-other.svg";
    } else {
        icon = icons[extension] || "/assets/icons/icon-other.svg";
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: icon
    });
};
FileIcon.propTypes = {
    extension: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ 95809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ bytesToSize)
/* harmony export */ });
/* eslint-disable no-restricted-properties */ const bytesToSize = (bytes, decimals = 2)=>{
    if (bytes === 0) {
        return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};


/***/ })

};
;