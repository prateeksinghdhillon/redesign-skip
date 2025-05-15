import React from "react";
import "./SkipCard.scss";

const SkipCard = ({ skip }) => {
  return (
    <div className="skip-card">
      <div className="image-container">
        <img
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg" // Replace with actual image path
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
            style={
              skip.allows_heavy_waste
                ? { background: "#5b7d6d" }
                : { background: "#7d5b5b" }
            }
          >
            {skip.allows_heavy_waste ? "Heavy Waste" : "No Heavy Waste"}
          </span>
          <span
            className="tag"
            style={
              skip.allowed_on_road
                ? { background: "#5b7d6d" }
                : { background: "#7d5b5b" }
            }
          >
            {skip.allowed_on_road ? "Road Legal" : "Not Road Legal"}
          </span>
        </div>
        <button className="book-btn">Select This Skip</button>
      </div>
    </div>
  );
};

export default SkipCard;
