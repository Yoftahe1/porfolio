import React from "react";
import { RiMedalFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import {IoIosArrowForward}from 'react-icons/io'
import { Link } from "react-scroll";
import image from "../assets/about.webp";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.about} name="about">
      <h2>About-Me</h2>
      <div className={styles.container}>
        <img src={image} className={styles.image} alt="profile" />
        <div className={styles.description}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <RiMedalFill />
              <p className={styles.title}>Education</p>
              <p>
                Hawassa University
                <br />
                Computer Science
              </p>
            </div>
            <div className={styles.card}>
              <MdFavoriteBorder />
              <p className={styles.title}>Passion</p>
              <p>
                Codding
                <br />
                Learning
              </p>
            </div>
            <div className={styles.card}>
              <IoPersonOutline />
              <p className={styles.title}>Personality</p>
              <p>
                Motivated
                <br />
                Punctual
              </p>
            </div>
          </div>
          <p className={styles.paragraph}>
            I am <b>YOFTAHE MERKEBU</b> currently pursuing my B.S.C in Computer
            Science degree at Hawassa University. I am always dedicated to my
            work and complete my work in a given time. in my spare time I like
            to code and read. I am passionate about my work and always try to
            learn new things to improve myself day by day.
          </p>
          <Link className={styles.button} to="contact" smooth duration={500}>
            Let's Talk <IoIosArrowForward/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
