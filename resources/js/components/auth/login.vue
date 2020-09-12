<template>
    <div class="bg-secondary p-5 rounded text-white">
        <h1 class="text-center">Login Page</h1>
        <form @submit.prevent="login" method="POST">
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="form.email"
                />
                <small v-if="errors.email" class="text-danger">{{
                    errors.email[0]
                }}</small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="form.password"
                />
                <small v-if="errors.password" class="text-danger">{{
                    errors.password[0]
                }}</small>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            errors: []
        };
    },
    components: {},
    mounted() {},
    created() {},
    computed: {},
    methods: {
        login() {
            axios
                .post("/api/login-user", this.form)
                .then(res => {
                    this.$router.push({ name: "Dashboard" });
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
        }
    }
};
</script>

<style></style>
