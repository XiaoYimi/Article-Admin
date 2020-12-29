## 基础概念

### Vue 中 name 的作用

#### 组件的 name

- 在 devtools 调试过程中,友好切直观的显示报错位置



#### 路由的 name

- 在配置动态路由时,用于路由页面跳转





### Vue-Router router-view 的作用

- 应用于 App.vue 加载路由模块
- 应用于子路由的占位符(嵌套路由)



## 项目封装





### Axios  封装

#### 基本配置

```

```



#### 请求拦截器

```

```





#### 响应拦截器

```

```





### API 封装

```

```











## Element UI

### 安装

```bash
npm i element-ui -S
```



### 使用

```js
// 全局使用
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// 按需使用
import Vue from 'vue'
import { Button, Message, Loading } from 'element-ui'
Vue.use(Button)
Vue.use(Loading.directive)
Vue.prototype.$message = Message
```



### 消息提示

```js
this.$message.error()
this.$message.warning()
this.$message.success()
this.$message.info()
```



### 按钮

#### Button Option

| 属性        | 描述           | 参数值                | 默认值 |
| ----------- | -------------- | --------------------- | ------ |
| disabled    | 禁用状态       | --                    | false  |
| icon        | 按钮图标       | --                    | --     |
| loading     | 加载中         | Boolean               | false  |
| size        | 按钮尺寸       | small, medium,mini    |        |
| round       | 按钮圆角       | Boolean               | false  |
| autofocus   | 按钮聚焦       | Boolean               | false  |
| native-type | 原生 type 类型 | submit, reset, button | button |

##### 属性 loading 的作用

- 请求延时,防止用户多次点击
- 用户交互反馈



### 表单

#### Form Option

| 属性                    | 描述                 | 参数值         | 默认值 |
| ----------------------- | -------------------- | -------------- | ------ |
| model                   | 表单数据对象         | --             | --     |
| rules                   | 表单验证规则         | --             | --     |
| label-position          | 表单 label 位置      | top/left/right | right  |
| label-width             | 表单 label 宽度      |                |        |
| show-message            | 校验结果错误显示     | Boolean        | true   |
| status-icon             | 校验结果反馈的图标   | Boolean        | false  |
| inline-message          | 行内显示校验结果信息 | Boolean        | false  |
| validate-on-rule-change | 立即校验规则匹配     | Boolean        | true   |
|                         |                      |                |        |



#### Form Event

| 事件          | 描述                              | Funtion                                |
| ------------- | --------------------------------- | -------------------------------------- |
| validate      | 对整个表单进行验证                | Function((boolean, object) => {})      |
| validateField | 对指定表单字段进行验证            | Function((array\|string), (err) => {}) |
| resetFields   | 重置表单初始值,并移除校验错误信息 | --                                     |
| clearValidate | 移除表单校验结果(整个或指定字段)  | Function(array\|string)                |

##### 手动触发表单验证

请为表单 `el-form` 添加 `ref` 属性，以确保我们能够手动触发表单验证.

```js
// validate 是异步操作
this.$refs[formName].validate(valid => {
	if (!vaild) {
		console.log(err)
		return false
	}
	// 登录请求
})
```





#### Form-item Option

| 属性         | 描述                 | 参数值  | 默认值 |
| ------------ | -------------------- | ------- | ------ |
| prop         | 表单数据对象字段     | --      | --     |
| label        | 表单 label           | --      | --     |
| label-width  | 表单 label 宽度      | --      | --     |
| required     | 表单数据对象字段必填 | Boolean | false  |
| rules        | 表单验证规则         | --      | --     |
| error        | 表单校验结果错误信息 |         |        |
| show-message            | 校验结果错误显示     | Boolean        | true   |
| inline-message          | 行内显示校验结果信息 | Boolean        | false  |



#### Form-item Event

| 事件          | 描述                              | Funtion                                |
| ------------- | --------------------------------- | -------------------------------------- |
| resetFields   | 重置表单初始值,并移除校验错误信息 | --                                     |
| clearValidate | 移除表单校验结果(整个或指定字段)  | Function(array\|string)  |



#### Form-item  Slot

| name  | 描述               |      |
| ----- | ------------------ | ---- |
| --    | 自定义内容         |      |
| label | 表单 label         |      |
| error | 自定义错误信息显示 |      |



#### 表单验证规则

Rules Option

