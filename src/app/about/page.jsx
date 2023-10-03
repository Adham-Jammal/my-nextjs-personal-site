import styles from "./page.module.css";
export const metadata = {
  title: `Get to Know Adham`,
}
const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle} data-aos="zoom-in">
          About Me
        </h2>
        <p className={styles.aboutDescription} data-aos="zoom-out">
          Passionate front-end web developer with a talent for crafting visually
          stunning and user-centric digital experiences using the power of
          ReactJS. Proficient in HTML, CSS, and JavaScript, I have a proven
          track record of designing and optimizing websites that captivate and
          engage users. Adept at seamlessly transforming design concepts into
          fully functional responsive websites.
        </p>
      </div>
    </section>
  );
};
export default About;
