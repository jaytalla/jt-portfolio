import React, { useEffect, useState } from 'react'

const Navbar = ({theme, setTheme}) => {
    // const [theme, setTheme] = useState("light");
    const SwitchMode = () => {
        const newMode = theme === "dark" ? "light" : "dark"; 
        setTheme(newMode);
        localStorage.setItem("mode", newMode);
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
    <div className='fixed flex justify-center items-center w-full h-[70px] bg-slate-50 dark:bg-slate-950 z-10'>
        <div className='flex justify-center 
                        md:justify-between w-full items-center max-w-[1200px] px-10'>
            <div className='text-2xl text-jt-txt-dark dark:text-jt-txt-neon-green'>
                <a onClick={SwitchMode}><p><h2 className='text-2xl m-0'>JTPortfolio</h2></p></a>
            </div>
            <ul className='hidden
                           md:flex text-jt-txt-dark dark:text-jt-txt-neon-green'>
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