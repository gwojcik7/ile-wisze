import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'reset.css';
import '@/assets/styles/variables.scss';
import '@/assets/styles/base.scss';
import '@/assets/styles/extends.scss';

const app = createApp(App);

app.use(router);

app.mount("#app");
