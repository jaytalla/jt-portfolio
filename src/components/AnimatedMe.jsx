import React, { useEffect, useState } from 'react'
import test1 from '../assets/animation/test/test1.png'
import test2 from '../assets/animation/test/test2.png'
import test3 from '../assets/animation/test/test3.png'
import test4 from '../assets/animation/test/test4.png'
import test5 from '../assets/animation/test/test5.png'
import test6 from '../assets/animation/test/test6.png'
import test7 from '../assets/animation/test/test7.png'
import test8 from '../assets/animation/test/test8.png'
import test9 from '../assets/animation/test/test9.png'
import test10 from '../assets/animation/test/test10.png'
import test11 from '../assets/animation/test/test11.png'
import test12 from '../assets/animation/test/test12.png'
const AnimatedMe = () => {
    const animationList = [test1, test2,test3,test4,test5,test6,test7,test8,test9,test10,test11,test12,]
    const [currentFrame, setCurrentFrame] = useState(1);
    
    const [scrollCount, setScrollCount] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check scroll direction
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        if (scrollCount <= 11) {
          setScrollCount(prevCount => prevCount + 1);
        } else {
          setScrollCount(1);
        }
      } else {
        // Scrolling up
        if (scrollCount > 1) {
          setScrollCount(prevCount => prevCount - 1);
        } else {
          setScrollCount(12);
        }
      }
      console.log(scrollCount)
      setLastScrollTop(currentScrollTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, scrollCount]);

  return (
    <div className='z-10 fixed flex-col md:flex justify-center items-center right-0 w-[200px] h-screen 
                    hidden md:block'>
        <img
            src={animationList[scrollCount-1]}
            alt={`Frame ${currentFrame}`}
        />
        {/* <img className='w-full h-full' src={test} alt="" /> */}
    </div>
  )
}

export default AnimatedMe