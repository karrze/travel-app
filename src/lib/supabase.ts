import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Brak konfiguracji Supabase — ustaw VITE_SUPABASE_URL i VITE_SUPABASE_PUBLISHABLE_KEY w .env.local",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
