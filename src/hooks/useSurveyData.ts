
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "@/components/ui/use-toast";

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

      // Then attempt to save to Supabase if logged in
      const { data: session } = await supabase.auth.getSession();
      
      if (session?.session) {
        // If user is authenticated, save to their account
        await supabase.from('survey_responses').insert({
          organization_name: surveyData.organizationName,
          organization_size: surveyData.organizationSize, 
          email: surveyData.email,
          answers: surveyData.answers,
          score: surveyData.score,
        });
      } else {
        // If not authenticated, save anonymously
        await supabase.from('survey_responses').insert({
          organization_name: surveyData.organizationName,
          organization_size: surveyData.organizationSize,
          email: surveyData.email,
          answers: surveyData.answers,
          score: surveyData.score,
          is_anonymous: true,
        });
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
      const { data: session } = await supabase.auth.getSession();
      
      if (session?.session) {
        // If authenticated, load user's responses
        const { data, error } = await supabase
          .from('survey_responses')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        if (data) {
          const formattedData = data.map(item => ({
            organizationName: item.organization_name,
            organizationSize: item.organization_size,
            email: item.email,
            answers: item.answers,
            score: item.score,
            submittedAt: item.created_at,
          }));
          
          setStoredSurveys(formattedData);
          return formattedData;
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
