import React, { useEffect, useRef, useState } from 'react'
import ProjKyrie from '../assets/imgs/proj_kyrie.png'
import { PowerGlitch } from 'powerglitch'
import Donut from '../assets/imgs/donut.png'
import CRUD from '../assets/imgs/crud.png'
import WEATHER from '../assets/imgs/weather.png'
import YT from '../assets/imgs/yt.jpg'
import ReactPlayer from 'react-player'
import { IoIosClose } from "react-icons/io";

// VIDEOS
import POKEMON from '../assets/vids/pokemon.mp4'
import JULIET from '../assets/vids/juliet.mp4'
import PIKA from '../assets/vids/pika.mp4'
import GIRL from '../assets/vids/cat.mp4'
import ACTION from '../assets/vids/test.mp4'
import HEAD from '../assets/vids/turn.mp4'

// GAMES, XD and WEBSITE PROJECTS
import GAME from '../assets/vids/game.mp4'
import CHAT1 from '../assets/vids/chat.mp4'
import CHAT2 from '../assets/vids/chat2.mp4'
import HAMS from '../assets/vids/hams.mp4'
import XDVID from '../assets/vids/xd.mp4'


const projectList = [
  {name: "KyriexAnta Website", desc: "Website focusing on frontend.", link: "https://jaytalla.site/iprojects/kyrie-anta/index.html", img: ProjKyrie},
  {name: "Donut Website", desc: "Website focusing on frontend.", link: "https://jaytalla.site/iprojects/donut/index.html", img: Donut},
  {name: "Youtube Clone", desc: "First Website focusing on API.", link: "https://jaytalla.site/iprojects/YoutubeClone/index.html", img: YT},
  {name: "Weather Website", desc: "Website focusing on API.", link: "https://jaytalla.site/iprojects/weather-app/index.html", img: WEATHER},
  {name: "CRUD Site", desc: "Website focusing on backend.", link: "https://jaytalla.site/iprojects/crud/index.html", img: CRUD},
]

const videoList = [
  {title: "Pokemon", videoRef: POKEMON},
  {title: "Girl With Cat", videoRef: GIRL},
  {title: "Juliet", videoRef: JULIET},
  {title: "Pikachu", videoRef: PIKA},
  {title: "Action", videoRef: ACTION},
  {title: "Head Turn", videoRef: HEAD},
]

const videoListTwo = [
  {title: "Game made in GMS2", videoRef: GAME},
  {title: "Chat Status", videoRef: CHAT1},
  {title: "Chat App", videoRef: CHAT2},
  {title: "Hospital Management System", videoRef: HAMS},
  {title: "Adobe XD Prototype", videoRef: XDVID},
]


const ProjectCard = ({title, img, desc, link}) => {
    
    return (
        <div className='w-full h-fit 
                        md:h-[250px] justify-around
                        dark:border-jt-txt-neon-green border-t-2
                        hover:scale-105 duration-200 ease-out'>
            <img className='w-full h-[200px] grayscale
                            dark:grayscale-0
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

const OtherProjectsCard = ({handlePopup}) => {
  return (
    // black bg 
    <div className='fixed flex justify-center items-center w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50'>
        <div className='relative flex flex-col justify-center items-center  
                        w-[100%] p-5
                        md:w-[70%] md:min-w-[500px] h-[80%] bg-jt-primary-white 
                      dark:bg-jt-dark-primary-dark
                        max-w-[1000px] md:p-10'>
            <IoIosClose onClick={() => handlePopup()} className='absolute right-1 top-[0px] drop-icon'/>
            <h3>OTHER PROJECTS</h3>
            <div className='w-full h-full bg-jt-primary-white
                          dark:bg-jt-dark-primary-dark overflow-y-auto'>
                <div className='flex flex-col justify-center items-center w-full h-fit p-5 space-y-5'>
                  
                  <h4 className='mb-5'>Game, Prototype and Website</h4>
                    <div className='grid 
                                    grid-cols-1 gap-y-10
                                    md:grid-cols-2
                                    lg:grid-cols-3 w-full h-full '>
                      {/* <VideoCard /> */}
                      {
                        
                        videoListTwo.map((vid) => {
                          return <VideoCard title={vid.title} video={vid.videoRef} />
                        })
                      }
                  </div>
                  
                  <h4 className='mb-5 mt-10'>ANIMATIONS</h4>
                  <div className='grid 
                                  grid-cols-1 gap-y-10
                                  md:grid-cols-2
                                  lg:grid-cols-3 w-full h-full '>
                    {/* <VideoCard /> */}
                    {
                      
                      videoList.map((vid) => {
                        return <VideoCard title={vid.title} video={vid.videoRef} />
                      })
                    }
                  </div>

                  </div>
            </div>
        </div>
    </div>
  )
}

const VideoCard = ({title, video}) => {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true);
    console.log("start")
  };

  const handleMouseLeave = () => {
    setHovered(false);
    console.log("stop")
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div className='flex flex-col justify-center items-center w-[250px] h-[150px] p-5'>
        <h5>{title}</h5>
        <video ref={videoRef} controlsList='noremoteplayback nodownload nodisplay' controls width={"100%"} height={150} autoPlay={hovered} onMouseOver={togglePlay} onMouseLeave={togglePlay} loop muted className="cursor-pointer w-full h-full object-cover">
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.  
        </video>
    </div>
  )
}


const Projects = ({theme}) => {
    
  const [otherProjects, setOtherProjects] = useState(false);

  const HandlePopup = () => {
    setOtherProjects((prev) => prev = !prev)
  }

  return (
    <section className='flex h-fit 
                        flex-col justify-center items-center md:px-16 w-full md:h-screen bg-jt-primary-light
                      dark:bg-slate-900 py-24
                        align-middle'>
        <h2 className='pb-0 m-0 mb-5'>Projects</h2>
        {/* PROJECT CONTAINER  */}
        <div className='w-full h-full px-10 mb-32
                        md:px-0'>
            {/* SHOW DESCRIPTIONS FOR THE WEBSITE WHEN CLICKED  */}
            <div></div>
            {/* CARD CONTAINER  */}
            <div className='grid grid-cols-1 gap-y-5
                            sm:grid-cols-2
                            md:dark:gap-y-10 
                            md:grid-cols-3 gap-x-5 md:gap-y-16 w-full h-full 
                            lg:grid-cols-4'>
           
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
            <button onClick={() => HandlePopup()} className='col-span-4 btn-cartoon h-[100px] '>OTHER PROJECTS</button>
            </center>
        </div>

        {
          otherProjects === true ? (
            <OtherProjectsCard handlePopup={()=>HandlePopup()}/>
          ) : <span></span>
        }

    </section>
  )
}

export default Projects