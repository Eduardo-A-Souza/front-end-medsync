import { useState } from "react";
import { produto } from "../types/cadastrar";
import { cadastrarService } from "../services/cadastrarService";

interface UsePostProdutoReturn {
  loading: boolean;
  error: Error | null;
  success: boolean;
  postProduto: (data: produto) => Promise<void>;
}

export function usePostProduto(): UsePostProdutoReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const postProduto = async (data: produto) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await cadastrarService.postProduto(data);
      setSuccess(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err : new Error("Erro desconhecido");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, postProduto };
}
