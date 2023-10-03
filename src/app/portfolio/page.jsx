import Image from "next/image";
import styles from "./page.module.css";
import portfolioData from "@/Data/portfolioData.json";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolioPageTitle} data-aos="fade-down">Portfolio</h2>
      <div className={styles.portfolioRow}>
        {portfolioData.map((project)=>(
          <div className={styles.imgWrap} key={project.id} data-aos="zoom-in">
          <Image src={project.image} fill alt={project.projectName}/>
        </div>
        ))}
        
      </div>
    </section>
  );
};

export default Portfolio;
