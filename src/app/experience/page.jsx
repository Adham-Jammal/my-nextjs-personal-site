import styles from "./page.module.css";
import experienceData from "@/Data/experienceData.json";
export const metadata = {
  title: `Adham's Work Experience`,
};
const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.experiencePageTitle} data-aos="fade-down">
        Work Experience
      </h2>
      <section className={styles.experienceSection}>
        {experienceData.map((experience) => (
          <div
            className={styles.experienceCard}
            key={experience.id}
            data-aos="fade-up"
          >
            <div className={styles.experienceDate}>
              <span>{experience.date}</span>
            </div>
            <div className={styles.experienceContent}>
              <h3 className={styles.experiencePosition}>
                {experience.position}
              </h3>
              <p className={styles.employer}>{experience.employer}</p>
              <ul className={styles.description}>
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {experience.reviews && (
                <div className={styles.reviews}>
                  <h4>Client Reviews:</h4>
                  <ul>
                    {experience.reviews.map((review, index) => (
                      <li key={index}>
                        {Object.entries(review).map(([platform, link]) => (
                          <p key={platform}>
                            {platform}:{" "}
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link}
                            </a>
                          </p>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Experience;
