import React from 'react'

const Contact = () => {

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
              <input type="text" required placeholder='First Name' className='txtbox'/>
              <input type="text" required placeholder='Last Name' className='txtbox'/>
            </div>
            <input type="email" required placeholder='Email' className='txtbox'/>
            <textarea placeholder='Message' rows={5} className='txtbox resize-none'/><br />
            <button type='submit' className='glitchhover dark:text-jt-txt-neon-green max-w-[200px] dark:border-b-jt-txt-neon-green btn-cartoon mt-5'>SEND</button>
          </form>
        </div>
    
    </section>
  )
}

export default Contact