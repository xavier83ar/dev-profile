import { createSSRApp } from "vue";
import "./styles/main.css";
import ProfilePage from "./ProfilePage.vue";

createSSRApp(ProfilePage).mount("#app");
