import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase'; 

const GoogleSignIn = async () => {
  try {
    
    const provider = new GoogleAuthProvider();
    
    const result = await signInWithPopup(auth, provider);

  
    return result.user;
  } catch (error) {
    throw error;
  }
};

export { GoogleSignIn };