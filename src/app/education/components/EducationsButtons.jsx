"use client";
import React, { useState } from "react";
const EducationsButtons = ({ styles, onTabChange }) => {
  const [currentTab, setCurrentTab] = useState("Education");
  const handelChange = (value) => {
    setCurrentTab(value);
    onTabChange(value);
  };

  return (
    <div className={styles.buttonsArea} data-aos="fade-down">
      <button
        className={currentTab === "Education" ? styles.active : ""}
        onClick={() => handelChange("Education")}
      >
        Education
      </button>
      <button
        className={currentTab === "Certificates" ? styles.active : ""}
        onClick={() => handelChange("Certificates")}
      >
        Certificates
      </button>
    </div>
  );
};

export default EducationsButtons;
