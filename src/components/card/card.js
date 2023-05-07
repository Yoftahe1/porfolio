import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import styles from "./card.module.css";
const Card = ({element}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={element.image} alt={element.title} />
      <div className={styles.bottomPane}>
        <p className={styles.title}>{element.title}</p>
        <div className={styles.buttons}>
          <a
            href={element.link}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            <AiOutlineEye />
          </a>
          <a
            href={element.git}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
