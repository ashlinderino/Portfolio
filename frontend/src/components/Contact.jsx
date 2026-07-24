import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/Contact.css";

function Contact() {
  const [profile, setProfile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  useEffect(() => {
    api.get("profile/")
      .then((res) => setProfile(res.data[0]))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("contact/", formData)
      .then(() => {
        setSuccess("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(console.error);
  };

  return (
    <section
  id="contact"
  className="py-5"
  data-aos="fade-up"
>
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Contact Me
        </h2>

        <div className="row">

          <div className="col-lg-5 mb-4">

            <div className="contact-info">

              <h3>Let's Connect 👋</h3>

              <p><strong>Email:</strong><br />{profile?.email}</p>

              <p><strong>Phone:</strong><br />{profile?.phone}</p>

              <p><strong>Location:</strong><br />{profile?.location}</p>

            </div>

          </div>

          <div className="col-lg-7">

            <div className="contact-form">

              {success && (
                <div className="alert alert-success">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <input
                  className="form-control mb-3"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button className="btn btn-primary">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;