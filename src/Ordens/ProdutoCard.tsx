import { Produto } from "./types";

type Props = {
  produto: Produto;
  aoSelecionarProduto: (produto: Produto) => void;
  estaSelecionado: boolean;
};

const formataPreco = (preco: number) => {
  const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatador.format(preco);
};

const ProdutoCard = ({
  produto,
  aoSelecionarProduto,
  estaSelecionado,
}: Props) => {
  return (
    <div
      className={`produto-card-container 
      ${estaSelecionado ? "selecionado" : ""}`}
      onClick={() => aoSelecionarProduto(produto)}
    >
      <h3 className="produto-card-titulo">{produto.nome}</h3>
      <img
        src={produto.imageUri}
        className="produto-card-img"
        alt={produto.nome}
      />
      <h3 className="produto-card-preco">{formataPreco(produto.preco)}</h3>
      <div className="produto-card-descricao">
        <h3>Descriçao:</h3>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
};

export default ProdutoCard;
