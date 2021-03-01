import { formataPreco } from "./funcoesAuxiliares";

type Props = {
  quantidade: number;
  valorTotal: number;
};

const ResumoOrdem = ({ quantidade, valorTotal }: Props) => (
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
      <button className="ordem-resumo-realizar-ordem">FAZER PEDIDO</button>
    </div>
  </div>
);

export default ResumoOrdem;
