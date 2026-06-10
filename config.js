const SUPABASE_URL = "https://urxdqjndesznqinwnfvw.supabase.co";

const SUPABASE_ANON_KEY = "YOUR_ANON_KEY_HERE";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
