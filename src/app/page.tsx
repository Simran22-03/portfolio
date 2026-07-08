import Link from "next/link";

const profile = {
  name: "Simrandeep Kaur",
  title: "B.Tech CSE Student",
  semester: "7th Semester",
};

export default function Page() {
  return (
    <div style={styles.page}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>My Portfolio</h2>

        <div style={styles.navLinks}>
          <Link href="/portfolio/home">
            <button style={styles.navButton}>Home</button>
          </Link>

          <Link href="/portfolio/about">
            <button style={styles.navButton}>About</button>
          </Link>
        </div>
      </nav>

      {/* Heading */}
      <h1 style={styles.topHeading}>Welcome to My Portfolio</h1>

      {/* Portfolio Card */}
      <div style={styles.card}>
        <h1 style={styles.name}>{profile.name}</h1>

        <p style={styles.title}>{profile.title}</p>

        <p style={styles.semester}>{profile.semester}</p>

        <p style={styles.description}>
          Welcome to my portfolio! Here you can explore my
          academic journey, technical skills, projects, and achievements
          as a Computer Science Engineering student passionate about Full
          Stack Web Development and Software Engineering.
        </p>

        <div style={styles.buttonContainer}>
          <Link href="/portfolio/home">
            <button style={styles.primaryButton}>
              Explore Portfolio
            </button>
          </Link>

          <Link href="/portfolio/about">
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
    background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
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
    color: "#ffffff",
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
    cursor: "pointer",
    fontSize: "15px",
  },

  topHeading: {
    textAlign: "center" as const,
    marginTop: "70px",
    fontSize: "48px",
    letterSpacing: "2px",
  },

  card: {
    backgroundColor: "white",
    color: "#0f172a",
    width: "550px",
    margin: "35px auto",
    padding: "45px",
    borderRadius: "25px",
    textAlign: "center" as const,
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  },

  name: {
    fontSize: "40px",
    color: "#1d4ed8",
    marginBottom: "10px",
  },

  title: {
    fontSize: "22px",
    color: "#334155",
    fontWeight: "bold",
  },

  semester: {
    color: "#64748b",
    fontSize: "17px",
  },

  description: {
    marginTop: "25px",
    color: "#475569",
    fontSize: "17px",
    lineHeight: "1.8",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "35px",
  },

  primaryButton: {
    padding: "12px 28px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  secondaryButton: {
    padding: "12px 28px",
    backgroundColor: "transparent",
    color: "#2563eb",
    border: "2px solid #2563eb",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};