<template>
  <div>
    <!-- 面包屑 -->
    <a-breadcrumb style="margin: 16px 16px; font-size: 16px; padding: 8px">
      <a-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>个人中心</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- <h1>home页面传来的：{{ this.$route.query.userName }}</h1> -->
    <a-collapse accordion>
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="This is panel header 2"
        :disabled="false"
      >
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style scoped>
</style>
