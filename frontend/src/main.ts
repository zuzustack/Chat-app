import { createApp } from "vue";
import ApiService from "./core/services/ApiService";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(store);
app.use(router);

ApiService.init(app);

app.use(VueSweetalert2);

app.mount("#app");
