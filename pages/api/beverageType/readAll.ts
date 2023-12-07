import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, BeverageType } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeverageType[] | { message: string }>
) {
  if (req.method === "GET") {
    try {
      const types = await prisma.beverageType.findMany();
      res.status(200).json(types);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve types" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
