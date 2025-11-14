import { useState } from "react";
import { saida } from "../types/saida";
import { saidaService } from "../services/saidaService";

interface UsePostSaidaReturn {
  loading: boolean;
  error: Error | null;
  success: boolean;
  postSaida: (data: saida) => Promise<void>;
}

export function usePostSaida(): UsePostSaidaReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const postSaida = async (data: saida) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await saidaService.postSaida(data);
      setSuccess(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err : new Error("Erro desconhecido");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, postSaida };
}
