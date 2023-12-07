import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Beverage } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Beverage | { message: string }>
) {
  if (req.method === 'GET') {
    const { barcode } = req.query; // Retrieve the 'id' from the query parameters

    try {
      const beverage = await prisma.beverage.findUnique({
        where: { EAN: barcode as string },
      });

      if (beverage) {
        res.status(200).json(beverage);
      } else {
        res.status(404).json({ message: 'Beverage not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve beverage' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
