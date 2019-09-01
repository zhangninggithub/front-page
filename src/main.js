import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less'
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
