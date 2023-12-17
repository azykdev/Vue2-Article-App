<template>

  <main class="form-signin">
    <form class="text-center">
      <img class="mb-4" src="../assets/logo.png" alt="" width="72">
      <h1 class="h3 mb-3 fw-normal">Login</h1>

      <!-- <MyInput :label="'Name'" :type="'text'" /> -->
      <MyInput :label="'Email adress'" :type="'email'" />
      <MyInput :label="'Password'" :type="'password'" />

      <MyButton>Login</MyButton>
      <p class="mt-5 mb-3 text-muted">© 2022–2023</p>
    </form>
  </main>
  
</template>

<script>
export default {

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