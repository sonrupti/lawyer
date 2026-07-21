import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function getLawyers() {
  const { data, error } = await supabase
    .from("lawyers")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return data || [];
}
export async function getLawyer(slug) {
  const { data, error } = await supabase
    .from("lawyers")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}