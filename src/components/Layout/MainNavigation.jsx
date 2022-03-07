import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./MainNavigation.scss";
import { loginActions } from "./../../store/loginSlice";

const MainNavigation = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <header className="header">
      <div className="main-header">
        <div>
          <Link to="/home" className="main-header__brand">
            Logo
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            {!isLogin && (
              <li className="main-nav__item">
                <NavLink to="/login">Product</NavLink>
              </li>
            )}
            <li className="main-nav__item">
              <NavLink to="#">
                <span>
                  <i className="fa fa-heart-o" aria-hidden="true" />
                </span>
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink to="#">
                <span>
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                </span>
              </NavLink>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              {!isLogin && <NavLink to="/login">Start Buy</NavLink>}
            </li>
            <li className="main-nav__item main-nav__item--cta">
              {isLogin && (
                <NavLink to="/introduction" onClick={logoutHandler}>
                  Logout
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
