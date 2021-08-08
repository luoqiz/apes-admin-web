import request from '@/utils/request';
import {PayOrderDataType, TableListQueryParams} from './data'

export async function queryList(params?: TableListQueryParams): Promise<any> {
    return request({
        url: 'payOrder/search',
        method: 'get',
        params,
    });
}

export async function createData(params: Omit<PayOrderDataType, 'id'>): Promise<any> {
    return request({
        url: 'payOrder',
        method: 'POST',
        data: params,
    });
}

export async function updateData(id: number, params: Omit<PayOrderDataType, 'id'>): Promise<any> {
    return request({
        url: `payOrder`,
        method: 'PUT',
        data: params,
    });
}

export async function removeData(id: number): Promise<any> {
    return request({
        url: `payOrder/${id}`,
        method: 'delete',
    });
}

export async function batchRemoveData(id: (number | string)[]): Promise<any> {
    return request({
        url: `payOrder`,
        method: 'delete',
        data: id,
    });
}

export async function detailData(id: number): Promise<any> {
    return request({url: `payOrder/${id}`});
}