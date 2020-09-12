<template>
    <div>
        <h1>Dashboard Page</h1>
        <br />
        <h2>User Information</h2>
        <p>Name : {{ user.name }}</p>
        <p>Email : {{ user.email }}</p>
        <p>Created at : {{ user.created_at }}</p>

        <br />
        <button class="btn btn-warning" @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: []
        };
    },
    methods: {
        logout() {
            axios
                .post("/api/logout")
                .then(() => {
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
    },
    mounted() {
        axios.get("/api/user").then(res => {
            this.user = res.data;
        });
    }
};
</script>

<style></style>
