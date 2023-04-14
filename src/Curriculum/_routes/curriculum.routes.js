
export const curriculumRoutes = [
  { 
    path: '/curriculum/',
    component: () => import('@/Curriculum/_views/Curriculum.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/ux-laws',
    component: () => import('@/Curriculum/_views/Curriculum.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-1/step-1',
    component: () => import('@/Curriculum/_views/level-1/Step-1.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-1/step-2',
    component: () => import('@/Curriculum/_views/level-1/Step-2.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-1/step-3',
    component: () => import('@/Curriculum/_views/level-1/Step-3.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-1/test',
    component: () => import('@/Curriculum/_views/level-1/Test.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-2/step-1',
    component: () => import('@/Curriculum/_views/level-2/Step-1.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-2/step-2',
    component: () => import('@/Curriculum/_views/level-2/Step-2.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-2/step-3',
    component: () => import('@/Curriculum/_views/level-2/Step-3.vue'),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/curriculum/level-2/test',
    component: () => import('@/Curriculum/_views/level-2/Test.vue'),
    meta: {
      requiresAuth: true
    }
  }

]