"use client";

import Link from "next/link";
import { CSSProperties } from "react";
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
}

interface Skill {
  id: number;
  name: string;
  percentage: number;
}

interface Project {
  id: number;
  title: string;
  description: string;
}

export default function AboutPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, skillRes, projectRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/profile/"),
          fetch("http://127.0.0.1:8000/api/skills/"),
          fetch("http://127.0.0.1:8000/api/projects/"),
        ]);

        const profileData = await profileRes.json();
        const skillData = await skillRes.json();
        const projectData = await projectRes.json();

        if (profileData.length > 0) setProfile(profileData[0]);
        setSkills(skillData);
        setProjects(projectData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
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
  <nav style={styles.navbar}>
    <h2 style={styles.logo}>My Portfolio</h2>

    <div style={styles.navLinks}>
      <Link href="/home" style={styles.navButton}>
        Home
      </Link>

      <a
  href={profile.resume}
  target="_blank"
  rel="noopener noreferrer"
  style={styles.resumeButton}
>
        Resume
      </a>
    </div>
  </nav>
      <div style={styles.card}>
        <h1 style={styles.heading}>About Me</h1>

        <p style={styles.text}>
          Hello! I'm <b>{profile.name}</b>, a passionate{" "}
          <b>{profile.title}</b> currently pursuing my{" "}
          <b>{profile.semester}</b>. {profile.description}
        </p>

        <h2 style={styles.subHeading}>Technical Skills</h2>

        <div style={styles.skillContainer}>
          {skills.map((skill) => (
            <div key={skill.id} style={styles.skill}>
              {skill.name}
            </div>
          ))}
        </div>

        <h2 style={styles.subHeading}>Featured Project</h2>

        {projects.length > 0 ? (
          <div style={styles.projectCard}>
            <h3>{projects[0].title}</h3>

            <p>{projects[0].description}</p>
          </div>
        ) : (
          <div style={styles.projectCard}>
           
          </div>
        )}

        <h2 style={styles.subHeading}>Resume</h2>

        <div style={styles.projectCard}>
          <h3>Professional Resume</h3>

          <p>
            View my resume to explore my education, technical skills,
            certifications, projects and achievements.
          </p>

          <div style={styles.buttonContainer}>
            <a
  href={profile.resume}
  target="_blank"
  rel="noopener noreferrer"
  style={styles.resumeButton}
>
              📄 View Resume
            </a>

            <Link href="/home" style={styles.button}>
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
    fontFamily: "Arial, sans-serif",
    color: "white",
    padding: "25px",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    margin: 0,
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
    backgroundColor: "transparent",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
    display: "inline-block",
  },

  card: {
    maxWidth: "800px",
    margin: "60px auto",
    backgroundColor: "white",
    color: "#0f172a",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  heading: {
    textAlign: "center",
    color: "#2563eb",
    fontSize: "40px",
    marginBottom: "25px",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#475569",
  },

  subHeading: {
    marginTop: "35px",
    color: "#2563eb",
  },

  skillContainer: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "15px",
  },

  skill: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px 22px",
    borderRadius: "25px",
    fontWeight: "bold",
  },

  projectCard: {
    marginTop: "15px",
    backgroundColor: "#f8fafc",
    padding: "25px",
    borderRadius: "15px",
    borderLeft: "5px solid #2563eb",
  },

  buttonContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },

  resumeButton: {
    padding: "12px 28px",
    backgroundColor: "#0f172a",
    color: "white",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    display: "inline-block",
  },

  button: {
    padding: "12px 28px",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    display: "inline-block",
  },
};