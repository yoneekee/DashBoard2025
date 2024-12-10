import React from "react";

const Secondary5 = () => {
  return (
    <div className="secondary secondary-5">
      <div className="title">Circular Progress</div>
      <div className="content">
        <div className="circle-container">
          <div className="circle">
            <div className="progress" style={{ "--percentage": 75 }}></div>
            <div className="circle-text">75%</div>
            <div className="circle-description">Users</div>
          </div>
          <div className="circle">
            <div className="progress" style={{ "--percentage": 50 }}></div>
            <div className="circle-text">50%</div>
            <div className="circle-description">Orders</div>
          </div>
          <div className="circle">
            <div className="progress" style={{ "--percentage": 25 }}></div>
            <div className="circle-text">25%</div>
            <div className="circle-description">Visits</div>
          </div>
          <div className="circle">
            <div className="progress" style={{ "--percentage": 90 }}></div>
            <div className="circle-text">90%</div>
            <div className="circle-description">ETC</div>
          </div>
        </div>
        <div className="circle-result-container">
          <div className="result-item">
            <span className="result-title">A:</span>
            <span className="result-value">75% ⬆️</span>
          </div>
          <div className="result-item">
            <span className="result-title">B:</span>
            <span className="result-value">50% ⬆️</span>
          </div>
          <div className="result-item">
            <span className="result-title">C:</span>
            <span className="result-value">25% ⬆️</span>
          </div>
          <div className="result-item">
            <span className="result-title">D:</span>
            <span className="result-value">90% ⬇️</span>
          </div>
          <div className="result-item">
            <span className="result-title">E:</span>
            <span className="result-value">90% ⬆️</span>
          </div>
          <div className="result-item">
            <span className="result-title">F:</span>
            <span className="result-value">90% ⬇️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary5;
