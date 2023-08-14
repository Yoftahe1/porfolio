import { createPortal } from "react-dom";

import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

import links from "../../constants/navigation";
import styles from "./mobileNav.module.css";

const MobileNav = (props) => {
  return createPortal(
    <>
      <div className={styles.mobileNav}>
        <div className={styles.header}>
          <div className={styles.title}>YOFTAHE</div>
          <AiOutlineClose onClick={() => props.setShowNav(false)} />
        </div>
        {links.map((element, index) => {
          return (
            <Link
              key={index}
              className={styles.link}
              onClick={() => props.setShowNav(false)}
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
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default MobileNav;
