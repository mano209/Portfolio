import WebsiteImg1 from "../assets/ecommerce-websites.jpg";
import WebsiteImg2 from "../assets/food-ecommerce.jpg";
import WebsiteImg3 from "../assets/website-blog.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary  mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my projects. I have built these with React, CSS3
            and Redux. Check Them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img
              className="h-[200px] w-[500px]"
              src={WebsiteImg1}
              alt="project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                A Ecommerce website. Built with React JS
              </p>
              <div>
                <a
                  className="btn"
                  href="https://github.com/mano209/TODO-App"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[200px] w-[500px]"
              src={WebsiteImg2}
              alt="project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                Food Ecommerce website like Swiggy, Built with React JS
              </p>
              <div>
                <a
                  className="btn"
                  href="https://github.com/mano209/TODO-App"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[200px] w-[500px]"
              src={WebsiteImg3}
              alt="project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                Basic Blog website . Built with React Js
              </p>
              <div>
                <a
                  className="btn"
                  href="https://github.com/mano209/TODO-App"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
