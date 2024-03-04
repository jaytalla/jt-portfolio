import React, { useEffect } from 'react'
import Kyrie1 from '../assets/imgs/kyrie1.png'
import {motion} from 'framer-motion'
// import {PowerGlitch} from 'powerglitch'

const KyrieHome = () => {
  

  return (
    <div className='flex justify-center items-center w-full h-screen bg-kyrie-bglight-orange'>
        <p className='absolute opacity-20 -mt-20 font-[IMPACT] 
                      text-[18vw] left-[2vw]
                      sm:left-[5vw]
                      md:text-[15vw] text-kyrie-bglight-orange md:left-[15vw] textborder'>Kyrie</p>
        <p className='absolute opacity-20 mt-20 font-[IMPACT] 
                      text-[18vw] right-[2vw]
                      sm:right-[5vw]
                      md:text-[15vw] text-kyrie-bglight-orange md:right-[15vw] textborder'>Anta</p>
        <p className='absolute opacity-50  font-[IMPACT] 
                      text-[20px] left-[6vw] mt-[30vw]
                      sm:left-[9vw] sm:mt-[22vw] sm:text-[3vw]
                      md:text-[1.5vw] md:mt-[13vw] text-kyrie-bglight-orange md:left-[18.5vw] textborder'>New design</p>
        <p className='absolute opacity-50  font-[IMPACT] 
                      text-[20px] right-[6vw] -mt-[24vw]
                      sm:right-[9vw] sm:-mt-[15vw] sm:text-[3vw]
                      md:text-[1.5vw] md:-mt-[9vw] text-kyrie-bglight-orange md:right-[21.7vw] textborder'>Anta</p>
        <motion.p animate={{ opacity:[20,20,20], y: [10, 0, 10], }} transition={{ease:'easeInOut', duration: 5, repeat: Infinity, repeatType: 'reverse'}} className='absolute font-[IMPACT] 
                  text-[18vw] right-[5vw]
                  sm:right-[8vw]
                  md:text-[13vw] text-kyrie-orange md:right-[21vw]'>Anta</motion.p>
        
        {/* IMAGE KYRIE ANTA SHOE  */}
        <motion.img animate={{ scaleX: [-1, -1, -1], rotate: [-30,-28,-30], y: [-10, 10, -10], }} transition={{ease:'easeInOut', duration: 5, repeat: Infinity, repeatType: 'reverse'}} src={Kyrie1} alt="" 
        className='min-w-[250px] w-[40vw] aspect-auto -scale-x-100 rotate-[30deg]'/>
        <motion.p animate={{ opacity:[20,20,20], y: [-10, 0, -10], }} transition={{ease:'easeInOut', duration: 5, repeat: Infinity, repeatType: 'reverse'}} className=' absolute font-[IMPACT] 
                  text-[18vw] left-[5vw]
                  sm:left-[8vw]
                  md:text-[13vw] text-kyrie-orange md:left-[18vw]
                  min-w-[100px]'>Kyrie</motion.p>
    </div>
  )
}

export default KyrieHome