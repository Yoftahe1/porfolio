import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fire";
// import { GoArrowDown } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import styles from "./works.module.css";
const Works = () => {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    async function getCollection() {
      const querySnapshot = await getDocs(collection(db, "websites"));
      let newWebsites = [];
      querySnapshot.forEach((doc) => {
        newWebsites.push(doc.data());
      });
      setWebsites(newWebsites);
    }
    getCollection();
  }, []);
  return (
    <div className={styles.works} name="works">
      <h2 className={styles.title}>My Works</h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {websites.map((element, index) => {
            return (
              <div className={styles.work} key={index}>
                {/* <div className={styles.topPane}>
                  <GoArrowDown />
                  <p className={styles.header}>{element.title}</p>
                  <div className={styles.description}>
                    {element.description}
                  </div>
                </div> */}
                <img
                  className={styles.image}
                  src={element.image}
                  alt={element.title}
                />
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
