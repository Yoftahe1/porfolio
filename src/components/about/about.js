import { Link } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";

import image from "../../assets/about.webp";
import aboutList from "../../constants/about";

import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about} name="About-Me">
      <h2 className={styles.header}>
        So Who is <span>Yoftahe Merkebu</span>?
      </h2>
      <div className={styles.container}>
        <img src={image} className={styles.image} alt="profile" />
        <div className={styles.description}>
          <div className={styles.cardContainer}>
            {aboutList.map((about, index) => {
              return (
                <div key={index} className={styles.card}>
                  {about.icon}
                  <p className={styles.title}>{about.title}</p>
                  <p className={styles.description}>
                    {about.description[0]}
                    <br />
                    {about.description[1]}
                  </p>
                </div>
              );
            })}
          </div>

          <p className={styles.paragraph}>
            I'm<span className={styles.name}> YOFTAHE MERKEBU </span>a full
            stack developer from Hawassa who possess an extensive knowledge and
            experience in various programming languages, front-end and back-end
            technologies. I have gained the relevant qualifications and skills
            from my education and work experience, and l'm confident in my
            ability to manage complex projects, problem solving skill,fast
            learning skill and ability to work collaboratively.If you're
            searching for full stack developer search no more press the button
            below.
          </p>
          <Link
            className={styles.button}
            to="contact"
            smooth
            duration={500}
            offset={-75}
          >
            Let's Talk <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
