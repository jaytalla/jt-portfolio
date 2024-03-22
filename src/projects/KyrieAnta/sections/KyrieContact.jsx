import React from 'react'

const KyrieContact = () => {
  return (
    <section id='contact' className='flex justify-center items-center w-full h-screen bg-kyrie-purple'>
        <div className='md:max-w-[500px]
                        w-[90%] 
                        md:w-[50%] h-fit bg-white rounded-xl shadow-2xl'>
          <form action="" className='flex flex-col justify-center items-center p-10 space-y-4'>
              <h3>PRE-ORDER</h3>
              <input required type="text" name='name' placeholder='Name' className='txtbox' />
              <input required type="text" name='email' placeholder='Email' className='txtbox' />
              <input required type="text" name='phone' placeholder='Phone' className='txtbox' />
              <textarea rows={5} required type="text" name='message' placeholder='Message' className='txtbox resize-none' />
              <button className='kyrie-btn w-full'>PRE-ORDER</button>
          </form>
        </div>
    </section>
  )
}

export default KyrieContact