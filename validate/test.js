const Mock = require('mockjs');
// const data = Mock.mock({
//   'list|7': [
//     {
//       day: '@date',
//       'count|1-100': 1
//     }]
// });
// 输出结果

// console.log(typeof data);
// for (const i of data) {
//   JSON.stringify(i);
// }

// console.log(JSON.stringify(data.list, null, 4));


// const _ = require('lodash');

// const arr = [
//   {
//     extraCultureTypeCode: 'aaaa',
//     majorName: 'aaaa',
//     majorCode: 'aaaa',
//   },
//   {
//     extraCultureTypeCode: 'bbbb',
//     majorName: 'bbbb',
//     majorCode: 'bbbb',
//   },
//   {
//     majorName: 'ccc',
//     majorCode: 'ccc',
//   },
//   {
//     majorName: 'dddd',
//     majorCode: 'dddd',
//   },
// ];

// console.log(_(arr).groupBy(o => o.extraCultureTypeCode || 'other').entries().value());

// _(arr).groupBy(o => o.extraCultureTypeCode || 'other').entries().reduce((pre, [key, value]) => {
//   const custom = value.map(sub => ({title: sub.majorName, key: sub.majorCode, isLeaf: true}));
//   pre.push({title: studentSubjectType[key], key, children: custom});
//   return pre;
// }, []);

// const humanTypeCode = ['Teacher_HumanType', 'Student_HumanType', 'Nurse_HumanType', 'Other_HumanType'];
//
// const teacherTypeCode = ['PersonnelTypeCode_00200', 'PersonnelTypeCode_00201', 'PersonnelTypeCode_00202', 'PersonnelTypeCode_00203'];
//
// const studentTypeCode = ['PersonnelTypeCode_00300',
//   'PersonnelTypeCode_00301', 'PersonnelTypeCode_00304',
//   'PersonnelTypeCode_00303', 'PersonnelTypeCode_00302',
//   'PersonnelTypeCode_00305', 'PersonnelTypeCode_00306'
// ];
//
// const z = _.zip(humanTypeCode, [teacherTypeCode, studentTypeCode]);
//
// console.log(z);
//
// console.log(_.fromPairs(z));
//
// const kkk = [
//   ['Teacher_HumanType',
//     ['PersonnelTypeCode_00200', 'PersonnelTypeCode_00201', 'PersonnelTypeCode_00202', 'PersonnelTypeCode_00203']
//   ],
//   ['Student_HumanType',
//     ['PersonnelTypeCode_00300',
//       'PersonnelTypeCode_00301',
//       'PersonnelTypeCode_00304',
//       'PersonnelTypeCode_00303',
//       'PersonnelTypeCode_00302',
//       'PersonnelTypeCode_00305',
//       'PersonnelTypeCode_00306']
//   ],
//   ['Nurse_HumanType', undefined],
//   ['Other_HumanType', undefined]
// ];
//
// const bbb = [
//   ['fred', [30, 22]],
//   ['barney', 40],
//   ['kkk', undefined]
// ];

// console.log(_.fromPairs(kkk));

// const mo = Mock.mock({
//   data: {
//     'items|1-10': [
//       {
//         'id|+1': 1,
//         'departmentTypeCode|1': ['50001_DepartmenType', '50002_DepartmenType'],
//         'departmentTypeName|1': ['科室', '护理部'],
//         'humanTypeCode|1': ['Teacher_HumanType', 'Student_HumanType', 'Nurse_HumanType', 'Other_HumanType'],
//         personnelTypeCodes() {
//           return this.humanTypeCode;
//         },
//         'idtypeCode|+1': 1 + '_IdType',
//         departmentNames: '@ctitle',
//         traineeMajorCode: '@word',
//         traineeMajorName: '@cword',
//         traineeYear: '@date("yyyy")',
//         account: '@name',
//         name: '@cname',
//         cellPhone: /1\d{10}/,
//         roleNameMain: 'demoData',
//         roleName360: 'demoData',
//         roleNameLiving: 'demoData',
//         roleNameExam: 'demoData',
//         traineeJuniorCollege: 'demoData'
//       }
//     ],
//     'maxPage|1-10': 1,
//     pageNum: 1,
//     pageSize: 10,
//     'total|1-100': 1,
//   },
//   errorInfo: '',
//   msg: '',
//   result: true
// });
//
// console.log(JSON.stringify(mo));

// const one = Mock.Random.shuffle([
//   'PersonnelTypeCode_00200',
//   'PersonnelTypeCode_00201',
//   'PersonnelTypeCode_00202',
//   'PersonnelTypeCode_00203']);
console.log(one.slice(Mock.Random.natural(0, 2)));
