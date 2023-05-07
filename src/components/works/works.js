import Card from "../card/card";
import useFetchWorks from "../../hooks/useFetchWorks";
import styles from "./works.module.css";
const Works = () => {
  const websites = useFetchWorks();
  return (
    <div className={styles.works} name="works">
      <h2 className={styles.title}>My Works</h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {websites.map((element, index) => {
            return (
              <Card element={element} key={index}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
