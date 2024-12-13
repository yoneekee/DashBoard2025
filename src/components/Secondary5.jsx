import React from "react";
import styles from "../style/Secondary5.module.css";

const Secondary5 = () => {
  return (
    <div className={styles.secondary}>
      <div className={styles.title}>Circular Progress</div>
      <div className={styles.content}>
        <div className={styles.circleContainer}>
          <div className={styles.circle}>
            <div
              className={styles.progress}
              style={{ "--percentage": 75 }}
            ></div>
            <div className={styles.circleTxt}>75%</div>
            <div className={styles.circleDesc}>Users</div>
          </div>
          <div className={styles.circle}>
            <div
              className={styles.progress}
              style={{ "--percentage": 50 }}
            ></div>
            <div className={styles.circleTxt}>50%</div>
            <div className={styles.circleDesc}>Orders</div>
          </div>
          <div className={styles.circle}>
            <div
              className={styles.progress}
              style={{ "--percentage": 25 }}
            ></div>
            <div className={styles.circleTxt}>25%</div>
            <div className={styles.circleDesc}>Visits</div>
          </div>
          <div className={styles.circle}>
            <div
              className={styles.progress}
              style={{ "--percentage": 90 }}
            ></div>
            <div className={styles.circleTxt}>90%</div>
            <div className={styles.circleDesc}>ETC</div>
          </div>
        </div>
        <div className={styles.circleResultContainer}>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>A:</span>
            <span className={styles.resultValue}>75% ⬆️</span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>B:</span>
            <span className={styles.resultValue}>50% ⬆️</span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>C:</span>
            <span className={styles.resultValue}>25% ⬆️</span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>D:</span>
            <span className={styles.resultValue}>90% ⬇️</span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>E:</span>
            <span className={styles.resultValue}>90% ⬆️</span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>F:</span>
            <span className={styles.resultValue}>90% ⬇️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary5;
