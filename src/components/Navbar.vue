<template>
    <div class="container py-3">
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <RouterLink class="d-flex align-items-center text-dark text-decoration-none" :to="{ name: 'home' }">
                <img src="../assets/logo.png" alt="logo" width="30" />
                <div class="fs-4"><span>Article</span></div>
            </RouterLink>

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'login' }">Login</RouterLink>
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'register' }">Register</RouterLink>
            </nav>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
