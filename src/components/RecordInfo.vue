<template>
  <div class="icpRecord" v-if="hasBeenRecorded">
    <a class="ace-link" href="http://beian.miit.gov.cn/" target="_blank">
      <span class="record-link-text">{{icpn}}</span>
    </a>
    <a target="_blank" :href="`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${recordCode}`">
      <img class="record-link-icon" :src="$withBase(imgSrc)">
      <span class="record-link-text">{{nismn}}</span>
    </a>
  </div>
  </div>
</template>
<script>
import { computed, defineComponent, toRefs } from "vue";
export default defineComponent({
  /*  props: {
     ICPNum: { // ICP备案号
       type: String,
       // required: true // 必须有备案号
     },
     iconSrc: { // 备案图标位置(相对于base路径)
       type: String,
     },
     NISMNum: { // 公安联网备案号
       type: String,
     }
   }, */
  setup(props, context) {
    const $site = context.root.$site;
    const $themeConfig = $site.themeConfig;
    const { hasBeenRecorded, ICPNum, NISMNum, iconSrc } = $themeConfig;
    const icpn = ICPNum;
    const nismn = NISMNum;
    const imgSrc = iconSrc;
    const recordCode = /\d+/g.exec(nismn)[0] || "";
    return {
      imgSrc,
      icpn,
      nismn,
      hasBeenRecorded,
      recordCode // 公网安备数字编号
    }
  },
});
</script>