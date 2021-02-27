import "./styles.css";
import { ReactComponent as Logo } from "./logoMoto.svg";
const Navbar = () => (
  <nav className="navbar">
    <Logo />
    <a href="home" className="logo-texto">
      Ws Delivery
    </a>
  </nav>
);
export default Navbar;
