
# Migration from Supabase to Firebase

This document outlines the migration from Supabase to Firebase for the PulsePlace application.

## Migration Status

The application has been fully migrated from Supabase to Firebase, with the following components now using Firebase:

- Authentication (Firebase Authentication)
- Database storage (Firestore)
- File storage (Firebase Storage)
- Chat history and PulseBot functionality

## Legacy Files

The following files are kept for reference but are no longer actively used:

- `src/integrations/supabase/client.ts` - Legacy Supabase client configuration
- `src/integrations/supabase/types.ts` - Type definitions for the previous Supabase schema
- `supabase/config.toml` - Legacy Supabase project configuration

## Data Migration

All user data, profiles, survey responses, and other application data have been migrated to the Firebase Firestore database with the following collections:

- `profiles` - User profile information
- `organizations` - Organization data
- `survey_responses` - Survey response data
- `chat_history` - PulseBot chat logs

## Firebase Configuration

Firebase is configured in `src/integrations/firebase/client.ts` with the following settings:

- Project ID: pulseplace-trust-launch
- Sender ID: 422598830751
- App ID: 1:422598830751:web:088922f976678b83de50aa

## Authentication

User authentication has been migrated to use Firebase Authentication instead of Supabase Auth. The `useAuth` hook has been updated to use Firebase Authentication methods.

## Future Considerations

As the application continues to evolve:

1. Consider removing legacy Supabase files once you're confident they're no longer needed
2. Regularly update Firebase SDK versions to access new features and security patches
3. Implement more sophisticated Firebase Security Rules as needed
