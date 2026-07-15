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

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/profile/", {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.length > 0) {
          setProfile(data[0]);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div style={styles.loading}>
        Loading...
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Portfolio</h2>

        <div style={styles.navLinks}>
          <Link href="/">
            <button style={styles.navButton}>Home</button>
          </Link>
          <Link href="/about">
            <button style={styles.navButton}>About</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>

        {/* Left Side */}
        <div style={styles.leftSection}>
          <p style={styles.greeting}>👋 Hello, I'm</p>

          <h1 style={styles.name}>
            {profile.name}
          </h1>

          <h2 style={styles.title}>
            {profile.title}
          </h2>

          <p style={styles.semester}>
            {profile.semester}
          </p>

          <p style={styles.description}>
            {profile.description}
          </p>

          <div style={styles.buttonContainer}>

            <Link href="/">
              <button style={styles.primaryButton}>
                View Portfolio
              </button>
            </Link>

          </div>
        </div>

        {/* Right Side */}

        <div style={styles.rightSection}>

        </div>

      </div>

    </div>
  );
}

const styles = {

  loading: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
    color: "white",
    fontSize: "35px",
    fontWeight: "bold",
  },

  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
    color: "white",
    fontFamily: "Segoe UI, sans-serif",
    padding: "30px 8%",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "60px",
  },

  logo: {
    fontSize: "32px",
    color: "#38bdf8",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "18px",
  },

  navButton: {
    padding: "12px 22px",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "70px",
    flexWrap: "wrap" as const,
    minHeight: "75vh",
  },

  leftSection: {
    flex: 1,
    minWidth: "320px",
  },

  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "320px",
  },

  greeting: {
    color: "#38bdf8",
    fontSize: "22px",
    marginBottom: "10px",
  },

  name: {
    fontSize: "65px",
    fontWeight: "bold",
    margin: "10px 0",
    lineHeight: "1.1",
  },

  title: {
    color: "#60a5fa",
    fontSize: "34px",
    marginBottom: "15px",
  },

  semester: {
    color: "#cbd5e1",
    fontSize: "20px",
    marginBottom: "25px",
  },

  description: {
    color: "#d1d5db",
    lineHeight: "1.8",
    fontSize: "18px",
    maxWidth: "650px",
  },

  buttonContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap" as const,
  },

  primaryButton: {
    padding: "15px 35px",
    background: "#38bdf8",
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  secondaryButton: {
    padding: "15px 35px",
    background: "transparent",
    color: "#38bdf8",
    border: "2px solid #38bdf8",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  imageCard: {
    width: "390px",
    height: "390px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 40px rgba(56,189,248,0.25)",
  },

  profileImage: {
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: "5px solid #38bdf8",
  },

};