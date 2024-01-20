import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oevndqqdmvjsosgtsepc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldm5kcXFkbXZqc29zZ3RzZXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwODY2NDgsImV4cCI6MjAxNjY2MjY0OH0.l0jFy36ewiVCcYKesUlZJQxCsmQvEDIyWaHR9YNSAso";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
