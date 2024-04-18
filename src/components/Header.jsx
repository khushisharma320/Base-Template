import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-scroll";

function Header() {
  const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            name: "Home",
            icon: <IoHomeOutline/>
        },
        {
            id: 2,
            name: "About",
            icon: <FaRegUser/>
        },
        {
          id: 4,
          name: "Skills",
          icon: <GiSkills/>
      },
        {
            id: 3,
            name: "Projects",
            icon: <RiHandbagLine />
        },
       
        {
            id: 5,
            name: "Services",
            icon: <GrCertificate/>
        },
        {
            id: 5,
            name: "TimeLine",
            icon: <GrCertificate/>
        },
        {
            id: 5,
            name: "Testimonial",
            icon: <GrCertificate/>
        },
        {
            id: 6,
            name: "Contact",
            icon: <FiPhone/>
        },
       
    ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-16 text-gray-500 bg-neutral-900 fixed z-40 shadow-xl shadow-gray-800">
            <div className="">
                <h2 className="font-signature font-normal text-2xl text-white">Khushi</h2>
            </div>

            <ul className="hidden md:flex">
                {
                    links.map(({ id, name, icon }) => {
                        return (
                            <li key={id} className="text-gray-500 cursor-pointer px-4 py-1 hover:scale-105 duration-200 hover:text-gray-600 flex"><Link to={name} smooth duration={500}>{name}</Link> <span className="pl-1 pt-1">{icon}</span></li>
                        )
                    })
                }
            </ul>

            <div onClick={() => setNav(!nav)} className="text-gray-500 cursor-pointer pr-4 z-40 md:hidden">
               
                {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
            </div>

            {nav && (

            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-20">
            {
                    links.map(({ id, name, icon }) => {
                        return (
                            <li key={id} className="px-4 cursor-pointer capitalize text-2xl py-6 hover:scale-105 duration-200 hover:text-gray-600 flex" data-aos="zoom-in"><Link onClick={()=> setNav(!nav)} to={name} smooth duration={500}>{name}</Link> <span className="pl-1 pt-1">{icon}</span></li>
                        )
                    })
                }
               
             
            </ul>
            )}


        </div>
  )
}

export default Header