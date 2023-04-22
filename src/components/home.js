import React from "react";
import image from "../assets/heroImage.png";
import { Link } from "react-scroll";
import {IoIosArrowForward}from 'react-icons/io'
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.home} name="home">
      <div className={styles.container}>
        <div>
          <p className={styles.introduction}>
            HEY 👋
            <br /> I'M YOFTAHE MERKEBU FULLSTACK DEVELOPER
          </p>
          <h1 className={styles.description}>
            I DESIGN WEBSITE AND APPLICATION FOR CLIENTS
          </h1>
          <Link className={styles.button} to="works" smooth duration={500}>
            EXPLORE WORKS <IoIosArrowForward/>
          </Link>
        </div>
        <img className={styles.image} src={image} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
