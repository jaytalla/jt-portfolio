import React from 'react'
import HomeImage from '../assets/imgs/profile.jpg'
import TypewriterComponent from 'typewriter-effect'
const Home = ({theme}) => {
  return (
    <section className='grid grid-cols-2 w-full h-screen bg-slate-200 
    dark:bg-slate-900'>
        <div className='flex justify-center items-center dark:bg-jt-dark-primary-dark bg-jt-primary-light px-10'>
            <img draggable={true} src={HomeImage} alt="" className='grayscale dark:grayscale-0 dark:border-jt-txt-neon-green border-jt-dark-primary-dark border-[10px] w-[50%] h-[50%] rounded-2xl' />
        </div>
        <div className='dark:bg-jt-dark-primary-dark bg-jt-primary-light flex flex-col justify-center items-start px-10'>
            <h2 className='dark:text-jt-txt-neon-green text-jt-txt-dark'>
                {
                    theme == "dark" ? <TypewriterComponent options={{strings: ["Hi! I'm Jay Talla"], autoStart: true, loop: true, cursor: '|', deleteSpeed: 2}} />
                    : "Hi! I'm Jay Talla"
                }
            </h2>
            <h3 className='dark:text-jt-txt-neon-green text-jt-txt-dark text-6xl'>
                {
                    theme == "dark" ? <TypewriterComponent options={{strings: ["ANIMATOR / WEBDEV"], delay: 200,  autoStart: true, loop: true, cursor: '|'}} />
                    : "ANIMATOR / WEBDEV" 
                }
            </h3>
            <h5 className='dark:text-jt-txt-white text-jt-txt-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Sed do eiusmod tempor incididunt ut labore.</h5>
            <button className='dark:text-jt-txt-neon-green dark:border-b-jt-txt-neon-green btn-cartoon'>HIRE ME!</button>
        </div>
    </section>
  )
}

export default Home