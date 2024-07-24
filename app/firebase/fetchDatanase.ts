import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";
import { getDatabase, get, ref, set } from "firebase/database";

const auth = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);
export default async function fetchDatabase({
  colllection,
  id,
}: //  data,
{
  colllection: string;
  id: string;
  // data: any;
}) {
  let result = null;
  let error = null;

  try {
    /* result = await setDoc(doc(auth, colllection, id), data, {
      merge: true,
    });*/

    const userRef = ref(database, "user/" + colllection + "/" + id);
    const newdataRef = get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        result = Object.entries(snapshot.val());
        //return { result, null };

        /*.map(([id, data]) => ({
          id,
          ...data,
        }));*/
      } else {
        error = "No data available";
      }
    });

    //set(newdataRef, data);

    /*const docRef = await addDoc(collection(db, "items"), {
        name: value
    });*/
    //result = "Information updated successfully";
  } catch (e) {
    error = e;
  }

  return { result, error };
}
