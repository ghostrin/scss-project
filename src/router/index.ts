import Vue from 'vue';
import Router from 'vue-router';
import sass from '@/components/sass.vue';

const TsDemo = () => import('@/components/TsDemo.vue');
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'sass',
      component: sass
    },
    {
      path: '/ts',
      name: 'TsDemo',
      component: TsDemo
    }
  ]
});
