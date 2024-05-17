//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Menu from './Menu/Menu'
import About from './Components/About/About';
function App() {
  

  return (
    <>
    <Menu/>

    <div className="container">
       <Hero/>
    </div>
    <About/>
    <Navbar/> 
    
       
    </>
  )
}

export default App
