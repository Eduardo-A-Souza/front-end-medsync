import axios from "axios";
import { produto } from "../types/cadastrar";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const cadastrarService = {
  async postProduto(data: produto): Promise<produto> {
    const response = await axios.post(`${API_BASE_URL}/produto`, data);
    return response.data;
  },
};
