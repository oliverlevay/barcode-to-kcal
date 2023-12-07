import type { NextApiRequest, NextApiResponse } from "next";
import type { BeverageType } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeverageType | { message: string }>
) {
  if (req.method === "PUT") {
    try {
      const updatedType = await prisma.beverageType.update({
        where: { id: req.body.id },
        data: req.body,
      });
      res.status(200).json(updatedType);
    } catch (error) {
      res.status(500).json({ message: "Failed to update type" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
