import Link from "next/link";

const profile = {
  name: "Simrandeep Kaur",
  title: "B.Tech CSE Student",
  semester: "7th Semester",
};

export default function HomePage() {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>My Portfolio</h2>

        <div style={styles.navLinks}>
          <Link href="/portfolio">
            <button style={styles.navButton}>Portfolio</button>
          </Link>

          <Link href="/portfolio/about">
            <button style={styles.navButton}>About</button>
          </Link>
        </div>
      </nav>

      <div style={styles.main}>
        <div style={styles.leftBox}>
          <p style={styles.smallText}>Hello, I am</p>
          <h1 style={styles.name}>{profile.name}</h1>
          <h2 style={styles.title}>{profile.title}</h2>
          <p style={styles.semester}>{profile.semester}</p>

          <p style={styles.description}>
            Passionate B.Tech CSE student with a keen interest in Full Stack Web
            Development. Experienced in HTML, CSS, JavaScript, Python,
            Bootstrap, Node.js and MySQL, with a focus on building secure,
            responsive and user-friendly web applications.
          </p>

          <div style={styles.buttonBox}>
            <Link href="/portfolio/about">
              <button style={styles.primaryButton}>Explore My Portfolio</button>
            </Link>
          </div>
        </div>

        <div style={styles.rightBox}>
          <div style={styles.photoCircle}>
            <img src="/profile.jpeg" alt="Profile" style={styles.image} />
          </div>
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
    cursor: "pointer",
    fontSize: "15px",
  },

  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "90px auto 0",
    gap: "50px",
  },

  leftBox: {
    width: "55%",
  },

  smallText: {
    fontSize: "22px",
    color: "#bfdbfe",
  },

  name: {
    fontSize: "54px",
    margin: "10px 0",
    letterSpacing: "2px",
  },

  title: {
    fontSize: "26px",
    color: "#dbeafe",
  },

  semester: {
    fontSize: "18px",
    color: "#e0f2fe",
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#e2e8f0",
    marginTop: "25px",
  },

  buttonBox: {
    marginTop: "30px",
    display: "flex",
  },

  primaryButton: {
    padding: "13px 28px",
    backgroundColor: "white",
    color: "#1d4ed8",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  rightBox: {
    width: "45%",
    display: "flex",
    justifyContent: "center",
  },

  photoCircle: {
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    objectPosition: "center 25%" as const,
    borderRadius: "50%",
    border: "6px solid #2563eb",
  },
};