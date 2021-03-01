const ResumoOrdem = () => (
  <div className="ordem-resumo-container">
    <div className="ordem-resumo-conteudo">
      <div>
        <span className="quantidade-selecionada-container">
          <strong className="quantidade-selecionada">2</strong>
          PEDIDOS SELECIONADOS
        </span>
        <span className="ordem-resumo-total">
          <strong className="quantidade-selecionada">R$ 50,00</strong>
          VALOR TOTAL
        </span>
      </div>
      <button className="ordem-resumo-realizar-ordem">FAZER PEDIDO</button>
    </div>
  </div>
);

export default ResumoOrdem;
