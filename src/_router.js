import { createRouter, createWebHistory } from 'vue-router';

import { learningRoutes } from '@/Learning/_routes/learning.routes.js';
import { curriculumRoutes } from '@/Curriculum/_routes/curriculum.routes.js';
import { searchRoutes } from '@/Search/_routes/search.routes.js';


const routes = [
  {
    path: '/',
    component: () => import('@/_layouts/Main.vue'),
    children: [
      ...learningRoutes,
      ...curriculumRoutes,
      ...searchRoutes,
      { 
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/Shared/_views/NotFound.vue')
      }
    ]
  }  
];

export const router = createRouter({
  history: createWebHistory('/ux-journey/'), // base directory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
