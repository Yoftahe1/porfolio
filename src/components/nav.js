import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./mobileNav";
import styles from "./nav.module.css";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav&&<MobileNav setShowNav={setShowNav}/>}
      <div className={styles.nav}>
        <div className={styles.title}>YOFTAHE</div>
        <div className={styles.navButtons}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About-Me</a>
          <a href="#works">Projects</a>
          <a href="#contact">Contact-Me</a>
          <GiHamburgerMenu onClick={()=>setShowNav(true)}/>
        </div>
      </div>
    </>
  );
};

export default Nav;
