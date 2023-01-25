import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/user/userSlice'
import { getUserDetails } from '../features/user/userActions'
import { useEffect } from 'react'
import '../main.css';
import logo from './../img/argentBankLogo.png';

function Header() {
  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])

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
          {userInfo ? (
            <>
              <NavLink className='button me-5' to='/profile'>
                {userInfo.body.firstName}
              </NavLink>

              <NavLink className='button' to='/' onClick={() => dispatch(logout())}>
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink className='button' to='/login'>
              <i className="fa fa-user-circle"></i>

              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
