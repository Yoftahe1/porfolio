import React from "react";
import { RiMedalFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.about} id="about">
      <h2>About-Me</h2>
      <div className={styles.container}>
        <img className={styles.image} alt="profile"/>
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
              <p className={styles.title}>passion</p>
              <p>I like to code</p>
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
          <a className={styles.button} href="#contact">Let's Talk</a>
        </div>
      </div>
    </div>
  );
};

export default About;
