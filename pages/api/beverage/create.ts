import type { NextApiRequest, NextApiResponse } from "next";
import type { Beverage } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Beverage | { error: string }>
) {
  if (req.method === "POST") {
    try {
      const newBeverage = await prisma.beverage.create({
        data: req.body,
      });
      res.status(200).json(newBeverage);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to create beverage" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
