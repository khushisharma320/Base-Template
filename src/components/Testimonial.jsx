import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial({props}) {

const res = {
  0 : {
    items : 1
  },
  768 : {
    items : 3
  }
}

  return (
    <div name="Testimonial">
       <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">What Our Clients Say</h2>
    </div>
    <div className="ml-20" data-aos="zoom-out">
      <OwlCarousel className='owl-theme' animateOut autoplayTimeout={2000} responsive={res} margin={8} autoplay={true} loop dots = {false}>
      {
                    props.map(({image, review, name}, index) => {
                        return (
                            <div key={index} className={`flex flex-col text-xl gap-10 font-medium bg-slate-600 text-center p-4 w-80 h-[700px] rounded-lg`}>
                                <img src={image.url} alt="" />
                                <span className="text-base text-gray-400">{review}</span>
                                <span className="font-bold text-gray-800">{name}</span>
                            </div>
                        );
                    })
                }
      </OwlCarousel>
      </div>
    </div>
  )
}

export default Testimonial;