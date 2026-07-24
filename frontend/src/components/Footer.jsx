import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">

        <h3 className="fw-bold">Ashlin Derino</h3>

        <p className="mb-3">
          Python Full Stack Developer | Data Analyst
        </p>

        <div className="mb-3">

          <a
            href="https://github.com/yourgithub"
            className="text-white mx-3 fs-4"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            className="text-white mx-3 fs-4"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="text-white mx-3 fs-4"
          >
            <FaEnvelope />
          </a>

        </div>

        <small>
          © 2026 Ashlin Derino. Built with{" "}
          <FaHeart className="text-danger" /> using React & Django.
        </small>

      </div>
    </footer>
  );
}

export default Footer;