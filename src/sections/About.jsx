import React, { useEffect } from 'react'
import { TypewriterClass } from 'typewriter-effect'
import HomeImage from '../assets/imgs/profile.jpg'
import { CardWithIcon, ProgressBar } from '../components/instances/CardInstance'
import { PowerGlitch } from 'powerglitch'


const About = ({theme}) => {
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
      // PowerGlitch.glitch(element)
        if(theme === "dark") PowerGlitch.glitch(element, {playMode: 'always'});
        else PowerGlitch.glitch(element, {playMode: 'click'});
      }, [theme])
  return (
    <div className='h-fit py-24
                    flex flex-col justify-center items-center w-full md:h-screen bg-jt-grey
                    dark:bg-jt-dark-primary-neutral'>
        <h2 className='pb-0 m-0 mb-2'>About</h2>
        <div className='px-10
                        flex flex-col md:flex-row items-center md:px-16 w-full h-full'>
            {/* SMALL PROFILE CARD  */}
            <div className='w-[100%] h-fit flex flex-row mb-5 text-left justify-center
                            md:w-[20%] md:h-full md:flex-col items-center md:text-center md:mb-0 bg-jt-primary-light p-5 md:mr-2
                            dark:bg-jt-dark-primary-dark'>
                <img className='glitch w-[50%] md:w-[100%]
                                grayscale
                                dark:grayscale-0' src={HomeImage} alt=""  />
                {/* BASIC INFO  */}
                <div className='items-start ml-5
                                flex flex-col md:ml-0 md:justify-center md:items-center'>
                    <h4 className='m-0'>NAME</h4>
                    <h5 className='m-0 mb-2'>Jay Ray Talla</h5>
                    <h4 className='m-0'>HOBBIES</h4>
                    <h5 className='m-0'>Animation, Illustration and Game Development</h5>
                </div>
            </div>
            <div className='w-[100%] h-fit flex flex-row text-left justify-center
                            md:w-[80%] md:h-full bg-jt-primary-light p-5
                            dark:bg-jt-dark-primary-dark'>
                <div className='w-full h-[30%] '>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit nisl vitae justo facilisis eleifend. Sed luctus, dolor sed fermentum luctus, eros sem ultricies mi, sed vehicula enim justo vel dolor. Integer vitae nisi ut ligula semper vulputate. Sed eu est fermentum, commodo justo at, feugiat libero. In in odio a libero aliquam accumsan. Vestibulum tristique libero sit amet elit pulvinar, sit amet volutpat est ullamcorper. Mauris nec ipsum vitae enim viverra lobortis nec eget purus. Nullam semper eros vitae ipsum posuere, vel ultricies ligula mattis. Quisque eget sodales eros, non eleifend mauris.</p>
                    <h3 className='mt-5'>Skills</h3>
                    <div className='grid grid-cols-3 md:grid-cols-5 w-full h-full mt-10'>
                        <CardWithIcon />
                        <CardWithIcon />
                        <CardWithIcon />
                        <CardWithIcon />
                        <CardWithIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About