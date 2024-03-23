import React, { useEffect } from 'react'
import ProjKyrie from '../assets/imgs/proj_kyrie.png'
import { PowerGlitch } from 'powerglitch'
import Donut from '../assets/imgs/donut.png'
import CRUD from '../assets/imgs/crud.png'
import WEATHER from '../assets/imgs/weather.png'
import ReactPlayer from 'react-player'

// VIDEOS
import POKEMON from '../assets/vids/pokemon.mp4'


const projectList = [
  {name: "KyriexAnta Website", desc: "Website focusing on frontend.", link: "https://jaytalla.site/iprojects/kyrie-anta/index.html", img: ProjKyrie},
  {name: "Donut Website", desc: "Website focusing on frontend.", link: "https://jaytalla.site/iprojects/donut/index.html", img: Donut},
  {name: "Weather Website", desc: "Website focusing on API.", link: "https://jaytalla.site/iprojects/weather-app/index.html", img: WEATHER},
  {name: "CRUD Site", desc: "Website focusing on backend.", link: "https://jaytalla.site/iprojects/crud/index.html", img: CRUD},
]

const ProjectCard = ({title, img, desc, link}) => {
    
    return (
        <div className='w-full h-fit 
                        md:h-[250px] justify-around
                        dark:border-jt-txt-neon-green border-t-2
                        hover:scale-105 duration-200 ease-out'>
            <img className='w-full h-[200px]
                            md:h-[50%] object-cover' src={img} alt="" />
            <div className='flex p-2 pb-5 flex-col w-full h-[70%] bg-white justify-center items-center 
                            md:p-4 text-center
                            dark:bg-transparent'>
                <h3 className='m-0
                               md:m-2'>{title}</h3>
                <p>{desc}</p>
                <a target='_blank' href={link}><button className='glitchhover m-0 glitch dark:text-jt-txt-neon-green dark:border-b-jt-txt-neon-green btn-cartoon'>VIEW SITE</button></a>
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
                            sm:grid-cols-2
                            md:dark:gap-y-10 
                            md:grid-cols-3 gap-x-5 md:gap-y-16 w-full h-full 
                            lg:grid-cols-4'>
                {/* PROJECT CARD  */}
                {/* <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/>
                <ProjectCard link={"https://jaytalla.site/iprojects/crud/index.html"} title={"Kyrie x Anta"}/> */}
                {
                  projectList.map((project) => {
                    return <ProjectCard link={project.link} title={project.name} desc={project.desc} img={project.img}/>
                  })
                }
                  {/* <ReactPlayer className='col-span-4' light={POKEMON} /> */}
                  {/* <video autoPlay loop muted className="w-full h-full object-cover">
                      <source src={POKEMON} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video> */}
                  
            </div>
            <center>
            <button className='col-span-4 btn-cartoon h-[100px]'>OTHER PROJECTS</button>
            </center>
        </div>
    </section>
  )
}

export default Projects