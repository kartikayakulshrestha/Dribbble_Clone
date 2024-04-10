import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl"> Home page</h1>
      <a className="mx-[48vw]" href="/signup">Click me</a>
      <Footer />
    </div>
  )
}

export default Home
