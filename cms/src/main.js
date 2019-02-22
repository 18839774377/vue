// 入口文件
// console.log('OK')
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1导入Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 2.2安装


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


// 导入app组件
import app from './App.vue'
var vm = new Vue({
    el : "#app",
    render : c=>c(app),
    // 1.4 挂载路由对象到 VM 实例上
    router
})