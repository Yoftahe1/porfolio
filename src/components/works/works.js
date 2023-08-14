import {ScaleLoader} from "react-spinners"

import Card from "../card/card";
import useFetchWorks from "../../hooks/useFetchWorks";

import styles from "./works.module.css";

const Works = () => {
  let { isLoading, projects } = useFetchWorks();

  return (
    <div className={styles.works} name="Projects">
      <h2 className={styles.title}>
        My Creative <span>Project</span> Section
      </h2>
      {isLoading ? (
        <div className={styles.loading}>
          <ScaleLoader color="#46b3f0" height={50} width={10}/>
        </div>
      ) : (
        <div className={styles.grid}>
          {projects.map((element, index) => {
            return <Card element={element} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Works;
