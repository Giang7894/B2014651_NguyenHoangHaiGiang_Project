<script>
export default {
    props: {
        modelValue: { type: String, default: '' },
    },
    emits: ['submit', 'update:modelValue'],
    methods: {
        updateModelValue(e) {
            this.$emit('update:modelValue', e.target.value);
        },
        submit() {
            this.$emit("submit");
        }
    }
}
</script>

<template>
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse ">
        <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4 ">
                <a class="list-group-item list-group-item-action pb-5 pt-5 ripple" aria-current="true" href="/"
                    aria-expanded="true">
                    <i class="fa fa-home me-3" aria-hidden="true"></i><span>Home</span>
                </a>
                <a id="b" class="list-group-item list-group-item-action py-5 ripple" aria-current="true" href="/book"
                    aria-expanded="true">
                    <i class="fa fa-list-alt me-3" aria-hidden="true"></i><span>Book</span>
                </a>
                <a id="a" class="list-group-item list-group-item-action py-5 ripple" aria-current="true" href="/reader"
                    aria-expanded="true">
                    <i class="fa-solid fa-book me-3"></i><span>Reader</span>
                </a>
                <a class="list-group-item list-group-item-action py-5 ripple" aria-current="true" href="/bookrent"
                    aria-expanded="true">
                    <i class="fa-solid fa-comment me-3"></i><span>Book rental</span>
                </a>
            </div>
        </div>
    </nav>


    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light fixed-top">


        <div class="container-fluid">


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>


            <a class="navbar-brand" href="index.php">
                <img src="" height="70" alt="Book Rental Logo" loading="lazy" />
            </a>

            <form class="d-none d-md-flex input-group w-auto my-auto" :value="modelValue" @key.enter="submit"
                @input="updateModelValue" id="find">
                <input autocomplete="off" type="search" class="form-control rounded ms-4" placeholder='Search '
                    style="min-width: 225px;" name="search" />
                <span class="input-group-text rounded border-1 ms-2" id="search-btn" @click="submit"><i
                        class="fas fa-search"></i></span>
            </form>


            <ul class="navbar-nav ms-auto d-flex flex-row">

                <li class="nav-item dropdown" id="av">
                    <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center text-white" href="#"
                        id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg"
                            class="rounded-circle me-2" height="22" alt="Avatar" loading="lazy" />em1
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end ms-2" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="logout.php">Đăng xuất</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style>
#search-btn:hover {
    cursor: pointer;
}

main {
    padding-left: 250px !important;
    padding-top: 100px;
    padding-right: 100px;
}

body {
    background-color: #f4f4f4;
}

@media (min-width: 991.98px) {
    main {
        padding-left: 140px;
        padding-top: 100px;
    }
}

.list-group a {
    background: #213158;
    color: white;
}

.list-group-item {
    background: #213158;
    color: white;
}

#sidebarMenu {
    background: #213158;
}

#main-navbar {
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    background: #213158;
}

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 70px 0 0;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    width: 180px;
    z-index: 600;
}

@media (max-width: 991.98px) {
    .sidebar {
        width: 100%;
    }
}

.sidebar .active {
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    background: #A0B7EB;
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>