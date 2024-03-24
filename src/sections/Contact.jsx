import React, { useRef, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import emailjs from '@emailjs/browser';
import Thankyou from '../assets/imgs/ty.png';
import validator from 'validator';
import ReCAPTCHA from "react-google-recaptcha";

const ThankyouCard = ({handlePopup}) => {
  return (
    // black bg 
    <div className='fixed flex justify-center items-center w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50'>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <img src={Thankyou} alt="" className='z-50 grayscale dark:grayscale-0 w-[20%] min-w-[300px]' />
          <div className='relative flex flex-col justify-center items-center  
                          w-[100%] p-5 -mt-20
                          md:w-[70%] md:min-w-[500px] h-[40%] bg-jt-primary-white 
                        dark:bg-jt-dark-primary-dark
                          max-w-[1000px] md:p-10'>
              {/* <IoIosClose onClick={() => handlePopup()} className='absolute right-1 top-[0px] drop-icon'/> */}
              {/* <h3>OTHER PROJECTS</h3> */}
              <p className='text-center my-10 text-lg'>Thank You for Your Interest! <br />
              I appreciate your interest in working with me! I'll be in touch shortly. <br />
              Best regards, <br />
              Talla, Jay Ray N.</p>
              <button onClick={() => handlePopup()} className='glitchhover dark:text-jt-txt-neon-green max-w-[200px] dark:border-b-jt-txt-neon-green btn-cartoon mt-5'>CLOSE</button>
          </div>
        </div>
    </div>
  )
}



const Contact = () => {

  const form = useRef();
  const key = process.env.REACT_APP_CAPTCHA_SITEKEY;
  const [formData, setFormData] = useState({user_name:'', user_lastname: '', user_email: '', message: ''});
  const [popup, setPopup] = useState(true);
  const [capval, setCapVal] = useState(null);

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

  const SendEmail = async(event) => {
    event.preventDefault();
    console.log(validator.isEmail(formData.user_email));

    const checkEmailIfValid = validator.isEmail(formData.user_email);

    // if (checkEmailIfValid === true) {
    //   // checkEmailExistence(formData.user_email);
    //   // let res = await validate(formData.user_email).then((res) => {
    //   //   console.log(res);
    //   // });
    // } 

    if (checkEmailIfValid === true && capval) {
      emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          setPopup(true);
        },
        (error) => {
          // alert('FAILED...', error.text);
          console.log('FAILED...', error.text);
        },
      );
    }
  }


  return (
    <section className='flex h-fit 
                        flex-col justify-center items-center md:px-16 w-full md:h-screen bg-jt-grey
                      dark:bg-slate-900 py-24
                        align-middle'>
        
        <div className='w-[90%]
                        md:w-[50%] h-fit bg-jt-primary-light rounded-xl shadow-2xl
                        md:min-w-[500px]
                        dark:bg-jt-dark-primary-neutral'>
          <form onSubmit={SendEmail} ref={form} action="" className='flex flex-col items-end p-10 space-y-5'>
            <div className='w-full flex justify-center'><h3>Contact Me</h3></div>
            <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row w-full md:space-x-3 '>
              <input onChange={HandleInputs} name='user_name' value={formData.user_name} type="text" required placeholder='First Name' className='txtbox'/>
              <input onChange={HandleInputs} name='user_lastname' value={formData.user_lastname} type="text" required placeholder='Last Name' className='txtbox'/>
            </div>
            <input onChange={HandleInputs} name='user_email' value={formData.user_email} type="email" required placeholder='Email' className='txtbox'/>
            {/* <input onChange={HandleInputs} name='user_email' value={formData.user_email} type="email" required placeholder='Email' className='txtbox'/> */}
            <textarea onChange={HandleInputs} name='message' value={formData.message} placeholder='Message' rows={5} className='txtbox resize-none'/><br />
            <ReCAPTCHA required
              sitekey={"6LcL5KIpAAAAANGEfHchMFlJqaZufqSL1vMpdil_"}
              onChange={(val) => setCapVal(val)}
            />
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