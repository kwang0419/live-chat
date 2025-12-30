<template>
  <form @submit.prevent="handleLogin">
    <input type="text" placeholder="E-mail" v-model="email" required>
    <input type="password" placeholder="Password" v-model="password" required>
    <div class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();
    const handleLogin = async () => {
      const res = await login(email.value, password.value);
      if(!error.value) {
        console.log(res);
        console.log('user logged in.')
        context.emit('login');
      }
      else {
        console.log(error.value)
      }
    }
    return { email, password, error, handleLogin }
  }
}
</script>

<style>

</style>