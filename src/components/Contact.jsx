import { FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div name="Contact" className="w-full h-full  text-white lg:pb-40">
      <div className="">
        <div className="text-white" >
        <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">Contact Us <span className="text-yellow-700 pl-4"><FiPhone/></span></h2>
    </div>
        <div className="flex justify-center items-center px-8" data-aos="zoom-out">
            <form action="https://getform.io" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent rounded-md text-white focus:outline-none mt-8 border border-yellow-800"/>
                <input type="text" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent rounded-md focus:outline-none mt-10 border border-yellow-800"/>
                <textarea name="message" rows="10" className="p-2 bg-transparent rounded-md text-white mt-10 border border-yellow-800 focus:outline-none" placeholder="Write Message...."></textarea>
                <button type="submit" className="text-white bg-gradient-to-b from-yellow-500 to-yellow-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-400">Send Message</button>
            </form>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Contact;