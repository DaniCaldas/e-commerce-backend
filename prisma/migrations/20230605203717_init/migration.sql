-- CreateTable
CREATE TABLE "Carrinho" (
    "id" TEXT NOT NULL,
    "pagamento" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "produto" TEXT NOT NULL,
    "valor" TEXT NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);
