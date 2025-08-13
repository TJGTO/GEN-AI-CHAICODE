"use client";
import React, { useState } from "react";

type VCardProps = {
  imageUrl: string;
  name: string;
  description: string;
};

const VCard: React.FC<VCardProps> = ({ imageUrl, name, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        maxWidth: 320,
        maxHeight: 300, // Fixed height for all cards
        background: "#23232a",
        borderRadius: 16,
        boxShadow: hovered
          ? "0 8px 32px rgba(255,23,68,0.25), 0 4px 16px rgba(0,0,0,0.32)"
          : "0 4px 16px rgba(0,0,0,0.32)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Vertically center content
        border: "1px solid #2d2d34",
        transition: "box-shadow 0.3s, transform 0.3s",
        cursor: "pointer",
        transform: hovered ? "translateY(-8px) scale(1.03)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: 16,
          border: "3px solid #444",
        }}
      />
      <h2 style={{ margin: "0 0 8px 0", fontSize: 24, color: "#fafafa" }}>
        {name}
      </h2>
      <p style={{ color: "#b3b3b3", textAlign: "center", margin: 0 }}>
        {description}
      </p>
    </div>
  );
};

export default VCard;
