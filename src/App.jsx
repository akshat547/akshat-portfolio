
import { useState } from "react";
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Java",
  "Python",
  "Git & GitHub",
  "MS Office",
];

const strengths = [
  "Communication",
  "Leadership",
  "Team Management",
  "Teamwork",
  "Active Listening",
  "Adaptability",
];

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      setIsSubmitting(true);
      setSubmitStatus("");

      const response = await fetch(
        "https://akshat-portfolio-api-8xsv.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setSubmitStatus(
        "Message sent successfully! Thank you for contacting me."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus(
        error.message === "Failed to fetch"
          ? "Could not connect to the server. Please make sure the backend is running."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          AK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk ↗
        </a>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <span className="hero-tag">
              FRONTEND DEVELOPER
            </span>

            <h1>
              Hi, I'm <span>Akshat Rawat.</span>
              <br />
              I build digital experiences.
            </h1>

            <p className="hero-description">
              I'm a passionate frontend developer and B.Tech CSE student
              who loves creating modern, responsive and user-friendly
              websites.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>

              <a href="#contact" className="outline-btn">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/akshat547"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/akshat-rawat-6a1913292/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://www.instagram.com/akshatofficial_30/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-glow"></div>

            <div className="profile-frame">
              <img
                src="/profile.png"
                alt="Akshat Rawat"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />

              <div className="profile-fallback">
                AR
              </div>
            </div>

            <div className="floating-card">
              <span>📍</span>
              Haldwani, Uttarakhand
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="section-label">01 / ABOUT ME</p>
            <h2>A little about me.</h2>
            <p>Get to know the person behind the code.</p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>Turning ideas into reality through code.</h3>

              <p>
                I'm Akshat Rawat, a Computer Science Engineering student
                from Devbhoomi Uttarakhand University, Dehradun.
                I belong to the beautiful Devbhoomi Uttarakhand.
              </p>

              <p>
                I enjoy learning new technologies and building websites
                that combine creativity with functionality. My main
                interest is frontend development, especially React.js,
                JavaScript and modern CSS.
              </p>

              <p>
                I'm continuously improving my skills and looking forward
                to creating meaningful digital experiences.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span>Name</span>
                <h4>Akshat Rawat</h4>
              </div>

              <div className="detail-card">
                <span>Location</span>
                <h4>Haldwani, Uttarakhand</h4>
              </div>

              <div className="detail-card">
                <span>Degree</span>
                <h4>B.Tech CSE</h4>
              </div>

              <div className="detail-card">
                <span>Focus</span>
                <h4>Frontend Development</h4>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="section-label">02 / MY SKILLS</p>
            <h2>Technologies I work with.</h2>
            <p>Tools and technologies I'm learning and using.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  0{index + 1}
                </span>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>

          <div className="strengths-section">
            <h3>Personal Strengths</h3>

            <div className="strengths-list">
              {strengths.map((strength) => (
                <span key={strength}>
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">

          <div className="section-heading">
            <p className="section-label">03 / MY WORK</p>
            <h2>Projects I've worked on.</h2>
            <p>A look at my journey of learning and building.</p>
          </div>

          {/* PROJECT 01 - NEXORA */}
          <div className="project-card">

            <div className="project-art">
              <div className="nexora-gallery">
                <img
                  src="/projects/nexora-home.png"
                  alt="NEXORA Homepage"
                />

                <img
                  src="/projects/nexora-services.png"
                  alt="NEXORA Services Page"
                />
              </div>
            </div>

            <div className="project-information">

              <span className="project-number">
                FEATURED PROJECT / 01
              </span>

              <h3>NEXORA</h3>

              <p>
                A modern business website built with React.js and CSS,
                focusing on clean layouts, attractive visuals,
                responsive design and smooth user experiences.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Responsive UI</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/akshat547"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  GitHub Profile ↗
                </a>

                <a href="#contact" className="outline-btn">
                  Discuss Project
                </a>
              </div>

            </div>
          </div>

          {/* PROJECT 02 - SMARTKHARCHA */}
          <div className="project-card smartkharcha-card">

            <div className="project-art smartkharcha-art">
              <div className="smartkharcha-gallery">

                <img
                  src="/projects/smartkharcha-dashboard.png"
                  alt="SmartKharcha Dashboard"
                />

                <img
                  src="/projects/smartkharcha-transactions.png"
                  alt="SmartKharcha Transactions"
                />

                <img
                  src="/projects/smartkharcha-wallets.png"
                  alt="SmartKharcha Wallets"
                />

                <img
                  src="/projects/smartkharcha-budgets.png"
                  alt="SmartKharcha Budgets"
                />

              </div>
            </div>

            <div className="project-information">

              <span className="project-number">
                FEATURED PROJECT / 02
              </span>

              <h3>SmartKharcha</h3>

              <p>
                A smart expense tracker application designed to help
                users manage their personal finances. It includes
                authentication, an interactive dashboard, income and
                expense tracking, wallet management and budget planning
                with MongoDB data persistence.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>CSS3</span>
              </div>

              <div className="project-actions">

                <a
                  href="https://client-tawny-six-73.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/akshat547"
                  target="_blank"
                  rel="noreferrer"
                  className="outline-btn"
                >
                  GitHub Profile ↗
                </a>

              </div>
            </div>
          </div>

          <p className="project-note">
            More projects will be added as I continue building and learning.
          </p>

        </section>

        {/* EDUCATION */}
        <section id="education" className="section education-section">
          <div className="section-heading">
            <p className="section-label">04 / EDUCATION</p>
            <h2>My academic journey.</h2>
            <p>My educational background and learning journey.</p>
          </div>

          <div className="education-list">

            <div className="education-card">
              <span className="education-year">
                CURRENTLY PURSUING
              </span>

              <h3>Bachelor of Technology - Computer Science</h3>

              <p>Devbhoomi Uttarakhand University, Dehradun</p>

              <span className="education-status">
                B.Tech CSE · 4th Year
              </span>
            </div>

            <div className="education-card">
              <span className="education-year">
                HIGHER SECONDARY
              </span>

              <h3>Class 12th</h3>

              <p>Gurukul International School, Haldwani</p>
            </div>

            <div className="education-card">
              <span className="education-year">
                SECONDARY
              </span>

              <h3>Class 10th</h3>

              <p>Gurukul International School, Haldwani</p>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <div className="section-heading">
            <p className="section-label">05 / CONTACT</p>
            <h2>Let's create something together.</h2>
            <p>
              Have a project idea or want to connect? Feel free to reach out.
            </p>
          </div>

          <div className="contact-content">

            <div className="contact-information">
              <h3>Get in touch.</h3>

              <p>
                I'm always open to learning, collaboration and
                interesting opportunities.
              </p>

              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:akshatrawat547@gmail.com">
                  akshatrawat547@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <span>Location</span>
                <p>Haldwani, Uttarakhand, India</p>
              </div>

              <div className="contact-detail">
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/akshat-rawat-6a1913292/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>

              <div className="contact-detail">
                <span>GitHub</span>
                <a
                  href="https://github.com/akshat547"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit GitHub ↗
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>

              <button
                type="submit"
                className="primary-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message ↗"}
              </button>

              {submitStatus && (
                <p className="form-status" role="status" aria-live="polite">
                  {submitStatus}
                </p>
              )}

            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="logo">
          AK<span>.</span>
        </a>

        <p>
          Designed & built by Akshat Rawat.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/akshat547"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akshat-rawat-6a1913292/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/akshatofficial_30/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

        </div>

        <span className="copyright">
          © {new Date().getFullYear()} Akshat Rawat. All rights reserved.
        </span>

      </footer>

    </div>
  );
}

export default App;
