
import { 
  signInWithEmailAndPassword as firebaseSignIn, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/integrations/firebase/client';
import { toast } from "@/components/ui/use-toast";

// Fetch user profile data
export const fetchProfile = async (userId: string) => {
  try {
    const docRef = doc(db, 'profiles', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }

    return null;
  } catch (error) {
    console.error("Error in fetchProfile:", error);
    return null;
  }
};

// Sign in with email and password
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    console.log("Attempting sign in with:", email);
    
    const userCredential = await firebaseSignIn(auth, email, password);
    
    console.log("Sign in response:", userCredential);
    
    if (!userCredential.user) {
      toast({
        title: "Sign in failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
      throw new Error("Invalid credentials");
    }

    toast({
      title: "Signed in successfully",
      description: "Welcome back!",
    });
    
    return userCredential;
  } catch (error: any) {
    console.error("Error signing in:", error);
    
    toast({
      title: "Sign in failed",
      description: error.message || "Failed to sign in",
      variant: "destructive",
    });
    
    throw error;
  }
};

// Sign up with email and password
export const signUpWithEmailAndPassword = async (email: string, password: string, fullName: string) => {
  try {
    console.log("Attempting sign up with:", email, fullName);
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    console.log("Sign up response:", userCredential);
    
    if (userCredential.user) {
      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName: fullName
      });
      
      // Create user profile in Firestore
      await setDoc(doc(db, 'profiles', userCredential.user.uid), {
        id: userCredential.user.uid,
        email,
        full_name: fullName,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        role: 'user',
        avatar_url: null
      });
    }
    
    toast({
      title: "Sign up successful",
      description: "Your account has been created successfully.",
    });
    
    return userCredential;
  } catch (error: any) {
    console.error("Error signing up:", error);
    
    toast({
      title: "Sign up failed",
      description: error.message || "Failed to create account",
      variant: "destructive",
    });
    
    throw error;
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await firebaseSignOut(auth);
    
    toast({
      title: "Signed out successfully",
    });
  } catch (error: any) {
    console.error("Error signing out:", error);
    
    toast({
      title: "Sign out failed",
      description: error.message || "Failed to sign out",
      variant: "destructive",
    });
    
    throw error;
  }
};
