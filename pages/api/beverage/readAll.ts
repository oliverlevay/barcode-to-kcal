import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Beverage } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Beverage[] | { message: string }>
) {
  if (req.method === "GET") {
    try {
      const beverage = await prisma.beverage.findMany({
        include: { type: true },
      });

      return res.status(200).json(beverage);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve beverage" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
