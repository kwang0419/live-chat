import { projectFirestore } from "@/views/firebase/config";
import { ref } from "vue"


const useCollection = (collection) => {
  let error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = 'conld not send the message'
    }
  }
  return { error, addDoc }
}

export default useCollection