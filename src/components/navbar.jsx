import { Link, Outlet } from "react-router-dom";
import logo from "../images/zoo-logo.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
        <li> <Link to = "/"> <img className="image-logo" src={logo} alt="oi"/> </Link>
        </li>
          <li>
            <Link to = "/" className="menu"> HOME</Link>
          </li>
          <li>
            <Link to = "/animals" className="menu">ANIMALS</Link>
          </li>
          <li>
            <Link to = "/animalgallery" className="menu" >GALLERY</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;