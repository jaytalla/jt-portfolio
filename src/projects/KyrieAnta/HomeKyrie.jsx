import React from 'react'
import Navbar from './components/Navbar'
import KyrieHome from './sections/KyrieHome'
import KyrieStyle from '../../KyrieStyle.css'
import KyriePopular from './sections/KyriePopular'
import KyrieProducts from './sections/KyrieProducts'
import KyrieContact from './sections/KyrieContact'

const HomeKyrie = () => {
  return (
    <div className=''>
        <Navbar />
        <KyrieHome />
        <KyriePopular />
        <KyrieProducts />
        <KyrieContact />
    </div>
  )
}

export default HomeKyrie