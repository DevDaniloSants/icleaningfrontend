import styles from './index.module.css';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navbar = ({ open, toggleMenu }) => {
  return (
    <nav
      className={`${
        open ? styles.active + ' ' + styles.navbar : styles.navbar
      }`}
    >
      <ul>
        <li>
          <Link to="/" onClick={open ? toggleMenu : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/customers" onClick={open ? toggleMenu : ''}>
            Clientes
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={open ? toggleMenu : ''}>
            Registrar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Navbar;
