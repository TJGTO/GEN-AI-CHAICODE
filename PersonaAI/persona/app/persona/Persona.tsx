import React from "react";
import VCard from "./components/VCard";
import Link from "next/link";
import { users } from "../data/users";

const Persona = () => {
  return (
    <div style={{ padding: 32, background: "#18181b", minHeight: "100vh" }}>
      {/* HEADER */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 48,
          fontWeight: 800,
          marginBottom: 60, // Increased from 40 to 60 for better spacing
          color: "#ff1744",
          textShadow: "0 0 16px #ff1744, 0 0 32px #ff1744",
          letterSpacing: 2,
        }}
      >
        Choose Your Persona
      </h1>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginBottom: 80, // Big gap between cards and footer section
        }}
      >
        {users.map((card) => (
          <Link
            href={`/chat?id=${card.id}`}
            key={card.id}
            style={{ textDecoration: "none" }}
          >
            <VCard
              imageUrl={card.imageUrl}
              name={card.name}
              description={card.description}
            />
          </Link>
        ))}
      </div>

      {/* FOOTER TEXT */}
      <div
        style={{
          textAlign: "center",
          fontSize: 20,
          lineHeight: 1.7,
          color: "#00e5ff",
          textShadow: "0 0 12px #00e5ff, 0 0 24px #00e5ff",
          fontWeight: 500,
          margin: "0 auto",
        }}
      >
        Persona AI lets you interact with unique personas, each crafted to help
        you learn, grow, and solve problems in tech.
        <br />
        Choose your favorite persona and start a conversation tailored to your
        needs.
        <br />
        Our platform is designed for seamless, engaging chats with educators and
        experts.
      </div>
    </div>
  );
};

export default Persona;
