/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `videogame` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "videogame_id_key";

-- AlterTable
ALTER TABLE "videogame" ADD CONSTRAINT "videogame_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "videogame_nome_key" ON "videogame"("nome");
