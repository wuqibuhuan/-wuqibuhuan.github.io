<template>
  <div>
    <!-- 面包屑 -->
    <a-breadcrumb style="margin: 16px 16px; font-size: 16px; padding: 8px">
      <a-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
    </a-breadcrumb>
    <h1>home页面传来的：{{ this.$route.query.userId }}</h1>
    <a-pagination
      show-size-changer
      :default-current="3"
      :total="500"
      @showSizeChange="onShowSizeChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 4,
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  },
  watch: {
    pageSize(val) {
      console.log("pageSize", val);
    },
    current(val) {
      console.log("current", val);
    },
  },
};
</script>
<style scoped>
</style>
