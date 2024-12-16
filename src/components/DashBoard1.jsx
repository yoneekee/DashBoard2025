import React from "react";
import Secondary1 from "./dash-board-1/Secondary1";
import Secondary2 from "./dash-board-1/Secondary2";
import Secondary3 from "./dash-board-1/Secondary3";
import Secondary4 from "./dash-board-1/Secondary4";
import Secondary5 from "./dash-board-1/Secondary5";
import Secondary6 from "./dash-board-1/Secondary6";
import Secondary7 from "./dash-board-1/Secondary7";
import Primary from "./dash-board-1/Primary";
import styles from "../style/Dashboard.module.css";

const DashBoard1 = () => {
  return (
    <div className={styles.dashboard}>
      <Secondary1 />
      <Secondary2 />
      <Primary />
      <Secondary3 />
      <Secondary4 />
      <Secondary5 />
      <Secondary6 />
      <Secondary7 />
    </div>
  );
};

export default DashBoard1;
