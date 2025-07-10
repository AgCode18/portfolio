import React from "react";

const projects = [
  {
    title: "Green Cart",
    description: "Green Cart is a full stack grocery shopping application built with React, Node.js, and MongoDB. It features a user-friendly interface for browsing products, adding items to the cart, and managing orders.",
    url: "https://greencart-green-beta.vercel.app/",
  },
  {
    title: "Travel Web",
    description:
      "I developed a Travel Bug website using HTML, CSS, and JavaScript, incorporating smooth animations to create a visually immersive, interactive, and engaging user experience throughout the site.",
    url: "https://cozy-llama-cc3aa2.netlify.app/",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 bg-transparent text-white"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold border-b-2 border-white mb-10 text-center">
        PROJECTS
      </h1>

      {/* ✅ Changed this from grid to flex to center the cards */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.08)] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between max-w-sm w-full"
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

            {/* Optional Image placeholder */}
            {/* <div className="mt-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-auto max-h-[200px] object-cover"
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
