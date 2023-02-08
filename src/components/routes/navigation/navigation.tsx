import { Outlet, Link } from 'react-router-dom';

// Imgs
import { ReactComponent as Logo } from 'assets/crown.svg';

// Styles
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to={'/'}>
          <Logo className="logo-container" />
        </Link>
        <div className="nav-links-container">
          <Link to={'/shop'} className="nav-link">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
