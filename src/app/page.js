"use client"
import Image from 'next/image'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import Products from './components/Products'
import Career from './components/Career'
import Maps from './components/maps'



export default function Home() {


  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
        <Herosection />
      
      
        <AchievementsSection />
        <div className='spacer layer2'></div>
        <AboutSection />
        <div className='spacer layer1'></div>
        <Products />
        <div className='spacer layer2'></div>
        <Career />
        <div className='spacer layer1'></div>
        <Maps />



      

    </main>
  )
}

