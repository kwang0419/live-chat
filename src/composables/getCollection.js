import { projectFirestore } from "@/views/firebase/config";
import { ref, watchEffect } from "vue"

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collections = projectFirestore.collection(collection)
    .orderBy('createdAt');
  
  const unsubscribSnapshot = collections.onSnapshot(snap => {
    // console.log("Snapshot!!!")
    let results = [];
    snap.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id }) && doc.data().createdAt;
    });

    documents.value = results;
    error.value = null;
  }, err => {
      console.log(err.message);
      documents.value = null;
      error.value = 'could not fetch data';
  });

  // unsubscribe the snapshot to prevent multiple snapshots from browser.
  watchEffect((onInvalidate) => onInvalidate(() => unsubscribSnapshot()));

  return { documents, error };
}

export default getCollection