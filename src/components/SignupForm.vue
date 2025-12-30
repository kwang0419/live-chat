<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display Name" v-model="displayname" required>
    <input type="text" placeholder="E-mail" v-model="email" required>
    <input type="password" placeholder="Password" v-model="password" required>
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
  setup(props, context) {

    const displayname = ref('');
    const email = ref('');
    const password = ref('');

    // useSignup
    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayname.value);
      if(!error.value){
        context.emit('signup');
      }
    }
    return { displayname, email, password, error, handleSubmit }
  }
}
</script>

<style>

</style>