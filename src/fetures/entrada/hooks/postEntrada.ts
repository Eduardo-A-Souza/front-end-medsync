import { useState } from "react";
import { entrada } from "../types/entrada";
import { entradaService } from "../services/entradaService";

interface UsePostEntradaReturn {
  loading: boolean;
  error: Error | null;
  success: boolean;
  postEntrada: (data: entrada) => Promise<void>;
}

export function usePostEntrada(): UsePostEntradaReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const postEntrada = async (data: entrada) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await entradaService.postEntrada(data);
      setSuccess(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err : new Error("Erro desconhecido");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, postEntrada };
}
