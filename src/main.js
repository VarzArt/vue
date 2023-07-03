import { createApp } from "vue";
import App from "@/App.vue";
import components from "@/components/UI";
import loginPage from "@/components/app-loginBox.vue";
const app = createApp(App);

app.component(loginPage.name, loginPage);
components.forEach((component) => app.component(component.name, component));

app.mount("#app");
