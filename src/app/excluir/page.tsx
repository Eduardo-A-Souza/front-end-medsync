"use client";

import { useState } from "react";
import { useDeleteProduto } from "@/fetures/excluir/hooks/deleteProduto";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExcluirPage() {
  const { loading, error, success, deleteProduto } = useDeleteProduto();

  type FormState = { nome: string };
  const [formData, setFormData] = useState<FormState>({ nome: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormState) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome) {
      alert("Por favor informe o nome do produto a ser excluído");
      return;
    }

    const ok = confirm(
      `Confirma exclusão do produto "${formData.nome}"? Esta ação é permanente.`
    );
    if (!ok) return;

    try {
      await deleteProduto(formData.nome);
      setFormData({ nome: "" });
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-background text-foreground font-sans">
      <main className="max-w-2xl mx-auto">
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-card-foreground">
              Excluir Produto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground">
                  Nome do Produto
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Ex: Produto XYZ ou SKU"
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-input text-foreground border-border"
                />
              </div>

              {success && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">
                  ✓ Produto excluído com sucesso!
                </div>
              )}
              {error && (
                <div className="p-3 bg-destructive/20 text-destructive rounded-md">
                  ✗ Erro: {error.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-destructive text-destructive-foreground hover:opacity-90"
              >
                {loading ? "Excluindo..." : "Excluir Produto"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
