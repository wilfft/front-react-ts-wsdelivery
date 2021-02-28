import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocalizacaoOrdem = () => (
  <div className="ordem-localizacao-container">
    <div className="ordem-localizacao-conteudo">
      <h3 className="ordem-localizacao-titulo">
        Selecione onde o pedido deve ser entregue:
      </h3>
      <div className="ordem-localizacao-campo-endereco"></div>
    </div>
  </div>
);

export default LocalizacaoOrdem;
