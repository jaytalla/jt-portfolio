import React from 'react'
// import bg from '../assets/bgs/bg3.png'

const KyriePopular = () => {
  return (
    <div className='w-full h-screen bg-black'>
        {/* ROW DESIGN  */}
        <div className={'flex justify-center items-center w-full h-[40%] bg-cover bg-kyrie-dark-purple bg-opacity-80 bg-[url(projects/KyrieAnta/assets/bgs/bg3.png)]  bg-center bg-blend-multiply'}>
          {/* <img src={bg} alt="" className='w-full h-full object-cover' /> */}
          <p className='opacity-20 font-[Impact] 
                      text-[18vw] text-transparent left-[15vw] textborder-orange'>KYRIE IRVING</p>
        </div>
        <section id='Popular' className='w-full h-screen bg-blue-400'>

        </section>
    </div>
  )
}

export default KyriePopular