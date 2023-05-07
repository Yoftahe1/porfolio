import React from "react";
import styles from "./skill.module.css"
const Skill = ({element}) => {
  return (
    <div className={styles.skill}>
      <div className={element.className + " " + styles.imgContainer}>
        <img className={styles.image} src={element.image} alt={element.title} />
      </div>
      <p>{element.title}</p>
    </div>
  );
};

export default Skill;
