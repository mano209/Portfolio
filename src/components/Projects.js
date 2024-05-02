import WebsiteImg1 from "../assets/Todo-Screenshot.png";
import WebsiteImg2 from "../assets/Moviesearch-screenshot.png";
import WebsiteImg3 from "../assets/Crud app -Screenshot.png";

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
              className="h-[250px] w-[600px]"
              src={WebsiteImg1}
              alt="project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
              Introducing a to-do app, designed to simplify your daily tasks and boost your productivity!
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  href="https://todo-app-git-main-mano209s-projects.vercel.app/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[250px] w-[600px]"
              src={WebsiteImg2}
              alt="project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
              Get detailed information about cast, summaries and reviews, helping you make what to watch next.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  href="https://search-movies-oiepf60cd-mano209s-projects.vercel.app/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[250px] w-[600px]"
              src={WebsiteImg3}
              alt="project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
              Introducing a CRUD app, the ultimate tool for managing your data with efficiency and ease.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  href="https://crud-app-git-main-mano209s-projects.vercel.app/"
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
