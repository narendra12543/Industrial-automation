-- AlterTable
ALTER TABLE "product_images" ADD COLUMN     "altText" VARCHAR(255),
ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false;
