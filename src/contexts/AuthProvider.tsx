
import React, { createContext, useState, useEffect } from "react";
import { User } from "firebase/auth";
import { auth } from '@/integrations/firebase/client';
import { AuthContextType } from "./authTypes";
import { 
  fetchProfile, 
  signInWithEmailAndPassword, 
  signUpWithEmailAndPassword, 
  signOutUser 
} from "./authHelpers";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshProfile = async () => {
    if (!user?.uid) return;
    
    try {
      const profileData = await fetchProfile(user.uid);
      setProfile(profileData);
    } catch (error) {
      console.error("Error refreshing profile:", error);
    }
  };

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up with email and password
  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setIsLoading(true);
      await signUpWithEmailAndPassword(email, password, fullName);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setIsLoading(true);
      await signOutUser();
    } catch (error) {
      // Error is already handled in signOutUser
    } finally {
      setIsLoading(false);
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    console.log("Setting up auth state listener");
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log('Auth state changed:', currentUser);
      setUser(currentUser);
      
      if (currentUser) {
        setTimeout(() => {
          fetchProfile(currentUser.uid).then(profileData => {
            setProfile(profileData);
          });
        }, 0);
      } else {
        setProfile(null);
      }
      
      // Set loading to false once we've checked for a user
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    session: null, // No session in Firebase, keeping for compatibility
    user,
    profile,
    isLoading,
    signIn,
    signUp,
    signOut,
    refreshProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
