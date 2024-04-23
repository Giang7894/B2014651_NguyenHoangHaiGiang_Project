<template>
    <section class="ftco-section snipcss-ReAyN">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">MY LIBRARY</h2>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col">
                        <p class="mb-0 phone"><span class="fa fa-phone"></span> <a href="#">+00 1234 567</a></p>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <div class="social-media">
                            <p class="mb-0 d-flex">
                                <a href="https://www.facebook.com/"
                                    class="d-flex align-items-center justify-content-center"><span
                                        class="fab fa-facebook"><i class="sr-only">Facebook</i></span></a>
                                <a href="https://twitter.com/?lang-en"
                                    class="d-flex align-items-center justify-content-center"><span
                                        class="fab fa-twitter"><i class="sr-only">Twitter</i></span></a>
                                <a href="https://www.instagram.com/?hl=en"
                                    class="d-flex align-items-center justify-content-center"><span
                                        class="fab fa-instagram"><i class="sr-only">Instagram</i></span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">
                <a class="navbar-brand" href="/">MY LIBRARY<span></span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span> Menu </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="/detail" class="nav-link">Your Books</a></li>
                    </ul>
                </div>
                <a v-if="this.user!=null" type="button" class="text-white" @click="logout">Logout</a>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: '',
        };
    },
    beforeMount() {
        this.user = localStorage.getItem('user');
    },
    methods: {
        logout() {
            localStorage.removeItem('user');
            this.$router.replace({ name: 'login' });
        }
    }
}
</script>
