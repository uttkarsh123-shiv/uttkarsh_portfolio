import './App.css'
import About from './Components/About'
import Background from './Components/Background'
import Skill from './Components/Skill'
import First from './Section/First'
import Footer from "./Components/Footer"
function App() {

  return (
    <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg">
     
     <Background />
     <First />
     <About />
     <Skill />
     <Footer />
    
    </div>
  )
}

export default App
