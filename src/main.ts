import router from "@/router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "normalize.css";
import "@/styles/tailwindcss.css";
import "@/styles/base.scss";
import "@/styles/element-plus-custom.scss";
import EvanUI from "./components";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { directive } from "./directive";
const app = createApp(App);

directive(app);

app.use(EvanUI);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");
