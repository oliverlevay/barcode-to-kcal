import { Beverage, BeverageType } from "@prisma/client";
import { fetchApiResult } from "./functions";

export async function getAllBeverages() {
  return fetchApiResult<(Beverage & { type: BeverageType })[]>(
    `/api/beverage/readAll`
  );
}

export async function getBeverage(barcode: string) {
  return fetchApiResult<Beverage>(`/api/beverage/read?barcode=${barcode}`);
}

export async function updateBeverage(beverage: Beverage) {
  return fetchApiResult<Beverage>(`/api/beverage/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(beverage),
  });
}

export async function createBeverage(beverage: Omit<Beverage, "id">) {
  return fetchApiResult<Beverage>(`/api/beverage/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(beverage),
  });
}

export async function deleteBeverage(id: number) {
  return fetchApiResult<{ message: string }>(`/api/beverage/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}
