import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Certificates.css";

import { FaAward } from "react-icons/fa";

function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    api
      .get("certificates/")
      .then((res) => setCertificates(res.data))
      .catch(console.error);
  }, []);

  return (
    <section
  id="certificates"
  className="py-5"
  data-aos="zoom-in"
>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Certificates
        </h2>

        <div className="row">
          {certificates.map((certificate) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={certificate.id}
            >
              <div className="card certificate-card shadow-sm h-100">

                {/* Certificate Image */}
                {certificate.certificate_image ? (
                  <img
                    src={certificate.certificate_image}
                    alt={certificate.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div className="text-center pt-4">
                    <FaAward className="certificate-icon" />
                  </div>
                )}

                <div className="card-body text-center">

                  <h4 className="certificate-title">
                    {certificate.title}
                  </h4>

                  <p className="certificate-issuer">
                    {certificate.issuer}
                  </p>

                  <p className="certificate-date">
                    {new Date(
                      certificate.issue_date
                    ).toLocaleDateString()}
                  </p>

                  {certificate.certificate_url && (
                    <a
                      href={certificate.certificate_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary certificate-btn"
                    >
                      View Certificate
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;