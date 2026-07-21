// Provide a local module declaration to satisfy TypeScript when the
// './supabase' module or its type declarations are not present.
declare module "./supabase" {
  export const supabase: any;
}

import { supabase } from "./supabase";

export async function getLawyers() {
  const { data, error } = await supabase
    .from("lawyers")
    .select("*")
    .order("experience", { ascending: false });

  if (error) {
    console.error("Error fetching lawyers:", error);
    return [];
  }

  return data;
}


export async function getLawyerBySlug(slug: string) {
  const { data, error } = await supabase
    .from("lawyers")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching lawyer:", error);
    return null;
  }

  return data;
}


export async function searchLawyers(query: string) {
  const { data, error } = await supabase
    .from("lawyers")
    .select("*")
    .textSearch(
      "searchable_text",
      query.toLowerCase()
    );

  if (error) {
    console.error("Search error:", error);
    return [];
  }

  return data;
}