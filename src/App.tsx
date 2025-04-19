import './App.css'
import About from './Components/About'
// import Background from './Components/Background'
import Skill from './Components/Skill'
import First from './Components/First'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
// import SmoothScroll from './Components/Layout'
// import Layout from './Components/Layout'
function App() {

  return (
    <>
    <div className='noise'></div>
     <Navbar />
     <First />
     <About />
     <Skill />
     <Footer />
    </>
  )
}

export default App
