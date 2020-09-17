import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Frontend Components
import Home from "./components/Home.vue";
import About from "./components/About.vue";

// 404 - Not Found Componenet
import NotFound from "./components/NotFound.vue";

// Admin Area Componenets
import Admin from "./components/admin/admin.vue";
import Dashboard from "./components/admin/Dashboard.vue";

// Authentication Components
import Login from "./components/auth/login.vue";
import Register from "./components/auth/register.vue";

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "text-dark bg-primary",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            children: [
                {
                    path: "about",
                    name: "About",
                    component: About
                }
            ]
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/admin",
            name: "Admin",
            component: Admin,
            children: [
                {
                    path: "dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                    meta: { requiresAuth: true }
                }
            ]
        },
        { path: "*", name: "NotFound", component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    let isAuthenticated = window.auth_user ? true : false;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({
                name: "Login"
            });
        } else {
            next();
        }
    } else {
        if (
            (to.name === "Login" || to.name === "Register") &&
            isAuthenticated
        ) {
            next({ name: "Dashboard" });
        } else {
            next(); // make sure to always call next()!
        }
    }
});

export default router;
