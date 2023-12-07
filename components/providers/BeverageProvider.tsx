import { getAllBeverages } from "@/lib/api/beverage";
import { getAllBeverageTypes } from "@/lib/api/beverageType";
import type { Beverage, BeverageType } from "@prisma/client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface BeverageContextType {
  beverageTypes: BeverageType[];
  refetchTypes: () => void;
  beverages: (Beverage & { type: BeverageType })[];
  refetchBeverages: () => void;
}

const BeverageContext = createContext<BeverageContextType | undefined>({
  beverageTypes: [],
  refetchTypes: () => {},
  beverages: [],
  refetchBeverages: () => {},
});

export const useTypes = () => {
  const context = useContext(BeverageContext);
  if (!context) {
    throw new Error("useTypes must be used within a TypeProvider");
  }
  return context;
};

export default function BeverageProvider({ children }: { children: any }) {
  const [beverageTypes, setBeverageTypes] = useState<BeverageType[]>([]);
  const [beverages, setBeverages] = useState<
    (Beverage & { type: BeverageType })[]
  >([]);

  const fetchTypes = async () => {
    const { data } = await getAllBeverageTypes();
    if (data) {
      setBeverageTypes(data);
    }
  };

  const fetchBeverages = async () => {
    const { data } = await getAllBeverages();
    if (data?.length) {
      setBeverages(data);
    }
  };

  useEffect(() => {
    fetchTypes();
    fetchBeverages();
  }, []);

  return (
    <BeverageContext.Provider
      value={{
        beverageTypes: beverageTypes,
        refetchTypes: fetchTypes,
        beverages: beverages,
        refetchBeverages: fetchBeverages,
      }}
    >
      {children}
    </BeverageContext.Provider>
  );
}

export const useBeverages = () => {
  const context = useContext(BeverageContext);
  if (!context) {
    throw new Error("useBeverages must be used within a TypeProvider");
  }
  return context;
};
