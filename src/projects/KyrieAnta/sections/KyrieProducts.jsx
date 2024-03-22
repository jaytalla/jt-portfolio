import React, { useState } from 'react'
import kyrieOne from '../assets/imgs/kyrie1.png'
import kyrieTwo from '../assets/imgs/kyrie2.png'
import kyrieThree from '../assets/imgs/kyrie3.png'
import kyrieFour from '../assets/imgs/kyrie4.png'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
const KyrieProducts = () => {
    const [currentImage, setCurrentImage] = useState(kyrieOne);
    const props = { width: 300, zoomWidth: 500, img: currentImage};
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
            <h4 className='group-hover:text-kyrie-white duration-500 text-center' >{desc}</h4>
            <button className='mt-5 kyrie-btn group-hover:bg-kyrie-white group-hover:text-kyrie-dark'>{price}</button>
          </div>
        )
      }
    
    return (
    <section id='products' className='flex flex-col w-full h-fit items-center bg-kyrie-white p-10 md:p-20'>
        {/* PRODUCT VIEW  */}
        <div className='flex flex-col p-10'>
            {/* IMAGE CONTAINER HERE */}
            <div className='flex justify-center bg-kyrie-white w-full h-fit'>
                {/* <img src={currentImage} alt="" /> */}
                <InnerImageZoom className='w-[80%]' src={currentImage} zoomSrc={currentImage} zoomScale={1.2} zoomType='click' moveType='drag' />
            </div>
            {/* SOME IMAGES  */}
            <div className='bg-black w-full'>
                
            </div>
        </div>

        {/* OTHER PRODUCS HERE AND SOME OPTIONS  */}
        <div className='h-fit'>
            <div className='z-[1] grid h-fit

                            sm:grid-cols-2 gap-y-[10vw] mt-10
                            lg:grid-cols-4 gap-x-5 w-full lg:h-full md:p-10'>
                
                {/* SHOE CARD  */}
                <ShoeCard img={kyrieOne} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 15,500"}/>
                <ShoeCard img={kyrieTwo} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 18,190"}/>
                <ShoeCard img={kyrieThree} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 25,999"}/>
                <ShoeCard img={kyrieTwo} desc={"SHOCK WAVE 5 PRO"} title={"KYRIE IRVING X ANTA"} price={"Php 25,999"}/>
            </div>
        </div>
    </section>
  )
}

export default KyrieProducts