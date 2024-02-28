import React from 'react'
import { FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";


const SocialIcon = ({icon, link, title}) => {
  return (
    <div className='group'>
      <a target='_blank' href={link}>
        {/* <FaGithubSquare className='text-4xl mb-2 cursor-pointer dark:hover:text-jt-txt-neon-green dark:text-white hover:text-purple-500'/> */}
        {icon}
        <span className='absolute scale-0 -mt-10 left-20 w-52 p-2 h-fit dark:text-jt-txt-neon-green dark:bg-jt-dark-primary-dark bg-jt-primary-white pl-4 shadow-xl group-hover:scale-100'>
          <span className='absolute -left-5 top-0 w-0 h-0 
          border-t-[0px] border-r-[25px] border-b-[20px] 
          border-t-transparent border-jt-primary-white dark:border-r-jt-dark-primary-dark  border-b-transparent'></span> 
          {title}</span></a>
    </div>
  )
}

const SocialSide = () => {
  return (
    <div className='z-10 fixed flex-col md:flex justify-center items-center left-0 top-[40%] w-[50px] h-[200px] dark:bg-slate-950 bg-slate-100 shadow-sm shadow-gray-400 dark:shadow-jt-dark-primary-dark
                    hidden md:block'>
        <SocialIcon icon={<FaGithubSquare className='text-4xl mb-2 cursor-pointer dark:hover:text-jt-txt-neon-green dark:text-white hover:text-purple-500' title='Go to my GitHub'/>} 
          link={"https://github.com/jaytalla"} title={"Visit my GitHub page."}
        />
        <SocialIcon icon={<FaFacebookSquare className='text-4xl mb-2 cursor-pointer  dark:hover:text-jt-txt-neon-green dark:text-white hover:text-blue-600' title='Go to my GitHub'/>} 
          link={"https://github.com/jaytalla"} title={"Visit my Facebook account."}
        />
        <SocialIcon icon={<FaLinkedin className='text-4xl dark:hover:text-jt-txt-neon-green dark:text-white mb-2 cursor-pointer hover:text-indigo-500' title='Go to my GitHub'/>} 
          link={"https://www.linkedin.com/in/talla-jay-ray-n-298b58293/"} title={"Visit my LinkedIn account."}
        />
         <SocialIcon icon={<TbBrandYoutubeFilled className='text-4xl  cursor-pointer  dark:hover:text-jt-txt-neon-green dark:text-white hover:text-red-500' title='Go to my GitHub'/>} 
          link={"https://github.com/jaytalla"} title={"Visit my YouTube page."}
        />
        {/* <a target='_blank' href="https://github.com/jaytalla"><FaGithubSquare className='text-4xl mb-2 cursor-pointer    dark:hover:text-jt-txt-neon-green dark:text-white hover:text-purple-500' title='Go to my GitHub'/> */}
        {/* <span className='absolute top-5 left-20 w-52 p-2 h-fit bg-jt-primary-white pl-4 shadow-xl'>
          <span className='absolute -left-5 top-0 w-0 h-0 
          border-t-[0px] border-r-[25px] border-b-[20px] 
          border-t-transparent border-jt-primary-white border-b-transparent'></span> 
          Go to my GitHub page.</span></a>
        <a target='_blank' href="https://www.linkedin.com/in/talla-jay-ray-n-298b58293/"><FaLinkedin className='text-4xl dark:hover:text-jt-txt-neon-green dark:text-white mb-2 cursor-pointer hover:text-indigo-500' title='Go to my GitHub'/></a>
        <a target='_blank' href="https://github.com/jaytalla"><FaFacebookSquare className='text-4xl mb-2 cursor-pointer  dark:hover:text-jt-txt-neon-green dark:text-white hover:text-blue-600' title='Go to my GitHub'/></a>
        <a target='_blank' href="https://github.com/jaytalla"><TbBrandYoutubeFilled className='text-4xl  cursor-pointer  dark:hover:text-jt-txt-neon-green dark:text-white hover:text-red-500' title='Go to my GitHub'/></a> */}
    </div>
  )
}

export default SocialSide