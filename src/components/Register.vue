<template>
  <main class="form-signin">
    
    <form class="text-center" >
      <img class="mb-4" src="../assets/logo.png" alt="" width="72">
      <h1 class="h3 mb-3 fw-normal">Register</h1>

      <ValidationError v-if="errors" :errors="errors" class="mb-3"/>

      <MyInput :label="'Name'" :type="'text'" v-model="user.username" />
      <MyInput :label="'Email adress'" :type="'email'" v-model="user.email" />
      <MyInput :label="'Password'" :type="'password'" v-model="user.password" />

      <MyButton type="submit" :disabled="loading" @click="submitHandler">Register</MyButton>
      <p class="mt-5 mb-3 text-muted">© 2022–2023</p>
    </form>
  </main>
</template>

<script>
import ValidationError from './ValidationError.vue'

export default {
    name: "Register",
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
            }
        };
    },
    computed: {
        loading() {
            return this.$store.state.auth.loading;
        },
        errors() {
            return this.$store.state.auth.errors;
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            this.$store.dispatch('register', this.user).then(() => {
                this.$router.push({ name: 'home' });
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    components: { ValidationError }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>