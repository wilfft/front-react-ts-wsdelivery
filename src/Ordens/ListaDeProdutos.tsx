import ProdutoCard from "./ProdutoCard";
import { Produto } from "./types";

type Props = {
  produtos: Produto[];
};
function ListaDeProdutos({ produtos }: Props) {
  return (
    <div className="lista-produtos-container">
      <div className="lista-produtos-itens">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ListaDeProdutos;
