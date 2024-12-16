import React, { useState } from "react";
import styles from "../style/Dashboard.module.css";
import DashBoard1 from "./DashBoard1";
import DashBoard2 from "./DashBoard2";
import DashBoard3 from "./DashBoard3";

const DashBoard = () => {
  const dashboards = [<DashBoard1 />, <DashBoard2 />, <DashBoard3 />];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dashboards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dashboards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handlePrev}>
        ◀
      </button>

      {dashboards[currentIndex]}
      <button className={styles.btn} onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default DashBoard;
