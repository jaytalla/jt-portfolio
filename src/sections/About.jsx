import React, { useEffect, useState } from 'react'
import { TypewriterClass } from 'typewriter-effect'
import HomeImage from '../assets/imgs/profile.jpg'
import { CardWithIcon, ProgressBar } from '../components/instances/CardInstance'
import { PowerGlitch } from 'powerglitch'
import { CiCircleChevDown } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

// PROG LANGUAGES 
import CSHARP from '../assets/icons/csharp.png'
import DART from '../assets/icons/dart.png'
import JAVA from '../assets/icons/java.png'
import JS from '../assets/icons/js.png'
import PHP from '../assets/icons/php.png'
import PYTHON from '../assets/icons/python.png'

// ADOBE
import AI from '../assets/icons/ai.png'
import ANIMATE from '../assets/icons/an.png'
import PREMIERE from '../assets/icons/pr.png'
import PHOTOSHOP from '../assets/icons/ps.png'
import XD from '../assets/icons/xd.png'




const skillsList =[
  {name: "C#", img: CSHARP, desc: "I mainly used C# in Visual Studio to build apps during my high school and college days. I also tinkered with C# in Unity for making games. Although I didn't become an expert, I picked up a bunch of useful stuff that helped me with other coding languages.", percentage: 20},
  {name: "DART", img: DART, desc: "I mainly used Dart programming language during my fourth year of college for our capstone project. We built a cross-platform mobile, web, and desktop app for managing SPAs. I learned a lot about mobile development using Dart and the Flutter framework. Interestingly, it also helped me understand React JS since they're quite similar. Additionally, I combined Dart with PHP for backend development.", percentage: 40},
  {name: "JAVA", img: JAVA, desc: "I've used Java extensively for developing desktop applications, including school management systems, attendance monitoring, and POS systems. It's my favorite language because it's where I really grasped concepts like classes, subclasses, polymorphism, and OOP. I've even dabbled in game development with Java, creating simple games like Snake and platformers by following tutorials on YouTube.", percentage: 70},
  {name: "JS", img: JS, desc: "At first, I wasn't a fan of JavaScript because it felt like you had to do a lot for very little output. However, when I discovered React JS, my interest in JavaScript grew. It felt more familiar, similar to Java and C#, which I was already comfortable with. During college, I also used JavaScript alongside PHP, where I learned about JSON, AJAX, and querying databases.", percentage: 35},
  {name: "PHP", img: PHP, desc: "I wasn't initially a fan of PHP, but I ended up learning a lot from it, mainly through debugging. It was also my first time dealing with real-time databases and updating websites without reloading, which turned out to be quite enjoyable.", percentage: 40},
  {name: "PYTHON", img: PYTHON, desc: "My first encounter with Python was when I attempted to develop an automated attendance system, where the camera would identify individuals. Python seemed like the perfect fit for this task, but I found myself relying heavily on libraries, which made me feel like I wasn't truly learning. Recently, my interest in Python has been reignited, especially after using the Godot game engine. I'm now eager to delve deeper into automation and web scraping to streamline tasks and simplify my workflow.", percentage: 10},
];

const OtherSkillsCard = ({handlePopup}) => {
  return (
    // black bg 
    <div className='fixed flex justify-center items-center w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50'>
        <div className='relative flex flex-col justify-center items-center  
                        w-[100%] p-5
                        md:w-[40%] md:min-w-[500px] h-[80%] bg-jt-primary-white 
                      dark:bg-jt-dark-primary-dark
                        max-w-[700px] md:p-10'>
            <IoIosClose onClick={() => handlePopup()} className='absolute right-1 top-[0px] drop-icon'/>
            <h3>Skills / Tech's</h3>
            <div className='w-full h-full bg-jt-primary-white
                          dark:bg-jt-dark-primary-dark overflow-y-auto'>
                <div className='flex flex-col justify-center items-center w-full h-fit p-5 space-y-5'>
                  <h4 className='mb-5'>PROGRAMMING LANGUAGE</h4>
                  {/* <Skillcard skillname={"React JS"} percentage={10}/>
                  <Skillcard skillname={"React JS"} percentage={40}/>
                  <Skillcard skillname={"React JS"} percentage={40}/>
                  <Skillcard skillname={"React JS"} percentage={40}/> */}
                  {
                    skillsList.map((skill) => {
                      return <Skillcard skillname={skill.name} percentage={skill.percentage} imgName={skill.img} desc={skill.desc} />
                    })
                  }

                  <span className='w-full h-[2px] bg-jt-dark-light opacity-20 mt-5'></span>
                </div>

            </div>
        </div>
    </div>
  )
}

