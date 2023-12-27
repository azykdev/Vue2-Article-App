<template>
    <div class="container py-3">
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <RouterLink class="d-flex align-items-center text-dark text-decoration-none" :to="{ name: 'home' }">
                <img src="../assets/logo.png" alt="logo" width="30" />
                <div class="fs-4"><span>Article</span></div>
            </RouterLink> 
            
            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <template v-if="isLoggedIn">
                    <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'home' }">{{ user.username.toUpperCase() }}</RouterLink>
                    <a href="#" class="me-3 py-2 text-dark text-decoration-none" @click="logout">Logout</a>

                </template>
                <template v-if="isAnonymous">
                    <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'login' }">Login</RouterLink>
                    <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'register' }">Register</RouterLink>
                </template>
            </nav>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { gettersTypes } from '@/modules/types';
    import { mapGetters } from 'vuex';
    export default {
        name: "Navbar",
        data() {
            return {
                
            }
        },
        computed: {

            ...mapGetters({
                user: gettersTypes.GET_USER,
                isLoggedIn: gettersTypes.GET_ISLOGGEDIN,
                isAnonymous: gettersTypes.GET_ISANONYMOUS
            })
        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style scoped></style>
