import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fire";
import { AiOutlineEye } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import styles from "./works.module.css";
const Works = () => {
  const [websites, setWebsites] = useState([]);
  const getCollection = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "websites"));

    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      setWebsites((prev) => [...prev, doc.data()]);
    });
  }, []);
  useEffect(() => {
    console.log(1);
    // async function getCollection() {
    //   const querySnapshot = await getDocs(collection(db, "websites"));

    //   querySnapshot.forEach((doc) => {
    //     setWebsites((prev) => [...prev, doc.data()]);
    //   });
    // }
    getCollection();
  }, [getCollection]);
  console.log(websites);
  return (
    <div className={styles.works} id="works">
      <h2 className={styles.title}>My Works</h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {websites.map((element, index) => {
            return (
              <div className={styles.work} key={index}>
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
