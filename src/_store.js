
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module.js';
import { content } from '@/Content/_store/content.module.js';
import { alerts } from '@/Shared/_store/alerts.module.js';
import { learning } from '@/Learning/_store/learning.store.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    content: content,
    alerts: alerts,
    learning: learning
  }
});