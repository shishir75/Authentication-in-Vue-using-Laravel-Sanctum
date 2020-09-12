<template>
    <div class="bg-secondary p-4 rounded text-white">
        <h1 class="text-center">Register Page</h1>
        <form @submit.prevent="saveForm" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="name"
                    v-model="form.name"
                />
                <small v-if="errors.name" class="text-danger">{{
                    errors.name[0]
                }}</small>
            </div>
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
                <label for="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="form.password"
                />
                <small v-if="errors.password" class="text-danger">{{
                    errors.password[0]
                }}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword2">Confirm Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword2"
                    v-model="form.password_confirmation"
                />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: []
        };
    },
    components: {},
    mounted() {},
    created() {},
    computed: {},
    methods: {
        saveForm() {
            axios
                .post("/api/register-account", this.form)
                .then(res => {
                    this.$router.push({ name: "login" });
                    Toast.fire({
                        icon: "success",
                        title: "Registration successful. Login now!"
                    });
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
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
