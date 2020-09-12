import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// General Components
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from "./components/NotFound.vue";

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "text-dark bg-primary",
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/about", name: "About", component: About },
        { path: "*", name: "NotFound", component: NotFound }
    ]
});

export default router;
