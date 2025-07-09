import React from "react";

const projects = [
  {
    title: "Green Cart",
    description: "Developed a modern, responsive gym website using HTML, CSS, and JavaScript.Created structured sections for services, membership plans, trainers, and testimonials.Applied fitness-themed styling, animations, and mobile optimization",
    // image: "https://example.com/task-management.png",
    url: "https://greencart-uuia-8nhzzbyjb-agcode18s-projects.vercel.app/",
  },
 
  {
    title: "Travel Web",
    description: "I developed a Travel Bug website using HTML, CSS, and JavaScript, incorporating smooth animations to create a visually immersive, interactive, and engaging user experience throughout the site.",
    // image: "https://example.com/task-management.png",
    url: "https://cozy-llama-cc3aa2.netlify.app/",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className=" flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 bg-transparent text-white"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold border-b-2 border-white text-center mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.08)] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-2">
              {project.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base">
              {project.description}
            </p>

            <button
              onClick={() => project.url && window.open(project.url, "_blank")}
              className="mt-4 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition cursor-pointer"
            >
              Live Demo
            </button>

            <div className="mt-4">
              {/* <img
                // src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-auto max-h-[200px] object-cover"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
