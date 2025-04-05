import React from 'react';

const skills = [
  { name: "HTML", icon: "https://imgs.search.brave.com/zvjJ5doqGwuNTGlHWNvIUQZBIibVG4MhslyXHuV5ZT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjViZGNlZjEw/MTRjMGI1ZTQ4OWMu/cG5n" },
  { name: "CSS", icon: "https://imgs.search.brave.com/Z6IBe2hdjdD4NhglY9Mlg9d9orI71D_S-2DB3FVASGg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9jc3MtbG9nby5w/bmc" },
  { name: "JAVASCRIPT", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.facdcafd.png&w=1080&q=75" },
  { name: "REACT.JS", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact.30d27375.png&w=1080&q=75" },
  { name: "NODE.JS", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.d7b11bb2.png&w=1080&q=75" },
  { name: "EXPRESS.JS", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpress.5ee3042e.png&w=1920&q=75" },
  { name: "GIT", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgit.36584d0e.png&w=1080&q=75" },
  { name: "GITHUB", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.9c227b6b.png&w=1080&q=75" },
  { name: "TAILWIND", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftailwind.15a1c491.png&w=1080&q=75" },
  { name: "BOOTSTRAP", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbootstrap.0f1a3928.png&w=1080&q=75" },
  { name: "MONGODB", icon: "https://sumitjangir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmongo-db.ce838d8a.png&w=1080&q=75" },
  { name: "MYSQL", icon: "https://imgs.search.brave.com/QdbtELaxKi5_SzRqEMNqEQCpKKweBk_AX7BxcvmMw-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzcvTXlz/cWwtTG9nby1UcmFu/c3BhcmVudC1CYWNr/Z3JvdW5kLnBuZw" },
];
function Skills() {
  return (
    <div id='skills' className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20 py-16 bg-transparent text-white">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold border-b-2 border-white mb-10 text-center">
        MY SKILLS
      </h1>

      <div className="bg-[rgba(255,255,255,0.08)] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-transparent p-4 sm:p-5 rounded-lg flex flex-col items-center justify-center text-center hover:scale-110 transition transform duration-300 ease-in-out"
            >
              {skill.icon.startsWith("http") ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              ) : (
                <span className="text-4xl">{skill.icon}</span>
              )}
              <p className="mt-3 text-sm sm:text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;