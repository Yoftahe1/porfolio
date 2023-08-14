import { useState } from "react";

import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

import links from "../../constants/navigation";
import MobileNav from "../mobileNav/mobileNav";

import styles from "./nav.module.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav && <MobileNav setShowNav={setShowNav} />}
      <div className={styles.nav}>
        <div className={styles.title}>YOFTAHE</div>
        <div className={styles.navButtons}>
          {links.map((element, index) => {
            return (
              <Link
              key={index}
                to={element}
                smooth
                duration={500}
                spy={true}
                activeClass={styles.active}
                offset={-75}
              >
                {element}
                <div className={styles.hover}></div>
              </Link>
            );
          })}

          <GiHamburgerMenu onClick={() => setShowNav(true)} />
        </div>
      </div>
    </>
  );
};

export default Nav;
