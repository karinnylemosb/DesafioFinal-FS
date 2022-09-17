import { Link, Outlet } from "react-router-dom";
import logo from "../images/zoo-logo.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
        <li> <img className="image-logo" src={logo} alt="oi"/>
        </li>
          <li>
            <Link to = "/"> HOME</Link>
          </li>
          <li>
            <Link to = "/animals">ANIMALS</Link>
          </li>
          <li>
            <Link to = "/animalgallery" >GALLERY</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;