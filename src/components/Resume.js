import React from "react";
import ResumeImg from "../assets/resume.jpg";
import Resume from "../Resume/Mano-B-Resume.pdf"

export default function About() {
  return <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt='resume img'/>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">Resume</h1>
          <p className="pb-5">You can view my resume <a className="btn" href={Resume}> Download </a></p>
        </div>
      </div>
    </section>
}
