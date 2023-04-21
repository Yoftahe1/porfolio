import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import api from "../assets/api.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import postgres from "../assets/postgres.png";
import mongodb from "../assets/mongodb.png";
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import flutter from '../assets/flutter.png'
import ionic from '../assets/ionic.png'
import styles from "./skills.module.css";
const Skills = () => {
  const skills = [
    { image: html, className: styles.html, title: "HTML" },
    { image: css, className: styles.css, title: "CSS" },
    { image: js, className: styles.js, title: "JAVASCRIPT" },
    { image: ts, className: styles.ts, title: "TYPESCRIPT" },
    { image: react, className: styles.react, title: "REACT" },
    { image: api, className: styles.api, title: "API" },
    { image: node, className: styles.node, title: "NODE" },
    { image: git, className: styles.git, title: "GIT" },
    { image: firebase, className: styles.firebase, title: "FIREBASE" },
    { image: postgres, className: styles.postgres, title: "POSTGRES" },
    { image: mongodb, className: styles.mongodb, title: "MONGODB" },
    { image: cpp, className: styles.cpp, title: "C++" },
    { image: java, className: styles.java, title: "JAVA" },
    { image: flutter, className: styles.flutter, title: "FLUTTER" },
    { image: ionic, className: styles.ionic, title: "IONIC" },
  ];
  return (
    <div className={styles.skills} name="skills">
      <h2>My Skills</h2>
      <div className={styles.container}>
        {skills.map((element, index) => {
          return (
            <div className={styles.skill} key={index}>
              <div className={element.className} >
                <img
                  className={styles.image}
                  src={element.image}
                  alt={element.title}
                />
              </div>
              <p>{element.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
