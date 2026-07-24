import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api
      .get("skills/")
      .then((res) => setSkills(res.data))
      .catch((err) => console.log(err));
  }, []);
if (skills.length === 0) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
  return (<section
  id="skills"
  className="py-5"
  data-aos="zoom-in"
>

      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          My Skills
        </h2>

        <div className="row">

          {skills.map((skill) => (

            <div className="col-md-6 col-lg-4 mb-4" key={skill.id}>

              <div className="card skill-card shadow-sm">

                <div className="text-center">

                  {skill.icon ? (
                    <i className={`fab ${skill.icon} skill-icon`}></i>
                  ) : (
                    <i className="fas fa-code skill-icon"></i>
                  )}

                </div>

                <h5 className="text-center">

                  {skill.name}

                </h5>

                <p className="text-center text-muted">

                  {skill.category}

                </p>

                <div className="progress">

                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  >

                  </div>

                </div>

                <p className="mt-2 text-end">

                  {skill.percentage}%

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;