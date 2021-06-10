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
    <a-upload>
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
    <a-card hoverable style="width: 240px">
      <img
        slot="cover"
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
      <a-card-meta title="Europe Street beat">
        <template slot="description"> www.instagram.com </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "Cicci",
    };
  },
  components: {},
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
  },

  watch: {},
};
</script>
<style scoped>
</style>
