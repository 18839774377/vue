// 入口文件
// console.log('OK')
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

// 2.1导入Vue-resource
import VueResource from 'vue-resource'
// 2.2安装
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = "http://www.liulongbin.top:3005";
// 全局设置post
Vue.http.options.emulateJSON = true;


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 按需导入 Mint-UI 中的组件   
// import { Header, Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })

// 导入app组件
import app from './App.vue'
var vm = new Vue({
    el : "#app",
    render : c=>c(app),
    // 1.4 挂载路由对象到 VM 实例上
    router
})