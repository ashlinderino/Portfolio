import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Timeline.css";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    api
      .get("education/")
      .then((response) => {
        setEducation(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section
  id="education"
  className="py-5"
  data-aos="fade-right"
>
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Education
        </h2>

        <div className="timeline">

          {education.map((edu) => (
            <div className="timeline-item" key={edu.id}>

              <div className="timeline-dot"></div>

              <div className="card timeline-card shadow-sm">

                <div className="card-body">

                  <h4 className="fw-bold">
                    {edu.degree}
                  </h4>

                  <h5 className="text-primary">
                    {edu.institution}
                  </h5>

                  {edu.university && (
                    <p className="text-muted mb-2">
                      {edu.university}
                    </p>
                  )}

                  <p>
                    <strong>Duration:</strong>{" "}
                    {edu.start_year} - {edu.end_year}
                  </p>

                  <p>
                    <strong>CGPA:</strong> {edu.cgpa}
                  </p>

                  <p className="mb-0">
                    {edu.description}
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

export default Education;