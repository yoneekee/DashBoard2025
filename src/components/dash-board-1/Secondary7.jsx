import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "../../style/Secondary7.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Secondary7 = () => {
  const data = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "User Demographics",
        data: [20, 35, 25, 10, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 부모 컨테이너 크기에 맞게 조정
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "User Demographics by Age Group",
      },
    },
  };

  return (
    <div className={styles.secondary}>
      <div className={styles.title}>User Demographics</div>
      <div className={styles.content}>
        <div className={styles.chartContainer}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Secondary7;
