<template>
    <form @submit.prevent="login" id="a">
        <fieldset>
            <legend class="text-center"></legend>
            <div id="login_img" class="text-center">
                <img src="../assets/login.png" height="150px" width="150px">
                <br>
            </div>
            <div class="form-floating m-5">
                <input type="text" class="form-control" name="account"  id="floatingInput"
                    v-model="account">
                <label for="floatingInput">Account</label>
            </div>
            <div class="form-floating mx-5 mb-3">
                <input v-model="password" type="password" class="form-control" name="password" 
                    aria-labelledby="passwordHelpBlock" id="floatingPassword">
                <label for="floatingPassword">Password</label>

            </div>
            <div class="d-grid d-md-block m-5">
                <button class="ad btn btn-primary col-6 ms-5" type="submit" name="submit">Login</button>
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
            user: JSON.parse(localStorage.getItem('admin')),
            account: "",
            password: "",
        };
    },
    methods: {
        async login() {
            await this.userStore.signIn(this.account, this.password);
            localStorage.setItem('admin', JSON.stringify(this.userStore.user));
            this.$router.push({ name: 'home' });
        },
    },
};
</script>