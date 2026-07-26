import { supabase } from "../lib/supabase";

export async function getAllBNSSections() {
  const { data, error } = await supabase
    .from("law_sections")
    .select("*")
    .eq("act", "BNS")
    .order("section_number");

  if (error) throw error;

  return data;
}

export async function getSection(sectionNumber) {
  const { data, error } = await supabase
    .from("law_sections")
    .select("*")
    .eq("act", "BNS")
    .eq("section_number", sectionNumber)
    .single();

  if (error) throw error;

  return data;
}

export async function searchSections(query) {
  const { data, error } = await supabase
    .from("law_sections")
    .select("*")
    .eq("act", "BNS")
    .ilike("search_text", `%${query}%`)
    .order("section_number")
    .limit(50);

  if (error) throw error;

  return data;
}