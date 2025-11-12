export default function EntradaPage() {
  return (
    <div className="min-h-screen p-10 bg-background text-foreground font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground">
          Adicionar Entrada
        </h1>
        <p className="text-muted-foreground mt-4">
          Página para registrar entradas de estoque (recebimento de itens).
          Preencha quantidade, fornecedor e observações. (Placeholder)
        </p>
      </main>
    </div>
  );
}
