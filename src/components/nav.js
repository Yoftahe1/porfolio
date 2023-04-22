import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./mobileNav";
import { Link } from "react-scroll";
import styles from "./nav.module.css";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav && <MobileNav setShowNav={setShowNav} />}
      <div className={styles.nav}>
        <div className={styles.title}>YOFTAHE</div>
        <div className={styles.navButtons}>
          <Link to="home" smooth duration={500} spy={true} activeClass={styles.active} offset={-150}>
            Home<div className={styles.hover}></div>
          </Link>
          <Link to="skills" smooth duration={500} spy={true} activeClass={styles.active} offset={-150}>
            Skills<div className={styles.hover}></div>
          </Link>
          <Link to="about" smooth duration={500} spy={true} activeClass={styles.active} offset={-150}>
            About-Me<div className={styles.hover}></div>
          </Link>
          <Link to="works" smooth duration={500} spy={true} activeClass={styles.active} offset={-150}>
            Projects<div className={styles.hover}></div>
          </Link>
          <Link to="contact" smooth duration={500} spy={true} activeClass={styles.active} offset={-150}>
            Contact-Me<div className={styles.hover}></div>
          </Link>
          <GiHamburgerMenu onClick={() => setShowNav(true)} />
        </div>
      </div>
    </>
  );
};

export default Nav;
