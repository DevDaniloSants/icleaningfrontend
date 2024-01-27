// Styles
import styles from './index.module.css';

// Components
import Navbar from '../Navbar';

// hooks
import { useMenu } from '../../hooks/useMenu';

const Header = () => {
  const { open, toggleMenu } = useMenu();

  // check if menu is open and add class active
  const buttonClasses = `${styles.hamburguer} ${open ? styles.active : ''}`;

  return (
    <header>
      <div className={styles.header_start}>
        <span className={styles.logo}>
          Icl<span>ea</span>ning
        </span>
        <button className={buttonClasses} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <Navbar open={open} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
