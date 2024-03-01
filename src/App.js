import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialSide from './components/SocialSide';
import About from './sections/About';
import Home from './sections/Home';
import AnimatedMe from './components/AnimatedMe';
import Projects from './sections/Projects';

function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem("mode") || "light");

  return (
    <>
      <SocialSide />
      {/* <AnimatedMe /> */}
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home theme={theme}/>
      <About theme={theme}/>
      <Projects theme={theme}/>
    </>
  );
}

export default App;
