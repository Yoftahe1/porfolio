import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import styles from "./mobileNav.module.css";
const MobileNav = (props) => {
  return createPortal(
    <>
      <div className={styles.mobileNav}>
        <div className={styles.header}>
          <div className={styles.title}>YOFTAHE</div>
          <AiOutlineClose onClick={() => props.setShowNav(false)} />
        </div>
        <Link
          className={styles.link}
          onClick={() => props.setShowNav(false)}
          to="home"
          smooth
          duration={500}
          spy={true}
          activeClass={styles.active}
          offset={-150}
        >
          Home<div className={styles.hover}></div>
        </Link>
        <Link
          className={styles.link}
          onClick={() => props.setShowNav(false)}
          to="skills"
          smooth
          duration={500}
          spy={true}
          activeClass={styles.active}
          offset={-150}
        >
          Skills<div className={styles.hover}></div>
        </Link>
        <Link
          className={styles.link}
          onClick={() => props.setShowNav(false)}
          to="about"
          smooth
          duration={500}
          spy={true}
          activeClass={styles.active}
          offset={-150}
        >
          About-Me<div className={styles.hover}></div>
        </Link>
        <Link
          className={styles.link}
          onClick={() => props.setShowNav(false)}
          to="works"
          smooth
          duration={500}
          spy={true}
          activeClass={styles.active}
          offset={-150}
        >
          Projects<div className={styles.hover}></div>
        </Link>
        <Link
          className={styles.link}
          onClick={() => props.setShowNav(false)}
          to="contact"
          smooth
          duration={500}
          spy={true}
          activeClass={styles.active}
          offset={-150}
        >
          Contact-Me<div className={styles.hover}></div>
        </Link>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default MobileNav;
