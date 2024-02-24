import React from 'react'
import { TypewriterClass } from 'typewriter-effect'
import HomeImage from '../assets/imgs/profile.jpg'
import { CardWithIcon, ProgressBar } from '../components/instances/CardInstance'


const About = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-jt-grey
                    dark:bg-jt-dark-primary-neutral'>
        <h2 className='pt-24 pb-0 m-0'>About</h2>
        <div className='flex items-center px-14 w-full h-full'>
            {/* SMALL PROFILE CARD  */}
            <div className='w-[20%] h-[80%] bg-white p-5  mr-2
                            dark:bg-jt-dark-primary-dark'>
                <img className='grayscale
                                dark:grayscale-0' src={HomeImage} alt=""  />
                {/* BASIC INFO  */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <h4 className='m-0'>NAME</h4>
                    <h5 className='m-0 mb-2'>Jay Ray Talla</h5>
                    <h4 className='m-0'>HOBBIES</h4>
                    <h5 className='m-0'>Animation, Illustration and Game Development</h5>
                </div>
            </div>
            <div className='w-[80%] h-[80%] bg-white p-5
                            dark:bg-jt-dark-primary-dark'>
                <div className='w-full h-[30%] '>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit nisl vitae justo facilisis eleifend. Sed luctus, dolor sed fermentum luctus, eros sem ultricies mi, sed vehicula enim justo vel dolor. Integer vitae nisi ut ligula semper vulputate. Sed eu est fermentum, commodo justo at, feugiat libero. In in odio a libero aliquam accumsan. Vestibulum tristique libero sit amet elit pulvinar, sit amet volutpat est ullamcorper. Mauris nec ipsum vitae enim viverra lobortis nec eget purus. Nullam semper eros vitae ipsum posuere, vel ultricies ligula mattis. Quisque eget sodales eros, non eleifend mauris.</p>
                    <h3 className='mt-5'>Skills</h3>
                    <div className='flex w-full h-full mt-10'>
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