import {NameCodeItem, ProductItem, ProvinceItem, YearItem} from '@data/interface';

export const topMenus = [
    [
        {
            'icon-name': '5p3',
            key: '5p3-all',
            name: '单招政策',
        },
        {
            'icon-name': 'learn',
            key: 'exam-rst',
            name: '单招学校',
        },
        {
            'icon-name': 'operation',
            type: 'url',
            key: 'operation-all',
            name: '单招培训',
        }
    ],
    [
        {
            'icon-name': 'west', key: 'west-all', name: '社会实践',
        },
        {
            'icon-name': 'chinese', key: 'chinese-all', name: '报名入口',
        },
        {
            'icon-name': 'magazine', key: 'magazine', name: '单招新闻'
        }
    ]
];

export const topMenus1 = [
    {
        'icon-name': '5p3',
        key: '5p3-all',
        name: '练习测试',
    },
    {
        'icon-name': 'learn',
        key: 'exam-rst',
        name: '重点真题',
    },
    {
        'icon-name': 'operation',
        type: 'url',
        key: 'operation-all',
        name: '模拟考试',
    }
];

export const yearList: YearItem[] = [
    {
        label: '小学',
        value: '小学',
        children: [
            {
                label: '一年级',
                value: '1'
            },
            {
                label: '二年级',
                value: '2'
            },
            {
                label: '三年级',
                value: '3'
            },
            {
                label: '四年级',
                value: '4'
            },
            {
                label: '五年级',
                value: '5'
            },
            {
                label: '六年级',
                value: '6'
            }
        ]
    },
    {
        label: '初中',
        value: '初中',
        children: [
            {
                label: '初一',
                value: '7'
            },
            {
                label: '初二',
                value: '8'
            },
            {
                label: '初三',
                value: '9'
            }
        ]
    },
    {
        label: '高中',
        value: '高中',
        children: [
            {
                label: '高一',
                value: '10'
            },
            {
                label: '高二',
                value: '11'
            },
            {
                label: '高三',
                value: '12'
            }
        ]
    },
    {
        label: '升学',
        value: '升学',
        children: [
            {
                label: '小升初',
                value: '13'
            },
            {
                label: '初升高',
                value: '14'
            },
            {
                label: '专升本',
                value: '15'
            }
        ]
    },
    {
        label: '单招',
        value: '单招',
        children: [
            {
                label: '体育单招',
                value: '16'
            },
            {
                label: '艺术单招',
                value: '17'
            },
            {
                label: '重点本科单招',
                value: '18'
            }
        ]
    }
];

export const provinceList: ProvinceItem[] = [
    {
        initial: 'A',
        items: [
            {
                name: '安徽省',
                code: ''
            },
            {
                name: '澳门特别行政区',
                code: ''
            }
        ]
    },
    {
        initial: 'B',
        items: [
            {
                name: '北京市',
                code: ''
            }
        ]
    },
    {
        initial: 'C',
        items: [
            {
                name: '重庆市',
                code: ''
            }
        ]
    },
    {
        initial: 'F',
        items: [
            {
                name: '福建省',
                code: ''
            }
        ]
    },
    {
        initial: 'G',
        items: [
            {
                name: '甘肃省',
                code: ''
            },
            {
                name: '广东省',
                code: ''
            },
            {
                name: '广西壮族自治区',
                code: ''
            },
            {
                name: '贵州省',
                code: ''
            }
        ]
    },
    {
        initial: 'H',
        items: [
            {
                name: '海南省',
                code: ''
            },
            {
                name: '黑龙江省',
                code: ''
            },
            {
                name: '河北省',
                code: ''
            },
            {
                name: '河南省',
                code: ''
            },
            {
                name: '湖北省',
                code: ''
            },
            {
                name: '湖南省',
                code: ''
            }
        ]
    },
    {
        initial: 'J',
        items: [
            {
                name: '吉林省',
                code: ''
            },
            {
                name: '江苏省',
                code: ''
            },
            {
                name: '江西省',
                code: ''
            }
        ]
    },
    {
        initial: 'L',
        items: [
            {
                name: '辽宁省',
                code: ''
            }
        ]
    },
    {
        initial: 'N',
        items: [
            {
                name: '内蒙古自治区',
                code: ''
            },
            {
                name: '宁夏回族自治区',
                code: ''
            }
        ]
    },
    {
        initial: 'Q',
        items: [
            {
                name: '青海省',
                code: ''
            }
        ]
    },
    {
        initial: 'S',
        items: [
            {
                name: '山东省',
                code: ''
            },
            {
                name: '山西省',
                code: ''
            },
            {
                name: '陕西省',
                code: ''
            },
            {
                name: '上海市',
                code: ''
            },
        ]
    },
    {
        initial: 'T',
        items: [
            {
                name: '天津市',
                code: ''
            },
            {
                name: '台湾省',
                code: ''
            }
        ]
    },
    {
        initial: 'X',
        items: [
            {
                name: '西藏自治区',
                code: ''
            },
            {
                name: '新疆维吾尔自治区',
                code: ''
            },
            {
                name: '香港特别行政区',
                code: ''
            }
        ]
    },
    {
        initial: 'Y',
        items: [
            {
                name: '云南省',
                code: ''
            }
        ]
    },
    {
        initial: 'Z',
        items: [
            {
                name: '浙江省',
                code: ''
            }
        ]
    },
];

export const productItems: ProductItem[] = [{
    id: '1',
    name: '高职综合单招综合素质专项题库1',
    cover: '',
    count: 1,
    price: 12
}, {
    id: '2',
    name: '高职综合单招综合素质专项题库2',
    cover: '',
    count: 1,
    price: 22
}, {
    id: '3',
    name: '高职综合单招综合素质专项题库3',
    cover: '',
    count: 1,
    price: 56
}, {
    id: '4',
    name: '高职综合单招综合素质专项题库4',
    cover: '',
    count: 1,
    price: 56
}, {
    id: '5',
    name: '高职综合单招综合素质专项题库5',
    cover: '',
    count: 1,
    price: 56
}];

export const productItems0: ProductItem[] = [{
    id: '1',
    name: '高职综合单招综合素质专项题库1',
    cover: '',
    price: 12
}, {
    id: '2',
    name: '高职综合单招综合素质专项题库2',
    cover: '',
    price: 22
}, {
    id: '3',
    name: '高职综合单招综合素质专项题库3',
    cover: '',
    price: 56
}, {
    id: '4',
    name: '高职综合单招综合素质专项题库4',
    cover: '',
    price: 56
}];

export const subjects: NameCodeItem[] = [{
    name: '语文',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '数学',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '英语',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '物理',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '化学',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '生物',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '历史',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '政治',
    code: '高职综合单招综合素质专项题库1'
}, {
    name: '历史',
    code: '高职综合单招综合素质专项题库1'
}];
