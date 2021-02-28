import axios from "axios";

const API_URL = "https://spring-app-delivery.herokuapp.com";
const mapboxToken = "";

export function carregaProdutos() {
  return axios(`${API_URL}/produtos`);
}

export function carregaLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}
