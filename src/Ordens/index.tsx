import { useEffect, useState } from "react";
import EtapasPedido from "./EtapasPedido";
import ListaDeProdutos from "./ListaDeProdutos";
import { LocalizacaoOrdemData, Produto } from "./types";
import "./styles.css";
import { carregaProdutos } from "../api";
import LocalizacaoOrdem from "./LocalizacaoOrdem";

const Ordens = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [
    localizacaoOrdem,
    setLocalizacaoOrdem,
  ] = useState<LocalizacaoOrdemData>();

  useEffect(() => {
    carregaProdutos()
      .then((response) => setProdutos(response.data))
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className="ordens-container">
      <EtapasPedido />
      <ListaDeProdutos produtos={produtos} />
      <LocalizacaoOrdem
        onChangeLocalizacao={(localizacao) => setLocalizacaoOrdem(localizacao)}
      />
    </div>
  );
};
export default Ordens;
