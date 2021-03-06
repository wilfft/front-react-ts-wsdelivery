import { formataPreco } from "./funcoesAuxiliares";

type Props = {
  quantidade: number;
  valorTotal: number;
  onSubmit: () => void;
};

const ResumoOrdem = ({ quantidade, valorTotal, onSubmit }: Props) => (
  <div className="ordem-resumo-container">
    <div className="ordem-resumo-conteudo">
      <div>
        <span className="quantidade-selecionada-container">
          <strong className="quantidade-selecionada">{quantidade}</strong>
          PEDIDOS SELECIONADOS
        </span>
        <span className="ordem-resumo-total">
          <strong className="quantidade-selecionada">
            {formataPreco(valorTotal)}
          </strong>
          VALOR TOTAL
        </span>
      </div>
      <button onClick={onSubmit} className="ordem-resumo-realizar-ordem">
        FAZER PEDIDO
      </button>
    </div>
  </div>
);

export default ResumoOrdem;
