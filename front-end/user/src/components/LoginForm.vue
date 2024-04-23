<template>
    <form @submit.prevent="login"  id="a">
        <fieldset>
            <legend class="text-center"></legend>
            <div id="login_img" class="text-center">
                <img src="../assets/login.png" height="150px" width="150px">
                <br>
            </div>
            <div class="form-floating m-5">
                <input type="text" class="form-control" name="email" placeholder="abc123" id="floatingInput" v-model="email">
                        <label for="floatingInput">Email</label>
                      </div>
                      <div class="form-floating mx-5 mb-3">
                        <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" aria-labelledby="passwordHelpBlock" id="floatingPassword">
                        <label for="floatingPassword">Password</label>

                      </div>
                      <div class="form-floating m-5">
                        <a class="link-opacity-50-hover p-10" href="/register">Do not have an account?</a>
                      </div>
                      <div class="d-grid d-md-block">
                        <button class="ad btn btn-primary col-6 ms-5" type="submit" name="submit">Login</button>
                        <button class="btn btn-secondary col-2 float-end me-5" type="reset">Cancel</button>
                      </div>       
                      <br> 
        </fieldset>
    </form>
</template>

<script>
import { useUserStore } from "../store/user";
export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    data() {
        return {
            user: localStorage.getItem('user'),
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            await this.userStore.signIn(this.email, this.password);
            localStorage.setItem('user', JSON.stringify(this.userStore.user));
            this.$router.push({ name: 'home' });
        },
    },
};
</script>