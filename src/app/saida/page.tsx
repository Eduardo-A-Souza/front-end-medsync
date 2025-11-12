export default function SaidaPage() {
  return (
    <div className="min-h-screen p-10 bg-background text-foreground font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground">Adicionar Saída</h1>
        <p className="text-muted-foreground mt-4">
          Página para registrar saídas de estoque (envios, vendas ou baixas).
          Informe quantidade, destino e motivo. (Placeholder)
        </p>
      </main>
    </div>
  );
}
