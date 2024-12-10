import React from "react";

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
        return { color: "green", fontWeight: "bold" };
      case "In Progress":
        return { color: "blue", fontWeight: "bold" };
      case "Pending":
        return { color: "orange", fontWeight: "bold" };
      default:
        return { color: "gray" };
    }
  };

  return (
    <div className="secondary secondary-2">
      <div className="title">Today's Schedule</div>
      <div className="content">
        <div className="schedule-box">
          <ul className="schedule-list">
            {schedule.map((item, index) => (
              <li key={index} className="schedule-item">
                <span className="time">{item.time}</span>
                <span className="task">{item.task}</span>
                <span className="status" style={getStatusStyle(item.status)}>
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
