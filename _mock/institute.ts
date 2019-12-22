import {MockRequest} from '@delon/mock';
import * as Mock from 'mockjs';
import {Random} from 'mockjs';
import * as _ from 'lodash';
import {subjects} from './major';

const majorCode = subjects.map(subject => subject.majorCode);
const majorName = subjects.map(subject => subject.majorName);

export const Institute = {
  'GET /api/statistics/homePageNum': (req: MockRequest) => {
    const data = Mock.mock({
      'teacherNum|1-100': 1,
      'studentNum|1-100': 1,
      'otherNum|1-100': 1,
      'productNum|1-100': 1,
      'departmentNum|1-100': 1
    });
    return {
      data,
      errorInfo: '',
      msg: '',
      result: true
    };
  },
  'GET /api/statistics/login-log/:id': (req: MockRequest) => {
    const data = Mock.mock({
      'list|7': [
        {
          day: '@date',
          'count|1-100': 1
        }]
    });
    return data.list;
  },
  'GET /api/departments': (req: MockRequest) => {
    return Mock.mock({
      data: {
        'items|1-10': [
          {
            'id|+1': 1,
            parentId() {
              return Random.integer(0, this.id - 1);
            },
            'departmentTypeCode|1': ['50001_DepartmenType', '50002_DepartmenType'],
            departmentName: '@ctitle',
            departmentLevel() {
              return this.parentId;
            },
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
  'GET /api/institute/:iid/validate': (req: MockRequest) => {
    const {keyword} = req.queryString;
    return {status: keyword === '已存在'};
  },
  'GET /api/institute/:iid/department': (req: MockRequest) => {
    // const {type} = req.queryString;
    // return Mock.mock({
    //   'items|1-10': [
    //     {
    //       'id|+1': 1,
    //       parentId() {
    //         return (Random.integer(0, this.id - 1)).toString();
    //       },
    //       'departmentTypeCode|1': ['50001_DepartmenType'],
    //       departmentName: '@ctitle',
    //       remarks: '@ctitle',
    //       departmentLevel() {
    //         return this.parentId;
    //       },
    //     }
    //   ],
    // }).items;
    return departments;
  },
  'GET /api/institute/:iid/major': (req: MockRequest) => {
    const {iid: instituteId} = req.params;
    return Mock.mock({
      'items|51': [
        {
          'id|+1': 1,
          'majorCode|+1': majorCode,
          'majorName|+1': majorName,
          'extraCultureTypeCode|1': ['1_CultureSubjectType', '2_CultureSubjectType'],
          'extraStudentTypeCode|1': ['1_StudentSubjectType', '2_StudentSubjectType',
            '3_StudentSubjectType', '4_StudentSubjectType', '0'],
          'instituteId|1': ['0', instituteId]
        }
      ],
    }).items;
  },
  'GET /api/institute/:iid/role': (req: MockRequest) => {
    const {iid: instituteId} = req.params;
    return Mock.mock({
      'items|4-10': [
        {
          'productCode|+1': ['30000', '20300', '20400', '21000'],
          roleCode: '@word',
          roleName: '@ctitle',
          key() {
            return this.productCode + '-' + this.roleCode;
          },
        }
      ],
    }).items;
  },
  'PATCH /api/departments/:id': (req: MockRequest) => {
    const {id} = req.params;
    return {id, ...req.body};
  },
  'POST /api/departments': (req: MockRequest) => {
    return {id: Random.natural(), ...req.body};
  },
  'GET /api/institute/:id/product/:code/role': (req: MockRequest) => {
    const data = Mock.mock({
      'list|1-5': [
        {
          'key|+1': 1,
          title: '@csentence',
          value: '@word',
        }]
    });
    return data.list;
  },
};
const humanTypeCode = ['Teacher_HumanType', 'Student_HumanType', 'Nurse_HumanType', 'Other_HumanType'];

const teacherTypeCode = ['PersonnelTypeCode_00200', 'PersonnelTypeCode_00201', 'PersonnelTypeCode_00202', 'PersonnelTypeCode_00203'];

const studentTypeCode = ['PersonnelTypeCode_00300',
  'PersonnelTypeCode_00301', 'PersonnelTypeCode_00304',
  'PersonnelTypeCode_00303', 'PersonnelTypeCode_00302',
  'PersonnelTypeCode_00305', 'PersonnelTypeCode_00306'
];

export const departments = [
  {
    id: '402888516cf6a24f016cfb34b02f0001',
    departmentName: '0000000',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b7a68db4d38445e8a34912505f151849',
    departmentName: '101',
    parentId: '0cd889ff942d4f519168753edc9ea198',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ff8080816c03ef28016c04509d540005',
    departmentName: '1212121',
    parentId: '7230e5b643a1439a822cbb2b85a8c579',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ff8080816c03ef28016c04509d630006',
    departmentName: '1212121212',
    parentId: '7230e5b643a1439a822cbb2b85a8c579',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b98384c016bb5ba6ce90484',
    departmentName: '123',
    parentId: '89a01c97b45a4f69943c70c737d5d8b8',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ff8080816ccdcde3016cd19860c70003',
    departmentName: '123456789012345678901234567890',
    parentId: 'ff8080816ccdcde3016cd10e42560002',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ff8080816ccdcde3016cd10e42560002',
    departmentName: '1内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7230e5b643a1439a822cbb2b85a8c579',
    departmentName: '999999',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7efe02d8de6444fb8539c5223880a75c',
    departmentName: 'CCU',
    parentId: '5829f0256fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '744563f17cf7482484d88d0652e888b8',
    departmentName: 'CCU(机动科室)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a8c2e390cbdd4ab1a5dddac97277d6c8',
    departmentName: 'CT',
    parentId: '582a02056fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c932e45c263747e7971670ceebbcfd59',
    departmentName: 'CT室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f34e6fd511e8ad576c92bf849ecf',
    departmentName: 'EICU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '64e182ad94064c46ab3f052f6c45a873',
    departmentName: 'ICU',
    parentId: '5829f0256fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0a6a5ba4166044ccacbc3e1a767f4ab8',
    departmentName: 'MRI',
    parentId: '582a02056fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a4260041',
    departmentName: 'S中医科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a419003e',
    departmentName: 'S产科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3df0032',
    departmentName: 'S儿科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a4210040',
    departmentName: 'S全科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a4040039',
    departmentName: 'S内分泌科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3ea0033',
    departmentName: 'S呼吸内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a415003d',
    departmentName: 'S妇科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a42e0043',
    departmentName: 'S心血管内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a407003a',
    departmentName: 'S急诊ICU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a40c003b',
    departmentName: 'S急诊科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3f20035',
    departmentName: 'S感染科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a4320044',
    departmentName: 'S普外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3ee0034',
    departmentName: 'S消化内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a41d003f',
    departmentName: 'S眼科/耳鼻喉科/皮肤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a42a0042',
    departmentName: 'S神经内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3fa0037',
    departmentName: 'S肾脏内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3ff0038',
    departmentName: 'S血液内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a410003c',
    departmentName: 'S重症医学科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a3f60036',
    departmentName: 'S风湿免疫科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b72bdf4016b72f0a4360045',
    departmentName: 'S骨科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '6758f3d6c2f64806b731802f7a235986',
    departmentName: 'WJB-SON1',
    parentId: '935873700f814046ae19683fec085974',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '935873700f814046ae19683fec085974',
    departmentName: 'WJBtest',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'dfaba0be45ce45f0a35108d374b06738',
    departmentName: 'xinneike',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'db93eb6fb6c64fb08bec9f53c7a52558',
    departmentName: 'X线',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a6aed1ddb343445a9357b8b343e4536e',
    departmentName: '上海医院',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '45a68ae3d91f46b09e626bd0fab964f4',
    departmentName: '东院急诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '99f0b64a1c8f447e992d709f93e5e430',
    departmentName: '中医五官科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fd126fd511e8ad576c92bf849ecf',
    departmentName: '中医儿科（门诊和病房）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fa806fd511e8ad576c92bf849ecf',
    departmentName: '中医外科（疮疡、乳腺或其他专病专科）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829ff346fd511e8ad576c92bf849ecf',
    departmentName: '中医康复科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a00ff6fd511e8ad576c92bf849ecf',
    departmentName: '中医眼科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a183d6fd511e8ad576c92bf849ecf',
    departmentName: '中医科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a003c6fd511e8ad576c92bf849ecf',
    departmentName: '中医耳鼻喉科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f86d6fd511e8ad576c92bf849ecf',
    departmentName: '中医肿瘤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582d8f396fd511e8ad576c92bf849ecf',
    departmentName: '中医药',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829ffb66fd511e8ad576c92bf849ecf',
    departmentName: '中医骨伤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a02876fd511e8ad576c92bf849ecf',
    departmentName: '中药房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0983e13261fd4eb1a5a365e13a39e5ee',
    departmentName: '临床免疫学',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '77ff97d7d7ac4cabac8b0358723ade3e',
    departmentName: '临床免疫学检验',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1bc00462afeb4cc592ee3cb47ff3d4db',
    departmentName: '临床免疫学检验,临床生物化学检验',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ae3905ee11af4b63b4a59f71fabdfd5a',
    departmentName: '临床化学',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '05f2fb395b0648afb543acca4bf0ebc0',
    departmentName: '临床微生物学',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'dc90e15fe013450ca3ae95ec0c07b7e8',
    departmentName: '临床生物化学检验',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'e2af632f9936436bb6ab2b7cc8c8934d',
    departmentName: '临床病理科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '73748ea2be72477aa5074b3b42896ab0',
    departmentName: '临床细胞分子遗传学',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a1acd2c6565b4705a6308a9ef9c45a9c',
    departmentName: '临床血液体液检验',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '458d3a047a06467ea9933edf38116073',
    departmentName: '临床血液学检验,临检专业',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '47b02df605e14138827703e4bf5e65fe',
    departmentName: '临床血液病实验室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7f54ccfb27424fe49ea8b3d01b3bcca2',
    departmentName: '临港呼吸',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5217581099b9444fbd3ae802d5465897',
    departmentName: '乳腺科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2bc83c24fd20434791f3037fe2374251',
    departmentName: '乳腺超声科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'da05d3646dca49eb8f9568c2420e6a16',
    departmentName: '五官麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '87e7b6be21e44eb8a88eac2485d690fa',
    departmentName: '产科',
    parentId: '0215fb71a4df4db2b7cfef438a213967',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'cabb562b856544aab728eb932d736e64',
    departmentName: '产科病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '05665bf12c794da5b6ebb5e56e35751b',
    departmentName: '产科门诊',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f17b0c283ffe4901887ed6d22266b97a',
    departmentName: '介入科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '674bb4923f6c46ceb288f31b0172c6a4',
    departmentName: '住院处病房腹部超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '94f602ef8b7f4356b8bc1cad683c0db5',
    departmentName: '作业治疗',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'adc74568953f4b4c87deccac85dc622e',
    departmentName: '儿内',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826d9a46fd511e8ad576c92bf849ecf',
    departmentName: '儿内科',
    parentId: '5830ae6c6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826d91b6fd511e8ad576c92bf849ecf',
    departmentName: '儿外科',
    parentId: '5830ae6c6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5d198f2d0917491c9997d606fe1884cf',
    departmentName: '儿外麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f44b6fd511e8ad576c92bf849ecf',
    departmentName: '儿科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830ae6c6fd511e8ad576c92bf849ecf',
    departmentName: '儿科1',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'e9404649fc0b4bdf864b7c8d5fb87572',
    departmentName: '儿科12',
    parentId: '00bb1762ef184946bd704124bfac8769',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '73e85aacacae47eda1e57eed33ffb0bc',
    departmentName: '儿科传染门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd426ef4f436d438280c9d35078b9b51d',
    departmentName: '儿科儿科保健',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'cffe6f648f974e90b4f7741d7acd34a5',
    departmentName: '儿科医院',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '420963cd33004e7a91cc89a357a0e2c4',
    departmentName: '儿科呼吸+儿科肺功',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1f07a1fcb2e441009583295acc87b5ee',
    departmentName: '儿科康复',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '00bb1762ef184946bd704124bfac8769',
    departmentName: '儿科循环',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9049629f3c574c72bba57f0761a38e5d',
    departmentName: '儿科新增',
    parentId: '00bb1762ef184946bd704124bfac8769',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '61fc3f7425104008bd04982e0a63d1a1',
    departmentName: '儿科新生儿',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2e1a4e9f82084f0eb4149fe56765004f',
    departmentName: '儿科泌尿+儿科风湿',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a16146fd511e8ad576c92bf849ecf',
    departmentName: '儿科消化',
    parentId: '5830ef2c6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'e2396b11292e4d8fa2854ebe53f783d8',
    departmentName: '儿科消化(临港)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '75b1d2d715744231b4802532e3113d56',
    departmentName: '儿科神经+儿科脑电',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5dd334aaa4a84657bcc46081e1502bfc',
    departmentName: '儿科神经系统',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3a7e40eba16e4a6eadeac5d980b3712a',
    departmentName: '儿科血液+儿科风湿',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd423ca357a9e4ac5ab9c2961c573b4ad',
    departmentName: '儿科门急诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1770a9fdcd304464aea956f8e4f7f95b',
    departmentName: '儿科风湿和免疫',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'cc781f12803e4360b1022f0d0d42120d',
    departmentName: '儿童保健科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '327a779009154b819035fd123a654a8d',
    departmentName: '儿童口腔',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e33f6fd511e8ad576c92bf849ecf',
    departmentName: '全科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830eeab6fd511e8ad576c92bf849ecf',
    departmentName: '全科1',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830ef2c6fd511e8ad576c92bf849ecf',
    departmentName: '全科儿科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830b4916fd511e8ad576c92bf849ecf',
    departmentName: '全科科室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7921fb266f5f4d579f609938573f346d',
    departmentName: '六院儿科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '528bb12a76ef417abdba9753419868ac',
    departmentName: '内分泌',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0cd889ff942d4f519168753edc9ea198',
    departmentName: '内分泌一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2b4acf2e563c426187643b59549bed0c',
    departmentName: '内分泌代谢科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582503cb6fd511e8ad576c92bf849ecf',
    departmentName: '内分泌科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd3a70353a015449eae861e669c44b642',
    departmentName: '内泌',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a169a6fd511e8ad576c92bf849ecf',
    departmentName: '内科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '64ea370e9935448598cff326ff61bafc',
    departmentName: '内科康复',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '57ee4ce726d442ff844c2f7cda31d0a4',
    departmentName: '内科病案室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e00e6fd511e8ad576c92bf849ecf',
    departmentName: '内科门诊',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c795919f663e4cc69c5829ff81addc67',
    departmentName: '医学影像科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ffff360859c54f579076839b283c190a',
    departmentName: '医学影像科（含超声诊断）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f6506fd511e8ad576c92bf849ecf',
    departmentName: '医学影像科（放射或超声）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f5bbbb58610541eb855f7851d3e59751',
    departmentName: '口外病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1e4bd7cf09674a28b8b31c96bed46247',
    departmentName: '口外门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582513476fd511e8ad576c92bf849ecf',
    departmentName: '口腔',
    parentId: '5830987d6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ca7fe6006b544d269d166a38dfddeec8',
    departmentName: '口腔修复科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8a1a983c4c0649a1a72930a773249c34',
    departmentName: '口腔全科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9e5ae57a1af34067a36a87eb0875feff',
    departmentName: '口腔内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1ce81880f1034ba4b600fd6bce742a03',
    departmentName: '口腔口腔正畸',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '34231015f198454ca75bf85c511d2c72',
    departmentName: '口腔外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a8b5eaf563cd4bf1b7124376a3134871',
    departmentName: '口腔外科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '622b6c4f9822488f890928ee68f7efc5',
    departmentName: '口腔影像',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '12191ffa80ce4c2ebbfb7afe810f4e24',
    departmentName: '口腔急诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ae03f7cd1e1b42ebb89441b3bd842127',
    departmentName: '口腔正畸',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '4f3ba603d177409383ffddd3be55425d',
    departmentName: '口腔种植',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3b94e49e457b4cb0ad1b893ddbdb4bc6',
    departmentName: '口腔粘膜',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ae08fe334ecc406bb8cd147883fabefc',
    departmentName: '口腔预防',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9daf80542bc2468cbb9f9e0e6424a42f',
    departmentName: '口腔颌面外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd34ccfb01f3c4fc5abfb8b19b31749a0',
    departmentName: '口腔麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b843b23900d74308b44095c99d841b84',
    departmentName: '口腔麻醉科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ebff2b57fc7e48c287a81a91c8c13333',
    departmentName: '可选',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2001029d36ec43eb9c76923bc7a80280',
    departmentName: '吞咽障碍治疗',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '58251a156fd511e8ad576c92bf849ecf',
    departmentName: '呼吸一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '58251a9b6fd511e8ad576c92bf849ecf',
    departmentName: '呼吸二科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5824fe496fd511e8ad576c92bf849ecf',
    departmentName: '呼吸内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829ee146fd511e8ad576c92bf849ecf',
    departmentName: '呼吸内科/RICU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ae3808896e2e4148a0756ba0156a1b54',
    departmentName: '呼吸内科肺功室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '49f7f3f833cc4cb0bb4446b94659d84f',
    departmentName: '呼吸科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f75f6fd511e8ad576c92bf849ecf',
    departmentName: '呼吸科（肺病科）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '58251b1b6fd511e8ad576c92bf849ecf',
    departmentName: '呼吸结核病区',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '472d35b920934b488049e7f317a1180b',
    departmentName: '咽喉头颈',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b6f3cc62bbce409884130de4400d00ac',
    departmentName: '咽喉科病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a15036fd511e8ad576c92bf849ecf',
    departmentName: '基础实践基地',
    parentId: '5830eeab6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a20776fd511e8ad576c92bf849ecf',
    departmentName: '外一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a038d6fd511e8ad576c92bf849ecf',
    departmentName: '外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '292906982dc74ff0a474adba7d69ff04',
    departmentName: '外科（整形外科方向）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7e2c1637c8b74f2d8524200ca1a062ce',
    departmentName: '外科（整形科外科方向）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '19e4448f58264b64944c50484804f92a',
    departmentName: '外科（泌尿外科方向）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '528b71365d1f4fddaaa82658115194b2',
    departmentName: '外科（肝外）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentName: '大内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '58309fa16fd511e8ad576c92bf849ecf',
    departmentName: '大外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'efa4b22f406442b4aa177910fb965da6',
    departmentName: '大外科子集1',
    parentId: '58309fa16fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '697614ea1d984e9c9099cef0d8b1acec',
    departmentName: '头颈外病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '855135f56f6f42c0992dab949a88a4a7',
    departmentName: '妇一科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '131d6a4f88184e7c809230f627da583d',
    departmentName: '妇二科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9a62778f71cf46779077ec7ebbb087bf',
    departmentName: '妇产ICU',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a17b66fd511e8ad576c92bf849ecf',
    departmentName: '妇产科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0f71ecc22851460fa9bd8a5c72811468',
    departmentName: '妇产科B超',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '67be14ce5e414be09f1e73b68e859429',
    departmentName: '妇产科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c246499628054a6db82ba7c5f2ea482c',
    departmentName: '妇产科三病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f871a894f06b4568a349b252913f869d',
    departmentName: '妇产科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0a3087df3fa64a2ca5d4cdbc2ad60843',
    departmentName: '妇产科四病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f2cc6fd511e8ad576c92bf849ecf',
    departmentName: '妇产科急诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a8bb74b239b24fc79670402dd7c037bf',
    departmentName: '妇产科门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '65493c7290bf418795a6046badc478fd',
    departmentName: '妇产科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2378cdd84a964f7189bc2712c39d594e',
    departmentName: '妇产科（吉林）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'e0ffe7e8433c4296a4f947b621f79dc2',
    departmentName: '妇产麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '70dbd3258e95475a8be68f3b4565bf46',
    departmentName: '妇产麻醉科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a20272f9f3394806b7132cf732a09da1',
    departmentName: '妇四科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0215fb71a4df4db2b7cfef438a213967',
    departmentName: '妇科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '12086e000b874dc9863d1f462b015226',
    departmentName: '妇科B超',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '246048b6d61f48ab894a02a8f7f6ddfa',
    departmentName: '妇科病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fc0e6fd511e8ad576c92bf849ecf',
    departmentName: '妇科病房二病区',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fc916fd511e8ad576c92bf849ecf',
    departmentName: '妇科门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9813fc312ae14eca8bbf4b57200e228b',
    departmentName: '小儿外科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a059b6fd511e8ad576c92bf849ecf',
    departmentName: '小儿泌尿外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2f2598576f0e4b09bc8c6ea35f48ba12',
    departmentName: '小儿眼科及斜视组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5ecf128042f64ddfb710f0c618d78783',
    departmentName: '康复',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a1ecf6fd511e8ad576c92bf849ecf',
    departmentName: '康复医学科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c627d862f0534948b0fe9b276aca48fd',
    departmentName: '康复科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'aeef9e76c43946dea952cfb40904554d',
    departmentName: '康复门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1dc4cfbed7ce49d98e415d54a0d6f856',
    departmentName: '影像',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0a088bb5989a4b81bdf50ae43d9d71eb',
    departmentName: '影像科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1000ae27909a4f6bbea4531be4d50fea',
    departmentName: '微生物专业',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '6b2c79a7a12441618496f619a0d46d3e',
    departmentName: '心一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ac75a3d5dbdb4ef3b6ed71c89b7bb09b',
    departmentName: '心二科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '583295ff6fd511e8ad576c92bf849ecf',
    departmentName: '心内科',
    parentId: '5830ccb26fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c47fb62f0d3b4fc48770ad061eb5a5ca',
    departmentName: '心内科/CCU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '99e1b847d42e46f9a53b89c63080bb14',
    departmentName: '心外科麻醉科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7ad6426ab0184aa4ab0be6c951845ca3',
    departmentName: '心电图',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a01846fd511e8ad576c92bf849ecf',
    departmentName: '心电图室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582d6eaf6fd511e8ad576c92bf849ecf',
    departmentName: '心电图室1',
    parentId: '583295ff6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f2436fd511e8ad576c92bf849ecf',
    departmentName: '心胸外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9a10389edc6945d68d2213cd5b06a4a6',
    departmentName: '心血管三',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582500a26fd511e8ad576c92bf849ecf',
    departmentName: '心血管内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829ee9c6fd511e8ad576c92bf849ecf',
    departmentName: '心血管内科/CCU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '17b47ff4dc6841388efd887cd8137cb8',
    departmentName: '心血管内科一病区（2）',
    parentId: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '40f23b42d5be41d7a942a41425d7475f',
    departmentName: '心血管内科三病区（2）',
    parentId: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '6469d4abb68741ab83ed97c5d225c824',
    departmentName: '心血管内科二病区（2）',
    parentId: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '85532d2df73a42f598a614d167a11045',
    departmentName: '心血管内科病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'cb406c729dd34f6c91aa13eb7a4f2b36',
    departmentName: '心血管外科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3f3340de4a0546f8b16c79f3c75eab64',
    departmentName: '心血管外科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830ccb26fd511e8ad576c92bf849ecf',
    departmentName: '心血管科1',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5825033d6fd511e8ad576c92bf849ecf',
    departmentName: '心血管科2',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8e37d897f9bd468e8a7581be7cec5943',
    departmentName: '急诊ICU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0243591b6e154b83b5caebceec23b133',
    departmentName: '急诊妇产科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e5956fd511e8ad576c92bf849ecf',
    departmentName: '急诊科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0e45ede72d8443bdb837a75a216b84cf',
    departmentName: '急诊科(含EICU)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '51993daa670d4a34851706a0c7bbd766',
    departmentName: '急诊科(含院前急救)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a05176fd511e8ad576c92bf849ecf',
    departmentName: '急诊科病房、门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a069f6fd511e8ad576c92bf849ecf',
    departmentName: '急诊科重症监护病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a14766fd511e8ad576c92bf849ecf',
    departmentName: '感染疾病科',
    parentId: '5830eeab6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e3ca6fd511e8ad576c92bf849ecf',
    departmentName: '感染科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7721e3e6ded048b581e7f93ac3a89569',
    departmentName: '护士站',
    parentId: '5a1a1496f7464b82a0f8a0fa40e560f6',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: 'c1147c5cdcc34bd6bb09bcc3e2865908',
    departmentName: '护理一部',
    parentId: '0',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: 'cd3ebce21cc54bae8469bff22dff7f45',
    departmentName: '护理二部',
    parentId: '0',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: '5a1a1496f7464b82a0f8a0fa40e560f6',
    departmentName: '护理室',
    parentId: 'c1147c5cdcc34bd6bb09bcc3e2865908',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: 'ff8080816c03ef28016c0447611c0004',
    departmentName: '护理部1',
    parentId: '0',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: '5829fea76fd511e8ad576c92bf849ecf',
    departmentName: '推拿科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c54ccf7a35f546e693154df22bdee9df',
    departmentName: '放射影像科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a02056fd511e8ad576c92bf849ecf',
    departmentName: '放射科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '90b0c232e82e4d9c8fe9d4a38607a3c3',
    departmentName: '放射肿瘤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0efc6a6196ca4c18ad237c4c2687e46e',
    departmentName: '整形科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a158f6fd511e8ad576c92bf849ecf',
    departmentName: '新生儿',
    parentId: '5830ef2c6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a061d6fd511e8ad576c92bf849ecf',
    departmentName: '新生儿外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b82bf3c5440548f4a2f3e9058662df27',
    departmentName: '新生儿病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '75e7d585804c4def87f32a26eb1565fa',
    departmentName: '新生儿科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b9838bd016bb1e73725062c',
    departmentName: '新生儿科',
    parentId: '0',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: 'fd521da69fde4f21baebb21ef9c73573',
    departmentName: '普外',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ba0ca8bbb34643c7ab2fe942c0111fc1',
    departmentName: '普外一科',
    parentId: '5829f0a96fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '47097ba961cc406daddf72e7fd63e0f4',
    departmentName: '普外二科',
    parentId: '5829f0a96fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '289f96501e224835afcb0297294db40e',
    departmentName: '普外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5c1c000affa84bc3985b99a293eba99d',
    departmentName: '普外科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f0a96fd511e8ad576c92bf849ecf',
    departmentName: '普通外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b2c0b5f9b82d4a16bc24db9d83451f8e',
    departmentName: '普通外科(病房)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f51086b3e1144598aa6dc7d07d739ac8',
    departmentName: '普通外科(门诊)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd2ba677bd1ab4ac183eb5bec512abbfb',
    departmentName: '普通外科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '24f9eeb273d7480aafa7cccfe0c1ead0',
    departmentName: '普通外科七病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9bd8650e133d4c56bcf534efa27b0b68',
    departmentName: '普通外科三病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'e7951cc94a0e43bdbcde8f4a5e42d3dc',
    departmentName: '普通外科九病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '478c8222e5344d188714593d6143c4d6',
    departmentName: '普通外科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '36dfe4dea5764c4483b662deb16d4e97',
    departmentName: '普通外科五病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5958a6f617674db5a59cd47f03e7c2d2',
    departmentName: '普通外科八病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'fa634688914d4c39bb25ffaee981d071',
    departmentName: '普通外科六病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ef13f3d8983f463aa4e23f1de83bed6c',
    departmentName: '普通外科十病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a3ef9965b1bf4fb392edc6c8e9aaf716',
    departmentName: '普通外科四病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '88b42892a76c4ff4b53db9a569a0a6b3',
    departmentName: '普通外科（门诊）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f6df6fd511e8ad576c92bf849ecf',
    departmentName: '机动科室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582d6e166fd511e8ad576c92bf849ecf',
    departmentName: '杨杨',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e1276fd511e8ad576c92bf849ecf',
    departmentName: '核医学科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '73b4f9c27d694c329bf83469e3d4fb78',
    departmentName: '检验医学科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1b5175a71cdb4442b9c458bc654f52f6',
    departmentName: '泌外麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826d8036fd511e8ad576c92bf849ecf',
    departmentName: '泌尿外科',
    parentId: '58309fa16fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'e7a8d921b1ff47abbf9a7a4f090cd002',
    departmentName: '泌尿外科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7f8fbd19a0774688a8d866bb2f0a437a',
    departmentName: '泌尿外科三病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'df56e34c37cf43bbb535fabea29d892e',
    departmentName: '泌尿外科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '24fe23666f0f4f8081ec5fc80b9d8b37',
    departmentName: '泌尿外科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '402888516bdb2cb2016bdf63aff70001',
    departmentName: '测试20190711',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b242199035fc457aa2041d2742fb0507',
    departmentName: '测试科室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b622f581abd9455994e9e40dc917c97b',
    departmentName: '测试科室0615',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '77103c8b48ff45b49ecadccabf8996bb',
    departmentName: '测试科室1',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b98384c016bb68bc35905e6',
    departmentName: '测试部门',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '000000006b98384c016bb73631f60603',
    departmentName: '测试部门-运维',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830987d6fd511e8ad576c92bf849ecf',
    departmentName: '消化内科11',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3c4299885a6745d090c17ee4d5d8ca13',
    departmentName: '消化内科一病区（2）',
    parentId: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '34226f50470a4a1f93808eea2211519a',
    departmentName: '消化内科三病区（2）',
    parentId: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a91b771dd4df4ebfb472a9fe6af8a615',
    departmentName: '消化内科二病区（2）',
    parentId: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f7e66fd511e8ad576c92bf849ecf',
    departmentName: '消化科（脾胃病科）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'be549f9f37924b1faa8e9bc62ba795e3',
    departmentName: '牙体牙髓',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9a689a9395e944699b6aca6a1e556fbe',
    departmentName: '物理治疗',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '88806f3c891d4e89a4ffca36a4b0be4c',
    departmentName: '特需病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7f13e0785d4c4944a27de0110084627c',
    departmentName: '玉娜科室',
    parentId: 'dfaba0be45ce45f0a35108d374b06738',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '04b6efa13e3e46af8e7287f06f14407b',
    departmentName: '生殖中心',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0fce416252664b14bd748bc940962081',
    departmentName: '生殖内分泌',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'bb228f03077242a9a433b1c583d8e143',
    departmentName: '电生理',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f5489585c72a46318c40e228b652a827',
    departmentName: '疼痛治疗（病房）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3aa457d4aa854519b70d213795bdfb5d',
    departmentName: '疼痛治疗（门诊）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a513f682805e49e6911b572ef2c007e9',
    departmentName: '疼痛科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9b23579d578d45d69a23e7344e7a1a1d',
    departmentName: '病房前段组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd95ca052b5a14c6d84368cfcdea84961',
    departmentName: '病房后段组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8b634ba305cf46979cb3033d4c34a818',
    departmentName: '病房腹部超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c0a42ec69af141bcb0ff102d0b2013df',
    departmentName: '病案',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '513a8876eaf84944a6457b6331718ce7',
    departmentName: '病案科',
    parentId: '5829f0256fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5f0225e237804397916c7a787a87274c',
    departmentName: '病理技术',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '4e89594957e74e0e821d8569044a64cf',
    departmentName: '病理科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b04f9b91bb5e4a5f83b6683a78e7e85e',
    departmentName: '白内障组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c0deb00454994e50b316304399f5b463',
    departmentName: '皮肤一科',
    parentId: '880aa8aed9b0430fb2daa109356b82c3',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1683b013376d4a81aed9ca2713b1b17f',
    departmentName: '皮肤二科',
    parentId: '880aa8aed9b0430fb2daa109356b82c3',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '880aa8aed9b0430fb2daa109356b82c3',
    departmentName: '皮肤大科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e2336fd511e8ad576c92bf849ecf',
    departmentName: '皮肤病科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fb086fd511e8ad576c92bf849ecf',
    departmentName: '皮肤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f4c76fd511e8ad576c92bf849ecf',
    departmentName: '皮肤科门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b815141afaef406d9d0996fcd37ba1cf',
    departmentName: '眼眶病组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a18c56fd511e8ad576c92bf849ecf',
    departmentName: '眼科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8a4a3f57aa174540b1a6c6701ea116d3',
    departmentName: '眼科功能室及眼视光组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '15e28d76a056479992a7c62149191f19',
    departmentName: '眼科和耳鼻喉、口外科麻醉科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '710b32f15af34bba944211c6767a4a65',
    departmentName: '眼科检查室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '980ee1946b284c13968dd65b19632834',
    departmentName: '眼科门诊',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '42dc0df5f4be43fcbfe1b006c62f549e',
    departmentName: '眼耳鼻喉科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '179223a8749b4038a0a414b4f9565e6b',
    departmentName: '眼耳鼻喉麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a9c0bd3bc12e421b971f400049a269e5',
    departmentName: '磁共振',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5e64d279427e4d618fade1003abe4e82',
    departmentName: '社区一',
    parentId: '582a1f656fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0b15adf287d74d57971eab04f75504f0',
    departmentName: '社区二',
    parentId: '582a1f656fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9f9e18351d144f729231468e7fa2210a',
    departmentName: '社区二1',
    parentId: '582a1f656fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826fc7e6fd511e8ad576c92bf849ecf',
    departmentName: '神内1',
    parentId: '5830ee276fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830ee276fd511e8ad576c92bf849ecf',
    departmentName: '神内2',
    parentId: '5830b2206fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830eda76fd511e8ad576c92bf849ecf',
    departmentName: '神外南',
    parentId: '5830b2206fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826f3976fd511e8ad576c92bf849ecf',
    departmentName: '神外南一区',
    parentId: '5830eda76fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826f53a6fd511e8ad576c92bf849ecf',
    departmentName: '神外南二区',
    parentId: '5830eda76fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826f2d76fd511e8ad576c92bf849ecf',
    departmentName: '神经',
    parentId: '5830b2206fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830b2206fd511e8ad576c92bf849ecf',
    departmentName: '神经1',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e5056fd511e8ad576c92bf849ecf',
    departmentName: '神经内科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd8b348e7a2584a82a643c9af26ddaeb4',
    departmentName: '神经内科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b2a0204017ac4d55bdf7d048d53d2562',
    departmentName: '神经内科与康复医学科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f9736fd511e8ad576c92bf849ecf',
    departmentName: '神经内科（脑病科）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f1af6fd511e8ad576c92bf849ecf',
    departmentName: '神经外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b48cca1642364449aaccef863750d28f',
    departmentName: '神经外科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a87d178b277b47dfb0af41d72dd22126',
    departmentName: '神经外科三病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c426ec1bacab45da9cfc3229f10822f8',
    departmentName: '神经外科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '94215fa3337b48e288b13b93d4e905b3',
    departmentName: '神经外科五病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2ba88119dc2c4883b336ad158942ab64',
    departmentName: '神经外科四病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '494e71874bf74613b1c0594ef55fe285',
    departmentName: '神经外科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'abcedb9e62b643d699c71034333ef1f9',
    departmentName: '神经康复',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5fe2176613d242d2a82dfdc19ace89bd',
    departmentName: '神经电生理及心肺运动实验',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2cc9b29a51424bb69491f4bdff3ae00b',
    departmentName: '种植',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5c2b222f443a4cc39aa13ac8431b1892',
    departmentName: '科教科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a19d56fd511e8ad576c92bf849ecf',
    departmentName: '精神科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c4c1f91c0230421b8185e0a2a4babc06',
    departmentName: '细胞病理',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f0256fd511e8ad576c92bf849ecf',
    departmentName: '综合ICU',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '4e7703bfaa5c43d4a482d0bfd45529b1',
    departmentName: '编辑四部',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '01f02e4a146e4cb3aa0739a8286c1f4b',
    departmentName: '老年病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e1ab6fd511e8ad576c92bf849ecf',
    departmentName: '老年科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '42ea70203ac14c01bc52a7fb1414cf2e',
    departmentName: '耳科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3732bc94b21f4fed912ab4a5a01394dc',
    departmentName: '耳科病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a19496fd511e8ad576c92bf849ecf',
    departmentName: '耳鼻咽喉科',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ca32d0acb81945fd8d359495d08880de',
    departmentName: '耳鼻咽喉（急诊）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8380177b4648498784991581deeecb25',
    departmentName: '耳鼻咽喉（门诊）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9407ba637ad24ed0a5cda2f73cbe0143',
    departmentName: '耳鼻喉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fb8e6fd511e8ad576c92bf849ecf',
    departmentName: '肛肠科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '2e7f92034a1242f780def0fb36b8a48a',
    departmentName: '肝病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0b89cd76a6d74721b0d0cc707f724e16',
    departmentName: '肝胆一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9d2d58ead1204b909322685051ae19a9',
    departmentName: '肝胆二科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830e4e26fd511e8ad576c92bf849ecf',
    departmentName: '肝胆内科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830e61c6fd511e8ad576c92bf849ecf',
    departmentName: '肝胆北病区',
    parentId: '5830e4e26fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830ec0b6fd511e8ad576c92bf849ecf',
    departmentName: '肝胆南病区',
    parentId: '5830e4e26fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8b481e4466574d3d9d41a470b68fe179',
    departmentName: '肺病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826df836fd511e8ad576c92bf849ecf',
    departmentName: '肾内科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f8f16fd511e8ad576c92bf849ecf',
    departmentName: '肾病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '53345cfdf0784aaab2a491f9d224cbd2',
    departmentName: '肾脏内科1',
    parentId: '5829f8f16fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e2b86fd511e8ad576c92bf849ecf',
    departmentName: '肿瘤内科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a04936fd511e8ad576c92bf849ecf',
    departmentName: '肿瘤内科（含放射科）',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a0806f65b8554322a738dcb9cefe2061',
    departmentName: '肿瘤放疗科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '03b4c33ff93b4b68ac8be792ef841298',
    departmentName: '肿瘤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582512866fd511e8ad576c92bf849ecf',
    departmentName: '胃肠',
    parentId: '5830987d6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '61363b98db8f47e89ded9d7bcbb8366b',
    departmentName: '胃肠一区',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'cbd0ef8114ad45a4a30c746faadcc028',
    departmentName: '胃肠二区',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7ccb38cb09ef44898d11e7aecbe46a8f',
    departmentName: '胃肠外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '48144bee56184deab76d5e0f87d98f10',
    departmentName: '胸外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3528e7a60c1648a494c3d03cfa76eb3f',
    departmentName: '胸外科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '8ea6d49b7dc94f2abbcc87fe10fb6573',
    departmentName: '胸外科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a261fd38c630418b93bcfacd07c5bd4d',
    departmentName: '胸外麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '083e22a783694f84b1507641df61d274',
    departmentName: '胸心外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'eed29e94b9974b19a510bc2ca72359d6',
    departmentName: '胸心外科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd280441b8bfe406b8046296688df79c8',
    departmentName: '脑外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '12a5ee64460147ee84f67ed914ac49b1',
    departmentName: '脑病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c82a9bba3eac4d679a38a3837200636d',
    departmentName: '脾胃科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ddf643c02b5b4f96ba866665aa474a94',
    departmentName: '血液2科',
    parentId: '9acf49bcc52744aaba0ebf87766f2b72',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582502a36fd511e8ad576c92bf849ecf',
    departmentName: '血液内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'bc760b78c541489c9f5f49be73be1405',
    departmentName: '血液外1科',
    parentId: '9acf49bcc52744aaba0ebf87766f2b72',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9acf49bcc52744aaba0ebf87766f2b72',
    departmentName: '血液外科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5825044b6fd511e8ad576c92bf849ecf',
    departmentName: '血液病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'd9904a1a646c4dd0b8d2d8c660862553',
    departmentName: '血液科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7b91dc4c10c34a69a28aa36d28211a5c',
    departmentName: '视网膜病组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '21d652c59217407ea4be7b50af3c09e8',
    departmentName: '角膜病组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '094777341ccc47e5bc029b382f97157d',
    departmentName: '言语治疗',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3205c93886944880bf0b12bfa1daee18',
    departmentName: '计划生育',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a030c6fd511e8ad576c92bf849ecf',
    departmentName: '计划生育室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'bda9b0ad07ff44f8b3c0192095048343',
    departmentName: '计划生育科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '89a01c97b45a4f69943c70c737d5d8b8',
    departmentName: '质控',
    parentId: '5829f6df6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1df22482e62948bc88699e189247a79c',
    departmentName: '质控科',
    parentId: '2378cdd84a964f7189bc2712c39d594e',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3c092ad89de1437fa1c574bf5bcbc996',
    departmentName: '超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c5147365c56c4c0fb29d30342c8b0e8a',
    departmentName: '超声医学科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'cf830b4fefaa43cb8e56c17aed78dcf9',
    departmentName: '超声影像科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a04126fd511e8ad576c92bf849ecf',
    departmentName: '超声波室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e09b6fd511e8ad576c92bf849ecf',
    departmentName: '超声科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f595151b759042c8b188acf496950c37',
    departmentName: '超声诊疗中心',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f5456fd511e8ad576c92bf849ecf',
    departmentName: '输血科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'c5c377a462b246ee8a11e26f8fcc32dc',
    departmentName: '这个科室你没有',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '582a1f656fd511e8ad576c92bf849ecf',
    departmentName: '选修科室',
    parentId: '5830b4916fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '1cfc53a4ebf646edb0d75a2c6d4cb152',
    departmentName: '郑大医内科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'fcba8132b8c440ae8af4519828ce1f45',
    departmentName: '重医儿童科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9a7b6beda13c47c59d1e0c1b135cd0e7',
    departmentName: '重医儿童科护理',
    parentId: '0',
    departmentTypeCode: '50002_DepartmenType'
  },
  {
    id: '402888516bdb2cb2016bdf64dbe00002',
    departmentName: '重启',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '402888516bdb2cb2016bdf6200c40000',
    departmentName: '重庆卫生社区',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e6336fd511e8ad576c92bf849ecf',
    departmentName: '重症监护',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'bc660adccd1c4952aaafca4373e84954',
    departmentName: '针推康复科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829fd996fd511e8ad576c92bf849ecf',
    departmentName: '针灸科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'eb9d036f5b2540d9a25d1b810b9dd6a7',
    departmentName: '销售部',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '457a8a4b794943a9bd43d59eaeddb841',
    departmentName: '门诊介入超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '403515c40f2346848ea14a23a49672dc',
    departmentName: '门诊和手术室外麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0f209e4b94f04dfba93cb7b886da0e13',
    departmentName: '门诊妇产超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '42c5d648d75249499ba9195784aa9b17',
    departmentName: '门诊心脏超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5a132a90184f4e6ba590553785210bec',
    departmentName: '门诊浅表超声、门诊血管超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '36895fd6722f478aadf4278fd1bfc0b2',
    departmentName: '门诊超声',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'be072803f9c148108ac125c44bb1a3f7',
    departmentName: '门诊超声-心脏',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f3cd6fd511e8ad576c92bf849ecf',
    departmentName: '院前急救',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '78fa8568498b4377b0bae1ea403f4ac5',
    departmentName: '青光眼组',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '45140ff9161b4edfb14a8ac96a031bca',
    departmentName: '项目部',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826e4616fd511e8ad576c92bf849ecf',
    departmentName: '风湿免疫科',
    parentId: '5830a02a6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f9fa6fd511e8ad576c92bf849ecf',
    departmentName: '风湿病科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'b23e68c32bf04b25b0091085376d4534',
    departmentName: '风湿病科1',
    parentId: '5829f9fa6fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7fadbe313c744ec4a8c5b6c33f9a5b2b',
    departmentName: '风湿科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '90b82692d10b4df2af38032b996663d2',
    departmentName: '骨一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'fafb69d2dd62431299561a6a3f75a373',
    departmentName: '骨三科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '21122749c68846ba8998fa3030973fe0',
    departmentName: '骨二科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'a879ec9579eb43c18924b4bc600f4c75',
    departmentName: '骨伤、脊柱科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '9452b25d3b574295a48896467fabe5e2',
    departmentName: '骨伤一',
    parentId: '3c609cbd66d54875a6013fa31760e2a3',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3c609cbd66d54875a6013fa31760e2a3',
    departmentName: '骨伤科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ca8a06a1d7c14e1bb8df04d2ff68096b',
    departmentName: '骨关节科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826d88e6fd511e8ad576c92bf849ecf',
    departmentName: '骨外科',
    parentId: '58309fa16fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '755417ee545e4443851fbd5c24e0aaf0',
    departmentName: '骨外科一病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '3e946f1ca27f42c1821e3d8a2b308baa',
    departmentName: '骨外科七病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'df4a132fdfdb453e82db61d18eff47ec',
    departmentName: '骨外科三病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '43152896ec7443eb86a0e8610686b45a',
    departmentName: '骨外科九病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '0e1e43f6747241c1908a944affa1a2be',
    departmentName: '骨外科二病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '56a9d9a9654149fbafa3a8644a196336',
    departmentName: '骨外科五病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'f1407107f85a4fab86237c6a2fc64aa1',
    departmentName: '骨外科八病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5d8b8ae9ab7449938c0dfe4ea04bbb0a',
    departmentName: '骨外科六病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7094af7907dc44008db38ffb9662904d',
    departmentName: '骨外科四病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829f12a6fd511e8ad576c92bf849ecf',
    departmentName: '骨科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7968273b094746f6b69c49a2a1029199',
    departmentName: '骨科(病房)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '283946c591f24b018f6cc43e8ec51fb8',
    departmentName: '骨科(门诊)',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5830b1986fd511e8ad576c92bf849ecf',
    departmentName: '骨科1',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5826f2576fd511e8ad576c92bf849ecf',
    departmentName: '骨科一区',
    parentId: '5830b1986fd511e8ad576c92bf849ecf',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '11f44ee700b44687a92668fd411817e8',
    departmentName: '骨科一科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '4ebda16dab994841b4a7c3681a92b7bd',
    departmentName: '骨科二科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '637519a8376848d095391d6b58946bac',
    departmentName: '骨科康复',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '7c555f861f124d74a1d63c07a0ffde7f',
    departmentName: '骨科麻醉',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: 'ccbe731bc074467b88b9e6867bfe5376',
    departmentName: '麻醉恢复室',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '5829efa56fd511e8ad576c92bf849ecf',
    departmentName: '麻醉科',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  },
  {
    id: '619de98b92c848f6aee45323d6541443',
    departmentName: '鼻科病房',
    parentId: '0',
    departmentTypeCode: '50001_DepartmenType'
  }
];

const z = _.fromPairs(_.zip(humanTypeCode, [teacherTypeCode, studentTypeCode]));
