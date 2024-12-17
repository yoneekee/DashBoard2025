import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import styles from "../../style/dash-board-1/Tab1Content.module.css";

const Tab1Content = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Active Number1",
        data: [10, 25, 40, 55, 70, 85, 98],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },

      {
        label: "Active Number2",
        data: [55, 70, 85, 90, 10, 25, 40],
        fill: true,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        tension: 0.4,
      },

      {
        label: "Active Number3",
        data: [70, 50, 30, 60, 40, 55, 70],
        fill: true,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: "#ddd" },
      },
    },
  };

  return (
    <div className={styles.kpiContainer}>
      <div className={styles.kpiSection}>
        <div className={styles.kpiCard}>
          <h3>AA</h3>
          <p>12,345</p>
        </div>
        <div className={styles.kpiCard}>
          <h3>BB</h3>
          <p>1,234</p>
        </div>
        <div className={styles.kpiCard}>
          <h3>CC</h3>
          <p>15%</p>
        </div>
      </div>
      <div className={styles.graphSection}>
        <h3>DD</h3>
        <div className={styles.chartContainer}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Tab1Content;
