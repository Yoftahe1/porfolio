import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./skills.module.css";
import skills from "../../constants/skills";
import Skill from "../skill/skill";
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
            start: "top 70%",
            end: "bottom 30%",
          },
        })
        .from(".skills_skill__k8Ic7", { y: 10, opacity: 0 });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.skills} ref={containerRef} name="skills">
      <h2 className="h2">My Skills</h2>
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
