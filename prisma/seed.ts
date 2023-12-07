import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.beverageType.deleteMany();
  await prisma.beverageType.createMany({
    data: [
      {
        name: "Öl",
      },
      {
        name: "Cider",
      },
      {
        name: "Vin",
      },
      {
        name: "Sprit",
      },
      {
        name: "Alkoholfritt",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