| 字段           | 描述                          | 参数值                          |
| -------------- | ----------------------------- | ------------------------------- |
| required       | 必填项                        | Boolean                         |
| min            | 最小字符数                    | Number                          |
| max            | 最大字符数                    | Number                          |
| type           | 字段类型                      | date/array/enum/object          |
| pattern        | 正则规则                      | Regexp                          |
| len            | 字符或数组长度                | Number                          |
| enum           | 数据枚举                      | Array                           |
| fields         | 子字段                        | Object                          |
| options        | 选项                          | Object                          |
| transform(val) | 转换函数                      | Function                        |
| trigger        | 触发校验时机                  | String                          |
| validator      | 自定义验证规则, cb() 必须执行 | Funtion((val, rules, cb) => {}) |



### 导航栏

#### Menu Option

| 属性                | 描述                                     | 参数值                | 默认值   |
| ------------------- | ---------------------------------------- | --------------------- | -------- |
| mode                | 导航布局方式                             | horizontal / vertical | vertical |
| router              | 使用 router 模式 (path = index) 进行跳转 | Boolean               | false    |
| default-active      | 导航选中的索引                           | String                | --       |
| menu-trigger        | mode = horizontal 子菜单展开时机         | hover/click           | hover    |
| unique-opened       | 仅支持单个菜单展开状态                   | Boolean               | false    |
| text-color          | 导航文本显示颜色                         | hex 格式(#ffffff)     | #303133  |
| active-text-color   | 导航文本选中颜色                         | hex 格式(#ffffff)     | #409eff  |
| collapse            | 导航折叠状态                             | Boolean               | false    |
| collapse-transition | 菜单折叠动画                             | Boolean               | false    |

##### 属性 router 的作用

- 将 index 作为 router path 进行路由跳转
- 在 menu-item 定义属性 route,可指定路由跳转路径





#### Menu Event

| 事件  | 描述           | Function                |
| ----- | -------------- | ----------------------- |
| open  | 展开指定子菜单 | Function (key, path) {} |
| close | 关闭指定子菜单 | Function (key, path) {} |



#### SubMenu Option

| 属性                  | 描述                     | 参数值      | 默认值                              |
| --------------------- | ------------------------ | ----------- | ----------------------------------- |
| index                 | 唯一标识(索引或路由路径) | String/Null | null                                |
| show-timeout          | 延时展开子菜单           | Number      | 300                                 |
| hide-timeout          | 延时收起子菜单           | Number      | 300                                 |
| disabled              | 禁用当前菜单             | Boolean     | false                               |
| popper-class          | 弹出的菜单自定义样式类   | CSS Class   | --                                  |
| popper-append-to-body | 弹出的菜单插入 body 元素 | Boolean     | 一级子菜单 true, 非一级子菜单 false |



#### Menu-group Option

| 属性  | 描述           | 参数值 | 默认值 |
| ----- | -------------- | ------ | ------ |
| title | 子菜单分组标题 | String | --     |



#### Menu-item Option

| 属性 | 描述 | 参数值 | 默认值 |
| ---- | ---- | ------ | ------ |
| index                 | 唯一标识(索引或路由路径) | String/Null | null                                |
| route | 路由地址(path) | Object | -- |
| disabled              | 禁用当前菜单             | Boolean     | false                               |





### 下拉菜单

#### Dropdown Option

| 属性          | 描述                                    | 参数值                                               | 默认值     |
| ------------- | --------------------------------------- | ---------------------------------------------------- | ---------- |
| size          | 下拉菜单尺寸                            | mini/small/medium                                    | --         |
| split-button  | 呈现为按钮组                            | Boolean                                              | false      |
| type          | split-button = true 时 菜单按钮类型有效 | String                                               | --         |
| placement     | 下拉子菜单出现的位置                    | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger       | 触发下拉菜单的时机                      | hove/click                                           | hover      |
| hide-on-click | 点击菜单项后隐藏菜单                    | Boolean                                              | true       |
| show-timeout  | 延时展开下拉菜单                        | Number                                               | 300        |
| hide-timeout  | 延时收起下拉菜单                        | Number                                               | 3900       |
| tabindex      | 指定子菜单的索引                        | Number                                               | 0          |



#### Dropdown Event

| 事件           | 描述                                    | Function |
| -------------- | --------------------------------------- | -------- |
| click          | split-button = true,左侧点击事件        | () => {} |
| command        | 点击菜单项事件                          | () => {} |
| visible-change | 下拉框展开(true)或收起(false)的事件回调 | () => {} |



#### Dropdown-menu Option

| 属性     | 描述                     | 参数值               | 默认值s |
| -------- | ------------------------ | -------------------- | ------- |
| disabled | 禁用状态                 | Boolean              | false   |
| divided  | 显示分割线               | Boolean              | false   |
| icon     | 图标类名                 | String               | --      |
| command  | 指令(可理解成自定义属性) | String/Number/Object | --      |

