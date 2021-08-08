<template>
    <div className="indexlayout-main-conent">
        <a-card :bordered="false" title="单选按钮组:">
            <ApesDict  dictKey="job_status">
                <template v-slot:default="dictItems">
                    <a-radio-group name="radioGroup" v-model:value="status" :options="dictItems.items" />
                </template>
            </ApesDict>
        </a-card>
        <a-card :bordered="false" title="下拉选择框:" style="margin-top:10px">
           <ApesDict  dictKey="job_status">
                <template v-slot:default="dictItems">
                    <a-select v-model:value="status" :options="dictItems.items" />
                </template>
            </ApesDict>
        </a-card>

        <a-card :bordered="false" title="单选按钮组:" style="margin-top:10px">
            <ApesDict  dictKey="job_status">
                <template v-slot:default="dictItems">
                    <a-radio-group  v-model:value="status" button-style="solid">
                        <a-radio-button v-for="(item) in dictItems.items" :key="item.detailId" :value="item.value">{{item.label}}</a-radio-button>
                    </a-radio-group>
                </template>
            </ApesDict>
        </a-card>

        <a-card :bordered="false" title="展示:" style="margin-top:10px">
            <ApesDict  dictKey="job_status">
                <template v-slot:default="dictItems">
                    <template v-for="(item) in dictItems.items" :key="item.detailId">
                            <a-tag color="cyan" v-if="item.value === status" >{{item.label}}</a-tag>
                    </template>
                </template>
            </ApesDict>
        </a-card>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ApesDict from "@/components/ApesDict/index.vue";

interface DictSetupData {
    status:  string;
}

export default defineComponent({
    name: 'DictDemo',
    components: {
        ApesDict,
    },
    setup(): DictSetupData {
       
        const status = ref<string>("true");
       
        return {
            status: status as unknown as string,
        }
    }
})
</script>
<style lang="less" scoped>
</style>