import asyncPages from './AsyncComponent';

import Login from '@/views/login/Login';
const Home = asyncPages(() => import(/* webpackChunkName: "home" */ '@/views/home/Home'));
const Test = asyncPages(() => import(/* webpackChunkName: "test" */ '@/views/test/Test'));

export default [
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/test', name: 'Test', component: Test },
];
