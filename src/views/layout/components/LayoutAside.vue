<template>
  <el-menu
    mode="vertile"
    :router="true"
    :collapse="isCollapse"
    default-active="/"
    class="layout-aside"
    @open="openMenu"
    @close="closeMenu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-menu-item index="/articles">
      <i class="iconfont iconneirong"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>

    <el-menu-item index="/images">
      <i class="iconfont iconimage"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>

    <el-menu-item index="/publish">
      <i class="iconfont iconpublish"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>

    <el-menu-item index="/comments">
      <i class="iconfont iconcomment"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>

    <el-menu-item index="/fans">
      <i class="el-icon-present"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>

    <el-menu-item index="/settings">
      <i class="el-icon-setting"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: 'LayoutAside',
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    openMenu (key, path) {
      console.log(key, path)
      // this.$emit('openMenu')
    },
    closeMenu (key, path) {
      console.log(key, path)
    }
  },
  created () {
  }
}
</script>

<style lang='scss' scoped>
.layout-aside { height: 100%; }
</style>
