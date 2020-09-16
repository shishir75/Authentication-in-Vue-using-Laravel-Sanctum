import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// General Components
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from "./components/NotFound.vue";
import Dashboard from "./components/Dashboard.vue";

// Authentication Components
import login from "./components/auth/login.vue";
import register from "./components/auth/register.vue";

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "text-dark bg-primary",
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/about", name: "About", component: About },
        { path: "/login", name: "login", component: login },
        { path: "/register", name: "register", component: register },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        { path: "*", name: "NotFound", component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    let isAuthenticated = window.auth_user ? true : false;
    if (from.name === "Dashboard" || to.name === "Home") {
        next();
    } else if (to.name !== "login" && !isAuthenticated) {
        if (from.name !== "login") {
            next({ name: "login" });
        } else next();
    } else next();
});

export default router;
