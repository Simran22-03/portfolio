"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Profile {
  id: number;
  name: string;
  title: string;
  semester: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resume: string;
  image: string;
}

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/profile/", {
  cache: "no-store",
});

       const data = await response.json();

console.log("API Response:", data);

setProfile(data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    getProfile();
  }, []);

  if (!profile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0f172a",
          color: "white",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>My Portfolio</h2>

        <div style={styles.navLinks}>
          <Link href="/home">
            <button style={styles.navButton}>Home</button>
          </Link>

          <Link href="/about">
            <button style={styles.navButton}>About</button>
          </Link>
        </div>
      </nav>

      {/* Heading */}
      <h1 style={styles.topHeading}>Welcome to My Portfolio</h1>

      {/* Card */}
      <div style={styles.card}>

        <h1 style={styles.name}>{profile.name}</h1>

        <p style={styles.title}>{profile.title}</p>

        <p style={styles.semester}>{profile.semester}</p>

        <p style={styles.description}>{profile.description}</p>

        <div style={styles.info}>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Phone:</b> {profile.phone}</p>
          <p><b>Location:</b> {profile.location}</p>

          <p>
            <b>GitHub:</b>{" "}
            <a
              href={profile.github}
              target="_blank"
              style={styles.link}
            >
              {profile.github}
            </a>
          </p>

          <p>
            <b>LinkedIn:</b>{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              style={styles.link}
            >
              {profile.linkedin}
            </a>
          </p>
        </div>

        <div style={styles.buttonContainer}>
          <Link href="/home">
            <button style={styles.primaryButton}>
              Explore Portfolio
            </button>
          </Link>

          <Link href="/about">
            <button style={styles.secondaryButton}>
              About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
    fontFamily: "Arial",
    padding: "25px",
    color: "white",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    margin: 0,
    color: "white",
    letterSpacing: "1px",
  },

  navLinks: {
    display: "flex",
    gap: "15px",
  },

  navButton: {
    padding: "10px 18px",
    borderRadius: "25px",
    border: "1px solid white",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
  },

  topHeading: {
    textAlign: "center" as const,
    marginTop: "60px",
    fontSize: "45px",
    marginBottom: "40px",
  },

  card: {
    width: "650px",
    margin: "auto",
    background: "white",
    color: "#0f172a",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center" as const,
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
  },

  name: {
    fontSize: "40px",
    color: "#2563eb",
    marginBottom: "10px",
  },

  title: {
    fontSize: "22px",
    color: "#334155",
    fontWeight: "bold",
  },

  semester: {
    fontSize: "17px",
    color: "#64748b",
  },

  description: {
    marginTop: "20px",
    fontSize: "17px",
    color: "#475569",
    lineHeight: "1.8",
  },

  info: {
    textAlign: "left" as const,
    marginTop: "30px",
    lineHeight: "2",
    fontSize: "16px",
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "35px",
  },

  primaryButton: {
    padding: "12px 30px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  secondaryButton: {
    padding: "12px 30px",
    background: "transparent",
    color: "#2563eb",
    border: "2px solid #2563eb",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};