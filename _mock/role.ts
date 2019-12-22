import {MockRequest} from '@delon/mock';
import * as Mock from 'mockjs';
import {Random} from 'mockjs';
import {roles} from '@data/dictionary';
import {subjects} from './major';

const majorCode = subjects.map(subject => subject.majorCode);

const product = ['30000', '20300', '20400', '21000'];
const roleMap = roles.reduce((pre, ro) => {
  const content = ro.children.map(({value}) => value);
  return {...pre, [ro.key]: content};
}, {});

export const Role = {
  'GET /api/roles/institute/:id ': (req: MockRequest) => {
    const {instituteIds, extraStudentTypeCodes, size} = req.queryString;
    return Mock.mock({
      'list|1-4': [
        {
          'key|+1': product,
          title: '@ctitle',
          'children|1-4': [{
            'key|+1': 1,
            title: '@ctitle',
          }]
        }
      ],
    }).list;
  },
  'GET /api/institute/:iid/human/:hid/role': (req: MockRequest) => {
    const {hid} = req.params;
    const rc = (value) => {
      const ros = roleMap[value];
      const managers = (r) => {
        if (r === '00706') {
          return [Random.pick(majorCode)];
        }
        return [];
      };
      return Random.shuffle(roleMap[value])
        .slice(-Random.natural(1, ros.length))
        .map(r => ({
          key: r,
          managers: managers(r),
        }));
    };
    return product.map(value => ({
      product: value,
      roleCodes: rc(value)
    }));
  },
};
