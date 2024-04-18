import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Hero() {

  const links = [
    {
        id: 1,
        name: (
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href: "https://linkedin.com",
        style: "rounded-tr-md",
        icon: <FaLinkedin size={30}/>
    },
    {
        id: 2,
        name: (
            <>
            GitHub <FaGithub size={30}/>
            </>
        ),
        href: "https://github.com",
        icon:  <FaGithub size={30}/>    
    },
    {
        id: 3,
        name: (
            <>
            Mail <HiOutlineMail size={30}/>
            </>
        ),
        href: "mailto:johndoe@gmail.com",
        icon: <HiOutlineMail size={30}/>
    },
    {
        id: 4,
        name: (
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href: "/johndoe.pdf",
        style: "rounded-br-md",
        download: true,
        icon: <BsFillPersonLinesFill size={30}/>
    },
];

  return (
    <>
    <div name="Home" className="relative z-10 h-screen" data-aos="zoom-out">
            <div className="absolute text-white w-full top-32 lg:top-16 text-center z-10">
                <h2 className="mt-32 lg:mt-48 mb-8 text-4xl md:text-6xl font-extrabold tracking-wide">Hello! <span className="text-yellow-700">I'm John doe</span></h2>
                <h2 className="text-xl md:text-4xl inline"> <span className="font-extrabold"> 
                <Typewriter 
                words={["FrontEnd Developer", "Web Developer", "Web Designer"]}
                loop={Infinity}
                cursor
                cursorBlinking={false}
                cursorColor="#a16207"
                typeSpeed={70}
                deleteSpeed={50}
                />
                 </span></h2>
                <h2 className=" mt-8 text-sm tracking-wide" data-aos="slide-up">I develop 3D visuals, user interfaces and web applications</h2>
                <div className="flex justify-center">
                <button type="button" className="text-white bg-transparent border-2 px-6 py-3 mt-16 mx-auto flex items-center rounded-lg hover:scale-110 duration-400">Portfolio <FaArrowRight /></button>
                </div>
            </div>

            <div className="absolute z-10 top-[72%] lg:flex flex-col md:top-[35%] left-0 md:fixed md:z-50">
            <ul>
                {
                    links.map(({id, name, href, style, download})=>{
                        return (

                            <li key={id} className={"flex justify-between items-center w-40 h-10 md:h-14 px-4 bg-yellow-800 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-500 " + style }><a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">{name}</a></li>
                        )
                    })
                }
            </ul>
        </div>
          
   
        </div>
        </>
  )
}

export default Hero;