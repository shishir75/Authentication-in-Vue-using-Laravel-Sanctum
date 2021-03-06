require("./bootstrap");
window.Vue = require("vue");

import router from "./router";

// VueX
import Vuex from "vuex";
Vue.use(Vuex);
import storeData from "./store/index";
const store = new Vuex.Store(storeData);

// Sweet Alert 2
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});
window.Swal = Swal;
window.Toast = Toast;

// Global Component
Vue.component(
    "navbar-component",
    require("./components/NavbarComponent.vue").default
);

const app = new Vue({
    el: "#app",
    router,
    store
});
