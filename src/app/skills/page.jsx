import React from "react";
import styles from "./page.module.css";
import technicalSkillsData from "@/Data/technicalSkillsData.json";
import nonTechnicalSkillsData from "@/Data/nonTechnicalSkillsData.json";
export const metadata = {
  title: `Adham's Expertise`,
}
const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.skillsPageTitle} data-aos="fade-down">Skills</h2>
      <div className={styles.skillsContainer} data-aos="fade-up">
        <div className={styles.TechnicalSkills}>
          <h3 className={styles.title}>Technical Skills</h3>
          <ul className={styles.technicalSkillsList}>
            {technicalSkillsData.map((skill) => (
              <li key={skill.key}>- {skill.skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.nonTechnicalSkills}>
          <h3 className={styles.title}>Non Technical Skills</h3>
          <ul className={styles.nonTechnicalSkillsList}>
          {nonTechnicalSkillsData.map((skill) => (
              <li key={skill.key}>- {skill.skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
