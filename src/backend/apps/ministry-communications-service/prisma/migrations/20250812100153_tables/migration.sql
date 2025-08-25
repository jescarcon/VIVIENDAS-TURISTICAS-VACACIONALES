/*
  Warnings:

  - You are about to drop the `MinistryCommunication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."MinistryCommunication";

-- CreateTable
CREATE TABLE "public"."Ministry" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3),
    "confirmedAt" TIMESTAMP(3),
    "errorMessage" TEXT,

    CONSTRAINT "Ministry_pkey" PRIMARY KEY ("id")
);
