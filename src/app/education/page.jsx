"use client";

import styles from "./page.module.css";
import EducationsButtons from "./components/EducationsButtons";
import EducationTab from "./components/EducationTab";
import CertificatesTab from "./components/CertificatesTab";
import { useState } from "react";
const Education = () => {
  const [currentTab, setCurrentTab] = useState("Education");
  const handleTabChange = (value) => {
    setCurrentTab(value);
  };
  return (
    <section className={styles.education}>
      <div className={styles.educationContainer}>
        <EducationsButtons styles={styles} onTabChange={handleTabChange} />
        {currentTab === "Education" && <EducationTab styles={styles} />}
        {currentTab === "Certificates" && <CertificatesTab styles={styles} />}
      </div>
    </section>
  );
};

export default Education;
