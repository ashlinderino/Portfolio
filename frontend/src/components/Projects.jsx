import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Projects.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

    const [projects,setProjects]=useState([]);

    useEffect(()=>{

        api.get("projects/")
        .then(res=>setProjects(res.data))
        .catch(err=>console.log(err));

    },[]);
if (projects.length === 0) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
    return(

<section
  id="projects"
  className="py-5"
  data-aos="fade-up"
>

<div className="container">

<h2 className="text-center fw-bold mb-5">

Projects

</h2>

<div className="row">

{

projects.map(project=>(

<div className="col-lg-4 mb-4" key={project.id}>

<div className="card project-card">

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="card-body">

<h4>

{project.title}

</h4>

<p>

{project.description}

</p>

<div>

{

project.technologies
.split(",")

.map((tech,index)=>(

<span
key={index}
className="tech-badge"
>

{tech.trim()}

</span>

))

}

</div>

<div className="project-buttons">

<a
href={project.github_link}
target="_blank"
rel="noreferrer"
className="btn btn-dark me-2"
>

<FaGithub/>

</a>

<a
href={project.live_demo}
target="_blank"
rel="noreferrer"
className="btn btn-primary"
>

<FaExternalLinkAlt/>

</a>

</div>

</div>

</div>

</div>

))

}

</div>

</div>

</section>

)

}

export default Projects;