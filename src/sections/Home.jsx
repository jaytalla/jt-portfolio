import React, { useEffect } from 'react'
import HomeImage from '../assets/imgs/profile.jpg'
import TypewriterComponent from 'typewriter-effect'
import {PowerGlitch} from 'powerglitch'
const Home = ({theme}) => {
  
  useEffect(() => {
    // const element = document.querySelector('.glitch');
    // const glitchElementList = document.querySelectorAll('.glitch');
    // const addglitchElementList = document.querySelectorAll('.addglitch');
    // console.log(glitchElementList);
    // if (theme === "light") {
    //   alert('light mode');
    //   glitchElementList.forEach(element => {
    //     element.classList.remove('.glitch')
    //   })
    // } else {
    //   alert('dark mode');
    //   addglitchElementList.forEach(element => {
    //     element.classList.add('glitch')
    //   })
    //   PowerGlitch.glitch(element)
    // }
    // refreshPage();
    // PowerGlitch.glitch('.glitch', {playMode: 'hover'});
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
    <section className='grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-slate-200 
                      dark:bg-slate-900 
                        align-middle'>
        <div className='md:flex justify-end items-center dark:bg-jt-dark-primary-dark bg-jt-primary-light md:px-10
                        hidden '>
            
            <img draggable={true} src={HomeImage} alt="Jay Talla Portfolio Logo" 
            className={'relative left-[30%] glitch grayscale dark:grayscale-0 dark:border-jt-txt-neon-green border-jt-dark-primary-dark border-[10px] w-[50%]  rounded-2xl min-w-[320px]'}
                       /> 
            {/* {
              PowerGlitch.glitch('.glitch', {
                  html: '<p>Hello</p>'
              })
            } */}
              
          
        </div>
        <div className='dark:bg-jt-dark-primary-dark bg-jt-primary-light flex flex-col justify-center md:items-start px-10
                        text-center md:text-left items-center space-y-5'>
            <h2 className='dark:text-jt-txt-neon-green text-wrap text-jt-txt-dark'>
                {
                    theme == "dark" ? <TypewriterComponent options={{strings: ["Hi! I'm Jay Talla"], autoStart: true, loop: true, cursor: '|', deleteSpeed: 2}} />
                    : "Hi! I'm Jay Talla"
                }
            </h2>
            <h3 className='dark:text-jt-txt-neon-green text-jt-txt-dark text-4xl md:text-6xl'>
                {
                    theme == "dark" ? <TypewriterComponent options={{strings: ["ANIMATOR / WEBDEV"], delay: 200,  autoStart: true, loop: true, cursor: '|'}} />
                    : "ANIMATOR / WEBDEV" 
                }
            </h3>
            <p className='dark:text-jt-txt-white text-jt-txt-dark'>A Web Developer specializing in crafting captivating online experiences. <br></br>Let's build something awesome for the web together!</p>
            <button className='glitchhover dark:text-jt-txt-neon-green dark:border-b-jt-txt-neon-green btn-cartoon'>HIRE ME!</button>
        </div>
    </section>
  )
}

export default Home