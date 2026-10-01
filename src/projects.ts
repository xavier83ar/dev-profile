import { createSSRApp } from "vue";
import "./styles/main.css";
import ProjectsPage from "./ProjectsPage.vue";

createSSRApp(ProjectsPage).mount("#app");
