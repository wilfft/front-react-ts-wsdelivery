import { Produto } from "./types";

export function verificaSeEstaSelecionado(
  produtosSelecionados: Produto[],
  produto: Produto
) {
  return produtosSelecionados.some((item) => item.id === produto.id);
}
