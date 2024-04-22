import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/pages/LoginPage.vue';
import NavBar from './components/pages/NavBar.vue';
import SideBar from './components/pages/SideBar.vue';
import LoaderPage from './components/Loader/LoaderPage.vue';
import HomeRoutes from './components/pages/Homepage/componentRoute';
import SettingRoute from './components/pages/SettingModule/SettingModule';
import isAuthenticated from './components/Auth';

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage,
        props:true,
        meta: {
            requiresAuth: true,
          },
    },
    {
        path: '/SideBar',
        name: 'SideBar',
        component: SideBar
    },
    {
        path: '/NavBar',
        name: 'NavBar',
        component: NavBar
    }, {
        path: '/LoaderPage',
        name: 'LoaderPage',
        component: LoaderPage
    },
    ...HomeRoutes,
    ...SettingRoute

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    console.log( "to",to);
    console.log( "from", from);

    if (to.matched.some(record => !record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
        next({name:'LoginPage'})
      }
      else{
        next()
      }
    }
    else{
        if(isAuthenticated()){
            next({name:'MainMenu'})
        }
        else{
            next();
        }
    }
  });
export default router;
