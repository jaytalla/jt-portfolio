import React, { useEffect } from 'react'
import ProjKyrie from '../assets/imgs/proj_kyrie.png'
import { PowerGlitch } from 'powerglitch'


const ProjectCard = ({title, img, desc, link}) => {
    
    return (
        <div className='w-full h-fit 
                        md:h-[250px] 
                        dark:border-jt-txt-neon-green border-t-2
                        hover:scale-105 duration-200 ease-out'>
            <img className='w-full h-[200px]
                            md:h-[50%] object-cover' src={ProjKyrie} alt="" />
            <div className='flex p-2 pb-5 flex-col w-full h-[70%] bg-white justify-center items-center 
                            md:p-4 text-center
                            dark:bg-transparent'>
                <h3 className='m-0
                               md:m-2'>{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className='glitchhover m-0 glitch dark:text-jt-txt-neon-green dark:border-b-jt-txt-neon-green btn-cartoon'>VIEW SITE</button>
            </div>
        </div>
    )
}

const Projects = ({theme}) => {
    
  return (
    <section className='flex h-fit 
                        flex-col justify-center items-center md:px-16 w-full md:h-screen bg-jt-primary-light
                      dark:bg-slate-900 py-24
                        align-middle'>
        <h2 className='pb-0 m-0 mb-5'>Projects</h2>
        {/* PROJECT CONTAINER  */}
        <div className='w-full h-full px-10
                        md:px-0'>
            {/* SHOW DESCRIPTIONS FOR THE WEBSITE WHEN CLICKED  */}
            <div></div>
            {/* CARD CONTAINER  */}
            <div className='grid grid-cols-1 gap-y-5
                            md:dark:gap-y-10
                            md:grid-cols-4 gap-x-5 md:gap-y-16 w-full h-full '>
                {/* PROJECT CARD  */}
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
                <ProjectCard title={"Kyrie x Anta"}/>
            </div>
        </div>
    </section>
  )
}

export default Projects