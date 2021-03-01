import { Produto } from "./types";

export const verificaSeEstaSelecionado = (
  produtosSelecionados: Produto[],
  produto: Produto
) => {
  return produtosSelecionados.some((item) => item.id === produto.id);
};

export const formataPreco = (preco: number) => {
  const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatador.format(preco);
};
