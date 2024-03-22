import React from 'react'
import { Link } from 'react-scroll'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const KyrieFooter = () => {
  return (
    <div className='flex flex-col w-full h-fit md:h-[300px] items-center bg-kyrie-dark p-10'>
        <div className='w-full flex items-center justify-center'>
            <ul className=' hidden
                            md:flex-row md:flex text-kyrie-white justify-start mt-5 space-x-10 font-[OCR] font-thin opacity-80 tracking-widest'>
            <Link to='home' spy={true} smooth={true}>
                <li className='cursor-pointer'>Home</li>
            </Link>
            <Link to='popular' spy={true} smooth={true}>
                <li className='cursor-pointer'>Popular</li>
            </Link>
            <Link to='products' spy={true} smooth={true}>
                <li className='cursor-pointer'>Products</li>
            </Link>
            <Link to='contact' spy={true} smooth={true}>
                <li className='cursor-pointer'>Contact</li>
            </Link>
            </ul>
        </div>
        {/* SOCIAL ACCOUNTS  */}
        <div className='w-full flex space-x-2 justify-center mt-10 text-kyrie-white text-3xl'>
            <a href="https://www.facebook.com/profile.php?id=100086846054467"><FaFacebookSquare /></a>
            <a href="https://www.linkedin.com/in/talla-jay-ray-n-298b58293/"><FaLinkedin /></a>
            <a href="https://github.com/jaytalla"><FaGithubSquare /></a>
        </div>
        <p className='mt-20 text-kyrie-white items-center'>© Jay Ray Talla 2024</p>
    </div>
  )
}

export default KyrieFooter