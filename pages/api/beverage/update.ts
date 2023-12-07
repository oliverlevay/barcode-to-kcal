import type { NextApiRequest, NextApiResponse } from "next";
import type { Beverage } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Beverage | { error: string }>
) {
  if (req.method === "PUT") {
    try {
      const updatedBeverage = await prisma.beverage.update({
        where: { id: req.body.id },
        data: req.body,
      });
      res.status(200).json(updatedBeverage);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to update beverage" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
