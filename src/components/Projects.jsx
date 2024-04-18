import { RiHandbagLine } from "react-icons/ri";

function Projects() {

  const links = [
    {
        id : 1,
        src: "/myPortfolio.png",
        codeLink: "https://github.com",
        demoLink: "https://netlify.com",
        name: "Project 1",
        tech: "React js, Tailwind CSS, React-Icons, React-Scroll"
    },
    {
        id : 2,
        src: "/addToCart.png",
        codeLink: "https://github.com",
        demoLink: "https://vercel.app/",
        name: "Project 2",
        tech: "React js, Redux, fontAwsome, React-bootstrap, Material UI"
    },
    {
        id : 3,
        src: "/weather.png",
        codeLink: "https://github.com",
        demoLink: "https://netlify.com",
        name: "Project 3",
        tech: "express js, JavaScript, hbs, CSS, Api Integration"
    },
    {
        id : 4,
        src: "/resturant.png",
        codeLink: "https://github.com",
        demoLink: " https://netlify.com",
        name: "Project 4",
        tech: "React js, CSS, JavaScript, BootStrap"
    },
    {
        id : 5,
        src: "/weather.png",
        codeLink: "https://github.com",
        demoLink: "https://netlify.app",
        name: "Project 5",
        tech: "React js, BootStrap, Material UI, CSS"
    },
    {
        id : 6,
        src: "/netflix.png",
        codeLink: "https://github.com",
        demoLink: "https://netlify.app",
        name: "Project 6",
        tech: "Next JS, Tailwind CSS, API Integration, React-Icons"
    },
    {
        id : 7,
        src: "/magicNotes.png",
        codeLink: "https://github.com",
        demoLink: "https://netlify.com",
        name: "Project 7",
        tech: "HTML, CSS, Javascript, BootStrap"
    },
    {
        id : 8,
        src: "/clinic.png",
        codeLink: "https://github.com",
        demoLink: "https://vercel.app/",
        name: "Project 8",
        tech: "HTML, CSS, Javascript, BootStrap"
    },
    {
        id : 9,
        src: "/icoder.png",
        codeLink: "https://github.com",
        demoLink: "https://vercel.app/",
        name: "Project 9",
        tech: "HTML, CSS, Javascript, BootStrap"
    },
];

  return (
    
    <div name="Projects">
    <div className="text-white lg:mt-0">
    <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white"> Projects <span className="text-yellow-700 pl-4"><RiHandbagLine/></span></h2>
    </div>
    </div>
    <div className="flex flex-col justify-center items-center pb-20 lg:flex-row lg:flex-wrap">
        {
            links.map(({id, src, codeLink, demoLink, name, tech}) => {
                return (
                    <div key={id} className="w-72 lg:w-96 pt-4 shadow-xl shadow-black mt-16 lg:mt-12 lg:ml-12 overflow-hidden" data-aos="slide-up">
                      
                        <img className="mt-[-16px] h-48 hover:scale-[1.1] transition-all duration-1000 overflow-hidden" src={src} alt="" />
                        <h4 className="text-center text-yellow-700 font-bold pt-4 uppercase">{name}</h4>
                        <p className="uppercase text-sky-800 font-extrabold text-center text-sm mx-4 mt-2"><span className="text-sky-400">Technology Used :</span> {tech}</p>
                        <div className="flex justify-around text-white py-8 text-xl">
                        <a className="hover:scale-105 duration-200" href={codeLink} target='_blank' rel="noreferrer">Code</a>
                        <a className="hover:scale-105 duration-200" href={demoLink} target='_blank' rel="noreferrer">Demo</a>
                        
                        </div>
                    </div>
                )
            })
        }

    </div>
</div>
  )
}

export default Projects;