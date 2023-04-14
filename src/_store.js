
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module.js';
import { alerts } from '@/Shared/_store/alerts.module.js';
import { learning } from '@/Learning/_store/learning.store.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    alerts: alerts,
    learning: learning
  }
});