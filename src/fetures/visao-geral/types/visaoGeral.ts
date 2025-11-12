export interface Entradas {
  id: string;
  motivo: string | null;
  data: Date;
  produtoId: string;
}

export interface Saidas {
  id: string;
  motivo: string | null;
  data: Date;
  produtoId: string;
}

export interface Produtos {
  id: string;
  nome: string;
  descricao: string;
  codigo: string;
  quantidade: number;
}
