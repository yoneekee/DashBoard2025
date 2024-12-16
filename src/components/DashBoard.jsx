import React, { useState } from "react";
import styles from "../style/Dashboard.module.css";
import MenuBar from "./MenuBar";
import DashBoard1 from "./DashBoard1";
import DashBoard2 from "./DashBoard2";
import DashBoard3 from "./DashBoard3";

const DashBoard = () => {
  const dashboards = [
    { id: 0, label: "Dashboard 1", component: <DashBoard1 /> },
    { id: 1, label: "Dashboard 2", component: <DashBoard2 /> },
    { id: 2, label: "Dashboard 3", component: <DashBoard3 /> },
  ];

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
      <div className={styles.container}>
        <button className={styles.btn} onClick={handlePrev}>
          &lt;
        </button>
        {dashboards[currentIndex].component}
        <button className={styles.btn} onClick={handleNext}>
          &gt;
        </button>
      </div>

      <MenuBar
        menus={dashboards}
        activeMenu={currentIndex}
        onMenuClick={setCurrentIndex}
      />
    </div>
  );
};

export default DashBoard;
