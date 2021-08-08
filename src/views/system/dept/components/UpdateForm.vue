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

                    
            <a-form-item label="ID" v-bind="validateInfos.deptId">
                <a-input-number v-model:value="modelRef.deptId"/>
            </a-form-item>
            
            <a-form-item label="上级部门" v-bind="validateInfos.pid">
                <a-input-number v-model:value="modelRef.pid"/>
            </a-form-item>
            
            <a-form-item label="子部门数目" v-bind="validateInfos.subCount">
                <a-input-number v-model:value="modelRef.subCount"/>
            </a-form-item>
            
            <a-form-item label="名称" v-bind="validateInfos.name">
                <a-input v-model:value="modelRef.name" placeholder="请输入名称" />
            </a-form-item>
            
            <a-form-item label="排序" v-bind="validateInfos.deptSort">
                <a-input-number v-model:value="modelRef.deptSort"/>
            </a-form-item>
            
            <a-form-item label="状态" v-bind="validateInfos.enabled">
                <a-radio-group v-model:value="modelRef.enabled">
                    <a-radio :style="radioStyle" :value="true">是</a-radio>
                    <a-radio :style="radioStyle" :value="false">否</a-radio>
                </a-radio-group>
            </a-form-item>
            
            <a-form-item label="创建者" v-bind="validateInfos.createBy">
                <a-input v-model:value="modelRef.createBy" placeholder="请输入创建者" />
            </a-form-item>
            
            <a-form-item label="更新者" v-bind="validateInfos.updateBy">
                <a-input v-model:value="modelRef.updateBy" placeholder="请输入更新者" />
            </a-form-item>
            
            <a-form-item label="创建日期" v-bind="validateInfos.createTime">
                <a-input v-model:value="modelRef.createTime" placeholder="请输入创建日期" />
            </a-form-item>
            
            <a-form-item label="更新时间" v-bind="validateInfos.updateTime">
                <a-input v-model:value="modelRef.updateTime" placeholder="请输入更新时间" />
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
import { SysDeptDataType } from "../data.d";
import { Props, validateInfos } from "@ant-design-vue/use/lib/useForm";

interface UpdateFormSetupData {
    modelRef: Omit<SysDeptDataType, 'deptId'>;
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
            type: Object as PropType<Partial<SysDeptDataType>>,
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
            type: Function as PropType<(values: Omit<SysDeptDataType, 'deptId'>, resetFields: (newValues?: Props | undefined) => void) => void>,
            required: true
        }
    },
    components: {
        // CKEditor
    },
    setup(props): UpdateFormSetupData {

        const { t } = useI18n();

        // 表单值
        const modelRef = reactive<SysDeptDataType>({
            
            deptId: props.values.deptId || 0,
            
            pid: props.values.pid || 0,
            
            subCount: props.values.subCount || 0,
            
            name: props.values.name || '',
            
            deptSort: props.values.deptSort || 0,
            
            enabled: props.values.enabled || false,
            
            createBy: props.values.createBy || '',
            
            updateBy: props.values.updateBy || '',
            
            createTime: props.values.createTime,
            
            updateTime: props.values.updateTime,
        });
        // 表单验证
        const rulesRef = reactive({
            deptId: [],
            
            pid: [],
            
            subCount: [],
            
            name: [],
            
            deptSort: [],
            
            enabled: [],
            
            createBy: [],
            
            updateBy: [],
            
            createTime: [],
            
            updateTime: [],
        });
        // 获取表单内容
        const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
        // 提交
        const onFinish = async () => {
            try {
                const fieldsValue = await validate<SysDeptDataType>();
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