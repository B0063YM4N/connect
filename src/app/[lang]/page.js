
import Image from 'next/image'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import Products from './components/Products'
import Career from './components/Career'
import Maps from './components/Gmaps'
import { getDictionary } from '../../../getDictionary'



export default async function Home({params}) {
 const lang = await getDictionary(params.lang);
 

  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] ">
      <Navbar about={lang.links.about} products={lang.links.products} career={lang.links.career} locations={lang.links.locations} contact={lang.links.contact}/>
        <Herosection />
      
      
        <AchievementsSection/>
        <div className='spacer layer2'></div>
        <AboutSection title={lang.abouttitle} desc={lang.aboutdesc} subdesc={lang.aboutsubdesc} subtitle={lang.aboutsubtitle} />
        <div className='spacer layer1'></div>
        <Products />
        <div className='spacer layer2'></div>
        <Career title={lang.careertitle} desc={lang.careerdesc}/>
        <div className='spacer layer1'></div>
        <Maps />



      

    </main>
  )
}

