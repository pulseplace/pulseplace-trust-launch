
// DEPRECATED - This application has been migrated to Firebase
// This file is kept for reference purposes only and should not be used in new code.

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mvbdwohxjzhzjrjwphkv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12YmR3b2h4anpoempyandwaGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3ODQwMDcsImV4cCI6MjA2MTM2MDAwN30.Jda1Mqe46tc0drLkV0lWf46oN5HZp_klYwvKl2Sw1ro";

// DEPRECATED - Do not use this client in new code
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
