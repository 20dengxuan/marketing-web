<template>
  <PageWrapper>
    <div>会展管理</div>
    <a-button type="primary" class="ml-2" @click="goAddPage"> 调转到详情页 </a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: {
      PageWrapper,
    },
    setup() {
      const go = useGo();
      const goAddPage = () => {
        go('/exhibition/add');
      };
      return {
        goAddPage,
      };
    },
  });
</script>
