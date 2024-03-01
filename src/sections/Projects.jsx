import React, { useEffect } from 'react'
import ProjKyrie from '../assets/imgs/proj_kyrie.png'
import { PowerGlitch } from 'powerglitch'


const ProjectCard = ({title, img, desc, link}) => {
    return (
        <div className='w-full h-[250px] shadow-lg
                        dark:border-jt-txt-neon-green border-t-2
                        hover:scale-105 duration-200 ease-out'>
            <img className='w-full h-[50%] object-cover' src={ProjKyrie} alt="" />
            <div className='flex flex-col w-full h-[70%] bg-white justify-center items-center md:p-4 text-center
                            dark:bg-transparent'>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className='glitchhover dark:text-jt-txt-neon-green dark:border-b-jt-txt-neon-green btn-cartoon'>VIEW SITE</button>
            </div>
        </div>
    )
}

const Projects = ({theme}) => {
    useEffect(() => {

        const element = document.querySelector('.glitch')
        const glitchHover = document.querySelector('.glitchhover')
      // PowerGlitch.glitch(element)
        if(theme === "dark") {
            PowerGlitch.glitch(element, {playMode: 'always'});
          PowerGlitch.glitch(glitchHover, {playMode: 'hover'});
        }
        else {
          PowerGlitch.glitch(element, {playMode: 'click'});
          PowerGlitch.glitch(glitchHover, {playMode: 'click'});
        }
        
      }, [theme])
  return (
    <section className='flex h-fit 
                        flex-col justify-center items-center md:px-16 w-full md:h-screen bg-jt-primary-light
                      dark:bg-slate-900 py-24
                        align-middle'>
        <h2 className='pb-0 m-0 mb-5'>Projects</h2>
        {/* PROJECT CONTAINER  */}
        <div className='w-full h-full px-10'>
            {/* SHOW DESCRIPTIONS FOR THE WEBSITE WHEN CLICKED  */}
            <div></div>
            {/* CARD CONTAINER  */}
            <div className='grid grid-cols-2 gap-y-16
                            md:grid-cols-4 gap-x-5 md:gap-y-5 w-full h-full '>
                {/* PROJECT CARD  */}
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
                <ProjectCard title={"Kyrie x Anta"} />
            </div>
        </div>
    </section>
  )
}

export default Projects