-- CreateTable
CREATE TABLE "public"."MinistryCommunication" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3),
    "confirmedAt" TIMESTAMP(3),
    "errorMessage" TEXT,

    CONSTRAINT "MinistryCommunication_pkey" PRIMARY KEY ("id")
);
