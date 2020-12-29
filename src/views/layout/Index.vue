<template>
  <el-container class="layout">
    <el-aside class="aside" width>
      <layout-aside :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="header" height>
        <layout-head
          :isCollapse="isCollapse"
          @togglemenu="toggleMenu"
        />
      </el-header>
      <el-main class="main">
        <!-- 默认子路由出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from './components/LayoutAside'
import LayoutHead from './components/LayoutHead'
export default {
  name: 'Layout',
  data () {
    return {
      // 侧栏状态
      isCollapse: false
    }
  },
  methods: {
    toggleMenu (bool) {
      console.log(bool)
      this.isCollapse = bool
    }
  },
  created () {
  },
  components: {
    LayoutAside,
    LayoutHead
  }
}
</script>

<style lang='scss' scoped>
.layout {
  min-width: 1024px;
  width: 100%;
  height: 100%;

  .aside {
    width: 220px;
    height: 100%;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .main {
    width: 100%;
    height: 100%;
  }

  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: gray;
  }
}
</style>
