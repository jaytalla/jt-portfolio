import React from 'react'
import Navbar from './components/Navbar'
import KyrieHome from './sections/KyrieHome'
import KyrieStyle from './KyrieStyle.css'
import KyriePopular from './sections/KyriePopular'

const HomeKyrie = () => {
  return (
    <div>
        <Navbar />
        <KyrieHome />
        <KyriePopular />
    </div>
  )
}

export default HomeKyrie