import { useState } from "react";
import { excluirService } from "../services/excluirService";

interface UseDeleteProdutoReturn {
  loading: boolean;
  error: Error | null;
  success: boolean;
  deleteProduto: (nome: string) => Promise<void>;
}

export function useDeleteProduto(): UseDeleteProdutoReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const deleteProduto = async (nome: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await excluirService.deleteProdutoByName(nome);
      setSuccess(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err : new Error("Erro desconhecido");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, deleteProduto };
}
