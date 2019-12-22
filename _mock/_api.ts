import {MockRequest, MockStatusError} from '@delon/mock';
import * as Mock from 'mockjs';

export const APIS = {
    '/api/carousel': (req: MockRequest) => {
        return Mock.mock({
            'data|1-5': [
                {
                    id: '2222',
                    type: 'url',
                    imagePath: '@dataImage("500x200", "@ctitle")',
                    sequence: 0,
                    linkAddress: 'https://mall.imed.org.cn/activity-20191114/info.html',
                    titleName: '中医住培训高峰论坛',
                    grade: null
                }
            ]
        }).data;
    },
    '/api/carousel1': (req: MockRequest) => {
        return Mock.mock({
            'data|1-5': [
                {
                    id: '2222',
                    type: 'url',
                    imagePath: '@dataImage("500x400", "@ctitle")',
                    sequence: 0,
                    linkAddress: 'https://mall.imed.org.cn/activity-20191114/info.html',
                    titleName: '中医住培训高峰论坛',
                    grade: null
                }
            ]
        }).data;
    },
    '/api/list': (req: MockRequest) => {
        return Mock.mock({
            'data|10': [
                {
                    name: '@ctitle',
                    image: '@dataImage("10x10")',
                    date: '@date',
                    count: '@integer(1, 100)',
                }
            ]
        }).data;
    },
    '/api/401': () => {
        throw new MockStatusError(401);
    },
    '/api/403': () => {
        throw new MockStatusError(403);
    },
    '/api/404': () => {
        throw new MockStatusError(404);
    },
    '/api/500': () => {
        throw new MockStatusError(500);
    },
};
