import { MdOutlineMenuBook } from "react-icons/md";

function Services({props}) {

  return (
    <div name="Services" className="mb-12 mt-12 px-12 py-4">
           <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white"> Services <span className="text-yellow-800 pl-4"><MdOutlineMenuBook/></span></h2>
    </div>
            <h3 className="text-xl text-gray-500 font-medium text-center">Here are the services we are providing to you.</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                {/* services list */}
                {
                    props.map(({name, image},index) => {
                        return (
                            <div key={index} className="flex items-center gap-4 text-xs md:text-xl font-medium bg-[#d9d9d9f0] rounded-md" data-aos="flip-up">
                               <img width={40} src={image.url} alt="" /> 
                                <span>{name}</span>
                            </div>
                        );
                    })
                }
            </div>

            <div className="mt-20 text-center">
                <button className="bg-yellow-800 font-semibold py-2 px-8 rounded-full">View All</button>
            </div>
            
        </div>
  )
}

export default Services;