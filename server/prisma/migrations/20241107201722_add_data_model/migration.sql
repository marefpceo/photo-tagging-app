-- CreateTable
CREATE TABLE "Data" (
    "id" TEXT NOT NULL DEFAULT 'current_game_data',
    "startTime" TIMESTAMP(3) NOT NULL,
    "stopTime" TIMESTAMP(3) NOT NULL,
    "imageId" INTEGER NOT NULL,
    "characterCount" INTEGER NOT NULL,
    "foundCharacters" INTEGER[],

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
