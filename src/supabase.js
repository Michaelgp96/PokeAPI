import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://behvnotvncgptfbeszxk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlaHZub3R2bmNncHRmYmVzenhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzIzNTgsImV4cCI6MjA2Mjg0ODM1OH0.q6nk-HevAvnCuxnY3NP8n_IefSYF99zBXU8uz7X8llU';
export const supabase = createClient(supabaseUrl, supabaseKey);