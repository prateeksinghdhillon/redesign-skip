import React from "react";
import "./SkipCard.scss";

const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <>
      
      <div className="skip-card">
        <div className="image-container">
          <img
            src={`${skip.image}`}
            alt={`${skip.size} Yard Skip`}
          />
          <div className="price-badge">£{skip.price_before_vat}</div>
        </div>
        <div className="card-content">
          <h3>{skip.size} Yard Skip</h3>
          <p>{skip.hire_period_days}-day hire period with heavy waste allowed.</p>
          <div className="tags">
            <span className="tag">{skip.size} Yards</span>
            <span
              className="tag"
              style={{
                background: skip.allows_heavy_waste ? "#5b7d6d" : "#7d5b5b",
              }}
            >
              {skip.allows_heavy_waste ? "Heavy Waste" : "No Heavy Waste"}
            </span>
            <span
              className="tag"
              style={{
                background: skip.allowed_on_road ? "#5b7d6d" : "#7d5b5b",
              }}
            >
              {skip.allowed_on_road ? "Road Legal" : "Not Road Legal"}
            </span>
          </div>
          <button
          onClick={() => onSelect(skip.id)}
            className="book-btn"
            style={{
              backgroundColor: isSelected ? "royalblue" : "#444",
              color: "white",
            }}
          >
            {isSelected ? "Selected" : "Select This Skip"}
          </button>
        </div>
      </div>

      {isSelected && (
        <div className="skip-bottom-bar">
          <div className="skip-info">
            <span className="skip-title">{skip.size} Yard Skip</span>
            <span className="skip-price">
              £{skip.price_before_vat}
              <span className="skip-days">{skip.hire_period_days} day hire</span>
            </span>
          </div>
          <div className="skip-actions">
            <button className="skip-btn back-btn">Back</button>
            <button className="skip-btn continue-btn">Continue →</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SkipCard;
