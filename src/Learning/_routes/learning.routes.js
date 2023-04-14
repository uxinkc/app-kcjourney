
export const learningRoutes = [
  { 
    path: '/learning',
    component: () => import('@/Learning/_views/Learning.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-1/step-1',
    component: () => import('@/Learning/_views/level-1/Step-1.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-1/step-2',
    component: () => import('@/Learning/_views/level-1/Step-2.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-1/step-3',
    component: () => import('@/Learning/_views/level-1/Step-3.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-1/test-1',
    component: () => import('@/Learning/_views/level-1/Test-1.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-1/test-2',
    component: () => import('@/Learning/_views/level-1/Test-2.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-1/certificate',
    component: () => import('@/Learning/_views/level-1/Certificate.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/step-1',
    component: () => import('@/Learning/_views/level-2/Step-1.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/step-2',
    component: () => import('@/Learning/_views/level-2/Step-2.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/step-3',
    component: () => import('@/Learning/_views/level-2/Step-3.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/step-4',
    component: () => import('@/Learning/_views/level-2/Step-4.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/test-1',
    component: () => import('@/Learning/_views/level-2/Test-1.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/test-2',
    component: () => import('@/Learning/_views/level-2/Test-2.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/learning/level-2/certificate',
    component: () => import('@/Learning/_views/level-2/Certificate.vue'),
    meta: {
      requiresAuth: true
    }
  }

]