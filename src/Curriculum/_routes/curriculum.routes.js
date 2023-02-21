
export const curriculumRoutes = [
  { 
    path: '/curriculum/',
    component: () => import('@/Curriculum/_views/Curriculum.vue')
  },
  { 
    path: '/curriculum/ux-laws',
    component: () => import('@/Curriculum/_views/Curriculum.vue')
  },
  { 
    path: '/curriculum/level-1/step-1',
    component: () => import('@/Curriculum/_views/level-1/Step-1.vue')
  },
  { 
    path: '/curriculum/level-1/step-2',
    component: () => import('@/Curriculum/_views/level-1/Step-2.vue')
  },
  { 
    path: '/curriculum/level-1/step-3',
    component: () => import('@/Curriculum/_views/level-1/Step-3.vue')
  },
  { 
    path: '/curriculum/level-1/test',
    component: () => import('@/Curriculum/_views/level-1/Test.vue')
  },
  { 
    path: '/curriculum/level-2/step-1',
    component: () => import('@/Curriculum/_views/level-2/Step-1.vue')
  },
  { 
    path: '/curriculum/level-2/step-2',
    component: () => import('@/Curriculum/_views/level-2/Step-2.vue')
  },
  { 
    path: '/curriculum/level-2/step-3',
    component: () => import('@/Curriculum/_views/level-2/Step-3.vue')
  },
  { 
    path: '/curriculum/level-2/test',
    component: () => import('@/Curriculum/_views/level-2/Test.vue')
  }

]