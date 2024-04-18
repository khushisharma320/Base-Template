import ProgressBar from '@ramonak/react-progress-bar';
import { MdMenuBook } from "react-icons/md";

function Skills({props}) {
    
  return (
    <div name="Skills mt-20 lg:mt-0">
       
                <div className="text-white pb-20">
                <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">Skills <span className="text-yellow-700 pl-4"><MdMenuBook/></span></h2>
    </div>

                    <div className=" grid grid-cols-2 lg:grid-cols-4 content-around">
                        
                {
                                props.map(({ sequence, image }) => {
                                    return (
                                        <div key={sequence} className="flex justify-center pb-16" data-aos="flip-left">
                                            <div className="w-40">
                                                <img className={`h-40 w-40 shadow-lg shadow-gray-700 hover:scale-105 duration-500`} src={image.url} alt='' />
                                            </div>
                                        </div>
                                    )
                                })
                            }

                    
                    </div>
                  
                        <div className="flex justify-center">
                            <div className=" grid grid-cols-1 lg:gap-x-10 lg:grid-cols-3">
                                {
                                    props.map(({ sequence, name, percentage }) => {
                                        return (
                                            <div key={sequence} className="mb-4">
                                                <p>{name}</p>
                                                <ProgressBar
                                                    completed={percentage}
                                                    bgColor="rgb(161 98 7 / var(--tw-text-opacity))"
                                                    animateOnRender={true}
                                                    baseBgColor='#404144'
                                                    borderRadius='10px'
                                                    height='15px'
                                                    width='300px'
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