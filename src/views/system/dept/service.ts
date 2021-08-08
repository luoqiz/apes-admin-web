import request from '@/utils/request';
import {SysDeptDataType, TableListQueryParams} from './data'

export async function queryList(params?: TableListQueryParams): Promise<any> {
    return request({
        url: 'sysDept/search',
        method: 'get',
        params,
    });
}

export async function createData(params: Omit<SysDeptDataType, 'deptId'>): Promise<any> {
    return request({
        url: 'sysDept',
        method: 'POST',
        data: params,
    });
}

export async function updateData(deptId: number, params: Omit<SysDeptDataType, 'deptId'>): Promise<any> {
    return request({
        url: `sysDept`,
        method: 'PUT',
        data: params,
    });
}

export async function removeData(deptId: number): Promise<any> {
    return request({
        url: `sysDept/${deptId}`,
        method: 'delete',
    });
}

export async function batchRemoveData(deptId: (number | string)[]): Promise<any> {
    return request({
        url: `sysDept`,
        method: 'delete',
        data: deptId,
    });
}

export async function detailData(deptId: number): Promise<any> {
    return request({url: `sysDept/${deptId}`});
}