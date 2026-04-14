import React from "react";
import { Monitor, Braces, Puzzle, ShieldAlert, Lock } from "lucide-react";

type Certification = {
  title: string;
  provider: string;
  icon: React.ElementType;
  progress: number;
  status: string;
  highlight: string;
  credlyUrl?: string;
  badgeImage?: string;
};

const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    icon: ShieldAlert,
    progress: 100,
    status: "Completed",
    highlight: "Defensive architecture and threat analysis",
    credlyUrl: "https://www.credly.com/badges/49835057-99d2-4607-ab70-5de4c9bf4813",
    badgeImage: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    icon: Monitor,
    progress: 90,
    status: "In Progress",
    highlight: "Core UI Architecture & accessibility standards",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    provider: "freeCodeCamp",
    icon: Braces,
    progress: 65,
    status: "In Progress",
    highlight: "Complex logic and algorithmic efficiency",
  },
  {
    title: "Front-end Development Libraries",
    provider: "freeCodeCamp",
    icon: Puzzle,
    progress: 55,
    status: "In Progress",
    highlight: "Component integration and state management",
  },
];

export function LearningJourney() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container mx-auto px-6">

        {/* COMPACT HEADER */}
        <div style={{ position: "relative", marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#22c55e", letterSpacing: "0.1em" }}>05</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Certifications</h2>
          </div>
        </div>

        {/* REGISTRY GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem 10rem", alignItems: "start" }}>
          {certifications.map((cert, index) => {
            const isCompleted = cert.status === "Completed";
            const accentColor = isCompleted ? "#f59e0b" : "#22c55e";

            return (
              <div
                key={index}
                className="group"
                style={{
                  position: "relative",
                  paddingLeft: "2rem",
                  borderLeft: `2px solid ${isCompleted ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.1)"}`,
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Accent guide line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-2px",
                    height: "100%",
                    width: "2px",
                    backgroundColor: accentColor,
                    transform: isCompleted ? "scaleY(1)" : "scaleY(0)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "top",
                  }}
                  className={isCompleted ? "" : "group-hover:scale-y-100"}
                />

                <div className="space-y-6">
                  {/* Status badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <cert.icon style={{ width: "1.25rem", height: "1.25rem", color: accentColor, opacity: 0.9 }} />
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: isCompleted ? "#f59e0b" : "var(--muted-foreground)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      {isCompleted ? (
                        <>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "14px",
                              height: "14px",
                              borderRadius: "50%",
                              backgroundColor: "#f59e0b",
                              color: "#000",
                              fontSize: "9px",
                              fontWeight: 900,
                            }}
                          >
                            ✓
                          </span>
                          Completed
                        </>
                      ) : (
                        <>
                          <span
                            style={{
                              display: "inline-block",
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: "#22c55e",
                              animation: "pulse 2s infinite",
                            }}
                          />
                          In Progress
                        </>
                      )}
                    </span>
                  </div>

                  {/* Layout: text left, badge image right for completed */}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    {/* Title & description */}
                    <div className="space-y-3" style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1.2 }}>
                        {cert.title}
                      </h3>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--muted-foreground)", fontWeight: 300 }}>
                        {cert.highlight}
                      </p>
                      
                      {/* Provider Label moved here */}
                      <div style={{ paddingTop: "0.25rem" }}>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "var(--foreground)",
                            letterSpacing: "0.05em",
                            padding: "0.35rem 0.75rem",
                            backgroundColor: isCompleted ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.02)",
                            border: `1px solid ${isCompleted ? "rgba(245,158,11,0.25)" : "rgba(255,255,255,0.08)"}`,
                            borderRadius: "4px",
                          }}
                        >
                          {cert.provider}
                        </span>
                      </div>
                    </div>

                    {/* Credly Badge Image */}
                    {isCompleted && cert.badgeImage && cert.credlyUrl ? (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Credential on Credly"
                        style={{ flexShrink: 0 }}
                      >
                        <img
                          src={cert.badgeImage}
                          alt={`${cert.title} badge`}
                          style={{
                            width: "140px",
                            height: "140px",
                            objectFit: "contain",
                            filter: "drop-shadow(0 0 12px rgba(245,158,11,0.35))",
                            transition: "transform 0.3s ease, filter 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                            (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 20px rgba(245,158,11,0.6))";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                            (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 12px rgba(245,158,11,0.35))";
                          }}
                        />
                      </a>
                    ) : (
                      <div
                        style={{
                          flexShrink: 0,
                          width: "140px",
                          height: "140px",
                          border: "2px dashed rgba(255,255,255,0.1)",
                          borderRadius: "50%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(255,255,255,0.02)",
                          color: "rgba(255,255,255,0.15)",
                          gap: "0.5rem"
                        }}
                      >
                        <Lock size={28} strokeWidth={1.5} />
                        <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Locked</span>
                      </div>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div className="pt-2">
                    <div className="flex justify-end items-center mb-3">
                      <span className="font-mono text-[10px] text-muted-foreground">{cert.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 overflow-hidden" style={{ borderRadius: "2px" }}>
                      <div
                        className="h-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${cert.progress}%`, backgroundColor: accentColor }}
                      >
                        {!isCompleted && <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 animate-pulse" />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
