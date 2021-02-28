import { ReactComponent as PizzaImg } from "./imagemPizza.svg";

const ProdutoCard = () => (
  <div className="produto-card-container">
    <h3 className="produto-card-titulo">Pizza de Calabresa</h3>
    <PizzaImg className="produto-card-img" />
    <h3 className="produto-card-preco">39,90</h3>
    <div className="produto-card-descricao">
      <h3>Descriçao:</h3>
      <p>
        Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas
        frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa
        especial.
      </p>
    </div>
  </div>
);

export default ProdutoCard;
