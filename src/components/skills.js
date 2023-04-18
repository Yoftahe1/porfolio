import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import styles from "./skills.module.css";
const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
        <h2>My Skills</h2>
      <div className={styles.container}>
        <div>
          <VscVerifiedFilled />
          <p>HTML</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>CSS</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>Javascript</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>Typescript</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>React</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>Node</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>Java</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>C++</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>MongoDB</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>MYSQL</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>Flutter</p>
        </div>
        <div>
          <VscVerifiedFilled />
          <p>Ionic</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
