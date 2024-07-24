import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp from "../config/firebaseConfig";

const auth = getAuth(firebaseApp);

export default async function signOut(email: string, password: string) {
  try {
    let result = null,
      error = null;
    //result = await signInWithEmailAndPassword(auth, email, password);
    auth.signOut();
    //await signOut(auth);
    result = "successfully logged out";
  } catch (e) {}

  // return { result, error };
}
