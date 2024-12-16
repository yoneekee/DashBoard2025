import React from "react";
import Secondary1 from "./Secondary1";
import Secondary2 from "./Secondary2";
import Secondary3 from "./Secondary3";
import Secondary4 from "./Secondary4";
import Secondary5 from "./Secondary5";
import Secondary6 from "./Secondary6";
import Secondary7 from "./Secondary7";
import Primary from "./Primary";
import styles from "../../style/Dashboard.module.css";

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
