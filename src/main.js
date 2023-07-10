import { createApp } from "vue";
import App from "@/App.vue";
import components from "@/components/UI";
import loginPage from "@/components/app-loginBox.vue";
import singUpPage from "@/components/app-singUpBox";
const app = createApp(App);

app.component(loginPage.name, loginPage);
app.component(singUpPage.name, singUpPage);
components.forEach((component) => app.component(component.name, component));

app.mount("#app");
