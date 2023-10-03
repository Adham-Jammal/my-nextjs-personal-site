import Image from "next/image";
import certificatesData from "@/Data/certificatesData.json";
const CertificatesTab = ({ styles }) => {
  return (
    <>
      <div className={styles.certificatesRow}>
        {certificatesData.map((certificate) => (
          <div className={styles.certificateCard} key={certificate.id} data-aos="fade-up">
            <Image
              src={certificate.image}
              width={400}
              height={250}
              alt={certificate.name}
            ></Image>
            <div className={styles.certificateInfo}>
              <h3 className={styles.certificateName}>{certificate.name}</h3>
              <span className={styles.certificateSource}>
                {certificate.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CertificatesTab;
