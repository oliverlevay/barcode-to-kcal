import type { NextApiRequest, NextApiResponse } from "next";
import type { BeverageType } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeverageType | { message: string }>
) {
  if (req.method === "POST") {
    try {
      const newType = await prisma.beverageType.create({
        data: req.body,
      });
      res.status(200).json(newType);
    } catch (error) {
      res.status(500).json({ message: "Failed to create type" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
