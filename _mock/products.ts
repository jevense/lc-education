import {MockRequest} from '@delon/mock';
import * as Mock from 'mockjs';

export const Product = {
  'GET /api/institute/:id/products': (req: MockRequest) => {
    const data = Mock.mock({
      'list|0-6': [{
        'code|+1': ['20100', '20300', '20400', '20800', '20900', '21000'],
        // name: '@ctitle',
        // logo: Random.dataImage('80x80', '头像'),
        description: '@csentence',
        valid: true,
        serviceStart: '@date',
        serviceEnd: '@date',
        frontUrl: '@url("http")',
        backUrl: '@url("http")',
        remainingAvailableDay: '@natural',
      }]
    });
    return data.list;
  },
};
