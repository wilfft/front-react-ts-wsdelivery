export type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imageUri: string;
};

export type LocalizacaoDaOrdemData = {
  latitude: number;
  longitude: number;
  endereco: string;
};

type ProdutoId = {
  id: number;
};

export type OrdemPayload = {
  produtos: ProdutoId[];
} & LocalizacaoDaOrdemData; //fazendo MERGE entre objetos
