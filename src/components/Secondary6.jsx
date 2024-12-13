import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "../style/Secondary6.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 기본 설정 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Secondary6 = () => {
  // Chart.js 데이터와 옵션
  const data = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales (in $)",
        data: [500, 300, 700, 400],
        backgroundColor: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // 가로 막대그래프 설정
    responsive: true,
    plugins: {
      legend: {
        display: false, // 범례 숨김
      },
      title: {
        display: true,
        text: "Top Selling Products",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
        color: "#333",
      },
    },
    scales: {
      x: {
        grid: {
          borderDash: [5, 5], // x축 점선 그리드
        },
        ticks: {
          color: "#666",
          callback: (value) => `$${value / 1000}K`, // 값 포맷팅
        },
      },
      y: {
        grid: {
          display: false, // y축 그리드 숨김
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className={styles.secondary}>
      <div className={styles.title}>Top Selling Products</div>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Secondary6;
