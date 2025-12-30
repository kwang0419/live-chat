<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="isLoginForm">
      <h2>
        <LoginForm @login="enterChatroom" />
      </h2>      
      <p>No account yet? <span @click="SwitchSignupForm" class="signup-switch-label">Signup</span></p>
    </div>
    <div v-else>
       <SignupForm @signup="enterChatroom" />
       <p>Already register? <span @click="SwitchSignupForm" class="signup-switch-label">Login</span></p>
    </div>    
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const isLoginForm = ref(true);
    const router = useRouter();
    const SwitchSignupForm = () => {
      isLoginForm.value = !isLoginForm.value;
    };

    const enterChatroom = ()=> {
      router.push({ name: 'Chatroom' });
    }

    return { isLoginForm, SwitchSignupForm, enterChatroom }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /*  form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  
  .signup-switch-label {
    color: blue;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }

</style>