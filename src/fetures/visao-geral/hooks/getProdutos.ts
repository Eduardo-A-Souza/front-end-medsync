import { useState, useEffect } from "react";
import { Produtos } from "../types/visaoGeral";
import { visaoGeralService } from "../services/visaoGeralService";

export function useGetProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await visaoGeralService.getProdutos();
        setProdutos(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Erro desconhecido"));
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { produtos, loading, error };
}
