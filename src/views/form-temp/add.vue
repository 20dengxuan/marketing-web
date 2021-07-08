<template>
  <PageWrapper>
    <template #headerContent> <div>表单模版创建</div></template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: {
      PageWrapper,
    },
    setup() {
      return {};
    },
  });
</script>
