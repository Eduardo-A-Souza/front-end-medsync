import axios from "axios";
import { Entradas, Saidas, Produtos } from "../types/visaoGeral";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const visaoGeralService = {
  async getEntradas(): Promise<Entradas[]> {
    const response = await axios.get(`${API_BASE_URL}/entrada`);
    return response.data;
  },

  async getSaidas(): Promise<Saidas[]> {
    const response = await axios.get(`${API_BASE_URL}/saida`);
    return response.data;
  },

  async getProdutos(): Promise<Produtos[]> {
    const response = await axios.get(`${API_BASE_URL}/produto`);
    return response.data;
  },
};
