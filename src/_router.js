import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { publicRoutes } from '@/Public/_routes/public.routes.js';
import { learningRoutes } from '@/Learning/_routes/learning.routes.js';
import { curriculumRoutes } from '@/Curriculum/_routes/curriculum.routes.js';


const routes = [
  {
    path: '/',
    component: () => import('@/_layouts/Public.vue'),
    children: [
      ...publicRoutes
    ]
  },
  {
    path: '/learning',
    component: () => import('@/_layouts/Main.vue'),
    children: [
      ...learningRoutes
    ]
  },
  {
    path: '/curriculum',
    component: () => import('@/_layouts/Main.vue'),
    children: [
      ...curriculumRoutes
    ]
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/Shared/_views/NotFound.vue')
  } 
];

export const router = createRouter({
  history: createWebHistory('/'), // base directory option now here createWebHistory('/base-directory/'),
  routes
});

const getCurrentUser = () => {
  return new Promise((_resolve, _reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (_user) => {
        removeListener();
        _resolve(_user)
      },
      _reject
    )
  })
};

router.beforeEach( async (_to, _from, _next) => {
  if(_to.matched.some((record)=>record.meta.requiresAuth)){
    if(await getCurrentUser()){
      _next();
    } else {
      _next('/login');
    }
  } else {
    _next()
  }
})

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
