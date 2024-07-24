import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";

const auth = getFirestore(firebaseApp);
export default async function getDocument({
  collection,
  id,
}: {
  collection: string;
  id: string;
}) {
  let docRef = doc(auth, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
