import { RiHandbagLine } from "react-icons/ri";

function Projects({props}) {


  return (
    
    <div name="Projects">
    <div className="text-white lg:mt-0">
    <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white"> Projects <span className="text-yellow-700 pl-4"><RiHandbagLine/></span></h2>
    </div>
    </div>
    <div className="flex flex-col justify-center items-center pb-20 lg:flex-row lg:flex-wrap">
        {
            props.map(({sequence, githuburl, liveurl, title, image, techStack}) => {
                return (
                    <div key={sequence} className="w-72 pt-4 shadow-xl shadow-black mt-16 lg:mt-12 lg:ml-12 overflow-hidden" data-aos="slide-up">
                      
                        <img className="mt-[-16px] h-48 hover:scale-[1.1] transition-all duration-1000 overflow-hidden" src={image.url} alt="" />
                        <h4 className="text-center text-yellow-700 font-bold pt-4 uppercase">{title}</h4>
                        <p className="uppercase text-sky-800 font-extrabold text-center text-sm mx-4 mt-2"><span className="text-sky-400">Technology Used : </span>{techStack.map((elem)=>{ return (<>{elem}</>)})}</p>
                        <div className="flex justify-around text-white py-8 text-xl">
                        <a className="hover:scale-105 duration-200" href={githuburl} target='_blank' rel="noreferrer">Code</a>
                        <a className="hover:scale-105 duration-200" href={liveurl} target='_blank' rel="noreferrer">Demo</a>
                        
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