import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const SwitchMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // alert("working ba?");
    }, [theme])

  return (
    <div className='fixed flex justify-center items-center w-full h-[70px] bg-slate-50 dark:bg-slate-950'>
        <div className='flex justify-between w-full items-center max-w-[1200px] px-10'>
            <div className='text-2xl text-jt-txt-dark dark:text-jt-txt-neon-green'>
                <a onClick={SwitchMode}><p>JTPortfolio</p></a>
            </div>
            <ul className='flex text-jt-txt-dark dark:text-jt-txt-neon-green'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar