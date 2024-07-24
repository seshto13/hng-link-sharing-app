import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp from "../config/firebaseConfig";

const auth = getAuth(firebaseApp);

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
