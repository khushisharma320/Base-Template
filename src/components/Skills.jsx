import ProgressBar from '@ramonak/react-progress-bar';
import { MdMenuBook } from "react-icons/md";

function Skills() {

  const Links = [
    {
        img: "/html.jpg",
        style: "shadow-red-400"
    },
    {
        img: "/css.jpg",
        style: "shadow-blue-400"
    },
    {
        img: "/tailwind.avif",
        style: "shadow-white"
    },
    {
        img: "/react.png",
        style: "shadow-sky-400"
    },
    {
        img: "/next.png",
        style: "shadow-green-400"
    },
    {
        img: "/redux.png",
        style: "shadow-purple-400"
    },
    {
        img: "/js.jpg",
        style: "shadow-orange-400"
    },
    {
        img: "/bs.webp",
        style: "shadow-purple-400"
    },
    {
        img: "/git.jpg",
        style: "shadow-white"
    }

];

const skillOne = [
    {
        name: "HTML",
        completed: 90
    },
    {
        name: "JavaScript",
        completed: 80
    },
    {
        name: "Redux",
        completed: 50
    },
    {
        name: "Tailwind CSS",
        completed: 85
    },
];

const skillTwo = [
    {
        name: "CSS",
        completed: 85
    },
    {
        name: "React JS",
        completed: 90
    },
    {
        name: "Next JS",
        completed: 85
    },
    {
        name: "BootStrap",
        completed: 90
    },
];

  return (
    <div name="Skills mt-20 lg:mt-0">
       
                <div className="text-white pb-20">
                <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">Skills <span className="text-yellow-700 pl-4"><MdMenuBook/></span></h2>
    </div>

                    <div className="flex flex-col justify-center items-center pb-20 lg:flex-row lg:flex-wrap">
                        
                {
                                Links.map(({ img, style }, index) => {
                                    return (
                                        <div key={index} className="flex justify-center pb-16 lg:ml-16" data-aos="flip-left">
                                            <div className="w-60 lg:w-80">
                                                <img className={`h-60 lg:w-80 shadow-lg ${style} hover:scale-105 duration-500`} src={img} alt='' />
                                            </div>
                                        </div>
                                    )
                                })
                            }

                    
                    </div>
                  
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly">
                            <div className="w-72 lg:w-96">
                                {
                                    skillOne.map(({ name, completed }, index) => {
                                        return (
                                            <div key={index} className="mb-4">
                                                <p>{name}</p>
                                                <ProgressBar
                                                    completed={completed}
                                                    bgColor="rgb(161 98 7 / var(--tw-text-opacity))"
                                                    animateOnRender={true}
                                                    baseBgColor='#404144'
                                                    borderRadius='10px'
                                                    height='15px'
                                                />
                                            </div>
                                        )

                                    })
                                }
                            </div>
                            <div className="w-72 lg:w-96">
                                {
                                    skillTwo.map(({ name, completed }, index) => {
                                        return (
                                            <div key={index} className="mb-4">
                                                <p>{name}</p>
                                                <ProgressBar
                                                    completed={completed}
                                                    bgColor="rgb(161 98 7 / var(--tw-text-opacity))"
                                                    animateOnRender={true}
                                                    baseBgColor='#404144'
                                                    borderRadius='10px'
                                                    height='15px'
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Skills;