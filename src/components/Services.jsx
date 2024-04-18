import { MdOutlineMenuBook } from "react-icons/md";

function Services() {

  const services = [
    {
        icon: <MdOutlineMenuBook />,
        text: "UI / UX Designing"
    },
    {
        icon: <MdOutlineMenuBook />,
        text: "Web Development"
    },
    {
        icon: <MdOutlineMenuBook />,
        text: "Web Design"
    },
    {
        icon: <MdOutlineMenuBook />,
        text: "App Development"
    },
    {
        icon: <MdOutlineMenuBook />,
        text: "UI / UX Designing"
    },
    {
        icon: <MdOutlineMenuBook />,
        text: "UI / UX Designing"
    }
];

  return (
    <div name="Services" className="mb-12 mt-12 px-12 py-4">
           <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white"> Services <span className="text-yellow-800 pl-4"><MdOutlineMenuBook/></span></h2>
    </div>
            <h3 className="text-xl text-gray-500 font-medium text-center">Here are the services we are providing to you.</h3>

            <div className="grid grid-cols-3 gap-4 mt-12">
                {/* services list */}
                {
                    services.map((service, idx) => {
                        return (
                            <div key={idx} className="flex items-center gap-4 text-sm md:text-xl font-medium bg-[#d9d9d9f0] p-4 rounded-md">
                                {service.icon}
                                <span>{service.text}</span>
                            </div>
                        );
                    })
                }
            </div>

            <div className="mt-12 text-center">
                <button className="bg-yellow-800 font-semibold py-2 px-8 rounded-full">View All</button>
            </div>
            
        </div>
  )
}

export default Services