-- CreateTable
CREATE TABLE "videogame" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "genere" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "videogame_id_key" ON "videogame"("id");
