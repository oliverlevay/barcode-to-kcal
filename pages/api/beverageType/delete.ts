import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method === "DELETE") {
    try {
      await prisma.beverageType.delete({
        where: { id: req.body.id },
      });
      res.status(200).json({ message: "Type deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete type" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
