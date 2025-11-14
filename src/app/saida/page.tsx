"use client";

import { useState } from "react";
import { usePostSaida } from "@/fetures/saida/hooks/postSaida";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SaidaPage() {
  const { loading, error, success, postSaida } = usePostSaida();

  type FormState = {
    nome: string;
    motivo: string;
    quantidade: string;
  };

  const [formData, setFormData] = useState<FormState>({
    nome: "",
    motivo: "",
    quantidade: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormState) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.motivo || !formData.quantidade) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      await postSaida({
        nome: formData.nome,
        motivo: formData.motivo,
        quantidade: parseInt(formData.quantidade, 10),
      });

      setFormData({ nome: "", motivo: "", quantidade: "" });
    } catch (err) {
      console.error("Erro ao adicionar saída:", err);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-background text-foreground font-sans">
      <main className="max-w-2xl mx-auto">
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-card-foreground">
              Adicionar Saída
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground">
                  Nome do Produto
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Ex: Incubadora"
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-input text-foreground border-border"
                />
              </div>

              {/* Motivo */}
              <div className="space-y-2">
                <Label htmlFor="motivo" className="text-foreground">
                  Motivo / Observação
                </Label>
                <textarea
                  id="motivo"
                  name="motivo"
                  placeholder="Ex: Envio para cliente"
                  value={formData.motivo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Quantidade */}
              <div className="space-y-2">
                <Label htmlFor="quantidade" className="text-foreground">
                  Quantidade
                </Label>
                <Input
                  id="quantidade"
                  name="quantidade"
                  type="number"
                  placeholder="Ex: 10"
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="bg-input text-foreground border-border"
                  min="0"
                />
              </div>

              {/* Status messages */}
              {success && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">
                  ✓ Saída registrada com sucesso!
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
                className="w-full bg-primary text-primary-foreground hover:opacity-90"
              >
                {loading ? "Enviando..." : "Adicionar Saída"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
