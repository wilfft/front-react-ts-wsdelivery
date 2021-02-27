import "./styles.css";
import { ReactComponent as Logo } from "./logoMoto.svg";
import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar">
    <Logo />
    <Link to="home" className="logo-texto">
      Ws Delivery
    </Link>
  </nav>
);
export default Navbar;
