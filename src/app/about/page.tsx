import Link from "next/link";
import { CSSProperties } from "react";

const about = {
  name: "Simrandeep Kaur",
  branch: "Computer Science Engineering",
  semester: "7th Semester",

  skills: [
    "HTML",
    "CSS",
    "Python",
    "Bootstrap",
    "MySQL",
  ],

  project: "Secure Token-Based Automated Attendance System",

  resume: "/Simrandeep_Kaur_CV.pdf",
};

export default function AboutPage() {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>My Portfolio</h2>

        <div style={styles.navLinks}>
          <Link href="/" style={styles.navButton}>
            Portfolio
          </Link>

          <Link href="/home" style={styles.navButton}>
            Home
          </Link>

          <a
            href={about.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navButton}
          >
            Resume
          </a>
        </div>
      </nav>

      <div style={styles.card}>
        <h1 style={styles.heading}>About Me</h1>

        <p style={styles.text}>
          Hello! I'm <b>{about.name}</b>, a passionate{" "}
          <b>{about.branch}</b> student currently pursuing my{" "}
          <b>{about.semester}</b> at Guru Nanak Dev Engineering College,
          Ludhiana. I enjoy building responsive and secure web
          applications, solving real-world problems, and continuously
          learning modern technologies. My goal is to become a skilled
          Full Stack Developer and Software Engineer.
        </p>

        <h2 style={styles.subHeading}>Technical Skills</h2>

        <div style={styles.skillContainer}>
          {about.skills.map((skill) => (
            <div key={skill} style={styles.skill}>
              {skill}
            </div>
          ))}
        </div>

        <h2 style={styles.subHeading}>Featured Project</h2>

        <div style={styles.projectCard}>
          <h3>{about.project}</h3>

          <p>
            Developed a secure attendance management system using
            authentication techniques and modern web technologies to
            ensure safe and reliable attendance recording.
          </p>
        </div>

        <h2 style={styles.subHeading}>Resume</h2>

        <div style={styles.projectCard}>
          <h3>Professional Resume</h3>

          <p>
            View my resume to explore my education, technical skills,
            certifications, projects and achievements.
          </p>

          <div style={styles.buttonContainer}>
            <a
              href={about.resume}
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