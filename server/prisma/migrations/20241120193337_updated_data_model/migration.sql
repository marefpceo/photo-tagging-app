/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Data` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE data_id_seq;
ALTER TABLE "Data" ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('data_id_seq');
ALTER SEQUENCE data_id_seq OWNED BY "Data"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Data_user_id_key" ON "Data"("user_id");
