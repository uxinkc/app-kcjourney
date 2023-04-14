import { createApp } from 'vue';
import App from '@/_App.vue'

/* import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
hljs.configure({languages:['html','javascript','xml']}); */

const app = createApp(App);

//app.use(hljs)

import { store } from '@/_store.js';
app.use(store);

import { router } from '@/_router.js';
app.use(router);

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(fbApp);
app.use(fbApp);

app.mount('#app');