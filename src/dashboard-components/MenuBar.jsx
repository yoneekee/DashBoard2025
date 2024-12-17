import React from "react";
import styles from "../style/MenuBar.module.css";

const MenuBar = ({ menus, activeMenu, onMenuClick }) => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuIcon}>☰</div>
      <div className={styles.menuContent}>
        <ul>
          {menus.map((menu, index) => (
            <li
              key={menu.id}
              className={`${styles.menuItem} ${
                activeMenu === index ? styles.activeMenuItem : ""
              }`}
              onClick={() => onMenuClick(index)}
            >
              {menu.label}
            </li>
          ))}
        </ul>

        <div className={styles.menuFoot}>
          <h3>Powered By DashBoard Corp.</h3>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
