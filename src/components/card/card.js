import  { useState } from "react";

import { SiGithub } from "react-icons/si";
import { AiOutlineEye } from "react-icons/ai";

import styles from "./card.module.css";

const Card = ({ element }) => {
  const [buttons, setButtons] = useState(false);
  return (
    <div
      className={styles.card}
      onMouseOver={() => setButtons(true)}
      onMouseLeave={() => setButtons(false)}
    >
      <div className={styles.container}>
        {buttons && (
          <div
            className={styles.background}
          >
            {element.link && (
              <a
                href={element.link}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                <AiOutlineEye />
              </a>
            )}
            <a
              href={element.git}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              <SiGithub />
            </a>
          </div>
        )}
        <img className={styles.image} src={element.image} alt={element.title} />
      </div>
      <div className={styles.title}>{element.title}</div>
    </div>
  );
};

export default Card;
