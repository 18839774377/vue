import VueRouter from 'vue-router'
// 导入对应的路由对象
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import NewList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo(1).vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/home/newslist',component:NewList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/photoinfo/:id',component:PhotoInfo},
    {path:'/home/goodslist',component:GoodsList}
  ],
  linkActiveClass:"mui-active" //覆盖默认路由高亮的类，默认的类叫link-router-active
})

// 把路由对象暴露出去
export default router