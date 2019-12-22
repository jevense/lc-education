import {MockRequest} from '@delon/mock';
import * as Mock from 'mockjs';

export const Major = {
  'GET /api/majors/page': (req: MockRequest) => {
    const {instituteIds, extraStudentTypeCodes, size} = req.queryString;
    return Mock.mock({
      data: {
        'items|1-10': [
          {
            'id|+1': 1,
            majorCode: '@word',
            'instituteId|1': instituteIds.split(','),
            majorName: '@cword',
            'extraCultureTypeCode|0-1': extraStudentTypeCodes.split(','),
            'subjects|1': [],
          }
        ],
        'maxPage|1-10': 1,
        pageNum: 1,
        pageSize: 10,
        'total|1-100': 1,
      },
      errorInfo: '',
      msg: '',
      result: true
    });
  },
  'GET /api/majors/standard': (req: MockRequest) => {
    return subjects;
  },
};

export const subjects = [
  {
    majorCode: '0100',
    majorName: '内科'
  },
  {
    majorCode: '0200',
    majorName: '儿科'
  },
  {
    majorCode: '0300',
    majorName: '急诊科'
  },
  {
    majorCode: '0400',
    majorName: '皮肤科'
  },
  {
    majorCode: '0500',
    majorName: '精神科'
  },
  {
    majorCode: '0600',
    majorName: '神经内科'
  },
  {
    majorCode: '0700',
    majorName: '全科'
  },
  {
    majorCode: '0800',
    majorName: '康复医学科'
  },
  {
    majorCode: '0900',
    majorName: '外科'
  },
  {
    majorCode: '1000',
    majorName: '外科（神经外科方向）'
  },
  {
    majorCode: '1100',
    majorName: '外科（胸心外科方向）'
  },
  {
    majorCode: '1200',
    majorName: '外科（泌尿外科方向）'
  },
  {
    majorCode: '1300',
    majorName: '外科（整形外科方向）'
  },
  {
    majorCode: '1400',
    majorName: '骨科'
  },
  {
    majorCode: '1500',
    majorName: '儿外科'
  },
  {
    majorCode: '1600',
    majorName: '妇产科'
  },
  {
    majorCode: '1700',
    majorName: '眼科'
  },
  {
    majorCode: '1800',
    majorName: '耳鼻咽喉科'
  },
  {
    majorCode: '1900',
    majorName: '麻醉科'
  },
  {
    majorCode: '2000',
    majorName: '临床病理科'
  },
  {
    majorCode: '2100',
    majorName: '检验医学科'
  },
  {
    majorCode: '2200',
    majorName: '放射科'
  },
  {
    majorCode: '2300',
    majorName: '超声医学科'
  },
  {
    majorCode: '2400',
    majorName: '核医学科'
  },
  {
    majorCode: '2500',
    majorName: '放射肿瘤科'
  },
  {
    majorCode: '2600',
    majorName: '医学遗传科'
  },
  {
    majorCode: '2700',
    majorName: '预防医学科'
  },
  {
    majorCode: '2800',
    majorName: '口腔全科'
  },
  {
    majorCode: '2900',
    majorName: '口腔内科'
  },
  {
    majorCode: '3000',
    majorName: '口腔颌面外科'
  },
  {
    majorCode: '3100',
    majorName: '口腔修复科'
  },
  {
    majorCode: '3200',
    majorName: '口腔正畸科'
  },
  {
    majorCode: '3300',
    majorName: '口腔病理科'
  },
  {
    majorCode: '3400',
    majorName: '口腔颌面影像科'
  },
  {
    majorCode: '4100',
    majorName: '中医内科'
  },
  {
    majorCode: '4200',
    majorName: '中医外科'
  },
  {
    majorCode: '4300',
    majorName: '中医妇科'
  },
  {
    majorCode: '4400',
    majorName: '中医儿科'
  },
  {
    majorCode: '4500',
    majorName: '针灸科'
  },
  {
    majorCode: '4600',
    majorName: '推拿科'
  },
  {
    majorCode: '4700',
    majorName: '中医康复科'
  },
  {
    majorCode: '4800',
    majorName: '中医骨伤科'
  },
  {
    majorCode: '4900',
    majorName: '中医耳鼻喉科'
  },
  {
    majorCode: '5000',
    majorName: '中医眼科'
  },
  {
    majorCode: '5100',
    majorName: '中医全科'
  }
];
