import "./styles.css";
import { ReactComponent as Logo } from "./Logo.svg";
const Home = () => (
  <div className="home-container">
    <div className="home-conteudo">
      <div className="home-acoes">
        <h1 className="home-titulo">
          Faça seu pedido <br /> que entregamos
          <br />
          pra você ! ! !
        </h1>
        <h3 className="home-subtitulo">
          Escolha seu pedido e em poucos minutos <br /> levaremos para sua porta
          :)
        </h3>
        <a href="home" className="home-btn">
          FAZER PEDIDO
        </a>
      </div>

      <div className="home-imagem">
        <Logo />
      </div>
    </div>
  </div>
);
export default Home;
