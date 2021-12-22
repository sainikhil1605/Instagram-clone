import { NavbarStyles } from './Navbar.styles';
const Navbar = () => {
  const styles = NavbarStyles();
  return (
    <div className={styles.nav}>
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram"
        className={styles.logo}
      />
    </div>
  );
};
export default Navbar;
