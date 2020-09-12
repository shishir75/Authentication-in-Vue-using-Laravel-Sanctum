<template>
    <div>
        <h1>Dashboard Page</h1>

        <br />
        <button class="btn btn-warning" @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";

export default {
    data() {
        return {
            user: null
        };
    },
    methods: {
        logout() {
            axios
                .post("/api/logout")
                .then(() => {
                    this.$router.push({ name: "Home" });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        axios.get("/api/user").then(res => {
            console.log(res.data);
            this.user = res.data;
        });
    }
};
</script>

<style></style>
