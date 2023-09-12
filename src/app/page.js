import Image from 'next/image'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import Products from './components/Products'
import Career from './components/Career'

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] gap-1">
      <Navbar/>
      <div className='container mx-auto px-12 py-20'>
      <Herosection />
      <AchievementsSection/>
      <AboutSection/>
      <Products/>
      <Career/>

      </div>

    </main>
  )
}
