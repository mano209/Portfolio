import React from "react";
import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1 : 'Hi, My name is B Mano. I am a Frontend web Developer. I built a beautiful Websites with React.js and Tailwind CSS',
    line2 : 'I am proficient in Frontend skills like HTML5, CSS3, Bootstrap, JavaScript, React.js, Redux, Tailwind CSS, and many more.',
    line3 : 'In backend I know Node.js, MySQL',
  }
  return <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} alt="project" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
}
