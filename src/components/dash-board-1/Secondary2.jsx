import React from "react";
import styles from "../../style/dash-board-1/Secondary2.module.css";

const Secondary2 = () => {
  const schedule = [
    { time: "09:00", task: "Team Meeting", status: "Completed" },
    { time: "11:00", task: "Project Update Call", status: "In Progress" },
    { time: "14:00", task: "Submit Report", status: "Pending" },
    { time: "16:00", task: "Code Review", status: "Pending" },
    { time: "17:00", task: "Team Meeting", status: "Pending" },
    { time: "19:00", task: "Team Meeting", status: "Pending" },
    { time: "21:00", task: "Team Meeting", status: "Pending" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return { color: "green" };
      case "In Progress":
        return { color: "blue" };
      case "Pending":
        return { color: "orange" };
      default:
        return { color: "gray" };
    }
  };

  return (
    <div className={styles.secondary}>
      <div className={styles.title}>Today's Schedule</div>
      <div className={styles.content}>
        <div className={styles.scheduleBox}>
          <ul className={styles.scheduleList}>
            {schedule.map((item, index) => (
              <li key={index} className={styles.scheduleItem}>
                <span className={styles.time}>{item.time}</span>
                <span className={styles.task}>{item.task}</span>
                <span
                  className={styles.status}
                  style={getStatusStyle(item.status)}
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Secondary2;
