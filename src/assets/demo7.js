export default {
    "formOptions": {
        "labelWidth": null
    },
    "forms": [{
        "componentName": "ElCard",
        "text": "卡片",
        "icon": {},
        "noUseForm": true,
        "props": {},
        "staticChildren": [{
            "componentName": "template",
            "slot": "header",
            "staticChildren": [{"componentName": "div", "props": {"class": "card-header"}, "label": "表格"}]
        }],
        "children": [{
            "componentName": "ElTable",
            "text": "表格",
            "icon": {},
            "noUseForm": true,
            "props": {
                "border": true,
                "stripe": true,
                "show-header": true,
                "data": [{"date": " 2025-05-11", "name": "TEST", "address": "address"}, {
                    "date": " 2025-05-12",
                    "name": "TEST",
                    "address": "address"
                }],
                "rows": 2
            },
            "children": [{
                "componentName": "ElTableColumn",
                "props": {"prop": "date", "label": "日期"},
                "id": "17723004498190",
                "parentId": "1772300449275393"
            }, {
                "componentName": "ElTableColumn",
                "props": {"prop": "name", "label": "姓名"},
                "id": "1772300449819516",
                "parentId": "1772300449275393"
            }, {
                "componentName": "ElTableColumn",
                "props": {"prop": "address", "label": "地址"},
                "id": "1772300449819414",
                "parentId": "1772300449275393"
            }],
            "id": "1772300449275393",
            "parentId": null
        }],
        "id": "1772300438632919",
        "parentId": null
    }, {
        "componentName": "ElTable",
        "text": "表格",
        "icon": {},
        "noUseForm": true,
        "props": {"border": true, "stripe": true, "show-header": true, "data": []},
        "children": [{
            "componentName": "ElTableColumn",
            "props": {"prop": "date", "label": "日期"},
            "id": "1772300508782146",
            "parentId": "177230050820987"
        }, {
            "componentName": "ElTableColumn",
            "props": {"prop": "name", "label": "姓名"},
            "id": "1772300508782275",
            "parentId": "177230050820987"
        }, {
            "componentName": "ElTableColumn",
            "props": {"prop": "address", "label": "地址"},
            "id": "1772300508782453",
            "parentId": "177230050820987"
        }],
        "id": "177230050820987",
        "parentId": null
    }, {
        "componentName": "DivComponent",
        "icon": {},
        "noUseForm": true,
        "text": "块元素",
        "props": {"class": "block-element block-element1772300517461256", "textAlign": "right"},
        "children": [{
            "componentName": "ElButton",
            "icon": {},
            "noUseForm": true,
            "label": "按钮",
            "props": {"type": "primary"},
            "id": "1772300520599394",
            "parentId": null
        }],
        "id": "1772300517461256",
        "parentId": null
    }, {
        "componentName": "DivComponent",
        "icon": {},
        "noUseForm": true,
        "text": "块元素",
        "props": {"class": "block-element block-element1772300528072531", "textAlign": "center"},
        "children": [{
            "componentName": "ElButton",
            "icon": {},
            "noUseForm": true,
            "label": "按钮",
            "props": {"type": "primary"},
            "id": "1772300530909283",
            "parentId": null
        }],
        "id": "1772300528072531",
        "parentId": null
    }, {
        "componentName": "ElRow",
        "text": "栅格",
        "icon": {},
        "noUseForm": true,
        "props": {"gutter": 10},
        "children": [{
            "componentName": "ElCol",
            "noUseForm": true,
            "props": {"span": 12, "offset": 0, "class": "drop-item"},
            "children": [{
                "componentName": "ElFormItem",
                "props": {
                    "label": "选择器",
                    "prop": "field1772300548660365",
                    "rules": {"required": true, "message": "该项为必填项!", "trigger": "change"}
                },
                "id": "1772300549514794",
                "children": [{
                    "componentName": "ElSelect",
                    "text": "选择器",
                    "icon": {},
                    "props": {"style": "min-width: 196px", "placeholder": "请选择"},
                    "children": [{
                        "componentName": "ElOption",
                        "props": {"label": "First Option", "value": "val1"},
                        "id": "1772300549514369",
                        "parentId": "1772300548660365"
                    }, {
                        "componentName": "ElOption",
                        "props": {"label": "Second Option", "value": "val2"},
                        "id": "1772300549514670",
                        "parentId": "1772300548660365"
                    }],
                    "id": "1772300548660365",
                    "parentId": null
                }]
            }],
            "id": "1772300542054341",
            "parentId": "1772300541210217"
        }, {
            "componentName": "ElCol",
            "noUseForm": true,
            "props": {"span": 12, "offset": 0, "class": "drop-item"},
            "children": [{
                "componentName": "ElFormItem",
                "props": {"label": "单选框", "prop": "field1772300552444536"},
                "id": "1772300553367562",
                "children": [{
                    "componentName": "ElRadioGroup",
                    "text": "单选框",
                    "icon": {},
                    "props": {},
                    "children": [{
                        "componentName": "ElRadio",
                        "props": {"label": "Option 1", "value": 1},
                        "id": "1772300553367682",
                        "parentId": "1772300552444536"
                    }, {
                        "componentName": "ElRadio",
                        "props": {"label": "Option 2", "value": 2},
                        "id": "1772300553367942",
                        "parentId": "1772300552444536"
                    }, {
                        "componentName": "ElRadio",
                        "props": {"label": "Option 3", "value": 3},
                        "id": "1772300553367587",
                        "parentId": "1772300552444536"
                    }],
                    "id": "1772300552444536",
                    "parentId": null
                }]
            }],
            "id": "1772300542054150",
            "parentId": "1772300541210217"
        }, {
            "componentName": "ElCol",
            "id": "1772300564873263",
            "noUseForm": true,
            "props": {"span": 12, "class": "drop-item"},
            "children": [{
                "componentName": "ElFormItem",
                "props": {"label": "日期选择器", "prop": "field1772300577900603"},
                "id": "1772300579237203",
                "children": [{
                    "componentName": "ElDatePicker",
                    "text": "日期选择器",
                    "icon": {},
                    "props": {"type": "date", "placeholder": "选择日期"},
                    "id": "1772300577900603",
                    "parentId": null
                }]
            }]
        }, {
            "componentName": "ElCol",
            "id": "1772300566098975",
            "noUseForm": true,
            "props": {"span": 12, "class": "drop-item"},
            "children": [{
                "componentName": "ElFormItem",
                "props": {"label": "复选框", "prop": "field1772300573498707"},
                "id": "1772300575523986",
                "children": [{
                    "componentName": "ElCheckboxGroup",
                    "text": "复选框",
                    "icon": {},
                    "props": {},
                    "children": [{
                        "componentName": "ElCheckbox",
                        "props": {"label": "Option A", "value": "ValueA"},
                        "id": "1772300575523814",
                        "parentId": "1772300573498707"
                    }, {
                        "componentName": "ElCheckbox",
                        "props": {"label": "Option B", "value": "ValueB"},
                        "id": "1772300575523726",
                        "parentId": "1772300573498707"
                    }],
                    "id": "1772300573498707",
                    "parentId": null
                }]
            }]
        }],
        "id": "1772300541210217",
        "parentId": null
    }, {
        "componentName": "ElFormItem",
        "props": {"label": "输入框", "prop": "field177230059184572"},
        "id": "1772300592766845",
        "children": [{
            "componentName": "ElInput",
            "icon": {},
            "text": "输入框",
            "props": {"placeholder": "请输入内容"},
            "id": "177230059184572",
            "parentId": null
        }]
    }, {
        "componentName": "ElFormItem",
        "props": {
            "label": "上传组件",
            "prop": "field1772300623432487",
            "rules": {"required": true, "message": "该项为必填项!", "trigger": "change"}
        },
        "id": "1772300624034878",
        "children": [{
            "componentName": "ElUpload",
            "text": "上传组件",
            "icon": {},
            "props": {"list-type": "picture-card"},
            "children": [{
                "componentName": "ElButton",
                "label": "",
                "props": {
                    "type": "primary",
                    "icon": "Plus",
                    "iconStyle": {"fontSize": 25},
                    "class": "upload1772300623432487",
                    "text": true
                },
                "id": "1772300624034535",
                "parentId": "1772300623432487"
            }, {
                "componentName": "template",
                "slot": "tip",
                "children": [{
                    "componentName": "div",
                    "props": {"class": "el-upload__tip"},
                    "label": "",
                    "id": "1772300624034228",
                    "parentId": "1772300624034187"
                }],
                "id": "1772300624034187",
                "parentId": "1772300623432487"
            }],
            "id": "1772300623432487",
            "parentId": null
        }]
    }, {
        "componentName": "ElFormItem",
        "props": {"label": "上传组件", "prop": "field1772300670888970"},
        "id": "1772300672192970",
        "children": [{
            "componentName": "ElUpload",
            "text": "上传组件",
            "icon": {},
            "props": {},
            "children": [{
                "componentName": "ElButton",
                "label": "请选择文件",
                "props": {
                    "type": "primary",
                    "icon": "Plus",
                    "iconStyle": {"color": "red"},
                    "class": "upload1772300670888970"
                },
                "id": "177230067219218",
                "parentId": "1772300670888970"
            }, {
                "componentName": "template",
                "slot": "tip",
                "children": [{
                    "componentName": "div",
                    "props": {"class": "el-upload__tip"},
                    "label": "",
                    "id": "177230067219290",
                    "parentId": "177230067219227"
                }],
                "id": "177230067219227",
                "parentId": "1772300670888970"
            }],
            "id": "1772300670888970",
            "parentId": null
        }]
    }]
}