const Skillcard = ({imgName, skillname, percentage, desc}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex flex-col w-full h-fit duration-200 hover:bg-jt-primary-light dark:hover:bg-jt-dark-primary-neutral even:bg-jt-primary-dark even:bg-opacity-10 p-5'>
      <div className='flex w-full items-center'>
        <img src={imgName != null ? imgName : CSHARP} alt="" className='w-[40px] h-[40px]
                                                                        md:w-[80px] md:h-[80px] md:min-w-[80px]' />
        
        {/* PERCENTAGE */}
        <div className='flex flex-col justify-center items-center w-full px-10 py-5 col-span-8'>
          <ProgressBar height={"20px"} val={percentage} />
          <h5 className="mt-2">{skillname}</h5>
        </div>
        <CiCircleChevDown onClick={() => setToggle((prev) => prev = !prev)} style={{rotate: toggle === true ? "180deg" : "0deg", animationDuration:"200ms"}} className='drop-icon' />
      </div>
      {
        toggle === true ? (
          <div className='w-full h-fit p-5 text-center bg-jt-grey
                        dark:bg-jt-dark-primary-neutral mt-2'>
            <p>
              {desc}
            </p>
          </div>
        ) : <span></span>
      }
    </div>
  )
}



const About = ({theme}) => {

    const [viewAllSkills, setViewAllSkills] = useState(true);

    const HandlePopupSkill = () => {
      setViewAllSkills((prev) => prev = !prev)
    }

    useEffect(() => {
       
        const element = document.querySelector('.glitch')
      // PowerGlitch.glitch(element)
        if(theme === "dark") PowerGlitch.glitch(element, {playMode: 'always'});
        else PowerGlitch.glitch(element, {playMode: 'click'});
      }, [theme])
  return (
    <div className='h-fit py-24
                    flex flex-col justify-center items-center w-full bg-jt-grey
                    dark:bg-jt-dark-primary-neutral'>
        <h2 className='pb-0 m-0 mb-2'>About</h2>
        <div className='px-10
                        flex flex-col md:flex-row items-start md:px-16 w-full h-full'>
            {/* SMALL PROFILE CARD  */}
            <div className='w-[100%] h-full flex flex-row mb-5 text-left justify-center
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
            <div className='w-[100%] h-fit flex flex-row items-center text-left justify-center
                            md:w-[80%] md:h-fit bg-jt-primary-light p-5
                            dark:bg-jt-dark-primary-dark'>
                <div className='w-full h-fit'>
                    <h3>About</h3>
                    <p>Hey there, I'm Jay Ray N Talla, a BSIT Graduate passionate about game development, animation, and illustration. I've dabbled in various game engines like Game Maker Studio<span className='font-[GelPen]'> 2</span>, Unity, and Godot, and honed my animation skills using software such as Toon Boom Harmony and Adobe Animate.
                      <br />
                      <br />
                    While I enjoy these creative pursuits, my focus now is on becoming a frontend developer, with plans to delve into backend technologies too. I already have some knowledge in backend operations like CRUD, but mastering frontend development is my current goal. I'm excited to embark on this journey of learning and growth in the dynamic world of web development.
                    </p>
                    <h3 className='mt-5'>Skills</h3>
                    <div className='grid grid-cols-3 md:grid-cols-6 w-full h-fit mt-5'>
                        {/* <CardWithIcon percentage={skillsList[0].percentage} />
                        <CardWithIcon percentage={skillsList[1].percentage} />
                        <CardWithIcon percentage={skillsList[2].percentage} />
                        <CardWithIcon percentage={skillsList[3].percentage} />
                        <CardWithIcon percentage={skillsList[4].percentage} />
                        <CardWithIcon percentage={skillsList[5].percentage} /> */}
                        {skillsList.map((skill) => {
                          return <CardWithIcon imgname={skill.img} percentage={skill.percentage} />
                        })}
                    </div>
                    <button onClick={HandlePopupSkill} className='glitchhover dark:text-jt-txt-neon-green dark:border-b-jt-txt-neon-green btn-cartoon mt-5'>VIEW ALL</button>
                </div>
            </div>
        </div>
        {
          viewAllSkills === true ? (
            <OtherSkillsCard handlePopup={HandlePopupSkill} />
          ) : console.log()
        }
    </div>
  )
}

export default About