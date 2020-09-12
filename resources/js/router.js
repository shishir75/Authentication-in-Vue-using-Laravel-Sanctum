import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// General Components
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/about", name: "About", component: About }
    ]
});

export default router;
