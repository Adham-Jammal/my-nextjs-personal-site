import educationData from "@/Data/educationData.json";

const EducationTab = ({ styles }) => {
  return (
    <>
      {educationData.map((degree) => (
        <div className={styles.educationRow} key={degree.id} data-aos="fade-up">
          <div className={styles.dateCol}>
            <span className={styles.degreeDate}>{degree.date}</span>
          </div>
          <div className={styles.infoCol}>
            <h3 className={styles.degree}>{degree.degree}</h3>
            <span className={styles.university}>{degree.university}</span>
            <p className={styles.description}>{degree.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default EducationTab;
