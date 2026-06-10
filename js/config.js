const SUPABASE_URL = "https://urxdqjndesznqinwnfvw.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeGRxam5kZXN6bnFpbnduZnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNjg5OTMsImV4cCI6MjA5NjY0NDk5M30.zqI76MGXXmQIQ_Y9fSLdZPFrVsgolVx_cQDwu2bsqsc";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
