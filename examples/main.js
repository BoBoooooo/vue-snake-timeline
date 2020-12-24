import Vue from 'vue'
import App from './App.vue'
import VueSnakeTimeline from '../packages/index';
Vue.use(VueSnakeTimeline)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
