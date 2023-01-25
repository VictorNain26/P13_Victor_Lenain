import { NavLink, useLocation } from "react-router-dom";
import '../main.css';
import logo from './../img/argentBankLogo.png';

function Header() {
  const { pathname } = useLocation;

  console.log(pathname);

  return (
    <header className="App-header">
      <nav className="main-nav">
        <NavLink
          to="/"
          className="main-nav-logo"
        >
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
            />

          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          <NavLink
            to="/sign-in"
            className="main-nav-item"
          >
            <i className="fa fa-user-circle"></i>

            Sign In
          </NavLink>
          { pathname === "/user:userId" ?
            <NavLink
              to="/"
              className="main-nav-item"
            >
              <i className="fa fa-sign-out"></i>

              Sign Out
            </NavLink>
            : undefined
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
