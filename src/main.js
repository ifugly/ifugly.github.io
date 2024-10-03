import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const AV = await import("leancloud-storage");
const { Query, User } = AV;
AV.init({
  appId: "h37FLJvxhWbSuk0Z2L1BlAgJ-gzGzoHsz",
  appKey: "Jr8QsEAf8DJpk9S6vn6J1469",
  serverURL: "https://h37fljvx.lc-cn-n1-shared.com",
});

const app = createApp(App);

app.provide("$AV", AV);

app.use(router);

app.mount("#app");
