<template>
  <div>
    <!-- 面包屑 -->
    <a-breadcrumb style="margin: 16px 16px; font-size: 16px; padding: 8px">
      <a-breadcrumb-item>
        <router-link to="/Main">首页</router-link>
      </a-breadcrumb-item>
      <!-- <a-breadcrumb-item></a-breadcrumb-item> -->
    </a-breadcrumb>
    <!-- <button @click="gotoHomePage">到home页面</button>
    <button @click="gotoRegisterPage">到register页面</button>
    <button @click="loading">测试loading</button>
    <loading v-show="isLoading" /> -->
    <ul>
      <li v-for="(item, index) in datalist" :key="index" v-html="item.title">
        <router-link to=""> {{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "Cicci",
      datalist: [],
    };
  },
  components: {},
  async created() {
    const { data: res } = await this.$http.get("/topics");
    console.log(res);
    this.datalist = res.data;
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    gotoHomePage() {
      //去主页面
      //使用path路由不能与params联合使用，否则传递失效
      this.$router.push({
        path: "/personage",
        query: { userName: this.username, userId: 123 },
      });
    },
    gotoRegisterPage() {
      //去注册页面
      // this.$router.push({name: 'register', params: {userId: 123, isFromLogin: true}});
      this.$router.push({ name: "Jurisdiction", query: { userId: 123 } });
    },
    loading() {
      this.$store.commit("showLoading", true);
    },
    conso() {},
  },

  watch: {},
};
</script>
<style scoped>
</style>
