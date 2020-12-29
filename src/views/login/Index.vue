<template>
  <div class="login-wrap">
    <el-form
      label-width="0"
      :model="formdata"
      class="login-form"
    >
      <el-form-item>
        <h2 class="login-title">依米头条号</h2>
      </el-form-item>
      <el-form-item class="login-row">
        <el-input
          v-model="formdata.mobile"
          placeholder="手机号"
          prefix-icon="el-icon-search"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-row">
        <el-input
          type="password"
          v-model="formdata.password"
          placeholder="密码"
          prefix-icon="el-icon-key"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-row">
        <el-input
          v-model="formdata.code"
          placeholder="验证码"
          prefix-icon="el-icon-s-claim"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意使用用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="sumbitForm"
          :loading="btnState"
          type="primary"
          class="login-btn"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Validator from '@/utils/Validator'
export default {
  name: 'Login',
  data () {
    return {
      formdata: {
        mobile: '',
        password: '',
        code: ''
      },
      checked: false,
      btnState: false
    }
  },
  methods: {
    sumbitForm () {
      if (!this.checked) {
        this.$message.warning('请勾选同意用户协议和隐私政策协议才能进行登录')
        this.cloaseLoading()
        return false
      }
      this.login()
    },
    async login () {
      this.btnState = true
      const validator = new Validator()
      const { mobile, password, code } = this.formdata
      const results = validator.allCheck([
        { value: mobile, rules: [{ rule: 'mobile', tip: '无效的手机号' }] },
        { value: code, rules: [{ rule: 'number', tip: '验证码必须是数字' }] },
        { value: password, rules: [{ rule: 'alphaDash', tip: '密码由字母和数字,下划线组成' }] }
      ])
      if (results.length) {
        this.$message.error(results[0])
        this.cloaseLoading()
        return false
      }
      const res = await this.$api.login(this.formdata)
      // 13250309350
      console.log(res)
      if (res.data.code === 0) {
        this.cloaseLoading()
      }
    },
    cloaseLoading () {
      setTimeout(() => {
        this.btnState = false
      }, 800)
    }
  },
  created () {
    console.log(this.api)
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent url("./xiyang.jpg") center / cover no-repeat;
  .login-form {
    padding: 20px 50px;
    min-width: 300px;
    background-color: #fff;

    .login-title {
      text-align: center;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
