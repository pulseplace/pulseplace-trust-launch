
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

// Fetch user profile data
export const fetchProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error in fetchProfile:", error);
    return null;
  }
};

// Sign in with email and password
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    console.log("Attempting sign in with:", email);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    console.log("Sign in response:", data, error);
    
    if (error) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }

    toast({
      title: "Signed in successfully",
      description: "Welcome back!",
    });
    
    return data;
  } catch (error: any) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// Sign up with email and password
export const signUpWithEmailAndPassword = async (email: string, password: string, fullName: string) => {
  try {
    console.log("Attempting sign up with:", email, fullName);
    
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: window.location.origin + '/auth'
      }
    });
    
    console.log("Sign up response:", data, error);
    
    if (error) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
    
    toast({
      title: "Sign up successful",
      description: "Please check your email for verification instructions.",
    });
    
    return data;
  } catch (error: any) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
    
    toast({
      title: "Signed out successfully",
    });
  } catch (error: any) {
    console.error("Error signing out:", error);
    throw error;
  }
};
