import { BeverageType } from "@prisma/client";
import { fetchApiResult } from "./functions";

export async function getBeverageType(barcode: string) {
  return fetchApiResult<BeverageType>(
    `/api/beverageType/read?barcode=${barcode}`
  );
}

export async function getAllBeverageTypes() {
  return fetchApiResult<BeverageType[]>(`/api/beverageType/readAll`);
}

export async function updateBeverageType(type: BeverageType) {
  return fetchApiResult<BeverageType>(`/api/beverageType/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(type),
  });
}

export async function createBeverageType(type: Omit<BeverageType, "id">) {
  return fetchApiResult<BeverageType>(`/api/beverageType/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(type),
  });
}

export async function deleteBeverageType(id: string) {
  return fetchApiResult<{ message: string }>(`/api/beverageType/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}
