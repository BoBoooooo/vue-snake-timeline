import Vue from 'vue'
import App from './App.vue'
// import VueSnakeTimeline from '../packages/index';
import VueSnakeTimeline from 'vue-snake-timeline'
import 'vue-snake-timeline/lib/vue-snake-timeline.css';
Vue.use(VueSnakeTimeline)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
