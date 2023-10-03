import Image from "next/image";
import styles from "./page.module.css";
import socialMediaData from "../Data/socialMediaData.json";
export default function Home() {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imageContent} data-aos="fade-right">
          <Image
            src="/images/me.jfif"
            width={400}
            height={400}
            alt="Adham's Image"
            data-aos="flip-right"
          />
        </div>
        <div className={styles.infoContent} data-aos="fade-right">
          <div className={styles.content}>
            <div className={styles.generalInfo} data-aos="fade-right">
              <h1 className={styles.fullName}>Adham Jammal</h1>
              <p className={styles.position}>Front-End Developer</p>
            </div>
            <div className={styles.buttonsArea}>
              <a href="/files/Adham_Jammal_CV.pdf">Resume</a>
              <a href="https://mostaql.com/u/Triple__A">Hire Me</a>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <ul>
              {socialMediaData.map((e) => (
                <li key={e.id}>
                  <a href={e.link}>
                    <Image
                      src={e.icon}
                      width={28}
                      height={28}
                      alt={e.platformName}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
