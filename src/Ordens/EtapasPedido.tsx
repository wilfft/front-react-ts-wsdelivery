const EtapasPedido = () => (
  <header className="etapas-container">
    <div className="etapas-conteudo">
      <h1 className="etapas-titulo">
        Siga as <br /> etapas
      </h1>
      <ul className="etapas-items">
        <li>
          <span className="etapas-numero">1</span>
          Selecione os produtos e sua localização
        </li>
        <li>
          <span className="etapas-numero">2</span>
          Depois clique em <strong>"ENVIAR PEDIDO"</strong>
        </li>
      </ul>
    </div>
  </header>
);

export default EtapasPedido;
