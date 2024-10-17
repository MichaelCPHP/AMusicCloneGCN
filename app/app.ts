import Vue from 'nativescript-vue'
import Home from './components/Home.vue'
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

TNSFontIcon.debug = __DEV__;
TNSFontIcon.paths = {
  'fa': './fonts/font-awesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()