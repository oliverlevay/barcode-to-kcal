import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { error: string }>
) {
  if (req.method === "DELETE") {
    try {
      await prisma.beverage.delete({
        where: { id: req.body.id },
      });
      res.status(200).json({ message: "Beverage deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to delete beverage" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
