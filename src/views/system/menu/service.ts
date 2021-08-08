import request from '@/utils/request';
import {SysMenuDataType, TableListQueryParams} from './data'

export async function queryList(params?: TableListQueryParams): Promise<any> {
    return request({
        url: 'sysMenu/search',
        method: 'get',
        params,
    });
}

export async function createData(params: Omit<SysMenuDataType, 'menuId'>): Promise<any> {
    return request({
        url: 'sysMenu',
        method: 'POST',
        data: params,
    });
}

export async function updateData(menuId: number, params: Omit<SysMenuDataType, 'menuId'>): Promise<any> {
    return request({
        url: `sysMenu`,
        method: 'PUT',
        data: params,
    });
}

export async function removeData(menuId: number): Promise<any> {
    return request({
        url: `sysMenu/${menuId}`,
        method: 'delete',
    });
}

export async function batchRemoveData(menuId: (number | string)[]): Promise<any> {
    return request({
        url: `sysMenu`,
        method: 'delete',
        data: menuId,
    });
}

export async function detailData(menuId: number): Promise<any> {
    return request({url: `sysMenu/${menuId}`});
}