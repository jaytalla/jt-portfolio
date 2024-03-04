import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import {motion} from 'framer-motion'

const Navbar = () => {
  const [getSidebar, setSidebar] = useState(false);
  return (
    <div className='fixed z-10 flex justify-center w-full h-[70px] bg-kyrie-white'>
      {/* LEFT PART  */}
      <div className='hidden md:block mt-5 w-[13%] h-[50px] min-w-[200px]'>
        <ul className='flex justify-start mt-5 items-end space-x-10 font-[OCR] font-thin opacity-80 tracking-widest'>
          <li>Home</li>
          <li>Popular</li>
        </ul>
      </div>
      {/* MID CUT  */}
      <div className='z-10 flex justify-center w-[150px] h-[140px] cliphalf '>
        <span className='absolute top-4 rounded-[100%] w-[130px] h-[130px] bg-kyrie-bglight-orange shadowcut
                        '></span>
        <span className='absolute top-10 rounded-[100%] w-[60px] h-[50px] bg-kyrie-orange'></span>
      </div>
      {/* <h1 className=''>Sample Text</h1> */}
      <div className='hidden md:block mt-5 w-[15%] h-[50px] min-w-[235px]'>
        <ul className='flex justify-end mt-5 items-end space-x-10 font-[OCR] font-thin opacity-80 tracking-widest'>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      
      <IoMenu onClick={() => setSidebar((prev) => prev = !prev)} 
              className='block absolute left-2 w-14 top-3
                          cursor-pointer md:hidden text-kyrie-orange text-5xl '/>
      {/* SIDEBAR FOR MOBILE  */}
      {
        getSidebar === true ? (
          <motion.div animate={{width: [0, 240]}} transition={{duration: .2, ease: 'easeInOut'}} className='flex w-[50%] h-fit p-5 bg-kyrie-white shadow-lg left-5 top-[10vh] pt-0
                      absolute md:hidden'>
            <div className='mt-5 w-[13%] h-fit min-w-[200px]'>
              <ul className='flex flex-col justify-start mt-5 items-start space-y-2 font-[OCR] font-thin opacity-80 tracking-widest'>
                <motion.li initial={{y:0, opacity:0}} animate={{y: [-10, 0], opacity:[0, 100] }} transition={{duration: .2,  delay: .1, ease: 'easeInOut'}} className='w-full px-2 py-2 hover:bg-kyrie-orange cursor-pointer hover:text-kyrie-white hover:font-extrabold duration-200 ease-in'>Home</motion.li>
                <motion.li initial={{y:0, opacity:0}} animate={{y: [-10, 0], opacity:[0, 100] }} transition={{duration: .2,  delay: .2, ease: 'easeInOut'}} className='w-full px-2 py-2 hover:bg-kyrie-orange cursor-pointer hover:text-kyrie-white hover:font-extrabold duration-200 ease-in'>Popular</motion.li>
                <motion.li initial={{y:0, opacity:0}} animate={{y: [-10, 0], opacity:[0, 100] }} transition={{duration: .2,  delay: .3, ease: 'easeInOut'}} className='w-full px-2 py-2 hover:bg-kyrie-orange cursor-pointer hover:text-kyrie-white hover:font-extrabold duration-200 ease-in'>Products</motion.li>
                <motion.li initial={{y:0, opacity:0}} animate={{y: [-10, 0], opacity:[0, 100] }} transition={{duration: .2,  delay: .4, ease: 'easeInOut'}} className='w-full px-2 py-2 hover:bg-kyrie-orange cursor-pointer hover:text-kyrie-white hover:font-extrabold duration-200 ease-in'>Contact</motion.li>
              </ul>
            </div>
          </motion.div>
        ) : (
          console.log("close sidebar")
        )
      }
    </div>
  )
}

export default Navbar