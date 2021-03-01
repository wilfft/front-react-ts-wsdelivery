import ProdutoCard from "./ProdutoCard";
import { Produto } from "./types";
import { verificaSeEstaSelecionado } from "./funcoesAuxiliares";

type Props = {
  produtos: Produto[];
  produtosSelecionados: Produto[];
  aoSelecionarProduto: (produto: Produto) => void;
};

function ListaDeProdutos({
  produtos,
  produtosSelecionados,
  aoSelecionarProduto,
}: Props) {
  return (
    <div className="lista-produtos-container">
      <div className="lista-produtos-itens">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
            aoSelecionarProduto={aoSelecionarProduto}
            estaSelecionado={verificaSeEstaSelecionado(
              produtosSelecionados,
              produto
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaDeProdutos;
