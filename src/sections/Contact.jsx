import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";

const ThankyouCard = ({handlePopup}) => {
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
            
        </div>
    </div>
  )
}



const Contact = () => {

  const [formData, setFormData] = useState({fname:'', lname: '', email: '', message: ''});
  const [popup, setPopup] = useState(true);


  // Handle popup close and open
  const HandlePopup = () => {
    setPopup((prev) => prev = !prev);
  }

  const HandleInputs = (event) => {
    const {name, value} = event.target;
    // console.log(value);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const SendEmail = () => {
    
  }


  return (
    <section className='flex h-fit 
                        flex-col justify-center items-center md:px-16 w-full md:h-screen bg-jt-grey
                      dark:bg-slate-900 py-24
                        align-middle'>
        
        <div className='w-[50%] h-fit bg-jt-primary-light rounded-xl shadow-2xl
                        dark:bg-jt-dark-primary-neutral'>
          <form action="" className='flex flex-col items-end p-10 space-y-5'>
            <div className='w-full flex justify-center'><h3>Contact Me</h3></div>
            <div className='flex w-full space-x-3 '>
              <input onChange={HandleInputs} name='fname' value={formData.fname} type="text" required placeholder='First Name' className='txtbox'/>
              <input onChange={HandleInputs} name='lname' value={formData.lname} type="text" required placeholder='Last Name' className='txtbox'/>
            </div>
            <input onChange={HandleInputs} name='email' value={formData.email} type="email" required placeholder='Email' className='txtbox'/>
            <textarea onChange={HandleInputs} name='message' value={formData.message} placeholder='Message' rows={5} className='txtbox resize-none'/><br />
            <button type='submit' className='glitchhover dark:text-jt-txt-neon-green max-w-[200px] dark:border-b-jt-txt-neon-green btn-cartoon mt-5'>SEND</button>
          </form>
        </div>
        {
          popup === true ? (
            <ThankyouCard handlePopup={() => HandlePopup()}/>
          ) : <span></span>
        }
    </section>
  )
}

export default Contact