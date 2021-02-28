import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AsyncSelect from "react-select/async";

const position = {
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
  const [endereco, setEndereco] = useState<Local>({});

  const loadOptions = async (
    inputValue: string,
    callback: (places: Place[]) => void
  ) => {
    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return {
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0],
        },
        place: item.place_name,
      };
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setEndereco(local);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!,
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

        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
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
