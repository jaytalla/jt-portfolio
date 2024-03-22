import React from 'react'
import Navbar from './components/Navbar'
import KyrieHome from './sections/KyrieHome'
import KyrieStyle from '../../KyrieStyle.css'
import KyriePopular from './sections/KyriePopular'
import KyrieProducts from './sections/KyrieProducts'
import KyrieContact from './sections/KyrieContact'
import KyrieFooter from './sections/KyrieFooter'

const HomeKyrie = () => {
  return (
    <div className=''>
        <Navbar />
        <KyrieHome />
        <KyriePopular />
        <KyrieProducts />
        <KyrieContact />
        <KyrieFooter />
    </div>
  )
}

export default HomeKyrie