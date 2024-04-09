

import "./output.css"
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  

  return (
    <div>
      <Navbar />
      <div className=" text-5xl font-bold text-center ">
      <a href='/signup'>login Please!!! Click me</a>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
