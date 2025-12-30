<template>
<form>
  <textarea placeholder="Enter the message and press enter" v-model="message" @keypress.enter.prevent="handleSend">
  </textarea>
  <div v-if="error" class="error">{{ error }}</div>
</form>
</template>

<script>
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { ref } from 'vue';
import { timestamp } from '@/views/firebase/config';
export default {
setup() {
  const { user } = getUser();
  const message = ref('');
  const { error, addDoc } = useCollection('messages');

  const handleSend = async () => {
    const chat = {
      name: user.value.displayName,
      message: message.value,
      createdAt: timestamp()
    }
   console.log(chat);
    await addDoc(chat);
    if(!error.value) {
      message.value = '';
    }
  }

  return { message, handleSend, error }
}
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>