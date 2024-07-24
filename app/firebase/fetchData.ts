import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";

const auth = getFirestore(firebaseApp);
export default async function fetchData({
  userId,
}: //id,
{
  userId: string;
  //id: string;
}) {
  let result = null;
  let error = null;

  try {
    const querySnapshot = await getDocs(collection(auth, userId));
    result = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
