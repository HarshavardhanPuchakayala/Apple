import React from 'react'
import Navabar from './components/Navabar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Model from "./components/Model"
import Features from './components/Features'
import Game from "./components/Game"
import Footer from "./components/footer"
export default function App() {
  return (
    <main className="bg-black">
        <Navabar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <Game/>
        <Footer/>
    </main>
  )
}
