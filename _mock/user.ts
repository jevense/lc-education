import {MockRequest, MockStatusError} from '@delon/mock';
import * as Mock from 'mockjs';
import {Random} from 'mockjs';
import {subjects} from './major';
import {
  computerLevel,
  degrees,
  degreeTypes,
  diplomas,
  englishLevel,
  ethnicity,
  idTypeCodes,
  specialityTitles,
  studentSourceCode,
  traineeJuniorColleges
} from '@data/dictionary';
import {departments} from './institute';

// const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const majorCode = subjects.map(subject => subject.majorCode);
const majorName = subjects.map(subject => subject.majorName);

const idType = idTypeCodes.map(value => value.dictionaryCode);
const diploma = diplomas.map(value => value.dictionaryCode);
const degreeType = degreeTypes.map(value => value.dictionaryCode);
const degree = degrees.map(value => value.dictionaryCode);
const specialityTitle = specialityTitles.map(value => value.dictionaryCode);
const studentSource = studentSourceCode.map(value => value.dictionaryCode);
const ethnicityCode = ethnicity.map(value => value.dictionaryCode);
const traineeJuniorCollege = traineeJuniorColleges.map(value => value.dictionaryCode);
const english = englishLevel.map(value => value.dictionaryCode);
const computer = computerLevel.map(value => value.dictionaryCode);

const department = Random.shuffle(departments.map(value => value.id)).slice(-3);

