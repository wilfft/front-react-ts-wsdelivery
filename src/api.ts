import axios from "axios";

const API_URL = "https://spring-app-delivery.herokuapp.com";
export function carregaProdutos() {
  return axios(`${API_URL}/produtos`);
}
