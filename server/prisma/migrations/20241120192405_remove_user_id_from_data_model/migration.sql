/*
  Warnings:

  - You are about to drop the column `user_id` on the `Data` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Data` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Data_user_id_key";

-- AlterTable
ALTER TABLE "Data" DROP COLUMN "user_id",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Data_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Data_id_key" ON "Data"("id");
