<template>
    <div>
        <div v-if="isLoggedIn">
            <router-link class="btn btn-dark px-3 my-3 mr-3" to="/"
                >Home</router-link
            >
            <router-link class="btn btn-dark px-3 my-3" to="/about"
                >About</router-link
            >
        </div>

        <div v-else>
            <router-link
                class="btn btn-dark px-3 my-3 float-right"
                :to="{ name: 'Register' }"
                >Register</router-link
            >
            <router-link
                class="btn btn-dark px-3 my-3 float-right mr-3"
                :to="{ name: 'Login' }"
                >Login</router-link
            >
        </div>
        <button
            v-if="isLoggedIn"
            class="btn btn-warning float-right"
            @click.prevent="logout"
        >
            Logout
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        this.$store.commit("isLogIn", window.auth_user);
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        logout() {
            axios
                .post("/api/logout")
                .then(() => {
                    this.$store.commit("isLogIn", null);
                    window.auth_user = null;
                    this.$router.push({ name: "Home" });
                    Toast.fire({
                        icon: "success",
                        title: "Logout successful. See you soon!"
                    });
                })
                .catch(error => {
                    console.log(error);
                    Toast.fire({
                        icon: "error",
                        title: "Something went wrong, Try again!"
                    });
                });
        }
    }
};
</script>

<style></style>
