import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Timeline.css";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    api
      .get("experience/")
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section
  id="experience"
  className="py-5"
  data-aos="fade-left"
>
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Experience
        </h2>

        <div className="timeline">

          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>

              <div className="timeline-dot"></div>

              <div className="card timeline-card shadow-sm">

                <div className="card-body">

                  <h4 className="fw-bold">
                    {exp.position}
                  </h4>

                  <h5 className="text-primary">
                    {exp.company}
                  </h5>

                  <p className="text-muted">
                    {new Date(exp.start_date).toLocaleDateString()} -{" "}
                    {exp.currently_working
                      ? "Present"
                      : exp.end_date
                      ? new Date(exp.end_date).toLocaleDateString()
                      : "Present"}
                  </p>

                  <p className="mb-0">
                    {exp.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;