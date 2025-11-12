"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetEntradas } from "@/fetures/visao-geral/hooks/getEntradas";
import { useGetSaidas } from "@/fetures/visao-geral/hooks/getSaidas";
import { useGetProdutos } from "@/fetures/visao-geral/hooks/getProdutos";

export default function Home() {
  const { entradas, loading: entrLoading, error: entrError } = useGetEntradas();
  const { saidas, loading: saidLoading, error: saidError } = useGetSaidas();
  const { produtos, loading: prodLoading, error: prodError } = useGetProdutos();

  const entradasCount = entradas.length;
  const saidasCount = saidas.length;

  return (
    <div className="min-h-screen flex bg-background text-foreground font-sans">
      <div className="flex-1 p-10 w-full">
        <header className="mb-8">
          <h2 id="overview" className="text-3xl font-bold text-foreground">
            Visão geral
          </h2>
          <p className="text-muted-foreground mt-2">
            Bem-vindo ao painel de controle do sistema logístico.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
            <Card className="rounded-lg border border-border bg-card shadow-sm">
              <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Entradas:
                </h3>
                {entrLoading ? (
                  <p className="text-muted-foreground mt-2 text-2xl">
                    Carregando...
                  </p>
                ) : entrError ? (
                  <p className="text-destructive mt-2 text-sm">
                    Erro ao carregar
                  </p>
                ) : (
                  <p className="text-muted-foreground mt-2 text-2xl">
                    {entradasCount}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-lg border border-border bg-card shadow-sm">
              <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Saidas:
                </h3>
                {saidLoading ? (
                  <p className="text-muted-foreground mt-2 text-2xl">
                    Carregando...
                  </p>
                ) : saidError ? (
                  <p className="text-destructive mt-2 text-sm">
                    Erro ao carregar
                  </p>
                ) : (
                  <p className="text-muted-foreground mt-2 text-2xl">
                    {saidasCount}
                  </p>
                )}
              </CardContent>
            </Card>
          </section>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">
                Produtos:
              </h3>
            </CardHeader>
            <CardContent>
              {prodLoading ? (
                <p className="text-muted-foreground">Carregando produtos...</p>
              ) : prodError ? (
                <p className="text-destructive">Erro ao carregar produtos</p>
              ) : produtos.length === 0 ? (
                <p className="text-muted-foreground">
                  Nenhum produto cadastrado
                </p>
              ) : (
                <ul className="space-y-3">
                  {produtos.map((produto) => (
                    <li
                      key={produto.id}
                      className="border border-border rounded-md p-3 bg-background hover:bg-secondary transition"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">
                            {produto.nome}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {produto.descricao}
                          </p>
                          <div className="flex gap-4 mt-2 text-sm">
                            <span className="text-muted-foreground">
                              Código: <strong>{produto.codigo}</strong>
                            </span>
                            <span className="text-muted-foreground">
                              Qtd: <strong>{produto.quantidade}</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
