import "./../styles/Navbar.css";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
);

useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">

      <div className="container">

        <a className="navbar-brand" href="/">
          Ashlin.
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certificates">
                Certificates
              </a>
            </li>

           <ul className="navbar-nav ms-auto">

  <li className="nav-item">
    <a className="nav-link" href="#contact">
      Contact
    </a>
  </li>

  <li className="nav-item ms-3">
    <button
      className="btn btn-outline-light"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  </li>

</ul>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;