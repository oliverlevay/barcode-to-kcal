import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { load } from "cheerio";
import { SystembolagetData } from "@/lib/api/systembolaget/types";

export type SystembolagetDrink = {
  boldName: string;
  thinName: string | null;
  category: "Öl" | "Vin" | "Sprit" | "Cider" | "Alkoholfritt";
  country: string;
  alcoholRate: number;
  volumeText: string;
  volume: number;
  price: number;
  imageUrl?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SystembolagetDrink[] | { error: string }>
) {
  const { query } = req.query;

  try {
    const fetchRes = await fetch(
      `https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?page=1&size=30&sortBy=Score&sortDirection=Ascending&textQuery=${query}`,
      {
        headers: {
          "access-control-allow-origin": "*",
          "content-type": "application/json",
          "ocp-apim-subscription-key": "cfc702aed3094c86b92d6d4ff7a54c84",
          "sec-ch-ua":
            '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
        referrer: "https://www.systembolaget.se/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
    );
    const data: SystembolagetData = await fetchRes.json();

    const drinks: SystembolagetDrink[] = data.products.map((drink) => {
      let category: SystembolagetDrink["category"] = "Alkoholfritt";
      if (drink.categoryLevel1 === "Cider & blanddrycker") {
        if (drink.categoryLevel2 === "Cider") {
          category = "Cider";
        } else {
          category = "Sprit";
        }
      } else {
        category = drink.categoryLevel1 as SystembolagetDrink["category"];
      }
      let imageUrl;
      if (drink.images[0]?.imageUrl) {
        imageUrl = drink.images[0].imageUrl + "_100.png?q=75&w=2000";
      }

      return {
        boldName: drink.productNameBold,
        thinName: drink.productNameThin,
        category: category,
        country: drink.country,
        alcoholRate: drink.alcoholPercentage,
        volumeText: drink.volumeText,
        volume: drink.volume,
        price: drink.price,
        imageUrl,
      };
    });

    res.status(200).json(drinks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
