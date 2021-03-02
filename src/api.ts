import axios from "axios";
import { OrdemPayload } from "./Ordens/types";

const API_URL = "https://spring-app-delivery.herokuapp.com";
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function carregaProdutos() {
  return axios(`${API_URL}/produtos`);
}

export function carregaLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}

export const salvarOrdem = (payload: OrdemPayload) => {
  return axios.post(`${API_URL}/ordens`, payload);
};
