<template>
    <form @submit.prevent="register" id="a">
        <fieldset>
            <legend class='text-center'>REGISTER</legend>
            <div class="form-floating m-5 mb-3">
                <input v-model="name"type="text" class="form-control" name="name" placeholder="abc123" id="floatingInput1" required
                    minlength="5" maxlength="50">
                <label for="floatingInput3">Full name</label>
            </div>
            <div class="form-floating m-5 mb-3">
                <input v-model="email" type="email" class="form-control" name="email" placeholder="abc123" id="floatingInput2" required
                    minlength="5" maxlength="50">
                <label for="floatingInput3">Email</label>
            </div>
            <div class="form-floating m-5 mb-3">
                <input v-model="address" type="text" class="form-control" name="address" placeholder="abc123" id="floatingInput3" required
                    minlength="5" maxlength="50">
                <label for="floatingInput3">Address</label>
            </div>
            <div class="form-floating m-5 mb-3">
                <input v-model="phone" type="text" class="form-control" name="phone" placeholder="abc123" id="floatingInput4" required
                    minlength="5" maxlength="50">
                <label for="floatingInput3">Phone</label>
            </div>
            <div class="form-floating m-5 mb-3">
                <input v-model="sex" type="text" class="form-control" name="sex" placeholder="abc123" id="floatingInput5" required
                    minlength="5" maxlength="50">
                <label for="floatingInput3">Gender</label>
            </div>
            <div class="form-floating mx-5 mb-3">
                <input v-model="password" type="password" class="form-control" name="password" placeholder="Password"
                    aria-labelledby="passwordHelpBlock" id="floatingPassword" required minlength="6" maxlength="12">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mx-5 mb-3">
                <input v-model="confirmpassword" type="password" class="form-control" name="passwordrepeat" placeholder="Password"
                    aria-labelledby="passwordHelpBlock" id="floatingPassword2" required>
                <label for="floatingPassword2">Confirm password</label>
            </div>
            <div class="form-floating m-5">
                <a class="link-opacity-50-hover p-10" href="/login">Already have one?</a>
            </div>
            <div>
                <button class="ad btn btn-primary col-6 ms-5" type="submit" name="submit">Register</button>
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
            email: "",
            password: "",
            name: "",
            address: "",
            phone: "",
            confirmpassword: "",
            sex: "",
            birth: "",
        };
    },
    methods: {
        async register() {
            if (this.password != this.confirmpassword) {
                alert("Password not match");
                return;
            }
            await this.userStore.signUp(this.name,this.address,this.sex,this.birth,this.phone,this.email,this.password);
            localStorage.setItem('user', JSON.stringify(this.userStore.user));
            this.$router.push({ name: 'home' });
        },
    },
};
</script>