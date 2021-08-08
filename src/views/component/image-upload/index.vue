<template>
    <div className="indexlayout-main-conent">
        <image-upload v-model="fileList" :size="5"/>
        文件路径列表： {{fileList}}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ImageUpload from "@/components/ImageUpload/index.vue";

interface ImageSetupData {
    fileList:  string;
}

export default defineComponent({
    name: 'ImageUploadDemo',
    components: {
        ImageUpload,
    },
    setup(): ImageSetupData {
       
        const fileList = ref<string>('[{"uid":"vc-upload-1617071639687-2","name":"微信图片_20210329110317.jpg","status":"done","url":"http://singles-club.oss-cn-hongkong.aliyuncs.com/res/image/微信图片_20210329110317.jpg","type":"image/jpeg","size":6120446},{"uid":"vc-upload-1617071639687-4","name":"微信图片_20210329110310.jpg","status":"done","url":"http://singles-club.oss-cn-hongkong.aliyuncs.com/res/image/微信图片_20210329110310.jpg","type":"image/jpeg","size":1106288}]');
        // const fileList = ref<string>('');
       
        return {
            fileList: fileList as unknown as string,
        }
    }
})
</script>
<style lang="less" scoped>
</style>