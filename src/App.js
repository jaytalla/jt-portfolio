import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SocialSide from './components/SocialSide';
import About from './sections/About';
import Home from './sections/Home';

function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem("mode") || "light");

  return (
    <>
      <SocialSide />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home theme={theme}/>
      <About />
    </>
  );
}

export default App;
