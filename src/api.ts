import axios from "axios";
import { OrdemPayload } from "./Ordens/types";

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function carregaProdutos() {
  return axios(`https://spring-app-delivery.herokuapp.com/produtos`);
}

export function carregaLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}

export const salvarOrdem = (payload: OrdemPayload) => {
  return axios.post(
    `https://spring-app-delivery.herokuapp.com/ordens`,
    payload
  );
};
