<template>
    <a-modal
            :destroy-on-close="true"
            :mask-closable="false"
            title="编辑"
            :visible="visible"
            :onCancel="onCancel"
            width=90%
    >
        <template #footer>
            <a-button key="back" @click="() => onCancel()">取消</a-button>
            <a-button key="submit" type="primary" :loading="onSubmitLoading" @click="onFinish">提交</a-button>
        </template>

        <a-form :labelCol="{ span: 4 }" :wrapper-col="{span:20}">

            <a-form-item label="ID" v-bind="validateInfos.id">
                <a-input-number v-model:value="modelRef.id"/>
            </a-form-item>
            
            <a-form-item label="订单标题" v-bind="validateInfos.title">
                <a-input v-model:value="modelRef.title" placeholder="请输入订单标题" />
            </a-form-item>
            
            <a-form-item label="订单描述" v-bind="validateInfos.description">
                <a-input v-model:value="modelRef.description" placeholder="请输入订单描述" />
            </a-form-item>
            
            <a-form-item label="支付渠道：aliPay 支付宝， wxPay微信..等等" v-bind="validateInfos.payType">
                <a-input v-model:value="modelRef.payType" placeholder="请输入支付渠道：aliPay 支付宝， wxPay微信..等等" />
            </a-form-item>
            
            <a-form-item label="下单方式：app wap page 等" v-bind="validateInfos.payWay">
                <a-input v-model:value="modelRef.payWay" placeholder="请输入下单方式：app wap page 等" />
            </a-form-item>
            
            <a-form-item label="支付金额" v-bind="validateInfos.payAmt">
                <a-input-number v-model:value="modelRef.payAmt"/>
            </a-form-item>
            
            <a-form-item label="总优惠金额" v-bind="validateInfos.discountAmt">
                <a-input-number v-model:value="modelRef.discountAmt"/>
            </a-form-item>
            
            <a-form-item label="红包优惠" v-bind="validateInfos.redpackmal">
                <a-input-number v-model:value="modelRef.redpackmal"/>
            </a-form-item>
            
            <a-form-item label="备注" v-bind="validateInfos.mark">
                <a-input v-model:value="modelRef.mark" placeholder="请输入备注" />
            </a-form-item>
        </a-form>


    </a-modal>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { message } from "ant-design-vue";
import { useForm } from "@ant-design-vue/use";
// import CKEditor from "@/components/CKEditor/index.vue";
import { PayOrderDataType } from "../data.d";
import { Props, validateInfos } from "@ant-design-vue/use/lib/useForm";

interface UpdateFormSetupData {
    modelRef: Omit<PayOrderDataType, 'id'>;
    validateInfos: validateInfos;
    onFinish: () => Promise<void>;
}

export default defineComponent({
    name: 'UpdateForm',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        values: {
            type: Object as PropType<Partial<PayOrderDataType>>,
            required: true
        },
        onCancel: {
            type: Function,
            required: true
        },
        onSubmitLoading: {
            type: Boolean,
            required: true
        },
        onSubmit: {
            type: Function as PropType<(values: Omit<PayOrderDataType, 'id'>, resetFields: (newValues?: Props | undefined) => void) => void>,
            required: true
        }
    },
    components: {
        // CKEditor
    },
    setup(props): UpdateFormSetupData {

        const { t } = useI18n();

        // 表单值
        const modelRef = reactive<PayOrderDataType>({
            
            id: props.values.id || 0,
            
            title: props.values.title || '',
            
            description: props.values.description || '',
            
            payType: props.values.payType || '',
            
            payWay: props.values.payWay || '',
            
            payAmt: props.values.payAmt || 0,
            
            discountAmt: props.values.discountAmt || 0,
            
            redpackmal: props.values.redpackmal || 0,
            
            mark: props.values.mark || '',
            
        });
        // 表单验证
        const rulesRef = reactive({
            id: [],
            
            title: [],
            
            description: [],
            
            payType: [],
            
            payWay: [],
            
            payAmt: [],
            
            discountAmt: [],
            
            redpackmal: [],
            
            mark: [],
            
        });
        // 获取表单内容
        const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
        // 提交
        const onFinish = async () => {
            try {
                const fieldsValue = await validate<PayOrderDataType>();
                console.log("fieldsValue",fieldsValue)
                props.onSubmit(fieldsValue, resetFields);
            } catch (error) {
                // console.log('error', error);
                message.warning(t('app.global.form.validatefields.catch'));
            }
        };

        return {
            modelRef,
            validateInfos,
            onFinish
        }

    }
})
</script>