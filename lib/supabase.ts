import {createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://zkzwxeihgtrltviebttu.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprend4ZWloZ3RybHR2aWVidHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MTY4OTIsImV4cCI6MjA0ODA5Mjg5Mn0.75CyBCRF2aZ5UOxcK4Z7zB_zmgbPOyavevqeqxrcbes',
)