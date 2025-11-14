import axios from "axios";
import { entrada } from "../types/entrada";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const entradaService = {
  async postEntrada(data: entrada): Promise<entrada> {
    const response = await axios.post(`${API_BASE_URL}/entrada`, data);
    return response.data;
  },
};
