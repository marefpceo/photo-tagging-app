/*
  Warnings:

  - The primary key for the `Data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Data` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[user_id]` on the table `Data` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Data" DROP CONSTRAINT "Data_pkey",
ADD COLUMN     "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Data_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Data_user_id_key" ON "Data"("user_id");
