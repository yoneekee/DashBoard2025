import React, { useState } from "react";
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";
import Tab3Content from "./Tab3Content";
import "../style/Primary.css";
import "../script/primary.js";

const Primary = () => {
  const [activeTab, setActiveTab] = useState("tab1-content");

  const tabs = [
    { id: "tab1-content", label: "1", content: <Tab1Content /> },
    { id: "tab2-content", label: "2", content: <Tab2Content /> },
    { id: "tab3-content", label: "3", content: <Tab3Content /> },
  ];

  return (
    <div className="primary">
      <div className="title">
        <div className="site-name">My Site</div>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="content">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div
              key={tab.id}
              className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
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
