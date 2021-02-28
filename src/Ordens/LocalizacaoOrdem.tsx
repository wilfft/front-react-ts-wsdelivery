import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AsyncSelect from "react-select/async";
import { useState } from "react";

const posicaoInicial = {
  lat: -23.2798068,
  lng: -47.2713556,
};
type Local = {
  label?: string;
  valor?: string;
  posicao: {
    lat: number;
    lng: number;
  };
};

const LocalizacaoOrdem = () => {
  const [endereco, setEndereco] = useState<Local>({
    posicao: posicaoInicial,
  });

  const loadOptions = async (
    inputValue: string,
    callback: (places: Place[]) => void
  ) => {
    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return {
        label: item.place_name,
        valor: item.place_name,
        posicao: {
          lat: item.center[1],
          lng: item.center[0],
        },
        place: item.place_name,
      };
    });

    callback(places);
  };

  const handleChangeSelect = (local: Local) => {
    setEndereco(local);
    onChangeLocation({
      latitude: local.posicao.lat,
      longitude: local.posicao.lng,
      endereco: local.label!,
    });
  };
  return (
    <div className="ordem-localizacao-container">
      <div className="ordem-localizacao-conteudo">
        <h3 className="ordem-localizacao-titulo">
          Selecione onde o pedido deve ser entregue:
        </h3>
        <div className="ordem-localizacao-endereco-container">
          <AsyncSelect
            placeholder="Digite um endereço para entregar o pedido"
            className="campo-endereco"
          />
        </div>

        <MapContainer center={posicaoInicial} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={posicaoInicial}>
            <Popup>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "open sans",
                  fontWeight: "bold",
                }}
              >
                Estou <br /> Aqui!
              </p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocalizacaoOrdem;
