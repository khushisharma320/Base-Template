import { FaRegUser } from "react-icons/fa";

function About() {
  return (
    <div name="About" className="w-full h-screen  text-white text-center lg:pb-40">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 lg:flex-row lg:pb-40">

        <div className="flex flex-col justify-center" data-aos="fade-down">
        <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">About <span className="text-yellow-700 pl-4"><FaRegUser/></span></h2>
    </div>
            <p className="px-10 pb-8">As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
            <p className="px-10">
                I have worked as a Front-end Developer, contributing to the UI aspect
                of the application using technologies such as ReactJS, Bootstrap,
                and Material UI. My responsibilities included ensuring
                responsiveness, implementing HTML5, CSS, and JavaScript.
                Additionally.
            </p>
            <a className="hidden lg:block uppercase text-white-700 font-extrabold mt-10 border-2 border-white-700 w-52 p-4 mx-auto" href="/johndoe.pdf" download>Download Resume</a>
        </div>
        <div className="hidden md:block lg:block border-4 w-60 lg:w-full lg:mt-40" data-aos="slide-up">
            <img className="shadow-xl shadow-zinc-600 hover:shadow-sm " src="/about.jpg" alt="" />
        </div>
    </div>
</div>
  )
}

export default About