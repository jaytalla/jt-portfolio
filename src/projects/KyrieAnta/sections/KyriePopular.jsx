import React from 'react'
// import bg from '../assets/bgs/bg3.png'
import kyrieShoeOne from '../assets/imgs/kyrie1.png'
import kyrieShoeTwo from '../assets/imgs/kyrie2.png'
import kyrieShoeThree from '../assets/imgs/kyrie3.png'
import kyrieShoeFour from '../assets/imgs/kyrie4.png'

const ShoeCard = ({title, img, desc, price}) => {
  return(
    <div className='group flex flex-col justify-start items-center 
                    min-w-[250px]
                    bg-kyrie-white hover:bg-kyrie-dark duration-500 ease-out rounded-md shadow-lg md:min-w-[200px] h-[250px] cursor-pointer'>
      <img src={img} alt="" className='absolute w-[13vw]
                                      min-w-[150px] -mt-[1vw]
                                      xl:max-w-[200px] 
                                      sm:min-w-[200px] rotate-[-20deg] md:-mt-[2vw] group-hover:rotate-[-25deg] duration-500 group-hover:-mt-[4vw] '/>
      <h3 className='pt-32 group-hover:text-kyrie-white duration-500'>{title}</h3>
      <h4 className='group-hover:text-kyrie-white duration-500'>{desc}</h4>
      <button className='mt-5 kyrie-btn group-hover:bg-kyrie-white group-hover:text-kyrie-dark'>{price}</button>
    </div>
  )
}

const KyriePopular = () => {
  return (
    <section id='popular' className='overflow-x-clip  w-full 
                    h-fit
                  bg-black'>
        {/* ROW DESIGN  */}
        <div className='z-[10] flex justify-center items-center w-full 
                        h-[8rem]
                        md:h-[20rem] bg-cover bg-kyrie-dark-purple bg-opacity-80 bg-[url(projects/KyrieAnta/assets/bgs/bg3.png)]  bg-center bg-blend-multiply'>
          {/* <img src={bg} alt="" className='w-full h-full object-cover' /> */}
          <p className='opacity-20 font-[Impact] 
                      text-[18vw] text-transparent left-[15vw] textborder-orange'>KYRIE IRVING</p>
        </div>
        <section id='Popular' className='overflow-hidden flex flex-col items-center justify-start p-10 w-full 
                                        h-fit
                                         bg-kyrie-bglight-blue'>
            {/* LINES AT THE BACK  */}
            <span className='z-[0] absolute w-full h-[20px] bg-kyrie-purple mt-[35vw] md:mt-[12vw]'></span>
            <span className='z-[0] absolute w-full h-[20px] bg-kyrie-purple mt-[45vw] md:mt-[15vw]'></span>
            {/* <span className='absolute overflow-x-clip w-[105vw] h-[20px] bg-kyrie-purple rotate-[15deg]'></span> */}
            <h2 className='z-[1]'>FEATURED</h2>
            <h3 className='z-[1]'>PRODUCTS</h3>
            {/* ITEMS  */}
            <div className='z-[1] mt-10 grid max-w-[1500px]
                            grid-cols-1 gap-y-[10vw]
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-4 gap-x-5 w-full h-fit md:p-10
                            xl:mt-10'>
                
                {/* SHOE CARD  */}
                <ShoeCard img={kyrieShoeOne} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 15,500"}/>
                <ShoeCard img={kyrieShoeTwo} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 18,190"}/>
                <ShoeCard img={kyrieShoeThree} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 25,999"}/>
                <ShoeCard img={kyrieShoeFour} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 31,120"}/>
                
            </div>
        </section>
    </section>
  )
}

export default KyriePopular