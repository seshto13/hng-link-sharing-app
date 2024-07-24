import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";
import { getDatabase, push, ref, set } from "firebase/database";

const auth = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);
export default async function addDatabase({
  colllection,
  id,
  data,
}: {
  colllection: string;
  id: string;
  data: any;
}) {
  let result = null;
  let error = null;

  try {
    /* result = await setDoc(doc(auth, colllection, id), data, {
      merge: true,
    });*/

    const userRef = ref(database, "user/" + colllection + "/" + id);
    const newdataRef = push(userRef);

    set(newdataRef, data);

    /*const docRef = await addDoc(collection(db, "items"), {
        name: value
    });*/
    result = "Information updated successfully";
  } catch (e) {
    error = e;
  }

  return { result, error };
}
