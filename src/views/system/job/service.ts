import request from '@/utils/request';
import {SysJobDataType, TableListQueryParams} from './data'

export async function queryList(params?: TableListQueryParams): Promise<any> {
    return request({
        url: 'sysJob/search',
        method: 'get',
        params,
    });
}

export async function createData(params: Omit<SysJobDataType, 'jobId'>): Promise<any> {
    return request({
        url: 'sysJob',
        method: 'POST',
        data: params,
    });
}

export async function updateData(jobId: number, params: Omit<SysJobDataType, 'jobId'>): Promise<any> {
    return request({
        url: `sysJob`,
        method: 'PUT',
        data: params,
    });
}

export async function removeData(jobId: number): Promise<any> {
    return request({
        url: `sysJob/${jobId}`,
        method: 'delete',
    });
}

export async function batchRemoveData(jobId: (number | string)[]): Promise<any> {
    return request({
        url: `sysJob`,
        method: 'delete',
        data: jobId,
    });
}

export async function detailData(jobId: number): Promise<any> {
    return request({url: `sysJob/${jobId}`});
}