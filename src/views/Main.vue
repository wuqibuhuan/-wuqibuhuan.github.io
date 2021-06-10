<template>
  <div style="width: 100%; height: 100%">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="logo">
          <img
            src="../assets/cicci.png"
            alt=""
            style="width: 48px; height: 48px"
          />
          <span>{{ collapsed ? "" : "Cicci" }}</span>
        </div>
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-menu-item key="1">
            <router-link to="/Home" tag="div">
              <a-icon type="pie-chart" />
              <span>首页</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/personage" tag="div">
              <a-icon type="desktop" />
              <span>个人中心</span></router-link
            >
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"
              ><a-icon type="user" /><span>后台管理</span></span
            >
            <a-menu-item key="3">
              <router-link to="/jurisdiction" tag="div">
                <a-icon type="contacts" />
                <span>权限管理</span></router-link
              >
            </a-menu-item>
            <a-menu-item key="4"> 角色管理</a-menu-item>
            <a-menu-item key="5"> 列表管理 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"
              ><a-icon type="team" /><span>数据中心</span></span
            >
            <a-menu-item key="6"> 数据管理 </a-menu-item>
            <a-menu-item key="8"> 数据状态 </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <a-icon type="file" />
            <span>团队详情</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-dropdown class="flex">
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                <a-icon type="lock" />
                <a-icon type="user" />修改密码
              </a-menu-item>
              <a-menu-item key="2" @click="loginout">
                <a-icon type="link" />
                <a-icon type="user" />退出登录
              </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              Cicci <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-layout-header>

        <a-layout-content style="margin: 0 16px">
          <div :style="{ background: '#fff', minHeight: '360px' }">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Cicci ©2021 个人demo网站
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
    loginout() {
      this.$router.push("/");
    },
  },
  components: {},
};
</script>

<style lang="css" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-side .logo {
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.logo span {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
  margin: 0 0 0 12px;
  overflow: hidden;
  color: #fff;
  font-family: unset;
  font-weight: 500;
  font-size: 22px;
}
.flex {
  /* display: flex;
   justify-content: center; */
  float: right;
  margin: 15px;
}
</style>
