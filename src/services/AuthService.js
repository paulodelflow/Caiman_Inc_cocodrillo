import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../libs/firebase';  // Importa la instancia de auth

export const login = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
