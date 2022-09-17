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
            <> HOME</>
          </li>
          <li>
            <>ANIMALS</>
          </li>
          <li>
            <>GALLERY</>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;