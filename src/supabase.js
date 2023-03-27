import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lhzygqchsxvqjxjizbow.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoenlncWNoc3h2cWp4aml6Ym93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3NjE3NTgsImV4cCI6MTk5MTMzNzc1OH0.XIILVNUWluVfxWVhaPN1bMeDuKnOfnsGs-Evkl4GQKQ"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
