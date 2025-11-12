import { useState, useEffect } from "react";
import { Entradas } from "../types/visaoGeral";
import { visaoGeralService } from "../services/visaoGeralService";

export function useGetEntradas() {
  const [entradas, setEntradas] = useState<Entradas[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await visaoGeralService.getEntradas();
        setEntradas(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Erro desconhecido"));
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { entradas, loading, error };
}
