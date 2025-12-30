import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { projectAuth } from './views/firebase/config'

// connect to the backend and makee sure the current user status before create the app
let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    //create the app
    app = createApp(App).use(router).mount('#app');
  }
})
