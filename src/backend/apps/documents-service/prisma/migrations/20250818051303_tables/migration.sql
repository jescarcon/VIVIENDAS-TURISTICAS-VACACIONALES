-- CreateTable
CREATE TABLE "public"."Document" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "originalFilename" TEXT NOT NULL,
    "storedUrl" TEXT NOT NULL,
    "ocrExtractedData" JSONB,
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);
