import { projectAuth } from "@/views/firebase/config";
import { ref } from "vue"

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(_user => {
  console.log("User state has changed.");
  console.log("Current user is ", _user);
  user.value = _user;
});
const getUser = () => {
  return { user }
}

export default getUser