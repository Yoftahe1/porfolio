import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Skill from "../skill/skill";
import skills from "../../constants/skills";

import styles from "./skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".skills_container__lSck3",
            toggleActions: "play reverse play reverse",
            start: "top 90%",
            end: "bottom 20%",
          },
        })
        .from(".skills_container__lSck3", { y: 10, opacity: 0 });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.skills} ref={containerRef} name="Skills">
      <h2 className={styles.title}>
        Explore <span> Expertise</span> & <span>Skill</span> Set
      </h2>
      <div className={styles.container}>
        {skills.map((element, index) => {
          return (
            <div className={styles.skill} key={index}>
              <Skill element={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
