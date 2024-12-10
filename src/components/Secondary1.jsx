import React from "react";

const Secondary1 = () => {
  return (
    <div className="secondary secondary-1">
      <div className="title">Live Statistics</div>
      <div className="content">
        {/* 그래프 영역 */}
        <div className="graph-container">
          <div className="graph-placeholder">Graph Area</div>
        </div>

        {/* 통계 항목 영역 */}
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-title">Active Users</div>
            <div className="stat-value">102</div>
          </div>
          <div className="stat-item">
            <div className="stat-title">New Orders</div>
            <div className="stat-value">25</div>
          </div>
          <div className="stat-item">
            <div className="stat-title">Site Visits</div>
            <div className="stat-value">540</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary1;
