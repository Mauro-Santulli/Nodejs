-- CreateTable
CREATE TABLE "videogame" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "genere" TEXT NOT NULL,

    CONSTRAINT "videogame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "videogame_nome_key" ON "videogame"("nome");
