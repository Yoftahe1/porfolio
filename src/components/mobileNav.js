import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./mobileNav.module.css";
const MobileNav = (props) => {
  return createPortal(
    <>
      <div className={styles.mobileNav}>
        <div className={styles.header}>
          <div className={styles.title}>YOFTAHE</div>
          <AiOutlineClose onClick={() => props.setShowNav(false)} />
        </div>
        <a
          className={styles.link}
          href="#home"
          onClick={() => props.setShowNav(false)}
        >
          Home
        </a>
        <a
          className={styles.link}
          href="#skills"
          onClick={() => props.setShowNav(false)}
        >
          Skills
        </a>
        <a
          className={styles.link}
          href="#about"
          onClick={() => props.setShowNav(false)}
        >
          About-Me
        </a>
        <a
          className={styles.link}
          href="#works"
          onClick={() => props.setShowNav(false)}
        >
          Projects
        </a>
        <a
          className={styles.link}
          href="#contact"
          onClick={() => props.setShowNav(false)}
        >
          Contact-Me
        </a>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default MobileNav;
