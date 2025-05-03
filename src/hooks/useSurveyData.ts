
import { useState, useEffect } from 'react';
import { db } from '@/integrations/firebase/client';
import { collection, addDoc, getDocs, query, where, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';
import { toast } from "@/components/ui/use-toast";
import { useAuth } from '@/hooks/useAuth';

interface SurveyData {
  organizationName: string;
  organizationSize: string;
  email: string;
  answers: (number | null)[];
  score: number | null;
  submittedAt?: string;
}

export const useSurveyData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [storedSurveys, setStoredSurveys] = useState<SurveyData[]>([]);
  const { user } = useAuth();

  // Load previously saved surveys from localStorage as a fallback
  useEffect(() => {
    try {
      const savedSurveys = localStorage.getItem('pulseplace_surveys');
      if (savedSurveys) {
        setStoredSurveys(JSON.parse(savedSurveys));
      }
    } catch (error) {
      console.error("Error loading saved surveys:", error);
    }
  }, []);

  const saveSurveyResponse = async (surveyData: SurveyData) => {
    setIsSaving(true);
    try {
      // First, save to localStorage as fallback
      const updatedSurveys = [...storedSurveys, {
        ...surveyData,
        submittedAt: new Date().toISOString()
      }];
      
      localStorage.setItem('pulseplace_surveys', JSON.stringify(updatedSurveys));
      setStoredSurveys(updatedSurveys);

      // Then attempt to save to Firebase
      try {
        if (user) {
          // If user is authenticated, find or create organization
          const organizationsRef = collection(db, 'organizations');
          let organizationId: string | null = null;
          
          // Check if organization exists
          const q = query(organizationsRef, where('name', '==', surveyData.organizationName));
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            organizationId = querySnapshot.docs[0].id;
          } else {
            // Create new organization
            const newOrgRef = await addDoc(organizationsRef, {
              name: surveyData.organizationName,
              size: surveyData.organizationSize,
              created_at: serverTimestamp()
            });
            
            organizationId = newOrgRef.id;
          }
          
          // Save to survey_responses
          await addDoc(collection(db, 'survey_responses'), {
            organization_id: organizationId,
            user_id: user.uid,
            organization_name: surveyData.organizationName,
            organization_size: surveyData.organizationSize, 
            email: surveyData.email,
            answers: surveyData.answers,
            score: surveyData.score,
            created_at: serverTimestamp()
          });
        } else {
          // If not authenticated, save anonymously
          await addDoc(collection(db, 'survey_responses'), {
            organization_name: surveyData.organizationName,
            organization_size: surveyData.organizationSize,
            email: surveyData.email,
            answers: surveyData.answers,
            score: surveyData.score,
            is_anonymous: true,
            created_at: serverTimestamp()
          });
        }
      } catch (error) {
        console.error("Error saving to Firebase:", error);
        // Continue with local storage data
      }
      
      toast({
        title: "Response Saved",
        description: "Your survey responses have been saved successfully.",
      });
      
      return true;
    } catch (error) {
      console.error("Error saving survey response:", error);
      toast({
        title: "Save Error",
        description: "There was an error saving your responses. We've kept a local copy.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const loadSurveyResponses = async () => {
    setIsLoading(true);
    try {
      if (user) {
        try {
          // If authenticated, load user's responses
          const q = query(
            collection(db, 'survey_responses'),
            where('user_id', '==', user.uid),
            orderBy('created_at', 'desc')
          );
          
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            const formattedData: SurveyData[] = querySnapshot.docs.map(doc => {
              const data = doc.data();
              
              // Process answers differently based on what we get from the database
              let processedAnswers: (number | null)[] = [];
              
              if (Array.isArray(data.answers)) {
                // Try to convert each item to a number if possible
                processedAnswers = data.answers.map((answer: any) => {
                  if (answer === null) return null;
                  const num = Number(answer);
                  return isNaN(num) ? null : num;
                });
              }
              
              // Convert Firestore timestamp to string
              const timestamp = data.created_at as Timestamp;
              const submittedAt = timestamp ? timestamp.toDate().toISOString() : new Date().toISOString();
              
              return {
                organizationName: data.organization_name,
                organizationSize: data.organization_size,
                email: data.email,
                answers: processedAnswers,
                score: data.score,
                submittedAt,
              };
            });
            
            setStoredSurveys(formattedData);
            return formattedData;
          }
        } catch (error) {
          console.error("Error loading from Firebase:", error);
        }
      }
      
      // If not authenticated or no data, return local data
      return storedSurveys;
    } catch (error) {
      console.error("Error loading survey responses:", error);
      toast({
        title: "Load Error",
        description: "Could not load your responses from the server. Showing local data instead.",
        variant: "destructive",
      });
      return storedSurveys;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    saveSurveyResponse,
    loadSurveyResponses,
    storedSurveys,
    isLoading,
    isSaving,
  };
};
