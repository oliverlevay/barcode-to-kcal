-- CreateTable
CREATE TABLE "Beverage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "volume" INTEGER NOT NULL,
    "volumeText" TEXT NOT NULL,
    "EAN" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "alcoholRate" DOUBLE PRECISION NOT NULL,
    "thinName" TEXT NOT NULL,
    "boldName" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Beverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeverageType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BeverageType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Beverage_EAN_key" ON "Beverage"("EAN");

-- CreateIndex
CREATE UNIQUE INDEX "BeverageType_name_key" ON "BeverageType"("name");

-- AddForeignKey
ALTER TABLE "Beverage" ADD CONSTRAINT "Beverage_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "BeverageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
