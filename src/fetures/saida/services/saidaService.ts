import axios from "axios";
import { saida } from "../types/saida";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const saidaService = {
  async postSaida(data: saida): Promise<saida> {
    const response = await axios.post(`${API_BASE_URL}/saida`, data);
    return response.data;
  },
};
