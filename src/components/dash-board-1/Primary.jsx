import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; // 라이브러리 추가
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";
import Tab3Content from "./Tab3Content";
import styles from "../../style/dash-board-1/Primary.module.css";

const Primary = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "1", title: "Check KPI", content: <Tab1Content /> },
    {
      id: "tab2",
      label: "2",
      title: "Check Whatever",
      content: <Tab2Content />,
    },
    {
      id: "tab3",
      label: "3",
      title: "Check Whatsoever",
      content: <Tab3Content />,
    },
  ];

  // 현재 활성 탭의 타이틀 찾기
  const activeTabTitle = tabs.find((tab) => tab.id === activeTab)?.title || "";

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => switchTab("next"),
    onSwipedRight: () => switchTab("prev"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const switchTab = (direction) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % tabs.length;
    } else if (direction === "prev") {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    setActiveTab(tabs[newIndex].id);
  };

  return (
    <div {...handlers} className={styles.primary}>
      <div className={styles.title}>
        {/* 활성 탭의 타이틀을 표시 */}
        <div className={styles.siteName}>{activeTabTitle}</div>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div
              key={tab.id}
              className={`${styles.tabContent} ${
                activeTab === tab.id ? styles.tabContentActive : ""
              }`}
            >
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Primary;
