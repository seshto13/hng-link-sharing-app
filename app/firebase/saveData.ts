import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";
import { getDatabase } from "firebase/database";

const auth = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);
export default async function saveData({
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
    result = await setDoc(doc(auth, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
