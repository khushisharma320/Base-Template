import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaCircleUser } from "react-icons/fa6";

function Testimonial() {

  const services = [
    {
        from: "Anonymous...",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as",
        style: "bg-[#D9D9D9B3]"
    },
    {
        from: "Anonymous...",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as",
        style: "bg-[#d9d9d9e8]"
    },
    {
        from: "Anonymous...",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as",
        style: "bg-[#D9D9D9B3]"
    },
    {
        from: "Anonymous...",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as",
        style: "bg-[#d9d9d9e8]"

    },
    {
        from: "Anonymous...",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as",
        style: "bg-[#D9D9D9B3]"
    },
    {
        from: "Anonymous...",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as",
        style: "bg-[#d9d9d9e8]"
    }
];

const res = {
  0 : {
    items : 1
  },
  768 : {
    items : 4
  }
}

  return (
    <div name="Testimonial">
       <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">What Our Clients Say</h2>
    </div>
    <div className="mx-16" data-aos="zoom-out">
      <OwlCarousel className='owl-theme' animateOut autoplayTimeout={2000} responsive={res} margin={8} autoplay={true} loop>
      {
                    services.map((service, idx) => {
                        return (
                            <div key={idx} className={`flex flex-col text-xl gap-10 font-medium text-center ${service.style} p-4 rounded-lg`}>
                                <span className="flex justify-center"><FaCircleUser className="text-8xl border-4 border-white rounded-full" /></span>
                                <span className="text-base">{service.text}</span>
                                <span className="">{service.from}</span>
                            </div>
                        );
                    })
                }
      </OwlCarousel>
      </div>
    </div>
  )
}

export default Testimonial