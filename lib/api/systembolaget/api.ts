import { SystembolagetDrink } from "@/pages/api/systembolaget/search";
import { fetchApiResult } from "../functions";

export async function searchSystembolaget(query: string) {
  return fetchApiResult<SystembolagetDrink[]>(
    `/api/systembolaget/search?query=${query}`
  );
}
