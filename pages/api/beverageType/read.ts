import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, BeverageType } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeverageType | { message: string }>
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const type = await prisma.beverageType.findUnique({
        where: { id: parseInt(id as string) },
      });
      res.status(200).json(type || { message: "Type not found" });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve type" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
