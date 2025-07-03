// Mahima's Developer Portfolio – Dark Theme with Styled Skill Badges & Adjusted Fonts

import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const skills = [
    "Java 8/11",
    "Spring Boot",
    "Microservices",
    "APIGEE",
    "Kafka",
    "Apache Camel",
    "Postman Testing",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD Pipelines",
    "Splunk",
    "Dynatrace",
    "Ansible",
    "Puppet",
    "Terraform",
  ];

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#0f172a",
        color: "#f1f5f9",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "cursive",
          fontSize: "2.8rem",
          color: "#8b5cf6",
          textAlign: "center",
          marginBottom: "1rem",
          textShadow: "1px 1px 2px #000",
        }}
      >
        Mahima Rastogi
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "1.5rem",
          color: "#c084fc",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "600",
        }}
      >
        Java Developer | API Gateway Expert | DevOps Enthusiast
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
        }}
      >
        Java Developer with strong command over Microservices, APIGEE, Kafka,
        Spring Boot, Apache Camel, and DevOps tools. Passionate about building
        secure, scalable systems with clean integration and automation.
      </motion.p>

      {/* Skills Section */}
      <section>
        <h2 style={{ color: "#a78bfa", marginBottom: "1rem" }}>
          💻 Core Skills
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                backgroundColor: "#1e293b",
                color: "#facc15",
                padding: "6px 12px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#a78bfa", marginBottom: "0.5rem" }}>
          🔁 High-Level Workflow
        </h2>
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            background: "#1e293b",
            padding: "1rem",
            borderRadius: "0.5rem",
            fontSize: "0.9rem",
            color: "#f8fafc",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          {`API Request (APIGEE Gateway)
   ↓
Spring Boot Microservice
   ↓
Validation & Transformation
   ↓
Routing via Apache Camel
   ↓
Kafka Integration
   ↓
Event Handling / DB / REST service
   ↓
CI/CD → Jenkins → Docker → Kubernetes
   ↓
Monitoring → Splunk / Dynatrace`}
        </motion.pre>
      </section>

      {/* Achievements Section */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#a78bfa", marginBottom: "0.5rem" }}>
          🏆 Achievements
        </h2>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            color: "#e2e8f0",
            fontSize: "0.95rem",
          }}
        >
          <li>Top Performer Award – TCS</li>
          <li>Service & Commitment Award – TCS</li>
          <li>Best Team Award – TCS</li>
          <li>Automated CI/CD workflows, reducing deployment time</li>
          <li>Enabled real-time event processing using Kafka</li>
          <li>Secured APIs using APIGEE & role-based policy enforcement</li>
        </ul>
      </section>

      {/* About Section */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#a78bfa", marginBottom: "0.5rem" }}>
          💬 About Me
        </h2>
        <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
          I enjoy designing secure backend systems using Java microservices, API
          gateways, and event-driven architecture (Kafka). I’m confident with
          Spring Boot, Apache Camel, DevOps tools, CI/CD pipelines, and modern
          backend practices.
        </p>
      </section>

      {/* Contact Section */}
      <footer
        style={{ marginTop: "3rem", textAlign: "center", color: "#94a3b8" }}
      >
        📫{" "}
        <a
          href="mailto:mahimarastogi118@gmail.com"
          style={{
            color: "#facc15",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Email Me
        </a>{" "}
        <br />
        💼{" "}
        <a
          href="https://www.linkedin.com/in/mahima-rastogi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          LinkedIn Profile
        </a>{" "}
        <br />
        <br />
        🚀 Open to Java Backend, API Engineering, or DevOps roles
      </footer>
    </div>
  );
}

export default App;
