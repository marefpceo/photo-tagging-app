/*
  Warnings:

  - A unique constraint covering the columns `[foundCharacters]` on the table `Data` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Data_foundCharacters_key" ON "Data"("foundCharacters");
