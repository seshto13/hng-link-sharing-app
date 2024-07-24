import firebaseApp from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function SignUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(
      getAuth(firebaseApp),
      email,
      password
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}
