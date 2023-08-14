import { Link } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";

import image from "../../assets/heroImage.png";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home} name="Home">
      <div className={styles.container}>
        <div>
          <p className={styles.introduction}>
            HEY 👋
            <br /> I'M <span>YOFTAHE MERKEBU</span> FULLSTACK DEVELOPER
          </p>
          <h1 className={styles.description}>
            I DEVELOP WEBSITE AND APPLICATION FOR CLIENTS
          </h1>
          <Link
            className={styles.button}
            to="Projects"
            smooth
            duration={500}
            offset={-75}
          >
            EXPLORE WORKS <IoIosArrowForward />
          </Link>
        </div>
        <img className={styles.image} src={image} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
