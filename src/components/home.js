import React from "react";
import image from "../assets/image.png";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.container}>
        <div >
          <p className={styles.introduction}>I'M YOFTAHE FULLSTACK DEVELOPER</p>
          <h1 className={styles.description}>
            I DESIGN WEBSITE AND APPLICATION FOR CLIENTS
          </h1>
          <a className={styles.button} href="#works">EXPLORE WORKS</a>
        </div>
        <img className={styles.image} src={image} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
