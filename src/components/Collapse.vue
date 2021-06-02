<template>
  <div style="width: 100%; height: 100%">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="logo">
          <img
            src="../assets/logo.59818776.png"
            alt=""
            style="width: 42px; height: 32px"
          />
          <span>{{ collapsed ? "" : "Cicci" }}</span>
        </div>
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <router-link to="/home" tag="span"> 首页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />

            <router-link to="/personage" tag="span"> 个人中心</router-link>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"
              ><a-icon type="user" /><span>后台管理</span></span
            >
            <a-menu-item key="3"> 权限管理 </a-menu-item>
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
        </a-layout-header>

        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
          >
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      collapsed: false,
    };
  },
  components: {},
};
</script>

<style lang="css" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-side .logo {
  height: 32px;
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
  font-size: 16px;
}
</style>
