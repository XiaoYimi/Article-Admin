<template>
  <div class="layout-head">
    <div class="compony" @click="toggleMenu">
      <i class="el-icon-s-fold"/>
      <span class="componyname">依米头条</span>
    </div>
    <div class="user">
      <img src="./defaultuser.jpg" alt="" class="userimg">
      <span class="username">用户名</span>
      <el-button type="text" @click="logout" class="logout">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHead',
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('togglemenu', !this.isCollapse)
    },
    logout () {
      console.log('登录退出')
    }
  },
  created () {
  }
}
</script>

<style lang='scss' scoped>
.layout-head {
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: inherit;

  .compony {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .componyname {
      padding-left: 8px;
    }
  }

  .user {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .userimg {
      border: 2px solid white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    .username {
      padding-left: 8px;
    }

    .logout { margin: 10px; }
  }
}
</style>
