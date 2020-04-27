import asyncPages from './AsyncComponent';

import Login from '@/views/login/Login';
const Home = asyncPages(() => import(/* webpackChunkName: "home" */ '@/views/home/Home'));
const Test = asyncPages(() => import(/* webpackChunkName: "test" */ '@/views/test/Test'));

/***
 * requiresAuth true 需要登录才能跳转的页面
 * ***/
export default [
  { path: '/login', name: 'Login', requiresAuth: false, component: Login },
  { path: '/home', name: 'Home', requiresAuth: true, component: Home },
  { path: '/test', name: 'Test', requiresAuth: true, component: Test },
];
