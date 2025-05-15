// src/skip-page/SkipPage.jsx
import React, { useState } from "react";
import "./SkipPage.scss";
import SkipCard from "./SkipCard";
import { SKIP } from "../utils/constant";

export default function SkipPage() {
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  const handleSelect = (id) =>
    setSelectedSkipId((prev) => (prev === id ? null : id));

  return (
    <div className="skip-page">
      {/* 1. Heading */}
      <div className="skip-header">
        <h2>Choose Your Skip Size</h2>
        <p>Select the skip size that best suits your needs</p>
      </div>

      {/* 2. Cards grid */}
      <div className="skip-container">
        {SKIP.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={skip.id === selectedSkipId}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* 3. Bottom bar */}
      {selectedSkipId !== null && (
        <div className="skip-bottom-bar">
          {/* duplicate your existing bottom-bar markup here */}
          <div className="skip-info">
            <span className="skip-title">
              {SKIP.find((s) => s.id === selectedSkipId).size} Yard Skip
            </span>
            <span className="skip-price">
              £
              {(
                SKIP.find((s) => s.id === selectedSkipId).price_before_vat
              )}
              <span className="vat-note"> +  £{SKIP.find((s) => s.id === selectedSkipId).vat} VAT </span>
              <span className="skip-days">
                {SKIP.find((s) => s.id === selectedSkipId).hire_period_days} day
                hire
              </span>
            </span>
          </div>
          <div className="skip-actions">
            <button className="skip-btn back-btn">Back</button>
            <button className="skip-btn continue-btn">Continue →</button>
          </div>
        </div>
      )}
    </div>
  );
}
