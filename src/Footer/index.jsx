import "./styles.css";
import { ReactComponent as Github } from "./github.svg";

import { ReactComponent as Linkedin } from "./linkedin.svg";

const Footer = () => (
  <footer className="footer">
    App desenvolvido por William Moraes da Silva, com Java no Back, React no
    Front e usando Postgres como banco de dados.
    <div className="footer-icones">
      <a href="teste" target="_new">
        <Github className="github-icon" />
      </a>
      <a href="teste" target="_new">
        <Linkedin className="linkedin-icon" />
      </a>
    </div>
  </footer>
);
export default Footer;
