import React from "react";
import { Line } from "react-chartjs-2";
import styles from "../../style/dash-board-1/Secondary4.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Secondary4 = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [
          200000, 400000, 300000, 600000, 600000, 400000, 500000, 300000,
          200000, 100000, 700000, 600000,
        ],
        borderColor: "#1f77b4",
        backgroundColor: "rgba(31, 119, 180, 0.2)",
        pointBackgroundColor: "#1f77b4",
        pointBorderColor: "#fff",
        pointHoverRadius: 6, // 마우스 호버 시 포인트 크기 증가
        pointHoverBorderColor: "#1f77b4",
        tension: 0.4, // 곡선 부드러움 정도
        fill: true, // Area 차트 활성화
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 높이-너비 비율 유지 비활성화
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: "Monthly Sales Turnover",
        color: "#333",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toLocaleString()}`, // 툴팁 포맷팅
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // x축 그리드 숨김
        },
        ticks: {
          color: "#666", // x축 레이블 색상
        },
      },
      y: {
        grid: {
          borderDash: [5, 5], // 점선 그리드
        },
        ticks: {
          color: "#666",
          callback: (value) => `$${value / 1000}K`, // 값 포맷팅
        },
      },
    },
  };

  return (
    <div className={styles.secondary}>
      <div className={styles.title}>Monthly Sales Turnover</div>
      <div className={styles.chartContent}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Secondary4;
