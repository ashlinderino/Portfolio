import { useEffect, useState } from "react";
import api from "../services/api";
import "./../styles/Hero.css";

import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";

function Hero(){

const [profile,setProfile]=useState(null);

useEffect(()=>{

api.get("profile/")
.then(res=>setProfile(res.data[0]))
.catch(err=>console.log(err));

},[]);

if (!profile) {
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
  className="hero"
  id="hero"
  data-aos="fade-up"
>

<div className="container">

<div className="row align-items-center">

<div className="col-lg-7">

<h5>Hello, I'm 👋</h5>

<h1>{profile.full_name}</h1>

<h3>{profile.designation}</h3>

<p>

{profile.bio}

</p>

<div className="hero-buttons">

<a
href="/resume/ASHLINDERINO_R_RESUME.pdf"
className="btn btn-light"
target="_blank"
rel="noreferrer"
>

Download Resume

</a>

<a
href="#contact"
className="btn btn-outline-light"
>

Contact Me

</a>

</div>

<div className="social-icons mt-4">

<a
href={profile.github}
target="_blank"
rel="noreferrer">

<FaGithub/>

</a>

<a
href={profile.linkedin}
target="_blank"
rel="noreferrer">

<FaLinkedin/>

</a>

<a
href={`mailto:${profile.email}`}>

<FaEnvelope/>

</a>

</div>

</div>

<div className="col-lg-5 text-center hero-image">

<img
src="/profile/me.jpeg"
alt={profile.full_name}
/>

</div>

</div>

</div>

</section>

)

}

export default Hero;