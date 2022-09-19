import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const stage = import.meta.env.VITE_STAGE;

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/404', component: NotFoundView },
    { path: '/:catchAll(.*)', redirect: '/404'},
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/sesion',
      name: 'session',
      component: () => import('../views/SesionView.vue'),
      children: [
        {
          path: '/',
          components: {
            default: () => import ('../views/LoginView.vue'),
            register: () => import ('../views/RegisterView.vue'),
          }
        }
      ]
    },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    {
      path: '/chats',
      component: () => import('../views/ChatsView.vue'),
      children: [
        {
          path: ':chatId(\\d+)',
          component: () => import('../views/ChatView.vue'),
          props: (route) => {
            return {
              chatId: route.params.chatId
            }
          },
        }
      ],
      meta: {
        requiresAuth: true,
        roles: ['admin']
      }
    },
    
  ]
});
if (stage == 'test') {
  router.addRoute({
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
  });
}

router.beforeEach((to, from) => {
  /* if (to.meta?.requiresAuth && to.meta?.roles.includes('admin')) {
    console.log(to.path, 'requires auth');
    return '/sesion'
  } */
  return true;
})

export default router;