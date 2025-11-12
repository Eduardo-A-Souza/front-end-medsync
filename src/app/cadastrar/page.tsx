"use client";

import { useState } from "react";
import { usePostProduto } from "@/fetures/cadastrar/hooks/postProduto";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CadastrarPage() {
  const { loading, error, success, postProduto } = usePostProduto();
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    codigo: "",
    quantidade: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nome ||
      !formData.descricao ||
      !formData.codigo ||
      !formData.quantidade
    ) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      await postProduto({
        nome: formData.nome,
        descricao: formData.descricao,
        codigo: formData.codigo,
        quantidade: parseInt(formData.quantidade, 10),
      });
      setFormData({ nome: "", descricao: "", codigo: "", quantidade: "" });
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-background text-foreground font-sans">
      <main className="max-w-2xl mx-auto">
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-card-foreground">
              Cadastrar Produto
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
                  placeholder="Ex: Produto XYZ"
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-input text-foreground border-border"
                />
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <Label htmlFor="descricao" className="text-foreground">
                  Descrição
                </Label>
                <textarea
                  id="descricao"
                  name="descricao"
                  placeholder="Ex: Descrição detalhada do produto"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Código */}
              <div className="space-y-2">
                <Label htmlFor="codigo" className="text-foreground">
                  Código (SKU)
                </Label>
                <Input
                  id="codigo"
                  name="codigo"
                  type="text"
                  placeholder="Ex: SKU123"
                  value={formData.codigo}
                  onChange={handleChange}
                  className="bg-input text-foreground border-border"
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
                  placeholder="Ex: 100"
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="bg-input text-foreground border-border"
                  min="0"
                />
              </div>

              {/* Mensagens de status */}
              {success && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">
                  ✓ Produto cadastrado com sucesso!
                </div>
              )}
              {error && (
                <div className="p-3 bg-destructive/20 text-destructive rounded-md">
                  ✗ Erro: {error.message}
                </div>
              )}

              {/* Botão submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:opacity-90"
              >
                {loading ? "Cadastrando..." : "Cadastrar Produto"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
