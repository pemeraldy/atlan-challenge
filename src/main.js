import { createApp } from "vue";
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

import App from "./App.vue";
import "./index.css";


createApp(App).use(VueVirtualScroller).mount("#app");
