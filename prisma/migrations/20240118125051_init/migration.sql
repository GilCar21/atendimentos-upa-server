-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "ProducaoMes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProducaoDia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numeroDia" INTEGER NOT NULL,
    "producaoMesId" INTEGER,
    CONSTRAINT "ProducaoDia_producaoMesId_fkey" FOREIGN KEY ("producaoMesId") REFERENCES "ProducaoMes" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Atendimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "producaoDiaId" INTEGER,
    CONSTRAINT "Atendimentos_producaoDiaId_fkey" FOREIGN KEY ("producaoDiaId") REFERENCES "ProducaoDia" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
