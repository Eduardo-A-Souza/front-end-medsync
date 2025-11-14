import { useState } from "react";
import { Produto } from "../types/editar";
import { editarService } from "../services/editarService";

interface UsePutProdutoReturn {
  loading: boolean;
  error: Error | null;
  success: boolean;
  putProduto: (data: Produto) => Promise<void>;
}

export function usePutProduto(): UsePutProdutoReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const putProduto = async (data: Produto) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await editarService.putProduto(data);
      setSuccess(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err : new Error("Erro desconhecido");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, putProduto };
}
