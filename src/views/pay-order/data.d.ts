export interface PayOrderDataType {
    id: number; //ID
    title: string; //订单标题
    description: string; //订单描述
    payType: string; //支付渠道：aliPay 支付宝， wxPay微信..等等
    payWay: string; //下单方式：app wap page 等
    payAmt: number; //支付金额
    discountAmt: number; //总优惠金额
    redpackmal: number; //红包优惠
    mark?: string; //备注
    expiredTime?: Date; //过期时间
    createTime?: Date; //创建日期
    updateTime?: Date; //更新时间
}

export interface TableListQueryParams {
    page: number;
    size: number;
    title?: string; //订单标题
    payType?: string; //支付渠道：aliPay 支付宝， wxPay微信..等等
    payWay?: string; //下单方式：app wap page 等
}

export interface PaginationConfig {
    total: number;
    current: number;
    pageSize: number;
    showSizeChanger: boolean;
    showQuickJumper: boolean;
}


export interface TableDataType {
    list: TableListItem[];
    pagination: PaginationConfig;
}
