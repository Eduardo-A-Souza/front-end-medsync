import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const excluirService = {
  /**
   * Delete a product by name using the backend endpoint:
   * DELETE /produto/deleteByName/:nome
   */
  async deleteProdutoByName(nome: string): Promise<void> {
    await axios.delete(
      `${API_BASE_URL}/produto/deleteByName/${encodeURIComponent(nome)}`
    );
  },
};