export const USERS = {
  'GET /user/check/': () => false,
  'GET /user/check/:name': (req: MockRequest) => req.params.name === 'cipchk',
  '/500': () => {
    throw new MockStatusError(500);
  },
  '/404': () => {
    throw new MockStatusError(404);
  },
  'GET /api/user/:id/institute': (req: MockRequest) => {
    return {
      account: '卢杰文',
      name: 'jeven',
      humanType: null,
      primaryInstituteId: null,
      institutes: [{
        id: '1',
        name: '医视界',
        number: null,
        logo: 'https://mvw-yth.oss-cn-beijing.aliyuncs.com/data/institute/80y_20171128205512806.jpg',
        createTime: null,
        timeLong: null,
        roles: [{code: '00800'}, {code: '00801'}]
      }, {
        id: '2',
        name: '医视界2',
        number: null,
        logo: 'https://mvw-yth.oss-cn-beijing.aliyuncs.com/data/institute/80y_20171128205512806.jpg',
        createTime: null,
        timeLong: null,
        roles: [{code: '00801'}]
      }]
    };
  },
  'GET /api/institute/:id/human': (req: MockRequest) => {
    const {page, size} = req.queryString;
    return Mock.mock({
      data: {
        'items|1-10': [
          {
            'id|+1': 1,
            'departmentTypeCode|1': ['50001_DepartmenType', '50002_DepartmenType'],
            'departmentTypeName|1': ['科室', '护理部'],
            'humanTypeCode|1': [['Teacher_HumanType'], ['Student_HumanType'], ['Nurse_HumanType'], ['Other_HumanType']],
            personnelTypeCodes() {
              if (this.humanTypeCode.includes('Teacher_HumanType')) {
                const one = Random.shuffle([
                  'PersonnelTypeCode_00200',
                  'PersonnelTypeCode_00201',
                  'PersonnelTypeCode_00202',
                  'PersonnelTypeCode_00203']);
                return one.slice(Random.natural(0, 2));
              } else if (this.humanTypeCode.includes('Student_HumanType')) {
                const one = Random.pick([
                  'PersonnelTypeCode_00300',
                  'PersonnelTypeCode_00301',
                  'PersonnelTypeCode_00304',
                  'PersonnelTypeCode_00302',
                  'PersonnelTypeCode_00306',
                  'PersonnelTypeCode_00305']);
                return [one];
              } else {
                return [];
              }
            },
            'idTypeCode|1': idType,
            departmentNames: '@ctitle',
            traineeMajorCode: '@word',
            traineeMajorName: '@ctitle',
            traineeYear: '@date("yyyy")',
            'account|+1': '@name',
            'name|+1': '@cname',
            cellPhone: /1\d{10}/,
            'roleNameMain|1-2': ['普通用户', '管理员'],
            roleName360: ['普通用户', '管理员'],
            roleNameLiving: ['普通用户', '管理员'],
            roleNameExam: ['普通用户', '管理员'],
          }
        ],
        'maxPage|1-10': 1,
        pageNum: 1,
        pageSize: 10,
        total() {
          return this.items.length;
        },
      },
      errorInfo: '',
      msg: '',
      result: true
    });
  },
  'POST /api/institute/:id/human': (req: MockRequest) => {
    // throw new MockStatusError(400, {
    //   status: true,
    //   errorInfo: '参数不对'
    // });
    return {
      id: 'demoData',
      name: 'demoData',
      account: 'demoData',
      jobNumber: 'demoData',
      duration: 'demoData',
      gradeCode: 'demoData',
      cellPhone: 'demoData',
      identificationTypeCode: 'demoData',
      identificationNumber: 'demoData',
      email: 'demoData',
      pwd: 'demoData',
      portrait: 'demoData',
      instituteNumber: 'demoData',
      idTypeCode: 'demoData',
      traineeMajorCode: 'demoData',
      traineeYear: 1,
      hasLicense: true,
      licenseNum: 'demoData',
      genderCode: 'demoData',
      qq: 'demoData',
      birthday: '2019-09-22 20:52',
      wechat: 'demoData',
      address: 'demoData',
      diplomaCode: 'demoData',
      degreeTypeCode: 'demoData',
      degreeCode: 'demoData',
      departmentCodes: 'demoData',
      graduationCollege: 'demoData',
      graduationMajor: 'demoData',
      graduationYear: 1,
      specialityTitleCode: 'demoData',
      occupation: 'demoData',
      occupationStartFrom: '2019-09-22 20:52',
      isIntermediateOver3years: true,
      teachingStartFrom: '2019-09-22 20:52',
      lengthOfTeaching: 'demoData',
      studentFreshTypeCode: 'demoData',
      formerWorkplace: 'demoData',
      englishLevelCode: 'demoData',
      computerLevelCode: 'demoData',
      admissionDate: '2019-09-22 20:52',
      departureDate: '2019-09-22 20:52',
      beAttendingTime: '2019-09-22 20:52',
      hasCertificate: true,
      certificateNum: 'demoData',
      certificateTypeCode: 'demoData',
      humanTypeCode: 'demoData',
      personnelTypeCodes: 'demoData',
      ethnicityCode: 'demoData',
      teachingSubjectCode: 'demoData',
      tutorCapableSubjectCode: 'demoData',
      comments: 'demoData',
      traineeJuniorCollege: 'demoData',
      studentSourceCode: 'demoData'
    };
  },
  'GET /api/institute/:iid/human/:hid': (req: MockRequest) => {
    const {hid} = req.params;
    return Mock.mock({
      id: hid,
      'humanTypeCode|1': [['Teacher_HumanType'], ['Student_HumanType'], ['Nurse_HumanType'], ['Other_HumanType']],
      personnelTypeCodes() {
        if (this.humanTypeCode.includes('Teacher_HumanType')) {
          const one = Random.shuffle([
            'PersonnelTypeCode_00200',
            'PersonnelTypeCode_00201',
            'PersonnelTypeCode_00202',
            'PersonnelTypeCode_00203']);
          return one.slice(Random.natural(0, 2));
        } else if (this.humanTypeCode.includes('Student_HumanType')) {
          const one = Random.pick([
            'PersonnelTypeCode_00300',
            'PersonnelTypeCode_00301',
            'PersonnelTypeCode_00304',
            'PersonnelTypeCode_00302',
            'PersonnelTypeCode_00306',
            'PersonnelTypeCode_00305']);
          return [one];
        } else {
          return [];
        }
      },
      cellPhone: /^1[3456789]\d{9}$/,
      account: '@cellPhone',
      name: '@cname',
      departmentCodes: department,
      'traineeMajorCode|1': majorCode,
      traineeYear: '@now("year")',
      'idTypeCode|1': idType,
      'hasLicense|1-2': true,
      licenseNum: '@natural',
      'genderCode|1': ['1_Gender', '2_Gender'],
      'identificationTypeCode|1': ['1_IdentificationType', '2_IdentificationType'],
      identificationNumber: '@natural',
      birthday: '@date',
      email: '@email',
      qq: '@natural',
      wechat: '@word',
      address: '@county(true)',
      occupation: '@ctitle',
      'diplomaCode|1': diploma,
      'degreeCode|1': degree,
      'degreeTypeCode|1': degreeType,
      graduationCollege: '@csentence',
      'graduationMajor|1': majorName,
      graduationYear: '@now("year")',
      'specialityTitleCode|1': specialityTitle,
      beAttendingTime: '@date',
      occupationStartFrom: '@date',
      'hasCertificate|1-2': true,
      certificateNum: '@natural',
      'certificateTypeCode|1': ['2019', '2018'],
      'lengthOfTeaching|1-100': 1,
      teachingStartFrom: '@date',
      'isIntermediateOver3years|1-2': true,
      'duration|1-10': 1,
      'isTrainedCooperatively|1-2': true,
      cooperativeInstitute: '@csentence',
      admissionDate: '@date',
      departureDate: '@date',
      'englishLevelCode|1': english,
      'computerLevelCode|1': computer,
      'studentFreshType|1': ['1_StudentFreshType', '2_StudentFreshType'],
      'studentSourceCode|1': studentSource,
      'ethnicityCode|1': ethnicityCode,
      'teachingSubjectCode|1': majorCode,
      'tutorCapableSubjectCode|1': majorName,
      jobNumber: '@natural',
      gradeCode: '@ctitle',
      'traineeJuniorCollege|1': traineeJuniorCollege,
    });
  },
  'PATCH /api/institute/:iid/human/:hid': (req: MockRequest) => {
    return {
      account: '卢杰文',
      name: 'jeven',
      humanType: null,
      primaryInstituteId: null,
      institutes: [{
        id: '1',
        name: '医视界',
        number: null,
        logo: 'https://mvw-yth.oss-cn-beijing.aliyuncs.com/data/institute/80y_20171128205512806.jpg',
        createTime: null,
        timeLong: null,
        roles: [{code: '00800'}, {code: '00801'}]
      }, {
        id: '2',
        name: '医视界2',
        number: null,
        logo: 'https://mvw-yth.oss-cn-beijing.aliyuncs.com/data/institute/80y_20171128205512806.jpg',
        createTime: null,
        timeLong: null,
        roles: [{code: '00800'}, {code: '00801'}]
      }]
    };
  },
  'GET /api/user/validate/account': (req: MockRequest) => {
    const {keyword} = req.queryString;
    return {status: keyword !== '13405500311'};
  },
  'GET /api/user/validate/identificationNumber': (req: MockRequest) => {
    const {keyword} = req.queryString;
    return {status: keyword !== '13405500311'};
  },
  'GET /api/user/validate/email': (req: MockRequest) => {
    const {keyword} = req.queryString;
    return {status: keyword !== '13405500311'};
  },
  '/user/:id/upload': (req: MockRequest) => {
    return {id: req.params.id, name: 'upload'};
  },
};
