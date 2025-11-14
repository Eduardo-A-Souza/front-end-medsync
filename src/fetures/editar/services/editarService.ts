import axios from "axios";
import { Produto } from "../types/editar";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const editarService = {
  async putProduto(data: Produto): Promise<Produto> {
    const response = await axios.put(`${API_BASE_URL}/produto/editById`, data);
    return response.data;
  },
};
