import React from "react";
import styles from "../../style/Secondary1.module.css";

const Secondary1 = () => {
  return (
    <div className={styles.secondary}>
      <div className={styles.title}>Status Overview</div>
      <div className={styles.content}>
        <div className={styles.graphContainer}>
          <div className={styles.graphPlaceholder}>Graph Area</div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statTitle}>Unread</div>
            <div className={styles.statValue}>102</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statTitle}>Approaching</div>
            <div className={styles.statValue}>25</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statTitle}>Overdue</div>
            <div className={styles.statValue}>540</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary1;
