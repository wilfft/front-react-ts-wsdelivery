export type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imageUri: string;
};

export type LocalizacaoOrdemData = {
  latitude: number;
  longitude: number;
  endereco: string;
};
