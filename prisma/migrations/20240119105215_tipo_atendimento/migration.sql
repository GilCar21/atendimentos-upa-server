/*
  Warnings:

  - You are about to drop the column `type` on the `Atendimentos` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "TipoAtendimento" (
    "type" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Atendimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "producaoDiaId" INTEGER,
    "tipoAtendimento" TEXT,
    CONSTRAINT "Atendimentos_producaoDiaId_fkey" FOREIGN KEY ("producaoDiaId") REFERENCES "ProducaoDia" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Atendimentos_tipoAtendimento_fkey" FOREIGN KEY ("tipoAtendimento") REFERENCES "TipoAtendimento" ("type") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Atendimentos" ("id", "producaoDiaId", "quantidade") SELECT "id", "producaoDiaId", "quantidade" FROM "Atendimentos";
DROP TABLE "Atendimentos";
ALTER TABLE "new_Atendimentos" RENAME TO "Atendimentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
